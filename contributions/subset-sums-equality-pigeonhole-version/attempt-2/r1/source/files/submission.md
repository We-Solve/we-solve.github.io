# prb_79c55c2c8e5540e3aa3557c44fa29c37: Subset-sums equality (pigeonhole version)

Claim type: **Partial result**.

Exact scope: A deterministic exact collision algorithm polynomial in dispersion W=sum_i(a_i-min a) and input size finds equal-cardinality witnesses whenever binomial(n,k)>kD+1 for some k, with D=max a-min a; the original pigeonhole promise is retained separately.

The input remains positive binary integers satisfying the prompt's promise S<2^n-1. The new sufficient structural condition is separate: with M=min a_i and D=max a_i-M, suppose binomial(n,k)>kD+1 for at least one k. In particular this holds for many polynomial-width lists in large n. This extra condition is not inferred from the original promise.

Set d_i=a_i-M and W=sum_i d_i. Every k-subset has deviation sum in {0,...,kD}; since there are binomial(n,k) k-subsets, the displayed strict inequality forces two distinct such subsets to have the same deviation sum and hence the same original sum. The common offset cancels because their cardinalities agree.

Here is a deterministic constructive algorithm that does not enumerate all subsets. Maintain one bit-mask witness for every attained pair (k,t), initially (0,0) with the empty mask. Before inserting item i, take the old table. Every old witness I proposes the new witness I union {i} at key (|I|+1,t+d_i). If the key already has an old witness J, output the pair; one witness contains i and the other does not. Two proposed new keys cannot collide with each other unless their old keys already coincide, because both cardinality and deviation are shifted by fixed amounts. If no collision occurs, retain all old and new entries.

Before the first collision the table contains every subset of the processed prefix with distinct keys. This follows by induction: no old/new equality is lost, and the within-class maps are injective. Therefore, if processing finished without collision, all final k-subsets would have different deviations, contrary to the sufficient inequality. The returned masks have equal size and deviation sum and are distinct. Remove their common indices. Both residual sets are nonempty, disjoint, and have equal original sums; in fact their residual cardinalities remain equal as well.

All keys lie in [0,n] times [0,W]. A dense implementation with snapshots uses O(n^2(W+1)) table visits, each manipulating O(n+log(W+1)) bits; plus polynomial input arithmetic. This is polynomial bit time whenever W is polynomial in input length, independent of the magnitude of M. The count binomial(n,k) and all sufficient-condition checks use O(n) bits. If the extra condition fails, this procedure may still find a collision, but no polynomial guarantee for every input under the original promise alone is claimed.

For n>=16 consider a_i=2^floor(n/2)+i-1. Write S_n=n*2^floor(n/2)+n(n-1)/2. The promised inequality holds at n=16 and n=17. For n>=4, direct subtraction gives 4S_n-S_(n+2)=(2n-4)2^floor(n/2)+(3n^2-7n-2)/2>0, so induction separately on even and odd n proves S_n<2^n-1 for all n>=16. Yet S is exponential, D=n-1 and W=n(n-1)/2. For the collision condition put k=floor(n/2), C_n=binomial(n,k), and Q_n=k(n-1)+1. The two base inequalities are C_16=12870>121=Q_16 and C_17=24310>129=Q_17. The ratio C_(n+2)/C_n=(n+2)(n+1)/((k+1)(n+1-k)) is at least three, whereas 3Q_n-Q_(n+2)=2k(n-2)-n+1>0 for n>=4. Another induction in steps of two proves C_n>Q_n for every n>=16. Thus the algorithm has polynomial cost and gives exact witnesses despite that exponential total. The two inequalities are only an explicit demonstration family, not needed for the general sufficient theorem.

The checker independently enumerates promised short lists and compares all key collisions with brute force, validates every returned witness in original integers, and checks the exponential-total demonstration family. Approximate sums and modular collisions are never accepted.

Comparison with the earlier attempt: The earlier attempt stores absolute sums through S and solves only bounded-total instances. This report cancels a huge common offset by keeping cardinality and deviation sum; the explicit family has exponential S and polynomial dispersion.

References checked:

- Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_79c55c2c8e5540e3aa3557c44fa29c37.txt
- Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/subset-sums-equality-pigeonhole-version/attempt-1/r1/


## Reproducibility and review

Written proof completed; standard-library independent finite checker and execution record supplied separately. These checks are finite and no formal verification or human mathematical review is asserted.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_79c55c2c8e5540e3aa3557c44fa29c37.txt
Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/subset-sums-equality-pigeonhole-version/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.
