# Hamiltonian tetrahedralizations of every three-dimensional cyclic polytope

**Problem:** TOP-5500029 / CS-96. **Claim type:** Partial result.

For every $n\ge4$ and every strictly increasing sequence $t_0<\cdots<t_{n-1}$, put $v_i=(t_i,t_i^2,t_i^3)$ and $P=\mathrm{conv}\{v_0,\ldots,v_{n-1}\}$. There is a vertex-preserving tetrahedralization with precisely $n-3$ tetrahedra whose dual graph is a path. The same construction works in every convex realization of the facet structure described below. This is an elementary restricted-family result, with no originality claim; it does not prove existence for arbitrary convex polytopes.

## 1. Facets from an explicit polynomial

For any four increasing indices $a<b<c<d$,

$$\det\begin{pmatrix}1&t_a&t_a^2&t_a^3\\1&t_b&t_b^2&t_b^3\\1&t_c&t_c^2&t_c^3\\1&t_d&t_d^2&t_d^3\end{pmatrix}
=\prod_{i<j\atop i,j\in\{a,b,c,d\}}(t_j-t_i)>0.$$

The determinant identity follows by observing that the alternating polynomial vanishes whenever two parameters coincide and has the same degree and leading coefficient as the displayed product. Thus no four vertices are coplanar, and the hull is three-dimensional.

A plane through $v_a,v_b,v_c$ can be written so that its value on the moment curve is

$$p(t)=(t-t_a)(t-t_b)(t-t_c).$$

Its sign on the four successive parameter intervals is $-,+,-,+$. All remaining vertices are strictly on one side precisely in either of these cases:

- $a=0$ and $c=b+1$;
- $b=a+1$ and $c=n-1$.

Indeed, in the positive-side case no point can occur before $a$ or strictly between $b,c$; in the negative-side case no point can occur strictly between $a,b$ or after $c$. These conditions are also sufficient. Since every facet is a triangle, the complete facet list is

$$A_i=\{v_0,v_i,v_{i+1}\}\quad(1\le i\le n-2),$$

$$B_i=\{v_i,v_{i+1},v_{n-1}\}\quad(0\le i\le n-3).$$

Every input point belongs to facets in this list, so all are actual polytope vertices. There are $2n-4$ facets.

## 2. The tetrahedra and a geometric covering proof

Set

$$T_i=\mathrm{conv}\{v_0,v_i,v_{i+1},v_{n-1}\},\qquad 1\le i\le n-3.$$

These are the cones from $v_0$ over exactly the facets not containing $v_0$, namely $B_1,\ldots,B_{n-3}$. They form a tetrahedralization. Here is the covering argument, rather than an inference from a graph drawing.

Take a ray starting at $v_0$ through an interior point of $P$. Convexity makes its intersection with $P$ a segment, ending in a facet not incident with $v_0$; except for rays through lower-dimensional boundary faces, that terminal facet is unique. Consequently the interiors of the cones over these facets are disjoint and cover the interior of $P$. Taking closures covers its boundary as well. Intersections of two cones are exactly the cones over intersections of their base facets, hence are faces of both tetrahedra. No tetrahedron is degenerate by the determinant calculation. All vertices of $P$ occur, and no new vertex is introduced.

More explicitly, adjacent tetrahedra $T_i,T_{i+1}$ share the triangle $\{v_0,v_{i+1},v_{n-1}\}$. Nonadjacent tetrahedra share only the edge $\{v_0,v_{n-1}\}$. Thus

$$G_{\mathcal T}=T_1-T_2-\cdots-T_{n-3}$$

is a path, and its displayed order is Hamiltonian. When $n=4$ there is one tetrahedron; the one-vertex dual has a Hamiltonian path of length zero.

The proof after the facet list uses only convexity and those incidences, so it applies to any convex realization with that same labeled facet list, not just to the chosen moment-curve coordinates.

## 3. The tetrahedron count is minimum in this family

