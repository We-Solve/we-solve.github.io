# Attributed submission: Attempt: TOP-30007445

Source: https://github.com/We-Solve/research/issues/228

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007445

### Claim

Partial result

### Exact scope

Exact deterministic counting and certain emptiness detection for two-row cell-bounded contingency tables in O(n(R+1)) arithmetic operations after lower-bound normalization, where R is the residual first-row total; polynomial bit time when R is polynomially bounded.

### Write-up

# TOP-30007445: FPRAS for cell-bounded contingency tables

Claim type: **Partial result**.

Exact scope: Exact deterministic counting and certain emptiness detection for two-row cell-bounded contingency tables in O(n(R+1)) arithmetic operations after lower-bound normalization, where R is the residual first-row total; polynomial bit time when R is polynomially bounded.

Let the two row margins be r_1,r_2, column margins c_j, and cell upper bounds u_1j,u_2j, all nonnegative binary integers. If the total margins disagree, the count is zero. In column j the top entry x_j determines the bottom entry c_j-x_j. The exact admissible interval is
\[
 l_j=\max(0,c_j-u_{2j}),\qquad h_j=\min(c_j,u_{1j}).
\]
If any l_j>h_j, return zero. Otherwise let y_j=x_j-l_j, b_j=h_j-l_j, and R=r_1-sum_j l_j. Then tables are in bijection with vectors 0<=y_j<=b_j and sum y_j=R. If R<0 or R>sum b_j, return zero. One may also replace y_j by b_j-y_j to choose the smaller of R and sum b_j-R; this is a bijection and can substantially reduce the numeric parameter.

Let A_j(t) count assignments to the first j residual entries summing to t. Initialize A_0(0)=1 and other values zero. The coefficient recurrence is
\[
 A_j(t)=\sum_{u=0}^{\min(b_j,t)}A_{j-1}(t-u),\quad0<=t<=R.
\]
Induction partitions assignments by their last coordinate, proving that the final answer is exactly A_n(R). Compute an entire row with a running sum: add A_{j-1}(t), subtract A_{j-1}(t-b_j-1) when that index exists, and store the result. Hence each entry takes constant integer additions/subtractions and the total is O(n(R+1)) arithmetic operations with O(R+1) integer cells. Individual b_j may be huge; no loop runs to b_j when b_j>R. All capacities are read and clipped by exact comparisons.

The count is at most product_j(b_j+1), whose binary length is at most sum_j log_2(b_j+1), hence polynomial in the encoded input length L (with a harmless O(n) ceiling adjustment). Every intermediate count has the same bound. Ordinary addition/subtraction therefore gives O(n(R+1) poly(L)) bit time and O((R+1)poly(L)) space. The algorithm is polynomial when the normalized residual R is polynomial in L, including all two-row 0/1 tables. It is pseudopolynomial in general; a binary R can be exponentially large and is not silently called an FPRAS for all tables.

The output is exact, so on the restricted polynomial subclass it meets every relative-error/confidence pair with failure zero and returns zero certainly on empty instances. The checker independently enumerates the original two-row cells on small bounded instances, then compares with the normalized sliding recurrence; it exercises lower bounds, mismatched totals, zero columns, reflection, capacities above margins and empty feasible sets.

No general multirow counting theorem or verification of the previously summarized 2026 manuscript is claimed.

Comparison with the earlier attempt: The earlier item summarizes a claimed general 2026 FPRAS. This report independently proves an exact two-row recurrence with sliding-window acceleration, full binary-capacity accounting and an explicit limitation on the numeric parameter.

References checked:

- Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007445.txt
- Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/fpras-for-cell-bounded-contingency-tables/attempt-1/r1/


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

Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007445.txt
Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/fpras-for-cell-bounded-contingency-tables/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
