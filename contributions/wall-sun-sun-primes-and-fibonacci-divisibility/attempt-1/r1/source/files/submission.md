Problem: prb_cfdf248252464aeaa8ed98ff98722683

Title: An all-index valuation formula and exact Wall–Sun–Sun certificates

Claim type: Partial result

Scope: For every odd prime p, writing z_p for its least positive Fibonacci zero and e_p=v_p(F_zp), prove v_p(F_m)=0 if z_p does not divide m and e_p+v_p(m/z_p) otherwise. Derive the official equivalence and certify every prime through 5000. No nonexistence theorem beyond that finite range is claimed.

Write-up:

For an odd prime $p$, define $z=z_p$ as the least positive index with $p\mid F_z$, and set $e=v_p(F_z)$. The following complete valuation formula holds:
$$v_p(F_m)=\begin{cases}0,&z\nmid m,\\e+v_p(m/z),&z\mid m.\end{cases} \tag{1}$$
This is a classical Fibonacci lifting property; here is an elementary matrix proof, including the hypotheses that make lifting legitimate.

Put $Q=\begin{pmatrix}1&1\\1&0\end{pmatrix}$. Its determinant is $-1$, so its image in $\mathrm{GL}_2(\mathbb F_p)$ has finite order. Hence some positive power is the identity, and its off-diagonal entry gives a positive Fibonacci zero. The standard recurrence identity is
$$Q^r=F_rQ+F_{r-1}I.$$
For $r=z$, write this as $aI+bQ$, where $b=F_z$ and $a=F_{z-1}$. The determinant identity implies $p\nmid a$. Modulo $p$, $Q^z=aI$; division of any index $m$ by $z$ then shows $p\mid F_m$ exactly when $z\mid m$, by minimality of $z$.

Suppose more generally $p\mid F_r$, put $v_p(F_r)=c\ge1$ and again write $Q^r=aI+bQ$ with $p\nmid a$. Taking off-diagonal entries in the binomial expansion gives
$$F_{rk}=k a^{k-1}b+\sum_{j=2}^{k}\binom{k}{j}a^{k-j}b^jF_j.$$
If $p\nmid k$, the first term has valuation $c$ and every later term has valuation at least $2c>c$. If $k=p$, the first term has valuation $c+1$; terms with $2\le j<p$ have valuation at least $jc+1>c+1$, and the last term has valuation at least $pc\ge c+2$ because $p$ is odd. Thus multiplication of the index by $p$ raises its valuation exactly once. Factor an arbitrary $k$ as $p^u v$ with $p\nmid v$ and iterate these two facts to obtain (1).

For $p>5$, put $\epsilon=(p/5)\in\{\pm1\}$. In $\mathbb F_p$ or its quadratic extension, the two roots $\alpha,\beta$ of $X^2-X-1$ are distinct and nonzero. If five is a quadratic residue they are both fixed by Frobenius; otherwise Frobenius interchanges them. Thus $\alpha^{p-1}=\beta^{p-1}=1$ in the first case, and $\alpha^{p+1}=\beta^{p+1}=\alpha\beta=-1$ in the second. The quadratic-reciprocity identity $(5/p)=(p/5)$ gives
$$p\mid F_{p-\epsilon},\qquad z\mid p-\epsilon.$$
As $p\nmid p-\epsilon$, (1) shows $v_p(F_{p-\epsilon})=e$. Consequently *some* positive Fibonacci number has valuation exactly one if and only if $e=1$, equivalently $p^2\nmid F_{p-\epsilon}$. If $e\ge2$, seeking a different positive index can never restore valuation one. The exceptional primes two, three and five have the explicit witnesses $F_3=2,F_4=3,F_5=5$.

The checked modern primary paper of Bragman and Rowland uses the same Wall exponent and gives further characterizations; its theorem is not a proof of universal nonexistence. Our checker independently finds every $z_p$ for primes through 5000 by a linear modular recurrence, verifies the specified-index square-modulus test by fast doubling, and checks valuation lifting for twenty multiples of each rank. A separate direct Fibonacci sequence checks all indices through 1000 for primes through 100. This is a finite exact certificate only.

Verification: run `python3 verify.py`. The zero term $F_0$ is excluded from every valuation assertion.

Models used: OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown); source inspection, independent mathematical derivation, exact checker preparation and scope audit.

Human contributors and roles: The referenced authors receive credit for their stated results. No human review of this contribution is claimed.

References:

- N. Bragman and E. Rowland, Limiting density of the Fibonacci sequence modulo powers of a prime, Research in Number Theory 11, 88 (2025), Wall-exponent definition and Theorem 10: https://link.springer.com/article/10.1007/s40993-025-00667-1


## Reproducibility and review

Exact sieve primes through 5000; independently iterated ranks; fast-doubling square-modulus tests and valuation checks on 20 multiples; direct full-index checks through 1000 for primes<=100. Python -O rejected.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/prb_cfdf248252464aeaa8ed98ff98722683.txt
N. Bragman and E. Rowland, Limiting density of the Fibonacci sequence modulo powers of a prime, Research in Number Theory 11, 88 (2025), Wall-exponent definition and Theorem 10: https://link.springer.com/article/10.1007/s40993-025-00667-1
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
