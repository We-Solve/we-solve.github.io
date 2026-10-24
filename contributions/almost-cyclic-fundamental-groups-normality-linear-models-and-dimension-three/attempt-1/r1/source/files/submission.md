# Attributed submission: Attempt: TOP-20003178

Source: https://github.com/We-Solve/research/issues/366

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-20003178

### Claim

Literature report

### Exact scope

For every odd n≥3, all spherical space forms S^n/G have a normal cyclic subgroup of index at most the complex Jordan constant J(n+1); no pinching-dependent bound is used.

### Write-up

# A uniform normal cyclic subgroup for spherical space forms

**Problem:** TOP-20003178

**Claim type:** Literature report

**Exact scope:** For every odd n≥3, all spherical space forms S^n/G have a normal cyclic subgroup of index at most the complex Jordan constant J(n+1); no pinching-dependent bound is used.

## The linear subclass

Suppose the manifold in the question is a spherical space form, so that its universal cover has a constant positive sectional curvature metric. Its deck group is a finite group $G\le O(n+1)$ acting freely on the unit sphere. For this entire class there is a constant depending only on $n$ and a **normal** cyclic subgroup $C\triangleleft G$ with

$$[G:C]\le J_{\mathrm{lin}}(n+1).$$

Here $J_{\mathrm{lin}}(d)$ is a Jordan constant for finite subgroups of $GL_d(\mathbb C)$. No value of this constant is asserted to be optimal. Normality is stronger than the question requires; the order of $G$ itself remains unbounded.

## The imported theorem and the free-action deduction

Jordan's theorem, stated and proved in Breuillard's checked exposition, says that every finite subgroup of $GL_d(\mathbb C)$ contains an abelian normal subgroup of index bounded in terms of $d$ alone. Apply it to the complexification of the faithful orthogonal representation $G\hookrightarrow O(n+1)$. This gives an abelian normal subgroup $A$ with the indicated index bound. We now prove the important extra implication: **every abelian subgroup of a finite linear group acting freely on a sphere is cyclic.**

Because $A$ is finite and abelian, its complex representation is a direct sum of one-dimensional characters. One way to see this is to average a Hermitian inner product, then simultaneously diagonalize the commuting unitary matrices. Choose one character $\chi:A\to\mathbb C^*$ occurring in the representation, with a nonzero common eigenvector $v\in\mathbb C^{n+1}$. If $a\in\ker\chi$, then $av=v$. The matrices are real, so writing $v=u+iw$ gives $au=u$ and $aw=w$ with at least one of $u,w$ nonzero. Normalizing that nonzero real vector produces a point of $S^n$ fixed by $a$. Freeness implies $a=1$. Thus $\chi$ is injective.

A finite subgroup of $\mathbb C^*$ is cyclic: all its elements are roots of unity of exponent dividing its order, so it is a subgroup of one cyclic group of roots of unity. The injection $\chi$ proves that $A$ is cyclic. Set $C=A$. This completes the bounded-index claim, including its normality.

## Covering interpretation and the remaining gap

The quotient $S^n/C$ maps to $S^n/G$ with covering degree $[G:C]$. Since $n\ge3$, the sphere is simply connected, and the covering has cyclic fundamental group $C$. This is exactly the geometric form of the requested bound on this subclass. The proof is independent of the metric's overall scale and of the order of the deck group. Scalar multiplication by roots of unity on $S^{2m+1}\subset\mathbb C^{m+1}$ supplies cyclic examples of arbitrarily large order, illustrating why no total-order bound could replace it.

For a general positively curved manifold the deck action on its universal cover need not be given by a faithful representation of dimension $n+1$ acting freely on a round sphere. Merely knowing that the deck group is finite does not put it in the linear subclass used above. The argument therefore does not establish the unrestricted constant in every odd dimension. In particular, no linearization of an arbitrary smooth deck action is assumed, and this report does not claim the general problem solved by Jordan's theorem.

## Checked references

- Emmanuel Breuillard, An exposition of Jordan’s original proof of his theorem on finite subgroups of GL_n(C), arXiv:2305.00722v1 (1 May 2023), Theorem 1.1 and §§2–4: https://arxiv.org/pdf/2305.00722


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

Emmanuel Breuillard, An exposition of Jordan’s original proof of his theorem on finite subgroups of GL_n(C), arXiv:2305.00722v1 (1 May 2023), Theorem 1.1 and §§2–4: https://arxiv.org/pdf/2305.00722
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
