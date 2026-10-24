# Attributed submission: Attempt: TOP-30004864

Source: https://github.com/We-Solve/research/issues/384

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30004864

### Claim

Partial result

### Exact scope

A rational SDP whose coefficient matrices are invariant under all simultaneous row/column permutations reduces exactly to a two-variable rational LP, allowing exact feasibility/optimality/unboundedness decisions in polynomial bit time.

### Write-up

# Algorithms for Symmetry-Reduced Semidefinite Programs

Claim type: **Partial result**.

Exact scope: A rational SDP whose coefficient matrices are invariant under all simultaneous row/column permutations reduces exactly to a two-variable rational LP, allowing exact feasibility/optimality/unboundedness decisions in polynomial bit time.

## Symmetrizing without enumerating permutations

Use the formulation min⟨C,X⟩ subject to ⟨A_i,X⟩≤b_i and X⪰0, with symmetric rational matrices. Suppose P A_i Pᵀ=A_i and P C Pᵀ=C for every permutation matrix P. For n≥2 this means A_i=α_i I+β_i J, and similarly C: transpositions show all diagonal entries agree and all off-diagonal entries agree. These properties can be checked directly in the encoded input.

If X is feasible, its average over all conjugates PXPᵀ is feasible with the same objective, since the PSD cone and each inequality are convex and the data invariant. The average is aI+bJ. One need not list n! terms: its common diagonal is tr(X)/n and its common off-diagonal is the mean of the off-diagonal entries. Conversely every feasible averaged matrix is an allowed original matrix. Thus the attainable objective values agree exactly, including infeasibility and unboundedness.

Put u=a and v=a+nb. The eigenvalues are u, of multiplicity n−1, and v, of multiplicity one. Hence PSD is exactly u,v≥0. A direct trace calculation gives
⟨α_i I+β_i J, aI+bJ⟩=(n−1)α_i u+(α_i+nβ_i)v.
The objective has the same formula with C's parameters. This is an ordinary rational LP in the nonnegative quadrant with m inequalities. Recover X=uI+(v−u)J/n from any optimal pair; in a compact output format this requires just two rationals and n.

## Exact two-dimensional solution

Include the two coordinate axes among boundary lines. Enumerate intersections of all pairs with nonzero determinant, and retain those satisfying every inequality and u,v≥0. This costs O((m+2)³) rational arithmetic operations. If the feasible region is nonempty it has a vertex: minimize u+v, whose nonempty sublevel sets in the quadrant are compact, and choose an extreme point of its compact optimal face. A vertex in the plane is the intersection of two independent active boundary lines; a region confined to a line or point is also covered. Thus no retained intersection means infeasible.

For a feasible point, unboundedness below is equivalent to a recession direction d≥0 with A′d≤0 and c′d<0. This standard planar LP fact follows by decomposing the pointed feasible polygon into the convex hull of its vertices plus its at most two extreme recession rays. Check it explicitly by imposing d₁+d₂=1: intersect the resulting rational interval constraints, and minimize the linear objective on that closed interval. A negative value certifies unboundedness; if none exists, the minimum is attained at a retained vertex. This also covers a zero objective and a feasible singleton. For n=1 use the scalar inequality problem directly.

All coefficients of the reduced LP and all pair-intersection numerators/denominators have polynomial bit length in the original rational encoding length L plus log(n+2). Elementary exact arithmetic therefore gives polynomial bit complexity. For explicit dense matrices, reading Θ((m+1)n²) entries is included; compact α,β input can be much shorter, and a dense n²-entry answer is only printed if that output cost is charged. This result exploits full permutation symmetry, not general low-dimensional symmetry algebras or arbitrary SDPs.

## Earlier contributions and limits

The prior contribution discusses generic few-variable SDP costs, supplied diagonalization, and input-size obstacles. The full permutation commutant, explicit two-eigenvalue reduction, and exact two-dimensional LP algorithm are distinct concrete added content.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30004864/verify.py). Source SHA-256: `3e48f57a1c63c64a65113ed6922fb27f6f289ceb98543c034d6832f2623a6d17`. The source is byte-identical to the reviewed and executed program.



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
The authoring instance for this report is /root/hundred_algorithms. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30004864.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30004864/verify.py (Used: exact previously reviewed program; SHA-256 3e48f57a1c63c64a65113ed6922fb27f6f289ceb98543c034d6832f2623a6d17).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
