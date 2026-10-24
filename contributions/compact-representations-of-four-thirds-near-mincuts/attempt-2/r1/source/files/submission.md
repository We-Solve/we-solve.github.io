# Attributed submission: Attempt: TOP-30004912

Source: https://github.com/We-Solve/research/issues/387

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30004912

### Claim

Partial result

### Exact scope

Every cut of a connected nonnegatively weighted cactus with 0<λ and weight≤4λ/3 is one bridge or one pair of edges in one cycle; all such cuts have an O(n+m)-word implicit representation.

### Write-up

# Compact Representations of Four-Thirds Near-Mincuts

Claim type: **Partial result**.

Exact scope: Every cut of a connected nonnegatively weighted cactus with 0<λ and weight≤4λ/3 is one bridge or one pair of edges in one cycle; all such cuts have an O(n+m)-word implicit representation.

## Atomic cuts in a cactus

A cactus is a connected simple graph in which every edge belongs to at most one simple cycle. Its blocks are bridges and edge-disjoint cycles, attached in a tree pattern at articulation vertices. A cut is an unordered nonempty proper vertex bipartition, and its weight is the sum of crossing edge weights. Assume the global minimum cut λ is positive; individual edges may have weight zero.

A cut crosses an even number of edges of every cycle, since one returns to the starting side when walking around it. Partition its crossing edges into units: each crossing bridge is one unit, and in each cycle pair the crossing edges arbitrarily. Each unit is itself the edge boundary of a valid cut. Removing a bridge separates the cactus into two components. Removing two edges of one cycle separates that cycle into two paths, each with its attached subcacti, again giving exactly two components. In either case the boundary is exactly the removed unit; no other edge can reconnect the two components, by the cactus block structure. Each unit consequently has weight at least λ.

If a cut has at least two units, its weight is at least 2λ, strictly greater than 4λ/3. Every near-minimum cut therefore has exactly one unit. Conversely each bridge or same-cycle edge pair with weight at most 4λ/3 yields such a cut. This proves an exact characterization, including the equality endpoint. In particular
λ=min( {w_e: e bridge} ∪ {w_e+w_f: e≠f in one cycle} ).
A cycle's minimum pair is its two least-weight edges. A one-vertex graph has no nontrivial cuts and is excluded by λ>0; a single cycle and a tree satisfy the formula with the inapplicable set omitted.

## Compact representation and output cost

Retain the block tree, the cyclic edge order within each cycle, all weights and λ. A cut is encoded by one bridge identifier or two edge identifiers in the same cycle. Its threshold predicate is a single exact weight comparison. The represented family is precisely all near-minimum cuts by the proof. The graph/block data occupy O(n+m) words when weights are word-sized; for binary rationals count their encoded bit length as well, with polynomial bit-time comparisons. One can find blocks by depth-first search, retaining the edges on each discovered cycle, in linear graph operations; even a slower polynomial decomposition would not affect the claimed representation size.

The implicit format does not explicitly print every cut. A unit-weight cycle can have quadratically many near-minimum cuts, and printing each side's full vertex list can cost still more. Given a requested unit, traversing the graph after its removal reconstructs its two sides in O(n+m) graph operations. The bit representation of λ has polynomial size in the rational weight input. This cactus result neither assumes a minimum degree nor asserts the sought representation on arbitrary weighted graphs.

## Earlier contributions and limits

The prior attempt handles unit-weight cycles and tests a proposed representation using K₄. Weighted cacti with arbitrarily many interacting blocks are a stricter added theorem: the atomic-unit argument characterizes the entire near-minimum cut family, including zero-weight edges when λ>0.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30004912/verify.py). Source SHA-256: `6d904b162c84344fc71b978773b8a0894d87bc650e94b8b071b87f82aff72747`. The source is byte-identical to the reviewed and executed program.



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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30004912.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30004912/verify.py (Used: exact previously reviewed program; SHA-256 6d904b162c84344fc71b978773b8a0894d87bc650e94b8b071b87f82aff72747).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
