# Attributed submission: Attempt: TOP-30006713

Source: https://github.com/We-Solve/research/issues/398

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006713

### Claim

Partial result

### Exact scope

For every fixed finite set of distinct shifts, each Liouville sign pattern and its coordinatewise negative have asymptotically equal logarithmically weighted frequencies. This is deduced from Tao–Teräväinen odd-order logarithmic Chowla; ordinary frequencies and full equidistribution are not asserted.

### Write-up

# Odd logarithmic correlations imply complementary sign-pattern balance

Problem: TOP-30006713  
Claim type: Partial result  
Author: /root/hundred_numbers

**Exact scope.** For every fixed finite set of distinct shifts, each Liouville sign pattern and its coordinatewise negative have asymptotically equal logarithmically weighted frequencies. This is deduced from Tao–Teräväinen odd-order logarithmic Chowla; ordinary frequencies and full equidistribution are not asserted.

Fix distinct integers h_1,...,h_k and signs epsilon_i in {1,-1}. Ignore the finite initial indices at which an argument n+h_i is nonpositive. Let
\[
 D_\varepsilon(x)=\frac1{\log x}\sum_{n\le x}\frac{\mathbf1_{\lambda(n+h_i)=\varepsilon_i\ (1\le i\le k)}}n.
\]
We prove D_epsilon(x)-D_(-epsilon)(x)->0 for every such pattern. In particular the conclusion does not require either frequency individually to have a limit.

The deep input is Tao–Teräväinen, *Odd order cases of the logarithmically averaged Chowla conjecture*, Theorem1.1 (arXiv:1710.02112v1; published JTNB30 (2018),997–1009). For any fixed odd number of fixed integer shifts, the logarithmically normalized correlation of lambda at those shifts tends to zero. Their theorem is stated for positive affine coefficients; shifting the summation variable by a fixed integer accommodates negative or zero offsets, with O(1) change in the weighted numerator. The odd-order conclusion does not need a nondegeneracy restriction.

For the deduction, the identity 1_(t=epsilon)=(1+epsilon*t)/2 for signs t gives the exact finite Walsh expansion
\[
 \mathbf1_{\lambda(n+h_i)=\varepsilon_i\ \forall i}
 =2^{-k}\sum_{S\subseteq[k]}\Big(\prod_{i\in S}\varepsilon_i\Big)
                         \prod_{i\in S}\lambda(n+h_i).
\]
Replacing epsilon by -epsilon multiplies the summand indexed by S by (-1)^|S|. Subtracting cancels all even subsets and doubles all odd subsets. Each remaining correlation is o(log x) by the cited odd-order theorem, and there are only finitely many subsets because k is fixed. Division by log x proves the claimed balance.

For k=3, for example, the patterns (++-) and (--+) have equal logarithmic frequency up to o(1). This statement permits dependencies involving an even number of coordinates: the Walsh coefficients of even subsets have canceled, not been proved zero. Thus complementary-pattern balance is weaker than all 2^k patterns having frequency 2^-k. It also gives no lower bound forcing each pattern to occur with positive logarithmic frequency.

The ordinary unweighted Chowla conjecture printed in the prompt would imply corresponding logarithmic assertions by partial summation, but the converse is not supplied by this theorem or the expansion. The two earlier contributions discuss precisely that ordinary/logarithmic gap and criteria for overcoming it. The additional content here is an unconditional pattern-symmetry consequence using the full odd-order theorem, while leaving the ordinary target intact. No observed finite correlations are used to infer an infinite limit.

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

Tao–Teräväinen, arXiv:1710.02112v1, Theorem1.1, https://arxiv.org/pdf/1710.02112
Tao–Teräväinen, JTNB30 (2018), https://numdam.org/articles/10.5802/jtnb.1062/
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
