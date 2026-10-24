# Attributed submission: Attempt: TOP-7200059

Source: https://github.com/We-Solve/research/issues/346

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-7200059

### Claim

Literature report

### Exact scope

The literal homogeneous direction-polynomial matrix is invertible for every four-point configuration in R^3 by Eastwood–Norbury, and for every number of distinct collinear points by the reproduced basis proof.

### Write-up

# Four-point invertibility and a full homogeneous collinear proof

Problem: TOP-7200059

Claim type: Literature report

Exact scope: The literal homogeneous direction-polynomial matrix is invertible for every four-point configuration in R^3 by Eastwood–Norbury, and for every number of distinct collinear points by the reproduced basis proof.

Eastwood--Norbury, A proof of Atiyah's conjecture on configurations of four points in Euclidean three-space, Geometry&Topology5(2001),885--893, Theorem1, proves nonvanishing for every four distinct points, including coplanar or collinear degeneracies. The full primary nine-page paper was inspected, in particular its normalization discussion and Theorem1. The main four-point determinant identity and inequality proof are credited literature, not independently rederived here.

Its normalization does not change the prompt's invertibility question. A homogeneous degree(n-1) polynomial is an element of Sym^(n-1)(C^2). Changing nonzero lifts or choosing different nonzero linear forms with the same projective zero multiplies each factor by a nonzero scalar, hence multiplies a column by their nonzero product. Changing homogeneous variables by any invertible2-by2 complex matrix induces an invertible linear map on this polynomial space: substitution by its inverse is the inverse operation. Therefore matrix nonvanishing is invariant under these choices. The Hopf-normalized products in Eastwood--Norbury have the same directed projective roots, up to this invertible identification of a two-vector with a vanishing linear form. Their positive distance normalization factors do not vanish because points are distinct. Thus Theorem1 supplies exactly the literal n=4 conclusion, not a determinant in an unrelated convention.

For completeness, all collinear orders have an elementary homogeneous proof handling infinity. Order distinct points x_1,...,x_n along their line. The directions between them are exactly two antipodal sphere points, hence two distinct projective points. Let L_+,L_- be their nonzero vanishing linear forms. They are linearly independent, since their zero sets are distinct. The polynomial at x_i is a nonzero multiple of
\[
 L_-^{i-1}L_+^{n-i}.
\]
After the invertible variable change (U,V) to (L_+,L_-), these are precisely the n different monomials of degree n-1. They form a basis: coefficient comparison in U^(n-1-j)V^j shows every linear relation has all coefficients zero. Inverting the substitution proves independence in the original coordinates. This covers all n>=2, with arbitrary spacings and arbitrary stereographic pole; no affine coordinate for a root at infinity is required.

The two verified scopes are every n=4 geometry and every collinear n. Neither numerical determinants near a degenerate configuration nor the collinear basis proof settles general noncollinear n>=5. Historical novelty is not claimed: the literature result is attributed and the elementary class is reproduced as a transparent boundary case.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-7200059.txt
https://arxiv.org/pdf/math/0109161 — Eastwood and Norbury, published2001 version, Theorem1 and Section1 normalization.
https://arxiv.org/pdf/hep-th/0105179v2 — Atiyah and Sutcliffe, Conjecture1 and explicit collinear discussion; v2 October15,2001.
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
