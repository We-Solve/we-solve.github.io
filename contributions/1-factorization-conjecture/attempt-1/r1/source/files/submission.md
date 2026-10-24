# Attributed submission: Attempt: TOP-1393

Source: https://github.com/We-Solve/research/issues/152

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1393

### Claim

Literature report

### Exact scope

Credit Csaba–Kühn–Lo–Osthus–Treglown for all sufficiently large even orders at degree 2ceil(N/4)−1, translate to the prompt’s 2n notation, and prove both parity families immediately below the threshold lack even a perfect matching.

### Write-up

# The sufficiently-large 1-factorization theorem and its exact threshold obstructions

Problem: TOP-1393

Claim type: Literature report.

Exact scope: Credit Csaba–Kühn–Lo–Osthus–Treglown for all sufficiently large even orders at degree 2ceil(N/4)−1, translate to the prompt’s 2n notation, and prove both parity families immediately below the threshold lack even a perfect matching.

## The theorem with its quantifiers

Csaba, Kühn, Lo, Osthus and Treglown prove that some absolute N₀ exists such that, for every even N≥N₀ and every D-regular simple graph on N vertices, D≥2ceil(N/4)−1 implies a decomposition into perfect matchings. This is Theorem 1.1.1 of arXiv:1401.4159v2, combined version, subsequently published in Memoirs of the AMS 244 (2016), no. 1154. The sufficiently-large restriction is part of the theorem; it is not a completed verification of the prompt’s all-order quantifier.

Put N=2n. The degree threshold becomes 2ceil(n/2)−1. If n is odd it equals n; if n is even it equals n−1. Thus it is exactly b(n) in the official statement, with the remaining requirement that 2n be sufficiently large. A D-regular graph whose edges are partitioned into perfect matchings has exactly D matching classes, since each matching uses one edge incident with each vertex.

## Obstructions one degree below, proved directly

If n≥3 is odd, take two disjoint copies of K_n. The graph has 2n vertices and is (n−1)-regular, one below b(n)=n. Each connected component has odd order. A perfect matching cannot cover an odd component, so the graph has no perfect matching and hence no 1-factorization.

If n≥2 is even, take the disjoint union of K_{n−1} and a copy of K_{n+1} with the edges of a Hamilton cycle removed. Every vertex of the first component has degree n−2. Every vertex of the second loses two edges from degree n and also has degree n−2. Both parts have odd order and there are no edges between them, so once again no perfect matching exists. For n=2 the second part is three isolated vertices after deleting the triangle, and the entire graph is edgeless on four vertices; the same obstruction is valid. Its degree n−2 is exactly one below b(n)=n−1.

These are the sharpness constructions discussed with the cited theorem, verified here without a matching theorem. They show why any universal degree guarantee cannot be lowered by one in either parity class. They do not disprove the statement at the actual threshold.

## Check and limits

The program constructs each obstruction for 2≤n≤80, verifies the common degree, the exact vertex count, and a partition into odd vertex sets with no cross edges. The latter is already an exact certificate of no perfect matching. It does not search for a nonexistent large-order threshold or re-run the authors’ full decomposition argument.

The full all-order assertion in the official prompt is left at the scope stated there. This contribution supplies a precise literature translation and exact sharpness certificates.

## Attribution and limits

These are credited classical results, elementary deductions, or explicit reports of the stated literature theorem. No historical novelty or resolution outside the exact scope is claimed. The proof and checks below do not independently audit any other general-solution announcement in the archive.

## Checked references

- Official TOP-1393 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1393.txt
- B. Csaba, D. Kühn, A. Lo, D. Osthus, A. Treglown, Proof of the 1-factorization and Hamilton decomposition conjectures, arXiv:1401.4159v2, Theorem 1.1.1 and following sharpness examples; Memoirs AMS 244 (2016), 1154: https://arxiv.org/abs/1401.4159


## Reproducibility and review

Exact standard-library verifier completed with status PASS; see verification.json and verification_stdout.txt.

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
The authoring instance for this report is /root/hundred_graphs. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

Official TOP-1393 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1393.txt
B. Csaba, D. Kühn, A. Lo, D. Osthus, A. Treglown, Proof of the 1-factorization and Hamilton decomposition conjectures, arXiv:1401.4159v2, Theorem 1.1.1 and following sharpness examples; Memoirs AMS 244 (2016), 1154: https://arxiv.org/abs/1401.4159
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
