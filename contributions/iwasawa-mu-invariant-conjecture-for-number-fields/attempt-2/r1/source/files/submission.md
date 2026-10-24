# TOP-9400180: The abelian-number-field case and a precise growth interpretation of μ=0

Claim type: Literature report

Exact scope: For every finite abelian extension F/Q and every prime p, Ferrero–Washington gives μ(F,p)=0 for the cyclotomic Z_p tower. Deduce the exact eventual class-group order ratio p^λ and polynomial growth in the layer degree; explain why this is not bounded class number or a theorem for arbitrary F.

The prompt is proved on the entire infinite class of abelian number fields: if F/Q is finite abelian and p is any prime, then the Iwasawa μ-invariant of the cyclotomic Z_p-extension of F is zero. This is the Ferrero–Washington theorem [1], not a new result. “Abelian” is a hypothesis on F over Q; it does not merely mean that the tower over F has abelian Galois group, since every Z_p-extension has that latter property.

Use exactly the notation of the prompt, with A_n the p-primary ideal class group in the degree p^n layer F_n. The theorem and the Iwasawa growth formula give integers λ≥0 and ν such that, for all sufficiently large n,
\[
 |A_n|=p^{\lambda n+\nu}.\tag{1}
\]
Consequently
\[
 \frac{|A_{n+1}|}{|A_n|}=p^\lambda\tag{2}
\]
for every n after a stabilization threshold. This is an exact eventual ratio, not an asymptotic equivalence with an unspecified multiplicative error. With D_n=[F_n:F]=p^n, formula (1) becomes
\[
 |A_n|=p^\nu D_n^\lambda.
\]
Thus the p-part of the class number grows polynomially in the layer degree on this class of fields. In the general formula a positive μ would instead contribute p^{μD_n}, which is exponential in that degree. This reformulation follows algebraically from the published vanishing theorem and does not require computing any class group.

The theorem includes cyclotomic fields, their real subfields, and every quadratic field, real or imaginary, because all these are abelian over Q. The prime p is independent of the conductor or discriminant of the abelian field; no unramified-at-p hypothesis is appended. The theorem concerns the cyclotomic Z_p-extension. Replacing it by an arbitrary Z_p-extension is a different statement and is not justified by this report.

**What the conclusion does not remove.** The coefficient λ need not be zero. Equation (2) with λ>0 allows unbounded class-group orders even though μ=0. A finite initial computation showing equal orders at several layers also does not prove (1) has stabilized: the theorem supplies eventual structure, not an input-independent threshold. Nor does vanishing identify the group structure of A_n. The groups Z/p^{λn+ν} and products of several cyclic p-groups can have the same order; the order formula alone does not distinguish them.

There is also no elementary passage from an arbitrary number field to this abelian theorem by putting it inside a cyclotomic field. Every subfield of an abelian Galois extension of Q is itself Galois abelian over Q: if G is abelian, every subgroup is normal and every quotient is abelian. A nonabelian extension cannot be embedded as such a subfield. Likewise “adjoin enough roots of unity” does not generally make a given extension abelian over Q. These group-theoretic observations identify why the known infinite class does not cover the universal quantifier in the prompt.

**Provenance and prior work.** The primary 1979 Annals publication establishes the imported theorem. The earlier archived attempt already mentioned Ferrero–Washington and developed general module tests, coinvariant models, tower shifts and descent. This report is deliberately classified as a literature report, with the published abelian theorem as its central certified scope; it does not claim the deduction is new. Its added presentation spells out the exact ratio and growth as a function of field degree while preserving both the base-field and tower hypotheses. The full analytic proof of Ferrero–Washington is not independently rerun. The remaining mathematical task in the literal prompt is to treat nonabelian number fields in full generality; nothing here excludes their possible μ-terms.

## Checked references

[1] B. Ferrero and L. C. Washington, The Iwasawa invariant μ_p vanishes for abelian number fields, Annals of Mathematics 109 (1979), 377–395. Primary publisher record: https://annals.math.princeton.edu/1979/190-2/p05 .

[2] A. Chakravarthy, The Iwasawa mu-invariants of elliptic curves over Q, arXiv:2408.07826v2, Introduction, classical class-group conjecture and Ferrero–Washington statement. https://arxiv.org/html/2408.07826v2 .

[3] Earlier archived attempt, revision r1. https://we-solve.github.io/contributions/iwasawa-mu-invariant-conjecture-for-number-fields/attempt-1/r1/ .


## Reproducibility and review

Proof and source audit; no numerical computation is needed for this claim.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

B. Ferrero and L. C. Washington, The Iwasawa invariant μ_p vanishes for abelian number fields, Annals of Mathematics 109 (1979), 377–395. Primary publisher record: https://annals.math.princeton.edu/1979/190-2/p05 .
A. Chakravarthy, The Iwasawa mu-invariants of elliptic curves over Q, arXiv:2408.07826v2, Introduction, classical class-group conjecture and Ferrero–Washington statement. https://arxiv.org/html/2408.07826v2 .
Earlier archived attempt, revision r1. https://we-solve.github.io/contributions/iwasawa-mu-invariant-conjecture-for-number-fields/attempt-1/r1/ .
Exact source versions, statements and uses are described in report.md and source_notes.md.
