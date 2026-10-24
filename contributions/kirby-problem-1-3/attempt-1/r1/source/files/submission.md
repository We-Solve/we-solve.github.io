# A signature criterion for the summand-count unknotting bound

**Problem:** prb_6889dbfaa1f2497ab26c5b65d1c0b6ce

**Claim type:** Partial result

**Exact scope:** For any finite collection of knots whose nonzero ordinary signatures have the same sign, u(K_1#…#K_n)≥Σ|σ(K_i)|/2≥n; equality is proved for connected sums of positive two-strand torus knots.

## The criterion

Use the ordinary knot signature $\sigma(K)=\operatorname{sign}(V+V^T)$ for a Seifert matrix $V$. Reversing the convention changes every signature sign and has no effect on the following statement. Suppose each $\sigma(K_i)$ is nonzero and all have the same sign. Then

$$u(K_1\#\cdots\#K_n)\ge\frac12\sum_i|\sigma(K_i)|\ge n.$$

This proves part (a) on a large signature-detected class, allowing different summands and arbitrarily many of them. Knots of signature zero and mixtures of opposite signs are not covered by the summand-count conclusion. Part (b), concerning mutation, is not settled here.

## Why crossing changes control signature

Two diagrams differing in one crossing have a common oriented Seifert disk-and-band description. The disks are obtained from the same oriented smoothing. Changing the crossing changes the corresponding band by a full twist. If an integral cycle on the surface crosses this band algebraically $a$ times and another crosses it $b$ times, the difference in their Seifert pairings is $\pm ab$. Thus, in a common basis, their Seifert matrices differ by $\pm vv^T$ for an integral vector $v$; adding matching trivial handles if necessary does not change signature. The symmetrized forms differ by a rank-one positive or negative semidefinite matrix.

A rank-one semidefinite perturbation changes the positive and negative inertia indices by at most one each. Hence the signatures differ by at most two. Equivalently, restrict to the codimension-one kernel of $v^T$, on which the two quadratic forms agree, and apply the maximal-positive-subspace characterization of inertia. This argument permits singular forms as well, although a knot's ordinary symmetrized Seifert form is nonsingular.

The unknot has signature zero. A sequence of $u(K)$ crossing changes therefore gives $|\sigma(K)|\le2u(K)$. Under connected sum, take boundary-connected sums of Seifert surfaces; cycles from the two separated summands have zero mutual linking. The resulting Seifert matrix is block diagonal, so signatures add. Applying the crossing-change bound to the sum proves the first inequality. A nonzero knot signature is an even integer, because $V+V^T$ has even size and is nonsingular. This proves the final inequality by $n$.

## An exact unbounded family

For $q\ge1$, the knot $T_{2,2q+1}$ bounds the standard chain plumbing of $2q$ positive Hopf bands. With a consistent sign convention its symmetrized Seifert matrix has diagonal 2 and adjacent off-diagonal entries −1. This form is positive definite: its quadratic expression is

$$x_1^2+x_{2q}^2+\sum_{j=1}^{2q-1}(x_j-x_{j+1})^2.$$

It follows that $|\sigma(T_{2,2q+1})|=2q$, with common sign throughout this family. In the two-strand braid diagram, changing $q$ of the $2q+1$ crossings changes its exponent to one, whose closure is the unknot. Thus $u(T_{2,2q+1})\le q$. For a connected sum with parameters $q_1,\ldots,q_n\ge1$, carry out those changes in the separate summands. The signature lower bound and this upper construction match:

$$u\left(\#_{i=1}^nT_{2,2q_i+1}\right)=\sum_i q_i.$$

The use of a definite signature, rather than the mere nontriviality of each summand, is the exact boundary of this proof. A zero total signature cannot be promoted to a positive unknotting lower bound by this argument. The classical signature obstruction is also reviewed in Livingston’s checked primary paper; its stronger stable-genus constructions are not needed here.

## Checked references

- Charles Livingston, The stable 4-genus of knots, arXiv:0904.3054v4 (12 August 2010), §3.2–3.3, ordinary and Levine–Tristram signature bounds: https://arxiv.org/pdf/0904.3054


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no earlier contributions listed; primary theorem and hypotheses checked by browsing; displayed deduction checked algebraically. No program or formal verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Charles Livingston, The stable 4-genus of knots, arXiv:0904.3054v4 (12 August 2010), §3.2–3.3, ordinary and Levine–Tristram signature bounds: https://arxiv.org/pdf/0904.3054
Exact source versions, statements and uses are described in report.md and source_notes.md.
