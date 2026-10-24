# Removable matching edges in every Hamiltonian cubic graph

Problem: prb_325c1fff8382499c8134e4d14d428f19

Claim type: Partial result.

Exact scope: For every finite simple Hamiltonian cubic graph and every edge outside a chosen Hamiltonian cycle, deleting that edge and suppressing its endpoints leaves a three-edge-colorable cubic multigraph.

## The spanning-cycle regime

Let G be finite, simple, cubic, and let C be a Hamiltonian cycle. Since 3|V|=2|E|, its order n is even. Each vertex has exactly two C-edges, so the remaining edges form a perfect matching M. Coloring C alternately1,2 and M with3 already shows that this entire class satisfies the input three-edge-colorability hypothesis.

Choose any e=uv∈M. Delete it. The vertices u,v now have degree two and their remaining incident edges are exactly the C-edges. Suppressing u removes it from the cyclic order of C and joins its two C-neighbors; suppressing v does the same. As G is simple and e∉C, u and v are nonconsecutive on C. Therefore these suppressions create no loop. They produce a spanning cycle C′ on the remaining n−2 vertices. When n=4, C′ consists of two distinct parallel edges between the two remaining vertices, which is a legitimate two-edge cycle in the allowed output multigraph.

The matching M\{e} covers every remaining vertex exactly once and is untouched by the suppressions: neither u nor v is incident to another matching edge. The entire output graph is exactly C′ together with M\{e}, with parallel edges retained as distinct. Since n−2 is even, color C′ alternately1,2 and the remaining matching3. At every vertex all three incident edges have distinct colors. This is a proper three-edge-coloring of G⊖e.

Equivalently assign the three nonzero elements of F2² to these colors; at a cubic vertex their sum is zero. Pulling the color of each suppressed edge back to both halves gives equal values at the degree-two vertices in G−e, so it also gives the flow formulation in the prompt.

## Scope and limitations

The proof works for every edge of the complementary perfect matching, not just one chosen edge. It gives no conclusion for arbitrary edges on C, nor does it assume that every three-edge-colorable cubic graph is Hamiltonian. The latter distinction is essential to the unresolved unrestricted question. All output parallel edges are retained rather than collapsed, as the literal operation requires.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_325c1fff8382499c8134e4d14d428f19.txt


## Reproducibility and review

Proof/source review only; no code attached at authoring time. Exact hypotheses and boundary cases are addressed in report.md; external theorem proofs are credited rather than claimed independently verified.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_325c1fff8382499c8134e4d14d428f19.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
