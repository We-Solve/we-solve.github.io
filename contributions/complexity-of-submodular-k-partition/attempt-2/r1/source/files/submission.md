# The general four-partition theorem and an exact obstruction to its naive extension

Problem: TOP-30004898 — Complexity of Submodular $k$-Partition.  
Claim type: **Literature report**.  
Scope: A checked primary-source update for unrestricted submodular functions at $k=4$ and symmetric functions at $k=5$, plus an exact replay of the source's eight-vertex incompatibility example. This does not classify all fixed $k$ or certify the complete published proof independently.

Hirayama, Liu, Makino, Shi and Xu [1], Theorem 6.1, give an exact algorithm for minimum **four** nonempty parts of a general submodular function in $O(n^6\tau(n))$ time, where $\tau(n)$ is the time for submodular-function minimization. No monotonicity or symmetry hypothesis is imposed there. Their Corollary 6.1 gives $O(n^{14}\tau(n))$ time for **five** parts when the function is symmetric. These are credited published results. In a value-oracle arithmetic model they give polynomial oracle/arithmetic complexity; for a finite binary-value representation, the value-evaluation and submodular-minimization bit costs must also be included.

This updates the earlier CS-376-A1, which contains a two-part identity and a counterexample to repeated greedy splitting but does not cite this four-partition algorithm. It is not legitimate to infer the theorem simply from the existence of good two-part cuts. The new ingredient is a compatibility theorem for optimal three- and four-partitions, with size restrictions handled separately; the source's full case analysis is a credited input here.

We give a reproducible exact check of why the obvious next compatibility statement fails. Take vertices $0,\ldots,7$ and edges
$$01,12,02,15,23,24,25,34,56,57,67.$$
Every edge has weight one except $12$, whose weight is $1/2$. Let $c(S)$ be the weight of the graph cut of $S$, and use $f(S)=c(S)/2$. Then $f$ is a nonnegative symmetric submodular function. To see submodularity, check the contribution of one edge: its cut indicator satisfies the submodular inequality, and a nonnegative weighted sum preserves it. The half factor makes the official partition objective $\sum_i f(V_i)$ equal to the weight of edges crossing between different parts, since each crossing edge appears in exactly two cuts.

Exact enumeration gives the unique unordered optimal partitions
$$X=\{\{0\},\{1\},\{2,3,4\},\{5,6,7\}\},\quad f(X)=9/2,$$
$$Y=\{\{0,1,2,5\},\{3\},\{4\},\{6\},\{7\}\},\quad f(Y)=6.$$
Here $f(X)$ denotes the sum of $f$ on its parts. The source's relevant compatibility notion would require at least three of the four parts of $X$ to be contained in parts of $Y$. Only $\{0\}$ and $\{1\}$ are contained; each of the two larger parts meets three different $Y$-parts. Thus this unique minimum four-partition is incompatible with the unique minimum five-partition. The example is credited to §7 of [1], not presented as a new construction.

The finite certificate is exhaustive: `verify.py` generates unordered partitions by restricted-growth labels, so each partition is visited once. It evaluates all 1,701 four-partitions and 1,050 five-partitions. All weights are multiplied by two for integer comparisons; the minima are respectively nine and twelve in that scaling, with exactly one minimizer each. It additionally checks all 65,536 pairs of subsets for the defining submodular inequality and verifies the compatibility count of two. No floating-point comparisons or numerical optimization are used.

This obstruction also yields arbitrarily large examples. Replace each original vertex by a clique of $q$ labelled clones, put one original-weight edge between fixed representatives for each original edge, and give every internal clique edge weight ten. The displayed intact-clique partitions still cost $9/2$ and six. Splitting any clone clique crosses an internal edge of weight ten, so cannot be optimal for either objective. Every optimum therefore contracts to an optimum of the original graph, preserving uniqueness and incompatibility. This is a direct verification of the source's suggested clique-blowup mechanism, for all integers $q\ge1$.

The obstruction refutes that proposed extension of the compatibility property; it does not refute every polynomial algorithm for five or more parts. The symmetric five-partition result above uses a separate reduction and remains fully consistent with the graph example. The source's 2023 discussion leaves the all-fixed-$k$ question as future work; this report does not certify an exhaustive literature frontier through 2026. Nor does polynomial time for a fixed $k$ imply a polynomial whose exponent is independent of variable input $k$.

Models used: OpenAI Codex **GPT-6**, exact serving revision/settings unknown; primary-source inspection, normalization, exact checker and proof exposition. No independent human mathematical review or theorem-prover verification is claimed.

References checked:

1. Tsuyoshi Hirayama, Yuhao Liu, Kazuhisa Makino, Ke Shi, Chao Xu, [*A Polynomial Time Algorithm for Finding a Minimum 4-Partition of a Submodular Function*](https://keshi.pro/files/papers/sub4part-journal.pdf), author-hosted journal manuscript, especially Theorem 6.1, Corollary 6.1 and §7; DOI 10.1007/s10107-023-02029-0. The SODA 2023 version is [DOI 10.1137/1.9781611977554.ch64](https://epubs.siam.org/doi/10.1137/1.9781611977554.ch64).
2. [Prior CS-376-A1](https://we-solve.github.io/contributions/complexity-of-submodular-k-partition/attempt-1/r1/), read for overlap.


## Reproducibility and review

Exact integer enumeration of all 1,701 four-partitions and 1,050 five-partitions finds unique source optima of 9/2 and 6 and compatibility count two; all 65,536 subset-pair submodular inequalities checked. Full published polynomial algorithm not implemented.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://keshi.pro/files/papers/sub4part-journal.pdf
https://epubs.siam.org/doi/10.1137/1.9781611977554.ch64
https://we-solve.github.io/contributions/complexity-of-submodular-k-partition/attempt-1/r1/
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
