# Attributed submission: Attempt: TOP-30006993

Source: https://github.com/We-Solve/research/issues/416

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006993

### Claim

Partial result

### Exact scope

For G=F×Z^d, with F any finite group and d arbitrary, every matrix idempotent over C[G] has zero diagonal coefficient sum on every infinite-order conjugacy class.

### Write-up

# Bass trace vanishing for finite-group times free-abelian products

Claim type: Partial result

Exact scope: For G=F×Z^d, with F any finite group and d arbitrary, every matrix idempotent over C[G] has zero diagonal coefficient sum on every infinite-order conjugacy class.

Write the matrix trace in the group basis as
\[
 a=\sum_{h\in F,\,v\in\mathbb Z^d}a_{h,v}(h,v).
\]
Only finitely many coefficients occur. A conjugacy class of G is C×{v}, where C is a class of F. Such a class has infinite-order elements exactly when v≠0. We must prove b_{C,v}=sum_{h∈C}a_{h,v}=0 for all these v.

Let ρ be any irreducible complex representation of F, of dimension r, with character χ. Evaluating the free-abelian variables at z=(z_1,…,z_d)∈(C*)^d and applying ρ to the coefficients sends the given idempotent e to a qr-by-qr complex idempotent matrix E_ρ(z). Its trace is its rank, an integer between zero and qr. The trace is also a Laurent polynomial in z and hence continuous. Since (C*)^d is connected, that integer is constant. (For d=0 there are no infinite-order classes and the conclusion is vacuous.)

Expanding the trace explicitly gives
\[
 \operatorname{tr}E_\rho(z)
 =\sum_v z^v\sum_C b_{C,v}\chi(C).
\]
A Laurent polynomial constant on (C*)^d has all its coefficients of z^v, v≠0, equal to zero: multiply by a monomial and use the polynomial identity theorem in one variable successively. Therefore for each nonzero v,
\[
 \sum_C b_{C,v}\chi(C)=0
 \quad\text{for every irreducible character }\chi.
\]
The irreducible characters form a basis of the class functions on a finite group, so the square character table is invertible, and all b_{C,v} vanish. The character-basis fact follows from the ordinary finite-group orthogonality theorem; it can equivalently be seen by decomposing the semisimple algebra C[F] into matrix blocks (semisimplicity follows by averaging a projection over F). Its center has both the conjugacy-class-sum basis and one scalar-coordinate basis per irreducible block, giving the same invertible trace pairing. Thus no positivity assertion about the individual group coefficients was needed.

All idempotents and every matrix size q are included. The argument concerns the ordinary group ring, with finite Laurent support; it does not infer a similar statement for a completion from pointwise convergence. It also allows nonabelian F, so it is more than the scalar connected-torus argument for a torsion-free abelian group. Products with a general infinite nonabelian factor are outside the proof, and there is no claim that every virtually abelian group splits as F×Z^d.

Relation to earlier contributions. The prior text records an unverified unrestricted complex Bass theorem. The present proof independently establishes its exact conjugacy-class conclusion for F×Z^d, using all irreducible characters of the finite factor to recover individual class sums; the announcement is not an input.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006993.txt


## Reproducibility and review

Source-only: literal prompt, prior full texts and stated references checked; written deduction audited by author, without formal or human verification.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.


### Who did the work

LLM only (people only prompted or submitted)

### Models used

OpenAI GPT 6.1 Sol, Other (named below)

### Thinking level / time

Mixed (specified per model below)

### Other LLMs

OpenAI, Codex (GPT-6)
OpenAI, GPT-6.1 Sol (user-specified attribution; reasoning level: Ultra; see disclosure below)

### Per-model versions, thinking and roles

GPT-6.1 Sol (supplemental user-specified attribution) | version: unknown | thinking: Ultra (user-specified; not independently verified) | time: unknown | role: requested attribution, supplementing the historical records below.

OpenAI Codex (GPT-6), main instance | version: unknown | thinking: unknown | time: unknown | role: selected and checked scopes, read final reports, spot-checked sources, freshly ran all attached programs, assembled the prepared submissions.
OpenAI Codex (GPT-6), hundred_algebra instance | version: unknown | thinking: unknown | time: unknown | role: developed algebra reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_numbers instance | version: unknown | thinking: unknown | time: unknown | role: developed number-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_graphs instance | version: unknown | thinking: unknown | time: unknown | role: developed graph-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_algorithms instance | version: unknown | thinking: unknown | time: unknown | role: developed algorithms/complexity reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_topology instance | version: unknown | thinking: unknown | time: unknown | role: developed topology reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_geometry instance | version: unknown | thinking: unknown | time: unknown | role: developed geometry reports and performed separate LLM reviews.
The authoring instance for this report is /root/hundred_algebra. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### Model eligibility and verification evidence

The historical research records identify OpenAI Codex (GPT-6) instances with exact serving revisions and reasoning settings unknown. Each report has a separate LLM audit, with the original author/reviewer identities and source/program hashes retained in the research bundle. Those records describe the checks performed; they do not independently establish the historical runtime configuration or a previously demonstrated qualifying architecture. GPT-6.1 Sol with Ultra reasoning is the submitting user's explicit supplemental attribution, not independently verified runtime metadata or a retrospective reassignment of the earlier work. The Mixed selection preserves that distinction between the user's stated attribution and the unknown historical settings. No editorial acceptance is claimed.

### People and roles

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006993.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
