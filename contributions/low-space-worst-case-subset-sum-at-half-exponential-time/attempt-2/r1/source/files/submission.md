# Attributed submission: Attempt: TOP-30007486

Source: https://github.com/We-Solve/research/issues/436

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007486

### Claim

Partial result

### Exact scope

Subset Sum is deterministic exact within the requested time/space envelopes whenever the target after gcd normalization satisfies t/g+1≤2^{0.199n}; no bound of this strength is asserted for arbitrary targets.

### Write-up

# Low-space worst-case Subset Sum at half-exponential time

Claim type: **Partial result**.

Exact scope: Subset Sum is deterministic exact within the requested time/space envelopes whenever the target after gcd normalization satisfies t/g+1≤2^{0.199n}; no bound of this strength is asserted for arbitrary targets.

## A normalized low-target regime

For positive integers a₁,…,a_n compute g=gcd(a₁,…,a_n). If g does not divide the nonnegative target t, answer NO. Otherwise divide all data by g and write T=t/g. When t=0 return YES using the empty subset. The normalization preserves attainable sums exactly, because every original subset sum is g times the corresponding normalized sum.

Use a Boolean array R[0..T], initially R[0]=true and all other entries false. For each normalized item a≤T, visit j from T down to a and set R[j] to R[j] OR R[j−a]; items larger than T are ignored. Descending order ensures that R[j−a] still refers to the preceding item layer, so the item cannot be reused. Induction on the processed prefix proves R[j] holds exactly when a subset of that prefix sums to j. Return R[T]. This has no false positive or false negative and uses no random bits.

The time is O(n(T+1)) array operations plus gcd/input arithmetic, and writable space O(T+1) Boolean cells plus polynomially many input-size bits. In the prompt's word model a cell can conservatively occupy one writable word; indices and item comparisons fit O(1) words because the word size is at least a constant times n+b. Gcd and quotient calculations cost a polynomial in n+b using elementary binary division; all temporary integers, randomness (none), and preprocessing are counted. For a standard bit model a conservative bound is (n(T+1)+1)·poly(n+b), with input reading O(nb).

If T+1≤2^{199n/1000}, then the main time is poly(n+b)2^{0.199n}, which is at most poly(n+b)2^{n/2}; the writable-word bound is O(2^{0.199n}+poly(n+b)). In particular it is bounded by A(n+b+2)^{15}2^{0.199n} for an absolute sufficiently large A when using ordinary elementary gcd/division workspace. For every fixed c with b≤n^c, all preprocessing time factors become polynomial in n, as the prompt requires. The one uniform algorithm does not know c. The promise need not be checked in order to execute it; outside the promise its exactness persists but these exponential envelopes are not claimed. Binary target encoding is not confused with unary input size: the exponential T factor is explicit.

## Earlier contributions and limits

The listed attempt summarizes a claimed worst-case randomized low-space algorithm. This deterministic low-target algorithm gives a distinct honest input regime, strengthened by gcd normalization; it does not certify the worst-case announcement.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30007486/verify.py). Source SHA-256: `a7811c52998b0e1af4777ac40cdfaaf8479a28e32f6e14fce72e54fe49c9c8c6`. The source is byte-identical to the reviewed and executed program.



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
The authoring instance for this report is /root/hundred_algorithms. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007486.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30007486/verify.py (Used: exact previously reviewed program; SHA-256 a7811c52998b0e1af4777ac40cdfaaf8479a28e32f6e14fce72e54fe49c9c8c6).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
