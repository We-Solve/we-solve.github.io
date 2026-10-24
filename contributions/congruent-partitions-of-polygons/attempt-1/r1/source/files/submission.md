# Perfect congruent partitions of every triangle into a square number of pieces

**Problem:** TOP-5500073

**Claim type:** Partial result

**Exact scope:** Constructs a perfect congruent partition of every triangle into m² polygonal pieces for each positive integer m, using translations and half-turns only; every parallelogram has such a partition for every positive piece count. Does not decide arbitrary polygons or nonsquare counts for arbitrary triangles.

Let $P=\mathrm{conv}\{A,A+u,A+v\}$ be any nondegenerate triangle. Congruence is Euclidean, so an affine image of an equilateral dissection would not automatically suffice. We instead give formulas showing that all pieces are translated or half-turned copies of the same triangle with side vectors $u/m,v/m$.

In parameter coordinates write $x=A+su+tv$, with $s,t\ge0$ and $s+t\le1$. Subdivide by the three line families $s=i/m$, $t=j/m$ and $s+t=k/m$. For integers i,j≥0 with i+j≤m−1, include the upward triangle
\[
 U_{ij}=A+\frac1m\mathrm{conv}\{iu+jv,(i+1)u+jv,iu+(j+1)v\}.
\]
It is a translation of $U_{00}=A+\mathrm{conv}\{0,u/m,v/m\}$ (with the obvious common A convention).

For integers i,j≥0 with i+j≤m−2, also include
\[
 D_{ij}=A+\frac1m\mathrm{conv}\{(i+1)u+jv,iu+(j+1)v,(i+1)u+(j+1)v\}.
\]
This downward triangle is the image of the basic triangle under a half-turn, followed by a translation: negating the three vectors $0,u/m,v/m$ and translating by $A+((i+1)u+(j+1)v)/m$ gives exactly its three vertices. Negation in the plane is rotation by $\pi$, with determinant +1. Reflections are therefore unnecessary, even for a scalene triangle.

Every triangle is contained in P by its nonnegative parameter coordinates and the displayed index bounds. To see coverage, in each unit parameter grid square the line $s+t=(i+j+1)/m$ splits it into exactly U and D; along the outer diagonal only U is present. Equivalently locate any point by floors of ms,mt and inspect the fractional-coordinate sum. Grid boundaries are shared boundaries only, so the interiors of all pieces are disjoint and their closed union is P. There are $m(m+1)/2$ upward and $m(m-1)/2$ downward triangles, totaling $m^2$.

All pieces have area $\mathrm{area}(P)/m^2$ and are mutually congruent by the explicit rigid transformations. The uncovered area is zero, which is automatically optimal because uncovered area is nonnegative. For m=1 the formula gives P itself, and for m=2 it gives the familiar four-triangle partition. The proof holds for all m and every nondegenerate Euclidean triangle, with arbitrary angles and side lengths.

For any parallelogram $A+[0,1]u+[0,1]v$ and any positive integer n, the n strips
\[
 A+[i/n,(i+1)/n]u+[0,1]v,\qquad0\le i<n,
\]
are mutually translated congruent parallelograms with disjoint interiors and full union. Thus every piece count is feasible in that separate class, without reflections.

**Verification and unresolved scope.** The exact rational checker generates all triangles for a fixed scalene rational input and m=1,…,12, checks the m² count, common sorted squared side lengths, positive area, triangle intersection areas and summed area. It also checks an oblique parallelogram's strip partitions. These certificates use exact coordinates, not rendered-image overlap judgments. The universal formula proves the entire subclasses. It does not yield a decision method for arbitrary polygons, nor claim all integers n are possible for every triangle. Allowing arbitrarily shaped pieces does not excuse silently imposing affine congruence in place of the prompt's rigid congruence.


## Reproducibility and review

Exact rational m² triangular partitions through m=12, common Euclidean squared side lengths, pairwise intersection areas and area totals; oblique strip checks.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-5500073.txt
https://topp.openproblem.net/p73
Exact source versions, statements and uses are described in report.md and source_notes.md.
