# Linear Voronoi complexity for parallel lines and synchronized segments

Problem: prb_c5204042a1ae46fe945837450c741dc8

Claim type: Partial result

Exact scope: The nearest-site Voronoi diagram in R^3 has O(n) total faces for n distinct parallel lines, or n parallel congruent segments with common axial endpoints; it is exactly a planar point Voronoi diagram times R.

Fix a unit vector u and pairwise distinct offsets a_i in the perpendicular plane u-perp. First let site i be a_i+R u. Write any query as x=y+zu with y perpendicular to u. Orthogonal projection gives
\[
 \operatorname{dist}(x,a_i+\mathbb Ru)^2=\|y-a_i\|^2.
\]
Thus every nearest-site comparison is independent of z. The three-dimensional diagram is the extrusion of the planar nearest-point diagram of the a_i.

The same conclusion holds for finite sites S_i=a_i+[A,B]u, with the same real A<B for every i. Direct minimization over t in [A,B] gives
\[
 \operatorname{dist}(y+zu,S_i)^2=\|y-a_i\|^2+
 \operatorname{dist}(z,[A,B])^2.
\]
The second term is common to every site, including the end-cap regions, and cancels from all comparisons. Independently chosen axial intervals would not have this property.

For completeness the planar diagram has linear complexity. Its closed cell for a_i is the intersection of the halfplanes ||y-a_i||^2<=||y-a_j||^2, hence is a nonempty convex polygon, possibly unbounded. Each pair of cells has at most one shared edge. Connect adjacent sites through a point in the relative interior of their shared Voronoi edge, drawing the two connecting arcs inside their respective cell interiors. Convexity and a small local perturbation make these arcs disjoint except at their common site; this is a planar embedding of the simple cell-adjacency graph. For n>=3 it has at most 3n-6 edges by Euler's formula, even if disconnected (add planar edges until connected before applying the bound). Each Voronoi edge corresponds to one such adjacency, so there are O(n) edges. Every finite Voronoi vertex has degree at least three; counting edge incidences, or applying Euler to the planar subdivision with its outer face, gives O(n) vertices. Degenerate multiple-site vertices can be counted after a generic perturbation which only refines the subdivision, or directly by the same degree bound. Cases n=1,2 are immediate.

Extrusion sends a planar cell to a three-dimensional cell, a planar edge to a two-dimensional face, and a planar vertex to a one-dimensional face. It introduces no zero-dimensional vertices and no additional axial boundary, since z runs over all R even in the synchronized-segment case. Therefore the total number of faces in the three-dimensional diagram is O(n). This is an infinite structured family, including the literal line and segment variants, but says nothing subcubic for arbitrary skew sites. No general-position assumption forbidding parallelism is smuggled into this explicitly restricted class. The result is a combinatorial count, not a unit-cost assertion for arbitrary real coordinates.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_c5204042a1ae46fe945837450c741dc8.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
