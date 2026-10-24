# Attributed submission: Attempt: TOP-1431

Source: https://github.com/We-Solve/research/issues/264

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1431

### Claim

Literature report

### Exact scope

Every finite 3-colorable planar graph is word-representable, by a directly checked semi-transitive orientation and the credited orientation-to-word theorem; arbitrary planar graphs remain outside the conclusion.

### Write-up

# A certified positive planar word-representable class

Problem: TOP-1431

Claim type: Literature report.

Exact scope: Every finite 3-colorable planar graph is word-representable, by a directly checked semi-transitive orientation and the credited orientation-to-word theorem; arbitrary planar graphs remain outside the conclusion.

## The imported theorem

Halldórsson–Kitaev–Pyatkin prove that a finite graph is word-representable if and only if it has a semi-transitive orientation. An orientation is semi-transitive when it is acyclic and whenever a directed path has adjacent endpoints, all forward edges among its vertices are present. This is Theorem3 in the inspected author manuscript. Its Corollary3 states the 3-colorable consequence. The deep orientation-to-word construction is credited, rather than presented as a new proof here.

## Checking the hypothesis

Let V=A∪B∪C be a proper three-coloring, allowing empty classes. Orient every edge toward the later class in the order A,B,C. Along a directed path the class strictly increases, so there is no directed cycle and there are at most two arcs. A path with one arc trivially has every required forward edge. A path with two arcs is a→b→c with a∈A,b∈B,c∈C. If its endpoints are adjacent, the three edges ab,bc,ac are all present and oriented forward, so the semi-transitivity condition holds. No longer directed path exists. The imported theorem therefore supplies a representing word.

Planarity is not needed for this sufficient condition; intersecting it with the planar class gives the asserted contribution to the literal prompt. The definition of alternation in the paper agrees with deleting all letters except a pair and requiring successive occurrences to alternate. Uniform words are permitted, so the paper’s construction satisfies the prompt’s more permissive finite-word convention.

This condition is sufficient, not necessary: K4 is planar and represented by a word listing each of its four vertices once, although it is not 3-colorable. Conversely an arbitrary four-coloring only bounds directed path length by three and can leave a forbidden missing chord, so the same argument cannot be extended without additional work. We give no structural classification of all planar word-representable graphs.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1431.txt
- https://strathprints.strath.ac.uk/54148/2/Halldorsson_etal_DAM_2015_Semi_transitive_orientations_and_word_representable.pdf
- https://doi.org/10.1016/j.dam.2015.07.033


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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1431.txt
https://strathprints.strath.ac.uk/54148/2/Halldorsson_etal_DAM_2015_Semi_transitive_orientations_and_word_representable.pdf
https://doi.org/10.1016/j.dam.2015.07.033
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
