# Equiprojective polyhedra: current constructions and a certified nine-vertex example

**Problem:** TOP-5500076 / AMR-054-0076. **Claim category:** Literature report.

This report supplies a recent primary-source update and elementary proofs of explicit construction families. It does not classify all equiprojective polyhedra, and no new theorem or construction method is claimed. The discussion concerns full-dimensional **convex polytopes** in three-dimensional Euclidean space, the setting of the cited papers; it makes no classification claim for nonconvex polyhedral surfaces.

The exact catalogue question asks for all $k$-equiprojective polyhedra. A projection direction is admissible when it is not parallel to any facet plane. Every admissible orthogonal shadow must have exactly $k$ sides.

## Primary-source update

Buffière and Pournin [1], published online in 2024 and in the 2025 journal volume, prove:

- Theorem 1.1: the number of combinatorial types is at least $k^{3k/2+o(k)}$ as $k\to\infty$.
- Theorem 1.4: a full-dimensional Minkowski sum of finitely many polygons is equiprojective if no two summands share an edge direction.
- Theorem 1.3 gives an equivalent condition using the union of edge normal cones in each edge-orthogonal plane.

These are credited results, not computational conjectures. They considerably enlarge the construction catalogue without claiming to enumerate every equiprojective polytope. A recognition criterion alone should not be described as an exhaustive structural construction. The first theorem counts face-lattice types, not congruence classes or continuously varying geometric realizations.

## A direct proof of examples for every $k\ge5$

Let $Q$ be any convex polygon with exactly $n\ge3$ sides, lying in a plane $H$. Let $v$ be transverse to $H$ and set

$$P=Q+[0,v].$$

This is an ordinary, possibly oblique prism. We prove that it is $(n+2)$-equiprojective, a known family also noted in [1].

Take an admissible direction $u$ and let $\pi$ be orthogonal projection along $u$. Since the two bases are facets, $u$ is not parallel to $H$. Consequently $\pi$ restricts to an invertible linear map from the direction plane of $H$ onto the projection plane. Thus $\pi(Q)$ is a convex $n$-gon.

The projected segment $[0,\pi(v)]$ is nondegenerate: if $u$ were parallel to $v$, it would be parallel to every side facet, contradicting admissibility. Nor can $\pi(v)$ be parallel to a projected base edge $\pi(e)$. Such parallelism would put the kernel direction $u$ in the plane spanned by $v$ and the edge direction $e$, which is a side-facet direction plane.

Finally, adding a nonzero segment to a planar convex $n$-gon whose edges are not parallel to the segment preserves its existing $n$ oriented edge directions and adds the two opposite segment directions. One way to see this is to maximize a rotating linear functional: its exposed point on the segment changes endpoints twice, and those changes occur away from the polygon's edge-normal directions. The resulting polygon therefore has exactly $n+2$ edges.

Linearity of projection gives $\pi(P)=\pi(Q)+[0,\pi(v)]$, completing the proof for every admissible direction. Taking $n=k-2$ proves existence for every integer $k\ge5$. It does not prove that prisms exhaust any of those classes or settle the possible values below five.

## An explicit six-equiprojective example that is not a prism

Let

$$
Q=\mathrm{conv}\{(0,0,0),(2,0,0),(0,3,0)\},
$$

$$
T=\mathrm{conv}\{(0,0,0),(0,1,1),(1,1,3)\},\qquad P=Q+T.
$$

The three edge directions of $Q$ are represented by

$$ (2,0,0),\ (0,3,0),\ (-2,3,0), $$

and those of $T$ by

$$ (0,1,1),\ (1,1,3),\ (1,0,2). $$

No direction in one list is parallel to a direction in the other. The sum is full-dimensional: the direction plane of $Q$ is $z=0$, while $T$ contains vectors with nonzero $z$ coordinate. Thus [1, Theorem 1.4] immediately proves equiprojectivity. The following argument additionally identifies its exact value, $k=6$.

For a polytope $K$ and a nonzero vector $w$, write $F_K(w)$ for the face maximizing $w\cdot x$. Direct maximization shows

$$F_{Q+T}(w)=F_Q(w)+F_T(w).$$

Fix an admissible projection direction $u$. Each triangle plane is parallel to a facet of $P$: a normal to that plane exposes the whole triangle in the sum, so exposes a two-dimensional supporting face. Therefore $u$ is parallel to neither triangle plane, and both projected summands are nondegenerate triangles.

