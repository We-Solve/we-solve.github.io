# Exact maximum tours for arbitrary collinear point sets

Problem: TOP-5500049

Claim type: Partial result

Exact scope: For any N distinct collinear Euclidean points, construct a maximum-length Hamiltonian cycle in polynomial bit time on rational input; OPT=2(sum of largest floor(N/2) coordinates minus sum of smallest floor(N/2) coordinates) times the line scale.

Use a real coordinate x along the line, so Euclidean distance is a fixed positive factor a times |x-y|. Sort x_1<...<x_N and put k=floor(N/2). For each gap g_r=x_(r+1)-x_r, a tour edge contributes g_r precisely when it crosses the cut {1,...,r}. A Hamiltonian cycle crosses this cut at most 2min(r,N-r): every crossing uses one of the two incident half-edges at a vertex of the smaller side. Therefore
\[
 L/a\le\sum_{r=1}^{N-1}2\min(r,N-r)g_r
 =2\left(\sum_{j=N-k+1}^N x_j-\sum_{j=1}^k x_j\right). \tag{1}
\]
The last equality follows by collecting the coefficient of each x_j; its coefficient is -2 below the median, +2 above it, and zero at the median when N is odd.

If N=2k, list the lower k points and upper k points in any alternating cyclic order. Each lower point is a local minimum along the cycle and each upper point a local maximum. Summing the two incident edge lengths gives exactly twice the upper-coordinate sum minus twice the lower-coordinate sum. Thus it attains (1), without needing a special permutation within either half.

If N=2k+1, remove the median x_(k+1), construct the preceding even alternating tour, and insert the median into any edge from the lower to upper half. Since x_low<x_median<x_high, the replacement has length (x_median-x_low)+(x_high-x_median)=x_high-x_low. The length is unchanged and attains (1). N=3 is included. For N=2 use the usual cyclic-tour convention of traversing the sole pair twice; if the formulation only allows simple graph cycles, restrict to N>=3. N=1 has length zero by the trivial-tour convention.

For rational planar input known to be collinear, choose one distinct pair p_0,p_1 and put v=p_1-p_0. Write p_i=p_0+t_i v, where t_i is recovered from either nonzero coordinate of v by one rational division; verify the other coordinate if recognition is desired. Then a=||v|| and all comparisons use rational t_i. The common square root factor is never used to compare candidate tours. Sorting and listing use O(N log N) real comparisons and O(N) further arithmetic; exact rational computation takes polynomial bit time in the complete input and output lengths. The optimum can be output symbolically as a rational multiple of sqrt(v dot v).

The result handles arbitrary uneven gaps and both parities, rather than equally spaced points only. Collinearity is an extra hypothesis. It neither proves a polynomial-time algorithm for general planar maximum TSP nor changes the unsquared Euclidean length objective to squared distance.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Executed check_exact.py with assertions enabled: PASS 32 uneven integer collinear inputs n3..9; 55100 Hamiltonian cycles exhaustively compared. python -O was separately executed and refused. These are finite exact checks only.


## Reproducibility and review

Executed check_exact.py with assertions enabled: PASS 32 uneven integer collinear inputs n3..9; 55100 Hamiltonian cycles exhaustively compared. python -O was separately executed and refused. These are finite exact checks only.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: check_exact.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-5500049.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
