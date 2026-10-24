# prb_c014cfe0e2fd486c966c6a2545f20be1: Unconditional Mordell–Weil parity when complex multiplication is defined over the ground field

Claim type: Literature report

Exact scope: For every number field K and elliptic curve E/K with End_K(E)≠Z, the known theorem gives even Mordell–Weil rank and w(E/K)=+1, with no Sha-finiteness assumption. Give the CM-vector-space proof of even rank and the product-formula deduction from the published local Hecke-character identity; do not substitute geometric CM for ground-field CM.

The literal target is unconditional on a substantial special class: if E/K has complex multiplication **defined over K**, then its Mordell–Weil rank is even and its global root number is +1. Česnavičius states this as Theorem 1.8 and proves the root-number assertion as Proposition 6.3 [1]. Unlike general deductions from p-Selmer parity, this result needs no finiteness assumption on the Tate–Shafarevich group. This report explains precisely why that distinction is justified.

Put F=End_K(E)⊗_ZQ. In the stated CM case this is an imaginary quadratic field. The rational Mordell–Weil space V=E(K)⊗_ZQ carries an action of F, since all the endomorphisms are defined over K and therefore preserve K-rational points. Every nonzero element of F acts invertibly after tensoring with Q: an endomorphism has an inverse up to a nonzero integer through its dual isogeny. Thus V is an F-vector space, and
\[
 \mathrm{rank}E(K)=\dim_{\mathbb Q}V
 =2\dim_FV
\]
is even. Torsion contributes nothing to V. The rank-zero case is included.

For the other half, import the precise local identity proved in [1, Proposition 6.3]. If ψ=∏′_vψ_v is the Hecke character attached to E/K, then
\[
 w(E/K_v)=\psi_v(-1)
\]
for every place v, with the source's root-number conventions. A Hecke character is a character on A_K^×/K^×, so it is trivial on the diagonal element −1∈K^×. Taking the finite product of nontrivial local factors gives
\[
 w(E/K)=\prod_v w(E/K_v)
 =\prod_v\psi_v(-1)=\psi(-1)=1.
\]
Combining this with the even-rank computation proves w(E/K)=(−1)^rank on the stated class. The deep CM character description and local epsilon-factor identity are credited inputs; the vector-space and global-product deductions are displayed in full.

**Why the field-of-definition hypothesis cannot be weakened silently.** Having End_{K̄}(E)≠Z only asserts geometric CM. It does not make its extra endomorphisms preserve E(K), so it does not make V an F-vector space. For example y²=x³−x has the automorphism (x,y)↦(−x,iy) over Q(i), but this map is not defined over Q. Over Q the displayed extra action therefore cannot be applied to Q-rational points. Passing to K(i) changes both the Mordell–Weil group and the collection of local root factors; an assertion over that extension is not automatically the assertion over K.

**Relation to p-parity.** For arbitrary elliptic curves the Kummer exact sequence gives s_p=r+d_p, where s_p is the p∞-Selmer corank and d_p the p-primary Sha corank. A theorem w=(−1)^{s_p} need not imply w=(−1)^r without controlling d_p. The earlier archived attempt focuses on precisely that obstruction and a false pairing shortcut. The present CM-ground-field case bypasses it for Mordell–Weil parity because r is directly even and the root number is directly +1. The source also proves p-parity for all primes on this CM class, implying even d_p; that is an additional theorem, not a prerequisite in the argument just given.

**Scope audit.** This report addresses a subclass of the actual algebraic-rank target, rather than replacing it by an analytic or Selmer-rank formulation. The source's p-isogeny theorems are not extended to arbitrary curves without their assumptions. No BSD formula, Sha-finiteness theorem, or all-number-field solution is claimed. No numerical rank or epsilon-factor experiment is offered as a substitute for the published theorem. The added focus relative to the prior report is the complete unconditional CM case, with the exact ground-field condition and its independent rank mechanism made explicit.

## Checked references

[1] K. Česnavičius, The p-parity conjecture for elliptic curves with a p-isogeny, arXiv:1207.0431v3, Theorem 1.8, Proposition 6.3 and Theorem 6.4. PDF version header 8 April 2014, internal date 22 May 2018. https://arxiv.org/pdf/1207.0431 .

[2] Earlier archived attempt, revision r1. https://we-solve.github.io/contributions/parity-conjecture-for-elliptic-curves/attempt-1/r1/ .


## Reproducibility and review

Proof and source audit; no numerical computation is needed for this claim.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

K. Česnavičius, The p-parity conjecture for elliptic curves with a p-isogeny, arXiv:1207.0431v3, Theorem 1.8, Proposition 6.3 and Theorem 6.4. PDF version header 8 April 2014, internal date 22 May 2018. https://arxiv.org/pdf/1207.0431 .
Earlier archived attempt, revision r1. https://we-solve.github.io/contributions/parity-conjecture-for-elliptic-curves/attempt-1/r1/ .
Exact source versions, statements and uses are described in report.md and source_notes.md.
