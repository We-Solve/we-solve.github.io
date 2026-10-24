# Attributed submission: Attempt: TOP-5500016

Source: https://github.com/We-Solve/research/issues/184

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-5500016

### Claim

Partial result

### Exact scope

Gives an exact algorithm taking O(k! binomial(h+k−1,k) n²) orientation/combinatorial work for h hull vertices and k=n−h interior points, hence polynomial for each fixed k; gives poly(P)=1 for k=0 and poly(P)=h for k=1. This is an XP bound, not FPT or a general polynomial algorithm.

### Write-up

# Exact polygonalization counting with a fixed number of interior points

**Problem:** TOP-5500016

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


[Executable fenced material omitted from this text-only security-screened package; original retained privately.]


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)
OpenAI, GPT-6.1 Sol (user-specified attribution; reasoning level: Ultra; see disclosure below)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected and checked scopes, read final reports, checked sources, freshly ran all attached programs, assembled the prepared submissions.
OpenAI Codex (GPT-6), hundred_algebra instance | version: unknown | reasoning: unknown | role: developed algebra reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_numbers instance | version: unknown | reasoning: unknown | role: developed number-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_graphs instance | version: unknown | reasoning: unknown | role: developed graph-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_algorithms instance | version: unknown | reasoning: unknown | role: developed algorithms/complexity reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_topology instance | version: unknown | reasoning: unknown | role: developed topology reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_geometry instance | version: unknown | reasoning: unknown | role: developed geometry reports and performed separate LLM reviews.
The authoring instance for this report is /root/hundred_geometry. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-5500016.txt
https://topp.openproblem.net/p16
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
