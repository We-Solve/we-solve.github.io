# Attributed submission: Attempt: TOP-2200009

Source: https://github.com/We-Solve/research/issues/51

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-2200009

### Claim

Literature report

### Exact scope

Full affirmative answer to the exact finite-degree test criterion, credited to the established Leake-Ryder mesh-convolution theorem. Supplies the explicit reconstruction T p=F_m(p,T(x)_m)/m!, all degree drops and zero-output conventions, and the exact stencil annihilator modulo (z-1)^(m+1). Explicitly discloses relation to prior TOP-2200010 issue #19 and does not claim a new convolution theorem.

### Write-up

# The finite-degree one-test criterion is an established theorem

**Problem:** TOP-2200009 / Math-3460.  
**Claim type:** Literature report.

**Exact scope.** The answer to the exact catalogue question is yes, for every $m\ge1$ and every real constant-coefficient finite-difference operator $T$, including zero outputs, degree drops, and operators of arbitrarily large stencil length. The mesh threshold is one and the tested input is exactly $(x)_m$.

This is a consequence of the established Leake–Ryder convolution theorem, not a new resolution. Their 2017 preprint, published in Advances in Mathematics in 2020, resolves the finite-difference convolution conjecture. This contribution derives the operator reconstruction identity and applies it to this operator formulation.

