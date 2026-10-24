# Attributed submission: Attempt: TOP-1425

Source: https://github.com/We-Solve/research/issues/157

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1425

### Claim

Partial result

### Exact scope

Classify all edge-connected triangle blocks in finite subcubic simple graphs and obtain exact additive packing/cover formulas, proving τ≤2ν throughout the class.

### Write-up

# Tuza’s inequality for every graph of maximum degree three

Problem: TOP-1425

Claim type: Partial result.

Exact scope: Classify all edge-connected triangle blocks in finite subcubic simple graphs and obtain exact additive packing/cover formulas, proving τ≤2ν throughout the class.

## Triangle blocks

Let G be a finite simple graph of maximum degree at most three. Form an auxiliary graph whose vertices are the triangles of G and whose edges join two triangles sharing a graph edge. A triangle block means one connected component of this auxiliary graph, together with all graph edges in its triangles. Different blocks have disjoint edge sets; vertices and graph edges in no triangle cause no constraints for either τ or ν.

We claim every nonempty block is K₃, a diamond K₄−e, or K₄, with its full set of triangles. A block with just one triangle is K₃. Otherwise choose two triangles abc and abd sharing ab. The endpoints a,b already have their three neighbors b,c,d and a,c,d respectively, so no additional neighbor can be attached to them. A triangle sharing ac must have its third vertex in N(a)∩N(c). The only possibility beyond the existing b is d, which requires cd. The same argument applies to ad,bc,bd. A further triangle on ab has already used its only two possible third vertices c,d. Thus if cd is absent the block stops at the two triangles of the diamond; if cd is present all four vertices induce K₄ and the block stops there because every vertex has degree three. This checks all edges by which another triangle could be connected into the block.

## Exact local values

For a K₃ block, ν=1 and τ=1. For a diamond the two triangles share their central edge, so no two are edge-disjoint and deleting that one edge meets both: again (ν,τ)=(1,1).

For K₄, every two triangles share an edge, so ν=1. One edge cannot meet every triangle: either of the two triangles omitting one of its endpoints avoids it. Two disjoint edges do meet every triangle, since a three-element vertex set contains one of those pairs. Hence (ν,τ)=(1,2).

Packing and covering are additive over the blocks. For packing, take an optimal packing within each block; edges do not overlap between blocks, so their union is a valid packing, and any packing restricts to one in each block. For covering, restrictions to each block must hit its triangles, and the union of optimal local edge covers hits all triangles. Edges outside the triangle blocks can be omitted from an optimal cover.

Writing b₃,b_D,b₄ for the numbers of K₃, diamond, and K₄ blocks gives the exact formulas

\[
\nu(G)=b_3+b_D+b_4,\qquad
\tau(G)=b_3+b_D+2b_4.
\]

Therefore τ(G)≤2ν(G), with equality, apart from the triangle-free zero case, precisely when every nonempty triangle block is K₄. A K₄ block is a whole connected component in a subcubic graph. This also gives a linear local procedure once the triangles are listed.

## Check and residual scope

The verifier exhausts all labeled simple subcubic graphs through six vertices. It independently computes ν by exhaustive triangle subsets and τ by exhaustive edge subsets, classifies the blocks, and checks both exact formulas. It includes K₄ and the diamond explicitly. The proof covers arbitrary finite order; the enumeration checks the claimed classification and additive bookkeeping. Maximum degree greater than three permits longer triangle-overlap structures, so that is a genuine limitation.

The subcubic result is classical and is subsumed by stronger known degree/average-degree theorems. No claim of a new general case beyond the literature is made.

## Attribution and limits

These are credited classical results, elementary deductions, or explicit reports of the stated literature theorem. No historical novelty or resolution outside the exact scope is claimed. The proof and checks below do not independently audit any other general-solution announcement in the archive.

## Checked references

- Official TOP-1425 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1425.txt
- J. Kahn and J. Park, Tuza’s Conjecture for random graphs, arXiv:2007.04351, Section 1, definitions and conjecture: https://arxiv.org/abs/2007.04351
- G. J. Puleo, Tuza’s Conjecture for graphs with maximum average degree less than 7, European Journal of Combinatorics (2015), primary publisher record: https://doi.org/10.1016/j.ejc.2015.03.006


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

Official TOP-1425 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1425.txt
J. Kahn and J. Park, Tuza’s Conjecture for random graphs, arXiv:2007.04351, Section 1, definitions and conjecture: https://arxiv.org/abs/2007.04351
G. J. Puleo, Tuza’s Conjecture for graphs with maximum average degree less than 7, European Journal of Combinatorics (2015), primary publisher record: https://doi.org/10.1016/j.ejc.2015.03.006
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
