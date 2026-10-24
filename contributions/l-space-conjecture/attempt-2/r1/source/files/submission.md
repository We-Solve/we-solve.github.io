# Attributed submission: Attempt: TOP-30006775

Source: https://github.com/We-Solve/research/issues/207

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006775

### Claim

Literature report

### Exact scope

For closed connected oriented irreducible rational homology three-spheres that are graph manifolds, the prompt’s non-L-space, nontrivial left-orderable group, and coorientable taut foliation conditions are equivalent by the published Hanselman–Rasmussen–Rasmussen–Watson theorem and Boyer–Clay input.

### Write-up

# The three L-space conditions for irreducible graph manifolds

Problem: TOP-30006775

Claim type: Literature report

Exact scope: For closed connected oriented irreducible rational homology three-spheres that are graph manifolds, the prompt’s non-L-space, nontrivial left-orderable group, and coorientable taut foliation conditions are equivalent by the published Hanselman–Rasmussen–Rasmussen–Watson theorem and Boyer–Clay input.

## Exact theorem-to-prompt translation

Hanselman, Rasmussen, Rasmussen and Watson [1, Theorems 1–2] prove the three-way equivalence for closed connected orientable graph manifolds: not being an L-space; admitting a C^0 coorientable taut foliation; and having left-orderable fundamental group. Their paper credits Boyer and Clay for the foliation/orderability equivalence and supplies the remaining non-L-space-to-foliation direction. We use the result on irreducible rational homology spheres, as required by the prompt.

A graph manifold here is decomposed along its JSJ tori into Seifert fibered pieces, with the standard irreducible convention. The Floer convention in [1] uses F_2 coefficients in the main argument. Accordingly, rank in this report means dimension of hat HF over F_2. No assertion about torsion in an integral Floer group is needed to translate the target.

We retain the source's precise conclusion: a C^0 coorientable taut foliation. The prompt imposes no stronger differentiability class, so this conclusion supplies its foliation condition. Tautness is used in the source's sense: every leaf meets a closed transversal.

## The trivial-group boundary case

The prompt explicitly says nontrivial left-orderable fundamental group. This matters because the trivial group can be assigned a vacuous total order in elementary group theory. To check the translation without relying on that convention, separate the simply connected case.

If Y is a closed oriented simply connected three-manifold, the Poincare theorem gives Y homeomorphic to S^3. S^3 is an L-space, so the first condition is false, and the prompt's explicitly nontrivial group condition is false. S^3 has no coorientable taut foliation. The theorem in [1] treats the effective-action/nontrivial convention in its orderability discussion consistently with this boundary case. Thus no spurious S^3 counterexample is introduced by changing order conventions.

For every other Y in our stated class, its fundamental group is nontrivial. The left-orderability condition in the theorem now coincides directly with the prompt's condition. Combining the implications gives exactly the desired equivalence within this family.

## A useful elementary consequence

A nontrivial finite group cannot be left-orderable. If 1<g, repeated left multiplication gives 1<g<g^2<...; if g has finite order this eventually yields 1<1. If g<1, apply the same argument to g^{-1}. Hence a rational homology graph manifold with nontrivial finite fundamental group falls on the L-space side and has no coorientable taut foliation by the theorem.

This deduction uses a theorem specific to graph manifolds; finite group arithmetic alone never computes Floer homology or rules out foliations for unrelated spaces.

## Relationship to prior work and remaining gap

The earlier attempt constructs finite-sign obstructions and analyzes an Euler-class obstruction to lifting circle actions. The current contribution supplies a published completed implication in the graph-manifold subclass and checks coefficient, regularity and trivial-group conventions. No new theorem or independent proof of the source's Floer gluing result is claimed.

An irreducible rational homology sphere with a hyperbolic JSJ piece need not be a graph manifold. No decomposition argument here converts it into one, and none of the three general implications is inferred merely from the special-class equivalence. Source results for circular orders or finite covers are not substituted for an order on the original fundamental group.

## Checked references

1. J. Hanselman, J. Rasmussen, S. D. Rasmussen and L. Watson, L-spaces, taut foliations, and graph manifolds, Compositio Mathematica 156 (2020), 604–612, Theorems 1–2 and final Coefficients discussion; author PDF arXiv:1508.05911. https://arxiv.org/pdf/1508.05911 ; https://www.cambridge.org/core/journals/compositio-mathematica/article/lspaces-taut-foliations-and-graph-manifolds/22123CACC407D22FBEB75CBAED6D0ACB


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

J. Hanselman, J. Rasmussen, S. D. Rasmussen and L. Watson, L-spaces, taut foliations, and graph manifolds, Compositio Mathematica 156 (2020), 604–612, Theorems 1–2 and final Coefficients discussion; author PDF arXiv:1508.05911. https://arxiv.org/pdf/1508.05911 ; https://www.cambridge.org/core/journals/compositio-mathematica/article/lspaces-taut-foliations-and-graph-manifolds/22123CACC407D22FBEB75CBAED6D0ACB
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
