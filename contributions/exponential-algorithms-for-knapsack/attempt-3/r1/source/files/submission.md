# Attributed submission: Attempt: TOP-3396

Source: https://github.com/We-Solve/research/issues/175

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3396

### Claim

Partial result

### Exact scope

Signed binary Subset Sum is solved exactly in O(n^2(W+1) poly(L)) bit operations when W=sum_i(a_i-min_j a_j); this yields the requested 2^(n/3) poly(L) rate on every fixed polynomial-dispersion subclass, independently of an arbitrarily large common offset.

### Write-up

# TOP-3396: Exponential Algorithms for Knapsack

Claim type: **Partial result**.

Exact scope: Signed binary Subset Sum is solved exactly in O(n^2(W+1) poly(L)) bit operations when W=sum_i(a_i-min_j a_j); this yields the requested 2^(n/3) poly(L) rate on every fixed polynomial-dispersion subclass, independently of an arbitrarily large common offset.

For n>0 let M=min_i a_i, put d_i=a_i-M>=0 and W=sum_i d_i. M may be negative and may have a very large binary encoding; no positivity assumption is made on the original list. The target b is also a signed binary integer. For n=0 answer yes exactly when b=0.

Maintain a table R_i(k,t) indicating whether some k positions among the first i have deviations summing to t. Initially only R_0(0,0) is true. The recurrence is
\[
 R_i(k,t)=R_{i-1}(k,t)\lor R_{i-1}(k-1,t-d_i),
\]
where out-of-range entries are false. Induction on the last selected position proves the exact meaning of every entry; a previous row is used so that one position is never reused. Keep predecessor pointers if a witness is required. A subset of cardinality k has original sum kM+t, so the answer is yes exactly when some k in {0,...,n} satisfies 0<=b-kM<=W and R_n(k,b-kM) is true. Backtracking yields distinct original indices even when values coincide.

There are at most (n+1)(W+1) entries per layer and n layers, giving O(n^2(W+1)) Boolean updates. Keys and sums use polynomially many bits in total input length L; computing M, W and b-kM also costs polynomial bit time. Thus a conservative full bound is O(n^2(W+1) poly(L)) bit operations. Decision needs O(n(W+1)) bits plus arithmetic workspace; storing all predecessors uses O(n^2(W+1) poly(L)) bits. These are pseudopolynomial bounds in W, not polynomial bounds for arbitrary binary inputs.

For every fixed c, the subclass W<=L^c has deterministic polynomial bit time. More generally W<=2^(n/3)L^c gives the literal target rate after absorbing polynomial factors. The algorithm is uniform and does not need to know c. For an explicit separation from the earlier absolute-range condition, take a_i=2^(n^2)+i, 1<=i<=n. The gcd of consecutive entries is one, their absolute total is enormous, and all values are distinct, but W=n(n-1)/2. Cardinality distinguishes different multiples of the large common offset without enumerating that offset. Signed translates have the same W and the same algorithm.

The checker exhaustively compares the table and its witnesses with all 2^n subsets on signed short lists, then tests very large positive and negative common offsets with independently enumerated deviations. It also handles b=0, empty input and repeated entries. This improves a useful structured subclass but supplies no claimed algorithm at the requested exponent on arbitrary lists with exponential dispersion.

Comparison with the earlier attempt: The earlier attempt uses normalized absolute range and multiplicity compression. Here cardinality is retained while subtracting a common offset, allowing huge near-common integers whose gcd-normalized absolute total remains enormous and whose entries are distinct.

References checked:

- Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3396.txt
- Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/exponential-algorithms-for-knapsack/attempt-2/r1/
- Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/exponential-algorithms-for-knapsack/attempt-1/r1/


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

Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3396.txt
Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/exponential-algorithms-for-knapsack/attempt-2/r1/
Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/exponential-algorithms-for-knapsack/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
