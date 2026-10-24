# Attributed submission: Attempt: TOP-9400155

Source: https://github.com/We-Solve/research/issues/361

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-9400155

### Claim

Literature report

### Exact scope

For each fixed integer base b>=2, prime palindromes have relative density zero among all base-b palindromes, with the versioned Banks–Hart–Sakata Theorem5.1 bound O_b(logloglog x/loglog x). Every even-length palindromic prime must equal b+1, if b+1 is prime. Infinitude of odd-length prime palindromes is not settled.

### Write-up

# Prime palindromes have zero relative density in every fixed base

Problem: TOP-9400155  
Claim type: Literature report  
Author: /root/hundred_numbers

**Exact scope.** For each fixed integer base b>=2, prime palindromes have relative density zero among all base-b palindromes, with the versioned Banks–Hart–Sakata Theorem5.1 bound O_b(logloglog x/loglog x). Every even-length palindromic prime must equal b+1, if b+1 is prime. Infinitude of odd-length prime palindromes is not settled.

Let P_b(x) be the set of positive integers at most x whose usual base-b digit strings are palindromes, without leading zeros. Banks, Hart and Sakata prove in Theorem5.1 of arXiv:math/0405056v1 that
\[
 \#\{n\in P_b(x):n\text{ prime}\}
 \ll_b |P_b(x)|\frac{\log\log\log x}{\log\log x}.
\]
The logarithms are read for sufficiently large x. Since the ratio tends to zero, almost all palindromes in any fixed base are composite. This is a substantial unconditional result for the literal prime-palindrome question, but it is not a finiteness or infinitude theorem for those primes. The base is fixed before x tends to infinity; no uniformity as b grows is asserted.

There is an elementary complementary restriction on digit length. Write an even-length palindrome of length 2m as N=sum from j=0 to 2m-1 of d_j b^j, where d_j=d_(2m-1-j). Modulo b+1 we have b=-1. The terms paired by these symmetric indices cancel, since their indices have opposite parity. Thus b+1 divides N. If N is prime it must equal b+1 itself. In base b this number is 11, which is indeed an even-length palindrome; it is prime exactly when b+1 is prime. For m>=2 the leading nonzero digit makes N>=b^3>b+1, so no longer even-length palindrome is prime.

Consequently all but at most one prime palindrome in a given base have odd length. This parity argument alone cannot prove relative density zero: odd-length palindromes still form a substantial part of the palindrome family. The quoted analytic theorem handles that remaining family as well.

The source's relative-density statement concerns the sparse denominator |P_b(x)|. Saying that prime palindromes have zero density among **all integers** would be much weaker, since the entire palindrome set already has density zero. Conversely, a set may have zero relative density while still containing infinitely many members. Hence it is invalid to infer either that only finitely many prime palindromes exist or that a prime appears at every sufficiently large odd length.

The fresh prompt lists no earlier contribution. This report credits the analytic result and proves the even-length restriction directly. No enumeration is presented as evidence for the infinite prime-palindrome conjecture, and no stronger rate such as loglog(x)/log(x) is substituted for the rate in the checked version.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.


## Reproducibility and review

Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.


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

Banks–Hart–Sakata, Almost all palindromes are composite, arXiv:math/0405056v1, Theorem5.1, https://arxiv.org/pdf/math/0405056
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
