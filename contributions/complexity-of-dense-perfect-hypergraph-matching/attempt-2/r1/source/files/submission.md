# Attributed submission: Attempt: TOP-30000608

Source: https://github.com/We-Solve/research/issues/371

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30000608

### Claim

Partial result

### Exact scope

For fixed c>1/3, sufficiently large 3-uniform hypergraphs with n divisible by three and minimum codegree≥cn have a polynomial-time perfect-matching decision algorithm consisting of one explicit GF(2) linear-system test.

### Write-up

# Complexity of Dense Perfect Hypergraph Matching

Claim type: **Partial result**.

Exact scope: For fixed c>1/3, sufficiently large 3-uniform hypergraphs with n divisible by three and minimum codegree≥cn have a polynomial-time perfect-matching decision algorithm consisting of one explicit GF(2) linear-system test.

## A theorem that turns parity certificates into an algorithm

The credited structural input is Keevash–Knox–Mycroft [K], STOC2013 primary Theorem 1.4: for every fixed γ>0 and sufficiently large n divisible by three, a 3-graph with minimum codegree≥(1/3+γ)n and no perfect matching has a vertex subset A of odd size such that every edge intersects A evenly. We use this precise three-uniform theorem, whose proof is imported. For larger uniformities the paper explicitly explains why one parity barrier is insufficient; we do not generalize it.

Introduce one GF(2) variable z_v per vertex. Solve the equations
Σ_{v∈e} z_v=0  for every hyperedge e,   and   Σ_{v∈V} z_v=1.       (1)
If consistent, output NO and the set A={v:z_v=1}; otherwise output YES. Any solution is an unconditional certificate of no perfect matching: summing the even intersections over disjoint edges of a hypothetical perfect matching would make |A| even, contrary to the last equation. Conversely, under the fixed-density and sufficiently-large-n hypotheses, [K] supplies just such an A whenever no perfect matching exists. Thus inconsistency of (1) implies a perfect matching exists, proving both answers correct on the promised class.

Take γ=c−1/3>0, which is fixed. Dense instances satisfying the original range 1/3<c<1/2 fall directly under the theorem. The endpoint c=1/3 is not covered by this deduction, even though later general algorithms mentioned in the previous contribution may cover it. Nor is a perfect matching reconstructed from inconsistency; the literal task asks to decide existence, which (1) does. An odd n is not itself a reason for NO in a 3-graph; only divisibility by three is relevant and retained.

Build the (m+1)×(n+1) augmented binary matrix from the edge list. Ordinary Gaussian elimination uses O((m+n)n²) bit operations with elementary bit cells, or faster packed-row operations if separately accounted. It uses O((m+n)n) bits. This includes reading the edge list and writing a NO certificate with n bits; YES is one bit. For each fixed c the finite small-n exceptions can be handled by exhaustive perfect-matching search, giving a polynomial asymptotic algorithm with a constant cutoff supplied by the structural theorem. We do not claim a practical numerical value for that cutoff.

The checker independently enumerates perfect matchings on small examples and solves (1), verifies every produced odd-even certificate against all edges, and exercises dense random examples. Those finite tests do not establish the unknown numerical cutoff or replace [K].

## Earlier contributions and limits

The prior report gives a dense parity NO example and cites broader later decision/constructive literature without deriving an algorithm. Here the added content is the explicit Gaussian-elimination test and its two-direction proof from the precise 3-uniform structural theorem.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30000608/verify.py). Source SHA-256: `5cc06dbff01d98cd58d6fe40aa4bb8c25312ffb9c40cb381f4e8877e30ffe96e`. The source is byte-identical to the reviewed and executed program.



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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30000608.txt
Peter Keevash, Fiachra Knox, Richard Mycroft, Polynomial-Time Perfect Matchings in Dense Hypergraphs, STOC2013 primary author paper, Theorem 1.4 and discussion of its special 3-uniform scope, pp.1–2: https://people.maths.ox.ac.uk/keevash/papers/stoc212fp-keevash.pdf . Full revised paper arXiv:1307.2608v2, Adv.Math.269 (2015), pp.265–334; this report fixes the STOC theorem numbering.
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30000608/verify.py (Used: exact previously reviewed program; SHA-256 5cc06dbff01d98cd58d6fe40aa4bb8c25312ffb9c40cb381f4e8877e30ffe96e).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
