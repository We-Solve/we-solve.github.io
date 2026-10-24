# Attributed submission: Attempt: TOP-1439

Source: https://github.com/We-Solve/research/issues/265

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1439

### Claim

Literature report

### Exact scope

Report Hatami–Hatami’s hereditary factorial-speed counterexample theorem; independently construct logarithmic adjacency labels for every fixed-degeneracy class.

### Write-up

# The negative implicit-graph theorem and a constructive positive boundary

Problem: TOP-1439

Claim type: Literature report.

Exact scope: Report Hatami–Hatami’s hereditary factorial-speed counterexample theorem; independently construct logarithmic adjacency labels for every fixed-degeneracy class.

## Credited negative theorem

Hatami–Hatami, Theorem1.4 of arXiv2111.13198v2 (13December2021), the inspected manuscript, show that for every δ>0 some hereditary graph family has at most factorial speed but requires implicit code length Ω(n^(1/2−δ)). Taking δ=1/4 rules out O(log n) labels. The lower bound permits arbitrary decoders, and therefore also excludes the polynomial-time decoders demanded by this prompt. The probabilistic family construction and its deep counting argument are credited; they are not independently reconstructed here.

## Why the decoder convention does not rescue the conjecture

A scheme using labels of maximum length L gives an induced-universal graph whose vertices are possible labels: join two labels when the fixed decoder returns adjacency. There are at most 2^(L+1) binary strings of length at most L. On graph vertices with distinct assigned labels this directly reproduces the graph; any needed uniqueness can be imposed by appending an O(log n)-bit vertex identifier. Conversely a universal graph on n^C labeled vertices gives O(log n) codes by vertex names. Thus allowing slow or fast decoding cannot evade an information-theoretic code-length lower bound. The cited theorem itself is the authoritative lower-bound input.

## A concrete positive class

Fix d≥0. Every d-degenerate graph has an ordering in which each vertex has at most d later neighbors: repeatedly remove a vertex of degree at most d. Assign distinct identifiers 1,...,n. The label of a vertex contains n, its identifier, and the list of identifiers of its later neighbors. Encode n self-delimited, then use blocks of length ceil(log2(n+1)) for identifiers and zero padding for unused neighbor positions. For fixed d this is O((d+1)log(n+1)) bits, with an unambiguous common parsing rule.

The decoder reads the two lists and accepts exactly when either identifier occurs in the other’s stored list. Every edge is stored by its earlier endpoint, and only genuine edges are stored, proving correctness. Parsing and scanning d entries takes polynomial time in label length. The d-degenerate family is hereditary. It has at most n!(n+1)^(dn) labeled graphs: choose an elimination order, then at most d later neighbors per vertex, padding the choices if necessary. Its speed is therefore factorial, as required.

This supplies a useful boundary: factorial counting alone is insufficient by the imported theorem, whereas bounded degeneracy permits explicit labels and a fast decoder. The positive construction is not asserted to describe the counterexample family or all families admitting labels.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1439.txt
- https://arxiv.org/pdf/2111.13198
- https://arxiv.org/abs/2111.13198


## Reproducibility and review

Proof/source review only; no code attached at authoring time. Exact hypotheses and boundary cases are addressed in report.md; external theorem proofs are credited rather than claimed independently verified.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)
OpenAI, GPT-6.1 Sol (user-specified attribution; reasoning level: Ultra; see disclosure below)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected and checked scopes, read final reports, spot-checked sources, freshly ran all attached programs, assembled the prepared submissions.
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

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1439.txt
https://arxiv.org/pdf/2111.13198
https://arxiv.org/abs/2111.13198
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
