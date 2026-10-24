# Attributed submission: Attempt: TOP-30006994

Source: https://github.com/We-Solve/research/issues/417

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006994

### Claim

Partial result

### Exact scope

The literal recognition problem is recursively enumerable, and is decidable if and only if there is a total computable b(N) bounding the least representing carrier size of every representable lattice of size at most N.

### Write-up

# Decidability is equivalent to a computable finite-carrier witness bound

Claim type: Partial result

Exact scope: The literal recognition problem is recursively enumerable, and is decidable if and only if there is a total computable b(N) bounding the least representing carrier size of every representable lattice of size at most N.

We first make the witness space genuinely finite at each carrier size, despite the prompt allowing arbitrary finitary operations. For an operation f:A^r→A and fixed values of all but one argument, include the resulting unary translation in a family U. A relation is preserved by f if it is preserved by all these translations: replace the related arguments one at a time and use transitivity. The reverse implication is immediate by fixing equal arguments. Thus the congruences of any algebra on a finite carrier A are exactly the equivalence relations preserved by its unary translations. At size s there are only s^s unary functions, so keeping all the distinct translations yields a finite unary algebra with the same congruence lattice. Constants and nullary operations impose no extra condition on an equivalence relation.

Consequently, for each s≥1 enumerate every subset U of the s^s unary maps. For each choice enumerate all partitions of {1,…,s}, test preservation by every map in U, and order the surviving equivalence relations by refinement. This is exactly Con(A), with meet intersection; testing isomorphism with an input finite lattice is a finite permutation search. These steps are grossly inefficient but terminate for every fixed s. Dovetailing or simply increasing s gives a uniform positive semidecision procedure: it halts precisely on the representable inputs. No negative stopping rule has yet been provided.

Suppose a total computable b(N) as in the scope exists. Given a lattice L of size N, enumerate the preceding finite witnesses only for s≤b(N). Accept if any matches, and reject after this finite enumeration otherwise. The assumed bound ensures rejection is correct. Thus the bound implies a total decision algorithm.

Conversely suppose a total decision algorithm D exists. To compute b(N), enumerate every order table on carriers of sizes one through N, retain just the lattice orders, and call D on each. There are finitely many tables and D halts on all. For the tables it declares representable, run the positive witness search until a representing unary algebra has been found for each. Every such search halts by the already proved semidecision statement. Take the largest of the finitely many carrier sizes found, and at least one. This defines a total computable b. Every isomorphism type of representable lattice of size at most N appeared among the tables, so b bounds its least carrier size. Taking the cumulative maximum makes b nondecreasing if desired.

This proves both directions, including the uniform quantifier over all input sizes. A noncomputable finite maximum exists at each N without any assumption, since there are only finitely many lattices of size at most N and each positive one has some finite witness. The issue is computing a uniform bound, not set-theoretic existence of maxima. Also an exhaustive positive search alone does not decide the prompt: on a nonrepresentable lattice it runs forever. Conversely disproving every proposed small carrier cutoff for one finite range would not establish undecidability.

No computable bound and no total recognition algorithm are constructed here. The result is an exact reduction exposing the missing effective input, valid for arbitrary finitary signatures rather than only a preselected finite signature.

Relation to earlier contributions. The listed prior announcement asserts undecidability and the absence of a computable carrier bound without a proof verified here. This report supplies a complete independent proof of the exact equivalence between those effective questions, and a fully specified uniform positive search, while making no unconditional decidability or undecidability claim.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006994.txt


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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006994.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
