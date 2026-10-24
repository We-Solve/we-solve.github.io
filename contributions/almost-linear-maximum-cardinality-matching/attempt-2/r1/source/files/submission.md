# Attributed submission: Attempt: TOP-30007480

Source: https://github.com/We-Solve/research/issues/434

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007480

### Claim

Partial result

### Exact scope

Maximum-cardinality matching is deterministic exact in O(D·2^p·poly(p,log(n+D+2))) word operations from a supplied nice path decomposition of length D and bag size at most p; D=N^{1+o(1)}, p=o(log N) give almost-linear time.

### Write-up

# Almost-linear maximum-cardinality matching

Claim type: **Partial result**.

Exact scope: Maximum-cardinality matching is deterministic exact in O(D·2^p·poly(p,log(n+D+2))) word operations from a supplied nice path decomposition of length D and bag size at most p; D=N^{1+o(1)}, p=o(log N) give almost-linear time.

## States with a reconstruction witness

Let the graph be arbitrary, not necessarily bipartite. The additional input is a valid nice path decomposition: introduce a vertex, introduce one edge whose endpoints are present, or forget a vertex. Every vertex is introduced/forgotten once, every edge is introduced once, and each vertex's presence is an interval. Include the decomposition's encoded length in the input. Empty bags occur at the start and end. Let p be the maximum number of vertices in a bag and D the number of operations; N=n+m+2.

For the current bag B, keep a table indexed by U⊆B. Its entry is the largest number of selected edges among already introduced edges, forming a matching, whose matched vertices in B are exactly U. An impossible entry is −∞. Introduce v by carrying U to the same set with v unmatched. At an introduced edge uv, either skip it, or, if u,v∉U, change U to U∪{u,v} and increase the score by one. Forget v by removing v from the index and taking the larger score over its two possible statuses. This imposes no requirement that forgotten vertices be matched: the objective is maximum cardinality. Store for each winning table entry a predecessor state and the edge decision, using a deterministic tie rule.

Induction over the operations proves the table invariant. An edge can be selected precisely when neither endpoint was matched earlier. Once a vertex is forgotten no later edge can touch it by the decomposition property, so its status may safely be discarded. Every graph matching follows one path of transitions, and every transition path selects a graph matching. The final empty-bag optimum is therefore ν(G). Following stored predecessors backwards outputs the actual selected edge list. The number of output edges is at most n/2 and is charged.

There are at most 2^p states and O(1) alternatives per state per operation. Set manipulation, bag index mapping, score/address operations and predecessor storage cost polynomial in p and log(n+D+2) per state using logarithmic words, with O(1+(p+log(D+1))/log(N+2)) words per predecessor pointer in the general case, and a constant number when D is polynomial in N and p=O(log N). Explicit storage of all predecessor layers uses O(D2^p poly(p,log(n+D+2))) bits. A conservative bit-time bound multiplies by another polynomial in those parameters and includes reading the full graph and decomposition. No arbitrary-precision integer operation is charged as a single logarithmic-word operation.

For D=N^{1+o(1)} and p=o(log N), these factors give N^{1+o(1)} time with success probability one on every path. This is a promise about a supplied decomposition, not an algorithm to find one in that time for arbitrary graphs. For bounded bandwidth an ordering directly supplies a small-frontier decomposition; validation can be performed by scanning its operations and edge coverage within the charged input budget.

## Earlier contributions and limits

The previous page summarizes a general almost-linear randomized matching claim. This report instead supplies and proves the small-pathwidth exact regime, with explicit matching output, decomposition cost and backtracking space.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30007480/verify.py). Source SHA-256: `de887f0bb8a64c850f9c3ec55c1d71b08f385356c6bf48e11fb997db4bdca6f9`. The source is byte-identical to the reviewed and executed program.



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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007480.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30007480/verify.py (Used: exact previously reviewed program; SHA-256 de887f0bb8a64c850f9c3ec55c1d71b08f385356c6bf48e11fb997db4bdca6f9).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
