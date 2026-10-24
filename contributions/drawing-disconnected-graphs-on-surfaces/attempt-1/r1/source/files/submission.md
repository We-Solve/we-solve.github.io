# Attributed submission: Attempt: TOP-3321

Source: https://github.com/We-Solve/research/issues/171

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3321

### Claim

Literature report

### Exact scope

Credit Beaudou–Gerbaud–Grappe–Palesi’s theorem for two connected loopless graphs on the Klein bottle; independently prove the every-optimum conclusion on any surface whenever one of the two graphs is planar.

### Write-up

# The Klein-bottle theorem and a planar-component reduction on every surface

Problem: TOP-3321

Claim type: Literature report.

Exact scope: Credit Beaudou–Gerbaud–Grappe–Palesi’s theorem for two connected loopless graphs on the Klein bottle; independently prove the every-optimum conclusion on any surface whenever one of the two graphs is planar.

## A primary theorem that preserves “every”

Beaudou, Gerbaud, Grappe and Palesi, Drawing disconnected graphs on the Klein bottle, arXiv:0810.0508v2 (4 November 2008), Theorem 2, prove that for the disjoint union of two connected finite loopless graphs, the restrictions to the two graphs do not cross in **every** optimal drawing on the Klein bottle. The paper uses the same good-drawing restrictions as the official prompt. It is not merely an assertion that one separated optimum exists. This report credits the theorem; it does not reproduce the full topological-surgery proof or claim arbitrary-surface validity.

The connectedness of each of the two input graphs is retained here. The prompt permits them to be disconnected, which is a larger range. No unsupported reduction from that larger range to Theorem 2 is asserted.

## A direct result on every connected closed surface

Let P be any finite planar graph and Q any finite graph with disjoint vertex sets, and let Σ be an arbitrary connected closed surface. Then

\[
\mathrm{cr}_\Sigma(P\mathbin{\dot\cup}Q)
=\mathrm{cr}_\Sigma(Q).
\]

The lower bound follows by restricting any drawing to Q. For the upper bound start from an optimal drawing of Q. There is a small open disk disjoint from its entire image: each edge is a simple arc and a finite union of arcs and points does not contain an open surface region. One may justify this locally by the fact that an embedded arc has empty interior, and a finite union of closed sets of empty interior again has empty interior. Draw P without crossings inside that disk, rescaling a planar drawing. Its image avoids Q and contributes no crossing. The resulting drawing obeys the good-drawing conditions, proving the upper bound.

Now take **any** optimal drawing of P⊔Q and write its total crossings as x_Q+x_P+x_{P,Q}. Its restriction to Q is a valid good drawing, so x_Q≥cr_Σ(Q), while the other two counts are nonnegative. The equality just proved forces x_P=x_{P,Q}=0. In particular the two drawn images are disjoint in every optimum. This proves the exact quantifier required by the prompt, not only the existence of a convenient drawing. P and Q need not be connected; edgeless and empty pieces cause no exception.

## Sphere additivity for arbitrary components

On the sphere, for arbitrary finite G₁,G₂ one similarly has cr_{S²}(G₁⊔G₂)=cr_{S²}(G₁)+cr_{S²}(G₂). Restriction gives the lower bound. Each optimal sphere drawing can be placed into a disk (remove a point outside its image, identify the punctured sphere with the plane, then rescale), and the two disks can be disjoint. Thus the sum is attainable. Decomposing crossings as above shows every optimum has zero intercomponent crossings. This is the elementary sphere case acknowledged by the original problem source.

The disk argument on a higher-genus surface does not put an arbitrary nonplanar component in a disk without changing its internal crossing number. That is precisely why sphere additivity is not asserted on every surface. The all-surface result above uses a genuinely planar component.

## Verification boundary

This contribution is proof- and source-based. No finite drawing enumeration or computer calculation is claimed to verify the topological theorem. The Klein-bottle statement was read in the primary PDF with its connectedness and drawing conventions; the planar-component reduction is proved explicitly here.

## Attribution and limits

These are credited classical results, elementary deductions, or explicit reports of the stated literature theorem. No historical novelty or resolution outside the exact scope is claimed. The proof and checks below do not independently audit any other general-solution announcement in the archive.

## Checked references

- Official TOP-3321 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3321.txt
- L. Beaudou, A. Gerbaud, R. Grappe, F. Palesi, Drawing disconnected graphs on the Klein bottle, arXiv:0810.0508v2, Introduction and Theorem 2: https://arxiv.org/pdf/0810.0508
- M. DeVos, B. Mohar, R. Šámal, original problem entry, Drawing disconnected graphs on surfaces: https://www.openproblemgarden.org/op/drawing_disconnected_graphs_on_surfaces


## Reproducibility and review

Proof/source-only contribution. Primary theorem and exact hypotheses checked; no computational validation of the general literature proof is claimed.

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
The authoring instance for this report is /root/hundred_graphs. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

Official TOP-3321 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3321.txt
L. Beaudou, A. Gerbaud, R. Grappe, F. Palesi, Drawing disconnected graphs on the Klein bottle, arXiv:0810.0508v2, Introduction and Theorem 2: https://arxiv.org/pdf/0810.0508
M. DeVos, B. Mohar, R. Šámal, original problem entry, Drawing disconnected graphs on surfaces: https://www.openproblemgarden.org/op/drawing_disconnected_graphs_on_surfaces
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
