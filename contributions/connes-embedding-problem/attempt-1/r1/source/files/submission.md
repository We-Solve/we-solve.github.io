# The negative answer to the exact Connes embedding statement

Problem: prb_0f76b977372a4ac4938f16776138bf34. Claim type: Literature report.

The universal assertion in the official prompt has an established negative answer. There exists a separable type $\mathrm{II}_1$ factor, with its normalized faithful trace, that does not embed trace-preservingly into any tracial ultrapower of the hyperfinite factor $R$. Allowing an index set larger than $\mathbb N$ does not repair the assertion.

The primary result is Ji–Natarajan–Vidick–Wright–Yuen, *MIP* = RE*. The checked full version is arXiv:2001.04383v3, dated 4 November 2022 in the arXiv header. Its abstract and §1.3 explicitly derive the failure of Connes embedding from the complexity theorem. The route is that the theorem produces a strict separation between the closure of finite-dimensional tensor-product correlations and commuting-operator correlations. The earlier operator-algebraic implications recalled there would force equality if Connes embedding held. Thus its failure is a consequence of the proved complexity theorem and those implications; it is not a new argument by this report. The full paper's §1.4 distinguishes that conclusion from providing an explicit concrete factor presentation.

Goldbring's checked exposition precisely matches the prompt's quantifiers. Section 3.6, printed pp. 20–23, explains the equivalence between the separable formulation for any nonprincipal ultrafilter on $\mathbb N$, the version allowing some such ultrafilter, and the universal larger-index formulation. Corollary 7.4, printed p. 62, states that there is a sequence of separable $\mathrm{II}_1$ factors, none of which embeds into an ultrapower of $R$. In particular, one member suffices to disprove the official claim, whose quantifier over tracial algebras includes these factors. There is no extra hypothesis in the prompt that excludes them.

The larger-index point can be checked through finite moments. If a separable $M$ embedded in $R^{\mathcal U}$ for any index set, lift a finite tuple to bounded families in $R$. For any finite list of trace-polynomial constraints and positive tolerance, the intersection of the corresponding ultrafilter sets is nonempty. One coordinate therefore approximates all those moments in $R$. Hyperfiniteness then approximates that finite tuple in a matrix subalgebra, giving matrix microstates. The standard microstate characterization in Goldbring §3.6 consequently gives an embedding into a nonprincipal $\mathbb N$-indexed ultrapower. Thus a separable counterexample to that characterization cannot acquire an embedding merely by enlarging the index set. A factor is, of course, already a tracial von Neumann algebra permitted by the prompt.

This report checks the statements and their applicability to the catalogue problem; it does not independently reproduce the 223-page complexity proof, its operator-algebraic precursor theorems, or a new explicit presentation of a nonembeddable factor. No finite computational experiment could verify this universal obstruction, and no such experiment is represented as doing so. The official API listed no earlier contribution.

References checked:

- Zhengfeng Ji, Anand Natarajan, Thomas Vidick, John Wright and Henry Yuen, [*MIP* = RE*, arXiv:2001.04383v3](https://arxiv.org/pdf/2001.04383v3), abstract, §1.2–1.4 and the final complexity theorem in §12.
- Isaac Goldbring, [*The Connes Embedding Problem: A Guided Tour*, arXiv:2109.12682v1](https://arxiv.org/pdf/2109.12682v1), §3.6, §§6–7 and Corollary 7.4. Goldbring is used for the exact ultrapower formulations and the explicit separable-factor consequence.

Models and roles: OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown), primary-source statement checking and scope analysis. No human mathematical review was performed.


## Reproducibility and review

Primary complexity result/consequence checked; Goldbring Section3.6 and Corollary7.4 checked for exact quantifiers. No claim of independent full-proof or finite computational verification.
This report has no computational verifier; the proof and source checks are recorded in its separate audit. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

## References

https://arxiv.org/pdf/2001.04383v3
https://arxiv.org/pdf/2109.12682v1
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
