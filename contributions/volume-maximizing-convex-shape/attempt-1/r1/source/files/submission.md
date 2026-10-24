# Attributed submission: Attempt: TOP-5500062

Source: https://github.com/We-Solve/research/issues/80

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-5500062

### Claim

Partial result

### Exact scope

Every nondegenerate disphenoid has an explicit convex parallelogram perimeter-halving net. At unit area, regular tetrahedra uniquely maximize volume within this subfamily, value 1/(6*sqrt(2)*3^(3/4)), an attained lower bound for the unrestricted optimization. No global maximum claim.

### Write-up

Problem: TOP-5500062 — Volume Maximizing Convex Shape

Title: A convex perimeter-halving net for every disphenoid, with a sharp volume bound within that family

Claim type: Partial result

Scope: Every nondegenerate disphenoid tetrahedron has an explicit convex parallelogram net whose prescribed perimeter-halving identification recovers that tetrahedron. Among the resulting unit-area foldings, the regular tetrahedron uniquely maximizes volume, with value $1/(6\sqrt2\,3^{3/4})$. This gives an attained lower bound for the unrestricted problem. It does not establish the global maximum among all convex regions or all their perimeter-halving foldings. No novelty claim is made.

Assumptions and limitations: A disphenoid means a tetrahedron with equal lengths on each pair of opposite edges. We use the prompt's intrinsic gluing definition, not a collision-free continuous folding motion. The existence/uniqueness principle for perimeter-halving quotients is provided by the original problem; in the examples below the desired convex realization is also constructed by its four face metrics. Flat degenerations have volume zero and do not alter the maximum in this restricted family.

Write-up:

Consider the four points
$$
p_1=(x,y,z),\quad p_2=(x,-y,-z),\quad
p_3=(-x,y,-z),\quad p_4=(-x,-y,z),\qquad x,y,z>0.
$$
Their opposite edges are equal in pairs, and all four triangular faces are congruent. This coordinate family covers every nondegenerate disphenoid up to rigid motion and reflection. Indeed, translate the centroid of any tetrahedron to the origin, call its vertex vectors $a,b,c,d$, and put $u=(a+b)/2$, $v=(a+c)/2$, $w=(a+d)/2$. Its vertices then equal $u+v+w,u-v-w,-u+v-w,-u-v+w$. Equality of the three pairs of opposite edge lengths gives $u\cdot v=u\cdot w=v\cdot w=0$. Nondegeneracy makes all three vectors nonzero. Orthogonal coordinates and suitable signs now give the displayed form.

Every face is acute: its three squared side lengths are
$$4(x^2+y^2),\quad4(x^2+z^2),\quad4(y^2+z^2),$$
and the sum of any two minus the third is strictly positive. We first construct a perimeter-halving net for any acute triangle with side lengths $a,b,c$.

Choose vectors $u=(2a,0)$ and $v=(b\cos\theta,b\sin\theta)$, where $\theta$ is the angle between sides $a,b$ opposite $c$. Acuteness gives $0<b\cos\theta<a$ and $b\sin\theta>0$. Define the convex parallelogram
$$A=0,\quad B=u,\quad C=u+v,\quad D=v,$$
and midpoints $X=u/2$, $Y=u/2+v$. Its two boundary arcs from $X$ to $Y$ have the same sequence of lengths $a,b,a$:
$$X\longrightarrow B\longrightarrow C\longrightarrow Y,
\qquad X\longrightarrow A\longrightarrow D\longrightarrow Y.$$
Thus the specified perimeter-halving identification fixes $X,Y$ and identifies $A$ with $B$, and $C$ with $D$, matching corresponding arclengths on the two arcs.

The three interior segments $XD,XY,YB$ split the parallelogram into the four triangles
$$AXD,\quad XDY,\quad XYB,\quad BYC.$$
They constitute a triangulation: $DX$ cuts off $AXD$; $XY$ splits the remaining pentagon into $XDY$ and the quadrilateral $XBCY$; $BY$ cuts the latter into the last two triangles. All four have side lengths $a,b,c$ by the vector formulas. After gluing, put $q=[A]=[B]$ and $r=[C]=[D]$. The four triangles have vertex sets
$$\{q,X,r\},\quad\{X,r,Y\},\quad\{X,Y,q\},\quad\{q,Y,r\},$$
which are precisely the four faces of a tetrahedron. Its opposite edge pairs have lengths $a,a$; $b,b$; and $c,c$. For a face of the given disphenoid, matching these edge lengths yields its convex facewise isometry. Hence every disphenoid is realized by an allowed convex perimeter-halving net. The flat material interior is not cut during this construction: the three segments are creases.

