# Unfriendly bipartitions of every countable locally finite graph

Problem: TOP-3303

Claim type: Partial result.

Exact scope: Every countably infinite locally finite simple graph admits an unfriendly bipartition; a finite maximum-cut argument and an explicit diagonal limit prove the cardinal inequalities at every vertex.

## Finite constraints are simultaneously satisfiable

Enumerate V={v_1,v_2,...}. Local finiteness means every vertex has finitely many neighbors; no uniform degree bound is assumed. For m≥1 put S_m={v_1,...,v_m}∪⋃_(i≤m)N(v_i). This is finite. Choose a maximum-edge cut of the finite induced graph G[S_m], and extend its two-coloring arbitrarily to the other vertices.

For each i≤m all neighbors of v_i lie in S_m. If it had strictly more neighbors on its own side than on the opposite side, moving only v_i to the other side would increase the number of cut edges by that positive difference. Maximality forbids this. Thus the extended coloring satisfies every unfriendly inequality at the first m vertices, with the full original neighbor sets counted.

The extension outside S_m need not be unfriendly there; the construction requires only the first m constraints at this stage.

## Diagonal extraction

From the sequence of these colorings choose an infinite subsequence on which v_1’s color is constant. From that subsequence choose an infinite subsequence on which v_2’s color is constant, and continue. Take the diagonal sequence with strictly increasing original indices m_j. For each fixed vertex v_i its color stabilizes along this sequence; define the limiting color to be that eventual value.

Fix v_i. Its closed neighborhood{v_i}∪N(v_i) is finite, so there is a stage after which every color on this whole set has stabilized. Increase the stage if necessary so m_j≥i. At such stages the finite construction satisfies v_i’s full inequality, and its two neighbor counts are exactly the limiting counts. The same inequality therefore holds in the limit. As v_i was arbitrary, every vertex is unfriendly.

Vertices of degree zero impose0≥0 and cause no difficulty. The two parts may be empty when the graph has no edges; the literal prompt imposes no nonempty-part requirement. If there is an edge, a one-sided partition cannot be unfriendly and the construction necessarily uses both sides.

## Remaining boundary

This proves the whole countable locally finite class, including graphs with degrees unbounded as a function of vertex index. It does not prove the full countable-graph conjecture: when a vertex has infinitely many neighbors, stabilization on each finite prefix does not fix its two cardinal neighbor counts, so this limiting argument alone is insufficient.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3303.txt


## Reproducibility and review

Proof/source review only; no code attached at authoring time. Exact hypotheses and boundary cases are addressed in report.md; external theorem proofs are credited rather than claimed independently verified.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3303.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
