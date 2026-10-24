# Exact cubic dynamic programming for convex-position Euclidean matching

**Problem:** prb_019440a8351847439bd8358e120a3cbd

**Claim type:** Partial result

**Exact scope:** Proves a deterministic O(N^3)-time, O(N^2)-space exact real-arithmetic algorithm for N even points in strictly convex position, and adjacent-pair optimality for collinear inputs. General planar exact complexity and bipartite matching are not settled.

We use N for the even number of input points, to distinguish it from the prompt's $2n$. Suppose first that all N points are vertices of a strictly convex polygon, in known cyclic order. A minimum Euclidean perfect matching has no properly crossing edges. If $ab$ and $cd$ cross at x, the triangle inequality gives $|ac|+|bd|<|ab|+|cd|$: expand the two right-hand edges through x, and use strict triangle inequalities on $a,x,c$ and $b,x,d$. Strictness holds because the four distinct convex-position points have no three collinear. Replacing the two edges by $ac,bd$ is still a perfect matching and reduces cost. This contradicts optimality.

Write the vertices $p_0,\ldots,p_{N-1}$ counterclockwise. Let $F(i,j)$ be the minimum cost of a noncrossing perfect matching on the consecutive vertices $p_i,\ldots,p_j$, for even-length intervals. Set the cost of an empty interval to zero. In a noncrossing matching, if $p_i$ is paired with $p_k$, no edge joins the two sides of chord $p_ip_k$, because its endpoints would alternate with i,k on the convex boundary and therefore cross that chord. Both remaining intervals must have even cardinality, so $k-i$ is odd. Conversely, two noncrossing matchings on these intervals, plus the chord, fit together without crossings. Hence
\[
 F(i,j)=\min_{\substack{i<k\le j\\k-i\text{ odd}}}
 \left(|p_i-p_k|+F(i+1,k-1)+F(k+1,j)\right).
\]
Induction on interval length proves the recurrence is exact. Fill even-length intervals in increasing order and retain a minimizing k for reconstruction. There are $O(N^2)$ entries and $O(N)$ choices per entry. All edge lengths can be prepared with $O(N^2)$ square roots; the DP needs $O(N^3)$ additions and exact comparisons and $O(N^2)$ storage. If cyclic order is not supplied, compute the planar convex hull and check every point is a strict hull vertex in $O(N\log N)$ time, dominated by the DP bound.

This is an exact algorithm in the real-arithmetic model of the prompt. For general rational coordinates the comparisons are comparisons of sums of square roots; we do not assign them unit bit cost or claim an ordinary polynomial bit-time bound from the recurrence alone. The code's test family avoids this issue completely: use rational points on a circle obtained by squaring rationally parametrized unit complex numbers. Every chord length is then rational by the explicit identity $|z^2-w^2|=2|\mathrm{Im}(z\overline w)|$. Exact Fraction DP costs can be compared against exhaustive enumeration of all perfect matchings.

For the separate collinear subclass, sort the scalar positions $x_1<\cdots<x_N$. The optimal pairs are $(x_1,x_2),(x_3,x_4),\ldots$. Each gap $x_{r+1}-x_r$ contributes its length times the number of matching edges crossing that cut. For odd r this number must be odd and at least one, since the r points to its left cannot pair entirely among themselves. Thus every matching has cost at least the sum of odd-indexed gaps, and adjacent pairing attains it. Sorting gives $O(N\log N)$ time and exact rational bit comparisons when coordinates are rational.

**Verification and limits.** For N=2,4,6,8,10,12 on the rational-chord circle, the checker compares the DP optimum with every perfect matching, including crossing ones; N=12 has 10395 matchings. It also tests all eight-point subsets of a small integer collinear grid. These are exact finite certificates, while the uncrossing and recurrence proofs establish the infinite subclasses. The convexity assumption is essential for reducing a chord to two consecutive intervals. No improvement to the best general-plane algorithm is claimed, and no red–blue restriction is imposed or smuggled into this matching problem.


## Reproducibility and review

Exact Fraction DP versus all perfect matchings for six even sizes through12, and exact adjacent-pair comparison for collinear samples.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_019440a8351847439bd8358e120a3cbd.txt
https://topp.openproblem.net/p6
Exact source versions, statements and uses are described in report.md and source_notes.md.
