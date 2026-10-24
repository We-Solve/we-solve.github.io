# Attributed submission: Attempt: TOP-30007145

Source: https://github.com/We-Solve/research/issues/429

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007145

### Claim

Partial result

### Exact scope

For M=R^a times a connected compact smooth manifold N without boundary, h_k(M)=h_k(R^a) for every integer k>=0. If Ric_N>=0, this proves the prompt comparison in total dimension n=a+dim N.

### Write-up

# Exact harmonic-growth dimensions on Euclidean times compact factors

Problem: TOP-30007145

Claim type: Partial result

Exact scope: For M=R^a times a connected compact smooth manifold N without boundary, h_k(M)=h_k(R^a) for every integer k>=0. If Ric_N>=0, this proves the prompt comparison in total dimension n=a+dim N.

Use the product metric and assume N is connected, compact and without boundary. First suppose a>=1. The compact Laplace spectral theorem supplies a complete orthonormal basis phi_j of smooth real eigenfunctions, with -Delta_N phi_j=lambda_j phi_j, lambda_j>=0. Its zero eigenspace consists exactly of constants, since integration of phi Delta phi gives -int|grad phi|^2.

Let u be harmonic on the product and satisfy |u(x,y)|<=C(1+d((0,y_0),(x,y)))^k. Compactness gives d<=|x|+diam(N), hence for each spectral coefficient
\[
 u_j(x)=\int_Nu(x,y)\phi_j(y)\,dy
\]
there is C_j with |u_j(x)|<=C_j(1+|x|)^k. Smooth differentiation under the compact integral and integration by parts show (Delta_(R^a)-lambda_j)u_j=0.

If lambda=lambda_j>0, multiply this equation by eta^2 u_j, with eta a smooth cutoff equal to one on B_R, zero outside B_(2R), and |grad eta|<=C/R. Integration by parts and 2AB<=A^2/2+2B^2 yield
\[
 \lambda\int_{B_R}u_j^2\le {C\over R^2}\int_{B_{2R}}u_j^2.
\]
Iterating this estimate m times, at radii R,2R,...,2^(m-1)R, gives int_(B_R)u_j^2<=C_(m,lambda) R^(-2m) int_(B_(2^m R))u_j^2. Polynomial growth bounds the last integral by C'_m R^(a+2k) for R>=1. Choose an integer m>(a+2k)/2 and let R tend to infinity. Since B_1 is included in B_R, its u_j squared integral is zero. Translation or the same argument for every fixed ball gives u_j identically zero. No exponentially growing compact mode can survive a polynomial growth bound.

Completeness of the eigenbasis now implies, for every fixed x, that u(x,.) is constant on N. Thus u=u_0(x), a Euclidean harmonic function of growth at most degree k. Euclidean interior derivative estimates (obtained by differentiating the Poisson formula on B_R) give |D^alpha u_0(x)|<=C_alpha R^(-|alpha|) sup_(B_R(x))|u_0|. When |alpha|>k, send R to infinity to conclude the derivative vanishes. Therefore u_0 is a harmonic polynomial of degree at most k. Conversely each such polynomial gives a harmonic function on the product with the required growth.

The real dimension is
\[
 h_k(\mathbb R^a)=\binom{a+k}{a}-\binom{a+k-2}{a},
\]
where the second term is zero for k<2. To justify the subtraction, the Laplacian from polynomials of degree <=k onto polynomials of degree <=k-2 is surjective. For a homogeneous q of degree l, Delta(|x|^2q)=(2a+4l)q+|x|^2 Delta q; successive corrections by |x|^(2j)Delta^(j-1)q terminate and solve Delta p=q, with positive nonzero scalar coefficients for a>=1. Rank-nullity gives the formula. For a=0 the product is compact and every harmonic function is constant, so h_k=1 instead.

If Ric_N>=0, the product is complete with nonnegative Ricci curvature. Extending an a-variable harmonic polynomial to R^n by ignoring the remaining coordinates is injective and preserves degree; consequently h_k(M)=h_k(R^a)<=h_k(R^n), exactly the literal comparison. This includes curved compact factors such as spheres and every integer k, not only bounded functions. General Ricci-nonnegative manifolds need not split this way; neither the product hypothesis nor the compact spectral theorem proves a bound for them.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

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
The authoring instance for this report is /root/hundred_geometry. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007145.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
