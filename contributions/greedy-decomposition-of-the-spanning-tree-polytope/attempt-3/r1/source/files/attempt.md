# Integer greedy removal for all graphs on at most five vertices, with extensions and bounded certificates

## Editorial scope note

**Partial result.** Every removal maximum in the proved results uses the explicit convention $0\le\lambda\le k$ and is a positive integer. The unrestricted graph-and-dilation problem remains unresolved, and novelty is unverified. For the bounded seven-vertex result at $k=5$, the reviewer's separate implementation and saved certificates are now available as a [commit-pinned public audit bundle](https://github.com/We-Solve/research/tree/be66280dbd02bb4e9b0fc5f6eafab544ccfb27b5/audits/issue-17). A separate editorial checker verified all 42,297 saved witnesses and full weight-domain coverage on the 132 supplied core graphs. Graph-generator completeness rests on the supplied generator and the review's induction argument; that generator was not rerun here. These materials do not authenticate the submitter's unavailable original execution logs or witness ordering. The [unchanged uploaded ZIP](https://github.com/We-Solve/research/raw/be66280dbd02bb4e9b0fc5f6eafab544ccfb27b5/audits/issue-17/issue17-audit.zip) has SHA-256 `bf358e6034106349c697a12c5aef7f0c12271e38e170092c33e08ce1fd4ecaec`.

## Complete submitted scope

All claims use the explicitly stated convention $0\le\lambda\le k$. Written proofs establish a positive integer maximal removal coefficient for every integral input and every positive integer dilation for **every connected loopless multigraph on at most five vertices**. Series replacement, parallel replacement, and one-vertex sums preserve this property, giving larger graph classes as well. A separate proof covers $1\le k\le4$ for any 0/1 polytope with the integer decomposition property, hence for every spanning-tree polytope. Additionally, an exhaustive search with separately implemented certificate verification establishes the conclusion at $k=5$ for all connected loopless multigraphs on at most seven vertices, subject to graph-atlas completeness and computational correctness. Only this last bounded result is computer-assisted; its code and certificates are not publicly attached to this Issue, so its computation is reported rather than independently reproducible from this submission alone. This is not a solution for arbitrary graphs and dilations. No claim of established originality in the literature is made.

Assumptions and limitations:

- Graphs are finite, connected, undirected, and loopless; parallel edges are allowed and have distinct coordinates.
- The maximum studied in this contribution is over $0\le\lambda\le k$. This convention is stated separately from the original displayed statement, whose maximum does not explicitly impose that upper bound.
- Sections 2–8 give written proofs. Section 8.1 uses the established integer decomposition property of matroid base polytopes [4]. The bounded $k=5$ conclusion additionally depends on the computation in Section 9.2 and the documented completeness of the NetworkX 3.0 graph atlas [6].
- All computational feasibility and maximality decisions use exact integer or rational arithmetic. There was no theorem-prover verification. The user later supplied two review reports; the user identifies their models as Gemini 3.8 Flash and Gemini 4 Argon, respectively. The user confirmed these model names and versions. Reasoning settings are unknown, and the claimed independent executions have not been verified. Our search and certificate checker were written by the same model; externally reported checks are not silently counted as our executed checks.
- The site labels the original problem open. The limited source and literature checks in this session do not independently certify its present research status or the originality of these special cases.
- The earlier contribution CS-312-A1 was read. It proves a cactus case and gives a fractional-removal example in $K_4$; it does not assert the all-input $K_4$ theorem or the preservation lemmas proved here.
- The user subsequently supplied Chaourar's full 2002 paper [5]. Its eight pages were read, and key theorem pages were visually checked. Its fixed-basis criterion is relevant prior theory and motivated the five-vertex argument in Section 8.3. We distinguish its quantifiers from the input-dependent choice required here; the full mathematical literature has not been exhaustively checked for the present special case.

## Integer greedy removal for all graphs on at most five vertices, with extensions and bounded certificates

## 1. Original question and the precise convention used here

Let $P_G$ be the convex hull of the incidence vectors of the spanning trees of a connected graph $G$. The downloaded problem asks whether, for every $k\in\mathbb Z_{\gt 0}$ and $w\in kP_G\cap\mathbb Z^{E(G)}$, there exists $x\in P_G\cap\mathbb Z^{E(G)}$ such that

$$
\max\{\lambda:w-\lambda x\in(k-\lambda)P_G\}\in\mathbb Z.\qquad\text{(O)}
$$

This preserves the displayed maximum in the downloaded statement. The primary report, printed page 3027, explicitly writes $\lambda\ge0$, but does not explicitly write $\lambda\le k$. [1, 2]

For the results below, define instead

$$
L_G(w,k,T)=\max\{\lambda\in[0,k]:
w-\lambda\chi_T\in(k-\lambda)P_G\}.\qquad\text{(1)}
$$

Here $0P_G=\{0\}$. Say that $G$ has property **(IG)** if some spanning tree $T$ satisfies

$$
L_G(w,k,T)\in\{1,\ldots,k\}\qquad\text{(2)}
$$

for every such $w,k$. Thus a zero removal is not counted as progress.

The interval restriction is substantive notation, not a purported disproof of the intended question. If negative dilation factors are allowed literally, then for $w=k\chi_T$ the choice $x=\chi_T$ satisfies the membership relation for every real $\lambda$, since the residual equals $(k-\lambda)\chi_T$. For $K_2$, whose polytope has one point, there is no alternative choice and the literal maximum is unbounded. We make no full-disproof claim from this issue. All subsequent maxima mean (1), as in the nonnegative-scale convention of CS-312-A1. [3]

The maximum in (1) exists: its feasible set is a nonempty closed subset of the compact interval $[0,k]$. For example, closedness follows by writing its membership condition as $w-\lambda\chi_T=(k-\lambda)y$ with $y\in P_G$, then projecting a compact set. Its feasible set is an interval beginning at zero, by convexity of $P_G$.

## 2. The graph class and theorem

Define $\mathcal C$ as the smallest class containing $K_2$ and $K_4$ and closed under these operations:

1. **Parallel replacement:** replace an edge $e=uv$ by two distinct edges $a,b$, both joining $u$ to $v$.
2. **Series replacement:** replace $e=uv$ by $a=uz$ and $b=zv$, where $z$ is a new vertex.
3. **One-vertex sum:** take two vertex-disjoint graphs and identify one vertex of each, retaining every edge.

**Theorem.** Every graph in $\mathcal C$ has (IG). More generally, each of these three operations preserves (IG).

This gives a class with overlapping cycles, including subdivisions of $K_4$, beyond the cactus case in [3]. The construction definition is the exact scope: no identification with a larger named graph class, and no closure under an arbitrary edge-sum, is assumed.

