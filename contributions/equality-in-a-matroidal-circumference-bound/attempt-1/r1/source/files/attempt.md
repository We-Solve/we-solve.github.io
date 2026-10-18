> Source: [original issue #7](https://github.com/We-Solve/research/issues/7). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


# Equality in the matroid circumference bound: a 2026 resolution and explicit equality families

**We-Solve Math-3299 / TOP-3066, OPG-692.**

**Claim and attribution.** This is a literature report answering the main catalogue question from a June 15, 2026 author-hosted submitted preprint of Manoel Lemos and James Oxley. Their classification theorem is credited to them, not claimed as our proof or discovery. We also give independent elementary proofs and executable certificates for the affine-cube example and a two-parameter family of connected nongraphic equality cases. This family disproves the catalogue's **parallel-only** associated variant. The original source used broader informal language, so the distinction is essential.

## 1. The exact questions and their different answers

For a finite matroid $M$ with ground set $E$, a circuit is a minimal dependent set. Put $c(M)=\max\{|C|:C\text{ is a circuit}\}$. Its dual $M^*$ has bases complementary to those of $M$, and its circuits are the cocircuits of $M$. Write $c^*(M)=c(M^*)$.

For $X\subseteq E$, define

$$
\lambda_M(X)=r_M(X)+r_M(E\setminus X)-r(M).
$$

We use the catalogue's convention: a $k$-separation, for $k=1,2$, has both sides of size at least $k$ and $\lambda_M(X)<k$. A matroid is 3-connected here if it has at least four elements and no such separation.

The main question asks whether

$$
M\text{ 3-connected},\qquad
|E|=\frac{c(M)c^*(M)}2
\quad\Longrightarrow\quad M\cong\operatorname{AG}(3,2).
$$

**Answer: yes, by the cited 2026 result**, with the four-element boundary checked below.

The catalogue also asks whether every connected nongraphic equality case, apart from the cube itself, is a uniform parallel expansion of the cube. **That expanded assertion is false.** A 16-element rank-12 binary counterexample is given explicitly in Section 9, and Section 8 proves an infinite family.

The original Open Problem Garden variant says “other than trivial modifications like replacing every element with an equally sized parallel class” [1]. The word **like** allows other modifications; it does not make the same exhaustive parallel-only claim. Our counterexamples correct the catalogue's narrowing, not the original author's broader informal intention.

## 2. The attributed main resolution and the floor-bound distinction

Lemos–Oxley [2, Theorem 1.4, printed p.2] prove that a connected simple cosimple matroid with at least two elements, other than $U_{2,4}$ and $\operatorname{AG}(3,2)$, satisfies

$$
|E(M)|\leq\left\lfloor\frac{c(M)c^*(M)}2\right\rfloor-1.
\tag{LO}
$$

Their Corollary 1.5 states the corresponding floor-equality classification for 3-connected matroids with at least five elements. The PDF is dated June 15, 2026; Oxley's official homepage lists it as **submitted** [3]. We report it as an author-hosted submitted preprint, not a peer-reviewed publication. The general classification proof belongs to that paper; the self-contained arguments below establish our certificates and consequences.

A 3-connected matroid on at least four elements is simple and cosimple. A loop or coloop gives a 1-separation. A parallel pair $X$ has $r(X)=1$, hence $\lambda_M(X)\leq1$, giving a 2-separation. The same holds for a series pair by duality, since $\lambda_{M^*}(X)=\lambda_M(X)$.

If $|E|=4$, simplicity forces $r(M)\geq2$, and cosimplicity forces $r(M^*)\geq2$, so $r(M)=2$. Every pair is independent, so $M=U_{2,4}$. Its circuits and cocircuits all have size three. Thus

$$
4=\left\lfloor\frac{3\cdot3}{2}\right\rfloor,
\qquad
4\neq\frac{3\cdot3}{2}.
$$

This boundary explains why floor equality and exact equality must not be conflated. For $|E|\geq5$, an exact equality case also satisfies floor equality and (LO) excludes every matroid except the affine cube. Sections 3–4 independently verify that the cube is 3-connected and satisfies exact equality. This settles the original exact main question on its entire stated domain, using the attributed classification theorem.

## 3. A binary certificate for the affine cube

Let $V=\mathbb F_2^3$. For $x=(x_1,x_2,x_3)\in V$, put $v_x=(1,x_1,x_2,x_3)^T$, and let $G$ be the $4\times8$ matrix with these eight columns. Let $N=M[G]$ be its column matroid. This is $\operatorname{AG}(3,2)$.

The columns indexed by $000,100,010,001$ are independent: adding $v_{000}$ to each of the last three produces the last three coordinate vectors. Thus $r(N)=4$.

The row space $\mathcal R$ consists of the truth tables of affine functions $x\mapsto b+u\cdot x$. For each of the seven nonzero $u$, both choices of $b$ give weight four. The remaining nonzero affine function is constant one, with weight eight. There are exactly fourteen weight-four supports and one weight-eight support.

Every binary dot product between rows of $G$ is zero: the constant row has weight eight, coordinate rows have weight four, and distinct coordinate rows overlap twice. Therefore $GG^T=0$. Since both spaces have dimension four,

$$
\boxed{\operatorname{row}(G)=\ker G.}
$$

For a binary column matroid, circuits are the minimal nonempty supports of kernel vectors. Cocircuits are the minimal nonempty supports of row-space vectors: deleting such a support removes exactly the columns needed to destroy a spanning rank, and minimality is equivalent to the complementary column set being a hyperplane. These characterizations also follow from the orthogonal-matrix representation of the dual.

For nonzero $u\in V$ and $b\in\mathbb F_2$, let

$$
H_{u,b}=\{x\in V:u\cdot x=b\}.
$$

These are fourteen distinct affine planes, each of size four. They are precisely the weight-four supports above. The only other nonempty code support is all eight points, which contains planes and is not minimal. Hence:

$$
\mathcal C(N)=\mathcal C(N^*)=\{H_{u,b}:u\neq0,\ b\in\mathbb F_2\}.
$$

Thus $N$ is self-dual on the same labelled ground set, has exactly fourteen circuits and fourteen cocircuits, and

$$
|E(N)|=8,\qquad r(N)=4,\qquad c(N)=c^*(N)=4,
\qquad 8=\frac{4\cdot4}{2}.
$$

## 4. Connectivity and nongraphic status, proved directly

### 4.1 No one- or two-separation

For distinct $x,y\in V$, choose $z\notin\{x,y\}$ and put $w=x+y+z$. The four points are distinct and their columns sum to zero; they form a four-element circuit. Thus every two elements occur together in a circuit, which proves connectedness: a nontrivial rank-additive partition would contain every circuit wholly in one side.

If a nonempty set $X$ of cube columns has rank $a$, its linear span contains at most $2^{a-1}$ vectors with first coordinate one. Therefore $|X|\leq2^{r_N(X)-1}$. In particular every pair has rank two, every triple rank three, every four-set rank at least three, and every set of at least five points rank four.

By symmetry, a partition with both sides of size at least two has sizes $2+6$, $3+5$ or $4+4$:

| Part sizes | Minimum rank sum | Minimum $\lambda$ |
| --- | ---: | ---: |
| $2+6$ | $2+4=6$ | 2 |
| $3+5$ | $3+4=7$ | 3 |
| $4+4$ | $3+3=6$ | 2 |

There is no 2-separation. Connectedness rules out a 1-separation, so $N$ is 3-connected under the exact catalogue convention.

### 4.2 An explicit nongraphic minor

Contract the point $000$. In the quotient space $\mathbb F_2^4/\langle(1,0,0,0)\rangle$, the remaining columns become the seven nonzero vectors of $\mathbb F_2^3$. They represent the Fano matroid $F_7$.

Here is a direct nongraphic argument. $F_7$ is simple and rank three, and every pair $x,y$ belongs to the three-element circuit $\{x,y,x+y\}$, so it is connected. If it were a cycle matroid of a graph, that graph could have no loops or parallel edges. All seven edges would lie in one graph component, since edges in different components cannot occur in one circuit. Discard isolated vertices. Its rank would be the vertex count minus one, so it would be a simple graph on four vertices with seven edges. Such a graph has at most six edges, a contradiction.

Graphic matroids are closed under deletion and contraction, as these operations correspond to graph edge deletion and contraction. Since $N$ has the nongraphic minor $F_7$, $N$ is nongraphic. This proof will also certify the larger examples below.

## 5. Explicit matrices for series and parallel expansions

For an integer $s\geq1$, form the repeated-column matrix

$$
H_s=[G\ G\ \cdots\ G]\quad(s\text{ blocks}).
$$

It represents the uniform parallel expansion $P_s(N)$. Define $S_s(N)=(P_s(N^*))^*$; because $N=N^*$ on this labelling, it is represented by a basis of $\ker H_s$.

The following explicit matrix supplies such a basis:

$$
K_s=
\begin{pmatrix}
G&0&0&\cdots&0\\
I_8&I_8&0&\cdots&0\\
I_8&0&I_8&\cdots&0\\
\vdots&\vdots&\vdots&\ddots&\vdots\\
I_8&0&0&\cdots&I_8
\end{pmatrix}.
$$

For $s=1$, this means $K_1=G$. For $s\geq2$ there are $s-1$ bottom block rows, with a copy of $I_8$ in the first block and in the corresponding later block. The matrix has $8s-4$ rows and $8s$ columns, indexed by $(x,j)\in V\times[s]$.

The bottom rows have independent pivots outside the first column block; the top four are independent on the first block. Hence $r(K_s)=4+8(s-1)=8s-4$. Every row is orthogonal to every row of $H_s$, and the dimensions add to $8s$, so its row space is exactly $\ker H_s$. Equivalently,

$$
\ker K_s=\operatorname{row}(H_s)
=\{(a,a,\ldots,a):a\in\ker G\}.
\tag{K}
$$

This gives a second, direct description: a dependence vector on $K_s$ has the same coefficient on all $s$ copies of each original cube point, and those shared coefficients form a dependence of $G$.

For $t\geq1$, repeat each column of $K_s$ exactly $t$ times. Denote its column matroid by

$$
M_{s,t}=P_t(S_s(N)).
$$

Its elements are triples $(x,j,h)\in V\times[s]\times[t]$. These explicit binary matrices define the whole family without requiring any implicit existence construction.

## 6. The rank of every subset

For $X\subseteq E(M_{s,t})$, let

$$
J(X)=\{(x,j): (x,j,h)\in X\text{ for at least one }h\},
$$

$$
F_X=\{x\in V:(x,j)\in J(X)\text{ for every }j\in[s]\}.
$$

**Proposition 1.** Every subset has rank

$$
\boxed{r_{M_{s,t}}(X)=|J(X)|-|F_X|+r_N(F_X).}
\tag{R}
$$

**Proof.** Parallel duplicates do not change span, so reduce to the columns of $K_s$ indexed by $J(X)$. By (K), a dependence supported there can be nonzero only on original classes for which all $s$ copies are present, namely $F_X$. The space of shared coefficient vectors supported in $F_X$ is $\ker G[F_X]$, of dimension $|F_X|-r_N(F_X)$. Subtracting nullity from the number of selected columns proves (R). $\square$

In particular,

$$
|E(M_{s,t})|=8st,\qquad r(M_{s,t})=8s-4.
$$

The rank formula also makes large examples easy to check without exhaustive enumeration of $2^{8st}$ subsets: it uses only occupied intermediate classes and one of the 256 rank values of the base cube.

## 7. Complete circuit and cocircuit lists

These lists are proved for every $s,t\geq1$, not inferred from finite experiments.

### 7.1 Circuits

There are exactly two types:

1. Two distinct parallel copies of one $(x,j)$, giving $8s\binom t2$ circuits of size two.
2. Choose a cube plane $C$ and, for every $(x,j)\in C\times[s]$, choose one $h\in[t]$. The resulting set has size $4s$. There are $14t^{4s}$ such circuits.

To prove exhaustiveness, a set containing two copies of an intermediate column already contains a two-element circuit; it can be minimal only if it is that pair. Otherwise it has one representative per occupied intermediate class. Formula (R) says it is dependent exactly when $F_X$ is dependent in $N$. Minimality then forces $F_X$ to be a cube circuit and forbids any partial original classes outside it. Conversely every displayed lift is dependent and removing any element breaks a full original class, destroying the only dependence. Thus the list is exact.

### 7.2 Cocircuits

There are exactly two types:

1. Fix $x$ and two distinct $j$ values; take all $t$ parallel copies of both intermediate columns. This gives $8\binom s2$ cocircuits of size $2t$.
2. Choose a cube plane $C$ and one $j_x\in[s]$ for each $x\in C$; take all $t$ parallel copies of the four selected intermediate columns. This gives $14s^4$ cocircuits of size $4t$.

Here is a direct code proof. Row-space vectors of the repeated $K_s$ matrix are constant on each $t$-element parallel class. Their intermediate coordinates are exactly the vectors $y\in\ker H_s$. For these vectors, the original-class parities $a_x=\sum_j y_{x,j}$ satisfy $Ga=0$.

If a support contains two positions in one original $x$-class, that pair alone is in $\ker H_s$. Minimality forces the support to be exactly the pair. Otherwise there is at most one selected position per original class, and minimality is exactly support-minimality of $a\in\ker G$: a cube plane. Lifting each selected intermediate coordinate to all $t$ of its copies proves both the list and its counts.

The binomial categories disappear automatically when $t=1$ or $s=1$. The longer categories always exist. Therefore

$$
\boxed{c(M_{s,t})=4s,\qquad c^*(M_{s,t})=4t.}
$$

## 8. Every member is a connected nongraphic equality example

Combining the formulas gives

$$
\boxed{|E(M_{s,t})|=8st=\frac{(4s)(4t)}2
=\frac{c(M_{s,t})c^*(M_{s,t})}{2}.}
$$

They are connected. For two elements in distinct intermediate parallel classes, choose a cube plane containing their original points; if those points coincide, any plane containing that point works. A lifted circuit of type 2 can contain both chosen elements. Two elements in the same parallel class form a circuit of type 1. Thus every two elements occur together in a circuit.

They are nongraphic because $N$ is a minor. First delete all but one parallel copy at each intermediate position, obtaining $S_s(N)$. Then contract $s-1$ elements of every original series class. This yields $N$: by duality, the operation corresponds to deleting $s-1$ parallel copies from each class of $P_s(N)$ and then dualizing. The nongraphic Fano minor from Section 4 is therefore also a minor of each $M_{s,t}$.

For $t\geq2$, parallel pairs prevent 3-connectivity. For $t=1,s\geq2$, two-element cocircuits prevent it. Consequently the only 3-connected matroid in this family is $M_{1,1}=N$. These examples agree with the attributed uniqueness theorem; they do not contradict its hypothesis.

## 9. A concrete 16-element counterexample to the parallel-only variant

Take $s=2,t=1$. The representing matrix is

$$
\boxed{K_2=\begin{pmatrix}G&0_{4\times8}\\I_8&I_8\end{pmatrix}.}
$$

It defines a connected nongraphic matroid with

$$
|E|=16,\quad r=12,\quad c=8,\quad c^*=4,
\qquad 16=\frac{8\cdot4}{2}.
$$

Its circuit list consists of fourteen eight-element sets. Its cocircuit list consists of eight pairs and $14\cdot2^4=224$ four-element sets, for 232 cocircuits altogether. It is simple because it has no circuit of size one or two.

Every uniform parallel expansion $P_k(N)$ has rank four, while this matroid has rank twelve. Thus it is not isomorphic to any $P_k(N)$ or to $N$. For $k\geq2$, those expansions also have parallel pairs, providing another distinction. The full binary matrix and exact finite certificates are included in the verification results.

More generally every $S_s(N)$ with $s\geq2$ refutes the same expanded claim: rank $8s-4$ exceeds four, all circuits have size $4s$, and exact equality still holds. The counterexample is an elementary consequence of duality, which is precisely why an exhaustive parallel-only transcription is too narrow.

## 10. Safe catalogue correction and remaining classification scope

The evidence supports two separate editorial updates:

- The main 3-connected exact-equality question has an attributed answer in the June 2026 submitted Lemos–Oxley manuscript. Record its preprint status and cite the precise theorem.
- The expanded parallel-only associated variant should not be presented as equivalent to the original informal variant. Uniform series expansions, and the two-parameter family above, must at least be allowed among elementary modifications.

This note does **not** classify all connected nongraphic equality cases. Nor does it refute the original source's broad language about excluding trivial modifications. Our family and its complete internal descriptions are proved here; the general main classification is the cited authors' result. No novelty claim is made for the series/parallel construction or these elementary consequences.

## 11. Reproducible exact verification

The accompanying `verify3066.py` uses exact binary linear algebra. Its roles are to verify the explicit matrices and small-instance certificates independently of the theoretical formulas, and to catch implementation errors. It does not replace the proof for arbitrary $s,t$, and it does not verify the 2026 manuscript's general classification theorem by finite enumeration.

The executed configuration passed every assertion. It enumerated **131,456 subsets** across four represented matroids, constructing dual representations independently by binary Gaussian elimination and checking the dual rank identity for every subset:

| Example | Elements | Rank | Subsets checked | Complete circuit sizes and counts | Complete cocircuit sizes and counts |
| --- | ---: | ---: | ---: | --- | --- |
| $N=\operatorname{AG}(3,2)$ | 8 | 4 | 256 | size 4: 14 | size 4: 14 |
| $N/000=F_7$ | 7 | 3 | 128 | size 3: 7; size 4: 7 | size 4: 7 |
| $S_2(N)$ | 16 | 12 | 65,536 | size 8: 14 | size 2: 8; size 4: 224 |
| $P_2(N)$ | 16 | 4 | 65,536 | size 2: 8; size 4: 224 | size 8: 14 |

The program also checks:

- The displayed $K_s$ for $s=1,2,3$, using interleaved $(x,j)$ column order, against an independently computed basis of $\ker H_s$. The displayed row rank, independent basis rank and stacked row rank agree at 4, 12 and 20 respectively.
- The cube's row-space/kernel equality, all circuit and cocircuit supports, all separation values, and 3-connectivity. The minimum $\lambda$ by subset size 1 through 7 is $(1,2,3,2,3,2,1)$.
- All 256 rank-function equalities certifying the displayed sixteen-element example's contraction to the labelled cube, and the further Fano contraction.
- Every predicted circuit and cocircuit of the 32-element $M_{2,2}$: **3,600 circuits and 232 cocircuits**, each checked directly for minimal dependence in its matrix or an independently computed dual. Exhaustiveness for this 32-element case is supplied by Section 7, not by an enumeration of all $2^{32}$ subsets.
- Nine parameter pairs $1\leq s,t\leq3$, with **1,002 direct-versus-compressed rank comparisons per pair**, including the empty and full sets and 1,000 fixed-seed masks. Every predicted cocircuit is checked. Circuit members are all checked when the predicted count is at most 10,000; otherwise all parallel pairs and 200 deterministic lifts per cube plane are checked. The three sampled circuit families are $(s,t)=(2,3),(3,2),(3,3)$, with 2,848, 2,824 and 2,872 checked members respectively. Their unenumerated counts remain consequences of the proof.

The implementation's compressed rank expression is $|J|+r_N(V\setminus F_X)-4$. It equals (R), since self-duality gives $r_N(F_X)=|F_X|+r_N(V\setminus F_X)-4$. The JSON records the exact scope, explicit matrices, counts and rank-table hashes. Reproduce with Python 3.10 or newer, without optimization flags:

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/7) for this material.

