# Attributed submission: Attempt: TOP-30007113

Source: https://github.com/We-Solve/research/issues/424

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007113

### Claim

Partial result

### Exact scope

Every finite connected cactus with arbitrary positive edge lengths embeds isometrically in real L1; it has a tree decomposition with bag cardinality at most3, giving distortion1 on this explicit bag-size3 subclass.

### Write-up

# Isometric L1 embeddings of all positively weighted cactus metrics

Problem: TOP-30007113

Claim type: Partial result

Exact scope: Every finite connected cactus with arbitrary positive edge lengths embeds isometrically in real L1; it has a tree decomposition with bag cardinality at most3, giving distortion1 on this explicit bag-size3 subclass.

For a circle of circumference L, parameterize points by R/LZ. Map a point p to one half of the indicator of the semicircular arc [p,p+L/2] in L1(R/LZ), using length measure. If the shorter circular separation of p,q is delta<=L/2, the symmetric difference of their semicircles has length 2delta. Hence their L1 distance after the factor 1/2 is exactly delta. Restricting this map to the vertices of a positively weighted cycle, placed at cumulative edge lengths on its circumference, realizes precisely its shortest-path metric, even for odd cycles or very uneven edge lengths. A bridge of length l is represented by its two endpoints 0,l in R with the absolute-value metric.

Now let G be a connected cactus. Its block-articulation incidence graph is a tree: blocks are bridges or simple cycles, and a cycle of blocks would create an edge lying on two simple cycles. Choose a root vertex. For each block B define the gate p_B(v) of a vertex v to be v if v lies in B, and otherwise the unique articulation point of B through which the block-tree path toward v enters. Take the direct sum, over all blocks, of the block embedding applied to p_B(v), subtracting an arbitrary fixed basepoint image in each coordinate.

For u,v, the projections p_B(u),p_B(v) agree on every block off their block-tree route. On a block on that route they are exactly its entry and exit vertices. Any graph path from u to v must pass through those gates; conversely the shortest paths within the route's successive blocks concatenate without extra cost. Thus
\[
 d_G(u,v)=\sum_B d_B(p_B(u),p_B(v))
 =\sum_B\|F_B(p_B(u))-F_B(p_B(v))\|_1.
\]
The right side is the norm of the direct-sum difference, proving isometry. Positivity of edge lengths guarantees these are genuine metrics.

The embedding can be made finite-dimensional. In each cycle, the finitely many endpoints of the vertex semicircles partition its circle into intervals on which all indicator coordinates are constant. Replace each interval by one weighted real coordinate equal to half its length times its zero-one indicator. This preserves every L1 distance exactly. If edge lengths are rational, so are all interval lengths and coordinates; the proof does not depend on rounding a continuous measure.

To check the prompt's width convention explicitly, a cycle v_0,...,v_(l-1) has a path decomposition with bags {v_0,v_i,v_(i+1)} for i=1,...,l-2. Each edge is contained in a bag, and each vertex's bags are connected. Bridges use two-vertex bags. Glue block decompositions through bags containing their shared articulation vertex, along the block tree. The resulting decomposition has bags of cardinality at most3. A graph consisting of a single vertex is mapped to zero. This proves the literal noncontracting and upper inequalities with C_3=1 on the cactus subclass, independent of graph size and weight ratios. General bag-size3 graphs can have overlapping cycles and are not covered; no all-treewidth theorem is inferred from the block proof.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Executed check_exact.py with assertions enabled: PASS 140 rational weighted cacti; 15202 pairwise L1 distances equal independent Dijkstra shortest paths. python -O was separately executed and refused. These are finite exact checks only.


## Reproducibility and review

Executed check_exact.py with assertions enabled: PASS 140 rational weighted cacti; 15202 pairwise L1 distances equal independent Dijkstra shortest paths. python -O was separately executed and refused. These are finite exact checks only.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: check_exact.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30007113/check_exact.py). Source SHA-256: `707b19215cb07d2234ade410d1b52134d1e5a922a09c35a20e331b070fc84470`. The source is byte-identical to the reviewed and executed program.



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
The authoring instance for this report is /root/hundred_geometry. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007113.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30007113/check_exact.py (Used: exact previously reviewed program; SHA-256 707b19215cb07d2234ade410d1b52134d1e5a922a09c35a20e331b070fc84470).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
