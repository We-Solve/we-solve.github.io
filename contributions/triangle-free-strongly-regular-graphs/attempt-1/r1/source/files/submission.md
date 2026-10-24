# Attributed submission: Attempt: TOP-3145

Source: https://github.com/We-Solve/research/issues/310

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3145

### Claim

Partial result

### Exact scope

Derive the full parameter and eigenmultiplicity restrictions; show that C5 is the only primitive triangle-free strongly regular graph whose restricted eigenvalue discriminant is not a square, and the only one with μ=k−1.

### Write-up

# Integral spectral restrictions for primitive triangle-free strongly regular graphs

Problem: TOP-3145

Claim type: Partial result.

Exact scope: Derive the full parameter and eigenmultiplicity restrictions; show that C5 is the only primitive triangle-free strongly regular graph whose restricted eigenvalue discriminant is not a square, and the only one with μ=k−1.

## Counting and matrix identities

Let G have primitive triangle-free strongly regular parameters(v,k,0,μ). Connectivity gives μ>0: if μ=0, no nonadjacent pair has a common neighbor, contradicting a shortest path of length two in a connected noncomplete graph. Counting edges from the neighbors of a fixed vertex into its nonneighbors gives

(v−k−1)μ=k(k−1), hence v=1+k+k(k−1)/μ.

The common-neighbor matrix identity is A²=kI+μ(J−I−A). On the subspace perpendicular to the all-one vector, restricted eigenvalues r,s satisfy x²+μx+μ−k=0. Put D=μ²+4(k−μ), so r,s=(-μ±sqrt D)/2. Their multiplicities f,g obey f+g=v−1 and k+fr+gs=0, giving

f=(v−1)/2+((v−1)μ−2k)/(2sqrt D),  g=v−1−f.

These must be nonnegative integers. This uses the spectral theorem for the real symmetric adjacency matrix.

## Primitivity excludes μ=k

Always μ≤k. If μ=k, the neighbors N(x) of any vertex form an independent set of size k. Any two nonadjacent vertices have identical neighborhoods. Every neighbor y of x is adjacent to all vertices outside N(x), because v=2k by the counting equation and y has k neighbors, none in N(x). Thus G=K_(k,k), whose complement is disconnected. It is not primitive. Hence 1≤μ<k, and k≥2.

## The nonsquare case is completely determined

If D is not a square, sqrt D is irrational. The displayed integer multiplicity formula forces (v−1)μ=2k. Substituting the parameter equation yields kμ+k(k−1)=2k, hence μ+k=3. With k≥2 and μ≥1, this forces(k,μ)=(2,1), v=5. A connected two-regular simple graph on five vertices is C5, and it has exactly these parameters. Therefore every other primitive triangle-free strongly regular graph has square D.

When D=d², parity gives d≡μ(mod2), so r=(d−μ)/2 is a positive integer and s=−μ−r. Rearranging the quadratic yields k=r²+μ(r+1). Together with the v formula and integer f,g, this gives an effective necessary arithmetic filter. It is not an existence theorem.

As one concrete consequence, if μ=k−1 then D=(k−1)²+4. For k≥3 this lies strictly between(k−1)² and k² and is nonsquare; the preceding result rules it out. Thus C5 is also the only primitive example in this entire parameter regime.

None of these conditions proves that the seven examples in the prompt are exhaustive, and a feasible integer parameter set is not represented as an actual eighth graph.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3145.txt


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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3145.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
