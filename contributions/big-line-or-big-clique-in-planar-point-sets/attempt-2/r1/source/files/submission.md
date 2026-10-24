# The five-visible-clique case for every collinearity threshold

Problem: prb_0d0ba382251e432f82aa35eff497a456

Claim type: Literature report

Exact scope: For each integer ell>=3, sufficiently many finite planar points contain ell collinear points or five pairwise visible points, with visibility measured against the entire input.

Theorem5 of Abel et al., Every large point set contains many collinear points or an empty pentagon, arXiv:0904.0262 (inspected16-page primary manuscript), proves the big-line-big-clique conclusion for k=5 and every ell. Their Theorem3 first establishes a finite threshold for ell collinear points or a5-hole. The theorem uses arbitrary finite planar point sets, including collinear triples; general position is not substituted for the original bounded-collinearity alternative.

The visibility match can be checked directly from the source's definitions: a5-hole has five vertices in strictly convex position and its closed convex hull meets the entire input P only in those vertices (Section1.1). Any third point blocking a pair of its vertices would lie on their closed segment, hence in that closed hull. This is excluded, whether the pair is a pentagon side or a diagonal. Thus the five vertices form an ambiently visible clique. Theorem5 supplies this same conclusion explicitly; no general-position extraction or deletion of blockers is required.

For any k<=5, choose a k-subset of that visible clique. Removing vertices from the selected clique does not change the ambient set against which visibility was certified, so all selected pairs remain visible. The ell-collinear alternative is unchanged. Thus the same theorem supplies the whole finite-k<=5 subclass with every ell. Small endpoint conventions ell=2 or k=2 are elementary and are not the substantial content claimed here.

The deep threshold theorem and minimal-pentagon argument are credited literature; no new optimized threshold or independent reproduction of their case analysis is asserted. In particular their threshold is not silently replaced by a Ramsey number for an extracted general-position subset. Such extraction can leave blockers among deleted points, as the earlier archive correctly demonstrates.

This is additional coverage beyond the earlier visible-triangle proof. The source's2009 historical remarks about then-open cases are not presented as a current2026 status claim; the prior archive itself mentions newer results for other parameters. This report proves no all-k conclusion and does not rely on those newer announcements for the k=5 theorem.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_0d0ba382251e432f82aa35eff497a456.txt
https://arxiv.org/pdf/0904.0262 — Abel, Ballinger, Bose, Collette, Dujmović, Hurtado, Kominers, Langerman, Pór and Wood, Theorems3 and5,16-page manuscript.
Exact source versions, statements and uses are described in report.md and source_notes.md.
