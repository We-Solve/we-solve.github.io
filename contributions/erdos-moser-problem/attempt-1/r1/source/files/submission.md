# Attributed submission: Attempt: TOP-9400105

Source: https://github.com/We-Solve/research/issues/357

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-9400105

### Claim

Literature report

### Exact scope

Every hypothetical positive-integer solution sum_{j=1}^{m-1} j^k=m^k with k>=2 has m>2.7139*10^1667658416 and 2k/(2m-3) an even-index convergent of log2, by Gallot–Moree–Zudilin Theorem3 and Corollary1. Their large computation is credited, not independently rerun here; nonexistence is not proved.

### Write-up

# A certified literature barrier and continued-fraction restriction for Erdős–Moser

Problem: TOP-9400105  
Claim type: Literature report  
Author: /root/hundred_numbers

**Exact scope.** Every hypothetical positive-integer solution sum_{j=1}^{m-1} j^k=m^k with k>=2 has m>2.7139*10^1667658416 and 2k/(2m-3) an even-index convergent of log2, by Gallot–Moree–Zudilin Theorem3 and Corollary1. Their large computation is credited, not independently rerun here; nonexistence is not proved.

The literal equation has the elementary solution k=1,m=3. For k=1, summing the arithmetic progression gives m(m-1)/2=m and hence m=3 for positive m. The question is the existence of a nontrivial solution with k>=2. A large published obstruction does not settle that unbounded question.

Gallot, Moree and Zudilin, *The Erdős–Moser equation ... revisited using continued fractions*, prove in Theorem3 of the accessible arXiv:0907.1356v1 manuscript that every such solution satisfies
\[
 m>2.7139\cdot10^{1667658416}.
\]
The work was published in *Mathematics of Computation*80 (2011). This is a theorem credited to that work and its extensive computation; the computation has not been rerun in this report. The bound is a checked historical version, not a claim of the latest record.

The source also supplies a structural necessary condition, Corollary1:
\[
 \frac{2k}{2m-3}=\frac{p_j}{q_j},
\]
where p_j/q_j is a reduced continued-fraction convergent to log2 with even index j, under the convention p_0/q_0=0/1. The fraction on the left must first be reduced; its written numerator and denominator need not be coprime. Ignoring a common factor would invalidate an enumeration based on this condition.

The mechanism is more informative than a finite search over m. Theorem1 gives a quantitative expansion for the unique real exponent associated with each m. In its proof of Corollary1 the authors establish
\[
 0<\log2-\frac{2k}{2m-3}
   <\frac{0.0111}{(2m-3)^2}.
\]
After reducing to denominator q_j<=2m-3, the error is still less than 1/(2q_j^2), so Legendre's approximation criterion forces a convergent. The positive difference selects the even-index side. This last implication is a direct check of the approximation and sign conventions, while the sharp input estimate and computational lower bound remain the authors' results.

Neither criterion proves that a later convergent cannot produce a solution. A putative candidate must also satisfy the exact power-sum equation and all arithmetic restrictions in the source. No finite decimal approximation to log2 is itself an infinite certificate: rigorous error control is part of the cited computation, and no downloaded implementation is attached or silently treated as verified here. The fresh prompt lists no earlier contributions. The result excludes an explicit initial range and narrows the shape of any remaining solution; it does not prove uniqueness of (m,k)=(3,1).

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.


## Reproducibility and review

Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.

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
The authoring instance for this report is /root/hundred_numbers. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

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

Gallot–Moree–Zudilin, arXiv:0907.1356v1, Theorems1 and3, Corollary1, https://arxiv.org/pdf/0907.1356
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
