> Source: [original issue #9](https://github.com/We-Solve/research/issues/9). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


# Lucas residue completeness: classification, constructive lifting and exact certificates

**We-Solve TOP-3358 / Math-3376, OPG-37402.**

**Claim and attribution.** The answer is yes. The complete classification was published by Brandon Avila and Yongyi Chen in 2013; Cheng Lien Lang and Mong Lung Lang also record it in their 2013 work. This is a literature report with detailed proofs and executable certificates, not a claim of a new classification. Necessity below uses the explicitly cited Fibonacci-completeness theorem of S. A. Burr. Sufficiency is proved directly, including a constructive index algorithm, a residue transversal and exact periods modulo powers of three. No historical novelty is claimed for these elementary consequences.

## 1. The precise result

Let $L_0=2$, $L_1=1$, and $L_{n+2}=L_{n+1}+L_n$. A positive modulus $m$ is Lucas-complete if every residue modulo $m$ equals some $L_n$ modulo $m$.

For $m\geq2$ the classification is

$$\boxed{m\text{ is Lucas-complete}
\iff m\in\{2,4,6,7,14\}\cup\{3^k:k\geq1\}.}$$

The modulus one is complete trivially. This accounts for the $k=0$ convention in the published theorem without inserting one into the catalogue's domain $m\geq2$.

Beyond proving all sufficiency cases, we will construct, for every integer $A$ and $K\geq1$, an index

$$0\leq n<8\cdot3^{K-1},\qquad L_n\equiv A\pmod{3^K}.$$

In fact, the indices in this range congruent to $1,2$ or $7$ modulo eight give **exactly one representative of every residue** modulo $3^K$. This assertion concerns that selected set of indices, not all terms of the full Lucas period.

## 2. Pure periodicity and the reduction to Fibonacci numbers

The state transition modulo any $m$ is

$$T(x,y)=(y,x+y),\qquad T^{-1}(x,y)=(y-x,x).$$

It is a permutation of the finite set $(\mathbb Z/m\mathbb Z)^2$. Thus the Lucas state sequence is periodic from its initial state $(2,1)$, with no transient part. The least state period is at most $m^2$, and any tail has the same set of values as the whole sequence. This remains valid for composite moduli.

Suppose $m$ is Lucas-complete. Choose $r$ with $L_r\equiv0\pmod m$ and put $d=L_{r+1}\bmod m$. Consecutive Lucas integers are coprime:

$$\gcd(L_{r+1},L_r)=\gcd(L_r,L_{r-1})=\cdots=\gcd(1,2)=1.$$

For $r=0$ the same conclusion follows directly from $L_1=1$. Since $m$ divides $L_r$, this proves $\gcd(d,m)=1$. A nonzero residue alone would not suffice for a composite modulus; we need this unit property.

Let $F_0=0$, $F_1=1$, $F_{j+2}=F_{j+1}+F_j$. The initial pair and the recurrence give

$$L_{r+j}\equiv dF_j\pmod m\qquad(j\geq0).$$

The Lucas tail is complete, and multiplication by the unit $d$ permutes residue classes. Therefore the Fibonacci sequence must also be complete modulo $m$.

We now use Burr's published theorem [2]: the Fibonacci-complete positive moduli are exactly

$$\mathcal F=\{5^a,\ 2\cdot5^a,\ 4\cdot5^a,\ 3^b5^a,\ 6\cdot5^a,\ 7\cdot5^a,\ 14\cdot5^a:
a\geq0,\ b\geq1\}.$$

This theorem is an external input; its prime-modulus classification is not being established by a finite computer search here.

Modulo five the Lucas cycle is $2,1,3,4$, which never includes zero. Completeness passes to divisors, so $5\nmid m$. Removing all factors of five from Burr's list leaves one, the five exceptional moduli, and the positive powers of three. Excluding $m=1$ proves necessity for the exact catalogue statement.

This reduction is consistent with Avila–Chen's proof. The remaining sections supply a direct constructive sufficiency proof, rather than assuming that a zero term by itself guarantees completeness for an arbitrary modulus.

## 3. Certificates for the five exceptional moduli

For each row below, the index vector is ordered by target residue $a=0,1,\ldots,m-1$. Its entry $n_a$ satisfies $L_{n_a}\equiv a\pmod m$.

| $m$ | Indices $n_0,n_1,\ldots,n_{m-1}$ | Least state period |
| ---: | --- | ---: |
| 2 | $0,1$ | 3 |
| 4 | $3,1,0,2$ | 6 |
| 6 | $6,1,0,2,3,5$ | 24 |
| 7 | $4,1,0,2,3,8,9$ | 16 |
| 14 | $12,1,0,2,3,8,9,4,33,16,18,5,24,25$ | 48 |

Every congruence can be checked by repeated application of the defining recurrence. The accompanying certificate records complete cycles and verifies their entries by a separate fast-doubling computation. The witness indices prove completeness; knowing the least periods is not needed for that implication.

## 4. A matrix congruence that lifts one ternary digit

Set

$$u_n=\binom{L_n}{L_{n+1}},\qquad
Q=\begin{pmatrix}0&1\\1&1\end{pmatrix},\qquad
u_n=Q^n\binom21.$$

Direct multiplication gives

$$Q^8=\begin{pmatrix}13&21\\21&34\end{pmatrix}
=I+3B,\qquad B=\begin{pmatrix}4&7\\7&11\end{pmatrix},$$

$$B\equiv Q^2=\begin{pmatrix}1&1\\1&2\end{pmatrix}\pmod3.$$

Write $P_k=8\cdot3^{k-1}$ for $k\geq1$.

**Lemma 1.** For every $k\geq1$,

$$\boxed{Q^{P_k}\equiv I+3^kB\pmod{3^{k+1}}.} \tag{1}$$

**Proof.** The case $k=1$ is the displayed exact identity. Suppose $Q^{P_k}=I+3^kD$ with $D\equiv B\pmod3$. Since $P_{k+1}=3P_k$,

$$Q^{P_{k+1}}
=I+3^{k+1}D+3^{2k+1}D^2+3^{3k}D^3.$$

For $k\geq1$, the last two terms are divisible by $3^{k+2}$. Reducing the remaining coefficient $D$ modulo three proves (1) at $k+1$. $\square$

**Corollary 2.** For $t\in\{0,1,2\}$ and $n\geq0$,

$$\boxed{L_{n+tP_k}\equiv L_n+t3^kL_{n+2}\pmod{3^{k+1}}.} \tag{2}$$

**Proof.** The square of $3^k$ is divisible by $3^{k+1}$, so raising (1) to the power $t$ gives $Q^{tP_k}\equiv I+t3^kB$ at the stated modulus. Apply this to $u_n$. The first coordinate of $Bu_n$ modulo three equals that of $Q^2u_n$, which is $L_{n+2}$. $\square$

## 5. Constructing an index for every target residue

Modulo three the sequence is the repeating list

$$2,1,0,1,1,2,0,2.$$

Choose the following three starting indices:

| Target modulo 3 | Seed $r$ | $L_r$ | $L_{r+2}$ | $L_{r+2}\bmod3$ |
| ---: | ---: | ---: | ---: | ---: |
| 0 | 2 | 3 | 7 | 1 |
| 1 | 1 | 1 | 4 | 1 |
| 2 | 7 | 29 | 76 | 1 |

Fix a target integer $A$ and an exponent $K\geq1$. First reduce $A$ modulo $3^K$, preserving its target residue while bounding its size. Start with $n_1=r(A\bmod3)$. Inductively suppose

$$L_{n_k}\equiv A\pmod{3^k},\qquad
n_k\equiv n_1\pmod8,\qquad 0\leq n_k<P_k.$$

The eight-term cycle modulo three ensures $L_{n_k+2}\equiv1\pmod3$ throughout. Compute the least nonnegative remainder

$$\ell_k=L_{n_k}\bmod3^{k+1}.$$

The difference $A-\ell_k$ is divisible by $3^k$. Choose the unique $t_k\in\{0,1,2\}$ satisfying

$$t_k\equiv\frac{A-\ell_k}{3^k}\pmod3,$$

and define

$$\boxed{n_{k+1}=n_k+t_kP_k.} \tag{3}$$

Equation (2) gives $L_{n_{k+1}}\equiv\ell_k+t_k3^k\equiv A\pmod{3^{k+1}}$. The increment is a multiple of eight, preserving the seed condition, and

$$0\leq n_{k+1}<3P_k=P_{k+1}.$$

All induction hypotheses persist. Stopping at $K$ proves completeness modulo $3^K$ for every $K$, with an explicit index less than $P_K$. This finishes sufficiency and hence the classification.

### An exact residue transversal

Let

$$\mathcal I_K=\{0\leq n<P_K:n\bmod8\in\{1,2,7\}\}.$$

The map $n\mapsto L_n\bmod3^K$ is a bijection from $\mathcal I_K$ to $\mathbb Z/3^K\mathbb Z$.

To see uniqueness as well as existence, work within each seed class. It is true at $K=1$. Every index in a fixed seed class modulo eight in $[0,P_{k+1})$ has a unique decomposition $n+tP_k$ with $0\leq n<P_k$ and $t\in\{0,1,2\}$. For each target modulo $3^{k+1}$, its reduction determines $n$ uniquely by induction, and (2) with unit slope determines $t$ uniquely. The three seed classes cover the three target classes modulo three. Each has $3^{K-1}$ indices, giving $|\mathcal I_K|=3^K$ altogether.

This gives a precise alternative to saying only that every residue appears somewhere: it identifies a complete system of residue representatives inside one period.

## 6. Efficient evaluation and a worked construction

The index algorithm need not build the enormous integer $L_n$. The identity $Q^2=Q+I$ shows that $\operatorname{tr}(Q^n)$ has initial values two and one and obeys the same recurrence, hence

$$L_n=\operatorname{tr}(Q^n).$$

Binary matrix powering modulo $3^{k+1}$ computes $\ell_k$ exactly. At stage $k$ the index and modulus have $O(k)$ bits. Computing each stage from scratch uses $O(k)$ modular matrix multiplications; all $K$ stages therefore use $O(K^2)$ such multiplications. This is an arithmetic operation count, not a claim of unit cost for large-integer multiplication.

For example take $A=2026$ and $K=7$, so the desired modulus is $2187$. The target is one modulo three, and its seed is $n_1=1$.

| New modulus | Old index | $L_{\text{old index}}$ modulo new modulus | Adjustment $t_k$ | New index |
| ---: | ---: | ---: | ---: | ---: |
| 9 | 1 | 1 | 0 | 1 |
| 27 | 1 | 1 | 0 | 1 |
| 81 | 1 | 1 | 0 | 1 |
| 243 | 1 | 1 | 1 | 217 |
| 729 | 217 | 82 | 2 | 1513 |
| 2187 | 1513 | 568 | 2 | 5401 |

Thus

$$\boxed{L_{5401}\equiv2026\pmod{2187},\qquad5401<5832=P_7.}$$

The software independently checks this result using Fibonacci fast doubling and the identity $L_n=2F_{n+1}-F_n$. Its construction and verification use different arithmetic implementations.

## 7. The exact state period modulo $3^k$

The least Lucas state period modulo $3^k$ is exactly $P_k=8\cdot3^{k-1}$.

Modulo three the eight displayed consecutive states are distinct, giving the base period eight. Equation (1) implies $Q^{P_k}\equiv I\pmod{3^k}$, so $P_k$ is always a period. Suppose inductively it is the least period at level $k$. A period at level $k+1$ reduces to one at level $k$, so its least positive value is a multiple of $P_k$. A least state period divides every return time, as division with remainder would otherwise produce a smaller positive return time. It therefore divides the known period $3P_k=P_{k+1}$, and must be either $P_k$ or $3P_k$.

The first possibility is excluded by (1) applied to the initial state:

$$B\binom21=\binom{15}{25}\equiv\binom01\pmod3,$$

$$u_{P_k}\equiv u_0+3^k\binom01\not\equiv u_0\pmod{3^{k+1}}.$$

The least period must therefore be $3P_k$. This proves the formula for all exponents. A period of the values is equivalent to a period of consecutive states here, because the recurrence determines every later value from the pair.

This does not assert that Lucas and Fibonacci periods agree at every modulus: modulo five their periods are respectively four and twenty.

## 8. Why completeness does not multiply through the Chinese remainder theorem

Even for coprime complete moduli, the indices realizing prescribed residues may have incompatible phases. The Chinese remainder theorem for values alone does not supply a common sequence index.

For a small exact example, three and seven are both Lucas-complete, but 21 is not. Modulo three the zeros occur exactly when $n\equiv2\pmod4$. Modulo seven, the sixteen-term cycle has zeros at indices four and twelve, so any zero has $n\equiv0\pmod4$. No index can satisfy both. Hence zero never occurs modulo 21.

Other complete-factor pitfalls appear in the finite census: modulo 18 the first missing residue is five, and modulo 28 it is zero. The general exclusion is established by the necessity proof and Burr's theorem, not extrapolated from these examples.

## 9. Reproducible verification and its limits

The exact standard-library program accompanies a JSON record of every stated finite check. The recorded configuration passed all assertions:

| Check | Executed scope |
| --- | --- |
| Full Lucas state-cycle census | All 4,999 moduli $2\leq m\leq5000$; 7,147,243 states |
| Excluded-modulus certificates | A first missing residue for each of 4,987 excluded moduli in that range |
| Constructive lifting | Every target for each $1\leq K\leq8$: 9,840 targets in total |
| Transversal property | Exact equality with the indices $1,2,7\pmod8$ in each tested period |
| Larger lifting examples | Six targets each for $K=16,32,64,128$: 24 cases, with fixed seeds recorded |
| Matrix congruence (1) | $1\leq k\leq20$ |
| Exact power-of-three periods | Complete cycles for $1\leq k\leq10$ |
| Small cycles and worked example | Complete cycle tables and the full $2026\pmod{2187}$ lifting trace |

Exactly the following moduli in the census are complete:

$$2,3,4,6,7,9,14,27,81,243,729,2187.$$

The census stops only when the initial pair returns. It does not stop at a conjectured period or upon merely finding some repeated value. Invertibility of the state map guarantees termination and ensures the entire Lucas orbit has been covered. All residues and indices are exact integers; no floating-point or probabilistic primality computation is used.

The lifting routine uses matrix trace evaluation. Every final constructed index is checked by a separately implemented Fibonacci fast-doubling calculation. The larger 24-case sample is explicitly a sample, not enumeration modulo $3^{128}$. The infinite necessity relies on the cited theorem; the all-exponent sufficiency, transversal and period claims follow from the proofs above.

Run with Python 3.10 or newer, without optimization flags:

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/9) for this material.

