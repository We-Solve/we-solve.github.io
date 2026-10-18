> Source: [original issue #19](https://github.com/We-Solve/research/issues/19). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


# Finite-difference convolution preserves mesh: the established affirmative answer, with a complete proof

Problem: **TOP-2200010 / Math-3461**, *Problems Around Polynomials — Conjecture 6* (AMR-021-0010).

Claim type: **literature report**, including a self-contained proof of the full affirmative answer.

Scope: For every integer $d\ge1$ and every $p,q\in\mathcal H_d$, the exact forward-difference convolution in the catalogue satisfies

$$
\boxed{\quad p\bullet_dq\in\mathcal H_d.\quad}
\tag{1}
$$

Here $\mathcal H_d$ consists of zero and the real-rooted polynomials of degree at most $d$ whose minimum consecutive root gap is at least one.

The result is due to **Jonathan Leake and Nick Ryder**: their Theorem 1.4 proves the more general step-$b$ statement, and their Section 3 gives a direct interlacing proof. Their preprint appeared in December 2017; the paper was published in *Advances in Mathematics* 374 (2020), article 107334. Thus the conjecture recorded from the older sources is already resolved. The proof below rederives the direct argument using partial fractions, supplies the normalization conversion, and treats all degree drops exactly. No new theorem or historical priority is claimed.

Assumptions and limitations: All polynomials have real coefficients. Roots are counted with multiplicity. Constants and linear polynomials have infinite mesh, and zero is an allowed output, exactly as in the catalogue. The proof uses only polynomial algebra, partial fractions, the intermediate value theorem, and continuity of roots; the latter continuity step is justified explicitly. It does not assume the finite-difference convolution theorem as a black box.

## 1. The exact forward/backward conversion

The catalogue uses

$$
\nabla p(x)=p(x+1)-p(x),\qquad
F_d(p,q)(x)=\sum_{j=0}^{d}(\nabla^jp)(0)(\nabla^{d-j}q)(x).
\tag{2}
$$

For the proof use the backward difference and convolution

$$
\Delta f(x)=f(x)-f(x-1),\qquad
C_d(f,g)(x)=\sum_{k=0}^{d}(\Delta^kf)(x)(\Delta^{d-k}g)(0).
\tag{3}
$$

There is no division by $d$ in $\Delta$. If $p^\vee(x)=p(-x)$, then induction gives

$$
\Delta^jp^\vee(x)=(-1)^j(\nabla^jp)(-x).
$$

Substitution and the change of index $k=d-j$ give the exact identity

$$
\boxed{F_d(p,q)(x)=(-1)^d C_d(q^\vee,p^\vee)(-x).}
\tag{4}
$$

Reflection and multiplication by a nonzero constant preserve root spacing. It therefore suffices to prove the corresponding assertion for (3). Formula (4) also avoids relying on an unspecified shift or an unproved symmetry convention when identifying the published theorem with the catalogue.

## 2. Algebra of the convolution

Write

$$
r_0(x)=1,\qquad r_j(x)=x(x+1)\cdots(x+j-1)\quad(j\ge1).
$$

Then $\Delta r_j=j r_{j-1}$ and $r_j(0)=0$ for $j>0$. Hence, for $0\le i,j\le d$,

$$
C_d(r_i,r_j)=
\begin{cases}
\displaystyle\frac{i!j!}{(i+j-d)!}\,r_{i+j-d},&i+j\ge d,\\[5pt]
0,&i+j<d.
\end{cases}
\tag{5}
$$

Indeed, in (3) the factor evaluated at zero vanishes unless $d-k=j$; the remaining term is exactly (5). Since the $r_j$ form a basis, (5) proves

$$
C_d(f,g)=C_d(g,f).
\tag{6}
$$

Differences commute with translations, so translating the first input by $a$ translates the output by $a$. Symmetry gives the same assertion for the second input. In particular,

$$
C_d(f(\cdot+a),g(\cdot+b))(x)=C_d(f,g)(x+a+b).
\tag{7}
$$

If both inputs have degree $d$ and positive leading coefficients $a_f,a_g$, then $C_d(f,g)$ has degree $d$ and leading coefficient $d!a_fa_g$. The term $k=0$ in (3) gives this leading term; every other term has lower degree.

For an integer $n\ge1$ define the auxiliary polar operator

$$
P_ng(x)=n g(x-1)-(x-1)\Delta g(x).
\tag{8}
$$

Its degree is at most $n-1$ when $\deg g\le n$. For $\deg f\le n-1$ and $\deg g\le n$ the two recursion identities are

$$
\begin{aligned}
C_n(f,g)&=C_{n-1}(f,\Delta g),\\
C_n(xf,g)&=xC_{n-1}(f,\Delta g)+C_{n-1}(f,P_ng).
\end{aligned}
\tag{9}
$$

The first follows directly because $\Delta^nf=0$. For completeness, the second can be checked without omitting any normalization. The product rule gives

$$
\Delta^k(xf)(x)=x\Delta^kf(x)+k(\Delta^{k-1}f)(x-1)\qquad(k\ge1).
$$

Also, (8) acts on the rising basis by

$$
P_nr_j(x)=(n-j)r_j(x-1),\qquad
(\Delta^jP_ng)(1)=(n-j)(\Delta^jg)(0).
$$

Therefore the extra sum after the product rule is

$$
\begin{aligned}
&\sum_{\ell=0}^{n-1}(\ell+1)(\Delta^\ell f)(x-1)
 (\Delta^{n-1-\ell}g)(0)\\
&\qquad=C_{n-1}(f(\cdot-1),(P_ng)(\cdot+1))(x)
 =C_{n-1}(f,P_ng)(x),
\end{aligned}
$$

where the final equality is (7). This proves (9).

## 3. Three elementary facts about roots and partial fractions

The following statements encode the interlacing argument while keeping the sign conventions explicit. A residue is the coefficient of $(x-\eta)^{-1}$ in a partial fraction expansion.

**Fact A: one more real root.** Suppose $A$ has degree $m$, positive leading coefficient and $m$ distinct real roots $\eta_i$. Suppose $\deg R\le m$ and

$$
\frac{R(x)}{A(x)}=c-\sum_{i=1}^{m}\frac{b_i}{x-\eta_i},\qquad b_i\ge0.
$$

For any real $s$, put $B=(x-s)A+R$. Then $B$ has degree $m+1$ and all its roots are real. Moreover, $A/B$ has only simple real poles and all their residues are positive; some roots of $B$ may instead cancel and give no pole.

To prove this, cancel the factors of $A$ for which $b_i=0$ and inspect

$$
\phi(x)=\frac{B(x)}{A(x)}=x+c-s-\sum_{b_i>0}\frac{b_i}{x-\eta_i}.
$$

On every interval between its poles,

$$
\phi'(x)=1+\sum_{b_i>0}\frac{b_i}{(x-\eta_i)^2}>0.
$$

Its one-sided limits show that it has one zero in each interval between consecutive poles and one zero in each outside interval. These zeros are simple and real. The cancelled factors of $A$ supply the other roots of $B$, also real. Finally, $A/B=1/\phi$ has a simple pole at each zero $\beta$ of $\phi$, with residue $1/\phi'(\beta)>0$. This also proves the case $m=0$, when $\phi$ is linear. A zero of $\phi$ can coincide with a cancelled root of $A$; the same argument still applies to the rational function $A/B$.

**Fact B: detecting mesh by a shift.** Let $B$ be a nonconstant real-rooted polynomial of degree $n$. If

$$
\frac{B(x-1)}{B(x)}=1-\sum_\beta\frac{b_\beta}{x-\beta},\qquad b_\beta\ge0,
\tag{10}
$$

with only simple poles, then $\operatorname{mesh}(B)\ge1$.

Here is a proof including possible common roots. After cancelling the greatest common divisor of $B(x)$ and $B(x-1)$, call the denominator roots $\beta_1<\cdots<\beta_k$ and the numerator roots $\gamma_1<\cdots<\gamma_k$. Every actual residue has $b_\beta>0$. The right side of (10) is strictly increasing between its poles. Its limits give exactly

$$
\beta_1<\gamma_1<\beta_2<\gamma_2<\cdots<\beta_k<\gamma_k.
$$

There is no zero to the left of the first pole, and there is one to the right of the last. Reinserting a root into both multisets preserves weak interlacing: equivalently, the difference of their root-counting functions remains either zero or one. Thus if all roots of $B$, with multiplicity, are $\lambda_1\le\cdots\le\lambda_n$, the roots of $B(x-1)$ are $\mu_i=\lambda_i+1$ and give

$$
\lambda_i\le\mu_i\le\lambda_{i+1}\qquad(1\le i<n).
$$

Consequently $\lambda_{i+1}-\lambda_i\ge1$. The pole-free case would give $B(x-1)=B(x)$, impossible for a nonconstant polynomial, as comparison of the coefficients of $x^{n-1}$ shows.

**Fact C: continuity with fixed degree.** If degree-$m$ real-rooted polynomials converge coefficientwise to a degree-$m$ polynomial with nonzero leading coefficient, their ordered root lists converge to the ordered root list of the limit. In particular, a lower bound on every consecutive gap passes to the limit. To see this, divide by the leading coefficients. Their other coefficients remain bounded, so the usual root bound $|z|\le1+\max_{j<m}|a_j|$ bounds all roots of these monic polynomials. Every subsequence of the ordered lists therefore has a convergent further subsequence. Factoring the polynomials shows that its limiting multiset is exactly the multiset of roots of the coefficient limit. Ordering makes this multiset unique. This proves the assertion. It also shows that having distinct real roots with all gaps strictly greater than one is an open condition among degree-$m$ polynomials with real coefficients: choose disjoint small real intervals around the roots and preserve the opposite endpoint signs in each interval.

## 4. Difference and polar lemmas

Suppose $g$ has degree $n\ge1$, positive leading coefficient, and roots

$$
\alpha_1<\cdots<\alpha_n,\qquad \alpha_{i+1}-\alpha_i>1.
$$

Set $q=\Delta g$. At the endpoints of every interval $(\alpha_i+1,\alpha_{i+1})$, the values of $\Delta g$ have opposite signs. There is consequently a root $\eta_i$ in each such interval. The degree is $n-1$, so these are all its roots. They satisfy

$$
\alpha_i+1<\eta_i<\alpha_{i+1},\qquad
\eta_{i+1}-\eta_i>1.
\tag{11}
$$

Thus $q$ also has strict mesh greater than one and positive leading coefficient. For $n=1$, it is a positive constant. In particular, its roots strictly interlace the roots of $p(x)=g(x-1)$.

At each root $\eta_i$ of $q$, this interlacing and the positive leading coefficients give $p(\eta_i)/q'(\eta_i)<0$. Since the ratio of leading coefficients of $p$ and $q$ is $1/n$, polynomial division gives

$$
\frac{p(x)}{q(x)}=\frac{x}{n}+c+\sum_i\frac{\rho_i}{x-\eta_i},\qquad \rho_i<0.
\tag{12}
$$

For a real parameter $t$ define

$$
H_t=t\Delta g+P_ng=tq+np-(x-1)q.
$$

Using (12),

$$
\boxed{\frac{H_t(x)}{q(x)}=t+nc+1+\sum_i\frac{n\rho_i}{x-\eta_i}.}
\tag{13}
$$

All its residues are negative. Also $\deg H_t\le n-1$ and $H_t/t\to q$ coefficientwise as $t\to+\infty$. Fact C implies that for all sufficiently large $t$, $H_t$ has degree $n-1$, positive leading coefficient and mesh strictly greater than one. This is the needed polar lemma. The empty sum when $n=1$ gives the same conclusion directly. In particular, no claim that $P_n$ itself preserves mesh is needed.

## 5. The induction proving mesh preservation

We prove the following stronger assertion for every $n\ge0$.

Let $f,g$ have degree $n$, positive leading coefficients and mesh strictly greater than one. Write $T(r)=C_n(r,g)$ and $B=T(f)$. Then:

1. $B$ has degree $n$, is real-rooted and has mesh at least one.
2. If $\deg r\le n$ and the residues in $r/f$ are all nonnegative, then $T(r)/B$ has only simple real poles and all their residues are nonnegative. If they are all nonpositive, the output residues are all nonpositive instead.

For $n=0$ all ratios are constant and the assertion is immediate. Suppose it holds at $n-1$. Denote the roots of $f$ by $\alpha_i$ and put

$$
f_i(x)=\frac{f(x)}{x-\alpha_i},\qquad
q=\Delta g.
$$

Each $f_i$ and $q$ has degree $n-1$, positive leading coefficient and strict mesh greater than one. Choose $t$ sufficiently large for the polar lemma and define

$$
A_i=C_{n-1}(f_i,q),\qquad
R_i=C_{n-1}(f_i,H_t).
$$

The induction hypothesis makes $A_i$ real-rooted with mesh at least one; its degree is $n-1$ and its leading coefficient is positive. Thus its roots are distinct whenever it has any roots. By symmetry, we can apply the residue part of the induction hypothesis with fixed input $q$, convolution partner $f_i$, and test polynomial $H_t$. Equation (13) gives

$$
\frac{R_i(x)}{A_i(x)}=c_i-\sum_\eta\frac{b_{i,\eta}}{x-\eta},\qquad b_{i,\eta}\ge0.
\tag{14}
$$

The recursion identities (9), and $f=(x-\alpha_i)f_i$, now give

$$
\begin{aligned}
B
&=(x-\alpha_i)C_{n-1}(f_i,q)+C_{n-1}(f_i,P_ng)\\
&=(x-\alpha_i-t)A_i+R_i.
\end{aligned}
\tag{15}
$$

Fact A applied to (14)–(15) proves that $B$ is real-rooted and that every $A_i/B$ has only simple real poles with nonnegative residues. Its degree is $n$, by the leading-coefficient calculation following (7).

For any $r$ of degree at most $n$, the simplicity of the roots of $f$ gives the unique expansion

$$
\frac{r(x)}{f(x)}=c+\sum_i\frac{a_i}{x-\alpha_i},\qquad
r=c f+\sum_i a_i f_i.
$$

By linearity and the first recursion in (9),

$$
\frac{T(r)}{B}=c+\sum_i a_i\frac{A_i}{B}.
\tag{16}
$$

If all $a_i$ have one sign, so do the residues on the right side. This proves the residue assertion at level $n$ without first assuming simplicity of the roots of $B$.

Finally take $r(x)=f(x-1)$. Since the gaps in $f$ exceed one,

$$
\frac{f(x-1)}{f(x)}=1+\sum_i\frac{a_i}{x-\alpha_i},\qquad
a_i=\frac{f(\alpha_i-1)}{f'(\alpha_i)}<0.
$$

The sign follows because $\alpha_i-1$ lies strictly between $\alpha_{i-1}$ and $\alpha_i$ for $i>1$, and to the left of $\alpha_1$ for $i=1$. By (7), $T(r)(x)=B(x-1)$. Thus (16) puts $B(x-1)/B(x)$ in the form (10). Fact B gives mesh at least one, completing the induction.

This proof has no circular use of a mesh theorem: mesh of $A_i$ comes from the lower-dimensional induction; real-rootedness of $B$ comes from Fact A; and its mesh comes last from its translated ratio.

## 6. Boundary mesh, smaller degrees, and zero

First suppose both inputs have degree $d$ and mesh at least one. If their ordered roots are $\alpha_i$, replace them by $\alpha_i+i\varepsilon$ with $\varepsilon>0$, keeping the leading coefficient fixed. This makes all gaps strictly greater than one and converges coefficientwise to the original polynomial. Do this for both inputs. Their convolution outputs have the fixed nonzero leading coefficient $d!a_fa_g$ and converge coefficientwise. Fact C passes mesh at least one to the limit. Changing the signs of the inputs merely changes the overall sign of the output, so the restriction to positive leading coefficients is removed. Formula (4) proves the full-degree forward statement.

The difference lemma also holds with mesh at least one: use the same root perturbation and Fact C, noting that for a nonconstant polynomial the difference has fixed degree one smaller and nonzero leading coefficient. Constants give the zero difference. Since $\nabla f(x)=\Delta f(x+1)$, it holds for forward differences too.

Now let $p,q\ne0$ have degrees $m,n\le d$, and put

$$
D=m+n-d.
$$

If $D<0$, every term of (2) vanishes: a nonzero term would require both $j\le m$ and $d-j\le n$. Thus $F_d(p,q)=0$, which is allowed.

If $D\ge0$, then $d-n\le m$, $d-m\le n$, and direct reindexing of (2) gives

$$
\boxed{
F_d(p,q)=F_D\bigl(\nabla^{d-n}p,\nabla^{d-m}q\bigr).
}
\tag{17}
$$

Indeed, write $j=d-n+k$ for $0\le k\le D$; these are exactly the potentially nonzero terms of the original sum. Both new inputs have degree exactly $D$ and mesh at least one, by the difference lemma. For $D\ge1$, apply the established full-degree result; for $D=0$, (17) is the product of two nonzero constants, with $F_0(a,b)=ab$. The output degree is $D\le d$. If $a_p,a_q$ are the original leading coefficients, its leading coefficient is exactly

$$
\frac{m!n!}{D!}\,a_pa_q\ne0.
\tag{18}
$$

If either input was zero, the output is zero by bilinearity. These cases prove (1) for all polynomials permitted by the actual statement.

## 7. Sharpness and explicit low-degree checks

The bound one is attained. Put $s_d(x)=x(x-1)\cdots(x-d+1)$. Since $(\nabla^js_d)(0)=0$ for $j<d$ and $(\nabla^ds_d)(0)=d!$,

$$
F_d(s_d,q)=d!q\qquad(\deg q\le d).
$$

In particular, $F_d(s_d,s_d)=d!s_d$ has mesh exactly one when $d\ge2$.

For example,

$$
\begin{aligned}
p(x)&=x(x-2),&q(x)&=x(x-3),\\
F_2(p,q)(x)&=2x^2-8x+2
 =2\bigl((x-2)^2-3\bigr).
\end{aligned}
$$

Its roots $2\pm\sqrt3$ have gap $2\sqrt3>1$. The mesh hypothesis also matters: $p=q=x^2$ are real-rooted but have mesh zero, and

$$
F_2(x^2,x^2)=2x^2+2x+1
$$

has no real roots. Thus the spacing hypothesis is necessary.

## 8. Independent verification

A separate Codex instance implemented the supplied standard-library Python verifier independently from the exposition. The primary instance reviewed its polynomial arithmetic, Sturm sequences, root isolation and gcd handling, then ran the final program. All checks passed.

Two convolution implementations are compared: direct repeated polynomial differences, and finite evaluations in the falling-factorial basis. The mesh checker does not approximate roots numerically. It uses exact rational Sturm counts to certify simple real roots and isolate the roots of

$$
\frac{h(x)h(x+1)}{\gcd(h(x),h(x+1))}.
$$

This polynomial orders both root sets. Shared roots are detected exactly by the gcd, so gaps equal to one are distinguished from smaller gaps. If $\alpha_i$ are the ordered roots of $h$ and $\beta_i=\alpha_i-1$ are those of $h(x+1)$, the tested criterion is $\beta_i<\alpha_i\le\beta_{i+1}$ (with the second inequality for $i<\deg h$).

The completed run checked:

| Checks | Number and scope |
|---|---|
| Factorial-basis convolution formulas | 204 forward and 204 backward basis pairs, all ambient degrees $0$ through $7$ |
| Two independent convolution implementations, reflection, commutativity, translation and sharpness identity | 91 cases for each identity, one deterministic rational-coefficient case for each $(d,m,n)$ with $0\le m,n\le d\le5$ |
| Exact degree reduction | 56 nonzero degree/leading-coefficient cases and 35 zero-output cases |
| Difference and polar recursions | 90 difference-recursion cases and 70 polar-recursion cases |
| Zero input | 182 checks |
| Unit-mesh boundary family | 56 exact nonzero outputs, including every degree triple through $d=5$ with $m+n\ge d$, plus 35 zero outputs |
| Rational-grid input pairs | 180 pairs with $2\le d\le5$, varying degrees, gaps and leading-coefficient signs; 360 input certificates, 159 nonzero output certificates and 21 zero outputs |
| Root-order certificates of degree at least two | 63 nonzero outputs from the rational-grid family |
| Checker controls | Eight positive/negative controls, plus the explicit $F_2(x^2,x^2)$ non-real-rooted foil |

Four explicit examples and eight representative rational-grid certificates, including rational isolating intervals, are recorded in the JSON result. Constants and linears are accepted with infinite mesh; zero convolution outputs are checked separately and admitted as required by the problem. The mesh-checking subroutine itself returns a separate rejection for zero so that a zero is never silently counted as a nonzero root certificate.

Run the supplied program with Python 3:

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/19) for this material.

The seed is 2200010; all arithmetic uses Python's exact fractions. No symbolic-algebra package, floating-point root finder or formal proof assistant was used. These finite checks supplement the all-real-input mathematical proof and are not an extrapolation to all degrees.

## 9. Attribution, source inspection, and remaining gaps

The full affirmative answer, including the step-$b$ generalization, is the established Leake–Ryder theorem. Their direct proof builds on Lamprecht's interlacing method. The partial-fraction proof above follows the same induction, with an explicitly derived polar lemma, reflection identity (4), and exact degree reduction (17). These details explain the application to this precise catalogue formulation; they are not a claim of a new resolution.

The exact catalogue statement and live prompt were read; the prompt listed no earlier contributions, and a repository issue search found no prior TOP-2200010 attempt at inspection. The Leake–Ryder preprint was inspected for Theorems 1.4 and 1.8, the difference convention, and the direct proof in Sections 3.1 and 3.3. The original forward-difference definitions and conjectures were checked in the Brändén–Krasikov–Shapiro preprint and Shapiro survey. Publication metadata was checked against the Leake–Ryder publisher record and the BKS publisher/institutional records. The primary instance and two separate reviewers checked the full argument above, including common-root cancellation and every degree boundary. No mathematical gap was found. Editorial review and independent human verification remain pending. No assertion is made about the other conjectures in those papers.

Models used: **OpenAI Codex (GPT-6; exact serving revision and reasoning setting unknown)**, in four same-model instances: primary research, normalization derivation, full-proof and verifier audit, execution and submission; mathematical source research and proof drafting; a separate mathematical audit; and separate verifier implementation with a further proof audit. The reviews are separate same-model checks. Human contributors and roles: **Gaven (@gavenren)** requested and authorized the work and public submission; no human mathematical proof contribution or verification was supplied in this session.

References (checked):

1. Jonathan Leake and Nick Ryder, *Connecting the q-multiplicative convolution and the finite difference convolution*, **Advances in Mathematics 374** (2020), article 107334, DOI [10.1016/j.aim.2020.107334](https://doi.org/10.1016/j.aim.2020.107334). [Full preprint, arXiv:1712.02499](https://arxiv.org/pdf/1712.02499), Theorem 1.4 and Sections 3.1–3.3. The preprint was posted in December 2017.
2. Petter Brändén, Ilia Krasikov and Boris Shapiro, *Elements of Pólya–Schur theory in the finite difference setting*, **Proceedings of the American Mathematical Society 144** (2016), 4831–4843, DOI [10.1090/proc/13115](https://doi.org/10.1090/proc/13115). [Full preprint, arXiv:1204.2963](https://arxiv.org/pdf/1204.2963), Section 4, Conjectures 2 and 3. The inspected preprint version is dated June 2013; this is distinct from the publication year.
3. Boris Shapiro, *Problems Around Polynomials — The Good, The Bad and The Ugly*, **Arnold Mathematical Journal 1** (2015), 91–99, Conjecture 6. [Full preprint, arXiv:1503.05295](https://arxiv.org/pdf/1503.05295).
4. We-Solve, [TOP-2200010 / Math-3461 problem page](https://we-solve.github.io/problems/problems-around-polynomials-conjecture-6/), [exact statement](https://github.com/We-Solve/research/blob/main/problems/cd/prb_cd7e030428494885b830747fa685b68f/statement.tex), and [live prompt](https://we-solve.github.io/prompts/TOP-2200010.txt).


<details>
<summary>Complete executable exact-arithmetic verifier (Python 3, standard library)</summary>

The program and mathematical argument are separate checks. Run without Python optimization flags; all arithmetic and root counts are exact. The default output is verification_results.json beside the script, or choose a path with --output.

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/19) for this material.

</details>



## Attribution and references from the original submission

### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6; exact serving revision unknown)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), primary instance | version: unknown | reasoning: unknown | role: selected the problem, checked primary sources, derived the reflection and degree identities, audited the full proof and verifier, ran the final checks, prepared and submitted this report.

OpenAI Codex (GPT-6), mathematical instance | version: unknown | reasoning: unknown | role: researched the published resolution, developed and wrote the complete partial-fraction proof, checked its algebra and boundary cases.

OpenAI Codex (GPT-6), separate mathematical reviewer | version: unknown | reasoning: unknown | role: audited the full proof, especially repeated intermediate roots, residue signs, polar argument, shift criterion and degree reductions.

OpenAI Codex (GPT-6), verifier instance | version: unknown | reasoning: unknown | role: independently implemented exact polynomial and Sturm verification, ran it, and separately audited the full mathematical proof. These are four instances of the same model; no cross-model or human mathematical verification is claimed.

### People and roles

Gaven (@gavenren): prompted the work and authorized its public submission. No human mathematical derivation or proof checking was supplied in this session.

### References

Jonathan Leake and Nick Ryder, Connecting the q-Multiplicative Convolution and the Finite Difference Convolution, Advances in Mathematics 374 (2020), article 107334, DOI https://doi.org/10.1016/j.aim.2020.107334 . Full preprint https://arxiv.org/pdf/1712.02499 , first posted 7 December 2017. Used: Theorems 1.4 and 1.8, the backward-difference convention, and the direct proof in Sections 3.1 and 3.3. The theorem and proof method are credited to these authors; the report independently rederives and expands the mathematics in new wording.

Petter Brändén, Ilia Krasikov and Boris Shapiro, Elements of Pólya–Schur theory in the finite difference setting, Proceedings of the American Mathematical Society 144 (2016), 4831–4843, DOI https://doi.org/10.1090/proc/13115 . Inspected preprint https://arxiv.org/pdf/1204.2963 (v2 dated 23 June 2013). Used: Section 4, Conjectures 2 and 3 and the original forward-difference definition. Primary institutional publication record: https://bura.brunel.ac.uk/handle/2438/18267 .

Boris Shapiro, Problems Around Polynomials — The Good, The Bad and The Ugly, Arnold Mathematical Journal 1 (2015), 91–99. Inspected https://arxiv.org/pdf/1503.05295 , Conjecture 6 and its preceding forward-difference definition.

We-Solve / ULAM.AI / UnsolvedMath contributors, TOP-2200010 / Math-3461, AMR-021-0010, CC BY 4.0. Exact catalogue statement: https://github.com/We-Solve/research/blob/main/problems/cd/prb_cd7e030428494885b830747fa685b68f/statement.tex . Live prompt: https://we-solve.github.io/prompts/TOP-2200010.txt . No previous contribution was listed in the prompt or found in the issue search at inspection.

