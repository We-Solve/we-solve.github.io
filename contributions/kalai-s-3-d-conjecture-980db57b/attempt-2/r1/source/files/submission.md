# Attributed submission: Attempt: TOP-1216

Source: https://github.com/We-Solve/research/issues/249

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1216

### Claim

Partial result

### Exact scope

Every full-dimensional d-dimensional zonotope has at least 3^d nonempty faces, including itself, by monotonicity of total face count under Minkowski addition.

### Write-up

# All zonotopes satisfy the 3^d face inequality

Problem: TOP-1216

Claim type: Partial result

Exact scope: Every full-dimensional d-dimensional zonotope has at least 3^d nonempty faces, including itself, by monotonicity of total face count under Minkowski addition.

Let F(P) count nonempty faces, with the whole polytope included and the empty face omitted. We first prove F(P+Q)>=F(P) for any full-dimensional polytope P and any polytope Q in the same space.

For a polytope, its normal fan consists of the closed cones of objectives exposing a face containing a specified face; their relative interiors are disjoint and each nonempty face corresponds to exactly one such cone. The whole polytope corresponds to the zero cone. The normal fan of P+Q is the common refinement of the two normal fans. Indeed maximization splits as
\[
 (P+Q)^u=P^u+Q^u,
\]
and the sets of objectives giving the same two exposed faces are intersections of the respective relatively open normal cones; taking closures gives precisely the cones of the common refinement. This also proves directly the refinement assertion rather than inferring it from an increase of vertices only.

In any finite fan refinement, every old cone C contains a new cone of the same dimension whose relative interior meets relint(C). Otherwise finitely many subsets of smaller dimension would cover relint(C), which is impossible: intersect with its linear span, where finitely many proper linear subspaces have empty interior. Such a chosen new cone cannot serve two old cones, because the old relatively open cones are disjoint and each new relative interior is contained in one of them. Choosing one for each C is an injection from old cones to new cones. This includes C={0}. Counting cones proves the monotonicity for all nonempty faces together; no dimensionwise monotonicity is needed.

Now write the zonotope Z=sum[-g_i,g_i]. Choose d independent generators. Their sum is a parallelotope P; the remaining segment sum is Q, so Z=P+Q. A d-parallelotope has 2^(d-j) binom(d,j) faces of dimension j, for 0<=j<=d: choose j free coordinates and fix the others to endpoints after an invertible linear change of coordinates. Therefore
\[
 F(Z)\ge F(P)=\sum_{j=0}^d2^{d-j}\binom dj=3^d.
\]
Zero generators and parallel repeated generators do not affect the argument, and arbitrary translations are harmless. Dimension zero has one nonempty face and satisfies the convention 3^0=1. Every zonotope is centrally symmetric, so this is directly within the literal question. It includes zonotopes whose generators have many dependencies and which are not products of segments up to combinatorial equivalence. No classification of equality cases, and no extension to all centrally symmetric polytopes, is asserted.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1216.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
