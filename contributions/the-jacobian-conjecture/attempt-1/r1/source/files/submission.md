# An explicit three-variable counterexample, with two exact certificates

Problem: prb_e9ee425b71d9493e9d5cd71078144b21. Claim type: Literature report.

The historical universal statement in the official prompt is false. Gao's 2026 preprint, Theorem 3.3 and its expanded example on printed pages 6–7, supplies the following polynomial map. This report credits that source; its contribution is a fully reproducible exact verification of this particular certificate.

Put $u=1+xy$ and define $F:\mathbb C^3\to\mathbb C^3$ by
$$
\begin{aligned}
F_1&=u^3z+y^2u(4+3xy),\\
F_2&=y+3xu^2z+3xy^2(4+3xy),\\
F_3&=2x-3x^2y-x^3z.
\end{aligned}
$$
All three coordinates lie in $\mathbb Z[x,y,z]$. There are no variable denominators. Direct polynomial differentiation and expansion give the identity
$$\det J_F=-2.$$
On the other hand, the three distinct rational points
$$
a=(0,0,-1/4),\qquad b=(1,-3/2,13/2),\qquad
c=(-1,3/2,13/2)
$$
satisfy
$$F(a)=F(b)=F(c)=(-1/4,0,0).$$
Consequently $F$ is not injective. A two-sided inverse, polynomial or otherwise, would imply injectivity, so $F$ has no polynomial two-sided inverse. This meets both hypotheses and negates the conclusion of the exact official implication, already in dimension three. For every $n>3$, the map $(F_1,F_2,F_3,x_4,\ldots,x_n)$ has the same determinant and the same collision after appending zero coordinates. No assertion about the unresolved-by-this-certificate dimension-two case is needed.

The files make the displayed identities reviewable without relying on a numerical experiment. `verify.py` uses only Python's standard library and exact rational arithmetic. It constructs sparse polynomials, differentiates each coordinate, expands all six determinant terms and compares coefficients with the constant $-2$. It also evaluates all three points exactly. `verification.json` records every expanded coordinate coefficient, the determinant, and the collision data for independent replay.

A second agent independently wrote `independent_verify.py`, using automatic differentiation and rational Gaussian elimination. Its tensor grid has $9\cdot8\cdot3=216$ points. The determinant's separate degree bounds are at most $(8,7,2)$: summing the separate degrees of the three coordinates gives $(9,8,3)$, and each determinant product differentiates once in each variable. Thus agreement on this grid proves the polynomial identity by repeated univariate interpolation. The collision points were independently transcribed from the primary source. Both exact checkers pass; the second output is `independent_verification.json`.

This is a literature report about a checked explicit example, not a claim to have originated Gao's construction or to have reviewed every argument in the preprint. The preprint credits Levent Alpöge for the underlying counterexample construction; that original announcement was not independently consulted. The explicit certificate above is sufficient for the recorded universal statement.

Reference: Shuhong Gao, *Counterexamples to the Jacobian Conjecture in Dimensions Greater Than Two*, [arXiv:2608.00222v1](https://arxiv.org/pdf/2608.00222v1), Theorem 3.3 and printed pp. 6–7, checked 18 October 2026.

Models and roles: OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown), authored the source audit, exposition and sparse-polynomial checker. A second OpenAI Codex GPT-6 agent independently checked the source and wrote the interpolation checker. No human mathematical review was performed.


## Reproducibility and review

Sparse rational coefficient determinant expansion and exact three-point collision PASS; independently authored automatic-differentiation/Gaussian-elimination checker proves determinant identity on a 216-point tensor grid using degree bound (8,7,2).
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: independent_verify.py


*Code is not included in this manuscript.*

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://arxiv.org/pdf/2608.00222v1
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
