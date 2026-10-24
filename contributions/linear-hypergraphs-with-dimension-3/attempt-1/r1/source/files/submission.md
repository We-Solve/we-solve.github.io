# Attributed submission: Attempt: TOP-3326

Source: https://github.com/We-Solve/research/issues/330

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3326

### Claim

Literature report

### Exact scope

For every input hypergraph in the prompt whose edges have size at most two and whose two-edge graph is triangle-free and planar, construct the required exact intersection hypergraph from the credited planar segment-representation theorem.

### Write-up

# Triangle-free planar rank-two incidence hypergraphs have segment models

Problem: TOP-3326

Claim type: Literature report.

Exact scope: For every input hypergraph in the prompt whose edges have size at most two and whose two-edge graph is triangle-free and planar, construct the required exact intersection hypergraph from the credited planar segment-representation theorem.

## The precise additional regime

Take a hypergraph satisfying the prompt’s simplicity, linearity and incidence-dimension assumptions. Additionally suppose every edge has one or two vertices and the graph G formed by its two-vertex edges is triangle-free and planar. Singleton edges can occur only at isolated vertices of G: otherwise they would be contained in a two-edge, forbidden by the antichain definition. Conversely every isolated vertex must have its singleton edge because each hypergraph vertex is required to belong to an edge. Thus the hypergraph is determined exactly by G and those singleton edges.

## Credited geometric theorem

Chalopin–Gonçalves prove that every finite planar graph is the intersection graph of closed straight segments in the plane. The theorem statement was checked in their full author manuscript. Apply it to G. A nonempty segment is a permitted representing object in the prompt, so no triangle objects are needed here. The deep construction of the segment model is credited rather than independently reproduced.

If a representation initially uses a degenerate point segment, it can be enlarged slightly without creating a new intersection with a nonneighbor: there are finitely many disjoint compact segment pairs, each at positive distance. Keep the point in its enlarged segment to preserve every old intersection. Choose the enlargement shorter than the minimum of the finitely many relevant positive distances. Repeating for the finitely many point segments gives nondegenerate closed segments if desired. Isolated vertices can instead be placed as short segments far from all others.

## Exactness of the hyperedges

Each edge uv of G gives K_u∩K_v≠∅, and every nonedge gives disjoint segments. No three distinct segments can have a common point: such a point would make all three pairs intersect and give a triangle in G. Hence every intersecting subset has size at most two. Every intersecting pair is maximal, and a singleton is maximal exactly when its segment intersects no other segment, namely when the corresponding G-vertex is isolated. The inclusion-maximal intersecting subsets are therefore precisely the original hyperedges. This checks the stronger hypergraph condition, rather than merely representing its pairwise intersection graph.

The proof uses the extra triangle-free planar rank-two hypothesis, and does not discard the incidence-dimension assumption on an arbitrary input. It gives no theorem for rank-three or higher edges, where pairwise intersections need not encode a common point and triples require separate control.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3326.txt
- https://www.lirmm.fr/~goncalves/pmwiki/uploads/seg-complet.pdf
- https://www.lirmm.fr/~goncalves/pmwiki/


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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3326.txt
https://www.lirmm.fr/~goncalves/pmwiki/uploads/seg-complet.pdf
https://www.lirmm.fr/~goncalves/pmwiki/
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
