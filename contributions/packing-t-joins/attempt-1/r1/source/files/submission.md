# Attributed submission: Attempt: TOP-3197

Source: https://github.com/We-Solve/research/issues/313

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3197

### Claim

Partial result

### Exact scope

When T={s,t}, the maximum number of edge-disjoint T-joins equals the minimum T-cut size, for every finite loopless multigraph; this exceeds the conjectured two-thirds bound with additive constant zero.

### Write-up

# Exact T-join packing for a two-terminal set

Problem: TOP-3197

Claim type: Partial result.

Exact scope: When T={s,t}, the maximum number of edge-disjoint T-joins equals the minimum T-cut size, for every finite loopless multigraph; this exceeds the conjectured two-thirds bound with additive constant zero.

## Reduction to paths

Let T={s,t}, with s≠t. Every s–t path is a T-join. Conversely any T-join J contains an s–t path. In the component of(V,J) containing s, the number of odd-degree vertices is even. Since the only odd vertices in the entire subgraph are s,t, that component must also contain t. A path exists in it and can be made simple by removing closed portions. Extracting such a path from each member of an edge-disjoint join packing preserves edge-disjointness. Thus packing joins is exactly packing s–t paths.

A cut is a T-cut precisely when it separates s from t. Every T-join meets such a cut in an odd, hence positive, number of edges: summing its degrees over one cut side gives |J∩δ(X)|≡|T∩X|=1(mod2). Therefore no packing can exceed the minimum T-cut size λ.

## Integral augmenting-path argument

Replace each undirected edge by its two directed versions, each of capacity one. Start with zero s–t flow, and repeatedly augment by one along an s–t residual path. Capacities and flows remain integral. Each augmentation increases the value, bounded by the number of edges incident with s, so the process terminates. At termination let X be the vertices reachable from s in the residual digraph. It excludes t; every arc leaving X is saturated and every arc entering X has zero flow. Conservation summed over X gives flow value equal to the outgoing capacity of this cut, which is the number of original cut edges. Every directed cut has this same undirected-edge capacity convention. This proves the maximum value is λ.

If both directions of an original edge carry one unit, cancel those two units. This changes no vertex divergence or flow value. The remaining positive-flow arcs use every undirected edge at most once. Repeatedly extract an s–t path from positive flow and subtract one; remove any directed cycles. Conservation ensures an s–t path exists whenever positive value remains. The result is λ edge-disjoint undirected paths, and hence λ disjoint T-joins.

If s,t are disconnected then λ=0 and the formula still holds. Parallel edges are independent unit capacities throughout. For positive minimum T-cut k the packing has λ≥k≥2k/3, so the prompt’s target holds in the entire two-terminal regime with C=0. This does not extend to arbitrary even terminal sets, where one path no longer serves as a T-join.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3197.txt


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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3197.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
