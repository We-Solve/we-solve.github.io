# Compact Representations of Four-Thirds Near-Mincuts

Claim type: **Partial result**.

Exact scope: Every cut of a connected nonnegatively weighted cactus with 0<λ and weight≤4λ/3 is one bridge or one pair of edges in one cycle; all such cuts have an O(n+m)-word implicit representation.

## Atomic cuts in a cactus

A cactus is a connected simple graph in which every edge belongs to at most one simple cycle. Its blocks are bridges and edge-disjoint cycles, attached in a tree pattern at articulation vertices. A cut is an unordered nonempty proper vertex bipartition, and its weight is the sum of crossing edge weights. Assume the global minimum cut λ is positive; individual edges may have weight zero.

A cut crosses an even number of edges of every cycle, since one returns to the starting side when walking around it. Partition its crossing edges into units: each crossing bridge is one unit, and in each cycle pair the crossing edges arbitrarily. Each unit is itself the edge boundary of a valid cut. Removing a bridge separates the cactus into two components. Removing two edges of one cycle separates that cycle into two paths, each with its attached subcacti, again giving exactly two components. In either case the boundary is exactly the removed unit; no other edge can reconnect the two components, by the cactus block structure. Each unit consequently has weight at least λ.

If a cut has at least two units, its weight is at least 2λ, strictly greater than 4λ/3. Every near-minimum cut therefore has exactly one unit. Conversely each bridge or same-cycle edge pair with weight at most 4λ/3 yields such a cut. This proves an exact characterization, including the equality endpoint. In particular
λ=min( {w_e: e bridge} ∪ {w_e+w_f: e≠f in one cycle} ).
A cycle's minimum pair is its two least-weight edges. A one-vertex graph has no nontrivial cuts and is excluded by λ>0; a single cycle and a tree satisfy the formula with the inapplicable set omitted.

## Compact representation and output cost

Retain the block tree, the cyclic edge order within each cycle, all weights and λ. A cut is encoded by one bridge identifier or two edge identifiers in the same cycle. Its threshold predicate is a single exact weight comparison. The represented family is precisely all near-minimum cuts by the proof. The graph/block data occupy O(n+m) words when weights are word-sized; for binary rationals count their encoded bit length as well, with polynomial bit-time comparisons. One can find blocks by depth-first search, retaining the edges on each discovered cycle, in linear graph operations; even a slower polynomial decomposition would not affect the claimed representation size.

The implicit format does not explicitly print every cut. A unit-weight cycle can have quadratically many near-minimum cuts, and printing each side's full vertex list can cost still more. Given a requested unit, traversing the graph after its removal reconstructs its two sides in O(n+m) graph operations. The bit representation of λ has polynomial size in the rational weight input. This cactus result neither assumes a minimum degree nor asserts the sought representation on arbitrary weighted graphs.

## Earlier contributions and limits

The prior attempt handles unit-weight cycles and tests a proposed representation using K₄. Weighted cacti with arbitrarily many interacting blocks are a stricter added theorem: the atomic-unit argument characterizes the entire near-minimum cut family, including zero-weight edges when λ>0.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30004912/verify.py). Source SHA-256: `6d904b162c84344fc71b978773b8a0894d87bc650e94b8b071b87f82aff72747`. The source is byte-identical to the reviewed and executed program.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30004912.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30004912/verify.py (Used: exact previously reviewed program; SHA-256 6d904b162c84344fc71b978773b8a0894d87bc650e94b8b071b87f82aff72747).
