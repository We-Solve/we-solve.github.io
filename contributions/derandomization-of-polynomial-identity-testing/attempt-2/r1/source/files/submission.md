# Attributed submission: Attempt: TOP-30006708

Source: https://github.com/We-Solve/research/issues/203

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006708

### Claim

Partial result

### Exact scope

Deterministic circuit PIT by a full evaluation grid over an explicitly encoded prime field F_p, under supplied valid individual degree bounds d_i<p, in product_i(d_i+1) times polynomial(L) bit time, where L is the full encoded circuit, field and degree-bound input length; polynomial whenever the grid product is polynomial in L.

### Write-up

# TOP-30006708: Derandomization of Polynomial Identity Testing

Claim type: **Partial result**.

Exact scope: Deterministic circuit PIT by a full evaluation grid over an explicitly encoded prime field F_p, under supplied valid individual degree bounds d_i<p, in product_i(d_i+1) times polynomial(L) bit time, where L is the full encoded circuit, field and degree-bound input length; polynomial whenever the grid product is polynomial in L.

Fix an explicit prime p and an arithmetic circuit C over F_p with addition, subtraction and multiplication gates, encoded constants in [0,p-1], s gates, and variables x_1,...,x_t. Assume valid individual degree bounds deg_(x_i) f_C<=d_i<p are supplied. A conservative bound may instead be certified by syntactic degree propagation, but a small actual degree is not automatically inferred from small circuit size. The restriction is separate from the general-circuit prompt.

For each variable choose A_i={0,1,...,d_i} subset F_p. Evaluate the circuit at every point of the Cartesian product A_1 times ... times A_t, reducing every gate value modulo p. Return identity exactly when every output is zero.

The grid lemma is elementary. A univariate polynomial of degree at most d that vanishes at d+1 distinct field elements is zero, since each root supplies a linear factor. Inductively write f=sum_{j=0}^{d_t} g_j(x_1,...,x_(t-1)) x_t^j. At any fixed point of the first t-1 grid factors, vanishing over A_t implies each coefficient value g_j is zero. Every g_j obeys the earlier individual degree bounds, so induction makes all g_j identically zero. Conversely a polynomial identity vanishes everywhere. This proves the test's exactness.

Each point needs O(s) field operations. Using ordinary binary arithmetic, each field operation takes polynomial(log p) bit time because all intermediates are reduced modulo p at every gate. Let L include the full circuit encoding, gate and variable references, encoded constants, p and the supplied degree bounds. Circuit references are not free constant-cost bit operations: reading them costs up to O(log(s+t+2)) bits each, and input traversal and value lookup must be charged. For a model-independent conservative bound, store gate values on a work tape and scan the polynomial-size value list for each referenced predecessor; this uses polynomial(L) bit operations per evaluation even without unit-cost random access. Including enumeration, input reading, reference handling and output gives
\[
 O\bigl(\prod_i(d_i+1)\mathrm{poly}(L)\bigr)
\]
bit operations, with polynomial circuit-evaluation workspace plus counters encoding the grid point. The empty variable set has one grid point and tests the circuit constant. The prime-field encoding excludes a free oracle for arithmetic in an unspecified field. Primality is part of the input promise; this report's correctness proof is not a primality-testing claim.

The algorithm is deterministic polynomial time on every subclass where the grid product is polynomial in total input length, including a fixed number of variables of polynomially bounded degrees and any number of variables with sufficiently small total grid product. It is not polynomial in log d_i merely because d_i is binary encoded; the numeric grid size is charged explicitly. General circuits can have exponentially large individual degrees or exponentially many bounded-degree variables.

The constraint d_i<p matters: x^p-x is a nonzero polynomial but vanishes at all elements of F_p, so scalar evaluations over an insufficient base field would otherwise conflate polynomials and functions. No unsupported extension-field construction is used here. The checker independently expands small circuits into coefficient dictionaries modulo p and compares coefficient identity with grid evaluation, including cancellation, zero circuits, bounded-degree dense polynomials and the deliberately out-of-scope x^p-x countertest. This is a classical interpolation subcase, not a new derandomization of general PIT.

Comparison with the earlier attempt: The earlier attempt proves sparse quotient certificates with Kronecker exponents. This report uses a different dense bounded-grid regime, addresses polynomial-versus-function distinction with d_i<p, and provides an independent coefficient-based checker rather than repeating the sparse-support theorem.

References checked:

- Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006708.txt
- Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/derandomization-of-polynomial-identity-testing/attempt-1/r1/


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

Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006708.txt
Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/derandomization-of-polynomial-identity-testing/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
