### Problem handle

prb_4c50f9b914a642b2bc37e90aff6d8120

### Claim

Partial result

### Exact scope

For the Euclidean norm of nonleading coefficients, proves that the closed-left-half-plane stable real monic quartic set fails prox-regularity at z^4, and separately that the complex monic quadratic set fails prox-regularity at z^2. In each setting, every neighborhood of the monomial contains a polynomial with at least two global nearest stable polynomials; all nearest points also approach the monomial. The leading coefficient is fixed. No all-degree classification, other-norm result, explicit formula for nonunique-projection centers, or finite-subgradient prox-regularity conclusion for the abscissa function is claimed.

Significance relative to the checked source: The original archive established only the convex real quadratic case. The present proof supplies explicit normal-support obstructions and negative local-uniqueness results: directly in Lewis's complex monic Euclidean formulation and separately for real monic quartics. It addresses the nearest-stable-polynomial target using the precise finite-dimensional projection theorem. Classical quartic boundary geometry is credited, and the source extract's unproved equivalence with abscissa-function regularity is not adopted.

### Write-up

Complete standalone LaTeX source (`manuscript.tex`), SHA-256 `506c5e7dd7734f19c2aa1725da738aa9436b753c153ae5e43b59ef30ae1443ee`. The source is pasted intact below; no PDF or executable program is submitted.

