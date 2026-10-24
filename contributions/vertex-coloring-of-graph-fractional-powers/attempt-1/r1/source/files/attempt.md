> Source: [original issue #14](https://github.com/We-Solve/research/issues/14). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.

# A 42-vertex counterexample to the fractional graph power conjecture

**We-Solve prb_ed509e4418ac4f60934e9bd92a0d8988, catalogue entry: Vertex Coloring of graph fractional powers.**

**Answer: no.** Let $G=C_3\square K_2$ be the triangular prism, and take $m=3,n=5$. The graph $G$ is connected and has maximum degree three, while

$$
\boxed{\omega(G^{3/5})=5<6=\chi(G^{3/5}).}
$$

These parameters satisfy every hypothesis of the catalogue: $n>m>1$, and the denominator really is larger than the numerator.

**Attribution.** Stephen Hartke, Hong Liu and Šárka Petříčková gave this counterexample in Proposition 5.2 of their paper *On coloring of fractional powers of graphs*, first posted to arXiv on 17 December 2012. This is a **Literature report** with a self-contained proof and exact finite certificates, not a new disproof. The obstruction below follows their crust-coloring argument, with explicit labels and distance witnesses. The clique bound is proved directly using the subdivided graph's girth, so the counterexample needs no external formula for clique numbers of fractional powers. No historical novelty is claimed.

## 1. Definitions and a completely specified graph

For a finite simple graph $G$, write $S_n(G)$ for the graph obtained by replacing each edge with a path of length $n$. New internal vertices on different edges are distinct. For a graph $J$, its power $J^m$ joins two distinct vertices exactly when their distance in $J$ is at most $m$. Thus the catalogue convention is

$$
G^{m/n}=(S_n(G))^m.
$$

This notation names an ordered pair of operations. No cancellation or arithmetic manipulation of the fraction is being used.

Use the six prism vertices

$$
u_0,u_1,u_2,\qquad v_0,v_1,v_2.
$$

The $u$-vertices form a triangle, the $v$-vertices form a triangle, and the remaining three edges are $u_iv_i$, $i=0,1,2$. There are nine edges, and every vertex has degree three. Put

$$
J=S_5(G),\qquad H=J^3=G^{3/5}.
$$

The subdivision $J$ has $6+9\cdot4=42$ vertices and 45 edges. For each ordered adjacent pair $a,b$ of original prism vertices, let $x_{ab}$ and $y_{ab}$ be the vertices at distances one and two from $a$ on the subdivided $ab$-path. In this notation every such path is

$$
a\; -\; x_{ab}\; -\; y_{ab}\; -\; y_{ba}\; -\; x_{ba}\; -\; b.
\tag{1}
$$

Every distance used in the proof is a distance in $J$. A path of length at most three therefore certifies an edge of $H$.

## 2. The clique number is exactly five

Fix an original vertex $a$, and define its four-vertex star

$$
B_a=\{a\}\cup\{x_{ab}:b\sim_G a\}.
$$

Every two vertices of $B_a$ are at distance at most two in $J$. Each $y_{ab}$ is at distance at most three from every member of $B_a$: its distance from $a$ is two, its distance from $x_{ab}$ is one, and a path through $a$ to another arm has length three. Hence

$$
B_a\cup\{y_{ab}\}
$$

is a five-clique in $H$, proving $\omega(H)\ge5$.

For the reverse inequality, every cycle of $J$ comes from a cycle of the prism with all its edges subdivided five times. Its girth is therefore 15: a prism triangle produces a 15-cycle, and no shorter cycle exists.

Let $K$ be any clique of $H$, and fix $a\in K$. Every vertex of $K$ lies in the radius-three ball about $a$ in $J$. That ball induces a tree. Indeed, take a breadth-first tree from $a$; an additional edge inside the ball would give a cycle of length at most seven, contrary to the girth.

Let $T$ be the union of the tree paths from $a$ to the vertices of $K$. Any two vertices of $K$ have a path of length at most six in $T$. They also have a path of length at most three in $J$, since they are adjacent in $H$. If those two paths were different, their union would contain a cycle of length at most nine. Therefore they are the same path, and all pairwise distances between vertices of $K$ inside $T$ are at most three.

The smallest subtree containing $K$ also has diameter at most three: every leaf of that subtree belongs to $K$, so endpoints of a longest path belong to $K$. A tree of diameter at most three fits into the union of the closed radius-one neighborhoods of the two endpoints of a central edge. When its center is a vertex, extend that center to an incident edge; the one-vertex case is immediate. It follows that for some edge $cd$ of $J$,

$$
K\subseteq N_J[c]\cup N_J[d].
$$

The graph $J$ is triangle-free, so this union has $\deg_J(c)+\deg_J(d)$ vertices. Original prism vertices have degree three and internal vertices have degree two; no two original vertices are adjacent in $J$. Thus the degree sum across any edge is at most five. This proves

$$
\boxed{\omega(H)=5.}
\tag{2}
$$

## 3. What a hypothetical five-coloring would force

Assume, for a contradiction, that $H$ has a proper coloring with a palette of five colors. For every original prism vertex $a$, the four vertices of $B_a$ form a four-clique and receive four different colors.

Define the three-vertex crust

$$
C_a=\{y_{ab}:b\sim_G a\}.
$$

Every member of $C_a$ is adjacent in $H$ to all four vertices of $B_a$. Only one of the five colors remains available, so all three crust vertices receive that same color. Denote it by $\gamma(a)$.

If $ab$ is a prism edge, then $y_{ab}$ and $y_{ba}$ are adjacent in $J$, as (1) shows. In particular their colors differ. Consequently

$$
a\longmapsto\gamma(a)
$$

is a proper coloring of the original six-vertex prism with five available colors.

There are six crusts, so two crust colors coincide. A color class in the prism has size at most two, since each of the two triangles contributes at most one vertex. Thus a repeated color occurs on a pair $u_i,v_j$ with $i\ne j$. Permuting the three matching indices, and exchanging the two triangle layers if necessary, sends any such pair to $u_0,v_1$. Relabeling the colors, assume

$$
\gamma(u_0)=\gamma(v_1)=1.
\tag{3}
$$

No other crust has color one. One can see this either from the independence-number bound or by noting that every other prism vertex is adjacent to at least one of $u_0,v_1$.

For each of the four remaining original vertices $a$, the crust color $\gamma(a)$ is different from one. The five-clique $B_a\cup\{y_{ab}\}$ must use the entire palette. Since its crust vertex has color $\gamma(a)\ne1$, exactly one member of $B_a$ must have color one. We will show that these four local requirements are inconsistent.

## 4. Three forced vertices, followed by a contradiction

Two simple distance observations explain every exclusion below.

1. If $a$ is adjacent in the prism to $c\in\{u_0,v_1\}$, then $a$ and $x_{ac}$ cannot have color one. The crust vertex $y_{ca}\in C_c$ already has color one, and their distances to it along (1) are respectively three and two.
2. On any prism edge $ab$, the two first vertices $x_{ab}$ and $x_{ba}$ are at distance three in $J$. If either has color one, the other cannot.

Apply these observations to the following stars, in the order displayed:

| Star requiring color one | Excluded members | Only remaining member |
| --- | --- | --- |
| $B_{u_1}=\{u_1,x_{u_1u_0},x_{u_1u_2},x_{u_1v_1}\}$ | $u_1,x_{u_1u_0}$ are too close to $C_{u_0}$; $x_{u_1v_1}$ is too close to $C_{v_1}$ | $x_{u_1u_2}$ is forced to color one |
| $B_{v_0}=\{v_0,x_{v_0v_1},x_{v_0v_2},x_{v_0u_0}\}$ | $v_0,x_{v_0v_1}$ are too close to $C_{v_1}$; $x_{v_0u_0}$ is too close to $C_{u_0}$ | $x_{v_0v_2}$ is forced to color one |
| $B_{v_2}=\{v_2,x_{v_2v_0},x_{v_2v_1},x_{v_2u_2}\}$ | $v_2,x_{v_2v_1}$ are too close to $C_{v_1}$; $x_{v_2v_0}$ is too close to the forced $x_{v_0v_2}$ | $x_{v_2u_2}$ is forced to color one |

Now consider the last star

$$
B_{u_2}=\{u_2,x_{u_2u_0},x_{u_2u_1},x_{u_2v_2}\}.
$$

It too must contain color one, but every member is excluded:

* $u_2$ and $x_{u_2u_0}$ are at distances three and two from $y_{u_0u_2}\in C_{u_0}$.
* $x_{u_2u_1}$ is at distance three from the forced color-one vertex $x_{u_1u_2}$.
* $x_{u_2v_2}$ is at distance three from the forced color-one vertex $x_{v_2u_2}$.

This is a contradiction. Hence

$$
\boxed{\chi(H)\ge6>5=\omega(H).}
\tag{4}
$$

All the exclusions use explicit paths of length at most three. They do not require a numerical search to establish that a pair is adjacent. The proof handles every possible five-coloring because the repeated crust pair is normalized using actual symmetries of the prism, not selected by an experimental guess.

## 5. An explicit six-coloring and the conclusion

The following table assigns one of the colors $1,\ldots,6$ to every vertex. Each row is ordered along the entire subdivided path, including its two original endpoints. The endpoint assignments agree across rows, so the table defines a single coloring of all 42 vertices.

| Original edge | Colors in path order $(a,x_{ab},y_{ab},y_{ba},x_{ba},b)$ |
| --- | --- |
| $u_0u_1$ | $(1,2,3,4,1,2)$ |
| $u_0u_2$ | $(1,4,3,5,2,1)$ |
| $u_0v_0$ | $(1,5,3,2,1,4)$ |
| $u_1u_2$ | $(2,3,4,5,6,1)$ |
| $u_1v_1$ | $(2,5,4,1,2,3)$ |
| $u_2v_2$ | $(1,3,4,6,2,3)$ |
| $v_0v_1$ | $(4,3,2,1,5,3)$ |
| $v_0v_2$ | $(4,5,2,1,4,3)$ |
| $v_1v_2$ | $(3,4,1,6,5,3)$ |

Here is a short way to check the table without listing every powered edge. Within each path, positions separated by at most three have different colors. At each original vertex, the three first vertices have pairwise different colors, and every second vertex has a color different from that original vertex and all three first vertices. These checks handle paths through two different arms: their internal endpoints can be within distance three only at distances $(1,1)$, $(1,2)$ or $(2,1)$ from their common original vertex. A path of length at most three cannot contain two distinct original vertices, whose distance is at least five. Thus the checks exhaust every possible adjacency of $H$, proving that this is a proper six-coloring.

Together with (4), the table proves the exact value

$$
\boxed{\chi(G^{3/5})=6,\qquad \omega(G^{3/5})=5.}
$$

The catalogue's universally quantified equality fails for the permitted connected cubic graph $C_3\square K_2$ and the permitted exponent pair $(m,n)=(3,5)$. A single counterexample settles that assertion negatively.

The source paper proves additional positive results, including the conjectured equality for even numerators. Those general results are separate theorems and are not being reproved here. We also do not claim that the prism is the only exceptional base graph, that every odd numerator fails, or that the chromatic number of every fractional power has been classified.

The original OPG page includes a comment about $m=n=2$. That comment concerns the total-graph boundary, while this problem expressly requires $n>m$. It is not the counterexample used in this submission. Here $3<5$ strictly, so no boundary reinterpretation is involved.

## 6. Exact finite verification and its limits

The accompanying verify.py was executed using Python's standard library and exact integer arithmetic. All assertions passed. The complete record is verification_results.json, and the independently checkable five-color obstruction is five_color_unsat_certificate.json.

* Integer breadth-first search constructs all distances in the 42-vertex, 45-edge subdivision. Joining pairs at distances one through three gives exactly 162 powered edges; the degree counts are eighteen vertices of degree seven, eighteen of degree eight, and six of degree nine.
* An increasing-order exhaustive enumeration counts every clique once. Counts for sizes one through five are respectively $42,162,204,105,18$, with no larger cliques. A separate Bron–Kerbosch enumeration finds 45 maximal cliques and independently confirms maximum size five.
* A generic DSATUR search, normalized only by fixing the five distinct colors on a verified five-clique, exhausts every legal five-coloring candidate: 6,511 search nodes, 6,510 branches and 1,287 conflict leaves. The search uses ordinary edge constraints, without the crust lemma or its forcing consequences as pruning rules.
* The resulting 275,393-byte UNSAT certificate records every local branch and a colored adjacent witness for each forbidden color at each conflict. A separate checker verifies that internal nodes contain all and only legal colors, every conflict has all five witnesses, and every certificate node is reached. It checks 6,511 nodes and 6,510 branches without using DSATUR's selection heuristic. The certificate is written, reloaded and checked again; its SHA-256 digest is 14c576352fcf589e9279fa5f3ac3288fd19676135f7bf0ffa092d7cd0e8d668d.
* A six-color search produces the coloring in Section 5 (with software colors shifted from $0,\ldots,5$ to $1,\ldots,6$). Every one of the 162 edges is checked for unequal endpoint colors.
* Separate geometry checks verify the six star/crust gadgets, the prism's independence number two, its twelve automorphisms and the single orbit of its six unordered nonedges, and every step of the color-one contradiction. These checks are separate from the coloring search.

To regenerate the result and certificate, run:

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/14) for this material.

