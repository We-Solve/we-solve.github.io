# Two complete regimes for the hypergraph Vizing-type coloring question

Problem: prb_adfbaea9b09f41f4994167dc08b61f70

Claim type: Partial result.

Exact scope: For arbitrary uniformity d, prove the conjectured bound for every codegree-at-most-two hypergraph; for arbitrary codegree q, determine the exact conflict chromatic number q for complete d-partite transversal hypergraphs.

## The conflict graph and an exact degree calculation

Let H be a finite simple d-uniform hypergraph as in the prompt, d≥2. Its conflict graph has a vertex for each hyperedge, adjacent precisely when the intersection has d−1 elements. Fix a hyperedge e. Each conflicting hyperedge f contains a unique (d−1)-subset S of e, namely e∩f. It cannot contain two distinct such subsets without containing their union e and hence being e itself. Therefore

\[
\deg_{\mathrm{conflict}}(e)=
\sum_{S\subset e,\ |S|=d-1}(\deg_H(S)-1)\le d(r-1).
\]

A graph of maximum degree D has a proper (D+1)-coloring: process its vertices in any order and choose a color unused on already colored neighbors, of which there are at most D. Applied here this gives d(r−1)+1 colors for all H.

When r=2 this is d+1=r+d−1, exactly the conjectured allowance. For r=1 there are no conflicts and one color suffices, also within r+d−1=d. No restriction on the number of vertices or edges, and no partiteness assumption, is needed in these regimes.

The r=2 bound is sharp: on d+1 vertices take all d-subsets as hyperedges. Every (d−1)-subset lies in exactly two of them, while any two hyperedges conflict. The conflict graph is K_{d+1}, requiring d+1 colors.

## An exact family at unbounded r

Now partition the vertex set into d nonempty parts V₁,…,V_d of sizes q₁,…,q_d and take all transversals (one vertex from each part) as hyperedges. Put q=max qᵢ. A (d−1)-set omitting exactly one part lies in qᵢ hyperedges, while other (d−1)-sets lie in none; hence the maximum codegree is exactly q.

Number vertices of Vᵢ distinctly by 0,…,qᵢ−1, viewed in Z/q. Give a transversal with coordinates (x₁,…,x_d) the color x₁+⋯+x_d modulo q. Two conflicting transversals differ in exactly one coordinate. The nonzero difference of two labels from that part has absolute value less than q, so is nonzero modulo q, and the colors differ. This is a q-coloring.

Fix all coordinates except one in a largest part. The q resulting transversals pairwise conflict and form a clique, so q colors are necessary. Thus the exact conflict chromatic number is q, for all dimensions and all positive part sizes. If q=1 there is one hyperedge and the formula still gives one color. Every subhypergraph of such a grid inherits the same q-coloring, though its actual maximum codegree may be smaller than q, so no unproved bound in that smaller parameter is inferred.

## Verification and remaining range

The exact checker verifies all codegree-at-most-two subhypergraphs on at most five vertices for d=2,3,4, checks their conflict degrees and greedy colors, and checks the sharp d+1-vertex examples through d=12. It separately constructs complete transversal grids for all d=2,3,4 and part sizes from one through four, checking every conflicting pair’s sum color.

For arbitrary hypergraphs with r≥3 the generic degree bound exceeds the target by (d−1)(r−2); the grid result does not remove that gap. No coloring claim for all such hypergraphs is made.

## Attribution and limits

These are credited classical results, elementary deductions, or explicit reports of the stated literature theorem. No historical novelty or resolution outside the exact scope is claimed. The proof and checks below do not independently audit any other general-solution announcement in the archive.

## Checked references

- Official prb_adfbaea9b09f41f4994167dc08b61f70 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_adfbaea9b09f41f4994167dc08b61f70.txt
- M. Rosenfeld’s conjecture, posted by M. DeVos, A generalization of Vizing’s Theorem?, Open Problem Garden (2007): https://www.openproblemgarden.org/op/a_generalization_of_vizings_theorem


## Reproducibility and review

Exact standard-library verifier completed with status PASS; see verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

Official prb_adfbaea9b09f41f4994167dc08b61f70 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_adfbaea9b09f41f4994167dc08b61f70.txt
M. Rosenfeld’s conjecture, posted by M. DeVos, A generalization of Vizing’s Theorem?, Open Problem Garden (2007): https://www.openproblemgarden.org/op/a_generalization_of_vizings_theorem
Exact source versions, statements and uses are described in report.md and source_notes.md.
