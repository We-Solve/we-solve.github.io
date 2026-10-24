# Saturation with factor one for Spin(4), with the parity obstruction explicit

Claim type: Partial result

Exact scope: The literal saturation implication holds for Spin(4) (n=2), for every dominant integral weight triple whose sum is in the root lattice.

Over C the simply connected group of type D_2 is SL_2×SL_2. A dominant weight is a pair (a,b) of nonnegative integers in fundamental-weight coordinates, and its irreducible representation is Sym^a(C²)⊗Sym^b(C²). The root lattice is 2Z×2Z. Thus the prompt’s root-lattice condition says that the sum of the three first coordinates is even and the sum of the three second coordinates is even.

We recall the exact SL_2 tensor formula and its elementary verification. If V_a=Sym^a(C²), then
\[
 V_a\otimes V_b=\bigoplus_{j=0}^{\min(a,b)}V_{a+b-2j}.\tag{1}
\]
On diag(z,z^{-1}), its character is χ_a(z)=z^a+z^{a−2}+…+z^{−a}. Multiplying these two finite Laurent sums and counting pairs of exponents gives exactly sum_j χ_{a+b−2j}; for each power the coefficient increases up to min(a,b)+1 and then decreases symmetrically on both sides. Equivalently multiply by z−z^{-1} and the telescoping identity (z−z^{-1})χ_a=z^{a+1}−z^{-a−1} gives the same equality directly. Finite-dimensional complex SL_2 modules are completely reducible, and their irreducible characters have distinct largest powers, so the character identity proves (1).

The modules V_c are self-dual. Thus the invariant space in V_a⊗V_b⊗V_c has dimension one exactly when
\[
 |a-b|\le c\le a+b,\qquad a+b+c\text{ even},\tag{2}
\]
and dimension zero otherwise. These are precisely the conditions c=a+b−2j for an integer j in the range in (1).

For a triple of Spin(4) weights, its invariant space is the tensor product of the two corresponding SL_2 invariant spaces, because the two group factors act independently. It is nonzero if and only if (2) holds separately in both coordinates. Suppose some dilation by N≥1 has an invariant. Its triangle inequalities, divided by N, give the original triangle inequalities in both coordinates. The original even-sum conditions follow from the imposed root-lattice condition, not from division of parity by N. Therefore (2) holds at scale one in each coordinate, proving the desired implication. Conversely scaling preserves both the inequalities and the already even sums, so an invariant at scale one gives one at every positive scale.

The root-lattice assumption cannot be dropped. In one SL_2 factor take a=b=c=1 and zero coordinates in the other factor. At scale one the sum is odd and there is no invariant; at scale two there is one by (2). The example is outside the prompt’s hypothesis and illustrates exactly why it is needed.

This is an infinite weight-family theorem at the lowest permitted even-spin rank. It does not use a proposed general type-D saturation theorem. For n≥3 the root system no longer splits into two rank-one systems, and the coordinatewise triangle argument is not a proof there.

Relation to earlier contributions. The sole listed prior contribution reports an unverified all-rank OpenAI saturation claim. The present result gives a complete explicit rank-two calculation, including both the root-lattice parity condition and an exact example showing why it cannot be omitted.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_536e2b9aa81f4aafa7099054a6025de0.txt


## Reproducibility and review

Source-only: literal prompt, prior full texts and stated references checked; written deduction audited by author, without formal or human verification.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_536e2b9aa81f4aafa7099054a6025de0.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
