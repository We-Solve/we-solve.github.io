# Li's published resolution: arbitrarily large additive rank–genus gaps

**Problem:** TOP-3409. **Claim type:** Literature report.

**Exact scope.** Both recorded existence questions have an affirmative published answer. For every integer $N\ge1$, there is a **closed orientable hyperbolic** three-manifold $M_N$ with
$$g(M_N)-r(M_N)\ge N.$$
This is Tao Li's theorem, not a new construction or independently reproduced proof. The statement concerns an additive difference; it makes no claim that the ratio is unbounded or that rank stays fixed.

Li's primary paper [1, Theorem 1.1] states existence of a closed orientable hyperbolic manifold with rank below Heegaard genus and unbounded discrepancy. This directly covers the prompt's broader compact-manifold domain. In its §2 proof of Theorem 1.1, the quantitative amplification is explicit: start with its compact irreducible atoroidal example $W$ having connected boundary and $r(W)<g(W)$. A boundary connected sum of $N$ copies has rank $Nr(W)$ and genus $Ng(W)$. A sufficiently complicated handlebody filling preserves this genus, cannot increase rank, and yields a closed hyperbolic manifold. Thus
$$g(M_N)-r(M_N)\ge N(g(W)-r(W))\ge N.$$
These construction and preservation results are credited to the cited paper and its inputs; this report does not claim a new proof of them.

The elementary rank inequality for the **closed** examples is worth making precise. A genus-$g$ Heegaard splitting gives a handle decomposition with $g$ one-handles and a presentation of the fundamental group on $g$ generators. Therefore $r(M)\le g(M)$ for closed $M$. The strict examples show that this geometric presentation need not use a minimal generating set. No assumption that every compact manifold with several boundary components satisfies the same presentation inequality is required here.

**Scope audit.** The theorem is about actual hyperbolic manifolds, not just graph manifolds, manifolds containing one hyperbolic piece, or high-distance splittings of a possibly lower-genus manifold. No computer triangulation with an unverified minimal genus is substituted for the source. Merely exhibiting a generating set would give an upper bound on rank; the difficult genus lower bound is part of Li's proved theorem. Nor does the additive bound imply $g(M_N)/r(M_N)\to\infty$: both quantities may grow with $N$.

**Actual checks.** I opened arXiv:1106.6302v2 (23 January 2013), checked Theorems 1.1–1.2, Corollary 2.3, and the §2 unbounded-gap deduction. I did not independently audit the full 60-page proof or construct explicit triangulations. No standalone computation is needed to justify importing this exact theorem. The official API record has no earlier contributions and is saved with the exact prompt.

OpenAI Codex, GPT-6, checked the primary source and quantifier translation; exact serving revision/settings are unknown. Gaven authorized the work. No human mathematical review or new mathematical priority is asserted.

**Checked primary reference.** T. Li, *Rank and genus of 3-manifolds*, *Journal of the American Mathematical Society* 26 (2013), 777–829, arXiv:1106.6302v2, Theorem 1.1 and §2. https://arxiv.org/pdf/1106.6302 .


## Reproducibility and review

Checked actual arXiv v2 Theorem 1.1, Theorem 1.2, Corollary 2.3 and the section-2 arbitrary-gap amplification. No numerical manifold generation or independent full 60-page proof audit claimed.
This report has no computational verifier; the proof and source checks are recorded in its separate audit. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

## References

T. Li, Rank and genus of 3-manifolds, arXiv:1106.6302v2, Theorems 1.1–1.2, Corollary 2.3 and §2; https://arxiv.org/pdf/1106.6302
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
