# Exact curve-graph distances in polynomial bit time for each fixed punctured surface

**Problem:** prb_dcb1db78bfab4324aabc4727dd74e44c

**Claim type:** Literature report

**Exact scope:** For each fixed orientable punctured surface S of complexity≥2, Bell–Webb’s Algorithm4 computes an exact curve-graph geodesic and distance in polynomial time in binary normal-coordinate input length; no uniform polynomial dependence on variable surface complexity or disk-set algorithm is claimed.

## The fixed-surface theorem

Fix an orientable punctured surface $S=S_{g,p}$ with $p\ge1$ and $3g-3+p\ge2$, and fix an ideal triangulation $\mathcal T$. Bell and Webb’s Theorem1.3 gives a polynomial-time algorithm taking two essential simple curve classes and returning a tight geodesic between them in $\mathcal C(S)$. Counting its edges gives the exact distance in part(a) of the prompt.

The result is exact, rather than an additive or multiplicative coarse approximation. Its polynomial constants may depend on $S$. That limitation is retained because the literal prompt asks additionally for uniform control when the triangulated surface is part of the input.

## Charge the encoded curve complexity

Encode a curve by its nonnegative integer intersection coordinates with the fixed ideal triangulation, written in binary. The relevant length is the sum of their bit lengths, including constant overhead for zero coordinates. On a fixed surface the number of triangulation edges is fixed, and this length is coarsely equivalent to the logarithm of total intersection with the triangulation, as described in §1.2 of the source.

This matters because an elementary-looking curve can have exponentially large normal coordinates relative to another description. An algorithm polynomial in the numerical intersection count would only be pseudopolynomial in the binary input length. The cited theorem is polynomial in the actual encoded complexity; the report does not replace its input-size convention by a unit-cost assumption for arbitrarily large integers.

The output geodesic has a polynomially bounded encoded description in that same regime. Returning a finite path and its length is therefore a genuine terminating exact algorithm, not an oracle that searches forever on negative instances.

## Why local infinitude does not defeat this algorithm

The curve graph is locally infinite. Even a prior bound on the distance does not make naïve breadth-first search finite, since a single vertex has infinitely many disjoint essential curve neighbors. Bell–Webb avoid this by constructing a finite quasiconvex collection containing the inputs and assembling bounded-length tight paths between appropriate vertices. Their theorem shows that the resulting finite collection contains a geodesic. Ordinary finite-graph pathfinding then recovers an exact answer.

The substantial ingredients include the bounded geodesic image and tight-geodesic machinery and quantitative train-track arguments. They are credited as part of the source’s proof, not independently rebuilt here. Quasiconvexity by itself, without an effective finite construction and control of candidate paths, would not be an algorithm.

## Keep the other quantifiers separate

This fixed-surface statement does not establish that the same degree and constant work as $g,p$ vary. In particular, the potentially expensive bounded tight-path stage has constants depending on surface complexity. A uniform runtime assertion would need to expose and bound that dependence in the total input length.

Nor does the theorem solve distances between arbitrary effectively described infinite quasiconvex subsets. A finite algorithm for two vertices cannot simply enumerate an entire disk set or certify that no closer pair of disk boundaries exists. The Heegaard disk-set case in part(b), and the analogous arc-graph question, remain outside this report. The present contribution is the named fixed-punctured-surface regime of exact vertex distances, with the correct binary encoding and a precise explanation of where it falls short of the uniform and infinite-set targets.

## Checked references

- Mark C. Bell and Richard C. H. Webb, Polynomial-time algorithms for the curve graph, arXiv:1609.09392v2, Theorem1.3, Algorithm4 and §1.1–1.2: https://arxiv.org/pdf/1609.09392


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no earlier contributions listed; primary theorem and hypotheses checked by browsing; displayed deduction checked algebraically. No program or formal verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Mark C. Bell and Richard C. H. Webb, Polynomial-time algorithms for the curve graph, arXiv:1609.09392v2, Theorem1.3, Algorithm4 and §1.1–1.2: https://arxiv.org/pdf/1609.09392
Exact source versions, statements and uses are described in report.md and source_notes.md.
