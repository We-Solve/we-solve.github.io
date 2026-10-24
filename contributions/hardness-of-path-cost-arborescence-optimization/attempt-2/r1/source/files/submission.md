# Attributed submission: Attempt: TOP-30003997

Source: https://github.com/We-Solve/research/issues/381

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30003997

### Claim

Partial result

### Exact scope

Distinguishing optimum zero is NP-hard for destination-specific path-cost spanning arborescences even on DAGs with indegree≤2, outdegree≤2, underlying undirected degree≤3 and only 0/1 costs.

### Write-up

# Hardness of Path-Cost Arborescence Optimization

Claim type: **Partial result**.

Exact scope: Distinguishing optimum zero is NP-hard for destination-specific path-cost spanning arborescences even on DAGs with indegree≤2, outdegree≤2, underlying undirected degree≤3 and only 0/1 costs.

## Bounded-degree routing of a shared assignment

Start from a Boolean formula in nonempty clauses of at most three literals, with tautologies and repeated literals removed. The standard gate-variable conversion to this form, and the Cook–Levin starting hardness, are explicitly explained in both listed prior attempts; we use the same credited starting problem. The added step here bounds every graph degree.

For each variable x_i create selectors t_i,f_i and a vertex v_i, with arcs t_i→v_i and f_i→v_i. Reach all selectors from one root r by a directed binary out-tree whose leaves are the selectors, using fresh internal vertices. Each nonroot vertex of this tree has one incoming arc and at most two outgoing arcs.

From v_i use one arc into a private binary out-tree with one leaf for every occurrence of x_i. When there is one occurrence, this is just its leaf; with no occurrences give v_i no outgoing arc. For each clause, merge its occurrence leaves toward a new clause destination q_j by a private binary in-tree. A single occurrence may directly be its q_j leaf. Thus out-tree occurrence leaves have one incoming and at most one outgoing arc; merge internal vertices have indegree two and outdegree one. Every variable vertex has indegree two and outdegree at most one, and selectors have indegree one/outdegree one. The root has outdegree at most two. Consequently indegree and outdegree are at most two, and underlying undirected degree at most three. All arcs go from root distribution to selectors, variables, occurrence distribution, and clause merging, so the graph is acyclic. It has O(formula length) vertices and arcs, and every vertex is reachable from r.

Give all non-clause destinations identically zero arc-cost vectors. For destination q_j, every arc is zero except t_i→v_i or f_i→v_i: its value is one exactly when that truth choice falsifies the literal of x_i in clause C_j. Absent variables have cost zero on both selector arcs. The normal form prevents a variable from occurring with both signs in a clause. Costs are explicitly destination-specific binary integers; the full destination-by-arc table has polynomial encoded size.

## Exact objective correspondence

Every spanning outward arborescence chooses one incoming selector arc at each v_i, defining one global assignment. All routing vertices must still be spanned; their presence is not optional. Every root-to-q_j path passes through exactly one occurrence, its variable and that variable's chosen truth selector. Therefore its cost is zero or one according to whether that occurrence's literal is true. If a clause is unsatisfied every available path costs one. If it is satisfied, choose a true occurrence and choose merge parents along its unique route to q_j; this gives cost zero. The private merge trees allow these choices independently between clauses. Other destinations contribute zero.

For any assignment the routing can thus attain exactly its number of unsatisfied clauses; any arborescence has cost at least that number for its induced assignment. Hence the optimum equals the minimum unsatisfied-clause count, and is zero iff the formula is satisfiable. Choosing one incoming arc at every nonroot vertex indeed gives an arborescence: following parents in this finite DAG must end at the unique indegree-zero source r. The construction and a parent-list certificate can be evaluated in polynomial bit time. Thus the zero-threshold decision is NP-complete, in particular NP-hard, on the advertised degree-three DAG class. No approximation hardness ratio is claimed.

## Earlier contributions and limits

Both prior aliases give the unbounded-degree layered SAT reduction and prove general DAG hardness. This report credits that starting construction, adds private binary fanout/fanin routing, and proves the stronger simultaneous indegree/outdegree/totally-undirected-degree bounds. The new claim is this restriction, not a second claim of solving the same general hardness question.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30003997/verify.py). Source SHA-256: `f7e86ad34b08d0530eabf8d58724e467f1f52a6ca4684b929a62aeb3c68ac0b1`. The source is byte-identical to the reviewed and executed program.



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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30003997.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30003997/verify.py (Used: exact previously reviewed program; SHA-256 f7e86ad34b08d0530eabf8d58724e467f1f52a6ca4684b929a62aeb3c68ac0b1).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
