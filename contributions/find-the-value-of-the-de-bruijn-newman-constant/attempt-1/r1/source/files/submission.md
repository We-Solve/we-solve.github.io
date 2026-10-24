# Attributed submission: Attempt: TOP-9400062

Source: https://github.com/We-Solve/research/issues/190

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-9400062

### Claim

Literature report

### Exact scope

For exactly the prompt’s Φ,H_t normalization, import the published Λ≥0 theorem, verify H_0(z)=ξ(1/2+iz/2)/8, and deduce RH iff Λ=0. Prove how Gaussian kernel and spatial rescalings change Λ; no exact value or new RH proof is asserted.

### Write-up

# TOP-9400062: The exact-value problem is equivalent to RH after Rodgers–Tao: a normalization audit

Claim type: Literature report

Exact scope: For exactly the prompt’s Φ,H_t normalization, import the published Λ≥0 theorem, verify H_0(z)=ξ(1/2+iz/2)/8, and deduce RH iff Λ=0. Prove how Gaussian kernel and spatial rescalings change Λ; no exact value or new RH proof is asserted.

Rodgers and Tao prove Λ≥0 for the same function Φ and deformation H_t used in the prompt [1, Theorem 1]. This is a lower bound, not an evaluation of Λ. The theorem is published in Forum of Mathematics, Pi; the checked author version is arXiv:1801.05914v5. The contribution here is a precise reduction of the requested exact value and a check that changes of convention do not accidentally turn that bound into a claimed solution.

Write
\[
 \xi(s)=\tfrac12s(s-1)\pi^{-s/2}\Gamma(s/2)\zeta(s).
\]
The primary source's normalization gives
\[
 H_0(z)=\frac18\xi\!\left(\frac12+\frac{iz}{2}\right).
\]
Consequently the nontrivial zero ρ=β+iγ of ζ corresponds to the zero z=2γ+i(1−2β) of H₀: solve ρ=1/2+iz/2 explicitly. Its imaginary part vanishes exactly when β=1/2. The entire ξ function has precisely the nontrivial zeta zeros, including multiplicities. Multiplication by the nonzero constant 1/8 does not change a zero set. Thus all H₀ zeros are real if and only if RH holds.

The defining threshold property is an equivalence, including its endpoint:
\[
 H_t\text{ has only real zeros}\quad\Longleftrightarrow\quad t\ge\Lambda.
\]
At t=0 this says RH iff Λ≤0. Combining it with the established Λ≥0 gives
\[
 \boxed{\mathrm{RH}\quad\Longleftrightarrow\quad\Lambda=0.}
\]
Conversely Λ>0 would imply failure of RH. These are exact logical deductions, not a proof of either alternative. In particular a numerical upper bound Λ≤ε with ε>0 does not decide equality to zero; letting a computed error bar look small is not a substitute for an arbitrary-ε argument.

**Two convention changes.** These elementary identities make the normalization check reusable. First replace the kernel by Φ_c(u)=e^{cu²}Φ(u). Its deformed transform is H^c_t(z)=H_{t+c}(z). Therefore its threshold is Λ_c=Λ−c. Nonnegativity in the original convention does not become nonnegativity under an arbitrary Gaussian prefactor. Second, for positive a define K_s(w)=H_{a²s}(aw). Real multiplication of the spatial variable preserves reality of zeros, so its threshold is Λ/a². These statements follow directly from the defining equivalence and require no assumptions about simplicity of zeros or RH. A nonzero constant multiple of the kernel leaves Λ unchanged.

For completeness the heat-flow sign is also fixed by the chosen integral. Differentiating under the integral gives ∂_tH_t=−∂²_zH_t, because both sides insert the factor u². The superexponential decay of Φ dominates e^{tu²+|Im(z)|u} times every polynomial on compact sets of t,z, justifying differentiation. Reversing the sign in the Gaussian e^{tu²} would therefore reverse the direction of the time parameter and change how the threshold is stated.

**Scope audit.** The imported difficult theorem is Λ≥0. The displayed H₀–ξ relation is checked against that same primary normalization. The algebraic zero-coordinate calculation, threshold deductions, and rescaling formulas are supplied in full. Neither the full Rodgers–Tao proof nor numerical zero certification is rerun. The literal exact-value request remains unresolved by this report; its value is to identify exactly what an evaluation of zero would entail and to prevent a normalization error from being mistaken for progress on it.

## Checked references

[1] B. Rodgers and T. Tao, The de Bruijn–Newman constant is non-negative, Forum of Mathematics, Pi 8 (2020), e6; arXiv:1801.05914v5, Introduction and Theorem 1. https://arxiv.org/html/1801.05914v5 ; publisher https://www.cambridge.org/core/journals/forum-of-mathematics-pi/article/de-bruijnnewman-constant-is-nonnegative/D4B85BA067E2D5A71D87E4FFB0D21E46 .


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

B. Rodgers and T. Tao, The de Bruijn–Newman constant is non-negative, Forum of Mathematics, Pi 8 (2020), e6; arXiv:1801.05914v5, Introduction and Theorem 1. https://arxiv.org/html/1801.05914v5 ; publisher https://www.cambridge.org/core/journals/forum-of-mathematics-pi/article/de-bruijnnewman-constant-is-nonnegative/D4B85BA067E2D5A71D87E4FFB0D21E46 .
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
