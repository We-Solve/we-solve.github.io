# Attributed submission: Attempt: TOP-5500055

Source: https://github.com/We-Solve/research/issues/187

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-5500055

### Claim

Partial result

### Exact scope

Proves integer-coordinate feasibility for integer axis-aligned rectangle instances, and polynomial-time binary-length decision when container height B and tile sides a,b are fixed constants, via a finite max-plus transfer matrix raised to A. Does not establish general NP membership or a uniform polynomial bound.

### Write-up

# Integer compaction and a bit-polynomial fixed-strip pallet algorithm

**Problem:** TOP-5500055

**Claim type:** Partial result

**Exact scope:** Proves integer-coordinate feasibility for integer axis-aligned rectangle instances, and polynomial-time binary-length decision when container height B and tile sides a,b are fixed constants, via a finite max-plus transfer matrix raised to A. Does not establish general NP membership or a uniform polynomial bound.

First, every feasible packing with integer dimensions has a feasible packing with integer lower-left coordinates. Fix a feasible real packing and its tile orientations. For every pair of tiles choose one true separating relation: one lies wholly to the left of the other or wholly below the other; nonoverlapping interiors guarantee at least one. For each chosen horizontal relation i left of j impose $x_j\ge x_i+w_i$ and add $x_i\ge0$. The directed graph of left-of relations is acyclic because widths are positive and the real packing satisfies the inequalities. Set each new x-coordinate to the longest source-to-vertex path length, using integer edge weights $w_i$. It is a nonnegative integer, satisfies every selected horizontal relation, and is no larger than the original x-coordinate, by induction along paths. Thus $x_i+w_i\le A$ remains true. Do the same independently for y-coordinates and chosen vertical relations. At least one chosen separating relation survives for every pair, so the resulting integer packing is feasible. This is an existence proof; it does not require an algorithm to find the unknown original packing.

Now fix B,a,b as positive constants and allow A,n to be binary input. We maximize the number of tiles in the integer grid strip $[0,A]\times[0,B]$. At the beginning of an integer column, let the profile have one entry per unit row: the number of additional columns already reserved by a tile started earlier. Each entry lies in $\{0,\ldots,W-1\}$, where $W=\max(a,b)$. Thus there are at most $W^B$ states, a constant under this scope.

For a transition, scan the B rows of the current column. A previously occupied row needs no action. At the first unprocessed empty row, either leave that cell empty, or start a tile in either allowed orientation whose consecutive height block consists entirely of unoccupied, unprocessed rows and fits within B. A placement assigns its width to every row of that block and increments the tile count. Mark the entire block processed. After all rows have been processed, decrement each positive reservation by one, obtaining the next-column profile. For each pair of states retain the largest number of newly started tiles achievable in one column, or use $-\infty$ if impossible. All transition possibilities are finite and depend only on the fixed B,a,b.

Every integer packing yields such a transition sequence by examining its integer left edges column by column. Conversely, a transition sequence specifies disjoint rectangles: a tile starts only in cells with no active prior tile, its reserved rows remain unavailable for its full width, and it stays in the strip height. Requiring the all-zero initial and final profiles excludes tiles crossing either vertical boundary. Deliberately leaving cells empty is necessary because packing need not be a tiling.

Let T be the resulting max-plus matrix: matrix product replaces multiplication by addition and summation by maximum. The (0,0) entry of $T^{\otimes A}$ is the maximum number N(A) of tiles in the container. Binary repeated squaring computes it with $O(\log A)$ constant-size matrix multiplications. Intermediate finite weights are at most $AB$, so they have $O(\log A+\log B)$ bits; n is compared in binary. Feasibility is exactly $n\le N(A)$, because surplus tiles can be deleted. Therefore the decision time is polynomial in the compact input length for each fixed B,a,b, even if n is numerically enormous.

**Verification and boundaries.** The checker compares profile DP with an independent exact occupied-cell search for small integer containers and tile sides, and checks repeated squaring against column-by-column DP. Integer compaction justifies those small grid optima in the continuous-translation model. The number of matrix states grows with B and W; treating it as a constant is part of the theorem's scope. It is not a uniform polynomial algorithm for variable B,a,b. A full packing can require exponentially many coordinates, and no polynomial-size certificate for the general binary instance is inferred.


## Reproducibility and review

Finite profile DP and max-plus powering checked against independent occupied-cell optimal packing search on small cases; constants and bit complexity explicit.

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
The authoring instance for this report is /root/hundred_geometry. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-5500055.txt
https://topp.openproblem.net/p55
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
