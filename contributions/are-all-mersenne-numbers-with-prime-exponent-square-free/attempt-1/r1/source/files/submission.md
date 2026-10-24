# Attributed submission: Attempt: TOP-3374

Source: https://github.com/We-Solve/research/issues/174

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3374

### Claim

Partial result

### Exact scope

For primes p,q, q² divides 2^p−1 iff q is an odd base-2 Wieferich prime with ord_q(2)=p. Exact enumeration excludes every q≤100000 as a repeated factor for every prime exponent p, without an exponent cutoff. No universal square-freeness conclusion is drawn.

### Write-up

# TOP-3374: A finite-factor exclusion for all prime-exponent Mersenne numbers

Claim type: Partial result

Exact scope: For primes p,q, q² divides 2^p−1 iff q is an odd base-2 Wieferich prime with ord_q(2)=p. Exact enumeration excludes every q≤100000 as a repeated factor for every prime exponent p, without an exponent cutoff. No universal square-freeness conclusion is drawn.

The exponent prime p and a possible repeated divisor q play different roles. The exact order of 2 modulo q, together with a Wieferich congruence, gives a complete characterization of a repeated factor. This produces a rigorous finite-prime exclusion that is uniform over all prime exponents, not a table of finitely many Mersenne numbers.

Suppose first q² divides 2^p−1. The number is odd, so q is odd. The order d=ord_q(2) divides the prime p and cannot be one, because 2≢1 mod any prime. Thus d=p. Lagrange gives p∣q−1, so q≠p. Put q−1=pk; then q∤k. The factorization
\[
 (2^p)^k-1=(2^p-1)(1+2^p+\cdots+2^{p(k-1)})
\]
has second factor congruent to k modulo q. It is a q-adic unit. Consequently
\[
 v_q(2^{q-1}-1)=v_q(2^p-1).\tag{1}
\]
In particular q is a base-2 Wieferich prime. Conversely assume ord_q(2)=p and 2^{q−1}≡1 mod q². The same identity (1) applies, so v_q(2^p−1)≥2. Therefore
\[
 \boxed{q^2\mid2^p-1\iff
 \mathrm{ord}_q(2)=p\ \text{and}\
 2^{q-1}\equiv1\pmod{q^2}.}\tag{2}
\]
This includes p=2: M₂=3, whose single factor 3 has order two but is not Wieferich, so it is not repeated.

Equation (2) proves two distinctions that can otherwise cause false counterexamples. A Wieferich prime q can have composite order; such a q is not a repeated factor of a Mersenne number whose exponent is prime. And testing 2^{p−1} modulo p² uses the wrong parameter: it says something about a possible repeated factor equal to p, whereas q=p cannot divide M_p at all, since Fermat's theorem gives 2^p−1≡1 mod p for odd p.

**Uniform exclusion of small repeated divisors.** The exact program sieves all primes q≤100000. Its base-2 Wieferich hits are exactly 1093 and 3511, with orders 364 and 1755 respectively. It proves these orders by modular exponentiation plus certificates excluding d/ℓ for each prime ℓ∣d. Both orders are composite. Therefore (2) rules out every prime q≤100000 as a repeated divisor of **every** prime-exponent Mersenne number, regardless of the size of p. In this bounded divisor range the prime-exponent restriction has eliminated both candidates; the corresponding general-exponent Mersenne numbers 2^364−1 and 2^1755−1 do have repeated prime factors 1093² and 3511². These last divisibilities are also checked directly modulo q² and are not counterexamples to the prompt.

The program separately verifies that 364 and 1755 are composite, factors them exactly, and checks the modular examples just mentioned. The finite sieve is complete because every composite integer at most its bound has a prime divisor at most its square root, and the sieve marks the multiples of every such prime. No probable-prime test is used. No worldwide search limit is being asserted: 100000 is the actual range recomputed here.

**Boundary and scope audit.** The theorem classifies precisely what a counterexample would require, but it does not prove that no future Wieferich prime has prime order. Its quantified finite conclusion has no exponent bound yet retains a prime-divisor bound. Raising that bound alone never settles the universal claim without a separate argument limiting all potential q. The result is a standard elementary order-lifting reduction, not a new solution or a claim to have discovered the known Wieferich primes. The fresh prompt lists no earlier contributions; the supplied historical primary search reference [1] is credited only for context, and all reported arithmetic is independently reproducible.

## Checked references

[1] F. G. Dorais and D. Klyve, A Wieferich prime search up to 6.7×10^15, Journal of Integer Sequences 14 (2011), Article 11.9.2. https://cs.uwaterloo.ca/journals/JIS/VOL14/Klyve/klyve3.html .


## Reproducibility and review

Run verify.py: complete sieve q≤100000, Wieferich tests, exact order/compositeness witnesses, and direct q² divisibilities at composite exponents.

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

F. G. Dorais and D. Klyve, A Wieferich prime search up to 6.7×10^15, Journal of Integer Sequences 14 (2011), Article 11.9.2. https://cs.uwaterloo.ca/journals/JIS/VOL14/Klyve/klyve3.html .
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
