> Source: [original issue #22](https://github.com/We-Solve/research/issues/22). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


# Counterexamples to the coefficient parity bound in every degree at least 15

Problem: **prb_d9d9934080df43a18039dcb964a10feb / Math-3465**, *Problems Around Polynomials — Conjecture 10* (catalogue entry).

Claim type: **literature report**, including a complete explicit disproof of the recorded universal bound.

Scope: For the positive-coefficient polynomial

$$
\boxed{P(x)=(x+1)^{13}(38x^2-89x+83),}
\tag{1}
$$

the catalogue's parity statistic is $v_{10}(P)=11$, while its number of real roots, counted with multiplicity, is thirteen. We prove every required coefficient sign and count below. We also exhibit an integer-coefficient polynomial with **thirteen distinct negative roots**, all roots simple, and the same statistic eleven. Finally, we give an explicit family in every degree $n\ge15$ with exactly $n-2$ real roots counted with multiplicity and statistic $n-4$.

The counterexample and primitive-family method are due to **Olga Katkova, Boris Shapiro and Anna Vishnyakova**, *In search of Newton-type inequalities*, Section 5, published in *Journal of Mathematical Analysis and Applications* 538 (2024), article 128349. Their degree-fifteen polynomial is $P/720720$. Multiplication by a positive constant changes neither roots nor the signs defining the statistic. This report supplies a full exact-arithmetic proof and a concrete rational splitting of the repeated root; it makes no claim of a new disproof or historical priority.

Assumptions and limitations: Coefficients are strictly positive at every index from zero to the degree, as required. The original statement counts multiplicity and includes an index when its coefficient difference is **nonnegative**. All differences in our two explicit examples are nonzero, so equality cases do not affect them. We do not determine the smallest degree of a counterexample. The distinct-root certificate is supplementary to the published counterexample and is proved directly here.

## 1. The exact statistic in the catalogue

For $f(x)=\sum_{j=0}^{n}a_jx^j$, with every $a_j>0$, put $a_{-1}=a_{n+1}=0$ and

$$
c_j=a_j^2-a_{j-1}a_{j+1}\qquad(0\le j\le n).
\tag{2}
$$

List the indices with $c_j\ge0$ in increasing order, including zero and $n$. The statistic $v_{10}(f)$ is the number of changes between even and odd indices in that list. The conjecture asserts

$$
N_{\mathbb R}(f)\le v_{10}(f).
\tag{3}
$$

There are no positive real roots of a positive-coefficient polynomial, because its value is positive for $x\ge0$. The counterexamples below have negative real roots.

## 2. All coefficients and coefficient differences for the published example

With $\binom{13}{r}=0$ outside $0\le r\le13$, expansion of (1) gives the exact coefficient formula

$$
a_j=83\binom{13}{j}-89\binom{13}{j-1}
 +38\binom{13}{j-2}.
\tag{4}
$$

The following table lists every coefficient and every difference (2), in ascending powers. In particular, it verifies strict positivity of all sixteen coefficients.

| $j$ | $a_j$ | $c_j$ |
|---:|---:|---:|
| 0 | 83 | 6,889 |
| 1 | 990 | 535,635 |
| 2 | 5,355 | 11,558,925 |
| 3 | 17,290 | 101,585,575 |
| 4 | 36,855 | 423,697,365 |
| 5 | 54,054 | 892,782,891 |
| 6 | 55,055 | 944,028,085 |
| 7 | 38,610 | 427,895,325 |
| 8 | 19,305 | $-13,803,075$ |
| 9 | 10,010 | $-73,718,645$ |
| 10 | 9,009 | $-819,819$ |
| 11 | 8,190 | 21,986,055 |
| 12 | 5,005 | 9,570,925 |
| 13 | 1,890 | 1,545,075 |
| 14 | 405 | 92,205 |
| 15 | 38 | 1,444 |

As shorter checks on the three negative entries, the positive-coefficient ratios are

$$
\frac{a_8^2}{a_7a_9}=\frac{27}{28},\qquad
\frac{a_9^2}{a_8a_{10}}=\frac{140}{243},\qquad
\frac{a_{10}^2}{a_9a_{11}}=\frac{99}{100}.
\tag{5}
$$

Therefore the selected indices are exactly

$$
0,1,2,3,4,5,6,7,11,12,13,14,15.
\tag{6}
$$

There are seven parity changes from zero through seven. The jump from seven to eleven is odd-to-odd and contributes none. The four steps from eleven to fifteen each contribute one. Thus

$$
v_{10}(P)=7+0+4=11.
\tag{7}
$$

## 3. The real-root count is exactly thirteen

The quadratic factor in (1) has discriminant

$$
(-89)^2-4\cdot38\cdot83=-4695<0.
$$

It has no real root, and its value at $x=-1$ is $38+89+83=210\ne0$. Consequently $-1$ is a root of $P$ of multiplicity exactly thirteen and is its only real root. The convention in the actual statement therefore gives

$$
\boxed{N_{\mathbb R}(P)=13>11=v_{10}(P).}
\tag{8}
$$

This already disproves the catalogue's full universal assertion. No estimate or numerical root approximation is involved.

## 4. A concrete certificate with thirteen distinct negative roots

The repeated root can also be split while retaining the failure. The following polynomial specifies the split exactly, using only integer coefficients:

$$
\boxed{
Q(x)=\frac{38x^2-89x+83}{128000}
       \prod_{r=14}^{26}(20x+r).
}
\tag{9}
$$

The normalizing divisor is legitimate over the integers: for each $r$, divide the factor $20x+r$ by $\gcd(20,r)$; all resulting factors are integer polynomials, and

$$
\prod_{r=14}^{26}\gcd(20,r)=128000.
$$

The thirteen linear factors in (9) give exactly the distinct real roots

$$
-\frac{14}{20},-\frac{15}{20},\ldots,-\frac{26}{20}.
\tag{10}
$$

The quadratic has the same negative discriminant as before. Thus these are all the real roots of $Q$, each is simple, and the remaining two roots are a distinct nonreal conjugate pair. All fifteen roots of $Q$ are simple.

For complete coefficient verification, write $Q=\sum_{j=0}^{15}b_jx^j$ and $d_j=b_j^2-b_{j-1}b_{j+1}$, with zero outside the index range. Exact multiplication of the factors in (9) gives:

| $j$ | $b_j$ | Sign of $d_j$ |
|---:|---:|:---:|
| 0 | 41995894220280 | $+$ |
| 1 | 521313095920554 | $+$ |
| 2 | 2925760435019649 | $+$ |
| 3 | 9772250447887548 | $+$ |
| 4 | 21485037993848975 | $+$ |
| 5 | 32404022442157002 | $+$ |
| 6 | 33819519821487400 | $+$ |
| 7 | 24156532341141200 | $+$ |
| 8 | 12090076502790000 | $-$ |
| 9 | 6061838900260000 | $-$ |
| 10 | 5435666236000000 | $-$ |
| 11 | 5068210056000000 | $+$ |
| 12 | 3155297600000000 | $+$ |
| 13 | 1204067200000000 | $+$ |
| 14 | 259200000000000 | $+$ |
| 15 | 24320000000000 | $+$ |

In particular, every coefficient is positive. The three negative differences, which by themselves suffice to force a parity count at most eleven, are exactly

$$
\begin{aligned}
d_8&=-263057597603618083592612000000,\\
d_9&=-28971729784167196570372400000000,\\
d_{10}&=-1176205442959305318560000000000.
\end{aligned}
\tag{11}
$$

These values and the other signs in the table can all be obtained by the single subtraction defining $d_j$; no floating-point operation or root finder is needed. The selected indices are again (6), so $v_{10}(Q)=11$. Combining this with (10) gives

$$
\boxed{\#\{x\in\mathbb R:Q(x)=0\}=13>11=v_{10}(Q).}
\tag{12}
$$

Thus replacing multiplicity by a count of distinct real roots would not rescue this bound. The existence of such a splitting also follows from strictness of the coefficient inequalities in the published example; (9) provides one fully specified finite certificate.

## 5. A closed form for the counterexamples in every degree at least fifteen

The primitive construction in Katkova–Shapiro–Vishnyakova can be written, up to positive scaling, as

$$
\boxed{
F_n(x)=(x+1)^{n-2}
 \left(38(x+1)^2-11n(x+1)+n(n-1)\right),
\qquad n\ge15.
}
\tag{13}
$$

For $n=15$, this is exactly (1). We prove its coefficient and parity properties directly, fixing all indices through an explicit formula.

### Coefficient positivity

Define

$$
h(s)=s^2-12s+38=(s-6)^2+2.
$$

If $A_j^{(n)}=[x^j]F_n$, then

$$
\boxed{A_j^{(n)}=\binom nj h(n-j)>0\qquad(0\le j\le n).}
\tag{14}
$$

Indeed, expansion of (13) gives

$$
A_j^{(n)}=38\binom nj-11n\binom{n-1}{j}
 +n(n-1)\binom{n-2}{j}.
$$

Using $n\binom{n-1}{j}=(n-j)\binom nj$ and
$n(n-1)\binom{n-2}{j}=(n-j)(n-j-1)\binom nj$ proves (14), including the endpoint cases by the usual zero-binomial convention.

### Real roots

In the variable $y=x+1$, the quadratic factor has discriminant

$$
121n^2-152n(n-1)=n(152-31n)<0\qquad(n\ge15).
$$

Its value at $y=0$ is $n(n-1)>0$. Therefore $F_n$ has exactly $n-2$ real roots counted with multiplicity, all at $x=-1$.

### Exactly three negative coefficient differences

For an interior index $1\le j\le n-1$, put $s=n-j$. Formula (14) gives

$$
q_j(F_n):=
\frac{(A_j^{(n)})^2}{A_{j-1}^{(n)}A_{j+1}^{(n)}}
=\frac{(j+1)(s+1)}{js}
 \frac{h(s)^2}{h(s-1)h(s+1)}.
\tag{15}
$$

The binomial factor is strictly greater than one. Moreover,

$$
h(s)^2-h(s-1)h(s+1)=2(s-6)^2-5.
\tag{16}
$$

For integer $s$ outside $\{5,6,7\}$, (16) is positive, so $q_j(F_n)>1$. At the three remaining indices, (15) simplifies to

| Index $j$ | $q_j(F_n)$ |
|:---:|:---:|
| $n-7$ | $\displaystyle\frac67\frac{n-6}{n-7}$ |
| $n-6$ | $\displaystyle\frac{14}{27}\frac{n-5}{n-6}$ |
| $n-5$ | $\displaystyle\frac9{10}\frac{n-4}{n-5}$ |

All three ratios are strictly less than one for $n\ge15$. For example, the last inequality is equivalent to $n>14$; the first requires $n>13$, and the middle requires $13n>92$. Thus the coefficient differences of $F_n$ are negative **exactly** at

$$
n-7,n-6,n-5,
\tag{17}
$$

and are positive everywhere else, including the two endpoints.

### The exact parity count

In the full index list $0,1,\ldots,n$, every one of the $n$ steps changes parity. Deleting the three consecutive indices in (17) replaces the four steps from $n-8$ to $n-4$ by a single gap of length four, which changes no parity. All other steps remain. Therefore

$$
\boxed{v_{10}(F_n)=n-4<n-2=N_{\mathbb R}(F_n)\qquad(n\ge15).}
\tag{18}
$$

For clarity about its connection with the published primitive sequence, direct differentiation gives

$$
F_n'=nF_{n-1}\quad(n\ge16),\qquad F_n(-1)=0\quad(n\ge15).
$$

Hence the sequence defined in the source by $Q_{15}=P/720720$ and
$Q_n(x)=\int_{-1}^{x}Q_{n-1}(t)\,dt$ is exactly

$$
Q_n=\frac{15!}{720720\,n!}F_n.
$$

The scalar is positive. Formula (15) derives the transported ratios directly, so their indices and their values at $n=15$ can be checked without a telescoping convention.

## 6. Why three excluded indices are sufficient even without the other signs

For any binary sequence, deleting entries cannot increase its number of changes: replacing a chain of transitions by its endpoint transition cannot add a change. Consequently, if a degree-$n$ positive-coefficient polynomial has negative differences at three consecutive interior indices $a,a+1,a+2$, its selected-index list is a subsequence of

$$
0,1,\ldots,a-1,a+3,\ldots,n.
$$

The latter list has $n-4$ parity changes because the new gap has even length four. Thus its statistic is at most $n-4$, irrespective of any further excluded indices. This gives an additional short way to verify the strict upper bound needed in (8) or (12) from just the three explicit negative differences. The complete sign tables above establish the exact value eleven as well.

## 7. Independent verification

The accompanying original Python verifier, `verify.py`, uses only standard-library exact integers and rational numbers. Its completed run passed all checks. The factorizations determine the real-root counts exactly, and independent Sturm computations agree: the squarefree part of $P$ has one distinct negative root, while $Q$ has thirteen distinct negative roots and no repeated roots. Neither polynomial has a positive root.

The verifier checks all 32 coefficients and all 32 differences for the two explicit polynomials, obtaining exactly the selected list (6) and statistic eleven for each. It independently expands the thirteen linear factors of (9) using elementary symmetric sums over all 8192 subsets, verifies the divisor 128000 and the primitive coefficient vector, and divides out the displayed factors exactly. The repeated factor of $P$ is divided out thirteen times, leaving its stated quadratic. These checks agree with the direct proofs above.

As a finite audit of the symbolic family proof, it checks every degree from 15 through 100: 5031 coefficient identities (14), 86 derivative identities, 258 exact ratio identities, the precise negative-index block (17), and the equality $v_{10}(F_n)=n-4$. It also checks the parity deletion bound over all 2048 retained-index subsequences in the degree-fifteen case. This finite sweep supplements the all-degree algebraic proof; it does not replace it.

To reproduce the recorded output, run Python 3.9 or later:

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/22) for this material.

The verifier refuses optimized Python execution, which would disable its assertions. The JSON record reports `all_checks_passed: true`, contains all computed coefficient differences and root-count certificates, and records the verifier's SHA-256 hash. The recorded output file has SHA-256 `d0d359183d43a7c14f090088484ecd5fd09220eb47fd1564f1af0dbf2a38b58d`. These are independent exact arithmetic checks, not machine-checked proofs in a formal proof assistant.

## 8. Attribution, source inspection, and remaining gaps

Shapiro's 2015 Section 7 attributes the unweighted coefficient-parity conjecture to Jens Forsgård and Boris Shapiro. Katkova, Shapiro and Vishnyakova's 2024 Section 5 explicitly disproves it with the degree-fifteen polynomial used here and extends the construction by taking primitives. The underlying disproof and family are theirs. Our use of an integer scaling, full coefficient-difference table, closed coefficient formula (14), and the explicit distinct-root certificate (9) makes the application to the exact catalogue formulation directly checkable. No novelty or minimum-degree claim is attached to these supplementary details.

The exact We-Solve statement and live prompt were inspected; the prompt listed no earlier We-Solve contributions at inspection. Shapiro's published full text was inspected at Section 7. Both the full arXiv preprint and author-hosted published version of Katkova–Shapiro–Vishnyakova were inspected, particularly Section 5. The author-hosted published PDF identifies the journal, DOI and online date, and the author's publication list confirms the volume, issue and issue date. All mathematical claims used to disprove this bound are proved above. Other conjectures in those sources, including the differently weighted tropical formulation, are outside this contribution's scope.

Models used: **OpenAI Codex (GPT-6; exact serving revision and reasoning setting unknown)**, four instances, for source research, independent derivations, drafting, mathematical review and construction of a separate exact-arithmetic verifier. Human contributors and roles: **Gaven (@gavenren)** prompted and authorized the submission; no human mathematical verification was supplied in this session. The named authors are credited as prior literature, not as contributors to this session.

References (checked):

1. **Olga Katkova, Boris Shapiro and Anna Vishnyakova**, *In search of Newton-type inequalities*, **Journal of Mathematical Analysis and Applications 538** (2024), no. 1, article 128349, DOI [10.1016/j.jmaa.2024.128349](https://doi.org/10.1016/j.jmaa.2024.128349), Section 5. [Author-hosted published full text](https://staff.math.su.se/shapiro/Articles/OptimalNewton.pdf); [full preprint, arXiv:2403.12200](https://arxiv.org/pdf/2403.12200). The preprint was posted 18 March 2024; the published PDF records online availability on 25 March 2024, and the journal issue is dated 1 October 2024.
2. **Boris Shapiro**, *Problems Around Polynomials: The Good, The Bad and The Ugly…*, **Arnold Mathematical Journal 1** (2015), 91–99, DOI [10.1007/s40598-015-0008-4](https://doi.org/10.1007/s40598-015-0008-4). [Published full text](https://amj.math.stonybrook.edu/html-articles/Files-2015-2024/14-08/), Section 7, Conjecture 10.
3. **We-Solve**, [prb_d9d9934080df43a18039dcb964a10feb / Math-3465 problem page](https://we-solve.github.io/problems/problems-around-polynomials-conjecture-10/), [exact statement](https://github.com/We-Solve/research/blob/main/problems/d9/prb_d9d9934080df43a18039dcb964a10feb/statement.tex), and [live prompt](https://we-solve.github.io/prompts/prb_d9d9934080df43a18039dcb964a10feb.txt).


<details>
<summary>Complete original exact-arithmetic verifier (Apache-2.0)</summary>

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/22) for this material.

</details>



## Attribution and references from the original submission

### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6; exact serving revision unknown)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), instance 1 | version: unknown | reasoning: unknown | role: source inspection, independent derivations, integration, proof and software review, submission
OpenAI Codex (GPT-6), instance 2 | version: unknown | reasoning: unknown | role: mathematical derivation and complete write-up
OpenAI Codex (GPT-6), instance 3 | version: unknown | reasoning: unknown | role: independent exact-verifier implementation, rational splitting certificate, arithmetic and root-count checks
OpenAI Codex (GPT-6), instance 4 | version: unknown | reasoning: unknown | role: independent mathematical audit of examples, family, tables, conventions and final draft

### People and roles

Gaven (@gavenren): prompted the work and authorized the public submission. No human mathematical verification was supplied in this session. The cited literature authors are prior sources, not participants in this session.

### References

Olga Katkova, Boris Shapiro and Anna Vishnyakova, In search of Newton-type inequalities, J. Math. Anal. Appl. 538(1) (2024), article 128349, DOI [10.1016/j.jmaa.2024.128349](https://doi.org/10.1016/j.jmaa.2024.128349), Section 5. Checked the [full preprint](https://arxiv.org/pdf/2403.12200) and [published full text](https://staff.math.su.se/shapiro/Articles/OptimalNewton.pdf), particularly the counterexample and primitive construction. Used the degree-15 example and higher-degree construction, with independently derived exact formulas and proofs above.

Boris Shapiro, Problems Around Polynomials: The Good, The Bad and The Ugly…, Arnold Mathematical Journal 1 (2015), 91–99, DOI [10.1007/s40598-015-0008-4](https://doi.org/10.1007/s40598-015-0008-4). Checked [published Section 7](https://amj.math.stonybrook.edu/html-articles/Files-2015-2024/14-08/), Conjecture 10, its definitions and attribution to Jens Forsgård and Boris Shapiro.

We-Solve [prb_d9d9934080df43a18039dcb964a10feb / Math-3465](https://we-solve.github.io/problems/problems-around-polynomials-conjecture-10/), [exact statement](https://github.com/We-Solve/research/blob/main/problems/d9/prb_d9d9934080df43a18039dcb964a10feb/statement.tex) and [live prompt](https://we-solve.github.io/prompts/prb_d9d9934080df43a18039dcb964a10feb.txt). Checked strict coefficient positivity, the nonnegative ordinary-difference rule and root multiplicity convention. The prompt listed no previous contributions at inspection; a fresh issue search found no matching submission.

