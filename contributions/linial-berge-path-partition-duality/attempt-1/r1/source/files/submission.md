# Attributed submission: Attempt: TOP-3190

Source: https://github.com/We-Solve/research/issues/312

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3190

### Claim

Partial result

### Exact scope

For every transitive orientation of a complete multipartite graph with its independent parts linearly ordered, prove π_k=α_k for every k≥1 by an explicit Ferrers-column path partition.

### Write-up

# Exact Linial–Berge duality for weak orders

Problem: TOP-3190

Claim type: Partial result.

Exact scope: For every transitive orientation of a complete multipartite graph with its independent parts linearly ordered, prove π_k=α_k for every k≥1 by an explicit Ferrers-column path partition.

## A named digraph class

Let the vertex set be a disjoint union of nonempty layers V_1,...,V_t, of respective sizes a_1,...,a_t. Put every arc from V_i to V_j when i<j and no arc within a layer. These are the strict weak orders, equivalently the transitive orientations of complete multipartite graphs. A directed path can use at most one vertex from each layer, always in increasing layer order. An independent set lies in a single layer.

It follows that α_k is the sum of the k largest layer sizes, or all sizes if k≥t. Indeed the union of k independent sets meets at most k layers, while taking the k largest entire layers attains that number. Empty sets are allowed as color classes.

## Explicit optimal partition

Enumerate each layer arbitrarily as v_(i,1),...,v_(i,a_i). For j=1,...,max a_i, take a path P_j that lists v_(i,j) over all layers with a_i≥j, in their original order i. Every required forward arc exists, and singleton lists are legitimate paths. Every vertex belongs to exactly one P_j. Let h_j=#{i:a_i≥j}; then |P_j|=h_j.

We claim Σ_j min(k,h_j) is exactly the sum of the k largest a_i. Sort the layer sizes in nonincreasing order solely for this numerical calculation, obtaining b_1≥...≥b_t. Then min(k,h_j) counts the indices i≤min(k,t) for which b_i≥j. Summing the indicators first over j and then over i gives Σ_(i≤k)b_i. The actual paths remain in the original layer order, so no invalid reordering of arcs occurs. The displayed partition therefore has k-norm α_k.

For any path partition and any union U of k independent sets, a path meets each independent set at most once, because its vertices occupy distinct layers and an independent set is contained in one layer. Hence |U∩P|≤min(k,|P|). Sum over the partition and maximize U to get α_k≤π_k. Together with the constructed partition this proves equality.

The case k≥t gives both sides |V|, and the empty digraph has both sides zero by the empty partition. No poset min-max theorem is imported. Arbitrary acyclic digraphs can omit forward arcs, so the column paths and the independent-set description need not remain valid there.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3190.txt


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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3190.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
