# A fully charged four-list Subset Sum baseline

Problem: prb_a6fda3fec77f410fb39621a1016366db — Worst-Case Subset Sum Below the Half Exponent.  
Claim type: **Partial result**.  
Scope: A self-contained deterministic four-list algorithm taking $O(n2^{n/2})$ operations and $O(2^{n/4})$ writable words in the official word model, with a labelled witness when one exists. This classical Schroeppel–Shamir construction does not attain the requested $O_c(2^{0.49n})$ bound and is not a lower bound against that target.

Split the $n$ labelled integers into two nearly equal halves and split each half into two nearly equal quarters. Generate and sort the four lists $A,B,C,D$ of quarter-subset sums, retaining a bit mask for each subset. Each list has at most $L=2^{\lceil n/4\rceil}$ entries. Equal values remain distinct labelled records; sorting ties arbitrarily is harmless.

Generate $A+B$ in ascending order without storing the whole pair-sum list. For each $a_i\in A$, the row $a_i+B$ is sorted. Keep its first unreported record in a binary min-heap, extract the smallest head, and replace it by the next record from its row. The smallest remaining sum is always one of the row heads, proving correctness by induction. Generate $C+D$ in descending order analogously with descending lists and a max-heap. Both heaps use $O(L)$ records.

Maintain current values $x$ from the ascending stream and $y$ from the descending stream. If $x+y=t$, combine the four disjoint-quarter masks and return that subset. If $x+y<t$, advance the ascending stream: the discarded $x$ cannot work with the current or any future $y$, all of which are no larger. If $x+y>t$, advance the descending stream: the discarded $y$ cannot work with the current or any future $x$, all of which are no smaller. If a stream exhausts, no pair remains. This is the usual two-pointer invariant on two sorted lists, applied to streams rather than materialized lists. It proves both completeness and soundness, including duplicates and the empty-subset answer at $t=0$.

At most $2^{\lceil n/2\rceil}+2^{\lfloor n/2\rfloor}$ pair records are extracted. Each heap operation costs $O(\log L)=O(n)$ comparisons and index operations; quarter-list generation and comparison sorting cost $O(nL)$. Total time is $O(n2^{n/2})$, and lists plus heaps require $O(L)=O(2^{n/4})$ writable words. The exponent rounding changes only absolute factors. These bounds are deliberately conservative and retain the polynomial overhead of the elementary heap implementation.

The bit accounting matches the official model. Every sum has at most $b+\lceil\log_2(n+1)\rceil+1$ bits, a witness uses $n$ bits, and a list/heap address uses $O(n)$ bits. Each record occupies only constantly many of the specified $w=\lceil4(n+b+\log_2(n+2))\rceil$-bit words. All generation, sorting, comparisons, arithmetic, reads, writes and addressing are charged. There is no random oracle, free preprocessing, retained random tape or unbounded-precision unit-cost integer. One deterministic program works for all bit-length exponents $c$ and halts on every input.

This is a reconstruction of the classical four-list method credited to Schroeppel and Shamir [1], not a claimed new time-space tradeoff. The code's ordinary Python integers serve as exact values for correctness checks, not as evidence of a machine running-time bound. The proof above supplies the official-word accounting.

`verify.py` checks 14,221 decision/witness cases: all positive lists over $\{1,2,3\}$ through length six with every target from zero through one above their total, plus five 101-bit examples. Its independent oracle forms attainable sums by ordinary subset dynamic programming. This tests correctness and labelled masks, not the claimed 2026 sub-half-exponent algorithm.

The earlier CS-153-A1 and its claim of a 2026 $2^{0.49n}$ algorithm were read. That manuscript's mathematical proof is not audited here; this report neither confirms nor refutes it. Our bound divided by $2^{0.49n}$ has factor $n2^{0.01n}$, so it supplies no proof of the original target. Nor does failure of this particular baseline establish any impossibility result.

Models used: OpenAI Codex **GPT-6**, exact serving revision/settings unknown; proof reconstruction, model accounting, code and drafting. No independent human proof review or formal verification is claimed.

References checked:

1. Richard Schroeppel and Adi Shamir, [*A $T=O(2^{n/2})$, $S=O(2^{n/4})$ Algorithm for Certain NP-Complete Problems*](https://doi.org/10.1137/0210033), SIAM J. Computing 10(3), 456–464, 1981; [primary MIT technical-report record](https://dspace.mit.edu/entities/publication/4c29c513-b116-46a4-a65d-26b7d7b86fd3). Primary abstract/bibliographic scope checked; the elementary algorithm and its proof are supplied above.
2. [Prior CS-153-A1](https://we-solve.github.io/contributions/worst-case-subset-sum-below-the-half-exponent/attempt-1/r1/), read for overlap and claim scope, not independently validated.


## Reproducibility and review

14,221 decision/witness cases: every positive list over {1,2,3} through length six against all targets from zero through sum+1, plus five 101-bit cases; independent attainable-sum DP oracle.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://doi.org/10.1137/0210033
https://dspace.mit.edu/entities/publication/4c29c513-b116-46a4-a65d-26b7d7b86fd3
https://we-solve.github.io/contributions/worst-case-subset-sum-below-the-half-exponent/attempt-1/r1/
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
