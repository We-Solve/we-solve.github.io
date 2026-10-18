> Source: [original issue #18](https://github.com/We-Solve/research/issues/18). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.

# A concrete first-order counterexample to the ternary Specker–Blatter extension

Problem: **TOP-3340 / Math-3371**, *Blatter-Specker Theorem for ternary relations*, OPG-37444.

Claim type: **literature report**, including a complete self-contained proof of the established negative answer.

Scope: We specify one fixed constant-free first-order sentence in the finite relational signature

$$
\tau=\{T^{(3)},B^{(2)}\}.
$$

If $f(n)$ counts its models on the labelled domain $\{0,\ldots,n-1\}$, then

$$
\boxed{
f(n)=
\begin{cases}
\displaystyle\prod_{j=1}^{k}(2^j-1)!!,&n=2^k-1\quad(k\ge0),\\[4pt]
0,&\text{otherwise}.
\end{cases}}
\tag{1}
$$

The product for $k=0$ is one. In particular, $f(n)$ is odd exactly at the indices $2^k-1$, and is not ultimately periodic modulo two. First-order logic is a fragment of MSO, so this is a full counterexample to the universal assertion in the actual catalogue statement. Section 7.1 also proves the stronger version using just one ternary relation, with exactly the same labelled counts.

The counterexample and its iterated-matching method are due to **Eldar Fischer and Johann A. Makowsky**, *Extensions and Limits of the Specker-Blatter Theorem* (arXiv 2022; CSL 2024). The rank encoding below follows their construction. We give the counting bijection and a specialized, explicit constant-removal translation, so the negative answer does not depend on merely quoting their theorem. No historical novelty is claimed.

Assumptions and limitations: We count labelled structures, not isomorphism classes. The main construction uses one ternary and one binary relation and no constant symbols; the corollary encodes both in one ternary relation on the same domain. Both signatures satisfy the catalogue's arity bound. Empty-domain counts, if included as in the catalogue's $n\ge0$, are evaluated by the usual empty-domain quantifier rules. The nonperiodicity conclusion is unchanged if counting starts at $n=1$.

## 1. The finite structures that will be counted

Let $V$ be a nonempty finite labelled set. A **full binary matching hierarchy** on $V$ is a sequence of partitions

$$
\mathcal P_0,\mathcal P_1,\ldots,\mathcal P_k
\tag{2}
$$

such that $\mathcal P_0$ is the singleton partition, $\mathcal P_k=\{V\}$, and every block of $\mathcal P_i$ is the union of exactly two blocks of $\mathcal P_{i-1}$ for $1\le i\le k$. The two children are unordered. For $|V|=1$, the unique hierarchy has $k=0$.

At the first level, choose a perfect matching of the vertices. At the second, choose a perfect matching of the resulting two-element blocks, and continue. Every block at level $i$ has $2^i$ vertices. Thus a hierarchy exists only when $|V|=2^k$.

The length $k$ is not bounded independently of $V$. Therefore (2) alone is not our first-order definition: it appears to require a variable number of relations. The following single ternary relation encodes all levels simultaneously.

## 2. An explicit first-order rank encoding with a temporary anchor

Temporarily work on $V$ with a distinguished fixed element $a\in V$ and one ternary relation $R$. The anchor will be removed in Section 5.

For $x,y\in V$, abbreviate

$$
\rho_{xy}=\{z\in V:R(x,y,z)\}.
$$

These sets are **notation for definable slices**, not extra relation symbols or quantified set variables. For example,

$$
\begin{aligned}
\rho_{xy}\subseteq\rho_{uv}
&\quad\text{abbreviates}\quad
\forall z\,(R(x,y,z)\Rightarrow R(u,v,z)),\\
\rho_{xy}=\rho_{uv}
&\quad\text{abbreviates}\quad
\forall z\,(R(x,y,z)\Leftrightarrow R(u,v,z)),\\
\rho_{xy}\subsetneq\rho_{uv}
&\quad\text{abbreviates inclusion together with inequality.}
\end{aligned}
\tag{3}
$$

Fresh bound variables are used when expanding these abbreviations. Membership $z\in\rho_{xy}$ abbreviates $R(x,y,z)$. Consequently every clause below is explicitly first-order.

Let $\Psi(R,a)$ be the conjunction of these seven clauses, with the displayed variables universally quantified unless otherwise indicated:

| Clause | First-order condition, using (3) |
| --- | --- |
| Graph | $R(x,y,z)\Rightarrow(x\ne y\ \wedge\ R(y,x,z))$ |
| Comparable ranks | $\rho_{xy}\subseteq\rho_{uv}\ \vee\ \rho_{uv}\subseteq\rho_{xy}$ |
| Full support | $x\ne y\Rightarrow R(x,y,a)$ |
| Transitive sublevels | $\rho_{xz}\subseteq\rho_{xy}\ \vee\ \rho_{xz}\subseteq\rho_{yz}$ |
| Every rank covers every vertex | $\forall x\forall y\forall z\exists w\ (\rho_{xy}=\rho_{zw})$ |
| No equal-rank triangle | $x\ne y\Rightarrow\neg(\rho_{xy}=\rho_{yz}\ \wedge\ \rho_{xy}=\rho_{xz})$ |
| Anchor | $R(x,y,z)\Rightarrow\bigl(\rho_{za}\subsetneq\rho_{xy}\ \wedge\ \forall w\,(\rho_{zw}\subsetneq\rho_{xy}\Rightarrow R(x,y,w))\bigr)$ |

In particular, the second clause quantifies $x,y,u,v$; the others have exactly the variables shown in their formulas. This table and the finite expansions (3) define one finite sentence. No order on the domain or on the labels is part of the signature.

## 3. Decoding every model: why the clauses force binary matching

Suppose $(V,R,a)\models\Psi$. Graphness implies $\rho_{xx}=\varnothing$ and $\rho_{xy}=\rho_{yx}$. Full support says that an off-diagonal rank contains $a$ and is therefore nonempty.

Because $V$ is finite, the distinct slice values form a finite chain

$$
A_0=\varnothing\subsetneq A_1\subsetneq\cdots\subsetneq A_k.
\tag{4}
$$

For $0\le i\le k$, define

$$
x\sim_i y\quad\Longleftrightarrow\quad\rho_{xy}\subseteq A_i.
\tag{5}
$$

Each $\sim_i$ is an equivalence relation. It is reflexive by graphness and symmetric because the ranks are symmetric. If $x\sim_i y$ and $y\sim_i z$, the transitive-sublevels clause puts $\rho_{xz}$ inside at least one of the two ranks already contained in $A_i$, proving $x\sim_i z$.

Let $\mathcal P_i$ be its equivalence classes. The partition $\mathcal P_0$ is discrete, since no off-diagonal rank is empty; $\mathcal P_k=\{V\}$, since every rank is contained in the largest one.

Fix $i\ge1$. A block of $\mathcal P_i$ is a union of $\mathcal P_{i-1}$-blocks. It contains at least two such blocks. To see this, choose any pair having rank $A_i$. The covering clause says that every vertex $z$ has a partner $w$ with $\rho_{zw}=A_i$. Thus $z,w$ are in the same $\mathcal P_i$-block but different $\mathcal P_{i-1}$-blocks.

It cannot contain three children. If it did, take $x,y,z$ from three different children. Each of their three pair ranks lies below or at $A_i$ but not below or at $A_{i-1}$, so all three ranks equal $A_i$, contrary to the no-equal-rank-triangle clause. Every block therefore has **exactly two** children. We have recovered precisely a hierarchy (2), and $|V|=2^k$.

It remains to show that the ternary relation has no extra choices beyond that hierarchy. For an occurring positive rank $A_i=\rho_{xy}$, full support gives $a\in A_i$. The anchor clause first implies

$$
z\in A_i\quad\Longrightarrow\quad\rho_{za}\subsetneq A_i.
$$

Apply the closure part of the same clause to the member $a\in A_i$. It gives the reverse implication. Hence

$$
A_i=\{z:\rho_{za}\subsetneq A_i\}
=[a]_{\mathcal P_{i-1}}.
\tag{6}
$$

The last equality follows because the ranks strictly below $A_i$ are exactly $A_0,\ldots,A_{i-1}$. Thus each rank set is the anchor's block at the preceding level.

For distinct $x,y$, let $\lambda(x,y)$ be the first level at which they are in the same block. Equations (5)–(6) now determine the original relation completely:

$$
\rho_{xy}=[a]_{\mathcal P_{\lambda(x,y)-1}},
\qquad \rho_{xx}=\varnothing.
\tag{7}
$$

This is uniqueness, not just an assignment of one possible encoding to each hierarchy.

## 4. Encoding every hierarchy and proving the bijection

Conversely, fix a hierarchy (2) and the specified anchor $a$. Define $R$ by (7). The anchor blocks at successive levels strictly grow, so different positive levels give distinct ranks.

All seven clauses hold:

- The slices are symmetric in $x,y$ and empty for loops, and every positive slice contains $a$.
- The anchor's blocks form a nested chain, giving comparability.
- If $x,y$ first meet by level $i$ and $y,z$ by level $j$, then $x,z$ are together by level $\max(i,j)$. This gives transitive sublevels.
- To realize a positive rank $i$ at any vertex $z$, choose $w$ in the other child of the $\mathcal P_i$-block containing $z$. Rank zero is realized by $w=z$. This proves the covering clause.
- Three pairs cannot all first meet at the same positive level: their common block at that level has only two children. This proves the triangle clause.
- If $z\in[a]_{\mathcal P_{i-1}}$, then $\rho_{za}$ has level below $i$. Every $w$ with $\rho_{zw}$ below level $i$ belongs to the same $\mathcal P_{i-1}$-block, so it too lies in the rank set. This is the anchor clause.

The decoding and encoding procedures are inverse. We have a **bijection** between hierarchies on the fixed labelled set $V$ and models of $\Psi$ on $V$ with $a$ fixed in advance. The case $|V|=1$ also works: the empty hierarchy encodes the empty relation, and every clause is satisfied.

## 5. Removing the anchor with exactly one binary relation

We now define the actual signature promised at the start. Let $D$ be any finite domain, and let

$$
T\subseteq D^3,\qquad B\subseteq D^2.
$$

Adjoin a single **formal** point $a\notin D$ and put $V=D\sqcup\{a\}$. This is a device for specifying a sentence; it is not an additional element or constant in the actual structures being counted.

Define a ternary relation $\widehat R$ on $V$ by the following exhaustive table. Here $x,y,z$ in the table range over $D$.

| Arguments | Definition of $\widehat R$ |
| --- | --- |
| $(x,y,z)$ | $T(x,y,z)$ |
| $(a,x,z)$ or $(x,a,z)$ | $B(x,z)$ |
| $(x,y,a)$ | $x\ne y$ |
| $(a,x,a)$ or $(x,a,a)$ | true |
| $(a,a,z)$ or $(a,a,a)$ | false |

Call a $(T,B)$-structure admissible when

$$
(D\sqcup\{a\},\widehat R,a)\models\Psi.
\tag{8}
$$

This definition is unequivocal, but we must also prove it is expressible by a **fixed constant-free first-order sentence on $D$**, rather than assuming that adding a formal point is an allowed logical operation.

Here is the complete finite translation. In a subformula of $\Psi$, designate some free variables as assigned to the formal anchor; all other free variables range over $D$. Replace an atomic $R$ formula using the table. Replace an equality of two anchor terms by true, an equality between an anchor term and a $D$-variable by false, and an equality of two $D$-variables by the ordinary equality. Boolean operations commute with translation. Finally, translate the quantifiers by

$$
\begin{aligned}
(\exists x\,\theta)^*
&=\theta^*_{x=a}\ \vee\ \exists x\,\theta^*_{x\in D},\\
(\forall x\,\theta)^*
&=\theta^*_{x=a}\ \wedge\ \forall x\,\theta^*_{x\in D}.
\end{aligned}
\tag{9}
$$

An anchor-designated variable disappears from its branch. The constant term $a$ always uses the anchor case. True and false can themselves be written as $\forall v\,(v=v)$ and its negation, using a fresh bound variable, including on the empty domain.

Let **$\Phi(T,B)=\Psi^*$** be the result of this specified translation. Equations (3), the seven-clause table, the atomic table above, and (9) are an explicit finite construction of one particular FO sentence, without any unspecified choice. Its size is independent of $|D|$; the two branches in (9) are created once for each of the finitely many quantifiers of $\Psi$. Induction on formulas proves

$$
(D,T,B)\models\Phi
\quad\Longleftrightarrow\quad
(D\sqcup\{a\},\widehat R,a)\models\Psi.
\tag{10}
$$

Thus the actual class has precisely the constant-free signature $\{T^{(3)},B^{(2)}\}$, and its definition uses FO only.

No models are lost or multiplied by this deletion. In any anchored model of $\Psi$, graphness forces $R(a,a,z)$ to be false; full support forces $R(x,y,a)$ exactly when $x\ne y$; symmetry gives $R(a,x,z)=R(x,a,z)$. These are exactly the forced slices in the table. The remaining information is uniquely its restriction $T$ and the binary slice $B(x,z)=R(a,x,z)$.

Conversely, the table uniquely reconstructs all slices from $T,B$. Therefore restriction and reconstruction give a bijection between admissible structures on a labelled $n$-element set $D$ and hierarchies on the labelled $(n+1)$-element set $D\sqcup\{a\}$ with that particular anchor fixed. There is **no factor $n+1$**: an anchor is not being selected from $D$ or counted as a free interpretation of a constant symbol.

## 6. Exact labelled counts

Let $H(q)$ denote the number of hierarchies on a fixed labelled $q$-element set, for $q\ge1$. Sections 3–5 prove

$$
f(n)=H(n+1).
\tag{11}
$$

If $q$ is not a power of two, $H(q)=0$. If $q=2^k$, the first level chooses a perfect matching on $2^k$ distinguishable singleton blocks, the next chooses a matching on $2^{k-1}$ distinguishable two-element blocks, and so forth. A perfect matching on an even number $q$ of distinguishable objects can be counted by choosing the partner of one object in $q-1$ ways, then continuing, giving $(q-1)!!$. Hence

$$
H(2^k)
=(2^k-1)!!(2^{k-1}-1)!!\cdots(2^1-1)!!
=\prod_{j=1}^{k}(2^j-1)!!.
\tag{12}
$$

Every intermediate block remains a distinguishable subset of the original labelled domain. We do not divide by permutations of levels, by names of blocks, or by automorphism groups. The hierarchy is uniquely recoverable from its encoded structure, so these matching choices count different structures exactly once.

Every factor in (12) is odd. Combining (11) and (12) proves (1), including the empty product $H(1)=f(0)=1$.

The product also has the closed form

$$
H(2^k)=\frac{(2^k)!}{2^{\,2^k-1}}.
\tag{13}
$$

Indeed, $(2^j-1)!!=(2^j)!/(2^{2^{j-1}}(2^{j-1})!)$ makes the factorials in (12) telescope, while $\sum_{j=1}^k2^{j-1}=2^k-1$. This formula includes $k=0$ and counts the same labelled structures.

Some initial values are:

| Domain size $n$ | $n+1$ | $f(n)$ |
| --- | --- | --- |
| $0$ | $1$ | $1$ |
| $1$ | $2$ | $1$ |
| $2$ | $3$ | $0$ |
| $3$ | $4$ | $3$ |
| $4,5,6$ | $5,6,7$ | $0$ |
| $7$ | $8$ | $7!!\,3!!\,1!!=315$ |
| $15$ | $16$ | $15!!\,7!!\,3!!\,1!!=638512875$ |

For a concrete three-element model, take $D=\{0,1,2\}$, anchor $a=3$, and first-level pairs $\{0,1\},\{2,3\}$. The corresponding relations are

$$
\begin{aligned}
B&=\{(0,2),(1,2)\},\\
T&=\{(0,2,2),(2,0,2),(1,2,2),(2,1,2)\}.
\end{aligned}
$$

The three possible first-level perfect matchings give the three labelled models. This example illustrates that the actual domain contains three elements, not four: the anchor is only used in the proof and reconstruction.

## 7. Why the parity sequence cannot be ultimately periodic

Assume, for a contradiction, that $f(n)\bmod2$ has an eventual period $p\ge1$ beyond an index $N_0$. Choose $k$ large enough that

$$
2^k-1\ge N_0,\qquad 2^k>p.
$$

At $n=2^k-1$, the count is odd. But

$$
2^k<(n+p)+1=2^k+p<2^{k+1},
$$

so $(n+p)+1$ is not a power of two and $f(n+p)=0$. This contradicts periodicity. Thus $f$ is not ultimately periodic modulo two.

The actual problem quantifies over every finite relational signature with relation arities at most three, every MSO sentence, and every positive modulus. The fixed signature $\{T,B\}$, the explicit FO sentence $\Phi$, and the modulus two satisfy all those hypotheses and refute its conclusion. This proves the negative answer in full, rather than merely showing that a particular proof method for binary vocabularies fails.

### 7.1. The same counterexample with one ternary relation

There is also a constant-free FO sentence $\Theta$ in a signature containing **only one ternary relation $Q$**, with exactly the count (1). This is the diagonal-folding step described in Fischer–Makowsky, Section 9.6; here its complete bijection is short enough to prove directly.

Every model of $\Phi$ satisfies $\neg T(x,x,z)$ for all $x,z$, because $T$ is the restriction of the graph-like relation $\widehat R$. For such a model, define

$$
Q(x,y,z)\quad\Longleftrightarrow\quad
\begin{cases}
T(x,y,z),&x\ne y,\\
B(x,z),&x=y.
\end{cases}
\tag{14}
$$

Obtain $\Theta(Q)$ from the already specified sentence $\Phi(T,B)$ by replacing each atomic formula as follows:

$$
T(x,y,z)\ \longmapsto\ (x\ne y\ \wedge\ Q(x,y,z)),
\qquad
B(x,z)\ \longmapsto\ Q(x,x,z).
\tag{15}
$$

All Boolean operations, equalities and quantifiers remain unchanged. Thus $\Theta$ is another fixed finite FO sentence, with no constants and no additional relation symbols.

For any ternary $Q$ on the given domain, recover

$$
T_Q(x,y,z)\Longleftrightarrow(x\ne y\wedge Q(x,y,z)),
\qquad B_Q(x,z)\Longleftrightarrow Q(x,x,z).
$$

Induction on formulas in (15) gives $Q\models\Theta$ if and only if $(T_Q,B_Q)\models\Phi$. Conversely, if $(T,B)\models\Phi$, its false $T$-diagonal ensures that recovering $T_Q,B_Q$ from (14) returns precisely $T,B$. Starting with any $Q$, the two cases $x\ne y$ and $x=y$ show that folding its recovered pair returns precisely $Q$.

These maps therefore restrict to inverse bijections between the $\Theta$-models and the $\Phi$-models on every fixed labelled domain, including the empty domain. Every entry of $Q$ is used exactly once: off-diagonal entries encode $T$ and diagonal entries encode $B$, so there are no unused choices multiplying the model count. Consequently $\Theta$ has the same $f(n)$ as (1), and its count is not ultimately periodic modulo two.

## 8. Executed verification and its scope

The accompanying verify3340.py was executed with exact integer and bitset arithmetic. All assertions passed. The complete configuration, model records and outcomes are in verification_results.json.

* It exhausts all 4,101 unrestricted $(T,B)$-structures on domains of sizes $n=0,1,2$, reconstructs the virtual anchor and evaluates the seven first-order clauses. The model counts are respectively $1,1,0$.
* Independently, it exhausts every enlarged relation compatible with the necessary graph and full-support clauses for $|V|=1,2,3,4$: 262,211 candidates in total, including all $2^{18}=262,144$ possibilities at size four. The full sentence admits respectively $1,1,0,3$ models. This is an exhaustive model census for the corresponding constant-free sizes zero through three, not an unrestricted search at larger sizes.
* A separate generator builds every full matching hierarchy on enlarged sets of sizes one through eight, without a power-of-two prefilter. It produces respectively $1,1,0,3,0,0,0,315$ models, 320 in total. For each, all seven clauses hold, the decoded matching levels agree exactly, the constant-free encoding is unique, and reconstruction returns the original relation. At sizes through four, these generated model sets equal the independently enumerated sets.
* For the single-ternary corollary, all 259 unrestricted $Q$-structures on domains of sizes zero through two are checked, again giving counts $1,1,0$. Packing and unpacking are checked on all five valid models in the direct census and all 320 generated hierarchy models. The three-label example becomes exactly
  $Q=\{(0,0,2),(0,2,2),(1,1,2),(1,2,2),(2,0,2),(2,1,2)\}$.
* Perfect matchings are independently enumerated through size ten and compared with the double-factorial count. The hierarchy recurrence, parity and factorial formula are checked for indices $0\le n\le511$. Counts beyond the small direct censuses use the proved recurrence; they are not claimed as exhaustive relational searches.
* The program constructs 640 finite counterexamples to proposed period/threshold pairs: periods one through 64, with ten specified thresholds from zero through 255. These check the arithmetic of the general gap argument, whose proof in Section 7 handles every possible period and threshold.

Reproduce the record with Python 3 and its standard library:

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/18) for this material.

