# Chen–Yang asymptotics for the figure-eight and Borromean complements

Problem: TOP-30006929

Claim type: Literature report

Exact scope: Detcherry–Kalfagianni–Yang’s published theorem verifies the exact odd-level, q=exp(2πi/r) Chen–Yang volume limit for the compact cores of the figure-eight knot complement and the Borromean rings complement. The root and colored-Jones normalization conversion are made explicit.

## The exact known theorem

Detcherry, Kalfagianni and Yang [1, Theorem 1.6] prove, for L equal to the figure-eight knot or the Borromean rings and M=S^3 minus an open tubular neighborhood of L,

\[
\lim_{r\to\infty,\ r\text{ odd}}\frac{2\pi}{r}
\log\mathrm{TV}_r(M;e^{2\pi i/r})=\mathrm{Vol}(\mathrm{int}M).
\]

Their compact-core invariant and its normalization are those used in Chen–Yang's conjecture. Thus this is an actual special case of the prompt, not a nearby root-of-unity statement. Hyperbolic volume refers to the complete interior with sectional curvature -1; removing a different tubular neighborhood does not change that interior's hyperbolic volume.

## Normalization and positivity checks

The paper uses q=A^2 and the colored-Jones variable t=A^4. At the target root, choose A=exp(pi i/r), so t=exp(4 pi i/r). Its colored Jones polynomial is normalized by J_{U,i}=[i], rather than the reduced unknot value one. Theorem 1.1(2) gives, with l the number of components,

\[
\mathrm{TV}_r(M;q)
=2^{l-1}\frac{4\sin^2(2\pi/r)}r
\sum_{1\leq i_1,\ldots,i_l\leq(r-1)/2}|J_{L,\mathbf i}(t)|^2.
\]

The coefficient is positive and the all-one-color term is one. The logarithm is consequently of a positive real number at every odd r>3. This rules out a hidden choice of complex logarithm in these two examples.

Here is the elementary normalization estimate. For fixed l, the displayed prefactor has logarithm O(log r), since sin(2pi/r) is bounded above and below by positive constant multiples of 1/r for large r. Hence multiplying by 2pi/r makes its logarithmic contribution tend to zero. The number of color tuples is ((r-1)/2)^l, also polynomial. For nonnegative numbers a_i,

\[
\max_i a_i\leq\sum_i a_i\leq((r-1)/2)^l\max_i a_i.
\]

The scaled logarithms of the sum and maximum therefore have the same limiting rate whenever either is controlled. This elementary bound does not itself identify that rate: the essential colored-Jones asymptotics are supplied by the cited theorem.

Notice that the color range ends at (r-1)/2 and t=exp(4pi i/r). One may not insert the usual reduced N-colored value at exp(2pi i/N) without a separate argument. In particular, the standard figure-eight volume-conjecture calculation is not by itself a proof of this Turaev–Viro result.

## Added value, verification, and remaining gap

The earlier attempt proves an asymptotic for a quantum-factorial building block and isolates a cancellation problem. This report supplies a checked theorem giving the entire invariant's limit in two explicit hyperbolic cases, plus the full q/A/t dictionary and the positive squared-sum estimate. It does not repeat the building-block calculation.

The number of link components is fixed when taking the limit. No exponential or changing-root normalization is introduced. The sum's positivity prevents cancellation within this expression, but deriving a comparably useful expression or a matching maximum for every hyperbolic manifold remains outside the argument. Closed manifolds, general cusped manifolds, and the totally geodesic boundary class are not settled by these examples.

No numerical state sum or proof assistant run was performed. The source theorem and conventions were checked directly; its 28-page argument has not been independently reproduced in this contribution.

## Checked references

1. R. Detcherry, E. Kalfagianni and T. Yang, Turaev–Viro invariants, colored Jones polynomials, and volume, Quantum Topology 9 (2018), 775–813, Theorems 1.1(2), 1.6 and Corollary 1.2; arXiv:1701.07818v3 (9 July 2018). https://arxiv.org/pdf/1701.07818v3 ; https://ems.press/journals/qt/articles/15826


## Reproducibility and review

Proof/source audit only; no computational verification of the external theorem was performed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

R. Detcherry, E. Kalfagianni and T. Yang, Turaev–Viro invariants, colored Jones polynomials, and volume, Quantum Topology 9 (2018), 775–813, Theorems 1.1(2), 1.6 and Corollary 1.2; arXiv:1701.07818v3 (9 July 2018). https://arxiv.org/pdf/1701.07818v3 ; https://ems.press/journals/qt/articles/15826
Exact source versions, statements and uses are described in report.md and source_notes.md.
