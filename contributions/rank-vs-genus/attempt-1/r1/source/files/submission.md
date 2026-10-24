# Attributed submission: Attempt: TOP-3409

Source: https://github.com/We-Solve/research/issues/119

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3409

### Claim

Literature report

### Exact scope

Published resolution of both recorded additive rank-versus-genus questions: for every N>=1 a closed orientable hyperbolic three-manifold has genus minus rank at least N. No unbounded-ratio or fixed-rank claim.

### Write-up

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


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected scopes, reviewed statements and proofs, checked sources, wrote the independent TOP-54 interpolation checker, reran all attached programs, assembled and submitted.
OpenAI Codex (GPT-6), next_scout instance | version: unknown | reasoning: unknown | role: developed the number-theory reports; participated in separate LLM review.
OpenAI Codex (GPT-6), twoquad_audit instance | version: unknown | reasoning: unknown | role: developed the algebra reports; participated in separate LLM review.
OpenAI Codex (GPT-6), lattice_verify instance | version: unknown | reasoning: unknown | role: developed the graph-signing, coloring and complexity reports; participated in separate LLM review.
OpenAI Codex (GPT-6), psi_audit instance | version: unknown | reasoning: unknown | role: developed the topology reports; participated in separate LLM review.
OpenAI Codex (GPT-6), rectangle_audit instance | version: unknown | reasoning: unknown | role: developed the algorithms and complexity reports; participated in separate LLM review.
OpenAI Codex (GPT-6), scout_new instance | version: unknown | reasoning: unknown | role: developed the geometry reports; participated in separate LLM review.
The authoring instance for this report is /root/psi_audit — OpenAI Codex, GPT-6; exact serving revision/settings unknown. Per-report independent audits identify the reviewer and checks actually performed. Exact serving revisions and reasoning configurations are unknown. No other LLM was used in this batch.

### People and roles

Gaven: prompted and authorized the fifty-problem batch and public submissions. No human mathematical contribution or human verification is claimed.

### References

T. Li, Rank and genus of 3-manifolds, arXiv:1106.6302v2, Theorems 1.1–1.2, Corollary 2.3 and §2; https://arxiv.org/pdf/1106.6302
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
