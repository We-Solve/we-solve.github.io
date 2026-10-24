# Attributed submission: Attempt: TOP-3234

Source: https://github.com/We-Solve/research/issues/319

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3234

### Claim

Partial result

### Exact scope

For the exact torus sequence H_n in the prompt, construct a path decomposition with bags of size at most14n and an exact 3-coloring count in O(N²·3^(14n)) bit time, N=6n²; no entropy limit or limiting constant is asserted.

### Write-up

# Exact finite counting on the specified hexagonal tori in subexponential time

Problem: TOP-3234

Claim type: Partial result.

Exact scope: For the exact torus sequence H_n in the prompt, construct a path decomposition with bags of size at most14n and an exact 3-coloring count in O(N²·3^(14n)) bit time, N=6n²; no entropy limit or limiting constant is asserted.

## Keep the prescribed torus

Use axial integer coordinates in the triangular lattice: vertices are ae_1+be_2, with unit steps±e_1,±e_2,±(e_1−e_2). The regular hexagonal patch has corners(n,0),(0,n),(−n,n),(−n,0),(0,−n),(n,−n). Identify opposite sides by the translations specified in the prompt. Its triangular faces are not identified with each other, so the dual has exactly N=6n² vertices. Dual edges are either between faces sharing an internal patch edge or across paired boundary edges. Parallel dual edges, if any, impose the same inequality twice and are retained.

Let B be the set of triangular faces incident to the patch boundary. There are6n boundary edges, so |B|≤6n. For each integer i group all remaining faces with minimum first axial coordinate i into F_i. The patch lies in the box[−n,n]². A unit strip i≤a≤i+1 contains at most4n unit triangles, two for each of at most2n unit coordinate cells. Hence |F_i|≤4n. Internally adjacent triangular faces have first-coordinate minima differing by at most one.

## A valid path decomposition

Take consecutive bags B∪F_i∪F_(i+1), padding empty groups at the ends. Every vertex of H_n appears, and every internal dual edge has both endpoints in a bag: if one endpoint lies in B it is present throughout, and otherwise their strip indices differ by at most one. Every seam edge has both endpoints in B. Each F_i occurs in exactly its two neighboring bags, and B occurs in every bag, so the running-intersection condition holds. Bags have at most6n+4n+4n=14n vertices. The argument includes the small periodic maps, since it works before identifying boundary edges and treats seams explicitly.

## Counting invariant and complexity

Convert the bags to introduce/forget steps, introducing a vertex before forgetting the overlap needed for its incident edges. Maintain for each coloring of the current bag the number of partial colorings of introduced vertices that satisfy every edge whose endpoints have both appeared. Introduce a vertex by trying each of the three distinguished labels and discarding assignments that violate an edge to a present neighbor. Forget a vertex by summing over its three labels. The path-decomposition property ensures no forgotten vertex has a future unseen neighbor. Each coloring of the whole graph contributes exactly once, and after all vertices are forgotten the scalar table entry is P_(H_n)(3).

There are at most3^(14n) states per bag and O(N) introduce/forget steps. Counts are at most3^N and have O(N) bits. Edge checks and indexing are polynomially bounded; even charging O(N) bit work per state transition gives O(N²3^(14n)) bit time and O(N3^(14n)) bits of state storage. These deliberately loose bounds are exp(O(sqrt N)), rather than an unjustified polynomial bound.

The method computes each finite term exactly on the specified torus, not a free-boundary or edge-coloring model. An algorithm for finite terms does not itself prove convergence of their N-th roots or determine the requested limit.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3234.txt


## Reproducibility and review

Proof/source review only; no code attached at authoring time. Exact hypotheses and boundary cases are addressed in report.md; external theorem proofs are credited rather than claimed independently verified.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)
OpenAI, GPT-6.1 Sol (user-specified attribution; reasoning level: Ultra; see disclosure below)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected and checked scopes, read final reports, spot-checked sources, freshly ran all attached programs, assembled the prepared submissions.
OpenAI Codex (GPT-6), hundred_algebra instance | version: unknown | reasoning: unknown | role: developed algebra reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_numbers instance | version: unknown | reasoning: unknown | role: developed number-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_graphs instance | version: unknown | reasoning: unknown | role: developed graph-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_algorithms instance | version: unknown | reasoning: unknown | role: developed algorithms/complexity reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_topology instance | version: unknown | reasoning: unknown | role: developed topology reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_geometry instance | version: unknown | reasoning: unknown | role: developed geometry reports and performed separate LLM reviews.
The authoring instance for this report is /root/hundred_graphs. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3234.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
