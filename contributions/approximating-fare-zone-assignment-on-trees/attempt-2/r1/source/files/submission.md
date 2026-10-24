# Approximating Fare-Zone Assignment on Trees

Claim type: **Partial result**.

Exact scope: Exact hard-budget fare-zone optimization is NP-hard even on stars with edge congestion exactly three, all commodity weights and budgets one, and paths of length one or two.

## Exact reduction from subcubic independent set

Let H be a finite simple graph of maximum degree at most three. Build a star with a leaf v for each vertex of H, center o, and leaf edge e_v=ov. For each edge uv of H, introduce the commodity path u−o−v with weight one and budget one. For each v add 3−deg_H(v) copies of the one-edge commodity path ov, also weight one and budget one. Repeated commodities are allowed as separately listed demands; if a model forbids identical demand records, their weights can instead be summed, retaining congestion at most three and the same argument.

Let y_v∈{0,1} indicate selection of e_v. A two-edge commodity imposes y_u+y_v≤1. A one-edge commodity imposes only y_v≤1, already a domain constraint. Hence the feasible selections are exactly the independent sets of H. Every e_v belongs to exactly deg_H(v)+(3−deg_H(v))=3 listed paths, and its objective coefficient Σ_{i:e_v∈P_i}w_i is three. The fare-zone objective is consequently
Σ_i w_i Σ_{e∈P_i} y_e = 3 Σ_v y_v.
The optimum is exactly 3α(H), and the selected leaf edges directly recover an optimum independent set. The construction has |V(H)| star edges and at most |E(H)|+3|V(H)| demands, each with at most two edges. Its integer data are all zero/one except the accumulated profit three; encoding and decoding are polynomial in the original graph size.

The source hardness is the NP-completeness of NODE COVER on graphs of maximum degree three in Garey–Johnson–Stockmeyer [G], Theorem 2.6. Independent set on that same class is equivalent by taking complements of vertex covers, with α(H)=|V(H)|−τ(H). This supplies the NP-hard starting problem. No planarity hypothesis is used or imported; the paper’s planar NODE COVER theorem has a different degree bound. The new star instance is itself a tree. Thus even fixing congestion at three does not make exact optimization polynomial unless P=NP, and an exact algorithm parameterized only by congestion cannot be fixed-parameter tractable under that assumption.

A ratio-preserving approximation transfer also follows directly from the equality of objectives: any feasible solution with value at least OPT/r decodes to an independent set of size at least α(H)/r. No particular approximation-hardness constant is asserted here, since the cited NP-completeness alone does not supply one. The hard-budget formulation is essential; a model in which customers may drop out when a budget is exceeded is a different optimization problem.

## Earlier contributions and limits

The previous attempt proves a 1/k greedy approximation via a column-sparse exchange argument and shows an LP gap on a triangle of star demands. It contains no hardness reduction at fixed congestion. The independent-set equivalence adds that exact-complexity boundary.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30006109/verify.py). Source SHA-256: `1b5a0074a98797897da53d5c88fd0fec91c9ded2eae77656f3703321d011e41f`. The source is byte-identical to the reviewed and executed program.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006109.txt
M. R. Garey, D. S. Johnson, L. Stockmeyer, Some Simplified NP-Complete Graph Problems, Theoretical Computer Science 1 (1976), pp.237–267, Theorem 2.6 on NODE COVER with maximum-degree-three graphs; primary paper pp.260–262 read in the OCR-accessible copy: https://www.acs.uwinnipeg.ca/ychen2/journalpapers/Garey-Johnson-2maxsat.pdf . The earlier two-up scan did not justify our initially mistaken theorem/page reference; the final reference is this explicitly rechecked result . DOI https://doi.org/10.1016/0304-3975(76)90059-1 .
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30006109/verify.py (Used: exact previously reviewed program; SHA-256 1b5a0074a98797897da53d5c88fd0fec91c9ded2eae77656f3703321d011e41f).
