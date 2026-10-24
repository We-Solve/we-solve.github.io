# Attributed submission: Attempt: TOP-1293

Source: https://github.com/We-Solve/research/issues/256

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1293

### Claim

Partial result

### Exact scope

There are >>x/(log x)^3 primes p<=x with p+2 having at most two prime factors and p+6 at most76, by Heath-Brown–Li Theorem1. Infinitely many such p have p+2 either prime or a product of two distinct primes. This is an almost-prime approximation to Dickson, not simultaneous primality.

### Write-up

# A proved almost-prime triple and an infinite squarefree P2 consequence

Problem: TOP-1293  
Claim type: Partial result  
Author: /root/hundred_numbers

**Exact scope.** There are >>x/(log x)^3 primes p<=x with p+2 having at most two prime factors and p+6 at most76, by Heath-Brown–Li Theorem1. Infinitely many such p have p+2 either prime or a product of two distinct primes. This is an almost-prime approximation to Dickson, not simultaneous primality.

For the admissible linear tuple n,n+2,n+6, a substantial unconditional approximation to the literal prime-tuples target is known. Heath-Brown and Li prove in Theorem1 of arXiv:1504.00533 that
\[
 \#\{p\le x:p\text{ prime},\ \Omega(p+2)\le2,\ \Omega(p+6)\le76\}
       \gg\frac{x}{(\log x)^3}.
\]
Here Omega counts prime factors with multiplicity. The positive implied constant is independent of x. This is their stated theorem, rather than an unproved parity-removal hypothesis.

We add the squarefree P2 deduction. If p+2 has at most two prime factors, it is either prime, a product of two distinct primes, or a prime square (the finitely small input1 is irrelevant). The number of prime-square cases with p<=x is at most floor(sqrt(x+2)), since every such p has the form q^2-2 with q<=sqrt(x+2). This crude count needs no primality estimate. Since
\[
 \sqrt{x}=o\big(x/(\log x)^3\big),
\]
discarding all square cases leaves >>x/(log x)^3 primes satisfying the same p+6 condition and with p+2 prime or the product of two **distinct** primes. In particular there are infinitely many such pairs. The estimate is a lower bound for the union of those two possibilities; it does not decide which alternative occurs infinitely often.

The three forms are admissible: modulo2 choose an odd residue; modulo3 choose n=2; for every prime l>=5 at most three residues are forbidden by their zeros, leaving an allowed residue. This check matches the local obstruction in Dickson's conjecture but is not used to replace the source's sieve proof. It explains why this tuple is a legitimate target for the original question.

Allowing76 factors at p+6 does not mean that any fixed factorization pattern there is established, and allowing two at p+2 does not prove the twin-prime case. A lower bound for a union with prime and semiprime members cannot be turned into a prime-only lower bound without overcoming an additional obstruction. Conversely, the result is stronger than merely producing n(n+2)(n+6) with a bounded total number of factors: the first coordinate is an actual prime and the second has at most two factors.

The earlier contribution develops a conditional rough-set/parity criterion. The added scope here is an actual unconditional quantitative almost-prime tuple theorem, plus the proved removal of square semiprimes. The deep weighted/vector sieve is credited to the authors, with its numerical constant76 retained; no current-best assertion or full Dickson theorem is claimed.

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

Heath-Brown–Li, Almost prime triples and Chen’s theorem, Theorem1, https://arxiv.org/pdf/1504.00533
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
