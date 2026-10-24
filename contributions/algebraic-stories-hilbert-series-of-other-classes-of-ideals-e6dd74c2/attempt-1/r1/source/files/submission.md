# TOP-1500011: equality for at most one extra generator, and for every binary case

**Claim type:** Partial result, with credited standard results and exact witnesses.  
**Scope:** The requested equality holds for every $d>1,k\ge1$ when $r\le n+1$, and also for every $r$ when $n\le2$. The unrestricted range $n\ge3,r\ge n+2,k\ge2$ is not settled here.

Put $D=dk$ and

$$G_{n,D,r}(t)=\left[\frac{(1-t^D)^r}{(1-t)^n}\right]_+.$$

In the stated ranges, both ideals in the catalogue have this series. These are known positive cases. The binary powers assertion is Lundqvist–Oneto–Reznick–Shapiro [LORS, Lemma 2.2]. The complete-intersection and one-extra-generator cases use the classical monomial complete-intersection Lefschetz theorem, recorded with its explicit witness in [FLOS, Sections 2.1–2.3]. No new general proof of the conjecture is claimed.

For $k=1$, the requested equality itself is automatic for every $n,r$: both tuples are ordinary generic forms of the same degree. This does not assert the product formula in any still-unproved range of the ordinary Fröberg conjecture.

## 1. The comparison that transfers an explicit witness to generic powers

For an $r$-tuple of degree-$D$ generators $h_i$, its degree-$q$ ideal piece is the image of

$$\bigoplus_{i=1}^r S_{q-D}\longrightarrow S_q,
\qquad(A_i)\longmapsto\sum_i A_i h_i. \tag{1}$$

Matrix entries depend polynomially on the generators. Thus quotient dimensions are minimized on a nonempty open locus. An unrestricted general degree-$D$ tuple has Hilbert function no larger than that of a general tuple $g_i^k$, since the latter is a restricted family. Conversely, the general restricted tuple has Hilbert function no larger than a particular specialization in its closure.

Choose $g_i=L_i^d$. Then $g_i^k=L_i^D$. If these pure powers realize the ordinary generic Hilbert series, the two inequalities squeeze the generic-power series to the same answer:

$$H_{\mathrm{ordinary\ generic}}(q)\le
H_{\mathrm{generic\ powers}}(q)\le H_{\mathrm{pure\ power\ witness}}(q). \tag{2}$$

The inequalities are statements about each generic parameter space, not arbitrary specializations. In the Artinian cases only finitely many degrees need to be checked to obtain one open set: once a witness ideal contains all forms in a degree, it contains every higher degree. In the complete-intersection range, regular sequences directly give the whole series.

## 2. Arbitrary variable count and $r\le n+1$

When $r\le n$, a generic tuple $g_1,\ldots,g_r$ is a regular sequence, and taking positive powers of a regular sequence preserves regularity. Its quotient series is

$$\frac{(1-t^{dk})^r}{(1-t)^n}.$$

The same formula applies to ordinary generic degree-$dk$ forms. This case can also be witnessed by $g_i=x_i^d$, whose powers are $x_i^D$. The homogeneous complete-intersection series has nonnegative coefficients and equals the specified positive truncation. The elementary fact about powers follows, for one regular element $g$, from the filtration of $R/(g^k)$ by $g^j/(g^k)$, whose successive factors are shifted copies of $R/(g)$; iterating along a regular sequence gives the usual complete-intersection filtration.

For $r=n+1$, specialize

$$g_1=x_1^d,\ldots,g_n=x_n^d,
\qquad g_{n+1}=(x_1+\cdots+x_n)^d.$$

The resulting degree-$D$ ideal is

$$J=(x_1^D,\ldots,x_n^D,(x_1+\cdots+x_n)^D). \tag{3}$$

The classical strong Lefschetz theorem for the monomial complete intersection $A=S/(x_1^D,\ldots,x_n^D)$ says that multiplication by $(x_1+\cdots+x_n)^D$ has maximal rank in every degree. Its quotient (3) therefore has Hilbert series $G_{n,D,n+1}$. This same specialization proves the ordinary generic-forms formula for $n+1$ generators; it is the explicit Stanley witness recorded in [FLOS, p.145]. Applying (2) proves the desired generic-power equality throughout this range.

This argument uses a theorem valid in characteristic zero. No assertion is made that all complete intersections, or every special tuple of $g_i$, have these Lefschetz properties.

