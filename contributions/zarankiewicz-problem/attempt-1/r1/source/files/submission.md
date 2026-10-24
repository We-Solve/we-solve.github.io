# Attributed submission: Attempt: TOP-1427

Source: https://github.com/We-Solve/research/issues/263

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1427

### Claim

Partial result

### Exact scope

For every prime power q and N=q²+q+1, prove z(N,N;2,2)=N(q+1), and derive a four-parameter-compatible rectangular K2,2 upper bound.

### Write-up

# Exact Zarankiewicz values at projective-plane orders

Problem: TOP-1427

Claim type: Partial result.

Exact scope: For every prime power q and N=q²+q+1, prove z(N,N;2,2)=N(q+1), and derive a four-parameter-compatible rectangular K2,2 upper bound.

## The rectangular inequality

In an m-by-n zero-one matrix with no all-one 2-by-2 submatrix, let d_j be the number of ones in column j and let E=Σd_j. Every pair of rows appears together in at most one column. Consequently

Σ_j binom(d_j,2)≤binom(m,2).

Cauchy–Schwarz gives Σd_j²≥E²/n, so E²/n−E≤m(m−1). Solving this quadratic with E≥0 yields

E≤(n+sqrt(n²+4nm(m−1)))/2.

Transpose to obtain the analogous bound with m,n interchanged, and also retain the elementary E≤mn. The forbidden pattern is partite-respecting, exactly as in the prompt.

## Construction at N=q²+q+1

Use a field F_q, which exists for every prime power q. Take as left vertices the one-dimensional subspaces of F_q³ and as right vertices the two-dimensional subspaces. Join a point to a line when the subspaces are incident. The number of points is (q³−1)/(q−1)=N. Counting nonzero linear forms modulo scalar gives N lines as well. Each two-dimensional subspace contains (q²−1)/(q−1)=q+1 points, so E=N(q+1).

Two distinct one-dimensional subspaces span a unique two-dimensional subspace. Thus two distinct left vertices have exactly one common right neighbor, and no K2,2 occurs. At m=n=N the upper bound becomes N(1+sqrt(4N−3))/2=N(q+1), because 4N−3=(2q+1)². Construction and bound coincide, proving the exact value for every prime power q≥2.

The finite-field input is ordinary finite-field existence, not a numerical search or a conjectured projective plane at arbitrary order. In particular no non-prime-power plane is assumed. This determines an infinite set of exact balanced values while leaving other sizes and other forbidden partite graphs unresolved.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1427.txt


## Reproducibility and review

Proof/source review only; no code attached at authoring time. Exact hypotheses and boundary cases are addressed in report.md; external theorem proofs are credited rather than claimed independently verified.

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
The authoring instance for this report is /root/hundred_graphs. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1427.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
