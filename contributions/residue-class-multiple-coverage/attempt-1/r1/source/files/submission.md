# Attributed submission: Attempt: TOP-175

Source: https://github.com/We-Solve/research/issues/241

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-175

### Claim

Partial result

### Exact scope

For every sufficiently large integer N there are residues a_p modulo each distinct prime p<=N such that at most O(N(loglogN)^9/logN) integers m<=N are covered fewer than10 times. The requirement to cover every integer10 times remains unresolved.

### Write-up

# Tenfold coverage except on a vanishing exceptional set

Problem: TOP-175  
Claim type: Partial result  
Author: /root/hundred_numbers

**Exact scope.** For every sufficiently large integer N there are residues a_p modulo each distinct prime p<=N such that at most O(N(loglogN)^9/logN) integers m<=N are covered fewer than10 times. The requirement to cover every integer10 times remains unresolved.

Choose each a_p uniformly and independently modulo p, for the distinct primes p<=N. For a fixed m, its coverage count c(m) is a sum of independent Bernoulli variables of success probabilities 1/p. Its distribution is the same for every m; overlap between the random counts at different m is irrelevant to the following first-moment argument.

Set
\[
 Z=\prod_{p\le N}(1-1/p),\qquad
 \nu=\sum_{p\le N}\frac1{p-1}.
\]
The probability of exactly j successes equals
\[
 Z\,e_j\big((p-1)^{-1}:p\le N\big),
\]
where e_j is the j-th elementary symmetric polynomial. This follows by choosing the j successful primes and factoring out the failure probability at every prime. For nonnegative v_i, expansion of (sum v_i)^j counts each product with j distinct indices exactly j! times and contains additional nonnegative terms, so e_j(v)<=nu^j/j!. Thus
\[
 \mathbb P(c(m)<10)\le Z\sum_{j=0}^9\frac{\nu^j}{j!}.
\]
Mertens' product theorem gives Z=O(1/logN). Also
\[
 \nu=\sum_{p\le N}1/p+\sum_{p\le N}\frac1{p(p-1)}
     =\log\log N+O(1),
\]
since the second sum is bounded by the convergent integer sum from2 onward. It follows that the probability is O((loglogN)^9/logN).

Let B be the number of integers m<=N covered fewer than10 times. Linearity of expectation, with no claim of independent m, gives
\[
 \mathbb E B\ll N\frac{(\log\log N)^9}{\log N}.
\]
At least one assignment has B no larger than that mean. The fraction of exceptions tends to zero, proving the advertised near-complete tenfold cover. The same proof, with9 replaced by k-1, works for every fixed multiplicity k; constants and the sufficiently-large threshold may depend on k. It is not uniform for k growing arbitrarily with N.

This is an existence proof for genuine residues, one per distinct prime, so no congruence is counted repeatedly. A finite construction could minimize the conditional expected bad count at each choice; evaluating it exactly can be expensive and no polynomial running-time bound is inferred. The proof permits dependencies between points and does not rely on a Monte Carlo experiment.

The fresh prompt has no earlier contributions. The residual gap is precise: even one badly covered point violates the literal target, while an o(N) exceptional set may still grow without bound. The expectation estimate therefore cannot be rounded down to zero. Additional work controlling or repairing every exceptional point would be necessary to answer the original question affirmatively.

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

T. Tao, 254A Notes1, Theorems15 and26, https://terrytao.wordpress.com/2014/11/23/254a-notes-1-elementary-multiplicative-number-theory/
Fresh official TOP-175 prompt, distinct-prime multiplicity convention
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
