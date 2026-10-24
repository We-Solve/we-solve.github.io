# Optimal Algebraic Immunity of Boolean Functions

Claim type: **Partial result**.

Exact scope: For every n≥16 and 1≤m≤n, some Boolean map f:F₂ⁿ→F₂ᵐ has graph algebraic immunity at least floor(n/16)+1; this is nonconstructive and does not prove the optimum dimension bound.

## Random maps and a weight lemma

Work in the Boolean polynomial ring, with squarefree monomials. Graph immunity is the least degree of a nonzero polynomial P(x,y) that vanishes on every (x,f(x)). Put d=floor(n/16). A nonzero multilinear polynomial of degree at most d on N variables is nonzero on at least 2^{N−d} Boolean inputs. Proof by induction: write P=P₀+zP₁. If P₁=0, double the induction bound for P₀. If P₁≠0, on every input where P₁ is one the two choices of z give different outputs, hence at least one nonzero output. Apply induction to P₁, whose degree is at most d−1. If d>N the weaker stated bound remains true; we use only valid nonnegative-degree cases in the induction.

Choose independently a uniform m-bit f(x) for every x. Fix nonzero P of degree at most d and expand P=Σ_S q_S(x)y^S. Some q_S is nonzero of degree at most d, so at least 2^{n−d} sections P(x,·) are nonzero. Each such section, also of degree at most d, is nonzero on a fraction at least 2^{-d} of y (when d>m this lower bound is merely weaker). These events are independent across different x. Thus
Pr[P(x,f(x))=0 for all x] ≤ exp(−2^{n−2d}).

## Counting all candidate annihilators

There are 2^M polynomials of degree at most d in N=n+m≤2n variables, where M=Σ_{i=0}^d binom(N,i). For z=1/7 and i≤d, 7^i≤7^d, giving
M≤7^d(1+1/7)^N < 2^{3d+N/4} ≤ 2^{11n/16}.
Here 7<8 and (8/7)^4<2 justify the strict inequalities. Meanwhile 2^{n−2d}≥2^{14n/16}. The union bound over nonzero P is less than
exp(M ln 2−2^{n−2d})<1,
since ln 2<1 and M<2^{n−2d}. Some map therefore has no annihilator of degree at most d, which is the claimed immunity lower bound. This argument is uniform in every m from one through n and has no independence assumption on different output bits beyond the explicitly chosen random map.

The result gives a linear-in-n lower bound even for many outputs. It does not produce an efficiently evaluable map: a sampled truth table has m2^n bits, and exhaustive graph-rank certification is also exponential. The finite checker verifies the weight lemma in small complete polynomial spaces and exact GF₂ evaluation ranks for found small maps, not the existence assertion by testing n≥16. The dimension-counting upper bound and optimal scalar constructions in the earlier attempt are compatible with this weaker but multi-output-uniform lower bound.

## Earlier contributions and limits

The prior attempt proves the dimension upper bound and an optimal scalar-output construction, and explains why independent scalar blocks fail. The random-section union bound above adds a simultaneous all-1≤m≤n positive lower bound, without repeating that scalar construction.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30000784/verify.py). Source SHA-256: `5d2fc84ed14b4c2dd9e278a6845ee4485c3523d2613080415d70ab93bb081138`. The source is byte-identical to the reviewed and executed program.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30000784.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30000784/verify.py (Used: exact previously reviewed program; SHA-256 5d2fc84ed14b4c2dd9e278a6845ee4485c3523d2613080415d70ab93bb081138).
