# Asymptotically full rainbow coverage in every matroid, with the deficit quantified

Claim type: Literature report

Exact scope: For every ε>0 and all sufficiently large ranks n, n supplied bases admit at most n disjoint rainbow independent sets covering at least (1−ε)n² labelled occurrences; all but sqrt(ε)n original bases lose at most sqrt(ε)n occurrences.

The imported result is Alexey Pokrovskiy’s Theorem 1 [1]: for n disjoint bases in a rank-n matroid there are n−o(n) disjoint rainbow independent sets, each of size n−o(n). Both occurrences of o(n) matter. This theorem does not assert n−o(n) full bases, still less an exact decomposition into n full bases. The primary paper is single-authored; the multi-author attribution embedded in the catalogue is not used.

Repeated underlying elements in the literal prompt cause no restriction. Replace every occurrence by a labelled parallel copy, and declare a set of copies independent if it has no repeated underlying element and its projection is independent. Heredity is immediate. For augmentation, independent sets of different sizes have projected independent sets of those sizes; an augmenting underlying element from the larger projection has a copy in the larger set, and adding that copy preserves independence. Thus these copies form a rank-n matroid, and the input bases are now disjoint as required by the theorem.

Fix 0<ε<1 and choose δ=ε/3. The primary asymptotic theorem supplies n_0(δ) such that for n≥n_0 one can take at least (1−δ)n sets of size at least (1−δ)n. Their disjoint union has at least
\[
 (1-\delta)^2n^2\ge(1-\varepsilon)n^2
\]
occurrences. Empty sets may be appended to make a family of exactly n independent rainbow sets, without changing its union. At most εn² input occurrences remain unused. If more than sqrt(ε)n of the original bases each had more than sqrt(ε)n unused occurrences, the total deficit would exceed εn². Therefore all but at most sqrt(ε)n rows retain at least (1−sqrt(ε))n occurrences. This is a deterministic consequence of the imported theorem, not an assertion of simultaneous exact completion.

For ε≥1 the covering assertion is vacuous; the substantive range is the one handled above. No explicit numerical n_0 is claimed from this qualitative version. An unfilled occurrence can require global exchanges to place, so the deficit estimate does not prove that all remaining holes can be absorbed. The exact rainbow-basis conjecture of the prompt remains beyond this report.

Relation to earlier contributions. The prior report explicitly proves rank-two and partition-matroid cases and mentions the asymptotic result only as background. Here the primary theorem is checked in its exact two-deficit form and converted into a uniform all-matroid occurrence-coverage and row-deficit statement, including the labelled-copy hypothesis.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- [1] Alexey Pokrovskiy, Rota’s Basis Conjecture holds asymptotically, arXiv:2008.06045v1, 13 August 2020, Theorem 1, p.2; both the number and the size are n−o(n), and only independence is asserted. The long combinatorial proof is not independently reproduced. https://arxiv.org/pdf/2008.06045
- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1457.txt


## Reproducibility and review

Source-only: literal prompt, prior full texts and stated references checked; written deduction audited by author, without formal or human verification.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

[1] Alexey Pokrovskiy, Rota’s Basis Conjecture holds asymptotically, arXiv:2008.06045v1, 13 August 2020, Theorem 1, p.2; both the number and the size are n−o(n), and only independence is asserted. The long combinatorial proof is not independently reproduced. https://arxiv.org/pdf/2008.06045
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1457.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
