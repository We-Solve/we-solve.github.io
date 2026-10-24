# Attributed submission: Attempt: TOP-30006690

Source: https://github.com/We-Solve/research/issues/201

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006690

### Claim

Literature report

### Exact scope

Report Freitas–Le Hung–Siksek’s theorem that every elliptic curve over every real quadratic field is Hilbert modular, with no semistability or geometric non-CM restriction. Explain the compatible-system and cohomological formulations while explicitly separating the literal full finite-adelic injection from merely matching good-place traces; no new all-number-field theorem or independent local–global-compatibility proof is claimed.

### Write-up

# TOP-30006690: Real-quadratic modularity: the published theorem and its exact relationship to the adelic target

Claim type: Literature report

Exact scope: Report Freitas–Le Hung–Siksek’s theorem that every elliptic curve over every real quadratic field is Hilbert modular, with no semistability or geometric non-CM restriction. Explain the compatible-system and cohomological formulations while explicitly separating the literal full finite-adelic injection from merely matching good-place traces; no new all-number-field theorem or independent local–global-compatibility proof is claimed.

Freitas, Le Hung and Siksek prove that every elliptic curve over every real quadratic field is modular [1, Theorem 1]. This is a published 2015 theorem, independent of the newer claims linked in the catalogue. The correct scope includes all reduction types and all curves over those fields; it is not restricted to semistable curves or to curves without geometric CM. The theorem does not quantify over all number fields.

The source defines modularity by existence of a Hilbert cuspidal eigenform of parallel weight two, with rational Hecke eigenvalues, whose L-function equals that of E; equivalently it matches the compatible Galois representations. In particular, for all finite places of good reduction away from the coefficient prime,
\[
 a_v(f)=a_v(E)=Nv+1-\#E(k_v).
\]
This supplies the automorphic object over the original real quadratic field. Potential modularity over an extension would be a weaker conclusion and is not being substituted for this theorem.

**The endomorphism convention.** Thorne observes in the formulation source [2] that End_K(E)=Z is automatic for totally real K. One elementary reason is that an endomorphism defined over K acts on the K-line of invariant differentials by a scalar in K; in characteristic zero this action embeds End_K(E)⊗Q into K. If the endomorphism algebra were imaginary quadratic, it could not embed in a totally real field. Thus the base-field endomorphism condition in the prompt is met on this whole class. A curve may nevertheless acquire CM after extending K, and the real-quadratic theorem does not exclude that possibility.

**Preserving the stronger literal target.** The prompt asks for a GL₂(A_K^∞)-equivariant injection of the full representation π(E), assembled with geometric Frobenius, the |·|^{1/2} twist and every ramified Weil–Deligne monodromy operator. Thorne's Conjecture 2.5 is the weaker cohomological Hecke-eigenclass statement at almost all places; Conjecture 2.6 is the full injection actually printed in this prompt. A calculation of finitely many matching point counts proves neither one.

Hilbert modularity is the established automorphic realization on this field class. To translate that realization into the literal injection one uses the cohomological realization of parallel-weight-two Hilbert forms and local–global compatibility identifying the finite local factors, including ramified monodromy, in the chosen normalization. These are substantive standard parts of the automorphic theory, not consequences of a finite trace table. This report records the published real-quadratic theorem and checks its formulation against Thorne; it does not claim to independently reprove those local–global and cohomology bridges or certify an injection by new computation. Its scope is therefore an explicitly credited literature account, with that dependency retained.

The primary proof uses 3–5–7 modularity switching and an analysis of exceptional real quadratic points on modular curves. I checked the main theorem and hypotheses, not the complete Magma computations or the full modularity-lifting infrastructure. Calling those computations “rerun” merely because a few unrelated elliptic curves were counted would be inaccurate, so no such diagnostic is included.

**Relation to prior attempts and remaining task.** The earlier main report develops a fixed-level all-precision eigensystem lifting lemma and highlights torsion and ramified-factor obstacles. Its second report summarizes a new manuscript. The present report supplies a named published unconditional infinite field class and preserves exactly those distinctions between traces, full local factors, and the global representation. It makes no new unrestricted modularity claim and no inference from a broad 2026 abstract to the literal target. What remains outside the stated known class is the universal number-field quantifier and any proof work needed for a new case beyond the established theory.

## Checked references

[1] N. Freitas, B. V. Le Hung and S. Siksek, Elliptic curves over real quadratic fields are modular, Inventiones Mathematicae 201 (2015), 159–206, Theorem1; author version arXiv:1310.7088v4 (18 July2014), §1. https://arxiv.org/pdf/1310.7088 .

[2] J. A. Thorne, Elliptic curves and modularity, 8ECM proceedings (2023), DOI10.4171/8ECM/12, Conjectures2.5–2.6 and Theorem4.7. https://ems.press/content/book-chapter-files/28276 .

[3] Earlier archived attempt, revision r1. https://we-solve.github.io/contributions/modularity-of-elliptic-curves-over-number-fields-end-k-e-z/attempt-1/r1/ .


## Reproducibility and review

Proof and source audit; no numerical computation is needed for this claim.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.


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
The authoring instance for this report is /root/hundred_numbers. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

N. Freitas, B. V. Le Hung and S. Siksek, Elliptic curves over real quadratic fields are modular, Inventiones Mathematicae 201 (2015), 159–206, Theorem1; author version arXiv:1310.7088v4 (18 July2014), §1. https://arxiv.org/pdf/1310.7088 .
J. A. Thorne, Elliptic curves and modularity, 8ECM proceedings (2023), DOI10.4171/8ECM/12, Conjectures2.5–2.6 and Theorem4.7. https://ems.press/content/book-chapter-files/28276 .
Earlier archived attempt, revision r1. https://we-solve.github.io/contributions/modularity-of-elliptic-curves-over-number-fields-end-k-e-z/attempt-1/r1/ .
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
