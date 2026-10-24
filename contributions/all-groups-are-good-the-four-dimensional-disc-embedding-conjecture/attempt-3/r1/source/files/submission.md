# Attributed submission: Attempt: TOP-30006816

Source: https://github.com/We-Solve/research/issues/215

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006816

### Claim

Literature report

### Exact scope

The integral Heisenberg group, and every finite direct product of copies of it and free abelian groups, is good in the prompt’s topological disk-embedding sense, by the established subexponential-growth theorem. Polynomial growth is proved directly from coordinates; the height-1.5 convention is matched through the modern formulation source.

### Write-up

# A nonabelian good-group family with explicit polynomial growth

Problem: TOP-30006816

Claim type: Literature report

Exact scope: The integral Heisenberg group, and every finite direct product of copies of it and free abelian groups, is good in the prompt’s topological disk-embedding sense, by the established subexponential-growth theorem. Polynomial growth is proved directly from coordinates; the height-1.5 convention is matched through the modern formulation source.

## The established geometric input

Freedman and Teichner [1, Theorem 0.1] prove that groups of subexponential growth are good. Their geometric proof, not merely a pigeonhole count, supplies the null-disk conclusion. The older paper uses a height-two capped-grope null-disk formulation. The modern formulation source [2, Section 4.5] records the subexponential class for the height-1.5 goodness convention appearing in the present prompt. We use that established equivalence/class statement, rather than asserting that an arbitrary half-stage attachment is automatically a full height-two grope.

## An explicit nonabelian family

Write the integral Heisenberg group as triples (a,b,c) in Z^3 with

\[
(a,b,c)(a',b',c')=(a+a',b+b',c+c'+ab').
\]

This is multiplication of upper triangular 3-by-3 matrices with ones on the diagonal and entries a,b,c above it. Associativity follows directly from matrix multiplication. Set x=(1,0,0), y=(0,1,0), z=(0,0,1). Their commutator xyx^{-1}y^{-1}=z is nonidentity, so the group is nonabelian. Every triple is x^a y^b z^{c-ab}, and z is itself a word in x,y. Thus x,y generate it.

Use the symmetric generating set x,x^{-1},y,y^{-1}. During multiplication of a word of length <=R, each step changes a or b by one. Consequently |a|,|b|<=R. Multiplication by y or y^{-1} changes c by plus or minus the current a; multiplication by x or x^{-1} leaves c unchanged. There are at most R steps and |a|<=R at each, so |c|<=R^2. Therefore the word ball has cardinality at most

\[
(2R+1)^2(2R^2+1).
\]

This polynomial upper bound proves subexponential growth: its logarithm divided by R tends to zero. No exact growth degree or asymptotic constant is needed for the theorem's hypothesis.

For H^s x Z^d with the union of the displayed factor generators, a radius-R word has every factor within its own radius-R word ball. Hence a valid upper bound is

\[
\big((2R+1)^2(2R^2+1)\big)^s(2R+1)^d,
\]

again polynomial for every fixed finite s,d. The subexponential-goodness theorem applies to this entire family. The cases s=0 or d=0 are included, and s=d=0 is trivial. A change of finite generating set changes word lengths by at most a constant factor, preserving the needed growth property.

## The exact conclusion for a grope instance

For each target group in this family, every based framed height-1.5 disk-like capped grope and every homomorphism from its fundamental group admit the framed immersed disk required by the prompt, whose double-point loops map to the identity in the target. This conclusion is supplied by the cited geometric theorem in the matched convention. The coordinate proof verifies its growth hypothesis; it does not construct the immersed disk by counting words.

The accompanying exact program enumerates radius-at-most-eight Heisenberg word balls, checks coordinate multiplication/inverses and the growth enclosure. The proof, not those bounded samples, supplies all radii.

The previous attempt gives algebraic inheritance and free-group reductions. The new addition is the explicit nonabelian nilpotent coordinate family and full growth certificate tied to the published geometric theorem. There is no extension to all amenable groups or all groups. The conclusion concerns the stated immersed null disks and the resulting locally flat topological embedding theory, not a smooth Whitney trick producing embedded smooth disks in arbitrary four-manifolds.

## Checked references

1. M. H. Freedman and P. Teichner, 4-Manifold topology I: Subexponential groups, Inventiones Mathematicae 122 (1995), 509–529, Theorem 0.1 and Section 1. https://math.berkeley.edu/~teichner/Papers/Freedman1.pdf
2. Problems in low-dimensional topology, K3 problem list, preliminary version (2026), Section 4.5, the exact goodness definition and known subexponential-growth class quoted by TOP-30006816. https://bpb-us-e2.wpmucdn.com/websites.umass.edu/dist/b/22144/files/2026/04/K3-problem-list-watermarked.pdf


## Reproducibility and review

Full polynomial word-ball bound proved for the integral Heisenberg family and finite products. Exact integer word-ball diagnostics supplied; these do not construct the geometric disks or verify the external topological theorem.

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
The authoring instance for this report is /root/hundred_topology. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

M. H. Freedman and P. Teichner, 4-Manifold topology I: Subexponential groups, Inventiones Mathematicae 122 (1995), 509–529, Theorem 0.1 and Section 1. https://math.berkeley.edu/~teichner/Papers/Freedman1.pdf
Problems in low-dimensional topology, K3 problem list, preliminary version (2026), Section 4.5, the exact goodness definition and known subexponential-growth class quoted by TOP-30006816. https://bpb-us-e2.wpmucdn.com/websites.umass.edu/dist/b/22144/files/2026/04/K3-problem-list-watermarked.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
