# Attributed submission: Attempt: TOP-3091

Source: https://github.com/We-Solve/research/issues/306

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3091

### Claim

Literature report

### Exact scope

For ell=3, every finite planar set of at least30 distinct points contains three collinear points or a convex hexagon whose closed hull meets the set in exactly its six vertices.

### Write-up

# The generalized hexagon target at ell=3 with exact threshold30

Problem: TOP-3091

Claim type: Literature report

Exact scope: For ell=3, every finite planar set of at least30 distinct points contains three collinear points or a convex hexagon whose closed hull meets the set in exactly its six vertices.

Heule--Scheucher, Happy Ending: An Empty Hexagon in Every Set of30 Points, arXiv:2403.00737v1 (March1,2024), Theorem1, establishes h(6)=30 for general-position planar point sets. The upper bound is a computer-assisted theorem. Subercaseaux et al., Formal Verification of the Empty Hexagon Number, arXiv:2403.17370v1 (March26,2024; ITP2024), formalizes the geometric-to-SAT reduction and reports the checked unsatisfiability proof. These are credited primary results, not Lean or SAT computations executed in this workspace.

To obtain the exact literal ell=3 subclass, let P be any set of at least30 distinct points. If it has three collinear points, the first alternative already holds. Otherwise P is in general position. Choose a linear objective with distinct values on P, avoiding the finitely many perpendicular directions of pair differences, and let Q be the30 points of smallest objective value. Every other point has value larger than the maximum on Q, and therefore lies outside conv(Q). Apply the h(6)<=30 theorem to Q, obtaining six points in strictly convex position with no Q-point in their interior. Their hull lies in conv(Q), so it also contains no omitted P-point. Finally no other point can lie on a side, since that would give three collinear points. Thus their closed hull meets P only in the six vertices, exactly the prompt's emptiness convention.

The extreme30-point selection justifies the all-input-size quantifier. Applying the theorem to an arbitrary30-point subset would not suffice: omitted points could fill its hexagon. This explicit selection preserves emptiness against the complete input without assuming that arbitrary-subset emptiness is monotone.

The lower bound h(6)>=30 certifies sharpness in the general-position ell=3 subclass; no29-point counterexample is constructed or bundled here. For ell>=4, having no ell collinear points still allows triples on a line, so the theorem cannot simply be applied after deleting blockers. Those remaining collinearity thresholds are outside the result reported. This is a precisely scoped literature resolution of one infinite input class, not a solution of the generalized conjecture for every ell.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

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
The authoring instance for this report is /root/hundred_geometry. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3091.txt
https://arxiv.org/pdf/2403.00737v1 — Heule and Scheucher, Theorem1, v1 March1,2024.
https://arxiv.org/pdf/2403.17370v1 — Subercaseaux, Nawrocki, Gallicchio, Codel, Carneiro and Heule, formal geometric-to-SAT reduction, v1 March26,2024.
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
