# Attributed submission: Attempt: TOP-30004015

Source: https://github.com/We-Solve/research/issues/382

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30004015

### Claim

Partial result

### Exact scope

For matching-position count r, an exact longest common subsequence is computable in O((n+r) log(n+2)) word operations after alphabet compression; r=n^{2−Ω(1)} gives a truly subquadratic exact regime.

### Write-up

# Subquadratic Approximation for Longest Common Subsequences

Claim type: **Partial result**.

Exact scope: For matching-position count r, an exact longest common subsequence is computable in O((n+r) log(n+2)) word operations after alphabet compression; r=n^{2−Ω(1)} gives a truly subquadratic exact regime.

## Poset formulation and the order within each row

Let X,Y have length n, with positions numbered from one. List every pair (i,j) such that X_i=Y_j. A common subsequence of length ℓ is exactly a chain of ℓ such pairs with both i and j strictly increasing: its pairs supply aligned equal symbols, and conversely increasing aligned pairs spell a common subsequence. The number of these pairs is r=Σ_a freq_X(a)freq_Y(a).

Process pairs in increasing i, but in decreasing j within one i. Feed the j sequence into the usual strict longest-increasing-subsequence algorithm. Because j decreases inside a row, a strictly increasing subsequence cannot take two pairs with that i. Conversely every common-subsequence chain is an increasing subsequence of the listed sequence. Thus their optima are equal. The decreasing tie order is necessary; ascending j could reuse a single character of X several times.

Maintain tails[ℓ], the smallest ending j of an increasing subsequence of length ℓ seen so far. For each j find the first tails entry at least j by binary search and replace it with j, or append j if none exists. Inductively this preserves the minimum-ending-position invariant: appending j to the best shorter subsequence is possible exactly when the preceding tail is smaller. Replacing a tail cannot harm a future extension. The largest index reached is the LCS length. Store the originating pair and predecessor index for each insertion if an actual subsequence is required; tracing the final best tail yields its aligned symbols in reverse, then reverse them. The chain proof above proves witness validity as well as optimality.

Construct occurrence lists for Y by symbol, then enumerate the appropriate reversed list for each X_i. For word-sized integer symbols, deterministic sorting/compression costs O(n log(n+2)) comparisons and word operations; enumeration costs O(n+r). Binary searches cost O(r log(n+2)). Storing pair predecessors costs O(n+r) words, including the output length at most n. Without a witness, occurrence lists and tails use O(n) words.

The word bound assumes O(log(n+2))-bit symbol codes; if symbols are arbitrary binary strings, first charge their encoded total size L and actual comparison/sorting costs. A conservative bit bound is polynomial-log overhead on the word bound plus that input cost. The exact algorithm is known as the Hunt–Szymanski sparse-match approach; no novelty is claimed. Whenever r≤n^{2−ε} for a fixed ε>0, logarithmic overhead is absorbed by n^{ε/2}, giving O(n^{2−ε/2}) for large n, and hence the requested 1.1 approximation on that class. Highly repeated symbols can make r=n², outside this speed guarantee.

## Earlier contributions and limits

The earlier attempt disproves an aligned-block heuristic by half-rotated strings. The sparse matching-position algorithm is a positive exact regime; unlike that heuristic it preserves all possible alignments.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30004015/verify.py). Source SHA-256: `7f96ac040a065c7e3f979f520d8bf935b5b2032491e8a5457bc1044abfba1f0b`. The source is byte-identical to the reviewed and executed program.



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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30004015.txt
J. W. Hunt and T. G. Szymanski, A Fast Algorithm for Computing Longest Common Subsequences, Communications of the ACM 20(5), 1977, pp.350–353, DOI https://doi.org/10.1145/359581.359603 . Primary paper bibliographic/algorithm statement checked; the chain and tails correctness are proved here.
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30004015/verify.py (Used: exact previously reviewed program; SHA-256 7f96ac040a065c7e3f979f520d8bf935b5b2032491e8a5457bc1044abfba1f0b).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
