# Every surface bundle becomes flat after adding trivial base handles

**Problem:** TOP-2780

**Claim type:** Literature report

**Exact scope:** For every smooth oriented Σ_g-bundle over a closed oriented surface with g≥3, fiber sum with a product bundle over some additional handles admits a flat connection; this does not assert flatness before stabilization.

## A stabilized affirmative theorem

Fix a closed oriented fiber $F=\Sigma_g$, $g\ge3$. Let $E\to\Sigma_h$ be any smooth oriented $F$-bundle. There exists $t\ge0$ such that its fiber sum, using compatible fiber identifications, with the product bundle

$$F\times\Sigma_t\longrightarrow\Sigma_t$$

admits a smooth flat connection over $\Sigma_{h+t}$. This is the base-genus stabilization established in §2 of Kotschick–Morita. The integer $t$ may depend on the given bundle; no uniform or effective bound is asserted. The original bundle is retained on the punctured original base, but the base surface has changed.

## Correct the monodromy defect with identity-component holonomy

Write

$$\pi_1(\Sigma_h)=\langle a_1,b_1,\ldots,a_h,b_h\mid\prod_i[a_i,b_i]=1\rangle.$$

Let $\rho$ be the bundle monodromy into $\operatorname{Mod}(F)$ and choose orientation-preserving smooth representatives $A_i,B_i$ of its values. The product

$$\xi=\prod_i[A_i,B_i]$$

lies in $\operatorname{Diff}_0(F)$, because its mapping class is the identity. It need not be the identity diffeomorphism, which is exactly why arbitrary chosen representatives do not themselves give a flat bundle.

The deep input used in the source is Thurston's perfectness theorem for $\operatorname{Diff}_0(F)$. Therefore there are finitely many $P_j,Q_j\in\operatorname{Diff}_0(F)$ with

$$\xi^{-1}=\prod_{j=1}^t[P_j,Q_j].$$

Appending these $t$ pairs to the first $h$ pairs makes the product of commutators **exactly** the identity. It defines a genuine homomorphism

$$\widetilde\rho:\pi_1(\Sigma_{h+t})\longrightarrow\operatorname{Diff}^+(F).$$

Use $\xi^{-1}$ in this formula so that the surface relator has the same orientation convention in both sets of generators. A product for $\xi$ instead can be inverted by reversing its order and swapping the commutator entries.

## Realize the correct bundle class

The suspension of $\widetilde\rho$ carries the product horizontal distribution on $\widetilde\Sigma_{h+t}\times F$. It is invariant under the deck action and integrable, so it descends to a smooth flat connection, precisely in the sense of the prompt.

Projecting $\widetilde\rho$ to the mapping class group gives the original monodromy on the first $h$ handles and trivial monodromy on the added handles. For closed fibers of genus at least two, the standard classification of oriented surface bundles by mapping-class monodromy, used explicitly in the source, identifies this bundle with the fiber sum of the original and the product bundle. Thus the argument controls the smooth bundle isomorphism class, not just an abstract lift of unrelated group elements.

The source also constructs flat bundles of nonzero signature for every $g\ge3$ (Theorem1), even with area-preserving holonomy. Nonzero signature is therefore not an obstruction to flatness of a higher-genus surface bundle. This additional fact is credited to the source; no explicit small example or strengthened perfectness statement for all area-preserving maps is asserted here.

For any of the stabilized flat bundles just constructed, pulling back along $\Sigma_{h+t}\times S^1\to\Sigma_{h+t}$ gives a flat bundle over a closed oriented three-manifold: compose the holonomy with the projection on fundamental groups. This is a three-dimensional base family, not a theorem for arbitrary three-manifold bases. Most importantly, adding handles does not answer whether the unstabilized given bundle admits a flat connection. Both original unrestricted questions remain outside the precise stabilized conclusion.

## Checked references

- D. Kotschick and S. Morita, Signatures of foliated surface bundles and the symplectomorphism groups of surfaces, arXiv:math/0305182v1 (13 May 2003), Theorem1 and §2, especially the identity-component commutator construction: https://arxiv.org/pdf/math/0305182


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no earlier contributions listed; primary theorem and hypotheses checked by browsing; displayed deduction checked algebraically. No program or formal verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

D. Kotschick and S. Morita, Signatures of foliated surface bundles and the symplectomorphism groups of surfaces, arXiv:math/0305182v1 (13 May 2003), Theorem1 and §2, especially the identity-component commutator construction: https://arxiv.org/pdf/math/0305182
Exact source versions, statements and uses are described in report.md and source_notes.md.
