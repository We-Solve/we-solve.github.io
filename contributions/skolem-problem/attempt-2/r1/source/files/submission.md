# Attributed submission: Attempt: TOP-1268

Source: https://github.com/We-Solve/research/issues/253

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1268

### Claim

Partial result

### Exact scope

For rational linear recurrences of arbitrary order whose characteristic roots are all real, zero occurrence is decidable by parity splitting and effective dominant-term bounds, including repeated roots, opposite roots and eventual zero subsequences. The unrestricted Skolem problem is not settled.

### Write-up

# The Skolem problem is decidable for every recurrence with real characteristic roots

Problem: TOP-1268  
Claim type: Partial result  
Author: /root/hundred_numbers

**Exact scope.** For rational linear recurrences of arbitrary order whose characteristic roots are all real, zero occurrence is decidable by parity splitting and effective dominant-term bounds, including repeated roots, opposite roots and eventual zero subsequences. The unrestricted Skolem problem is not settled.

Let (u_n) be a rational linear recurrence of order r with exact rational initial values and coefficients. Assume all roots of its characteristic polynomial are real, a property decidable by exact real-root isolation. We show how to decide whether u_n=0 for some n>=0. Repeated roots and pairs lambda,-lambda are permitted.

Handle the finite zero-root transient first, for example by checking n<r directly. On n>=r the usual Jordan-form solution is a finite sum P_lambda(n) lambda^n over the nonzero characteristic roots, with algebraic-real polynomial coefficients. It can be computed exactly by linear algebra over a real algebraic number field. Equality and order comparisons there are decidable; no numerical assertion that a coefficient is approximately zero is used.

For each parity e=0,1, substitute n=2m+e. Combine the terms from lambda and -lambda with the same squared base. The result is
\[
 u_{2m+e}=\sum_{j=1}^t Q_j(m)\rho_j^m,
 \qquad 0<\rho_1<\cdots<\rho_t,
\]
where the rho_j and polynomial coefficients are real algebraic. Delete identically zero Q_j. If none remain, that entire parity is eventually zero, so the answer is yes. This includes cancellations between opposite roots that invalidate a naive unique-dominant-root test on the unsplit recurrence.

Otherwise write d=degree Q_t. Its nonzero leading coefficient gives computable c>0 and integer M such that |Q_t(m)|>=c m^d for all m>=M. For instance bound the sum of the absolute lower coefficients by half the leading term beyond an explicit rational threshold. The sum of the other terms is at most C m^D rho_(t-1)^m for computable rational C>0 and integer D>=0, taking M>=1. If there is only one term, omit this tail and check the finite polynomial roots directly.

For t>1 let a=rho_(t-1)/rho_t<1 and E=max(D-d,0). For m>=M the ratio of the tail to the leading term is at most (C/c)m^E a^m. An effective cutoff N is obtained as follows. Choose a rational a'<1 with a<a'. Increase M until a(1+1/M)^E<=a'. Thereafter m^E a^m decreases by a factor at most a' at each step. Increase m further until (C/c)m^E a^m<1. Exact algebraic comparisons decide these tests, and exponential decay guarantees termination. All m>=N then have a strictly larger leading term in absolute value than the whole tail, so cannot be zeros.

Perform this construction for both parities and check the finitely many remaining original u_n exactly by the rational recurrence. A zero is either found, or both tails are proved nonzero. This is a complete decision procedure for the advertised class; its size can depend severely on algebraic separation and coefficient heights, so no polynomial bit bound is asserted.

The earlier attempt already gives a procedure when the original recurrence has one dominant root. The new regime allows any order and every real-root spectrum, resolving equal-modulus opposite-root ties by an exact parity step. Nonreal roots need not become positive distinct bases after parity splitting, and are outside this proof. Finite checking is a consequence of the proved cutoff, not empirical evidence for the universal Skolem problem.

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

Fresh official TOP-1268 prompt and full Math-221-A1 contribution (comparison only)
Complete parity-splitting and effective tail argument in this report
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
