# Attributed submission: Attempt: TOP-3272

Source: https://github.com/We-Solve/research/issues/323

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3272

### Claim

Full disproof

### Exact scope

The literal +c(H) formulation is false: for every r≥2 an ordered tournament of r directed triangles has α=1 but every cyclic spanning subdigraph has cyclomatic number r. This does not disprove the historical +1 formulation.

### Write-up

# An unbounded obstruction to the prompt’s component-count normalization

Problem: TOP-3272

Claim type: Full disproof.

Exact scope: The literal +c(H) formulation is false: for every r≥2 an ordered tournament of r directed triangles has α=1 but every cyclic spanning subdigraph has cyclomatic number r. This does not disprove the historical +1 formulation.

## A distinction in the exact statements

The supplied prompt explicitly defines γ(H)=|A(H)|−|V(H)|+c(H), with cyclic H a disjoint union of nontrivial strongly connected digraphs and no arcs between its components. The actual Open Problem Garden page instead writes the historical quantity |A|−|V|+1. These are equal for connected H but differ on the very disconnected cyclic subdigraphs under discussion. The following disproof is confined to the supplied +c version.

## Construction for every r≥2

Take r disjoint triples V_1,...,V_r. Within each triple put exactly a directed3-cycle. Between distinct triples orient every possible arc from the earlier triple to the later one. This is a finite simple tournament on3r vertices: each pair has exactly one arc. It is weakly connected. Its independence number is1, since every distinct pair is joined by an arc.

The strong components are precisely the triples. A directed path can never decrease its triple index, so no directed cycle or strong component can use vertices from two different triples. Each triple is internally strongly connected and nontrivial, satisfying the input hypothesis.

Let H be cyclic and spanning in exactly the prompt’s sense. It cannot have a component crossing between triples, since there is no return directed path. Inside a triple, no two-vertex set is strongly connected because there is just one directed edge between a pair, and singleton components are explicitly forbidden. Thus all three vertices of each triple must form one H-component. The only available internally strongly connected spanning subdigraph on that triple uses all three cycle arcs. Moreover H cannot retain an arc between different triples, by the prompt’s explicit requirement on its cyclic components.

Consequently H is uniquely the disjoint union of these r directed3-cycles. It has |A|=|V|=3r and c(H)=r. Therefore γ(H)=r>1=α(D). The violation can be arbitrarily large. The case r=2 already provides a concrete six-vertex counterexample satisfying all literal hypotheses.

## Why this is not a historical resolution

For the same H the OPG quantity |A|−|V|+1 equals1 and meets the desired α=1 bound exactly. Hence this construction refutes the transcribed component-count strengthening while leaving that historical problem untouched. No claim that the original Bondy conjecture was disproved is made. Any repair must distinguish the two normalizations or strengthen the input to prevent this obstruction.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Executed verify.py exhaustively on all32,768 spanning arc subsets of the six-vertex tournament. Exactly one is cyclic in the prompt’s sense; its literal cyclomatic number is2 and input independence number1. Separately checked SCCs and tournament adjacency for all layer counts2..20. Standard-library exact arithmetic only; verification_stdout.txt and verification.json preserve the run. Python -O is rejected; optimization_guard.txt records that rejection. The bounded checks supplement the proof and do not extend its scope.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3272.txt
- https://www.openproblemgarden.org/op/cyclic_spanning_subdigraph_with_small_cyclomatic_number


## Reproducibility and review

Executed verify.py exhaustively on all32,768 spanning arc subsets of the six-vertex tournament. Exactly one is cyclic in the prompt’s sense; its literal cyclomatic number is2 and input independence number1. Separately checked SCCs and tournament adjacency for all layer counts2..20. All assertions enabled; a separate python -O run was rejected as required. Source and infinite-proof limitations are stated in report.md.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3272.txt
https://www.openproblemgarden.org/op/cyclic_spanning_subdigraph_with_small_cyclomatic_number
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
