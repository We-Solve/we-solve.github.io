# Attributed submission: Attempt: TOP-30007446

Source: https://github.com/We-Solve/research/issues/229

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007446

### Claim

Partial result

### Exact scope

Exact counting of common nonnegative integral bases of two oracle integer polymatroids in binomial(n+r-1,r) times 2^(r+1) times polynomial(n,r,L) oracle/bit cost, where r is their common rank; deterministic polynomial time for every fixed r, with certain zero on emptiness.

### Write-up

# TOP-30007446: FPRAS for common integer polymatroid bases

Claim type: **Partial result**.

Exact scope: Exact counting of common nonnegative integral bases of two oracle integer polymatroids in binomial(n+r-1,r) times 2^(r+1) times polynomial(n,r,L) oracle/bit cost, where r is their common rank; deterministic polynomial time for every fixed r, with certain zero on emptiness.

An integer polymatroid rank function rho is normalized, nonnegative, monotone and submodular. Its integral bases are nonnegative integer vectors x satisfying x(S)<=rho(S) for all S and x(E)=rho(E). Assume the two oracles return exact binary integer ranks; their total ranks must agree at r, or there is no common base. Oracle answer bit lengths and oracle call cost are explicit input-model parameters. No sampling/counting oracle is used.

Enumerate every weak composition x_1+...+x_n=r. There are binomial(n+r-1,r), with the n=0 case handled separately (one empty vector at r=0). Each vector has support T of size at most r. To test it against a rank function it suffices to query all subsets U of T and check x(U)<=rho(U). Indeed for any S subset E, x(S)=x(S intersect T), while monotonicity gives rho(S intersect T)<=rho(S). Thus the inequalities checked inside T imply every unqueried inequality. The total equality was already checked. Test both rank functions and count exactly the compositions passing all inequalities.

Every common integral base appears exactly once in the composition enumeration, and the support lemma makes every acceptance valid, so the count is exact. An empty intersection gives zero certainly; r=0 yields the unique zero vector for normalized nonnegative ranks. The algorithm does not require the rank values to be small on all subsets, only that exact oracle answers can be read within the accounted bit budget.

For each candidate at most 2^(r+1) calls suffice, including both oracles, and each subset sum uses O(r log(r+1)) bit work apart from reading its answer and specifying the subset. A conservative bound is
\[
 \binom{n+r-1}{r}\,2^{r+1}\,\mathrm{poly}(n,r,L)
\]
oracle/bit operations, counting an explicit n-bit subset specification when needed. The integer count has at most log_2 binomial(n+r-1,r)+1 bits. For every fixed r this is a deterministic polynomial algorithm and hence an exact relative-counting scheme on that subclass with failure zero. The algorithm itself is uniform in r, but the exponent n^r and the 2^r factor prevent a general polynomial-rank conclusion. Capacities are binary: bounded rank is an additional hypothesis, not a consequence of encoding length.

As a useful example family, ranks from two unrelated partition polymatroids can impose many crossing group restrictions even when the total r is small. The support test still applies to arbitrary oracle ranks rather than relying on partition structure. The checker constructs integer coverage-polymatroid ranks, directly verifies normalization/monotonicity/submodularity on small ground sets, and compares support-only feasibility and counts with an independent full 2^n-inequality test. It also exercises incompatible totals and r=0.

Comparison with the earlier attempt: The earlier item reports a broad approximate-counting manuscript. This report proves a finite-rank algorithm directly and reduces every oracle feasibility test to subsets of the candidate support, avoiding an exponential scan of the full ground set.

References checked:

- Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007446.txt
- Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/fpras-for-common-integer-polymatroid-bases/attempt-1/r1/


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

Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007446.txt
Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/fpras-for-common-integer-polymatroid-bases/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
