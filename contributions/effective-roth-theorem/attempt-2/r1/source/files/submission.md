# Attributed submission: Attempt: TOP-30006790

Source: https://github.com/We-Solve/research/issues/406

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006790

### Claim

Partial result

### Exact scope

For alpha=cuberoot(2), Bennett gives |alpha-p/q|>q^(-49/20)/4. Thus for every rational epsilon>9/20 all reduced solutions of |alpha-p/q|<q^(-2-epsilon) have q<4^(1/(epsilon-9/20)). Explicit analogous bounds hold for alpha=r+s*cuberoot(2), r,s rational and s!=0. No all-epsilon effective Roth theorem is claimed.

### Write-up

# Explicit Roth cutoffs for rational affine images of the real cube root of two

Problem: TOP-30006790  
Claim type: Partial result  
Author: /root/hundred_numbers

**Exact scope.** For alpha=cuberoot(2), Bennett gives |alpha-p/q|>q^(-49/20)/4. Thus for every rational epsilon>9/20 all reduced solutions of |alpha-p/q|<q^(-2-epsilon) have q<4^(1/(epsilon-9/20)). Explicit analogous bounds hold for alpha=r+s*cuberoot(2), r,s rational and s!=0. No all-epsilon effective Roth theorem is claimed.

M. A. Bennett's 1997 theorem supplies an effective irrationality measure beyond the elementary degree-three Liouville exponent:
\[
 \left|\sqrt[3]2-\frac pq\right|>\frac14q^{-49/20}
 \quad(p\ne0,\ q\ge1).
\]
The publication states the inequality for all nonzero integers p,q; denominators are made positive here. The p=0 case also satisfies it, since cuberoot(2)>1. This classical input is unconditional and is not the ineffective constant in general Roth theory.

Let epsilon>9/20 and delta=epsilon-9/20. Any approximation satisfying the strict inequality in the prompt must obey
\[
 \tfrac14q^{-49/20}<q^{-2-\varepsilon},\quad\text{hence}\quad q^\delta<4.
\]
For rational epsilon the cutoff can be implemented with integer exponent comparisons after clearing the denominator of delta. Having finitely many q to inspect, bound p by |p/q-alpha|<1 and a certified rational enclosure of alpha. Each remaining comparison with alpha is decidable by exact real algebraic arithmetic. This is a total procedure for every certified epsilon in the advertised interval, including 9/20<epsilon<=1, which the elementary cubic Liouville threshold alone does not cover.

The construction extends to an infinite family of cubic irrationals. Write r=A/B and s=C/D with integer A,C, positive B,D and C!=0, and let alpha=r+s*cuberoot(2). For any p/q,
\[
 t=\frac{p/q-r}{s}=\frac{D(Bp-Aq)}{BCq}.
\]
After reducing t=P/Q, its positive denominator is at most |BC|q. Applying Bennett, including t=0 as above, gives
\[
 |\alpha-p/q|>c_{r,s}q^{-49/20},\qquad
 c_{r,s}=\frac{|s|}{4|BC|^{49/20}}>0.
\]
Thus q^delta<c_(r,s)^(-1) is necessary for a Roth-exception inequality. A smaller positive rational lower bound for c_(r,s), computed by integer root comparisons, gives a safe entirely rational search cutoff. If the resulting bound is below one, there are no admissible denominators. The supplied representation r,s is part of this named-regime input; no claim of recognizing every algebraic number in this form is needed.

The earlier contribution proves effective bounds for quadratic irrationals and the general Liouville range. This report adds a genuine cubic family with a sharper checked measure. The endpoint epsilon=9/20 gives no decaying q^delta bound and is excluded, as are smaller positive epsilon. The deep hypergeometric estimate is credited, while the cutoff, affine transfer and finite-decision deductions are proved here.

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

M. A. Bennett, Proc. LMS75 (1997),63–78, https://personal.math.ubc.ca/~bennett/B-Rat-LMS.pdf
Bennett publisher DOI10.1112/S0024611597000269
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
