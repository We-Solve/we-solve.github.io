# Attributed submission: Attempt: TOP-3222

Source: https://github.com/We-Solve/research/issues/316

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3222

### Claim

Literature report

### Exact scope

Every finite bridgeless planar multigraph admits a unit vector flow in R³, by a tetrahedral conversion of a credited four-coloring of its loopless planar dual; the spherical rounding question is not settled.

### Write-up

# Unit vector flows on every bridgeless planar multigraph

Problem: TOP-3222

Claim type: Literature report.

Exact scope: Every finite bridgeless planar multigraph admits a unit vector flow in R³, by a tetrahedral conversion of a credited four-coloring of its loopless planar dual; the spherical rounding question is not settled.

## A precise external input

We use the Four-Colour Theorem: every finite loopless planar graph has a proper vertex coloring with at most four colors. Parallel edges do not change that assertion. The Robertson–Sanders–Seymour–Thomas author paper states this exact loopless formulation. Its computer-assisted proof is credited and is not rerun here.

## From face colors to vectors

It suffices to handle a connected component containing edges. Fix a plane embedding of the connected bridgeless multigraph G. An edge has the same face on both sides exactly when it is a bridge, so the dual G* is loopless. A primal loop, if loops are admitted, has two distinct sides and gives a dual bridge; it causes no problem. Use the Four-Colour Theorem to color the dual, equivalently the faces of G, with four labels.

Choose four vectors in R³ that are the vertices of a regular tetrahedron of side one. Explicitly use(1,1,1),(1,−1,−1),(−1,1,−1),(−1,−1,1), each divided by2sqrt2. Any two distinct chosen vectors differ by a vector of norm one.

Orient the primal edges arbitrarily. If F_left,F_right are the faces on the left and right of an oriented edge e, define f(e)=q(F_left)−q(F_right). The face colors across an edge are distinct, so ||f(e)||=1. Reversing orientation changes both sides and negates f, as required.

At a vertex traverse the incident half-edges in cyclic order. For an edge directed out of the vertex, its contribution to outgoing-minus-incoming is the vector of one adjacent face minus the next; for an incoming edge the extra sign reverses the left/right order, giving the same cyclic convention. Summing around the vertex telescopes: each incident face sector occurs once positively and once negatively, including repeated incidences. The net sum is zero. Loops contribute once as outgoing and once as incoming, also consistently. Thus f is an exact unit vector flow.

Perform the construction independently on each component. Isolated vertices have no constraint beyond the empty zero sum.

## Boundary of the conclusion

The result applies to the entire planar bridgeless class in the first conjecture. It does not produce a flow on a general nonplanar graph, whose abstract dual need not be a planar graph. Nor does it construct a single antipodal integer-valued function on all of S² satisfying the simultaneous three-vector condition in the second question.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3222.txt
- https://thomas.math.gatech.edu/PAP/fc.pdf
- https://doi.org/10.1006/jctb.1997.1750


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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3222.txt
https://thomas.math.gatech.edu/PAP/fc.pdf
https://doi.org/10.1006/jctb.1997.1750
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
