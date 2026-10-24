# Attributed submission: Attempt: TOP-30006799

Source: https://github.com/We-Solve/research/issues/407

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006799

### Claim

Literature report

### Exact scope

Over every characteristic-zero field K with cd(K)≤2, every simply connected absolutely simple group of outer type ^2A_n has trivial H^1; finite products and finite-separable Weil restrictions of these groups do also.

### Write-up

# Serre II for arbitrary outer type-A groups in characteristic zero

Claim type: Literature report

Exact scope: Over every characteristic-zero field K with cd(K)≤2, every simply connected absolutely simple group of outer type ^2A_n has trivial H^1; finite products and finite-separable Weil restrictions of these groups do also.

The imported theorem is the main theorem of Berhuy–Frings–Tignol [1], stated on its second page and proved by its characteristic-independent classification arguments: the strong form of Serre II holds for types ^2A_n, B_n, C_n and D_n, apart from possible trialitarian D_4. We use only its ^2A_n assertion here. In that strong form the hypothesis is sd_p(K)≤2 for every torsion prime of the root system. In characteristic zero, the paper defines sd_p(K)=cd_p(K) for every p. The literal assumption cd(K)≤2 therefore implies every required inequality. Its conclusion is H^1(K,G)={1}. Characteristic-zero fields are perfect, so this is within the prompt’s exact field scope. There is no assumption that G is split or quasi-split.

Outer type A encompasses special unitary forms associated with a quadratic extension and a central simple algebra with unitary involution; the theorem is not merely the elementary split-SL determinant argument. We do not replace its unitary group by a general linear group or omit the simply connected condition. Its deep form/involution classification is credited to the authors and not reproduced.

Here is the extension to semisimple combinations. For a finite product G=product G_i, a torsor is a tuple of factor torsors (this follows directly by projecting its cocycle), so its pointed H^1 is the product of the factor pointed sets. For a finite separable field extension L/K, Shapiro descent gives
\[
 H^1(K,R_{L/K}G_L)=H^1(L,G_L).
\]
Finite extensions in characteristic zero remain perfect and have cohomological dimension at most that of K, by restriction to the open subgroup of the absolute Galois group. Applying the primary theorem over L makes the right side trivial. Products of these Weil restrictions consequently satisfy exactly the same torsor conclusion. These are still semisimple simply connected K-groups.

No statement for all exceptional types or arbitrary positive characteristic is inferred from this specialization. In particular an argument about norms in a split group would not by itself prove the unitary assertion. The full arbitrary-group conjecture and the recent archive status are not certified here.

Relation to earlier contributions. The earlier attempt explicitly proves split SL/Sp and a quaternion norm-one subcase, while discussing exceptional invariant-kernel obstacles and transfer in the background. Here a different primary theorem is matched to nonsplit outer type-A groups of arbitrary rank, and the product/Weil-restriction deduction is written out. The prior quaternion proof is not reused as the claimed scope.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- [1] Gregory Berhuy, Christoph Frings and Jean-Pierre Tignol, Serre’s conjecture II for classical groups over imperfect fields, author manuscript dated 15 September 2006, Introduction pp.1–2: definition of sd_p and main Theorem, with cases in Corollaries 2.6, 3.12, 4.5 and 5.5. Only the ^2A_n part, specialized to characteristic zero, is invoked. https://www.math.uni-bielefeld.de/lag/man/228.pdf
- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006799.txt


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

[1] Gregory Berhuy, Christoph Frings and Jean-Pierre Tignol, Serre’s conjecture II for classical groups over imperfect fields, author manuscript dated 15 September 2006, Introduction pp.1–2: definition of sd_p and main Theorem, with cases in Corollaries 2.6, 3.12, 4.5 and 5.5. Only the ^2A_n part, specialized to characteristic zero, is invoked. https://www.math.uni-bielefeld.de/lag/man/228.pdf
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006799.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
