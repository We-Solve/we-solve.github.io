# All zonotopes satisfy the 3^d face inequality

Problem: TOP-1216

Claim type: Partial result

Exact scope: Every full-dimensional d-dimensional zonotope has at least 3^d nonempty faces, including itself, by monotonicity of total face count under Minkowski addition.

Let F(P) count nonempty faces, with the whole polytope included and the empty face omitted. We first prove F(P+Q)>=F(P) for any full-dimensional polytope P and any polytope Q in the same space.

For a polytope, its normal fan consists of the closed cones of objectives exposing a face containing a specified face; their relative interiors are disjoint and each nonempty face corresponds to exactly one such cone. The whole polytope corresponds to the zero cone. The normal fan of P+Q is the common refinement of the two normal fans. Indeed maximization splits as
\[
 (P+Q)^u=P^u+Q^u,
\]
and the sets of objectives giving the same two exposed faces are intersections of the respective relatively open normal cones; taking closures gives precisely the cones of the common refinement. This also proves directly the refinement assertion rather than inferring it from an increase of vertices only.

In any finite fan refinement, every old cone C contains a new cone of the same dimension whose relative interior meets relint(C). Otherwise finitely many subsets of smaller dimension would cover relint(C), which is impossible: intersect with its linear span, where finitely many proper linear subspaces have empty interior. Such a chosen new cone cannot serve two old cones, because the old relatively open cones are disjoint and each new relative interior is contained in one of them. Choosing one for each C is an injection from old cones to new cones. This includes C={0}. Counting cones proves the monotonicity for all nonempty faces together; no dimensionwise monotonicity is needed.

Now write the zonotope Z=sum[-g_i,g_i]. Choose d independent generators. Their sum is a parallelotope P; the remaining segment sum is Q, so Z=P+Q. A d-parallelotope has 2^(d-j) binom(d,j) faces of dimension j, for 0<=j<=d: choose j free coordinates and fix the others to endpoints after an invertible linear change of coordinates. Therefore
\[
 F(Z)\ge F(P)=\sum_{j=0}^d2^{d-j}\binom dj=3^d.
\]
Zero generators and parallel repeated generators do not affect the argument, and arbitrary translations are harmless. Dimension zero has one nonempty face and satisfies the convention 3^0=1. Every zonotope is centrally symmetric, so this is directly within the literal question. It includes zonotopes whose generators have many dependencies and which are not products of segments up to combinatorial equivalence. No classification of equality cases, and no extension to all centrally symmetric polytopes, is asserted.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1216.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
