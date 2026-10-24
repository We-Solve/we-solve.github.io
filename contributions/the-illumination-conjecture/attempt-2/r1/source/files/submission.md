# Attributed submission: Attempt: TOP-1123

Source: https://github.com/We-Solve/research/issues/244

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1123

### Claim

Literature report

### Exact scope

For every n>=2, every full-dimensional 1-symmetric convex body and every invertible affine image satisfies I(K)<=2^n, including nonsmooth bodies. The underlying theorem is Sun–Vritsiou TheoremD.

### Write-up

# Illumination for every affine image of a 1-symmetric convex body

Problem: TOP-1123

Claim type: Literature report

Exact scope: For every n>=2, every full-dimensional 1-symmetric convex body and every invertible affine image satisfies I(K)<=2^n, including nonsmooth bodies. The underlying theorem is Sun–Vritsiou TheoremD.

A body B in R^n is 1-symmetric if membership of (x_1,...,x_n) is preserved under every coordinate permutation and every independent coordinate sign change. This is stronger than central symmetry and stronger than unconditionality alone. No smoothness or polytope assumption is imposed.

TheoremD of Sun--Vritsiou, On the illumination of 1-symmetric convex bodies, arXiv:2407.10314v1 (July14,2024), supplies 2^n directions illuminating every 1-symmetric body, for each n>=2. Its definition is exactly the literal directional one: at every boundary point x some selected d has x+epsilon d in the interior for an epsilon>0. The authors' deep-illumination combinatorial construction is a substantial imported result, not a newly reconstructed proof. TheoremE additionally improves the count for normalized noncube 1-symmetric bodies in n>=3; the advertised result here only needs TheoremD, so no unverified equality classification is inferred.

The affine-transfer deduction is short but keeps strict interior entry intact. Let K=A B+b with A invertible, and let D be an illuminating direction set for B. At a boundary point z=A x+b choose d in D and epsilon>0 with x+epsilon d in int B. Then
\[
 z+\epsilon A d=A(x+\epsilon d)+b\in\operatorname{int}K.
\]
Ad is nonzero, and replacing it by its unit normalization only rescales the positive step parameter. Thus {Ad/||Ad||:d in D} illuminates K. Applying the inverse map also proves affine invariance I(K)=I(B). The count2^n therefore holds on every affine image, even when its visible coordinate symmetries are lost.

Examples include the full family of signed-permutation-invariant nonsmooth convex hulls of finitely many generating orbits, with arbitrary positive parameters, and their affine images. These need not be smooth, simplices, parallelotopes or Cartesian products of prior smooth factors. The source's hypotheses cannot be replaced by origin symmetry alone; that would change the open quantifier. Nor do we claim one universal set of 2^n directions works for every arbitrary affine image: the transformed set depends on A.

The report adds a genuine different scope to the earlier archive; the theorem's detailed combinatorial proof remains credited literature, and no source software, formalization or numerical illumination test is asserted to have run here.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1123.txt
https://arxiv.org/pdf/2407.10314v1 — Sun and Vritsiou, definition of1-symmetry, TheoremD and directional illumination definition; v1 July14,2024.
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
