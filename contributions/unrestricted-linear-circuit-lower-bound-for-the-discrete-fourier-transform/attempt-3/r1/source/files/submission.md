# Attributed submission: Attempt: TOP-30006850

Source: https://github.com/We-Solve/research/issues/411

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006850

### Claim

Literature report

### Exact scope

In Ailon’s invertible in-place model of real two-coordinate rotations and nonzero coordinate scalings, a uniform prefix condition-number bound R forces Ω(n log n/R) rotations for any scaling of the DFT’s real representation.

### Write-up

# Unrestricted Linear-Circuit Lower Bound for the Discrete Fourier Transform

Claim type: **Literature report**.

Exact scope: In Ailon’s invertible in-place model of real two-coordinate rotations and nonzero coordinate scalings, a uniform prefix condition-number bound R forces Ω(n log n/R) rotations for any scaling of the DFT’s real representation.

## The exact model being imported

Ailon [A], arXiv:1403.1307v5, represents an n/2-point complex DFT by an n-dimensional real orthogonal matrix, with n even. There are exactly n mutable real registers. Each step is a real Givens rotation on two registers, or multiplication of one register by an arbitrary nonzero real scalar. Let M_i be the invertible matrix of the first i steps, M₀=I. The hypothesis is max_i ‖M_i‖₂‖M_i^{-1}‖₂≤R. Theorem 3.1 gives Ω(R^{-1}n log n) rotation steps for computing a nonzero scalar multiple of the Fourier transform. This is credited literature, including its quasi-entropy lemma, not a newly proved unrestricted circuit bound.

The dependence is on conditioning of every prefix, not on the magnitude of individual constants. Coordinate scaling can be arbitrarily large or small provided the prefix hypothesis remains true. The real dimension is twice the complex input length, so n log n is Θ(N log N) for an N-point complex transform; no dimension loss changes the asymptotic interpretation.

## Scale invariance and what the theorem adds

The relevant potential is Φ(M)=−Σ_{i,j} M_{ij}(M^{-1})_{ji} log₂|M_{ij}(M^{-1})_{ji}|, with 0 log 0 defined as zero. Its product entry is unchanged when a row of M is rescaled, since the corresponding column of M^{-1} rescales inversely. Global output scaling also leaves it unchanged. Thus determinant growth is not the mechanism behind this theorem. The primary argument bounds a rotation’s potential change by O(R) and the total Fourier potential by Θ(n log n), leading to the theorem's 1/R tradeoff. We cite that analysis rather than relying on floating-point entropy experiments.

For R bounded by an absolute constant this yields Ω(N log N) in-place steps even with unrestricted nonzero scalar magnitudes. More generally, R=o(log N) still gives a superlinear lower bound, while polynomially growing R can make this tradeoff weaker than the elementary output-size bound. These deductions are just substitutions into the credited theorem, not claims that all practical or all exact algorithms satisfy constant conditioning.

An arbitrary straight-line circuit in the literal prompt retains every earlier value, permits free fan-out and need not have an invertible n-register prefix matrix. Translating it to a fixed-register sequence may require extra registers or destroy the R bound. Consequently the imported lower bound is not the unrestricted C_DFT lower bound. The paper has additional extra-workspace theorems with their own final-garbage hypotheses; they are deliberately not imported into this exact scope.

## Earlier contributions and limits

The earlier exploration proves bounded-coefficient and unitary-only special cases; the other alias summarizes a 2026 unrestricted claim. This report instead fixes and explains the broader classical R-conditioned rotation/scaling theorem, including arbitrary scaling and its quantitative nonconstant-R boundary, without treating the announcement as verified.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

Source-only literature report: no program is attached. The primary model, version, inverse-index potential, real/complex dimension convention and exact R hypothesis were checked. No floating-point calculation is claimed as a proof.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

Source-only literature report: no program is attached. The primary model, version, inverse-index potential, real/complex dimension convention and exact R hypothesis were checked. No floating-point calculation is claimed as a proof.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006850.txt
Nir Ailon, An Omega((n log n)/R) Lower Bound for Fourier Transform Computation in the R-Well Conditioned Model, arXiv:1403.1307v5 (24 July 2014), primary §1.1 dimension convention, Definition2.1 and Theorem3.1 with §3 potential argument: https://arxiv.org/pdf/1403.1307 . The fetched PDF identifies v5. Its final §3 proof line prints R^{-2}, inconsistent with its preceding O(R) increment and the theorem/abstract; the reported 1/R is the explicit Theorem3.1 bound and follows by dividing the displayed increments.
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
