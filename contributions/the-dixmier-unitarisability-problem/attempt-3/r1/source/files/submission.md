# Monod–Ozawa’s wreath-product class in the Dixmier problem

**Problem:** prb_829564bc002d4543a50e26b1eab7e7fa

**Claim type:** Literature report

**Exact scope:** For every nonamenable discrete group G and every infinite abelian group B, the restricted wreath product B wr G is nonunitarisable by Monod–Ozawa’s Theorem 1; the report also proves the amenable averaging direction and the bounded-derivation obstruction mechanism.

## A theorem directly addressing nonamenable groups

Monod and Ozawa prove the following in Theorem 1 of *The Dixmier problem, lamplighters and Burnside groups*, arXiv:0902.4585v1 (26 February 2009). For any discrete group $G$, these are equivalent:

1. $G$ is amenable.
2. $B\wr G$ is unitarisable for every abelian group $B$.
3. $B\wr G$ is unitarisable for some infinite abelian group $B$.

Here the **restricted** wreath product is $(\bigoplus_G B)\rtimes G$, with $G$ translating the coordinates. In particular, whenever $G$ is nonamenable and $B$ is infinite abelian, $B\wr G$ has a uniformly bounded Hilbert-space representation that is not similar to a unitary representation. These wreath products are themselves nonamenable because they surject onto $G$ and amenability passes to quotients. Thus the theorem supplies a substantial family satisfying the proposed nonamenable conclusion in the literal prompt.

This is a report of the credited theorem. Its orbit-equivalence and bounded-cohomology induction is not reproduced as a new proof. The infinite-abelian hypothesis in the third condition is retained: the cited statement does not permit replacing it automatically by one fixed nontrivial finite lamp group.

## Why the amenable direction works, with a bound

Let $G$ be amenable and $\pi:G\to\mathrm{GL}(\mathcal H)$ satisfy $\sup_g\|\pi(g)\|\le C$. Since the identity is in the image, $C\ge1$, and $\|\pi(g)^{-1}\|=\|\pi(g^{-1})\|\le C$. Convert a left-invariant mean to a right-invariant mean $m_R$ by inversion, and define

$$[x,y]=m_R\bigl(g\mapsto\langle\pi(g)x,\pi(g)y\rangle\bigr).$$

Extend the real positive mean complex linearly. Positivity, linearity and conjugation give a bounded positive sesquilinear form, with

$$C^{-2}\|x\|^2\le[x,x]\le C^2\|x\|^2.$$

Right invariance gives $[\pi(h)x,\pi(h)y]=[x,y]$, because the argument replaces $g$ by $gh$. By the representation theorem for bounded forms, $[x,y]=\langle Px,y\rangle$ for an invertible positive operator $P$ satisfying $C^{-2}I\le P\le C^2I$. Therefore $S=P^{1/2}$ satisfies

$$S\pi(h)S^{-1}\text{ unitary for all }h,\qquad\|S\|\|S^{-1}\|\le C^2.$$

The argument uses no countability of $G$ or separability of $\mathcal H$. This direction alone would not answer the conjectured converse; it is included to calibrate precisely what the cited wreath-product theorem adds.

## The bounded-derivation obstruction

For a unitary representation $\sigma:G\to\mathcal U(H)$, suppose $D:G\to\mathcal B(H)$ obeys

$$D(gh)=\sigma(g)D(h)+D(g)\sigma(h).$$

Then

$$\rho(g)=\begin{pmatrix}\sigma(g)&D(g)\\0&\sigma(g)\end{pmatrix}$$

is a representation. It is uniformly bounded exactly when $D$ is bounded: one implication follows by bounding the two diagonal unitary blocks and the off-diagonal block; the other follows by taking a matrix compression of $\rho(g)$.

If $D(g)=\sigma(g)T-T\sigma(g)$ for a bounded $T$, conjugating $\rho$ by the bounded invertible shear $\left(\begin{smallmatrix}I&T\\0&I\end{smallmatrix}\right)$ eliminates the upper-right block, so $\rho$ is unitarisable. Conversely, if $\rho$ is unitarisable, use its equivalent invariant Hilbert inner product. The invariant subspace $H\oplus0$ has an invariant closed complement. In the original direct sum, that complement is the graph of a bounded operator $T:H\to H$. Invariance of this graph gives

$$\sigma(g)T+D(g)=T\sigma(g),$$

so $D$ is inner, after replacing $T$ by $-T$ in the preceding convention. Thus a bounded noninner derivation supplies the required representation. Monod–Ozawa's deep step is to transport such an obstruction to the wreath product, rather than to assert that the existence of a nonamenable action automatically gives one.

## Comparison and precise remaining gap

The earlier We-Solve revision reports an unverified general 2026 amenability–unitarisability equivalence and near-unitary witnesses. This report neither audits nor relies on those manuscripts. The checked 2009 theorem handles the entire wreath-product class with arbitrary nonamenable base and infinite abelian lamps. It does not show that the original base group $G$ itself is nonunitarisable merely because $B\wr G$ is: unitarisability is not being assumed to descend through or ascend from arbitrary extensions. That distinction is the remaining gap relative to the universal converse posed in the prompt.

## References checked

- Nicolas Monod and Narutaka Ozawa, The Dixmier problem, lamplighters and Burnside groups, arXiv:0902.4585v1, Theorem 1 and §2 bounded derivations: https://arxiv.org/pdf/0902.4585
- Earlier revision inspected: https://we-solve.github.io/contributions/the-dixmier-unitarisability-problem/attempt-1/r1/


## Reproducibility and review

Proof only; no computational verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Nicolas Monod and Narutaka Ozawa, The Dixmier problem, lamplighters and Burnside groups, arXiv:0902.4585v1, Theorem 1 and §2 bounded derivations: https://arxiv.org/pdf/0902.4585
Earlier revision inspected: https://we-solve.github.io/contributions/the-dixmier-unitarisability-problem/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.
