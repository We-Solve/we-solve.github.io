# Attributed submission: Attempt: TOP-2200016

Source: https://github.com/We-Solve/research/issues/73

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-2200016

### Claim

Partial result

### Exact scope

An all-degree implicit necessary-and-sufficient spline positivity reformulation for prescribed polynomial-like derivative-zero arrays; positive polynomial density certificates for rational feasible arrays; rational dual feasibility decidable in principle by real quantifier elimination, without an implemented solver, degree bound, efficient algorithm, or explicit coordinate classification.

### Write-up

# An exact spline obstruction criterion for derivative-zero arrays

**Problem:** TOP-2200016. **Claim type:** Partial result.

**Scope.** For every degree, this contribution gives an explicit necessary and sufficient dual criterion using a finite-dimensional space of piecewise polynomials. It also proves that every realizable rational array admits a rational polynomial certificate on the compact hull of its bottom row. This is an implicit feasibility characterization; it does not give a bounded list of coordinate inequalities, a certificate degree bound, or an efficient classification algorithm. The cubic example below supplies a fully explicit obstruction. No priority or novelty is claimed.

The prescribed array and the open interval $I$ have exactly the meaning in the official prompt. In particular, coincidences between nonadjacent levels are permitted. Normalize the desired function by $f^{(n)}>0$. The case $n=1$ is immediate, so assume $n\geq2$.

## Explicit kernels

Write the bottom row as $a_1<\cdots<a_n$, put $J=[L,R]=[a_1,a_n]$, and let
$$
\ell_r(x)=\prod_{s\ne r}\frac{x-a_s}{a_r-a_s}
$$
be its Lagrange basis. For each specified zero $b=x_j^{(i)}$, where $1\leq i<n$, define
$$
K_{i,j}(t)=\frac{(b-t)_+^{n-1-i}}{(n-1-i)!}
-\sum_{r=1}^n\ell_r^{(i)}(b)\frac{(a_r-t)_+^{n-1}}{(n-1)!}.
\tag{1}
$$
Here $(u)_+^0$ means the indicator of $u>0$. Values at knots are immaterial for integration. On each open interval between consecutive distinct array entries, every $K_{i,j}$ is an explicitly known polynomial of degree at most $n-1$.

**Criterion.** The array is realizable if and only if the following condition holds:

> Every real linear combination $q=\sum_{i,j}\lambda_{i,j}K_{i,j}$ which is nonnegative on every open knot interval is identically zero on every such interval.

Thus the obstruction is a nonnegative piecewise polynomial in the span of the kernels which is not zero almost everywhere. A nonzero coefficient vector giving the zero function is not an obstruction.

## Proof of the criterion

For a smooth function $w>0$ on a neighborhood of $J$, set, initially for $x\in J$,
$$
T_w(x)=\int_L^x\frac{(x-t)^{n-1}}{(n-1)!}w(t)\,dt,
\qquad
f_w(x)=T_w(x)-\sum_{r=1}^n\ell_r(x)T_w(a_r).
\tag{2}
$$
Then $f_w^{(n)}=w$ and $f_w(a_r)=0$. Differentiation under the integral gives
$$
f_w^{(i)}(x_j^{(i)})=\int_JK_{i,j}(t)w(t)\,dt.
\tag{3}
$$
Conversely, any $f$ with $f^{(n)}=w$ differs from $T_w$ by a polynomial of degree at most $n-1$. The conditions $f(a_r)=0$ determine that polynomial uniquely and give precisely (2). This eliminates all unknown lower Taylor coefficients.

The positive density $w$ can be extended smoothly and positively from $J$ to all of $I$: extend it a little beyond the compact interval and use a smooth cutoff to join it to a positive constant. Formula (2), with the usual oriented integral for $x<L$, then defines $f_w$ on $I$. Its prescribed zeros are exactly its zeros at each level. Indeed, $f^{(i)}$ cannot have more than $n-i$ distinct zeros, by repeated Rolle's theorem and $f^{(n)}>0$. A repeated prescribed zero would give, together with the derivative zeros between its consecutive prescribed zeros, too many distinct zeros of the next derivative. Thus all prescribed zeros are simple. This also rules out additional zeros anywhere in $I$.

Let $K$ be the vector of the $m=n(n-1)/2$ kernels, and define
$$
M(h)=\int_JK(t)h(t)\,dt,\qquad
V=M(C^\infty(J))\subseteq\mathbb R^m.
$$
Here $C^\infty(J)$ means restrictions of functions smooth on a neighborhood of $J$. The image
$$
C=\{M(h):h\in C^\infty(J),\ h>0\text{ on }J\}
$$
is a nonempty convex cone, open relative to $V$. To see openness, choose finitely many smooth functions whose moment vectors form a basis of $V$. Small linear combinations of these functions preserve strict positivity of any fixed positive $h$, since $\min_Jh>0$, and their moment vectors cover a neighborhood in $V$.

