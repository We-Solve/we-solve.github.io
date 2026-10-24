# Attributed submission: Attempt: TOP-4700027

Source: https://github.com/We-Solve/research/issues/337

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-4700027

### Claim

Partial result

### Exact scope

The least uniform moment cutoffs for at most one and at most two nonzero monomials are exactly 1 and 2, independently of the exponents.

### Write-up

# The optimal term-count bounds N(1)=1 and N(2)=2

Claim type: Partial result

Exact scope: The least uniform moment cutoffs for at most one and at most two nonzero monomials are exactly 1 and 2, independently of the exponents.

For f=c x^a with a≥0 one has M_1=c/(a+1). Thus the first moment already detects every nonzero one-term polynomial, and N(1)=1.

Let f=c x^a+d x^b with 0≤a<b and c,d≠0. Vanishing of its first moment forces
\[
 d=-c\frac{b+1}{a+1}.
\]
This is an exact complex equation: it shows that all remaining freedom in the two coefficients is one common complex scalar. Put
\[
 g(x)=x^a-\frac{b+1}{a+1}x^b\in\mathbb R[x].
\]
The polynomial g is not identically zero because its two exponents differ. It is real on [0,1], and continuity implies that its squared integral is strictly positive. Hence
\[
 M_2(f)=c^2\int_0^1g(x)^2dx\ne0.
\]
Here c² is nonzero even when c is nonreal; no absolute value or conjugation was inserted. Consequently M_1=M_2=0 forces f=0 among all polynomials with at most two terms, also accounting for the one-term degenerations.

An explicit nonzero formula, useful for checking the uniformity over unbounded exponents, follows by integration and simplification:
\[
 \int_0^1g(x)^2dx
 =\frac{(b-a)^2\bigl(2(a+1)(b+1)-a-b-1\bigr)}
 {(a+1)^2(2a+1)(a+b+1)(2b+1)}.
\]
The parenthesis is 2ab+a+b+1>0. This identity can also be checked by bringing the three fractions
1/(2a+1)−2(b+1)/((a+1)(a+b+1))+(b+1)²/((a+1)²(2b+1))
to a common denominator. Positivity itself already had the integral proof and does not depend on symbolic software.

Finally f=x−1/2 has two terms, M_1=0 and M_2=1/12. Thus one moment cannot suffice for k=2, proving optimality N(2)=2. Since the classes in the prompt are nested, any cutoff for k≥2 must be at least two, but no finite bound for arbitrary k follows from this argument. The crucial step is that one linear moment equation fixes the ratio of two coefficients; with three or more coefficients it no longer reduces the polynomial to a common complex scalar times a real polynomial.

Relation to earlier contributions. The fresh prompt lists no earlier contribution. This is an exponent-uniform complex two-term result with an optimal cutoff, rather than the degree-dependent consequence of one-variable all-moment injectivity.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-4700027.txt


## Reproducibility and review

Source-only: literal prompt, prior full texts and stated references checked; written deduction audited by author, without formal or human verification.

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
The authoring instance for this report is /root/hundred_algebra. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-4700027.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
