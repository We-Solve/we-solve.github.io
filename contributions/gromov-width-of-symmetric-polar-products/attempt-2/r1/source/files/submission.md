# Attributed submission: Attempt: TOP-30007128

Source: https://github.com/We-Solve/research/issues/427

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007128

### Claim

Literature report

### Exact scope

For every origin-centered ellipse K in R^2, the open polar product int K times int K° in standard symplectic R^4 has Gromov width4; embeddings of all ball capacities c<4 exist.

### Write-up

# Gromov width four for every planar ellipsoid polar product

Problem: TOP-30007128

Claim type: Literature report

Exact scope: For every origin-centered ellipse K in R^2, the open polar product int K times int K° in standard symplectic R^4 has Gromov width4; embeddings of all ball capacities c<4 exist.

The imported geometric theorem is Ramos, Symplectic embeddings and the Lagrangian bidisk, arXiv:1509.05755v2 (November14,2016), Theorem3: the interior of the Lagrangian bidisk P_L=B^2_q times B^2_p is symplectomorphic to a toric domain with moment region bounded by the axes and
\[
 (x(\alpha),y(\alpha))=
 (2\sin(\alpha/2)-\alpha\cos(\alpha/2),
 2\sin(\alpha/2)+(2\pi-\alpha)\cos(\alpha/2)),
 \quad0\le\alpha\le2\pi.
\]
The same paper's Theorem1(c) embeds int P_L into the symplectic polydisk P(4,4). These are substantial imported embedding results; no embedding code or ECH proof is rerun here.

We give the capacity deduction explicitly. Set beta=alpha/2. Then
\[
 x+y=4\bigl(\sin\beta+(\pi/2-\beta)\cos\beta\bigr)\ge4.
\]
The derivative of the bracket is -(pi/2-beta)sin beta, so it decreases to1 at beta=pi/2 and increases thereafter. Moreover x'= (alpha/2)sin(alpha/2)>=0 and y'=-(2pi-alpha)sin(alpha/2)/2<=0. The boundary is therefore a decreasing graph from(0,2pi) to(2pi,0). Since every boundary point has x+y>=4, the positive-axis triangle x+y<4 lies in its interior side. Under the moment map(z_1,z_2) to(pi|z_1|^2,pi|z_2|^2), that triangle is exactly the open ball of capacity4; restricting to any c<4 avoids all boundary issues. Theorem3 thus gives c_G(int P_L)>=4.

Conversely Theorem1(c), monotonicity of Gromov width, and Gromov nonsqueezing give c_G(int P_L)<=c_G(P(4,4))=4. Indeed P(4,4) lies inside the capacity4 cylinder in either complex coordinate and contains all balls of capacity<4. Hence equality follows. The upper bound uses width/nonsqueezing, not just a volume calculation or another capacity's value.

Now write any origin-centered ellipse K=A B^2, A invertible. Its polar is A^(-T)B^2. The linear map S(q,p)=(Aq,A^(-T)p) preserves sum dq_j wedge dp_j, because the coefficient pairing matrix is A^T A^(-T)=I. It maps int P_L exactly onto int K times int K°. Symplectic invariance transfers width4 and every c<4 embedding. Translations of K are not allowed in this step because polarity is defined about the fixed origin.

The report covers n=2 and all centered ellipses, with no claim for arbitrary symmetric planar bodies or higher dimensions. It does not equate Ekeland--Hofer--Zehnder capacity4 with Gromov width without a lower embedding, and it does not claim that a supremal capacity4 embedding is attained.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007128.txt
https://arxiv.org/pdf/1509.05755v2 — Ramos, Theorem3 explicit toric bidisk model and Theorem1(c) polydisk embedding, v2 November14,2016.
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
