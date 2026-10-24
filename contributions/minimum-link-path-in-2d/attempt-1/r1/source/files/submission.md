# Attributed submission: Attempt: TOP-5500022

Source: https://github.com/We-Solve/research/issues/76

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-5500022

### Claim

Partial result

### Exact scope

Self-contained exact O(n)-time minimum-link classification and attaining path for one full-dimensional convex polygonal obstacle, with unrestricted orientations and boundary contacts allowed; identify the opposite parallel edge-interior three-link exception.

### Write-up

# Exact minimum-link paths around one convex obstacle, including boundary endpoints

Problem: **TOP-5500022** (Math-1658, Minimum-Link Path in 2D).  
Claim type: **Partial result**.  
Scope: An exact linear-time algorithm and attaining path when the obstacle family consists of one full-dimensional convex polygon with $n$ vertices. All link orientations are permitted, and obstacle-boundary contacts are allowed as in the official statement.

Let $K$ be that polygon, supplied in boundary order, and let $s,t\in\mathbb R^2\setminus\mathrm{int}(K)$. After removing redundant collinear boundary vertices, a point on the boundary is either a vertex or lies in the relative interior of an edge. The link distance is:

- zero if $s=t$;
- one if $s\ne t$ and $[s,t]\cap\mathrm{int}(K)=\varnothing$;
- three if $s,t$ lie in the relative interiors of opposite parallel supporting edges of $K$;
- two in every remaining case.

“Opposite” here means that the two edges have oppositely directed outward normals; their supporting lines are distinct. In the three-link case, the direct segment necessarily meets the interior. In particular, strictly exterior endpoints always need at most two links. The extra boundary case matters: for $K=[0,1]^2$, the points $(0,1/2)$ and $(1,1/2)$ need exactly three.

This is a broad restricted case, not a subquadratic algorithm for arbitrary obstacle families. No novelty is claimed for the convex-obstacle facts.

## A supporting-halfplane construction

For any nonzero vector $a$, put
$$
h(a)=\max_{p\in K}a\cdot p,
\qquad H(a)=\{z:a\cdot z\geq h(a)\}.
$$
The segment between any two points in $H(a)$ avoids $\mathrm{int}(K)$. Thus, if $s\in H(a)$, $t\in H(b)$, and $q\in H(a)\cap H(b)$, then $s,q,t$ is a path with at most two links.

We can choose such supporting normals $a,b$ unless the stated opposite-edge case occurs. For a strictly exterior point, some edge inequality is strictly violated, giving a strictly separating outward normal. For a boundary-edge interior point, use the outward normal of its edge. For a vertex, either of the two incident edge normals works; these two are nonparallel after removing redundant collinear vertices.

If the selected normals are not opposite, their exterior halfplanes intersect. More explicitly, if $a,b$ are linearly independent, solve the two-by-two system
$$
a\cdot d=b\cdot d=1.
$$
If they are positively parallel, take $d=a$. In either case $a\cdot d,b\cdot d>0$, and
$$
q=Rd,\qquad
R=1+\max\left(0,\frac{h(a)}{a\cdot d},\frac{h(b)}{b\cdot d}\right)
$$
lies strictly in both exterior halfplanes.

If the selected normals are opposite and an endpoint is a vertex, choose its other incident edge normal. This removes opposition. If instead an endpoint, say $s$, is strictly exterior, its strictly separating normal can be perturbed explicitly. Let $v$ be a quarter-turn of $a$, and define
$$
\delta=\min_{p\text{ vertex of }K}a\cdot(s-p)>0,
\quad M=\max_{p\text{ vertex of }K}|v\cdot(s-p)|,
\quad a'=a+\frac{\delta}{2(M+1)}v.
$$
Then $a'\cdot(s-p)>\delta/2$ for every vertex $p$. Hence $s\in H(a')$, and $a'$ is not parallel to the old $a$, so it is not opposite to $b$. This again supplies the two-link construction.

The only remaining case has both endpoints in edge interiors and the associated outward normals opposite. This proves the two-link upper bound in every other case, with actual finite coordinates for a bend. If the direct segment is blocked, fewer than two links are impossible, so the construction is optimal there.

## Why the exceptional case needs exactly three links

Let $s$ lie in the relative interior of a supporting edge with outward normal $a$. Any free segment $[s,q]$ must satisfy $a\cdot q\geq h(a)$. Indeed, a direction strictly into the edge's interior halfplane immediately enters the polygon, because $s$ is in the edge's relative interior. This is a local assertion and remains true even though boundary contacts themselves are permitted.

