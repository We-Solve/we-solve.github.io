# Attributed submission: Attempt: TOP-30002722

Source: https://github.com/We-Solve/research/issues/379

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30002722

### Claim

Partial result

### Exact scope

Explicit k-submodular functions given by admissible unary terms and nonnegative star-metric pair interactions on a tree can be minimized exactly in O(n(k+1)²) rational operations, with polynomial bit complexity.

### Write-up

# Polynomial-Time Minimization of K-Submodular Functions

Claim type: **Partial result**.

Exact scope: Explicit k-submodular functions given by admissible unary terms and nonnegative star-metric pair interactions on a tree can be minimized exactly in O(n(k+1)²) rational operations, with polynomial bit complexity.

## A nontrivial explicit family

Labels are {0,1,…,k}, with coordinatewise meet a⊓b=a if a=b and 0 otherwise; join a⊔b is the common label if equal, the nonzero label if one is zero, and 0 if distinct nonzero. A function is k-submodular when F(x)+F(y)≥F(x⊓y)+F(x⊔y).

On an explicitly supplied forest define
F(x)=Σ_v φ_v(x_v)+Σ_{uv} w_{uv} d(x_u,x_v),
where w_{uv}≥0 are rational and d(a,b) is 0 for a=b, 1 when exactly one is zero, and 2 for distinct nonzero labels. Require φ_v(a)+φ_v(b)≥2φ_v(0) for all distinct nonzero a,b. This is precisely the unary k-submodular inequality; all other unary cases have equality.

Here is a complete finite-case justification for the binary term, uniform in k. For a,b,c,e the inequality slack is
s=d(a,b)+d(c,e)−d(a⊓c,b⊓e)−d(a⊔c,b⊔e).
Its value depends only on which labels are zero and which nonzero labels are equal. Rename nonzero labels in first-occurrence order. The 52 possible renamed quadruples are generated without omission by starting with the empty tuple and, at each next position, appending 0, an already used positive label, or the next unused positive label. Direct substitution gives slack counts 32 of value 0, 16 of value 2, and 4 of value 4; the attached checker prints the entire 52-case certificate. For a hand-checkable complete rule, the recursive enumeration just stated has length four, and the displayed four-term formula evaluates each case using only values 0,1,2. No case with more than four positive labels can occur in four positions, and for smaller k one merely discards patterns using too many labels. Thus every slack is nonnegative. Nonnegative weighting and summation preserve all inequalities, proving this family is k-submodular. The checker is a finite proof of this local lemma, not experimental support for an unbounded search.

## Exact optimization on the interaction forest

Root each component. Define D_v(a) as the minimum cost of its descendant subtree conditional on x_v=a. Then
D_v(a)=φ_v(a)+Σ_{u child of v} min_{b∈{0,…,k}}(D_u(b)+w_{uv}d(a,b)).
There are no edges between different child subtrees. Conditioning on x_v therefore makes these choices independent, which proves the recurrence by induction. Minimize each root entry and follow stored minimizing labels to output a minimizing assignment. Negative unary costs are allowed. Zero edge weights, isolated vertices, and k≥3 all pose no additional boundary cases. The algorithm would also minimize arbitrary explicit pairwise tree functions; here the finite lemma ensures the advertised family lies in the literal k-submodular class.

Each edge uses (k+1)² candidate comparisons and additions. With rational encoded data of total length L, all candidate costs are sums of at most O(n) input terms; a common-denominator bound gives polynomially many bits in L, so the arithmetic count yields a polynomial bit-time bound. Input tables have n(k+1) entries and are charged. This is an explicit interaction-tree regime, not an oracle algorithm for general k-submodular minimization.

## Earlier contributions and limits

The previous attempt enumerates orthants and exhibits failed local descent; it mentions later oracle lower-bound claims. This report supplies a distinct explicit interaction-forest class and exact polynomial algorithm, without transferring conclusions across input models.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30002722/verify.py). Source SHA-256: `8e3320ffb15f690b699c3f2e78659a8692fbfa6569ff2f341a84e1aaa31e2af0`. The source is byte-identical to the reviewed and executed program.



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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30002722.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30002722/verify.py (Used: exact previously reviewed program; SHA-256 8e3320ffb15f690b699c3f2e78659a8692fbfa6569ff2f341a84e1aaa31e2af0).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
