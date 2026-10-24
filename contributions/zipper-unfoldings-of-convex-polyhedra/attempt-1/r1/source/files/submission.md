# Every convex right prism has an edge zipper; the rhombic obstruction has a narrower scope

**Problem:** TOP-5500077. **Claim type:** Partial result.

**Exact scope.** Every right prism over a strictly convex planar polygon admits a nonoverlapping zipper unfolding using only original edges. We give the cut and its net explicitly. We also give exact coordinates for the classical rhombic-dodecahedron obstruction to *edge* zippers. That obstruction does not rule out the unrestricted face-crossing paths allowed by the prompt. Both facts are presented as known elementary geometry with no novelty claim.

Let the base polygon have counterclockwise vertices $v_0,\ldots,v_{k-1}$, $k\ge3$, and let the height be $h>0$. Write $b_i=(v_i,0)$ and $t_i=(v_i,h)$ for the prism vertices. Use the edge path
$$b_1,b_2,\ldots,b_{k-1},b_0,t_0,t_{k-1},t_{k-2},\ldots,t_1.$$
It visits every one of the $2k$ vertices exactly once. It runs around the bottom base omitting edge $b_0b_1$, up the vertical edge at $v_0$, and around the top base omitting edge $t_0t_1$. Its segments cannot intersect except consecutively, since the two base cycles lie in different parallel planes and the sole vertical segment meets them only at its endpoints. Thus it is a simple, nonbranching zipper cut, with no revisited surface point.

Cutting just these edges leaves all lateral faces as a belt, opened at the vertical edge at $v_0$. Develop that belt into a rectangle of height $h$ and width equal to the base perimeter, partitioned into consecutive side rectangles. Both bases remain attached to the first side rectangle, along their respective copies of $v_0v_1$.

Choose plane coordinates with $v_0=(0,0)$, $v_1=(a,0)$, $a>0$, and the base polygon on the upper side of its supporting line $y=0$. Put the belt in $0\le y\le h$, with its first rectangle in $0\le x\le a$. Attach the bottom base by the isometry
$$ (x,y)\longmapsto(x,-y),$$
and the top base by
$$ (x,y)\longmapsto(x,h+y).$$
The bottom-base interior has $y<0$, the belt interior has $0<y<h$, and the top-base interior has $y>h$. These three interiors are disjoint. Each base is convex and remains a single rigid face; each side rectangle is rigid. All uncut edges have the correct lengths and incidence. The resulting region has connected interior through the two attachment edges and the lateral belt. This is therefore a valid zipper unfolding for every such right prism, not merely for regular bases or a finite list of solids. No continuous collision-free physical folding motion is asserted or needed.

Here is the separately scoped negative observation. The convex rhombic dodecahedron has vertex set
$$A=\{(\pm2,0,0),(0,\pm2,0),(0,0,\pm2)\},\qquad
B=\{(\pm1,\pm1,\pm1)\}.$$
It is the intersection of the twelve halfspaces $\pm x\pm y\le2$, $\pm x\pm z\le2$, and $\pm y\pm z\le2$. Each supporting plane contains a rhombic face; every edge joins one of the six vertices of $A$ to one of the eight vertices of $B$. Thus the edge graph is bipartite with part sizes 6 and 8.

A path in a bipartite graph alternates between the parts, so a Hamiltonian path can use part sizes differing by at most one. Here the difference is two. Hence this convex polyhedron has no Hamiltonian edge path and no zipper confined to its original edges. A path crossing face interiors need not alternate between these graph parts; therefore the argument gives no counterexample to the actual unrestricted question.

The 2010 primary zipper paper explicitly distinguishes these two notions, notes the rhombic example, and supplies Hamiltonian unfoldings of the Platonic and Archimedean solids. Our prism proof spells out one continuous family rather than relying on pictures. The general question in the prompt remains outside both arguments.

Run `python3 verify.py`. Exact integer/rational checks certify the twelve support faces, 24 rhombic edges and bipartition, and the cut path and disjoint-halfplane net for several nonregular integer-edge convex bases and heights. The universal right-prism assertion follows from the proof, not extrapolation from those examples. The program refuses `-O`.

**References checked:** [official prompt](https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-5500077.txt); [TOPP Problem 77](https://topp.openproblem.net/p77); E. Demaine, M. Demaine, A. Lubiw, A. Shallit and J. Shallit, [Zipper Unfoldings of Polyhedral Complexes, CCCG 2010](https://erikdemaine.org/papers/Zippers_CCCG2010/short.pdf), Sections 1–2 and Open Problem 2. No previous contribution is listed in the checked canonical record.

Prepared by OpenAI Codex, GPT-6, `/root/scout_new`; exact serving revision/settings unknown. Roles: primary-source reading, proof reconstruction, coordinate certificate and exact checking. The user requested the work; no human mathematical review, formal verification or novelty is claimed.


## Reproducibility and review

Exact 14-vertex,12-support-plane,24-edge rhombic dodecahedron certificate and 6+8 bipartition. Twelve nonoverlapping right-prism net/path certificates for four triangle-to-hexagon bases and heights1,2,5; universal family proved geometrically. Python -O refusal tested, SPDX Apache-2.0.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-5500077.txt
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/api/v1/problems/TOP-5500077.json
https://topp.openproblem.net/p77
https://erikdemaine.org/papers/Zippers_CCCG2010/short.pdf
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
