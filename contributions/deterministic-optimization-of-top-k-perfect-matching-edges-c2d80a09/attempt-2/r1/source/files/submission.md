# Attributed submission: Attempt: TOP-30004914

Source: https://github.com/We-Solve/research/issues/388

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30004914

### Claim

Partial result

### Exact scope

On arbitrary graphs with two rational weight levels a<b, one polynomial-time perfect matching maximizes the sum of its k largest edge weights simultaneously for every k, including k supplied as input.

### Write-up

# Deterministic Optimization of Top-$k$ Perfect-Matching Edges

Claim type: **Partial result**.

Exact scope: On arbitrary graphs with two rational weight levels a<b, one polynomial-time perfect matching maximizes the sum of its k largest edge weights simultaneously for every k, including k supplied as input.

## Collapse of the ordered objective

Suppose |V|=2t and every edge weight is a or b, where a<b are arbitrary encoded rationals, possibly negative. For a perfect matching M write h(M) for its number of b-edges. Its k-largest-edge sum, for 0≤k≤t, is
F_k(M)=k a+(b−a) min{k,h(M)}.
There are min{k,h(M)} heavy edges among the k largest, and the remaining selected positions have weight a. Since b−a>0, this is nondecreasing in h(M). Therefore any perfect matching maximizing h(M) is optimal for every k at once. The order of the two rational levels, rather than their sign, is what matters. If k≥h(M), additional heavy edges improve the objective; after k heavy edges the objective saturates. The formula handles both cases exactly.

## Reduction to credited weighted matching

Use a deterministic polynomial-time maximum-weight matching algorithm for general graphs, as supplied by Edmonds' weighted matching theory [E]. Give edge e the integer weight (t+1)+[w_e=b]. This first maximizes cardinality and, among equal cardinalities, maximizes h: losing one edge loses t+1 in the first term, more than the at most t total heavy-edge bonus. If its cardinality is below t, no perfect matching exists. Otherwise its output is a perfect matching with largest h and hence solves all the ordered objectives above. Odd vertex count immediately means no perfect matching; the empty graph has the empty matching and only k=0.

The imported component is the polynomial-time weighted matching algorithm, not a new proof of blossoms. Its weights here are positive integers of O(log(n+2)) bits. Reading/comparing the original rational levels and explicitly outputting the matching is charged; all remaining graph and weight encodings have polynomial length. Thus its standard polynomial-time bound gives polynomial bit complexity, without assuming unit-cost arbitrary rational arithmetic. The attachment enumerates all perfect matchings on bounded graphs to verify the two-level reduction and simultaneous-k conclusion; it does not implement or certify the polynomial blossom subroutine.

[E] Jack Edmonds, Maximum Matching and a Polyhedron With 0,1-Vertices, Journal of Research NBS 69B (1965), pp.125–130. The primary paper describes the weighted general-graph matching algorithm and polytope. This report uses that credited algorithm as a black box.

## Earlier contributions and limits

One earlier alias enumerates fixed-k heavy partial matchings and gives a polynomial conclusion on bipartite graphs for fixed k; the other disproves the matroid-greedy interpretation on a six-cycle. Here k is unrestricted and the graph general; the added hypothesis is two weight levels, yielding one simultaneous optimizer for all k.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30004914/verify.py). Source SHA-256: `fe5eec414ccfe5708d6acd070b69fbb05915b394088dc2fdec9d76ac7df587c3`. The source is byte-identical to the reviewed and executed program.



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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30004914.txt
Edmonds 1965, primary NIST paper, abstract and weighted algorithm: https://nvlpubs.nist.gov/nistpubs/jres/69B/jresv69Bn1-2p125_A1b.pdf .
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30004914/verify.py (Used: exact previously reviewed program; SHA-256 fe5eec414ccfe5708d6acd070b69fbb05915b394088dc2fdec9d76ac7df587c3).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
