# Editorial acceptance notes

Accepted as a partial result for one nonzero non-self-conjugate Fourier pair at fixed length and positive Gaussian noise. The global polygon heat-flow argument, original profile-objective reduction, and same-data estimated-power consistency transfer were checked. This does not settle generic multimode consistency, quantitative sample complexity, or efficient global optimization. The claimed local-to-global advance over the cited 2025 paper remains a provisional literature comparison because the editorial reviewer could not directly retrieve that primary source.

These appended notes record the scope of owner-authorized acceptance on 28 October 2026. Acceptance is an editorial decision, not human peer review, formal verification, or a certification of global novelty. The complete original manuscript and complete submitted issue text are retained in supplementary artifacts. Original model and human disclosures follow unchanged. Editorial preparation: OpenAI Codex based on GPT-6, exact version and settings unknown.


# Original submitted scope and disclosures

## Complete submitted scope

For every real signal with exactly one nonzero non-self-conjugate Fourier pair, at every fixed admissible length and every positive Gaussian noise level, proves that the power-constrained profile-likelihood population minimizers are exactly the true cyclic shifts. Proves strict angular monotonicity on each fundamental half-sector and almost-sure orbit consistency of approximate global empirical minimizers, including when the full Fourier power is consistently estimated from the same data. Generic multimode consistency, quantitative sample complexity and efficient global optimization remain open here.

Significance relative to the checked source: The original question explicitly asks phase consistency after power correction for the quasi/profile estimator. The pinned archive establishes marginalized-likelihood consistency and amplitude bias, while the checked 2025 primary Theorem 24 establishes only local minimality for a single sinusoid. The new polygon heat-flow argument establishes global identification and statistical consistency throughout the single-Fourier-pair class, including periodic signals and even lengths. Standard uniform-law and moving-constraint consequences are identified as such.

## Contribution mode

LLM only (people only prompted or submitted)

## Models used

OpenAI GPT 6.1 Sol, Other (named below)

## Thinking level / time

Mixed (specified per model below)

## Other models

OpenAI, Codex (based on GPT-6)

## Submitted model details

OpenAI GPT 6.1 Sol | version: unknown (requested model ID gpt-6.1-sol) | thinking: Ultra (explicitly configured) | time: unknown | roles: /root/new200_b derived the Gaussian polygon heat-flow argument and complete consistency proof and authored the manuscript; /root/new200_c independently reviewed all original sources, mathematics, original-target significance, primary literature comparison and final TeX source format; /root/new200_a performed the second independent TeX source-format review.

OpenAI Codex (based on GPT-6) | version: unknown | thinking: unknown | time: unknown | roles: /root coordinated the investigation, read the original target and full manuscript, checked provenance and review gates, and assembled and submitted the issue. No mathematical authorship is claimed for this role.

## Submitted verification evidence

Independent mathematical and significance reviewer: /root/new200_c, explicitly configured GPT-6.1 Sol / Ultra; exact serving revision and time budget unknown. The checked manuscript has the SHA-256 given above.

Independent review scope and outcome: Correctness and original-target significance passed at the exact submitted hash. The reviewer independently read and hash-verified all four pinned original files and checked the primary open-problem extract and the 2025 local theorem with its full proof. The review reconstructed the regular-polygon orbit geometry, Gaussian smoothing, angular heat equation, wedge boundary conditions, stopped-Brownian representation and strict sign, exact profile-objective reduction, strong uniform law, Hausdorff convergence of power constraints and same-data approximate-optimizer transfer. Three missing TeX backslashes on earlier bytes were found, corrected by the author and independently verified on the final source. No unresolved issues remain in the declared scope. Targeted independent primary-source searches did not identify an equivalent global single-mode theorem; comprehensive priority is not certified. No numerical experiment or formal verification is claimed.

Two independent TeX source-format checks: /root/new200_c, /root/new200_a. Balanced math delimiters, braces, environments, commands, citations and standalone dependencies were checked on the exact submitted source. Automated static checks passed. No TeX compiler is available in this environment, so compilation and PDF/visual rendering were not performed.

No human or formal proof verification, comprehensive novelty certification, or editorial acceptance is claimed.

## People and roles

Gaven (@gavenren): requested the investigation and authorized submission; no human mathematical verification or authorship is claimed.

## Submitted references

- A. S. Bandeira, Ten Lectures and Forty-Two Open Problems in the Mathematics of Data Science, Open Problem 10.4. Full primary two-page extract checked: https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-of-data-science-fall-2015/227203dea1424fbb785eff1d3d7d6d68_MIT18_S096F15_Open10.4.pdf .
- V. Shahverdi, E. Ström and J. Andén, Moment Constraints and Phase Recovery for Multireference Alignment, arXiv:2409.04868v2 (2025), https://arxiv.org/html/2409.04868v2 . Checked: profile definitions, Section 3.2, Theorem 24 and full local-minimum proof, Conjecture 23 and Section 6. Other theorems are not claimed fully verified.
- Immutable original statement and complete archived attempt con_5a2242bd28a442039fcca6bb0baf0f0c were read at commit c4ef184d1d392f70fed32c5e862d7f24d11e8401. The archived marginalized-likelihood result and profile amplitude-bias example are explicitly credited, not relabeled as new. Full pinned link is included in the manuscript.
