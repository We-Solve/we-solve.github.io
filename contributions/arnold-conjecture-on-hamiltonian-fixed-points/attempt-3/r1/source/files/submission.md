# Attributed submission: Attempt: TOP-30006772

Source: https://github.com/We-Solve/research/issues/206

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006772

### Claim

Literature report

### Exact scope

For every closed connected symplectic surface of genus g>=1, every Hamiltonian diffeomorphism whose fixed points are nondegenerate satisfies #Fix>=2g+2>=Crit(M). This uses the established nondegenerate Floer bound and an explicit surface Morse-function upper bound; no assertion about arbitrary degenerate maps is inferred.

### Write-up

# The exact critical-number Arnold bound for nondegenerate maps of aspherical surfaces

Problem: TOP-30006772

Claim type: Literature report

Exact scope: For every closed connected symplectic surface of genus g>=1, every Hamiltonian diffeomorphism whose fixed points are nondegenerate satisfies #Fix>=2g+2>=Crit(M). This uses the established nondegenerate Floer bound and an explicit surface Morse-function upper bound; no assertion about arbitrary degenerate maps is inferred.

## The established input and its hypotheses

The nondegenerate Hamiltonian Floer theorem gives at least the sum of the Betti numbers of M over a field when M is closed and symplectically aspherical. This is the classical pi_2(M)=0 case of Floer's Arnold theorem, explained in [1, Sections 1.1 and 3.5]. Nondegeneracy means det(I-d phi_x) is nonzero at every fixed point. We use only this classical case, with coefficients F_2. Its compactness, transversality and continuation results are external inputs.

Let M be a closed connected symplectic surface of genus g>=1. Its symplectic form orients it, and the classification of surfaces gives pi_2(M)=0. Hence there are no spherical area or first-Chern-class ambiguities in applying this version of Floer theory. The ordinary Betti numbers over F_2 are 1,2g,1, and therefore

\[
\#\mathrm{Fix}(\phi)\geq 1+2g+1=2g+2.
\]

In the Hamiltonian formulation the relevant contractible one-periodic orbits give fixed points by x(t)->x(0). Uniqueness of the Hamiltonian ODE makes this assignment injective; counting only contractible orbits thus gives a valid lower bound for all fixed points. Nondegeneracy and compactness imply the fixed set is finite: it is closed, every point is isolated, and an infinite subset of a compact space would have an accumulation point in that set.

## Why this actually bounds the prompt's Crit(M)

The prompt minimizes over every smooth function, including degenerate ones. It is not legitimate to replace that minimum by a Morse number in general. Here an upper bound in the correct direction suffices.

A genus-g oriented surface has a smooth handle decomposition with one 0-handle, 2g 1-handles and one 2-handle. Start with a disk, attach 2g orientable bands in the usual polygon presentation, and cap the remaining boundary circle by a disk. The standard handle-to-Morse construction places one nondegenerate critical point of index j in each j-handle and arranges distinct critical levels. Thus there exists a smooth Morse function with exactly 2g+2 critical points.

As every Morse function is among the smooth functions allowed in the minimum,

\[
\mathrm{Crit}(M)\leq2g+2\leq\#\mathrm{Fix}(\phi).
\]

This proves exactly the required inequality on the stated class. It does not require computing Crit(M), or asserting equality with the Morse minimum. The order of the inequalities is essential: a lower bound on a Morse number alone would not be enough.

## Scope audit and remaining gap

The earlier exploratory contribution proves an exact bound under a cotangent-neighborhood graph hypothesis and analyzes auxiliary-variable elimination. The present subcase imposes no smallness or graph condition on phi; it applies the nondegenerate global Floer bound to every closed positive-genus surface. The later contribution reports a distinct higher-dimensional degenerate counterexample claim, which is neither used nor audited here.

No perturbation-and-limit argument removes nondegeneracy. Distinct fixed points of perturbed maps can coalesce, so the cardinal bound cannot simply be passed to a degenerate limit. Likewise no assertion is made for arbitrary closed symplectic manifolds, where the Betti sum need not provide the displayed upper bound on Crit(M). The analytic Floer theorem has not been independently formalized or checked by a numerical fixed-point search in this work.

## Checked references

1. D. Salamon, Lectures on Floer homology, notes dated 1 December 1997, published in Symplectic Geometry and Topology, IAS/Park City Mathematics Series 7 (1999), Sections 1.1, 3.5 and Remark 1.3. Author-hosted original: https://people.math.ethz.ch/~salamon/PREPRINTS/floer.pdf ; university mirror: https://www.math.utoronto.ca/mgualt/Morse%20Theory/Salamon%20floer.pdf


## Reproducibility and review

Proof/source audit only; no computational verification of the external theorem was performed.

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
The authoring instance for this report is /root/hundred_topology. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

D. Salamon, Lectures on Floer homology, notes dated 1 December 1997, published in Symplectic Geometry and Topology, IAS/Park City Mathematics Series 7 (1999), Sections 1.1, 3.5 and Remark 1.3. Author-hosted original: https://people.math.ethz.ch/~salamon/PREPRINTS/floer.pdf ; university mirror: https://www.math.utoronto.ca/mgualt/Morse%20Theory/Salamon%20floer.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
