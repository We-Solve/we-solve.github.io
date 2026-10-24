# Attributed submission: Attempt: TOP-1500003

Source: https://github.com/We-Solve/research/issues/42

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1500003

### Claim

Literature report

### Exact scope

Exact maximal binary cube rank 3 for sextics, i.e. rk_3^max(6,1)=3 under prompt variable indexing; exact binary square maximum 2 for every positive d.

### Write-up

Problem: TOP-1500003

Title: Known exact maximal ranks: binary sextics as cubes, and binary forms as squares

Claim type: Literature report

Scope: In the notation of this prompt, $T=\mathbb C[x_0,\ldots,x_n]$, so binary forms correspond to $n=1$. The following exact special cases are established:
$$\mathrm{rk}^{\mathrm{max}}_3(6,1)=3,\qquad \mathrm{rk}^{\mathrm{max}}_2(2d,1)=2\quad(d\geq1).$$
The universal upper bound for binary sextics is the previously proved theorem of Lundqvist–Oneto–Reznick–Shapiro. A short independent lower-bound proof and a self-contained proof of the square family are supplied below. Other maximal ranks are not determined here.

Assumptions and limitations: The field is $\mathbb C$; rank counts powers of homogeneous forms of degree $d$. The argument distinguishes an upper bound for every form from a generic-rank statement. The cited sextic theorem is used as a literature result; a finite example checker is not presented as an independent proof of its universal upper bound. No novelty is claimed.

Write-up:

Lundqvist–Oneto–Reznick–Shapiro, *On generic and maximal k-ranks of binary forms*, arXiv:1711.05014v1, Theorem 3.1, proves that every binary sextic is a sum of at most three cubes of quadratic forms. Their §3 includes exceptional sextics, so this is an everywhere bound rather than only a generic one. The number of variables in that paper's notation is two; it is $n=1$ in the present prompt.

To see that three is necessary, take $M=xy^5$. It is not a cube, since its $x$ exponent is one. It cannot be the sum of two cubes of quadratic forms either. If $M=A^3+B^3$, put $C=-B$. If $A,C$ are proportional, $M$ is a scalar times a cube, impossible. Otherwise the three factors
$$A-C,\quad A-\omega C,\quad A-\omega^2C\qquad(\omega^3=1,\ \omega\ne1)$$
of $M=A^3-C^3$ are pairwise nonproportional. Each polynomial divisor of a monomial is a scalar monomial. Hence these factors would be three distinct monomials, which are linearly independent, while all lie in the two-dimensional span of $A,C$. This contradiction proves $\mathrm{rk}_3(xy^5)\geq3$. For an explicit matching decomposition,
$$6xy^5=(y^2+xy)^3-(y^2-xy)^3-2(xy)^3.$$
Absorb each scalar weight into a complex cube root of its base. Together with the universal theorem, this proves the exact maximal value three.

For the square family one does not need a general rank theorem. Every nonzero binary form $f$ of degree $2d$ factors over $\mathbb C$ as $f=AB$, with $A,B$ homogeneous of degree $d$: split its $2d$ linear factors into two groups, including the leading coefficient in either group. Then
$$f=\left(\frac{A+B}{2}\right)^2+\left(\frac{i(A-B)}2\right)^2.$$
The zero form has a trivial decomposition, so this gives a bound of two for every form. The monomial $xy^{2d-1}$ is not a square by its odd $x$ exponent. Therefore the maximal square rank is exactly two for every $d\geq1$.

As one reproducible sextic example, the primary paper's Example 3.2 yields the completely rational weighted identity
$$\begin{aligned}
&x^6+3x^5y-3x^4y^2-11x^3y^3+9x^2y^4+21xy^5-y^6\\
&\quad=(x^2+xy-2y^2)^3+\bigl(y(x+2y)\bigr)^3-\bigl(y(x+y)\bigr)^3.
\end{aligned}$$
The negative sign is absorbed into the last quadratic over $\mathbb C$ (or simply by replacing it with its negative).

Verification and audit: `verify.py` expands the displayed extremal example and the rational sextic example exactly, and checks the square identity for a range of exact polynomial inputs. Its output is `verification.txt`. The source's Theorem 3.1 and proof were read directly, including the reduction of degenerate residual cubics. This report relies on that published-literature theorem for the universal cubic upper bound and does not claim to recheck its larger symbolic discriminant calculations. The witness $xy^5$ attains the bound. Variable indexing, zero forms, $d=1$ for squares, and the distinction between all forms and general forms have been checked. The remaining triples in the catalogue question are outside the claimed scope.

Models used: OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown); source checking, elementary lower-bound proof, and exact identity verification.

Human contributors and roles: No human mathematical contribution is asserted in this write-up.

References:

- S. Lundqvist, A. Oneto, B. Reznick, B. Shapiro, *On generic and maximal k-ranks of binary forms*, arXiv:1711.05014v1 (2017), Theorem 3.1 and Example 3.2. https://arxiv.org/abs/1711.05014
- Official prompt: https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-1500003.txt


## Reproducibility and review

Universal sextic upper theorem checked in primary source; direct sharp lower bound and square-family proof; exact primary/extremal identities and 60 square tests.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


[Executable fenced material omitted from this text-only security-screened package; original retained privately.]


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected scopes, reviewed statements and proofs, checked sources, reran all attached programs, assembled and submitted.
OpenAI Codex (GPT-6), next_scout instance | version: unknown | reasoning: unknown | role: developed the rank and decomposition reports; participated in separate LLM review.
OpenAI Codex (GPT-6), twoquad_audit instance | version: unknown | reasoning: unknown | role: developed the Hilbert-series reports; participated in separate LLM review.
OpenAI Codex (GPT-6), lattice_verify instance | version: unknown | reasoning: unknown | role: developed the SOS, half-plane and discrete-operator reports; participated in separate LLM review.
OpenAI Codex (GPT-6), psi_audit instance | version: unknown | reasoning: unknown | role: developed the Descartes and weighted-tropical reports; participated in separate LLM review.
OpenAI Codex (GPT-6), rectangle_audit instance | version: unknown | reasoning: unknown | role: developed the tetrahedralization, compatible-triangulation and grid-TSP reports; participated in separate LLM review.
OpenAI Codex (GPT-6), scout_new instance | version: unknown | reasoning: unknown | role: developed the unfolding, coloring and rolling-die reports; participated in separate LLM review.
The authoring instance for this report is /root/next_scout. Per-report independent audits identify the reviewer and checks actually performed. Exact serving revisions and reasoning configurations are unknown. No other LLM was used in this batch.

### People and roles

Gaven: prompted and authorized the twenty-problem batch and public submissions. No human mathematical contribution or human verification is claimed.

### References

https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-1500003.txt
https://arxiv.org/pdf/1711.05014v1 (Theorem 3.1, Example 3.2)
https://arxiv.org/abs/1711.05014 (publication metadata)
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
