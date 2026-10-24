# Attributed submission: Attempt: TOP-3224

Source: https://github.com/We-Solve/research/issues/318

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3224

### Claim

Partial result

### Exact scope

Every nonempty finite loopless (2t+1)-regular bipartite multigraph has circular flow number exactly 2+1/t for t≥1, proving the prompt’s weaker 2+2/t bound throughout that named class.

### Write-up

# Exact circular flow numbers for regular bipartite graphs

Problem: TOP-3224

Claim type: Partial result.

Exact scope: Every nonempty finite loopless (2t+1)-regular bipartite multigraph has circular flow number exactly 2+1/t for t≥1, proving the prompt’s weaker 2+2/t bound throughout that named class.

## A perfect-matching decomposition

Let G=(A,B;E) be nonempty, r-regular and bipartite, r=2t+1. In each nonempty component r|A|=r|B|, so the part sizes agree. For X⊆A the r|X| incident edges enter N(X), which has capacity r|N(X)|; hence Hall’s condition |N(X)|≥|X| holds. A perfect matching exists. Removing it leaves an(r−1)-regular bipartite multigraph. Induction partitions all edges into r perfect matchings M_1,...,M_r, with parallel edges distinct. This is the standard elementary Hall argument, not a use of the unproved general flow conjecture.

## An explicit flow

Orient the edges of t+1 matching classes from A to B and give each value1. Orient the edges of the other t classes from B to A and give each value(t+1)/t. At each A-vertex the outgoing total is t+1, exactly equal to the incoming t(t+1)/t; at each B-vertex the equality reverses. All edge values lie in[1,1+1/t], giving a nowhere-zero real(2+1/t)-flow.

## A matching lower bound

Since G is nonempty, it has a vertex of degree 2t+1. Consider any nowhere-zero real ρ-flow at that vertex, reorienting every negative value to be positive. Of its2t+1 incident edges one of the incoming/outgoing classes has at least t+1 edges and the other at most t. Conservation and the bounds1≤f(e)≤ρ−1 imply

t+1 ≤ t(ρ−1),

since the larger class contributes at least its size while the smaller contributes at most t(ρ−1). If the smaller class were empty, conservation would already be impossible. Therefore ρ≥2+1/t. This holds for every feasible flow, hence also for the infimum defining F_c. Combined with the explicit flow it proves exact equality.

The graph is automatically class1, because the decomposition uses precisely its degree number of colors. The construction also shows it is bridgeless: a bridge would force its flow to vanish by summing conservation over one component after deletion. The case t=1 gives exact value3, while the prompt only asks at most4. The empty graph has F_c=2 under the usual infimum convention, so it satisfies the prompt’s upper bound but is excluded from this exact-equality statement.

No conclusion is drawn for all nonbipartite class1 graphs. Their perfect matchings cannot necessarily be oriented consistently across one global bipartition, which is the essential extra hypothesis used above.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3224.txt


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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3224.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
