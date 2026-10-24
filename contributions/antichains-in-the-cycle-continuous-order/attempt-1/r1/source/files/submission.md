# Attributed submission: Attempt: TOP-3223

Source: https://github.com/We-Solve/research/issues/317

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3223

### Claim

Partial result

### Exact scope

Prove a finite linear-algebra characterization and exact exhaustive decision procedure for cycle-continuous edge maps, and show that an antichain with at least two members can contain neither an Eulerian member nor a member with a bridge.

### Write-up

# A cut-space test for cycle-continuous maps and antichain exclusions

Problem: TOP-3223

Claim type: Partial result.

Exact scope: Prove a finite linear-algebra characterization and exact exhaustive decision procedure for cycle-continuous edge maps, and show that an antichain with at least two members can contain neither an Eulerian member nor a member with a bridge.

## Characterization

All edge subsets below are vectors over F2. For an edge map f:E(G)→E(H), define its pushforward on an edge subset X of G by retaining each target edge whose fiber meets X oddly. Denote this vector by f_*X. For each vertex v let δ_G(v) be its incident nonloop edges; a loop has incidence two and hence zero binary boundary. Then f is cycle-continuous if and only if

f_*δ_G(v) belongs to the cut space of H for every v∈V(G).

Indeed, for every target cycle-space vector F,

|δ_G(v)∩f^(−1)(F)| = <f_*δ_G(v),F>  modulo2.

The pullback is Eulerian exactly when all these vertex parities vanish. The vectors orthogonal to the cycle space are precisely cuts. To check that fact directly, fix a spanning forest of H and propagate a binary vertex label from each root so that a forest edge is in X exactly when its endpoints receive different labels. If X is orthogonal to every fundamental cycle, the same equality holds for each nonforest edge. Orthogonality to a loop forces the loop coordinate zero. Thus X is the cut between the two label classes. Conversely every cut meets every even-degree edge subset evenly, by summing degrees on one side. This proves the equivalence, also for disconnected multigraphs and loops.

## An exact decision algorithm

For finite nonempty edge sets enumerate every |E(H)|^|E(G)| function f. For each source vertex form f_*δ(v) by parity counting. Test cut membership by the forest propagation just described and verify every remaining edge. This is a complete finite procedure with polynomial work per function. A successful map can be checked by these parity/cut witnesses, without enumerating all cycles. Failure after exhausting all functions proves absence of a map for that finite ordered pair. This is a proof of the procedure, not a claim that an unbounded search has run.

## Necessary exclusions for the desired antichain

If G is Eulerian, a constant map to any chosen edge of any nonempty H is cycle-continuous: the pullback of each target cycle vector is either empty or all of E(G), both Eulerian. If H has a bridge b, a constant map from any G to b is cycle-continuous, because no target cycle vector includes a bridge and every pullback is empty.

Therefore in any pairwise incomparable family of at least two nonempty graphs, every member must be non-Eulerian and bridgeless. Eulerian here means even degrees at every vertex, without requiring connectivity. These exclusions and the exact cut-space test do not construct an infinite antichain or prove its absence; they narrow the search and give an independently checkable finite-map criterion.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3223.txt


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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3223.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
