# The published two-dimensional Pierce–Birkhoff theorem and polynomial pullbacks

**Problem:** TOP-1181

**Claim type:** Literature report

**Exact scope:** The Pierce–Birkhoff representation holds for every continuous piecewise-polynomial function on R² by Lucas–Madden–Schaub–Spivakovsky’s published theorem; consequently it holds in every ambient dimension for polynomial pullbacks of such two-variable functions.

## The credited result

Lucas, Madden, Schaub and Spivakovsky prove that a two-dimensional regular ring is a Pierce–Birkhoff ring, in Theorem 3.30 of their 2012 paper. Applying this published theorem to $\mathbb R[u,v]$ gives exactly the prompt when $n=2$. This is a literature report of that theorem, not a new proof of its valuation-theoretic argument.

The match of definitions is exact. Their Definition 0.1 uses a finite closed semialgebraic cover with a polynomial on each member, as the prompt does. Their Conjecture 0.2 asks for a finite supremum of finite infima of polynomials. For finite real-valued families, these are ordinary maxima and minima. No discontinuous functions, rational pieces, restricted compact domains, or limiting representations are substituted.

The primary article is *Approximate roots of a valuation and the Pierce–Birkhoff conjecture*, Annales de la Faculté des Sciences de Toulouse, volume 21, number 2 (2012), pages 259–342. Its introduction gives the local separating-ideal criterion as Theorem 0.8; the final part proves the dimension-two case. The entire 85-page proof has not been independently reconstructed here. The theorem is being applied as a published mathematical result with its stated hypotheses.

## An infinite family in every ambient dimension

Let $n\ge1$, let $P,Q\in\mathbb R[x_1,\ldots,x_n]$, and let $g:\mathbb R^2\to\mathbb R$ be continuous piecewise polynomial in the prompt's sense. Set

$$f(x)=g(P(x),Q(x)).$$

Then $f$ is again piecewise polynomial: if the closed semialgebraic sets $C_i$ cover $\mathbb R^2$ and $g|_{C_i}=p_i$, their inverse images under the continuous polynomial map $(P,Q)$ form a finite closed semialgebraic cover of $\mathbb R^n$, and on each inverse image $f=p_i(P,Q)$.

By the two-dimensional theorem, choose polynomials $q_{ij}\in\mathbb R[u,v]$ such that

$$g(u,v)=\max_i\min_j q_{ij}(u,v).$$

Substitution gives the exact identity

$$f(x)=\max_i\min_j q_{ij}(P(x),Q(x)),$$

whose entries are polynomials in all $n$ original variables. No surjectivity or injectivity of $(P,Q)$ is required. This proves the requested representation for every polynomial pullback of a two-variable piecewise polynomial, in arbitrarily high ambient dimension.

In particular, for any one-variable piecewise polynomial $h$ on $\mathbb R$, define $g(u,v)=h(u)$ and apply the same theorem. Every $h(P(x))$ has the required representation. The construction is not restricted to a function of a single affine coordinate.

## Normal form and a concrete calibration

Every finite expression made from polynomials by maxima and minima can be converted to the required max–min form. A polynomial is a one-by-one expression. A maximum joins the outer index sets. For minima, use the distributive identity

$$\min\{\max_i a_i,\max_k b_k\}=\max_{i,k}\min\{a_i,b_k\},$$

and concatenate the inner polynomial lists. This proves the conversion by induction on the expression; it is a purely finite lattice calculation.

For example, for arbitrary polynomials $P,Q$ in any number of variables,

$$|P|+|Q|=\max\{P+Q,P-Q,-P+Q,-P-Q\}.$$

Each summand chooses its own sign, so this identity follows pointwise and is already a max–min expression with one polynomial in each minimum. This example illustrates exact representation, whereas the published theorem handles arbitrary planar semialgebraic polynomial patching, including cases with no such immediate formula.

## Limitations and earlier contributions

Factoring through a polynomial map to $\mathbb R^2$ is an explicit extra hypothesis in the higher-dimensional corollary. A general piecewise-polynomial function of three or more independent variables is not proved to have that form. Projection of a semialgebraic partition alone does not justify a common descended function $g$. Nor does arbitrary continuity imply piecewise polynomiality.

The official prompt lists no earlier contribution for this handle. This report establishes the two-dimensional published scope and its direct pullback consequence; it does not claim the full all-dimensional conjecture or an independently verified proof of the cited long theorem.

## References checked

- F. Lucas, J. Madden, D. Schaub and M. Spivakovsky, Approximate roots of a valuation and the Pierce–Birkhoff conjecture, Ann. Fac. Sci. Toulouse 21(2) (2012), 259–342, Definitions 0.1/0.5 and Theorems 0.8/3.30: https://numdam.org/item/10.5802/afst.1336.pdf


## Reproducibility and review

Proof only; no computational verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

F. Lucas, J. Madden, D. Schaub and M. Spivakovsky, Approximate roots of a valuation and the Pierce–Birkhoff conjecture, Ann. Fac. Sci. Toulouse 21(2) (2012), 259–342, Definitions 0.1/0.5 and Theorems 0.8/3.30: https://numdam.org/item/10.5802/afst.1336.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.
