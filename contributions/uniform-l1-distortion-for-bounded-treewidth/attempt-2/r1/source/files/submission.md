# Isometric L1 embeddings of all positively weighted cactus metrics

Problem: prb_fa2b7d8c8dec41c3b282dac75cd99ee6

Claim type: Partial result

Exact scope: Every finite connected cactus with arbitrary positive edge lengths embeds isometrically in real L1; it has a tree decomposition with bag cardinality at most3, giving distortion1 on this explicit bag-size3 subclass.

For a circle of circumference L, parameterize points by R/LZ. Map a point p to one half of the indicator of the semicircular arc [p,p+L/2] in L1(R/LZ), using length measure. If the shorter circular separation of p,q is delta<=L/2, the symmetric difference of their semicircles has length 2delta. Hence their L1 distance after the factor 1/2 is exactly delta. Restricting this map to the vertices of a positively weighted cycle, placed at cumulative edge lengths on its circumference, realizes precisely its shortest-path metric, even for odd cycles or very uneven edge lengths. A bridge of length l is represented by its two endpoints 0,l in R with the absolute-value metric.

Now let G be a connected cactus. Its block-articulation incidence graph is a tree: blocks are bridges or simple cycles, and a cycle of blocks would create an edge lying on two simple cycles. Choose a root vertex. For each block B define the gate p_B(v) of a vertex v to be v if v lies in B, and otherwise the unique articulation point of B through which the block-tree path toward v enters. Take the direct sum, over all blocks, of the block embedding applied to p_B(v), subtracting an arbitrary fixed basepoint image in each coordinate.

For u,v, the projections p_B(u),p_B(v) agree on every block off their block-tree route. On a block on that route they are exactly its entry and exit vertices. Any graph path from u to v must pass through those gates; conversely the shortest paths within the route's successive blocks concatenate without extra cost. Thus
\[
 d_G(u,v)=\sum_B d_B(p_B(u),p_B(v))
 =\sum_B\|F_B(p_B(u))-F_B(p_B(v))\|_1.
\]
The right side is the norm of the direct-sum difference, proving isometry. Positivity of edge lengths guarantees these are genuine metrics.

The embedding can be made finite-dimensional. In each cycle, the finitely many endpoints of the vertex semicircles partition its circle into intervals on which all indicator coordinates are constant. Replace each interval by one weighted real coordinate equal to half its length times its zero-one indicator. This preserves every L1 distance exactly. If edge lengths are rational, so are all interval lengths and coordinates; the proof does not depend on rounding a continuous measure.

To check the prompt's width convention explicitly, a cycle v_0,...,v_(l-1) has a path decomposition with bags {v_0,v_i,v_(i+1)} for i=1,...,l-2. Each edge is contained in a bag, and each vertex's bags are connected. Bridges use two-vertex bags. Glue block decompositions through bags containing their shared articulation vertex, along the block tree. The resulting decomposition has bags of cardinality at most3. A graph consisting of a single vertex is mapped to zero. This proves the literal noncontracting and upper inequalities with C_3=1 on the cactus subclass, independent of graph size and weight ratios. General bag-size3 graphs can have overlapping cycles and are not covered; no all-treewidth theorem is inferred from the block proof.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Executed check_exact.py with assertions enabled: PASS 140 rational weighted cacti; 15202 pairwise L1 distances equal independent Dijkstra shortest paths. python -O was separately executed and refused. These are finite exact checks only.


## Reproducibility and review

Executed check_exact.py with assertions enabled: PASS 140 rational weighted cacti; 15202 pairwise L1 distances equal independent Dijkstra shortest paths. python -O was separately executed and refused. These are finite exact checks only.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: check_exact.py

[Browse the reproduction repository at the pinned commit](https://github.com/gavenren/we-solve-reproducibility/tree/e266bc69d2766f929f65b5787a6ed808760456c0). Program file: `check_exact.py`. File SHA-256: `707b19215cb07d2234ade410d1b52134d1e5a922a09c35a20e331b070fc84470`. The source is byte-identical to the reviewed and executed program.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_fa2b7d8c8dec41c3b282dac75cd99ee6.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Reproduction repository at the pinned commit: https://github.com/gavenren/we-solve-reproducibility/tree/e266bc69d2766f929f65b5787a6ed808760456c0; program file: `check_exact.py` (Used: exact previously reviewed program; SHA-256 707b19215cb07d2234ade410d1b52134d1e5a922a09c35a20e331b070fc84470).
