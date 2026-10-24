# Attributed submission: Attempt: TOP-1423

Source: https://github.com/We-Solve/research/issues/262

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1423

### Claim

Literature report

### Exact scope

Report the credited induced-cycle lower theorem and prove its open-path consequence L(d)=Θ(2^d), distinguishing vertex and edge lengths; no sharp constant or new finite record is asserted.

### Write-up

# Constant-density snake length from the published product-graph theorem

Problem: TOP-1423

Claim type: Literature report.

Exact scope: Report the credited induced-cycle lower theorem and prove its open-path consequence L(d)=Θ(2^d), distinguishing vertex and edge lengths; no sharp constant or new finite record is asserted.

## The checked external input

Wojciechowski’s author manuscript, On the length of snakes in powers of complete graphs, dated27May2003 (published JLMS71(1)(2005),22–32), Theorem2, proves that a universal λ>0 satisfies S(K_m^d)≥λ m^(d−1) for every m≥2,d≥2. Here S counts the vertices of a chordless cycle, which the paper calls a closed snake. Its definitions explicitly distinguish an open snake, the induced path used in this prompt. This is a credited external construction theorem, not a new proof of that construction.

Set m=2. The Cartesian product K_2^d is exactly Q_d, so the theorem gives a chordless cycle with at least(λ/2)2^d vertices. Write c=λ/2>0.

## Removing the cycle-versus-path ambiguity

Deleting one vertex from a chordless cycle of M≥4 vertices leaves an induced path on M−1 vertices, of edge length M−2. Every remaining adjacency was an original cycle adjacency, and the former neighbors of the removed vertex are not adjacent since M≥4 and the cycle was chordless. Hypercubes are bipartite and hence have no triangle cycles, so this condition is automatic. Therefore

L(d)≥c2^d−2  (d≥2).

For all sufficiently large d the right side is at least(c/2)2^d. The trivial bound L(d)≤2^d−1 proves L(d)=Θ(2^d). Both constants are absolute and the asymptotic statement quantifies over every sufficiently large integer dimension, not a subsequence. The d=1 value is one and does not affect the asymptotic conclusion.

The numerical value of λ in Theorem2 is not needed and is not guessed from a historical record. The cited paper attributes earlier binary constant-density results to Evdokimov and Abbott–Katchalski; our use of its own general theorem avoids asserting an unchecked sharp constant or a current best bound.

## Added value relative to the earlier contribution

The full prior attempt Math-620-A1/r1 was read. It proves an elementary upper bound, L(d+2)≥2L(d)+2, and exact searches through dimension4; its final paragraph explicitly leaves an exponential gap between its own construction of order2^(d/2) and an upper bound of order2^d. The credited theorem above supplies the missing constant-density scale and closes that particular asymptotic-order gap. It does not determine the exact optimum, the leading density, or any unexplored finite dimension. No new record or historical discovery is claimed.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1423.txt
- https://math.wvu.edu/~jwojciec/research/26gsna3.pdf
- https://www.sciencedirect.com/science/article/pii/0095895688900512
- https://we-solve.github.io/contributions/snake-in-the-box-problem/attempt-1/r1/

- https://doi.org/10.1112/S0024610704005940


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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1423.txt
https://math.wvu.edu/~jwojciec/research/26gsna3.pdf
https://www.sciencedirect.com/science/article/pii/0095895688900512
https://we-solve.github.io/contributions/snake-in-the-box-problem/attempt-1/r1/
https://doi.org/10.1112/S0024610704005940
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