To check the saved UNSAT certificate without rerunning a coloring search:

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/14) for this material.

The finite graph certificates supplement the mathematical proof. The clique bound in Section 2 and the five-color contradiction in Sections 3–4 are self-contained, and the six-color table is checked by both the local argument and the complete edge list. Separate inherited same-model agents reviewed the proof and prepared the exact software.

No floating-point distance calculation is necessary: subdivision distances are obtained by integer breadth-first search, and proper colorings are checked against the resulting adjacency relation. The 42-vertex graph is a counterexample, not a census of all base graphs or exponents. No formal proof-assistant certification or independent human mathematical verification is claimed.

## 7. References and inspected scope

1. **Stephen Hartke, Hong Liu and Šárka Petříčková**, *On coloring of fractional powers of graphs*, [arXiv:1212.3898](https://arxiv.org/abs/1212.3898), first submitted 17 December 2012. [Full paper](https://arxiv.org/pdf/1212.3898). The definitions, introduction, Lemma 5.1 and Proposition 5.2 on printed page 9 were inspected. Proposition 5.2 supplies the established triangular-prism counterexample and its local forcing method. The broader even-numerator theorem and other generalizations are not additional proof dependencies here. We make no unverified claim about a journal publication or historical novelty.
2. **Moharram N. Iradmusa**, *On colorings of graph fractional powers*, Discrete Mathematics **310** (2010), 1551–1556, DOI [10.1016/j.disc.2010.01.017](https://doi.org/10.1016/j.disc.2010.01.017). The bibliographic record and the source paper's account of the original conjecture were inspected; its full collection of positive results is not used as an external theorem in our proof.
3. **Open Problem Garden**, [Vertex Coloring of graph fractional powers](https://www.openproblemgarden.org/op/vertex_coloring_of_graph_fractional_powers), posted by Iradmusa, 23 April 2011. The precise strict inequality $n>m$, original conjecture and displayed total-graph comment were inspected. The comment's $m=n=2$ example is outside the stated domain.
4. **We-Solve / UnsolvedMath prb_ed509e4418ac4f60934e9bd92a0d8988**, catalogue entry. [Catalogue statement](https://github.com/We-Solve/research/blob/main/problems/ed/prb_ed509e4418ac4f60934e9bd92a0d8988/statement.tex). The exact subdivision convention and full hypotheses were inspected. Catalogue credit: ULAM.AI, UnsolvedMath contributors and We-Solve, CC BY 4.0.

## Provenance and licences

Gaven (`@gavenren`) requested continued deeply investigated problems and authorized public submission. Exposition, source inspection, mathematical derivation and review, and original verification software were produced by OpenAI Codex (GPT-6; exact serving revision and reasoning setting unknown), including inherited same-model agents. The counterexample and forcing proof method remain credited to Hartke, Liu and Petříčková. No historical novelty or human mathematical derivation in this session is claimed.

Original exposition and non-software result files: CC BY 4.0. Original software: Apache-2.0. Linked source material retains its original attribution and rights; the source paper is not redistributed.


<details>
<summary>Complete executable verification and certificate checker (Python standard library; Apache-2.0)</summary>

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/14) for this material.

</details>



## Attribution and references from the original submission

### Who did the work
LLM only (people only prompted or submitted)

### LLMs used
Other (named below)

### Other LLMs
OpenAI, Codex (GPT-6; exact serving revision unknown)

### LLM versions, settings and roles
OpenAI Codex (GPT-6) | version: unknown | reasoning: unknown | role: primary-source inspection, detailed exposition of the known counterexample, independent auxiliary derivations, exact graph construction and search software, certificate production/checking, same-model review and submission preparation. Separate inherited same-model agents reviewed the proof and software. No formal proof-assistant certification or independent human mathematical verification is claimed.

### People and roles
Gaven (@gavenren) requested continued deeply investigated contributions and authorized public submission. No human mathematical derivation or proof checking in this session is asserted. Hartke, Liu and Petříčková are credited for the established counterexample and forcing method; Iradmusa for the original conjecture.

### References
Full references and inspection scope appear in the write-up. Primary mathematical source: Stephen Hartke, Hong Liu and Šárka Petříčková, On coloring of fractional powers of graphs, arXiv:1212.3898, first submitted 17 December 2012; the definitions, introduction, Lemma 5.1 and Proposition 5.2 were inspected. The exact We-Solve statement and original OPG question were checked. This uses the strict exponent pair 3<5, not the excluded total-graph boundary m=n=2. Linked source papers are not redistributed.