```tex
\documentclass[11pt]{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath,amssymb,amsthm}
\usepackage[margin=1in]{geometry}
\usepackage[hidelinks]{hyperref}
\newtheorem{theorem}{Theorem}
\newtheorem{lemma}{Lemma}
\newtheorem{proposition}{Proposition}
\newcommand{\R}{\mathbb R}
\newcommand{\C}{\mathbb C}
\newcommand{\ip}[2]{\langle #1,#2\rangle}
\newcommand{\norm}[1]{\lVert #1\rVert}
\title{Nonunique nearest stable polynomials near repeated roots}
\author{Model-assisted research contribution}
\date{28 October 2026}
\begin{document}
\maketitle

\begin{abstract}
For the Euclidean norm of the nonleading coefficients, the closed set of real monic stable quartics is not prox-regular at \(z^4\). Consequently, arbitrarily near \(z^4\) there are real monic quartics with at least two nearest real monic stable quartics. We separately prove the analogous conclusion for complex monic quadratics near \(z^2\). The proofs use explicit stable boundary paths and proximal normals. These are negative results for the monic coefficient-space version of the nearest-stable-polynomial question; no conclusion about finite-subgradient prox-regularity of the abscissa function is asserted.
\end{abstract}

\section{Question, conventions, and scope}

The nearest-stable-polynomial question in Lewis's 2005 report \cite[p.~106, Question~1]{owr} asks about uniqueness near a monomial. The preceding discussion uses real polynomials, while the final question does not restate a coefficient field or norm. Lewis's earlier monic formulation \cite[Section~8]{lewis} uses complex coefficients and the real Euclidean structure making the coefficient basis and its imaginary multiples orthonormal. We treat both real and complex monic coefficient spaces explicitly.

For \(\mathbb F=\R\) or \(\C\), let
\[
 S_{n,\mathbb F}
 =\left\{c=(c_1,\ldots,c_n)\in\mathbb F^n:
       z^n+c_1z^{n-1}+\cdots+c_n
       \text{ has all roots in }\{\operatorname{Re}z\leq0\}\right\}.
\]
In complex space the inner product is
\(\ip{c}{d}=\operatorname{Re}\sum_j\overline{c_j}d_j\).
The norm is its Euclidean norm. A polynomial is stable here in the closed-half-plane sense, and zero coefficients represent \(z^n\). Write \(P_S(y)\) for the set of global nearest points to \(y\) in \(S\).

\begin{theorem}\label{thm:main}
For every \(\delta>0\):
\begin{enumerate}
\item There is \(y\in\R^4\), \(\norm{y}<\delta\), such that
      \(P_{S_{4,\R}}(y)\) contains at least two distinct points.
\item There is \(y\in\C^2\), \(\norm{y}<\delta\), such that
      \(P_{S_{2,\C}}(y)\) contains at least two distinct points.
\end{enumerate}
In each case all nearest points have norm at most \(2\norm{y}\).
The sets \(S_{4,\R}\) and \(S_{2,\C}\) are not prox-regular at zero.
\end{theorem}

The quartic stability boundary and its singularities are classical; for example, Kirillov and Overton \cite[Section~1]{kirillov} discuss the Routh--Hurwitz/Bottema geometry in a constant-term-normalized slice. Neither that boundary formula nor root sensitivity is claimed as a new result here. The contribution is the explicit normal-support obstruction at the monomial and its exact nearest-point consequence. The archived attempt for the present problem only treats the real monic quadratic case, whose stable coefficient set is a quadrant. The real quartic conclusion addresses the same projection question beyond that convex case.

The cited historical sources and targeted primary-literature searches did not yield an equivalent negative projection theorem in the material checked. This is a bounded comparison, not a comprehensive priority certification or a claim that the question's current status has been exhaustively surveyed.

\section{Normal vectors and projection uniqueness}

We recall the precise finite-dimensional facts needed from Poliquin, Rockafellar and Thibault \cite{prt}. A vector \(v\) is proximal normal to a closed set \(S\) at \(p\in S\) if \(p\in P_S(p+\tau v)\) for some \(\tau>0\). Equivalently, for some \(K\geq0\),
\begin{equation}\label{eq:quadratic}
 \ip{v}{q-p}\leq K\norm{q-p}^2
 \qquad(q\in S).
\end{equation}
Indeed, expanding the squared distance proves necessity and proves sufficiency for a sufficiently small positive \(\tau\). The limiting normal cone \(N_S(p)\) consists of limits of proximal normals at points converging to \(p\), together with zero.

The definition of prox-regularity at \(\bar p\) for
\(\bar v\in N_S(\bar p)\), in the form of \cite[Definition~1.1]{prt}, requires constants \(\eta,\rho>0\) such that, for nearby \(p\in S\) and \(v\in N_S(p)\) near \(\bar v\), \(p\) is the unique nearest point in \(S\cap B(\bar p,\eta)\) to \(p+\rho^{-1}v\). In particular it requires
\begin{equation}\label{eq:uniform}
 \ip{v}{q-p}\leq \frac{\rho}{2}\norm{q-p}^2
 \qquad(q\in S\cap B(\bar p,\eta)).
\end{equation}
Prox-regularity at a point requires this property for every limiting normal there.

We invoke the following exact consequence of
\cite[Theorem~1.3(a),(k)]{prt}: for a closed subset of a finite-dimensional Euclidean space, prox-regularity at \(\bar p\) is equivalent to single-valuedness of the global metric projection on some neighborhood of \(\bar p\). Its additional relative weak-closure hypothesis is automatic in finite dimension. We will disprove prox-regularity using \eqref{eq:uniform}.

\begin{lemma}\label{lem:smooth}
Suppose a closed set \(S\) agrees near \(p=(x_0,f(x_0))\) with the hypograph of a \(C^2\) function \(f\). Then \((-\nabla f(x_0),1)\) is a proximal normal at \(p\). For an epigraph the corresponding normal is \((\nabla f(x_0),-1)\).
\end{lemma}
\begin{proof}
For the hypograph, write \(q=(x,u)\). Taylor's inequality and \(u\leq f(x)\) imply
\[
 \ip{(-\nabla f(x_0),1)}{q-p}
 \leq f(x)-f(x_0)-\nabla f(x_0)\cdot(x-x_0)
 \leq K\norm{q-p}^2
\]
for \(q\in S\) in a sufficiently small ball about \(p\).
For other \(q\in S\), whose distance from \(p\) is at least some \(r>0\), Cauchy--Schwarz gives the same inequality with
\(K\) enlarged to at least
\(\norm{(-\nabla f(x_0),1)}/r\).
Thus \eqref{eq:quadratic} holds globally. The epigraph proof reverses the signs.
\end{proof}

\section{Real quartics}

Write a real monic quartic as
\[
 Q(z)=z^4+az^3+bz^2+cz+d.
\]
For \(0<\varepsilon\leq1/2\), put
\[
 p_\varepsilon=
 \left(\varepsilon^2,\varepsilon,
       \frac{\varepsilon^3}{4},\frac{3\varepsilon^2}{16}\right).
\]
It is stable because
\begin{equation}\label{eq:factor}
 Q_\varepsilon(z)=
 (z^2+\varepsilon/4)
 (z^2+\varepsilon^2z+3\varepsilon/4).
\end{equation}
The first factor has a simple imaginary conjugate pair; both roots of the second have strictly negative real part and are distinct, since its discriminant is \(\varepsilon^4-3\varepsilon<0\). The two factors share no root, since evaluating the second factor at either root of the first gives
\(\varepsilon/2\mathbin{\pm}i\varepsilon^2\sqrt{\varepsilon/4}\ne0\).

\begin{lemma}\label{lem:quarticboundary}
Near \(p_\varepsilon\), the stable real quartics form exactly the hypograph
\[
 d\leq f(a,b,c),\qquad
 f(a,b,c)=\frac{bc}{a}-\frac{c^2}{a^2}.
\]
\end{lemma}
\begin{proof}
The simple roots vary smoothly near this point by the implicit function theorem; the strictly left-half-plane pair stays there. The other two roots remain a conjugate pair near the imaginary pair. If one is \(i\sqrt y\), with \(y>0\), the imaginary and real parts of \(Q(i\sqrt y)=0\) give
\[
 y=c/a,\qquad d=by-y^2=f(a,b,c).
\]
Conversely, on this graph,
\[
 Q(z)=(z^2+c/a)(z^2+az+b-c/a).
\]
In a neighborhood of \(p_\varepsilon\), \(a>0\), \(c/a>0\), and \(b-c/a>0\); the second quadratic is strictly stable.
To determine the side, at an imaginary root \(z=i\sqrt y\) one has
\[
 Q'(i\sqrt y)=-2ay+2i\sqrt y\,(b-2y),\qquad
 \operatorname{Re}\left(-\frac{1}{Q'(i\sqrt y)}\right)>0.
\]
This is the derivative of the active root's real part with respect to \(d\). It is nonzero, so the graph separates the stable and unstable sides locally, and increasing \(d\) gives the unstable side. The claimed hypograph follows.
\end{proof}

At \(p_\varepsilon\),
\[
 f_a=-\frac18,\qquad f_b=\frac{\varepsilon}{4},
 \qquad f_c=\frac{1}{2\varepsilon}.
\]
By Lemma~\ref{lem:smooth}, the vector
\[
 n_\varepsilon=
 \left(\frac18,-\frac{\varepsilon}{4},
              -\frac{1}{2\varepsilon},1\right)
\]
is proximal normal. Its normalization
\(v_\varepsilon=n_\varepsilon/\norm{n_\varepsilon}\)
converges to \(v_0=(0,0,-1,0)\), so \(v_0\in N_{S_{4,\R}}(0)\).

Keep \(b=\varepsilon\), \(c=\varepsilon^3/4\) fixed, set \(a=\varepsilon^2\), and choose \(h=\varepsilon^4\). Define
\[
 q_\varepsilon=(a+h,b,c,f(a+h,b,c)).
\]
This point is stable by the factorization in Lemma~\ref{lem:quarticboundary}; its positive quadratic constant is at least \(3\varepsilon/4\). It converges to zero. Direct subtraction gives the exact positive support gap
\begin{align}
 \ip{n_\varepsilon}{q_\varepsilon-p_\varepsilon}
 &=f(a+h,b,c)-f(a,b,c)-f_a(a,b,c)h \notag\\
 &=\frac{h^2(\varepsilon^2+2h)}
          {16(\varepsilon^2+h)^2}
 \geq\frac{h^2}{64\varepsilon^2}.             \label{eq:gap}
\end{align}
Here \(h\leq\varepsilon^2\). On \(A\in[a,a+h]\), one has
\[
 -\frac14\leq
 \frac{\partial f}{\partial A}
 =-\frac{bc}{A^2}+\frac{2c^2}{A^3}\leq0.
\]
The mean value theorem therefore implies
\(\norm{q_\varepsilon-p_\varepsilon}^2\leq2h^2\).
Also, for \(0<\varepsilon\leq1/2\),
\[
 \norm{n_\varepsilon}^2
 =\frac{65}{64}+\frac{\varepsilon^2}{16}
                    +\frac{1}{4\varepsilon^2}
 \leq\frac{1}{\varepsilon^2}.
\]
Combining these estimates with \eqref{eq:gap} yields
\begin{equation}\label{eq:divergence}
 \frac{\ip{v_\varepsilon}{q_\varepsilon-p_\varepsilon}}
      {\norm{q_\varepsilon-p_\varepsilon}^2}
 \geq\frac{1}{128\varepsilon}\longrightarrow+\infty.
\end{equation}
Both points approach zero and \(v_\varepsilon\to v_0\). Thus no fixed \(\rho,\eta\) can satisfy \eqref{eq:uniform} at \((0,v_0)\). This disproves prox-regularity of \(S_{4,\R}\) at zero.

\section{Complex quadratics}

Now work independently in \(\C^2\), with
\(Q(z)=z^2+az+b\). Take
\[
 p_\varepsilon=(\varepsilon^2,\varepsilon^2+i\varepsilon^3),
 \qquad
 Q_\varepsilon(z)=(z+i\varepsilon)(z+\varepsilon^2-i\varepsilon).
\]
The roots are distinct, one on the imaginary axis and one strictly in the left half-plane. Use real orthonormal coordinates
\[
 (x,s,t,u)=(\operatorname{Re}a,\operatorname{Im}a,
            \operatorname{Im}b,\operatorname{Re}b).
\]
In a neighborhood of \(p_\varepsilon\), \(x>0\). An imaginary active root \(iy\) satisfies
\[
 y=-t/x,\qquad u=y^2+sy
       =f(x,s,t):=\frac{t^2}{x^2}-\frac{st}{x}.
\]
Conversely these equations give a root \(iy\), with the other root having real part \(-x<0\).
At \(p_\varepsilon\), the derivative of the active root's real part with respect to \(u\) is
\[
 \operatorname{Re}\left(-\frac{1}{\varepsilon^2-2i\varepsilon}\right)
 =-\frac{1}{\varepsilon^2+4}<0.
\]
The same simple-root implicit function argument as above shows that the local stable set is exactly the epigraph \(u\geq f(x,s,t)\).

Its outward proximal normal, by Lemma~\ref{lem:smooth}, is
\[
 w_\varepsilon=(\nabla f,-1)
       =(-2,-\varepsilon,2/\varepsilon,-1).
\]
Since \(p_\varepsilon\to0\) and
\(w_\varepsilon/\norm{w_\varepsilon}\to v=(0,0,1,0)\),
the vector \(v\) belongs to \(N_{S_{2,\C}}(0)\).
But
\[
 \ip{v}{p_\varepsilon}=\varepsilon^3,\qquad
 \norm{p_\varepsilon}^2=2\varepsilon^4+\varepsilon^6.
\]
For every fixed \(\rho>0\),
\[
 \norm{p_\varepsilon-\rho^{-1}v}^2-\norm{\rho^{-1}v}^2
 =2\varepsilon^4+\varepsilon^6-2\rho^{-1}\varepsilon^3<0
\]
for sufficiently small \(\varepsilon>0\). Thus zero is not even a local nearest point to \(\rho^{-1}v\) in the stable set. Definition~1.1 of \cite{prt}, applied with the point zero and normal \(v\) themselves, fails for every \(\rho\). Hence \(S_{2,\C}\) is not prox-regular at zero.

\section{Nearest-point conclusion and limitations}

For each fixed \(n\), \(S_{n,\mathbb F}\) is closed. Indeed, bounded monic coefficients give a uniform bound on all roots. From any convergent coefficient sequence of stable polynomials one can select a convergent subsequence of their ordered root tuples; the limiting factorization has only roots in the closed left half-plane. Also \(0\in S_{n,\mathbb F}\). In finite dimension a bounded minimizing sequence therefore has a convergent subsequence attaining the distance, so every global projection is nonempty.

The two failures of prox-regularity, together with
\cite[Theorem~1.3(a),(k)]{prt}, show that neither projection is single-valued on any neighborhood of zero. Nonemptiness turns this into the two asserted nonuniqueness statements in Theorem~\ref{thm:main}. If \(q\in P_S(y)\), then
\[
 \norm{q-y}\leq\norm{y},\qquad \norm{q}\leq2\norm{y},
\]
because zero is feasible. Thus the competing nearest stable polynomials also approach the monomial.

The complex quadratic conclusion is proved in the full four-real-dimensional coefficient space, not inferred from a real subset. The quartic conclusion concerns real coefficients and their own Euclidean projection. No implication between the two ambient spaces is used. We do not classify all degrees, change the norm, vary the leading coefficient, or assert an explicit closed formula for the centers with nonunique projection. Their existence follows from the precise finite-dimensional projection theorem. Strict stability would give an open feasible set and is a different nearest-point question.

Finally, these are statements about the stable set, or equivalently its indicator function. They do not prove failure of prox-regularity of the polynomial abscissa function at a finite subgradient, and they do not conflate projection onto a zero sublevel set with projection onto that function's epigraph.

\section*{Provenance, assistance, and licence}

The problem is
\texttt{prb\_4c50f9b914a642b2bc37e90aff6d8120}, statement revision
\texttt{stm\_547a66e8ccd74186be2bf7d41da2b035}, checked with its full archived attempt at We-Solve/research commit
\texttt{c4ef184d1d392f70fed32c5e862d7f24d11e8401}.
The immutable statement is
\url{https://github.com/We-Solve/research/blob/c4ef184d1d392f70fed32c5e862d7f24d11e8401/problems/4c/prb_4c50f9b914a642b2bc37e90aff6d8120/statement.tex}.

The derivations and manuscript were produced by OpenAI
\texttt{gpt-6.1-sol}, reasoning setting \texttt{ultra}, as explicitly configured for research agent e; exact serving revision and time budget were not exposed. Research agent f, under the same model/settings, independently challenged the proofs and suggested the bound keeping all nearest points near the monomial. Agent a assisted only with a bounded primary-literature overlap search. The coordinating Codex agent, based on GPT-6 with exact revision/settings unknown, supplied scope challenges and literature pointers. No human mathematical authorship or independent human proof verification is claimed.

The argument is analytic; no numerical experiment or formal proof checker is claimed. Independent mathematical and source-format checks are recorded separately. No local TeX compiler was available, so compilation and PDF rendering were not performed; source-format validation is not compilation. Original exposition and arguments are offered under CC BY 4.0; cited source material retains its own attribution and licence.

\begin{thebibliography}{9}
\bibitem{owr}
A.~S. Lewis,
\emph{Local Structure and Algorithms in Nonsmooth Optimization},
Oberwolfach Report 2/2005, pp.~104--106, especially Question~1.
\url{https://ems.press/content/serial-article-files/45976}.

\bibitem{lewis}
A.~S. Lewis,
\emph{The mathematics of eigenvalue optimization},
Mathematical Programming, Series B \textbf{97} (2003), 155--176,
Section~8, printed pp.~166--168.
\url{https://doi.org/10.1007/s10107-003-0441-3}.
Author manuscript:
\url{https://optimization-online.org/wp-content/uploads/2003/04/640.pdf}.

\bibitem{prt}
R.~A. Poliquin, R.~T. Rockafellar, and L.~Thibault,
\emph{Local differentiability of distance functions},
Transactions of the American Mathematical Society
\textbf{352} (2000), 5231--5249,
Definition~1.1, Proposition~1.2, and Theorem~1.3.
\url{https://doi.org/10.1090/S0002-9947-00-02550-2}.
Author copy:
\url{https://sites.math.washington.edu/~rtr/papers/rtr170-LocalDiffDistance.pdf}.

\bibitem{kirillov}
O.~N. Kirillov and M.~L. Overton,
\emph{Robust stability at the Swallowtail singularity},
Frontiers in Physics \textbf{1} (2013), Article~24,
Section~1.
\url{https://doi.org/10.3389/fphy.2013.00024}.
\end{thebibliography}
\end{document}
```

