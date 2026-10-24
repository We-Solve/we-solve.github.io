# Attributed submission: Attempt: TOP-30001931

Source: https://github.com/We-Solve/research/issues/375

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30001931

### Claim

Partial result

### Exact scope

The intersection of two partition-matroid base polytopes has ICP, allowing arbitrary integer block capacities, not only capacity-one perfect matchings.

### Write-up

# ICP for common bases of arbitrary partition matroids

Problem: TOP-30001931

Claim type: Partial result

Exact scope: The intersection of two partition-matroid base polytopes has ICP, allowing arbitrary integer block capacities, not only capacity-one perfect matchings.

Take two partitions of a finite ground set E, with integer capacities a_A and b_B. Assume each matroid has bases attaining all its block capacities and the two total ranks agree. Their common-base polytope is
\[
 Q=\{x\in[0,1]^E:\ \sum_{e\in A}x_e=a_A,\quad
 \sum_{e\in B}x_e=b_B\}.
\]
Empty intersections are excluded. Partition-matroid base polytopes individually have this description: in each block the vertices of a fixed-sum cube slice are the zero-one vectors of the specified sum. Each partition matroid is strongly base orderable: pair elements of two bases within each block, fixing their common elements, and swap any subset of these pairs.

First Q is integral. Associate an edge e to its two partition blocks, obtaining a bipartite multigraph. If a feasible vector is fractional, its fractional-edge subgraph has no vertex of degree one: the sum at that block is integral, whereas all other incident coordinates are integral. A nonempty finite graph of minimum degree at least two has a cycle (parallel edges give a length-two cycle). Bipartiteness makes every such cycle even. Adding and subtracting a sufficiently small amount alternately on its edges preserves every block sum and keeps coordinates in [0,1]. Hence the fractional point is not extreme. Every vertex is zero-one, so Q is exactly the convex hull of common bases.

We prove the needed stronger lattice fact rather than identify ICP with integrality. Let any integral polytope be an affine slice of a zero-one cube with no other inequalities. Every face is obtained by fixing additional coordinates to zero or one: a face's active inequalities are among the cube inequalities. Such a polytope has a triangulation into lattice-unimodular simplices. Induct on face dimension. Select a vertex v of a face F, triangulate recursively every facet not containing v, and cone those simplices to v, using a consistent fixed vertex order on all faces (the pulling construction). Rays from v through F show coverage; shared face triangulations give disjoint relative interiors. Each selected facet fixes some coordinate x_e=c opposite v, where c and v_e are 0 and 1 in some order. Its lattice height from v is one: the integer coordinate functional takes difference one, so is primitive on the affine lattice of F. A unimodular facet simplex coned from height one is unimodular, by extending a lattice basis of the facet kernel by a vector of coordinate value one. This proves the induction, including dimension-zero faces.

Given k>=1 and w integral in kQ, put y=w/k and choose a simplex conv(v_0,...,v_t) of this triangulation containing y. Write y=sum(lambda_i v_i), lambda_i>=0, sum lambda_i=1. In the affine lattice of Q, the differences v_i-v_0 of this full-dimensional simplex form a lattice basis. Thus
\[
 w-kv_0=\sum_{i=1}^t k\lambda_i(v_i-v_0)
\]
has integer coefficients k lambda_i. The remaining coefficient k lambda_0=k-sum(i>0)k lambda_i is also integral. These nonnegative integer coefficients sum to k, and the simplex vertices are affinely independent. This is exactly ICP.

For a zero-dimensional Q use its sole integral point with coefficient k. Redundant block equations, zero capacities, capacities equal to block size, and parallel ground elements cause no change in the argument. The result is a genuine common-base subclass of the prompt; it does not cover general strongly base orderable matroids. In particular no arbitrary common-base polytope is assumed to have coordinate-width-one facets.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30001931.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
