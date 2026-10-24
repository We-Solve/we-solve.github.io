# Attributed submission: Attempt: TOP-50

Source: https://github.com/We-Solve/research/issues/235

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-50

### Claim

Literature report

### Exact scope

For n=4 and every fixed positive mass vector, central-configuration shapes are finite in any fixed Euclidean ambient dimension: planar shapes are covered by Hampton–Moeckel and the sole full-affine-dimensional spatial shape is the regular tetrahedron.

### Write-up

# Finiteness for every four-body positive mass vector in any Euclidean dimension

Problem: TOP-50

Claim type: Literature report

Exact scope: For n=4 and every fixed positive mass vector, central-configuration shapes are finite in any fixed Euclidean ambient dimension: planar shapes are covered by Hampton–Moeckel and the sole full-affine-dimensional spatial shape is the regular tetrahedron.

The imported theorem is Hampton--Moeckel, Finiteness of relative equilibria of the four-body problem, Inventiones163(2006),289--312, Theorem1; its author-hosted revised manuscript was inspected. It proves finiteness for every positive four-mass vector in the planar Newtonian problem, including exceptional mass relations. It is not merely generic-mass finiteness. The equivalence convention in that paper is no stronger than needed for the prompt's translation/rotation/scale quotient, so its finite collection remains finite after any further reflection identification. No bound on the number of spatial shapes is inferred from the paper's planar numerical upper bounds.

Here is the complete remaining spatial deduction. Four points have affine span at most three. Those with span at most two are the planar theorem's configurations, embedded in the ambient space. Assume instead the four points are affinely independent, center mass at c, and write centrality as
\[
 \sum_{j\ne i}m_j{|q_j-q_i|^{-3}}(q_j-q_i)=-\lambda(q_i-c).
\]
With M=sum m_j, the center-of-mass identity gives q_i-c=-M^(-1)sum_(j!=i)m_j(q_j-q_i). Subtracting these two expressions yields
\[
 \sum_{j\ne i}m_j\bigl(|q_j-q_i|^{-3}-\lambda/M\bigr)(q_j-q_i)=0.
\]
For fixed i the three displacements are independent. Positivity of m_j forces every coefficient to vanish. Thus all six distances equal (M/lambda)^(1/3), and the configuration is a regular tetrahedron. Conversely the center-of-mass identity verifies centrality of every regular tetrahedron for any positive masses. Up to translations, rotations and positive scaling there are at most two oriented chiral realizations in dimension3 (one if orthogonal reflections are included); in any case the number is finite. Labels stay fixed, and no body permutation is assumed to be an allowed equivalence.

Together the affine-span alternatives exhaust all four-point configurations in every Euclidean dimension. A fixed planar shape has only finitely many orientation classes under the ambient rotation convention: any two embeddings with the same Gram matrix differ by an orthogonal map on their spans, extended to the ambient space, with at most the two determinant choices. No continuous family arises merely by embedding the plane or tetrahedron in a larger space.

This adds all four-body shapes to the prior collinear/simplex calculation through a substantial established planar theorem. The general n>=5 question in the literal prompt is outside the result proved here. The algebraic elimination and exceptional-case analysis supporting Hampton--Moeckel are credited rather than claimed as computations rerun by us.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-50.txt
https://www-users.cse.umn.edu/~rmoeckel/research/FinitenessRE4BP.rev.pdf — Hampton and Moeckel, Theorem1, Newtonian planar convention and exceptional positive-mass analysis, author-hosted revised manuscript.
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
