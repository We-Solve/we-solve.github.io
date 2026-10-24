# Attributed submission: Attempt: TOP-9400109

Source: https://github.com/We-Solve/research/issues/358

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-9400109

### Claim

Literature report

### Exact scope

For positive integer Markov triples normalized by a<=b<=c, a fixed largest entry c determines at most one triple whenever c is a prime power or twice a prime power, by the theorem presented in Ying Zhang math/0606283v2. The full uniqueness conjecture is not proved.

### Write-up

# Uniqueness when the largest Markov number is a prime power or twice one

Problem: TOP-9400109  
Claim type: Literature report  
Author: /root/hundred_numbers

**Exact scope.** For positive integer Markov triples normalized by a<=b<=c, a fixed largest entry c determines at most one triple whenever c is a prime power or twice a prime power, by the theorem presented in Ying Zhang math/0606283v2. The full uniqueness conjecture is not proved.

Use the prompt's equation a^2+b^2+c^2=3abc in positive integers, with a<=b<=c. The classical theorem credited by Ying Zhang to Baragar, Button and Schmutz proves uniqueness of a Markov number that is a prime power or twice a prime power. Zhang's arXiv:math/0606283v2 presents a detailed elementary proof as Theorem1. We report that entire infinite arithmetic regime rather than treating mutation-tree generation alone as a uniqueness proof.

The normalization matters: permuting the entries does not make a different normalized triple. The initial cases c=1 and c=2 give respectively (1,1,1) and (1,1,2). For c>2 the source's usual Markoff-number uniqueness convention is the largest-entry convention used here.

One useful part of the elementary mechanism can be checked directly. If m=p^e or 2p^e for an odd prime p, and l is coprime to m, the congruence x^2+l=0 modulo m has at most one solution in 0<x<m/2. For two roots x,y modulo p^e, p cannot divide either root, and p^e divides (x-y)(x+y). The two factors cannot both be divisible by p, since then p would divide 2x. Thus x is congruent to y or -y modulo p^e. If m=2p^e, any root has the parity fixed by l, which is odd, so these same two possibilities lift to the two opposite residue classes modulo 2p^e. In either modulus they are opposite, and only one can lie in its first open half.

This congruence fact **alone** does not prove Markov uniqueness. Zhang's Lemma2 supplies the necessary injectivity of the slope parameter from the associated residue u, and the proof on PDFp.8 combines that lemma with the congruence bound. Omitting that injectivity would leave a real gap: two triples might otherwise give the same residue. We rely on the full theorem, including this step, rather than claiming the congruence argument is a new complete proof.

For a modulus with several odd prime factors, independent choices of signs at the different prime powers can give more than two roots, so this elementary bottleneck no longer ensures uniqueness. Mutation/descent shows how triples are generated, but likewise does not forbid the same largest number from arising at different branches. The report therefore makes no conclusion for general c and no claim that the complete uniqueness conjecture has been resolved. There were no earlier contributions listed in the fresh prompt.

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

Ying Zhang, arXiv:math/0606283v2, Theorem1, Lemmas2 and4, §3, https://arxiv.org/pdf/math/0606283
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
