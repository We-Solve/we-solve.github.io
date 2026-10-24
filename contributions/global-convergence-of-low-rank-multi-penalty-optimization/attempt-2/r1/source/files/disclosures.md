# Original contributor disclosures

Transcribed from the original public submission. Editor normalization changes only the structured parser representation; these original statements are preserved.

### Who did the work

LLM only (people only prompted or submitted)

### Models used

OpenAI GPT 6 Astra, OpenAI GPT 6.1 Sol, Other (named below)

### Thinking level / time

Mixed (specified per model below)

### Other LLMs

OpenAI, ChatGPT (underlying model unknown)

### Per-model versions, thinking and roles

OpenAI GPT 6 Astra | version: gpt-6-astra; serving revision unknown | thinking: Medium | time: unknown | role: initial investigation, construction and proof development, bounded searches, literature comparison, and earlier fresh-context mathematical audit.

OpenAI GPT 6.1 Sol | version: gpt-6.1-sol; serving revision unknown | thinking: High | time: no preset budget; elapsed duration not used as a capability claim | role: final source/claim review, submission exposition and fresh-context independent recheck of Theorem 1, Proposition 2 and the sharpness example. Settings recorded from actual local session metadata.

OpenAI ChatGPT | version: unknown | thinking: unknown | time: unknown | role: separate advisory conversation assessed the private second-round report and recommended a Partial result submission; its claims are not proof dependencies or eligibility evidence.

### Model eligibility and verification evidence

The generator's Astra/Medium run is not represented as meeting the listed High-setting example. The submitted claims receive a new correctness check by GPT 6.1 Sol at High, a model/setting explicitly listed by the contribution policy. This comprises the source weight/initialization interface, exact rational PSD/rank/kernel and restricted spectra, target uniqueness, full initialized stagnation induction, arbitrary-kernel projection obstruction, and its attaining example. The fresh-context reviewer is separate from the proof-generating contexts. No human or formal verification is claimed. The complete proof and explicit certificates are included above so the submission does not rely on inaccessible logs. The separate High review completed with a PASS on 19 October 2026; it independently reconstructed these arguments and checked every displayed rational pair determinant. The checking model and setting were verified from its own runtime turn_context metadata, rather than inferred from a global configuration. The mathematical evidence being submitted is the complete proof and exact table above; private review logs are not required to verify it.

### People and roles

@yuningyang19: selected the problem and research directions, prompted the models, requested model-setting verification and rechecking, and prepares/authorizes submission. No human proof generation or independent human mathematical verification is asserted.

### References

[1] Christian Kümmerle and Johannes Maly, Recovering Simultaneously Structured Data via Non-Convex Iteratively Reweighted Least Squares, arXiv:2306.04961v2 (18 January 2024). https://arxiv.org/abs/2306.04961v2 . Used: Definition 2.1, Algorithm 2.1, the exact clipped weights and smoothing/initialization interface, and Definition 2.4 for joint RIP. The catalogue uses an earlier title for this work.

[2] we-solve research archive, CS-421-A1 / con_35acdf933dba4f32898f660357d47642, revision r1, gpt 6 astra ultra attempt on CS-421 (11 October 2026). https://we-solve.github.io/contributions/global-convergence-of-low-rank-multi-penalty-optimization/attempt-1/r1/ . Read: identifiability obstruction at target-order isometry, doubled-order uniqueness observation, and its explicit remaining algorithmic gap. Existing source/contributor credit is retained by citation; no catalogue statement is republished here.

[3] Aleksandr Aravkin, James Burke and Daiwei He, IRLS for Sparse Recovery Revisited: Examples of Failure and a Remedy, arXiv:1910.07095v1 (2019). https://arxiv.org/abs/1910.07095v1 . Checked: algorithm comparison and Section IV failure construction/proof. Used for prior-art scope, not as a proof dependency.

[4] T. Tony Cai and Anru Zhang, Sparse Representation of a Polytope and Recovery of Sparse Signals and Low-rank Matrices, arXiv:1306.1154v2 (2013). https://arxiv.org/abs/1306.1154v2 . Checked: Theorem 2.2 and its projection construction. Used to credit known sensing/RIP construction devices and distinguish convex/rank-only thresholds.

### Declarations

- [X] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [X] I understand that this issue and its contents are public immediately.
- [X] Every LLM and person involved is listed, with versions or "unknown".
