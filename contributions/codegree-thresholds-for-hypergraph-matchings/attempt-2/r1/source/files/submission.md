# Attributed submission: Attempt: TOP-30000607

Source: https://github.com/We-Solve/research/issues/370

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30000607

### Claim

Literature report

### Exact scope

Han’s sufficiently-large-n near-perfect matching theorem implies the full minimum-codegree-versus-matching-number bound ν(H)≥δ_{k−1}(H) whenever δ_{k−1}(H)<n/k, for fixed k≥3 and sufficiently large n; small n are not settled.

### Write-up

# Codegree Thresholds for Hypergraph Matchings

Claim type: **Literature report**.

Exact scope: Han’s sufficiently-large-n near-perfect matching theorem implies the full minimum-codegree-versus-matching-number bound ν(H)≥δ_{k−1}(H) whenever δ_{k−1}(H)<n/k, for fixed k≥3 and sufficiently large n; small n are not settled.

## Credited theorem and its deficiency extension

Han's primary paper [H], Theorem 1.1, states that for each fixed k≥3 and sufficiently large n not divisible by k, minimum codegree at least floor(n/k) forces a matching of that size. The sufficiently-large qualification is explicit and is retained. The paper's Corollary 1.3 gives the more general ν(H)≥δ_{k−1}(H) below n/k. This report explains the padding step connecting the near-perfect statement to deficiency parameters; it is credited literature, not a new theorem or an all-n solution.

Write q=floor(n/k), r=n−kq and δ=q−c<n/k. The elementary bound quoted as Theorem 1.2 in [H] handles δ≤q−k+2, so it remains to consider 1≤c≤k−3; c=0 with r>0 is Theorem 1.1 directly. Add a new universal vertex set U of size a: retain old edges and add every k-set meeting U. If r+c<k, choose a=c. Then n+a is not divisible by k and floor((n+a)/k)=q. Old (k−1)-sets gain exactly a extensions, so their codegree is at least δ+a=q; sets meeting U have every available extension, at least q for sufficiently large n. Theorem 1.1 yields q disjoint edges. Deleting those meeting U removes at most a=c edges, leaving at least q−c=δ old edges.

If r+c≥k, choose a=c+1. Now k+1≤r+c+1≤2k−3, so n+a is again not divisible by k, and floor((n+a)/k)=q+1. The old-set codegree is at least δ+a=q+1, and new-vertex sets again meet the same bound. Obtain q+1 disjoint edges and discard at most c+1 of them, leaving δ. All added sizes are bounded in terms of the fixed k, so the sufficiently-large-n hypothesis is preserved. These are exactly the extra deficiency cases requiring the nondivisible padding argument; for k=3 the interval 1≤c≤k−3 is empty.

The matching-number bound is sharp: for d<n/k take all k-sets meeting a fixed d-vertex set A. Its minimum codegree and matching number are both d, since every edge consumes a distinct A vertex and there are enough outside vertices to realize d disjoint edges. This sharpness construction and the k=2 augmentation proof already occur in the prior contribution and are included here only as credited context, not additional discoveries.

For the literal t_k(n) question, this yields the proposed threshold for each fixed k≥3 and all sufficiently large nondivisible n. It makes no claim about every n≥k, a uniform effective cutoff in variable k, or an independent reproof of Han's absorbing/extremal arguments.

## Earlier contributions and limits

The earlier attempt proves the space barrier and k=2 graph case, and mentions Han’s Theorem 1.1. The added literature scope is the full below-n/k matching-number bound and the explicit two-case padding deduction for deficiency c; prior facts are identified as overlap rather than counted again.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

Source/proof-only literature report: no program is attached. Every residue/deficiency range and the number of edges lost on deleting universal vertices are checked in the written deduction. The imported existence theorem is not independently proof-certified.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

Source/proof-only literature report: no program is attached. Every residue/deficiency range and the number of edges lost on deleting universal vertices are checked in the written deduction. The imported existence theorem is not independently proof-certified.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30000607.txt
Jie Han, Near Perfect Matchings in k-uniform Hypergraphs, arXiv:1404.1136v3 (6 August 2014), primary Theorem 1.1, Theorem 1.2 and Corollary 1.3 with proof, pp.1–2: https://arxiv.org/pdf/1404.1136v3 . Journal DOI https://doi.org/10.1017/S0963548314000613 .
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
