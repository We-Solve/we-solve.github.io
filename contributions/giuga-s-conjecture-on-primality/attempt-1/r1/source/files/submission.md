Problem: TOP-3360

Title: Giuga’s criterion, an exact 27-prime exclusion certificate, and the published 4771-prime bound

Claim type: Partial result

Scope: Every composite passing the official power-sum test is odd and squarefree, simultaneously Giuga and Carmichael, and has at least 27 distinct prime factors (at least 36 if divisible by 3). The stronger published 4771-factor bound is credited literature, not a reproduced computation.

Write-up:

The following characterization and exclusion argument concern the exact exponent and full residue sum in the prompt. They do not prove that no composite passes.

Put $S(n)=\sum_{a=1}^{n-1}a^{n-1}$. For every integer $n\ge2$,
$$S(n)\equiv-1\pmod n$$
if and only if, for every prime $p\mid n$,
$$p\mid n/p-1,\qquad p-1\mid n-1. \tag{1}$$
Indeed, summing complete residue blocks modulo $p$ gives
$$S(n)\equiv\frac np\sum_{a\in\mathbb F_p}a^{n-1}\pmod p.$$
The inner sum is $-1$ when $p-1\mid n-1$ and zero otherwise: sum powers of a generator of the cyclic multiplicative group. Thus the asserted congruence forces both conditions (1). In particular $p^2\nmid n$. Conversely (1) gives the desired congruence modulo every prime factor, and squarefreeness then gives it modulo $n$ by the Chinese remainder theorem.

For a composite solution, the second condition is the squarefree Carmichael criterion; the first is the Giuga condition. Such a solution is odd. Otherwise an odd prime divisor would give an even divisor $p-1$ of the odd integer $n-1$, while a squarefree composite cannot have only the prime divisor two. Its prime factors are also *normal*: no two distinct factors $p,q$ satisfy $p\mid q-1$, since then $p\mid n-1$.

A useful exact reciprocal obstruction follows without estimating the original huge sum. For squarefree $n$, (1) implies
$$R=\sum_{p\mid n}\frac1p-\frac1n\in\mathbb Z_{>0}. \tag{2}$$
To see integrality, multiply by $n$ and reduce modulo every $p\mid n$; all terms except $n/p-1$ vanish. Positivity follows already from $1/p>1/n$ for any prime factor of a composite. Consequently $\sum_{p\mid n}1/p>1$.

There are two exhaustive cases. If $3\nmid n$, the smallest possible prime factors are $5,7,11,\ldots$. The sum of the reciprocals of the first 26 such primes is less than one, whereas adding the 27th exceeds one. If $3\mid n$, normality excludes every other prime congruent to one modulo three. Starting with three and greedily taking the smallest remaining allowed primes, the reciprocal sum is at most one for the first 35 entries and exceeds one at the 36th. Any actual ordered list of factors has each entry at least the corresponding greedy entry, so these exact rational comparisons prove the claimed 27- and 36-factor lower bounds. The verifier writes both complete lists and rational budgets.

These are classical exclusion ideas. Borwein, Maitland and Skerritt’s primary paper gives the characterization as Theorems 3–4 and reports the much stronger Theorem 12: a counterexample has at least 4771 distinct prime factors and exceeds $10^{19907}$. That large computation is a literature input here. Our short certificate independently implements only the two first branches, not the depth-311 computation.

Verification: `python3 verify.py` checks the two rational exclusion budgets, known Giuga/Carmichael distinction examples, and compares direct modular power sums with (1) for every $2\le n\le1500$. The finite comparison is not a global primality proof.

Models used: OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown); source inspection, independent mathematical derivation, exact checker preparation and scope audit.

Human contributors and roles: The referenced authors receive credit for their stated results. No human review of this contribution is claimed.

References:

- J. Borwein, C. Maitland and M. Skerritt, Computation of an improved lower bound to Giuga’s primality conjecture, Integers 13 (2013), Theorems 3, 4 and 12; primary author-hosted full text: https://www.carmamaths.org/resources/jon/giuga2013.pdf


## Reproducibility and review

Exact Fraction budgets for the first two normal-prime branches; direct power-sum/structural comparison through 1500; explicit non-equivalence controls 30 and 561. Python -O rejected.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-3360.txt
J. Borwein, C. Maitland and M. Skerritt, Computation of an improved lower bound to Giuga’s primality conjecture, Integers 13 (2013), Theorems 3, 4 and 12; primary author-hosted full text: https://www.carmamaths.org/resources/jon/giuga2013.pdf
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
