# Miller’s connectivity–dimension range for rational formality

**Problem:** prb_21a6e98511bb42c4a74bcf2a76945636

**Claim type:** Literature report

**Exact scope:** Every closed (k−1)-connected manifold of dimension ≤4k−2, k≥2, is Sullivan rationally formal; hence all simply connected positively curved manifolds of dimension≤6, and all 2-connected ones of dimension≤10, satisfy the question.

## The precise positive range

Miller's 1979 theorem proves that a compact $(k-1)$-connected manifold of dimension at most $4k-2$, with $k>1$, is rationally formal. It makes no curvature assumption. Applying it to the subclass of closed positively curved manifolds gives, in particular,

- every **simply connected** such manifold of dimension at most six is formal;
- every **2-connected** such manifold of dimension at most ten is formal;
- more generally, the displayed connectivity–dimension inequality is sufficient in every dimension.

Connectivity here is integral homotopy connectivity: $\pi_i(M)=0$ for $1\le i\le k-1$. The dimension inequality includes equality. Neither a vanishing Euler characteristic nor a numerical curvature pinching condition is used.

## Match the rational-algebra conclusion to the literal question

The checked original paper begins by taking rational coefficients and simply connected finite-type spaces. It defines a minimal rational model $\mathcal M_X$ for the rational de Rham algebra and calls the space formal when there is a weak equivalence from $\mathcal M_X$ to its cohomology algebra with zero differential. The theorem on the first page uses that definition. These are the commutative Sullivan models underlying $A_{\mathrm{PL}}$, not a claim about wedge products of harmonic forms for a selected metric.

For the manifold $M$ in the stated range, let $\mathcal M_M\to A_{\mathrm{PL}}(M;\mathbb Q)$ be its minimal-model quasi-isomorphism. Miller's conclusion supplies a quasi-isomorphism from $\mathcal M_M$ to its zero-differential cohomology. Identifying $H^*(\mathcal M_M)$ with $H^*(M;\mathbb Q)$ gives the finite zigzag

$$A_{\mathrm{PL}}(M;\mathbb Q)\ \longleftarrow\ \mathcal M_M\ \longrightarrow\ (H^*(M;\mathbb Q),0).$$

Both arrows preserve the commutative differential graded algebra structures and induce cohomology isomorphisms. This is exactly the requested rational formality property. Smooth closed manifolds have finite CW type, so the finite-type hypothesis of the model theory applies. In the simply connected case they are orientable as well.

The deep input is the theorem establishing the required model morphism using connectivity, Poincaré duality and the dimension bound. That proof is credited to Miller; merely checking a few Massey products would not independently prove the theorem and is not offered as a replacement.

## Boundaries that curvature alone does not remove

Strict positive sectional curvature on a closed manifold implies a finite fundamental group, but finiteness does **not** imply triviality. We have therefore retained simple connectivity explicitly in the low-dimensional application. No descent of formality from a universal cover is assumed without checking a theorem about the quotient algebra.

For a simply connected seven-manifold, the bound with $k=2$ is only six, so this theorem alone gives no conclusion. If the seven-manifold is additionally 2-connected, $k=3$ gives the bound ten, and it is covered. This example shows exactly how the extra homotopy hypothesis matters. Arbitrary dimensions and arbitrary finite fundamental groups from the original question remain outside the report. No example of a positively curved nonformal manifold, and no general curvature-to-formality theorem, is asserted.

## Checked references

- Timothy James Miller, On the formality of K−1 connected compact manifolds of dimension less than or equal to 4K−2, Illinois Journal of Mathematics 23(2) (June 1979), 253–258, first-page theorem and definition of formality; original six-page scan: https://scispace.com/pdf/on-the-formality-of-k-1-connected-compact-manifolds-of-4ln5i7o69n.pdf


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no earlier contributions listed; primary theorem and hypotheses checked by browsing; displayed deduction checked algebraically. No program or formal verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Timothy James Miller, On the formality of K−1 connected compact manifolds of dimension less than or equal to 4K−2, Illinois Journal of Mathematics 23(2) (June 1979), 253–258, first-page theorem and definition of formality; original six-page scan: https://scispace.com/pdf/on-the-formality-of-k-1-connected-compact-manifolds-of-4ln5i7o69n.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.
