# A rank-two Chern obstruction for every free two-torus action

**Problem:** TOP-20003148

**Claim type:** Partial result

**Exact scope:** If a principal T²-bundle E→B has any positively curved metric on its closed total space, π₁(B) is finite and the two Chern classes on the universal base cover evaluate with rank2; in particular b₂ of that cover is at least2.

## Necessary conditions independent of invariant metrics

Let $T^2\to E\to B$ be the smooth principal bundle in the prompt. If $E$ admits **any** strictly positively curved metric, then $\pi_1(B)$ is finite. Write $q:\widetilde B\to B$ for its universal cover and let $c_1,c_2\in H^2(B;\mathbb Z)$ be the Chern classes of the two circle factors. The evaluation homomorphism

$$C:H_2(\widetilde B;\mathbb Z)\longrightarrow\mathbb Z^2,
\quad x\longmapsto(\langle q^*c_1,x\rangle,\langle q^*c_2,x\rangle)$$

must have rank two. Consequently $b_2(\widetilde B)\ge2$. This excludes every bundle over a base with finite fundamental group and universal-cover second Betti number at most one. It also excludes all bases with infinite fundamental group. No assumption that the torus action preserves the positive metric is used.

## Finiteness from curvature and the bundle sequence

For clarity, the usual positive-Ricci argument gives $\pi_1(E)$ finite. On the compact $d$-manifold $E$, positivity gives a constant $\kappa>0$ with $\operatorname{Ric}\ge(d-1)\kappa$. The same bound holds on the complete universal cover. If a unit-speed minimizing geodesic there had length $L>\pi/\sqrt\kappa$, take the $d-1$ parallel orthonormal normal fields multiplied by $\sin(\pi t/L)$. The sum of their index forms is at most

$$(d-1)\frac L2\left((\pi/L)^2-\kappa\right)<0,$$

contradicting minimality. Hence the universal cover has bounded diameter and, by completeness and Hopf–Rinow, is compact. Its discrete fiber over a point of $E$ is therefore finite, proving the assertion.

The bundle's homotopy exact sequence ends with

$$\pi_1(T^2)\longrightarrow\pi_1(E)\longrightarrow\pi_1(B)\longrightarrow\pi_0(T^2)=0.$$

Thus $\pi_1(B)$ is a quotient of a finite group and is finite. The universal cover of $B$ is consequently a finite cover. Pull back the bundle to get $T^2\to E'\to\widetilde B$. Its total space $E'$ is connected and is a finite cover of $E$, so it too has finite fundamental group and inherits a positively curved metric.

## The exact Chern lattice

Since $\widetilde B$ is simply connected, the exact sequence now gives

$$\pi_1(E')\cong\operatorname{coker}\left(\partial:\pi_2(\widetilde B)\to\pi_1(T^2)=\mathbb Z^2\right).$$

The Hurewicz isomorphism identifies $\pi_2(\widetilde B)$ with $H_2(\widetilde B;\mathbb Z)$. Under this identification $\partial$ is $C$, up to a harmless common choice of circle-generator signs. Indeed, pull the bundle back by a sphere representative. Trivialize it on the two hemispheres; the equatorial clutching map has two integer winding numbers. They are both the boundary homomorphism coordinates and the evaluations of the two Chern classes. Naturality proves the assertion for every sphere class, hence for every second homology class.

A subgroup of $\mathbb Z^2$ has finite-index cokernel exactly when it has rank two. Finiteness of $\pi_1(E')$ therefore proves the claimed obstruction. More precisely, express $C$ on generators of the free part of $H_2$ as a $2\times b_2$ integer matrix. In rank two, the order of $\pi_1(E')$ is the greatest common divisor of the absolute values of its $2\times2$ minors, by Smith normal form. Torsion classes map to zero and do not alter this calculation.

For example, all simply connected spheres and complex projective spaces have $b_2\le1$, so none can be the base of a principal two-torus bundle with positively curved total space, irrespective of bundle class or metric symmetry. Rank two is only a necessary condition; meeting it gives no positive-curvature construction. This obstruction does not answer the existential question for bases of higher second Betti number.

## Checked references

- Allen Hatcher, Algebraic Topology, author’s online text, Theorem4.41 (homotopy exact sequence of a fiber bundle) and Theorem4.32 (Hurewicz): https://pi.math.cornell.edu/~hatcher/AT/AT.pdf


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no earlier contributions listed; primary theorem and hypotheses checked by browsing; displayed deduction checked algebraically. No program or formal verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Allen Hatcher, Algebraic Topology, author’s online text, Theorem4.41 (homotopy exact sequence of a fiber bundle) and Theorem4.32 (Hurewicz): https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.
