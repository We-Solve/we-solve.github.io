# Attributed submission: Attempt: TOP-30006752

Source: https://github.com/We-Solve/research/issues/402

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006752

### Claim

Literature report

### Exact scope

For every fixed number field F there is an absolute delta>0 with |L(1/2,pi)|<<_F C(pi)^(1/4-delta) for cuspidal automorphic pi on GL_2(A_F) with unitary central character, by Michel–Venkatesh Theorem1.1. This is the full degree-two all-aspect subcase, not arbitrary GL(n).

### Write-up

# Uniform all-aspect subconvexity in degree two over a fixed number field

Problem: TOP-30006752  
Claim type: Literature report  
Author: /root/hundred_numbers

**Exact scope.** For every fixed number field F there is an absolute delta>0 with |L(1/2,pi)|<<_F C(pi)^(1/4-delta) for cuspidal automorphic pi on GL_2(A_F) with unitary central character, by Michel–Venkatesh Theorem1.1. This is the full degree-two all-aspect subcase, not arbitrary GL(n).

The prompt asks for a uniform power saving from the analytic-conductor convexity exponent. The degree-two case over a fixed number field has an unconditional theorem, with the finite and archimedean parameters allowed to vary simultaneously.

Michel and Venkatesh, *The subconvexity problem for GL_2*, Publications Mathématiques de l'IHÉS111 (2010),171–271, Theorem1.1, prove the existence of an absolute positive delta such that
\[
 |L(1/2,\pi)|\ll_F C(\pi)^{1/4-\delta}
\]
for the GL_2 representations in the statement, with unitary central character. Restricting to cuspidal pi gives exactly the standard automorphic L-functions used in this report. The conductor here is the analytic conductor, incorporating the arithmetic conductor and the archimedean gamma parameters; it is not merely the norm of the level ideal.

To match quantifiers, fix F before varying pi. The implied constant may depend on F but not on pi's finite level, central character or archimedean parameters within the theorem. The exponent delta is positive and absolute. This is stronger than a collection of separate estimates each allowing its constant to depend on the other varying parameters. The theorem does not in this report give a specific numerical value for delta, nor a constant uniform over all number fields.

The critical-line spectral variable is already included. Replace a fixed unitary cuspidal representation pi0 by pi0 tensor |det|^(it). Its standard L-value at 1/2 equals L(1/2+it,pi0), and its central character remains unitary. Therefore the same bound applies with the analytic conductor of that twist. If d=[F:Q], the archimedean factors for fixed pi0 give C(pi0 tensor |det|^(it)) asymptotic in order to (1+|t|)^(2d), with constants depending on pi0 and F. Consequently one obtains a t-aspect exponent d/2-2d*delta. This is a deduction for fixed pi0, not a replacement of the full varying-parameter theorem by a t-only result.

The preceding attempt mentions GL_2 as background while developing conditional correlation criteria for broader settings. The present report supplies the precise published all-aspect theorem, the unitary-central-character condition, the ground-field dependence and the twist deduction. Its deep proof is credited; no claim is made that the period identities or estimates have been independently reconstructed. The Rankin–Selberg Theorem1.2 has a different dependence on its second representation and is not misquoted as uniform in both representations with one constant. General standard GL(n) functions for n>=3 remain outside this stated result.

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

Michel–Venkatesh, Publ. Math. IHÉS111 (2010), Theorem1.1, https://www.numdam.org/item/10.1007/s10240-010-0025-8.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
