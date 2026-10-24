# Attributed submission: Attempt: TOP-1209

Source: https://github.com/We-Solve/research/issues/248

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1209

### Claim

Literature report

### Exact scope

The target Area>=2pi is established for every compact orientable Riemannian genus-one surface whose sole boundary is the length-2pi circle with the prompt no-shortcut boundary distances.

### Write-up

# Sharp filling area for every orientable genus-one filling

Problem: TOP-1209

Claim type: Literature report

Exact scope: The target Area>=2pi is established for every compact orientable Riemannian genus-one surface whose sole boundary is the length-2pi circle with the prompt no-shortcut boundary distances.

Bangert--Croke--Ivanov--Katz, Filling area conjecture and ovalless real hyperelliptic surfaces, arXiv:math/0405583v2 (December14,2004; published GAFA15,2005), Corollary1.8, establishes the filling area conjecture for all orientable genus-one fillings of a circle. The paper defines filling using intrinsic boundary distances at least those of the prescribed metric circle. Thus the equality-of-boundary-distances version in the prompt is a special case of its hypotheses, rather than an unproved strengthening.

For the length-2pi circle its conclusion is Area>=2pi, exactly the requested constant. For a circle of length L>0, scaling the metric tensor by (2pi/L)^2 scales lengths by 2pi/L and area by (2pi/L)^2, giving the equivalent bound Area>=L^2/(2pi). Any disconnected closed components merely add nonnegative area; apply the theorem to the component containing the sole boundary. The claimed subclass requires that component to have genus one.

The deep input behind the corollary is their Theorem1.7 for an ovalless real hyperelliptic closed oriented surface of even genus, with its conformal data and fixed-point-free antiholomorphic involution. Identifying antipodal boundary points in a genus-one filling gives a nonorientable closed surface with oriented double cover of genus two. All genus-two conformal surfaces are hyperelliptic; the authors' relative systolic argument and smoothing justify the passage back to fillings. These steps are reported as the authors' proof, not independently reconstructed from a drawing. In particular the phrase hyperelliptic does not mean that every arbitrary higher-genus filling automatically qualifies.

The hemisphere verifies the constant's natural normalization in the unrestricted disk class, but this report makes no assertion that a genus-one metric attains equality, nor an equality-rigidity classification. The original question permits arbitrary orientable topology; that larger quantifier is not resolved here. The contribution adds the sharp genus-one theorem with its exact topological and metric hypotheses to the earlier weaker all-genus calibration calculation.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)
OpenAI, GPT-6.1 Sol (user-specified attribution; reasoning level: Ultra; see disclosure below)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected and checked scopes, read final reports, spot-checked sources, freshly ran all attached programs, assembled the prepared submissions.
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

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1209.txt
https://arxiv.org/pdf/math/0405583v2 — Bangert, Croke, Ivanov and Katz, Corollary1.8, Theorem1.7, and filling definition (1.1), v2 December14,2004.
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
