# The exact critical-number Arnold bound for nondegenerate maps of aspherical surfaces

Problem: TOP-30006772

Claim type: Literature report

Exact scope: For every closed connected symplectic surface of genus g>=1, every Hamiltonian diffeomorphism whose fixed points are nondegenerate satisfies #Fix>=2g+2>=Crit(M). This uses the established nondegenerate Floer bound and an explicit surface Morse-function upper bound; no assertion about arbitrary degenerate maps is inferred.

## The established input and its hypotheses

The nondegenerate Hamiltonian Floer theorem gives at least the sum of the Betti numbers of M over a field when M is closed and symplectically aspherical. This is the classical pi_2(M)=0 case of Floer's Arnold theorem, explained in [1, Sections 1.1 and 3.5]. Nondegeneracy means det(I-d phi_x) is nonzero at every fixed point. We use only this classical case, with coefficients F_2. Its compactness, transversality and continuation results are external inputs.

Let M be a closed connected symplectic surface of genus g>=1. Its symplectic form orients it, and the classification of surfaces gives pi_2(M)=0. Hence there are no spherical area or first-Chern-class ambiguities in applying this version of Floer theory. The ordinary Betti numbers over F_2 are 1,2g,1, and therefore

\[
\#\mathrm{Fix}(\phi)\geq 1+2g+1=2g+2.
\]

In the Hamiltonian formulation the relevant contractible one-periodic orbits give fixed points by x(t)->x(0). Uniqueness of the Hamiltonian ODE makes this assignment injective; counting only contractible orbits thus gives a valid lower bound for all fixed points. Nondegeneracy and compactness imply the fixed set is finite: it is closed, every point is isolated, and an infinite subset of a compact space would have an accumulation point in that set.

## Why this actually bounds the prompt's Crit(M)

The prompt minimizes over every smooth function, including degenerate ones. It is not legitimate to replace that minimum by a Morse number in general. Here an upper bound in the correct direction suffices.

A genus-g oriented surface has a smooth handle decomposition with one 0-handle, 2g 1-handles and one 2-handle. Start with a disk, attach 2g orientable bands in the usual polygon presentation, and cap the remaining boundary circle by a disk. The standard handle-to-Morse construction places one nondegenerate critical point of index j in each j-handle and arranges distinct critical levels. Thus there exists a smooth Morse function with exactly 2g+2 critical points.

As every Morse function is among the smooth functions allowed in the minimum,

\[
\mathrm{Crit}(M)\leq2g+2\leq\#\mathrm{Fix}(\phi).
\]

This proves exactly the required inequality on the stated class. It does not require computing Crit(M), or asserting equality with the Morse minimum. The order of the inequalities is essential: a lower bound on a Morse number alone would not be enough.

## Scope audit and remaining gap

The earlier exploratory contribution proves an exact bound under a cotangent-neighborhood graph hypothesis and analyzes auxiliary-variable elimination. The present subcase imposes no smallness or graph condition on phi; it applies the nondegenerate global Floer bound to every closed positive-genus surface. The later contribution reports a distinct higher-dimensional degenerate counterexample claim, which is neither used nor audited here.

No perturbation-and-limit argument removes nondegeneracy. Distinct fixed points of perturbed maps can coalesce, so the cardinal bound cannot simply be passed to a degenerate limit. Likewise no assertion is made for arbitrary closed symplectic manifolds, where the Betti sum need not provide the displayed upper bound on Crit(M). The analytic Floer theorem has not been independently formalized or checked by a numerical fixed-point search in this work.

## Checked references

1. D. Salamon, Lectures on Floer homology, notes dated 1 December 1997, published in Symplectic Geometry and Topology, IAS/Park City Mathematics Series 7 (1999), Sections 1.1, 3.5 and Remark 1.3. Author-hosted original: https://people.math.ethz.ch/~salamon/PREPRINTS/floer.pdf ; university mirror: https://www.math.utoronto.ca/mgualt/Morse%20Theory/Salamon%20floer.pdf


## Reproducibility and review

Proof/source audit only; no computational verification of the external theorem was performed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

D. Salamon, Lectures on Floer homology, notes dated 1 December 1997, published in Symplectic Geometry and Topology, IAS/Park City Mathematics Series 7 (1999), Sections 1.1, 3.5 and Remark 1.3. Author-hosted original: https://people.math.ethz.ch/~salamon/PREPRINTS/floer.pdf ; university mirror: https://www.math.utoronto.ca/mgualt/Morse%20Theory/Salamon%20floer.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.