We next maximize volume in this family. A cross-product calculation gives each face area
$$2\sqrt{x^2y^2+x^2z^2+y^2z^2},$$
so the total surface area and volume are
$$S=8\sqrt{x^2y^2+x^2z^2+y^2z^2},\qquad V=\frac83xyz.$$
The net's area is exactly $S$, because its four triangles are the four faces without overlap. For $S=1$,
$$x^2y^2+x^2z^2+y^2z^2=\frac1{64}.$$
The arithmetic–geometric mean inequality gives
$$\frac1{64}\ge3(xyz)^{4/3}.$$
It follows that
$$
V\le\frac83\left(\frac1{192}\right)^{3/4}
=\frac1{6\sqrt2\,3^{3/4}}.
$$
Equality holds precisely when $x^2y^2=x^2z^2=y^2z^2$, equivalently $x=y=z$ in our positive coordinates. Thus the only maximizing disphenoid is a regular tetrahedron, up to congruence. Degenerate limits have $xyz=0$ and volume zero.

For an explicit unit-area maximizing net, let $a=3^{-1/4}$ and $h=\sqrt3\,a/2$. Set
$$
A=(0,0),\quad B=(2a,0),\quad C=(5a/2,h),\quad D=(a/2,h),
\quad X=(a,0),\quad Y=(3a/2,h).
$$
The parallelogram area is $2ah=1$. Its perimeter is $6a$; both indicated arcs from $X$ to $Y$ have length $3a$. Each of the four triangles above is equilateral of side $a$. Their quotient is the regular tetrahedron, whose volume is $a^3/(6\sqrt2)$, exactly the stated value. Consequently, if $V_*$ denotes the supremum in the original unrestricted problem, then
$$V_*\ge\frac1{6\sqrt2\,3^{3/4}}.$$
We do not assert that this is equality: a non-disphenoid folding could have larger volume, and no comparison with all such foldings is supplied.

The attached checker uses exact rational arithmetic in coordinates $(r,s\sqrt3)$ for the edge-one net. It checks convexity, all four equilateral face metrics, their positive areas and area sum, and the tetrahedral quotient with every edge incident to two faces. It also checks determinant, face-area and opposite-edge identities for 64 positive integer triples $(x,y,z)$. Those samples test the formulas; the displayed cross-product identities and AM–GM argument prove the continuous restricted-family statement. No numerical optimizer or approximate folding software is used.

Models used: OpenAI Codex, GPT-6; exact serving revision and settings unknown. Roles: construction and proof exposition, primary-source scope check, exact Python certificate and self-audit. No formal verification is claimed.

Human contributors and roles: The user requested the work. No human mathematical review is claimed. Joseph Malkevitch and the TOPP editors receive credit for the original optimization question and gluing framework.

References:

1. [Official We-Solve prompt](https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-5500062.txt), checked 18 October 2026.
2. Erik D. Demaine, Joseph S. B. Mitchell and Joseph O'Rourke, editors, [The Open Problems Project, Problem 62](https://topp.openproblem.net/p62). Exact perimeter-halving statement, origin and complete related-results section checked. It attributes the question to Joseph Malkevitch (2002), with the perimeter-halving restriction introduced at CCCG 2005; its square example is described as empirical. This report does not promote that empirical optimization to a theorem. The construction and restricted-family calculation above are self-contained.


## Reproducibility and review

Exact rational-coefficient convex net, four face metrics, areas and quotient checked; 64 disphenoid triples check determinant/area formulas. AM-GM proof covers the full continuous subfamily; no global optimizer computed.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: independent_verify.py


[Executable fenced material omitted from this text-only security-screened package; original retained privately.]

### Reproducibility file: verify.py


[Executable fenced material omitted from this text-only security-screened package; original retained privately.]


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected scopes, reviewed statements and proofs, checked sources, reran all attached programs, assembled and submitted.
OpenAI Codex (GPT-6), next_scout instance | version: unknown | reasoning: unknown | role: developed the covering-system, zero-sum and group-transversal reports; participated in separate LLM review.
OpenAI Codex (GPT-6), twoquad_audit instance | version: unknown | reasoning: unknown | role: developed the generic-ideal and Lefschetz reports; participated in separate LLM review.
OpenAI Codex (GPT-6), lattice_verify instance | version: unknown | reasoning: unknown | role: developed the graph-signing, coloring and complexity reports; participated in separate LLM review.
OpenAI Codex (GPT-6), psi_audit instance | version: unknown | reasoning: unknown | role: developed the derivative-root and Diophantine-tuple reports; participated in separate LLM review.
OpenAI Codex (GPT-6), rectangle_audit instance | version: unknown | reasoning: unknown | role: developed the visibility, minimum-link and sumset-sorting reports; participated in separate LLM review.
OpenAI Codex (GPT-6), scout_new instance | version: unknown | reasoning: unknown | role: developed the polyomino, distance and folding reports; participated in separate LLM review.
The authoring instance for this report is /root/scout_new; OpenAI Codex GPT-6, exact serving revision and settings unknown. Per-report independent audits identify the reviewer and checks actually performed. Exact serving revisions and reasoning configurations are unknown. No other LLM was used in this batch.

### People and roles

Gaven: prompted and authorized the twenty-problem batch and public submissions. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-5500062.txt
https://topp.openproblem.net/p62
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
