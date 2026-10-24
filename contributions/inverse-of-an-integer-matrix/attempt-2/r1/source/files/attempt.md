> Source: [original issue #5](https://github.com/We-Solve/research/issues/5). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


# Integer right inverses of a diagonal block augmented by arbitrary columns

**Complete solution of We-Solve Math-3291 / prb_b51a5f11716a459db4afee0981061c8e (catalogue entry).**

**Scope and attribution.** This note answers the entire stated matrix question, including the proposed rowwise criterion, for every permitted input. It is a self-contained application of classical integer linear algebra, not a claim to a previously unknown theorem. The general maximal-minor criterion already appears explicitly in the introduction and Lemma 2 of Maze–Rosenthal–Wagner [3]. Smith normal form provides another standard formulation [4]. The contribution supplies complete elementary proofs, a criterion specialized to the diagonal block, constructive certificates, examples, and several proved consequences. Original question: Steven A. Gregory [1]; catalogue transcription: Ulam AI, the UnsolvedMath contributors, and We-Solve [2].

## 1. The question and the answer

Let $m,n\geq1$, $m\leq n$, and let

$$
D=\operatorname{diag}(d_1,\ldots,d_m),\qquad d_i\in\mathbb Z,\quad d_i\geq2,
$$

$$
X\in\mathbb Z^{m\times n},\qquad M=[D\ X],\qquad N=m+n.
$$

We seek an integer matrix $Y\in\mathbb Z^{N\times m}$ such that $MY=I_m$. Since the columns of $D$ are independent over $\mathbb Q$, rational right inverses always exist. Integer right inverses need not.

For a prime $p$ define

$$
I_p=\{i\in\{1,\ldots,m\}:p\mid d_i\},\qquad r_p=|I_p|,
$$

and put $q=\operatorname{lcm}(d_1,\ldots,d_m)$. All ranks below are over the indicated prime field. A submatrix with no rows has rank zero.

**Theorem 1 (complete criterion).** An integer right inverse exists if and only if

$$
\boxed{\operatorname{rank}_{\mathbb F_p}X[I_p,:]=r_p
\quad\text{for every prime }p\mid q.}
$$

Equivalently, the gcd of all $m\times m$ minors of $M$ is one; equivalently, every nonzero Smith invariant of $M$ is one. There is no additional test at $p^2,p^3,\ldots$.

The proposed necessary condition

$$
\gcd(d_i,X_{i1},\ldots,X_{in})=1\quad(1\leq i\leq m)
$$

is **not sufficient**. It checks each active row separately modulo $p$; Theorem 1 checks whether all active rows are jointly independent. Section 5 gives a two-row counterexample even with $X$ nonsingular over $\mathbb Q$.

## 2. The exact obstruction is a finite quotient

Write any candidate inverse in blocks as $Y=\binom AB$, where $A$ is $m\times m$ and $B$ is $n\times m$. Then

$$
MY=I_m\quad\Longleftrightarrow\quad DA+XB=I_m.
$$

Thus we need $XB$ to agree with the identity after row $i$ is reduced modulo $d_i$. Define

$$
G=\bigoplus_{i=1}^m\mathbb Z/d_i\mathbb Z,
\qquad
\phi:\mathbb Z^n\longrightarrow G,
\quad b\longmapsto ((Xb)_i\bmod d_i)_{i=1}^m.
$$

An inverse exists exactly when $\phi$ is onto. Indeed, an inverse supplies preimages of every coordinate generator via the columns of $B$. Conversely, if $\phi$ is onto, choose such preimages as the columns of $B$ and define

$$
A_{ij}=\frac{\delta_{ij}-(XB)_{ij}}{d_i}.
$$

Every entry is an integer and $DA+XB=I_m$.

The same obstruction can be written as the finite group

$$
C=\mathbb Z^m/M\mathbb Z^N
\cong G/\phi(\mathbb Z^n).
$$

The problem asks whether $C=0$. The diagonal block guarantees finiteness: its columns already generate a subgroup of index $\prod_i d_i$. This explains both why rational rank alone is insufficient and why only primes dividing the diagonal entries can obstruct an integer inverse.

## 3. An elementary global criterion, with an explicit inverse

For each $m$-element column set $S\subseteq\{1,\ldots,N\}$, in increasing order, let $E_S$ be the $N\times m$ matrix inserting coordinates into those positions. Put

$$
M_S=ME_S,\qquad \delta_S=\det M_S,
\qquad \Delta=\gcd_S|\delta_S|.
$$

The diagonal columns give $\det D>0$, so $\Delta>0$ and $\Delta\mid\det D$.

**Proposition 2.** An integer right inverse exists exactly when $\Delta=1$.

**Necessity.** If $MY=I_m$, Cauchy–Binet gives

$$
1=\det(MY)=\sum_{|S|=m}\det(M_S)\det(Y[S,:]).
$$

This is an integer linear combination of the maximal minors, so their gcd is one.

**Sufficiency and construction.** If $\Delta=1$, repeated extended Euclidean algorithms give integers $a_S$ satisfying

$$
\sum_S a_S\delta_S=1.
$$

Define

$$
\boxed{Y_0=\sum_S a_SE_S\operatorname{adj}(M_S).}
$$

The adjugate identity, valid even for singular square matrices, yields

$$
MY_0=\sum_S a_SM_S\operatorname{adj}(M_S)
=\sum_S a_S\delta_S I_m=I_m.
$$

This proves the criterion and produces a verifiable positive certificate without assuming Smith normal form. For $m=1$, use $\operatorname{adj}([a])=[1]$, including $a=0$; the construction becomes ordinary Bézout's identity. For large matrices, listing all $\binom Nm$ minors can be expensive; this proof is not a polynomial-time implementation claim.

## 4. Deriving the specialized prime criterion

For any prime $p$,

$$
p\mid\Delta
\quad\Longleftrightarrow\quad
\text{all maximal minors vanish modulo }p
\quad\Longleftrightarrow\quad
\operatorname{rank}_{\mathbb F_p}M<m.
$$

If $p\nmid q$, every diagonal entry is invertible modulo $p$, so $D$ alone has full rank. Such primes never matter.

Now take $p\mid q$. The diagonal columns indexed by $i\notin I_p$ span exactly the coordinate subspace generated by those $e_i$. Its dimension is $m-r_p$. Quotienting by this subspace removes those rows and leaves the columns of $X[I_p,:]$. Consequently,

$$
\boxed{\operatorname{rank}_{\mathbb F_p}M
=m-r_p+\operatorname{rank}_{\mathbb F_p}X[I_p,:].}
$$

Thus $p$ divides $\Delta$ exactly when the active rows of $X$ fail to have full row rank. Since $\Delta$ divides $\det D$, it equals one exactly when every relevant prime test succeeds. This proves Theorem 1 in both directions, without making an unproved passage from prime moduli to prime powers.

There is also an explicit diagonal-block formula for the global gcd:

$$
\boxed{
\Delta=\gcd_{\substack{I\subseteq[m],\ J\subseteq[n]\\|J|=|I|}}
\left|\left(\prod_{i\notin I}d_i\right)\det X[I,J]\right|.}
$$

Here $\det X[\varnothing,\varnothing]=1$. To prove it, choose the $m-|I|$ diagonal columns indexed by $[m]\setminus I$ and the $|I|$ columns of $X$ indexed by $J$. Expanding along the selected diagonal columns gives the displayed product, up to sign. Every maximal minor arises in exactly this way. The empty choice contributes $\det D$.

## 5. Counterexamples and worked positive examples

### 5.1 Rowwise coprimality fails in the smallest possible row dimension

Take

$$
D=\begin{pmatrix}2&0\\0&2\end{pmatrix},\qquad
X=\begin{pmatrix}1&1\\1&-1\end{pmatrix},\qquad
M=\begin{pmatrix}2&0&1&1\\0&2&1&-1\end{pmatrix}.
$$

Both row gcds are one. Moreover $\det X=-2\neq0$, so even requiring $X$ to have full rational rank would not repair the proposed condition. Modulo two, the two active rows both equal $(1,1)$, giving rank one instead of two.

A direct obstruction needs no theorem: for every integer column $z$, the two coordinates of $Mz$ have the same parity. Therefore $Mz=e_1$ is impossible. Equivalently,

$$
(1,-1)M=(2,-2,0,2)\equiv0\pmod2,
$$

whereas $(1,-1)e_1=1$.

In column order $12,13,14,23,24,34$, the six maximal minors are

$$
4,\ 2,\ -2,\ -2,\ -2,\ -2,
$$

whose gcd is two. The example with every entry of $X$ equal to one also fails. Failure cannot occur at $m=1$, because the rowwise condition is then precisely Bézout's criterion. Thus two is the smallest row dimension in the original domain $m\leq n$.

### 5.2 A unit maximal minor is not necessary

Take

$$
D=\operatorname{diag}(2,3),\quad
X=\begin{pmatrix}1&1\\1&1\end{pmatrix},\quad
M=\begin{pmatrix}2&0&1&1\\0&3&1&1\end{pmatrix}.
$$

The maximal minors are $6,2,2,-3,-3,0$. None equals $1$ or $-1$, but their gcd is one. A particularly small inverse is

$$
Y=\begin{pmatrix}-1&1\\-1&1\\3&-2\\0&0\end{pmatrix},
\qquad
MY=\begin{pmatrix}1&0\\0&1\end{pmatrix}.
$$

For example, the first column works because $2(-1)+3=1$ and $3(-1)+3=0$. The second works because $2(1)-2=0$ and $3(1)-2=1$.

This example separates three notions: full rational rank, existence of one unit minor, and gcd one across all maximal minors. The last is the exact criterion. Neither nonsingularity nor singularity of the block $X$ decides the problem by itself.

### 5.3 Checking only the two block determinants can miss success

Let $D=\operatorname{diag}(2,3)$ and $X=\operatorname{diag}(3,2)$. Both determinants equal six. Nevertheless,

$$
Y=\begin{pmatrix}-1&0\\0&1\\1&0\\0&-1\end{pmatrix}
$$

is a right inverse: the two scalar identities are $-2+3=1$ and $3-2=1$. The mixed minors supply the information absent from $\det D$ and $\det X$ alone.

## 6. Exactly when the proposed condition becomes sufficient

**Theorem 3.** For fixed $D$ and fixed $n\geq m$, the rowwise gcd condition is sufficient for every integer $m\times n$ matrix $X$ if and only if the diagonal entries $d_1,\ldots,d_m$ are pairwise coprime.

**Proof.** If they are pairwise coprime, every $I_p$ has at most one element. The required rank condition says exactly that its single row of $X$ is not zero modulo $p$. Requiring this for every prime divisor of $d_i$ is equivalent to $\gcd(d_i,X_{i1},\ldots,X_{in})=1$.

Conversely, suppose a prime divides two diagonal entries. Choose every entry of $X$ equal to one. All row gcds are one, but the active rows at that prime are identical. Their rank is one while there are at least two of them. Theorem 1 rules out an inverse. This constructs a counterexample for every non-pairwise-coprime diagonal, not merely one particular choice. $\square$

For a given non-pairwise-coprime $D$, some individual matrices $X$ still pass Theorem 1. The theorem classifies when the weaker rowwise test works **uniformly for all $X$**; it does not assert that every such $X$ fails when diagonal entries share a prime.

## 7. Constructing inverses directly through prime powers and CRT

The following alternative avoids enumerating all maximal minors. It assumes a factorization of $q$ is available; factorization is not being assumed to cost polynomial time.

For each prime power $p^a\Vert q$, enumerate $I=I_p$ in increasing order and put $r=|I|$. Let $R_I$ be the $r\times m$ row-selection matrix. The local criterion gives $r$ column indices $J$ such that

$$
C_p=X[I,J]\in\mathbb Z^{r\times r},\qquad p\nmid\det C_p.
$$

Choose an integer $t_p$ with $t_p\det C_p\equiv1\pmod{p^a}$ using the extended Euclidean algorithm. Let $F_J$ be the $n\times r$ coordinate-insertion matrix and define

$$
B_p=F_J\,t_p\operatorname{adj}(C_p)R_I\pmod{p^a}.
$$

Then

$$
X[I,:]B_p\equiv R_I\pmod{p^a}.
$$

Apply the Chinese remainder theorem to every entry of the matrices $B_p$, obtaining $B\in\mathbb Z^{n\times m}$, with representatives $0\leq B_{ij}<q$. For a fixed row $i$ and every $p\mid d_i$, the construction enforces that row of $XB-I_m$ to vanish modulo $p^a$, where $a=v_p(q)\geq v_p(d_i)$. Consequently it vanishes modulo $d_i$. Therefore

$$
A=D^{-1}(I_m-XB)\in\mathbb Z^{m\times m},\qquad
Y=\binom AB
$$

is an integer right inverse.

This is an explicit proof that passing rank tests over prime fields suffices even when diagonal entries have large prime-power factors. It does not replace field rank by a potentially misleading notion of rank over a composite ring. Different primes may use different sets $J$ of pivot columns.

The construction also bounds certificate size. With $0\leq B_{ij}<q$,

$$
|A_{ij}|\leq
\frac{\delta_{ij}+(q-1)\sum_{\ell=1}^n|X_{i\ell}|}{d_i}.
$$

Since $\log q\leq\sum_i\log d_i$, successful inputs have inverses with a number of bits polynomial in the input length. This size observation does not eliminate the factorization cost of this particular construction.

## 8. Algorithms and short certificates

### 8.1 A deterministic method without factoring

Compute unimodular integer matrices $U\in\mathrm{GL}_m(\mathbb Z)$, $V\in\mathrm{GL}_N(\mathbb Z)$ and positive integers $s_1\mid\cdots\mid s_m$ with

$$
UMV=[S\ 0],\qquad S=\operatorname{diag}(s_1,\ldots,s_m).
$$

Smith normal form exists over $\mathbb Z$ [4]. It gives

$$
C\cong\bigoplus_{i=1}^m\mathbb Z/s_i\mathbb Z,
\qquad \Delta=\prod_i s_i.
$$

Success means $S=I_m$, and an inverse is

$$
\boxed{Y_0=V\binom{I_m}{0_{n\times m}}U.}
$$

Kannan–Bachem [5] provide polynomial algorithms controlling both operation counts and intermediate binary lengths, with multiplier matrices. Their publisher abstract was checked for that guarantee. Applying an appropriate normal-form algorithm gives a deterministic polynomial-time decision and construction route without integer factorization. We do not claim that every naive sequence of Smith reductions has this complexity, or that the supplied exhaustive-minor reference program implements their algorithm.

### 8.2 Failure certificates

If a prime test fails, Gaussian elimination supplies a nonzero left-null vector of $X[I_p,:]$. Extend it by zeros outside $I_p$ to a row $a\in\mathbb F_p^{1\times m}$. It satisfies

$$
aM=0,\qquad a\neq0\quad\text{over }\mathbb F_p.
$$

An inverse would imply $a=aMY=0$, a contradiction. A verifier only needs to check the prime, the vector, and the column dot products.

A Smith computation also supplies a failure certificate **without factoring**. If $s_j>1$, take $h=s_j$ and $a=e_j^TU$. From $UM=[S\ 0]V^{-1}$, every entry of $aM$ is divisible by $h$. The row $a$ is primitive, because $U$ is unimodular; therefore not all its entries are divisible by $h$. Hence

$$
aM\equiv0\pmod h,\qquad a\not\equiv0\pmod h
$$

rules out an inverse. This certificate works for composite $h$ too; primality is unnecessary for verifying the contradiction.

### 8.3 Practical certificate contract

For a successful input, return an integer $Y$ and verify $MY=I_m$ by exact multiplication. For failure, return $h\geq2$ and an integer row $a$ with $aM\equiv0\pmod h$ but $a\not\equiv0\pmod h$. These checks do not require trusting the algorithm that found the answer. Floating-point numerical rank is not a substitute for either check.

## 9. Describing every integer right inverse

Given one inverse $Y_0$, put $P=I_N-Y_0M$. Then

$$
MP=0,\qquad P^2=P.
$$

Furthermore $Pz=z$ whenever $Mz=0$, so the image of this integral projection is exactly the integer kernel of $M$. All integer right inverses are

$$
\boxed{Y=Y_0+PZ,\qquad Z\in\mathbb Z^{N\times m}.}
$$

Indeed, every displayed matrix is an inverse because $MP=0$. Conversely, if $Y$ is an inverse, $K=Y-Y_0$ has $MK=0$, so $PK=K$ and it occurs by choosing $Z=K$.

These parameters are redundant. For fixed Smith multipliers with $UMV=[I_m\ 0]$, a nonredundant description is

$$
\boxed{Y=V\binom U W,\qquad W\in\mathbb Z^{n\times m}.}
$$

To check necessity as well as sufficiency, write $Z'=V^{-1}Y$. The equation becomes $[I_m\ 0]Z'=U$, fixing exactly the first $m$ rows and leaving exactly $n$ arbitrary integer rows. Thus $W$ is unique for fixed $U,V$.

## 10. The exact number of extra columns needed to repair failure

The proofs in Sections 2–4 work unchanged for every $n\geq0$, including $n<m$ and the empty block $X$. We use this explicit extension in this section.

Define the local deficits

$$
\delta_p=r_p-\operatorname{rank}_{\mathbb F_p}X[I_p,:],
\qquad t_* =\max_{p\mid q}\delta_p.
$$

**Theorem 4 (optimal column repair).** The smallest number $t$ of additional arbitrary integer columns $Z\in\mathbb Z^{m\times t}$ making $[D\ X\ Z]$ admit an integer right inverse is exactly $t_*$.

**Lower bound.** At prime $p$, adding $t$ columns raises rank by at most $t$. Thus the local deficit can vanish only if $t\geq\delta_p$ for each $p$, so $t\geq t_*$.

**Construction achieving the bound.** For each relevant prime, extend a basis of the column space of $X[I_p,:]$ to a basis of $\mathbb F_p^{r_p}$. This needs exactly $\delta_p$ complement columns. Pad with zeros to $t_*$ columns and assign arbitrary values, say zero, to rows outside $I_p$. The resulting $m\times t_*$ matrices prescribe residues modulo distinct primes. Entrywise CRT produces one integer matrix $Z$ realizing all prescriptions. Every augmented active-row matrix then has full rank. Theorem 1 produces an inverse. $\square$

Only residues modulo distinct primes are needed to choose repair columns; once the rank condition holds, prime powers are handled by the main theorem. For the counterexample in Section 5.1, the deficit at two is one, and adding $Z=e_1$ repairs the matrix.

Taking $X$ to have no columns shows another exact consequence: for fixed $D$, the minimum number of arbitrary columns needed alongside $D$ is

$$
\max_{p\mid q}|I_p|.
$$

This is a stated extension beyond the original assumption $m\leq n$. The original problem itself has been solved without changing that assumption.

## 11. An exact finite count explaining the failure of the guess

Fix $D,n$ and choose every entry of $X$ independently and uniformly modulo $q$. CRT makes reductions modulo the distinct relevant primes independent and uniform. For $r=r_p$ rows in $\mathbb F_p^n$, the number of ordered independent row choices is

$$
(p^n-1)(p^n-p)\cdots(p^n-p^{r-1}).
$$

The first row must avoid zero; the next must avoid the span of the preceding independent rows, of sizes $p,p^2,\ldots$. Dividing by $p^{nr}$ and multiplying over the finitely many primes proves

$$
\Pr(M\text{ has an integer right inverse})
=\prod_{p\mid q}\prod_{j=0}^{r_p-1}(1-p^{j-n}).
$$

This is an exact probability on a finite sample space, not an assertion about a uniform distribution on all integers. It is the elementary finite-field count also recorded in [3], applied to the active rows. For comparison, the weaker rowwise gcd condition has probability

$$
\prod_{p\mid q}(1-p^{-n})^{r_p},
$$

because each relevant row need only be nonzero. With $D=2I_2,n=2$, exactly $6$ of the $16$ binary matrices have independent rows, while $9$ pass the nonzero-row test. Thus $3$ of those $9$ matrices, one third of all rowwise passes, are counterexamples to the guess. This gives a complete small-instance audit rather than just one adverse example.

## 12. Verification, limitations, and status

The accompanying `verify.py` uses exact integer arithmetic. It compares separate maximal-minor, prime-field-rank and finite-quotient-image computations; constructs and checks positive and negative certificates; and exercises seeded cases and degenerate inputs. Its executed run passed every assertion on 1,926 inputs:

| Family | Inputs | Inverse exists | No inverse |
| --- | ---: | ---: | ---: |
| All $d_1,d_2\in\{2,3,4,5\}$ and $X\in\{0,1,2\}^{2\times2}$ | 1,296 | 610 | 686 |
| Signed entries with composite and prime-power diagonal entries | 324 | 176 | 148 |
| Seeded cases with $X$ dimensions through $4\times5$ | 300 | 248 | 52 |
| Named examples | 6 | 4 | 2 |
| Total | 1,926 | 1,038 | 888 |

The run independently compared 20,699 maximal-minor determinants by Bareiss and permutation formulas, checked 1,870 finite quotient images, and made 3,114 random parameterization checks and 1,681 signed Bézout-pair checks. In the main exhaustive family the weaker rowwise test passed 676 inputs, of which 66 had no inverse. For random cases, quotient enumeration was skipped when the quotient had more than 2,000 elements. Seed: 3030. Exact results, certificates and configuration are in `verification_results.json`.

The separate `verify_extensions.py` passed 262 additional construction/repair cases, including 240 fixed-seed cases, every binary $2\times2$ matrix, and six named cases. It directly implemented the prime-power adjugate/CRT construction and checked 124 original inverses, 138 original failure certificates, and exact inverses after repairing all 138 obstructed cases. It compared 261 cases to the reference constructor; the remaining case had an empty $X$, deliberately testing the stated extension outside the original domain. It checked the displayed positive matrices verbatim and the nonsingular parity counterexample. There were 32 exhaustive small repair searches checking 176 candidate matrices. The binary counts $6/16$ and $9/16$ were confirmed. A further complete audit of all 1,296 matrices modulo six with $D=6I_2$ found 288 successes and 576 rowwise passes, matching probabilities $2/9$ and $4/9$; every decision also matched the exact maximal-minor gcd. Details and limitations are in `extension_results.json`.

Computation is supplementary evidence for the implementation and examples. The unrestricted theorems are established by the proofs above. Two separate same-model research agents independently audited the written proofs; that is model-assisted review, not independent human verification. A third agent implemented the exact verification programs.

The general normal-form criterion is classical. The note makes no priority claim for its specialized consequences, repair formulation, or finite counting corollary. It does not claim that the original question remains unresolved in the wider literature, that a problem-list label establishes mathematical status, or that finite tests prove universal results. No independent human review or formal proof-assistant verification is asserted. The entire original characterization question is answered; no additional unproved assumption is used.

## References actually inspected

1. Steven A. Gregory, **inverse of an integer matrix**, Open Problem Garden, posted by `lvoyster`, 27 May 2013. [Original question](https://www.openproblemgarden.org/op/inverse_of_an_integer_matrix). Used for the exact question and proposed rowwise condition; the accessible page showed no answer comments at inspection.
2. **We-Solve / UnsolvedMath record prb_b51a5f11716a459db4afee0981061c8e**, also displayed as Math-3291, source code catalogue entry. [Statement](https://github.com/We-Solve/research/blob/main/problems/b5/prb_b51a5f11716a459db4afee0981061c8e/statement.tex), [problem metadata](https://github.com/We-Solve/research/blob/main/problems/b5/prb_b51a5f11716a459db4afee0981061c8e/problem.yaml), [research prompt](https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/prb_b51a5f11716a459db4afee0981061c8e.txt). Used to fix the exact domain and catalogue identity. Prompt listed no earlier contributions when inspected. Credit: Ulam AI and the UnsolvedMath contributors; catalogue material under CC BY 4.0.
3. Gérard Maze, Joachim Rosenthal, Urs Wagner, **Natural Density of Rectangular Unimodular Integer Matrices**, [arXiv:1005.3967](https://arxiv.org/pdf/1005.3967). Inspected introduction, Lemma 2 and the finite-field count preceding Lemma 3. Used to credit the established equivalence between integer right inverses and coprime maximal minors, and the standard count of full-rank finite-field matrices. No claim from the paper's infinite-density argument is used.
4. Richard P. Stanley, **Smith Normal Form in Combinatorics**, [author-hosted survey](https://math.mit.edu/~rstan/papers/snf_survey.pdf), [arXiv:1602.00166](https://arxiv.org/abs/1602.00166). Inspected Section 2, especially Theorems 2.1(4), 2.3 and 2.4, for existence, quotient interpretation and determinantal divisors. The main criterion is also proved independently above.
5. Ravindran Kannan, Achim Bachem, **Polynomial Algorithms for Computing the Smith and Hermite Normal Forms of an Integer Matrix**, SIAM Journal on Computing 8(4) (1979), 499–507, [DOI 10.1137/0208040](https://epubs.siam.org/doi/abs/10.1137/0208040). Publisher abstract and bibliographic details inspected; full paywalled article not inspected. Used only for its stated polynomial operation/bit bounds and multiplier-matrix guarantee.

## Provenance and licences

Requested and submitted for Gaven (`@gavenren`), whose role was prompting and authorizing submission. Mathematics, exposition, source checks, implementation and adversarial review were produced by OpenAI Codex (GPT-6; exact serving version and reasoning setting not exposed), including separate same-model research/review agents. No human mathematical contribution or human proof verification is asserted.

Original prose and mathematical exposition: CC BY 4.0. Original software: Apache-2.0. Third-party questions and established results are attributed above; linked papers are references and are not redistributed in this package.


## Reproducible source code

Run both files with Python 3.9 or later, without `-O`. No third-party packages are required. Save them in the same directory. Each writes its full JSON results. These transparent small-input algorithms use exact arithmetic; their complexity limitations are documented.

<details>
<summary>verify.py — exact constructor and exhaustive verification</summary>

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/5) for this material.

</details>

<details>
<summary>verify_extensions.py — prime-power CRT, optimal repair and finite counts</summary>

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/5) for this material.

</details>



## Attribution and references from the original submission

### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6; exact serving model revision unknown)

### LLM versions, settings and roles

OpenAI Codex (GPT-6) | version: unknown | reasoning: unknown | role: primary research, proof writing, source inspection and submission; two separate same-model research agents developed and independently audited the proofs; a third same-model agent implemented and ran exact verification. All agents used the inherited model; no other model was knowingly used.

### People and roles

Gaven (@gavenren): requested the research and authorized submission. No human mathematical authorship, mathematical edits or independent human proof checking is asserted.

### References

1. Steven A. Gregory, inverse of an integer matrix, Open Problem Garden (27 May 2013): https://www.openproblemgarden.org/op/inverse_of_an_integer_matrix . Exact original question and rowwise conjecture inspected.
2. We-Solve / UnsolvedMath prb_b51a5f11716a459db4afee0981061c8e, catalogue entry, Math-3291: https://github.com/We-Solve/research/blob/main/problems/b5/prb_b51a5f11716a459db4afee0981061c8e/statement.tex . Statement, metadata and generated research prompt inspected; prompt listed no prior contributions. Catalogue attribution: Ulam AI and UnsolvedMath contributors, CC BY 4.0.
3. Maze, Rosenthal, Wagner, Natural Density of Rectangular Unimodular Integer Matrices: https://arxiv.org/pdf/1005.3967 . Introduction and Lemma 2 for classical maximal-minor criterion; finite-field count before Lemma 3.
4. Stanley, Smith Normal Form in Combinatorics: https://math.mit.edu/~rstan/papers/snf_survey.pdf . Section 2, especially Theorems 2.1(4), 2.3 and 2.4.
5. Kannan, Bachem, Polynomial Algorithms for Computing the Smith and Hermite Normal Forms of an Integer Matrix: https://epubs.siam.org/doi/abs/10.1137/0208040 . Publisher abstract and bibliographic details only, for polynomial bit/operation bounds and multiplier matrices; full paywalled article not inspected.