The elapsed time is machine dependent. The mathematical results and finite counts are reproducible. Independent same-model agents audited the sources, necessity, lifting argument and implementation. No independent human proof checking or formal proof-assistant certification is asserted.

## 10. References, attribution and inspected scope

1. **Brandon Avila and Yongyi Chen**, *On Moduli for Which the Lucas Numbers Contain a Complete Residue System*, The Fibonacci Quarterly **51**(2), May 2013, 151–152. [Full publisher-archive paper](https://www.fq.math.ca/Papers1/51-2/AvilaChen.pdf). The complete two-page paper and rendered proof page were inspected. It supplies the established classification and historical attribution; its theorem is not claimed as new work here. Later website upload metadata does not change the printed 2013 publication date.
2. **S. A. Burr**, *On Moduli for Which the Fibonacci Sequence Contains a Complete System of Residues*, The Fibonacci Quarterly **9**(5), December 1971, 497–504. [Publisher-archive scan](https://www.fq.math.ca/Scanned/9-5/burr.pdf). The main theorem, notation and rendered first page were checked. Its general Fibonacci classification is the explicit external input to necessity; this submission does not claim to reprove or independently validate every lemma of Burr's paper.
3. **Cheng Lien Lang and Mong Lung Lang**, *Fibonacci Numbers and Residue Completeness*, [arXiv:1304.2892v3](https://arxiv.org/pdf/1304.2892v3), 11 July 2013. Theorem 2.5 and Section 2.3 were checked. Their generalized recurrence theorem and explicit Lucas specialization corroborate the result and credit Avila–Chen's independent proof. This source is not used to replace our direct construction.
4. **Open Problem Garden**, [Lucas Numbers Modulo m](https://www.openproblemgarden.org/op/lucas_numbers_modulo_m), posted by Martin Erickson, 19 March 2012. Full question and the 1 July 2014 comment reporting a solution inspected. The old catalogue question should not be represented as a newly solved open problem.
5. **We-Solve / UnsolvedMath TOP-3358**, displayed as Math-3376, OPG-37402. [Research prompt](https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-3358.txt). Full definitions, conjectured list and earlier-contribution section inspected; no earlier We-Solve contributions were listed. Catalogue credit: ULAM.AI, UnsolvedMath contributors and We-Solve, CC BY 4.0.

## Provenance and licences

Gaven (`@gavenren`) requested another deeply investigated problem and authorized public submission. Research, exposition, source inspection, mathematical derivation and review, and original verification software were produced by OpenAI Codex (GPT-6; exact serving revision and reasoning setting unknown), including separate inherited same-model agents. The published classification remains credited to its original authors. No human mathematical derivation in this session, historical novelty or new open-problem breakthrough is claimed.

Original exposition and non-software result files: CC BY 4.0. Original software: Apache-2.0. Source papers are linked with attribution and retain their original rights.


<details>
<summary>Complete exact verification software: verify3358.py (Apache-2.0)</summary>

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/9) for this material.

</details>



## Attribution and references from the original submission

### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6; exact serving revision unknown)

### LLM versions, settings and roles

OpenAI Codex (GPT-6) | version: unknown | reasoning: unknown | role: primary agent selected the problem, inspected primary sources, developed and wrote the exposition, transversal and period arguments, reviewed the software, executed the final checks and prepared submission; three separate inherited same-model mathematical agents developed or independently audited the lifting proof, necessity, source history and final write-up; a fourth inherited same-model agent implemented and audited the exact computation. Candidate-screening agents used the same inherited model. No other provider or model was used in this session.

### People and roles

Gaven (@gavenren): requested another deeply investigated problem and authorized public submission. No human mathematical derivation or independent human proof checking in this session is asserted. The original question and published classification remain credited to the original authors listed in References, who did not participate in this session.

### References

1. **Brandon Avila and Yongyi Chen**, *On Moduli for Which the Lucas Numbers Contain a Complete Residue System*, The Fibonacci Quarterly **51**(2), May 2013, 151–152. [Full publisher-archive paper](https://www.fq.math.ca/Papers1/51-2/AvilaChen.pdf). The complete two-page paper and rendered proof page were inspected. It supplies the established classification and historical attribution; its theorem is not claimed as new work here. Later website upload metadata does not change the printed 2013 publication date.
2. **S. A. Burr**, *On Moduli for Which the Fibonacci Sequence Contains a Complete System of Residues*, The Fibonacci Quarterly **9**(5), December 1971, 497–504. [Publisher-archive scan](https://www.fq.math.ca/Scanned/9-5/burr.pdf). The main theorem, notation and rendered first page were checked. Its general Fibonacci classification is the explicit external input to necessity; this submission does not claim to reprove or independently validate every lemma of Burr's paper.
3. **Cheng Lien Lang and Mong Lung Lang**, *Fibonacci Numbers and Residue Completeness*, [arXiv:1304.2892v3](https://arxiv.org/pdf/1304.2892v3), 11 July 2013. Theorem 2.5 and Section 2.3 were checked. Their generalized recurrence theorem and explicit Lucas specialization corroborate the result and credit Avila–Chen's independent proof. This source is not used to replace our direct construction.
4. **Open Problem Garden**, [Lucas Numbers Modulo m](https://www.openproblemgarden.org/op/lucas_numbers_modulo_m), posted by Martin Erickson, 19 March 2012. Full question and the 1 July 2014 comment reporting a solution inspected. The old catalogue question should not be represented as a newly solved open problem.
5. **We-Solve / UnsolvedMath TOP-3358**, displayed as Math-3376, OPG-37402. [Research prompt](https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-3358.txt). Full definitions, conjectured list and earlier-contribution section inspected; no earlier We-Solve contributions were listed. Catalogue credit: ULAM.AI, UnsolvedMath contributors and We-Solve, CC BY 4.0.