If the array is realizable, (3) gives $M(w)=0$. A nonnegative $q$ with $\int_Jqw=0$ must vanish on every open knot interval, proving necessity.

For sufficiency, suppose $0\notin C$. Finite-dimensional separation of an open convex set from a point gives a nonzero linear functional on $V$ nonnegative on $C$; extend it to a coefficient vector $\lambda\in\mathbb R^m$. For any nonnegative smooth bump $\phi$, apply the inequality to $\phi+\varepsilon$ and let $\varepsilon\downarrow0$. This gives
$$
\int_J\bigl(\lambda\cdot K(t)\bigr)\phi(t)\,dt\geq0.
$$
Consequently $q=\lambda\cdot K$ is nonnegative on each open knot interval. Since the separating functional is nonzero on $V$, $q$ is not identically zero almost everywhere: otherwise it would annihilate every $M(h)$. This is exactly the forbidden obstruction. Therefore $0\in C$, and (2) constructs the desired function. The separation theorem used here is classical; see [3, §2.5.1].

## Polynomial certificates for rational data

If the array is realizable, its positive density can be chosen polynomial on $J$. Here is the correction argument, including the equality constraints. The vectors $M(p)$ for polynomials $p$ span $V$. Otherwise a nonzero functional on $V$ would yield a piecewise polynomial $q=\lambda\cdot K$ orthogonal to every polynomial. By uniform polynomial approximation it would be orthogonal to every continuous function on $J$, so $q=0$ almost everywhere, a contradiction.

Choose finitely many polynomial moment vectors forming a basis of $V$, giving a linear right inverse $S:V\to\mathbb R[t]$ of $M$. Approximate a positive smooth feasible density $w$ uniformly by a polynomial $p_0$ and set
$$p=p_0-S(M(p_0)).$$
Because $M(w)=0$, this correction tends uniformly to zero as $p_0\to w$. A sufficiently accurate approximation therefore gives $p>0$ on $J$ and $M(p)=0$ exactly.

If every array entry is rational, the moment matrix for coefficients up to the resulting finite degree has rational entries. Its real kernel has a rational basis, and rational points in that kernel are dense. A sufficiently close rational coefficient vector preserves positivity of $p$. Thus $p$ and the polynomial (2) can have rational coefficients on $J$. Outside $J$ one uses a smooth positive extension of $p$; this does not assert that a single polynomial has positive $n$th derivative on an arbitrary unbounded $I$.

For rational coordinates the dual test is decidable in principle. Write each spline piece as $q_\nu(t)=\sum_k c_{\nu,k}(\lambda)t^k$, with rational linear forms $c_{\nu,k}$. Existence of an obstruction is the finite first-order real formula
$$
\exists\lambda\ \left[\sum_{\nu,k}c_{\nu,k}(\lambda)^2>0\ \land\ \bigwedge_\nu\forall t\bigl(u_\nu<t<v_\nu\ \Longrightarrow\ q_\nu(t)\geq0\bigr)\right].
$$
Real quantifier elimination decides this formula [4, §2.1]. This implication is a deduction from the explicit kernels and the classical algorithm, not a separately implemented solver. No practical complexity estimate, uniform degree bound for a positive polynomial density, or simplified coordinate classification is established here.

## An exact rejected array and an exact realization

The interlacing cubic array
$$
(a_1,a_2,a_3)=(0,1,2),\quad
(x_1^{(1)},x_2^{(1)})=(3/4,5/4),\quad x_1^{(2)}=1
$$
is impossible. In the order $K_{1,1},K_{1,2},K_{2,1}$, the coefficient vector $(-4,-4,-2)$ gives the following nonnegative obstruction:

| Open interval | $q(t)$ |
|---|---|
| $(0,3/4)$ | $t^2$ |
| $(3/4,1)$ | $(1-t)(3-t)$ |
| $(1,5/4)$ | $3t^2-8t+7$ |
| $(5/4,2)$ | $3(t-2)^2$ |

The third polynomial is strictly positive because its discriminant is $-20$ and its leading coefficient is positive. Hence $q\geq0$ almost everywhere and is not identically zero. Cross-level coincidence at $x_1^{(2)}=a_2$ is allowed by the prompt and causes no difficulty.

For comparison, the array
$$
(0,3,8),\qquad(4/3,6),\qquad(11/3)
$$
is realized by $f(x)=x(x-3)(x-8)/6$, whose third derivative is $1$ everywhere.