### Who did the work

LLM only (people only prompted or submitted)

### Models used

OpenAI GPT 6.1 Sol, Other (named below)

### Thinking level / time

Mixed (specified per model below)

### Other LLMs

OpenAI, Codex (based on GPT-6)

### Per-model versions, thinking and roles

OpenAI GPT 6.1 Sol | version: unknown (requested model ID gpt-6.1-sol) | thinking: Ultra (explicitly configured) | time: unknown | roles: /root/new200_e derived both normal-support counterexamples and authored the complete proofs; /root/new200_f supplied mathematical challenges, primary-source context and the elementary bound keeping nearest points near the monomial, and therefore is treated as mathematical assistance rather than an independent final reviewer. /root/new200_a performed a bounded primary-literature overlap search. /root/new200_c independently reviewed the full final mathematics, original-target significance and source format; /root/new200_d performed the second independent TeX source-format review.

OpenAI Codex (based on GPT-6) | version: unknown | thinking: unknown | time: unknown | roles: /root coordinated the work, supplied scope challenges and literature pointers, read the original target and full manuscript, performed a supplemental literature search, enforced reviewer independence, and assembled and submitted the issue. No mathematical authorship is claimed for this role.

### Model eligibility and verification evidence

Independent mathematical and significance reviewer: /root/new200_c, explicitly configured GPT-6.1 Sol / Ultra; exact serving revision and time budget unknown. The checked manuscript has the SHA-256 given above.

