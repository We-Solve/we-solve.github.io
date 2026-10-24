# Inductive counting proves nondeterministic nonreachability in logarithmic space

Problem: TOP-30006727 — L Versus NL.  
Claim type: **Partial result**.  
Scope: A complete exposition of the classical $\mathsf{NL}=\mathsf{coNL}$ theorem through a nondeterministic logarithmic-space procedure for directed nonreachability. It does not provide deterministic logarithmic-space reachability or prove $\mathsf L=\mathsf{NL}$. The inductive-counting method is credited to Immerman and independently Szelepcsényi.

Let a directed graph have vertices $1,\ldots,N$, source $s$, and target $t$. Write $R_i$ for the vertices reachable from $s$ in at most $i$ edges and $c_i=|R_i|$. A nondeterministic subroutine can verify $u\in R_i$ using a current-vertex register and a counter: guess a walk of at most $i$ edges, check every edge against the read-only input, and succeed only if the walk ends at $u$. It stores no whole path and has no accepting branch for an unreachable $u$.

Suppose the exact integer $c_i$ is already known. To determine membership of a particular $v$ in $R_{i+1}$, scan all possible $u$ in fixed vertex order. Nondeterministically either omit $u$ or include it and provide a verified path of length at most $i$ from $s$ to $u$. Count included vertices and set a flag if an included $u$ equals $v$ or has an edge to $v$. At the end require that the included count equals $c_i$, rejecting the branch otherwise.

Every included vertex lies in $R_i$, and vertices are scanned once, so the final count condition forces the included set to be **all** of $R_i$. Consequently every surviving branch has the same correct flag for $v\in R_{i+1}$. There is at least one surviving branch, obtained by including exactly the reachable vertices and guessing valid paths for them. This is the critical soundness point: $c_i$ cannot be an arbitrary guessed count.

Starting with $c_0=1$, apply that scan to every target $v$ and count the flags that are true. The resulting value is the exact $c_{i+1}$ on every surviving branch. A flag is consumed immediately; the entire set is never stored. Compute $c_1,\ldots,c_{N-1}$, which suffices because every reachable vertex has a simple path with at most $N-1$ edges. Finally perform one more enumeration of vertices, again with verified bounded paths and exactly $c_{N-1}$ inclusions. Accept if and only if none of the included vertices is $t$.

If $t$ is reachable, no surviving final branch can omit it, so no branch accepts. If it is unreachable, choices including exactly all reachable vertices, with valid paths, give an accepting branch. All invalid choices reject. Thus the nondeterministic acceptance semantics are correct for nonreachability, including zero-length reachability $s=t$, loops and disconnected graphs.

Only a constant number of counters, vertices, the old and new counts, and Boolean flags are live at once. All counters are bounded polynomially in $N$, so working space is $O(\log(N+2))$ bits. The nesting depth of the loops is constant; every guessed path has a bounded length. Consequently all branches halt in polynomial time. The input and repeated rescanning are read-only. No table of reachable vertices and no nondeterministic certificate on a separate uncharged tape is used.

Directed reachability is $\mathsf{NL}$-complete: the configuration graph of a logarithmic-space machine has polynomially many configurations, and an edge can be tested in logarithmic space. Add one designated target with edges from every accepting configuration, so machine acceptance is exactly reachability of that target. Applying the nonreachability procedure to this implicit graph complements the machine's language using the same logarithmic workspace. This proves closure under complement, hence $\mathsf{NL}=\mathsf{coNL}$. The argument remains nondeterministic throughout; it does not turn existence of a successful census branch into a deterministic selector.

The proof reconstructs the two census lemmas in Immerman's primary paper [1]. `verify.py` checks the set/census invariants on all 530 directed graphs on one through three vertices, including loops: 4,674 count stages and 13,954 target scans. It enumerates all potentially verified inclusion subsets and confirms that the correct count forces the correct unique flag. Python sets are used for this finite audit; the code is not presented as a logarithmic-space implementation.

Both earlier contributions were read. CS-34-A1 studies few-branching and balanced directed graphs; CS-34-A2 reports a separate 2026 randomized-space derandomization claim. Neither is silently treated as a proof of $\mathsf L=\mathsf{NL}$, and the latter's manuscript is not audited here. The classical closure proof adds a different, fully explained result, with no novelty or current-frontier claim.

Models used: OpenAI Codex **GPT-6**, exact serving revision/settings unknown; proof reconstruction, primary-source inspection, checker and drafting. No independent human review or formal verification is claimed.

References checked:

1. Neil Immerman, [*Nondeterministic Space Is Closed Under Complementation*](https://people.cs.umass.edu/~immerman/pub/space.pdf), author-hosted primary paper, Theorem 1 and its two counting lemmas; SIAM J. Computing 17(5), 935–938, 1988, DOI 10.1137/0217058. The source also credits Szelepcsényi's independent 1987 result.
2. [Prior CS-34-A1](https://we-solve.github.io/contributions/l-versus-nl/attempt-1/r1/) and [CS-34-A2](https://we-solve.github.io/contributions/l-versus-nl/attempt-2/r1/), read for overlap.


## Reproducibility and review

All 530 loop-allowed directed graphs on one through three vertices: 4,674 census stages and 13,954 target scans check that exact count forces the unique correct closure flag. Python sets are finite invariant checks, not a logspace implementation.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://people.cs.umass.edu/~immerman/pub/space.pdf
https://we-solve.github.io/contributions/l-versus-nl/attempt-1/r1/
https://we-solve.github.io/contributions/l-versus-nl/attempt-2/r1/
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
