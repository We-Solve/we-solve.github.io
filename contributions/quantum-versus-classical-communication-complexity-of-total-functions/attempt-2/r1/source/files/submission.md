# Attributed submission: Attempt: TOP-30006810

Source: https://github.com/We-Solve/research/issues/409

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006810

### Claim

Partial result

### Exact scope

For total intersection-threshold functions F_{n,t}(x,y)=[|x∩y|≥t] with 1≤t≤n/2, public-coin classical cost is at most C(1+Q*)², where Q* allows free prior entanglement.

### Write-up

# Quantum versus Classical Communication Complexity of Total Functions

Claim type: **Partial result**.

Exact scope: For total intersection-threshold functions F_{n,t}(x,y)=[|x∩y|≥t] with 1≤t≤n/2, public-coin classical cost is at most C(1+Q*)², where Q* allows free prior entanglement.

## A uniform threshold subclass

Inputs are arbitrary n-bit incidence vectors x,y; there is no promise on either party's set. Let 1≤t≤n/2. Alice can send her entire vector to Bob, who computes the answer; if both parties must know it, Bob sends one additional bit. Therefore R_{1/3}(F_{n,t})≤n+1, with zero error. This protocol is independent of t and uses no hashing assumptions.

Restrict both input vectors to have their first t−1 coordinates equal to one. Leave all remaining r=n−t+1 coordinates unrestricted. On this rectangle of inputs,
F_{n,t}(x,y)= [the remaining two sets intersect].
It is the complement of set disjointness on r elements. Complementing the final output does not change bounded-error communication cost, and restricting inputs cannot increase the cost of a protocol for the full function. Consequently
Q*_{1/3}(F_{n,t}) ≥ Q*_{1/3}(DISJ_r).

The credited deep input is Razborov's Ω(√r) lower bound for bounded-error quantum set disjointness, including unlimited prior entanglement [R, Theorem 2.1 and its disjointness specialization]. Thus for an absolute c>0 and sufficiently large r, Q*≥c√r≥c√(n/2). Combining with the trivial classical protocol yields n+1≤C(1+Q*)² for one absolute C; increase C to absorb the finite small-r cases. This proves the prompt's polynomial relation, with degree two and no leftover log n or input-size multiplier, simultaneously for all thresholds in the stated range.

The only use of the restriction is for a lower bound. The advertised F_{n,t} itself remains total on the full Cartesian input domain. The proof does not substitute a promise communication problem for the requested total-function relation. Local computation is uncharged in both models, as in the literal prompt.

[R] Alexander A. Razborov, Quantum Communication Complexity of Symmetric Predicates, arXiv:quant-ph/0204025v2 (10 April 2002), subsequently Izvestiya Mathematics 67 (2003). The primary abstract and theorem section explicitly retain prior entanglement. That lower-bound proof is imported and credited, not independently reproduced here. No quantum upper bound or tight separation is needed for our deduction. Thresholds above n/2 and arbitrary total Boolean functions are not covered by this argument.

## Earlier contributions and limits

The previous attempt analyzes equality, public randomness, and the inadequacy of deterministic-rank arguments. The intersection-threshold family uses a different substantial entanglement-valid lower bound, with an explicit restriction and a dimension-free polynomial deduction.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

Source/proof-only contribution: no program is attached. The rectangle restriction, complement invariance, trivial exact classical protocol and absorption of finite small cases are proved explicitly; the quantum lower bound is credited literature.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

Source/proof-only contribution: no program is attached. The rectangle restriction, complement invariance, trivial exact classical protocol and absorption of finite small cases are proved explicitly; the quantum lower bound is credited literature.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006810.txt
Razborov, arXiv:quant-ph/0204025v2, primary Theorem 2.1 and disjointness specialization: https://www.ias.edu/sites/default/files/math/csdm/01-02/arazborov_quantum_communication_complexity.pdf .
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
