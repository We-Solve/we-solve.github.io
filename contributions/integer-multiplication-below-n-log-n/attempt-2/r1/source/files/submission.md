# Attributed submission: Attempt: TOP-30007461

Source: https://github.com/We-Solve/research/issues/433

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007461

### Claim

Partial result

### Exact scope

A uniform deterministic fixed-multitape algorithm multiplies n-bit operands in O(n(h+1)) bit time and O(n) work bits when one operand has Hamming weight h; h≤√log₂(n+2) meets the prompt’s time scale.

### Write-up

# Integer multiplication below n log n

Claim type: **Partial result**.

Exact scope: A uniform deterministic fixed-multitape algorithm multiplies n-bit operands in O(n(h+1)) bit time and O(n) work bits when one operand has Hamming weight h; h≤√log₂(n+2) meets the prompt’s time scale.

## Sparse shifted additions with tape accounting

Let A,B be the n-bit nonnegative operands, and h the number of ones in B. Keep a 2n-bit accumulator initially zero and a shifted copy of A. Scan B from low to high bits; whenever the bit is one, add the current shifted A to the accumulator using a usual least-significant-first carry scan. Advance the shift by one position between consecutive input bits. The accumulator invariant after processing positions below j is A·Σ_{i<j} B_i2^i, so after the scan it equals AB. A 2n-bit result suffices since AB<2^{2n}.

A fixed number of one-dimensional tapes suffices: one holds B with a persistent scan head, one holds the shifted A with its current low/high endpoint markers, and one the accumulator. For an addition reset the two arithmetic heads to their marked ends and scan the O(n)-cell working region, including carry propagation, then return them. This costs O(n) tape steps regardless of the gap between consecutive ones. Advancing the shifted-copy endpoint markers and its origin can be done by a one-cell move per shift; equivalently a separate offset-marker tape and corresponding initial head positioning costs O(n) per addition. Initialize and output by linear scans. Thus total cost is O(n(h+1)), with all head movements included and a fixed finite tape alphabet; no multiplication or variable-length shift is unit cost. Choose the less populated operand after two input scans if desired.

The memory consists of constantly many O(n)-cell tapes and binary counters of O(log(n+2)) bits. Carries remain a single bit. The algorithm is uniform and contains no length-dependent advice. It works on dense operands too, with the weaker quadratic bound.

Let δ=2^{-182}. Since δ<1/2, h≤√log₂(n+2) implies n(h+1)=O(n(log n)^{1−δ}) for all sufficiently large n. The machine does not need to evaluate this threshold or δ: the same shifted-addition procedure has the stated bound whenever the promise holds. Zero operands, leading zeros and h=1 are included. For dense binary inputs this calculation supplies no sub-n-log-n bound.

## Earlier contributions and limits

The earlier contribution records a general 2026 below-n-log-n announcement. The present report proves only an explicit sparse-operand class on the stated tape model, without using or certifying that announcement.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30007461/verify.py). Source SHA-256: `0ddce175ccdc83937a0c74c728a38764ba2ed6701b10e9441b551c0a8220d410`. The source is byte-identical to the reviewed and executed program.



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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007461.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30007461/verify.py (Used: exact previously reviewed program; SHA-256 0ddce175ccdc83937a0c74c728a38764ba2ed6701b10e9441b551c0a8220d410).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
