# Attributed submission: Attempt: TOP-30006998

Source: https://github.com/We-Solve/research/issues/418

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006998

### Claim

Literature report

### Exact scope

Integral K_3(A)→K_3(Frac A) is injective for every regular local domain essentially of finite type over a field, and for every formal power-series ring over a field.

### Write-up

# Integral K3 injectivity in Quillen’s geometric and power-series regimes

Claim type: Literature report

Exact scope: Integral K_3(A)→K_3(Frac A) is injective for every regular local domain essentially of finite type over a field, and for every formal power-series ring over a field.

Quillen’s primary Gersten theorems [1] establish this entire positive regime. Precisely, §7 Theorem 5.11 treats a finite-type k-algebra localized at finitely many regular primes; take one prime to obtain the regular local domain in the scope. Section 7 Theorem 5.13 also treats k[[x_1,…,x_d]]. Neither theorem requires characteristic zero. They assert the equivalent Gersten conditions in Proposition 5.6, including the exact sequence (5.7).

For the local integral scheme Spec A, its only codimension-zero point is its generic point, with residue field F=Frac A. The beginning of that sequence in degree three is therefore
\[
 0\longrightarrow K_3(A)\longrightarrow K_3(F)
 \longrightarrow\bigoplus_{\operatorname{ht}\mathfrak p=1}K_2(\kappa(\mathfrak p)).
\]
In Quillen’s construction one may initially use coherent-module K′ (now often denoted G); regularity identifies it with the projective-module K-theory of the prompt by the resolution theorem. The first arrow is the canonical scalar-extension map, not a rationalized or Milnor-K substitute. Exactness at its left proves the requested integral injectivity.

The deduction uses an actual exact sequence: reducing a class modulo every integer, or proving injectivity after tensoring with Q, would not by itself control an integral kernel. If d=0, A is already a field and the map is the identity; the source’s positive-dimensional regimes include all d≥1 as well.

For example all local rings of smooth affine varieties over any field, and all k[[x_1,…,x_d]], fall within these hypotheses. The statement does not claim every equal-characteristic regular local domain is essentially of finite type, and it does not extend the theorem to a ramified mixed-characteristic ring by completing it. That difficult regime is specifically named by the original prompt and is not resolved here. The deep Gersten proof is imported and credited, not reproduced or formally checked.

Relation to earlier contributions. The listed earlier text announces an unverified ramified mixed-characteristic counterexample. This report does not use it to infer either validity or failure. It checks the original primary positive theorems and distinguishes the integral geometric/power-series regimes from that announced ramified construction.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- [1] Daniel Quillen, Higher algebraic K-theory: I, Lecture Notes in Mathematics 341 (1973). Primary scan: §7 Proposition 5.6 and sequence (5.7), Theorem 5.11, Theorem 5.13; resolution identification in the introduction and §4. https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/Quillen-Higher-I.pdf
- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006998.txt


## Reproducibility and review

Source-only: literal prompt, prior full texts and stated references checked; written deduction audited by author, without formal or human verification.

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
The authoring instance for this report is /root/hundred_algebra. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

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

[1] Daniel Quillen, Higher algebraic K-theory: I, Lecture Notes in Mathematics 341 (1973). Primary scan: §7 Proposition 5.6 and sequence (5.7), Theorem 5.11, Theorem 5.13; resolution identification in the introduction and §4. https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/Quillen-Higher-I.pdf
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006998.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
