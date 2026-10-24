# Attributed submission: Attempt: TOP-30006787

Source: https://github.com/We-Solve/research/issues/209

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006787

### Claim

Partial result

### Exact scope

The subtour LP has integrality gap exactly one for every positive-denominator finite tree metric, including terminal subsets of a weighted Steiner tree.

### Write-up

# TOP-30006787: Metric TSP Subtour LP Integrality Gap Conjecture

Claim type: **Partial result**.

Exact scope: The subtour LP has integrality gap exactly one for every positive-denominator finite tree metric, including terminal subsets of a weighted Steiner tree.

Let a finite tree have nonnegative edge lengths and let V be a set of at least three distinct terminal vertices. Distances in the complete graph on V are tree-path lengths. Prune all tree edges not lying on a path between terminals; write T for the remaining subtree and W for its total length. Zero lengths, terminals at internal vertices, and branching Steiner vertices are allowed. The positive-denominator condition is W>0.

For each edge a of T, deleting a partitions the terminals into nonempty sets S_a and V\S_a. Tree-path decomposition gives, for every subtour-feasible vector x,
\[
 \sum_{ij}d(i,j)x_{ij}
 =\sum_{a\in E(T)}w_a x(\delta(S_a))\ge 2\sum_a w_a=2W.
\]
This is a direct nonnegative combination of the literal prompt's cut inequalities. It uses no assertion that the subtour polytope is integral.

Double every edge of T and traverse the resulting Eulerian multigraph. Record the terminals in the order of their first appearances, and connect consecutive recorded terminals, cyclically, by their metric edges. The recorded terminals are all distinct and include V. Shortcutting portions of the closed tree walk cannot increase length, by the triangle inequality; the resulting Hamiltonian cycle has cost at most 2W. Its incidence vector satisfies every subtour constraint. Therefore
\[
2W\le\mathrm{OPT}_{LP}\le\mathrm{OPT}_{TSP}\le2W,
\]
so both optima are exactly 2W. If W=0 both costs are zero and no positive-denominator ratio is defined. The construction works for pseudometrics induced by zero-length tree edges as well.

The tree representation is part of this restricted input. Pruning, doubling, Euler traversal and recording terminal order take linear time in that representation; writing the n-vertex tour takes O(n) output. If a complete n-by-n metric matrix is supplied instead, reading it already costs quadratic input size, and this report does not silently assume a free tree-recognition oracle. Binary rational lengths permit exact arithmetic with bit cost polynomial in their total encoding length. The lower-bound certificate consists of one weighted terminal cut for each retained tree edge and has polynomial encoded length.

The checker independently enumerates all Hamiltonian tours on small random weighted trees and terminal subsets. It checks their minimum against 2W and validates every cut induced by a retained edge on each constructed tour. It does not solve a floating-point LP: the displayed symbolic cut certificate proves the LP lower bound for all sizes.

This is a classical tree-metric subcase, reproved here with an explicit certificate. It neither proves the universal four-thirds upper bound nor gives a metric with larger ratio.

Comparison with the earlier attempt: The earlier attempt develops a general metric-cone certificate and a near-4/3 three-path family. This report instead supplies a complete exact LP/tour certificate for arbitrary weighted tree metrics and terminal subsets.

References checked:

- Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006787.txt
- Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/metric-tsp-subtour-lp-integrality-gap-conjecture/attempt-1/r1/


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

Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006787.txt
Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/metric-tsp-subtour-lp-integrality-gap-conjecture/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
