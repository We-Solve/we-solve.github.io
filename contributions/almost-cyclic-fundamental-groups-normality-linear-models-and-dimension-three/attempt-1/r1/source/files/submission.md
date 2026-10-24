# A uniform normal cyclic subgroup for spherical space forms

**Problem:** TOP-20003178

**Claim type:** Literature report

**Exact scope:** For every odd n≥3, all spherical space forms S^n/G have a normal cyclic subgroup of index at most the complex Jordan constant J(n+1); no pinching-dependent bound is used.

## The linear subclass

Suppose the manifold in the question is a spherical space form, so that its universal cover has a constant positive sectional curvature metric. Its deck group is a finite group $G\le O(n+1)$ acting freely on the unit sphere. For this entire class there is a constant depending only on $n$ and a **normal** cyclic subgroup $C\triangleleft G$ with

$$[G:C]\le J_{\mathrm{lin}}(n+1).$$

Here $J_{\mathrm{lin}}(d)$ is a Jordan constant for finite subgroups of $GL_d(\mathbb C)$. No value of this constant is asserted to be optimal. Normality is stronger than the question requires; the order of $G$ itself remains unbounded.

## The imported theorem and the free-action deduction

Jordan's theorem, stated and proved in Breuillard's checked exposition, says that every finite subgroup of $GL_d(\mathbb C)$ contains an abelian normal subgroup of index bounded in terms of $d$ alone. Apply it to the complexification of the faithful orthogonal representation $G\hookrightarrow O(n+1)$. This gives an abelian normal subgroup $A$ with the indicated index bound. We now prove the important extra implication: **every abelian subgroup of a finite linear group acting freely on a sphere is cyclic.**

Because $A$ is finite and abelian, its complex representation is a direct sum of one-dimensional characters. One way to see this is to average a Hermitian inner product, then simultaneously diagonalize the commuting unitary matrices. Choose one character $\chi:A\to\mathbb C^*$ occurring in the representation, with a nonzero common eigenvector $v\in\mathbb C^{n+1}$. If $a\in\ker\chi$, then $av=v$. The matrices are real, so writing $v=u+iw$ gives $au=u$ and $aw=w$ with at least one of $u,w$ nonzero. Normalizing that nonzero real vector produces a point of $S^n$ fixed by $a$. Freeness implies $a=1$. Thus $\chi$ is injective.

A finite subgroup of $\mathbb C^*$ is cyclic: all its elements are roots of unity of exponent dividing its order, so it is a subgroup of one cyclic group of roots of unity. The injection $\chi$ proves that $A$ is cyclic. Set $C=A$. This completes the bounded-index claim, including its normality.

## Covering interpretation and the remaining gap

The quotient $S^n/C$ maps to $S^n/G$ with covering degree $[G:C]$. Since $n\ge3$, the sphere is simply connected, and the covering has cyclic fundamental group $C$. This is exactly the geometric form of the requested bound on this subclass. The proof is independent of the metric's overall scale and of the order of the deck group. Scalar multiplication by roots of unity on $S^{2m+1}\subset\mathbb C^{m+1}$ supplies cyclic examples of arbitrarily large order, illustrating why no total-order bound could replace it.

For a general positively curved manifold the deck action on its universal cover need not be given by a faithful representation of dimension $n+1$ acting freely on a round sphere. Merely knowing that the deck group is finite does not put it in the linear subclass used above. The argument therefore does not establish the unrestricted constant in every odd dimension. In particular, no linearization of an arbitrary smooth deck action is assumed, and this report does not claim the general problem solved by Jordan's theorem.

## Checked references

- Emmanuel Breuillard, An exposition of Jordan’s original proof of his theorem on finite subgroups of GL_n(C), arXiv:2305.00722v1 (1 May 2023), Theorem 1.1 and §§2–4: https://arxiv.org/pdf/2305.00722


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no earlier contributions listed; primary theorem and hypotheses checked by browsing; displayed deduction checked algebraically. No program or formal verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Emmanuel Breuillard, An exposition of Jordan’s original proof of his theorem on finite subgroups of GL_n(C), arXiv:2305.00722v1 (1 May 2023), Theorem 1.1 and §§2–4: https://arxiv.org/pdf/2305.00722
Exact source versions, statements and uses are described in report.md and source_notes.md.
