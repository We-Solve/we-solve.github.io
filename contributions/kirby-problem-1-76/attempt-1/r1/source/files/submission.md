# Polynomial radius bounds and polynomial certificates in the unknot Reidemeister graph

**Problem:** TOP-2735

**Claim type:** Literature report

**Exact scope:** Every c-crossing unknot diagram lies at Reidemeister distance at most (236c)^11 from a zero-crossing circle; this gives polynomially verifiable unknot certificates and a polynomial diameter bound on every crossing-bounded set of vertices, without a deterministic polynomial recognition claim.

## A metric statement about all unknot diagrams

Lackenby’s published Theorem 1.1 proves that any diagram of the unknot with $c$ crossings can be transformed into the trivial diagram by at most $(236c)^{11}$ Reidemeister moves. Every intermediate diagram in that particular sequence has at most $(7c)^2$ crossings. Both statements are uniform in the input diagram.

Let $\mathcal U_{\le n}$ be the vertices represented by unknot diagrams with at most $n$ crossings, and retain the ambient graph metric from the prompt. Concatenate the simplifying sequence from $D$ to the trivial circle with the reverse sequence from the circle to $E$. For $n\ge1$ this gives

$$\operatorname{diam}_{d_R}(\mathcal U_{\le n})\le 2(236n)^{11}.$$

The concatenated path stays inside $\mathcal U_{\le49n^2}$. Thus crossing-bounded vertices have polynomially bounded ambient distance even though they need not be connected by paths staying below their original crossing threshold. The zero-crossing case has distance zero and is handled separately.

## A polynomial certificate, not a search algorithm of that time

A witness can list the successive local Reidemeister moves. The number of moves is polynomial in $c$, and the theorem also bounds the size of every intermediate combinatorial diagram by $O(c^2)$. Encode a diagram by its finite plane graph, cyclic orders, over/under information and outer-face data; each local move specifies the affected arcs. Updating and checking a move, including its local empty-disk condition, takes polynomial time in the current finite graph size.

Consequently a complete sequence from the input diagram to a circle has polynomial bit length and can be verified in polynomial time. Every listed move preserves the knot type, so no nontrivial knot has a valid certificate of this form. This gives the stated NP certificate consequence with an actual input-size bound; it is not based solely on the existence of a topological isotopy with unencoded coordinates.

The existence of a polynomial-length path does not provide a deterministic method finding it in polynomial time. A search tree can branch at polynomially many locations at each of polynomially many stages, leaving exponentially many candidate paths. The distinction between finding and checking the witness is precisely why this theorem does not settle the first question in the prompt.

## Interpret the graph correctly

The distance allows planar isotopies at zero cost and counts all three Reidemeister move types with unit cost. The simplifying sequences in the source use this same convention. Their crossing increases are allowed, as required by the literal definition of the graph. The result is therefore an ambient-radius and ambient-diameter bound, rather than an unsupported assertion that every fixed crossing sublevel is connected.

There are finitely many combinatorial diagrams below each crossing bound. The displayed polynomial-radius result describes how that finite set sits in the full connected unknot graph; it does not describe every geodesic or prove that the given exponent is optimal. A shortest path may have different intermediate crossing behavior than the source’s constructed path.

This report uses the checked 2015 theorem, rather than an announcement of a faster recognition algorithm. It establishes a substantial quantitative answer to the graph part and a certification consequence while keeping deterministic polynomial recognition distinct. The deep simplification theorem is credited, not claimed as independently reproved.

## Checked references

- Marc Lackenby, A polynomial upper bound on Reidemeister moves, Ann.Math.182(2)(2015),491–564, Theorem1.1; arXiv:1302.0180v2(11 December2014): https://arxiv.org/pdf/1302.0180


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no earlier contributions listed; primary theorem and hypotheses checked by browsing; displayed deduction checked algebraically. No program or formal verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Marc Lackenby, A polynomial upper bound on Reidemeister moves, Ann.Math.182(2)(2015),491–564, Theorem1.1; arXiv:1302.0180v2(11 December2014): https://arxiv.org/pdf/1302.0180
Exact source versions, statements and uses are described in report.md and source_notes.md.
