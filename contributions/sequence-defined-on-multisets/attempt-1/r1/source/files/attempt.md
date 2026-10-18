> Source: [original issue #11](https://github.com/We-Solve/research/issues/11). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


# Inventory arrays: a complete proof, all cycles and exact certificates

**We-Solve TOP-3048 / Math-3294, OPG-37226: Sequence defined on multisets.**

**Answer: yes.** Every allowed initial array eventually enters a cycle of least period one, two or three. We prove this for all positive integer entries, classify every eventual cycle, and give a complete 44-state certificate for the small cases. Period three occurs precisely in the seven-column family described below.

**Attribution.** This result is established literature, not a new solution of an open problem. Eliahou and Erickson's 2013 paper states the convergence and cycle classification; Cain and Enin's 2020 paper develops the same multiset dynamics and a stronger preperiod analysis. The exposition below supplies a self-contained proof of the catalogue's positive-integer statement, with exact lifting conditions and independently implemented finite checks. No historical novelty or claim to reprove the stronger linear preperiod bound is made.

## 1. The array operation and its exact multiset model

An allowed array has a strictly increasing positive top row and an arbitrary positive bottom row of the same finite nonzero length. Its successor lists all distinct entries in increasing order, with their frequencies underneath. Both rows are counted. Integers such as 100 remain single entries; this is not a decimal digit operation.

For a nonempty finite multiset $S$, let $R(S)$ be its support, $d(S)=|R(S)|$, $q(S)=|S|$ counting multiplicity, and $H(S)=\max S$. Write $\mu(S)$ for the multiset of positive frequencies of the elements of $R(S)$. Let $\uplus$ denote multiset union, adding multiplicities. Define

$$f(S)=R(S)\uplus\mu(S).$$

Let $C(S)$ be the canonical frequency array of $S$. Flattening both rows of an array $A$ gives a multiset $S(A)$, and

$$T(A)=C(S(A)),\qquad S(C(S))=f(S). \tag{1}$$

Thus $S_i=f^i(S(A_0))$ and $A_{i+1}=C(S_i)$. Eventual period $p$ for the multisets implies eventual period $p$ for the arrays, after at most a one-step shift. Conversely an array period induces a multiset period. On an eventual cycle their least periods agree: each divides the other through the two maps in (1).

## 2. A bounded-height proof of eventual periodicity

Put $H_i=H(S_i)$, $d_i=d(S_i)$ and $q_i=q(S_i)$. Directly from the rule,

$$R(S_i)\subseteq R(S_{i+1}),\qquad q_{i+1}=2d_i.$$

Consequently heights and support sizes never decrease, and $q_{i+1}\geq q_i$ for $i\geq1$.

### Growth can occur only in a rigid configuration

Suppose $H_{i+1}>H_i$ with $i\geq1$, and put $n=d_{i-1}$. The new maximum must be a frequency in $S_i$. Since $S_i=R(S_{i-1})\uplus\mu(S_{i-1})$, the first summand contributes at most one copy of a label and the second has $n$ entries. Every frequency in $S_i$ is therefore at most $n+1$. Positivity of the $n$ distinct labels gives $H_i\geq H_{i-1}\geq n$. Hence

$$n+1\geq H_{i+1}>H_i\geq n.$$

All quantities are integers, so $H_i=n$ and $H_{i+1}=n+1$. Attaining frequency $n+1$ forces every entry of $\mu(S_{i-1})$ to equal a label $b$ already present. The support has $n$ positive labels and maximum at most $n$, so

$$S_{i-1}=b\{1,2,\ldots,n\},\qquad1\leq b\leq n, \tag{2}$$

where multiplication means taking $b$ copies of every element.

If $i\geq2$, cardinality monotonicity gives $2n=q_i\geq q_{i-1}=bn$, so $b\in\{1,2\}$. If $i\geq3$, one more preceding state exists after the initial state, giving the following sharper restrictions.

- If $b=1$, then $q_{i-1}=n=2d_{i-2}$, so $n=2h$ is even. The $h$ entries of $\mu(S_{i-2})$ are distinct, because they lie in the set $S_{i-1}$. Thus $q_{i-2}\geq h(h+1)/2$. But $q_{i-2}\leq q_{i-1}=2h$, forcing $h\leq3$ and $n\leq6$.
- If $b=2$, then $d_{i-2}=n$. Its support lies in $\{1,\ldots,n\}$ and has $n$ elements, so it is that whole set. Subtracting its support from $S_{i-1}$ in (2) leaves $\mu(S_{i-2})=\{1,\ldots,n\}$. Consequently $n(n+1)/2=q_{i-2}\leq2n$, forcing $n\leq3$.

Every height increase at a step $i\geq3$ therefore ends at height at most seven. Earlier increases after $S_1$ are by at most one each. Let

$$M=H_1,\qquad B=\max(M+2,7).$$

We obtain $H_i\leq B$ for every $i\geq1$. Also $H_0\leq H_1$, and $q_i=2d_{i-1}\leq2B$ for $i\geq1$.

All later states are multisets on $B$ labels with at most $2B$ entries. There are exactly $\binom{3B}{B}$ such multisets including the empty one, by stars and bars. A deterministic sequence in this finite state set must repeat and thereafter cycle. This proves eventual periodicity; it does not yet restrict the cycle length. The state-count bound is deliberately crude and is not the sharper preperiod theorem in the cited literature.

## 3. Reducing every cycle to a partition map

Along an $f$-cycle the nondecreasing supports must all coincide with a set $R$ of size $n$. Every state has $2n$ entries and can be written uniquely as

$$S_i=R\uplus X_i,\qquad |X_i|=n.$$

Because the next state has $2n$ entries, the frequencies of $S_i$ sum to $2n$. Hence every $X_i$, being the frequency multiset of the preceding state, also has sum $2n$.

For $d(X)$ distinct values in $X$, define

$$g_n(X)=1^{n-d(X)}\uplus
\{\operatorname{mult}_X(x)+1:x\in R(X)\}. \tag{3}$$

Here $1^h$ means $h$ copies of one. Labels of $R$ absent from $X$ have frequency one; those present have frequency one plus their multiplicity in $X$. Therefore

$$X_{i+1}=g_n(X_i).$$

The relevant finite set is

$$\mathcal T_n=\{X:|X|=n,\ \textstyle\sum_{x\in X}x=2n,\ x\geq1\}.$$

Subtracting one from every entry and discarding zeros identifies $\mathcal T_n$ exactly with the integer partitions of $n$. Conversely, add one to every part and pad with ones to obtain $n$ entries. Formula (3) preserves $\mathcal T_n$: its cardinality is $n$, and its sum is

$$n-d(X)+\sum_{x\in R(X)}(\operatorname{mult}_X(x)+1)=2n.$$

### Which partition cycles correspond to real array cycles?

For a $g_n$-cycle $X_0,\ldots,X_{p-1}$ let $L=\bigcup_iR(X_i)$. It lifts to an $f$-cycle exactly when $|L|\leq n$. Indeed, choose any positive-label set $R$ of size $n$ containing $L$. Then

$$f(R\uplus X_i)=R\uplus g_n(X_i)=R\uplus X_{i+1}.$$

Conversely the preceding reduction forces such an $R$. Adding the fixed multiset $R$ is injective, so the least periods agree. Canonical array cycles are obtained by applying $C$ to these multiset states; equation (1) advances them in the same cyclic order.

This support condition is essential. Some small partition cycles have more distinct labels across the cycle than their allowed support size, and cannot occur for the original arrays.

## 4. A uniform bound of four distinct values on partition cycles

For $n\geq4$, an element of $\mathcal T_n$ cannot have all its entries distinct: their sum would be at least $n(n+1)/2>2n$. Every image under $g_n$ therefore contains one, and so does every state on a cycle.

On such a cycle put $a_i=d(X_i)$ and let $b_i$ be the number of entries of $X_i$ exceeding one, counted with multiplicity. Equation (3) gives $b_{i+1}=a_i$. Thus their maximum values over the cycle are equal; call the common maximum $D$.

Choose $i$ with $a_{i+1}=D$, and let $r$ count the distinct positive multiplicities among labels other than one in $X_i$. The support of $g_n(X_i)$ consists of at most: one; the frequency of one plus one; and these $r$ multiplicity values plus one. Hence $D\leq r+2$.

Distinct positive multiplicities require at least $1+2+\cdots+r$ entries. Therefore, if $D\geq5$,

$$D\geq b_i\geq\frac{r(r+1)}2
\geq\frac{(D-2)(D-1)}2>D,$$

a contradiction. Thus every state on every such cycle has at most four distinct values and at most four entries exceeding one.

## 5. All cycles for $n\geq8$

Since $a_i\leq4$, the state $X_{i+1}$ has $n-a_i\geq4$ ones. Every other label has multiplicity at most four. Consequently the frequency of one is maximal, and

$$\max X_{i+2}=n-a_i+1.$$

Periodicity guarantees some $i$ with $a_i\leq a_{i+1}$. In $X_{i+2}$ remove one occurrence of its maximum $n-a_i+1$. It originally had $q=a_{i+1}\leq4$ non-one entries, leaving $k=q-1\leq3$ non-one entries. Their total excess above one is $a_i$, because the total excess of $X_{i+2}$ is $n$. Hence

$$k\leq a_i\leq q=k+1.$$

The case $k=0$ is impossible, since then the excess would be zero while $a_i\geq1$. For $k=1,2,3$, the remaining entries are either all twos or one three and otherwise twos. This yields six possible states through which every cycle must pass.

In the following table each displayed list is padded with ones to length $n$; $G$ is added because it is an image of $E$.

| State | Entries exceeding one | Image under $g_n$ |
| --- | --- | --- |
| $A$ | $2,n$ | $C$ |
| $B$ | $3,n-1$ | $C$ |
| $C$ | $2,2,n-1$ | $D$ |
| $D$ | $2,3,n-2$ | $E$ |
| $E$ | $2,2,2,n-2$ | $G$ |
| $F$ | $2,2,3,n-3$ | $F$ |
| $G$ | $2,4,n-3$ | $E$ |

Every edge follows by counting frequencies in (3). There is no boundary collision at $n=8$, since the displayed large labels $n-3$ or larger are at least five and distinct from two, three and four. A cycle containing one of these states must be one of the displayed terminal cycles. Therefore the complete list for $n\geq8$ is

$$F_n=1^{n-4}\uplus\{2,2,3,n-3\}\quad\text{(fixed)},$$

$$E_n=1^{n-4}\uplus\{2,2,2,n-2\}
\quad\longleftrightarrow\quad
G_n=1^{n-3}\uplus\{2,4,n-3\}.$$

The support $R$ for a fixed lift must contain $\{1,2,3,n-3\}$. For a two-cycle lift it must contain $\{1,2,4,n-3,n-2\}$. In each case choose any additional distinct positive labels to make $|R|=n$. This describes the arbitrary large labels exactly.

## 6. Every small case and the period-three family

The numbers of states of $\mathcal T_1,\ldots,\mathcal T_7$ are $1,2,3,5,7,11,15$, totaling 44. The appendix gives every state and every transition. It enumerates all partitions, rather than a sample or a bounded choice of original labels.

| $n$ | Partition cycle or cycles | Required labels for a lift |
| ---: | --- | --- |
| 1 | $(2)$ fixed | $R=\{2\}$ |
| 2 | $(1,3)\leftrightarrow(2,2)$ | Impossible: three labels exceed support size two |
| 3 | $(1,1,4)\to(1,2,3)\to(2,2,2)\to$ first | Impossible: four labels exceed support size three |
| 4 | $(1,1,3,3)$ fixed; $(1,2,2,3)$ fixed | $\{1,3\}$; respectively $\{1,2,3\}$ |
| 5 | $(1,1,2,3,3)$ fixed | $\{1,2,3\}$ |
| 6 | $(1,1,1,2,3,4)\leftrightarrow(1,1,2,2,2,4)$ | $\{1,2,3,4\}$ |
| 7 | $(1,1,1,2,2,3,4)$ fixed | $\{1,2,3,4\}$ |
| 7 | $(1,1,1,1,2,3,5)\to(1,1,1,2,2,2,5)\to(1,1,1,1,2,4,4)\to$ first | $\{1,2,3,4,5\}$ |

Every feasible row allows any $R$ of size $n$ containing its required labels. Section 3 gives every lift and shows that none is omitted.

Combining Sections 5 and 6 proves that every eventual cycle has least period one, two or three. Period three occurs only with seven columns. There is one partition three-cycle, but infinitely many labelled array lifts: choose $R=\{1,2,3,4,5,u,v\}$ with distinct $u,v\geq6$.

For $R=\{1,\ldots,7\}$ the following bottom rows, with that same top row, give an explicit three-cycle:

$$\begin{aligned}
(5,2,2,1,2,1,1)
&\longmapsto(4,4,1,1,2,1,1)\\
&\longmapsto(5,2,1,3,1,1,1)
\longmapsto(5,2,2,1,2,1,1).
\end{aligned}$$

Counting both rows directly verifies every arrow. These three bottom rows are distinct, so the least period is three. The fixed array $[2;2]$ demonstrates period one; the six-column row above supplies period two after lifting.

## 7. Verification scope and reproducibility

The accompanying standard-library program independently implements the literal array operation and the multiset operation. It enumerates partition states, records transitions and cycles, checks the support condition, and tests the correspondence with actual arrays.

The recorded configuration passed every assertion:

| Check | Exact executed scope |
| --- | --- |
| Partition quotient | All 28,628 states for $1\leq n\leq30$; all 44 small transitions included |
| Small cycles | Nine quotient cycles, exactly seven satisfying the lift condition |
| Generic families | All cycles for $8\leq n\leq30$ match $F_n$ and $E_n\leftrightarrow G_n$; 161 seed-transition checks |
| Initial arrays | All 4,650 arrays with 1–4 columns, distinct top labels from $\{1,\ldots,5\}$ and bottom entries from that same alphabet |
| Orbit checks | 26,404 visited array states counting separate initial orbits; all satisfy the height bound and the multiset/array correspondence |
| Independent step checks | 1,000 fixed-seed arrays with labels and bottom entries from 1 through 30 |
| Unbounded-label examples | Constructed cycles of periods one, two and three with additional labels $10^6$ and $10^{12}$ |

The bounded initial-array census happens to reach only fixed points. It is not presented as experimental evidence of periods two or three; those are verified separately by the explicit constructed cycles. The JSON records transition hashes, complete small tables, lift data and precise sampling limits.

The infinite conclusion does not depend on extrapolating finite tests: Section 2 proves eventual periodicity for every starting array, Sections 4–5 prove the entire unbounded family of cycle classifications, and the appendix exhausts all remaining partition cases. The program checks the certificate and its implementation. Its bounded-alphabet starting-array census is explicitly restricted to the stated alphabet and lengths.

Run with Python 3.10 or newer, without optimization flags:

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/11) for this material.

