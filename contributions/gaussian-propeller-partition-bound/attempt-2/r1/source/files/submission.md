# Attributed submission: Attempt: TOP-30007119

Source: https://github.com/We-Solve/research/issues/425

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007119

### Claim

Partial result

### Exact scope

For every finite measurable partition of standard Gaussian R^2, the squared first-moment sum is at most 9/(8 pi), attained by three 120-degree sectors; the same holds for cylindrical planar partitions in higher dimensions.

### Write-up

# The planar Gaussian propeller inequality with all measurable cells allowed

Problem: TOP-30007119

Claim type: Partial result

Exact scope: For every finite measurable partition of standard Gaussian R^2, the squared first-moment sum is at most 9/(8 pi), attained by three 120-degree sectors; the same holds for cylindrical planar partitions in higher dimensions.

Let b_i=int_(A_i) x d gamma_2 and S=sum||b_i||^2. Define a new partition by assigning x to a maximizing linear score x dot b_i, breaking ties by fixed index. Its moments are b_i'. Pointwise maximization gives
\[
 \sum_i b_i\cdot b_i'=\int\max_i x\cdot b_i\,d\gamma_2
 \ge\sum_i\int_{A_i}x\cdot b_i\,d\gamma_2=S.
\]
Cauchy--Schwarz then implies S<=sqrt(S S'), where S'=sum||b_i'||^2. If S>0 divide to get S' >= S; if S=0 the desired bound is immediate. Thus replacing arbitrary measurable cells by linear-score cells can only increase the objective.

After discarding zero-area cells, the new cells are conical angular sectors, possibly halfplanes or one full plane. Indeed the maximizer regions are normal cones of the convex hull of the finitely many score vectors. Distinct score vectors tie only on lines, of Gaussian measure zero; duplicate scores may be assigned to just one index. Their sector angles theta_j are nonnegative and sum to 2pi. A sector of angle theta has first moment parallel to its bisector. Polar integration gives
\[
 \left\|\int_{\rm sector}x\,d\gamma_2\right\|^2
 ={\sin^2(\theta/2)\over2\pi}:
\]
the angular integral is 2sin(theta/2), and the radial coefficient is (2pi)^(-1) int_0^infty r^2 e^(-r^2/2)dr=1/(2sqrt(2pi)). These formulas also handle the full plane, with zero moment.

We prove sum sin^2(theta_j/2)<=9/4 for any finite list of nonnegative angles totaling 2pi. With at least four positive angles, the two smallest a,b satisfy a+b<=pi. Merging them changes the sum by
\[
 \sin^2((a+b)/2)-\sin^2(a/2)-\sin^2(b/2)
 =2\sin(a/2)\sin(b/2)\cos((a+b)/2)\ge0.
\]
Continue until at most three angles remain, padding with zeros if needed. Set A_j=theta_j/2, so sum A_j=pi. The identity
\[
 \sum_{j=1}^3\cos(2A_j)=-1-4\prod_{j=1}^3\cos A_j
\]
follows from angle addition and A_3=pi-A_1-A_2. If one A_j>=pi/2, the product is nonpositive, giving a sum of cosines at least -1. Otherwise concavity of log cos on [0,pi/2) yields product cos A_j <= cos^3(pi/3)=1/8. In every case sum cos(2A_j)>=-3/2, and so sum sin^2 A_j<=(3+3/2)/2=9/4. The replacement inequality and sector formula establish S<=9/(8pi).

Three equal sectors attain it by direct integration. Empty cells are allowed; their moments vanish. For a partition A_i=B_i times R^(d-2) in an orthogonal decomposition, independence and the zero mean of the remaining Gaussian coordinates make each moment (b_i,0), so the same value and bound transfer exactly. Arbitrary higher-dimensional measurable partitions need not be cylindrical; no bound for them is proved here. The argument supplies a complete planar proof rather than relying on the archive's unverified all-dimensional announcement.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.


### Who did the work

LLM only (people only prompted or submitted)

### Models used

OpenAI GPT 6.1 Sol, Other (named below)

### Thinking level / time

Mixed (specified per model below)

### Other LLMs

OpenAI, Codex (GPT-6)
OpenAI, GPT-6.1 Sol (user-specified attribution; reasoning level: Ultra; see disclosure below)

### Per-model versions, thinking and roles

GPT-6.1 Sol (supplemental user-specified attribution) | version: unknown | thinking: Ultra (user-specified; not independently verified) | time: unknown | role: requested attribution, supplementing the historical records below.

OpenAI Codex (GPT-6), main instance | version: unknown | thinking: unknown | time: unknown | role: selected and checked scopes, read final reports, spot-checked sources, freshly ran all attached programs, assembled the prepared submissions.
OpenAI Codex (GPT-6), hundred_algebra instance | version: unknown | thinking: unknown | time: unknown | role: developed algebra reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_numbers instance | version: unknown | thinking: unknown | time: unknown | role: developed number-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_graphs instance | version: unknown | thinking: unknown | time: unknown | role: developed graph-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_algorithms instance | version: unknown | thinking: unknown | time: unknown | role: developed algorithms/complexity reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_topology instance | version: unknown | thinking: unknown | time: unknown | role: developed topology reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_geometry instance | version: unknown | thinking: unknown | time: unknown | role: developed geometry reports and performed separate LLM reviews.
The authoring instance for this report is /root/hundred_geometry. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### Model eligibility and verification evidence

The historical research records identify OpenAI Codex (GPT-6) instances with exact serving revisions and reasoning settings unknown. Each report has a separate LLM audit, with the original author/reviewer identities and source/program hashes retained in the research bundle. Those records describe the checks performed; they do not independently establish the historical runtime configuration or a previously demonstrated qualifying architecture. GPT-6.1 Sol with Ultra reasoning is the submitting user's explicit supplemental attribution, not independently verified runtime metadata or a retrospective reassignment of the earlier work. The Mixed selection preserves that distinction between the user's stated attribution and the unknown historical settings. No editorial acceptance is claimed.

### People and roles

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007119.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
