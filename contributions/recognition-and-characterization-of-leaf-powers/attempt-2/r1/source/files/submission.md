# Attributed submission: Attempt: TOP-30000423

Source: https://github.com/We-Solve/research/issues/368

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30000423

### Claim

Partial result

### Exact scope

For every fixed k≥5, graphs whose quotient by equal closed neighborhoods is a forest have explicit k-leaf roots, constructible in polynomial time; the test is sufficient, not a recognition test for all leaf powers.

### Write-up

# Recognition and Characterization of Leaf Powers

Claim type: **Partial result**.

Exact scope: For every fixed k≥5, graphs whose quotient by equal closed neighborhoods is a forest have explicit k-leaf roots, constructible in polynomial time; the test is sufficient, not a recognition test for all leaf powers.

## The quotient and construction

Two vertices are true twins when their closed neighborhoods are equal. Equality is an equivalence relation; every class is a clique, and between two classes all possible edges occur or none do. Indeed, equality of closed neighborhoods makes adjacency to any third vertex constant, and distinct equivalent vertices lie in one another's closed neighborhoods. Form the quotient graph F, with one vertex per class. Suppose F is a forest.

Put b=floor(k/2). Create a center c_A for each class A. For every quotient edge AB, join c_A,c_B by a path of b unit edges, with fresh internal vertices. Attach each original vertex in A as its own labeled leaf at distance one from c_A. If F has several components, choose one center from each and link these chosen centers in a chain by paths of length k+1, using fresh internal vertices. The resulting graph T is a tree: each component was a subdivision of a tree with pendant leaves, and the component links form a tree. It has no unlabeled leaf, except the one-vertex special case handled below.

Two labeled leaves in the same class have distance two. Leaves in adjacent classes have distance b+2≤k. Leaves in distinct nonadjacent classes in the same component have distance at least 2b+2>k: for even k it is k+2, for odd k it is k+1. Leaves in different components have distance at least k+3>k. Thus precisely the graph's edges correspond to leaf distances at most k. This proves the construction for the literal unit-edge leaf-root definition. The single graph with n=1 uses the conventional one-vertex tree as a leaf root. Empty input, if allowed, can be reported separately rather than assigning a nonstandard tree with no leaves.

## Recognition of the sufficient class and size

Compute all closed neighborhoods, group equal rows of the adjacency matrix, construct the quotient, and check acyclicity by a graph traversal. A simple implementation takes O(n³) bit operations on the explicit adjacency matrix, already polynomial; faster grouping is unnecessary for this claim. Constructing the root uses O(n+k·|V(F)|) vertices and edges. This is polynomial for fixed k, and linear in k as an output-size parameter if unit edges are explicitly expanded. With k in binary one can instead output the same O(n)-edge weighted tree, using binary lengths b and k+1; expansion is not falsely claimed polynomial in log k.

When the quotient is not a forest, the algorithm makes no assertion about leaf-power status. The theorem is a sufficient structural class containing arbitrarily large branching quotients and arbitrarily large true-twin classes, not a forbidden-subgraph characterization of every k-leaf power.

## Earlier contributions and limits

The prior contribution compresses arbitrary leaf-root certificates and discusses subsequent fixed-k recognition literature. It does not supply this true-twin forest quotient class, explicit all-k≥5 root, or corresponding size analysis.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30000423/verify.py). Source SHA-256: `dbe0a87b793be9edb08ac19ce4cf263d7f568b88908bb618b6527c89921ba662`. The source is byte-identical to the reviewed and executed program.



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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30000423.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30000423/verify.py (Used: exact previously reviewed program; SHA-256 dbe0a87b793be9edb08ac19ce4cf263d7f568b88908bb618b6527c89921ba662).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