## 3. The binary range for any number of generators

Here is a direct explanation of the pure-power witness in two variables. Let $L_1,\ldots,L_r\in\mathbb C[x,y]_1$ be pairwise nonproportional and set $J=(L_1^D,\ldots,L_r^D)$. For $q<D$ the quotient dimension is $q+1$.

For $q\ge D$, use the perfect degree-$q$ differential pairing with $\mathbb C[X,Y]_q$. The orthogonal complement of $L_i^D S_{q-D}$ consists of forms divisible by $M_i^{q-D+1}$, where $M_i$ is the dual linear form vanishing at the coefficient point of $L_i$. This follows after making $L_i=\partial_X$: annihilation by $\partial_X^D$ is equivalent to $Y^{q-D+1}$ dividing a degree-$q$ polynomial.

The $M_i$ are distinct. Their powers are relatively prime, so simultaneous divisibility is divisibility by their product. Therefore

$$\dim(S/J)_q=
\begin{cases}
q+1,&q<D,\\
\max\{0,q+1-r(q-D+1)\},&q\ge D.
\end{cases} \tag{4}$$

For $r\ge2$ this is the truncated-product series: before degree $2D$ its raw coefficient is exactly the displayed linear expression, and its first zero occurs by degree $2D-1$, so later Koszul terms cannot restart a positively truncated series. The elementary dimension bound from (1) proves that no degree-$D$ tuple has a smaller Hilbert function before this zero. At the witness's zero and thereafter the dimension cannot be negative. Thus this witness realizes the ordinary generic series. Formula (2) proves the equality for generic powers of binary forms for every $r$.

For $r=1$ the principal-ideal series is immediate and (4) remains valid, with eventual value $D$. In one variable every nonzero degree-$D$ generator is a scalar multiple of $x^D$, so the analogous assertion also holds for every $r$.

## 4. Exact verification and limits

The attached program has two independent checks. It constructs multiplication by $L^D$ inside the explicit monomial complete intersection for $2\le n\le4$, $2\le D\le4$, using exact multinomial coefficients and Gaussian elimination over $\mathbb Q$. The quotient dimensions are compared with the positively truncated product. It separately constructs binary Macaulay matrices for $(x+i y)^D$, with $2\le D\le8$ and $1\le r\le6$, and checks (4) in every degree through $2D$.

Run `python3 verify_powers.py`; the recorded output is `verification.json`. These are exact witness checks, not a proof by finite extrapolation. The all-parameter conclusions use the stated theorem and algebraic comparison. The generic-power equality remains outside this contribution's scope when $n\ge3,r\ge n+2,k\ge2$. No novelty, real-field analogue, or positive-characteristic assertion is claimed.

## Checked references

- [LORS] Samuel Lundqvist, Alessandro Oneto, Bruce Reznick and Boris Shapiro, *On generic and maximal k-ranks of binary forms*, [arXiv:1711.05014v1](https://arxiv.org/pdf/1711.05014), 14 November 2017, Lemma 2.2, for generic powers of binary forms, even with differing degrees and exponents. Only the equal-degree slice needed here is claimed.
- [FLOS] Ralf Fröberg, Samuel Lundqvist, Alessandro Oneto and Boris Shapiro, *Algebraic Stories from One and from the Other Pockets*, Arnold Mathematical Journal 4 (2018), 137–160, [published PDF](https://amj.math.stonybrook.edu/pdf-Springer-final/018-0088.pdf), pp.145–148: complete-intersection/one-extra-generator cases, explicit Stanley witness, Conjecture 2.4 and binary discussion.
- [Official TOP-1500011 prompt](https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1500011.txt), checked 18 October 2026, for the exact comparison with independent ordinary generic forms and the restriction $d>1$.


Preparation and review: OpenAI Codex (GPT-6; exact serving revision and reasoning configuration unknown) supplied the authoring, exact-code verification, independent LLM audit and coordination/source checks through separate instances. Gaven prompted the work and authorized submission. No human mathematical review or editorial acceptance is claimed.


## Reproducibility and review

Exact rational Macaulay and Lefschetz witness matrices, comparing quotient dimensions to truncated products; fresh run and ranges recorded in verification.json.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify_powers.py


*Code is not included in this manuscript.*

## References

https://arxiv.org/pdf/1711.05014
https://amj.math.stonybrook.edu/pdf-Springer-final/018-0088.pdf
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1500011.txt
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
