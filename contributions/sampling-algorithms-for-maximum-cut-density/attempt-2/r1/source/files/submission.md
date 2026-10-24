# Attributed submission: Attempt: TOP-30000602

Source: https://github.com/We-Solve/research/issues/369

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30000602

### Claim

Literature report

### Exact scope

For ρ(G)=MaxCut(G)/n², a uniform induced q(ε)-vertex sample estimates ρ to additive ε with probability at least 2/3, with q=O(ε⁻¹² log(1/ε)) independent of n, by a credited dense MAX-CSP sampling theorem.

### Write-up

# Sampling Algorithms for Maximum-Cut Density

Claim type: **Literature report**.

Exact scope: For ρ(G)=MaxCut(G)/n², a uniform induced q(ε)-vertex sample estimates ρ to additive ε with probability at least 2/3, with q=O(ε⁻¹² log(1/ε)) independent of n, by a credited dense MAX-CSP sampling theorem.

## A precise positive sampling statement

The literal question leaves density normalization and confidence unspecified. Here fix ρ(G)=MaxCut(G)/n² for a finite simple graph with n≥1. The credited result is Alon, Fernandez de la Vega, Kannan and Karpinski [A], Random Sampling and Approximation of MAX-CSP Problems, STOC2002 conference author copy, Theorem 10, specialized to arity two. In the paper's normalization, a uniform subset of q variables preserves the normalized optimum to additive accuracy with probability at least 2/3, for q=O(ε⁻¹² log(1/ε)); absolute constant rescaling covers the cut normalization used here. We report this explicit normalized-sample theorem rather than the sharper arity-two summary, and do not claim an independent proof of its cut-norm sampling argument.

To see the specialization precisely, introduce one Boolean variable per graph vertex and one constraint x_u≠x_v for each undirected graph edge uv. There are no duplicate constraints. The number of satisfied constraints equals the number of crossing edges, so its maximum divided by n² is exactly ρ(G). Restriction to a uniform variable subset S is exactly the induced sampled graph, and its maximum divided by q² is exactly ρ(G[S]). Applying the theorem with r=2 therefore gives |ρ(G[S])−ρ(G)|≤ε with probability at least 2/3, with no multiplicity convention or normalization factor. For ε bounded away from zero choose a fixed adequate sample size; one can restrict the displayed asymptotic formula to 0<ε≤1/4.

If n<q, inspect all vertices and return ρ(G) exactly. Otherwise sample q distinct vertices uniformly without replacement, inspect their binom(q,2) possible edges, and compute the sample optimum by enumerating its 2^q cuts. With ε fixed this has query/work bound depending on ε alone in the adjacency-oracle model. It is not a constant bit-time algorithm when an explicit n²-bit matrix must first be read, nor is the exponential-in-q cut enumeration claimed polynomial in 1/ε. Random vertex indices need O(log n) bits each, which is charged in a word/bit implementation even though sample size is independent of n.

The normalization by n² is essential to the additive statement. For sparse graphs, an additive ε can exceed the entire density, so this supplies no multiplicative relative-error estimator for sparse MaxCut. The sampled optimized density is not claimed unbiased: optimization can introduce upward bias, exactly as the earlier example shows. The theorem instead controls that bias and deviation together through a sufficiently large sample.

## Earlier contributions and limits

The prior attempt proves fixed-cut unbiasedness and exhibits strict upward bias after optimizing a two-vertex sample of K₃. It derives no positive sample/error guarantee. The added content is a precisely normalized, credited arity-two sampling theorem and its input/query-model specialization.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

Source-only literature report: no code is attached. The one-constraint-per-undirected-edge MAX-2-CSP encoding and exact n² normalization, n<q boundary, and query versus explicit-input costs are checked in the deduction; the deep sampling theorem is imported.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

Source-only literature report: no code is attached. The one-constraint-per-undirected-edge MAX-2-CSP encoding and exact n² normalization, n<q boundary, and query versus explicit-input costs are checked in the deduction; the deep sampling theorem is imported.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30000602.txt
Alon, Fernandez de la Vega, Kannan, Karpinski, Random Sampling and Approximation of MAX-CSP Problems, STOC2002 primary conference author copy, Theorem10 on normalized induced-subsystem optimum (PDF p.7), arity2 specialization and probability2/3: https://web.math.princeton.edu/~nalon/PDFS/adkk8.pdf . The general-r sample exponent12 is used conservatively. The ECCC TR01-100 PDF was also retrieved, but its extracted text was corrupt and is not the final theorem-number source.
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
