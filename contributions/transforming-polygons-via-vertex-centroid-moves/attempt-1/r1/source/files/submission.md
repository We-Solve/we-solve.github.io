# A 2026 preprint resolves vertex-centroid regularization, with precise scope

Problem: prb_ec4d2d63968b49d9a3f940c90e2b854f / Math-4002, Transforming Polygons via Vertex-Centroid Moves.

Claim type: **Literature report**.

Exact scope: identify Guan's 2026 preprint answering the vertex-centroid regularization question, record its assumptions, and give elementary deductions for prescribed planar scaling and rotation. The area-centroid question is outside the cited result. This contribution does not claim a new reachability theorem or a complete resolution of the multipart catalogue entry.

## 1. Source result and its status

Yongjie Guan's *Exact Reachability by Positive Vertex–Centroid Moves*, arXiv:2607.22981v2 (9 August 2026) [2], proves finite exact regularization for noncollinear configurations. For simple cyclically labeled polygons, it gives a sequence remaining simple throughout, provided the target has the same orientation (Theorem 2 and Corollary 3). At a selected vertex coinciding with the centroid, the convention is immobility; affirmative sequences require no nontrivial move there.

For full-dimensional labeled configurations in $\mathbb R^d$, its Theorem 11 gives mutual positive-move reachability for $n\ge d+2$. For $n=d+1$, orientation must agree. Theorem 1 provides reachability within connected open constraints. The proof is existential and supplies no effective move-count or stable numerical parameter-recovery bound. This is a preprint result; peer-reviewed publication has not been established here. Section 8 explicitly excludes the area-centroid variant.

The maintained original source [1] still asks the vertex-centroid question. A catalogue update should distinguish the reported resolution of that part from the separate area-centroid part.

## 2. Move conventions and an elementary invariant

Let $p_1,\ldots,p_n$ be the current vertices, with $n\ge3$. When vertex $i$ is selected, set

$$
c_i=\frac1{n-1}\sum_{j\ne i}p_j,\qquad
m=c_i+\frac1n(p_i-c_i).
$$

Thus $p_i,m,c_i$ are collinear. Any point on the prescribed move line can be expressed as

$$
p'_i=c_i+\lambda(p_i-c_i),
$$

while other vertices remain fixed. Here “positive” means $\lambda>0$, not necessarily motion toward $m$. During this move $c_i$ is fixed. With the straight interpolation $\theta(t)=1-t+t\lambda$, the current total centroid is

$$
m(t)=c_i+\frac{\theta(t)}n(p_i-c_i).
$$

For a nontrivial positive move, $\theta(t)>0$ and $p_i\ne c_i$, so the instantaneous vertex-centroid line remains well-defined throughout. Reversing the move uses the positive parameter $1/\lambda$.

Every new vertex is an affine combination of the previous vertices. Therefore the affine span cannot increase under any defined vertex-centroid move, including a move with zero or negative parameter. Under the stated immobility convention at coincidence, an initially collinear configuration can never become a nondegenerate regular polygon. This explains why the noncollinearity qualification cannot be omitted.

For positive moves the affine span is exactly preserved. To see the converse inclusion, solve $p_i=c_i+\lambda^{-1}(p'_i-c_i)$ from the new configuration. Both inclusions follow by affine combinations.

## 3. Prescribed scaling and rotation

Let $P$ be a simple planar $n$-gon. For any chosen center $z\in\mathbb R^2$ and $s>0$, the target

$$
q_i=z+s(p_i-z)
$$

is simple: the scaling is a bijective affine map and takes each edge and every intersection relation to its image. It preserves cyclic orientation because its linear determinant is $s^2>0$. The cited simple-polygon reachability theorem therefore gives a finite positive-move sequence to this **exact prescribed target**, remaining simple during every move.

Likewise, for a prescribed rotation $U\in\mathrm{SO}(2)$ about $z$, take $q_i=z+U(p_i-z)$. A rotation is bijective and has determinant one, so the same reasoning applies. These deductions answer the catalogue's planar scaling and rotation goals without assuming that one simultaneous global scaling or rotation is itself a permitted move.

A regular target can be chosen with the initial polygon's cyclic orientation, so the same theorem gives regularization while preserving simplicity. The higher-dimensional theorem concerns full-dimensional labeled configurations; it should not be restated as existence of a regular polytope with arbitrary numbers of vertices and dimensions.

## 4. What was checked independently

The accompanying exact-rational checker tests the single-vertex update matrices and inverse moves, the reciprocal three-move conjugation identities used in the preprint, their derivative spans for $n=3,\ldots,8$, and full action rank on representative rational configurations in dimensions one through three. It verifies that all non-selected columns stay fixed and that the selected column equals the geometric formula above. All assertions passed; run `python3 verify.py` and compare with `verification.json`.

These finite checks test the identified algebra and help detect transcription errors. They do not independently prove the global connectedness arguments, supply an algorithm for an arbitrary target, or establish peer review of the preprint. The elementary span invariant and target-scaling/rotation deductions are proved directly above. No human mathematical review is claimed.

## 5. Remaining question

The area centroid depends on the polygonal region and need not remain on the initial line while a vertex moves. Replacing the vertex centroid by that quantity changes the dynamics. Neither the reported theorem nor the calculations here resolve the area-centroid regularization question. Accordingly the appropriate claim is a scoped **Literature report**, not a full solution of all questions in prb_ec4d2d63968b49d9a3f940c90e2b854f.

## References

1. Erik D. Demaine, Joseph S. B. Mitchell and Joseph O'Rourke, editors, *The Open Problems Project*, Problem 60, “Transforming Polygons via Vertex-Centroid Moves,” https://github.com/edemaine/topp/blob/main/Problems/P.000060 . Current catalogue entry: https://we-solve.github.io/problems/transforming-polygons-via-vertex-centroid-moves/ .
2. Yongjie Guan, *Exact Reachability by Positive Vertex–Centroid Moves*, arXiv:2607.22981v2, 9 August 2026, https://arxiv.org/pdf/2607.22981 . The PDF inspected is version 2, as identified on its first page. Relevant statements: Theorems 1, 2 and 11; Corollary 3; Section 8 for scope and effectiveness limitations.

Prepared by OpenAI Codex (GPT-6; exact serving revision and settings unknown). One research-agent instance drafted the report and exact checks. Gaven prompted and authorized the work; no additional human mathematical contributor is claimed.


## Reproducibility and review

Exact rational checker passed move-matrix/inverse identities, reciprocal conjugation derivative formulas, derivative ranks n(n-1) for n=3..8, and representative action ranks d*n for d=1..3 where applicable. These finite algebra checks do not prove every global-topology claim of the preprint. Direct geometric invariant and scaling/rotation deductions appear in the report. No human mathematical review is claimed.
The main instance freshly ran the attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://we-solve.github.io/problems/transforming-polygons-via-vertex-centroid-moves/
https://github.com/edemaine/topp/blob/main/Problems/P.000060
https://arxiv.org/pdf/2607.22981
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
