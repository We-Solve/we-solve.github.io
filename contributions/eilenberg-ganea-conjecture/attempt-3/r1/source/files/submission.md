# Attributed submission: Attempt: TOP-1451

Source: https://github.com/We-Solve/research/issues/267

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1451

### Claim

Partial result

### Exact scope

For every finite triangle-free graph Γ with at least one edge, its right-angled Artin group has cd_Z=gd=2, with an explicit finite square-complex classifying space.

### Write-up

# Two-dimensional models for every triangle-free right-angled Artin group

Claim type: Partial result

Exact scope: For every finite triangle-free graph Γ with at least one edge, its right-angled Artin group has cd_Z=gd=2, with an explicit finite square-complex classifying space.

Let Γ have one generator v for each vertex and a relation [v,w]=1 for each edge. Its square complex X_Γ has a single vertex, a circle for each generator, and one square torus cell for each edge. Triangle-freeness means there are no higher clique cells. We prove that X_Γ is aspherical, rather than inferring this from its dimension or homology.

We use the elementary graph-of-spaces fact: if vertex spaces and edge spaces are connected aspherical CW complexes, and the edge-to-vertex maps induce injections on fundamental groups, the resulting graph of mapping cylinders is aspherical. To see why, its universal cover is a tree of lifted vertex spaces connected by lifted edge cylinders. The incidence graph is the Bass–Serre tree, obtained from cosets of vertex and edge groups; reduced normal forms in an amalgam or HNN extension show that it has no nontrivial reduced circuit. Each lifted vertex or edge space is contractible. Over any finite subtree their union is contractible by removing leaf vertices and their contractible mapping cylinders, or by the homotopy pushout property of cofibrations. Every sphere in the whole CW universal cover is homotopic into a finite such union (cellular compactness), so all its homotopy groups vanish; the simply connected CW complex is contractible by Whitehead’s theorem. This proves the fact. The group normal-form ingredient here is the usual cancellation lemma: a word returning along the tree must have an adjacent inverse stable-edge pair whose intervening vertex word is in the corresponding edge subgroup; removing such a pair shortens the circuit. It is an algebraic reduced-word assertion, not an assumption that the proposed space is already aspherical.

Proceed by induction on the number of vertices. Choose a vertex v, let Γ' delete v and let L be its neighbor set. As Γ is triangle-free, L has no edges, and its right-angled Artin group is the free group F_L. The group G' of Γ' contains F_L injectively: the inclusion of the generator subpresentation has a left inverse sending all other generators to one. The new presentation is the HNN extension of G' with stable letter v commuting with F_L. Topologically, take X_Γ' and attach a cylinder R_L×[0,1], where R_L is the bouquet of the L-circles, with both ends attached by its natural inclusion into X_Γ'. Its central longitudinal edge is the v-circle, and its squares are exactly the [v,w] cells for w∈L. Thus it is precisely X_Γ. The vertex space is aspherical by induction; R_L is a graph and hence aspherical; both subgroup maps are injective. The graph-of-spaces argument gives asphericity at this step. Empty L is permitted and simply adds a free circle. The empty graph and one-vertex graph start the induction.

Therefore X_Γ is a two-dimensional K(G,1), giving gd G≤2 and cd_Z G≤2 from its augmented cellular free resolution. For the reverse inequality, choose an edge {v,w}. Sending every other generator to one gives a retraction G↠Z² with a section supplied by v,w. Pullback in group cohomology is therefore injective, and H²(Z²;Z)=Z survives in H²(G;Z). This forces cd_Z G≥2. Hence cd_Z G=gd G=2.

This includes graphs with arbitrary many vertices and cycles, for example the five-cycle. It is not limited to direct products of two free groups: a five-cycle is not a graph join. If Γ has no edges, G is free and both dimensions are one (or zero for the empty graph), so the at-least-one-edge hypothesis correctly isolates the dimension-two family. Graphs with triangles need higher clique cells and are not covered by the stated two-dimensional construction. Arbitrary groups of cohomological dimension two remain outside this proof.

Relation to earlier contributions. The exploratory prior proves Z² and products of two free groups using products of trees; the other prior announces an unverified counterexample. The present graph-of-spaces induction covers every finite triangle-free right-angled Artin group, including nonjoin graphs such as a five-cycle, and supplies the actual universal-cover argument rather than just a module resolution.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1451.txt


## Reproducibility and review

Source-only: literal prompt, prior full texts and stated references checked; written deduction audited by author, without formal or human verification.

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
The authoring instance for this report is /root/hundred_algebra. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1451.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
