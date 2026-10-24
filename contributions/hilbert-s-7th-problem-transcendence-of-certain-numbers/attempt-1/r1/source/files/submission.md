# TOP-85: Every logarithm branch in Hilbert’s seventh problem, and an infinite explicit real family

Claim type: Literature report

Exact scope: Apply the established Gelfond–Schneider theorem to every complex logarithm in the literal prompt; derive transcendence of every value of i^i and every real exp((2m+1)πr) for nonzero rational r, with no assertion of algebraic independence.

The historical question has an affirmative answer by the Gelfond–Schneider theorem. In the precise form needed here: if α is algebraic, α≠0,1, β is algebraic and irrational, and L is any fixed complex logarithm of α, then exp(βL) is transcendental. Karatarakis and Wiedijk state this theorem and explicitly allow any fixed logarithm in the start of their proof, Theorem 3.1 and §3.1 [1]. Their 2026 manuscript reports a Lean formalization; I checked the mathematical statement, not an execution of that formal development.

**Application to the literal quantifiers.** Suppose α,β belong to Q̄\Q. Irrationality of α excludes 0 and 1, so every base hypothesis of the quoted theorem is met. Given any L with exp(L)=α, apply the theorem to that particular L. Since L was arbitrary, all values are covered. No choice of a principal logarithm is needed, and one need not prove a uniform estimate in the branch integer. This deduction uses the classical theorem as an input, so it is a literature report rather than a new elementary proof of it.

**A branch-resolved infinite family.** Taking the algebraic base −1, the algebraic irrational exponent −ir with r∈Q\{0}, and the logarithm L=(2m+1)πi gives
\[
 \exp(\beta L)=\exp((2m+1)\pi r),\qquad m\in\mathbb Z.
\]
Every one of these real positive numbers is transcendental. This example uses the theorem's broader algebraic-base hypothesis: −1 is rational, so the family is a corollary of the cited theorem rather than an instance of the prompt's narrower irrational-base premise. The distinction is explicit. The exponent −ir is not rational because it is nonzero and purely imaginary. Negative r and negative 2m+1 cause no difficulty: the resulting reciprocal of a transcendental nonzero number cannot be algebraic.

For an example with an irrational complex base, set α=i and β=i. Every logarithm of i is i(π/2+2πm), and hence the complete value set is
\[
 \{\exp(-\pi/2-2\pi m):m\in\mathbb Z\}.
\]
Each value is transcendental directly by the same theorem. They are distinct because the real exponential function is strictly increasing and the exponents differ for different m. Thus the statement is genuinely branchwise, not just a claim about the principal value e^{-π/2}. Both i and i are algebraic and outside Q, so this example meets the literal premise.

**Sharp boundaries of the deduction.** An irrational exponent without algebraicity is insufficient even for an irrational algebraic base. Take α=√2, γ=3 and β=2 log(3)/log(2). Then (√2)^β=3 is algebraic, while β is irrational: if β=p/q with integers q>0, then 2^p=3^{2q}, contradicting unique factorization (and p>0 follows from β>0). The theorem consequently also shows that this particular β is transcendental. Rational exponents are also excluded for a reason: each fixed value of α^{u/v} is algebraic, because its v-th power equals the algebraic number α^u. Finally the theorem gives no algebraic independence between two of the transcendental values just listed. Transcendence of each term and independence of several terms are different assertions.

**Verification and limitations.** The published classical theorem settles the literal question; the branch calculations above are elementary deductions with all exclusions checked. No numerical decimal approximation can certify the transcendence assertions and none is offered as evidence. No Lean build, version pin verification, or independent reconstruction of the entire Gelfond–Schneider proof is claimed.

## Checked references

[1] M. Karatarakis and F. Wiedijk, A formalization of the Gelfond–Schneider theorem, arXiv:2603.24823v1 (25 March 2026), Theorem 3.1 and §3.1. https://arxiv.org/html/2603.24823v1 .


## Reproducibility and review

Proof and source audit; no numerical computation is needed for this claim.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

M. Karatarakis and F. Wiedijk, A formalization of the Gelfond–Schneider theorem, arXiv:2603.24823v1 (25 March 2026), Theorem 3.1 and §3.1. https://arxiv.org/html/2603.24823v1 .
Exact source versions, statements and uses are described in report.md and source_notes.md.
