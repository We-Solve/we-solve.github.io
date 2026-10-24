# A self-contained universal-cover certificate for the regular hexagon

Problem: prb_18062eb38ecd494f88f3051e3b2417c8

Claim type: Partial result

Exact scope: Every diameter-one planar set fits, after a rigid motion, into the regular hexagon of apothem 1/2 and area sqrt(3)/2. Thus the universal-cover infimum lies between pi/4 and sqrt(3)/2.

Replace the given diameter-one set by its closed convex hull A. It is compact, has the same diameter, and covering it suffices. For a unit vector u put h(u)=max(x in A) x dot u and m(u)=(h(u)-h(-u))/2. The number m(u) is the offset of the midline between the two support lines perpendicular to u. It is continuous in u and satisfies m(-u)=-m(u).

Take three unit normals u_1(theta),u_2(theta),u_3(theta) separated by 120 degrees. Their sum is zero. The continuous function F(theta)=sum_i m(u_i(theta)) changes sign after a half turn: F(theta+pi)=-F(theta). The intermediate value theorem therefore supplies an angle with F=0. The equations
\[
 z\cdot u_i=m(u_i),\qquad i=1,2,3,
\]
have a common solution z: the first two independent equations uniquely determine z, and the third follows from sum u_i=0 and sum m(u_i)=0. Thus the three support midlines concur.

For every x in A, the support width w(u)=h(u)+h(-u) is at most one, because two extreme support points have projected separation w(u)<=diam(A). Consequently
\[
 |(x-z)\cdot u_i|\le w(u_i)/2\le1/2 \quad(i=1,2,3).
\]
These three symmetric strips intersect in a regular hexagon of apothem 1/2, since their six outward normals are spaced by 60 degrees. Its side length is 1/sqrt(3); its area, computed as six triangles of height 1/2, is sqrt(3)/2. Rotate that hexagon to one fixed reference orientation and translate by -z: this is precisely a rigid placement allowed in the literal covering problem. No affine distortion of the given set is used.

For a lower bound, any universal convex cover must accommodate a closed radius-1/2 disk, itself of diameter one. Rigid motions preserve that disk's area pi/4, so inclusion forces cover area at least pi/4. Thus
\[
 \pi/4\le\inf\{|K|:K\text{ is a universal cover}\}\le\sqrt3/2.
\]
The main content is the three-midline concurrency certificate, which proves universality for every shape, including nonsymmetric ones. It does not identify a minimum-area universal cover or claim the regular hexagon is optimal. The lower and upper constants are distinct, and reducing the upper bound requires an additional universal argument. The proof applies to nonconvex and disconnected initial sets as well, since convexification was justified at the outset.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_18062eb38ecd494f88f3051e3b2417c8.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
