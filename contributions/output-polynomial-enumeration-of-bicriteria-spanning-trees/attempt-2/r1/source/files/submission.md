# Attributed submission: Attempt: TOP-30000064

Source: https://github.com/We-Solve/research/issues/193

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30000064

### Claim

Partial result

### Exact scope

All Pareto-optimal spanning trees can be enumerated with polynomial delay and polynomial space when c2(e)=A-lambda c1(e), lambda>0, for all edges; the claim uses the tree-output interpretation and explicitly distinguishes deduplicated cost-pair output.

### Write-up

# TOP-30000064: Output-Polynomial Enumeration of Bicriteria Spanning Trees

Claim type: **Partial result**.

Exact scope: All Pareto-optimal spanning trees can be enumerated with polynomial delay and polynomial space when c2(e)=A-lambda c1(e), lambda>0, for all edges; the claim uses the tree-output interpretation and explicitly distinguishes deduplicated cost-pair output.

Fix binary rational edge costs satisfying c_2(e)=A-lambda c_1(e) with one common rational A and lambda>0, on a connected n-vertex graph. Nonnegative costs can be required by choosing A large enough. Every spanning tree has exactly n-1 edges, so
\[
 c_2(T)=(n-1)A-\lambda c_1(T).
\]
If another tree has a strictly smaller first coordinate it has a strictly larger second coordinate. Equal first coordinates force equal second coordinates. Consequently no tree dominates another in the usual weak-both/strict-one definition: every spanning tree is Pareto optimal, including different trees with identical cost pairs.

Enumerate these trees using a fixed ordered edge list and a depth-first include/exclude search with an exact extension test at every node. A node fixes an included edge set I and excluded set X. It has a spanning-tree extension precisely when I is a forest and the graph containing all nonexcluded edges is connected after contracting I. Necessity is immediate. For sufficiency, choose a spanning tree in that connected contracted graph and lift it together with I; the result is a spanning tree respecting both decisions. The extension test is a polynomial-time graph traversal and cycle test, not an optimization oracle.

At a node with a feasible extension branch on the next undecided edge, testing both children and visiting only children admitting an extension. At a leaf all edges are decided; the unique included set is a spanning tree and is emitted. Each spanning tree follows its unique binary decision path, so output is complete and duplicate-free. The tree has depth m. Between two emitted leaves, depth-first search backtracks at most m levels and descends at most m levels; at each level it tests at most two candidate children. Thus the delay, including before the first and after the last output, is O(m) times a polynomial-size extension test. State and recursion use polynomial space, and outputting each n-1-edge tree takes polynomial encoded length.

An uncomplicated graph traversal implementation yields delay O(m(n+m) poly(L)) bit operations after input reading, where L accounts for labels and costs; recomputing extension tests is allowed. Maintaining rollback data structures can improve constants but is unnecessary. The cost relation can be checked with exact rational arithmetic in polynomial bit time if A and lambda are supplied. A disconnected input has no spanning trees and is rejected after one connectivity check.

This establishes input-plus-output polynomial total time for the tree-output interpretation of the prompt, on the stated cost class. It does not claim polynomial total time in the number of distinct Pareto cost pairs: if every edge has the same first cost, all exponentially many trees share one pair, and printing all of them is unsuitable for pair-only output. Nor does it extend to arbitrary cost systems where most spanning trees are dominated; extension feasibility alone would then allow exponentially much wasted search.

The checker independently enumerates all (n-1)-edge subsets on small graphs, verifies the search output, and tests pairwise nondominance under exact antagonistic costs, including repeated cost pairs. The algebraic cost restriction is the reason exhaustive tree enumeration is legitimate here, rather than a general solution hidden behind output terminology.

Comparison with the earlier attempt: The earlier attempt gives exponential-frontier and scalarization counterexamples. This report gives an actual pruned enumeration algorithm with a delay bound on a different, explicit antagonistic-cost class, and does not call general exhaustive tree search output-polynomial.

References checked:

- Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30000064.txt
- Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/output-polynomial-enumeration-of-bicriteria-spanning-trees/attempt-1/r1/


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

Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30000064.txt
Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/output-polynomial-enumeration-of-bicriteria-spanning-trees/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
