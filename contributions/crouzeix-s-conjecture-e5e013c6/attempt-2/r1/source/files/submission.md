# The sharp Crouzeix bound for every affine square-zero matrix

**Problem:** TOP-1300

**Claim type:** Partial result

**Exact scope:** For every finite complex matrix A=λI+N with N²=0 and every f analytic near W(A), ||f(A)||≤2 max_W(A)|f|; a stronger exact norm formula and a refined scalar bound are proved, uniformly in matrix size.

## Exact theorem

Let $A=\lambda I+N$, with $N^2=0$, and put $r=\|N\|/2$. If $N\ne0$, then $W(A)$ is the closed disk of center $\lambda$ and radius $r$, and

$$\|f(A)\|=\sqrt{|f(\lambda)|^2+r^2|f'(\lambda)|^2}+r|f'(\lambda)|.$$

Writing $M=\max_{z\in W(A)}|f(z)|$, we prove the sharper estimate

$$\|f(A)\|\le M+\sqrt{M^2-|f(\lambda)|^2}\le2M.$$

For $N=0$ one instead has $\|f(A)\|=|f(\lambda)|=M$. This establishes the constant-two conjecture on the whole affine square-zero class in arbitrary finite dimension, not only a chosen $2\times2$ example.

## Orthogonal form and numerical range

Since $\mathrm{ran}N\subseteq\ker N$, decompose the Hilbert space as $\ker N\oplus(\ker N)^\perp$. The matrix of $N$ has form

$$N=\begin{pmatrix}0&B\\0&0\end{pmatrix}.$$

Singular-value decomposition of $B$ gives a unitary change of basis making $N$ an orthogonal direct sum of blocks $\left(\begin{smallmatrix}0&s_j\\0&0\end{smallmatrix}\right)$ with $s_j>0$ and zero scalar blocks. The largest $s_j$ is $\|N\|$.

For a unit vector $(u,v)$, $|\langle Nv,u\rangle|\le\|N\|\|u\|\|v\|\le\|N\|/2$. The block with largest singular value attains every point of the disk of that radius: on its two-dimensional space the numerical-range value is $s\overline a b$ with $|a|^2+|b|^2=1$; its phase is arbitrary and its magnitude ranges from $0$ to $s/2$. Thus $W(N)$ is exactly that disk, and translation gives the claim for $A$.

## Functional calculus and the exact block norm

The Taylor series at $\lambda$ terminates upon substitution of $N$ because $N^2=0$:

$$f(A)=aI+bN,\qquad a=f(\lambda),\quad b=f'(\lambda).$$

On a singular-value block this is $\left(\begin{smallmatrix}a&bs\\0&a\end{smallmatrix}\right)$. Multiplying out its Gram matrix gives largest squared singular value

$$|a|^2+\frac{|bs|^2}{2}+\frac{|bs|}{2}\sqrt{4|a|^2+|bs|^2}.$$

Its positive square root is $\sqrt{|a|^2+(|bs|/2)^2}+|bs|/2$, an increasing function of $s\ge0$. The zero scalar blocks contribute $|a|$, no larger than this value at the largest $s$. Therefore the stated exact norm follows with $s=2r$. This formula includes $a=0$ or $b=0$ without a division by either.

## A coefficient estimate on the numerical disk

Because $f$ is analytic on a neighborhood of the closed disk, write

$$f(\lambda+rz)=\sum_{j\ge0}c_jz^j,\qquad c_0=a,\ c_1=rb.$$

Orthogonality of Fourier modes on the unit circle gives

$$|a|^2+r^2|b|^2\le\sum_{j\ge0}|c_j|^2
 =\frac1{2\pi}\int_0^{2\pi}|f(\lambda+re^{it})|^2dt\le M^2.$$

Set $c=r|b|$. Then $\sqrt{|a|^2+c^2}\le M$ and $c\le\sqrt{M^2-|a|^2}$. Substitute these inequalities into the exact block norm. This proves the refined bound and hence $\|f(A)\|\le2M$. If $M=0$, analyticity gives $a=b=0$ and all formulas still hold.

The factor two is attained whenever $N\ne0$ by $f(z)=z-\lambda$: its maximum on the numerical disk is $r$, while $\|f(A)\|=\|N\|=2r$. Thus a uniform constant smaller than two fails even within this class.

## Attribution and boundary

This is a self-contained classical model-case argument based on singular values and Parseval. The checked Crouzeix-related primary preprint discusses affine square-zero models in a different lens/sector setting; no result from that broader setting is needed here. The earlier We-Solve revision reports unverified all-operator constant-two claims from 2026 OpenAI manuscripts. This proof does not audit those manuscripts. It proves the displayed class directly and does not extend the singular-block argument to a matrix with $N^3=0$ but $N^2\ne0$, or to an arbitrary nonnormal matrix.

## References checked

- Fixed Convex-Lens Spectral Constants: Möbius Reduction, Sharp Model Theorems, and Angle-Dependent Bounds, primary preprint describing affine square-zero models: https://www.preprints.org/manuscript/202608.1272
- Earlier revision inspected: https://we-solve.github.io/contributions/crouzeix-s-conjecture-e5e013c6/attempt-1/r1/


## Reproducibility and review

Proof only; no computational verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Fixed Convex-Lens Spectral Constants: Möbius Reduction, Sharp Model Theorems, and Angle-Dependent Bounds, primary preprint describing affine square-zero models: https://www.preprints.org/manuscript/202608.1272
Earlier revision inspected: https://we-solve.github.io/contributions/crouzeix-s-conjecture-e5e013c6/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.
