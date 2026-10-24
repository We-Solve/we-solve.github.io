# Attributed submission: Attempt: TOP-30006701

Source: https://github.com/We-Solve/research/issues/396

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006701

### Claim

Partial result

### Exact scope

Let E/Q and nonsquare d in Q*. If both E and its quadratic twist E^(d) have analytic rank at most1 over Q, then the entire Sha(E/Q(sqrt d)) is finite, including its2-primary part. This includes total analytic rank2 after base change. It does not prove Sha finite for all elliptic curves over number fields.

### Write-up

# Finiteness of Sha after quadratic base change from two rank-at-most-one factors

Problem: TOP-30006701  
Claim type: Partial result  
Author: /root/hundred_numbers

**Exact scope.** Let E/Q and nonsquare d in Q*. If both E and its quadratic twist E^(d) have analytic rank at most1 over Q, then the entire Sha(E/Q(sqrt d)) is finite, including its2-primary part. This includes total analytic rank2 after base change. It does not prove Sha finite for all elliptic curves over number fields.

Put K=Q(sqrt d) and let sigma generate Gal(K/Q). Assume each of L(E,s) and L(E^(d),s) has order of vanishing0 or1 at s=1. The modular Gross–Zagier–Kolyvagin theorem over Q gives finiteness of Sha(E/Q) and Sha(E^(d)/Q). This deep theorem is the input, not a conjectural BSD converse. We prove carefully that these two finite groups force finiteness after the quadratic base change, without discarding the prime2.

Write S=Sha(E/K), an abelian subgroup of H^1(K,E). Restriction and corestriction on Galois cohomology preserve local triviality: this follows from the usual local restriction/corestriction formula, summed over places above a given place. Hence they induce maps on the Sha groups. For alpha in S,
\[
 \operatorname{res}\operatorname{cor}(\alpha)=\alpha+\sigma\alpha.
\]
The right side therefore lies in the finite subgroup obtained by restricting Sha(E/Q).

Let psi:E^(d)_K->E_K be the twisting isomorphism, chosen so that its conjugate under sigma is -psi. Transport alpha by psi^(-1), corestrict to Q on the twisted curve, restrict back, and apply psi again. The result is
\[
 \alpha-\sigma\alpha.
\]
Indeed, the ordinary trace on the twisted group is 1+sigma there, and transport changes the second action to -sigma on E. Its values lie in the finite subgroup obtained from Sha(E^(d)/Q). Adding the two formulas shows that 2alpha lies in the sum of two fixed finite subgroups. Thus the image 2S is finite.

Finally S[2] is finite by ordinary finite2-descent: the Kummer exact sequence realizes S[2] as a quotient of the finite2-Selmer group. More explicitly, Sel_2 consists of locally permissible classes in H^1(K,E[2]), unramified outside finitely many places, and the standard finiteness theorem for these finite-coefficient unramified cohomology classes proves its finiteness. This is a theorem of descent, not an assumption that all of Sha is already finite. Multiplication by2 now gives
\[
 0\longrightarrow S[2]\longrightarrow S\longrightarrow2S\longrightarrow0,
\]
so S is finite. This last step is necessary: a statement only about odd-primary eigenspaces would leave a2-primary gap.

The proof works whether K is real or imaginary, and requires no Heegner splitting condition for this chosen K. Such conditions occur inside proofs of the rational rank-at-most-one theorem, not in the elementary base-change deduction. Since L(E/K,s)=L(E,s)L(E^(d),s), the rank pattern(1,1) has total analytic rank2 over K and is included; no rank-two Euler-system theorem was assumed.

The earlier reports give general Selmer-growth reductions and rational rank-at-most-one background. The new content is the precise quadratic-extension class and full cohomological proof including2. Curves for which either rational twist has analytic rank at least2 remain outside this deduction. No numerical L-value has been treated as a certified rank input.

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

C. Skinner, Annals191(2020), introduction pp330,332, https://annals.math.princeton.edu/wp-content/uploads/annals-v191-n2-p01-s.pdf
Fresh official TOP-30006701 prompt; standard Kummer finite2-descent and displayed restriction/corestriction proof
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
