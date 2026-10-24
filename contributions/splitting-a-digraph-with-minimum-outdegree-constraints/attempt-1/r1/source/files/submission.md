# Attributed submission: Attempt: TOP-3265

Source: https://github.com/We-Solve/research/issues/322

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3265

### Claim

Literature report

### Exact scope

For digraphs obtained by replacing each edge of a simple graph by both arcs, the least minimum-outdegree threshold is2d+1; this is a precise application of Stiebitz’s published degree-partition theorem, and the same sufficient condition holds for any spanning bidirected core.

### Write-up

# The exact split threshold for symmetric digraphs

Problem: TOP-3265

Claim type: Literature report.

Exact scope: For digraphs obtained by replacing each edge of a simple graph by both arcs, the least minimum-outdegree threshold is2d+1; this is a precise application of Stiebitz’s published degree-partition theorem, and the same sufficient condition holds for any spanning bidirected core.

## Credited input

Stiebitz’s Theorem1 says that a finite simple undirected graph with degree at least a(v)+b(v)+1 at every vertex has a nonempty vertex partition(A,B) with internal degrees at least a(v) on A and b(v) on B. Its constant-valued Corollary3 is the minimum-degree s+t+1 result. The theorem and nonempty-part convention were checked in the actual four-page original paper. Its proof is credited rather than independently reconstructed here.

## Directed translation

Let D be symmetric: uv is an arc exactly when vu is, and write G for the underlying simple graph. Then d_D⁺(v)=d_G(v). Apply the theorem with a=b=d. If δ⁺(D)≥2d+1, it gives nonempty parts X,Y in which each vertex has at least d neighbors. Both arcs of each internal underlying edge remain, so these internal undirected degrees equal d⁺_(D[X]) and d⁺_(D[Y]). This is exactly the required directed partition.

More generally a digraph can contain extra asymmetric arcs. If its spanning subdigraph consisting of bidirected pairs has underlying minimum degree at least2d+1, apply the same theorem to that core. Additional internal arcs cannot reduce either outdegree. Minimum total outdegree alone, however, does not guarantee such a core, so this does not prove existence of f(d) for all digraphs.

## Sharp threshold and a general lower bound

Take the symmetric complete graph on2d+1 vertices. It has minimum outdegree2d. Any induced part of minimum outdegree at least d needs at least d+1 vertices, since loops are forbidden. Two such parts would need at least2d+2 vertices and cannot partition this example. Therefore the restricted threshold is at least2d+1, and the theorem makes it exactly2d+1. The same example also proves f(d)≥2d+1 if a threshold for arbitrary digraphs exists.

The assertion holds for every positive integer d, with nonempty parts and no balance requirement. It does not turn an undirected decomposition theorem into a statement about all one-way digraphs.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3265.txt
- https://cedric.cnam.fr/~bentzc/INITREC/Files/CP14.pdf
- https://doi.org/10.1002/(SICI)1097-0118(199611)23:3%3C321::AID-JGT12%3E3.0.CO;2-H


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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3265.txt
https://cedric.cnam.fr/~bentzc/INITREC/Files/CP14.pdf
https://doi.org/10.1002/(SICI)1097-0118(199611)23:3%3C321::AID-JGT12%3E3.0.CO;2-H
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
