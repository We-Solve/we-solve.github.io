# A linear stack algorithm for strictly monotone polygons

**Problem:** prb_b36e986c5f9941ac8b72a1adaad207c2

**Claim type:** Partial result

**Exact scope:** Gives deterministic O(n) real-arithmetic triangulation for simple y-monotone polygons in boundary order, with distinct vertex heights and no three collinear. Does not supply the requested simple deterministic algorithm for arbitrary polygons or solve its bundled shortest-path question.

Restrict the input to a simple $y$-monotone polygon: every horizontal line meets it in an interval or the empty set. Assume distinct vertex heights and no three collinear. The boundary splits into left and right chains from the highest to lowest vertex, each decreasing strictly in $y$. Find those two extrema and chains in $O(n)$ time, and merge their already sorted vertex sequences in $O(n)$ time. No comparison sort is needed. Orient the boundary counterclockwise, so its forward top-to-bottom chain is the left chain.

Process the merged order $v_1,\ldots,v_n$, storing an active chain on a stack. Initially push $v_1,v_2$. At each intermediate vertex $v_j$, $3\le j<n$:

* If $v_j$ lies on the opposite boundary chain from the stack top, connect it to the stack vertices in sequence, outputting the triangles formed with consecutive stack vertices until one stack vertex remains. Reset the stack to $v_{j-1},v_j$.
* If it lies on the same chain, pop the top vertex $u$. While the stack is nonempty and the triangle $(v_j,u,w)$ with next stack vertex $w$ lies on the interior side of that chain, output it and pop $w$, replacing $u$ by $w$. The exact test is $\mathrm{orient}(v_j,u,w)<0$ on the left chain and $>0$ on the right chain. Push the last $u$ and then $v_j$.

At the bottom vertex $v_n$, output the fan to all consecutive stack vertices. Each output triangle contains only input vertices.

For completeness, the geometric invariant is the following. Above the current sweep level, triangles already output have disjoint interiors and their complement in the processed portion is bounded by the active stack chain and the next unprocessed opposite chain edge; the stack chain bends away from its untriangulated side. On a same-chain step, the strict orientation test identifies precisely the terminal visible diagonals: successive vertices popped are convex ears of this remaining portion. Their triangles lie inside it and peel off disjoint interiors. The first failed test is a reflex bend, so the chain beyond it is not visible through the remaining polygon and must stay active. On an opposite-chain step, monotonicity places the new vertex opposite the entire active chain, and its joining segments remain inside the remaining portion; the fan removes all but the most recent sweep edge. These statements also establish the initial two-vertex invariant. At the bottom there is no unprocessed opposite boundary, and the final fan exhausts the remaining portion. Induction proves coverage, nonoverlap and use of internal diagonals. A triangulation of an n-gon then has $n-2$ triangles, either by Euler's formula or by counting one triangle for each ear removed.

Initially there are two pushes, and each outer iteration performs at most two pushes, regardless of whether a particular vertex remains active and is pushed again. The total number of pops cannot exceed the total number of pushes. Failed orientation tests cost at most one per iteration. Thus total stack operations, orientation tests and output size are $O(n)$, with $O(n)$ storage. In the stated geometric model each fixed-size orientation costs one operation. On rational coordinates, the same tests are exact determinant computations with polynomial coordinate bit cost; the linear operation count is not a linear bit-time claim.

**Verification and scope.** The checker implements this stack algorithm and tests an exhaustive finite family of two-chain nonconvex inputs in exact integer arithmetic, rejecting degenerate samples. It checks triangle counts, area sums, internal triangle centroids and noncrossing diagonals. The general proof, not those finite tests, gives the full monotone subclass. The prior attempt treats convex fans and a failed ear-scan complexity argument; a monotone stack mechanism is additional content. Partitioning an arbitrary polygon into monotone parts is not silently included in the $O(n)$ claim.


## Reproducibility and review

Exact integer stack triangulations of an exhaustive fixed finite family of strictly y-monotone polygons, with area/topology checks; no general-polygon claim.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_b36e986c5f9941ac8b72a1adaad207c2.txt
https://topp.openproblem.net/p10
https://collaborate.princeton.edu/en/publications/triangulating-a-simple-polygon/
Exact source versions, statements and uses are described in report.md and source_notes.md.
