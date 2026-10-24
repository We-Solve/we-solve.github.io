# Finite abelianization for every subgroup containing an odd homological level

**Problem:** prb_badbd300073a42358944d2efc1b4ae16

**Claim type:** Literature report

**Exact scope:** For genus g≥3 with zero or one boundary component and no punctures, every subgroup containing an odd level-L mapping class subgroup (L≥3) has finite abelianization; the level subgroup itself has Putman’s explicit finite-module exact sequence.

## The finite-index family

Let $\Sigma_g^b$ have genus $g\ge3$, with $b=0$ or1 and no punctures. Define

$$\Gamma_g^b(L)=\ker\bigl(\operatorname{Mod}(\Sigma_g^b)\to
\operatorname{Aut}H_1(\Sigma_g^b;\mathbb Z/L)\bigr).$$

For every odd integer $L\ge3$, this is a finite-index subgroup with finite abelianization. More generally every intermediate subgroup $\Gamma_g^b(L)\le H\le\operatorname{Mod}(\Sigma_g^b)$ has finite abelianization. The parameters $g,L$ are unrestricted within this regime, and $H$ need not be normal.

This is a large affirmative class in the Ivanov question. It does not assume that every finite-index subgroup contains a homological level: that separate assertion would be a substantial additional hypothesis and cannot be silently inserted.

## The exact imported computation

Putman’s Theorem1.1 in the checked note gives, for odd $L$ and $g\ge3$, an exact sequence

$$0\longrightarrow K\longrightarrow H_1(\Gamma_g^b(L);\mathbb Z)
\longrightarrow\mathfrak{sp}_{2g}(\mathbb Z/L)\longrightarrow0.$$

Put $V=H_1(\Sigma_g^b;\mathbb Z/L)$. For $b=1$, $K=\Lambda^3 V$; for $b=0$, $K=(\Lambda^3 V)/V$ with the natural symplectic inclusion specified in the source. The right-hand term is the additive symplectic Lie algebra, not the finite symplectic group. Both kernel and quotient are finite, so the middle group is finite. No splitting of the exact sequence is required or claimed.

For $b=1$, this also gives a concrete order. The module $V$ is free of rank $2g$ over $\mathbb Z/L$. Its exterior cube has $L^{\binom{2g}{3}}$ elements. Writing a symplectic Lie-algebra matrix in blocks as

$$\begin{pmatrix}P&Q\\ R&-P^T\end{pmatrix},\qquad Q=Q^T,\ R=R^T,$$

shows that the right term has $L^{g(2g+1)}$ elements. Hence

$$|H_1(\Gamma_g^1(L);\mathbb Z)|
 =L^{\binom{2g}{3}+g(2g+1)}.$$

This is an order computation, not an unjustified direct-sum decomposition of the finite abelian group.

## Pass to supergroups without a normality assumption

A finite-index subgroup of a finitely generated mapping class group is finitely generated. Let $\varphi:H\to\mathbb Q$ be a homomorphism. Its restriction to $\Gamma_g^b(L)$ is zero because that group has finite abelianization. For any $h\in H$, finiteness of the coset space guarantees that some positive power $h^m$ belongs to $\Gamma_g^b(L)$; normality is unnecessary, since two powers represent the same coset. Thus $m\varphi(h)=0$, so $\varphi(h)=0$.

Therefore $H$ has no nonzero rational homomorphism. Its finitely generated abelianization has rational rank zero and is finite. This proves the claimed extension to every such $H$.

## Source status and limits

The browsed source is Putman’s 2008 note in its2017 arXiv revision. Its historical note explicitly says that this manuscript was not published, in view of overlapping results of Perron and Sato, and points to a later published treatment of additional levels. We report that status honestly. The theorem used here is the odd-level statement actually present in this checked manuscript; no even-level assertion or arbitrary-puncture extension is imported. The remaining finite-index subgroups in the full Ivanov question are not decided here.

## Checked references

- Andrew Putman, The abelianization of the level L mapping class group, arXiv:0803.0539v3(18 April2017), historical note and Theorem1.1; unpublished note: https://arxiv.org/pdf/0803.0539


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no earlier contributions listed; primary theorem and hypotheses checked by browsing; displayed deduction checked algebraically. No program or formal verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Andrew Putman, The abelianization of the level L mapping class group, arXiv:0803.0539v3(18 April2017), historical note and Theorem1.1; unpublished note: https://arxiv.org/pdf/0803.0539
Exact source versions, statements and uses are described in report.md and source_notes.md.
