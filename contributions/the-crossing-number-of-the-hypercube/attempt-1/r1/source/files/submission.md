# An explicit positive lower scale for hypercube crossings

Problem: TOP-3320

Claim type: Literature report.

Exact scope: Using Pach–Shahrokhi–Szegedy’s credited bisection inequality, prove cr(Q_d)≥4^d/256−d²2^d/16 and hence liminf cr(Q_d)/4^d≥1/256; no claim of the proposed5/32 limit.

## A checked crossing-number input

Pach–Shahrokhi–Szegedy, Applications of the Crossing Number, Theorem2.1, bounds the bisection width b(G) by1.58sqrt(16cr(G)+Σ_vdeg(v)²). Their bisection uses two sides each of size between one third and two thirds of the order. We use only the weaker coefficient2, which avoids any rounding of the numerical constant. This separator/crossing theorem is credited rather than reproved.

## Isoperimetry from an elementary induction

For every S⊆V(Q_d) of size s, the number e(S) of internal edges is at most(s log2 s)/2, with0log0=0. Split by the last coordinate into sizes a,b. Induction gives internal counts at most(a log2 a+b log2 b)/2, while at most min(a,b) edges cross between the halves. Put x=min(a,b)/(a+b). The binary entropy h(x) satisfies h(x)≥2x on[0,1/2]: it is concave and agrees with2x at both endpoints. Therefore

a log2 a+b log2 b+2min(a,b)≤(a+b)log2(a+b),

proving the induction, including an empty half by continuity. Since every cube vertex has degree d, the boundary of S has size ds−2e(S)≥s log2(2^d/s).

Let N=2^d. In any of the balanced cuts used by the source, take the smaller side, whose size is between N/3 and N/2. For x=s/N the function x log2(1/x) is concave, so its minimum on[1/3,1/2] is at an endpoint. At1/2 its value is1/2, and at1/3 it is log2(3)/3>1/2 because9>8. Thus every such cut has at least N/2 crossing edges and b(Q_d)≥N/2. This checks the one-third convention instead of silently substituting an exact-half definition.

## The crossing lower bound

The source inequality, weakened as stated, gives

N/2≤2sqrt(16cr(Q_d)+d²N).

Squaring and rearranging yields cr(Q_d)≥N²/256−d²N/16. Division by4^d=N² gives the displayed liminf, since d²/2^d→0. Negative finite lower values are harmless lower bounds; they are not asserted positive in every dimension.

The conclusion proves a uniform positive asymptotic4^d scale. It does not give a matching upper constant, prove existence of a limit, or identify the proposed5/32 value. The independent work here is the complete hypercube isoperimetric and convention transfer; the crossing/bisection theorem is an explicit external input.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3320.txt
- https://www.renyi.hu/~pach/publications/mario.pdf
- https://doi.org/10.1007/BF02086610
- https://www.openproblemgarden.org/op/the_crossing_number_of_the_hypercube


## Reproducibility and review

Proof/source review only; no code attached at authoring time. Exact hypotheses and boundary cases are addressed in report.md; external theorem proofs are credited rather than claimed independently verified.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3320.txt
https://www.renyi.hu/~pach/publications/mario.pdf
https://doi.org/10.1007/BF02086610
https://www.openproblemgarden.org/op/the_crossing_number_of_the_hypercube
Exact source versions, statements and uses are described in report.md and source_notes.md.
