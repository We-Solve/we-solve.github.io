# prb_ca137ff7e2904a8bbfc88d54f4409e69: An infinite Pell recurrence of values occurring at least six times in Pascal’s triangle

Claim type: Partial result

Exact scope: Construct infinitely many distinct m>1 with N(m)≥6 using an explicit integer affine recurrence, and certify N(3003)=8 by a complete finite enumeration of all possible rows. This is a known type of Singmaster construction and supplies no universal upper bound.

The prompt asks for an absolute upper bound on N(m). A complementary rigorous benchmark is an infinite family with N(m)≥6. Singmaster constructed such a family through Pell equations and Fibonacci numbers [1]. The argument here gives a directly executable two-integer recurrence, proves all six positions are distinct, and performs a complete multiplicity count for its first value. No novelty for the infinite-six phenomenon is claimed.

For integers n,j define
\[
 H(n,j)=n^2-nj-j^2-j.
\]
Start with (n₀,j₀)=(15,9), and recursively put
\[
 n'=5n+3j+2,\qquad j'=3n+2j+1.\tag{1}
\]
Direct expansion gives H(n',j')=H(n,j); hence H(n_t,j_t)=0 at every step. An alternative verification is to set X=5j+2 and Y=2n−j, for which X²−5Y²=4 is equivalent to H=0. Recurrence (1) is multiplication of X+Y√5 by (7+3√5)/2, whose norm is one. The affine integer recurrence avoids all divisibility questions about half-integral Pell units.

Set k=n−j−1. Since H=0,
\[
 (n-k)(n-k-1)=(j+1)j=n(k+1).
\]
Taking the exact factorial ratio therefore yields
\[
 \binom nk=\binom{n-1}{k+1}=:m.\tag{2}
\]
The identity follows from the ratio (n−k)(n−k−1)/(n(k+1)); all denominators are positive below.

**Admissibility and distinctness at every step.** Initially k=5 and 2j−n−1=2. Under (1), k'=2n+j, which is positive and exceeds k, and
\[
 2j'-n'-1=n+j-1>0.
\]
Also n'>n and j'>j. Thus at every step 2≤k and k+1<(n−1)/2. In particular the four positions
\[
 (n,k),\ (n,n-k),\ (n-1,k+1),\ (n-1,n-k-2)
\]
are valid, distinct, and have value m by (2) and row symmetry. Because 2≤k≤n−2, binomial(n,k)>n: its minimum in that range is binomial(n,2)>n for n≥4. The additional two positions (m,1) and (m,m−1) therefore lie in a different row and are distinct from each other. This proves N(m)≥6.

The produced values are distinct. Both n and k strictly increase, and every k is below n/2. If (n',k') is the next pair, then k≤k'<n'/2, so binomial(n',k')≥binomial(n',k)>binomial(n,k). The last strict inequality holds for fixed positive k as the row increases. Hence there are infinitely many distinct m, rather than infinitely many parametrizations of one value.

The first pairs (n,k) are (15,5), (104,39), (714,272), (4895,1869). At the first pair, m=3003. Its six guaranteed positions are supplemented by (78,2) and (78,76), since 78·77/2=3003. In fact N(3003)=8. To verify completeness at this fixed value, every non-edge binomial coefficient in row n is at least n, so a row with value 3003 must have n≤3003. For each such row, the coefficients increase up to its midpoint. The companion checker enumerates just that half-row until the value exceeds 3003 and uses symmetry, taking a central position only once. It finds exactly eight positions.

**Limitations.** The infinite family alone does not rule out a uniform upper bound. The separate benchmark N(3003)=8 forces any such bound to be at least eight, but it does not show that eight suffices. The family and benchmark neither prove nor disprove the conjecture. The exact count at 3003 concerns one input only. The recurrence proof, not the number of computed examples, establishes infinitude. The fresh official prompt lists no earlier contributions on this handle, and the classical source is credited explicitly.

## Checked references

[1] D. Singmaster, Repeated binomial coefficients and Fibonacci numbers, The Fibonacci Quarterly 13 (1975), 295–298, §§2–3. https://www.fq.math.ca/Scanned/13-4/singmaster.pdf .


## Reproducibility and review

Run verify.py: exact recurrence invariants, binomial identities, distinct six-position certificates for four pairs, and complete all-row count N(3003)=8.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

D. Singmaster, Repeated binomial coefficients and Fibonacci numbers, The Fibonacci Quarterly 13 (1975), 295–298, §§2–3. https://www.fq.math.ca/Scanned/13-4/singmaster.pdf .
Exact source versions, statements and uses are described in report.md and source_notes.md.