No floating-point arithmetic, third-party package, probabilistic primality test or unreported exhaustive search is involved. Fixed-seed sampling remains sampling; all arbitrary-parameter conclusions are justified by the proofs above.

Two separate same-model research agents independently checked the literature deduction, exact/floor boundary, rank formulas, circuit and cocircuit descriptions, and the source-wording distinction. A third implemented the verification. No independent human proof checking or formal proof-assistant certification is asserted.

## 12. References and inspection scope

1. James Oxley and Gordon Royle, **Equality in a matroidal circumference bound**, Open Problem Garden, posted by Gordon Royle, 2 November 2007. [Original question and variant](https://www.openproblemgarden.org/op/equality_in_a_matroidal_circumference_bound). Exact equality question and the informal “modifications like” wording inspected.
2. Manoel Lemos and James Oxley, **Bounding the size of a connected matroid**, author-hosted submitted preprint, dated 15 June 2026, 23 pages. [Full PDF](https://www.math.lsu.edu/~oxley/lemos_oxley_2026.pdf). Introduction, Theorem 1.4, Corollary 1.5 and final classification argument inspected. We use the stated main theorem with attribution; we do not assert a complete independent validation of every lemma in its 23-page proof or journal acceptance.
3. James Oxley, [official author homepage](https://www.math.lsu.edu/~oxley/), listing **Bounding the size of a connected matroid** with M. Lemos as “submitted” at inspection. Used only for publication-status reporting.
4. **We-Solve / UnsolvedMath TOP-3066**, also displayed as Math-3299, OPG-692. [Statement](https://github.com/We-Solve/research/blob/main/problems/74/prb_74eebac275fe494c8b594b660936f94c/statement.tex), [research prompt](https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-3066.txt). Exact definitions, expanded parallel-only variant and prompt inspected; the prompt listed no earlier contributions. Catalogue credit: Ulam AI, UnsolvedMath contributors and We-Solve, CC BY 4.0.

## Provenance and licences

Requested and submitted for Gaven (`@gavenren`), whose role was prompting and authorizing submission. Research, exposition, source checks, model-assisted mathematical review and original verification software were produced by OpenAI Codex (GPT-6; exact serving revision and reasoning setting unknown), including separate same-model agents. The main universal classification remains credited to Lemos–Oxley. No human mathematical contribution or independent human verification in this session is asserted.

Original exposition and result files: CC BY 4.0. Original software: Apache-2.0. Referenced papers are linked, not redistributed, and retain their original rights and attribution.


<details>
<summary>Complete executable verification software: verify3066.py (Apache-2.0)</summary>

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/7) for this material.

</details>



## Attribution and references from the original submission

### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6; exact serving revision unknown)

### LLM versions, settings and roles

OpenAI Codex (GPT-6) | version: unknown | reasoning: unknown | role: primary agent selected the problem, inspected primary sources, developed and wrote the elementary family proofs, reviewed the code, ran the final verification and prepared submission; two separate inherited same-model research agents independently checked the source deduction, boundary cases, mathematical proofs and exact claim scope; a third inherited same-model agent implemented and checked the exact verification software. Candidate-screening agents used the same inherited model; no other provider or model was used.

### People and roles

Gaven (@gavenren): requested another deeply investigated problem and authorized its public submission. No human mathematical derivation or independent human verification in this session is asserted. The cited Lemos-Oxley classification remains the work of the credited original authors, who did not participate in this session.

### References

1. James Oxley and Gordon Royle, **Equality in a matroidal circumference bound**, Open Problem Garden, posted by Gordon Royle, 2 November 2007. [Original question and variant](https://www.openproblemgarden.org/op/equality_in_a_matroidal_circumference_bound). Exact equality question and the informal “modifications like” wording inspected.
2. Manoel Lemos and James Oxley, **Bounding the size of a connected matroid**, author-hosted submitted preprint, dated 15 June 2026, 23 pages. [Full PDF](https://www.math.lsu.edu/~oxley/lemos_oxley_2026.pdf). Introduction, Theorem 1.4, Corollary 1.5 and final classification argument inspected. We use the stated main theorem with attribution; we do not assert a complete independent validation of every lemma in its 23-page proof or journal acceptance.
3. James Oxley, [official author homepage](https://www.math.lsu.edu/~oxley/), listing **Bounding the size of a connected matroid** with M. Lemos as “submitted” at inspection. Used only for publication-status reporting.
4. **We-Solve / UnsolvedMath TOP-3066**, also displayed as Math-3299, OPG-692. [Statement](https://github.com/We-Solve/research/blob/main/problems/74/prb_74eebac275fe494c8b594b660936f94c/statement.tex), [research prompt](https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-3066.txt). Exact definitions, expanded parallel-only variant and prompt inspected; the prompt listed no earlier contributions. Catalogue credit: Ulam AI, UnsolvedMath contributors and We-Solve, CC BY 4.0.

