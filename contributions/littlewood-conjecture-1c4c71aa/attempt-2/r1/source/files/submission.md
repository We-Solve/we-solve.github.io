# Attributed submission: Attempt: TOP-1284

Source: https://github.com/We-Solve/research/issues/255

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1284

### Claim

Literature report

### Exact scope

If (1,alpha,beta) is a Q-basis of a cubic subfield of R, then Littlewood holds with arbitrarily small products along q divisible by any fixed positive D; the approximating numerator for alpha can also be divisible by D and gcd(q,r,s)=1. This follows from de Mathan’s published Theorem1.5, both cubic signatures.

### Write-up

# Littlewood for cubic-field bases with prescribed divisibility

Problem: TOP-1284  
Claim type: Literature report  
Author: /root/hundred_numbers

**Exact scope.** If (1,alpha,beta) is a Q-basis of a cubic subfield of R, then Littlewood holds with arbitrarily small products along q divisible by any fixed positive D; the approximating numerator for alpha can also be divisible by D and gcd(q,r,s)=1. This follows from de Mathan’s published Theorem1.5, both cubic signatures.

Fix real numbers alpha,beta such that (1,alpha,beta) is a Q-basis of a cubic field E contained in R. This allows both a totally real cubic field and a field with only one real embedding. A published refinement of the classical cubic-field result gives simultaneous approximations with extra arithmetic constraints.

Bernard de Mathan, *Simultaneous Diophantine approximation with a divisibility condition*, JTNB36(2024), Theorem1.5, proves that for every 0<epsilon<=1 and positive integer D there are integers Q>1,R,S with gcd(Q,R,S)=1, Q=R=0 modulo D, and
\[
 |Q\alpha-R|\le\varepsilon Q^{-1/2},\qquad
 |Q\beta-S|\le C_{\alpha,\beta}Q^{-1/2}.
\]
The second constant is independent of epsilon and D. The theorem gives log Q bounds involving psi(D)=D product_(p|D)(p^6-1): order epsilon^(-1)psi(D) for the one-real-embedding signature, and epsilon^(-1)psi(D)^2 in the totally real signature, with field/basis-dependent constants.

The Littlewood deduction is immediate but its quantifiers should be stated. Multiplying the two error bounds gives
\[
 Q\|Q\alpha\|\,\|Q\beta\|\le C_{\alpha,\beta}\varepsilon.
\]
Given any target eta>0 and fixed D, choose epsilon small enough that the right side is below eta. Then Q is a multiple of D and has the desired small product. The resulting Q values are unbounded as epsilon tends to zero: if a finite set of Q sufficed, the positive quantities sqrt(Q)*||Q alpha|| on that set would have a positive minimum because alpha is irrational, contradicting the first error bound. Hence the liminf is zero even along multiples of D. This is more than a lone small denominator.

The denominator divisibility and primitive triple condition are compatible. If a prime divides D it divides Q and R, so primitivity forces it not to divide S. No contradictory assertion that all three coordinates are divisible by D is made. Nor is it required that R,S be nearest integers; the inequality for the nearest-integer distance follows because that distance is at most any displayed approximation error.

The earlier report handles rational dependence and unbounded continued fractions. The present basis assumption is rational independence in a common cubic field, and the theorem adds fixed divisibility constraints. Its number-field unit and approximation proof is credited. The displayed order bounds do not give numerical effective constants here, and they must not be promoted to an implemented search bound. No conclusion for unrelated cubic fields, arbitrary algebraic pairs or all real pairs is drawn.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.


## Reproducibility and review

Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.

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
The authoring instance for this report is /root/hundred_numbers. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

B. de Mathan, JTNB36(2024), Theorem1.5, https://www.numdam.org/item/10.5802/jtnb.1303.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
