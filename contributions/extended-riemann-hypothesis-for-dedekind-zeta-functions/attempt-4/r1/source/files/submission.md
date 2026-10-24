# Attributed submission: Attempt: TOP-30006677

Source: https://github.com/We-Solve/research/issues/394

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006677

### Claim

Literature report

### Exact scope

Kadiri’s July2011 version proves, for sufficiently large absolute discriminant d_K, an explicit zero-free region at |t|>=1 and an explicit strip at |t|<=1 containing at most one zero, necessarily real and simple. This is unconditional exclusion near Re(s)=1, not the critical-line assertion.

### Write-up

# A checked explicit zero-free region for Dedekind zeta functions

Problem: TOP-30006677  
Claim type: Literature report  
Author: /root/hundred_numbers

**Exact scope.** Kadiri’s July2011 version proves, for sufficiently large absolute discriminant d_K, an explicit zero-free region at |t|>=1 and an explicit strip at |t|<=1 containing at most one zero, necessarily real and simple. This is unconditional exclusion near Re(s)=1, not the critical-line assertion.

Let K be a number field, n_K its degree, and d_K the absolute value of its discriminant. The literal extended Riemann hypothesis requires every nontrivial zero of zeta_K to have real part 1/2. An unconditional theorem excludes an explicitly described region near the right edge of the critical strip, while leaving open the possibility of an exceptional real zero.

Theorem1.1 in Habiba Kadiri's author-hosted July13,2011 manuscript states, for sufficiently large d_K, that zeta_K has no zero in
\[
 \sigma\ge1-\frac1{12.55\log d_K+9.69n_K\log|t|+3.03n_K+58.63},\quad |t|\ge1.
\]
It also states that the region
\[
 \sigma\ge1-\frac1{12.74\log d_K},\quad |t|\le1
\]
contains at most one zero, which, if present, is real and simple. These are the constants and discriminant restriction of the checked version; they are not claimed to be optimal or current best.

For example, fix any eta>0 and any height range |t|<=T. Once d_K is large enough for the theorem, every nonreal zero in that height range has real part less than 1 minus the smaller of the two widths supplied by the displayed regions (using max(1,T) in the logarithm). This follows by splitting at |t|=1. The real exception must still be retained. More quantitatively, on any sequence of fields and heights, the right-edge exclusion is governed by log d_K+n_K log(max(1,|t|))+n_K, rather than a constant independent of the field.

The distinctions matter when comparing with ERH. Excluding a narrow region next to 1 does not force zeros to lie at 1/2. A possible real zero with beta>1/2 would violate ERH, but a theorem allowing at most one does not prove one exists. Conversely, omitting that exception would turn the low-height theorem into a stronger unproved assertion. The pole at s=1 is not a zero and creates no extra member of the permitted exceptional set.

The three earlier reports already discuss abelian factorizations, Mellin-transform/error-term criteria, and other claimed zero bounds. This report adds a verified explicit unconditional region for general number fields and preserves all of its version restrictions. The analytic proof and numerical constant optimization are credited to the source and have not been independently rerun. No particular numerical lower threshold on d_K has been extracted, so this report is not a finite-discriminant verification algorithm or a uniform theorem at every small discriminant.

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

H. Kadiri, July2011 version, Theorem1.1 and §3.6, https://www.cs.uleth.ca/~kadiri/articles/zero-free-region-Dedekind-June07-2011.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
