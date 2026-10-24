# Attributed submission: Attempt: TOP-30006763

Source: https://github.com/We-Solve/research/issues/404

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006763

### Claim

Literature report

### Exact scope

For fixed F and g>=3, all smooth proper geometrically connected genus-g curves X/F with rank Jac(X)(F)<=g-3 have a uniform explicit bound depending only on g and [F:Q]. Over Q the bound is 84g^2-98g+28. No unrestricted-rank uniformity is claimed.

### Write-up

# Uniform rational-point bounds throughout the small-rank regime

Problem: TOP-30006763  
Claim type: Literature report  
Author: /root/hundred_numbers

**Exact scope.** For fixed F and g>=3, all smooth proper geometrically connected genus-g curves X/F with rank Jac(X)(F)<=g-3 have a uniform explicit bound depending only on g and [F:Q]. Over Q the bound is 84g^2-98g+28. No unrestricted-rank uniformity is claimed.

The theorem of Katz, Rabinoff and Zureick-Brown gives a precise unconditional subfamily of the prompt's fixed-field uniformity question. Its scope includes arbitrary curves in that rank range, rather than only hyperelliptic curves or curves with a prescribed good-reduction prime.

In arXiv:1504.00694v3, Theorem 1.1 states the existence of an explicit N(g,d), for integers g>=3 and d>=1, bounding #X(F) simultaneously for all number fields F of degree d and all smooth proper geometrically connected genus-g curves whose Jacobian has Mordell–Weil rank at most g-3. Immediately after the theorem the authors give
\[
 N(g,1)=84g^2-98g+28.
\]
The work is published in *Duke Mathematical Journal* 165 (2016); the checked v3 is dated 6 January 2017.

For the prompt, fix the ground field F first and put d=[F:Q]. The same N(g,d) now bounds every curve over that one F satisfying the rank hypothesis. This dependence on degree is even uniform across fields of that degree, but **only within the stipulated rank range**. For example, over Q a genus-three curve of rank zero has at most 490 rational points; the rank-zero qualification is part of the application. A genus-three curve of positive Jacobian rank is not thereby covered. For any g>=3, a certified upper bound rank Jac(X)(F)<=g-3 is sufficient; its exact rank need not have been computed.

The hypothesis concerns the Jacobian's F-rational Mordell–Weil group, not the rank after extending F, the number of geometric torsion points, or a heuristic generic rank. No rational base point is needed in Theorem 1.1; if X(F) is empty the point bound is automatic. The source's separate torsion-packet theorems have different hypotheses and are not substituted for the rational-point theorem.

Why the result matters for uniformity can be seen by comparison with a curve-dependent finiteness statement. Faltings gives finiteness for each X, but taking a supremum over all curves need not preserve finiteness. The quoted theorem controls that supremum on an infinite rank-constrained moduli family with one explicit constant. The original fixed-F problem over all ranks remains beyond this deduction. Genus two is likewise outside this particular theorem's stated range.

The earlier attempt discusses rank-dependent Chabauty bounds and other reductions. The added content is the exact all-curves, arbitrary-reduction small-rank theorem with its numerical Q bound and careful fixed-field quantifiers. Its deep p-adic and Berkovich-geometric proof is credited, not independently reconstructed or formally checked here.

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

Katz–Rabinoff–Zureick-Brown, arXiv:1504.00694v3, Theorem 1.1 and following formula, https://arxiv.org/pdf/1504.00694
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
