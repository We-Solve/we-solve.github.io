# Perfect-Matching Search in Deterministic NC (General Graphs)

Claim type: **Partial result**.

Exact scope: Perfect-matching search, including the NO output, is in logspace-uniform NC² on forests, by computing edge-cut parities in parallel and verifying the resulting candidate matching.

## A uniquely forced candidate

For each edge e=uv of an input forest, delete e and let S_e be the vertex set of the component containing u. Choose e if |S_e| is odd; when the tree component has even order the parity is independent of which endpoint is designated u. Reject first if any connected component of the original forest has odd order.

Suppose a perfect matching M exists. In any bipartition formed by deleting a tree edge e, every matched edge except possibly e lies wholly on one side. The vertices on S_e are thus paired internally except for one vertex precisely when e∈M. It follows that e∈M iff |S_e| is odd. Every perfect matching equals the same forced candidate. Compute that candidate and check that each vertex has degree exactly one in it. If it passes, output its symmetric adjacency matrix; it is a perfect matching by definition. If it fails, output NO, since any hypothetical perfect matching would equal the candidate. This proves both directions, including even-order trees with no perfect matching and disconnected forests. An isolated vertex is rejected. The zero-vertex graph, if encoded, returns the empty matching.

## Boolean circuit and uniformity accounting

All connectivity calculations can be made by the elementary repeated-squaring reachability circuit. Start with adjacency OR identity; Boolean matrix multiplication uses n AND gates per entry and a balanced OR tree. Squaring ceil(log₂(n+1)) times computes paths of length at most a power of two at least n−1. Its depth is O(log²(n+2)) and size O(n³ log(n+2)). It also computes original connected components in parallel. A component's order parity can be found by an XOR tree on its reachability row, with XOR implemented by a constant-size fan-in-two AND/OR/NOT circuit.

For each potential edge index (u,v), in parallel instantiate reachability on the adjacency matrix with just uv and vu zeroed. Use that instance's u row to compute |S_e| mod 2, and AND with the original adjacency bit to decide whether e is chosen. This unnecessarily runs n² instances, giving the conservative polynomial size O(n⁵ log(n+2)); depth is still O(log²(n+2)). Check every original component has even order, and check each candidate row has exactly one 1, using an OR for existence and all pairwise NANDs for uniqueness. These add polynomial size and O(log(n+2)) depth. The final NO bit controls all output bits so invalid candidates are never represented as successful output.

A logarithmic-space transducer prints these circuits from 1^n: nested indices for the instance, squaring level, matrix entry and OR-tree position use O(log n) bits, and predecessor gate indices have explicit polynomial-range formulas. Likewise input-edge masks, XOR trees and row tests have locally computable wiring. Thus uniformity is constructive, rather than inferred merely from a polynomial-time sequential algorithm. The forest promise can also be checked in NC²: for each present edge require that its endpoints become disconnected when it is deleted, using the same instances. A graph is a forest exactly when every edge is a bridge. Invalid inputs may be flagged separately.

No determinant noncancellation assumption, isolating weight advice, or randomized choice is used. The general-graph deterministic NC search problem remains outside this result.

## Earlier contributions and limits

The earlier attempt analyzes general quasi-NC isolation results, conditional weight lists and determinant cancellations. This independent parity construction supplies an explicit logspace-uniform search family on forests, with output verification and a fully accounted circuit construction.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30006800/verify.py). Source SHA-256: `7c18b3a39790b69c4e80d75ad9efc26deae95b96b997c986c5338cc43f8f7f7d`. The source is byte-identical to the reviewed and executed program.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006800.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30006800/verify.py (Used: exact previously reviewed program; SHA-256 7c18b3a39790b69c4e80d75ad9efc26deae95b96b997c986c5338cc43f8f7f7d).
