# Attributed submission: Attempt: TOP-3105

Source: https://github.com/We-Solve/research/issues/307

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3105

### Claim

Literature report

### Exact scope

If the graph obtained by subdividing every edge once has book thickness at most two, the original graph has book thickness at most four, using Yannakakis’s credited planar theorem.

### Write-up

# A four-page bound whenever the one-subdivision has two pages

Problem: TOP-3105

Claim type: Literature report.

Exact scope: If the graph obtained by subdividing every edge once has book thickness at most two, the original graph has book thickness at most four, using Yannakakis’s credited planar theorem.

## Topological reduction

A two-page book embedding gives a plane drawing: put the spine on a straight line, draw one page in the upper half-plane and the other in the lower half-plane. Within one page, the noninterleaving condition permits disjoint arcs for edges with distinct endpoints. For example, nested intervals can be drawn as nested semicircular arcs after a harmless perturbation at shared endpoints. Intersections between the two open half-planes are impossible. Thus every graph of book thickness at most two is planar.

Let G′ be the exact one-subdivision in the prompt. If bt(G′)≤2, it is planar. In its plane drawing, each subdivision vertex has degree two and belongs to the two halves of one original edge. Suppress it inside a small neighborhood, following those halves to obtain the original edge curve. The neighborhoods and edge interiors are disjoint. Suppressing all subdivision vertices gives a plane drawing of G. Equivalently, planarity is preserved under these contractions. The fact that G′ uses exactly one subdivision per edge is respected; no unrestricted subdivision theorem is substituted.

## Credited planar input

Yannakakis’s published theorem, Embedding planar graphs in four pages, states that every planar graph has a book embedding in four pages. Applying it to the planar G obtained above proves bt(G)≤4. The planar embedding algorithm is an external theorem, not a construction checked by a small example here.

Graphs with no edges have book thickness zero and already satisfy the conclusion. Isolated vertices can be put anywhere on the spine and do not affect the reduction. For a nonempty graph, allowing an unused second page covers the one-page case as well.

## Remaining question

This establishes a universal bound on the entire domain bt(G′)≤2. It does not construct a function for arbitrary input book thickness. When three or more pages are present, different pages cannot all be placed in disjoint planar half-planes, so the planarity reduction stops working. We make no claim that the constant four is sharp within this domain.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3105.txt
- https://www.sciencedirect.com/science/article/pii/0022000089900329
- https://www.openproblemgarden.org/op/book_thickness_of_subdivisions


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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3105.txt
https://www.sciencedirect.com/science/article/pii/0022000089900329
https://www.openproblemgarden.org/op/book_thickness_of_subdivisions
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
