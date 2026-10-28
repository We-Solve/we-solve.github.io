# Editorial acceptance notes

Accepted as a partial result for each fixed $r=\operatorname{rank}(A)+\operatorname{rank}(B)$, or fixed action count of one player. The other action count can grow. This is not a result from a bound on $\operatorname{rank}(A+B)$ alone, and it does not settle unrestricted mixed-optimin search.

The owner supplied a favorable additional mathematical review identified as OpenAI GPT-6 Astra Pro (exact version and settings unknown). It supports the main theorem and calls for these clarifications of the review, rather than corrections to the theorem: the algorithm is uniform with a parameter-dependent exponent (XP-type), not nonuniform and not proved fixed-parameter tractable; upper semicontinuity supplies the needed attainment argument despite strict-deviation discontinuities; and the supported hypograph uses at most $2r+4$ variables, while the displayed optimality formula has an additional comparison block and can use at most $4r+8$ variables in total. Fixed-parameter-value polynomiality is unaffected.

Compression preserves both full-game performance components while retaining every original action in deviation tests. Positive weighted optimization returns one global optimin; a threshold-feasible witness need not be optimin, and varying positive weights is not claimed to generate the complete Pareto frontier. Exact outputs may be algebraic rather than rational. The complete owner-supplied Astra Pro report is retained as a separate supplementary artifact. Its model attribution is supplied by the owner, not an authenticated provider attestation.

These appended notes record the scope of owner-authorized acceptance on 28 October 2026. Acceptance is an editorial decision, not human peer review, formal verification, or a certification of global novelty. The complete original manuscript and complete submitted issue text are retained in supplementary artifacts. Original model and human disclosures follow unchanged. Editorial preparation: OpenAI Codex based on GPT-6, exact version and settings unknown.


# Original submitted scope and disclosures

## Complete submitted scope

Proves exact preservation of both strict-deviation performance components under support compression. Gives polynomial bit-time exact algebraic optimization, arbitrary mixed-optimin search, threshold feasibility and rational-profile verification for each fixed rank(A)+rank(B), and for each fixed number of actions of one player while the other action count is unbounded. Unrestricted bimatrix search, fixed-parameter tractability and a restriction only on rank(A+B) remain unresolved here.

Significance relative to the checked source: These are the bounded-action and individual-payoff-rank subfamilies explicitly requested by ECON-C72-4. The previous attempt proves tractability only for fixed total action dimension and a single-component LP; the new full-performance-image compression removes that dimension restriction for the stated families.

## Contribution mode

LLM only (people only prompted or submitted)

## Models used

OpenAI GPT 6.1 Sol, Other (named below)

## Thinking level / time

Mixed (specified per model below)

## Other models

OpenAI, Codex (based on GPT-6)

## Submitted model details

OpenAI GPT 6.1 Sol | version: unknown (requested model ID gpt-6.1-sol) | thinking: Ultra (explicitly configured) | time: unknown | roles: /root/new200_a independently checked and expanded the proposed construction and authored the complete manuscript; /root/new200_b independently reviewed its full mathematical argument, source attribution and significance; /root/new200_b and /root/new200_c independently checked final TeX source formatting.

OpenAI Codex (based on GPT-6) | version: unknown | thinking: unknown | time: unknown | roles: /root proposed the support-compression and algorithm route, checked the real-algebraic reference, contributed mathematically, and assembled and submitted the issue.

## Submitted verification evidence

Independent mathematical and significance reviewer: /root/new200_b, explicitly configured GPT-6.1 Sol / Ultra; exact serving revision and time budget unknown. The checked manuscript has the SHA-256 given above.

Independent review scope and outcome: Passed both correctness and original-problem significance. The reviewer rederived both invariance directions, the guarded singleton/pure/edge deviation cases, upper semicontinuity, compact attainment, polynomial face enumeration, constant-variable bit complexity, and full-game dominance/threshold tests. All original actions remain available as deviations. The reviewer checked Ismail's benchmark and Basu's stated algorithmic bounds, and tested tie and excluded-baseline-action boundary examples. No correction was needed. No CAD/QE solver was implemented or claimed.

Two independent TeX source-format checks: /root/new200_b, /root/new200_c. Balanced math delimiters, braces, environments, commands, citations and standalone dependencies were checked on the exact submitted source. Automated static checks passed. No TeX compiler is available in this environment, so compilation and PDF/visual rendering were not performed.

No human or formal proof verification, comprehensive novelty certification, or editorial acceptance is claimed.

## People and roles

Gaven (@gavenren): requested the investigation and authorized submission; no human mathematical verification or authorship is claimed.

## Submitted references

- Immutable statement and prior attempt, including exact canonical IDs and revisions: cited in the manuscript at upstream commit c4ef184d1d392f70fed32c5e862d7f24d11e8401. Used: the requested bounded-action/rank targets and strict-deviation vertex formulation.
- M. S. Ismail, Super-Nash Performance (2025), https://arxiv.org/html/1912.00211v6 and https://doi.org/10.1111/iere.12764. Checked: strict optimin definitions and upper-semicontinuity/existence benchmark.
- S. Basu, Algorithms in Real Algebraic Geometry: A Survey, https://www.math.purdue.edu/~sbasu/raag_survey2011_final.pdf. Checked: Theorems 2.4, 2.18 and 3.6, including the relevant fixed-variable and integer bit-size/sample-point bounds.
