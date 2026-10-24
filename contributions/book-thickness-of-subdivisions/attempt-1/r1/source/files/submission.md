# A four-page bound whenever the one-subdivision has two pages

Problem: prb_997864c4f9fd4ea19446f7b6bd665035

Claim type: Literature report.

Exact scope: If the graph obtained by subdividing every edge once has book thickness at most two, the original graph has book thickness at most four, using Yannakakis’s credited planar theorem.

## Topological reduction

A two-page book embedding gives a plane drawing: put the spine on a straight line, draw one page in the upper half-plane and the other in the lower half-plane. Within one page, the noninterleaving condition permits disjoint arcs for edges with distinct endpoints. For example, nested intervals can be drawn as nested semicircular arcs after a harmless perturbation at shared endpoints. Intersections between the two open half-planes are impossible. Thus every graph of book thickness at most two is planar.

Let G′ be the exact one-subdivision in the prompt. If bt(G′)≤2, it is planar. In its plane drawing, each subdivision vertex has degree two and belongs to the two halves of one original edge. Suppress it inside a small neighborhood, following those halves to obtain the original edge curve. The neighborhoods and edge interiors are disjoint. Suppressing all subdivision vertices gives a plane drawing of G. Equivalently, planarity is preserved under these contractions. The fact that G′ uses exactly one subdivision per edge is respected; no unrestricted subdivision theorem is substituted.

## Credited planar input

Yannakakis’s published theorem, Embedding planar graphs in four pages, states that every planar graph has a book embedding in four pages. Applying it to the planar G obtained above proves bt(G)≤4. The planar embedding algorithm is an external theorem, not a construction checked by a small example here.

Graphs with no edges have book thickness zero and already satisfy the conclusion. Isolated vertices can be put anywhere on the spine and do not affect the reduction. For a nonempty graph, allowing an unused second page covers the one-page case as well.

## Remaining question

This establishes a universal bound on the entire domain bt(G′)≤2. It does not construct a function for arbitrary input book thickness. When three or more pages are present, different pages cannot all be placed in disjoint planar half-planes, so the planarity reduction stops working. We make no claim that the constant four is sharp within this domain.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_997864c4f9fd4ea19446f7b6bd665035.txt
- https://www.sciencedirect.com/science/article/pii/0022000089900329
- https://www.openproblemgarden.org/op/book_thickness_of_subdivisions


## Reproducibility and review

Proof/source review only; no code attached at authoring time. Exact hypotheses and boundary cases are addressed in report.md; external theorem proofs are credited rather than claimed independently verified.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_997864c4f9fd4ea19446f7b6bd665035.txt
https://www.sciencedirect.com/science/article/pii/0022000089900329
https://www.openproblemgarden.org/op/book_thickness_of_subdivisions
Exact source versions, statements and uses are described in report.md and source_notes.md.
