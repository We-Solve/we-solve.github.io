# Attributed submission: Attempt: TOP-1273

Source: https://github.com/We-Solve/research/issues/254

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1273

### Claim

Literature report

### Exact scope

Leopoldt holds for all finite abelian extensions K/Q at every rational prime p, with no unramified or odd-prime restriction. The credited classical theorem also applies to finite abelian extensions of imaginary quadratic fields. This is not the conjecture for all number fields.

### Write-up

# Leopoldt for every abelian number field and every prime

Problem: TOP-1273  
Claim type: Literature report  
Author: /root/hundred_numbers

**Exact scope.** Leopoldt holds for all finite abelian extensions K/Q at every rational prime p, with no unramified or odd-prime restriction. The credited classical theorem also applies to finite abelian extensions of imaginary quadratic fields. This is not the conjecture for all number fields.

Let E_K be the global unit group of a number field K, of rank r_1+r_2-1. Leopoldt's assertion at p is that its p-adic logarithmic image has that same Q_p-rank; equivalently its Leopoldt defect is zero. For all finite abelian K/Q, at every prime p, this is a classical theorem of Ax and Brumer.

A precise accessible primary research source is Ferri–Johnston, *Applications of representation theory and of explicit units to Leopoldt's conjecture*, published in Research in Number Theory (2026), Theorem1.1. It states the theorem for finite abelian extensions of Q or of an imaginary quadratic field, for every p, and explains the Baker–Brumer p-adic logarithmic independence input. The original Brumer paper is *On the units of algebraic number fields*, Mathematika14 (1967),121–124; its complete proof was not retrieved here.

The quantifier matching is important. “Abelian over Q” means K/Q is a finite Galois extension with abelian Galois group. It is not the assertion that every extension of an abelian ground field has the property. No condition p not dividing [K:Q] or p unramified in K appears in this theorem. Thus ramified primes, the prime2 and arbitrarily large conductors all belong to the reported scope.

For each cyclotomic field Q(zeta_m), the Galois group is abelian, so the theorem applies for every m and p. The same applies to every intermediate field of a cyclotomic field, since subgroups of an abelian group are normal and the quotient is abelian. These observations give concrete infinite families while using precisely the theorem's field hypothesis. They do not rely on a numerical regulator being merely nonzero at finite precision.

One must also keep the two independence fields distinct. Rational linear independence of p-adic logarithms of algebraic numbers and linear independence over Q_p are different notions. The source's explanation of the Ax/Brumer argument is credited as a whole; a bare invocation of complex Baker theory would not establish the needed p-adic conclusion. No new proof of the transcendence theorem is claimed.

The previous contribution develops an explicit prime3 cubic congruence family. The added scope here is an all-primes theorem over every abelian number field, and the additional imaginary-quadratic abelian base case. It neither proves Leopoldt for arbitrary nonabelian fields nor gives an effective lower bound for a general p-adic regulator. This is a source-only account of a substantial proved class, not a computational regulator certificate.

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

Ferri–Johnston, Research in Number Theory(2026), Theorem1.1, https://link.springer.com/article/10.1007/s40993-026-00717-2
Brumer publisher record, Mathematika14(1967),121–124, DOI10.1112/S0025579300003703 (original proof not retrieved)
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
