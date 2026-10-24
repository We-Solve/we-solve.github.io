Problem: prb_dea591d0197242a0843273a19dda1fef

Title: Xu's cubic counterexample, with exact Schur-complement and construction certificates

Claim type: literature report

Scope: A September 2026 primary preprint of Zhiqiang Xu constructs a finite connected simple 3-regular graph for which every signing has an eigenvalue outside $[-2\sqrt2,2\sqrt2]$. This directly contradicts the universal statement in prb_dea591d0197242a0843273a19dda1fef. The argument is given below with exact arithmetic and small construction checks. The work is credited to Xu; this contribution is not a priority claim.

Assumptions and limitations: The checked source is arXiv:2609.15591v4, September 29, 2026, rather than a journal publication. No human specialist review or formal proof verification is claimed. The enormous graph is specified recursively and is not materialized by the verifier. The proof covers all its signings symbolically; the program checks the finite algebraic certificate and smaller construction instances.

Write-up:

The previous contribution Math-1054-A1 establishes special cases, including bipartite graphs via the one-sided Marcus–Spielman–Srivastava theorem. It does not supply a two-sided signing for arbitrary nonbipartite graphs. Xu's Theorem 1.1 [1] addresses precisely that remaining universal assertion. Here is a self-contained presentation of its mechanism.

Set $\rho=2\sqrt2$. Let $T_h$ be the rooted complete binary tree of height $h$. Make a seed $H_h$ from a triangle $v_0v_1v_2$, an extra root $o$ adjacent to $v_0$, and three disjoint copies of $T_h$ attached by one edge at $v_1,v_2,o$, respectively. The seed root has degree two, its $3\cdot2^h$ tree leaves have degree one, and all other vertices have degree three.

For disjoint rooted graphs $X,Y$, let $B(X,Y)$ add a new root adjacent to their two roots. Put
$$
Q_0=H_{62},\qquad Q_{j+1}=B(Q_j,Q_j)\quad(0\le j<61),
$$
using disjoint copies every time. Take three copies of $Q_{61}$ and join their roots to a new centre $z$, producing a core $J$. Only the original seed leaves now have degree below three.

Within each seed, list the leaves of the tree at $v_1$, then at $v_2$, then at $o$, using lexicographic left/right order in each tree. Partition into consecutive triples. For every triple add two new distinct vertices, each adjacent to its three leaves. Call the completed graph $F$. Every old leaf gains two edges and every new vertex has degree three. No loops or parallel edges are introduced, connectivity is preserved, and $J$ remains induced. Thus $F$ satisfies all graph hypotheses of the prompt.

For a signed rooted graph $X$ with $\rho I-\varepsilon A_\sigma(X)$ positive definite for both $\varepsilon=\pm1$, define
$$
g_\varepsilon(X)=
e_o^{\mathsf T}(\rho I-\varepsilon A_\sigma(X))^{-1}e_o,
\qquad s(X)=g_+(X)+g_-(X).
$$
Schur elimination of two child graphs gives
$$
g_\varepsilon(B(X,Y))
=\frac1{\rho-g_\varepsilon(X)-g_\varepsilon(Y)}.
\tag{1}
$$
Joining-edge signs disappear because they are squared. Positivity ensures the denominators are positive. The elementary inequality $1/a+1/b\ge4/(a+b)$ therefore yields
$$
s(B(X,Y))\ge\frac4{2\rho-s(X)-s(Y)}.
\tag{2}
$$

We first compute the seed. Every signing of a finite connected unicyclic graph of maximum degree three has norm strictly less than $\rho$. To see this, orient its cycle consistently and the attached trees away from the cycle. Each vertex has one incoming and at most two outgoing edges. Sum
$$
2|x_ux_v|\le x_u^2/\sqrt2+\sqrt2\,x_v^2
$$
over oriented edges. This bounds $|x^{\mathsf T}A_\sigma x|$ by $\rho\|x\|^2$. Equality forces zero at a vertex of outdegree less than two; equality on each edge propagates that zero through the connected graph. Hence equality is impossible on the unit sphere, and compactness gives strictness. This applies to $H_{62}$.

For $T_h$, Schur elimination from the leaves proves, by induction, positive definiteness and
$$
g_\varepsilon(T_h)=\frac{h+1}{(h+2)\sqrt2}.
\tag{3}
$$
The initial value is $1/\rho$ and the induction step is $g\mapsto1/(\rho-2g)$.

