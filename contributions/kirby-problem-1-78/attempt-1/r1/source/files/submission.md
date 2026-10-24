# A uniform quadratic upper bound on unknot crossing height

**Problem:** TOP-2737

**Claim type:** Literature report

**Exact scope:** For every n≥1, the prompt’s h(n) satisfies n≤h(n)≤2(n+1)² by Dynnikov’s Theorem2; h(0)=0. The result controls every intermediate ordinary diagram, rather than only rectangular presentations.

## A height bound with the literal quantifiers

Dynnikov’s Theorem 2 states that an ordinary planar diagram $D$ of the unknot can be transformed to the trivial diagram through Reidemeister moves with

$$c(D_i)\le2(c(D)+1)^2$$

for every intermediate diagram. Thus the minimax height in the prompt obeys

$$c(D)\le h(D)\le2(c(D)+1)^2.$$

Taking the maximum over all $n$-crossing unknot diagrams gives $n\le h(n)\le2(n+1)^2$ for $n\ge1$. At $n=0$, the diagram is already trivial, so the empty sequence proves $h(0)=0$. The displayed quadratic bound is not claimed sharp.

## Why monotonicity of another presentation is not enough by itself

A rectangular diagram consists of horizontal and vertical segments, with all vertical segments overcrossing at intersections and with distinct heights and horizontal positions. Its arc complexity counts its vertical segments. Dynnikov’s main theorem gives a simplification of unknot arc presentations by exchanges and destabilizations without increasing this complexity.

That does not mean an arbitrary ordinary knot diagram can be simplified without increasing its crossings. The two complexity measures are different. Theorem 2 performs the additional translation: convert the ordinary diagram to a rectangular presentation with controlled arc complexity, carry out the monotonic arc simplification, and realize every elementary arc move by ordinary Reidemeister moves while bounding the crossings in the intervening diagrams.

The quantitative ingredients in the proof are a conversion using at most $2c(D)+2$ arcs and a controlled sequence with arc complexity at most $2c(D)+3$. A rectangular diagram of arc complexity $a$ has at most $(a-1)^2/2$ crossings. The source also controls the intermediate Reidemeister diagrams used to realize an exchange or a destabilization by the maximum crossings of the adjacent rectangular diagrams. Combining these gives $2(c(D)+1)^2$.

We report the full translation theorem, not merely an argument that bounds the special diagrams occurring at selected checkpoints. The minimax definition takes its maximum over **all** diagrams in a Reidemeister sequence, so omitting the intervening moves would leave a genuine gap.

## Separate height from time and number of moves

The theorem constructs a path inside a quadratic crossing ceiling. It does not bound its length by the same quadratic expression. There may be many distinct diagrams below the ceiling; exploring their finite graph can be extremely expensive. Hence this height bound is not a deterministic polynomial-time recognition algorithm and is not a quadratic bound for Reidemeister distance.

It does yield a finite decision strategy: enumerate the finite combinatorial graph of diagrams under that crossing ceiling and test whether the trivial diagram is reachable. If the input is an unknot, Theorem 2 guarantees success; if it is not, Reidemeister invariance prevents a path to a circle. The large number of states makes this a computability consequence, with no polynomial running-time assertion.

Hard unknot diagrams, for which $h(D)>c(D)$, are compatible with this theorem. The upper bound leaves considerable room for necessary crossing excess. Nor does the quadratic upper estimate show that any diagram actually requires quadratic height: proving a quadratic lower bound would be a separate result. This contribution supplies a uniform upper regime and the exact distinction between arc monotonicity and the ordinary-diagram minimax quantity.

## Checked references

- Ivan A. Dynnikov, Arc-presentations of links. Monotonic simplification, arXiv:math/0208153v3(16 July2004), Theorem2 and §3.2: https://arxiv.org/pdf/math/0208153


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no earlier contributions listed; primary theorem and hypotheses checked by browsing; displayed deduction checked algebraically. No program or formal verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Ivan A. Dynnikov, Arc-presentations of links. Monotonic simplification, arXiv:math/0208153v3(16 July2004), Theorem2 and §3.2: https://arxiv.org/pdf/math/0208153
Exact source versions, statements and uses are described in report.md and source_notes.md.
