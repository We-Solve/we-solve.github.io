# Depth-five homogeneous lower bounds for iterated matrix multiplication

Claim type: **Partial result**.

Exact scope: A monotone homogeneous depth-three ΣΠΣ circuit for IMM_{n,n}, whose product gates multiply n homogeneous linear forms with nonnegative real coefficients, requires at least n^{n−1} product gates for n≥2.

## Positivity forces singleton path supports

Write variables as x^{(ℓ)}_{ij}, one matrix layer ℓ=1,…,n. IMM's monomials are the n^{n−1} distinct paths
x^{(1)}_{1,i₁} x^{(2)}_{i₁,i₂} … x^{(n)}_{i_{n−1},1},
each with positive coefficient one. Consider any nonzero product gate L₁⋯L_n contributing positively to a top sum with nonnegative coefficients. Every choice of one variable from each L_r appears with a positive coefficient, so every such choice must be one of these path monomials; cancellation is unavailable.

Fix a choice in all factors except one L_r. Changing its selected variable cannot change the required multidegree (one variable in each matrix layer), so all variables supported in L_r have the same layer. The n factors must use distinct layers. Reorder factors by layer. At the common index between layers ℓ and ℓ+1, every independently chosen variable from the first factor must have its column equal to the row of every choice from the next. Nonempty supports therefore force one fixed common index there. Layer one's row is fixed to 1, layer n's column to 1, and every internal index is fixed by the preceding condition. In each layer there is consequently just one possible matrix variable. The product gate is a scalar multiple of one path monomial.

All n^{n−1} path monomials must occur in the output, so at least that many nonzero product gates are necessary, even if linear forms and wires are shared freely. This is exponential in n. At n=1 the polynomial is one variable; the separately stated range n≥2 avoids interpreting the endpoint as a depth lower bound.

## Model boundary

The proof permits arbitrary nonnegative real coefficients, not only coefficient one. It uses both positivity and the shallow product-of-linear-forms architecture. Negative or complex coefficients can cancel forbidden monomials; additional multiplication layers can share long path segments. Therefore this theorem is not a depth-five lower bound over C, even though a restricted depth-three circuit can be padded to depth five. Nor does it impose a bit-cost model on the coefficients: the quantity bounded is product-gate count.

## Earlier contributions and limits

The previous page describes a much stronger homogeneous depth-five claim over C. Here positivity is an explicit extra hypothesis, and the complete support argument is different independently proved content. No inference from this monotone subclass to unrestricted complex circuits is made.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Browse the reproduction repository at the pinned commit](https://github.com/gavenren/we-solve-reproducibility/tree/e266bc69d2766f929f65b5787a6ed808760456c0). Program file: `verify.py`. File SHA-256: `a2dd14117bdbbf07c7d600ef8536d54ab2b6cbef8cd83111fcd3b57f1b38c08d`. The source is byte-identical to the reviewed and executed program.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_f85391275cb44cf5a0c5f70df5487723.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Reproduction repository at the pinned commit: https://github.com/gavenren/we-solve-reproducibility/tree/e266bc69d2766f929f65b5787a6ed808760456c0; program file: `verify.py` (Used: exact previously reviewed program; SHA-256 a2dd14117bdbbf07c7d600ef8536d54ab2b6cbef8cd83111fcd3b57f1b38c08d).
