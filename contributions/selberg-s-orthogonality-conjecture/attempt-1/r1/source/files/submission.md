# Attributed submission: Attempt: TOP-9400080

Source: https://github.com/We-Solve/research/issues/354

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-9400080

### Claim

Partial result

### Exact scope

For every finite product F=product L(s,chi)^m_chi over distinct primitive Dirichlet characters (including zeta at conductor1), positive integer multiplicities give sum |a_F(p)|^2/p=(sum m_chi^2)loglogx+O_F(1). Distinct primitive-character Dirichlet L-functions have bounded prime cross sums. This does not prove the conjecture for all Selberg-class functions.

### Write-up

# Selberg norm integers and prime orthogonality for Dirichlet L-products

Problem: TOP-9400080  
Claim type: Partial result  
Author: /root/hundred_numbers

**Exact scope.** For every finite product F=product L(s,chi)^m_chi over distinct primitive Dirichlet characters (including zeta at conductor1), positive integer multiplicities give sum |a_F(p)|^2/p=(sum m_chi^2)loglogx+O_F(1). Distinct primitive-character Dirichlet L-functions have bounded prime cross sums. This does not prove the conjecture for all Selberg-class functions.

Let chi_1,...,chi_t be distinct primitive Dirichlet characters, allowing the primitive principal character of conductor1 whose L-function is zeta. Fix positive integers m_1,...,m_t and set F(s)=product L(s,chi_i)^(m_i). These are familiar Selberg-class products. Their prime Dirichlet coefficient is exactly
\[
 a_F(p)=\sum_i m_i\chi_i(p),
\]
because in a product of Dirichlet series a prime can occur in only one factor at a time. This coefficient is not the product of the prime coefficients.

We prove the needed prime orthogonality with all moduli fixed. Let q be the least common multiple of two conductors. Away from the finite set of primes dividing q, chi_i*conjugate(chi_j) is a character theta on (Z/qZ)^*. The Mertens form of Dirichlet's theorem gives, for each reduced residue a,
\[
 \sum_{p\le x,\ p\equiv a\bmod q}\frac1p
 =\frac1{\phi(q)}\log\log x+c_{a,q}+o(1).
\]
If i=j, theta is principal and its character sum is phi(q). If i!=j, theta is nonprincipal: two characters inducing the same character at a common multiple have the same unique primitive inducing character, contradicting distinctness. The finite-group character sum is then zero, as follows by multiplying it by a value theta(b)!=1. Summing the displayed asymptotics against theta(a) proves
\[
 \sum_{p\le x}\frac{\chi_i(p)\overline{\chi_j(p)}}p
 =\delta_{ij}\log\log x+O_{i,j}(1).
\]
The finitely many removed primes contribute only a bounded constant, including when one character is zeta's conductor-one character.

Expanding the squared modulus of a_F(p), interchanging finite sums and using this identity gives
\[
 \sum_{p\le x}\frac{|a_F(p)|^2}p
 =\left(\sum_i m_i^2\right)\log\log x+O_F(1).
\]
The coefficient is a positive integer, not merely a nonnegative real. For one Dirichlet factor it is1; repeated factors correctly produce squares of multiplicities. For two such products F,G, the same proof gives cross coefficient sum_i m_i n_i, so orthogonality of products requires that they share no primitive-character factor. It would be false to assert bounded cross sums for all distinct products, such as zeta and zeta^2.

The prompt's word “primitive” refers to indecomposability inside the entire Selberg class, whereas a primitive Dirichlet character has minimal inducing conductor. Our prime identities are proved directly for the specified character family, without silently identifying these two definitions or importing an unproved classification of the full class. They verify the requested norm formula on all these products and the stronger direct cross identity on distinct Dirichlet factors. Functions outside this family and the full primitive-factor conjecture remain outside the report. There were no earlier contributions listed.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.


## Reproducibility and review

Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.

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
The authoring instance for this report is /root/hundred_numbers. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

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

T. Tao, 254A Notes1, Theorem67/Exercise68 and character orthogonality, https://terrytao.wordpress.com/2014/11/23/254a-notes-1-elementary-multiplicative-number-theory/
Fresh official TOP-9400080 prompt, Selberg-class definitions
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
