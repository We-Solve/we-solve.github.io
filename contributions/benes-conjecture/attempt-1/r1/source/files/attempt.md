> Source: [original issue #16](https://github.com/We-Solve/research/issues/16). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.

# An explicit 50-point counterexample to the recorded Beneš implication

**Problem:** We-Solve TOP-3046, displayed as Math-3284, *Beneš Conjecture*; UnsolvedMath record 3046, OPG-37181.

**Claim and attribution.** The recorded implication is false. We give an explicit uniform partition of 50 points and an explicit permutation satisfying its meet and transitivity hypotheses, together with a particular permutation outside the proposed fifth power. The underlying bottleneck construction is due to Przemek Chojecki, *Beneš and Shuffle-Exchange Counterexamples*, arXiv:2607.15296v1, submitted 2 July 2026, Theorem 1 and Corollary 3 [2]. This is an attributed reconstruction and independently specified certificate, not a novelty claim. The current We-Solve statement already cites that paper; this report is not a claim to discover a missing historical status update.

We use the **right-action convention of the actual We-Solve statement**, throughout. We also prove the positive boundary $n=2$, give a genuine sufficient condition for completeness, and distinguish these conclusions from a general classification of all complete partition sequences. We do not claim a new shuffle-exchange theorem, a complete classification of sufficient conditions, or a peer-reviewed verification of the cited preprint.

## 1. The precise implication and the meaning of the stabilizer

For permutations of a finite set $E$, write

$$
x(\alpha\beta)=(x\alpha)\beta.
$$

If $u$ is a partition, then $S(u)$ consists of permutations fixing **each block individually, setwise**. Such a permutation can rearrange points inside a block; it cannot interchange two blocks. This distinction is necessary for the argument.

The meet condition $u\wedge\varphi(u)=0_E$ means that every nonempty intersection between a block of $u$ and a block of its image partition is a singleton. Put

$$
P=\varphi S(u)=\{\varphi s:s\in S(u)\}.
$$

The recorded question asks whether, for every uniform $u$ satisfying the meet condition and every $n\ge2$,

$$
P^n\text{ transitive on }E
\quad\Longrightarrow\quad
P^{2n-1}=\mathfrak S(E).
\tag{1}
$$

Here transitivity is a one-point statement: for each ordered pair $x,y$, a word in $P^n$ may be chosen specifically for that pair. Equality with the whole symmetric group requires the same word to realize all point images of an arbitrary permutation simultaneously. Our example separates these requirements.

## 2. A small regular network with a persistent bottleneck

Let $N\ge2$. Take two vertex sets

$$
X=\{x_0,\ldots,x_{N-1}\},\qquad
Y=\{y_0,\ldots,y_{N-1}\}.
$$

There are $N$ edges leaving each vertex, defined by

$$
\begin{array}{ll}
x_0\longrightarrow y_j,&x_i\longrightarrow x_j\quad(i>0),\\
y_0\longrightarrow x_j,&y_i\longrightarrow y_j\quad(i>0),
\end{array}
\qquad 0\le j<N.
\tag{2}
$$

These are edges between successive copies of the vertex set in a layered network. An edge such as $x_i\to x_i$ connects different layers, so it is permitted in a simple ordered two-stage graph.

Every source has $N$ different targets. Every $x_j$ receives one edge from $y_0$ and one from each of $x_1,\ldots,x_{N-1}$, for indegree $N$; the same holds on the other side. Thus the network is simple and $N$-regular on both sides.

It reaches every vertex from every source in two stages. For sources in $X$, the following choices suffice:

| Source | Target in $X$ | Target in $Y$ |
| --- | --- | --- |
| $x_0$ | $x_0\to y_0\to x_j$ | $x_0\to y_1\to y_j$ |
| $x_i, i>0$ | $x_i\to x_1\to x_j$ | $x_i\to x_0\to y_j$ |

Interchange $X$ and $Y$ for the other sources. The indices 1 exist because $N\ge2$. One stage does not suffice: $x_0$ has no edge to $X$. Its external-connectivity exponent is therefore exactly two.

There are only $N$ edges from $X$ to $Y$ in each stage: those leaving $x_0$. Consequently, $r$ stages provide $rN$ such crossing slots. Sending $N$ independent requests from each of the $N$ vertices of $X$ to $Y$ demands $N^2$ crossings. This is the obstruction in Chojecki's construction. We next express it directly as a statement about the exact permutation product in (1), without relying on an ambiguous translation between left and right actions.

## 3. The points, partition, and fully specified permutation

Let $E$ be the edge set of (2). Encode its $2N^2$ points as

$$
X(i,j),\ Y(i,j),\qquad 0\le i,j<N,
$$

where the letter and $i$ specify the source and $j$ its outgoing-edge index. Thus $X(0,j)$ has target $y_j$, while $X(i,j)$ for $i>0$ has target $x_j$, and similarly on the $Y$ side.

For each network vertex $v$, let $U_v$ be its $N$ outgoing edges and $I_v$ its $N$ incoming edges. Define

$$
u=\{U_v:v\in X\cup Y\}.
$$

This partition has $2N$ blocks, each of size $N$. We specify the permutation $\varphi$ by

$$
\begin{aligned}
X(i,j)\varphi&=X(j+1,i) &&(0\le j<N-1),\\
X(i,N-1)\varphi&=Y(0,i),\\
Y(i,0)\varphi&=X(0,i),\\
Y(i,j)\varphi&=Y(j,i) &&(1\le j<N).
\end{aligned}
\tag{3}
$$

For every $v$, these formulas biject $U_v$ onto $I_v$. The outgoing blocks partition $E$, as do the incoming blocks, so their combined map is a permutation. In particular,

$$
\varphi(u)=\{I_v:v\in X\cup Y\}.
$$

A point of $U_a\cap I_b$ is an edge from $a$ to $b$. Because (2) is simple, each such intersection has at most one point. Every point is in one such intersection, so

$$
u\wedge\varphi(u)=0_E.
\tag{4}
$$

This verifies the exact meet hypothesis, rather than replacing it by connectivity or by an unrelated group-generation condition.

## 4. An explicit proof that $P^3$ is transitive

Let $P=\varphi S(u)$, and take arbitrary $x,y\in E$. Let $b$ be the source of the edge $x\varphi$, and let $d$ be the source of $y$. Section 2 supplies a two-edge path

$$
d\longrightarrow c\longrightarrow b.
$$

Write $e_2$ for the edge $d\to c$ and $e_1$ for the edge $c\to b$. Since $U_b\varphi=I_b$, we have $e_1\varphi^{-1}\in U_b$. Choose $s_1\in S(u)$ sending $x\varphi$ to $e_1\varphi^{-1}$. This is possible using a single transposition inside $U_b$, or the identity if the points agree. Then

$$
x\varphi s_1\varphi=e_1\in U_c.
$$

Similarly choose $s_2\in S(u)$, inside $U_c$, sending $e_1$ to $e_2\varphi^{-1}$. Finally choose $s_3\in S(u)$, inside $U_d$, sending $e_2$ to $y$. These choices give

$$
x\varphi s_1\varphi s_2\varphi s_3=y.
\tag{5}
$$

The displayed word has exactly three $P$-factors. Since $x,y$ were arbitrary, $P^3$ is transitive. This argument also describes a concrete word for every ordered point pair; the software independently verifies all 2,500 words in the 50-point instance.

## 5. A particular permutation excluded from the fifth power

Split the edge labels by their source side:

$$
E_X=\{X(i,j)\},\qquad E_Y=\{Y(i,j)\},
\qquad |E_X|=|E_Y|=N^2.
$$

Every $s\in S(u)$ preserves these two sets because it fixes each outgoing block. In contrast, (3) shows that $\varphi$ has exactly $N$ transitions from $E_X$ to $E_Y$, namely

$$
X(i,N-1)\varphi=Y(0,i),\qquad 0\le i<N.
\tag{6}
$$

Define the side-exchange involution

$$
X(i,j)\gamma=Y(i,j),\qquad Y(i,j)\gamma=X(i,j),
$$

and let the target permutation be

$$
q=\varphi\gamma.
\tag{7}
$$

It is $q$, rather than necessarily $\gamma$, that we exclude from the product in (1). This distinction removes a potential composition-order error.

Suppose $q\in P^m$. For suitable $s_1,\ldots,s_m\in S(u)$, right-action multiplication would give

$$
\varphi\gamma=\varphi s_1\varphi s_2\cdots\varphi s_m.
$$

Cancel the common leading $\varphi$ in the group:

$$
\gamma=s_1\varphi s_2\cdots\varphi s_m.
\tag{8}
$$

Track all $N^2$ distinct initial points of $E_X$ through this composition. They remain distinct at every step because every factor is a permutation. Each finishes in $E_Y$, since $\gamma(E_X)=E_Y$. Therefore every tracked point must cross from $E_X$ to $E_Y$ at least once. The $S(u)$-factors permit no crossings. At any one of the $m-1$ occurrences of $\varphi$, at most $N$ tracked points can use the $N$ slots in (6). Counting all available slots gives the necessary inequality

$$
N^2\le(m-1)N.
\tag{9}
$$

Returns from $E_Y$ to $E_X$ cannot invalidate this lower bound: each initially $X$-labelled point still needs at least one forward crossing. We only count a necessary resource, not a sufficient routing condition.

It follows that

$$
q\notin P^m\qquad\text{whenever }m-1<N.
\tag{10}
$$

Now set **$N=5$ and $n=3$**. The set has 50 points, $u$ has ten blocks of five, and (4) and (5) give the required hypotheses. But if $q\in P^5$, (9) would require $25\le20$. Hence

$$
\boxed{P^3\text{ is transitive},\qquad q\notin P^5,\qquad
P^5\ne\mathfrak S(E).}
$$

This is a full counterexample to the recorded universal implication.

## 6. An infinite family and the extent of the failure

The same construction supplies a counterexample at every exponent $n\ge3$. Choose

$$
N>2n-2.
$$

Transitivity of $P^3$ already implies transitivity of $P^n$. Indeed, fix any $r\in P^{n-3}$, taking $r$ to be the identity when $n=3$. For any $x,y$, choose $p\in P^3$ sending $xr$ to $y$. Then $rp\in P^n$ sends $x$ to $y$. This uses only that every element of $P$ is a permutation and that $P$ is nonempty.

On the other hand, $m=2n-1$ satisfies $m-1<N$, so (10) excludes $q$ from $P^{2n-1}$. This reproduces the full exponent range of Chojecki's Corollary 3.

The obstruction is stronger than the failure of a factor two: the fixed exponent $P^3$ is transitive for arbitrarily large $N$, but $P^m\ne\mathfrak S(E)$ for every $m\le N$. No bound on the required product length can depend only on this fixed transitivity exponent in the general class considered here.

## 7. A valid sufficient condition for completeness

The catalogue also asks broadly for sufficient conditions for products of partition stabilizers. A false proposed criterion does not make that wider request meaningless. Here is a concrete condition, with an explicit factorization proof.

**Three-partition criterion.** Let $h_0,h_1,h_2$ each have $r$ blocks of size $r$. Suppose every block of $h_0$ meets every block of $h_1$ in exactly one point, and the same holds for $h_1,h_2$. Then

$$
S(h_0)S(h_1)S(h_2)=\mathfrak S(E).
\tag{11}
$$

To prove this, fix any permutation $\pi$. Construct a bipartite multigraph with the $h_0$-blocks on the left and the $h_2$-blocks on the right. Each point $e\in E$ contributes a distinct request edge from its $h_0$-block to the $h_2$-block containing $e\pi$. Both sides have degree $r$.

This request multigraph decomposes into $r$ perfect matchings. Indeed, if $A$ is a subset of left vertices, its $r|A|$ incident edges end in a neighbor set of total available degree at most $r|N(A)|$, so Hall's condition holds. Remove a perfect matching and repeat in the remaining regular multigraph.

Index these matchings by the $r$ blocks $C$ of $h_1$. For a request $e$ of color $C$, let $a_e$ be the unique point in the intersection of $C$ with the source $h_0$-block, and let $b_e$ be the unique point in the intersection of $C$ with the target $h_2$-block. The matching property ensures that all $a_e$ are different and all $b_e$ are different.

Consequently the rules

$$
e\alpha_0=a_e,\qquad a_e\alpha_1=b_e,
\qquad b_e\alpha_2=e\pi
$$

define permutations. They preserve $h_0,h_1,h_2$, respectively. Their right-action composition is $\alpha_0\alpha_1\alpha_2=\pi$, proving (11). This is the regular-mask/perfect-matching mechanism discussed in [2, Lemma 9 and Proposition 10].

For longer sequences, the presence of such a complete three-factor subproduct is itself sufficient: all other stabilizers contain the identity. This is one useful sufficient condition, not an assertion that every complete sequence must contain this special structure.

## 8. Why the first possible exponent $n=2$ is positive

Under the hypotheses of (1), suppose $P^2$ is transitive. Write $u$ as $b$ blocks of size $k$. For a point $x$, the first $\varphi$-step lands in some $u$-block $B$. The following $S(u)$-step can choose any point of $B$. After the next $\varphi$-step and $S(u)$-step, the reachable points are exactly the union of $u$-blocks meeting $B\varphi$.

Since every block $B$ can occur and $P^2$ is transitive, every $B\varphi$ must meet every $u$-block. The meet hypothesis makes each intersection a singleton. Thus $k=b$, and $u,\varphi(u)$ are orthogonal grid partitions. Applying $\varphi$ gives the same property for $\varphi(u),\varphi^2(u)$. Section 7 applies.

For completeness, the right-action product identity is

$$
h_i=\varphi^i(u),\qquad
S_i=S(h_i)=\varphi^{-i}S(u)\varphi^i,
\qquad
P^m=\varphi^m S_{m-1}S_{m-2}\cdots S_0.
\tag{12}
$$

This follows by direct multiplication or induction; it is not the left-action identity from the cited paper copied unchanged. Equation (11) gives $S_0S_1S_2=\mathfrak S(E)$. Taking inverses reverses this product, because each $S_i$ is a subgroup, so $S_2S_1S_0=\mathfrak S(E)$. Equation (12) now yields $P^3=\mathfrak S(E)$.

Therefore $n=2$ satisfies the proposed implication, while every $n\ge3$ has counterexamples. The 50-point construction occurs at the first possible exponent. We make no claim that 50 is the smallest possible point count.

## 9. What the exact computation certifies

The accompanying verify3046.py was executed using exact integer arithmetic; all assertions passed. It represents permutations by their complete zero-based image lists and implements right composition as $(ab)[x]=b[a[x]]$. The complete verification_results.json record includes all 50 points, all ten outgoing and incoming blocks, and the complete lists for $\varphi,\gamma,q$.

The checks include:

- Bijection of $\varphi$, uniform block sizes, the 50 singleton meet cells, and exact agreement of (3) with independently formed sorted incoming-block bijections.
- All 100 network source-target pairs reachable in two stages, and all 2,500 ordered point pairs reachable by $P^3$.
- A second transitivity check that explicitly constructs and evaluates the three within-block transpositions in (5) for every point pair: 2,500 words and 7,500 transpositions.
- The exact cancellation $\varphi^{-1}q=\gamma$, five crossing slots per $\varphi$-stage, and the strict cut inequality $20<25$, checked in both the point-layer and network models.
- Thirteen distinct additional finite family cases: $n=4,\ldots,9$ with $N=2n-1$, and $n=3$ with $N\in\{6,7,8,10,12,16,20\}$. An exhaustive eight-point calculation corroborates the right-action multiplication and cancellation identities: the first five power cardinalities are $16,256,4096,18688,40320$.

Run the program with Python 3 and its standard library:

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/16) for this material.

