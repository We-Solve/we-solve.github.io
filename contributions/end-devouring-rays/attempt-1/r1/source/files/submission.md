# Attributed submission: Attempt: TOP-3306

Source: https://github.com/We-Solve/research/issues/328

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3306

### Claim

Literature report

### Exact scope

Gollin–Heuer’s Theorem1 supplies the exact requested devouring family for every countable end and prescribed infinite disjoint ray family; check that the prompt’s countable-devouring convention implies the theorem’s countability hypothesis even when the graph is uncountable.

### Write-up

# The published prescribed-start end-devouring theorem matches the prompt

Problem: TOP-3306

Claim type: Literature report.

Exact scope: Gollin–Heuer’s Theorem1 supplies the exact requested devouring family for every countable end and prescribed infinite disjoint ray family; check that the prompt’s countable-devouring convention implies the theorem’s countability hypothesis even when the graph is uncountable.

## Credited theorem

Gollin–Heuer, Infinite end-devouring sets of rays with prescribed start vertices, Theorem1, states that for a countable end and a prescribed set of disjoint rays in it, there is a disjoint devouring family with exactly the same starting vertices. The statement is published in Discrete Mathematics341(7)(2018),2117–2120. We apply it only to the nonempty infinite prescribed family in the prompt. Its infinite linkage construction is an external theorem, not an independent proof claimed here.

## Verifying the countability convention

The prompt assumes a countable family R_1,R_2,... devours ω. The union U of their vertices is countable, since each ray itself has countably many vertices. Every family of pairwise disjoint ω-rays has cardinality at most|U|: each ray meets U, and selecting one of its intersection vertices gives an injection into U because the rays are disjoint. Thus the end cannot contain uncountably many pairwise disjoint rays, which is the countable-end condition in the theorem’s ray-degree formulation. This deduction needs no countability assumption on all vertices of G.

The supplied infinite family K is feasible by definition: it is already a pairwise vertex-disjoint family of rays in the end and hence supplies exactly the required starting set. It is itself countable by the same injection argument. Applying the theorem gives K′ with the same starts, disjointness, membership in ω, and the property of intersecting every ω-ray. These are precisely the four literal requirements.

## What is and is not checked

An inclusion-maximal disjoint family devours an end, but extending K that way could add starting vertices, so it would not prove the requested result. The published prescribed-start theorem is the substantive input preventing that error. Equality of starting sets is not replaced by equal cardinality. The conclusion need not retain the original rays or all their initial segments.

This is a report of the established theorem and a convention audit, not a new general-end proof. It makes no claim for ends with uncountably many disjoint rays, for which the countability reduction fails.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3306.txt
- https://epub.sub.uni-hamburg.de/epub/volltexte/2017/69288/pdf/655_1704.06577.pdf
- https://www.math.uni-hamburg.de/home/gollin/
- https://arxiv.org/abs/1704.06577


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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3306.txt
https://epub.sub.uni-hamburg.de/epub/volltexte/2017/69288/pdf/655_1704.06577.pdf
https://www.math.uni-hamburg.de/home/gollin/
https://arxiv.org/abs/1704.06577
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
