# Attributed submission: Attempt: TOP-3297

Source: https://github.com/We-Solve/research/issues/325

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3297

### Claim

Partial result

### Exact scope

For every nonempty simple graph H, finite or infinite, both H□N and H□Z have proper minors isomorphic to themselves, witnessed by disjoint branch sets of size at most two.

### Write-up

# Proper self-minors for every graph with a path factor

Problem: TOP-3297

Claim type: Partial result.

Exact scope: For every nonempty simple graph H, finite or infinite, both H□N and H□Z have proper minors isomorphic to themselves, witnessed by disjoint branch sets of size at most two.

## The product family

Let T be either the ray with vertices0,1,2,... or the double ray with vertices all integers. In the Cartesian product H□T, vertices are(h,i), with edges when either h is fixed and i,j are adjacent in T, or i is fixed and h,h′ are adjacent in H. No restriction on the cardinality or connectivity of nonempty H is needed.

Define a surjection φ on the T-index set that identifies0 and1. For the ray, put φ(0)=φ(1)=0 and φ(i)=i−1 for i≥2. For the double ray additionally put φ(i)=i for i≤0, and use the same rule at i≥1. Contracting the edge01 in either path produces a path isomorphic to the same ray or double ray via this index map.

## Branch sets and exact adjacencies

For each target vertex(h,j), take the branch set B_(h,j)={h}×φ^(−1)(j). It is a singleton unless j=0, when it is the two adjacent vertices(h,0),(h,1). These branch sets are nonempty, pairwise disjoint and connected. They cover the whole source vertex set.

If two target vertices share h and have consecutive path indices, there is an original T-edge between their branch sets. If they share j and h,h′ are adjacent in H, choose any index i in φ^(−1)(j); the H-edge at level i joins the two sets. Thus every target adjacency is represented.

Conversely an original product edge either stays within one h-fiber and maps to a path edge or collapses inside B_(h,0), or stays on one level and maps to an H-edge at one target level. It creates no undesired adjacency. At the merged level, the two original copies of an H-edge can become parallel; retain one and delete the other if a simple minor is required. Loops created by contraction are discarded. The resulting graph is exactly H□T.

The model is proper because H is nonempty and at least one branch set has two vertices, so an actual edge is contracted. The prompt’s definition permits infinitely many disjoint branch sets, and all of ours are finite, so there is no hidden appeal to an infinite connected contraction or a missing well-order of elementary operations.

This covers all finite-width strips, infinite cylinders and higher-dimensional lattice graphs having a ray or double-ray Cartesian factor. It does not claim that every infinite graph has such a factor, and leaves the general countable self-minor question undecided.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3297.txt


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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3297.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
