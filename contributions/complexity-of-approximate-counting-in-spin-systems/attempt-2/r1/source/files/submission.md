# Attributed submission: Attempt: TOP-30004130

Source: https://github.com/We-Solve/research/issues/383

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30004130

### Claim

Partial result

### Exact scope

For fixed q≥2 and a supplied feedback vertex set S of size k, exact rational Potts and hard-core partition functions are computable in q^k·poly(L) and 2^k·poly(L) bit time, respectively, where G−S is a forest and L is full encoded input length.

### Write-up

# Complexity of Approximate Counting in Spin Systems

Claim type: **Partial result**.

Exact scope: For fixed q≥2 and a supplied feedback vertex set S of size k, exact rational Potts and hard-core partition functions are computable in q^k·poly(L) and 2^k·poly(L) bit time, respectively, where G−S is a forest and L is full encoded input length.

## Conditioning removes all cycles

A feedback vertex set S is supplied and can be validated by checking that G−S is a forest. For the fixed-q ferromagnetic Potts model with rational β>1, enumerate each of the q^k assignments a:S→[q]. Internal edges of S contribute β^{m_S(a)}. Each remaining vertex v acquires the unary weight
h_v(c)=β^{|{s∈S:sv∈E, a(s)=c}|}.
Root every component of G−S. For a vertex v and color c define
D_v(c)=h_v(c)∏_{u child of v} Σ_{d=1}^q D_u(d) β^{[c=d]}.
Multiply the sums at the roots and β^{m_S(a)}, then sum over a. Conditioned on a and each parent color, different descendant components share no edges, which proves the recurrence by induction. Every full spin configuration appears in exactly one a term with exactly its original weight β^{number of monochromatic edges}. Thus the answer is the exact partition function, not an approximation.

For hard-core with rational λ>0, enumerate the independent subsets I⊆S; reject any with an internal edge. Every vertex of G−S adjacent to I is forbidden. On each rooted residual tree set
D_v(0)=∏_u(D_u(0)+D_u(1)),
D_v(1)=h_v∏_u D_u(0),
where h_v=0 if v is forbidden and λ otherwise. Multiply root totals and λ^{|I|}, then sum over the enumerated I. This partitions every independent set by its intersection with S, proving exactness. The hard-core algorithm works on all graphs in this class, so it includes the prompt's bipartite subclass without using bipartiteness as a hidden premise.

## Arithmetic and output size

One Potts conditioning uses O((n+m)q²) arithmetic operations, including edges to S and unary weights. The hard-core version uses O(n+m) per subset. Powers can be formed by repeated multiplication with at most O(n+m) factors rather than a unit-cost exponentiation assumption. Memory can reuse the conditioning workspace; an accumulated exact total is retained.

If β=p/r, a common denominator r^m writes every Potts weight as an integer product of m factors bounded by max(p,r), and the whole sum adds at most q^n terms. Its numerator and denominator therefore have O(m·bitlen(β)+n log q) bits. The analogous hard-core bound is O(n·bitlen(λ)+n). Intermediate positive subtree sums obey the same polynomial bounds in the full input length L. Elementary exact integer arithmetic gives the advertised exponential-in-k times polynomial-in-L bit bounds; input reading and exact rational output are included. For each fixed k,q these are polynomial-time exact counting algorithms at any allowed coupling/activity.

This contribution concerns counting. Although the conditional tables also describe sampling probabilities, no worst-case bounded-random-bit sampler is claimed here: exact rational sampling may require an unbounded number of unbiased bits. No worst-case classification on arbitrary graphs or hardness threshold is inferred from bounded feedback vertex number.

## Earlier contributions and limits

The earlier attempt solves forests and exhibits the first error from simply deleting a cycle edge. Conditioning on a supplied feedback vertex set handles arbitrarily many cycles that meet a small vertex set, preserving their weights instead of deleting their dependencies.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30004130/verify.py). Source SHA-256: `c262611a26cb9350a6e39868448871915f0e6aa4553823a2b7935bc8008c8a17`. The source is byte-identical to the reviewed and executed program.



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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30004130.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30004130/verify.py (Used: exact previously reviewed program; SHA-256 c262611a26cb9350a6e39868448871915f0e6aa4553823a2b7935bc8008c8a17).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
