# A uniform bound for two active characteristic roots, and a sharp order-three example in that class

**Problem:** TOP-2200004 / Math-1837.  
**Claim type:** Partial result.

**Exact scope.** For every order $k\ge2$, every nonzero solution using at most two distinct characteristic roots has at most $2k-3$ real zeros, counted with analytic multiplicities. This bound is independent of the roots, their imaginary parts, and their real-part separation. An explicit equation in $\Omega_3$ has a solution with exactly three simple real zeros, attaining this two-root bound. Also, the common-imaginary-part subfamily has the sharp bound $k-1$, and the complete answers for orders one and two are $B(1)=0$, $B(2)=1$.

**Limitation.** We do not establish a bound depending only on $k$ for solutions with three or more active roots whose imaginary parts differ. In particular this does not settle the full order-three question. No novelty claim is made for the zero-counting method.

## 1. A real exponential-polynomial lemma

Let
$$h(x)=\sum_{j=1}^r A_j(x)e^{a_jx},$$
where $a_j$ are distinct real numbers and $A_j$ are nonzero real polynomials. Put
$$D=\sum_{j=1}^r(\deg A_j+1).$$
Then $h$ has at most $D-1$ real zeros with multiplicities.

Here is a direct proof. For one summand, multiplication by a nonvanishing exponential leaves only the polynomial's zeros. For the induction step, divide by $e^{a_1x}$ and differentiate $m=\deg A_1+1$ times. The first summand disappears. For $j>1$, the resulting polynomial coefficient is
$$(\partial_x+a_j-a_1)^m A_j,$$
which has the same degree and is nonzero, since $a_j-a_1\ne0$. The resulting real exponential polynomial therefore has dimension parameter $D-m$, and by induction at most $D-m-1$ zeros. Repeated Rolle's theorem says that any finite collection of $N$ zeros of the original function, counted with multiplicities, produces at least $N-m$ zeros after the differentiations when $N\ge m$. Thus $N\le D-1$. When $N<m$ the conclusion is immediate. Applying this to every finite collection also rules out more than $D-1$ zeros on the whole line. Nonvanishing of exponential-polynomial expressions with distinct real exponents follows, for example, by domination of their largest exponential as $x\to+\infty$.

## 2. Two active complex roots

Suppose both summands in
$$y(x)=P(x)e^{\lambda x}+Q(x)e^{\mu x}$$
are nonzero and $\mathrm{Re}\lambda\ne\mathrm{Re}\mu$. Write $p=\deg P$, $q=\deg Q$. Define the real-valued function
$$H(x)=|P(x)|^2e^{2\mathrm{Re}\lambda x}
       -|Q(x)|^2e^{2\mathrm{Re}\mu x}.$$
For real $x$, $|P(x)|^2=P(x)\overline{P(x)}$ is a real polynomial of degree $2p$, and similarly for $Q$. Distinct exponential rates imply $H$ is not identically zero. The lemma gives at most
$$2p+2q+1$$
zeros of $H$ with multiplicities.

Every real zero of $y$ is a zero of $H$, with at least the same multiplicity. To verify the multiplicity statement, put $u=P e^{\lambda x}$ and $v=Qe^{\mu x}$. On the real line,
$$H=(u+v)\overline u-v(\overline u+\overline v)
  =y\overline u-v\overline y.$$
If $y$ has a zero of analytic order $m$ at a real point, both $y$ and its conjugate on the real line vanish there to order $m$. Hence so does $H$ to order at least $m$. This also covers common zeros of $P$ and $Q$.

If $y$ is a solution of an order-$k$ equation, the characteristic multiplicities of these two active roots are at least $p+1$ and $q+1$. Therefore $p+q+2\le k$, giving
$$\#\{\text{real zeros of }y\}\ \le\ 2p+2q+1\ \le\ 2k-3$$
with multiplicities. Other roots may occur in the equation if their solution coefficients are zero. If only one root is active, the solution is $P e^{\lambda x}$ and has at most $k-1\le2k-3$ zeros for $k\ge2$.

## 3. An equation in $\Omega_3$ with exactly three real zeros

