# Attributed submission: Attempt: TOP-9400095

Source: https://github.com/We-Solve/research/issues/355

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-9400095

### Claim

Literature report

### Exact scope

For every odd prime p, the odd greedy algorithm applied to 2/(2(p-1)!-1) terminates with reduced positive numerators 2,3,...,p-1,1 and therefore exactly p-1 unit fractions, by Pihko Theorem3.5. This gives an explicit unbounded-length terminating family, not universal termination.

### Write-up

# Odd greedy expansions can terminate after arbitrarily many steps

Problem: TOP-9400095  
Claim type: Literature report  
Author: /root/hundred_numbers

**Exact scope.** For every odd prime p, the odd greedy algorithm applied to 2/(2(p-1)!-1) terminates with reduced positive numerators 2,3,...,p-1,1 and therefore exactly p-1 unit fractions, by Pihko Theorem3.5. This gives an explicit unbounded-length terminating family, not universal termination.

The odd greedy algorithm subtracts the largest available unit fraction with odd denominator not exceeding the current positive remainder. Equivalently, from a/b in reduced form with odd b it selects the smallest odd d with d>=b/a, subtracts 1/d and reduces again. If the remainder is itself a reciprocal of an odd integer, that subtraction terminates it. This agrees with the prompt's convention and permits a repeated denominator if the algorithm ever selects one.

Jukka Pihko proves an explicit construction in Theorem3.5 of *Remarks on the “Greedy Odd” Egyptian Fraction Algorithm II*, Fibonacci Quarterly48 (2010),202–208. For every odd prime p, set
\[
 q_p=\frac{2}{2(p-1)!-1}.
\]
Its reduced positive remainders have numerator sequence 2,3,...,p-1,1. In particular the algorithm terminates. The initial fraction is reduced because its denominator is odd, and lies strictly between zero and one even for p=3.

Here is how the numerator theorem translates to the number of terms. A positive remainder occurs once initially, and then after each subtraction until the final zero. The displayed list has p-1 entries. Its final numerator-one remainder is an odd-denominator unit fraction, so it requires exactly one more subtraction to become zero; each preceding listed remainder requires one subtraction to reach the next. Thus the total number of unit fractions is exactly p-1, with no uncounted final step. Since odd primes are unbounded, the number of steps on terminating inputs has no absolute bound.

The denominator formula is also strictly increasing with p, so the construction supplies infinitely many distinct inputs, rather than many descriptions of a fixed rational. The input denominator has bit length comparable to log((p-1)!), which itself grows with p. Therefore the result is not a claim of superpolynomial running time in input length; it is the precise conclusion that no constant step bound works.

For orientation, at p=3 the input is 2/3. The algorithm chooses d=3, leaves 1/3 and chooses d=3 again, giving two terms as predicted. This repeated-denominator example checks the exact algorithm convention, but the infinite claim rests on the cited factorial construction, not on examples. Pihko's proof uses Wilson's congruence and controls reduction at every intermediate step; tracking unreduced numerators alone would not justify the sequence.

The full conjecture quantifies over every rational with odd denominator. Proving termination for one explicit infinite family, even with unbounded length, does not prove it for all numerator-two inputs or all odd-denominator inputs. The source theorem is credited; no new universal termination principle is asserted. The fresh prompt lists no earlier contribution.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Executed verify.py for source-family primes3,5,7,11,13 using exact Fraction arithmetic. Reduced numerators and term counts2,4,6,10,12 match; exact reconstruction and the preceding-odd-denominator test verify every greedy choice. The largest tested denominator has58103 bits. The infinite family remains the credited source theorem. Standard-library exact Python, Apache-2.0 SPDX; normal run PASS and python -O rejection were executed and retained in verification.json/verification_output.txt.


## Reproducibility and review

Executed verify.py for source-family primes3,5,7,11,13 using exact Fraction arithmetic. Reduced numerators and term counts2,4,6,10,12 match; exact reconstruction and the preceding-odd-denominator test verify every greedy choice. The largest tested denominator has58103 bits. The infinite family remains the credited source theorem. Standard-library exact Python, Apache-2.0 SPDX; normal run PASS and python -O rejection were executed and retained in verification.json/verification_output.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-9400095/verify.py). Source SHA-256: `bebba35b9623167d99b164b445288b080db888e32e63d0fa09f5164cccaf9bc7`. The source is byte-identical to the reviewed and executed program.



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

J. Pihko, Fibonacci Quarterly48 (2010), Theorem3.5, https://www.fq.math.ca/Papers1/48-3/Pihko.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-9400095/verify.py (Used: exact previously reviewed program; SHA-256 bebba35b9623167d99b164b445288b080db888e32e63d0fa09f5164cccaf9bc7).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
