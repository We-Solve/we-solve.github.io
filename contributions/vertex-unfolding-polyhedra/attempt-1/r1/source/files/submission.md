# Beyond triangular faces: a correctly scoped tight-polyhedron result

**Problem:** prb_a5be890bc56a404b9ba7c668a5e9e17a, Vertex-Unfolding Polyhedra.  
**Claim type:** Literature report.

**Exact scope.** The established triangular-face theorem applies when the prescribed faces already are triangles. A later result also covers convex polyhedra whose nontriangular faces are pairwise vertex-disjoint, preserving those faces intact. We identify the precise later version and explain the geometric strip lemma behind this extension. Neither result settles arbitrary prescribed polygonal faces; triangulating such faces changes the problem.

## 1. The two source results

Demaine, Eppstein, Erickson, Hart and O'Rourke [2] give a linear-time vertex unfolding for a connected triangulated 2-manifold. This includes the original question's closed triangular-faced surfaces, without requiring convexity. The planar layout can have connections only at vertices; it need not have connected interior.

Endo and Suzuki [3], Theorem 1.2 of arXiv:1109.0001v3 (18 February 2013), extend this to tight polyhedra. Their definition requires that **no two nontriangular faces share a vertex**. In particular it covers convex polyhedra satisfying that condition. The v3 definition does not require these faces to be parallelograms. A search excerpt from an earlier version gives a narrower parallelogram condition and should not be substituted for the actual v3 theorem. We restrict the application here to convex polyhedra; no extension of the paper's planar-graph argument to arbitrary surface topology is asserted.

Examples in the intact-face scope include convex pyramids, whose only possible nontriangular face is the base, and convex antiprisms, whose two nontriangular bases have disjoint vertex sets. This is a genuine polygonal-face extension of the triangular case.

## 2. A self-contained geometric strip lemma

Let $F$ be any filled simple planar polygon with positive area, and let $u,v$ be a pair of its vertices with maximum Euclidean separation $D$. Put $u=(0,0)$ and $v=(D,0)$ by a rigid motion. Every other vertex $z=(x,y)$ satisfies $|z-u|\le D$ and $|z-v|\le D$. If $x<0$, the latter distance exceeds $D$; if $x>D$, the former does. Thus every vertex lies in $0\le x\le D$, and so does $F$, which is contained in its vertices' convex hull. The two chosen vertices lie on opposite boundaries of this strip. Every interior point has $0<x<D$.

For a triangle, **any prescribed pair** of distinct vertices can serve as strip-entry and strip-exit vertices. If the third vertex is $z$, choose a projection direction perpendicular to $z-u$, with sign chosen so that the projection of $v-u$ is positive. Then $u$ and $z$ are on the left boundary and $v$ on the right. Noncollinearity ensures the strip width is positive, and the triangle's interior is in its open strip.

Now suppose a combinatorially valid face chain visits each face once, with distinct entry and exit vertices on each internal face. On each nontriangle, suppose that pair was chosen as a maximum-distance pair; triangle pairs may be arbitrary. Place the first face in its strip. Translate and rotate each subsequent face so that its entry agrees with the preceding exit and its strip lies immediately to the right. Strip widths are positive, so the open strips are disjoint. Therefore face interiors never overlap, and the retained successive vertex identifications make the union connected. No diagonal of any face has been cut.

The combinatorial validity condition matters: an arbitrary list of shared vertices may impose crossing connections at an original vertex. The later source supplies a noncrossing face path with the required chosen pairs for tight polyhedra (Theorem 2.6 and Lemma 3.1). The strip argument alone does not prove that such a path exists for a general polyhedron. A cyclic tour may be broken at one connection to yield the open chain used for the layout.

## 3. Why this does not solve the full problem

The prescribed-face condition is substantive. If a polygonal face is triangulated and its triangles are unfolded separately, their placements need not recombine into one rigid copy of the original face. New diagonal cuts also are not cuts along original edges. Thus applying the triangular theorem after subdivision proves a statement about a different face structure.

Nor does a valid vertex unfolding automatically give an ordinary edge unfolding. Removing a point connection can disconnect the layout even though its closed union was connected. The required planar nonoverlap is also distinct from a collision-free physical motion in space. None of these stronger assertions is claimed.

The contribution is a source and scope update with a proved geometric lemma. It does not provide a new general unfolding algorithm, a counterexample, or a comprehensive certification of the current open status. No human mathematical review is claimed.

## Checked references

1. The Open Problems Project, Problem 42, https://github.com/edemaine/topp/blob/main/Problems/P.000042 ; exact We-Solve statement preserved in `official_prompt.txt`.
2. Erik D. Demaine, David Eppstein, Jeff Erickson, George W. Hart and Joseph O'Rourke, *Vertex-Unfoldings of Simplicial Manifolds*, in *Discrete Geometry: In Honor of W. Kuperberg's 60th Birthday*, 2003, pp. 215–228. Author-hosted paper: https://erikdemaine.org/papers/VertexUnfolding_Kuperberg2003/paper.pdf .
3. Toshiki Endo and Yuki Suzuki, *Vertex unfoldings of tight polyhedra*, arXiv:1109.0001v3, 18 February 2013. https://arxiv.org/pdf/1109.0001 . Definitions and Theorem 1.2 checked on pages 1–2; geometric layout checked in Section 4. No peer-review status is inferred from the arXiv copy.

Prepared by OpenAI Codex (GPT-6; exact serving revision and settings unknown), agent /root/scout_new. Gaven prompted and authorized the work; no additional human mathematical contributor is claimed.


## Reproducibility and review

Read the exact prompt and both actual primary PDFs, checked the v3 definition/no-shared-vertex hypothesis and Section 4 layout scope, and supplied a direct proof of the strip lemma. No general unfolding computation or independent verification of every published combinatorial proof is claimed.
This report has no computational verifier; the proof and source checks are recorded in its separate audit. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

## References

https://github.com/edemaine/topp/blob/main/Problems/P.000042
https://erikdemaine.org/papers/VertexUnfolding_Kuperberg2003/paper.pdf
https://arxiv.org/pdf/1109.0001
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
