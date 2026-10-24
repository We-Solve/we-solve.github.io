# Finiteness for every four-body positive mass vector in any Euclidean dimension

Problem: prb_7f1070105dc24ce8aa0dd3210191bfe6

Claim type: Literature report

Exact scope: For n=4 and every fixed positive mass vector, central-configuration shapes are finite in any fixed Euclidean ambient dimension: planar shapes are covered by Hampton–Moeckel and the sole full-affine-dimensional spatial shape is the regular tetrahedron.

The imported theorem is Hampton--Moeckel, Finiteness of relative equilibria of the four-body problem, Inventiones163(2006),289--312, Theorem1; its author-hosted revised manuscript was inspected. It proves finiteness for every positive four-mass vector in the planar Newtonian problem, including exceptional mass relations. It is not merely generic-mass finiteness. The equivalence convention in that paper is no stronger than needed for the prompt's translation/rotation/scale quotient, so its finite collection remains finite after any further reflection identification. No bound on the number of spatial shapes is inferred from the paper's planar numerical upper bounds.

Here is the complete remaining spatial deduction. Four points have affine span at most three. Those with span at most two are the planar theorem's configurations, embedded in the ambient space. Assume instead the four points are affinely independent, center mass at c, and write centrality as
\[
 \sum_{j\ne i}m_j{|q_j-q_i|^{-3}}(q_j-q_i)=-\lambda(q_i-c).
\]
With M=sum m_j, the center-of-mass identity gives q_i-c=-M^(-1)sum_(j!=i)m_j(q_j-q_i). Subtracting these two expressions yields
\[
 \sum_{j\ne i}m_j\bigl(|q_j-q_i|^{-3}-\lambda/M\bigr)(q_j-q_i)=0.
\]
For fixed i the three displacements are independent. Positivity of m_j forces every coefficient to vanish. Thus all six distances equal (M/lambda)^(1/3), and the configuration is a regular tetrahedron. Conversely the center-of-mass identity verifies centrality of every regular tetrahedron for any positive masses. Up to translations, rotations and positive scaling there are at most two oriented chiral realizations in dimension3 (one if orthogonal reflections are included); in any case the number is finite. Labels stay fixed, and no body permutation is assumed to be an allowed equivalence.

Together the affine-span alternatives exhaust all four-point configurations in every Euclidean dimension. A fixed planar shape has only finitely many orientation classes under the ambient rotation convention: any two embeddings with the same Gram matrix differ by an orthogonal map on their spans, extended to the ambient space, with at most the two determinant choices. No continuous family arises merely by embedding the plane or tetrahedron in a larger space.

This adds all four-body shapes to the prior collinear/simplex calculation through a substantial established planar theorem. The general n>=5 question in the literal prompt is outside the result proved here. The algebraic elimination and exceptional-case analysis supporting Hampton--Moeckel are credited rather than claimed as computations rerun by us.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_7f1070105dc24ce8aa0dd3210191bfe6.txt
https://www-users.cse.umn.edu/~rmoeckel/research/FinitenessRE4BP.rev.pdf — Hampton and Moeckel, Theorem1, Newtonian planar convention and exceptional positive-mass analysis, author-hosted revised manuscript.
Exact source versions, statements and uses are described in report.md and source_notes.md.
