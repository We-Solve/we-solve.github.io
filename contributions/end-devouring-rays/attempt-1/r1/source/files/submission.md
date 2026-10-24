# The published prescribed-start end-devouring theorem matches the prompt

Problem: prb_07a2c4e025ac4ca5baba9a82e046f7ca

Claim type: Literature report.

Exact scope: Gollin–Heuer’s Theorem1 supplies the exact requested devouring family for every countable end and prescribed infinite disjoint ray family; check that the prompt’s countable-devouring convention implies the theorem’s countability hypothesis even when the graph is uncountable.

## Credited theorem

Gollin–Heuer, Infinite end-devouring sets of rays with prescribed start vertices, Theorem1, states that for a countable end and a prescribed set of disjoint rays in it, there is a disjoint devouring family with exactly the same starting vertices. The statement is published in Discrete Mathematics341(7)(2018),2117–2120. We apply it only to the nonempty infinite prescribed family in the prompt. Its infinite linkage construction is an external theorem, not an independent proof claimed here.

## Verifying the countability convention

The prompt assumes a countable family R_1,R_2,... devours ω. The union U of their vertices is countable, since each ray itself has countably many vertices. Every family of pairwise disjoint ω-rays has cardinality at most|U|: each ray meets U, and selecting one of its intersection vertices gives an injection into U because the rays are disjoint. Thus the end cannot contain uncountably many pairwise disjoint rays, which is the countable-end condition in the theorem’s ray-degree formulation. This deduction needs no countability assumption on all vertices of G.

The supplied infinite family K is feasible by definition: it is already a pairwise vertex-disjoint family of rays in the end and hence supplies exactly the required starting set. It is itself countable by the same injection argument. Applying the theorem gives K′ with the same starts, disjointness, membership in ω, and the property of intersecting every ω-ray. These are precisely the four literal requirements.

## What is and is not checked

An inclusion-maximal disjoint family devours an end, but extending K that way could add starting vertices, so it would not prove the requested result. The published prescribed-start theorem is the substantive input preventing that error. Equality of starting sets is not replaced by equal cardinality. The conclusion need not retain the original rays or all their initial segments.

This is a report of the established theorem and a convention audit, not a new general-end proof. It makes no claim for ends with uncountably many disjoint rays, for which the countability reduction fails.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_07a2c4e025ac4ca5baba9a82e046f7ca.txt
- https://epub.sub.uni-hamburg.de/epub/volltexte/2017/69288/pdf/655_1704.06577.pdf
- https://www.math.uni-hamburg.de/home/gollin/
- https://arxiv.org/abs/1704.06577


## Reproducibility and review

Proof/source review only; no code attached at authoring time. Exact hypotheses and boundary cases are addressed in report.md; external theorem proofs are credited rather than claimed independently verified.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_07a2c4e025ac4ca5baba9a82e046f7ca.txt
https://epub.sub.uni-hamburg.de/epub/volltexte/2017/69288/pdf/655_1704.06577.pdf
https://www.math.uni-hamburg.de/home/gollin/
https://arxiv.org/abs/1704.06577
Exact source versions, statements and uses are described in report.md and source_notes.md.
