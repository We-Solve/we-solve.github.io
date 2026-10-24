Problem: prb_7f972aacadd741a1a39bffe089cc4347

Title: The Lehmer conjecture on every Pell number, with independent structural certificates

Claim type: Literature report

Scope: The official implication is true for every Pell number greater than one, by the published Faye–Luca theorem. Independently prove the odd-squarefree-Carmichael necessities and the index congruence n≡±1 mod 2^(2K) for a hypothetical composite Pell solution with K distinct prime factors. The general integer conjecture is not settled.

Write-up:

Let $P_0=0,P_1=1$ and $P_{n+2}=2P_{n+1}+P_n$. Faye and Luca’s Theorem 1 states that no composite Pell number has the Lehmer property. Therefore
$$P_n>1,\quad \varphi(P_n)\mid P_n-1\quad\Longrightarrow\quad P_n\text{ is prime}$$
for every index. This is an infinite-family partial result for prb_7f972aacadd741a1a39bffe089cc4347, not a proof for arbitrary integers. The theorem is credited to its authors; its full text and its published journal record were checked. Its analytic argument is a literature input rather than a new proof here.

The following structural restrictions and Pell identities can be verified independently. If a composite integer $N$ satisfies $\varphi(N)\mid N-1$, then $N$ is odd and squarefree. Indeed $\varphi(N)$ is even for $N>2$, and a repeated prime factor $p^2\mid N$ would imply $p\mid\varphi(N)\mid N-1$. Also $p-1\mid N-1$ for every $p\mid N$, so such $N$ satisfies the squarefree Carmichael criterion. These necessary properties alone are not sufficient; for example $561$ is Carmichael but $\varphi(561)=320$ does not divide 560.

Define $Q_0=2,Q_1=2$ and $Q_{n+2}=2Q_{n+1}+Q_n$. The characteristic roots $\alpha=1+\sqrt2$, $\beta=1-\sqrt2$ give
$$P_n=\frac{\alpha^n-\beta^n}{\alpha-\beta},\qquad Q_n=\alpha^n+\beta^n,$$
so direct multiplication gives
$$Q_n^2-8P_n^2=4(-1)^n,\qquad P_{2m}=P_mQ_m.$$
The recurrence for $Q_n/2$ is always odd modulo two. Hence $v_2(Q_n)=1$ for all positive $n$, while $P_n$ is odd precisely for odd $n$; the doubling identity then proves $v_2(P_n)=v_2(n)$.

For odd $n>1$, define $\epsilon=1$ if $n\equiv1\pmod4$ and $\epsilon=-1$ otherwise. Binet multiplication also gives
$$P_n-1=P_{(n-\epsilon)/2}Q_{(n+\epsilon)/2}.$$
It follows that
$$v_2(P_n-1)=v_2(n-\epsilon). \tag{1}$$
Every odd prime divisor $q$ of such a $P_n$ is congruent to one modulo four: the first identity reduces to $(Q_n/2)^2\equiv-1\pmod q$, which is impossible for $q\equiv3\pmod4$ by Fermat’s little theorem. If a composite $P_n$ with $K$ distinct prime factors had the Lehmer property, each factor would therefore contribute at least two powers of two to its totient. Consequently (1) forces
$$2^{2K}\mid n-\epsilon,\qquad n\equiv\pm1\pmod{2^{2K}},\qquad n\ge2^{2K}-1.$$
This quantitative obstruction is independently derived; it is not asserted to replace the complete published Pell proof.

The exact checker verifies these recurrence identities and valuations through index 1000, compares totients computed by factorization and direct gcd counting through 1000, checks the structural implications on that entire integer range, and confirms the Carmichael control. For small odd Pell terms it independently factors and verifies the prime-divisor residue restriction. It never declares an untested large Pell number prime.

Verification: run `python3 verify.py`. No classification of all Pell primes or all possible integer counterexamples is claimed.

Models used: OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown); source inspection, independent mathematical derivation, exact checker preparation and scope audit.

Human contributors and roles: The referenced authors receive credit for their stated results. No human review of this contribution is claimed.

References:

- B. Faye and F. Luca, Pell numbers with the Lehmer property, Afrika Matematika 28 (2017), 291–294, Theorem 1; primary full text: https://arxiv.org/pdf/1510.00638
- Primary publication record (published 25 August 2016, issue March 2017): https://link.springer.com/article/10.1007/s13370-016-0449-5


## Reproducibility and review

Exact Pell/Pell–Lucas recurrence and 2-adic identities through 1000; independent totient implementations and structural checks through 1000; direct factors of small odd Pell terms; Carmichael control 561. Python -O rejected.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/prb_7f972aacadd741a1a39bffe089cc4347.txt
B. Faye and F. Luca, Pell numbers with the Lehmer property, Afrika Matematika 28 (2017), 291–294, Theorem 1; primary full text: https://arxiv.org/pdf/1510.00638
Primary publication record (published 25 August 2016, issue March 2017): https://link.springer.com/article/10.1007/s13370-016-0449-5
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
