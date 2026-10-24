# ICP for rooted arborescences on bidirected cactus graphs

Problem: TOP-30001933

Claim type: Partial result

Exact scope: For every connected undirected cactus, replace every edge by both directed arcs. Its outward arborescence polytope at any root has ICP for every integer dilation.

A cactus is a finite connected simple graph in which every edge lies on at most one simple cycle. Its blocks are bridges and cycles, meeting at articulation vertices. Fix any root r and replace every undirected edge by both arcs. Every undirected spanning tree has a unique orientation away from r. Conversely an outward arborescence cannot use both directions of one edge and its underlying edges are a spanning tree. In a cactus, a spanning tree retains all bridges and deletes exactly one edge from each cycle. Choices on distinct cycles are independent.

For a cycle label its vertices 0,1,...,l-1 cyclically, where 0 is the articulation vertex nearest r in the block tree (or r itself). Write e_i for edge {i,i+1 mod l}. If e_j is deleted, edges e_i with i<j are oriented clockwise and those with i>j counterclockwise; e_j has neither arc. Thus with p_j the probability of deleting e_j, the clockwise arc marginal on e_i equals
\[
 c_i=\sum_{j>i}p_j.
\]
The affine inverse is p_0=1-c_0, p_j=c_{j-1}-c_j for 1<=j<=l-1, with c_{l-1}=0. In particular distinct deletion choices are affinely independent, and this simplex map has an integer affine inverse on its image. Bridge arcs are fixed. Consequently the full polytope is an affine image of the product of these cycle-choice simplices, with an integer affine inverse. This statement follows directly by independently sampling deletion choices, so no integrality theorem for general arborescence systems is needed.

If w is integral in kP, applying the inverse formulas at scale k yields nonnegative integers a_{C,j} summing to k in each cycle C: a_{C,0}=k-w(c_0) and a_{C,j}=w(c_{j-1})-w(c_j). Form all cumulative sums within all cycles; sort their distinct values together with 0,k as 0=t_0<...<t_h=k. On each interval (t_{s-1},t_s] choose the unique deletion option whose cumulative interval contains it, in every cycle. Let T_s be the resulting oriented spanning tree, with multiplicity n_s=t_s-t_{s-1}. Then n_s are positive integers, sum n_s=k, and all deletion marginals reconstruct; therefore w=sum n_s 1_{T_s}.

For affine independence, consider any internal breakpoint t_s. It is a cumulative sum in at least one cycle. The affine functional summing the corresponding initial deletion coordinates is one on T_1,...,T_s and zero on all later trees. The integer-affine inverse above makes this an affine functional of the arc coordinates themselves. In an affine relation sum alpha_s 1_{T_s}=0, sum alpha_s=0, applying each such functional forces all initial coefficient sums to vanish. Consecutive differences give every alpha_s=0. This verifies the stronger ICP requirement explicitly.

If there are no cycles, P is a singleton and the result holds with one coefficient k; a one-vertex graph is included. Cycles may have any length and be attached in any finite cactus pattern. Directed cycles are present, so this is not an acyclic-digraph theorem. Arbitrary directed graphs, missing reverse arcs, and graphs with overlapping cycles remain outside the scope.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Executed check_exact.py with assertions enabled: PASS 400 weighted bidirected-cactus dilate decompositions; physical rooted-tree reconstruction and exact affine-rank oracle. python -O was separately executed and refused. These are finite exact checks only.


## Reproducibility and review

Executed check_exact.py with assertions enabled: PASS 400 weighted bidirected-cactus dilate decompositions; physical rooted-tree reconstruction and exact affine-rank oracle. python -O was separately executed and refused. These are finite exact checks only.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: check_exact.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30001933/check_exact.py). Source SHA-256: `330f996d5dd4ed1c6a35d3d112c180222762c0755613e2386920b04399f44511`. The source is byte-identical to the reviewed and executed program.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30001933.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30001933/check_exact.py (Used: exact previously reviewed program; SHA-256 330f996d5dd4ed1c6a35d3d112c180222762c0755613e2386920b04399f44511).
