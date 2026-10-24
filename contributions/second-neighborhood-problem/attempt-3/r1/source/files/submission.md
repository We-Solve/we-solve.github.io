# Attributed submission: Attempt: TOP-1441

Source: https://github.com/We-Solve/research/issues/158

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1441

### Claim

Partial result

### Exact scope

Prove closure of the second-neighborhood inequality under uniform lexicographic products; use Fisher’s credited tournament theorem and direct cycle/edgeless base cases to obtain explicit non-tournament families.

### Write-up

# Second neighborhoods under uniform lexicographic substitution

Problem: TOP-1441

Claim type: Partial result.

Exact scope: Prove closure of the second-neighborhood inequality under uniform lexicographic products; use Fisher’s credited tournament theorem and direct cycle/edgeless base cases to obtain explicit non-tournament families.

## A closure statement with exact neighborhood sets

For a finite nonempty oriented graph G, call a vertex good if |N_G^{++}(v)|≥|N_G^+(v)|, with second neighborhood defined by shortest directed distance exactly two. Let G,H each have a good vertex, and put m=|V(H)|. Form the uniform lexicographic product D=G[H]: replace each vertex g by a copy of H, and include every arc from the fiber of g to the fiber of g′ whenever g→g′ is an arc of G. Within each fiber keep H’s arcs. This is an oriented graph, since neither factor has a loop or an opposite pair of arcs.

For any vertex (g,h), its first neighborhood consists of all m vertices in each fiber over N_G^+(g), plus N_H^+(h) in its own fiber. Its second neighborhood is exactly all m vertices in each fiber over N_G^{++}(g), plus N_H^{++}(h) in its own fiber. To verify the second assertion, consider a directed walk of length two. If it changes quotient fiber twice, its quotient is g→a→b. It cannot return to g because G has no opposite arcs. If b is already a one-step outneighbor of g, all of that fiber was reached in one step and is excluded. If it changes fiber only once, its endpoint again lies in a fiber already reached in one step. If it stays in the original fiber throughout, shortest distances are exactly those in H. Conversely every displayed vertex has the required two-step walk, and is neither the start nor a first neighbor.

Therefore

\[
|N_D^{++}(g,h)|-|N_D^+(g,h)|=
m\bigl(|N_G^{++}(g)|-|N_G^+(g)|\bigr)
+|N_H^{++}(h)|-|N_H^+(h)|.
\]

Choosing good g and good h makes the right side nonnegative. Thus the property “has a good vertex” is closed under this uniform substitution. No assumption that all vertices of either factor are good is needed.

## Credited and elementary base cases

Fisher’s published 1996 theorem states that every tournament has a good vertex (equivalently, some outdegree at least doubles in the directed square). The publisher abstract was checked. Here that result is a credited input, not a new proof of the tournament case.

An edgeless nonempty graph has every vertex good, with both counts zero. Every consistently directed cycle C_ℓ with ℓ≥3 has exactly one first and one second neighbor at each vertex; the two-step endpoint is distinct from the start and first neighbor. Thus cycles provide a self-contained base family as well.

The product lemma proves the conjectured inequality for every iterated uniform lexicographic product with factors drawn from tournaments, directed cycles of lengths at least three, and nonempty edgeless graphs. For example T[C₄] is generally not a tournament, and C₄[C₅] supplies a further explicit non-tournament family. Arbitrary unequal-size substitutions are outside this formula: a block’s size then weights quotient neighbors nonuniformly, and the unweighted base inequality alone is insufficient.

## Checks and relation to prior attempts

The checker directly verifies the good-vertex property for every labeled tournament through six vertices. It then checks the displayed exact neighborhood-set formulas for explicit products involving directed cycles, transitive and cyclic tournaments, and edgeless fibers, and confirms each chosen product witness. Distance-two sets are obtained by graph traversal and have first neighbors removed, avoiding the common “walks of length two” overcount.

The archived attempt-1 already proves the special case of independent clone fibers, corresponding to H edgeless. The present identity adds the internal first/second-neighborhood terms and allows nontrivial oriented fibers. The archived attempt-2 reports a broad 2026 announced general theorem; this report does not independently certify that announcement. Its added content is the fully proved uniform-product reduction and explicit non-tournament certificates. No claim that the general problem remains open is inferred from the older Fisher reference, and no full-solution claim is made here.

## Attribution and limits

These are credited classical results, elementary deductions, or explicit reports of the stated literature theorem. No historical novelty or resolution outside the exact scope is claimed. The proof and checks below do not independently audit any other general-solution announcement in the archive.

## Checked references

- Official TOP-1441 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1441.txt
- D. C. Fisher, Squaring a tournament: A proof of Dean’s conjecture, Journal of Graph Theory 23 (1996), 43–48, primary publisher abstract: https://onlinelibrary.wiley.com/doi/abs/10.1002/(SICI)1097-0118(199609)23:1%3C43::AID-JGT4%3E3.0.CO;2-K


## Reproducibility and review

Exact standard-library verifier completed with status PASS; see verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


[Executable fenced material omitted from this text-only security-screened package; original retained privately.]


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)
OpenAI, GPT-6.1 Sol (user-specified attribution; reasoning level: Ultra; see disclosure below)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected and checked scopes, read final reports, checked sources, freshly ran all attached programs, assembled the prepared submissions.
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

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

Official TOP-1441 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1441.txt
D. C. Fisher, Squaring a tournament: A proof of Dean’s conjecture, Journal of Graph Theory 23 (1996), 43–48, primary publisher abstract: https://onlinelibrary.wiley.com/doi/abs/10.1002/(SICI)1097-0118(199609)23:1%3C43::AID-JGT4%3E3.0.CO;2-K
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
