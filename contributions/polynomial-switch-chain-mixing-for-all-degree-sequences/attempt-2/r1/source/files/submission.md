# Attributed submission: Attempt: TOP-30007441

Source: https://github.com/We-Solve/research/issues/430

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007441

### Claim

Partial result

### Exact scope

For the all-one degree sequence on even n≥4, the literal lazy four-vertex switch chain has gap at least 1/(12 binom(n,4)) and mixes by ceil(12 binom(n,4) ln(4n/2)), hence by 2n⁸.

### Write-up

# Polynomial switch-chain mixing for all degree sequences

Claim type: **Partial result**.

Exact scope: For the all-one degree sequence on even n≥4, the literal lazy four-vertex switch chain has gap at least 1/(12 binom(n,4)) and mixes by ceil(12 binom(n,4) ln(4n/2)), hence by 2n⁸.

## The precise normalization

Realizations of the all-one degree sequence are perfect matchings on n=2m vertices. Use the chain described in the listed attempt: hold with probability 1/2; otherwise choose a uniform four-set Q and one of the six ordered pairs of distinct perfect matchings on Q; perform the indicated replacement if its first matching is present and its second absent. For our state space, each permissible replacement of two edges has probability 1/(12 C), where C=binom(n,4). This normalization matters: choosing only among applicable replacements would give a different speed.

The transition matrix is symmetric, so the uniform law is stationary. Any two perfect matchings can be connected by at most m−1 switches: along each nontrivial even cycle of their union, replace two current edges to install one target edge, repeating until that cycle agrees. Thus the switch metric has diameter at most m−1. Laziness gives aperiodicity.

## A coupling with a uniform contraction

For adjacent M,M′, label the differing edges ab,cd in M and ac,bd in M′. Let τ interchange b,c. Then M′=τM. Draw M's next state Z from its transition law, and set the other next state to τZ. Equivariance of the chain under relabeling gives the correct second marginal. A matching and its image under one transposition are either identical (if b,c are paired) or adjacent (switch the two edges incident with b,c). Starting from M, a transition to a matching containing bc occurs by replacing ab,cd with bc,ad, with probability δ=1/(12 C). In that event Z=τZ. Therefore the expected next switch distance is at most 1−δ.

For any pair of states, join a shortest switch path and glue these adjacent couplings by conditional distributions on their common marginals. The triangle inequality bounds the coupled expected distance by (1−δ) times the original distance. Repeating, and coupling a fixed starting state to the stationary law, gives TV distance at most (m−1)(1−δ)^t≤m exp(−δt). The displayed mixing bound follows. It is below 2n⁸: C≤n⁴/24, ln(2n)≤n for n≥4, and the extra ceiling contributes at most 1.

For completeness the same contraction proves the gap bound. Let f be a nonconstant real eigenfunction of the reversible transition matrix, with eigenvalue λ. Its Lipschitz seminorm in the finite switch metric is positive. The coupling inequality gives Lip(Pf)≤(1−δ)Lip(f), hence |λ|≤1−δ. The nontrivial spectral gap is at least δ. This is stronger than [24 n² C]⁻¹. At n=2 the state space is a singleton, outside the prompt's multiple-realization qualification. No conclusion for arbitrary graphical degree vectors or exact expected-polynomial sampling is inferred.

## Earlier contributions and limits

The prior page summarizes an unindependently-checked 2026 claim for every graphical degree sequence. This report does not rely on that claim: it proves the all-one sequence case with the page’s exact chain normalization and explicit coupling.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30007441/verify.py). Source SHA-256: `2661640a10ed741227ac0f83fbd1ba93887d3bfd6674b602ac3138b759bc25fd`. The source is byte-identical to the reviewed and executed program.



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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007441.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30007441/verify.py (Used: exact previously reviewed program; SHA-256 2661640a10ed741227ac0f83fbd1ba93887d3bfd6674b602ac3138b759bc25fd).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
