# Editorial acceptance notes

Accepted as a conditional arbitrary-metric approximation barrier. The new incidence-metric embedding accounts for query points being allocatable and bounds their added welfare. The imported KLMM gap must have the stated explicit identical-coverage valuations, perfect-cover YES case, adjustable sufficiently large constant bidder count, and deterministic reduction. The editorial review could not independently retrieve the primary PDF under its network policy; acceptance does not certify that outstanding source check as completed. The statement is not a fixed-dimensional Euclidean hardness result or a result for a prescribed small bidder count.

These appended notes record the scope of owner-authorized acceptance on 28 October 2026. Acceptance is an editorial decision, not human peer review, formal verification, or a certification of global novelty. The complete original manuscript and complete submitted issue text are retained in supplementary artifacts. Original model and human disclosures follow unchanged. Editorial preparation: OpenAI Codex based on GPT-6, exact version and settings unknown.


# Original submitted scope and disclosures

## Complete submitted scope

For every fixed eta in (0,1/e), a polynomial-time randomized algorithm guaranteeing expected welfare ratio 1-1/e+eta for the explicit arbitrary-metric distance-coverage auction problem implies NP=RP. A deterministic guarantee implies P=NP. The construction uses equal types, identical 0/1 weights, radius 1 and a symmetric {1,2} metric; query points remain allocatable. Truthful allocation algorithms inherit the barrier. No fixed-dimensional Euclidean or prescribed small-bidder-count hardness is asserted.

Significance relative to the checked source: Answers the original absolute-improvement question conditionally for arbitrary metrics, resolving the allocatable-query-point obstruction explicitly left in the checked prior attempt. The new contribution transfers the established identical-coverage welfare gap into the required distance instance while quantitatively controlling the added query allocations.

## Contribution mode

LLM only (people only prompted or submitted)

## Models used

OpenAI GPT 6.1 Sol, Other (named below)

## Thinking level / time

Mixed (specified per model below)

## Other models

OpenAI, Codex (based on GPT-6)

## Submitted model details

OpenAI GPT 6.1 Sol | version: unknown (requested model ID gpt-6.1-sol) | thinking: Ultra (explicitly configured) | time: unknown | roles: /root/new200_a developed the metric reduction, randomized gap argument, complete manuscript and finite checker; /root/new200_b independently reviewed the full proof, significance, external coverage-gap theorem and final TeX formatting, independently enumerated small metric instances and reran the author checker; /root/new200_c provided an additional independent TeX source-format review.

OpenAI Codex (based on GPT-6) | version: unknown | thinking: unknown | time: unknown | roles: /root coordinated the investigation, discussed scope, read the manuscript, performed an independent TeX source-format check, and assembled and submitted the issue. No mathematical authorship is claimed for this role.

## Submitted verification evidence

Independent mathematical and significance reviewer: /root/new200_b, explicitly configured GPT-6.1 Sol / Ultra; exact serving revision and time budget unknown. The checked manuscript has the SHA-256 given above.

Independent review scope and outcome: Correctness and significance passed at the final manuscript hash. The reviewer independently checked the actual KLMM Section 4 identical explicit-coverage construction and adjustable constant bidder count, the metric and coverage identities, the additive query-allocation bound, parameter choices, polynomial encoding and the one-sided randomized threshold argument. The imported PCP gap remains a credited external theorem. The independent finite checker covered 294 systems and 92458 allocations; the author checker was rerun with 1364 systems and 444626 allocations. These computations verify finite embedding examples, not the asymptotic hardness theorem. No corrections were needed.

Two independent TeX source-format checks: /root/new200_b, /root. Balanced math delimiters, braces, environments, commands, citations and standalone dependencies were checked on the exact submitted source. Automated static checks passed. No TeX compiler is available in this environment, so compilation and PDF/visual rendering were not performed.

No human or formal proof verification, comprehensive novelty certification, or editorial acceptance is claimed.

## People and roles

Gaven (@gavenren): requested the investigation and authorized submission; no human mathematical verification or authorship is claimed.

## Submitted references

- Immutable original statement and complete prior attempt are cited with exact canonical IDs and revisions in the manuscript at upstream commit c4ef184d1d392f70fed32c5e862d7f24d11e8401.
- Han et al., Data Auctions for Retrieval Augmented Generation, https://arxiv.org/html/2508.16007v2. Checked: Sections 2 and 4, the distance/weight/radius model and approximation question.
- Khot, Lipton, Markakis and Mehta, Inapproximability Results for Combinatorial Auctions with Submodular Utility Functions, https://pages.cs.aueb.gr/~markakis/research/algo08-submod.pdf; DOI https://doi.org/10.1007/s00453-007-9105-7. Used: Section 4, Lemmas 13-14 and Theorem 16, including the explicit identical-coverage construction and arbitrarily large constant bidder count. The PCP theorem is imported transparently, not claimed as newly proved.
