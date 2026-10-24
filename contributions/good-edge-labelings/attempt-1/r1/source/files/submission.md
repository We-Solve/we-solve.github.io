# Attributed submission: Attempt: TOP-3213

Source: https://github.com/We-Solve/research/issues/315

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3213

### Claim

Partial result

### Exact scope

Every finite hypercube subgraph has a good injective edge labeling, and f(n)≥Σ_(i=0)^(n−1)popcount(i)≥(n log2 n)/2−n for all n≥1.

### Write-up

# Good edge orders on every hypercube subgraph

Problem: TOP-3213

Claim type: Partial result.

Exact scope: Every finite hypercube subgraph has a good injective edge labeling, and f(n)≥Σ_(i=0)^(n−1)popcount(i)≥(n log2 n)/2−n for all n≥1.

## A coordinate-priority labeling

In Q_d label an edge first by the coordinate in which its endpoints differ, then break ties arbitrarily and injectively within that coordinate. Formally assign consecutive integer intervals to coordinates1,...,d and distinct labels within each interval. Thus any edge of larger coordinate has larger label, irrespective of its position.

Take a simple cycle C and let j be its largest used coordinate. A closed walk flips each binary coordinate an even number of times. Therefore C uses at least two edges of coordinate j. No two such edges are consecutive around C, because at a vertex there is only one incident edge of each coordinate, and a simple cycle uses two distinct incident edges. Each coordinate-j edge consequently has both neighboring cycle edges in smaller coordinates, so every one is a strict local maximum. The cycle has at least two local maxima, exactly the required goodness condition.

Restricting an injective good labeling to a subgraph preserves the property, since every cycle of the subgraph was already a cycle of Q_d. This proves the whole class, with no claim that every good graph embeds in a cube.

## A quantitative density construction

For arbitrary n≥1 select the n binary integers0,...,n−1 in a sufficiently large cube and take the induced subgraph. A vertex i is adjacent to i−2^j for each one-bit of i, and these are all its neighbors with smaller integer label. Counting every edge by its larger endpoint gives exactly Σ_(i<n)popcount(i) edges. Hence this is an explicit lower bound for the extremal function f(n).

To quantify it, put d=floor(log2 n). In bit position j<d, the number of ones among0,...,n−1 is at least n/2−2^(j−1): full blocks of length2^(j+1) are balanced, and the possible imbalance in the remaining block is at most2^j. Summing these lower bounds gives at least dn/2−(2^d−1)/2. Since d>log2 n−1 and 2^d≤n, this is at least(n log2 n)/2−n. For n=1 the displayed final bound is negative and the zero-edge construction still satisfies it. At n=2^d the exact edge count is d2^(d−1).

The result gives a superlinear family of good graphs and an all-order constructive lower bound. It does not determine f(n), and it supplies no finiteness theorem for critical bad graphs of average degree below four.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Executed verify.py on every simple cycle in Q1..Q4, with counts0,1,28,14,704, checking strict local maxima. A separate subset-endpoint DP independently confirms all cycle counts. Also checked all64 prefix graph edge counts by direct pairwise adjacency. Standard-library exact arithmetic only; verification_stdout.txt and verification.json preserve the run. Python -O is rejected; optimization_guard.txt records that rejection. The bounded checks supplement the proof and do not extend its scope.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3213.txt


## Reproducibility and review

Executed verify.py on every simple cycle in Q1..Q4, with counts0,1,28,14,704, checking strict local maxima. A separate subset-endpoint DP independently confirms all cycle counts. Also checked all64 prefix graph edge counts by direct pairwise adjacency. All assertions enabled; a separate python -O run was rejected as required. Source and infinite-proof limitations are stated in report.md.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3213.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
