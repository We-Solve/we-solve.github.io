# Attributed submission: Attempt: TOP-30006743

Source: https://github.com/We-Solve/research/issues/401

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006743

### Claim

Literature report

### Exact scope

The credited Alon–Krivelevich–Sudakov algorithm exactly recovers the planted clique with high probability for k≥c√n, for every fixed c>0; its basic spectral stage is stated for k≥10√n.

### Write-up

# Planted Clique Conjecture

Claim type: **Literature report**.

Exact scope: The credited Alon–Krivelevich–Sudakov algorithm exactly recovers the planted clique with high probability for k≥c√n, for every fixed c>0; its basic spectral stage is stated for k≥10√n.

## The established positive side of the threshold

Use exactly the planting distribution in the prompt, but change the size regime: sample G(n,1/2), choose a uniform k-set and fill all its internal edges. Alon–Krivelevich–Sudakov [A] give polynomial-time exact recovery with probability tending to one when k≥c√n for any fixed c>0. Their §2.1 basic Algorithm A applies at k≥10√n; §2.3 enumerates a fixed-size seed to cover each smaller positive constant c. The running-time exponent may depend on c, which is fixed independently of n. The theorem is not for k=n^{1/2−α} with fixed α>0.

The basic procedure takes the k largest absolute coordinates of the second adjacency eigenvector, forming W, and outputs vertices with at least 3k/4 neighbors in W. The primary analysis proves that W overlaps the planted clique in at least 5k/6 vertices with high probability and that this cleanup returns exactly the planted set. It is a recovery statement, rather than merely a test that planting occurred. The spectral concentration and perturbation proof are imported literature, not numerically certified in this contribution.

## Precision and quantifiers

The original algorithm is stated using a symmetric eigenvector calculation and its polynomial-time computation. This report does not claim to implement that numerical subroutine or supply a fresh worst-case rational bit-precision proof. Its positive algorithmic result is credited in the paper's standard polynomial-time spectral model. In particular no finite floating-point simulation is promoted to a proof of an asymptotic high-probability success event. The input adjacency matrix itself has Θ(n²) bits, so polynomial cost is compatible with inspecting it; no sublinear-input runtime is asserted.

For the seed extension, a seed size depending only on c allows n^{O_c(1)} enumeration. Allowing c to shrink with n would make that exponent length dependent and could destroy a polynomial bound. This is why substituting c=n^{-α} into the fixed-c theorem does not contradict the prompt. Similarly the clique size is part of the specified model, the planted subset is random, and no advice identifies its members.

One can independently verify a reported k-set is a clique by checking all its pairs, but that alone does not certify it is the planted set. At this size the primary theorem supplies the high-probability exact identification; generic clique validation is not substituted for it. This literature report locates the algorithmic boundary adjacent to the conjectured hard regime, without asserting the conjecture or any hardness lower bound.

## Earlier contributions and limits

The earlier attempt treats information-theoretic uniqueness below √n, a fresh-edge cleanup from an independent seed, and limitations of fixed degree statistics. It does not state or analyze the classical above-√n spectral recovery theorem. This report adds that credited algorithmic regime with careful fixed-c and numerical-model limits.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

Source-only literature report: no program is attached and no spectral routine was run. The planting model, exact-recovery target, fixed-c regime, basic constant ten and c-dependent enumeration exponent were checked in the primary paper; the deep probability analysis is not independently proof-certified.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

Source-only literature report: no program is attached and no spectral routine was run. The planting model, exact-recovery target, fixed-c regime, basic constant ten and c-dependent enumeration exponent were checked in the primary paper; the deep probability analysis is not independently proof-certified.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006743.txt
Noga Alon, Michael Krivelevich, Benny Sudakov, Finding a Large Hidden Clique in a Random Graph, Random Structures & Algorithms13 (1998), pp.457–466, primary author PDF §2.1 AlgorithmA, Proposition2.3 and §2.3 AlgorithmB: https://people.math.ethz.ch/~sudakovb/hidden-clique.pdf .
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