In fact $n-3$ is the minimum possible number of tetrahedra for a tetrahedralization of any simplicial convex three-polytope with $n$ vertices and no added vertices. To see this, let $E_{\mathrm{int}}$ be the number of non-boundary edges, $F_{\mathrm{int}}$ the number of interior triangles, and $N$ the number of tetrahedra. Boundary Euler and incidence counting give $E_\partial=3n-6$ and $F_\partial=2n-4$. Also

$$4N=2F_{\mathrm{int}}+F_\partial,$$

$$n-(E_\partial+E_{\mathrm{int}})+(F_\partial+F_{\mathrm{int}})-N=1.$$

Eliminating $F_{\mathrm{int}}$ yields $N=n-3+E_{\mathrm{int}}\ge n-3$. Our construction attains equality. This minimum-count assertion is restricted to the stated vertex-preserving simplicial setting; it is not an optimization theorem for the original general existence question.

## 4. Exact certificates

Run `python3 verify.py`. For integer parameters $t_i=i$ and every $n=4,\ldots,30$, the checker independently enumerates all supporting planes through triples, verifies the Vandermonde determinant for every quadruple, compares all boundary triangles of the proposed tetrahedra with the hull's facet list, checks all face-sharing adjacencies, and checks that every input vertex is used. All 27 instances passed, each with exactly $n-3$ tetrahedra and a path dual.

The finite run checks the explicit certificates. The proof above establishes all increasing real parameter choices and every $n\ge4$, rather than extrapolating from those tests. No floating-point geometry is used.

## 5. Relation to prior work and remaining question

The official earlier contribution CS-96-A1 was read. It constructs a particular shellable stacking triangulation with dual $K_{1,3}$, correctly showing that shellability alone does not imply a Hamiltonian dual. This report does not reuse that obstruction as a negative answer. Instead it supplies a positive construction for an explicit infinite family. Neither contribution settles whether **some** suitable tetrahedralization exists for every convex polytope.

The maintained original source [1] also distinguishes non-Hamiltonian pulling triangulations from failure of the existential question. Our construction is a pulling triangulation that works for this facet structure. No assertion that every pulling triangulation, every shelling, or every three-dimensional point set is Hamiltonian is made.

No new general theorem, human mathematical review, formal proof-assistant verification, or editorial acceptance is claimed.

## Checked references

[1] The Open Problems Project, Problem 29, *Hamiltonian Tetrahedralizations*: https://github.com/edemaine/topp/blob/main/Problems/P.000029 . Read the statement and complete related-results section.

[2] Official We-Solve prompt: https://we-solve.github.io/prompts/TOP-5500029.txt ; local checked transcription `official_prompt.txt`. It requires existing polytope vertices only and asks for a Hamiltonian path in the tetrahedra's dual.

[3] We-Solve CS-96-A1, revision 1, *gpt 6 astra ultra attempt on CS-96*: https://we-solve.github.io/contributions/hamiltonian-tetrahedralizations/attempt-1/r1/ . Read its complete manuscript through the official GitHub repository. It is labeled an unverified exploration; no use as an external theorem is made.

Original exposition and exact data: CC BY 4.0. Original code: Apache-2.0. Mathematical priority is not claimed for this standard cyclic-polytope construction.

Prepared by OpenAI Codex (GPT-6; exact serving revision and reasoning settings unknown), authoring instance /root/rectangle_audit, for source research, mathematical exposition and exact verification. Gaven prompted the work and authorized submission. No human mathematical review is claimed.


## Reproducibility and review

Exact integer facet, Vandermonde, boundary, and dual-path checks for n=4 through 30 passed; the all-parameter result is proved analytically. Independent review passed and is recorded in independent_audit.md.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://github.com/edemaine/topp/blob/main/Problems/P.000029
https://we-solve.github.io/prompts/TOP-5500029.txt
https://we-solve.github.io/contributions/hamiltonian-tetrahedralizations/attempt-1/r1/
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
