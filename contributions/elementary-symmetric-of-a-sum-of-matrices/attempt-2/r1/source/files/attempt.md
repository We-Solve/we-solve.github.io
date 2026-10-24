> Source: [original issue #6](https://github.com/We-Solve/research/issues/6). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


# A partition formula for elementary symmetric functions of a matrix sum

**We-Solve Math-3280 / prb_b8fd80d827ea4ad186a62c524b01a848, catalogue entry.**

**Claim and attribution.** This is a detailed literature resolution of the complete catalogue question, with a self-contained proof, an explicit integer-partition organization, reproducible verification, and a correction to equation (11) of the specified source preprint. The central identity is classical: Amitsur (1980), independently Reutenauer–Schützenberger (1987). We make no priority claim for that identity, the partition regrouping, or its consequences. The 1987 paper states the needed formula over commutative rings and credits Amitsur in its added-in-proof note [3].

## 1. Exact target and conventions

For an $n\times n$ matrix $C$ over a field, the elementary symmetric functions are defined by principal minors:

$$
S_j(C)=\sum_{\substack{I\subseteq[n]\\|I|=j}}\det C[I,I],\qquad S_0(C)=1.
$$

Equivalently,

$$
\det(I+tC)=\sum_{j=0}^n S_j(C)t^j.
$$

The question requests a closed expression organized by integer partitions for $S_k(A_1+\cdots+A_N)$, with $0\leq N\leq k\leq n$, involving elementary symmetric functions of ordered words in the matrices [1,2]. The formula below answers that question for every permitted input. In fact it holds over every commutative ring $R$ with identity, with arbitrary $N\geq0$ and $k\geq0$, if $S_j(C)=0$ for $j>n$.

Throughout, $M=\sum_{i=1}^N A_i$. If $N=0$, $M=0$. A zero matrix and an empty product are distinct notions: an empty scalar product equals one. These conventions handle $k=N=0$.

## 2. The right indexing objects: primitive cyclic words

A nonempty word is a finite ordered string $w=i_1\cdots i_d$ with letters in $[N]$. Its length is $|w|=d$ and its matrix value is

$$
A_w=A_{i_1}A_{i_2}\cdots A_{i_d}.
$$

The word is **primitive** if it is not $v^r$ for a shorter word $v$ and integer $r\geq2$. This is a property of the string, unrelated to any matrix-theoretic use of the word primitive.

Identify words that differ by a cyclic rotation. For each $d\geq1$, let $\mathcal P_d$ contain exactly one representative of each primitive rotation class of length $d$. Taking the lexicographically least rotation makes this choice explicit. Let $\mathcal P=\bigcup_{d\geq1}\mathcal P_d$.

For two letters, denoted $A,B$, the representatives through length four are:

| Length | Primitive cyclic representatives |
| --- | --- |
| 1 | $A,B$ |
| 2 | $AB$ |
| 3 | $AAB,ABB$ |
| 4 | $AAAB,AABB,ABBB$ |

Neither $AA$ nor $ABAB$ is primitive. Retaining both $AB$ and $BA$ would count the same cyclic class twice. By contrast $ABC$ and $ACB$ are generally different cyclic classes; arbitrary rearrangement of letters is not allowed.

### Why cyclic invariants are well defined even for singular factors

For arbitrary square matrices $U,V$ over a commutative ring,

$$
\det(I-zUV)=\det(I-zVU).
$$

To see this without inverses of $U$ or $V$, compute the determinant of the block matrix $\begin{pmatrix}I&zU\\ V&I\end{pmatrix}$ by eliminating either identity block. The two unit triangular eliminations give the two displayed determinants. It follows that $S_j(UV)=S_j(VU)$ for every $j$. Splitting a word into a first block and its remaining block proves that every $S_j(A_w)$ is invariant under cyclic rotation. No diagonalizability, eigenvalue selection, or invertibility assumption is needed.

## 3. The complete formula using elementary symmetric functions of words

**Theorem 1 (classical word formula, explicit finite form).** For every $k\geq0$,

$$
\boxed{
S_k(M)=
\sum_{\substack{0\leq j_w\leq n\ (w\in\mathcal P,\ |w|\leq k)\\
\sum_w |w|j_w=k}}
(-1)^{k+\sum_wj_w}\prod_w S_{j_w}(A_w).
}
$$

Only finitely many words occur: $|w|\leq k$, with $j_w\leq\lfloor k/|w|\rfloor$. Factors with $j_w=0$ equal one. A primitive class appears once; multiplicity $j$ of that class contributes the single invariant $S_j(A_w)$, not the power $\operatorname{tr}(A_w)^j$.

Every summand is an integer-coefficient product of elementary symmetric functions of ordered matrix words. There are no denominators. Signs remain meaningful in all characteristics, including characteristic two where $-1=1$.

The condition $\sum_w|w|j_w=k$ shows that every term has total degree $k$ in the matrix entries: $S_j(A_w)$ has degree $|w|j$. This is also a useful implementation check.

## 4. Organization by ordinary integer partitions

Write an integer partition of $k$ as $\lambda=(1^{m_1}2^{m_2}\cdots k^{m_k})$, so $\sum_d d m_d=k$ and $\ell(\lambda)=\sum_d m_d$. For each length $d$, define

$$
H_{d,r}=
\sum_{\substack{(j_w)_{w\in\mathcal P_d}\in\{0,\ldots,n\}^{\mathcal P_d}\\
\sum_{w\in\mathcal P_d}j_w=r}}
\prod_{w\in\mathcal P_d}S_{j_w}(A_w),\qquad H_{d,0}=1.
$$

If $\mathcal P_d$ is empty, $H_{d,r}=0$ for $r>0$. These are explicitly defined finite polynomials in invariants of the individual words. Equivalently, they can be read from

$$
\sum_{r\geq0}H_{d,r}u^r
=\prod_{w\in\mathcal P_d}\left(\sum_{j=0}^n S_j(A_w)u^j\right).
$$

**Theorem 2 (requested partition expression).**

$$
\boxed{
S_k(A_1+\cdots+A_N)
=\sum_{\lambda\vdash k}(-1)^{k+\ell(\lambda)}
\prod_{d=1}^k H_{d,m_d(\lambda)}.
}
$$

For $k=0$, the unique empty partition contributes one. For $k>0$, Theorem 2 is exactly Theorem 1 regrouped by $m_d=\sum_{|w|=d}j_w$. This grouping is exhaustive and disjoint, and the sign becomes $(-1)^{k+\sum_d m_d}$. No extra multinomial factor is present: assigning $j_w$ to each distinct word class already counts each choice once.

There is a convenient alternative notation: if $B_d$ is the block diagonal matrix whose blocks are the $A_w$ for $w\in\mathcal P_d$, then $H_{d,r}=S_r(B_d)$. This is only shorthand; the finite expansion above ensures that the answer is expressed in elementary symmetric functions of words, as requested, rather than hiding a new matrix-sum problem inside the notation.

## 5. A self-contained proof of the determinant product

The core formal identity is

$$
\boxed{
\det(I-zM)
=\prod_{w\in\mathcal P}\det(I-z^{|w|}A_w).
}\tag{D}
$$

The infinite product is interpreted as a formal power series. For a fixed coefficient $z^k$, factors with $|w|>k$ contribute only their constant term one, so that coefficient uses finitely many factors. This is not an assertion of analytic convergence for numerical $z$.

### 5.1 Establish the identity in characteristic zero

Initially take generic matrices over $\mathbb Q[\mathbf a]$, where $\mathbf a$ denotes their commuting entry variables. For a fixed matrix $C$, formal differentiation of the determinant gives

$$
\frac{d}{dz}\log\det(I-zC)
=-\operatorname{tr}\bigl(C(I-zC)^{-1}\bigr)
=-\sum_{r\geq1}\operatorname{tr}(C^r)z^{r-1}.
$$

The inverse is the formal geometric series. Both logarithms have zero constant term; integrating coefficientwise gives

$$
\log\det(I-zC)=-\sum_{r\geq1}\frac{\operatorname{tr}(C^r)}r z^r.
\tag{L}
$$

Expand $M^r$ as the sum of all ordered words of length $r$. For completeness, the cyclic rotations fixing a given string form a subgroup of $\mathbb Z/r\mathbb Z$. Its generator corresponds to a divisor $d$ of $r$; the string repeats its length-$d$ prefix, and that prefix is primitive by minimality. This gives its unique primitive cyclic root and exactly $d$ distinct rotations. For a primitive cyclic class represented by $w$ of length $d\mid r$, the corresponding length-$r$ words are thus precisely the $d$ distinct rotations of $w^{r/d}$. The count is $d$, not $r$: repeating the primitive root does not create additional distinct rotations. Their matrix traces all equal $\operatorname{tr}(A_w^{r/d})$ by cyclic invariance. Hence

$$
\operatorname{tr}(M^r)
=\sum_{d\mid r}d\sum_{w\in\mathcal P_d}
\operatorname{tr}(A_w^{r/d}).
\tag{W}
$$

Substitute (W) into (L), put $r=ds$, and rearrange coefficientwise finite sums:

$$
\begin{aligned}
\log\det(I-zM)
&=-\sum_{d\geq1}\sum_{w\in\mathcal P_d}\sum_{s\geq1}
\frac{\operatorname{tr}(A_w^s)}s z^{ds}\\
&=\sum_{w\in\mathcal P}\log\det(I-z^{|w|}A_w).
\end{aligned}
$$

Formal exponentiation proves (D) over $\mathbb Q[\mathbf a]$.

### 5.2 Descend to every commutative coefficient ring

For a fixed degree, each side of (D) is a polynomial with **integer** coefficients in the generic matrix entries. The injection $\mathbb Z[\mathbf a]\hookrightarrow\mathbb Q[\mathbf a]$ implies equality of those integer polynomials. Specializing the entries through any ring homomorphism $\mathbb Z[\mathbf a]\to R$ proves the identity over an arbitrary commutative ring $R$, including rings with zero divisors.

This argument does not take logarithms or divide by $r$ in a positive-characteristic target ring. Those operations occur only in the rational generic proof; the conclusion is an integral polynomial identity. That distinction is essential.

### 5.3 Extract the coefficient and check the sign

Expand each factor as

$$
\det(I-z^dA_w)=\sum_{j=0}^n(-1)^jS_j(A_w)z^{dj}.
$$

The coefficient of $z^k$ on the left is $(-1)^kS_k(M)$. On the right it is the sum of $(-1)^{\sum j_w}\prod S_{j_w}(A_w)$ over weighted degree $k$. Multiplying by $(-1)^k$ gives Theorem 1. Section 4 then gives Theorem 2. This completes a proof of the entire requested formula.

## 6. Low-degree formulas and the role of proper powers

The partitions of $1,2,3,4$ give compact formulas valid for every number of summands:

$$
\begin{aligned}
S_1(M)&=H_{1,1},\\
S_2(M)&=H_{1,2}-H_{2,1},\\
S_3(M)&=H_{1,3}-H_{1,1}H_{2,1}+H_{3,1},\\
S_4(M)&=H_{1,4}-H_{1,2}H_{2,1}+H_{2,2}
+H_{1,1}H_{3,1}-H_{4,1}.
\end{aligned}
$$

For two matrices, put $a_j=S_j(A)$, $b_j=S_j(B)$, and

$$
c=\operatorname{tr}(AB),\qquad
d=\operatorname{tr}(A^2B)+\operatorname{tr}(AB^2),
$$

$$
f=\operatorname{tr}(A^3B)+\operatorname{tr}(A^2B^2)+\operatorname{tr}(AB^3).
$$

The explicit identities are

$$
\begin{aligned}
S_2(A+B)&=a_2+b_2+a_1b_1-c,\\
S_3(A+B)&=a_3+b_3+a_2b_1+a_1b_2-(a_1+b_1)c+d,\\
S_4(A+B)&=a_4+b_4+a_3b_1+a_2b_2+a_1b_3\\
&\quad-(a_2+b_2+a_1b_1)c+S_2(AB)+(a_1+b_1)d-f.
\end{aligned}
$$

For example, $H_{2,2}=S_2(AB)$ because there is only one primitive binary cyclic class of length two. Thus $ABAB$ is represented through exterior degree two of the primitive word $AB$. Treating $ABAB$ as another primitive factor would introduce an erroneous additional term. This is why powers and multiplicities must be distinguished.

## 7. Correcting equation (11) of the cited preprint

In **arXiv:math/0612464v5**, dated 17 September 2009, equation (11) on printed page 4 gives an expression for $S_3(A_1+A_2+A_3)$. As displayed in that specific version, it omits

$$
\boxed{+\operatorname{tr}(A_1)\operatorname{tr}(A_2)\operatorname{tr}(A_3).}
$$

A complete disproof of that displayed equation is obtained by taking $A_i=E_{ii}\in M_3(\mathbb Z)$, where $E_{ii}$ has a one at position $(i,i)$ and zeros elsewhere. Then $A_1+A_2+A_3=I_3$, so its left side is $S_3(I_3)=1$. Each $S_2(A_i)$ and $S_3(A_i)$ is zero, and every mixed product appearing in that equation is zero. Its displayed right side is therefore zero. The omitted trace product is one.

Here is the fully corrected expression, written symmetrically. Set $a_i=\operatorname{tr}(A_i)$. Then

$$
\begin{aligned}
S_3(A_1+A_2+A_3)
&=\sum_{i=1}^3S_3(A_i)
+\sum_{i\ne j}S_2(A_i)a_j+a_1a_2a_3\\
&\quad-(a_1+a_2+a_3)\sum_{i<j}\operatorname{tr}(A_iA_j)\\
&\quad+\sum_{i<j}\left[\operatorname{tr}(A_i^2A_j)+\operatorname{tr}(A_iA_j^2)\right]\\
&\quad+\operatorname{tr}(A_1A_2A_3)+\operatorname{tr}(A_1A_3A_2).
\end{aligned}
$$

This follows immediately from the degree-three formula in Section 6: the missing term is the contribution of the partition $1+1+1$ with three distinct length-one classes. The remaining terms agree with the displayed source expression. The verification program checks the corrected equality on exact matrix triples as well as the explicit witness. This correction concerns the specified arXiv version; it does not presume an audit of every later version or the journal typesetting.

## 8. Why the mixed ordered words cannot be discarded

Consider $A=E_{12}$ and $B=E_{21}$ in $M_2(\mathbb Z)$. Both matrices are nilpotent, so all their positive-degree elementary symmetric functions vanish. Yet

$$
A+B=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
S_2(A+B)=-1.
$$

Replacing $B$ by zero leaves all the individual invariants $S_j(A),S_j(B)$ unchanged, but changes $S_2(A+B)$ to zero. Therefore the individual characteristic polynomials of the summands cannot determine the answer. Here $\operatorname{tr}(AB)=1$ supplies exactly the missing mixed information.

Even the order of distinct mixed letters matters. In $M_2(\mathbb Z)$, take $A=E_{11}$, $B=E_{12}$, $C=E_{21}$. Then $\operatorname{tr}(ABC)=1$ while $\operatorname{tr}(ACB)=0$. Thus $ABC$ and $ACB$ cannot be merged. Cyclic rotations are legitimate; arbitrary permutations are not.

## 9. Comparison with the Newton trace partition formula

If the coefficient ring is a $\mathbb Q$-algebra, define

$$
p_d=\operatorname{tr}(M^d)
=\sum_{i_1,\ldots,i_d=1}^N\operatorname{tr}(A_{i_1}\cdots A_{i_d}),
\qquad
z_\lambda=\prod_d d^{m_d(\lambda)}m_d(\lambda)!.
$$

Expanding the exponential in the formal logarithm identity also gives the familiar partition formula

$$
S_k(M)=\sum_{\lambda\vdash k}
\frac{(-1)^{k-\ell(\lambda)}}{z_\lambda}
\prod_d p_d^{m_d(\lambda)}.
$$

Indeed, $\det(I+tM)=\exp(\sum_{d\geq1}(-1)^{d-1}p_dt^d/d)$; selecting $m_d$ terms from each exponential contributes $1/(d^{m_d}m_d!)$. This proves the formula directly. It is valid over a field of characteristic greater than $k$ as well, because all denominators used at degree $k$ are then invertible.

It cannot simply be evaluated when those denominators vanish. The issue is stronger than notation: in characteristic two, $I_2$ and $0_2$ have identical traces of every positive power, all zero, but their determinants are one and zero. Hence all power traces do not determine $S_2$ in that characteristic. The word-elementary formula retains the information that trace-only expressions lose and avoids dividing in the target ring.

## 10. Mixed coefficients and a multivariable refinement

Introduce commuting scalar variables $x_1,\ldots,x_N$. For a word $w$, let $\nu_i(w)$ count occurrences of letter $i$ and put $x^{\nu(w)}=\prod_i x_i^{\nu_i(w)}$. Substituting $x_iA_i$ into (D) gives

$$
\det\left(I-\sum_i x_iA_i\right)
=\prod_{w\in\mathcal P}\det\left(I-x^{\nu(w)}A_w\right).
$$

This is a formal identity graded by total degree. Consequently the coefficient of $x^\alpha$ in $\det(I+\sum_i x_iA_i)$ is

$$
\sum_{\substack{(j_w)\geq0\\\sum_wj_w\nu(w)=\alpha}}
(-1)^{|\alpha|+\sum_wj_w}\prod_w S_{j_w}(A_w).
$$

For $\alpha=(1,1,1)$ the coefficient is

$$
a_1a_2a_3-a_1\operatorname{tr}(A_2A_3)
-a_2\operatorname{tr}(A_1A_3)-a_3\operatorname{tr}(A_1A_2)
+\operatorname{tr}(A_1A_2A_3)+\operatorname{tr}(A_1A_3A_2).
$$

This isolates the three-letter contribution responsible for the correction above. The refinement records exactly how often each summand is used rather than only the total degree; it is another direct specialization of the classical identity, not a separate novelty claim.

## 11. Finite implementation, costs, and boundary checks

To calculate through degree $K$:

1. Enumerate primitive words of lengths at most $K$ and retain one least cyclic rotation each.
2. Compute each ordered product $A_w$ and its elementary symmetric functions through $\min(n,\lfloor K/|w|\rfloor)$.
3. Either multiply the factors $\sum_j(-1)^jS_j(A_w)z^{j|w|}$ modulo $z^{K+1}$, or form the $H_{d,r}$ and sum over integer partitions.
4. Compare with principal-minor coefficients of $M$ using exact arithmetic.

The reference implementation deliberately uses transparent enumeration. It is a structural expansion, not a claim of faster characteristic-polynomial computation. The number of primitive length-$d$ classes is

$$
L_d=\frac1d\sum_{e\mid d}\mu(e)N^{d/e},
$$

where $\mu$ is the Möbius function. To derive the count, partition all $N^r$ length-$r$ strings by their primitive root class: $N^r=\sum_{d\mid r}dL_d$. Möbius inversion gives the formula. The program independently checks its necklace enumeration against these counts.

For $N\geq1$, there are exactly $N^k$ multiplicity assignments in Theorem 1 before evaluating or combining terms when $k\leq n$. One elementary derivation uses the scalar generating product $T(z)=\prod_d(1-z^d)^{-L_d}$. Its logarithm has coefficient $(\sum_{d\mid r}dL_d)/r=N^r/r$, so $T(z)=(1-Nz)^{-1}$. The coefficient counts the weighted assignments. For $N=k=0$, there is one empty assignment. This explains why a closed expression need not be a polynomial-size expansion.

The boundary cases are explicit:

- $k=0$: the all-zero multiplicity assignment gives one.
- $N=0,k>0$: there is no positive-degree assignment, giving zero.
- $N=1$: the sole primitive class is the one-letter word, so the formula reduces to $S_k(A_1)$.
- $k>n$: the formula remains valid and its terms cancel to zero; these are consistency identities, not extra coefficients of a larger characteristic polynomial.
- Singular, zero, repeated, commuting and noncommuting summands all satisfy the same formula.
- Small positive characteristic and zero divisors require no special case in the division-free formula.

## 12. Verification and remaining scope

The accompanying `verify.py` uses exact arithmetic and compares direct principal minors, the truncated determinant product, and the integer-partition regrouping. All three methods agreed in the executed run: **513 cases, with 3,519 coefficients compared per method**.

| Test family | Cases | Coefficients per method |
| --- | ---: | ---: |
| Every pair of binary $2\times2$ matrices | 256 | 1,792 |
| Seeded integer matrices, dimensions through five, up to three summands | 60 | 420 |
| Empty alphabet, one summand, zero degree and empty matrix boundaries | 24 | 96 |
| Quotient rings modulo $2,3,5,4,6,8$ | 144 | 1,008 |
| The extension field $\mathbb F_4=\mathbb F_2[x]/(x^2+x+1)$ | 27 | 189 |
| Explicit mixed-word and word-order witnesses | 2 | 14 |
| Total | 513 | 3,519 |

The binary suite alone checked 1,024 coefficients beyond the matrix dimension, where cancellation must give zero. Supplementary checks compared 120 determinants by independent Bareiss and permutation formulas, checked 24 primitive-necklace counts and 75 cyclic rotations with singular factors, evaluated 40 generated formal expansions, and verified the corrected source equation on 120 seeded triples. The source-equation witness returned displayed right side zero, actual value one, missing term one. The main seed is 3027; the formal-expansion evaluation seed is 12345. Full configuration, formal terms and exact results are in `verification_results.json`.

These finite checks supplement the proofs and detect implementation errors; they do not establish the unrestricted identities by themselves. Integer determinants are computed before reducing modulo composite moduli, and extension-field determinants use a division-free permutation expansion. Thus these tests do not assume that division is available in rings with zero divisors.

Two separate same-model research agents independently checked the primitive-word indexing, signs, cyclic invariance, generic integral descent, and source equation. A third same-model agent implemented and ran the verification. This is model-assisted review; no independent human proof verification or formal proof-assistant certification is asserted.

The complete formula request is answered. We do not claim an optimal minimal expression, an algorithmic speedup, or a new general invariant-theory result. The source correction is confined to equation (11) of arXiv version 5. The general identity was established before the source question was posted, so the appropriate contribution classification is **Literature report**, with a complete mathematical resolution and a verifiable source correction.

## References and inspection scope

1. R. S. Costas-Santos (`rscosa`), **Elementary symmetric of a sum of matrices**, Open Problem Garden, posted 8 December 2008. [Original problem](https://www.openproblemgarden.org/op/elementary_symmetric_of_a_sum_of_matrices). Exact range and partition request inspected.
2. R. S. Costas-Santos, **On the elementary symmetric functions of a sum of matrices**, [arXiv:math/0612464v5](https://arxiv.org/pdf/math/0612464v5), 17 September 2009. Sections 3–5 inspected, especially equation (11) on printed page 4 and the word/partition request on printed pages 7–8. The catalogue cites the journal appearance in Journal of Algebra, Number Theory: Advances and Applications 1 (2009), 99–112; the correction here is about the inspected arXiv version.
3. Christophe Reutenauer and Marcel-Paul Schützenberger, **A Formula for the Determinant of a Sum of Matrices**, Letters in Mathematical Physics 13 (1987), 299–302, DOI [10.1007/BF00401158](https://doi.org/10.1007/BF00401158). [Author-hosted full paper](https://reutenauer.math.uqam.ca/wp-content/uploads/2024/04/Determinant-of-a-sum.pdf). The theorem, cyclic-word definitions, determinant product proof and added-in-proof attribution inspected. The note credits S. A. Amitsur, **On the characteristic polynomial of a sum of matrices**, Linear and Multilinear Algebra 8 (1980), 177–182; that original 1980 full text was not inspected and is credited through the inspected 1987 paper.
4. **We-Solve / UnsolvedMath prb_b8fd80d827ea4ad186a62c524b01a848**, also displayed as Math-3280, catalogue entry. [Statement](https://github.com/We-Solve/research/blob/main/problems/b8/prb_b8fd80d827ea4ad186a62c524b01a848/statement.tex), [research prompt](https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/prb_b8fd80d827ea4ad186a62c524b01a848.txt). Exact statement and prompt inspected; prompt listed no previous contributions. Credit: Ulam AI, the UnsolvedMath contributors and We-Solve; catalogue material under CC BY 4.0.

## Provenance and licences

Requested and submitted for Gaven (`@gavenren`), whose role was prompting and authorizing submission. Research, exposition, mathematical review, source inspection and verification software were produced by OpenAI Codex (GPT-6; exact serving revision and reasoning setting unknown), including separate same-model agents. No human mathematical authorship or independent human checking is asserted.

Original exposition and results files: CC BY 4.0. Original software: Apache-2.0. Classical results and source material retain the attribution above. Referenced papers are linked, not redistributed.


## Reproducible reference software

Save as `verify.py` and run `python3 verify.py` with Python 3.10 or later, assertions enabled. No third-party dependencies. The program regenerates the full JSON results and formal expansions. Source: Apache-2.0.

<details>
<summary>verify.py — complete exact implementation and verification</summary>

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/6) for this material.

</details>



## Attribution and references from the original submission

### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6; exact serving model revision unknown)

### LLM versions, settings and roles

OpenAI Codex (GPT-6) | version: unknown | reasoning: unknown | role: primary research, source checks, mathematical exposition and submission; two separate same-model agents independently investigated and audited the formula and source correction; a third same-model agent implemented and executed exact verification. All agents used the inherited model; no other model was knowingly used.

### People and roles

Gaven (@gavenren): requested another deeply investigated problem and authorized submission. No human mathematical authorship, mathematical edits or independent human proof checking is asserted.

### References

1. R. S. Costas-Santos, Elementary symmetric of a sum of matrices, Open Problem Garden (8 December 2008): https://www.openproblemgarden.org/op/elementary_symmetric_of_a_sum_of_matrices . Exact question and range inspected.
2. R. S. Costas-Santos, On the elementary symmetric functions of a sum of matrices, arXiv:math/0612464v5 (17 September 2009): https://arxiv.org/pdf/math/0612464v5 . Sections 3–5 inspected, especially Eq. (11), printed p.4, and the general request, pp.7–8. Correction is specifically to this version.
3. C. Reutenauer and M.-P. Schützenberger, A Formula for the Determinant of a Sum of Matrices, Letters in Mathematical Physics 13 (1987), 299–302, DOI 10.1007/BF00401158: https://reutenauer.math.uqam.ca/wp-content/uploads/2024/04/Determinant-of-a-sum.pdf . Full theorem, proof and added-in-proof note inspected. Its note credits S.A. Amitsur, Linear and Multilinear Algebra 8 (1980), 177–182; original 1980 full text not inspected and credited through this checked source.
4. We-Solve / UnsolvedMath prb_b8fd80d827ea4ad186a62c524b01a848, Math-3280, catalogue entry: https://github.com/We-Solve/research/blob/main/problems/b8/prb_b8fd80d827ea4ad186a62c524b01a848/statement.tex and https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/prb_b8fd80d827ea4ad186a62c524b01a848.txt . Exact statement and prompt inspected; prompt listed no earlier contributions. Catalogue credit: Ulam AI, UnsolvedMath contributors and We-Solve, CC BY 4.0.