Separate inherited same-model agents reviewed the complete proof, the right-action conventions, and the certificate construction. No formal proof-assistant certification is claimed.

No enumeration of $\mathfrak S_{50}$, no sampling of its elements, and no numerical flow approximation is used. The proof of nonmembership is the integer cut certificate in Section 5. The infinite family and the positive $n=2$ theorem are proved above; they are not extrapolations from the finite tests. The JSON record states the exact finite ranges and outcomes.

## 10. Scope and references

The recorded Beneš implication is refuted with all of its stated hypotheses preserved. The general sufficient-condition request is addressed by a proved constructive criterion and the sharp exponent-two boundary, rather than being presented as an entirely classified problem. More specialized rearrangeable networks may satisfy stronger statements because their extra structure excludes the bottleneck used here.

1. We-Solve, *Beneš Conjecture*, TOP-3046 / Math-3284, UnsolvedMath record 3046, OPG-37181. Actual right-action statement inspected during preparation. <https://we-solve.github.io/problems/benes-conjecture/>. Catalogue statement: CC BY 4.0. Credit: ULAM.AI, the UnsolvedMath Contributors, and We-Solve; original source authors retain their credit.
2. Przemek Chojecki, *Beneš and Shuffle-Exchange Counterexamples*, arXiv:2607.15296v1, submitted 2 July 2026. Theorem 1, Corollary 3, Lemma 9 and Proposition 10 are the relevant source results. <https://arxiv.org/abs/2607.15296v1>; full HTML <https://arxiv.org/html/2607.15296v1>; DOI <https://doi.org/10.48550/arXiv.2607.15296>. The arXiv record inspected exposes this v1; publication and independent human verification are not asserted.

