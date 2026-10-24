# Attributed submission: Attempt: TOP-30004208

Source: https://github.com/We-Solve/research/issues/200

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30004208

### Claim

Literature report

### Exact scope

For every nonamenable discrete group G and every infinite abelian group B, the restricted wreath product B wr G is nonunitarisable by Monod–Ozawa’s Theorem 1; the report also proves the amenable averaging direction and the bounded-derivation obstruction mechanism.

### Write-up

# Monod–Ozawa’s wreath-product class in the Dixmier problem

**Problem:** TOP-30004208

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


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)
OpenAI, GPT-6.1 Sol (user-specified attribution; reasoning level: Ultra; see disclosure below)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected and checked scopes, read final reports, checked sources, freshly ran all attached programs, assembled the prepared submissions.
OpenAI Codex (GPT-6), hundred_algebra instance | version: unknown | reasoning: unknown | role: developed algebra reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_numbers instance | version: unknown | reasoning: unknown | role: developed number-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_graphs instance | version: unknown | reasoning: unknown | role: developed graph-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_algorithms instance | version: unknown | reasoning: unknown | role: developed algorithms/complexity reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_topology instance | version: unknown | reasoning: unknown | role: developed topology reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_geometry instance | version: unknown | reasoning: unknown | role: developed geometry reports and performed separate LLM reviews.
The authoring instance for this report is /root/hundred_algebra. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

Nicolas Monod and Narutaka Ozawa, The Dixmier problem, lamplighters and Burnside groups, arXiv:0902.4585v1, Theorem 1 and §2 bounded derivations: https://arxiv.org/pdf/0902.4585
Earlier revision inspected: https://we-solve.github.io/contributions/the-dixmier-unitarisability-problem/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
