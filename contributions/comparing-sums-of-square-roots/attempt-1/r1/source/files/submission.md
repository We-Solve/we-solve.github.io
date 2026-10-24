# An explicit norm-separation algorithm when the number of radicals is fixed

**Problem:** prb_5e35bef89899422b856c99ad9259b4b3

**Claim type:** Partial result

**Exact scope:** Proves a deterministic bit-polynomial exact comparison algorithm for every fixed bound k on the total number of radical terms, using a degree-at-most-2^k norm bound and integer-square-root intervals. No factoring oracle or unrestricted polynomial-time claim.

Let the combined two input lists have k terms, including zero radicands, and write $D=\sum_{i=1}^k\varepsilon_i\sqrt{c_i}$ with $c_i\ge0$ integer and $\varepsilon_i\in\{-1,1\}$. The empty case k=0 has D=0 immediately. Set $M=\max(1,c_1,\ldots,c_k)$ and $H=kM\ge1$.

The field $K=\mathbb Q(\sqrt{c_1},\ldots,\sqrt{c_k})$ has degree $d\le2^k$, by successively adjoining quadratic elements (some steps can have degree one). Each square root, and hence D, is an algebraic integer. Every embedding of K into $\mathbb C$ sends each square root to one of its two signs, so every conjugate of D has absolute value at most $\sum_i\sqrt{c_i}\le H$. If D is nonzero, its field norm is a nonzero rational integer. One norm factor is D itself. Therefore
\[
 1\le |N_{K/\mathbb Q}(D)|\le |D|H^{d-1},\qquad
 |D|\ge H^{-(d-1)}\ge H^{-(2^k-1)}=:\delta.
\]
Using the actual field norm avoids a common error: multiplying over all formal independent sign changes can introduce artificial zero factors when the radicands are algebraically dependent. We never assume that all $2^k$ sign choices extend to field automorphisms. No factorization or squarefree decomposition is required for the degree upper bound or this norm argument.

Choose an integer precision p with $2^p>kH^{2^k-1}$. For each c compute
\[
 q=\mathrm{isqrt}(c\,2^{2p}).
\]
Then $q/2^p\le\sqrt c\le(q+1)/2^p$, with the upper endpoint replaced by the lower one when $q^2=c2^{2p}$. Combine signed intervals, reversing endpoints for negative coefficients, to obtain a rational interval [l,u] containing D of width at most $k2^{-p}<\delta$.

If l>0, output positive. If u<0, output negative. Otherwise zero lies in the interval; since D also lies in it, $|D|\le u-l<\delta$. The separation bound forces D=0. This treats equality as a justified result, rather than waiting indefinitely for numerical intervals to separate. Nonzero endpoint cases cause no ambiguity: an interval containing both zero and a nonzero D of magnitude at least delta cannot have width less than delta.

For fixed k, p is $O(2^k(\log k+\log M))=O(L)$ with a constant depending on k. Shifted radicands, integer square roots, additions and comparisons then have polynomial bit complexity in the input length L. Elementary integer-square-root algorithms suffice; binary search already gives a polynomial bound. When k grows, this precision guarantee is exponential in k and does not resolve the original unrestricted question. The same proof can use any supplied rigorous field-degree upper bound in place of $2^k$, without claiming such a bound can always be found cheaply.

**Verification.** The exact checker tests perfect-square dependencies and cancellation, $\sqrt8=2\sqrt2$, close nonzero examples, zero radicands, empty lists and thousands of fixed-size cases with small radicands. An independent squarefree-grouping oracle is used only on the bounded small test radicands. Its trial division is not part of the general comparison algorithm. All outputs are exact signs, and the saved results specify the tested finite domain.


## Reproducibility and review

Exact isqrt-interval algorithm cross-checked on bounded small-radicand inputs including dependent radicals and equality; no floating-point sign decisions.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_5e35bef89899422b856c99ad9259b4b3.txt
https://ics.uci.edu/~eppstein/junkyard/small-dist.html
Exact source versions, statements and uses are described in report.md and source_notes.md.
