# Attributed submission: Attempt: TOP-1412

Source: https://github.com/We-Solve/research/issues/154

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1412

### Claim

Partial result

### Exact scope

For each prime power q≥2, construct a simple graph with q²+q+1 vertices, maximum degree at most q+1, and diameter at most two; hence N(q+1,2)≥q²+q+1, within q+1 of the Moore bound.

### Write-up

# Projective polarity graphs give a quadratic diameter-two construction

Problem: TOP-1412

Claim type: Partial result.

Exact scope: For each prime power q≥2, construct a simple graph with q²+q+1 vertices, maximum degree at most q+1, and diameter at most two; hence N(q+1,2)≥q²+q+1, within q+1 of the Moore bound.

## Construction over an arbitrary finite field

Let F_q be the field with q elements. Vertices are one-dimensional subspaces [x] of F_q³. Equivalently, normalize a nonzero vector by dividing by its first nonzero coordinate, so that coordinate becomes one. Join distinct [x],[y] exactly when x·y=0 for the ordinary nondegenerate bilinear dot product. Scaling either vector does not change this equation. The symmetry of the dot product makes the graph undirected; exclude loops explicitly even when x·x=0.

Each projective point represents q−1 nonzero vectors, so the order is (q³−1)/(q−1)=q²+q+1. For any nonzero x, its orthogonal subspace has dimension two. It contains (q²−1)/(q−1)=q+1 projective points. These are all possible neighbors; when [x] lies in its own orthogonal subspace, excluding its loop reduces the degree by one. Thus every degree is q or q+1, in particular at most q+1. This reasoning is valid in characteristic two as well.

## Diameter proof

Take distinct projective points [x],[y]. The vectors x,y are linearly independent. Nondegeneracy of the dot product implies their two perpendicular planes meet in a one-dimensional subspace [z]. Thus z is perpendicular to both. If x·y≠0, then [z] cannot equal either endpoint: equality with [x], for example, would imply x·y=0. Consequently every nonadjacent pair has a common, distinct neighbor [z]. Adjacent pairs are already at distance one. The graph is connected and has diameter at most two.

The general breadth-first bound for maximum degree d and diameter two is 1+d+d(d−1)=d²+1: from a root there are at most d neighbors and at most d−1 new vertices per neighbor. At d=q+1 this is q²+2q+2. Therefore

\[
q^2+q+1\le N(q+1,2)\le q^2+2q+2.
\]

In particular the ratio of the constructed order to this upper bound tends to one along prime powers. This is an asymptotically Moore-sized family, not an exact determination of N(d,2) or a claim of the best finite construction for every d. For any larger d the same construction is also a valid lower bound by monotonicity in the maximum-degree allowance.

## Exact construction check

The accompanying program constructs the projective points for prime q∈{2,3,5,7,11,13,17,19}. It independently verifies their count, every vertex degree, connectedness and distance at most two for all vertex pairs. The proof covers all prime powers; the implementation intentionally checks prime fields only and does not pretend to implement extension-field arithmetic.

## Attribution and limits

These are credited classical results, elementary deductions, or explicit reports of the stated literature theorem. No historical novelty or resolution outside the exact scope is claimed. The proof and checks below do not independently audit any other general-solution announcement in the archive.

## Checked references

- Official TOP-1412 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1412.txt
- K. Lakhotia et al., PolarFly: A Cost-Effective and Flexible Low-Diameter Topology, arXiv:2208.01695; SC22 conference paper, DOI 10.1109/SC41404.2022.00017: https://arxiv.org/abs/2208.01695


## Reproducibility and review

Exact standard-library verifier completed with status PASS; see verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


[Executable fenced material omitted from this text-only security-screened package; original retained privately.]


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

Official TOP-1412 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1412.txt
K. Lakhotia et al., PolarFly: A Cost-Effective and Flexible Low-Diameter Topology, arXiv:2208.01695; SC22 conference paper, DOI 10.1109/SC41404.2022.00017: https://arxiv.org/abs/2208.01695
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