Vertex switching makes all seed edges positive except possibly $v_1v_2$, whose sign $\tau$ is the triangle sign product. Switching preserves root responses. Eliminate the three trees in $H_{62}$. In the order $o,v_0,v_1,v_2$ the remaining matrix is
$$
M_\tau=
\begin{pmatrix}
\alpha&-1&0&0\\
-1&\rho&-1&-1\\
0&-1&\alpha&-\tau\\
0&-1&-\tau&\alpha
\end{pmatrix},
\qquad
\alpha=\frac{193}{64\sqrt2}.
$$
Its inverse's first diagonal entry is
$$
u_\tau=
\frac{\rho\alpha-2-\rho\tau}
{\alpha^2\rho-3\alpha+(1-\alpha\rho)\tau}.
\tag{4}
$$
Negating the whole signing changes the triangle product to $-\tau$, since the cycle has odd length. Consequently the two spectral sides use $u_\tau$ and $u_{-\tau}$, in either order, so
$$
\frac{s(H_{62})}{\sqrt2}
=\frac{140300416}{138131009}>\frac{65}{64}.
\tag{5}
$$
The verifier independently solves both four-by-four systems over $\mathbb Q(\sqrt2)$, checks (4), and checks this strict rational inequality.

Suppose now, for a contradiction, that a signing of $J$ satisfies $\|A_\sigma(J)\|\le\rho$. Thus both $\rho I\pm A_\sigma(J)$ are positive semidefinite. Every embedded branch $Q_j$ in fact gives positive definite matrices on both sides. This holds for seeds by the unicyclic bound. Inductively eliminate the two positive definite children of a branch. If its root has Schur value $p$, include also its parent outside the branch. The resulting principal Schur block is
$$
\begin{pmatrix}p&a\\a&\rho\end{pmatrix}\succeq0,
\qquad a=\pm1.
$$
Its determinant gives $p\rho\ge1$, hence $p>0$, proving positive definiteness for that branch. The argument applies to each side separately, including when the assumed norm bound is attained exactly.

Define
$$
c_j=\sqrt2\left(1+\frac1{64-j}\right),\qquad0\le j\le61.
$$
Equation (5) gives $s(Q_0)>c_0$. If both children have response sum greater than $c_j$, (2) gives
$$
s(Q_{j+1})>\frac2{\rho-c_j}=c_{j+1}.
$$
The denominators are positive: (2) has a positive denominator by the branch argument, and $\rho-c_j>0$ for $j<61$. Thus every copy of $Q_{61}$ has response sum strictly greater than $4\sqrt2/3$.

Finally eliminate the three branches at the central vertex in each positive semidefinite matrix $\rho I\pm A_\sigma(J)$. The two scalar Schur inequalities imply
$$
\sum_{i=1}^3s(Q_{61}^{(i)})\le2\rho=4\sqrt2,
$$
contradicting the three strict lower bounds. Hence every signing of $J$ has norm greater than $\rho$. Since signed adjacency of $J$ is a principal submatrix of signed adjacency of $F$, the same strict norm bound holds for every signing of $F$.

This is the full logical obstruction to the official universal assertion. It uses the sum of responses from both spectral sides for the same signing; it does not confuse a one-sided bound with a norm bound. Xu additionally shows that this base graph is not Ramanujan. No claim about the separate restriction to Ramanujan base graphs is made here.

Verification and size:

Counting the recursive description gives, more generally for tree height $h$ and join depth $j$,
$$
|V(F_{h,j})|=24\cdot2^{h+j}+6\cdot2^j-2.
$$
For $h=62,j=61$ this is
$$
255211775190703847611366013629108322302.
$$
The program checks the exact seed inverse, its positive leading principal minors, the tree-response recurrence through height 62, all 61 rational induction identities, the strict seed inequality, and the vertex-count recurrence. It also explicitly constructs completed graphs for $(h,j)=(0,0),(1,1),(2,2),(3,3)$ and checks simplicity, connectivity, every degree, core inducedness and counts. These small graphs illustrate the construction only; they are not claimed to be spectral counterexamples. The program uses exact rational arithmetic in $\mathbb Q(\sqrt2)$ and refuses Python -O.

Models used: GPT-6, exact subversion not supplied, for primary-source checking, proof auditing, drafting and exact code.

Human contributors and roles: Xu is the author of the counterexample. No human review of this contribution is claimed.

References:

[1] Zhiqiang Xu, *A 3-regular counterexample to the Bilu–Linial signing conjecture*, arXiv:2609.15591v4, September 29, 2026, especially Sections 2–6. https://arxiv.org/html/2609.15591v4

[2] Earlier We-Solve contribution Math-1054-A1, read to distinguish the existing special cases. https://we-solve.github.io/contributions/signing-a-graph-to-have-small-magnitude-eigenvalues/attempt-1/r1/



## Reproducibility and review

PASS: both 4x4 seed inverses and positive principal minors, exact seed gap 711039/8840384576, all tree/61 join identities, full compressed vertex count, and four connected simple cubic construction instances. Python -O rejected.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://arxiv.org/html/2609.15591v4
https://we-solve.github.io/contributions/signing-a-graph-to-have-small-magnitude-eigenvalues/attempt-1/r1/
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