Gaven (@gavenren) requested continued deeply investigated contributions and authorized public submission. Preparation, derivation, code generation and review were performed with OpenAI Codex (GPT-6; exact serving revision and reasoning setting unknown), including separate same-model agents. No human mathematical derivation in this session or independent human mathematical checking is claimed. Mathematical text and result records: CC BY 4.0. Verification software: Apache-2.0, Copyright 2026 gavenren. Linked source material retains its original attribution and rights; source papers are not redistributed.


<details>
<summary>Complete executable certificate software (Python standard library; Apache-2.0)</summary>

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/16) for this material.

</details>



## Attribution and references from the original submission

### Who did the work
LLM only (people only prompted or submitted)

### LLMs used
Other (named below)

### Other LLMs
OpenAI, Codex (GPT-6; exact serving revision unknown)

### LLM versions, settings and roles
OpenAI Codex (GPT-6) | version: unknown | reasoning: unknown | role: exact statement and primary-source inspection, right-action reconstruction, explicit witness and sufficiency proofs, exact certificate software, independent same-model mathematical/code review, and submission preparation. Separate inherited same-model agents reviewed the proof and the permutation convention. No formal proof-assistant certification or independent human mathematical verification is claimed.

### People and roles
Gaven (@gavenren) requested continued deeply investigated contributions and authorized public submission. No human mathematical derivation or proof checking in this session is asserted. Przemek Chojecki is credited for the established bottleneck family and partition-stabilizer counterexample.

### References
Full references and precise scope are in the write-up. Primary source: Przemek Chojecki, Beneš and Shuffle-Exchange Counterexamples, arXiv:2607.15296v1, submitted 2 July 2026; Theorem 1, Corollary 3, Lemma 9 and Proposition 10 were inspected. The exact current We-Solve right-action statement was checked; it already cites the preprint. The proof above works directly in that right-action convention and does not import a left-action product identity unchanged. No journal publication or independent human review of the preprint is asserted. Source papers are not redistributed.

