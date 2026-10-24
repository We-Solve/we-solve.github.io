# Explicit approximate-group bounds in dense elementary abelian two-groups

Claim type: Partial result

Exact scope: If A is a K-approximate group in F_2^n and |A|≥2^n/K, then one may take rank 0, step 0, normal-form constant 1, and D(K)=m(K)=2^ceil(2K^2); an explicit subgroup H⊂4A supplies both formulations.

The additional density hypothesis is part of this partial result. It is not implied by small doubling in an arbitrarily chosen ambient group. Put N=2^n, α=|A|/N and f=1_A. Use normalized Fourier coefficients
\[
 \widehat f(\gamma)=N^{-1}\sum_x f(x)(-1)^{\gamma\cdot x},
\]
and normalized convolution (f*g)(x)=N^{-1}sum_y f(y)g(x−y). Orthogonality of the characters, obtained by pairing x with x+e_i when γ_i=1, gives Parseval sum_γ hat f(γ)^2=α, the convolution product rule, and Fourier inversion. All quantities here are real.

Define the large spectrum Γ by |hat f(γ)|≥α^{3/2}/sqrt(2), and let H be its common annihilator. Parseval bounds
\[
 |\Gamma|\le 2\alpha^{-2},\qquad
 \operatorname{codim}H\le\lfloor2\alpha^{-2}\rfloor.
\]
For x∈H all characters indexed by Γ equal one. As the zero frequency belongs to Γ and has coefficient α, Fourier inversion gives
\[
 f^{*4}(x)\ge\alpha^4-\sum_{\gamma\notin\Gamma}\widehat f(\gamma)^4
 \ge\alpha^4-\tfrac12\alpha^3\sum_\gamma\widehat f(\gamma)^2
 =\tfrac12\alpha^4>0.
\]
Thus H⊂A+A+A+A, literally the fourfold product set. Also
\[
 |H|\ge 2^{-\lceil2K^2\rceil}N
 \ge 2^{-\lceil2K^2\rceil}|A|,
\]
because α≥1/K. This proves an explicit size bound with no hidden constant and with no dependence on n.

Regard H as a coset nilprogression by taking G_0=H, finite normal subgroup H itself, and trivial quotient. Its quotient progression has no generators, rank zero and step zero; every normal-form condition in the prompt holds with C=1, including both cardinality bounds, since the empty product is one. If a convention insists on positive step, step bound one is equally valid. The full ambient group has at most 2^{ceil(2K²)} cosets of H, so this many cover A. The quotient G_0/H is trivial, and 4A contains H and therefore any generating set for G_0. Both requested structural formats are satisfied for this named regime.

All steps are constructive from the order table of F_2^n and the characteristic function of A: compute the N Fourier sums, select Γ by squaring the displayed inequality, and solve the homogeneous binary linear equations. Direct evaluation uses O(N²(n+1)) arithmetic and bit-vector steps, each with polynomial(n+1) bit cost for the character sums, integer threshold comparisons and binary linear algebra. For example a conservative schoolbook bound is O(N²(n+1)^3) bit operations. No polynomial bound in log N is claimed. The output subgroup can itself have N elements. The theorem’s size and covering constants concern structure, not a compressed polynomial-time algorithm.

The same argument actually needs only the density condition, not the approximate-group covering assumption. Retaining that assumption identifies precisely the subclass of the literal problem being answered. Sparse sets in huge elementary abelian ambient groups and all nonabelian groups are outside the claim.

Relation to earlier contributions. The fresh prompt lists no earlier contribution. This is a fully explicit Fourier proof in a dense finite-exponent subclass, not a claim that the ineffective constants in the arbitrary-group theorem have been made effective.

Verification. An attached exact standard-library program is described below; its saved execution record gives the actual range. Its finite checks do not establish infinite quantifiers.

References checked.

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_6929d593ccfe408d83a23f36a5d12c73.txt


## Reproducibility and review

Exact standard-library program passed 147 specified cases, using independent ordered-pair convolution for the literal fourfold count and exact Fourier identities. Optimized Python -O was run and rejected; stdout, stderr and hashes retained.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify_fourier_subgroups.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_6929d593ccfe408d83a23f36a5d12c73.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
