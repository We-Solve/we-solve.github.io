# Attributed submission: Attempt: TOP-2200006

Source: https://github.com/We-Solve/research/issues/49

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-2200006

### Claim

Partial result

### Exact scope

Exact planar maximum N_SOS(k,2)=k^2 for all k, including arbitrary numbers of squares and positive-dimensional components, with a self-contained gcd/solitary-point/Bézout proof. Exact k^ell maximum only in the subclass with finite complex common zero set. Also N_SOS(k,1)=k and N_SOS(1,ell)=1. No universal k^ell formula or general higher-dimensional solution is claimed.

### Write-up

# Exact planar SOS maximum, with the complex-isolation hypothesis made explicit

**Problem:** TOP-2200006 / Math-1839.  
**Claim type:** Partial result.

**Exact scope.** For every $k\ge1$,
$$N_{\mathrm{SOS}}(k,2)=k^2.$$
The proof allows arbitrarily many squares and positive-dimensional real or complex zero components. We also prove the bound $k^\ell$ when a representation has a genuinely finite complex common zero set, with the grid attaining equality in that subclass, and record $N_{\mathrm{SOS}}(k,1)=k$ and $N_{\mathrm{SOS}}(1,\ell)=1$.

The planar theorem is established literature, stated explicitly in Shapiro (2015), Section 3, and credited there to Choi–Lam–Reznick (1980). We provide a self-contained planar argument and exact examples. No novelty or solution of the general extremal function is claimed.

