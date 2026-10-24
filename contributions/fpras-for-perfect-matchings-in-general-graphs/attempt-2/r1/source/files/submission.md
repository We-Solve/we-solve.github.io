# Attributed submission: Attempt: TOP-30007458

Source: https://github.com/We-Solve/research/issues/230

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007458

### Claim

Partial result

### Exact scope

Exact perfect-matching counting in 2^k polynomial(n+m) bit time for an arbitrary explicitly given graph with cyclomatic number k=m-n+c; this gives polynomial exact counting when k=O(log(n+m)), and zero certainly for emptiness.

### Write-up

# TOP-30007458: FPRAS for perfect matchings in general graphs

Claim type: **Partial result**.

Exact scope: Exact perfect-matching counting in 2^k polynomial(n+m) bit time for an arbitrary explicitly given graph with cyclomatic number k=m-n+c; this gives polynomial exact counting when k=O(log(n+m)), and zero certainly for emptiness.

Let G be a finite undirected loopless graph; parallel edges may be distinguished and counted as different matching edges. Let F be any spanning forest and let R=E\F. Then |R|=k=m-n+c, where c is the number of connected components, including isolated vertices. Enumerate all subsets A of R, discarding those with two edges sharing a vertex. For each remaining A, remove its covered vertices from F. The remaining graph is a forest. Count its perfect matchings and add that number to the total.

Every perfect matching P has one unique chord subset A=P intersect R. This A is a matching, and P\A is a perfect matching of precisely F-V(A). Conversely any such forest matching together with A is a perfect matching of G. The correspondence is bijective and the summation counts neither an invalid object nor any object twice. Parallel chords are separate enumerated edges; a forest can contain at most one edge between a vertex pair, so the bijection remains valid.

Here is an explicit forest dynamic program. Root each nonempty component. For a vertex v define U_v as the number of matchings in its rooted subtree covering every vertex except v, which is reserved for its parent, and D_v as the number covering every vertex including v without using its parent edge. With children u,
\[
 U_v=\prod_u D_u,\qquad
 D_v=\sum_{u\text{ child}} U_u\prod_{z\ne u}D_z.
\]
The first formula forbids matching v downward; the second chooses its unique matched child. For a leaf U=1 and D=0. The empty forest count is one, and the full forest count is the product of D at roots. Prefix/suffix products evaluate the sums in linear arithmetic time per forest, without division by zero. A forest in fact has at most one perfect matching: the symmetric difference of two would contain an alternating cycle. The recurrence is retained to make the counting mechanism and all empty cases explicit.

There are at most 2^k chord subsets. Checking A, marking covered vertices, constructing the induced forest and running the recurrence all take polynomial(n+m) operations. The total count is at most 2^m, so O(m+1) bits suffice for all counts and additions. Consequently the algorithm has deterministic 2^k polynomial(n+m) bit time, with polynomial working space when subsets are streamed. Input reading, forest construction and binary output cost are included. For k<=C log_2(n+m+2) with a fixed C this is polynomial exact counting, a stronger guarantee than relative approximation on that subclass.

The restriction includes general graphs with many vertices, bridges and a logarithmic number of overlapping or odd cycles. It is not a bounded-degree restriction and does not cover all dense graphs. The checker independently counts perfect matchings by the usual first-unmatched-vertex recursion, and compares with the chord/forest formula for all small simple graphs and seeded larger examples, including odd components, isolated vertices, parallel edges and empty graphs. No general FPRAS follows without the cyclomatic restriction.

Comparison with the earlier attempt: The earlier item summarizes general approximate-counting/entropy manuscript claims. This report supplies an independent exact algorithm parameterized by a spanning-forest complement, with forest counting and duplicate-free decomposition proved in full.

References checked:

- Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007458.txt
- Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/fpras-for-perfect-matchings-in-general-graphs/attempt-1/r1/


## Reproducibility and review

Written proof completed; standard-library independent finite checker and execution record supplied separately. These checks are finite and no formal verification or human mathematical review is asserted.

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
The authoring instance for this report is /root/hundred_algorithms. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007458.txt
Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/fpras-for-perfect-matchings-in-general-graphs/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
