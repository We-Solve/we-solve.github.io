# The literal isotopy rigidity conclusion holds for closed oriented surfaces

Problem: TOP-30006851

Claim type: Literature report

Exact scope: For every smooth closed connected oriented surface with two negatively curved metrics, equality of all marked geodesic lengths implies a smooth isometry isotopic to the identity.

Theorem1.1 of Guillarmou--Lefeuvre--Paternain, Marked length spectrum rigidity for Anosov surfaces, arXiv:2303.12007v5 (September6,2024), states injectivity of the marked-length map on Anosov metrics modulo diffeomorphisms isotopic to the identity. In its explicit formulation, equal marked lengths give a smooth phi with phi* g_1=g_2 and phi isotopic to the identity. This is a substantial imported theorem, and its microlocal and complex-geometric proof is not claimed as a new proof here.

Apply it with g_1=h and g_2=g from the literal prompt. A smooth negatively curved metric on a closed surface has Anosov geodesic flow: compactness gives sectional curvature bounded above by a negative constant, and the stable/unstable Jacobi-field splitting provides uniform exponential contraction/expansion. This standard implication is also explicitly recalled in the primary paper's introductory definition. Its hypotheses therefore apply to both metrics. Negative curvature on a closed oriented surface forces genus at least two by Gauss--Bonnet, which is consistent with the theorem's setting.

The theorem returns exactly phi* h=g with phi isotopic to identity, so neither the marking nor the conclusion is weakened. The nontrivial free-homotopy classes in the prompt are the classes on which the theorem's marked lengths are defined. Interchanging the two metrics only changes the direction of the isometry; the inverse of an isotopy is still an isotopy if needed.

This proves a complete dimension-two orientable subclass, including every negatively curved pair there, with no pointwise ordering, common conformal class or closeness assumption. It does not assert the original all-dimensional formulation: the earlier archived high-dimensional isotopy obstruction has different topology and remains separate. We also make no claim here for nonorientable surfaces by passing to a cover, because descent of a marking-preserving isometry would require an additional argument. The cited v5 theorem is the primary proof source actually inspected; bibliographic knowledge of Otal's 1990 theorem is not substituted for a freshly read original manuscript.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006851.txt
https://arxiv.org/pdf/2303.12007v5 — Guillarmou, Lefeuvre and Paternain, Theorem1.1 and introductory Anosov definition; v5 September6,2024.
Exact source versions, statements and uses are described in report.md and source_notes.md.
