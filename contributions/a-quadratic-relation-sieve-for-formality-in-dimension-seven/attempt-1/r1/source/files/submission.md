# Attributed submission: Attempt: TOP-20003177

Source: https://github.com/We-Solve/research/issues/365

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-20003177

### Claim

Literature report

### Exact scope

Every closed (k−1)-connected manifold of dimension ≤4k−2, k≥2, is Sullivan rationally formal; hence all simply connected positively curved manifolds of dimension≤6, and all 2-connected ones of dimension≤10, satisfy the question.

### Write-up

# Miller’s connectivity–dimension range for rational formality

**Problem:** TOP-20003177

**Claim type:** Literature report

**Exact scope:** Every closed (k−1)-connected manifold of dimension ≤4k−2, k≥2, is Sullivan rationally formal; hence all simply connected positively curved manifolds of dimension≤6, and all 2-connected ones of dimension≤10, satisfy the question.

## The precise positive range

Miller's 1979 theorem proves that a compact $(k-1)$-connected manifold of dimension at most $4k-2$, with $k>1$, is rationally formal. It makes no curvature assumption. Applying it to the subclass of closed positively curved manifolds gives, in particular,

- every **simply connected** such manifold of dimension at most six is formal;
- every **2-connected** such manifold of dimension at most ten is formal;
- more generally, the displayed connectivity–dimension inequality is sufficient in every dimension.

Connectivity here is integral homotopy connectivity: $\pi_i(M)=0$ for $1\le i\le k-1$. The dimension inequality includes equality. Neither a vanishing Euler characteristic nor a numerical curvature pinching condition is used.

## Match the rational-algebra conclusion to the literal question

The checked original paper begins by taking rational coefficients and simply connected finite-type spaces. It defines a minimal rational model $\mathcal M_X$ for the rational de Rham algebra and calls the space formal when there is a weak equivalence from $\mathcal M_X$ to its cohomology algebra with zero differential. The theorem on the first page uses that definition. These are the commutative Sullivan models underlying $A_{\mathrm{PL}}$, not a claim about wedge products of harmonic forms for a selected metric.

For the manifold $M$ in the stated range, let $\mathcal M_M\to A_{\mathrm{PL}}(M;\mathbb Q)$ be its minimal-model quasi-isomorphism. Miller's conclusion supplies a quasi-isomorphism from $\mathcal M_M$ to its zero-differential cohomology. Identifying $H^*(\mathcal M_M)$ with $H^*(M;\mathbb Q)$ gives the finite zigzag

$$A_{\mathrm{PL}}(M;\mathbb Q)\ \longleftarrow\ \mathcal M_M\ \longrightarrow\ (H^*(M;\mathbb Q),0).$$

Both arrows preserve the commutative differential graded algebra structures and induce cohomology isomorphisms. This is exactly the requested rational formality property. Smooth closed manifolds have finite CW type, so the finite-type hypothesis of the model theory applies. In the simply connected case they are orientable as well.

The deep input is the theorem establishing the required model morphism using connectivity, Poincaré duality and the dimension bound. That proof is credited to Miller; merely checking a few Massey products would not independently prove the theorem and is not offered as a replacement.

## Boundaries that curvature alone does not remove

Strict positive sectional curvature on a closed manifold implies a finite fundamental group, but finiteness does **not** imply triviality. We have therefore retained simple connectivity explicitly in the low-dimensional application. No descent of formality from a universal cover is assumed without checking a theorem about the quotient algebra.

For a simply connected seven-manifold, the bound with $k=2$ is only six, so this theorem alone gives no conclusion. If the seven-manifold is additionally 2-connected, $k=3$ gives the bound ten, and it is covered. This example shows exactly how the extra homotopy hypothesis matters. Arbitrary dimensions and arbitrary finite fundamental groups from the original question remain outside the report. No example of a positively curved nonformal manifold, and no general curvature-to-formality theorem, is asserted.

## Checked references

- Timothy James Miller, On the formality of K−1 connected compact manifolds of dimension less than or equal to 4K−2, Illinois Journal of Mathematics 23(2) (June 1979), 253–258, first-page theorem and definition of formality; original six-page scan: https://scispace.com/pdf/on-the-formality-of-k-1-connected-compact-manifolds-of-4ln5i7o69n.pdf


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

Timothy James Miller, On the formality of K−1 connected compact manifolds of dimension less than or equal to 4K−2, Illinois Journal of Mathematics 23(2) (June 1979), 253–258, first-page theorem and definition of formality; original six-page scan: https://scispace.com/pdf/on-the-formality-of-k-1-connected-compact-manifolds-of-4ln5i7o69n.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
