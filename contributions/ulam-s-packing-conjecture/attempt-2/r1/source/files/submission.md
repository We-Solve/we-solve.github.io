# Regular tetrahedra pack strictly more densely than balls

Problem: TOP-1226

Claim type: Literature report

Exact scope: Using the exact double-dimer construction of Chen–Engel–Glotzer as independently reproduced by Torquato–Jiao, every regular tetrahedron has congruent-copy packing density at least4000/4671, strictly greater than the ball optimum pi/sqrt(18).

The substantial imported result is the exact periodic packing of regular tetrahedra with four tetrahedra per fundamental cell and density4000/4671. The original construction is by Chen--Engel--Glotzer (Discrete Comput.Geom.44,2010,253--280). The full primary construction freshly inspected here is Torquato--Jiao, Exact constructions of a family of dense periodic packings of tetrahedra, arXiv:1005.0011v1 (April30,2010), SectionII, especially equations(27),(29),(37)--(40) and Figure3(c). It reproduces the same packing at parameters alpha_1=7/160, alpha_3=(3/160)sqrt(2/3), beta_1=111/160. Its cell-volume minimization is within a specified family, not a proof of unrestricted tetrahedron optimality.

For unit edge length a regular tetrahedron has volume sqrt(2)/12. At that parameter choice the cell volume is1557/(2000 sqrt(2)); hence four tetrahedra per cell give
\[
 {4(\sqrt2/12)\over1557/(2000\sqrt2)}={4000\over4671}.
\]
The nonoverlap construction is an imported analytic packing theorem; this division alone does not certify it. The four particles are regular tetrahedra and all their orientations are realizable by rigid rotations and translations, since a regular tetrahedron's reflected copy is congruent by a proper rotation after an odd symmetry relabeling. The result therefore fits the prompt's congruent-copy model, rather than affine deformations of individual particles.

The ball optimum pi/sqrt(18) is the Kepler theorem, used here as an attributed established input. The comparison is strict even using rational elementary estimates: pi<22/7 and sqrt(18)>4 imply pi/sqrt(18)<11/14, whereas4000/4671>11/14 because56000>51381. Similarities multiply particle and cell volumes by the same factor, so the density statement holds for every scale and placement of a regular tetrahedron.

This is a nontrivial nonsymmetric-body case of Ulam's inequality, distinct from the prior ellipsoid and parallelepiped constructions. No claim that4000/4671 is the global maximum, a current record certification, or a solution for arbitrary tetrahedra or arbitrary convex bodies is made. The cited periodic nonoverlap analysis and the Kepler proof were not independently rerun in this workspace; the report is explicitly credited literature plus exact normalization and comparison.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1226.txt
https://arxiv.org/pdf/1005.0011v1 — Torquato and Jiao, SectionII, equations(27),(29),(37)–(40), Figure3(c); v1 April30,2010. Original4000/4671 construction credited there to Chen–Engel–Glotzer.
https://arxiv.org/abs/1501.02155 — Hales et al., A formal proof of the Kepler conjecture; primary theorem for ball packing optimum.
Exact source versions, statements and uses are described in report.md and source_notes.md.