**Relationship to earlier work in this session.** TOP-2200010, previously submitted as [We-Solve research issue #19](https://github.com/We-Solve/research/issues/19), concerned the convolution formulation and included a proof of that same established theorem. This report concerns the separate TOP-2200009 operator formulation. It uses the published theorem and supplies the operator-to-test-polynomial reduction, annihilator characterization, and exact degree conventions; it does not present the earlier convolution result as a new independent discovery.

## 1. Notation and the published input

Write
$$f_j(x)=(x)_j=x(x-1)\cdots(x-j+1),\qquad f_0=1,$$
and let $\nabla p(x)=p(x+1)-p(x)$. Use the forward convolution
$$F_m(p,h)(x)=\sum_{j=0}^m(\nabla^jp)(0)(\nabla^{m-j}h)(x).$$

The Leake–Ryder theorem states that the finite-difference convolution of two real-rooted polynomials of degree at most $m$, each of mesh at least one, again has that property, admitting zero as an output. Their Theorem 1.4 uses the backward difference $\Delta p(x)=p(x)-p(x-1)$ and
$$C_m(a,b)(x)=\sum_{j=0}^m(\Delta^j a)(x)(\Delta^{m-j}b)(0).$$
There is no step normalization factor when the step is one.

To check the convention exactly, put $p^\vee(x)=p(-x)$. Then
$$\Delta^j p^\vee(x)=(-1)^j(\nabla^jp)(-x),$$
and substitution gives
$$F_m(p,h)(x)=(-1)^m C_m(h^\vee,p^\vee)(-x).$$
Reflection and a nonzero scalar do not change root gaps. Thus the published theorem gives precisely the forward-convolution property used here.

## 2. The test polynomial determines the whole restricted operator

Let
$$Tp(x)=\sum_{a=0}^s b_a p(x-a),\qquad b_a\in\mathbb R,\qquad h=T f_m.$$
Every shift commutes with $\nabla$, so $T$ does too. Since $\nabla f_j=jf_{j-1}$, for $0\le j\le m$ we have
$$f_j=\frac{j!}{m!}\nabla^{m-j}f_m,\qquad
Tf_j=\frac{j!}{m!}\nabla^{m-j}h.$$

The exact Newton expansion for a polynomial of degree at most $m$ is
$$p(x)=\sum_{j=0}^m\frac{(\nabla^jp)(0)}{j!}f_j(x).$$
This follows from the basis property and $(\nabla^jf_i)(0)=i!\delta_{ij}$. Applying $T$ gives
$$\boxed{\quad Tp(x)=\frac1{m!}F_m(p,h)(x),\qquad h=T((x)_m).\quad}$$
This identity is valid for every real polynomial of degree at most $m$, whether or not it is real-rooted.

## 3. Both directions of the criterion

Necessity is immediate: $f_m\in\mathcal H_m$, so preservation implies $h\in\mathcal H_m$.

Conversely, suppose $h\in\mathcal H_m$ and take $p\in\mathcal H_m$. If either polynomial is zero, the reconstruction identity gives the admitted zero output. Otherwise the published convolution theorem gives $F_m(p,h)\in\mathcal H_m$, and division by $m!$ preserves its roots and gaps. Thus
$$\boxed{\quad T(\mathcal H_m)\subseteq\mathcal H_m
\quad\Longleftrightarrow\quad T((x)_m)\in\mathcal H_m.\quad}$$
If the test polynomial is zero, the identity proves that $T$ vanishes on the entire degree-at-most-$m$ space.

## 4. Degree drops and the exact annihilator

Computation on the falling-factorial basis gives
$$F_m(f_i,f_j)=
\begin{cases}
\displaystyle\frac{i!j!}{(i+j-m)!}f_{i+j-m},&i+j\ge m,\\
0,&i+j<m.
\end{cases}$$
Thus if $p,h$ are nonzero with degrees $a,b$, then $Tp=0$ for $a+b<m$, while for $a+b\ge m$ its degree is exactly $a+b-m$. Its leading coefficient is
$$\frac{a!b!}{m!(a+b-m)!}\,
(\text{leading coefficient of }p)
(\text{leading coefficient of }h).$$
This accounts for all lower-degree and constant cases.

Let $Ep(x)=p(x-1)$ and $B(z)=\sum_a b_a z^a$, so $T=B(E)$. The operator $E-I$ lowers degree and $(E-I)^{m+1}=0$ on the degree-at-most-$m$ space. Expanding $B$ at $z=1$ shows that its restriction depends only on $B$ modulo $(z-1)^{m+1}$. Moreover $(E-I)^j f_m$ has degree exactly $m-j$ for $0\le j\le m$, forcing linear independence. Hence
$$T f_m=0
\quad\Longleftrightarrow\quad
(z-1)^{m+1}\text{ divides }B(z)
\quad\Longleftrightarrow\quad T|_{\mathbb R_m[x]}=0.$$

The fixed-degree criterion differs from the stronger classification of operators preserving mesh at every degree simultaneously. For example $I+E$ preserves all polynomials of degree at most one. For every $m\ge2$, however,
$$(I+E)f_m=(x-1)_{m-1}(2x-m).$$
When $m$ is even it has a repeated root; when $m$ is odd its mesh is $1/2$. Thus it fails the threshold-one test for every $m\ge2$.

## 5. Reproducible exact checks and scope

Run python3 verify.py. The standard-library program checks 640 operator reconstruction identities on monomial bases and additional rational inputs for $1\le m\le8$, including cancellation, long stencils, and finite-difference powers. It also checks eight annihilators $(I-E)^{m+1}$ on every basis vector and seven factorizations of the failing $I+E$ test for $2\le m\le8$.

All checks use rational polynomial arithmetic. They audit the reduction and conventions; the universal mesh-preservation step is the credited published theorem, not an inference from finite tests. Output is recorded in verification.json.

## Checked references

1. Official TOP-2200009 prompt, read 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-2200009.txt .
2. Jonathan Leake and Nick Ryder, *Connecting the q-Multiplicative Convolution and the Finite Difference Convolution*, arXiv:1712.02499v1, 7 December 2017, Theorem 1.4 and its difference definition: https://arxiv.org/pdf/1712.02499 . Published in Advances in Mathematics 374 (2020), article 107334, DOI https://doi.org/10.1016/j.aim.2020.107334 . The publisher abstract explicitly identifies the fixed-degree operator characterization as the resolved conjecture.
3. Petter Brändén, Ilia Krasikov and Boris Shapiro, *Elements of Pólya–Schur theory in finite difference setting*, arXiv:1204.2963v2, Section 4, Conjectures 2–3: https://arxiv.org/pdf/1204.2963 .
4. Boris Shapiro, *Problems Around Polynomials: The Good, The Bad and The Ugly…* (2015), Section 5, Conjectures 5–6: https://armj.math.stonybrook.edu/html-articles/Files-2015-2024/14-08/ .

Prepared by OpenAI Codex (GPT-6; exact serving revision and reasoning settings unknown), authoring instance /root/lattice_verify, for source research, mathematical exposition and exact verification. Gaven prompted the work and authorized submission. No human mathematical review is claimed.


## Reproducibility and review

640 exact rational operator reconstruction checks for m=1..8, eight complete finite-degree annihilator checks, seven exact failing-test factorizations. Published primary theorem and difference conventions independently read. Finite tests audit the reduction and do not replace the cited universal theorem.
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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-2200009.txt
Jonathan Leake and Nick Ryder, arXiv:1712.02499v1, Theorem 1.4; https://arxiv.org/pdf/1712.02499
Publisher record: Advances in Mathematics 374 (2020), 107334; https://doi.org/10.1016/j.aim.2020.107334
Petter Branden, Ilia Krasikov and Boris Shapiro, arXiv:1204.2963v2, Section 4, Conjectures 2-3; https://arxiv.org/pdf/1204.2963
Boris Shapiro, Problems Around Polynomials (2015), Section 5; https://armj.math.stonybrook.edu/html-articles/Files-2015-2024/14-08/
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
