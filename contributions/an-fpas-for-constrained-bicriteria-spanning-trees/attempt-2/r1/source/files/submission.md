# Attributed submission: Attempt: TOP-30000063

Source: https://github.com/We-Solve/research/issues/192

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30000063

### Claim

Partial result

### Exact scope

A deterministic FPTAS with no budget violation for constrained bicriteria spanning trees on connected cactus graphs with binary nonnegative integer edge costs and budgets; all scaling, zero-optimum, guessing and bit-cost details are supplied.

### Write-up

# TOP-30000063: An FPAS for Constrained Bicriteria Spanning Trees

Claim type: **Partial result**.

Exact scope: A deterministic FPTAS with no budget violation for constrained bicriteria spanning trees on connected cactus graphs with binary nonnegative integer edge costs and budgets; all scaling, zero-optimum, guessing and bit-cost details are supplied.

Write c_e>=0 for objective costs, d_e>=0 for resource costs, and B for the exact upper resource budget, all binary integers. A connected cactus has edge-disjoint simple cycles. Every spanning tree keeps all bridges and removes exactly one edge from each cycle: breaking each cycle is necessary; retaining every other edge is sufficient for connectedness and acyclicity. Thus the problem is a multiple-choice minimization with one group per cycle. Option e in cycle C has objective c(C)-c_e and resource d(C)-d_e. Add one fixed group for all bridges with their total objective/resource. Let g be the total number of groups; when the graph is a single vertex the empty tree is handled separately.

Feasibility alone is checked exactly by independently choosing the least-resource option in every group. If their total exceeds B, no feasible tree exists. A zero-objective feasible solution exists exactly when every group has at least one zero-cost option and the sum of the smallest resources among such options is at most B. If so return it: scaling a zero optimum would be invalid. Otherwise every feasible optimum OPT is an integer at least one. Put U=sum_e c_e; a feasible tree has objective at most U, so U>=OPT>=1.

Let 0<epsilon<=1 be a binary rational accuracy parameter. Try guesses G=1,2,4,... through the first power of two at least U. At least one guess satisfies OPT<=G<2OPT, with equality G=OPT allowed. For this guess set
\[
 K=\frac{\epsilon G}{2g},\qquad q_{j,a}=\left\lfloor\frac{c_{j,a}}K\right\rfloor,
 \quad Q=\left\lfloor\frac{2g}{\epsilon}\right\rfloor.
\]
For every guess run a group dynamic program indexed by scaled total q in [0,Q]. At each q retain the smallest exact resource total achievable with the groups processed; keep an attaining predecessor. Transition through every option, ignoring q sums above Q. Resource comparisons use the original binary integers, never rounded values. At the end choose a smallest q whose stored resource is at most B. If no q is feasible, this guess returns no candidate. Among all candidates return one with least original objective.

Induction over groups proves the DP invariant. For the good guess an optimal solution has scaled total at most OPT/K<=2g/epsilon, so its integer total is at most Q and it is never truncated (all costs are nonnegative). The DP's feasible solution T has q(T)<=q(T*). Each group incurs rounding error less than K, giving
\[
 c(T)<K(q(T)+g)\le Kq(T^*)+gK
 \le OPT+\epsilon G/2\le(1+\epsilon)OPT.
\]
The last weak inequality uses G<2OPT. Feasibility d(T)<=B is exact by the stored resource check. Other guesses cannot spoil this guarantee because the best original-cost candidate is returned, and every candidate is genuinely feasible.

There are O(log(U+1)) guesses, O(g/epsilon) states, and O(m+1) group options overall. Straight transitions use O((m+1)g epsilon^-1 log(U+1)) arithmetic operations; predecessor memory O(g^2/epsilon) cells suffices per guess. All objective sums, resources, scaled quotients and rationals have bit length polynomial in input length and log(epsilon^-1). Binary U is accounted by log U, not a loop to U. Hence the entire algorithm is fully polynomial in encoded input length and epsilon^-1. Computing cactus blocks and all option sums is polynomial, even with a simple implementation.

The checker exhaustively compares candidates with all option tuples on random small cacti, checks exact budgets and zero/infeasible cases, and verifies the approximation inequality by rational arithmetic. This is the standard scaling principle made constructive on a precise graph subclass. General graphs lack the independent cycle-choice decomposition, so no unrestricted FPTAS is claimed.

Comparison with the earlier attempt: The earlier attempt gives a scalarization obstruction and a conditional rounding argument but no required exact oracle. This report constructs the missing scaled-objective/exact-budget dynamic program on cactus blocks and obtains an unconditional FPTAS for that subclass.

References checked:

- Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30000063.txt
- Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/an-fpas-for-constrained-bicriteria-spanning-trees/attempt-1/r1/


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

Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30000063.txt
Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/an-fpas-for-constrained-bicriteria-spanning-trees/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
