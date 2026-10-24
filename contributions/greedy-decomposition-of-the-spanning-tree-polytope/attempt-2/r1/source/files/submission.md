# Greedy Decomposition of the Spanning-Tree Polytope

Claim type: **Partial result**.

Exact scope: Under the usual greedy range 0≤λ≤k, every scaled integral point of the spanning-tree polytope of K_{2,t}, t≥2, admits positive integral greedy subtraction; a polynomial-time decomposition uses at most 5t+1 steps.

## Polytope of a graph with overlapping cycles

Write the two edges incident with the ith degree-two vertex as a_i,b_i. A spanning tree chooses both edges in exactly one group j and exactly one edge in each other group: at least one is necessary to connect each vertex, and one double group is necessary and sufficient to connect the two high-degree vertices. The base polytope P is exactly

0≤x_e≤1,   x_{a_i}+x_{b_i}≥1,   Σ_e x_e=t+1.                 (1)

To justify sufficiency, put y=1−x. Its groups satisfy y_{a_i},y_{b_i}≥0, y_{a_i}+y_{b_i}≤1 and Σy=t−1. Every vertex is integral. If a group contains two fractional coordinates, opposite perturbations in that group preserve its sum. Otherwise each fractional group has one fractional coordinate and a slack capacity; integral total sum forces at least two such groups, allowing opposite small perturbations across them. Either perturbation contradicts extremality. The integral vertices omit one edge in t−1 groups and none in one group, exactly the spanning trees. Since the bounded polytope is the convex hull of its vertices, (1) follows.

## Integral maximal subtraction

Let w∈kP be integral, k≥1 integral, and z_i=w_{a_i}+w_{b_i}−k. Then z_i≥0 and Σ_i z_i=k. Pick j with z_j>0 as connector. In each other group choose an edge with weight k if there is one, and otherwise any edge with positive weight. This is possible since the pair sum is at least k. There cannot be a nonconnector group with both weights k: that would consume all of Σz=k, contrary to z_j>0. Both connector weights are at least z_j>0 because each other coordinate is at most k. Let x be the resulting tree indicator.

For this particular x, the largest λ in [0,k] such that w−λx∈(k−λ)P is

min({k,z_j} ∪ {w_e:x_e=1} ∪ {k−w_e:x_e=0}).             (2)

This follows by substituting (1). Nonnegativity gives λ≤w_e on selected edges; upper bounds give λ≤k−w_e on unselected edges. The connector pair lower bound gives λ≤z_j. Other pair lower bounds and the total sum are invariant. At λ=k these inequalities force zero residual, consistent with 0P={0}. Every quantity in (2) is a positive integer by our choices. Thus the actual maximal greedy λ is a positive integer, not merely some feasible integer step.

Update w,k by this subtraction and repeat unless k=0. Every unfinished step makes a previously positive coordinate w_e or slack k−w_e become zero; the connector slack z_j can also become zero. To avoid relying on counting the latter, note (2)'s z_j bound can be strictly smaller than all coordinate/slack bounds. Count all 2(2t)+t nonnegative quantities instead. Once any of w_e, k−w_e, z_i becomes zero it remains zero under any subsequent feasible subtraction, by the scaled constraints. Hence at most 5t+1 steps suffice. Each step scans O(t) binary integers whose bit lengths never increase, so total bit work is polynomial in t and the binary length of k,w.

The nonnegative scaling interval is essential: if arbitrary negative dilation factors are allowed, the literal unrestricted maximization can be ill posed. This report states its convention explicitly and does not silently repair that ambiguity. For t≥3 these graphs have cycles sharing edges, beyond a cactus-only result.

## Earlier contributions and limits

The earlier attempt supplies the usual greedy-range ambiguity and proves the cactus/direct-product simplex case. K_{2,t} with t≥3 is a different noncactus graphic family; (1), (2), and termination give the added result.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30001934/verify.py). Source SHA-256: `2e4caa5028b86edc662b3ee195cf62f6c97ffbcae81aa07e5a159205cd7ea9dd`. The source is byte-identical to the reviewed and executed program.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30001934.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30001934/verify.py (Used: exact previously reviewed program; SHA-256 2e4caa5028b86edc662b3ee195cf62f6c97ffbcae81aa07e5a159205cd7ea9dd).
