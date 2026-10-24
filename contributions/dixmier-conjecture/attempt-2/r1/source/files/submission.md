# Attributed submission: Attempt: TOP-30006868

Source: https://github.com/We-Solve/research/issues/414

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006868

### Claim

Partial result

### Exact scope

Every characteristic-zero endomorphism of A_1 with either generator image of Bernstein total degree at most two is an automorphism; quadratic images with nondegenerate leading quadratic form cannot occur.

### Write-up

# The first Weyl algebra conjecture when one image has degree at most two

Claim type: Partial result

Exact scope: Every characteristic-zero endomorphism of A_1 with either generator image of Bernstein total degree at most two is an automorphism; quadratic images with nondegenerate leading quadratic form cannot occur.

Write D=∂ and use the normal basis x^i D^j, with Dx−xD=1. Its independence follows by acting on polynomials and taking iterated commutators with x to isolate the highest D-order. Bernstein degree assigns degree one to x and D. Suppose [Q,P]=1 and deg(P)≤2. Scalar P is impossible.

We first work over an algebraic closure of the coefficient field. Linear determinant-one substitutions of x,D preserve their commutator and give automorphisms. Translations also do. For degree one P, choose an affine-linear R with [R,P]=1. The centralizer of P is K[P]: after such a linear change it is the centralizer of x, and [sum f_j(x)D^j,x]=sum j f_j(x)D^{j−1}. Thus Q=R+h(P), giving explicit generation and an inverse triangular change.

For a quadratic P let p_2(X,Y) be its leading binary quadratic form. Using symmetrized products (xD+Dx)/2 only changes the constant coefficient. If p_2 has rank two, it factors into two independent linear forms over the algebraic closure. A symplectic change of variables therefore makes its quadratic part αxD for α≠0, up to a scalar constant. Write the remaining linear part as bx+cD. Translations of x,D remove both linear coefficients, leaving
\[
 P=\alpha xD+d.
\]
On the normal basis one has
\[
 [xD,x^iD^j]=(i-j)x^iD^j.
\]
Hence the coefficient of the scalar monomial in [Q,P] is always zero. It cannot equal 1. This rules out every nondegenerate quadratic leading form, independently of the degree of Q.

If p_2 has rank one, a symplectic linear change makes it ax², a≠0. Thus P=ax²+bx+cD+d. If c≠0, put R=−x/c. Then [R,P]=1, and
\[
 x=-cR,\qquad D=(P-ax^2-bx-d)/c.
\]
So P,R are polynomial Weyl coordinates. Their centralizer calculation again gives Q=R+h(P), and P,Q generate the algebra.

If c=0, P is a genuine quadratic polynomial f(x). Write Q=sum_{j=0}^m a_j(x)D^j. The leading D-order term of [Q,f] is m a_m f' D^{m−1}; it is nonzero when m≥1. Thus the equation [Q,f]=1 forces m=1 and a_1 f'=1. A nonconstant f' cannot be a unit in the polynomial ring, a contradiction. This completes the classification of quadratic possibilities. Interchanging x,D with the required sign treats the alternative where Q has small degree.

The conclusion descends to any characteristic-zero field K. In the scalar extension the images P,Q generate x,D, so the K-linear cokernel of the endomorphism tensors to zero under a field extension, and is itself zero. Injectivity follows directly from simplicity: in a nonzero two-sided ideal choose an element of least D-order, commute with x to get a polynomial, then commute with D to get a nonzero scalar. A unital endomorphism has proper kernel, hence zero kernel. Surjectivity and injectivity over K therefore give the desired automorphism.

No degree bound on the other image was imposed. The unresolved case has both images of degree at least three; a leading-symbol Poisson relation alone does not settle it. The external unrestricted proof claim cited by the original prompt is not used.

Relation to earlier contributions. The earlier attempt completely treats polynomial-coordinate and affine-linear images, simplicity and leading-symbol pitfalls. Those elementary tools are recapitulated only to support the added classification of every quadratic leading form: the rank-two obstruction and rank-one normal form extend the advertised degree range from one to two.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006868.txt


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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006868.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
