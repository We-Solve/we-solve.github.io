# Attributed submission: Attempt: TOP-4700029

Source: https://github.com/We-Solve/research/issues/339

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-4700029

### Claim

Partial result

### Exact scope

The full bound (2m_1−1)(2m_2−1), including all axis points, holds whenever one equation depends on just one coordinate; the other polynomial may couple both coordinates arbitrarily.

### Write-up

# The proposed real bound for triangular sparse systems

Claim type: Partial result

Exact scope: The full bound (2m_1−1)(2m_2−1), including all axis points, holds whenever one equation depends on just one coordinate; the other polynomial may couple both coordinates arbitrarily.

Assume f_1(x,y)=g(x) has at most m_1 monomials, and let f_2(x,y) have at most m_2 monomials. The case g≡0 has no nondegenerate common zero, so suppose g≠0.

We need the elementary univariate bound: a nonzero real polynomial with at most m terms has at most 2m−1 distinct real roots. On the positive half-line substitute x=e^t. A polynomial with r nonzero terms becomes an exponential sum with r distinct real exponents. Divide by its smallest exponential and differentiate; Rolle induction gives at most r−1 positive zeros, by exactly the argument of the preceding one-variable lemma: r ordered zeros would force r−1 derivative zeros, exceeding the r−2 inductive bound. Apply the same argument to g(−x) to get at most r−1 negative roots. Zero contributes at most one further distinct root, giving 2r−1≤2m−1. This is a count of distinct roots; high multiplicities do not increase it.

At a nondegenerate common zero (a,b), the triangular Jacobian determinant equals
\[
 g'(a)\,(f_2)_y(a,b).
\]
Hence a is a simple real root of g, and b is a simple real root of the specialization h_a(y)=f_2(a,y). For each fixed real a this specialization is either zero or a polynomial with at most m_2 terms: evaluating x^u multiplies coefficients, and merging equal y powers or deleting zero coefficients can only reduce the term count. If h_a≡0 then its derivative is zero, so there are no nondegenerate zeros on that entire vertical line. Otherwise there are at most 2m_2−1 possible b. There are at most 2m_1−1 possible a, so multiplication gives exactly the proposed bound.

No division by x or y occurred. In particular a=0 or b=0 is covered by the same specialization argument. A whole component line where f_2 vanishes does not create a problem: it produces only degenerate intersections for this determinant. A system may have such components in addition to simple isolated zeros elsewhere.

Sharpness in this subclass follows from the separated examples in the literal prompt: choose g_m(t)=t product_{j=1}^{m−1}(t²−j²). All m odd-power coefficients are nonzero, and its 2m−1 real roots are distinct. Taking f_1=g_{m_1}(x), f_2=g_{m_2}(y) gives a nonzero product of derivatives at every pair of roots. Thus the triangular upper bound cannot be improved, even though its proof permits many coupled second equations beyond those separated examples.

No upper bound is asserted for fully coupled systems in both equations. In that regime the first zero set need not be a finite union of vertical lines, and the counting proof no longer applies.

Relation to earlier contributions. No earlier contribution is listed. The prompt itself supplies the separated sharpness construction; that is credited as background. The added proof covers every triangular system, including a fully mixed second polynomial and axis/component degeneracies.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-4700029.txt


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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-4700029.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
