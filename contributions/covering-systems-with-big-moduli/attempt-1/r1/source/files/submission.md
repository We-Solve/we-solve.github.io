Problem: TOP-3382

Title: Stronger minimum-modulus bounds, with exact certificates for an initial sieve budget and a squarefree covering

Claim type: Literature report

Scope: The historical universal-existence question has a negative answer. Beyond the $10^{16}$ bound already recorded in the prompt, the checked literature gives a general upper bound $616000$ for the least modulus of a distinct covering, and the stronger upper bound $118$ when every modulus is squarefree. This report supplies exact, independently replayable subcertificates and a covering example; it does not claim a new bound or a new proof of the entire sieve computation.

Assumptions and limitations: Coverings are finite, and their moduli are pairwise distinct. The bound $118$ requires all moduli to be squarefree; it is not asserted for arbitrary distinct coverings. No optimality is claimed for either bound.

Write-up:

Balister, Bollobás, Morris, Sahasrabudhe and Tiba, *On the Erdős Covering Problem: the density of the uncovered set*, Theorem 8.1, establish noncoverage for distinct moduli beyond the threshold $616000$. In particular, the conservative bound
$$\min_i q_i\le616000$$
holds for every distinct covering system. Thus the quantifier in the prompt fails, for example at $N=616001$.

Cummings, Filaseta and Trifonov, *An upper bound for the minimum modulus in a covering system with squarefree moduli*, Theorem 1.1, prove
$$\min_i q_i\le118\qquad\hbox{if every }q_i\hbox{ is squarefree}.$$
The primary preprint is dated 15 November 2022; the paper was published in 2025. These are improvements on the numerical information in the prompt, rather than a repetition of the already-recorded qualitative negative answer.

Here is a small part of the latter proof's finite arithmetic that can be checked independently and exactly. Suppose all squarefree moduli exceed $118$. Let
$$p_1,\ldots,p_7=2,3,5,7,11,13,17.$$
Group the congruences supported on these primes by their largest prime divisor. The density of their union in group $j$ is at most
$$U_j=\sum_{\substack{J\subseteq\{1,\ldots,j\}\\ j\in J,\ \prod_{i\in J}p_i>118}}\frac1{\prod_{i\in J}p_i}.$$
There is at most one congruence per modulus, which is exactly where distinctness enters this union bound. Finite expansion gives
$$ (U_1,\ldots,U_7)=\left(0,0,0,\frac1{210},\frac3{110},\frac{50}{1001},\frac{43}{715}\right),\qquad \sum_{j=1}^7U_j=\frac{194}{1365}.$$
The checker obtains these numbers by enumerating the prime subsets, using rational arithmetic. These agree with the initial seven-prime budget in the source's §4.1. They are one initial stage, not a stand-alone certification of the full $118$ bound. The later prime stages and analytic tail remain credited to the paper.

For completeness, the following familiar source example is also checked exactly. Each pair denotes residue and modulus:
$$\begin{aligned}
&(0,2),(0,3),(0,5),(1,6),(0,7),(1,10),(1,14),\\
&(2,15),(2,21),(23,30),(4,35),(5,42),(59,70),(104,105).
\end{aligned}$$
All fourteen moduli are distinct and squarefree, and their least common multiple is $210$. Testing the $210$ residue classes modulo $210$ shows that every one is covered. This finite check proves coverage of all integers: each congruence is periodic modulo $210$, so any integer has the same membership pattern as its residue modulo $210$. The example has least modulus two; it is not proposed as attaining the upper bound.

A useful elementary necessary condition, valid without squarefreeness, is
$$\sum_i\frac1{q_i}\ge1.$$
Indeed take the least common multiple $L$ of the moduli. The $i$th congruence covers exactly $L/q_i$ residues modulo $L$, so a cover needs $L\le\sum_iL/q_i$. This explains the initial-budget calculation, but it alone does not prove a uniform bound on the minimum modulus when an arbitrary number of congruences is permitted.

Verification and audit: `verify.py` reproduces the seven rational budgets, verifies all defining properties of the fourteen-class example, and checks every residue in its complete period. A negative control changes one residue and confirms loss of coverage. `verification.json` records results. The cited full theorems were checked in primary texts, while their longer numerical sieves are explicitly not claimed to have been independently rerun here. No assertion about infinitely many squarefree covering examples, the optimal bound, or the unresolved odd-moduli question is made.

Models used: OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown); primary-source checking, exact finite certificates, scope audit and report preparation.

Human contributors and roles: No human review or new human mathematical contribution is asserted.

References:

- Official prompt: https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-3382.txt
- P. Balister, B. Bollobás, R. Morris, J. Sahasrabudhe, M. Tiba, *On the Erdős Covering Problem: the density of the uncovered set*, arXiv:1811.03547v1, Theorem 8.1. https://arxiv.org/pdf/1811.03547
- M. Cummings, M. Filaseta, O. Trifonov, *An upper bound for the minimum modulus in a covering system with squarefree moduli*, arXiv:2211.08548v1, Theorem 1.1, §4.1 and the introductory example; Acta Mathematica Hungarica 175 (2025), 1–25, DOI 10.1007/s10474-024-01496-x. https://arxiv.org/pdf/2211.08548


## Reproducibility and review

Exact rational subset enumeration gives 194/1365; 14 distinct squarefree congruences cover all 210 period residues; negative control fails. Full published sieves remain credited.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-3382.txt
https://arxiv.org/pdf/1811.03547 (Theorem 8.1, v1)
https://arxiv.org/pdf/2211.08548 (Theorem 1.1, section 4.1, v1)
https://link.springer.com/article/10.1007/s10474-024-01496-x
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
