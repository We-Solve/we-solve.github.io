# Attributed submission: Attempt: TOP-2759

Source: https://github.com/We-Solve/research/issues/293

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-2759

### Claim

Literature report

### Exact scope

For each closed orientable hyperbolic surface S, Patel’s standard metric ρ_0 satisfies d_S(γ)≤16.2ℓ_{ρ_0}(γ); every other fixed hyperbolic metric and every fixed finite generating set likewise give linear upper bounds, by metric comparison.

### Write-up

# Linear simple-lifting bounds for every fixed closed hyperbolic surface

**Problem:** TOP-2759

**Claim type:** Literature report

**Exact scope:** For each closed orientable hyperbolic surface S, Patel’s standard metric ρ_0 satisfies d_S(γ)≤16.2ℓ_{ρ_0}(γ); every other fixed hyperbolic metric and every fixed finite generating set likewise give linear upper bounds, by metric comparison.

## The exact geometric input

Patel’s Theorem5.4 proves that for a closed surface of negative Euler characteristic with her standard right-angled-pentagon metric $\rho_0$, every closed geodesic $\gamma$ lifts to an embedded loop in a connected finite cover of degree at most $16.2\ell_{\rho_0}(\gamma)$. The geodesic itself lifts; it is not replaced by a positive power. Thus

$$d_S(\gamma)\le16.2\ell_{\rho_0}(\gamma).$$

The metric qualification is essential. The numerical coefficient16.2 is not asserted for an arbitrary rescaling or arbitrary hyperbolic structure. The surface is fixed and closed in this report, so all its hyperbolic metrics can be compared on a compact manifold.

## Derive the bound for every fixed hyperbolic metric

Let $\rho$ be another fixed hyperbolic metric on the same smooth closed surface. There is a finite constant $B$ such that the norm of every tangent vector for $\rho_0$ is at most $B$ times its norm for $\rho$. This follows by taking the maximum norm ratio on the compact $\rho$-unit tangent bundle.

Apply this length comparison to the $\rho$-geodesic in the free homotopy class of $\gamma$. The geodesic representative for $\rho_0$ minimizes $\rho_0$ length within that class, so

$$\ell_{\rho_0}(\gamma)\le B\ell_\rho(\gamma).$$

The lifting degree is topological and does not depend on which geodesic representative is used. Combining with Patel gives

$$f_\rho(L)\le16.2 B L.$$

The constant depends on the fixed metric, as allowed in the prompt. This is a worst-case upper bound for all closed geodesic classes in the length window, not an asymptotic statement for one selected sequence.

## Derive a word-length upper bound

Choose a finite generating set with based representative loops, and let $A$ be the largest of their $\rho$ lengths. A conjugacy class represented by a cyclically shortest word of length $r$ has a based representative of length at most $Ar$. Tightening it to the corresponding free geodesic cannot increase length. Therefore

$$d_S(\gamma)\le16.2BA\,r.$$

This proves a linear upper bound in conjugacy word length for every fixed generating set, with all dependence on the chosen representatives absorbed into $A$. Inverse generators have the same loop length. The inequality does not claim that an arbitrary word’s written length is the minimal conjugacy length; one may either use the minimal length in the statement or get a valid, possibly weaker, bound from any representative word.

## Proper powers and geometric scope

A loop traversing a primitive geodesic repeatedly is not already an embedded loop in the original surface. Patel’s covering construction handles the specified closed geodesic as a parametrized loop: the subgroup used for the finite cover contains that element, and its chosen lift is embedded. One must not conclude degree one merely because the image set of a proper-power geodesic is a simple curve. Nor does the construction merely find an embedded lift of a power, which would reverse the quantifier in the question.

The linear estimate proves existence of a finite cover for every input and a uniform bound in the named metric regime. It does not determine the sharp growth of the self-intersection function $f_S(n)$ or the optimal average degree under length sampling. A worst-case linear upper bound automatically also bounds an average over any finite length window, but it does not give a matching average asymptotic. Cusped and noncompact finite-type surfaces require additional metric arguments and are not included in this compact comparison proof.

## Checked references

- Priyam Patel, On a theorem of Peter Scott, arXiv:1204.5135v4(17 April2014), Theorem5.4 and standard-metric construction: https://arxiv.org/pdf/1204.5135


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no earlier contributions listed; primary theorem and hypotheses checked by browsing; displayed deduction checked algebraically. No program or formal verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)
OpenAI, GPT-6.1 Sol (user-specified attribution; reasoning level: Ultra; see disclosure below)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected and checked scopes, read final reports, spot-checked sources, freshly ran all attached programs, assembled the prepared submissions.
OpenAI Codex (GPT-6), hundred_algebra instance | version: unknown | reasoning: unknown | role: developed algebra reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_numbers instance | version: unknown | reasoning: unknown | role: developed number-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_graphs instance | version: unknown | reasoning: unknown | role: developed graph-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_algorithms instance | version: unknown | reasoning: unknown | role: developed algorithms/complexity reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_topology instance | version: unknown | reasoning: unknown | role: developed topology reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_geometry instance | version: unknown | reasoning: unknown | role: developed geometry reports and performed separate LLM reviews.
The authoring instance for this report is /root/hundred_topology. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

Priyam Patel, On a theorem of Peter Scott, arXiv:1204.5135v4(17 April2014), Theorem5.4 and standard-metric construction: https://arxiv.org/pdf/1204.5135
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
