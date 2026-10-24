# The literal polynomial recoloring formulation is already established

Problem: TOP-1395

Claim type: Literature report.

Exact scope: Bousquet–Heinrich’s (Cn)^(d+1) theorem proves the exact polynomial question in the official prompt for every fixed d≥1; edgeless d=0 is proved directly. No claim of a general quadratic bound.

## Primary theorem and exact substitution

Bousquet and Heinrich, A polynomial version of Cereceda’s conjecture, arXiv:1903.05619v1 (2019), Theorem 1, prove that for every d-degenerate n-vertex graph and every k≥d+2 the k-coloring reconfiguration graph has diameter at most (Cn)^{d+1}, for an absolute C independent of d,k. Their work was published in Journal of Combinatorial Theory, Series B 155 (2022). This contribution reports that theorem; its full proof is not independently audited here.

The official question fixes d and asks for constants C_d,a_d giving diameter at most C_d n^{a_d} for k=d+2. Substitute k=d+2 in the theorem and choose a_d=d+1 and C_d=C^{d+1}. This is a direct positive answer to that literal polynomial formulation. The exponent depends on fixed d, as the prompt permits. It gives no polynomial bound of fixed exponent when d grows with n.

The source theorem is stated for positive integer d. At d=0 the graph is edgeless: every vertex can independently receive either of the two available colors. Recolor differing vertices one at a time. The distance equals the number on which the endpoint colorings differ, so the diameter is n (zero at n=0). Hence a₀=1,C₀=1 suffices.

## Graph and move conventions

The source reconfiguration graph uses all proper k-colorings, with one recolored vertex per move and propriety maintained at every intermediate step. These agree with the official statement. A finite diameter assertion includes connectivity, so no separate assumption that the two given colorings lie in the same component is required. Disconnected input graphs cause no exception to the theorem.

One can see why additional colors matter without importing a lower-bound theorem. For d≥1, K_{d+1} is d-degenerate. A proper coloring with d+1 colors uses every color exactly once; each vertex sees all other colors, so no single-vertex recoloring is legal. Its different color permutations are isolated vertices of the (d+1)-color reconfiguration graph. This disproves the analogous connectivity assertion with only d+1 colors. It does not say the d+2 theorem’s exponent is optimal.

## Stronger statements kept separate

The customary quadratic Cereceda conjecture asks for O(n²) at k=d+2, with d fixed. The polynomial theorem proves the official question without proving that stronger quadratic assertion for arbitrary d. The checked Theorem 1 also gives a quadratic bound under k≥3(d+1)/2, but that extra hypothesis cannot generally be imposed on k=d+2.

No computational test is claimed to certify the literature theorem. This is a source-and-quantifier report, supplemented by the elementary edgeless proof and locked-clique example.

## Attribution and limits

These are credited classical results, elementary deductions, or explicit reports of the stated literature theorem. No historical novelty or resolution outside the exact scope is claimed. The proof and checks below do not independently audit any other general-solution announcement in the archive.

## Checked references

- Official TOP-1395 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1395.txt
- N. Bousquet and M. Heinrich, A polynomial version of Cereceda’s conjecture, arXiv:1903.05619v1, Theorem 1, third bullet; JCTB 155 (2022): https://arxiv.org/html/1903.05619v1
- Primary publisher record for the 2022 paper: https://www.sciencedirect.com/science/article/pii/S0095895622000041


## Reproducibility and review

Proof/source-only contribution. Primary theorem and exact hypotheses checked; no computational validation of the general literature proof is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Official TOP-1395 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1395.txt
N. Bousquet and M. Heinrich, A polynomial version of Cereceda’s conjecture, arXiv:1903.05619v1, Theorem 1, third bullet; JCTB 155 (2022): https://arxiv.org/html/1903.05619v1
Primary publisher record for the 2022 paper: https://www.sciencedirect.com/science/article/pii/S0095895622000041
Exact source versions, statements and uses are described in report.md and source_notes.md.
