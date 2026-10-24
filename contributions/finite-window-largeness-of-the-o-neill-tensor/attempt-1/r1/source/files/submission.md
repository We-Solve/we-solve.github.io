# Attributed submission: Attempt: TOP-20003153

Source: https://github.com/We-Solve/research/issues/363

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-20003153

### Claim

Partial result

### Exact scope

If every fiber is totally geodesic, every positively curved Riemannian submersion in the prompt has f≤b−1, and Λ²H→V is surjective at every point. No bound for general fibers is claimed.

### Write-up

# The fiber bound and full A-image for totally geodesic fibers

**Problem:** TOP-20003153

**Claim type:** Partial result

**Exact scope:** If every fiber is totally geodesic, every positively curved Riemannian submersion in the prompt has f≤b−1, and Λ²H→V is surjective at every point. No bound for general fibers is claimed.

## An exact geometric regime

Add the hypothesis that every fiber of the Riemannian submersion is totally geodesic. Then

$$f\le b-1<b.$$

Moreover the structural map $A:\Lambda^2\mathcal H_x\to\mathcal V_x$ in the prompt is surjective **at every point**. Thus its image dimension is exactly $f$ throughout this regime, rather than only being positive somewhere. No homogeneity or invariant group action is assumed.

The standard mixed-curvature equation of O'Neill is the input. In the totally geodesic case it reduces, for unit horizontal $X$ and unit vertical $V$, to

$$K_M(X,V)=\|A_X^*V\|^2.$$

Here $A_X:\mathcal H_x\to\mathcal V_x$ is $Y\mapsto A_XY$ and $A_X^*$ denotes its metric adjoint. Chen's primary paper recalls this convention and gives this formula in the proof of Proposition1.2, whose setting is not restricted to dimension four despite its title. We reproduce the pointwise linear-algebra deduction and its structural consequence.

## Injectivity in a fixed horizontal direction

Fix any point $x$ and any unit vector $X\in\mathcal H_x$. If $V\ne0$, normalize it in the mixed-curvature equation. Positive sectional curvature gives $A_X^*V\ne0$. Since $A_X^*$ is linear, it is injective on the entire vertical space, not merely nonzero on a chosen basis.

The skew symmetry $A_XX=0$ gives

$$\langle A_X^*V,X\rangle=\langle V,A_XX\rangle=0.$$

Consequently $A_X^*$ injects the $f$-dimensional vertical space into $\mathcal H_x\cap X^\perp$, which has dimension $b-1$. This proves the inequality. It rules out a one-dimensional base with positive-dimensional totally geodesic fibers as well, since the target would be zero-dimensional.

By finite-dimensional adjoint linear algebra, injectivity of $A_X^*$ means that $A_X:\mathcal H_x\to\mathcal V_x$ is surjective. Because $A_XX=0$, its restriction to $X^\perp\cap\mathcal H_x$ is also surjective. Every vector in its image is a value $A(X\wedge Y)$ of the exterior-square map appearing in the literal structural question. Therefore the full exterior-square map is surjective. The argument is independent of $x$, establishing the claim at every point.

## A further obstruction visible in the same tensors

Fix an orthonormal basis $V_1,\ldots,V_f$ of $\mathcal V_x$, and let the unit vector $X$ vary over the sphere $S(\mathcal H_x)\cong S^{b-1}$. The vectors $A_X^*V_j$ depend smoothly on $X$, are tangent to that sphere by the orthogonality calculation, and are pointwise linearly independent by injectivity. Thus the sphere has at least $f$ independent tangent vector fields. This recovers the stronger vector-field bound recorded by Chen without presuming an explicit formula for the maximal number of such fields. In particular, when $b$ is odd the sphere has even dimension and Euler characteristic two, so cannot carry even one nowhere-zero tangent field. No such nontrivial submersion with totally geodesic fibers exists for odd $b$.

For general fibers, the mixed-curvature equation also contains second-fundamental-form terms and their derivatives. They need not vanish or have a sign permitting the injectivity step. It would therefore be invalid to infer the same rank bound merely from positive mixed curvatures in the unrestricted question. The result proves the requested inequality and a precise A-image statement in the named totally geodesic regime, while leaving the general conjecture and general function $F(b)$ outside its scope.

## Checked references

- Xiaoyang Chen, Riemannian submersions from compact four manifolds, arXiv:1409.4027v1 (14 September2014), Proposition1.2, §2 conventions and §3 proof: https://arxiv.org/pdf/1409.4027


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no earlier contributions listed; primary theorem and hypotheses checked by browsing; displayed deduction checked algebraically. No program or formal verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.


### Who did the work

LLM only (people only prompted or submitted)

### Models used

OpenAI GPT 6.1 Sol, Other (named below)

### Thinking level / time

Mixed (specified per model below)

### Other LLMs

OpenAI, Codex (GPT-6)
OpenAI, GPT-6.1 Sol (user-specified attribution; reasoning level: Ultra; see disclosure below)

### Per-model versions, thinking and roles

GPT-6.1 Sol (supplemental user-specified attribution) | version: unknown | thinking: Ultra (user-specified; not independently verified) | time: unknown | role: requested attribution, supplementing the historical records below.

OpenAI Codex (GPT-6), main instance | version: unknown | thinking: unknown | time: unknown | role: selected and checked scopes, read final reports, spot-checked sources, freshly ran all attached programs, assembled the prepared submissions.
OpenAI Codex (GPT-6), hundred_algebra instance | version: unknown | thinking: unknown | time: unknown | role: developed algebra reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_numbers instance | version: unknown | thinking: unknown | time: unknown | role: developed number-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_graphs instance | version: unknown | thinking: unknown | time: unknown | role: developed graph-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_algorithms instance | version: unknown | thinking: unknown | time: unknown | role: developed algorithms/complexity reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_topology instance | version: unknown | thinking: unknown | time: unknown | role: developed topology reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_geometry instance | version: unknown | thinking: unknown | time: unknown | role: developed geometry reports and performed separate LLM reviews.
The authoring instance for this report is /root/hundred_topology. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### Model eligibility and verification evidence

The historical research records identify OpenAI Codex (GPT-6) instances with exact serving revisions and reasoning settings unknown. Each report has a separate LLM audit, with the original author/reviewer identities and source/program hashes retained in the research bundle. Those records describe the checks performed; they do not independently establish the historical runtime configuration or a previously demonstrated qualifying architecture. GPT-6.1 Sol with Ultra reasoning is the submitting user's explicit supplemental attribution, not independently verified runtime metadata or a retrospective reassignment of the earlier work. The Mixed selection preserves that distinction between the user's stated attribution and the unknown historical settings. No editorial acceptance is claimed.

### People and roles

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

Xiaoyang Chen, Riemannian submersions from compact four manifolds, arXiv:1409.4027v1 (14 September2014), Proposition1.2, §2 conventions and §3 proof: https://arxiv.org/pdf/1409.4027
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
