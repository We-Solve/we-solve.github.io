# Attributed submission: Attempt: TOP-30005977

Source: https://github.com/We-Solve/research/issues/390

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30005977

### Claim

Partial result

### Exact scope

For every fixed C≥1 and primes d≤p≤d^C, d≥2, degree<d polynomial multiplication over F_p takes O(d log p·log(d log p)) bit time using credited O(N log N) integer multiplication and explicit carry-free packing.

### Write-up

# Finite-field polynomial multiplication and integer-multiplication lower bounds

Claim type: **Partial result**.

Exact scope: For every fixed C≥1 and primes d≤p≤d^C, d≥2, degree<d polynomial multiplication over F_p takes O(d log p·log(d log p)) bit time using credited O(N log N) integer multiplication and explicit carry-free packing.

## Kronecker packing with every bit charged

Represent coefficients a_i,b_i by integers in [0,p−1], i=0,…,d−1. Choose the least positive integer b with 2^b>d(p−1)². Pack A=Σ_i a_i2^{bi} and B=Σ_i b_i2^{bi}. Every coefficient c_j of the ordinary integer polynomial convolution satisfies 0≤c_j≤d(p−1)²<2^b. Consequently AB=Σ_j c_j2^{bj}, with no carries between blocks. Extract the 2d−1 blocks and reduce each c_j modulo p. These are precisely the field-product coefficients.

The packed integers have N≤db bits. In the stated regime d≤p≤d^C, b=O(log p+log d)=O(log p) and log p=Θ_C(log d). Packing, streaming block extraction and output cost O(d b), not O(d) operations on unbounded integers. Apply Harvey–van der Hoeven's credited deterministic multitape integer multiplication theorem M(N)=O(N log(N+2)) [H]. This costs O(d log p·log(d log p)) bit steps.

Each extracted block has O(log d) bits in this regime. Elementary binary long division by p uses O((log d)²) bit steps, and all 2d−1 reductions therefore cost O(d log² d). Since log p≥log d and log(d log p)≥log d, this is within the same target. Powers and b can be determined by bit lengths and a few exact integer operations on O(log d)-bit quantities. Even binary repeated shift counts and tape scans are covered by the linear packing/extraction work and polynomial-log overhead for the O(d) blocks; no giant shift is treated as unit cost.

This is one uniform algorithm independent of the fixed exponent C. The big-O constant for the advertised regime may depend on C, because the elementary reduction bound uses p≤d^C. For p outside the band the packing identity is still correct, but this accounting no longer supplies the advertised target via schoolbook remainder computations. In particular fixed p=2 with growing d is not covered. The field encoding is the prime field with standard binary residues, and output has Θ(d log p) bits in the padded convention.

[H] David Harvey and Joris van der Hoeven, Integer multiplication in time O(n log n), Annals of Mathematics 193 (2021), pp.563–617. The primary theorem supplies a deterministic bit/Turing-machine upper bound; its proof is not reproduced here. The independent exact checker verifies the packing identity and modular coefficients against a direct convolution, not that asymptotic integer multiplication theorem. The second literal question, an Ω(n log n) integer multiplication lower bound, is not answered by an upper bound or by packing.

## Earlier contributions and limits

The prior page summarizes a 2026 claimed sub-n-log-n integer multiplication algorithm, without deriving a finite-field upper bound. This report uses the established 2021 theorem and proves a carefully bounded large-characteristic regime, with explicit remainder and output costs.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30005977/verify.py). Source SHA-256: `185d95e1073451d2d4130ceb48c5e5f3a67fccd56586565098d030aed8dbed75`. The source is byte-identical to the reviewed and executed program.



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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30005977.txt
Harvey–van der Hoeven, Annals of Mathematics 193 (2021), primary publication abstract/theorem: https://annals.math.princeton.edu/2021/193-2/p04 ; author paper page https://web.maths.unsw.edu.au/~davidharvey/research/nlogn/index.html .
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30005977/verify.py (Used: exact previously reviewed program; SHA-256 185d95e1073451d2d4130ceb48c5e5f3a67fccd56586565098d030aed8dbed75).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
