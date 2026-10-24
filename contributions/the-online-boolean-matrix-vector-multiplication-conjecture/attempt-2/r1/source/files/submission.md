# Attributed submission: Attempt: TOP-30006852

Source: https://github.com/We-Solve/research/issues/217

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006852

### Claim

Partial result

### Exact scope

Exact deterministic online Boolean matrix-vector multiplication for arbitrary dense matrices in O(n^2+nD) word operations, where D is the total Hamming change between successive input vectors including the initial zero vector; all preprocessing, vector reading and output are charged.

### Write-up

# TOP-30006852: The Online Boolean Matrix-Vector Multiplication Conjecture

Claim type: **Partial result**.

Exact scope: Exact deterministic online Boolean matrix-vector multiplication for arbitrary dense matrices in O(n^2+nD) word operations, where D is the total Hamming change between successive input vectors including the initial zero vector; all preprocessing, vector reading and output are charged.

Let M be an arbitrary binary n-by-n matrix, read once into column incidence lists. Initialize v=0 and integer row counters c_i=0. On receiving the next complete vector w, compare it with the stored vector v. For every changed coordinate j, add +1 to c_i for all i with M_ij=1 if the bit changes 0 to 1; subtract 1 on a 1 to 0 change. Then store w and output the bit [c_i>0] for each row, before requesting another vector.

The exact invariant after processing any set of changed coordinates is that c_i counts the ones of M in row i whose current coordinates are selected. It holds initially. Toggling j changes exactly the incident terms M_ij v_j by the prescribed sign, so induction proves it after each toggle and each vector. Counters always lie between 0 and n, and testing positivity is Boolean OR, not parity. The method never reads future vectors and has no error probability.

Let D=sum_{t=1}^n Hamming(v^(t-1),v^(t)), with v^(0)=0. Building incidence lists uses O(n^2) time and space. Reading/comparing all n vectors and writing all n output vectors uses O(n^2) operations. A changed coordinate touches at most n incidences, so the total bound is
\[
 O(n^2+nD),\qquad O(n^2)\text{ words of space}.
\]
An implementation can exploit the exact column degrees to improve nD to the sum of degrees of changed columns. The stated bound needs no sparsity assumption and is uniform; D is a parameter of the actual stream, not advance advice. With Theta(log n)-bit words, counters, indices and addresses occupy a constant number of words. A conservative bit implementation incurs another O(log n) factor, including the counters; the word bound is stated separately.

Thus, for every fixed eta>0, streams with D=O(n^(2-eta)) have truly subcubic total word time. The vectors need not repeat: for example, a stream that toggles one unused coordinate at each step has n distinct nonzero vectors but D=n and quadratic total cost. At the opposite extreme n alternating dense complementary vectors can have D=Theta(n^2), restoring the cubic bound. This is why the algorithm does not refute the prompt's conjecture over all streams. Adaptively chosen vectors pose no additional issue because correctness is a deterministic invariant on every prefix.

The checker compares the counters after every individual toggle and every emitted answer against direct integer counts and Boolean products for all matrices and pairs of vectors in small dimensions, plus longer streams chosen adaptively from past answers. The invariant and complexity argument, rather than timings, justify the all-size theorem.

Comparison with the earlier attempt: The earlier attempt covers bit packing, block tables, sparse matrices, few row patterns, supplied factorizations and repeated vectors. This report adds a different stream parameter: total bit changes, with an online update invariant that also handles all-distinct query vectors.

References checked:

- Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006852.txt
- Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/the-online-boolean-matrix-vector-multiplication-conjecture/attempt-1/r1/


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

Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006852.txt
Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/the-online-boolean-matrix-vector-multiplication-conjecture/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