We prove the theorem by establishing the two starting cases and three preservation lemmas.

## 3. An exact description of the K4 polytope

Write $E=E(K_4)$, and let $\Delta$ range over its four triangles. Then

$$
P_{K_4}=\left\{y\in\mathbb R^E:
0\le y_e\le1\ (e\in E),\quad
y(E)=3,\quad y(\Delta)\le2\ (\Delta\text{ a triangle})\right\}.\qquad\text{(3)}
$$

Here $y(A)=\sum_{e\in A}y_e$. We include a proof so that no unchecked polyhedral characterization is needed for this special case.

For an edge subset $A\subseteq E$, let $r(A)=4-c(A)$, where $c(A)$ counts connected components of $(V,A)$, including isolated vertices. Every vector on the right of (3) satisfies $y(A)\le r(A)$. Indeed:

- rank zero means $A$ is empty;
- a nonempty rank-one set has just one edge;
- a rank-two set has at most two edges unless it is a triangle;
- a rank-three set has $y(A)\le y(E)=3$, by nonnegativity.

To show that these rank bounds imply membership in the convex hull of trees, take any real edge-weight vector $c$. Subtracting its smallest coordinate from every coordinate changes $c\cdot y$ by the same constant for all vectors with coordinate sum three. We may therefore assume the weights are nonnegative. Order the edges so that $c_1\ge\cdots\ge c_6\ge0$, put $c_7=0$, and let $A_j$ be the first $j$ edges. Then

$$
c\cdot y=\sum_{j=1}^6(c_j-c_{j+1})y(A_j)
\le\sum_{j=1}^6(c_j-c_{j+1})r(A_j).
$$

Greedily scanning this order and retaining an edge exactly when it creates no cycle produces a spanning tree $T$. After each prefix, the retained edges are a maximal forest in that prefix, so $|T\cap A_j|=r(A_j)$. Thus the last display equals $c\cdot\chi_T$. No linear functional separates $y$ from the convex hull of the spanning trees; by finite-dimensional convex separation, $y\in P_{K_4}$. The reverse inclusion in (3) follows directly from acyclicity. This proves (3).

## 4. Proof of (IG) for K4

Every spanning tree of $K_4$ is either a four-vertex path or a star. If $T$ is a path, each triangle contains either one or two edges of $T$. Applying (3) at the residual scale $k-\lambda$ gives

$$
\boxed{
L_{K_4}(w,k,T)=\min\left(
\{k\}
\cup\{w_e:e\in T\}
\cup\{k-w_e:e\notin T\}
\cup\{2k-w(\Delta):|T\cap\Delta|=1\}
\right).}\qquad\text{(4)}
$$

To verify every term, a selected edge imposes $\lambda\le w_e$ by nonnegativity. An unselected edge imposes $\lambda\le k-w_e$ by its upper bound at the residual scale. For a triangle,

$$
w(\Delta)-\lambda|T\cap\Delta|\le2(k-\lambda)
\quad\Longleftrightarrow\quad
\lambda\bigl(2-|T\cap\Delta|\bigr)\le2k-w(\Delta).
$$

The coefficient on $\lambda$ is either zero or one. The other coordinate inequalities remain valid automatically, and the total coordinate sum is $3(k-\lambda)$. These conditions remain sufficient at $\lambda=k$, since nonnegative coordinates with zero total are all zero. Thus (4) is an equality, not just an upper bound. All its terms are nonnegative integers.

It remains to find a path for which (4) is positive, or to handle the exceptional case without a path. Put $p=w/k$, and express $p$ as a convex combination of tree incidence vectors.

If a path $T$ has positive coefficient $\alpha$, then $\lambda=k\alpha\gt 0$ is feasible in (1): subtract that term from the convex combination. When $\alpha=1$, the residual is zero. Thus $L_{K_4}(w,k,T)\ge k\alpha\gt 0$. We do not require $k\alpha$ to be integral: formula (4) expresses the maximum as a minimum of integers, so this strictly positive maximum is an integer at least one.

Otherwise the combination uses only stars. If it uses just one star $S$, then $w=k\chi_S$ and $L_{K_4}(w,k,S)=k$. If at least two stars have positive coefficients, relabel their centers as 1 and 2. There is an incidence-vector identity

$$
\chi_{\{12,13,14\}}+\chi_{\{12,23,24\}}
=\chi_{\{12,13,24\}}+\chi_{\{12,14,23\}}.\qquad\text{(5)}
$$

The two trees on the right are paths. Let $\varepsilon\gt 0$ be the smaller of the two star coefficients. Subtract $\varepsilon$ from each star coefficient and add $\varepsilon$ to each of the two path coefficients. Equation (5) preserves the represented vector, nonnegativity of the coefficients, and their total sum. We now have a convex combination containing a path with positive coefficient, reducing to the preceding case.

This proves (IG) for $K_4$ for **every** integer $k\gt 0$, not only the finitely checked values below.

There is also a direct finite selection rule: if $w=k\chi_S$ for a star, choose $S$. Otherwise evaluate (4) for the twelve path trees and choose any with a positive value. The argument proves that at least one exists.

For $K_2$, the unique tree has $w=k\chi_T$, so (IG) holds with maximum $k$.

## 5. Parallel replacement preserves (IG)

Let $G'$ be obtained from $G$ by replacing $e$ with parallel edges $a,b$. For a vector $z$ on the new edges define

$$
(\pi z)_e=z_a+z_b,\qquad (\pi z)_f=z_f\quad(f\ne e).
$$

For every real $t\ge0$, the following is an exact polytope identity:

$$
z\in tP_{G'}\quad\Longleftrightarrow\quad
\pi z\in tP_G\ \text{ and }\ z_a,z_b\ge0.\qquad\text{(6)}
$$

For $t=1$, projection of a new spanning tree yields an old tree: a tree uses at most one of the two parallel edges. Conversely, express $\pi z$ as a distribution over old trees. Its probability of containing $e$ is $p=z_a+z_b$. On trees containing $e$, replace it by $a$ with probability $z_a/p$ and by $b$ otherwise. If $p=0$, both coordinates are zero and no choice is needed. This gives the desired new marginals. Positive scaling proves (6) for $t\gt 0$; at $t=0$, nonnegativity and $z_a+z_b=0$ give both coordinates zero, so the identity still holds.

Take an integer $w\in kP_{G'}$ and set $u=\pi w$. Choose an old tree $T$ whose maximum $L=L_G(u,k,T)$ is a positive integer.

If $e\notin T$, lift $T$ without either new edge. The two new coordinates do not change upon removal, and (6) shows that its new maximum is exactly $L$.

If $e\in T$, then $u_e\ge L\gt 0$. Choose $c\in\{a,b\}$ with $w_c\gt 0$, and replace $e$ in $T$ by $c$, obtaining $T'$. By (6), the exact feasible interval is

$$
0\le\lambda\le L,\qquad \lambda\le w_c,
$$

and hence

$$
L_{G'}(w,k,T')=\min\{L,w_c\}\in\mathbb Z_{\gt 0}.\qquad\text{(7)}
$$

All projected coordinates are integral, so the hypothesis on $G$ applies. This proves the preservation claim.

## 6. Series replacement preserves (IG)

Now replace $e=uv$ by $a=uz,b=zv$ through a new degree-two vertex. For residual scale $t$, define the scale-dependent projection

$$
(\pi_t z)_e=z_a+z_b-t,\qquad
(\pi_t z)_f=z_f\quad(f\ne e).
$$

The exact scaled identity is

$$
z\in tP_{G'}\quad\Longleftrightarrow\quad
\pi_t z\in tP_G\ \text{ and }\ z_a,z_b\le t,
\qquad t\ge0.\qquad\text{(8)}
$$

Nonnegativity of the new coordinates is implicit in the right side: $z_a+z_b\ge t$, together with $z_a,z_b\le t$, gives $z_a,z_b\ge0$ for every $t\ge0$.

For $t=1$, a new tree contains both new edges if the projected tree contains $e$; otherwise it contains exactly one. For sufficiency, put $y=\pi_1z$ and $p=y_e=z_a+z_b-1$, and take a distribution over old trees with marginals $y$. Trees containing $e$, of total probability $p$, receive both new edges. On trees omitting $e$, assign the choices “only $a$” and “only $b$” total probabilities

$$
1-z_b\quad\text{and}\quad1-z_a,
$$

respectively. These numbers are nonnegative and sum to $1-p$. The resulting marginal of $a$ is $p+1-z_b=z_a$, and similarly for $b$. If $p=1$, both upper bounds force $z_a=z_b=1$, so all trees receive both edges. Also, $z_a+z_b\ge1$ and each coordinate at most one imply that both are nonnegative. This proves (8) at unit scale. Scaling handles $t\gt 0$. At $t=0$, the projected coordinates vanish, while $z_a+z_b=0$ and both are nonpositive, forcing both to be zero.

For an integer $w\in kP_{G'}$, let $u=\pi_k w$, which is integral and lies in $kP_G$. Choose an old tree $T$ with positive integer maximum $L$. A lifted tree $T'$ satisfies

$$
\pi_{k-\lambda}(w-\lambda\chi_{T'})=u-\lambda\chi_T.\qquad\text{(9)}
$$

The $-t$ term in $\pi_t$ is essential in this calculation.

If $e\in T$, include both $a,b$. Their residual upper bounds are simply $w_a,w_b\le k$, so (8) and (9) give maximum exactly $L$.

If $e\notin T$, positivity of the old maximum implies $u_e\le k-L\lt k$, since the unchanged coordinate $u_e$ must be at most the residual scale. Therefore

$$
(k-w_a)+(k-w_b)=k-u_e\gt 0.
$$

Both summands are nonnegative integers. Choose a new edge $c$ with $k-w_c\gt 0$, omit it, and include the other new edge. For the omitted edge, the upper bound at residual scale is precisely $\lambda\le k-w_c$. For the included edge it adds no restriction. Thus

$$
L_{G'}(w,k,T')=\min\{L,k-w_c\}\in\mathbb Z_{\gt 0}.\qquad\text{(10)}
$$

Equations (8) and (9) verify all remaining constraints and the zero-scale endpoint. This proves preservation under subdivision.

## 7. One-vertex sums and conclusion of the theorem

If $G$ is a one-vertex sum of $G_1,G_2$, its spanning trees are exactly the unions of a spanning tree from each factor. Indeed, any connection between vertices of one factor through the other factor would have to enter and leave through the same articulation vertex; it supplies no extra connection within the first factor. Cycles are likewise confined to one factor. Consequently

$$
P_G=P_{G_1}\times P_{G_2}
$$

on the two disjoint edge sets. Split $w=(w_1,w_2)$, choose good trees $T_i$ in the factors, and let their positive integer maxima be $L_i$. Then

$$
L_G(w,k,T_1\cup T_2)=\min\{L_1,L_2\}\in\mathbb Z_{\gt 0}.\qquad\text{(11)}
$$

Together with Sections 4–6, this proves the theorem by induction on a construction of $G$.

Each removal leaves an integral vector at a smaller nonnegative integer scale. Repeating the procedure terminates after at most $k$ steps and gives

$$
w=\sum_i\lambda_i\chi_{T_i},\qquad
\lambda_i\in\mathbb Z_{\gt 0},\qquad \sum_i\lambda_i=k,
$$

with every $\lambda_i$ maximal at its own step. The finite construction of the graph can be used recursively to select the trees by (4), (7), (10), and (11).

## 8. A restriction on a smallest counterexample

**Corollary.** If (IG) fails for some finite connected loopless multigraph, a counterexample having the fewest edges is simple, has no articulation vertex, has minimum degree at least three, and has at least five vertices.

**Proof.** The one-vertex graph is not a counterexample: its empty spanning tree can be removed with coefficient $k$. A pair of parallel edges can be merged into one edge, giving a smaller graph; parallel preservation would lift (IG) back, a contradiction. An articulation vertex permits decomposition as a one-vertex sum of two smaller connected graphs with nonempty edge sets, contradicting (11). A degree-one vertex either gives $K_2$, which is good, or gives such an articulation decomposition. A degree-two vertex in the now-simple graph has distinct neighbors; suppressing it yields a smaller connected loopless multigraph, possibly with parallel edges. Series preservation again gives a contradiction. Finally a simple graph with minimum degree three has at least four vertices, and on exactly four vertices it must be $K_4$, already handled. This proves the corollary.

The corollary does **not** assert three-vertex-connectivity: two-vertex separators have not been eliminated.

### 8.1. Every dilation at most four works for every graph

For a 0/1 polytope $P$, define $L_P(w,k,x)$ by (1) with $x\in P\cap\mathbb Z^E$ in place of $\chi_T$. Assume that $P$ has the **integer decomposition property (IDP)**: every integral $w\in kP$ is a sum $x_1+\cdots+x_k$ of integral points of $P$. Matroid base polytopes have this property. Gijswijt and Regts prove the stronger integer Carathéodory property for polymatroid base polytopes in Theorem 10 [4]; expanding its positive integer coefficients gives IDP. We use this established fact, not a new claim about integer decomposition.

**Coordinate lemma.** If $k\ge2$ and some coordinate of $w$ is $1$ or $k-1$, then some integral $x\in P$ has $L_P(w,k,x)=1$.

**Proof.** Write $w=x_1+\cdots+x_k$ using IDP. Every $x_i$ is a 0/1 vector. Removing one summand is feasible with coefficient one. If $w_e=1$, select a summand with $x_{i,e}=1$. Nonnegativity of the residual coordinate forces $1-\lambda\ge0$. If $w_e=k-1$, select a summand with $x_{i,e}=0$. Since every coordinate of every point of $P$ is at most one, residual membership forces $k-1\le k-\lambda$. Thus the feasible coefficient one is maximal in either case.

**Small-dilation theorem.** For every 0/1 polytope with IDP, every $1\le k\le4$, and every integral $w\in kP$, some integral $x\in P$ has a positive integer maximum $L_P(w,k,x)$.

**Proof.** At $k=1$, choose $x=w$. At $k=2$ or $3$, the coordinate lemma applies unless all coordinates of $w$ belong to $\{0,k\}$. In that exception $x=w/k$ is itself an integral point of $P$, and $L_P(w,k,x)=k$. At $k=4$, the coordinate lemma handles any coordinate equal to $1$ or $3$. Otherwise all coordinates belong to $\{0,2,4\}$, so $u=w/2$ is an integral point of $2P$. The already proved $k=2$ case gives a suitable $x$. Directly from the definition, for any $d\gt 0$,

$$
L_P(du,dh,x)=dL_P(u,h,x).\qquad\text{(12)}
$$

Indeed, substituting $\lambda=d\mu$ identifies the two feasible intervals by positive scaling. Apply (12) with $d=h=2$. This completes the proof.

In particular, any spanning-tree counterexample must have $k\ge5$. More generally, a counterexample with the smallest possible dilation has $\gcd(k,(w_e)_{e\in E})=1$: otherwise (12) would give a counterexample at a smaller positive integer dilation.

### 8.2. Fixed-coordinate reductions and the k=5 search domain

The results in Sections 5–7 also hold at a single fixed dilation $k$: each proof invokes the smaller graph only at that same scale.

There are two additional input-specific reductions.

- If $w_e=0$, every tree in a convex representation of $w/k$ omits $e$; therefore $G-e$ is connected and $w$ with coordinate $e$ deleted belongs to $kP_{G-e}$. Trees omitting $e$ have exactly the same feasible removal interval in the two graphs. A tree containing $e$ cannot be removed with a positive coefficient.
- If $w_e=k$, every tree in that representation contains $e$. Contract $e$; any loops produced by parallel edges have weight zero and are discarded. Trees of this contraction lift bijectively to trees of $G$ containing $e$. Their removal intervals agree: the residual $e$-coordinate is $k-\lambda$, so the residual lies in precisely this face of the original scaled polytope. At $\lambda=k$, both residuals are zero. A tree omitting $e$ has no positive feasible coefficient, since the unchanged coordinate $k$ exceeds $k-\lambda$.

Thus a counterexample input with a coordinate $0$ or $k$ yields a counterexample on a smaller graph. The coordinate lemma excludes any input having a coordinate $1$ or $k-1$.

Suppose now that a counterexample at $k=5$ exists on at most seven vertices, and select one with the fewest edges among all such counterexamples. The reductions above and those of Section 8 stay within this vertex bound and strictly reduce the number of edges. Consequently this minimal graph must be simple, have no articulation vertex, have minimum degree at least three, and have between five and seven vertices. Every edge weight must be $2$ or $3$.

If the graph has $n$ vertices and $m$ edges and exactly $q$ coordinates equal to $3$, its total-sum equation is

$$
2m+q=5(n-1),\qquad 0\le q\le m.\qquad\text{(13)}
$$

Hence it suffices to enumerate simple biconnected graphs on $5\le n\le7$, of minimum degree at least three, satisfying $2m\le5(n-1)\le3m$, and all choices of $q=5(n-1)-2m$ edges of weight three. Isomorphic relabelling preserves both feasibility and the maximum in (1).

Section 9.2 verifies every feasible input in precisely this finite domain. Together with this reduction it gives the following **computer-assisted corollary**: at $k=5$, every integral input for every connected loopless multigraph on at most seven vertices admits a positive integer maximal removal. The qualification is essential: completeness of the graph atlas and correctness of the executed programs are dependencies of this corollary, not consequences of the written proofs alone.

### 8.3. All graphs on at most five vertices, for every dilation

**Five-vertex theorem.** Every connected loopless multigraph on at most five vertices has (IG).

This is a written proof for unbounded $k$, not an extrapolation from the $k=5$ certificates. Reading the fixed-basis facet-slack criterion in Chaourar [5, Proposition 5.1] suggested isolating the non-unit slack denominator. We give the argument directly using the complete subset inequalities, without relying on the excluded-minor theorem in that paper.

**Tight-subset lemma.** Suppose $2\le |S|\lt |V(G)|$ and
$$
w(E(S))=k(|S|-1).
$$
If both $G[S]$ and the graph $G/S$ obtained by contracting $S$ have (IG), then this input has a good tree.

**Proof.** Every tree in any convex representation of $w/k$ must attain equality in this subset inequality. Such a tree consists of a spanning tree of $G[S]$ and a lift of a spanning tree of $G/S$. In particular, $G[S]$ is connected: if it had $c\ge2$ components, every tree would use at most $|S|-c$ edges in $E(S)$, forcing $w(E(S))\le k(|S|-2)\lt k(|S|-1)$. The face of $P_G$ defined by this equality is precisely the product of those two spanning-tree polytopes on disjoint edge sets. In forming $G/S$, all edges of $E(S)$ are removed; they belong to the first factor. The remaining edges create no loops, and parallel edges retain distinct coordinates.

The restrictions of $w$ therefore belong to the two integer dilations. Choose good trees $T_1,T_2$ there, with positive integer maxima $L_1,L_2$. Their lifted union $T$ attains equality in the same subset inequality. Every residual along $T$ continues to attain equality, so its feasible interval is exactly the intersection of the two factor intervals. Thus
$$
L_G(w,k,T)=\min(L_1,L_2).
$$
This includes the zero-scale endpoint and proves the lemma.

**Reduction to three graphs and strict inputs.** First, every connected loopless multigraph on at most four vertices has (IG). To see this, choose an edge-minimal counterexample within that vertex bound and apply the parallel, articulation, and degree-two reductions in Section 8. They stay within the bound. The resulting simple graph has minimum degree at least three, so it must be $K_4$, contradicting Section 4.

Now choose an edge-minimal counterexample among graphs on at most five vertices, if any exists. The same reductions show that it is a simple five-vertex graph of minimum degree at least three. Its complement has maximum degree at most one. Up to relabelling the only possibilities are
$$
K_5,\qquad K_5-\{12\},\qquad K_5-\{12,34\}.
$$
Fix a counterexample input $w\in kP_G\cap\mathbb Z^{E(G)}$. The coordinate reductions of Section 8.2 and minimality imply $0\lt w_e\lt k$ on every edge. If any proper subset $S$, $2\le |S|\le4$, attained equality in its subset inequality, both graphs in the tight-subset lemma would have at most four vertices and hence would be good. Therefore
$$
w(E(S))\lt k(|S|-1)
\quad(2\le |S|\le4).\qquad\text{(14)}
$$
All existing-edge coordinates are positive, so every spanning tree has a strictly positive feasible removal interval. This also follows directly from the finitely many strict inequalities in (14).

**A path with one potentially fractional bound.** Let $T$ be a spanning path on these five vertices, and let $A$ be its first, third, and fifth vertices in path order. This is its unique independent three-vertex set. For a proper vertex subset $S$, write
$$
d_T(S)=|S|-1-|T\cap E(S)|.
$$
For a two-vertex set this is zero or one. For a four-vertex set $S=V\setminus\{v\}$, it equals $\deg_T(v)-1$, also zero or one. For a three-vertex set it is zero or one except at $S=A$, where it equals two. Consequently the complete residual inequalities give
$$
L_G(w,k,T)=\min\!\left\{I_T,\frac{2k-w(E(A))}{2}\right\},\qquad\text{(15)}
$$
where the integer
$$
I_T=\min\!\left(
\{k\}\cup\{w_e:e\in T\}
\cup\{k(|S|-1)-w(E(S)):d_T(S)=1\}
\right)
$$
is positive under (14). This formula uses induced-edge sets in the actual graph; it remains valid when an edge of $K_5$ is missing.

**The two missing-edge cores need only a fixed path.** In either $K_5-\{12\}$ or $K_5-\{12,34\}$, take the path $1,3,2,4,5$, whose odd-position set is $A=\{1,2,5\}$. Its only potentially non-unit denominator in (15) comes from $E(A)=\{15,25\}$. Both these edges are absent from the path, so the two-vertex bounds already give
$$
I_T\le\min(k-w_{15},k-w_{25})
\le\frac{2k-w_{15}-w_{25}}2.
$$
Thus (15) equals the integer $I_T$ for every feasible input, and is positive for the strict inputs under consideration. This is a fixed greedy path in Chaourar's sense. At a boundary input it can have maximum zero; positivity for all inputs still uses the preceding reductions. This simplification was suggested by the second user-supplied review and verified directly here.

**Input-dependent selection for $K_5$.** It remains to find a triple $A$ and an edge $e$ crossing from $A$ to $V\setminus A$ such that
$$
2w_e+w(E(A))\le2k.\qquad\text{(16)}
$$
All six crossing edges are present in $K_5$, forming $K_{3,2}$. Any of them belongs to a spanning path alternating between its parts, with the vertices of $A$ in the odd positions. Choose such a path containing $e$. Then $I_T\le w_e\le(2k-w(E(A)))/2$, so (15) equals the positive integer $I_T$.

Average $2w_e+w(E(A))$ over all ten triples $A$ and all six crossing edges for each triple. Each edge crosses six triples and is internal to three triples. Its coefficient in the sum over the 60 pairs is $2\cdot6+6\cdot3=30$. The average is therefore
$$
\frac12w(E)=2k.
$$
Some pair satisfies (16). This is a finite averaging proof, not a randomized-algorithm assumption.

In every case a positive integer maximum exists, contradicting the chosen counterexample. This proves the five-vertex theorem, including all boundary inputs through the reductions and tight-subset lemma.

**Consequences.** An edge-minimal counterexample to (IG), if one exists, has at least **six** vertices, strengthening Section 8. Moreover, let $\mathcal C_5$ be the class generated from all connected loopless graphs on at most five vertices by series replacement, parallel replacement, and one-vertex sums. Every graph in $\mathcal C_5$ has (IG), by Sections 5–7. This includes extensions of $K_5$, not just of $K_4$.

## 9. Executed exact-arithmetic checks

The written proofs in Sections 2–8 are not inferred from tests. The additional bounded corollary in Section 8.2 uses the exhaustive computation in Section 9.2.

**Availability and reproducibility.** The Python programs, graph lists, logs, and witness files named below remain in the submitter's local workspace; they are not attached to this Issue or available through its links. The filenames identify what was run, not downloadable resources. Accordingly, this Issue does not provide a directly runnable computational submission. The reported bounded result in Section 8.2 depends on these local computations and should not be treated as independently reproduced from the public materials. Sections 2–8 provide the written mathematical arguments, while Section 8.2 still requires the finite enumeration in Section 9.2 to complete its computer-assisted conclusion.

An independent implementation of the exhaustive domains and exact feasibility/maximality tests can be written from Sections 8.2 and 9.1–9.2. Such an implementation could check the mathematical conclusion without reproducing the original files. Identical witness choices, random samples, step counts, logs, or file hashes are not guaranteed by this description; they require the original implementation and data. No independent reimplementation based solely on this Issue has been verified here.

### 9.1. K4 and graph-construction checks

The companion script `research/check_TOP-30001934.py` was executed with Python **3.10.8**, using only its standard library. Integer calculations and `fractions.Fraction` were used; no floating-point optimization or numerical tolerance was used. The resulting machine-readable log is `research/prb_c52b11884e7a480cbe6406c2464309f3-checks.json`. These are local companion artifacts, not publicly hosted references; the written proofs do not require them.

For $K_4$, every vector in $\{0,\ldots,k\}^6$ with coordinate sum $3k$ was considered (the sixth coordinate was computed from the first five). Feasibility was checked against the complete vertex-subset spanning-tree inequalities. This enumerates all integral points of $kP_{K_4}$ by (3). For each feasible point all sixteen spanning trees were checked.

| $k$ | Feasible integral points |
|---:|---:|
| 1 | 16 |
| 2 | 101 |
| 3 | 396 |
| 4 | 1,167 |
| 5 | 2,848 |
| 6 | 6,083 |
| 7 | 11,768 |
| 8 | 21,093 |
| **Total** | **43,472** |

These counts agree with the published Ehrhart polynomial of the graphic matroid base polytope $P(M(K_4))$, recorded in De Loera, Haws, and Köppe [7, Table 2]:
$$
i(P_{K_4},k)=1+\frac{107}{30}k+\frac{21}{4}k^2+
\frac{49}{12}k^3+\frac74k^4+\frac7{20}k^5.\qquad\text{(17)}
$$
The table and the authors' companion data page were checked directly, and exact substitution agrees with all our enumerated values for $1\le k\le8$. No OEIS entry is claimed. Evaluating (17) at $k=9$ gives 35,584, but we did not independently enumerate that dilation in this work.

For each point/tree pair the reference computation minimized $k$, the selected-edge nonnegativity bounds, and every applicable subset bound

$$
\frac{k(|S|-1)-w(E(S))}{|S|-1-|T\cap E(S)|}
$$

with strictly positive denominator, over $2\le|S|\lt |V|$. Completeness of this subset system for a connected loopless multigraph follows from the prefix-greedy proof in Section 3: for any edge set $A$, sum the vertex-subset bounds over the components of $(V,A)$ to obtain $y(A)\le |V|-c(A)$, using nonnegativity and the total-sum equality. The same support-function argument then applies. At scale zero, nonnegativity and zero total force the zero vector.

The checker also tested the residual at that exact optimum against all the inequalities. This reference uses the full subset system rather than the special path formula. Across **695,552** point/tree pairs, every path maximum agreed with (4), and the proposed selection rule always found a positive integer maximum. There were **11,928** fractional maxima for arbitrary tree choices; these do not contradict the existential result. In particular, the previously reported all-ones vector at $k=2$ gives maximum $1/2$ for a star, which the checker reproduced.

The recursive selection rules were also tested on **27 construction instances**: $K_2$, $K_4$, 24 graphs obtained by short series/parallel construction sequences (some also joined with $K_2$), and a one-vertex sum of two copies of $K_4$. These were not claimed to be 27 pairwise nonisomorphic graphs. With pseudorandom seed **30001934**, each construction received 50 inputs made by summing between 1 and 20 enumerated spanning trees. Across **1,350 inputs** and **5,288 successive greedy steps**, the checks verified:

- the selected edge set is an enumerated spanning tree;
- the claimed positive integer coefficient equals the exact full-subset reference maximum;
- the residual satisfies every subset inequality at its new scale;
- iteration ends at the zero vector;
- the weighted trees reconstruct the input exactly and their coefficients sum to the initial dilation.

All assertions passed. The generated-input checks are sampling, not an exhaustive test of the extension classes. The $K_4$ enumeration is exhaustive only for $1\le k\le8$. The additional exhaustive domain below has its own bounds; no unbounded computational verification or proof-assistant check is claimed.

### 9.2. Exhaustive reduced-core certificates at k=5

The search script `research/search_k5_cores.py` was executed with Python **3.10.8** and **NetworkX 3.0**. Its input graphs are the entries of `networkx.graph_atlas_g()` satisfying the conditions after (13). The version-matched documentation states that this atlas contains all graphs on at most seven vertices [6]. We rely on this documented completeness; we did not separately regenerate or formally verify the atlas.

For each graph, edges are ordered lexicographically. Every choice of the $q$ weight-three edges is considered. Feasibility is checked using nonnegativity, the total-sum equation, and every proper vertex-subset inequality described in Section 9.1. For each feasible input, the script enumerates spanning trees until it finds one with a positive integer exact maximum. Ratios in the maximum formula are compared by integer cross-multiplication.

| Vertices | Core graphs | Candidate weight vectors | Feasible vectors / certified witnesses |
|---:|---:|---:|---:|
| 5 | 3 | 107 | 107 |
| 6 | 15 | 1,953 | 1,953 |
| 7 | 114 | 40,941 | 40,237 |
| **Total** | **132** | **43,001** | **42,297** |

Every feasible input produced a witness. The selected witness coefficients were $1$ for **39,443** inputs, $2$ for **2,851**, and $3$ for **3**. These are counts of the first witnesses found in the enumeration order, not a classification of every possible good tree.

The compressed file `research/prb_c52b11884e7a480cbe6406c2464309f3-k5-witnesses.jsonl.gz` contains one record per input:

```text
[atlas_index, weight_three_edge_mask, selected_tree_edge_mask, integer_coefficient]
```

Bit $i$ refers to edge $i$ in the lexicographically sorted list. The search log `research/prb_c52b11884e7a480cbe6406c2464309f3-k5-search.json` also records the explicit edge lists, graph indices, and per-graph counts.

The separate script `research/verify_k5_certificates.py` was executed and later revised to use **only the Python standard library**, reading the explicit edge lists in the search JSON. It does not import the searcher's code or maximum formula. It validates each supplied graph, re-enumerates its full weight domain using direct vertex sets, checks tree validity and residual feasibility, and verifies maximality by a blocking constraint: either a selected edge has zero residual, or a subset inequality is tight with positive coefficient of further removal, or the coefficient has reached $k$. Such a constraint forbids every larger coefficient. It also checks weight-domain coverage and rejects duplicate or unused records.

All **42,297** certificates passed again after the revision, covering **43,001** candidate vectors on the **132 locally stored graphs**, with no missing or extra records; the result is saved in `research/prb_c52b11884e7a480cbe6406c2464309f3-k5-verification.json`. Both programs were authored by the same model. The verifier now runs without NetworkX, but this does **not** establish that the supplied graph list contains every required isomorphism class. That completeness claim still relies on the atlas source [6]. The user-supplied review's claimed independent graph generator was not supplied, so its claimed removal of this dependency has not been adopted.

### 9.3. Checks of the five-vertex averaging argument

The additional standard-library script `research/check_five_vertex_theorem.py` was executed with Python **3.10.8**, integers and `fractions.Fraction`, and seed **30001935**. It checks the averaging coefficients symbolically, one coefficient per edge, rather than merely sampling the averaging inequalities.

The three graphs have respectively **125, 75, and 45** spanning trees. The script retains the original three averaging identities as additional checks, represented by **60, 36, and 8** equally weighted pair records. The summed coefficient of each edge is respectively **30, 16, and 4**, giving averages $w(E)/2$, $4w(E)/9$, and $w(E)/2$. After the review-driven simplification, only the first average is needed in the proof; the missing-edge cases use a fixed path instead.

For every pair record, the script constructs an alternating spanning path containing the designated edge and verifies the unique exceptional triple and the other subset denominators. It then checks **100 generated strict-interior inputs per graph** against the full-subset reference maximum: the current selection uses the average for $K_5$, and the fixed path from Section 8.3 for the two missing-edge graphs. It also checks **100 generated boundary inputs per graph** by inspecting all spanning trees, and confirms integer (possibly zero) maxima for the fixed paths on those boundary inputs. Thus **300 interior and 300 boundary inputs** were checked, including exact residual feasibility. The boundary inputs are generated on nonempty subset faces; an initial test-generator assertion exposed an empty-face choice involving a missing edge, and the generator was corrected before the successful runs.

All assertions in the final run passed; the log is `research/prb_c52b11884e7a480cbe6406c2464309f3-five-vertex-checks.json`. These finite input checks supplement the symbolic identities and written proof; they are not an exhaustive verification over all $k$, nor an independent review.

### 9.4. Selected review claims checked in this work

The user supplied two review texts, but not the independent audit programs or execution logs claimed in them. We evaluated their suggestions rather than treating their verdicts as certification. The standard-library script `research/check_review_refinements.py` enumerates locked subsets using graphic and dual ranks and applies the criterion in [5, Proposition 5.1]. It obtains **0, 24, and 20** fixed greedy trees in $K_5$, $K_5-\{12\}$, and $K_5-\{12,34\}$, respectively. All counted fixed greedy trees here are paths. The last count corrects the second review's reported 33.

For every rejected tree the script also finds a direct fractional-maximality witness at $k=2$, with input explicitly represented as the sum of two trees, and verifies the residual against the complete subset inequalities. In the last graph this gives **25** non-greedy trees out of 45; the remaining **20** paths all have a nontriangle odd-position triple, so the domination argument in Section 8.3 proves their fixed-basis integrality. The count 20 thus has both a positive proof for the counted paths and counterexamples for every other tree.

The exact witnesses and polynomial comparison are saved in `research/prb_c52b11884e7a480cbe6406c2464309f3-review-refinements.json`. This was our own execution, not a reproduction of the unavailable review programs.

## 10. Self-audit and remaining gaps

- **Quantifiers:** The proof gives a suitable tree for every integral input in each claimed graph, rather than merely finding examples. It never replaces the existential requirement with “every tree works.”
- **Positive removal:** A zero coefficient is excluded from (IG). The convex-combination argument ensures a positive path coefficient unless the input is a pure star multiple; that exception has maximum $k$.
- **Exact maxima:** Formula (4) checks a complete inequality description. Identities (6) and (8) prove that the extension formulas are exact maxima, including their upper bounds, not only feasible lower bounds.
- **Subdivision bookkeeping:** The projected old weight is $w_a+w_b-k$, not $w_a+w_b$. At the residual scale the projection uses $k-\lambda$, as in (9).
- **Boundary cases:** The proofs cover zero coordinates, coordinates equal to $k$, bridges, pure tree multiples, $k=1$, and $\lambda=k$. The distribution arguments separately treat zero-probability conditioning cases. Both scaled projection identities were checked at scale zero.
- **Generality:** The preservation lemmas require only (IG) for the smaller graph. They do not silently assume that an arbitrary chosen tree in it has an integer maximum.
- **No use of earlier computations as our own:** The checks reported in Section 9 were executed in this session. The earlier attempt's other tests are not included in these totals.
- **Small dilations:** Section 8.1 requires IDP, not merely that a polytope has 0/1 vertices. Its $k=4$ reduction applies only after excluding coordinates $1$ and $3$, ensuring that $w/2$ is integral.
- **Finite-domain completeness:** The reductions preserve the fixed dilation and the upper bound on the number of vertices. A minimal counterexample at $k=5$ would occur in the domain of (13). The atlas assumption, finite enumeration, and certificates are explicitly separated from this mathematical reduction.
- **Five-vertex boundary cases:** Section 8.3 does not assume that all inputs are strict. Zero/full coordinates reduce to smaller graphs; a tight proper subset factors into graphs on at most four vertices. Only a hypothetical minimal counterexample reaches the strict-input averaging step.
- **Five-vertex path choice:** In $K_5$, the pair $(A,e)$ depends on the input weights, and the designated edge bounds removal before the denominator two can cause a fractional maximum. In the two missing-edge cores, existing two-vertex inequalities dominate that denominator for a fixed path. A fixed path can have zero maximum on a boundary input; the boundary reduction remains necessary.
- **Remaining mathematical gap:** No proof is supplied for general connected graphs at arbitrary dilations. In particular, arbitrary six-vertex graphs at $k\ge6$, and arbitrary graphs with more than seven vertices at $k=5$, remain unresolved here outside $\mathcal C_5$ and the input-specific lemmas. Arbitrary two-vertex or edge-sums are not proved to preserve (IG).
- **Status and novelty gap:** Chaourar's full paper was read after the user provided it. The precise fixed-basis versus input-dependent distinction is explained next. Two external review texts were subsequently supplied, identified by the user as outputs of Gemini 3.8 Flash and Gemini 4 Argon, respectively; the user confirmed these model names and versions; reasoning settings are unknown and claimed audit executions remain unverified. Their positive verdicts do not establish originality or the present open status of the general problem.

## 11. Position relative to inspected prior work

The original report [2] and the site's earlier contribution [3] were read before formulating the initial result. The earlier contribution supplied the cactus case and a warning that an arbitrary tree can have a fractional maximum, even in $K_4$.

Gijswijt and Regts [4] establish integer Carathéodory decompositions for matroid base polytopes. Their theorem supplies the IDP used in Section 8.1. An integer decomposition, even with affinely independent support, does not by its stated conclusion require its coefficients to equal successive maximal removal amounts. We therefore do not treat that theorem as a solution of the present greedy question.

Chaourar [5] is a direct antecedent. The user supplied the full paper after the initial publisher retrieval failed. We read its definitions, facet and lattice descriptions, Proposition 5.1, and the excluded-minor results, and visually checked printed pages 770 and 773–775. This was source inspection, not a formal verification of every proof in the paper.

The distinction in quantifiers is essential. Chaourar's greedy pair fixes a basis $B$ and requires its maximum to be integral for every admissible lattice point; zero is allowed. Proposition 5.1 characterizes this by
$$
|B\cap L|\ge r(L)-1
$$
for every locked subset $L$. Here the tree may depend on $w$, and we additionally require a positive maximum. For a positive-rank graphic matroid, cone membership after removal automatically has scale $k-\lambda$, so the cone and nonnegative-dilation formulations agree on our integral inputs. The $K_4$ path calculation is a concrete instance of the existing facet-slack criterion; it should not be presented as a new general integrality principle. Corollary 5.4 already provides a class in which every basis is greedy.

In $K_5$, every tree has an independent set of at least three vertices, by its bipartition. A triple of such vertices induces a triangle in $K_5$, with rank two and no tree edge. This triangle is locked: its restriction is a circuit, and contracting it leaves a connected cycle matroid on three vertices, with parallel edges permitted. Equivalently, its complement is nonseparable in the dual, as required by the paper's definition. Proposition 5.1 therefore implies that **no fixed spanning tree of $K_5$ is greedy for all inputs**. This does not contradict Section 8.3, which chooses a different path when necessary for each input.

The full-text comparison thus identifies both overlap and a useful direction: retain the known slack principle with attribution, and use the weighted average in Section 8.3 to select a path whose sole non-unit denominator does not determine its maximum. The five-vertex conclusion is not asserted in the inspected paper, and it is not the fixed-basis statement of Proposition 5.1 or the totally-greedy conclusion of Corollary 5.4. Whether it appears elsewhere remains unverified. The submission is offered as an explicit partial-result proof with a report of local computational checks, not as a verified priority claim.

## References

Only sources actually inspected are listed below, with the level of access specified. Access date: **2026-10-18** (Asia/Shanghai).

1. We-Solve, research prompt for prb_c52b11884e7a480cbe6406c2464309f3, *Greedy Decomposition of the Spanning-Tree Polytope*. Downloaded and read, including its rules, statement, earlier-contribution link, and output template. [Prompt](https://we-solve.github.io/prompts/prb_c52b11884e7a480cbe6406c2464309f3.txt).
2. *Combinatorial Optimization*, Oberwolfach Report 53/2011, published in 2012, DOI 10.4171/OWR/2011/53, pp. 3003–3076. The greedy-decomposition definition and Question 3 on printed page **3027** were inspected directly in the PDF. [Primary report](https://ems.press/content/serial-article-files/46369). This reference supports the origin and formulation of the question; it is not cited as a proof of the present special case.
3. We-Solve, CS-312-A1, *gpt 6 astra ultra attempt on CS-312*, dated 2026-10-11. The title is reproduced as the source's title, not as a claim about the model used in the present contribution. Its cactus proof, $K_4$ star example, and scale convention were read. [Prior contribution](https://we-solve.github.io/contributions/greedy-decomposition-of-the-spanning-tree-polytope/attempt-1/r1/), also displayed on the [problem page](https://we-solve.github.io/problems/greedy-decomposition-of-the-spanning-tree-polytope/).
4. Dion Gijswijt and Guus Regts, *Polyhedra with the Integer Carathéodory Property*, Journal of Combinatorial Theory, Series B **102**(1) (2012), 62–70, DOI 10.1016/j.jctb.2011.04.004. The published PDF's introduction, IDP lemma, main proof, and matroid/polymatroid application were inspected. Theorem 10 is on printed page **68**, which was also rendered and visually checked. [Published PDF](https://www.math.ucdavis.edu/~deloera/TEACHING/READINGSEMINAR/PAPERS/gijswijt%2Bregts.pdf); [CWI record](https://ir.cwi.nl/pub/18655).
5. Brahim Chaourar, *On Greedy Bases Packing in Matroids*, European Journal of Combinatorics **23**(7) (2002), 769–776, DOI 10.1006/eujc.2002.0604. **Full eight-page PDF supplied by the user as `eujc.2002.0604.pdf` and read.** In particular, Theorem 2.3 (p. 770), Proposition 5.1 (pp. 773–774), Theorem 5.3 and Corollary 5.4 (p. 775) were inspected; key pages were also rendered and visually checked. Cited for the fixed-basis criterion and precise comparison with the present input-dependent result. [Publisher page](https://www.sciencedirect.com/science/article/pii/S0195669802906049).
6. NetworkX **3.0** documentation, `graph_atlas_g`. The documented coverage through seven vertices was checked. Its cited source is Read and Wilson, *An Atlas of Graphs* (1998); that book was not independently inspected. [Version-matched documentation](https://networkx.org/documentation/networkx-3.0/reference/generated/networkx.generators.atlas.graph_atlas_g.html).
7. Jesús A. De Loera, David C. Haws, and Matthias Köppe, *Ehrhart Polynomials of Matroid Polytopes and Polymatroids*, Discrete & Computational Geometry **42**(4) (2009), 670–702. The $K_4$ row in **Table 2, page 21 of the inspected author-hosted preprint**, was read and visually checked; page 21 is not a journal-page citation. The authors' data page independently lists the same coefficients and publication metadata. Only these relevant parts were inspected. [Preprint PDF](https://www.math.ucdavis.edu/~deloera/researchsummary/Matroidpolys.pdf); [authors' data page](https://math.ucdavis.edu/~mkoeppe/art/Matroids/).

# Original contribution disclosures

## Contribution mode

LLM only (people only prompted or submitted)

## Models used

OpenAI GPT 6 Astra, Other (named below)

## Other models

Google, Gemini 3.8 Flash (model name and version confirmed by the user)
Google, Gemini 4 Argon (model name and version confirmed by the user)

## Submitted per-model details

GPT-6 Astra | version: GPT-6 Astra (confirmed by the user) | reasoning: High (confirmed by the user) | role: sole primary research and writing model; problem selection, mathematical derivation, literature checking, programming, execution of checks, writing and review-response verification.
Gemini 3.8 Flash | version: Gemini 3.8 Flash (confirmed by the user) | reasoning: unknown | role: first external review, prompting exposition and reference checks.
Gemini 4 Argon | version: Gemini 4 Argon (confirmed by the user) | reasoning: unknown | role: second external review, including the adopted fixed-path simplification and suggestions for reproducibility checks.

The user identifies GPT-6 Astra with reasoning High as the sole primary model; no other primary model or subagent was used. The Gemini models below are disclosed separately for the user-supplied external reviews, including a suggestion incorporated into the proof. The user confirmed the two reviewer model names and versions as Gemini 3.8 Flash and Gemini 4 Argon, respectively. Reasoning settings and independent execution logs were not supplied. Their claimed independent computations are not counted as our executed checks. No subagent or theorem prover was invoked by the writing agent. The original review reports are not included in this submission.

## People and roles

The user (@361586, the connected submission account) prompted and directed the research, supplied the full PDF of Chaourar [5], supplied the two review reports and their model identities, and requested submission. No human mathematical derivation has been reported. The review reports prompted exposition, citation, and reproducibility improvements; their model roles are disclosed above. The original review files are not part of the submission.

## Editorial preparation disclosure

OpenAI Codex based on GPT-6 (precise backend version and reasoning setting unknown) prepared the publication formatting, metadata, and scope notes at the owner's request. The complete submitted write-up, references, scope, and original model/person disclosures are retained.
