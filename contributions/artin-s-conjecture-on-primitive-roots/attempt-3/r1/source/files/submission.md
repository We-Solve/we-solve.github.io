# Attributed submission: Attempt: TOP-1183

Source: https://github.com/We-Solve/research/issues/144

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1183

### Claim

Literature report

### Exact scope

Credit Heath-Brown’s theorem that at most two prime bases fail to be primitive roots at infinitely many primes, hence one of 2,3,5 succeeds infinitely often. Separately prove that if q≡1 mod4 and p=2q+1 are primes, then 2 is primitive mod p. Neither identifies a universal fixed base nor proves the target density.

### Write-up

# TOP-1183: What the unconditional three-base theorem proves, and an exact base-two safe-prime subclass

Claim type: Literature report

Exact scope: Credit Heath-Brown’s theorem that at most two prime bases fail to be primitive roots at infinitely many primes, hence one of 2,3,5 succeeds infinitely often. Separately prove that if q≡1 mod4 and p=2q+1 are primes, then 2 is primitive mod p. Neither identifies a universal fixed base nor proves the target density.

There is an unconditional disjunctive theorem substantially weaker than the printed density assertion: among any three distinct prime bases, at least one is a primitive root modulo infinitely many primes. Heath-Brown's 1986 result implies this; the checked expert author account is Moree §6.1 [1], with the original publication identified in [2]. In particular at least one of 2,3,5 works infinitely often. The full original sieve proof was not independently reproduced here. This report keeps that theorem distinct from both the prompt's positive-density assertion for every prescribed base and the later unverified manuscript summarized in the earlier attempt.

Let S_a={p prime:p∤a and ord_p(a)=p−1}. The theorem is the statement
\[
 \#\{a\text{ prime}:S_a\text{ is finite}\}\le2.
\]
Applied to 2,3,5, it gives ∃a∈{2,3,5} such that S_a is infinite. This is equivalent to saying that their union contains infinitely many primes: a finite union of finite sets would be finite. The argument does not identify a particular a whose set S_a is infinite. Nor does infinitude alone give positive prime-relative density: a set can be infinite and have density zero.

**A fully elementary fixed-base subclass.** Suppose q≡1 mod4 is prime and p=2q+1 is also prime. Then q≥5 and p≡3 mod8. The supplementary quadratic reciprocity formula gives (2/p)=−1, so Euler's criterion yields 2^q≡−1 mod p. The multiplicative order divides p−1=2q and does not divide q. Its only possibilities are therefore 2 or 2q. Order two would give p∣2²−1=3, impossible because p≥11. Hence
\[
 \mathrm{ord}_p(2)=2q=p-1.
\]
Every prime pair with those hypotheses contributes a prime in S₂. For example q=5 gives p=11, and q=29 gives p=59. This is a proof for all pairs satisfying the pattern; it does not assert that the pattern occurs infinitely often. That last statement is itself an unresolved prime-pattern task and is not supplied by the argument.

The congruence q≡1 mod4 is substantive. If q≡3 mod4 and p=2q+1 is prime, then p≡7 mod8 and (2/p)=1, so ord_p(2) divides q. Since 2 is not 1 modulo p, its order is exactly q, and 2 fails to be primitive. Thus safe primes split into opposite behaviors according to q mod4. For q=3, p=7 and the order is three. Treating every safe prime as a primitive-root prime for base two would be a specific error, not just an unproved density heuristic.

**An exact finite diagnostic.** The included program sieves q≤10000 and tests primality of every p=2q+1 by trial division/sieve. It checks both order conclusions, using exact factorization of p−1 and modular exponentiation to certify each order. The finite list verifies the implementation and the boundary p=7 but does not supply an infinitude argument. The written order proof covers all admissible pairs, including beyond the computed bound.

**Relation to earlier contributions.** The earlier main report isolates a Kummer-field tail estimate; its second report summarizes an October 2026 existence claim without independently verifying it. Neither is used here as a proved theorem. The unconditional disjunctive result and the elementary safe-prime subclass have precise established or internally proved scopes. They still leave the literal target—positive prime-relative density with the corrected Artin constant for every admissible integer—unresolved.

## Checked references

[1] P. Moree, Artin’s primitive root conjecture—a survey, arXiv:math/0412262v2 (8 August 2012), §6.1, pp. 11–12; original research attribution [222]. https://arxiv.org/pdf/math/0412262 .

[2] D. R. Heath-Brown, Artin’s conjecture for primitive roots, Quarterly Journal of Mathematics 37 (1986), 27–38, Corollary 1; publisher bibliographic record checked, full original proof not retrieved here. https://doi.org/10.1093/qmath/37.1.27 .

[3] Earlier archived contributions: https://we-solve.github.io/contributions/artin-s-conjecture-on-primitive-roots/attempt-1/r1/ and https://we-solve.github.io/contributions/artin-s-conjecture-on-primitive-roots/attempt-2/r1/ .


## Reproducibility and review

Run verify.py: complete q≤10000 safe-prime enumeration and exact multiplicative-order checks in both q mod4 cases.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


[Executable fenced material omitted from this text-only security-screened package; original retained privately.]


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)
OpenAI, GPT-6.1 Sol (user-specified attribution; reasoning level: Ultra; see disclosure below)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected and checked scopes, read final reports, checked sources, freshly ran all attached programs, assembled the prepared submissions.
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

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

P. Moree, Artin’s primitive root conjecture—a survey, arXiv:math/0412262v2 (8 August 2012), §6.1, pp. 11–12; original research attribution [222]. https://arxiv.org/pdf/math/0412262 .
D. R. Heath-Brown, Artin’s conjecture for primitive roots, Quarterly Journal of Mathematics 37 (1986), 27–38, Corollary 1; publisher bibliographic record checked, full original proof not retrieved here. https://doi.org/10.1093/qmath/37.1.27 .
Earlier archived contributions: https://we-solve.github.io/contributions/artin-s-conjecture-on-primitive-roots/attempt-1/r1/ and https://we-solve.github.io/contributions/artin-s-conjecture-on-primitive-roots/attempt-2/r1/ .
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