Independent review scope and outcome: Correctness and original-target significance passed on the exact submitted source. The independent reviewer read the complete pinned original and archived attempt, Lewis's full Section 8, the complete relevant Oberwolfach contribution and the definitions and exact finite-dimensional equivalence in Poliquin–Rockafellar–Thibault Theorem 1.3(a),(k). The review reconstructed both stable boundary paths, local stable-set orientation, full-ambient proximal normals, limiting normals, the quartic support-gap divergence and complex quadratic failure of quadratic support, including the stated constants. Closedness, existence of global projections and the near-monomial bound were checked. Monicity, coefficient fields, Euclidean norm, closed stability and separation from function prox-regularity were assessed explicitly. No blocking defects were found. Bounded primary comparison and separate literature searches found no equivalent negative theorem in the inspected material; comprehensive priority is not certified.

Two independent TeX source-format checks: /root/new200_c, /root/new200_d. Balanced math delimiters, braces, environments, commands, citations and standalone dependencies were checked on the exact submitted source. Automated static checks passed. No TeX compiler is available in this environment, so compilation and PDF/visual rendering were not performed.

No human or formal proof verification, comprehensive novelty certification, or editorial acceptance is claimed.

### People and roles

Gaven (@gavenren): requested the investigation and authorized submission; no human mathematical verification or authorship is claimed.

