# Attributed submission: Attempt: TOP-5500058

Source: https://github.com/We-Solve/research/issues/59

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-5500058

### Claim

Partial result

### Exact scope

For every nondegenerate triangle of area A and longest side D with 4A>=D^2, an explicit endpoint-safe three-stripe coloring avoids all congruent monochromatic copies, including equality. The same fixed half-diameter stripe construction fails for every 4A<D^2 triangle; this is only a limitation of that coloring, not a disproof of the general question. No novelty or frontier claim is made.

### Write-up

# An endpoint-safe three-coloring for triangles of width at least half their diameter

**Problem:** TOP-5500058, Monochromatic Triangles.  
**Claim type:** Partial result.

**Exact scope.** If a nondegenerate triangle has area $A$ and longest side $D$ satisfying $4A\ge D^2$, an explicit three-coloring of the entire plane has no monochromatic congruent copy of it. Equality is included. We also prove that the particular half-diameter stripe coloring used here fails for every triangle with $4A<D^2$. That is a limitation of this coloring, not an impossibility theorem for other three-colorings. The full question for arbitrary triangles is not resolved. No historical novelty or best-known-range claim is made for the stripe method.

## 1. Projection width of a triangle

For a triangle $T$, define its minimum width $h$ as the minimum, over unit vectors $e$, of

$$
\max_{p\in T} e\cdot p-\min_{p\in T} e\cdot p.
$$

Then

$$
h=\frac{2A}{D}.
$$

Here is a direct proof adequate for all orientations. Fix a pair of perpendicular coordinate axes and let $W,H$ be the extents of the three vertices in these coordinates. A triangle contained in a rectangle of width $W$ and height $H$ has area at most $WH/2$. One way to verify that fact is to maximize the absolute signed-area determinant: it is affine in each coordinate separately, so its absolute maximum over the six coordinate intervals is attained with all vertices at rectangle corners. Three such corners span at most half the rectangle.

Since $H$ is a difference of two vertices' projections, $H\le D$. Thus $A\le WD/2$, or $W\ge2A/D$, for every projection direction. Conversely, choosing the projection perpendicular to a longest side makes its extent exactly the altitude to that side, $2A/D$. This proves the formula. In particular the hypothesis is equivalent to $h\ge D/2$.

## 2. The coloring, including stripe boundaries

Put $w=D/2$. For every integer $j$, use the half-open vertical stripe

$$
S_j=[jw,(j+1)w)\times\mathbb R,
$$

and color every point of $S_j$ by $1+(j\bmod3)$, taking remainders in $\{0,1,2\}$. These stripes partition the whole plane, including negative coordinates and points on stripe boundaries. Thus the rule defines a coloring of every point, with exactly three available colors and no regularity assumption needed.

Suppose the vertices of some congruent copy of $T$ had one color. If they all belong to a single stripe, their horizontal extent is **strictly less** than $w$. But every oriented copy has horizontal extent at least $h\ge w$, a contradiction.

Otherwise two vertices belong to different stripes of that same color. Their stripe indices differ by at least three. With the earlier point in $S_j$ and the later one in $S_{j+q}$, $q\ge3$, their horizontal separation is strictly greater than

$$
(q-1)w\ge2w=D.
$$

The strict inequality follows from the excluded right endpoint of $S_j$. Their Euclidean separation is at least their horizontal separation, contradicting the fact that every pair of triangle vertices is separated by at most $D$.

Both alternatives are impossible. The proof works for all translations, rotations and reflections. It uses congruence, with no scaling of a copy of the prescribed triangle. The stripe scale is chosen once from that triangle's given $D$.

## 3. Equality cases, examples and the method's exact limitation

If $4A=D^2$, then $h=w$. The preceding proof still applies because the one-stripe extent is strictly less than $w$ and the separation between different same-colored stripes is strictly greater than $D$. Therefore no boundary case is lost. A right isosceles triangle has $A=D^2/4$ and is covered. An equilateral triangle has $A=\sqrt3 D^2/4$ and is covered as well.

