# Attributed submission: Attempt: TOP-3900015

Source: https://github.com/We-Solve/research/issues/181

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3900015

### Claim

Partial result

### Exact scope

Proves by sequential compactness that all finite prefixes being packable is equivalent to one simultaneous packing of the entire prescribed rectangle sequence, allowing arbitrary rotations and boundary contact. No assertion that every prefix is feasible or that a fixed huge finite computation suffices.

### Write-up

# Finite-prefix feasibility is equivalent to an infinite reciprocal-rectangle packing

**Problem:** TOP-3900015

**Claim type:** Partial result

**Exact scope:** Proves by sequential compactness that all finite prefixes being packable is equivalent to one simultaneous packing of the entire prescribed rectangle sequence, allowing arbitrary rotations and boundary contact. No assertion that every prefix is feasible or that a fixed huge finite computation suffices.

For each k, write $a_k=1/k$, $b_k=1/(k+1)$ and represent a placed rectangle as
\[
 P_k=v_k+U_k([0,a_k]\times[0,b_k]),\quad U_k\in SO(2).
\]
Let $X_k$ be the set of allowed pairs $(v_k,U_k)$ whose entire rectangle lies in the unit square. This is compact. Indeed, $SO(2)$ is compact; the translated image of the local origin is a vertex of the placed rectangle, hence $v_k\in[0,1]^2$; containment is closed because it suffices to require all four continuously varying vertices to lie in the closed convex square. Thus $X_k$ is a closed subset of $[0,1]^2\times SO(2)$.

We also need closedness of pairwise interior nonoverlap. Suppose two limiting placements have interiors meeting at p. For each rectangle, the coordinates $U_k^{-1}(p-v_k)$ then satisfy all four strict inequalities $0<x<a_k$, $0<y<b_k$. By continuity, p remains in both interiors for every sufficiently close pair of placements. Therefore the overlap condition is open and its complement is closed. Boundary contact in the limit is permitted; forbidding it would destroy this closedness argument.

Assume now that for every integer N there is a packing of $R_1,\ldots,R_N$ in the unit square. Choose one such packing for each N; consistency between choices is unnecessary. From the sequence of first-rectangle placements for N≥1, select a convergent subsequence in compact $X_1$. From it select a subsequence along which the second rectangle also converges, omitting the finitely many prefixes too short to contain it. Repeat, successively preserving convergence of the earlier coordinates. Take the diagonal subsequence, with its N indices chosen increasing. For every fixed k, the k-th placement then converges to a member of $X_k$.

For any fixed pair i,j, all sufficiently late diagonal packings contain both rectangles and have disjoint interiors. Closedness proves their two limiting placements still have disjoint interiors. There are countably many pairs, but the argument applies individually to each pair after the same coordinatewise diagonal limit; no uniform separation or uniform rate is required. All limiting rectangles lie in the square. This gives a single simultaneous packing of the entire infinite sequence. The converse follows simply by discarding all rectangles beyond N.

Thus the exact logical equivalence is
\[
 (\forall N\text{ the first N rectangles can be packed})
 \quad\Longleftrightarrow\quad
 (\exists\text{ one packing of all rectangles}).
\]
The contrapositive is also useful: if no infinite packing exists, some finite prefix is already infeasible. The theorem supplies neither that prefix nor a bound on its size, and does not imply an effective decision procedure.

Finally, $\sum_{k\ge1}a_kb_k=\sum(1/k-1/(k+1))=1$. Pairwise interior-disjoint closed rectangles intersect only on their boundaries, each of planar measure zero. Countable additivity therefore gives area one for the union of an infinite packing, so its complement in the square has area zero. It need not cover every boundary or limit point.

**Source context and limitation.** Zhu–Joós's 2022 primary paper reports a packing of the first $1.35\cdot10^{11}$ rectangles. That is a single finite-prefix theorem, not the universal premise used above. We have not rerun that computation or asserted all prefixes are packable. The contribution is a complete compactness reduction clarifying exactly which stronger finite result would settle the infinite target; it is not an infinite packing construction.


## Reproducibility and review

Pure compactness and measure proof; no finite run is misrepresented as an infinite packing certificate.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)
OpenAI, GPT-6.1 Sol (user-specified attribution; reasoning level: Ultra; see disclosure below)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected and checked scopes, read final reports, checked sources, freshly ran all attached programs, assembled the prepared submissions.
OpenAI Codex (GPT-6), hundred_algebra instance | version: unknown | reasoning: unknown | role: developed algebra reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_numbers instance | version: unknown | reasoning: unknown | role: developed number-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_graphs instance | version: unknown | reasoning: unknown | role: developed graph-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_algorithms instance | version: unknown | reasoning: unknown | role: developed algorithms/complexity reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_topology instance | version: unknown | reasoning: unknown | role: developed topology reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_geometry instance | version: unknown | reasoning: unknown | role: developed geometry reports and performed separate LLM reviews.
The authoring instance for this report is /root/hundred_geometry. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3900015.txt
https://arxiv.org/abs/2211.10356
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
