# An extremal-support proof for left-orderable group rings

**Problem:** TOP-30006789

**Claim type:** Partial result

**Exact scope:** Over every field, the group ring of every left-orderable group has no nonzero zero divisors; the proof uses only a finite-support unique-product argument and does not cover every torsion-free group.

## Theorem and attribution

Let $G$ admit a left-invariant total order, so $g<h$ implies $xg<xh$ for every $x$. For every field $K$, the ring $K[G]$ is a domain in the noncommutative sense of the prompt. No finite generation, countability, or characteristic assumption is needed. This is the classical ordered-group special case, not a new resolution of Kaplansky's conjecture.

The following argument gives the stronger left-orderable scope rather than requiring a bi-invariant order. The two sides of the order must not be confused.

## A unique product from two finite supports

Let $A,B$ be nonempty finite subsets of $G$. Choose $b_0=\max B$, and choose $a_0\in A$ such that $a_0b_0$ is the largest element of the finite set $Ab_0$. For $a\in A$ and $b\in B$ with $b<b_0$, left invariance gives

$$ab<ab_0\le a_0b_0.$$

If $b=b_0$ and $a\ne a_0$, cancellation makes $ab_0\ne a_0b_0$, so the maximality defining $a_0$ gives $ab_0<a_0b_0$. Thus $a_0b_0$ occurs **exactly once** among the products $ab$. The order of $a_0$ need not coincide with the order of the elements of $A$; no right invariance was used.

Take nonzero $\alpha=\sum_{a\in A}u_a a$ and $\beta=\sum_{b\in B}v_b b$, using their actual supports, so all displayed coefficients are nonzero. The coefficient of $a_0b_0$ in their product is exactly $u_{a_0}v_{b_0}\ne0$. Consequently $\alpha\beta\ne0$.

This is a proof for every pair of finite supports, including singleton supports. It is not an inference from searching bounded supports. The proof would also work over any coefficient domain with a central group basis, but the claimed statement is the field case in the prompt.

## Explicit noncommutative infinite class

To see the theorem beyond abelian groups without invoking an ordering classification, consider the integral Heisenberg group

$$H=\{(x,y,z):x,y,z\in\mathbb Z\},\qquad
 (x,y,z)(x',y',z')=(x+x',y+y',z+z'+xy').$$

Order triples lexicographically by $x$, then $y$, then $z$. Left multiplication adds the same constant to $x$ and $y$. If the first two coordinates of two elements agree, the extra left-multiplication term $a y$ in the last coordinate agrees as well. Their comparison is therefore preserved. The same check gives right invariance, since its extra term is $x b$. This is a bi-order, in particular a left order. The group is nonabelian, for $(1,0,0)(0,1,0)=(1,1,1)$ whereas the reverse product is $(1,1,0)$. Hence $K[H]$ has no zero divisors in every characteristic.

More generally, the checked notes of Gardam prove left-orderable $\Rightarrow$ unique product in Proposition 1.24 and discuss locally indicable groups, including free groups and torsion-free nilpotent groups, in Corollary 1.31 and Example 1.32. The theorem above is self-contained; these examples beyond $H$ are credited background.

## Boundary and relation to the earlier attempt

An ordered group is torsion-free: if $g>1$, left invariance gives $1<g<g^2<\cdots$; if $g<1$, apply that argument to $g^{-1}$. Torsion-freeness alone does not supply the order used in the proof. For an element of finite order $m>1$, $(1-g)(1+g+\cdots+g^{m-1})=0$, with both factors nonzero, so the torsion-free hypothesis of the original target has a real role.

The earlier revision reports broad characteristic-two counterexample claims attributed to 2026 OpenAI manuscripts and explicitly marks them unverified. This contribution neither checks nor endorses those claims. It supplies an independent proof of a classical, precisely delimited positive class, together with an explicit noncommutative example. No conclusion about an arbitrary torsion-free group is drawn.

## References checked

- Giles Gardam, Group rings of infinite groups, Proposition 1.24, Corollary 1.31, Example 1.32 and §1.9: https://www.math.uni-bonn.de/people/gardam/notes/groig.pdf
- Earlier revision inspected: https://we-solve.github.io/contributions/kaplansky-s-zero-divisor-conjecture-for-torsion-free-groups/attempt-1/r1/


## Reproducibility and review

Proof only; no computational verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Giles Gardam, Group rings of infinite groups, Proposition 1.24, Corollary 1.31, Example 1.32 and §1.9: https://www.math.uni-bonn.de/people/gardam/notes/groig.pdf
Earlier revision inspected: https://we-solve.github.io/contributions/kaplansky-s-zero-divisor-conjecture-for-torsion-free-groups/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.
