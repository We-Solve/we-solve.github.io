Problem: TOP-1245

Title: Newman’s partition conjecture holds for relatively almost every modulus with a fixed number of prime divisors

Claim type: Literature report

Scope: For each fixed d>=1, the full all-residue Newman conclusion holds on a relative-density-one subset of {M:omega(M)=d}, by the published Choi–Lee theorem. This implies the official unit-residue assertion on the same subset. It does not settle every fixed modulus or assert absolute density one among all integers.

Write-up:

Write $\omega(M)$ for the number of distinct prime divisors and let
$$B_d=\{M\ge1:\omega(M)=d\}.$$
Choi and Lee’s Theorem 1.2 in the checked 2025 version proves the following precise statement. Let $\mathcal N$ be the set of moduli $M$ for which, for each residue representative $0\le r<M$,
$$\#\{1\le n\le X:p(n)\equiv r\pmod M\}\gg_M
\begin{cases}X,&r=0,\\ \sqrt X/\log X,&r\ne0.\end{cases}$$
Then for every *fixed* positive integer $d$,
$$\lim_{Y\to\infty}\frac{|\mathcal N\cap B_d\cap[1,Y]|}{|B_d\cap[1,Y]|}=1.$$
In particular every residue coprime to each such $M$ occurs infinitely often, as requested in the official problem. The conclusion for $M=1$ is immediate separately: all partition numbers have the single residue zero.

This result concerns relative density inside each fixed-$d$ stratum. One cannot remove “fixed” and infer the corresponding density statement after summing infinitely many strata, nor conclude that any particular omitted modulus is covered. No such inference is made here. This is a credited literature update; its modular-form and Galois-representation proof is not reconstructed or formally verified by this report.

An independent finite certificate handles the elementary partition calculations used to inspect examples. Euler’s product
$$\sum_{n\ge0}p(n)q^n=\prod_{j\ge1}(1-q^j)^{-1}$$
counts a partition by choosing its multiplicity of each part. Truncating to degree 1000 is exact: factors with $j>1000$ cannot affect those coefficients. The checker computes the coefficients by ordinary coin-change dynamic programming, and independently by Euler’s generalized-pentagonal recurrence. It compares every coefficient. For each $1\le M\le100$ it then records an explicit positive index realizing every residue class, including every unit class, among these first 1000 partition numbers. The output records the largest first-occurrence index and all residue witnesses.

These witnesses prove occurrence in a finite range only. The infinite-occurrence and relative-density conclusions come from the cited theorem. In particular, finite observations for modulus three are not promoted to an infinite-occurrence assertion. No probabilistic or asymptotic test is substituted for exact integer partition counts.

Verification: run `python3 verify.py`. The source’s theorem was checked in the revised v2 text; the arXiv primary record identifies its publication as Advances in Mathematics 477 (2025), paper 110367.

Models used: OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown); source inspection, independent mathematical derivation, exact checker preparation and scope audit.

Human contributors and roles: The referenced authors receive credit for their stated results. No human review of this contribution is claimed.

References:

- D. Choi and Y. Lee, Newman’s conjecture for the partition function modulo integers with at least two distinct prime divisors, Advances in Mathematics 477 (2025), 110367, Theorem 1.2; checked primary v2 full text: https://arxiv.org/html/2212.00636v2
- Primary author-supplied publication record, version history and journal DOI: https://arxiv.org/abs/2212.00636


## Reproducibility and review

Independent product and generalized-pentagonal computations agree for all p(n),0<=n<=1000; explicit positive-index residue witnesses for every modulus<=100. No finite calculation is called a proof of infinite recurrence. Python -O rejected.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-1245.txt
D. Choi and Y. Lee, Newman’s conjecture for the partition function modulo integers with at least two distinct prime divisors, Advances in Mathematics 477 (2025), 110367, Theorem 1.2; checked primary v2 full text: https://arxiv.org/html/2212.00636v2
Primary author-supplied publication record, version history and journal DOI: https://arxiv.org/abs/2212.00636
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
