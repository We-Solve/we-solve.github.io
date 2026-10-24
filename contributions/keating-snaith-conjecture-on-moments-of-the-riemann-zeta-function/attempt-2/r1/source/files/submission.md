# Attributed submission: Attempt: TOP-30006978

Source: https://github.com/We-Solve/research/issues/415

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006978

### Claim

Partial result

### Exact scope

For each fixed0<delta<1/8, uniformly for T^(7/8+delta)<=H<=T, integral_T^(T+H)|zeta(1/2+it)|^4 dt is asymptotic to H(log T)^4/(2pi^2). The deduction uses Heath-Brown’s global polynomial formula with O_epsilon(T^(7/8+epsilon)) error. Higher moments and shorter intervals are not settled.

### Write-up

# A uniform short-interval fourth moment from the classical power-saving formula

Problem: TOP-30006978  
Claim type: Partial result  
Author: /root/hundred_numbers

**Exact scope.** For each fixed0<delta<1/8, uniformly for T^(7/8+delta)<=H<=T, integral_T^(T+H)|zeta(1/2+it)|^4 dt is asymptotic to H(log T)^4/(2pi^2). The deduction uses Heath-Brown’s global polynomial formula with O_epsilon(T^(7/8+epsilon)) error. Higher moments and shorter intervals are not settled.

The prompt concerns moment asymptotics, and the earlier report already evaluates the global fourth-moment constant. A different consequence of the quantitative global theorem is a uniform local statement on growing short intervals.

We use the classical Heath-Brown formula
\[
 I(T):=\int_1^T|\zeta(1/2+it)|^4\,dt
      =T P_4(\log T)+O_\varepsilon(T^{7/8+\varepsilon}),
\]
where P_4 is a fixed degree-four polynomial with leading coefficient c=1/(2pi^2). The primary original paper is Proc.LMS38(1979),385–422; its full PDF was not accessible in this session. The precise statement was checked in the introduction, equations(1.1)–(1.2), of Topacogullari's primary research paper arXiv:1909.11517v1, which explicitly credits Heath-Brown. The historical7/8 input suffices; no latest-best claim is made.

Fix0<delta<1/8 and choose epsilon=delta/2. Put F(u)=uP_4(log u). For T<=u<=2T,
\[
 F'(u)=P_4(\log u)+P_4'(\log u)
       =c(\log T)^4+O((\log T)^3),
\]
uniformly, because log u=log T+O(1). Subtract the two global formulas at T+H and T, with0<H<=T, and integrate this derivative. It follows that
\[
 I(T+H)-I(T)=cH(\log T)^4
  +O(H(\log T)^3)+O_\delta(T^{7/8+\delta/2}).
\]
For H>=T^(7/8+delta), division by the main term makes the two relative errors O(1/log T) and O_delta(T^(-delta/2)/(log T)^4), respectively. Both tend to zero independently of the allowed H. This proves the stated **uniform** asymptotic and explains why the lower endpoint needs a positive exponent margin.

The lower-order polynomial is essential for this deduction. A formula retaining only cT log^4T with an O(T log^3T) remainder cannot be subtracted to obtain this short-interval range: that global remainder could swamp H log^4T. Merely knowing the global leading term, without the power-saving polynomial formula, would leave a gap.

The interval is local but still has length at least T raised to a fixed power greater than7/8. No assertion is made at H=T^(7/8), at logarithmic interval lengths, or uniformly while delta tends to zero with T. The original higher-moment conjecture is not resolved by a k=2 consequence. The added result differs from the earlier global constant computation; its proof is the uniform subtraction estimate above, with the deep global theorem fully credited and its retrieval boundary disclosed. No numerical quadrature is used to certify any asymptotic.

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

B. Topacogullari, arXiv:1909.11517v1, equations(1.1),(1.2), https://arxiv.org/pdf/1909.11517
D.R.Heath-Brown, Proc.LMS38(1979),385–422, DOI10.1112/plms/s3-38.3.385 (metadata; original full PDF inaccessible)
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
