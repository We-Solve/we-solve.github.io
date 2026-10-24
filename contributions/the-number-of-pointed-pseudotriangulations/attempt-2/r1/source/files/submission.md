# Catalan equality and strict inequality for one interior point in a triangle

**Problem:** prb_d3a9b976cbed449e9c8defcb1c0ca403

**Claim type:** Partial result

**Exact scope:** Proves p(S)=t(S)=Catalan(n−2) for all strictly convex-position sets and p(S)=3>1=t(S) when S consists of a triangle and one strictly interior point in general position. No all-point-set counting inequality is claimed.

First suppose every point is a hull vertex. Any face of a noncrossing subdivision then has its vertices in circular hull order and is convex. A pseudotriangle face consequently has only three vertices and is a triangle. Conversely every triangulation is pointed, since all incident directions at a hull vertex lie within the hull's angle, less than $\pi$. The two sets of subdivisions coincide.

The common count is the Catalan number $C_{n-2}=\binom{2n-4}{n-2}/(n-1)$. Fix one hull side. The triangle incident to it has a third vertex splitting the remaining polygon into two independent smaller polygons. With $C_0=1$, this yields $C_r=\sum_{i=0}^{r-1}C_iC_{r-1-i}$. The closed formula follows, for example, by solving the formal-power-series identity $C(z)=1+zC(z)^2$ and extracting coefficients from $(1-\sqrt{1-4z})/(2z)$. This counts edge sets exactly once because the chosen side's incident triangle is unique.

For an explicit strict subclass, let $S=\{A,B,C,q\}$ where $ABC$ is a nondegenerate triangle and $q$ is strictly interior, with no three collinear. A triangulation must contain all three spokes $qA,qB,qC$: all three hull edges are necessary and Euler's formula forces six edges in total, the entire complete graph on these four vertices. The unique triangulation consists of the three triangles adjacent to $q$. Thus $t(S)=1$.

We justify the edge count for any pointed pseudotriangulation on n points with h hull vertices. Let e count all edges and f bounded faces. Each pointed vertex has exactly one sector of angle greater than $\pi$; for hull vertices this is the exterior sector, so bounded faces have exactly $n-h$ reflex sectors in total. They have $2e-h$ sectors altogether. Each pseudotriangle contributes exactly three convex sectors, so $3f=2e-h-(n-h)=2e-n$. Euler gives $f=e-n+1$, and hence $e=2n-3$. All strict sector classifications are legitimate under general position.

For the four-point set, e=5. After the three hull edges there must therefore be exactly two of the three spokes. Each choice is valid. The two chosen spokes bound a triangle on one side and a quadrilateral on the other; in that quadrilateral the angle at q is reflex and the three hull angles are convex. At q the two incident directions lie in an open semicircle since they are not opposite; hull vertices are automatically pointed. Thus the three choices give distinct pointed pseudotriangulations and exhaust them, proving $p(S)=3>1=t(S)$.

**Verification.** For the rational instance $(0,0),(7,0),(0,7),(2,3)$, the exact program checks general position, strict containment and all spoke choices, including reflex signs. It also verifies the Catalan recurrence against the binomial formula through n=30. These tests support the formulas and implementation only. The preceding arguments prove the entire two specified subclasses.

The prior archive attempt already establishes convex equality and presents a collision defeating a naive refinement injection. The new strict four-point subclass and its complete edge-count classification supply additional positive content. This does not make a refinement injection valid for arbitrary sets or settle strictness whenever any interior point exists.


## Reproducibility and review

Exact four-point sector/determinant checks and Catalan recurrence versus closed formula through n=30.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_d3a9b976cbed449e9c8defcb1c0ca403.txt
https://topp.openproblem.net/p40
Exact source versions, statements and uses are described in report.md and source_notes.md.