No floating-point calculation or probabilistic test is used. Independent same-model agents reviewed the mathematical argument and implemented the exact checks. No independent human mathematical verification or formal proof-assistant certification is asserted.

## 8. Sources and inspected scope

1. **Shalom Eliahou and Martin J. Erickson**, *Mutually describing multisets and integer partitions*, Discrete Mathematics **313**(4), 28 February 2013, 422–433, DOI [10.1016/j.disc.2012.11.014](https://doi.org/10.1016/j.disc.2012.11.014). The publisher abstract explicitly records convergence and complete cycle classification. The abstract and [author's university bibliography](https://lmpa.univ-littoral.fr/index.php?page_id=13&personne=21) were inspected; the full 2013 proof was not accessible and is not claimed to have been read.
2. **Onno M. Cain and Sela T. Enin**, *Inventory Loops (i.e. Counting Sequences) have Pre-period $2\max S_1+60$*, [arXiv:2004.00209v1](https://arxiv.org/pdf/2004.00209v1), 1 April 2020. Sections 3–5, including the multiset map, growth argument, cycle reduction, Theorems 5.3 and 5.5 and Corollary 5.5.1, were inspected. The known dynamics and classification are credited to the literature. We supply the explicit proof above and make no claim to audit or reprove the paper's later sharper preperiod analysis.
3. **Martin Erickson**, [Sequence defined on multisets, Open Problem Garden](https://www.openproblemgarden.org/op/a_sequence_defined_on_multisets), posted 29 June 2010. Full statement and the anonymous 18 July 2011 comment reporting a solution inspected. That comment alone is not used as proof.
4. **We-Solve / UnsolvedMath TOP-3048**, also displayed as Math-3294, OPG-37226. [Research prompt](https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-3048.txt). Full definitions and earlier-contribution section inspected; no prior We-Solve contributions were listed. Catalogue credit: ULAM.AI, UnsolvedMath contributors and We-Solve, CC BY 4.0.

## Provenance and licences

Gaven (`@gavenren`) requested continued deeply investigated submissions and authorized public posting. Exposition, source checks, mathematical derivation and review, and original verification software were produced by OpenAI Codex (GPT-6; exact serving revision and reasoning setting unknown), including separate inherited same-model agents. The main result and prior methods are attributed above. No historical novelty or human mathematical proof checking in this session is claimed.

Original exposition and non-software result files: CC BY 4.0. Original software: Apache-2.0. Referenced papers remain under their original rights and are linked with attribution.

## Appendix: the complete 44-state transition certificate

Each block enumerates all partitions of its stated $n$ through the bijection in Section 3. IDs are local to the block. The image column is obtained by the explicit frequency rule (3); following these edges gives precisely the small cycles in Section 6.

### n=1

| ID | State | Image ID |
| ---: | --- | ---: |
| 1 | (2,) | 1 |

### n=2

| ID | State | Image ID |
| ---: | --- | ---: |
| 1 | (1, 3) | 2 |
| 2 | (2, 2) | 1 |

### n=3

| ID | State | Image ID |
| ---: | --- | ---: |
| 1 | (1, 1, 4) | 2 |
| 2 | (1, 2, 3) | 3 |
| 3 | (2, 2, 2) | 1 |

### n=4

| ID | State | Image ID |
| ---: | --- | ---: |
| 1 | (1, 1, 1, 5) | 2 |
| 2 | (1, 1, 2, 4) | 4 |
| 3 | (1, 1, 3, 3) | 3 |
| 4 | (1, 2, 2, 3) | 4 |
| 5 | (2, 2, 2, 2) | 1 |

### n=5

| ID | State | Image ID |
| ---: | --- | ---: |
| 1 | (1, 1, 1, 1, 6) | 2 |
| 2 | (1, 1, 1, 2, 5) | 4 |
| 3 | (1, 1, 1, 3, 4) | 4 |
| 4 | (1, 1, 2, 2, 4) | 5 |
| 5 | (1, 1, 2, 3, 3) | 5 |
| 6 | (1, 2, 2, 2, 3) | 4 |
| 7 | (2, 2, 2, 2, 2) | 1 |

### n=6

| ID | State | Image ID |
| ---: | --- | ---: |
| 1 | (1, 1, 1, 1, 1, 7) | 2 |
| 2 | (1, 1, 1, 1, 2, 6) | 5 |
| 3 | (1, 1, 1, 1, 3, 5) | 5 |
| 4 | (1, 1, 1, 1, 4, 4) | 3 |
| 5 | (1, 1, 1, 2, 2, 5) | 6 |
| 6 | (1, 1, 1, 2, 3, 4) | 8 |
| 7 | (1, 1, 1, 3, 3, 3) | 4 |
| 8 | (1, 1, 2, 2, 2, 4) | 6 |
| 9 | (1, 1, 2, 2, 3, 3) | 7 |
| 10 | (1, 2, 2, 2, 2, 3) | 5 |
| 11 | (2, 2, 2, 2, 2, 2) | 1 |

### n=7

| ID | State | Image ID |
| ---: | --- | ---: |
| 1 | (1, 1, 1, 1, 1, 1, 8) | 2 |
| 2 | (1, 1, 1, 1, 1, 2, 7) | 5 |
| 3 | (1, 1, 1, 1, 1, 3, 6) | 5 |
| 4 | (1, 1, 1, 1, 1, 4, 5) | 5 |
| 5 | (1, 1, 1, 1, 2, 2, 6) | 6 |
| 6 | (1, 1, 1, 1, 2, 3, 5) | 9 |
| 7 | (1, 1, 1, 1, 2, 4, 4) | 6 |
| 8 | (1, 1, 1, 1, 3, 3, 4) | 6 |
| 9 | (1, 1, 1, 2, 2, 2, 5) | 7 |
| 10 | (1, 1, 1, 2, 2, 3, 4) | 10 |
| 11 | (1, 1, 1, 2, 3, 3, 3) | 7 |
| 12 | (1, 1, 2, 2, 2, 2, 4) | 6 |
| 13 | (1, 1, 2, 2, 2, 3, 3) | 8 |
| 14 | (1, 2, 2, 2, 2, 2, 3) | 5 |
| 15 | (2, 2, 2, 2, 2, 2, 2) | 1 |


<details>
<summary>Complete exact verification software: verify3048.py (Apache-2.0)</summary>

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/11) for this material.

</details>



## Attribution and references from the original submission

### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6; exact serving revision unknown)

### LLM versions, settings and roles

OpenAI Codex (GPT-6) | version: unknown | reasoning: unknown | role: primary agent researched sources, independently developed and checked parts of the proof, wrote and reviewed the exposition and ran the final software; one inherited same-model mathematical agent developed the full proof notes and source mapping; two additional inherited same-model mathematical agents independently audited the height, quotient, lifting, seed and small-state arguments; a fourth inherited same-model agent independently implemented and audited the verification. No other model or provider was run for this contribution.

### People and roles

Gaven (@gavenren): requested continued deeply investigated problems and authorized public submission. No human mathematical derivation or independent human proof checking in this session is asserted. Original authors remain credited in References and did not participate in this session.

### References

1. **Shalom Eliahou and Martin J. Erickson**, *Mutually describing multisets and integer partitions*, Discrete Mathematics **313**(4), 28 February 2013, 422–433, DOI [10.1016/j.disc.2012.11.014](https://doi.org/10.1016/j.disc.2012.11.014). The publisher abstract explicitly records convergence and complete cycle classification. The abstract and [author's university bibliography](https://lmpa.univ-littoral.fr/index.php?page_id=13&personne=21) were inspected; the full 2013 proof was not accessible and is not claimed to have been read.
2. **Onno M. Cain and Sela T. Enin**, *Inventory Loops (i.e. Counting Sequences) have Pre-period $2\max S_1+60$*, [arXiv:2004.00209v1](https://arxiv.org/pdf/2004.00209v1), 1 April 2020. Sections 3–5, including the multiset map, growth argument, cycle reduction, Theorems 5.3 and 5.5 and Corollary 5.5.1, were inspected. The known dynamics and classification are credited to the literature. We supply the explicit proof above and make no claim to audit or reprove the paper's later sharper preperiod analysis.
3. **Martin Erickson**, [Sequence defined on multisets, Open Problem Garden](https://www.openproblemgarden.org/op/a_sequence_defined_on_multisets), posted 29 June 2010. Full statement and the anonymous 18 July 2011 comment reporting a solution inspected. That comment alone is not used as proof.
4. **We-Solve / UnsolvedMath TOP-3048**, also displayed as Math-3294, OPG-37226. [Research prompt](https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-3048.txt). Full definitions and earlier-contribution section inspected; no prior We-Solve contributions were listed. Catalogue credit: ULAM.AI, UnsolvedMath contributors and We-Solve, CC BY 4.0.

