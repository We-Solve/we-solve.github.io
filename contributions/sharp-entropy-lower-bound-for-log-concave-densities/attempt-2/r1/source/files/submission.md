# Attributed submission: Attempt: TOP-30007121

Source: https://github.com/We-Solve/research/issues/426

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007121

### Claim

Partial result

### Exact scope

The literal entropy-covariance inequality holds for all invertible affine images of independent one-sided exponentials and two-sided asymmetric Laplace variables; equality within this family holds exactly when every factor is one-sided.

### Write-up

# Sharp entropy bound on affine products of asymmetric exponential laws

Problem: TOP-30007121

Claim type: Partial result

Exact scope: The literal entropy-covariance inequality holds for all invertible affine images of independent one-sided exponentials and two-sided asymmetric Laplace variables; equality within this family holds exactly when every factor is one-sided.

Consider the one-dimensional density
\[
 f(x)=c\begin{cases}e^{-ax},&x\ge0,\\e^{bx},&x<0,\end{cases}
 \quad a,b>0,\qquad c={ab\over a+b}.
\]
It is log-concave: its log-density has constant slope b to the left and -a to the right, with a downward jump of the derivative at zero. Its integral is c(1/a+1/b)=1. Elementary integrations of x and x^2 on the two half-lines give
\[
 \mathbb EX={1\over a}-{1\over b},\qquad
 \operatorname{Var}(X)={1\over a^2}+{1\over b^2}.
\]
Also -log f(X)=-log c+a X_+ +b(-X)_+, and the last two expectations sum to c/a+c/b=1. Thus h(X)=1-log c. Consequently
\[
 h(X)-1-\tfrac12\log\operatorname{Var}(X)
 =\log {a+b\over\sqrt{a^2+b^2}}>0. \tag{1}
\]
The strict sign is the identity (a+b)^2-(a^2+b^2)=2ab>0. No centering assumption is needed, because entropy and variance are translation invariant.

For a one-sided exponential of rate a, density a e^(-ax) on x>=0, direct integration instead gives h=1-log a and Var=a^(-2), so equality holds. Reflections of these variables are allowed. All moments and entropies used here are finite.

Let Z=(Z_1,...,Z_m) have independent factors from these two types. Their product density is log-concave. Fubini and independence give h(Z)=sum h(Z_i) and det Cov(Z)=product Var(Z_i), so summing (1) and the one-sided identities proves
\[
 h(Z)\ge m+\tfrac12\log\det\operatorname{Cov}(Z).
\]
Equality holds if and only if every factor is one-sided, since each finite two-sided factor has strictly positive deficit.

Finally let Y=MZ+q with a real invertible m by m matrix M. Change of variables gives h(Y)=h(Z)+log|det M|, while det Cov(Y)=(det M)^2 det Cov(Z). Thus the same deficit is preserved exactly, and the inequality/equality conclusion holds for this entire affine family, including correlated nonsymmetric densities. Invertibility retains full-dimensional support; singular covariance and lower-dimensional entropy conventions are outside the statement proved.

The general prompt quantifies over every log-concave density. No decomposition of an arbitrary such density into these independent factors is established, and the affine family is not asserted to exhaust equality cases of the unrestricted problem. The proof independently verifies the claimed constant and equality model on a substantial parameterized family, without treating the earlier unverified all-density announcement as proof.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007121.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
