Problem: TOP-3250

Title: EFL for all sufficiently large clique counts, with exact projective-plane families

Claim type: literature report

Scope: The clique-union statement in the prompt follows for every sufficiently large integer $k$ from the established hypergraph theorem of Kang, Kelly, Kühn, Methuku and Osthus. A self-contained construction also proves the exact statement for an infinite family with $k=q^2+q+1$, for every prime $q$, and is certified for $q=2,3,5,7$.

Assumptions and limitations: “Sufficiently large” is retained throughout. The cited theorem does not provide a stated numerical threshold here. The finite computations and special family do not fill every remaining small value of $k$.

Write-up:

The primary paper *A proof of the Erdős–Faber–Lovász conjecture* [1], Theorem 1.1, proves that for every sufficiently large $n$, a linear hypergraph on $n$ vertices has chromatic index at most $n$. The paper appeared in the Annals of Mathematics in 2023 [2]. We apply exactly that quantifier.

Let $Q_1,\ldots,Q_k$ be the complete subgraphs in TOP-3250, each on $k$ vertices. Edge disjointness implies that two different cliques intersect in at most one vertex: two common vertices would give a shared edge.

For each graph vertex $v$ contained in at least two cliques, put
$$
e_v=\{i:v\in V(Q_i)\}\subseteq\{1,\ldots,k\}.
$$
Use these sets as the edges of a hypergraph $\mathcal H$ with vertex set $\{1,\ldots,k\}$. For distinct graph vertices $v,w$, the intersection $e_v\cap e_w$ has size at most one, since two indices in this intersection would make two cliques share the graph edge $vw$. In particular the hyperedges are distinct, and $\mathcal H$ is linear. Vertices belonging to only one clique are deliberately omitted from $\mathcal H$; this avoids introducing repeated singleton hyperedges.

For sufficiently large $k$, [1] colors the hyperedges with $k$ colors so that intersecting hyperedges receive different colors. Give each shared graph vertex $v$ the color of $e_v$. Inside $Q_i$, all shared graph vertices now have distinct colors because their hyperedges all contain $i$. If $t_i$ vertices of $Q_i$ are shared, its remaining $k-t_i$ vertices belong only to $Q_i$. Assign these private vertices the $k-t_i$ unused colors, each once. Private vertices in different cliques are different vertices, so these assignments are consistent.

Each clique is now properly colored. Since every graph edge is in one of the cliques, this colors $G$ properly with $k$ colors. Conversely $Q_i$ is a $K_k$, so $\chi(G)\ge k$. Therefore $\chi(G)=k$ for all sufficiently large $k$, exactly in the graph formulation of the official question. Isolated vertices of $\mathcal H$ cause no difficulty.

Here is an independent family exhibiting extensive overlaps and exact equality. Fix a prime $q$ and set $k=q^2+q+1$. Represent the points of the projective plane by the nonzero vectors of $\mathbb F_q^3$ modulo nonzero scalar multiplication. Likewise represent a line by a nonzero linear form, modulo scalar multiplication. A point $p$ lies on a line $a$ when $a\cdot p=0$.

There are $k$ points and $k$ lines. Each point is on $q+1$ lines: its annihilator is a two-dimensional vector space, with $(q^2-1)/(q-1)=q+1$ one-dimensional subspaces. Distinct points span a two-dimensional subspace and therefore have a unique common line. Dually, distinct lines meet in exactly one point. These are elementary linear-algebra statements over the prime field.

Make one graph vertex $v_a$ for each projective line. For each projective point $p$, create a clique $Q_p$ consisting of the $q+1$ line vertices incident with $p$, together with $k-q-1$ new vertices private to this clique. Define the graph to have exactly the edges in these cliques.

Every $Q_p$ has order $k$. Two cliques share precisely one vertex, the line through their points, so they share no edge. There are $k$ cliques and
$$
|V(G)|=k+k(k-q-1)=k(k-q).
$$
Give the $k$ line vertices distinct colors. In each $Q_p$, fill the private vertices with the colors missing among its incident line vertices. Every clique uses all $k$ colors exactly once, giving $\chi(G)=k$. This proves the official assertion on this family for every prime $q$, independently of a threshold in [1]. It is a concrete example of the projective-plane extremal configuration discussed in [1], with private vertices added to match the prompt's clique order exactly. No newness claim is made.

Verification:

The verifier constructs normalized point and line vectors over $\mathbb F_q$ for $q=2,3,5,7$, records the full incidence lists, builds the clique vertex sets and coloring, and checks every pair of cliques, every clique's colors, every vertex's coverage, and the exact edge count $k\binom{k}{2}$. It obtains $(k,|V(G)|)=(7,35),(13,130),(31,806),(57,2850)$. All arithmetic is integer modular arithmetic, and optimized Python is explicitly refused.

Remaining gaps: This contribution does not prove the prompt for every finite $k$. It relies on [1] for the general sufficiently-large case; it does not independently verify that paper's full nibble and absorption argument. The explicit construction covers infinitely many special instances and the verifier checks four of them.

Models used: GPT-6, exact subversion not supplied, for source checking, reduction, construction, drafting and code.

Human contributors and roles: No human review is claimed. The general theorem is due to the authors of [1].

References:

[1] Dong Yeap Kang, Tom Kelly, Daniela Kühn, Abhishek Methuku and Deryk Osthus, *A proof of the Erdős–Faber–Lovász conjecture*, arXiv:2101.04698, January 25, 2023 version, Theorem 1.1. https://arxiv.org/pdf/2101.04698

[2] Same authors and title, Annals of Mathematics 198 (2023), no. 2; DOI 10.4007/annals.2023.198.2.2. https://annals.math.princeton.edu/2023/198-2/p02



## Reproducibility and review

PASS: prime fields q=2,3,5,7, complete projective incidences, clique intersection/edge union conditions, full exact proper colorings, k=7,13,31,57. Python -O rejected.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://arxiv.org/pdf/2101.04698
https://annals.math.princeton.edu/2023/198-2/p02
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
