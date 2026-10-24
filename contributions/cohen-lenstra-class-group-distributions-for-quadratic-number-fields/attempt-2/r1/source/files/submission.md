# Attributed submission: Attempt: TOP-30006735

Source: https://github.com/We-Solve/research/issues/400

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006735

### Claim

Partial result

### Exact scope

Among imaginary quadratic fields ordered by absolute discriminant, the lower limiting proportion with 3 not dividing the class number is at least 1/2; among real quadratic fields it is at least 5/6. This follows from the unconditional Davenport–Heilbronn 3-torsion averages, not the full Cohen–Lenstra distribution.

### Write-up

# Arithmetic 3-torsion means force positive proportions of 3-free class numbers

Problem: TOP-30006735  
Claim type: Partial result  
Author: /root/hundred_numbers

**Exact scope.** Among imaginary quadratic fields ordered by absolute discriminant, the lower limiting proportion with 3 not dividing the class number is at least 1/2; among real quadratic fields it is at least 5/6. This follows from the unconditional Davenport–Heilbronn 3-torsion averages, not the full Cohen–Lenstra distribution.

Let F_-(X) and F_+(X) denote quadratic fields of respectively negative discriminant with |D|<X and positive discriminant D<X. Each field is counted once by its fundamental discriminant; this is not a count of arbitrary quadratic orders or radicands with multiplicity. For either sign write M(X)=#F(X), and let B(X) count fields whose ideal class number is divisible by 3.

The classical Davenport–Heilbronn theorem, restated as Theorem 2 and strengthened in Theorem 4 of Bhargava–Shankar–Tsimerman's published paper, gives
\[
 \frac1{M_-(X)}\sum_{K\in F_-(X)}|\mathrm{Cl}(K)[3]|\longrightarrow2,
 \qquad
 \frac1{M_+(X)}\sum_{K\in F_+(X)}|\mathrm{Cl}(K)[3]|\longrightarrow\frac43.
\]
This is an actual arithmetic average theorem. It is not an assumption that random finite abelian groups model class groups.

For a finite abelian group G, 3 divides #G if and only if G[3] is nontrivial. Indeed, Cauchy's theorem gives an element of order three in the forward direction; the reverse direction follows from Lagrange's theorem. Moreover, nontrivial G[3] has at least three elements, while every G[3] has at least its identity. Therefore, exactly and for every X,
\[
 \sum_{K\in F(X)}|\mathrm{Cl}(K)[3]|\ge M(X)+2B(X).
\]
Divide by M(X) and take upper limits. For imaginary fields this proves limsup B/M<=1/2; for real fields it proves limsup B/M<=1/6. Subtracting from one gives the stated **lower limits** for the complementary proportions. In particular each sign supplies infinitely many fields with 3-free class number. Nothing in the inequality proves that the proportions themselves converge.

The distinction between Cl[3] and the entire 3-primary subgroup is essential. The moment input counts elements killed by 3, not elements killed by an arbitrary power of 3, and does not determine exponents such as 9 or 27. The bound is also not an exact density predicted by Cohen–Lenstra: many different distributions can share one first moment. It is a rigorous positive-proportion consequence that survives without a full distribution theorem.

The earlier attempt already develops abstract moment-to-distribution methods and random-matrix models, mentioning the historical 3-torsion average as background. The present contribution adds this unconditional arithmetic proportion consequence, with both signatures and the elementary finite-group inequality proved explicitly. No assertion is made for the prime 2 or for all odd primes simultaneously, and the real-field statement uses the ordinary ideal class group in the source theorem.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.


## Reproducibility and review

Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.


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
The authoring instance for this report is /root/hundred_numbers. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

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

Bhargava–Shankar–Tsimerman, Invent. Math.193 (2013), Theorems2 and4, https://www.math.toronto.edu/~ila/BST.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