### References

- A. S. Lewis, Local Structure and Algorithms in Nonsmooth Optimization, Oberwolfach Report 2/2005, pp. 104–106, especially Question 1, https://ems.press/content/serial-article-files/45976 . The full relevant contribution was read; the short question's unstated conventions are disclosed.
- A. S. Lewis, The mathematics of eigenvalue optimization, Mathematical Programming 97 (2003), 155–176, Section 8, https://doi.org/10.1007/s10107-003-0441-3 . The complex monic Euclidean coefficient setup and stable-set prox-regularity question were checked directly.
- R. A. Poliquin, R. T. Rockafellar and L. Thibault, Local differentiability of distance functions, Transactions of the AMS 352 (2000), 5231–5249, https://doi.org/10.1090/S0002-9947-00-02550-2 . Definition 1.1, Proposition 1.2 and Theorem 1.3(a),(k), including the finite-dimensional hypotheses, supply the cited general projection equivalence; the general theorem is invoked rather than newly proved.
- O. N. Kirillov and M. L. Overton, Robust stability at the Swallowtail singularity, Frontiers in Physics 1 (2013), Article 24, https://doi.org/10.3389/fphy.2013.00024 . Classical quartic stability-boundary geometry is credited; no novelty is claimed for that geometry alone.
- Immutable original statement and complete archived real-quadratic attempt con_3fb7dd7480c74ef5b57999287ed31be6 were read at commit c4ef184d1d392f70fed32c5e862d7f24d11e8401; the original problem link is included in the manuscript.

### Declarations

- [X] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [X] I understand that this issue and its contents are public immediately.
- [X] Every LLM and person involved is listed, with versions or "unknown".
