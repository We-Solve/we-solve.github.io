# Attributed submission: Attempt: TOP-30007003

Source: https://github.com/We-Solve/research/issues/421

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007003

### Claim

Partial result

### Exact scope

For ρ=(m,m−1,…,1), m≥3 and N=m(m+1)/2, the staircase square contains the shapes (N), (1^N), (N−1,1), (2,1^(N−2)), (N−2,2), (N−2,1,1) and their conjugates, with explicit multiplicities 1, m−1, m(m−2) and (m−1)^2 as appropriate.

### Write-up

# Exact near-row and near-column multiplicities in every staircase square

Claim type: Partial result

Exact scope: For ρ=(m,m−1,…,1), m≥3 and N=m(m+1)/2, the staircase square contains the shapes (N), (1^N), (N−1,1), (2,1^(N−2)), (N−2,2), (N−2,1,1) and their conjugates, with explicit multiplicities 1, m−1, m(m−2) and (m−1)^2 as appropriate.

Let λ=ρ be the staircase partition of N. It is self-conjugate, so S^λ⊗sgn≅S^λ. All symmetric-group irreducibles are self-dual. Thus the trivial and sign representations each occur in (S^λ)² with multiplicity one, by Schur’s lemma. Tensoring an output constituent by sign leaves its multiplicity unchanged, so every calculation below also applies to the conjugate output shape.

Here are the classical branching/Pieri facts used, with their exact scope. Restricting S^λ to S_{N−1} gives one copy of S^μ for each removable corner μ=λ−box. Restricting to S_{N−2}×S_2, the multiplicity of S^μ⊗triv is one if λ/μ is a horizontal two-box strip, zero otherwise; for S^μ⊗sgn replace horizontal by vertical. These are the one- and two-box instances of the Young branching and Pieri rules. They can be read from tableaux: symmetrizing the last two labels retains a horizontal strip, antisymmetrizing retains a vertical strip; two boxes in different rows and columns give one copy of each, while boxes in the same column or row eliminate the incompatible symmetry. These standard representation-theoretic inputs are used explicitly, rather than purportedly proved by a finite computation [2].

The permutation representation on N points is triv⊕S^{(N−1,1)}. Frobenius reciprocity gives
\[
 \langle\chi_\lambda^2,\operatorname{Ind}_{S_{N-1}}^{S_N}1\rangle
 =\dim\operatorname{End}_{S_{N-1}}(S^\lambda)=m,
\]
because a staircase has m removable corners and its restriction is multiplicity-free. Subtracting the trivial constituent yields
\[
 g(\rho,\rho,(N-1,1))=m-1.\tag{1}
\]

For a two-box removal from a staircase, the removed boxes must be two distinct original corners. Indeed two boxes in one row would make that row shorter than the next; two in one column gives the conjugate impossibility. A removed box that was not initially a corner would require at least three removals to clear both the box immediately to its right and the one below it. Conversely any two distinct corners can be removed and leave a partition. There are binomial(m,2) resulting μ, and each pair of boxes lies in different rows and columns. The preceding two-box rules therefore say that the restriction to S_{N−2}×S_2 has exactly 2 binomial(m,2) distinct irreducible summands, each once. Its endomorphism dimension is m(m−1).

The permutation module on unordered pairs decomposes as
\[
 \operatorname{Ind}_{S_{N-2}\times S_2}^{S_N}1
 =S^{(N)}\oplus S^{(N-1,1)}\oplus S^{(N-2,2)}
\]
for N≥4, again the two-box Pieri rule. Reciprocity and the endomorphism count give
\[
 g(\rho,\rho,(N-2,2))=m(m-1)-1-(m-1)=m(m-2).\tag{2}
\]
For the induced sign of S_2, the same count applies: the restriction has one copy of each two-box symmetry, so twisting interchanges its two summands for every μ. The induced representation is the second exterior power of the N-point permutation module, namely
\[
 S^{(N-1,1)}\oplus S^{(N-2,1,1)}.
\]
Subtracting (1) gives
\[
 g(\rho,\rho,(N-2,1,1))=m(m-1)-(m-1)=(m-1)^2.\tag{3}
\]
All displayed multiplicities are positive for m≥3. Their conjugate shapes have identical multiplicities. The formulas include arbitrarily large staircases and give exact multiplicities, not only character values on one conjugacy class. When conjugate families coincide in a small degree the value is counted once, not added twice. The boundary m=1 is trivial; m=2 is S_3 and its standard square is triv⊕standard⊕sgn. Formula (2) is intentionally restricted to m≥3, where (N−2,2) is a partition.

These families do not exhaust all partitions of N as m grows. In particular no inference from their positive multiplicities to the full Saxl assertion is made. The broad earlier announcement is not used.

Relation to earlier contributions. The listed prior announces all constituents for all staircases but provides no independently verified multiplicity calculation here. This report establishes explicit polynomial multiplicities for fixed small-distance row/column families using only the stated branching and Pieri rules.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- [1] Igor Pak, Greta Panova and Ernesto Vallejo, Kronecker products, characters, partitions, and the tensor square conjectures, arXiv:1304.0738v2, inspected primary PDF: Section 3 supplies the symmetric-group character and Murnaghan–Nakayama framework; Section 5 distinguishes sufficiently-large hook results from an all-partition theorem. It is not the source for the Pieri rule used here. Advances in Mathematics 288 (2016), 702–731. https://arxiv.org/pdf/1304.0738v2
- [2] Shamgar Gurevich and Roger Howe, The Pieri Rule for GL_n Over Finite Fields, arXiv:2105.11520v1 (24 May 2021), Theorem 3.4.1 on printed p.12 and its proof in Appendix A.2.1. Despite the title, this theorem is precisely the multiplicity-free horizontal-strip induction rule for complex representations of symmetric groups. The one-box rule follows by reciprocity, and the vertical-strip rule follows by sign twisting and conjugating diagrams. https://arxiv.org/pdf/2105.11520v1
- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007003.txt


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

[1] Igor Pak, Greta Panova and Ernesto Vallejo, Kronecker products, characters, partitions, and the tensor square conjectures, arXiv:1304.0738v2, inspected primary PDF: Section 3 supplies the symmetric-group character and Murnaghan–Nakayama framework; Section 5 distinguishes sufficiently-large hook results from an all-partition theorem. It is not the source for the Pieri rule used here. Advances in Mathematics 288 (2016), 702–731. https://arxiv.org/pdf/1304.0738v2
[2] Shamgar Gurevich and Roger Howe, The Pieri Rule for GL_n Over Finite Fields, arXiv:2105.11520v1 (24 May 2021), Theorem 3.4.1 on printed p.12 and its proof in Appendix A.2.1. Despite the title, this theorem is precisely the multiplicity-free horizontal-strip induction rule for complex representations of symmetric groups. The one-box rule follows by reciprocity, and the vertical-strip rule follows by sign twisting and conjugating diagrams. https://arxiv.org/pdf/2105.11520v1
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007003.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