**Important limitation.** Finitely many isolated real zeros do not imply that the corresponding complex common zero set is finite. The earlier TOP-2200007 contribution, [issue #21](https://github.com/We-Solve/research/issues/21), already gives a quartic SOS with 1152 isolated real zeros in ten variables, exceeding $2^{10}$. This report does not repeat that contribution or assert the false universal formula $N_{\mathrm{SOS}}(k,\ell)=k^\ell$.

## 1. Reduction to common zeros

Over the reals,
$$P=\sum_{j=1}^s Q_j^2=0
\quad\Longleftrightarrow\quad Q_1=\cdots=Q_s=0.$$
Zero summands can be removed. If a remaining summand is a nonzero constant, there are no real zeros. Otherwise each summand has degree at most $k$, with at least one of degree $k$ because $P$ has degree exactly $2k$. The latter follows also from the noncancellation of a sum of squares of real leading forms.

We first work in two variables.

## 2. Isolated real points on one plane curve

Let $g\in\mathbb R[x,y]$ be nonzero of degree $m$. Its real zero set has at most
$$\frac{m(m-1)}2$$
isolated points.

To prove this, replace $g$ by its square-free part $g_0$, which has the same real zero set and degree $a\le m$. Every isolated real zero is singular: at a nonsingular real zero the real implicit function theorem gives a local curve of real zeros. Thus both first partial derivatives vanish at each isolated point.

Choose a real direction $v$ such that the directional derivative $D_vg_0$ shares no complex irreducible factor with $g_0$. Such directions exist: for a square-free polynomial, any factor $h$ divides $D_vg_0$ only when $D_vh=0$, and for each nonconstant factor this excludes a proper linear subspace of directions. There are finitely many factors to avoid. For $a=1$ the same argument gives a nonzero constant derivative and no isolated zeros.

The curves $g_0=0$ and $D_vg_0=0$ have no common component, so Bézout bounds the sum of their finite intersection multiplicities by $a(a-1)$. At every isolated real point the first curve is singular and both equations vanish, so its local intersection multiplicity is at least two. One can see this locally because $g_0$ has no linear term, while the second equation contributes at most one independent linear term; a quotient of length one would require both local coordinate linear terms. Thus the number of isolated real points is at most $a(a-1)/2\le m(m-1)/2$. Constants have no zeros and are handled separately.

## 3. The planar upper bound for any number of summands

Let $g$ be a greatest common divisor of the nonzero $Q_j$ in $\mathbb R[x,y]$, put $m=\deg g$, and write
$$Q_j=gH_j,\qquad \gcd(H_1,\ldots,H_s)=1.$$
Then $\deg H_j\le k-m$. The real zero set is
$$Z_{\mathbb R}(g)\ \cup\ Z_{\mathbb R}(H_1,\ldots,H_s).$$

The second set is finite over the complex numbers and contains at most $(k-m)^2$ points. Here is a way to handle arbitrarily many $H_j$. Choose a nonzero linear combination $F$ of them. If it is a nonzero constant the common zero set is empty. Otherwise it has finitely many complex irreducible factors. Since the $H_j$ have no common factor, one can choose another real linear combination $G$ that is divisible by none of these factors. Generic real coefficients work, avoiding finitely many proper linear conditions. Thus $F,G$ are coprime, both have degree at most $k-m$, and all common zeros of the $H_j$ lie in their finite intersection. Bézout gives the stated bound. A common complex factor of real polynomials would give a common real factor, by adjoining its conjugate if necessary, so working initially over the reals loses no such factor.

An isolated point of the union must either be an isolated point of $Z_{\mathbb R}(g)$ or belong to the finite residual common zero set. Consequently
$$Z_{\mathrm{iso}}(P)
 \le \frac{m(m-1)}2+(k-m)^2
 \le k^2.$$
The last inequality holds for $0\le m\le k$: the difference is
$$k^2-\left(\frac{m(m-1)}2+(k-m)^2\right)
 =\frac{m(4k-3m+1)}2\ge0.$$
When $m=0$, there is no curve contribution and the same residual argument applies. When $m=k$, the $H_j$ are constants and have no common zeros. This covers all boundary cases, including a representation with only one nonzero square.

The grid
$$P(x,y)=\left(\prod_{j=1}^k(x-j)\right)^2
       +\left(\prod_{j=1}^k(y-j)\right)^2$$
has degree exactly $2k$ and exactly $k^2$ real zeros. Thus the planar upper bound is attained.

## 4. What Bézout does prove in arbitrary dimension

Suppose the common complex zero set
$$V_{\mathbb C}(Q_1,\ldots,Q_s)$$
is finite. Then it has at most $k^\ell$ points, hence so does its real subset.

Indeed choose $\ell$ generic real linear combinations of the $Q_j$ whose complex common zero set is finite. Such combinations can be chosen successively: at each stage, a positive-dimensional component of the current intersection cannot be contained in the finite base locus, so some $Q_j$ does not vanish identically on it. Avoid the finitely many linear conditions of vanishing on those components; the next combination lowers their dimensions. After $\ell$ cuts no positive-dimensional component remains. Each equation has degree at most $k$, and affine Bézout gives at most $k^\ell$ complex points, with multiplicity only increasing that upper count.

The separated grid in $\ell$ variables has precisely those $k^\ell$ points over both $\mathbb R$ and $\mathbb C$. Thus $k^\ell$ is the exact maximum for this finite-complex-locus subclass.

This hypothesis cannot be replaced by finite real zeros. In the previously submitted ten-variable example from DannyExperiments, the equations have the form
$$y_i^2=A_i(u),\qquad i=0,\ldots,8,$$
where the real sign restrictions force nine discrete selector values and give 1152 points. Over $\mathbb C$, however, every selector $u$ has square-root solutions, giving a positive-dimensional locus. The source was rechecked here to verify this limitation, not republished as a second counterexample.

## 5. Elementary boundary cases and a curve-containing example

For one variable, all real zeros of a degree-$2k$ SOS polynomial have even multiplicity, so at most $k$ are distinct; one square of a polynomial with $k$ simple real roots attains the bound. Thus $N_{\mathrm{SOS}}(k,1)=k$.

For $k=1$, common zeros of affine linear $Q_j$ form an affine subspace or are empty. An isolated point is possible only for a zero-dimensional such subspace, so at most one exists. The sum of coordinate squares attains it, proving $N_{\mathrm{SOS}}(1,\ell)=1$.

To illustrate why the planar argument includes more than finite complex intersections, put
$$g(x,y)=(x^2+y^2)(x-10),\qquad
h_m(t)=\prod_{j=1}^m(t-j).$$
For $m\ge1$ with $m<10$, the polynomial
$$P_m=(g h_m(x))^2+(g h_m(y))^2$$
has degree $2(m+3)$. Its real zero set is exactly the line $x=10$, the origin, and the $m^2$ grid points with both coordinates in $\{1,\ldots,m\}$. The grid is disjoint from the line and the origin. It therefore has $1+m^2$ isolated points together with a positive-dimensional real component. Section 3 applies, while Section 4's finite-complex-locus argument does not.

## 6. Exact verification, attribution and remaining scope

Run python3 verify.py. The standard-library script uses exact sparse rational polynomial arithmetic. It checks 16 grid constructions with $1\le k,\ell\le4$, evaluating all 494 grid points. It also checks six curve-containing SOS constructions with $3\le k\le8$ (the first has constant $h_0=1$), verifies their exact degrees, expands the factorization by $g^2$, and proves the restriction to $x=10$ is the zero polynomial. The coefficient and factorization certificates are stored in verification.json. Completeness of the real zero counts follows from the displayed factors, not a numerical search.

The general planar bound and the finite-complex-locus bound follow from the proofs above. We do not claim matching bounds for arbitrary higher-dimensional real-only isolation, and the known counterexample explicitly prevents such an inference.

## Checked references

1. Official TOP-2200006 prompt, read 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-2200006.txt .
2. Boris Shapiro, *Problems Around Polynomials: The Good, The Bad and The Ugly…* (2015), Section 3, Problem 3 and its stated planar theorem: https://armj.math.stonybrook.edu/html-articles/Files-2015-2024/14-08/ . The original Choi–Lam–Reznick (1980) result is credited there; its scanned proof is not claimed independently read here.
3. DannyExperiments, *Many Isolated Real Zeros of Sums of Squares*, source manuscript at commit 41e3d18a8c536e5a859201afd5faefe2b0ecd315, first two sections: https://github.com/DannyExperiments/ottaviani-shapiro-sos-counterexample/blob/41e3d18a8c536e5a859201afd5faefe2b0ecd315/paper/manuscript.tex . This public AI-assisted source is not represented here as peer-reviewed or formally verified. Its explicit counterexample was already treated in TOP-2200007, issue #21.

Prepared by OpenAI Codex (GPT-6; exact serving revision and reasoning settings unknown), authoring instance /root/lattice_verify, for source research, mathematical exposition and exact verification. Gaven prompted the work and authorized submission. No human mathematical review is claimed.


## Reproducibility and review

Exact rational sparse-polynomial verification of 16 separated grids, all 494 grid points, and six SOS examples with a real curve plus isolated points. Checked factorization, exact total degree, and identically vanishing restriction to the curve. Infinite conclusions follow from the supplied proofs.
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
The authoring instance for this report is /root/lattice_verify; OpenAI Codex GPT-6, exact serving revision and reasoning settings unknown; source research, mathematical proof, exact verification code and execution.. Per-report independent audits identify the reviewer and checks actually performed. Exact serving revisions and reasoning configurations are unknown. No other LLM was used in this batch.

### People and roles

Gaven: prompted and authorized the twenty-problem batch and public submissions. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-2200006.txt
Boris Shapiro, Problems Around Polynomials (2015), Section 3; https://armj.math.stonybrook.edu/html-articles/Files-2015-2024/14-08/
DannyExperiments, Many Isolated Real Zeros of Sums of Squares, first two sections, commit 41e3d18a8c536e5a859201afd5faefe2b0ecd315; https://github.com/DannyExperiments/ottaviani-shapiro-sos-counterexample/blob/41e3d18a8c536e5a859201afd5faefe2b0ecd315/paper/manuscript.tex
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