For $t$ on the opposite parallel supporting edge, put $\ell=\min_{p\in K}a\cdot p$. The analogous necessary condition for a free segment $[t,q]$ is $a\cdot q\leq\ell$. Since $K$ has positive area, $\ell<h(a)$. The two necessary halfplanes are disjoint. Thus no one-bend path exists, including bends on boundary lines.

For an attaining three-link path, take a nonzero vector $v$ parallel to the two edges and set
$$
H=1+\max_{p\text{ vertex of }K}v\cdot p,
\quad q_s=s+\frac{H-v\cdot s}{v\cdot v}v,
\quad q_t=t+\frac{H-v\cdot t}{v\cdot v}v.
$$
The first and last segments stay on the two supporting lines. The middle segment stays on $v\cdot z=H$, beyond all of $K$. Therefore $s,q_s,q_t,t$ is a free three-link path and the lower bound is attained.

## Running time and exact conventions

For a counterclockwise convex polygon, all edge inequalities and outward normals are obtained in one scan. Membership and boundary-face classification take $O(n)$ time. To test the direct segment, substitute $z=s+\lambda(t-s)$ into every strict interior inequality and intersect the resulting intervals with $0\leq\lambda\leq1$. This is one-dimensional convex clipping and takes $O(n)$ time, including parallel and equality cases. The segment is blocked exactly when that intersection is nonempty.

At a vertex there are only two incident nonparallel normals to consider, so the normal selection takes constant extra work after the scan. A perturbation, when needed, takes another $O(n)$ scan to compute $\delta,M,h(a')$. The bend formulas require only a constant number of arithmetic operations. Redundant collinear boundary vertices can be removed in linear time, or treated as parts of their maximal edges. Thus total time is $O(n)$ and the output has at most three links. This is the usual unit-cost real-arithmetic model; rational inputs give rational constructed bends, but no unit bit-cost assertion is made. Consecutive redundant collinear links may be merged; the lower bounds show that this cannot reduce the claimed optimal count in a blocked case.

## Relation to the primary general-domain literature

Mitchell, Polishchuk and Sysikaski [1], Theorem 2.1, prove 3SUM-hardness of exact unrestricted link distance in a polygonal domain with holes, even deciding three links in a rectilinear domain. Their Theorem 2.7 gives an $O(\sqrt h)$ approximation in $O(n\sqrt h+n\log n+h\sqrt h\log h)$ time for $h\geq1$. These are contextual results for their domain formulation, not used in the convex-obstacle proof above. No reduction from their bounded-domain hardness instance to the official unbounded obstacle model is asserted here. Also, a conditional exclusion of truly subquadratic time would not by itself exclude every $o(n^2)$ bound, such as a logarithmic saving. Approximation and restricted link directions do not solve the official exact unrestricted task.

## Verification and remaining scope

`verify.py` uses rational arithmetic to construct the stated paths for several convex polygons, including parallel-edge and nonparallel-edge cases, strict exterior endpoints, edge midpoints, and vertices. Every output segment is independently checked against the polygon's strict interior inequalities. The three-link cases additionally certify opposite supporting lines and edge-interior endpoints. `verification.json` records the exact finite checks. The proof supplies the result for every convex polygon; the computation does not settle general obstacle arrangements.

Models used: OpenAI Codex **GPT-6**, exact serving revision/settings not exposed, for proof, source checking, code, and drafting. Human contributor: Gaven requested and coordinated the contribution; no independent human proof verification is asserted. No theorem prover or novelty certification was used.

References checked:

1. Joseph S. B. Mitchell, Valentin Polishchuk, and Mikko Sysikaski, *Minimum-Link Paths Revisited*, [arXiv:1302.3091v1](https://arxiv.org/pdf/1302.3091), 13 February 2013, especially Theorems 2.1 and 2.7. Results are credited to these authors; the convex proof here is self-contained.
2. [TOPP Problem 22](https://topp.openproblem.net/p22), problem context; the exact official We-Solve prompt is copied in `official_prompt.txt`.


## Reproducibility and review

Exact rational path construction and independent strict-interior segment clipping for five convex polygons, including exterior, vertex, and edge-interior endpoints; all 0/1/2/3 link cases checked. See verification.json for finite counts; all-n proof in report. Independent model-assisted review passed; see independent_audit.md.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

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
The authoring instance for this report is /root/rectangle_audit (OpenAI Codex GPT-6; exact serving revision/settings unknown). Per-report independent audits identify the reviewer and checks actually performed. Exact serving revisions and reasoning configurations are unknown. No other LLM was used in this batch.

### People and roles

Gaven: prompted and authorized the twenty-problem batch and public submissions. No human mathematical contribution or human verification is claimed.

### References

https://arxiv.org/pdf/1302.3091
https://topp.openproblem.net/p22
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
