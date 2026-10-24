# Complete one-systems have exactly sharp maximum 2g+1

**Problem:** TOP-2760

**Claim type:** Partial result

**Exact scope:** For every closed orientable surface of genus g≥1, any collection of essential simple curve classes meeting pairwise exactly once has at most2g+1 members, and a polygon construction attains2g+1. This is the complete-one-system subclass of C(g).

## The exact topological subclass

A complete one-system is a collection of distinct essential simple curve classes with geometric intersection number exactly one for every pair. Its maximal size on $S_g$ is

$$2g+1.$$

This is the sharp classical result recorded and constructed by Malestein, Rivin and Theran. We give the homological bound and polygon construction directly. It is a specified subclass of the prompt’s at-most-one systems, in which disjoint pairs are also allowed. Therefore it proves $C(g)\ge2g+1$ and the exact maximum for complete systems, rather than asserting $C(g)=2g+1$.

## The mod-two rank obstruction

Give $H_1(S_g;\mathbb F_2)$ its nondegenerate intersection pairing, of dimension $2g$. If curves $c_1,\ldots,c_N$ meet pairwise exactly once, their mod-two classes $v_i$ have pairings $v_i\cdot v_j=1$ for $i\ne j$ and $v_i\cdot v_i=0$. The Gram matrix is therefore $A=J_N+I_N$ over $\mathbb F_2$, where $J_N$ is the all-ones matrix.

For a vector $x$, $Ax=0$ means every coordinate $x_i$ equals the common sum $t=\sum_jx_j$. Thus every kernel vector is constant. If $N$ is even, substituting $x_i=t$ gives $t=Nt=0$, so the kernel is zero and the rank is $N$. If $N$ is odd, both constant vectors solve the equation, and the kernel is one-dimensional, giving rank $N-1$.

The pairing factors through a vector space of dimension $2g$, so $\operatorname{rank}A\le2g$. For even $N$, $N\le2g$; for odd $N$, $N\le2g+1$. In either case the desired bound follows. This proof does not require the $v_i$ themselves to be a priori linearly independent, which would fail in the maximal odd case.

## Attain the bound geometrically

Present $S_g$ as a regular $4g$-gon with each side identified with its opposite in the usual orientable identification. Draw the $2g$ segments joining midpoints of opposite sides. Their endpoints glue to give $2g$ simple closed curves. Draw in addition one segment joining opposite vertices. All polygon vertices are identified to one surface point, so this extra segment also becomes a simple closed curve after smoothing at that point.

Every pair meets once in the interior of the polygon, at its center. The endpoints produce no further intersections: midpoint endpoints lie in distinct identified side pairs and the diagonal’s endpoints lie at the identified vertex. A small local perturbation near the common center can make all intersections transverse with no triple points while preserving exactly one intersection for each pair. Each resulting curve is essential, since it has mod-two intersection one with another curve; and two curves cannot be isotopic, since isotopic simple curves have zero geometric intersection number.

Thus these classes form a complete one-system of size $2g+1$. The construction also works for $g=1$, producing the familiar three primitive torus slopes. This realizes the upper bound, rather than only exhibiting a compatible family of homology vectors that might fail to have the required geometric representatives.

## Why this does not give the full systole maximum

If disjoint pairs are allowed, the off-diagonal Gram matrix need not be all ones, so the preceding rank calculation no longer bounds the number of curves by $2g+1$. Also, being a topological one-system does not imply that all its curves are simultaneous systoles of one hyperbolic metric. This report therefore makes no exact formula for $N(g)$ or the full $C(g)$ in higher genus. Its conclusion is the complete-system extremal regime, with a full infinite-genus proof and construction.

## Checked references

- Justin Malestein, Igor Rivin and Louis Theran, Topological designs, arXiv:1008.3710v5(3 January2013), Propositions5.1/5.2 and §5.5 polygon construction: https://arxiv.org/pdf/1008.3710


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no earlier contributions listed; primary theorem and hypotheses checked by browsing; displayed deduction checked algebraically. No program or formal verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Justin Malestein, Igor Rivin and Louis Theran, Topological designs, arXiv:1008.3710v5(3 January2013), Propositions5.1/5.2 and §5.5 polygon construction: https://arxiv.org/pdf/1008.3710
Exact source versions, statements and uses are described in report.md and source_notes.md.
