# Attributed submission: Attempt: TOP-5500017

Source: https://github.com/We-Solve/research/issues/75

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-5500017

### Claim

Literature report

### Exact scope

Credit the 2022 polynomial-time pseudo-polygon recognition/reconstruction update, distinguish holes and joint internal/external hardness, and give a boundary-inclusive O(n^3) necessary abstract-triangulation test. No full recognition or complexity classification of the exact official task.

### Write-up

# Polynomial pseudo-polygon recognition is a related result, not straight-line recognition

Problem: **TOP-5500017** (Math-1657, Visibility Graph Recognition).  
Claim type: **Literature report**.  
Scope: A precise update for pseudo-polygons, distinctions from two real-algebraic hardness results, and a self-contained cubic-time necessary triangulation test for the exact prescribed-boundary problem. No full recognition algorithm or complexity classification for the official simple-polygon task is claimed.

The polynomial-time recognition result of Ameer, Gibson-Lopez, Krohn and Wang, SWAT 2022 [1], is for **pseudo-polygons**. The official question requires ordinary simple polygons with straight edges and ordinary straight-segment visibility. That distinction cannot be removed by calling both objects polygons.

## What the checked primary results actually say

In [1], a pseudo-configuration replaces the straight line through each pair of points by a pseudoline. Boundary and visibility use the corresponding curved subarcs. Theorem 6, p.7:12, recognizes pseudo-polygon visibility graphs with a prescribed labelled Hamiltonian boundary cycle in polynomial time. Theorem 7 reconstructs a pseudo-polygon in polynomial time. These improve the older mere NP-membership statement for that related problem. The paper's general-position formulation does not require the reconstruction to give ordinary straight-line coordinates. Thus neither theorem supplies the geometric realization required by TOP-5500017.

Boomari, Ostovari and Zarei [2], version 3 dated 20 February 2024, give two different $\exists\mathbb R$-completeness results: Theorem 2 concerns polygons **with holes**, with their boundary cycles; Theorem 4 concerns simple polygons given **both internal and external visibility graphs**, together with the boundary cycle. An external-visibility graph imposes additional exact constraints: it is not generally the complement of internal visibility, because a segment may pass partly inside and partly outside. These hardness statements do not classify recognition with only the internal graph and one boundary cycle. Their introduction explicitly distinguishes that unresolved problem.

The statements above report the specified primary versions, not an exhaustive certification of the literature through October 2026. The corresponding full proofs have not been formally verified here. No claim of NP membership via a polynomial-size rational-coordinate witness is made.

There is also a convention issue when using pseudo-polygon recognition as a rejection filter: [1] defines its pseudo-configurations in general position. A straight-line realization in that position is a special case, but the official prompt permits collinearities and boundary-only visibility. Without a visibility-preserving general-position reduction, its rejection cannot silently be extended to every degenerate instance of the official task. The elementary filter below has no such assumption.

## A necessary triangulation test for the exact official input

Let $C=(0,1,\ldots,n-1)$ be the prescribed cycle, and write $e(i,j)$ for whether $\{i,j\}$ belongs to $G$. First reject a missing cycle edge. For $i<j$, define $T(i,j)$ to mean that the abstract cyclic interval $i,i+1,\ldots,j$ can be triangulated using only edges of $G$. Set $T(i,i+1)=\mathrm{true}$, and for $j\geq i+2$ set
$$
T(i,j)=e(i,j)\ \land\!
\bigvee_{i<k<j}\left(e(i,k)\land e(k,j)\land T(i,k)\land T(k,j)\right).
$$
Compute intervals in increasing order of length. Reject if $T(0,n-1)$ is false. The table has $O(n^2)$ entries, each trying $O(n)$ split positions, so the test takes $O(n^3)$ time and $O(n^2)$ space. A successful split table also returns $n-3$ cyclically noncrossing graph diagonals.

To prove the recurrence, consider the triangle incident with the closing edge $(i,j)$ in any interval triangulation. Its third vertex is some $k$ between them. The other two edges must be present, and deleting that triangle leaves the two indicated smaller triangulated intervals. Conversely, join any two triangulations certified by the recurrence to this triangle. Their cyclic intervals are disjoint except at the join, so the resulting diagonals do not interleave. This proves equivalence to an **abstract** triangulation certificate.

If the official geometric realization exists, its simple polygon has a triangulation with its given vertices and no Steiner vertices. Every diagonal of that triangulation is a closed segment inside the polygon, hence an edge of $G$. Its triangles therefore certify $T(0,n-1)$. This remains true with redundant collinear boundary vertices: triangulate the polygon respecting those vertices, or remove redundant vertices first and reinsert each by splitting the triangle incident with its boundary edge. Thus rejection is sound with the official boundary-inclusive convention.

Acceptance only gives a combinatorial certificate inside a convex drawing of the cyclic order. It does not supply coordinates for a polygon whose visibility graph is exactly $G$. In particular, the test neither enforces all requested nonedges nor checks the further geometric conditions in [1,2]. This is the standard triangulability necessary condition, presented with an explicit algorithm and finite verification; no novelty is claimed.

## Exact finite verification and remaining gap

`verify.py` enumerates every graph containing the prescribed cycle for $3\leq n\leq7$, a total of 16,933 graphs. It compares the dynamic program to an independent enumeration of all sets of $n-3$ noninterleaving diagonals of a convex $n$-gon. It also reconstructs and checks a certificate for every accepted graph. The independent triangulation counts are $1,2,5,14,42$. `verification.json` records the results. This verifies the combinatorial recurrence on those finite inputs; it is not a geometric recognition experiment and makes no inference that accepted graphs have exact visibility realizations.

The missing step in the original problem remains a uniform decision method for straight-line realizability with all edges and nonedges exact, or a correct complexity classification of that same task. Changing to curves, adding holes, adding visibility data, or asserting small rational witnesses without proof does not provide that step.

Models used: OpenAI Codex **GPT-6**, exact serving revision/settings not exposed, for source inspection, proof, verification code, and drafting. Human contributor: Gaven requested and coordinated this research contribution; no independent human proof checking is asserted. No theorem prover was used.

References checked:

1. Safwa Ameer, Matt Gibson-Lopez, Erik Krohn, Qing Wang, *On the Visibility Graphs of Pseudo-Polygons: Recognition and Reconstruction*, SWAT 2022, LIPIcs 227, article 7, pp.7:1–7:13, [DOI 10.4230/LIPIcs.SWAT.2022.7](https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.SWAT.2022.7), especially §1–2 and Theorems 6–7.
2. Hossein Boomari, Mojtaba Ostovari, Alireza Zarei, *Recognizing Visibility Graphs of Polygons with Holes and Internal-External Visibility Graphs of Polygons*, [arXiv:1804.05105v3](https://arxiv.org/html/1804.05105v3), 20 February 2024, especially Theorems 2 and 4 and §2.1.1. This contribution does not claim a publication status beyond the checked preprint.
3. [TOPP Problem 17](https://topp.openproblem.net/p17), original prescribed-cycle question. Exact official statement copied in `official_prompt.txt`.


## Reproducibility and review

All 16,933 cycle-containing graphs for n=3..7: interval DP agrees with independently enumerated noninterleaving diagonal sets; every accepted certificate checked. Abstract triangulations only, not geometric recognition. Independent model-assisted review passed; see independent_audit.md.
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

https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.SWAT.2022.7
https://arxiv.org/html/1804.05105v3
https://topp.openproblem.net/p17
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
