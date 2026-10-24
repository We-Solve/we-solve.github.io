# Attributed submission: Attempt: TOP-30006933

Source: https://github.com/We-Solve/research/issues/221

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006933

### Claim

Partial result

### Exact scope

A deterministic comparison/pointer algorithm finds MSTs in O(m+k log(k+2)) operations for connected graphs of cyclomatic number k=m-n+1, using degree-two path compression; therefore it is linear whenever k log(k+2)=O(m).

### Write-up

# TOP-30006933: Deterministic Linear-Time Minimum Spanning Tree Problem

Claim type: **Partial result**.

Exact scope: A deterministic comparison/pointer algorithm finds MSTs in O(m+k log(k+2)) operations for connected graphs of cyclomatic number k=m-n+1, using degree-two path compression; therefore it is linear whenever k log(k+2)=O(m).

Assume a connected graph with distinct real edge weights, accessed only by comparisons, and its adjacency records. For n=1 return the empty tree after discarding loops. Parallel edges can be retained. Let k=m-n+1 count independent cycles after discarding self-loops; reading discarded loops is charged in the original input size. All graph operations below use records, queues, linked lists and pointers, not numerical addressing by weights.

Repeatedly remove degree-one vertices and their incident edges, storing the removed edges. Every such edge is a bridge at removal, so every spanning tree must contain it. This pruning takes O(m+n) pointer operations using a queue and degree fields. If nothing remains, these forced edges already form the spanning tree. The remaining connected 2-core has minimum degree two and the same k.

If every core vertex has degree two, it is one cycle (including a possible two-edge parallel cycle); delete its maximum edge and retain the rest in linear time. Otherwise call vertices of degree at least three branch vertices. Partition core edges into maximal paths whose internal vertices have degree two and whose endpoints are branch vertices; an endpoint pair may coincide. Each core edge is in exactly one such path. Traverse the paths once and find a maximum-weight edge h_P on each path P.

Every MST contains all the other edges of P. To see this, any spanning tree can omit at most one edge of P: two omissions isolate internal vertices between them, since those vertices have no other incident edges. If it omits f!=h_P, then h_P is present. Adding f forms a cycle containing the entire alternative tree route between the two sides of the broken path; that route contains h_P. Replacing h_P by f preserves a tree and decreases total weight. Thus no optimum omits f!=h_P. For a path returning to one branch vertex, exactly one edge must be omitted and the same comparison proves it is h_P.

Contract the forced nonmaximum path edges. The remaining kernel has one edge per path, with the original real weight of h_P. Self-loops may be discarded. An MST of this multigraph, together with all forced edges, lifts to an original MST: every optimum contains the forced edges, and contraction gives a bijection between trees containing them and kernel spanning trees, with the same variable portion of the weight sum.

Let b be the number of branch vertices before suppressions. In the 2-core,
\[
 \sum_v(\deg v-2)=2k-2,
\]
so b<=2k-2. Suppressing degree-two vertices preserves k; the number of kernel edges, including loops, is b-1+k<=3k-3. Hence both kernel size parameters are O(k). Run ordinary pointer-based Boruvka contractions on this kernel: scanning all current original kernel edge records and updating component pointers costs O(k) per phase, and the number of components halves whenever more than one remains. Selecting each component's lightest outgoing edge is justified by the standard cut exchange argument; distinct weights ensure the selected edges have no cycle. This gives O(k log(k+2)) operations, including component traversals, and O(m) records overall.

The total is O(m+n+k log(k+2)), or O(m+k log(k+2)) for nontrivial connected inputs. This is linear for bounded k and, more generally, k log(k+2)=O(m). Theta graphs with arbitrarily long internally disjoint paths are noncactus examples covered by the bound. No integer sorting, real arithmetic operation or unproved linear-time kernel solver is used. This parameterized bound is not a worst-case linear bound when k=Theta(m).

The checker compares the compression/lifting algorithm with independent exhaustive spanning-tree enumeration on small connected graphs, including overlapping cycles, bridges, parallel edges, negative weights and degree-two subdivisions. Python is a correctness model, not a claim that Python containers implement the pointer-machine operation bound.

Comparison with the earlier attempt: The earlier attempt proves linear time only on cactus graphs and an O(m log n) general contraction baseline. This report uses a small topological kernel and applies to noncactus graphs with overlapping cycles; it is distinct from the previous edge-disjoint-cycle proof.

References checked:

- Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006933.txt
- Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/deterministic-linear-time-minimum-spanning-tree-problem/attempt-1/r1/


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

Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006933.txt
Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/deterministic-linear-time-minimum-spanning-tree-problem/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
