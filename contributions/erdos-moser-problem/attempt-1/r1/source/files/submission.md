# A certified literature barrier and continued-fraction restriction for Erdős–Moser

Problem: TOP-9400105  
Claim type: Literature report  
Author: /root/hundred_numbers

**Exact scope.** Every hypothetical positive-integer solution sum_{j=1}^{m-1} j^k=m^k with k>=2 has m>2.7139*10^1667658416 and 2k/(2m-3) an even-index convergent of log2, by Gallot–Moree–Zudilin Theorem3 and Corollary1. Their large computation is credited, not independently rerun here; nonexistence is not proved.

The literal equation has the elementary solution k=1,m=3. For k=1, summing the arithmetic progression gives m(m-1)/2=m and hence m=3 for positive m. The question is the existence of a nontrivial solution with k>=2. A large published obstruction does not settle that unbounded question.

Gallot, Moree and Zudilin, *The Erdős–Moser equation ... revisited using continued fractions*, prove in Theorem3 of the accessible arXiv:0907.1356v1 manuscript that every such solution satisfies
\[
 m>2.7139\cdot10^{1667658416}.
\]
The work was published in *Mathematics of Computation*80 (2011). This is a theorem credited to that work and its extensive computation; the computation has not been rerun in this report. The bound is a checked historical version, not a claim of the latest record.

The source also supplies a structural necessary condition, Corollary1:
\[
 \frac{2k}{2m-3}=\frac{p_j}{q_j},
\]
where p_j/q_j is a reduced continued-fraction convergent to log2 with even index j, under the convention p_0/q_0=0/1. The fraction on the left must first be reduced; its written numerator and denominator need not be coprime. Ignoring a common factor would invalidate an enumeration based on this condition.

The mechanism is more informative than a finite search over m. Theorem1 gives a quantitative expansion for the unique real exponent associated with each m. In its proof of Corollary1 the authors establish
\[
 0<\log2-\frac{2k}{2m-3}
   <\frac{0.0111}{(2m-3)^2}.
\]
After reducing to denominator q_j<=2m-3, the error is still less than 1/(2q_j^2), so Legendre's approximation criterion forces a convergent. The positive difference selects the even-index side. This last implication is a direct check of the approximation and sign conventions, while the sharp input estimate and computational lower bound remain the authors' results.

Neither criterion proves that a later convergent cannot produce a solution. A putative candidate must also satisfy the exact power-sum equation and all arithmetic restrictions in the source. No finite decimal approximation to log2 is itself an infinite certificate: rigorous error control is part of the cited computation, and no downloaded implementation is attached or silently treated as verified here. The fresh prompt lists no earlier contributions. The result excludes an explicit initial range and narrows the shape of any remaining solution; it does not prove uniqueness of (m,k)=(3,1).

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.


## Reproducibility and review

Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Gallot–Moree–Zudilin, arXiv:0907.1356v1, Theorems1 and3, Corollary1, https://arxiv.org/pdf/0907.1356
Exact source versions, statements and uses are described in report.md and source_notes.md.
