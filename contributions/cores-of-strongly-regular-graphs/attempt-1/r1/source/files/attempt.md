> Source: [original issue #13](https://github.com/We-Solve/research/issues/13). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.

# Cores of strongly regular graphs: a complete spectral proof and exact examples

**We-Solve TOP-3149 / Math-3322, OPG-824.**

**Answer: yes.** Every finite strongly regular graph has a core isomorphic either to itself or to a complete graph. For a primitive strongly regular graph, the stronger statement holds: every endomorphism is an automorphism or has a clique as its image.

**Attribution.** David E. Roberson proved this result, strengthening the Cameron–Kazanidis conjecture, in work first posted in 2016 and published in *Algebraic Combinatorics* in 2019. This is a literature report with a detailed proof and executable examples, not a new classification. The spectral argument follows Roberson's published method. We include elementary proofs of the auxiliary facts, handle the catalogue's degenerate and disconnected cases, and give concrete examples showing that identical strongly regular parameters need not determine the core. No historical novelty is claimed.

## 1. The question, and how endomorphisms determine its answer

All graphs here are finite and simple, with no loops. A homomorphism preserves adjacency. In particular it cannot identify adjacent vertices. An endomorphism is a homomorphism from a graph to itself. A coloring onto a clique means a homomorphism whose image induces a complete graph.

The catalogue defines a core as a smallest graph homomorphically equivalent to the given graph. Two elementary observations suffice for the conclusion below.

* If every endomorphism of a graph is an automorphism, no smaller homomorphically equivalent graph exists: composing maps through a smaller graph would produce a noninjective endomorphism.
* If an endomorphism has image a clique of size $c$, the graph is homomorphically equivalent to $K_c$. That clique is itself a core, because every map from $K_c$ to a loopless graph is injective. Any graph homomorphically equivalent to $K_c$ consequently has at least $c$ vertices.

It therefore suffices to prove the endomorphism assertion for primitive strongly regular graphs and check the remaining cases separately.

## 2. Boundary and imprimitive cases

A strongly regular graph has parameters $(v,k,\lambda,\mu)$: every vertex has degree $k$, adjacent pairs have $\lambda$ common neighbors, and distinct nonadjacent pairs have $\mu$ common neighbors. We retain the catalogue's definition, including cases some authors exclude.

An empty vertex set, if allowed, already gives a graph that is its own core. A nonempty edgeless graph has core $K_1$. A complete graph is its own core. For the remaining graphs, counting vertices adjacent to neither member of a pair shows that the complement is also strongly regular, with parameters

$$\bigl(v,\ v-k-1,\ v-2k+\mu-2,\ v-2k+\lambda\bigr).$$

If a strongly regular graph is disconnected and has an edge, pairs in different components have no common neighbors, so $\mu=0$. Any connected component must be a clique: otherwise a shortest path joining nonadjacent vertices contains a two-edge subpath whose endpoints are nonadjacent but have a common neighbor. Regularity makes all these cliques have size $k+1$. Mapping all components onto one of them proves that the core is $K_{k+1}$.

If the complement is disconnected, the same argument applied to the complement makes the original graph complete multipartite with equally sized parts. Its core is the clique obtained by choosing one vertex from each part: color each part with its own chosen vertex, and use inclusion in the reverse direction.

We may therefore assume both $G$ and its complement $\overline G$ are connected. This is the primitive case. Then $0<k<v-1$ and

$$0<\mu<k. \tag{1}$$

Indeed, $\mu=0$ forces disjoint cliques as above. If $\mu=k$, every pair of distinct nonadjacent vertices has identical neighborhoods. Nonadjacency together with equality is then an equivalence relation: if $x,y$ and $y,z$ are nonadjacent but $x,z$ adjacent, equality of the neighborhoods of $x,y$ would force $y,z$ adjacent. The equivalence classes are independent sets with all edges between different classes. Regularity makes their sizes equal, contradicting connectedness of the complement. These arguments also show that a primitive strongly regular graph has diameter two.

## 3. An elementary connectivity fact about nonneighbors

For a vertex $v$, write $N(v)$ for its neighbors and $N_2(v)$ for its distinct nonneighbors. In the primitive case these are precisely the vertices at distance two.

**Lemma 1.** The graph induced on $N_2(v)$ is connected.

**Proof.** Suppose it has at least two components. For vertices $x,y$ in different such components, all their $\mu$ common neighbors lie in $N(v)$: none can be $v$, and none can lie in $N_2(v)$ without joining the components. Each of $x,y$ itself has exactly $\mu$ neighbors in $N(v)$. Their two $\mu$-element neighbor sets must consequently be equal.

Choosing a vertex in another component shows that all vertices of $N_2(v)$ have the same neighbor set $B\subseteq N(v)$, with $|B|=\mu$. By (1), choose $b\in B$ and $c\in N(v)\setminus B$. Every vertex of $N(v)$ has exactly $\lambda$ neighbors within $N(v)$, because it is adjacent to $v$. But $b$ is adjacent to every vertex of $N_2(v)$ and $c$ to none. Their degrees would be respectively

$$1+\lambda+|N_2(v)|\quad\text{and}\quad1+\lambda,$$

contradicting regularity. $\square$

This proves the auxiliary connectivity fact directly rather than leaving an additional graph-theoretic theorem as a dependency.

## 4. The spectral matrix used in the proof

Let $A$ be the adjacency matrix of a primitive strongly regular graph. Counting two-step walks gives

$$A^2+(\mu-\lambda)A+(\mu-k)I=\mu J, \tag{2}$$

where $J$ is the all-ones matrix. Connected regularity makes $k$ a simple largest eigenvalue, with the all-ones vector as eigenvector. On its orthogonal complement, (2) yields the two eigenvalues

$$\theta,\tau=\frac{\lambda-\mu\ \pm\sqrt{(\lambda-\mu)^2+4(k-\mu)}}2,$$

with $\theta>0>\tau$. Both occur: otherwise $A$ would be a linear combination of $I$ and $J$, incompatible with having both edges and nonedges. The complement has the same orthogonal eigenvectors, with eigenvalues $-1-\theta$ and $-1-\tau$. Since it too is primitive, its positive nonprincipal eigenvalue is $-1-\tau$. Thus

$$\tau<-1,\qquad0<-1-\tau<v-k-1.$$

The orthogonal projector onto the $\tau$-eigenspace is

$$P=\frac{A-\theta I-\frac{k-\theta}{v}J}{\tau-\theta}.$$

This formula is checked on each of the three eigenspaces. Its diagonal entries are a common positive number $p$: they are equal by the formula, and their sum is the positive rank of $P$. Put $E=P/p$. It is positive semidefinite, has diagonal one, and

$$AE=\tau E,\qquad E\mathbf1=0.$$

It has a common value $\alpha$ on edges and $\beta$ on distinct nonedges. Taking diagonal entries of $AE=\tau E$, and then row sums of $E$, gives

$$\boxed{E_{uv}=\begin{cases}
1&u=v,\\
\alpha=\tau/k&u\sim v,\\
\beta=(-1-\tau)/(v-k-1)&u\ne v,\ u\not\sim v.
\end{cases}} \tag{3}$$

In particular $\alpha<0<\beta<1$. We will use the strict inequality $\alpha-\beta<0$.

The facts about largest eigenvalues used here need no transitivity assumption. For a connected regular graph, the identity

$$x^T(kI-A)x=\sum_{\{u,v\}\in E(G)}(x_u-x_v)^2$$

shows $A\leq kI$ and that its $k$-eigenspace consists exactly of constant vectors. The same argument applies to the connected complement.

## 5. A trace-zero identity constrains every endomorphism

Let $\varphi:G\to G$ be an endomorphism and define the pullback matrix

$$E^\varphi_{uv}=E_{\varphi(u),\varphi(v)}.$$

This matrix is positive semidefinite. For example, write $E$ as a Gram matrix and assign the vector of $\varphi(u)$ to $u$; equivalently $E^\varphi=RER^T$, where the $u$th row of $R$ selects coordinate $\varphi(u)$.

Because $\varphi$ preserves edges, $E^\varphi$ and $E$ agree on the diagonal and on entries corresponding to edges. The matrix $M=A-\tau I$ is positive semidefinite and vanishes off the diagonal and edges. Hence

$$\operatorname{tr}(ME^\varphi)=\operatorname{tr}(ME)=0.$$

For positive semidefinite matrices $M,C$, trace zero implies $MC=0$. To see this, diagonalize $M$. The expression $\operatorname{tr}(MC)$ is a sum of its nonnegative eigenvalues multiplied by nonnegative quadratic forms of $C$. Every quadratic form attached to a positive eigenvalue must be zero; positive semidefiniteness then makes the corresponding vector lie in the kernel of $C$. Thus $CM=0$, and transposing gives $MC=0$.

Apply this with $C=E^\varphi$, and subtract $ME=0$. For

$$X=E^\varphi-E$$

we obtain

$$\boxed{(A-\tau I)X=0.} \tag{4}$$

Its diagonal and edge entries are zero. For a distinct nonadjacent pair $u,v$, the remaining possibilities are

$$X_{uv}=\begin{cases}
1-\beta&\varphi(u)=\varphi(v),\\
\alpha-\beta&\varphi(u)\sim\varphi(v),\\
0&\varphi(u),\varphi(v)\text{ are distinct nonneighbors}.
\end{cases} \tag{5}$$

This is the main spectral mechanism in Roberson's proof.

## 6. One preserved nonedge forces an automorphism

Suppose $\varphi$ is not a coloring onto a clique. Its image then contains distinct nonadjacent vertices $\varphi(u),\varphi(v)$. The pair $u,v$ must itself be distinct and nonadjacent, and $X_{uv}=0$.

Evaluate the $(u,v)$ entry of (4):

$$0=\sum_{w\sim u}X_{wv}.$$

If $w\sim v$, its term is zero. Otherwise $w\in N_2(v)$. The possibility $\varphi(w)=\varphi(v)$ is excluded: $w\sim u$ would force $\varphi(v)\sim\varphi(u)$, contrary to the choice of $u,v$. Thus every remaining term is either zero or the strictly negative number $\alpha-\beta$. The sum can be zero only if they all vanish.

Consequently whenever $\varphi$ preserves a nonedge $uv$ as a distinct nonedge, it also preserves every nonedge $wv$ with $w\sim u$ and $w\in N_2(v)$. Lemma 1 propagates this along the connected graph induced on $N_2(v)$, proving preservation of all nonedges incident with $v$.

For each $w\in N_2(v)$ we may repeat the same argument with the preserved pair $w,v$, obtaining preservation of every nonedge incident with $w$. Since the complement $\overline G$ is connected, repeated propagation reaches every vertex. All distinct nonadjacent pairs are therefore sent to distinct nonadjacent pairs.

Adjacent pairs already go to adjacent pairs. Thus no two vertices are identified, and both adjacency and nonadjacency are preserved. On the finite vertex set an injective endomorphism is an automorphism.

We have proved: every endomorphism of a primitive strongly regular graph is an automorphism or a coloring onto a clique. Section 1 now gives the asserted core classification, and Section 2 completes all the cases permitted by the catalogue.

The same proof works for a homomorphism between primitive strongly regular graphs with identical parameters: use the target's matrix in the pullback, whose diagonal, edge and nonedge values agree with those of the source. For a homomorphism whose image is not a clique, preservation of all nonedges then gives an injective induced embedding, and equal vertex counts make it an isomorphism. Thus every such homomorphism is an isomorphism or a coloring onto a clique. This is Roberson's stronger same-parameter conclusion.

## 7. Exactly when the complete-core case occurs

The spectral quantity

$$b=1-\frac{k}{\tau}$$

simultaneously bounds clique and chromatic numbers:

$$\boxed{\omega(G)\leq b\leq\chi(G).} \tag{6}$$

For the clique bound, restrict the positive semidefinite matrix $E$ to a clique of size $s$. The all-ones quadratic form is $s+s(s-1)\alpha\geq0$, so $s\leq1-1/\alpha=b$.

For the chromatic bound, let an independent set have size $a$ and put $x=\mathbf1_S-(a/v)\mathbf1$. Its squared norm is $a-a^2/v$ and $x^TAx=-ka^2/v$. Since $\tau$ is the least eigenvalue,

$$-\frac{ka^2}{v}\geq\tau\left(a-\frac{a^2}{v}\right),$$

which rearranges to $a\leq v(-\tau)/(k-\tau)$. Every color class obeys that bound, implying $\chi(G)\geq1-k/\tau$.

If a proper endomorphism colors $G$ onto a clique of size $c$, then $\chi(G)\leq c\leq\omega(G)$. Combining this with (6) forces

$$\chi(G)=\omega(G)=c=b.$$

Conversely equality of clique and chromatic numbers supplies a coloring onto a clique, and hence that clique as the core. For a primitive strongly regular graph,

$$\boxed{G\text{ has a proper complete core}\iff\chi(G)=\omega(G)=1-k/\tau.}$$

In particular, a noninteger value of $1-k/\tau$ certifies that $G$ itself is a core. This criterion concerns primitive graphs; the edgeless cases need no division by an eigenvalue.

## 8. Concrete examples and limits of the parameters

### Petersen graph: the whole graph is its core

Use the ten two-element subsets of $\{1,2,3,4,5\}$ as vertices, adjacent when disjoint. Each vertex has three neighbors. Adjacent vertices have no common neighbor; distinct nonadjacent vertices share one underlying element and have exactly one common neighbor. The parameters are $(10,3,0,1)$.

Equation (2) gives nonprincipal eigenvalues $1,-2$, so $b=1+3/2=5/2$ is not an integer. The graph is primitive: it is connected by the common-neighbor condition, and its complement is connected because intersecting pairs form a connected graph. The preceding theorem therefore certifies that its core is the full ten-vertex graph.

### Square rook graphs: an infinite complete-core family

For $q\geq2$ take vertices $(i,j)\in(\mathbb Z/q\mathbb Z)^2$, adjacent when exactly one coordinate agrees. A row is a $q$-clique, and the map

$$\varphi(i,j)=(0,i+j\bmod q)$$

is a homomorphism onto that row: along an edge the coordinate that changes changes the sum. Thus the core is $K_q$, without any primality assumption on $q$.

The parameters are $(q^2,2(q-1),q-2,2)$. For $q\geq3$ the graph and complement are connected, the least eigenvalue is $-2$, and $b=q$, agreeing with the explicit clique and coloring. For $q=2$ it is $K_{2,2}$, already covered by the imprimitive argument.

That boundary also explains why the stronger endomorphism assertion was stated only for primitive graphs. Label the four-cycle cyclically by $0,1,2,3$. The map $0\mapsto0$, $1\mapsto1$, $2\mapsto2$, $3\mapsto1$ preserves every edge but has a three-vertex path as its image. It is neither an automorphism nor a coloring onto a clique, even though this graph's core is $K_2$.

### The Shrikhande graph: the same parameters can have a different core

On $(\mathbb Z/4\mathbb Z)^2$, join vertices whose difference belongs to

$$\{\pm(1,0),\ \pm(0,1),\ \pm(1,1)\}.$$

Direct common-neighbor counts give parameters $(16,6,2,2)$, identical to the $4\times4$ rook graph. The graph is primitive. The neighborhood of each vertex is a six-cycle, so it has triangles but no four-clique: any four-clique would yield a triangle in a vertex's neighborhood. Therefore $\omega=3$.

Its least eigenvalue is $-2$, giving $b=4$. Coloring $(i,j)$ by $i+j\bmod4$ is proper for every generator above, so $\chi=4$. Since $\omega<\chi$, it is a core, while the rook graph with the same parameters has core $K_4$.

The program verifies the defining common-neighbor counts, connectedness of both graphs and their complements, the local six-cycles, and the explicit colorings. These facts make the example checkable from its definition, rather than dependent on a graph-database label.

## 9. Exact verification and its scope

The accompanying verify3149.py was executed with exact integers and rational arithmetic. All assertions passed. The main enumeration explores all endomorphisms of five graphs using edge-preservation constraints only: it never assumes injectivity or nonedge preservation. Variable ordering changes only the order of the complete search.

| Graph | Parameters $(v,k,\lambda,\mu)$ | Image rank: number of endomorphisms |
|---|---|---|
| $C_5$ | $(5,2,0,1)$ | $5:10$ |
| Petersen | $(10,3,0,1)$ | $10:120$ |
| $3\times3$ rook | $(9,4,1,2)$ | $3:72,\ 9:72$ |
| Two disjoint $K_3$ | $(6,2,1,0)$ | $3:72,\ 6:72$ |
| $K_{2,2,2}$ | $(6,4,2,4)$ | $3:48,\ 4:144,\ 5:144,\ 6:48$ |

This exhausts **802 endomorphisms**, with 3,835 search nodes including the roots and completed maps. Every completed map is independently rechecked on every edge, and every bijective one is rechecked on edges and nonedges. Every noninjective endomorphism in the three primitive examples has clique image. The complete multipartite example has proper nonclique images, as permitted by the boundary discussion.

For Petersen the program also verifies the exact projector
$P=(I-A+J/5)/3$, its rank and trace four, its symmetry and idempotence, and $(A+2I)P=0$. Its normalized matrix $E=(5/2)P$ has diagonal one, edge entries $-2/3$ and distinct nonedge entries $1/6$, agreeing with (3). Explicit clique retractions are checked for the rook graph and both imprimitive examples.

Separate structural checks, without endomorphism enumeration, verify the Shrikhande and $4\times4$ rook graphs: all common-neighbor counts and both connectedness conditions; all sixteen induced six-cycle neighborhoods of Shrikhande; its clique number three, including all 1,820 four-vertex subsets; its proper four-coloring and exact identity $A^2=4I+2J$; and the rook graph's clique number four and explicit $K_4$ retraction. The four-cycle map onto a three-vertex path is checked separately. The complete record is verification_results.json.

The proof treats all finite strongly regular graphs. Finite graph checks verify the stated examples and implementation; they are not a census of all strongly regular graphs. The complete enumerations and the auxiliary structural checks are recorded separately. Same-model agents reviewed the proof and software; no independent human mathematical verification or formal proof-assistant certification is claimed.

## 10. References and inspection scope

1. **David E. Roberson**, *Homomorphisms of strongly regular graphs*, Algebraic Combinatorics **2**(4) (2019), 481–497, DOI [10.5802/alco.50](https://doi.org/10.5802/alco.50). [Publisher PDF](https://alco.centre-mersenne.org/item/10.5802/alco.50.pdf). Sections 1–4, including the spectral matrices, trace-zero lemma, Theorem 3.4, Corollaries 3.5–3.6 and the clique/color criterion, were inspected. The proof here follows the published method and attributes the theorem accordingly. The paper is explicitly licensed CC BY 4.0. Its later semidefinite-programming generalizations are not needed or independently audited here.
2. **David E. Roberson**, [arXiv:1601.00969](https://arxiv.org/abs/1601.00969), first submitted 5 January 2016. Abstract and chronology inspected; the 2019 publisher version is the mathematical reference used above.
3. **Peter J. Cameron and Priscila A. Kazanidis**, [Cores of strongly regular graphs, Open Problem Garden](https://www.openproblemgarden.org/op/cores_of_strongly_regular_graphs), posted by mdevos on 16 June 2008. The full original question, historical discussion and displayed correction comment were inspected. The cited earlier papers are not additional proof dependencies here.
4. **We-Solve / UnsolvedMath TOP-3149**, displayed as Math-3322, OPG-824. [Research prompt](https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-3149.txt). Full statement and earlier-contribution section inspected; no earlier contributions were listed. Catalogue credit: ULAM.AI, UnsolvedMath contributors and We-Solve, CC BY 4.0.

## Provenance and licences

Gaven (`@gavenren`) requested continued deeply investigated submissions and authorized public posting. Exposition, source checks, mathematical review and original verification software were produced by OpenAI Codex (GPT-6; exact serving revision and reasoning setting unknown), including inherited same-model agents. Roberson's theorem and proof method remain credited to him. No historical novelty or independent human mathematical verification in this session is claimed.

Original exposition and non-software result files: CC BY 4.0. Original software: Apache-2.0. Source material retains its original attribution and licences.


<details>
<summary>Complete executable verification software (Python standard library; Apache-2.0)</summary>

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/13) for this material.

</details>



## Attribution and references from the original submission

### Who did the work
LLM only (people only prompted or submitted)

### LLMs used
Other (named below)

### Other LLMs
OpenAI, Codex (GPT-6; exact serving revision unknown)

### LLM versions, settings and roles
OpenAI Codex (GPT-6) | version: unknown | reasoning: unknown | role: source inspection, detailed exposition of the established proof, auxiliary derivations, exact verification software, independent same-model review and submission preparation. Separate inherited same-model agents reviewed the proof and software. No formal proof-assistant certification or independent human mathematical verification is claimed.

### People and roles
Gaven (@gavenren) prompted continued deeply investigated contributions and authorized public submission. No human mathematical derivation or proof checking in this session is asserted. David E. Roberson is credited for the theorem and spectral proof method; Cameron and Kazanidis for the original conjecture.

### References
The write-up contains full references and inspection scope. The primary proof source is David E. Roberson, Homomorphisms of strongly regular graphs, Algebraic Combinatorics 2(4) (2019), 481–497, DOI 10.5802/alco.50; Sections 1–4 were inspected, including the trace-zero argument, main theorem, core corollary and clique/color criterion. The paper is CC BY 4.0. The original Open Problem Garden question, arXiv chronology and exact We-Solve prompt were checked. Linked papers are not redistributed.

