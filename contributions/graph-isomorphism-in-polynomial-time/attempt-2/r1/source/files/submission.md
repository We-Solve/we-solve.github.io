# A complete deterministic canonization algorithm for forests

Problem: TOP-30006715 — Graph Isomorphism in Polynomial Time.  
Claim type: **Partial result**.  
Scope: A self-contained polynomial-time algorithm for arbitrary finite uncolored forests, including disconnected and empty forests. This classical restricted result does not solve graph isomorphism for arbitrary graphs and is not claimed as new.

For a rooted tree, define its code recursively: a leaf has code `()`, and a vertex has code `(` followed by its children's codes in lexicographic order, followed by `)`. The root is included in this encoding. For an unrooted tree $T$, let $c(T)$ be the lexicographically least code obtained by trying every vertex as root. For a forest, sort the component codes and retain the resulting list, including repetitions. Two forests are isomorphic if and only if these lists agree.

Here is a complete proof. A rooted-tree isomorphism induces a bijection between the root's child subtrees, so induction on the number of vertices proves equal codes for isomorphic rooted trees. Conversely, balanced parentheses uniquely delimit the immediate child codes. Equal root codes therefore give equal multisets of child codes. Pair equal child codes and use the inductively obtained rooted isomorphisms; together with the root correspondence they give an isomorphism of the full rooted trees. Repeated identical subtrees are handled by an arbitrary bijection between their occurrences.

An unrooted isomorphism maps every choice of root to a choice of root in the other tree, so it preserves the multiset of rooted codes and in particular its least member. Conversely, equal least members are codes of some rooting of each tree, and the rooted result supplies an unrooted isomorphism. Finally, a graph isomorphism bijects connected components. Equality of the sorted component-code lists is therefore necessary and sufficient, by applying the tree result and pairing repeated components.

The empty forest has the empty list as its code. An isolated vertex contributes `()`. First verify that the inputs are forests: find components by a graph traversal, and in each check that the number of edges is one less than the number of vertices. For a connected simple graph, this condition is equivalent to acyclicity: a traversal tree already uses exactly that many edges, and any extra edge creates a cycle. If a graph fails this restriction, the restricted algorithm makes no assertion about its general isomorphism class.

This is a uniform polynomial-time construction with explicit strings. Each rooted code has $2|T|$ characters. At most $O(|T|^2\log(|T|+1))$ character work per root is a safe upper bound: sum the child-sort comparison counts over vertices, bound each comparison by $O(|T|)$ characters, and include all concatenation. Trying all roots yields $O(n^3\log(n+1))$ character work for the whole forest, with polynomial memory. No hashing, random collision assumption, free symbolic string comparison, or unproved integrality optimization is used. Faster classical tree methods exist; optimality of this elementary implementation is not asserted.

For context, Babai's primary manuscript [1] gives a quasipolynomial general-graph algorithm; that bound does not imply a polynomial bound. Lindell's primary publication [2] establishes the stronger logspace tree-canonization result. Our explicit string algorithm does not claim Lindell's memory bound.

`verify.py` enumerates every labelled forest on at most five vertices, 340 forests in total. It compares the full code partition with the independently computed minimum adjacency string over every vertex permutation. Agreement is checked in both directions, so a collision or an erroneous distinction would fail. These finite checks test the implementation; the induction above proves the all-size statement.

The prior CS-32-A1 was read. It studies fractional/spectral relaxations and a rounding threshold, not this complete forest algorithm. This report neither certifies nor refutes the numerical algorithms listed in the official prompt. The unrestricted deterministic polynomial-time target remains unanswered here.

Models used: OpenAI Codex **GPT-6**, exact serving revision/settings unknown; proof exposition, primary-source inspection, code and drafting. No human mathematical review or formal theorem-prover verification is claimed.

References checked:

1. László Babai, [*Graph Isomorphism in Quasipolynomial Time*](https://arxiv.org/pdf/1512.03547), arXiv:1512.03547v2, abstract and main complexity statement. The full proof is not independently certified here.
2. Steven Lindell, [*A Logspace Algorithm for Tree Canonization*](https://doi.org/10.1145/129712.129750), STOC 1992; [author-institution record](https://scholarship.haverford.edu/compsci_facpubs/24/). Only the credited theorem statement is used for context.
3. [Prior CS-32-A1](https://we-solve.github.io/contributions/graph-isomorphism-in-polynomial-time/attempt-1/r1/), read for overlap.


## Reproducibility and review

340 labelled forests on zero through five vertices: explicit canonical codes agree in both directions with minimum adjacency strings under all vertex permutations. The induction proves the all-size claim.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://arxiv.org/pdf/1512.03547
https://scholarship.haverford.edu/compsci_facpubs/24/
https://we-solve.github.io/contributions/graph-isomorphism-in-polynomial-time/attempt-1/r1/
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
