# A countable rectifiable-barrier lower bound with the exact interior connected triangle subclass

**Problem:** prb_dd81b09dd3524520a951a28afbbc798e

**Claim type:** Literature report

**Exact scope:** Proves L≥perimeter(C)/2 for the prompt’s finite or countable rectifiable presentations, and credits the minimum-Steiner-tree characterization of connected interior barriers for convex polygons; obtains √3 times side length for an equilateral triangle within that restricted class.

Parametrize each rectifiable curve by arc length; its derivative exists almost everywhere and has norm at most one. For a unit direction $u_\theta=(\cos\theta,\sin\theta)$, project the barrier onto the line in direction $u_\theta$. Every line perpendicular to $u_\theta$ meeting C must meet the barrier, so this projection covers the whole projection interval of C, of length $w_C(\theta)$.

The length of the projection of a curve's image is at most its total variation in that direction, which is at most $\int|\gamma_i'(s)\cdot u_\theta|\,ds$. Countable subadditivity of one-dimensional Lebesgue measure therefore gives
\[
 w_C(\theta)\le\sum_i\int|\gamma_i'(s)\cdot u_\theta|\,ds.
\]
This remains true for disconnected curves, overlapping presentations and curves lying outside C. Integrating for $0\le\theta\le\pi$ and applying Tonelli to the nonnegative functions gives
\[
 \int_0^\pi w_C(\theta)\,d\theta
 \le 2\sum_i\int|\gamma_i'(s)|\,ds\le2L.
\]
The factor two is $\int_0^\pi|\cos\theta|d\theta=2$. Cauchy's planar perimeter formula identifies the left side as $\mathrm{perimeter}(C)$, yielding the claimed lower bound. The formula follows first for convex polygons by projecting their edge vectors (each width is half the boundary's total projected variation), then for general convex bodies by convergent inscribed convex-polygon approximations. Thus the use of a countable family creates no missing finite-union assumption.

For the restricted class of connected barriers lying inside a convex polygon P, the exact characterization is a minimum Steiner tree of the vertices of P. This is Theorem 5 of Dumitrescu–Jiang–Pach's Opaque sets, arXiv:1005.2218v5. The key geometric reduction is short: a supporting line exposing only a particular polygon vertex must meet any interior barrier exactly at that vertex. Hence the barrier contains all vertices. A connected set spanning them has length at least their Steiner minimum. Conversely a connected set containing all polygon vertices is a barrier: its projection is a connected interval containing all projected vertex coordinates, hence contains the entire projection of P in every direction. Every line meeting P is therefore blocked. The Steiner theorem also handles the finite rectifiable-network realization of the minimum.

For an equilateral triangle of side s, the Steiner tree joins the three vertices to its center with three segments meeting at $120$ degrees; each segment has length $s/\sqrt3$, giving total $\sqrt3s$. Minimality can also be seen directly: any three-terminal tree reduces, after suppressing degree-two vertices and removing unnecessary branches, to paths from one branching point z. Their lengths sum to at least $\sum_i|z-v_i|$. This convex function is minimized at the triangle center, since its three unit gradient vectors sum to zero. A tree with a terminal as branching point is included as a limiting case. The general Steiner characterization justifies reducing arbitrary connected rectifiable competitors to this tree minimum.

**Limitations and evidence.** For the unrestricted equilateral problem this gives only $3s/2\le\ell(C)\le\sqrt3s$. Disconnected or exterior barriers need not contain the vertices, so the Steiner lower bound cannot be applied to them. For a unit square the projection lower bound is 2; it is not an assertion that a barrier of length 2 exists. No numerical truncation or optimization is presented as an exact unrestricted optimum.


## Reproducibility and review

Analytic rectifiable/countable proof and source-backed Steiner characterization; no computational global-optimality claim.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_dd81b09dd3524520a951a28afbbc798e.txt
https://arxiv.org/pdf/1005.2218
Exact source versions, statements and uses are described in report.md and source_notes.md.