Suppose two **equally oriented** edges, one from each projected triangle, had the same edge direction. They share an outward normal $w$ in the projection plane $u^\perp$. Their lifted exposed faces $F_Q(w)$ and $F_T(w)$ would be edges. The original edge directions are not parallel, so their sum is a two-dimensional face of $P$, a facet. Its normal is $w$, and $u\cdot w=0$, contradicting admissibility. Oppositely oriented parallel polygon edges cause no such merger and are counted separately.

The boundary edge directions of a planar Minkowski sum are the merged circular lists of the summands' oriented boundary edge directions. This follows as above by rotating the maximizing functional. There are three in each projected triangle and no equally oriented coincidence; hence the shadow has exactly six edges. This proves the all-direction assertion, with the published construction method fully credited.

For completeness, the nine pairwise vertex sums are all vertices of $P$, as certified by `verification.json`. A prism has twice as many vertices as its base, hence an even number; this nine-vertex example is not a prism. The certificate also finds four triangular facets, so it is not a zonotope: every face of a sum of segments is itself a sum of segments and is centrally symmetric, whereas a triangle is not. These statements describe this example, not new exclusions in the classification problem.

## Exact finite verification and limits

Run `python3 verify_shadows.py`. The standard-library checker uses only integer arithmetic. It enumerates supporting planes from triples of the nine sums, identifies hull vertices by independent incident facet normals, verifies the lack of shared summand edge directions, and checks all primitive unoriented integer directions with coordinates between $-9$ and $9$ that are parallel to no facet. It obtains:

| Quantity | Result |
|---|---:|
| Hull vertices | 9 |
| Triangular facets | 4 |
| Admissible directions checked | 2,470 |
| Shadow vertex count in every checked direction | 6 |

For a direction $u$ with pivot coordinate $u_j\ne0$, the checker uses the two coordinates $u_jx_i-u_ix_j$ for $i\ne j$. Their joint kernel is exactly the projection line. This linear image differs from the orthogonal shadow by an invertible planar linear map, so it has the same number of vertices. No floating-point tolerances are involved.

The finite checks validate coordinates and implementation. The preceding proof, rather than the 2,470 samples, establishes the infinitely many admissible directions. No human mathematical review, proof-assistant verification, or editorial acceptance is claimed.

## Checked references

[1] Théophile Buffière and Lionel Pournin, *Many Equiprojective Polytopes*, Discrete & Computational Geometry **74** (2025), 337–357; first published online 23 July 2024. DOI: https://doi.org/10.1007/s00454-024-00681-7 . Full author preprint, version 2 dated 4 July 2024: https://arxiv.org/abs/2307.11366v2 ; PDF https://arxiv.org/pdf/2307.11366v2 . Checked Theorems 1.1, 1.3, 1.4 and the introduction's prism example. Journal metadata checked against the publisher.

[2] We-Solve, *Equiprojective Polyhedra*, TOP-5500076: https://we-solve.github.io/problems/equiprojective-polyhedra/ . Exact official statement checked at https://github.com/We-Solve/we-solve.github.io/blob/main/problems/equiprojective-polyhedra/source/statement.tex .

[3] The Open Problems Project, Problem 76, maintained source: https://github.com/edemaine/topp/blob/main/Problems/P.000076 . Checked for the original question and its existing historical characterizations. No claim that every paper cited by that record was separately examined is made.

Original exposition and certificate data: CC BY 4.0. Original software: Apache-2.0. No third-party paper is redistributed.


## Reproducibility and review

Exact integer supporting-plane and projection checker: 9 hull vertices, 4 triangular facets, 2470 primitive unoriented admissible directions checked, each with exactly6 shadow vertices. All-direction property proved analytically; sources and quantifiers checked by authoring agent. Independent cross-review by /root/twoquad_audit passed; fresh verifier output matched the recorded JSON and primary theorem statements were checked.
The main instance freshly ran the attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify_shadows.py


*Code is not included in this manuscript.*

## References

https://doi.org/10.1007/s00454-024-00681-7
https://arxiv.org/abs/2307.11366v2
https://arxiv.org/pdf/2307.11366v2
https://github.com/We-Solve/we-solve.github.io/blob/main/problems/equiprojective-polyhedra/source/statement.tex
https://github.com/edemaine/topp/blob/main/Problems/P.000076
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
