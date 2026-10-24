# Attributed submission: Attempt: TOP-30000183

Source: https://github.com/We-Solve/research/issues/367

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30000183

### Claim

Partial result

### Exact scope

For every Artin algebra Morita equivalent to a finite product of local Artin algebras, the little finitistic dimension is zero and every nonzero finite module has Hom(M,A)≠0.

### Write-up

# Both literal assertions hold for Artin algebras Morita equivalent to products of local algebras

Claim type: Partial result

Exact scope: For every Artin algebra Morita equivalent to a finite product of local Artin algebras, the little finitistic dimension is zero and every nonzero finite module has Hom(M,A)≠0.

The literal prompt contains two questions, despite its title: finite finitistic dimension and the existence of a nonzero Ext^n(M,A). We answer both for the declared class.

First let A be a local Artin algebra with Jacobson radical J. Its quotient A/J is a division ring and J is nilpotent. Every finitely generated projective left module is free: lift a basis of P/JP to get a surjection A^r→P by Nakayama, split it by projectivity, and apply Nakayama to the kernel, whose reduction modulo J is zero. Projective covers and minimal projective resolutions exist over Artin algebras; explicitly, repeatedly lift a basis of the top of the current syzygy. The matrices in such a minimal resolution have entries in J.

Suppose a finite module had finite positive projective dimension d. The last nonzero differential A^r→A^s in a minimal resolution would be injective, with r>0 and all entries in J. Choose 0≠u∈A with uJ=0: if J≠0 take any nonzero element in its last nonzero power, and if J=0 take u=1. For left free modules write the image of a basis vector as sum a_i e_i with a_i∈J. Left linearity sends u times that basis vector to sum (u a_i)e_i=0. This is a nonzero kernel vector, contradiction. Therefore every finite-projective-dimension module is projective, and findim A=0, including the semisimple local case.

Now let 0≠M be finitely generated. Its top M/JM is nonzero by Nakayama and has the unique simple left quotient S=A/J. This simple embeds into the left regular module A: choose 0≠v with Jv=0, again from the last nonzero radical power or v=1 when J=0. The map A/J→Av sending a+J to av is nonzero, well-defined and injective because A/J is simple. Composing M↠S↪A yields a nonzero homomorphism. Thus the prompt’s Ext condition already holds at n=0.

For finite products, a nonzero module has a nonzero component, and both the projective-resolution calculation and the nonzero Hom construction apply componentwise. The little finitistic dimension of a finite product is the maximum of the component values, hence zero.

Finally these two conclusions pass through a Morita equivalence. It preserves finitely generated modules, projectives and projective dimensions. The image P of the old regular module is a finitely generated projective generator. Such a P is a summand of a finite direct sum of the new regular module B, and B is a summand of a finite direct sum of P. Consequently Hom(M,P)≠0 if and only if Hom(M,B)≠0: each implication follows by applying Hom to the appropriate split inclusion and projection. Transporting the local result therefore gives the stated class, including full matrix algebras over local algebras and products of such matrix algebras.

For a general Artin algebra there are several simple types, and a simple top need not embed into the regular module. Nor are all indecomposable projectives free over a single local algebra. These are exactly the features used above, so neither unrestricted assertion is claimed. The broader degree-zero criterion is that every simple left module embeds into A (the left Kasch condition); the simple-top composition proves that criterion equivalent to Hom(M,A)≠0 for every nonzero finite M, but no finitistic-dimension conclusion is inferred from that criterion alone.

Relation to earlier contributions. The sole prior contribution summarizes broad unverified negative OpenAI claims. It is not used as a theorem. Here both clauses of the literal prompt are treated, with a complete radical/minimal-resolution proof for the stated Morita class.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30000183.txt


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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30000183.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
