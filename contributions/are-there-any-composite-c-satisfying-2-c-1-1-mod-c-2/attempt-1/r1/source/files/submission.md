# Attributed submission: Attempt: TOP-9400141

Source: https://github.com/We-Solve/research/issues/360

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-9400141

### Claim

Partial result

### Exact scope

For odd n>1 with p^e exactly dividing n, n^2 divides2^(n-1)-1 iff every p satisfies ord_p(2)|(n-1) and v_p(2^(p-1)-1)>=2e. Exact enumeration of all primes<=100000 then proves that any composite candidate must have a prime factor>100000. Existence of composite candidates is not settled.

### Write-up

# Every composite super-Wieferich candidate needs a prime factor exceeding100000

Problem: TOP-9400141  
Claim type: Partial result  
Author: /root/hundred_numbers

**Exact scope.** For odd n>1 with p^e exactly dividing n, n^2 divides2^(n-1)-1 iff every p satisfies ord_p(2)|(n-1) and v_p(2^(p-1)-1)>=2e. Exact enumeration of all primes<=100000 then proves that any composite candidate must have a prime factor>100000. Existence of composite candidates is not settled.

We prove a complete local criterion and use a finite prime-support certificate to exclude an infinite collection of composite integers. Even n cannot satisfy the prompt: 2^(n-1)-1 is odd while n^2 is even. Hence assume n odd and factor it as product p^(e_p).

For an odd prime p write t_p=ord_p(2) and w_p=v_p(2^(p-1)-1). As t_p divides p-1 and (p-1)/t_p is prime to p, the lifting-the-exponent identity gives v_p(2^(t_p)-1)=w_p. More generally, if t_p divides M, then
\[
 v_p(2^M-1)=w_p+v_p(M/t_p).
\]
One elementary proof writes2^(t_p)=1+p^w u with p not dividing u. Raising to a p-th power increases the valuation exactly by1 for odd p; raising to an exponent prime to p preserves it, by the binomial expansion. Iteration proves the formula, so no unexamined prime-power order assumption is needed.

Now p divides n, so p does not divide n-1; nor does it divide t_p. If p^(2e_p) divides2^(n-1)-1, first t_p must divide n-1, and the formula then makes its valuation exactly w_p. Thus
\[
 n^2\mid2^{n-1}-1\quad\Longleftrightarrow\quad
 \forall p\mid n:\ t_p\mid n-1\ \text{and}\ w_p\ge2e_p.
\]
The reverse implication follows by combining the prime powers with the Chinese remainder theorem. In particular every prime factor must be a base2 Wieferich prime, but that necessary property alone is not sufficient; its order condition remains.

The exact finite certificate finds only1093 and3511 with w_p>=2 among all primes p<=100000, and verifies w_p=2 for each using reduction modulo p^3. Consequently if **all** prime factors of a candidate n were at most100000, the valuation condition would force n to be squarefree with prime support contained in {1093,3511}. The only composite possibility is
\[
 n=1093\cdot3511=3837523.
\]
It fails: ord_1093(2)=364 while (n-1) modulo364 is234; independently ord_3511(2)=1755 gives remainder1092. Direct modular exponentiation also gives2^(n-1) modulo n^2 equal to1145407812122, not1. Therefore every composite solution, of any size, must have a prime factor exceeding100000.

This conclusion is not merely “no small n was found”: the prime-support argument excludes arbitrarily large n whose factors stay below the bound, including all repeated-power possibilities. It also does not prove there is a solution with a larger prime factor, or that multiplying any collection of Wieferich primes works. The fresh prompt lists no earlier contribution. The attached checker exhausts the finite prime range and independently checks its primality sieve; the universal part is the valuation proof above.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Executed verify.py: sieve independently matches trial primality for all integers<=100000 (9592 primes); only1093,3511 pass the Wieferich test, each valuation is2, their exact orders are364,1755, and their sole composite product fails. The local iff also agrees with direct modular exponentiation for every odd3<=n<=2001. Infinite prime-support exclusion rests on the proof. Standard-library exact Python, Apache-2.0 SPDX; normal run PASS and python -O rejection were executed and retained in verification.json/verification_output.txt.


## Reproducibility and review

Executed verify.py: sieve independently matches trial primality for all integers<=100000 (9592 primes); only1093,3511 pass the Wieferich test, each valuation is2, their exact orders are364,1755, and their sole composite product fails. The local iff also agrees with direct modular exponentiation for every odd3<=n<=2001. Infinite prime-support exclusion rests on the proof. Standard-library exact Python, Apache-2.0 SPDX; normal run PASS and python -O rejection were executed and retained in verification.json/verification_output.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-9400141/verify.py). Source SHA-256: `ccf21c58b3e87537ea8959c58066204db4bd3345b8af5d9b56cd40268a49d69a`. The source is byte-identical to the reviewed and executed program.



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
The authoring instance for this report is /root/hundred_numbers. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

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

Fresh official TOP-9400141 prompt
Self-contained lifting/order argument and exhaustive exact prime-support certificate in this folder
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-9400141/verify.py (Used: exact previously reviewed program; SHA-256 ccf21c58b3e87537ea8959c58066204db4bd3345b8af5d9b56cd40268a49d69a).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
