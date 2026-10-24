# Stable converse soul over every simply connected compact rank-one symmetric space

**Problem:** TOP-20003168

**Claim type:** Literature report

**Exact scope:** Every finite-rank real vector bundle over S^n (n≥2), CP^n, HP^n or the Cayley plane admits a stabilization whose total space has a complete metric of nonnegative sectional curvature; all larger stabilizations work too.

## All bundles over a named family of bases

González-Álvaro's Main Theorem proves the stable converse soul statement for every real or complex vector bundle over a compact rank-one symmetric space. Restricting to the simply connected bases in the question gives the full conclusion for

$$S^n\ (n\ge2),\quad\mathbb{CP}^{n},\quad\mathbb{HP}^{n}\ (n\ge1),\quad\mathbb{CaP}^{2}.$$

For every real bundle $\xi$ over any of these spaces there is $k\ge0$ such that $E(\xi\oplus\underline{\mathbb R}^k)$ has a complete metric with sectional curvature at least zero. The bundle is arbitrary, not required initially to be homogeneous or stably trivial. Real projective spaces, although also treated by the source, are omitted to respect the prompt's simple-connectivity assumption.

## How stable homogeneity produces an actual metric

The source's key mechanism is the existence of a homogeneous bundle in each stable class. Write the base as $G/H$, with $G$ compact and $H$ closed. A real orthogonal representation $\rho:H\to O(N)$ defines

$$E_\rho=G\times_H\mathbb R^N.$$

Give $G$ a bi-invariant metric and $\mathbb R^N$ its Euclidean metric. The action $h:(g,v)\mapsto(gh^{-1},\rho(h)v)$ is isometric and free, even if the representation has kernel, because right translation on $G$ is free. The quotient is a smooth total space. O'Neill's horizontal sectional-curvature equation gives nonnegative sectional curvature: the product has nonnegative curvature and the extra horizontal bracket term is nonnegative.

The product $G\times\mathbb R^N$ is complete. Quotienting by the compact isometry group $H$ gives a complete metric. For example, every quotient geodesic lifts horizontally and extends for all time in the complete product; its projection therefore extends for all time. This checks the completeness requirement on the noncompact total space, which cannot be replaced by a local curvature statement near the zero section.

If the stable class of $\xi$ has a homogeneous representative $E_\rho$, there are nonnegative integers $a,b$ and an actual bundle isomorphism

$$\xi\oplus\underline{\mathbb R}^a\cong E_\rho\oplus\underline{\mathbb R}^b
=E_{\rho\oplus\mathbf1^b}.$$

Apply the preceding quotient construction and transfer the metric by this isomorphism. This is the source's Lemma2.7. An equality of virtual K-theory classes alone is not itself a metric on a bundle; the stable-class realization and actual added trivial summands are the necessary intermediate steps.

## The imported algebraic input and the remaining bases

The substantive source theorem shows that every stable class on the displayed bases has a homogeneous representative. The paper proves this through representation rings and real/complex K-theory: Proposition4.3 for spheres, Proposition5.1 for projective spaces, and Proposition6.3 for the Cayley plane, together with Lemmas2.5 and2.7. Those calculations are credited, not represented as independently reconstructed in this report. In particular, arbitrary bundles on the Cayley plane are included, not just tangent or tautological examples.

Once $k=a$ works, every $k'\ge k$ works by taking the product of the constructed complete metric with the flat metric on $\mathbb R^{k'-k}$. Products preserve completeness and nonnegative sectional curvature, including mixed planes of zero curvature. The metric need not equal the originally selected symmetric metric on the zero section; the prompt permits this freedom.

The argument does not show that every vector bundle over every simply connected nonnegatively curved manifold has such a homogeneous stable representative. The general base in the original question need not even be homogeneous. Thus this is a complete bundlewise affirmative answer on all the displayed rank-one symmetric bases, with the unrestricted stable converse soul question left beyond the report.

## Checked references

- David González-Álvaro, Nonnegative curvature on stable bundles over compact rank one symmetric spaces, arXiv:1506.03972v1 (June2015), Main Theorem, Lemmas2.5/2.7 and Propositions4.3/5.1/6.3: https://arxiv.org/pdf/1506.03972


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no earlier contributions listed; primary theorem and hypotheses checked by browsing; displayed deduction checked algebraically. No program or formal verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

David González-Álvaro, Nonnegative curvature on stable bundles over compact rank one symmetric spaces, arXiv:1506.03972v1 (June2015), Main Theorem, Lemmas2.5/2.7 and Propositions4.3/5.1/6.3: https://arxiv.org/pdf/1506.03972
Exact source versions, statements and uses are described in report.md and source_notes.md.
