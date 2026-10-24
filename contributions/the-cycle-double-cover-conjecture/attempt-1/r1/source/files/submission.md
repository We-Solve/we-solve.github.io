# Attributed submission: Attempt: TOP-59

Source: https://github.com/We-Solve/research/issues/137

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-59

### Claim

Literature report

### Exact scope

Report Oum’s arXiv:2607.16356v3 theorem for every finite bridgeless multigraph, including loops and disconnected graphs. Independently prove the planar bridgeless case by decomposing facial boundary trails.

### Write-up

# The 2026 cycle-double-cover theorem, with a direct planar construction

Problem: TOP-59

Claim type: Literature report.

Exact scope: Report Oum’s arXiv:2607.16356v3 theorem for every finite bridgeless multigraph, including loops and disconnected graphs. Independently prove the planar bridgeless case by decomposing facial boundary trails.

## Exact literature statement and status

Sang-il Oum’s 2026 exposition states that every bridgeless graph has a cycle double cover and explicitly permits parallel edges and loops. It credits the underlying proof announced by OpenAI in July 2026. The checked version is arXiv:2607.16356v3, revised 1 August 2026. This is a report of that preprint theorem; the present contribution has not independently verified its full general proof or any formalization.

Its cycle convention is a connected 2-regular subgraph, so a loop is a cycle and a pair of parallel edges may be a cycle. Its cover is a list, so repetition is permitted. These are exactly the official prompt conventions. Disconnected graphs reduce componentwise, and the empty graph admits the empty list.

## A self-contained planar case

Take a connected bridgeless plane multigraph with at least one edge. An edge has its two sides incident with distinct faces. To see this without assuming 2-vertex-connectivity, first note that every nonbridge edge is on a graph-theoretic cycle: after deleting the edge a path between its endpoints remains. The drawing of that cycle is a simple closed curve, including the loop and two-parallel-edge cases. The two sides of the chosen edge lie on opposite sides of that curve and cannot belong to the same complementary face.

Traverse each face boundary. Each edge occurs once on the boundary of each of its two incident faces, and occurs on no other face boundary. Thus each facial boundary walk is a closed trail, possibly revisiting a vertex but never repeating an edge. A closed trail splits into edge-disjoint cycles: if an internal vertex repeats, cut the trail at two occurrences into two shorter closed trails and induct; if no internal vertex repeats it is already a cycle. A loop is the length-one base case. Equivalently, the edge set of a closed trail has even degree at every vertex and decomposes by repeatedly removing a cycle.

Apply this splitting separately to every facial boundary. Each original edge survives in exactly two resulting list entries, one from each face-side occurrence. This is a cycle double cover in the prompt’s strict cycle convention, even when a face boundary itself was not a cycle. For multiple connected components apply the argument to a plane embedding of each component; isolated vertices contribute nothing. This proves the planar special case without using the general 2026 theorem or the four-color theorem.

## Why the hypotheses and conventions matter

A bridge belongs to no cycle: deleting an edge on a cycle leaves a path joining its endpoints. Hence a graph with a bridge cannot have such a cover. Bridgelessness is therefore necessary in all graphs, independently of the literature theorem.

It is essential to split a facial boundary at repeated vertices. For instance two cycles meeting at one articulation vertex have an outer facial trail visiting that vertex twice; that whole trail is not a connected 2-regular subgraph. The splitting argument covers this case. A single loop has two faces and supplies the same one-edge cycle twice; forbidding repeated list entries would incorrectly reject it.

## Verification

The symbolic planar argument is the certificate for the infinite class; no finite graph search proves the general theorem. The accompanying exact checker tests cycle splitting and edge multiplicities on explicit rotation-system facial walks for a loop, two parallel edges, a triangle, a figure-eight of triangles, and a plane K₄. It verifies that each emitted entry is connected and 2-regular with loop degrees counted twice. These are checks of boundary conventions, not a substitute for Oum’s general proof.

## Attribution and limits

These are credited classical results, elementary deductions, or explicit reports of the stated literature theorem. No historical novelty or resolution outside the exact scope is claimed. The proof and checks below do not independently audit any other general-solution announcement in the archive.

## Checked references

- Official TOP-59 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-59.txt
- S.-i. Oum, A proof of the cycle double cover conjecture by OpenAI: An exposition, arXiv:2607.16356v3, Introduction, theorem, loop/multigraph convention and Sections 3–8: https://arxiv.org/html/2607.16356v3


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

Official TOP-59 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-59.txt
S.-i. Oum, A proof of the cycle double cover conjecture by OpenAI: An exposition, arXiv:2607.16356v3, Introduction, theorem, loop/multigraph convention and Sections 3–8: https://arxiv.org/html/2607.16356v3
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