Set
$$\lambda=\frac23(\log2+i\pi),\qquad
y(x)=x-e^{\lambda(x-1)}.$$
Then
$$y'''-\lambda y''=0,$$
whose characteristic polynomial is $t^2(t-\lambda)$. Its distinct roots are $0$ and $\lambda$, with real parts $0$ and $(2/3)\log2>0$. Thus this equation belongs to the stated $\Omega_3$: the repeated root $0$ is permitted.

For $x=-1/2,1,4$, the number $t=(2/3)(x-1)$ is respectively $-1,0,2$. Consequently
$$e^{\lambda(x-1)}=e^{t(\log2+i\pi)}=(-2)^t=x.$$
These are three real zeros. At any of them,
$$y'(x)=1-\lambda x,\qquad
\mathrm{Im}\,y'(x)=-\frac{2\pi}{3}x\ne0,$$
so each is simple. Section 2 bounds their total number by three, proving that there are no other real zeros. In particular the usual real-spectrum bound $k-1$ cannot hold for all equations in $\Omega_k$.

## 4. Common imaginary part and the smallest orders

Suppose all active roots have the same imaginary part $b$. Then
$$e^{-ibx}y(x)=\sum_j P_j(x)e^{a_jx},\qquad a_j\in\mathbb R$$
with distinct $a_j$. Choose a constant phase $\theta$ for which the real-valued function
$$g(x)=\mathrm{Re}\left(e^{-i\theta}e^{-ibx}y(x)\right)$$
is not identically zero. This is possible by evaluating at one point where $y\ne0$. It is a real exponential polynomial with dimension parameter at most $k$. Every real zero of $y$ gives a zero of $g$ of at least the same multiplicity. The lemma therefore gives the bound $k-1$. It is sharp: take one characteristic root and multiply its exponential by a real polynomial with $k-1$ distinct real roots.

For $k=1$ every nonzero solution is a nonvanishing exponential, so $B(1)=0$. For $k=2$ every solution uses at most two roots and Section 2 gives $B(2)\le1$; $1-e^x$ attains one, so $B(2)=1$.

## 5. Verification and audit

The standard-library script `verify.py` checks the differential equation formally with $\lambda$ an indeterminate. It checks the three exponential values exactly using rational arithmetic and the displayed exponential identity, and records their nonzero derivative imaginary parts in `verification.json`. It performs no numerical root search. The universal bound and exhaustion of the zeros are supplied by the proof above.

The hypotheses include arbitrary complex coefficients, repeated characteristic roots, arbitrarily small nonzero real-part gaps, and multiplicity counting. The proof never treats a zero of only the real part as a zero of $y$; the real-valued functions are used to obtain upper bounds on the common zeros. The unresolved case is explicitly excluded from the claim.

## Checked references and attribution

1. We-Solve, official TOP-2200004 prompt, read on 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-2200004.txt .
2. Boris Shapiro, *Problems Around Polynomials: The Good, The Bad and The Ugly…* (2015), Section 2, Problem 1: https://armj.math.stonybrook.edu/html-articles/Files-2015-2024/14-08/ . This is the originating uniform-bound question.
3. Boris Shapiro, *A note on real zeros of exponential polynomials*, author-hosted manuscript, read on 18 October 2026, Problem 3 and the discussion of conditional bounds: https://staff.math.su.se/shapiro/Articles/RealRoots.pdf . Its general conjecture is not used as a proved theorem here.

The exposition, elementary proofs, explicit example, and verification script were prepared for this contribution. Prior literature is credited; no claim of a new resolution of the general question is made.


## Reproducibility and review

Independent elementary induction/Rolle proof, modulus-difference argument including zero multiplicities, and exact standard-library symbolic/rational checks of y'''-lambda*y''=0 and its three simple zeros. verify.py passed; output in verification.json. No numerical root search or general-solution claim.
The main instance freshly ran the attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-2200004.txt
Boris Shapiro, Problems Around Polynomials: The Good, The Bad and The Ugly (2015), Section 2, Problem 1; https://armj.math.stonybrook.edu/html-articles/Files-2015-2024/14-08/
Boris Shapiro, A note on real zeros of exponential polynomials, author-hosted manuscript; https://staff.math.su.se/shapiro/Articles/RealRoots.pdf
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
