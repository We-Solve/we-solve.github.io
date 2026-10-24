# Exact polygonalization counting with a fixed number of interior points

**Problem:** prb_21f3b1e85f8945cba09dd72321a0eb0b

**Claim type:** Partial result

**Exact scope:** Gives an exact algorithm taking O(k! binomial(h+k−1,k) n²) orientation/combinatorial work for h hull vertices and k=n−h interior points, hence polynomial for each fixed k; gives poly(P)=1 for k=0 and poly(P)=h for k=1. This is an XP bound, not FPT or a general polynomial algorithm.

Assume no three input points are collinear. Compute the convex hull $H=(v_0,\ldots,v_{h-1})$ in counterclockwise order; h≥3. A simple polygonalization visits these hull vertices in their cyclic hull order or its reverse. Here is a topological justification. The polygon lies inside the hull disk. If hull vertices appeared in another cyclic order, some two vertex-disjoint paths of the polygon between hull vertices would have alternating endpoints on the boundary of that disk. Such paths must intersect: join one path to a boundary arc to make a Jordan curve, or move the paths infinitesimally inward before using the Jordan separation theorem. Alternating boundary endpoints lie on opposite sides. The required intersection contradicts polygon simplicity. This order property applies to arbitrary interior detours; it is not an assumption that hull sides are polygon edges.

Fix the counterclockwise direction and root at $v_0$. Every undirected unrooted polygonalization then has exactly one representative in this orientation, because h≥3 and reversal reverses the hull order. The k interior points occur as k labeled entries in h ordered lists, one list in each gap from $v_i$ to $v_{i+1}$ (cyclic indices). Enumerate a permutation of the k points and a weak composition $k=c_0+\cdots+c_{h-1}$. Split the permutation into consecutive lists of these lengths and place them in the h gaps. Every candidate cyclic order with the correct hull order is generated exactly once: its interior order determines the permutation and its gap sizes determine the composition.

There are
\[
 k!\binom{h+k-1}{k}
\]
candidates. Test each for simplicity by checking all pairs of nonadjacent edges. In general position, proper intersection is decided exactly by the two pairs of opposite orientation signs. Nonadjacent edges cannot merely touch at a vertex or overlap, because endpoints are distinct and no three input points are collinear. Adjacent edges meet only at their common endpoint under the same assumption. Accept precisely the noncrossing candidates and count them. This establishes both completeness and absence of double counting.

Hull computation costs $O(n\log n)$, and candidate tests cost $O(n^2)$ operations each. For every fixed k, the displayed candidate count is $O_k(n^k)$, giving a deterministic polynomial algorithm on that subclass. In a rational-coordinate bit model, each orientation is the sign of a fixed-size rational determinant, computable in polynomial input bit time. The count needs at most $O(n\log n)$ bits, since it is bounded by $(n-1)!/2$. The exponent of n depends on k: this is an XP algorithm and is not claimed fixed-parameter tractable.

When k=0, exactly the convex boundary order is possible, so the count is one. When k=1, every gap insertion of the interior point q is simple: replace side $v_iv_{i+1}$ by the two sides of the triangle $v_iqv_{i+1}$. The open triangle lies inside the hull and contains no other hull vertex, and its new sides cannot meet any other hull edge. There are h distinct resulting edge sets. The enumeration gives no further possibilities, so $\mathrm{poly}(P)=h$ for every such input.

**Verification.** The checker runs this gap enumeration and independently enumerates every undirected cyclic order on several general-position samples with k=0,1,2,3 and at most eight total points, checking exact agreement. It includes the h formula for all tested one-interior configurations. The proof supplies every fixed k, while these finite runs catch rooting, reversal and crossing-test errors. No polynomial-in-n assertion is made when k is unrestricted.


## Reproducibility and review

Exact gap enumeration compared with independent all-cyclic-order enumeration for general-position samples through8 points and k up to3.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_21f3b1e85f8945cba09dd72321a0eb0b.txt
https://topp.openproblem.net/p16
Exact source versions, statements and uses are described in report.md and source_notes.md.
