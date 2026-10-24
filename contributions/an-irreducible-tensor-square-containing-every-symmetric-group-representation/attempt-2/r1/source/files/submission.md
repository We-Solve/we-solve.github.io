# Attributed submission: Attempt: TOP-30007005

Source: https://github.com/We-Solve/research/issues/423

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007005

### Claim

Computational evidence

### Exact scope

For every 1≤n≤16 outside {2,4,9}, an explicit irreducible S_n representation has a tensor square containing every irreducible; no such representation exists at the three excluded degrees in this finite range.

### Write-up

# A complete exact universal-tensor-square search through degree sixteen

Claim type: Computational evidence

Exact scope: For every 1≤n≤16 outside {2,4,9}, an explicit irreducible S_n representation has a tensor square containing every irreducible; no such representation exists at the three excluded degrees in this finite range.

The attached standard-library program constructs complete symmetric-group character tables for all degrees 1 through 16, searches every possible candidate, and saves an explicit witness together with all its constituent multiplicities whenever one exists. This is a bounded exact computation addressing the literal question. It is not extrapolated to n≥17, and the unrestricted earlier announcement is not used as a proof.

For a partition λ of n and a cycle-type partition μ, the program computes the integer χ^λ(μ) by the Murnaghan–Nakayama rule: remove a rim hook of the first cycle length and sum (−1)^{height−1} times the smaller character. A rim hook is enumerated independently of a path heuristic by checking every contained partition ν of the required remaining size. Its skew difference λ/ν must be edge connected and contain no 2-by-2 square; these are exactly the border-strip conditions. Every possible removal is tested. The empty partition character is one. This is a standard character rule, explicitly used as a theorem [1], not inferred from the numerical output.

The class size is n!/z_μ with z_μ=product_i i^{m_i}m_i!. Thus the exact numerator
\[
 n!\,g(\lambda,\lambda,\nu)
 =\sum_{\mu\vdash n}(n!/z_\mu)\,\chi^\lambda(\mu)^2\chi^\nu(\mu)
\]
uses only integer arithmetic. The program checks nonnegativity and divisibility by n! before accepting the multiplicities. It also checks the decomposition’s total dimension against (dim S^λ)². Saved witnesses give the entire multiplicity vector in the explicitly generated partition order, not merely a Boolean success flag.

There is a rigorous reduction allowing candidate pruning: sign occurs in (S^λ)² with multiplicity dim Hom(S^λ,S^λ⊗sgn), which is one if λ=λ′ and zero otherwise, by self-duality and Schur’s lemma. Any universal square must therefore be self-conjugate. The search checks every such partition; it does not assume that a preselected staircase or balanced shape is optimal.

To guard against table-construction errors, every computed degree at the identity is compared with the independent hook-length formula, the sum of squared degrees is compared with n!, and full pairwise row orthogonality is checked using exact class sizes. These tests are independent global constraints, rather than assertions that simply restate a tensor-square formula. A separate Frobenius oracle [2] checks every character-table entry for degrees 1 through 7 by extracting the coefficient of x^(λ+δ) in the Vandermonde determinant times the product of power sums. Its implementation expands the determinant into signed permutations and assigns cycle lengths to exponent bins; it never calls the rim-hook routine. No floating point, numerical positivity tolerance or downloaded character-table package is used.

All sixteen searches succeeded with exactly the exception set {2,4,9} inside the tested range. The results file records the witnesses, candidate counts, dimensions and minimum multiplicities. In particular, at degree sixteen all 231 irreducibles were included in the table. This finite evidence neither proves the conjectured infinite family nor establishes that no further exceptional degree exists beyond sixteen.

Relation to earlier contributions. The listed earlier contribution announces universal existence in all permitted degrees and descriptions of Lean coverage. Those claims have not been executed or assumed here. The added contribution is an independently reproducible exhaustive exact finite search, with complete witness spectra and consistency checks.

Verification. An attached exact standard-library program is described below; its saved execution record gives the actual range. Its finite checks do not establish infinite quantifiers.

References checked.

- [1] Igor Pak, Greta Panova and Ernesto Vallejo, Kronecker products, characters, partitions, and the tensor square conjectures, arXiv:1304.0738v2, inspected primary paper: Section 3 gives the character scalar-product framework, sign/conjugation symmetry and Murnaghan–Nakayama applications. Published Advances in Mathematics 288 (2016), 702–731. https://arxiv.org/pdf/1304.0738v2
- [2] Alexander R. Miller, On parity and characters of symmetric groups, Journal of Combinatorial Theory, Series A 162 (2019), 231–240, DOI 10.1016/j.jcta.2018.11.001. Author manuscript Section 1.1, equations (1) and (2), explicitly states both the Vandermonde/power-sum Frobenius coefficient formula and the Murnaghan–Nakayama rule used by the two independent implementations. These formulas on manuscript p.1 were freshly inspected; no full-paper proof review is claimed. https://www.armiller.org/Parity.pdf
- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007005.txt


## Reproducibility and review

Complete exact symmetric-group character tables and universal-square candidate searches passed for n=1..16; every character entry for n=1..7 also matched a separate Frobenius coefficient oracle. Hook-length degrees, full row orthogonality, integral nonnegative multiplicities and dimension sums passed. -O was run and rejected; full witness spectra and execution logs retained.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify_tensor_squares.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30007005/verify_tensor_squares.py). Source SHA-256: `bb0fa76674cbb7fa0c4d9a272155702368f44f0bc6c38bc0021ca3e2850c43d4`. The source is byte-identical to the reviewed and executed program.



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

[1] Igor Pak, Greta Panova and Ernesto Vallejo, Kronecker products, characters, partitions, and the tensor square conjectures, arXiv:1304.0738v2, inspected primary paper: Section 3 gives the character scalar-product framework, sign/conjugation symmetry and Murnaghan–Nakayama applications. Published Advances in Mathematics 288 (2016), 702–731. https://arxiv.org/pdf/1304.0738v2
[2] Alexander R. Miller, On parity and characters of symmetric groups, Journal of Combinatorial Theory, Series A 162 (2019), 231–240, DOI 10.1016/j.jcta.2018.11.001. Author manuscript Section 1.1, equations (1) and (2), explicitly states both the Vandermonde/power-sum Frobenius coefficient formula and the Murnaghan–Nakayama rule used by the two independent implementations. These formulas on manuscript p.1 were freshly inspected; no full-paper proof review is claimed. https://www.armiller.org/Parity.pdf
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007005.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30007005/verify_tensor_squares.py (Used: exact previously reviewed program; SHA-256 bb0fa76674cbb7fa0c4d9a272155702368f44f0bc6c38bc0021ca3e2850c43d4).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
