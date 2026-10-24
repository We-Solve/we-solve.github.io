# ICP for common bases of arbitrary partition matroids

Problem: TOP-30001931

Claim type: Partial result

Exact scope: The intersection of two partition-matroid base polytopes has ICP, allowing arbitrary integer block capacities, not only capacity-one perfect matchings.

Take two partitions of a finite ground set E, with integer capacities a_A and b_B. Assume each matroid has bases attaining all its block capacities and the two total ranks agree. Their common-base polytope is
\[
 Q=\{x\in[0,1]^E:\ \sum_{e\in A}x_e=a_A,\quad
 \sum_{e\in B}x_e=b_B\}.
\]
Empty intersections are excluded. Partition-matroid base polytopes individually have this description: in each block the vertices of a fixed-sum cube slice are the zero-one vectors of the specified sum. Each partition matroid is strongly base orderable: pair elements of two bases within each block, fixing their common elements, and swap any subset of these pairs.

First Q is integral. Associate an edge e to its two partition blocks, obtaining a bipartite multigraph. If a feasible vector is fractional, its fractional-edge subgraph has no vertex of degree one: the sum at that block is integral, whereas all other incident coordinates are integral. A nonempty finite graph of minimum degree at least two has a cycle (parallel edges give a length-two cycle). Bipartiteness makes every such cycle even. Adding and subtracting a sufficiently small amount alternately on its edges preserves every block sum and keeps coordinates in [0,1]. Hence the fractional point is not extreme. Every vertex is zero-one, so Q is exactly the convex hull of common bases.

We prove the needed stronger lattice fact rather than identify ICP with integrality. Let any integral polytope be an affine slice of a zero-one cube with no other inequalities. Every face is obtained by fixing additional coordinates to zero or one: a face's active inequalities are among the cube inequalities. Such a polytope has a triangulation into lattice-unimodular simplices. Induct on face dimension. Select a vertex v of a face F, triangulate recursively every facet not containing v, and cone those simplices to v, using a consistent fixed vertex order on all faces (the pulling construction). Rays from v through F show coverage; shared face triangulations give disjoint relative interiors. Each selected facet fixes some coordinate x_e=c opposite v, where c and v_e are 0 and 1 in some order. Its lattice height from v is one: the integer coordinate functional takes difference one, so is primitive on the affine lattice of F. A unimodular facet simplex coned from height one is unimodular, by extending a lattice basis of the facet kernel by a vector of coordinate value one. This proves the induction, including dimension-zero faces.

Given k>=1 and w integral in kQ, put y=w/k and choose a simplex conv(v_0,...,v_t) of this triangulation containing y. Write y=sum(lambda_i v_i), lambda_i>=0, sum lambda_i=1. In the affine lattice of Q, the differences v_i-v_0 of this full-dimensional simplex form a lattice basis. Thus
\[
 w-kv_0=\sum_{i=1}^t k\lambda_i(v_i-v_0)
\]
has integer coefficients k lambda_i. The remaining coefficient k lambda_0=k-sum(i>0)k lambda_i is also integral. These nonnegative integer coefficients sum to k, and the simplex vertices are affinely independent. This is exactly ICP.

For a zero-dimensional Q use its sole integral point with coefficient k. Redundant block equations, zero capacities, capacities equal to block size, and parallel ground elements cause no change in the argument. The result is a genuine common-base subclass of the prompt; it does not cover general strongly base orderable matroids. In particular no arbitrary common-base polytope is assumed to have coordinate-width-one facets.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30001931.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
