# Attributed submission: Attempt: TOP-9400132

Source: https://github.com/We-Solve/research/issues/359

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-9400132

### Claim

Literature report

### Exact scope

For every d>=2 and gcd(a,d)=1, the least prime p(a,d) is at most C d^5.2 for one effectively computable absolute C, by Xylouris, arXiv:0906.2749v1, Theorem 1.1. This does not establish the strict bound p(a,d)<d^2 requested in the prompt.

### Write-up

# A versioned effective bound for the least prime in a progression

Problem: TOP-9400132  
Claim type: Literature report  
Author: /root/hundred_numbers

**Exact scope.** For every d>=2 and gcd(a,d)=1, the least prime p(a,d) is at most C d^5.2 for one effectively computable absolute C, by Xylouris, arXiv:0906.2749v1, Theorem 1.1. This does not establish the strict bound p(a,d)<d^2 requested in the prompt.

The literal assertion is a strict quadratic inequality for **every** reduced residue class and modulus. It is stronger than an asymptotic estimate with an unspecified constant. A checked unconditional comparison is available from the following versioned primary theorem.

Triantafyllos Xylouris, *Über die Linniksche Konstante*, arXiv:0906.2749v1 (2009), defines P(q) as the largest least prime over the reduced residue classes modulo q and proves in Theorem 1.1 that P(q) is bounded by an effectively computable absolute constant times q^5.2. This is the result reported here; it is not a claim about the strongest exponent in later work.

The passage to the prompt's quantifiers is direct. For each d>=2, reduce a modulo d. Coprimality makes its class one of those occurring in the maximum P(d). Therefore
\[
 p(a,d)\le P(d)\le C d^{26/5}.
\]
The same C works for every a and d; it is not allowed to depend on the progression. Finite small moduli can be included by increasing the effective constant if the theorem is initially written with an asymptotic convention. Dirichlet's theorem supplies existence of the least prime, while this stronger theorem bounds how far it lies.

The bound gives an effective finite search certificate for each input. Once an admissible C is supplied from an effective implementation of the proof, test the integers a+kd up to C d^(26/5) for primality. No numerical value of C has been extracted or certified here, and no short running-time assertion follows from effectivity alone. With d in binary, a polynomial-in-d search length may be exponential in its bit length. This observation does not convert the report into an executed algorithm.

Neither the exponent nor its constant implies the desired quadratic bound: C d^(26/5)/d^2 grows with d. Even an estimate O(d^2) would still need its constant controlled, and all small cases checked, to imply the literal strict inequality. No Riemann hypothesis or ineffective exceptional-zero exclusion is assumed in the cited unconditional theorem. The prompt lists no earlier contribution; this is a credited literature benchmark with the precise remaining gap preserved.

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

T. Xylouris, arXiv:0906.2749v1 (2009), Theorem 1.1, https://arxiv.org/pdf/0906.2749
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
