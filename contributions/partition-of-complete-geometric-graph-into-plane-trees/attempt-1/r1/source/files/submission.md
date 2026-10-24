# A plane Hamiltonian-path partition for every even convex point set

Problem: prb_ea5135988fe747ddbd5fd1411b23577c

Claim type: Partial result

Exact scope: For every set of 2m points in strictly convex position, partition all edges of its complete geometric graph into m pairwise edge-disjoint plane spanning Hamiltonian paths.

Write N=2m and label the points 0,...,N-1 in cyclic order. The case m=1 is the single-edge path. For general m take the zigzag vertex order
\[
 0,N-1,1,N-2,2,N-3,\ldots,m-1,m.
\]
It lists every vertex exactly once. Consecutive edges have endpoint sum -1 or 0 modulo N. The sum -1 class consists of m edges, and the sum 0 class of m-1 edges (the two fixed points of j=-j mod N are excluded loops). The path has N-1 edges, so it uses these two entire classes.

This path has no crossing edges. In the displayed cyclic indexing, each successive chord joins an alternating extreme of the remaining interval. The intervals between the smaller and larger endpoints of its edges are nested, with possible common endpoints on consecutive edges. Hence two disjoint edges never have alternating endpoints. For chords of a strictly convex polygon that is precisely the criterion for an interior crossing, as follows by placing the two endpoints of the second chord on opposite sides of the first chord's line. Nesting thus proves planarity for every strictly convex realization, without requiring regular spacing.

For k=0,...,m-1 rotate every label by k modulo N. The resulting path P_k is still plane and spans all vertices. Rotation adds 2k to each endpoint sum, so its edges are exactly the sum classes 2k-1 and 2k modulo N. These m pairs partition all N residue classes. Each unordered edge has exactly one endpoint sum, so every edge of K_N occurs in exactly one path. This proves the requested plane-tree partition for this infinite geometric subclass, with paths supplying the stronger degree-at-most-two form.

There are exactly m paths and m(N-1)=N(N-1)/2 edges, as required. They may geometrically cross edges belonging to different paths; the requirement only forbids crossings within a tree and demands edge disjointness between trees. No vertex disjointness is asserted, since every tree spans the same point set. Arbitrary general-position sets with interior points need not share this cyclic crossing criterion, and remain outside the proof. The construction can be listed in O(N^2) index operations once the cyclic order is known, matching the output edge count; this is not a claim of a general plane-tree decomposition algorithm.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Executed check_exact.py with assertions enabled: PASS every even N2..60; exact edge partition and 404550 within-path geometric intersection checks. python -O was separately executed and refused. These are finite exact checks only.


## Reproducibility and review

Executed check_exact.py with assertions enabled: PASS every even N2..60; exact edge partition and 404550 within-path geometric intersection checks. python -O was separately executed and refused. These are finite exact checks only.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: check_exact.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_ea5135988fe747ddbd5fd1411b23577c.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
