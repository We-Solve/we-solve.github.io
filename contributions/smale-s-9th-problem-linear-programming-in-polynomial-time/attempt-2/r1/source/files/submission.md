# Smale's 9th Problem: Linear Programming in Polynomial Time

Claim type: **Literature report**.

Exact scope: Credited Tardos strong-polynomial LP applies to arbitrary dense integer constraint matrices with |A_ij|≤(m+n)^c for fixed c, with unrestricted rational right-hand sides/objectives; the coefficient-unrestricted question is not settled.

## The imported theorem and a distinct dense regime

Éva Tardos' 1986 primary paper [T] supplies a polynomial LP algorithm whose arithmetic-operation count depends polynomially on the dimension and the encoding of the constraint matrix, and is independent of the right-hand-side and objective magnitudes. Its bit complexity is polynomial in the full rational input length. We use this credited theorem, checked at the original publisher's abstract and bibliographic record; we have not reconstructed or independently certified its full proof. The 2024 primary paper [D], §1.1, separately states the matrix-dependent bound in terms of the maximum subdeterminant and explains the small-entry specialization. These sources are reported as literature, not as an algorithm newly discovered here.

Fix c. If A is integer and |A_ij|≤(m+n)^c, its dense binary encoding has O(mn·(1+c log(m+n+2))) bits. Substituting into the arithmetic-count guarantee gives a polynomial in m+n alone, for this fixed c. Arbitrarily large or small rational b and objective coefficients remain allowed. They affect the unavoidable input/output bit sizes and the cost per exact arithmetic operation, but do not increase the theorem's number of arithmetic operations. The theorem's polynomial bit bound also bounds every intermediate rational encoding by polynomial input length. These are the two separate requirements of the prompt's strong-polynomial definition.

This class permits coupled dense constraints. For example matrices with every entry ±1 can have a nonzero in every column of every row, so the result is not coordinate separability or the two-variable-per-inequality condition. Network and 0,±1 combinatorial matrices are included as smaller examples. Detecting zero inconsistent rows, infeasibility and an improving recession direction are part of solving the LP, rather than being inferred from existence of a bounded polytope or an optimal vertex.

## Why the hypothesis matters

Clearing denominators of an arbitrary rational A does not put it in this class. A row denominator product can create integer entries with magnitudes depending on the original coefficient encodings. The resulting matrix-dependent bound then still depends on those encodings and is not strongly polynomial in m+n. Likewise this theorem does not bound a geometric condition number merely by normalizing rows. The positive result concerns an explicit structural input restriction and credited matrix-dependent algorithm.

No exponent for the general Tardos arithmetic count is asserted here, and no executable implementation is supplied. This avoids turning an abstract-level theorem check into a claimed reproduction of a full strongly polynomial solver. The literal coefficient-unrestricted Smale question remains distinct.

## Earlier contributions and limits

Both listed aliases were read: one proves one-variable/independent-coordinate LP and exhibits enumeration/elimination obstacles; the other disproves a row-normalization conditioning argument and mentions 2VPI literature. The main added scope is the dense bounded-integer-matrix class through the precisely credited Tardos theorem, with the strong-polynomial versus bit-cost distinction explicit.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

Source-only literature report: no program is attached and no implementation of Tardos’ solver was executed. The small-entry encoding substitution and failure of arbitrary denominator clearing are the deductions checked here.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

Source-only literature report: no program is attached and no implementation of Tardos’ solver was executed. The small-entry encoding substitution and failure of arbitrary denominator clearing are the deductions checked here.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-52.txt
Éva Tardos, A Strongly Polynomial Algorithm to Solve Combinatorial Linear Programs, Operations Research 34(2) (1986), pp.250–256, primary publisher abstract and bibliographic record: https://pubsonline.informs.org/doi/abs/10.1287/opre.34.2.250?journalCode=opre . Full original proof not retrieved through the publisher PDF link; abstract-level dependence is reported honestly.
Dadush, Koh, Natura, Olver, Végh, A Strongly Polynomial Algorithm for Linear Programs with At Most Two Nonzero Entries per Row or Column, STOC2024 primary author copy, §1.1 matrix-dependent Tardos background and §1.3 model distinctions: https://www.laszlovegh.eu/papers/dadush-koh-natura-olver-vegh-stoc.pdf . This source is supplementary context, not a replacement for Tardos attribution.
Exact source versions, statements and uses are described in report.md and source_notes.md.