Separate inherited same-model agents reviewed the full proof, the anchor-removal conventions, the single-relation bijection and the exact verification software.

The infinite result follows from the proved encoding/decoding bijection and the elementary matching count. Finite verification can independently evaluate the FO clauses on small labelled structures, test deletion and reconstruction, and check counts; it does not establish nonperiodicity by looking at an initial segment. No formal proof-assistant certification or independent human mathematical review is claimed.

## 9. Sources, prior resolution, and attribution

1. **Eldar Fischer and Johann A. Makowsky**, *Extensions and Limits of the Specker-Blatter Theorem*, 32nd EACSL Annual Conference on Computer Science Logic (CSL 2024), LIPIcs **288**, article 26, pp. 26:1–26:20, DOI [10.4230/LIPIcs.CSL.2024.26](https://doi.org/10.4230/LIPIcs.CSL.2024.26). [Official full paper](https://drops.dagstuhl.de/storage/00lipics/lipics-vol288-csl2024/LIPIcs.CSL.2024.26/LIPIcs.CSL.2024.26.pdf). Inspected the vocabulary discussion, Section 8.2, Sections 9.1–9.4, and Section 9.6: Theorem 20, Corollary 21, Definition 22, Observation 23, Lemma 24, the explicit rank axioms, and the final diagonal-folding argument for a single ternary relation. The construction and negative answer are credited to these authors. The official paper is licensed CC BY 4.0; this exposition adapts and expands its matching and rank-encoding proof and proves the specialized constant removal and final folding bijections explicitly.
2. **Fischer and Makowsky**, [arXiv:2206.12135v2](https://arxiv.org/abs/2206.12135v2), first submitted 24 June 2022, revised 27 June 2022. The arXiv record establishes the earlier public version. The argument here uses the explicitly inspected CSL version and proves the specialized anchor removal directly, without invoking a general constant-elimination theorem as an unproved dependency.
3. **Open Problem Garden**, [Blatter-Specker Theorem for ternary relations](https://www.openproblemgarden.org/op/blatter_specker_theorem_for_ternary_relations), OPG-37444. The original question is the extension from unary/binary to ternary relation symbols; no new conjecture is substituted for it.
4. **We-Solve / UnsolvedMath TOP-3340**, Math-3371, OPG-37444. [Catalogue statement](https://github.com/We-Solve/research/blob/main/problems/2a/prb_2a0516cd7aae4984a580ac97d3dbd595/statement.tex). Inspected the fixed finite signature, arity-at-most-three convention, labelled counting, and ultimate periodicity definition. Catalogue credit: ULAM.AI, UnsolvedMath contributors and We-Solve, CC BY 4.0.

This is a report and detailed reconstruction of an established counterexample, not a new solution to a previously unresolved problem. The original Specker–Blatter theorem for unary and binary relations is unaffected. The final folding corollary proves that even one ternary relation suffices for the negative result.

## Provenance and licences

Gaven (`@gavenren`) requested another deeply investigated problem and authorized submission. Research, exposition, mathematical derivation and review, and original verification software were produced by OpenAI Codex (GPT-6; exact serving revision and reasoning setting unknown), including inherited same-model agents. The counterexample and its method remain credited to Fischer and Makowsky. No historical novelty or human mathematical derivation in this session is claimed.

This adapted exposition and original non-software result records: CC BY 4.0, with the source attribution and description of modifications above. Original verification software: Apache-2.0. Linked source material retains its original attribution and rights.


<details>
<summary>Complete executable exact verification software (Python standard library; Apache-2.0)</summary>

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/18) for this material.

</details>



## Attribution and references from the original submission

### Who did the work
LLM only (people only prompted or submitted)

### LLMs used
Other (named below)

### Other LLMs
OpenAI, Codex (GPT-6; exact serving revision unknown)

### LLM versions, settings and roles
OpenAI Codex (GPT-6) | version: unknown | reasoning: unknown | role: exact catalogue and primary-source inspection, detailed reconstruction and exposition, specialized first-order translations, independent same-model mathematical review, exact verification software, and submission preparation. Separate inherited same-model agents checked the proof, counting conventions, relation folding and software. No formal proof-assistant certification or independent human mathematical verification is claimed.

### People and roles
Gaven (@gavenren) requested another deeply investigated problem and authorized public submission. No human mathematical derivation or proof checking in this session is asserted. Eldar Fischer and Johann A. Makowsky are credited for the established counterexample, matching method and rank encoding.

### References
Full references and inspection scope appear in the write-up. Primary mathematical source: Eldar Fischer and Johann A. Makowsky, Extensions and Limits of the Specker-Blatter Theorem, CSL 2024, LIPIcs 288, article 26, pp.26:1–26:20, DOI 10.4230/LIPIcs.CSL.2024.26. The official CC BY 4.0 paper was inspected, particularly Sections 8.2,9.1–9.4 and9.6, including Theorem 20, Corollary 21, the seven rank clauses and the single-relation folding. The arXiv:2206.12135 record establishes the June 2022 earlier version. The exact We-Solve statement and original OPG question were checked. The write-up expands the proof and supplies explicit specialized bijections; it does not invoke an unproved general constant-elimination theorem. Linked papers are not redistributed.

