# Attributed submission: Attempt: TOP-30007453

Source: https://github.com/We-Solve/research/issues/431

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007453

### Claim

Partial result

### Exact scope

Exact unit-cost edit distance on the promise ED(x,y)≤k is computable in O(N(k+1)) word operations and O(k+1) working words; k=N^{o(1)} gives deterministic almost-linear exact estimation.

### Write-up

# Almost-linear edit-distance approximation scheme

Claim type: **Partial result**.

Exact scope: Exact unit-cost edit distance on the promise ED(x,y)≤k is computable in O(N(k+1)) word operations and O(k+1) working words; k=N^{o(1)} gives deterministic almost-linear exact estimation.

## Banded dynamic programming

Let lengths be a,b and N=a+b. For an integer threshold k≥0, keep only dynamic-programming cells (i,j) with |i−j|≤k. Set D(0,0)=0; the other boundary entries are their insertion/deletion lengths when within the band. A missing cell has value k+1. Every retained value is capped at k+1. Use the recurrence

D(i,j)=min{k+1, D(i−1,j)+1, D(i,j−1)+1, D(i−1,j−1)+[x_i≠y_j]}.

If |a−b|>k, return the certified statement ED>k immediately after charging the input scan. Otherwise return the final value if at most k, or the certificate ED>k. This algorithm does not return an approximation on inputs outside its promise.

An alignment path of total cost at most k can never have |i−j|>k: its offset equals insertions minus deletions in the prefix and its absolute value is at most that prefix's cost. Thus every such path lies wholly in the band. Induction on i+j proves that a band value at most k is exactly the shortest alignment cost to that cell if that cost is at most k. Conversely every accepted band path is a valid edit path in the full grid. Consequently the final threshold decision is exact in both directions, and under ED≤k its number is the exact edit distance. Equal strings give zero deterministically, including k=0; the empty-string boundaries satisfy the same argument.

There are at most (a+1)(2k+1) retained cells, and a two-row implementation uses O(k+1) values. Each update uses O(1) word operations for counters of O(log(N+k+2)) bits and one symbol comparison. For k>N one may replace k by N since every edit distance is at most N. With symbols of O(log(N+2)) encoded bits this is a logarithmic-word RAM bound including input reading; with arbitrary encoded symbols, charge their total encoded size and the actual comparison costs instead. In a bit model a conservative bound is N(k+1) times a polynomial in log(N+2) and the maximum encoded symbol length.

For every promised family k(N)=N^{o(1)}, the time is N^{1+o(1)} and the exact answer is a (1+ε)-upper estimate for every ε>0. This restricted guarantee does not select a small k on arbitrary distant strings and hence does not resolve the unrestricted approximation question.

## Earlier contributions and limits

The listed attempt is a summary of a general 2026 approximation claim. The explicit low-distance band algorithm, its exact promise test and word/bit accounting are independently proved here; the announcement is not used as a theorem.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30007453/verify.py). Source SHA-256: `36a4e3e8cac424205f6c99ee5ab5720f9445feb455296a8049380f5037654518`. The source is byte-identical to the reviewed and executed program.



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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007453.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30007453/verify.py (Used: exact previously reviewed program; SHA-256 36a4e3e8cac424205f6c99ee5ab5720f9445feb455296a8049380f5037654518).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
