# Attributed submission: Attempt: TOP-30000349

Source: https://github.com/We-Solve/research/issues/194

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30000349

### Claim

Partial result

### Exact scope

For every normalized symmetric submodular function with f(V)=0, an integral optimal primal point y=0 and an explicit midpoint of two reverse-order greedy vertices are constructed with O(n) oracle calls; rational values of encoded polynomial length are allowed.

### Write-up

# TOP-30000349: Integral Primal Certificates for Submodular Minimization

Claim type: **Partial result**.

Exact scope: For every normalized symmetric submodular function with f(V)=0, an integral optimal primal point y=0 and an explicit midpoint of two reverse-order greedy vertices are constructed with O(n) oracle calls; rational values of encoded polynomial length are allowed.

The original question asks for an integral optimal base point and a convex decomposition into greedy vertices. The unrestricted real-valued formulation needs extra hypotheses, as already noted in the earlier attempt. Here assume f(empty)=0 and symmetry f(S)=f(V\S). Then f(V)=0. No monotonicity is required; ordinary nonnegative graph-cut functions are examples.

Submodularity applied to S and its complement gives 2f(S)>=f(V)+f(empty)=0. Hence the zero vector satisfies y(S)=0<=f(S) for every subset and y(V)=f(V)=0: it is an integral point of B(f). The objective g(y)=sum_e min(y_e,0) is always at most zero, so y=0 achieves the maximum zero. This proves optimality directly, without relying on a submodular min-max theorem.

For any permutation pi=(e_1,...,e_n), put S_i={e_1,...,e_i} and v(e_i)=f(S_i)-f(S_(i-1)). This greedy vector belongs to B(f): its total telescopes to f(V), and, if the elements of a subset A are encountered in that order, diminishing returns bounds each selected increment by the increment from adding the same element to the earlier elements of A. Summing gives v(A)<=f(A)-f(empty)=f(A). Diminishing returns itself follows by applying submodularity to B and A union {e}, for A subset B and e outside B. This supplies the greedy feasibility lemma used here.

The vector is a vertex: the tight equalities v(S_i)=f(S_i) for i=1,...,n determine its coordinates uniquely by successive differences. Their linearly independent indicator rows preclude a nontrivial convex decomposition into distinct base points. Reversing the permutation gives a greedy vertex w. The prefix immediately before e_i in the reverse order is V\S_i, and the prefix including it is V\S_(i-1). Symmetry therefore yields
\[
 w(e_i)=f(V\setminus S_{i-1})-f(V\setminus S_i)
       =f(S_{i-1})-f(S_i)=-v(e_i).
\]
Consequently
\[
 0=\tfrac12v+\tfrac12w
\]
is the requested explicit convex representation using at most two greedy vertices. For n=0 the sole vector is empty; for n=1 symmetry forces the sole coordinate zero. If v=0 the representation can be reduced to one vertex. The optimum is integral even for rational-valued symmetric functions, although the greedy vertices themselves need not be integral.

Query the n+1 prefix values along pi. Symmetry supplies the reverse-order values without extra calls (or one can query both orders and verify them on these prefixes). The representation uses O(n) oracle calls and O(n) exact differences. With binary rational answers of total polynomial encoded size this has polynomial bit complexity and output length; with completely arbitrary unencoded real oracles only the arithmetic/oracle-call statement is meaningful. Symmetry and submodularity are promised mathematical hypotheses; O(n) calls do not certify these global properties for an arbitrary oracle.

The checker enumerates all subset inequalities for weighted graph-cut examples, verifies submodularity/symmetry, both greedy vertices, their midpoint and objective, and uses rational weights to exercise nonintegral vertices. This generalizes the earlier two-element example while leaving nonsymmetric submodular functions and their general requested decomposition unresolved.

Comparison with the earlier attempt: The earlier attempt gives only a two-element midpoint example and the real-valued integrality obstruction. This report proves the reverse-order midpoint certificate for arbitrary ground-set size and every normalized symmetric submodular function, including graph cuts.

References checked:

- Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30000349.txt
- Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/integral-primal-certificates-for-submodular-minimization/attempt-1/r1/


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

Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30000349.txt
Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/integral-primal-certificates-for-submodular-minimization/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
