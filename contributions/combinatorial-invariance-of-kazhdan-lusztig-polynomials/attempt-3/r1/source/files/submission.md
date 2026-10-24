# Combinatorial invariance for all lower Bruhat intervals

Claim type: Literature report

Exact scope: If the directed reflection graphs [e,v] and [e′,v′] of two arbitrary Coxeter systems are isomorphic, then their Kazhdan–Lusztig polynomials agree; indeed the induced poset isomorphism identifies all R- and P-polynomials within those lower intervals.

The deep input is Brenti–Caselli–Marietti’s special-matching recurrence [1, Theorem 7.8]. A special matching M of a lower interval is an involution pairing every vertex with a cover, and satisfying M(x)≤M(y) whenever x is covered by y and M(x)≠y. Its definition uses only the interval order. The theorem states that for M(v)<v,
\[
 R_{u,v}=\begin{cases}
 R_{M(u),M(v)},&M(u)<u,\\
 qR_{M(u),M(v)}+(q-1)R_{u,M(v)},&M(u)>u.
 \end{cases}\tag{1}
\]
As usual R is zero on an incomparable pair and R_{x,x}=1. The primary theorem applies to every Coxeter system, not just finite or crystallographic ones; its proof of this arbitrary-special-matching recurrence is not reproduced here.

We give the deduction explicitly. Directed reflection graphs determine Bruhat order by reachability, since they contain every cover and all their edges respect order. A graph isomorphism is therefore a ranked-poset isomorphism φ. For any lower subinterval [e,y], a simple left or right descent of y gives a multiplication special matching. Transport it by φ. It remains a special matching on [e′,φ(y)], even when it is not an ambient multiplication matching there. Formula (1) applies on both sides. Induction on the rank of the upper endpoint gives identical R_{x,y} for every x≤y: all right-hand upper endpoints have strictly smaller rank, and comparisons and the upward/downward cases are preserved. Rank zero starts the induction.

The standard bar relation then recovers P from these R-data:
\[
 q^{d}P_{x,y}(q^{-1})=\sum_{x\le z\le y}R_{x,z}(q)P_{z,y}(q),
 \qquad d=\ell(y)-\ell(x).
\]
Induct on d, using the known polynomials for proper subintervals, P_{y,y}=1, and deg P_{x,y}≤(d−1)/2. Uniqueness follows because the difference H of two possible answers would satisfy q^dH(q^{-1})=H(q); the supports of the two sides lie respectively strictly above and strictly below d/2, forcing H=0. Thus all P-data agree, and in particular P_{e,v}=P_{e′,v′}, exactly the selected graph-invariance claim on this whole family.

The lower-endpoint hypothesis is essential to the proof: it supplies multiplication special matchings and every lower subinterval required by the recurrence. An arbitrary interval [u,v] is not supplied with the missing elements below u, and this argument does not prove invariance for such intervals merely by renaming u as an identity.

Relation to earlier contributions. One earlier text announces an unverified general theorem; the exploratory text proves an explicit graph formula only through length three. This report uses the published lower-interval theorem to cover unbounded lengths in every Coxeter system, and gives the precise passage from the literal directed graph to the poset recurrence.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- [1] Francesco Brenti, Fabrizio Caselli and Mario Marietti, Special matchings and Kazhdan–Lusztig polynomials, Advances in Mathematics 202 (2006), 555–601, DOI 10.1016/j.aim.2005.01.011. Author PDF Theorem 7.8 (p.22), Section 8 and Corollary 8.4; no positivity hypothesis is needed for the R-recurrence used here. https://www.dm.unibo.it/~caselli/special.pdf
- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_6918a13d435f4e8e9e95740ed8938dd7.txt


## Reproducibility and review

Source-only: literal prompt, prior full texts and stated references checked; written deduction audited by author, without formal or human verification.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

[1] Francesco Brenti, Fabrizio Caselli and Mario Marietti, Special matchings and Kazhdan–Lusztig polynomials, Advances in Mathematics 202 (2006), 555–601, DOI 10.1016/j.aim.2005.01.011. Author PDF Theorem 7.8 (p.22), Section 8 and Corollary 8.4; no positivity hypothesis is needed for the R-recurrence used here. https://www.dm.unibo.it/~caselli/special.pdf
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_6918a13d435f4e8e9e95740ed8938dd7.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
