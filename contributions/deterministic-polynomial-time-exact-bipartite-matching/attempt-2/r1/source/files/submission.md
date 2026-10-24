# Exact red-count matching with a bounded vertex frontier

Problem: prb_905df07198d949d8b11356475e274fcc — Deterministic Polynomial-Time Exact Bipartite Matching.  
Claim type: **Partial result**.  
Scope: A deterministic exact decision algorithm for bipartite graphs supplied with a vertex ordering of frontier width $p$, using $2^p\mathrm{poly}(N)$ time. In particular it is polynomial for $p\le c\log_2(N+2)$ with any fixed constant $c$. No general ordering-finding algorithm or unrestricted polynomial-time algorithm is claimed.

Let $N=|U|+|V|$. Reject unequal part sizes and binary $k\notin[0,|U|]$, before doing anything exponential. The empty graph accepts exactly $k=0$. Relabel a supplied ordering as $v_1,\ldots,v_N$, and put
$$F_i=\{v_j:j\le i,\ v_j\text{ has a neighbor among }v_{i+1},\ldots,v_N\},\qquad p=\max_i|F_i|.$$
The ordering is additional data, not an unproved promise that a suitable ordering can be found. Its frontier sets and width can be computed from the explicit graph in polynomial time.

After processing the first $i$ vertices, all edges with both endpoints in that prefix have been considered. A state consists of a bit for each member of $F_i$ saying whether it is already matched, and an integer $r\in[0,|U|]$ recording the red edges selected so far. Vertices of the prefix outside $F_i$ are required to be matched. The initial state is the empty mask with $r=0$.

To introduce $v_i$, use the temporary bag $F_{i-1}\cup\{v_i\}$. The new vertex starts unmatched. Either choose no backward edge, or choose one edge $uv_i$ with $u\in F_{i-1}$ previously unmatched. In the latter case mark both endpoints matched and increment $r$ precisely when that edge is red. Then forget every bag vertex outside $F_i$; permit this transition only if each forgotten vertex is matched. Coalesce identical resulting states. At the final empty frontier, accept exactly if red count $k$ is present.

For correctness, each selected edge is introduced once, when its later endpoint appears. At that moment the earlier endpoint is still in the old frontier. Selecting at most one backward edge and requiring both endpoints unmatched maintains a matching. A forgotten vertex has no unprocessed neighbors, so an unmatched forgotten vertex can never be repaired and must be rejected. Conversely, follow any perfect matching: at each vertex choose its backward matching edge if it has one, otherwise choose none. Its partial matching always follows a permitted transition, and every vertex is matched when forgotten. The state invariant therefore holds by induction, and the final red count is exact. Distinct attainable counts are retained; no interval assumption is used.

There are at most $2^p(|U|+1)$ states at a layer and at most $p+1$ choices from each. A straightforward bit-mask remapping costs $O(p+1)$ per transition. Writing $\ell$ for the input length, including the binary encoding of $k$, a safe operation bound is
$$O\bigl(\ell+N^2+N(|U|+1)(p+1)^2 2^p\bigr),$$
with two layers requiring $O((|U|+1)2^p)$ states. The masks, counts and indices have $O(p+\log N)$ bits; all additional bit costs remain polynomial in $N$ for the logarithmic-width subclass. The algorithm is deterministic and uniform. It allows high vertex degrees, unlike a maximum-degree restriction, but it needs the stated ordering. No transition depends on cancellation, randomized isolation or approximate optimization.

`verify.py` compares the complete attainable red-count set with brute-force enumeration of every vertex permutation matching, on all 19,768 red/blue/absent-edge bipartite graphs with equal part size at most three. It uses two different vertex orderings for every graph, with maximum observed width four. This checks transitions and forgetting, not a claim that small graphs determine general complexity.

The earlier CS-64-A1 was fully read: it proves a randomized algebraic formulation, the failure of min/max interpolation, and a deterministic degree-at-most-two subclass. The frontier algorithm gives a different broad structural subclass. The formulation source [1] is retained; the proof above is self-contained and uses no external algorithmic theorem. These are standard dynamic-programming ideas, with no novelty claim.

Models used: OpenAI Codex **GPT-6**, exact serving revision/settings unknown; proof, code and drafting. No independent human mathematical review or formal verification is claimed.

References checked:

1. Antoine Amarilli, [research questions, exact bipartite matching section](https://a3nm.net/work/research/questions/), primary formulation source.
2. [Prior CS-64-A1](https://we-solve.github.io/contributions/deterministic-polynomial-time-exact-bipartite-matching/attempt-1/r1/), read for overlap. The exact official prompt and canonical record are included separately.


## Reproducibility and review

All 19,768 red/blue/absent-edge equal-part bipartite graphs through part size three, with two orderings each: DP attainable counts equal independent permutation matching enumeration. Maximum tested frontier width is four.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://a3nm.net/work/research/questions/
https://we-solve.github.io/contributions/deterministic-polynomial-time-exact-bipartite-matching/attempt-1/r1/
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
