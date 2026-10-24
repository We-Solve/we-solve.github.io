# prb_f2a9702b938d485e97088e8393f89768: The published Fibonacci perfect-power classification, with every admissible exponent resolved

Claim type: Literature report

Exact scope: Bugeaud–Mignotte–Siksek Theorem 1 gives the complete answer to the literal prompt; under a,b≥2 the only triples (n,a,b) are (6,2,3) and (12,12,2). The included bounded check is independent finite arithmetic, not a rerun of the published global proof.

The literal statement is already a theorem. Bugeaud, Mignotte and Siksek, Theorem 1, classify the perfect-power Fibonacci values as 0, 1, 8 and 144 [1]. Their indexing agrees with this prompt: F₀=0, F₁=F₂=1. The published theorem, rather than a finite numerical search, supplies completeness over all indices. This is a literature report and an exact translation of that theorem into the prompt's quantifiers; no new proof of their global classification is claimed.

**Exact answer under the recorded convention.** With integers a,b≥2,
\[
 F_n=a^b\quad\Longleftrightarrow\quad
 (n,a,b)=(6,2,3)\ \text{or}\ (12,12,2).
\]
Here is the small extra argument needed to obtain the bases and exponents rather than just the values. The theorem excludes every value except 8 and 144, because 0 and 1 cannot equal a^b with a,b≥2. The factorization 8=2³ forces b to divide 3, hence b=3 and a=2. For 144=2⁴3², b divides gcd(4,2)=2, hence b=2 and a=12. Direct recurrence gives F₆=8 and F₁₂=144. The sequence is strictly increasing from index 2 onward, so these values have no further indices. Thus both implications and all boundary cases have been accounted for.

It is useful to separate three different counts. There are exactly two nontrivial positive perfect-power **values**, exactly two **indices** under the prompt convention, and exactly two **triples** (n,a,b). If base 1 is permitted, infinitely many representations 1=1^b do not produce infinitely many Fibonacci values or indices. With base 0 also permitted, the exceptional indices are 0,1,2,6,12; the value 1 occurs twice. This resolves the apparent difference between the title's infinitude question and the displayed classification.

**What a bounded computation can certify.** The companion checker generates F₀ through F₅₀₀ exactly and tests each nontrivial value against all prime exponents up to its bit length. It computes integer roots by binary search and verifies equality by exponentiation. The restriction to prime exponents is complete at each fixed input: if z=a^b with b≥2, any prime q dividing b gives z=(a^{b/q})^q. Conversely a prime-exponent representation is already a perfect power. The upper bound q<bit_length(z) follows from 2^q≤z. No floating-point root estimate or prime-factorization oracle is involved.

This check detects precisely (index,prime exponent,base)=(6,3,2),(12,2,12) in its finite range. It also tests 0 and 1 separately and records that their exclusion is a convention, not a failure of root finding. It does not check the modular, logarithmic or large computational components of the published theorem. In particular the cutoff 500 is not used as a global exclusion threshold.

**Scope audit.** The full answer is credited to [1], published in Annals of Mathematics in 2006. The present extra content is the exact triple classification and an independent finite certificate package with a mathematically complete perfect-power test at each tested input. There is no remaining mathematical gap in the literal prompt once the published theorem is used; the unverified task here is independent reproduction of that theorem's entire proof, which is not asserted.

## Checked references

[1] Y. Bugeaud, M. Mignotte and S. Siksek, Classical and modular approaches to exponential Diophantine equations I. Fibonacci and Lucas perfect powers, Annals of Mathematics 163 (2006), 969–1018, Theorem 1. https://annals.math.princeton.edu/2006/163-3/p05 ; author preprint https://arxiv.org/pdf/math/0403046 .


## Reproducibility and review

Run verify.py: exact Fibonacci values through n=500, complete integer-root perfect-power detection at each input, and boundary-convention checks; results in verification.json.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

Y. Bugeaud, M. Mignotte and S. Siksek, Classical and modular approaches to exponential Diophantine equations I. Fibonacci and Lucas perfect powers, Annals of Mathematics 163 (2006), 969–1018, Theorem 1. https://annals.math.princeton.edu/2006/163-3/p05 ; author preprint https://arxiv.org/pdf/math/0403046 .
Exact source versions, statements and uses are described in report.md and source_notes.md.
