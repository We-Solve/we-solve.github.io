# The reported Seifert homology-sphere WRT expansion and an explicit infinite input family

Problem: prb_bf7c899a6cf44d3cae14f56b05b21743

Claim type: Literature report

Exact scope: A precise report of Andersen–Han–Li–Mistegård–Sauzin–Sun, arXiv:2510.10678v1, Theorem 1.1, for its Seifert integral homology-sphere family. The theorem-to-Puiseux implication and all-order remainder are explained, and the inputs with exceptional multiplicities (2,3,6n+1), n>=1, are verified explicitly. This is a credited preprint theorem, not an independently reproduced proof.

## Source status and exact family

The inspected source is the 12 October 2025 v1 preprint [1]. Its arXiv record, checked 18 October 2026, lists that version and no journal reference. We report its theorem with that status, without claiming independent validation of its resurgence or moduli-space arguments.

Take r>=3, positive pairwise coprime exceptional multiplicities p_j>=2, integers q_j coprime to p_j, and P=product p_j satisfying

\[
P\sum_{j=1}^r q_j/p_j=1.
\]

Use the source's oriented Seifert manifold X={0;(p_1/q_1),...,(p_r/q_r)}. Its Theorem 1.1 gives an exact decomposition into a Borel sum B of a formal power series W_0 and finitely many nonzero flat-connection phases:

\[
\mathrm{WRT}_k(X)=B(k^{-1})+
\sum_{S\in\mathrm{CS}(X)\setminus\{0\}}
e^{2\pi ikS}k^{3/2}E(k^{-1})H_S(k).
\]

Here E is holomorphic near zero, each H_S is a polynomial, and B has W_0 as its Poincare expansion along positive arguments with the stated Gevrey control. Importantly, the surviving S are actual SU(2) Chern–Simons values, not merely arbitrary rational phases. The normalization is WRT_k(S^3)=1 and the level is k-2, exactly as in the prompt.

## Why this yields the requested full Puiseux expansion

This implication is elementary once the exact decomposition and its analytic hypotheses are granted. Write H_S(k)=sum_{j=0}^{d_S} h_{S,j}k^j and E(tau)=sum_{a>=0}e_a tau^a near tau=0. Define

\[
W_S(\tau)=\sum_{j=0}^{d_S}\sum_{a\geq0}
h_{S,j}e_a\tau^{a-j-3/2}.
\]

Every exponent is a half-integer and is at least -d_S-3/2. There are finitely many negative exponents. Thus W_S lies in C((tau^{1/2})), a permitted Puiseux Laurent field.

For a desired error O(k^{-R}), approximate E through degree N with N+1>R+d_S+3/2. Taylor's theorem gives a remainder O(k^{-N-1}); multiplication by k^{3/2}H_S(k)=O(k^{d_S+3/2}) makes the resulting error O(k^{-R}). The exponential phase has modulus one. There are finitely many S, so summing preserves the bound. The assumed Poincare property of B gives the same arbitrary-order truncation for the zero phase. This proves the precise expansion format in the prompt conditional only on the inspected preprint theorem, rather than confusing a leading term with a full expansion.

## A fully specified infinite family of inputs

For every n>=1 set

\[
(p_1,p_2,p_3)=(2,3,6n+1),\qquad(q_1,q_2,q_3)=(1,-1,-n).
\]

The p_j are pairwise coprime. Also gcd(n,6n+1)=1, so every (p_j,q_j) is coprime. A direct calculation gives

\[
3(6n+1)-2(6n+1)-6n=1.
\]

Thus the normalization equation is satisfied for all n, not just sampled triples. In the standard abelianized Seifert presentation, the relation matrix has diagonal entries p_j, a final column q_j, and final relation sum x_j=0. Its determinant has absolute value |P sum q_j/p_j|=1; consequently H_1(X;Z)=0. Closed orientability and three-dimensional duality give the integral homology-sphere property. The n=1 input is the multiplicity-(2,3,7) sphere in the indicated orientation.

The exact companion checker verifies the integer relation matrices for n=1..100. These checks certify sample hypotheses, not the analytic theorem. The earlier contribution develops only abstract product stability and the sphere normalization. This report adds a concrete infinite geometric input family and a careful theorem-to-all-orders translation. General closed three-manifolds, and conjectures prescribing leading coefficients, remain outside the claim.

## Checked references

1. J. E. Andersen, L. Han, Y. Li, W. E. Mistegård, D. Sauzin and S. Sun, A proof of Witten’s asymptotic expansion conjecture for WRT invariants of Seifert fibered homology spheres, arXiv:2510.10678v1 (12 October 2025), Theorem 1.1, equations (1.5)–(1.10), Section 5. https://arxiv.org/html/2510.10678v1 ; version/status record https://arxiv.org/abs/2510.10678


## Reproducibility and review

Exact all-n Seifert parameter and determinant proof plus Fraction/integer matrix checks for n=1..100. The external v1 preprint theorem is precisely reported, not independently formalized or computationally verified.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

J. E. Andersen, L. Han, Y. Li, W. E. Mistegård, D. Sauzin and S. Sun, A proof of Witten’s asymptotic expansion conjecture for WRT invariants of Seifert fibered homology spheres, arXiv:2510.10678v1 (12 October 2025), Theorem 1.1, equations (1.5)–(1.10), Section 5. https://arxiv.org/html/2510.10678v1 ; version/status record https://arxiv.org/abs/2510.10678
Exact source versions, statements and uses are described in report.md and source_notes.md.