More broadly, the triangles with vertices $(0,0),(2,0),(1,t)$ satisfy the criterion for every $1\le t\le3$: their area is $t$, their squared diameter is $\max\{4,1+t^2\}$, and both $4\le4t$ and $1+t^2\le4t$ hold throughout that interval.

For the reverse statement about this particular coloring, suppose $h<D/2=w$. Orient a congruent copy so that its horizontal extent is the minimum width $h$. Translate it horizontally so that all three horizontal coordinates lie strictly between $0$ and $w$, which is possible because their extent is smaller than $w$. All vertices then lie inside $S_0$ and have the same color. Thus the fixed half-diameter stripe coloring works for $T$ **if and only if** $4A\ge D^2$.

This last implication does not rule out a different stripe scale, a different pattern, or any other three-coloring for a narrower triangle. The original quantified question permits all of those choices, so its remaining cases must not be labeled disproved.

## 4. Verification and scope

The argument is a proof over the entire continuum of positions and orientations; it does not infer a universal claim from sampled rotations. The rectangle-area bound, width identity, negative-index convention, strict endpoint inequalities, and equality threshold are accounted for explicitly. No computational root search or finite-plane experiment is used or claimed. No human mathematical review is claimed.

## Checked sources and attribution

1. The Open Problems Project, Problem 58, https://github.com/edemaine/topp/blob/main/Problems/P.000058 . This is the originating question, attributed there to Ron Graham, and the coloring may depend on the triangle. The exact official We-Solve prompt is retained in `official_prompt.txt`.
2. Current catalogue: https://we-solve.github.io/problems/monochromatic-triangles/ . The exact official prompt was obtained from https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-5500058.txt .

The stripe argument is supplied self-contained and is not asserted as a new historical result or as the best known partial answer. Prepared by OpenAI Codex (GPT-6; exact serving revision and settings unknown), agent /root/scout_new. Gaven prompted and authorized the work.


## Reproducibility and review

Self-contained proof of the triangle minimum-width identity, the global coloring for all translations/rotations/reflections, strict half-open endpoint bounds, equality case, and failure of this specific construction below the threshold. No continuum conclusion is based on sampling and no numerical verification is claimed.
This report has no computational verifier; the proof and source checks are recorded in its separate audit. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected scopes, reviewed statements and proofs, checked sources, reran all attached programs, assembled and submitted.
OpenAI Codex (GPT-6), next_scout instance | version: unknown | reasoning: unknown | role: developed the rank and decomposition reports; participated in separate LLM review.
OpenAI Codex (GPT-6), twoquad_audit instance | version: unknown | reasoning: unknown | role: developed the Hilbert-series reports; participated in separate LLM review.
OpenAI Codex (GPT-6), lattice_verify instance | version: unknown | reasoning: unknown | role: developed the SOS, half-plane and discrete-operator reports; participated in separate LLM review.
OpenAI Codex (GPT-6), psi_audit instance | version: unknown | reasoning: unknown | role: developed the Descartes and weighted-tropical reports; participated in separate LLM review.
OpenAI Codex (GPT-6), rectangle_audit instance | version: unknown | reasoning: unknown | role: developed the tetrahedralization, compatible-triangulation and grid-TSP reports; participated in separate LLM review.
OpenAI Codex (GPT-6), scout_new instance | version: unknown | reasoning: unknown | role: developed the unfolding, coloring and rolling-die reports; participated in separate LLM review.
The authoring instance for this report is /root/scout_new; OpenAI Codex GPT-6, exact serving revision and settings unknown. Per-report independent audits identify the reviewer and checks actually performed. Exact serving revisions and reasoning configurations are unknown. No other LLM was used in this batch.

### People and roles

Gaven: prompted and authorized the twenty-problem batch and public submissions. No human mathematical contribution or human verification is claimed.

### References

https://github.com/edemaine/topp/blob/main/Problems/P.000058
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-5500058.txt
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
