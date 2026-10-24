# The unstabilized finite-group GLR criterion for trivial fundamental group

Problem: TOP-30006906

Claim type: Literature report

Exact scope: Stolz’s theorem settles the exact smooth spin existence criterion for every simply connected closed manifold of dimension >=5. The Rosenberg index in the prompt is identified with the ordinary real alpha invariant in this subcase; a dimension-by-dimension criterion follows.

## The theorem and the index identification

Stolz [1, Theorem A; 2, Theorem 1.6] proves that a closed simply connected smooth spin n-manifold, n>=5, admits a metric of strictly positive scalar curvature if and only if its real Dirac alpha invariant vanishes in KO_n(point). We report this established theorem, including its unstabilized sufficiency direction.

When G is the trivial group, its real reduced group C*-algebra is R. The universal cover of M is M itself, and the Mishchenko bundle in the prompt is the trivial R-line bundle. The twisted Dirac operator is consequently the ordinary real Clifford-linear spin Dirac operator. Thus the prompt's class in KO_n(C*_r(G;R)) is exactly Stolz's alpha(M), with no comparison map that could lose information.

The theorem therefore proves both directions of the literal target for every input with trivial fundamental group. No product manifold is introduced before finding the metric.

## A computable form of the obstruction in this class

Real Bott periodicity gives the following groups, indexed by n modulo eight:

| n mod 8 | KO_n(point) | Criterion in this simply connected spin class |
|---|---|---|
| 0 | Z | the integral real Dirac index vanishes |
| 1 | Z/2 | the mod-two real Dirac index vanishes |
| 2 | Z/2 | the mod-two real Dirac index vanishes |
| 3 | 0 | every such M admits positive scalar curvature |
| 4 | Z | the integral real Dirac index vanishes |
| 5 | 0 | every such M admits positive scalar curvature |
| 6 | 0 | every such M admits positive scalar curvature |
| 7 | 0 | every such M admits positive scalar curvature |

In dimensions divisible by four, the zero condition can equivalently be tested by vanishing of the A-hat genus. The comparison factor in dimension four modulo eight does not affect a zero test. In dimensions one and two modulo eight, a rational characteristic number alone does not detect the mod-two index. In particular one may not conclude automatic vanishing simply because the rational A-hat number is absent in those dimensions.

The zero-target rows follow logically without any further geometry: alpha(M) lies in a zero group, so it is zero, and Stolz's theorem supplies a positive-scalar-curvature metric. The assumption n>=5 still applies to every row. For instance the row labeled 1 first concerns dimensions 9,17,... in this report, not arbitrary one-dimensional manifolds.

## Scope, added value, and limitations

The earlier exploration proves the index obstruction for all finite groups and discusses a sufficient bordism certificate. The present report establishes the converse for the full simply connected spin class through Stolz's theorem, checks the target-algebra equality, and records the complete eight-periodic decision on its real index.

For a nontrivial finite G, the target algebra has additional representation-theoretic components. Stolz's simply connected theorem does not identify which such components suffice or construct a metric downstairs from one upstairs. The table is therefore not asserted for arbitrary finite fundamental groups. Nor does it cover nonspin or four-dimensional manifolds, where the hypotheses or the conclusion can differ.

The source theorem is a smooth existence theorem, not an explicit formula for a metric on every M. Its bordism and stable-homotopy proof has not been reimplemented here; no computational certificate for an unspecified manifold's alpha invariant is claimed. This report credits the known theorem and provides the exact specialization requested by the prompt.

## Checked references

1. S. Stolz, Simply connected manifolds of positive scalar curvature, Annals of Mathematics 136 (1992), 511–540, Theorem A. Publisher bibliographic record: https://annals.math.princeton.edu/1992/136-3/p02
2. S. Stolz, Positive scalar curvature—constructions and obstructions, arXiv:2202.05904v1, Theorems 1.2, 1.6 and Section 2.2. https://arxiv.org/pdf/2202.05904v1


## Reproducibility and review

Proof/source audit only; no computational verification of the external theorem was performed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

S. Stolz, Simply connected manifolds of positive scalar curvature, Annals of Mathematics 136 (1992), 511–540, Theorem A. Publisher bibliographic record: https://annals.math.princeton.edu/1992/136-3/p02
S. Stolz, Positive scalar curvature—constructions and obstructions, arXiv:2202.05904v1, Theorems 1.2, 1.6 and Section 2.2. https://arxiv.org/pdf/2202.05904v1
Exact source versions, statements and uses are described in report.md and source_notes.md.
