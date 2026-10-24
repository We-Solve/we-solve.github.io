# Rational circular mixing threshold for every forest

Problem: TOP-3240

Claim type: Partial result.

Exact scope: Every finite forest with at least one edge is(p,q)-mixing whenever p>2q, is not(2q,q)-mixing, and therefore has circular mixing threshold exactly2 under the prompt’s all-ratios infimum definition.

## A restricted-move graph

It is enough to prove connectivity using only moves that change one color by±1 modulo p, since the prompt permits arbitrary valid single-vertex jumps and therefore includes these moves. For a parent color a, the permitted colors of its leaf neighbor form the cyclic interval

A(a)={a+q,a+q+1,...,a+p−q} modulo p.

When p>2q this interval has p−2q+1≥2 elements. Its consecutive-color graph is connected. Moreover A(a) and A(a+1) overlap, as do A(a) and A(a−1).

## Induction on a tree

For a singleton tree the restricted recoloring graph is the connected palette cycle, and every color is a valid coloring. Suppose the result holds for T−v where v is a leaf adjacent to u. Any coloring of T−v lifts to T, since A(c(u)) is nonempty. All lifts of one base coloring are connected: change v stepwise within the interval A(c(u)).

Consider one restricted base move, changing c(u) by±1; if another vertex changes, the leaf can simply keep its color. If u changes, first move the leaf within A(old color) to a common element of A(old color)∩A(new color), which exists by the interval overlap. Change u, then adjust the leaf within its new interval as needed. Thus every base edge can be lifted between connected fibers. To connect two arbitrary colorings of T, use a base path between their restrictions, lift its steps, and finally move the leaf within the final fiber. This proves connectedness by induction and also proves nonemptiness at every step.

Different tree components can be recolored successively, so their Cartesian-product reconfiguration graph is connected. Isolated vertices can take any color and are harmless.

## Ratio two and the infimum

At p=2q, the only permitted color difference on an edge is q. With a neighbor held fixed, an endpoint has exactly one legal color, so no endpoint of an edge can ever change. There are at least two valid global colorings obtained, for example, by rotating all colors by one, and their values on any edge endpoint differ. They belong to different reconfiguration components. Hence every forest containing an edge is not(2q,q)-mixing.

Nevertheless for every rational r>2 all pairs with p/q≥r satisfy p>2q and mix by the proof above. The infimum in the prompt is therefore2, even though mixing fails at ratio2 itself. This treats every integer palette pair, not just reduced fractions. General graphs with cycles are outside the leaf induction.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Executed verify.py on every labeled forest of orders1..4 for palettes(3,1),(4,1),(5,2),(6,2),(7,3):240 instances and36,290 valid colorings. BFS using only±1 color steps is connected. Another132 ratio-two instances are nonmixing even with arbitrary single-vertex jumps. Standard-library exact arithmetic only; verification_stdout.txt and verification.json preserve the run. Python -O is rejected; optimization_guard.txt records that rejection. The bounded checks supplement the proof and do not extend its scope.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3240.txt


## Reproducibility and review

Executed verify.py on every labeled forest of orders1..4 for palettes(3,1),(4,1),(5,2),(6,2),(7,3):240 instances and36,290 valid colorings. BFS using only±1 color steps is connected. Another132 ratio-two instances are nonmixing even with arbitrary single-vertex jumps. All assertions enabled; a separate python -O run was rejected as required. Source and infinite-proof limitations are stated in report.md.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3240.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
