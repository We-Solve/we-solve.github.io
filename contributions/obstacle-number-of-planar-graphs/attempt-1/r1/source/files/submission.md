Problem: TOP-3119

Title: Planar graphs can need two obstacles; ordinary and plane obstacle numbers differ

Claim type: Literature report

Scope: The first question is answered affirmatively by established examples: the icosahedral graph has ordinary obstacle number two. This report reconciles the source's obstacle conventions with the prompt's bounded closed filled polygons, gives an exact combinatorial certificate for the named planar graph, and distinguishes the separate constant-bound question. No universal constant bound or unboundedness result for ordinary planar obstacle number is claimed.

Berman, Chappell, Faudree, Gimbel, Hartman and Williams [1], Proposition 5.3(2), prove $\mathrm{obs}(I)=2$ for the icosahedral graph $I$. Their Corollary 4.3 also supplies a planar graph with obstacle number greater than one by another construction. Thus the prompt's first existence question has a positive answer; planarity of the abstract graph does not force a crossing-free obstacle representation.

The primary proof is partly computer assisted. Its lower bound is obtained by generating necessary orientation and separation clauses for a one-obstacle representation and proving their SAT instance unsatisfiable with SAT solvers. Its upper bound comes from displayed two-obstacle representations. This report does not claim to have rerun those source SAT computations, reconstructed their unsatisfiability proof, or certified coordinates from a figure. The source result, not the auxiliary graph checker below, supplies the obstacle-number assertion.

There is a genuine convention check. The prompt asks for closed filled simple polygon obstacles with arbitrarily many sides. The source allows connected regions and often expands them to open face components, one possibly unbounded. A lower bound in the latter, more permissive model immediately applies to closed polygon obstacles. The upper bound can also be transferred in this finite setting as follows.

For each obstacle, choose one blocked point on each nonedge that it is responsible for. Those finitely many points lie in one connected component of the complement of all protected graph segments and vertex points. This component is open and path connected. Join the witness points by finitely many polygonal paths inside that component, subdivide intersections, and take a finite embedded spanning tree of the resulting network. The tree is compact and has positive distance from the finite protected drawing. A sufficiently thin polygonal regular neighborhood of an embedded tree is a closed filled simple polygon: successively adding a leaf edge attaches a narrow strip and cap without introducing a hole. Choose the thickness smaller than the clearance to the protected drawing. The polygon contains all chosen witnesses and blocks no graph edge or vertex.

This replaces each relevant open or unbounded obstacle by one bounded closed filled simple polygon. Obstacles with no assigned witnesses can be discarded. Thus the two-obstacle upper bound used here satisfies the precise official convention; no unbounded exterior region is smuggled in as an allowed polygon. Only finiteness and connectivity within a complementary face are used.

The icosahedral graph can be specified without geometric coordinates. Let its vertices be $N,S,a_i,b_i$ for $i\in\mathbb Z/5\mathbb Z$, and use edges
$$
Na_i,\quad Sb_i,\quad a_ia_{i+1},\quad b_ib_{i+1},
\quad a_ib_i,\quad a_ib_{i-1}.
$$
It has 12 vertices and 30 edges. A sphere embedding has the 20 oriented triangular faces
$$
(N,a_{i+1},a_i),\quad(S,b_i,b_{i+1}),\quad
(a_i,a_{i+1},b_i),\quad(a_i,b_i,b_{i-1}).
$$
Every oriented edge occurs once, its reverse once, and every vertex link is a single cycle. This is a connected orientable closed triangulated surface with Euler characteristic $12-30+20=2$, hence a sphere. Removing the interior of one face gives a plane embedding. It identifies the same gyroelongated pentagonal bipyramid $X_5=I$ used in [1]. The verifier checks all these incidences, the rotations, and connectivity after deletion of up to two vertices.

The constant-bound question must remain separate. A single graph of obstacle number two does not show ordinary planar obstacle numbers are unbounded. Conversely, the “planar obstacle number” $\mathrm{pobs}$ in Gimbel, Ossona de Mendez and Valtr [2] requires the visible edge drawing itself to be crossing free; their linear extremal result for that parameter is not an ordinary-obstacle lower bound. Their Theorem 4 gives ordinary obstacle number at most one for bipartite planar graphs. For example the family $K_{2,r}$, $r\ge3$, is bipartite and planar, so its ordinary obstacle number is one, while the same paper's face argument gives $\mathrm{pobs}(K_{2,r})=r-1$. The distinction can therefore be arbitrarily large. The first paper's constant-bound conjecture and the second question in the prompt are not resolved by this report.

Verification: The exact standard-library program constructs the gyroelongated $r$-bipyramid graphs for $r=3,\ldots,12$, checks the complete directed-face incidence and vertex rotations, Euler characteristic two, graph connectivity, and connectivity after every deletion of at most two vertices. It records the full edge/face certificate for $r=5$. These are certificates of graph identity and planarity, not new SAT certificates of obstacle lower bounds. Python -O is refused.

References checked:

[1] Leah Wrenn Berman, Glenn G. Chappell, Jill R. Faudree, John Gimbel, Chris Hartman and Gordon I. Williams, *Graphs with Obstacle Number Greater than One*, arXiv:1606.03782v2, Proposition 5.3; Journal of Graph Algorithms and Applications 21(6) (2017), 1107–1119, DOI 10.7155/jgaa.00452. https://arxiv.org/pdf/1606.03782

[2] John Gimbel, Patrice Ossona de Mendez and Pavel Valtr, *Obstacle Numbers of Planar Graphs*, arXiv:1706.06992, Theorems 1 and 4 and the distinction in Section 2. https://arxiv.org/pdf/1706.06992


Models used: OpenAI Codex GPT-6, exact serving revision and settings unknown, for source inspection, mathematical work, drafting and code. No independent human mathematical review or formal proof verification is claimed. Established results are credited; no originality claim is made.



## Reproducibility and review

10 gyroelongated bipyramid sphere embeddings, with full I=X5 certificate, oriented faces/rotations, Euler characteristic and all deletions of at most two vertices. Python -O explicitly rejected.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://arxiv.org/pdf/1606.03782
https://arxiv.org/pdf/1706.06992
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