## Context, checks, and limits

Shapiro's source poses the array problem [1]. Shapiro and Shapiro already give an explicit necessary and sufficient system of coordinate inequalities for degree three [2, Main Theorem]. The rejected cubic array is therefore not claimed as a new counterexample. The present write-up gives a self-contained all-degree dual reformulation and a rational certificate argument, without claiming a new explicit classification.

Run `python3 verify.py` from this folder. The standard-library verifier checks **504 exact scalar kernel/moment identities** for degrees 2 through 8 and six monomial densities; those test arrays check the identity, not feasibility. It also verifies both displayed cubic examples, all four obstruction pieces, and their nonnegativity using exact rational arithmetic. The output is `verification.json`. These finite checks support the formulas; the all-degree existence and separation statements are proved above rather than inferred from testing. The script refuses execution under `python -O`.

**Models and human roles.** OpenAI Codex, GPT-6, developed the proof, consulted the cited sources, and wrote and ran the verifier. The exact serving revision and reasoning configuration are unknown. Gaven requested and authorized the work; no human mathematical review is claimed. Independent agent review is recorded separately when completed.

## Checked references

1. B. Shapiro, *Problems Around Polynomials: The Good, The Bad and The Ugly…* (2015), Problem 6. [Primary author PDF](https://staff.math.su.se/shapiro/Articles/ProblemsWithPolynomials.pdf); [arXiv:1503.05295](https://arxiv.org/abs/1503.05295).
2. B. Shapiro and M. Shapiro, *A Few Riddles Behind Rolle's Theorem*, Main Theorem, author-hosted manuscript, pp. 1–4. [Primary PDF](https://staff.math.su.se/shapiro/Articles/MonthlyFinal.pdf).
3. S. Boyd and L. Vandenberghe, *Convex Optimization*, Cambridge University Press, 2004, §2.5.1. [Authors' PDF](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf). Used only for classical finite-dimensional separation.
4. S. Basu, *Algorithms in Real Algebraic Geometry: A Survey*, arXiv:1409.1534, §2.1, Theorem 2.1 and the following effective-algorithm discussion. [Primary PDF](https://arxiv.org/pdf/1409.1534). Used only for decidability of rational first-order real polynomial formulas.


## Reproducibility and review

Standard-library exact Fraction verifier passed 504 scalar moment identities, one exact feasible cubic array, and one explicit nonnegative dual spline obstruction. All-degree sufficiency, positive smooth extension, polynomial correction, and quantifier-elimination reduction are proved in report.md, not inferred from tests.
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
OpenAI Codex (GPT-6), next_scout instance | version: unknown | reasoning: unknown | role: developed the covering-system, zero-sum and group-transversal reports; participated in separate LLM review.
OpenAI Codex (GPT-6), twoquad_audit instance | version: unknown | reasoning: unknown | role: developed the generic-ideal and Lefschetz reports; participated in separate LLM review.
OpenAI Codex (GPT-6), lattice_verify instance | version: unknown | reasoning: unknown | role: developed the graph-signing, coloring and complexity reports; participated in separate LLM review.
OpenAI Codex (GPT-6), psi_audit instance | version: unknown | reasoning: unknown | role: developed the derivative-root and Diophantine-tuple reports; participated in separate LLM review.
OpenAI Codex (GPT-6), rectangle_audit instance | version: unknown | reasoning: unknown | role: developed the visibility, minimum-link and sumset-sorting reports; participated in separate LLM review.
OpenAI Codex (GPT-6), scout_new instance | version: unknown | reasoning: unknown | role: developed the polyomino, distance and folding reports; participated in separate LLM review.
The authoring instance for this report is psi_audit — OpenAI Codex, GPT-6 (exact serving revision/reasoning configuration unknown). Per-report independent audits identify the reviewer and checks actually performed. Exact serving revisions and reasoning configurations are unknown. No other LLM was used in this batch.

### People and roles

Gaven: prompted and authorized the twenty-problem batch and public submissions. No human mathematical contribution or human verification is claimed.

### References

B. Shapiro, Problems Around Polynomials: The Good, The Bad and The Ugly (2015), Problem 6; https://staff.math.su.se/shapiro/Articles/ProblemsWithPolynomials.pdf
B. Shapiro and M. Shapiro, A Few Riddles Behind Rolle’s Theorem, Main Theorem; https://staff.math.su.se/shapiro/Articles/MonthlyFinal.pdf
S. Boyd and L. Vandenberghe, Convex Optimization (2004), §2.5.1; https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf
S. Basu, Algorithms in Real Algebraic Geometry: A Survey, arXiv:1409.1534, §2.1; https://arxiv.org/pdf/1409.1534
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
