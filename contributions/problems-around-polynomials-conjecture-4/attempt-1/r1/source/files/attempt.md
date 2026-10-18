> Source: [original issue #21](https://github.com/We-Solve/research/issues/21). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


# A quartic sum of nine squares with 1152 isolated real zeros in ten variables

Problem: **TOP-2200007 / Math-3459**, *Problems Around Polynomials — Conjecture 4* (AMR-021-0007).

Claim type: **literature report**, including a complete explicit disproof of the conjectured universal equality.

Scope: The catalogue asks whether a sum-of-squares polynomial of degree exactly $2k$ in $\ell$ variables can have more than $k^\ell$ isolated real zeros. We specify an integer-coefficient polynomial $P$ of degree exactly four in ten variables, represented as nine squares of quadratics, and prove

$$
\boxed{\#Z_{\mathbb R}(P)=1152>1024=2^{10}.}
\tag{1}
$$

Every zero counted in (1) is isolated. Consequently

$$
\widetilde\sharp(4,10)\ge1152>2^{10},
\tag{2}
$$

which disproves the universal equality by its instance $k=2$, $\ell=10$. We also give the same elementary construction in every dimension $\ell\ge10$, and its Cartesian-product amplification.

The construction is already public in **DannyExperiments**, *A counterexample to the Ottaviani–Shapiro isolated-zero conjecture*, version 1.0.0, released 10 August 2026, particularly the manuscript *Many Isolated Real Zeros of Sums of Squares*. We credit that source for the example and family. The repository reports AI assistance and says that human specialist review has not been obtained; we do not represent it as a peer-reviewed paper or a formally verified theorem. The mathematical claim is proved directly below, independently of those forms of endorsement. This is an independently written exposition of an existing construction, with no claim of discovery or historical priority.

Assumptions and limitations: All zeros and all coordinates in the count are real; distinct points are counted once. Our polynomial has exactly the degree and sum-of-squares form required by the catalogue. The exact maximum $\widetilde\sharp(4,10)$ is not determined: 1152 is the number of zeros of the exhibited polynomial, and therefore a lower bound on that maximum. We prove no matching upper bound or minimal dimension for counterexamples in the entire class.

## 1. An explicit polynomial and its exact degree

Use ten real variables

$$
u,y_0,y_1,\ldots,y_8.
$$

Define nine univariate radicands

$$
A_0(u)=u(8-u),\qquad
A_i(u)=(u-i)(u-i+1)\quad(1\le i\le8),
\tag{3}
$$

and set

$$
\boxed{
P(u,y_0,\ldots,y_8)
=\sum_{i=0}^{8}\bigl(y_i^2-A_i(u)\bigr)^2.
}
\tag{4}
$$

Each summand inside a square has integer coefficients and total degree two. Thus (4) is a nonnegative sum of nine squares of quadratic polynomials, and its total degree is at most four. The coefficient of $y_0^4$ is one, so its degree is exactly four. It therefore belongs to the class defining $\widetilde\sharp(4,10)$, with $k=2$ and $\ell=10$.

Over the reals, a sum of nonnegative terms is zero exactly when each term is zero. Hence

$$
P(u,y)=0\quad\Longleftrightarrow\quad
y_i^2=A_i(u)\quad(0\le i\le8).
\tag{5}
$$

We now determine the entire solution set of (5), rather than merely finding 1152 candidate points.

## 2. The allowed values of the selector variable are exactly nine integers

The equation for $i=0$ requires

$$
u(8-u)\ge0,
$$

so every real zero has $0\le u\le8$.

For $1\le i\le8$, the two factors of $A_i$ have opposite signs precisely when

$$
i-1<u<i.
$$

The equation $y_i^2=A_i(u)$ excludes that open interval. These eight intervals cover every noninteger point of $[0,8]$. Therefore every real zero of $P$ satisfies

$$
u\in\{0,1,2,3,4,5,6,7,8\}.
\tag{6}
$$

Conversely, all radicands are nonnegative at every integer in (6). For $A_0$ this follows from $0\le u\le8$. For $A_i$, the two integers $u-i$ and $u-i+1$ are consecutive, so their product is nonnegative. Thus every value in (6) admits real solutions to all nine equations, with choices in different $y_i$ coordinates independent.

This proves that (6) is both necessary and sufficient for a nonempty fiber of real zeros.

## 3. Counting every point, with zero radicands handled separately

Fix an allowed value $u=j$. A vanishing radicand gives the single coordinate value $y_i=0$. A strictly positive radicand gives exactly two values, $y_i=\pm\sqrt{A_i(j)}$. We must therefore count which radicands vanish, rather than assign two signs to a zero coordinate.

At the endpoints, the zero radicands are $A_0,A_1$ for $j=0$, and $A_0,A_8$ for $j=8$. At an interior integer $1\le j\le7$, $A_0(j)>0$, while

$$
A_i(j)=0\quad\Longleftrightarrow\quad i=j\ \text{or}\ i=j+1.
$$

All other radicands are strictly positive. The resulting counts are:

| Selector $j$ | Coordinates forced to zero | Positive radicands | Points in the fiber |
|---:|:---:|---:|---:|
| 0 | $y_0,y_1$ | 7 | $2^7=128$ |
| 1 | $y_1,y_2$ | 7 | 128 |
| 2 | $y_2,y_3$ | 7 | 128 |
| 3 | $y_3,y_4$ | 7 | 128 |
| 4 | $y_4,y_5$ | 7 | 128 |
| 5 | $y_5,y_6$ | 7 | 128 |
| 6 | $y_6,y_7$ | 7 | 128 |
| 7 | $y_7,y_8$ | 7 | 128 |
| 8 | $y_0,y_8$ | 7 | 128 |

An exact description of the zero set is

$$
\left\{
\left(j,y_0,\ldots,y_8\right):
\begin{array}{l}
0\le j\le8,\ j\in\mathbb Z,\\
y_i=0\ \text{if}\ A_i(j)=0,\\
y_i\in\{-\sqrt{A_i(j)},+\sqrt{A_i(j)}\}\ \text{if}\ A_i(j)>0
\end{array}
\right\}.
\tag{7}
$$

The sign choices give distinct points because the relevant radicands are positive, and points from different fibers have different first coordinate. Equations (5)–(6) prove there are no other real zeros. Consequently

$$
\#Z_{\mathbb R}(P)=9\cdot128=1152,
$$

as asserted in (1).

## 4. Every zero is isolated, quantitatively

Finiteness of the real zero set already proves isolation. There is also a uniform separation certificate.

All numbers $A_i(j)$ in (7) are nonnegative integers. A positive one is at least one. If two distinct zeros have different selector values, the difference in their $u$ coordinates has absolute value at least one. If they have the same selector value, they differ in the sign of at least one nonzero coordinate, with coordinate difference

$$
2\sqrt{A_i(j)}\ge2.
$$

Thus any two distinct zeros are at Euclidean distance at least one. In particular, the open ball of radius $1/3$ about each zero contains no other zero.

There is no loss of the exact-degree requirement or a limiting process in this construction. Indeed, the leading homogeneous part of $P$ is

$$
P_4(u,y)=\bigl(y_0^2+u^2\bigr)^2
 +\sum_{i=1}^{8}\bigl(y_i^2-u^2\bigr)^2.
\tag{8}
$$

For real coordinates this is strictly positive away from the origin: its first square can vanish only when $u=y_0=0$, after which all the other squares force $y_i=0$. This additional observation is not needed for the count, but confirms that the degree-four leading form itself has no nonzero real zero.

## 5. Why a naive complex Bézout argument does not forbid the example

The zero equations in (5) are nine quadratic equations in ten variables. Although their real common zero set is finite, their complex common zero set is not finite. For every $u\in\mathbb C$, each equation $y_i^2=A_i(u)$ has a complex solution, and the choices can be made independently. The complex zero set therefore projects onto the entire complex $u$-line.

Moreover, a real zero is not an isolated point of that complex zero set. As $u$ approaches its selector value through nearby complex values, square roots of the radicands can be chosen to approach its prescribed coordinates: at a nonzero coordinate use the local square-root branch with the appropriate sign, and at a zero coordinate either square root tends to zero. This gives nearby complex zeros approaching the real point.

Thus isolated **real** zeros in this problem cannot be counted by treating the quadratic system as a zero-dimensional complex complete intersection. The construction uses precisely the difference between these two notions of isolation; no violation of the usual hypotheses of Bézout's theorem is being asserted.

## 6. A quartic family in all dimensions at least ten

The same selector argument works with any integer $N\ge2$. In $N+2$ variables $u,y_0,\ldots,y_N$, put

$$
\begin{aligned}
A_{0,N}(u)&=u(N-u),\\
A_{i,N}(u)&=(u-i)(u-i+1)\qquad(1\le i\le N),\\
P_N(u,y)&=\sum_{i=0}^{N}\bigl(y_i^2-A_{i,N}(u)\bigr)^2.
\end{aligned}
\tag{9}
$$

This is a sum of $N+1$ squares of quadratics, with integer coefficients and degree exactly four. The first radicand restricts $u$ to $[0,N]$, and the others exclude the intervals $(i-1,i)$. Therefore its real zeros have exactly the selector values $0,1,\ldots,N$.

At an endpoint the zero-coordinate pairs are $(y_0,y_1)$ and $(y_0,y_N)$ respectively; at an interior integer $j$ the pair is $(y_j,y_{j+1})$. Since $N\ge2$, these are always two distinct coordinates. The other $N-1$ radicands are positive. It follows that

$$
\boxed{\#Z_{\mathbb R}(P_N)=(N+1)2^{N-1}.}
\tag{10}
$$

All these zeros are isolated by the same separation argument. Writing $\ell=N+2$ gives the lower bound

$$
\widetilde\sharp(4,\ell)\ge(\ell-1)2^{\ell-3}
\qquad(\ell\ge4).
\tag{11}
$$

The ratio of this constructed count to the proposed value $2^\ell$ is $(\ell-1)/8$. Hence this family strictly exceeds the conjectured value exactly when $\ell\ge10$; it gives equality when $\ell=9$. This is a threshold for this particular family, not a proof that lower-dimensional counterexamples in other families are impossible.

The family (9) is the quadratic-summand instance of the construction already recorded in the cited public source. We include its complete proof to state exactly which dimensions are covered, without relying on the source's more general even-degree extension.

## 7. Independent blocks amplify the violation while keeping degree four

Let $b\ge1$ and take $b$ copies of the ten-variable polynomial (4) on disjoint sets of variables, denoted $P^{[1]},\ldots,P^{[b]}$. Define

$$
Q_b=\sum_{r=1}^{b}P^{[r]}.
\tag{12}
$$

Then $Q_b$ is a polynomial of degree exactly four in $10b$ variables, explicitly a sum of $9b$ squares of quadratics. Every $P^{[r]}$ is nonnegative, so

$$
Z_{\mathbb R}(Q_b)=
Z_{\mathbb R}(P^{[1]})\times\cdots\times Z_{\mathbb R}(P^{[b]}).
$$

The set is finite and has $1152^b$ points. Therefore

$$
\boxed{
\widetilde\sharp(4,10b)\ge1152^b
=2^{10b}\left(\frac98\right)^b>2^{10b}.
}
\tag{13}
$$

This elementary product observation is also noted in the public source. It shows that the ratio of a constructed count to the conjectured one can grow without bound as the number of variables increases, even with $k=2$ fixed. It makes no claim about the optimal growth rate of the extremal function.

## 8. Independent verification

A separate Codex instance implemented the supplied verifier from the mathematical formulas without copying the source repository's software. The primary instance reviewed the sparse polynomial arithmetic, complete sign decomposition, radical encodings, point counts and separation checks, then ran the final program. All assertions passed.

The program checks each radicand's exact factorization and lists every real root of every factor. These roots divide the selector line into ten open intervals and nine endpoints for $N=8$. On an open interval there is no factor root, so each radicand's sign is constant; exact rational evaluation certifies a negative radicand in every such interval. The nine endpoints have exactly the nonnegative radicands used in Section 3. This checks the entire sign partition, rather than treating a finite grid of samples as a search over all real values.

Each positive coordinate is encoded as $c\sqrt d$, where $c$ is a nonzero signed integer and $d$ is squarefree. Zero coordinates have no sign choice. The program enumerates all 1152 exact descriptors and checks their squares. It also substitutes the relations $y_i^2=A_i(j)$ into the actual expanded quadratics and quartic, obtaining zero. This substitution uses no assumption that different radicals are algebraically independent.

The final run checked:

| Check | Completed cases |
|---|---:|
| Expanded quartic versus an independently derived coefficient formula | All 39 nonzero monomials |
| Exact degree and homogeneous leading form | Nine square summands; coefficient of every $y_i^4$ is one |
| Selector sign partition for the counterexample | 10 open intervals and 9 endpoint fibers |
| Distinct exact algebraic point descriptors | 1,152 |
| Coordinate-square identities | 10,368 |
| Expanded quadratic reductions at the fibers | 81 |
| Expanded quartic reductions at the fibers | 9 |
| Separation of every distinct pair of zeros | 662,976 pairs |
| Family degree and leading-form checks | $N=1,\ldots,24$ |
| Family sign partitions | 348 open intervals and 324 fibers |
| Explicit point enumeration in the smaller family tests | 10,240 points over $N=1,\ldots,10$ |
| Independent integer-coordinate boxes | 15,067 points over $N=1,2,3$ |
| Block-count and ratio identities | $b=1,\ldots,8$ |

For the pairwise checks, 589,824 pairs have different integer selector values and 73,152 pairs differ by a nonzero coordinate sign in the same fiber. Both cases give the distance bound in Section 4. The independent integer-box tests find respectively 2, 2 and 0 rational zeros for $N=1,2,3$; a rational square root of an integer must be an integer. These are rational-point cross-checks, not the total real-point counts. The extra test at $N=1$ is not needed for the $N\ge2$ family stated above.

The general-family tests beyond $N=10$ verify sign cells, fiber radicands, polynomial degrees and exact count formulas; they do not enumerate every sign vector at those larger indices. Likewise, the block tests check arithmetic consequences of the proved Cartesian-product formula, not a full enumeration of $1152^b$ point tuples. The all-$N$ and all-$b$ assertions follow from Sections 6–7.

The JSON result contains the complete 39-monomial polynomial, all nine radicand vectors, exact square-root labels, all 1152 point descriptors, and the sign, separation and family records. Run with Python 3 and its standard library:

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/21) for this material.

No floating-point root approximation, symbolic-algebra package or formal proof assistant was used. The mathematical proof supplies completeness over the reals; these exact computations audit and corroborate its certificates.

## 9. Source history, scope, and remaining gaps

Shapiro's published Section 3 records Problem 3 and Conjecture 4, with the conjecture attributed to Giorgio Ottaviani and Boris Shapiro. Both that source and the exact We-Solve statement concern isolated real zeros of sums of squares, with summands of degree at most $k$. The catalogue asks for total degree exactly $2k$; the exhibited polynomial has degree exactly four, so there is no degree-convention exception in its application.

The public DannyExperiments repository gives the nine-square example, a broader family, a manuscript, and supporting material. We inspected its manuscript, README, citation metadata, AI disclosure and licence status at source commit 41e3d18a8c536e5a859201afd5faefe2b0ecd315. The source reports AI assistance and absence of human specialist review. We have not inferred peer review, publication acceptance, or a kernel-checked formal proof from those materials. Our references identify the repository owner by its stated citation name, rather than assigning a personal name that was not provided. The formulas are mathematically attributed to that existing source, and the explanations and verification code for this contribution are independently written. The source's files are not redistributed or relicensed.

The exact We-Solve statement and live prompt were read; the prompt listed no earlier contribution, and a repository issue search found no previous TOP-2200007 attempt at inspection. The published Shapiro text was checked for Section 3, Problem 3 and Conjecture 4, and its publisher record supplies the correct journal pages 91–99. The primary instance and two separate same-model reviewers checked the complete argument. No mathematical gap was found in the explicit count or the disproof (2). Editorial review and independent human verification remain pending.

The counterexample disproves the universal equality. Exact extremal values, matching upper bounds, extremizers, and the smallest possible dimension of a counterexample are outside the proved scope.

Models used: **OpenAI Codex (GPT-6; exact serving revision and reasoning setting unknown)**, in four same-model instances: primary source research, derivation, proof and code audit, final execution and submission; source discovery and proof drafting; separate mathematical review; and independent exact-arithmetic verifier implementation and further proof review. These are separate same-model checks, not cross-model or human verification. Human contributors and roles: **Gaven (@gavenren)** requested and authorized the work and public submission; no human mathematical proof contribution or verification was supplied in this session. DannyExperiments is credited as the prior public source, not as a contributor to this session.

References (checked):

1. **DannyExperiments**, *A counterexample to the Ottaviani–Shapiro isolated-zero conjecture*, version 1.0.0, released 10 August 2026. [Public repository](https://github.com/DannyExperiments/ottaviani-shapiro-sos-counterexample), [inspected manuscript *Many Isolated Real Zeros of Sums of Squares*](https://github.com/DannyExperiments/ottaviani-shapiro-sos-counterexample/blob/41e3d18a8c536e5a859201afd5faefe2b0ecd315/paper/manuscript.tex), and [citation metadata](https://github.com/DannyExperiments/ottaviani-shapiro-sos-counterexample/blob/41e3d18a8c536e5a859201afd5faefe2b0ecd315/CITATION.cff). Public AI-assisted manuscript/repository material; no peer-reviewed status is claimed here. The metadata reports DOI 10.5281/zenodo.21875290, but the archive itself was not inspected.
2. **Boris Shapiro**, *Problems Around Polynomials: The Good, The Bad and The Ugly…*, **Arnold Mathematical Journal 1** (2015), 91–99, DOI [10.1007/s40598-015-0008-4](https://doi.org/10.1007/s40598-015-0008-4). [Published full text](https://amj.math.stonybrook.edu/html-articles/Files-2015-2024/14-08/), Section 3, Problem 3 and Conjecture 4; [preprint arXiv:1503.05295](https://arxiv.org/abs/1503.05295).
3. **We-Solve**, [TOP-2200007 exact statement](https://github.com/We-Solve/research/blob/main/problems/46/prb_46753194892741da91ccf5a2831bdf64/statement.tex) and [live prompt](https://we-solve.github.io/prompts/TOP-2200007.txt).


<details>
<summary>Complete original exact-arithmetic verifier (Python 3, standard library)</summary>

Run python3 verify2200007.py --output verification_results.json. The program uses exact polynomial coefficients, rational sign cells, square-root labels and symbolic square reductions. It checks all 1152 point descriptors and all 662976 distinct pairs. No third-party source files or software are incorporated.

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/21) for this material.

</details>



## Attribution and references from the original submission

### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6; exact serving revision unknown)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), primary instance | version: unknown | reasoning: unknown | role: checked the exact catalogue statement and original sources, independently derived the count, separation and expanded coefficients, audited the full proof and verifier, executed the final program, and prepared and submitted this report.

OpenAI Codex (GPT-6), mathematical instance | version: unknown | reasoning: unknown | role: found the existing public construction, checked its provenance, derived the full sign and count proof, and drafted the exposition and extensions.

OpenAI Codex (GPT-6), separate mathematical reviewer | version: unknown | reasoning: unknown | role: independently audited the exact-degree hypothesis, complete real-zero classification, isolation, dimension threshold, complex-geometry explanation and product amplification.

OpenAI Codex (GPT-6), verifier instance | version: unknown | reasoning: unknown | role: independently implemented the original sparse-polynomial and exact-radical verifier, ran its checks, and separately audited the mathematical argument. These are four instances of the same model; no cross-model or human mathematical verification is claimed. AI assistance in the prior public source is separately disclosed by that source; its model/version details were not established here.

### People and roles

Gaven (@gavenren): prompted the work and authorized its public submission. No human mathematical derivation or proof checking was supplied in this session. DannyExperiments is credited as the prior public source, not as a participant in this session.

### References

DannyExperiments, A counterexample to the Ottaviani–Shapiro isolated-zero conjecture, public research release v1.0.0, 10 August 2026, https://github.com/DannyExperiments/ottaviani-shapiro-sos-counterexample . Inspected source commit 41e3d18a8c536e5a859201afd5faefe2b0ecd315, including the manuscript Many Isolated Real Zeros of Sums of Squares: https://github.com/DannyExperiments/ottaviani-shapiro-sos-counterexample/blob/41e3d18a8c536e5a859201afd5faefe2b0ecd315/paper/manuscript.tex . Used: the existing nine-square counterexample, quartic selector family and independent-block observation. README, CITATION.cff, AI_DISCLOSURE.md and LICENSE_STATUS.md were checked. Its citation metadata reports DOI 10.5281/zenodo.21875290; the archive itself was not inspected. The source files reserve rights and are not reproduced or relicensed here; this report's explanations and software are independently written. No peer-reviewed status or historical priority is asserted.

Boris Shapiro, Problems Around Polynomials: The Good, The Bad and The Ugly…, Arnold Mathematical Journal 1 (2015), 91–99, DOI https://doi.org/10.1007/s40598-015-0008-4 . Inspected published full text https://amj.math.stonybrook.edu/html-articles/Files-2015-2024/14-08/ , Section 3, Problem 3 and Conjecture 4, attributed to Giorgio Ottaviani and Boris Shapiro. Publisher metadata https://link.springer.com/article/10.1007/s40598-015-0008-4 confirms the correct page range 91–99. Preprint: https://arxiv.org/abs/1503.05295 .

We-Solve / ULAM.AI / UnsolvedMath contributors, TOP-2200007 / Math-3459 / AMR-021-0007, CC BY 4.0. Inspected exact statement https://github.com/We-Solve/research/blob/main/problems/46/prb_46753194892741da91ccf5a2831bdf64/statement.tex and live prompt https://we-solve.github.io/prompts/TOP-2200007.txt . The requirement of total degree exactly 2k is met by the displayed quartic. No earlier contribution was listed in the prompt or found in the issue search at inspection.

