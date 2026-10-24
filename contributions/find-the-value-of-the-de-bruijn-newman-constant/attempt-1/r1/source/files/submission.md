# prb_3495f1331571420194c25e1a50e4aee3: The exact-value problem is equivalent to RH after Rodgers–Tao: a normalization audit

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

## References

B. Rodgers and T. Tao, The de Bruijn–Newman constant is non-negative, Forum of Mathematics, Pi 8 (2020), e6; arXiv:1801.05914v5, Introduction and Theorem 1. https://arxiv.org/html/1801.05914v5 ; publisher https://www.cambridge.org/core/journals/forum-of-mathematics-pi/article/de-bruijnnewman-constant-is-nonnegative/D4B85BA067E2D5A71D87E4FFB0D21E46 .
Exact source versions, statements and uses are described in report.md and source_notes.md.
