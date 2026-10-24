# Attributed submission: Attempt: TOP-3201

Source: https://github.com/We-Solve/research/issues/314

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3201

### Claim

Partial result

### Exact scope

Every Steiner triple system on nonzero vectors of F2^d with blocks {x,y,x+y}, d≥2, fails universality for simple cubic graphs: one explicit ten-vertex cubic graph with a bridge defeats all of them.

### Write-up

# A bridge obstruction for every binary projective Steiner triple system

Problem: TOP-3201

Claim type: Partial result.

Exact scope: Every Steiner triple system on nonzero vectors of F2^d with blocks {x,y,x+y}, d≥2, fails universality for simple cubic graphs: one explicit ten-vertex cubic graph with a bridge defeats all of them.

## An infinite family of systems

For d≥2 take S=F2^d\{0}. For each distinct x,y, use the block {x,y,x+y}. The third vector is nonzero and different from both x,y. Any pair determines its unique third vector, so after discarding duplicate descriptions these are precisely a Steiner triple system. Every block sums to zero in F2^d. This includes the three-point system and the Fano system at d=3.

## The cut obstruction

Suppose a cubic graph has a coloring by this system. At each vertex the sum of its three incident vector colors is zero, because the triple is a block. Sum these equations over any vertex subset X. Every internal edge appears twice and cancels in characteristic two. Therefore the sum of colors on δ(X) must be zero. If δ(X) is a single bridge e, this says c(e)=0, contradicting S excluding zero. Consequently no cubic graph with a bridge has such a coloring.

The obstruction is about an unoriented characteristic-two group sum; we do not silently substitute a conservation rule in a group where double occurrences fail to cancel. More generally the same proof applies to any Steiner system admitting an injection of its points into the nonzero elements of an elementary abelian2-group with every block sum zero.

## One concrete simple cubic witness

Take two disjoint copies of K4. In each copy subdivide one edge by a new vertex. All four old vertices retain degree three, and the new vertex has degree two. Join the two new vertices by a single edge. The resulting graph has ten vertices, is finite, simple and connected, and every vertex has degree three. The joining edge is a bridge separating the two subdivided K4 copies. It therefore has no coloring by any of the systems above. Universality in the prompt explicitly includes bridged cubic graphs, so these are genuine necessary exclusions for its classification.

For comparison every three-edge-colorable cubic graph can be colored by any nonempty Steiner triple system: choose one block and replace the three ordinary colors by its three points. This does not contradict the obstruction, since a cubic graph with a bridge cannot have such a three-edge-coloring, as the same F2² parity argument shows. No assertion is made that every other Steiner system is universal.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3201.txt


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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3201.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
