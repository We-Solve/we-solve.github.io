# An intrinsic invariant criterion for positivity within homogeneous knots

**Problem:** TOP-2741

**Claim type:** Literature report

**Exact scope:** For every homogeneous knot K, positivity is equivalent to s(K)=2g_3(K), where s is Rasmussen’s invariant; this follows from Abe’s Theorems1.2–1.3 and gives a diagram-independent positivity test on that class, not a universal positive-diagram move calculus.

## The named regime and its criterion

A signed Seifert graph has one vertex for each Seifert circle and signed edges for crossings. A diagram is homogeneous when every graph block has edges of one sign; a knot is homogeneous when it admits such a diagram. This class includes all alternating knots and all positive knots. Once a knot is known to lie in this class, the following criterion uses knot invariants rather than asking for a positive diagram:

$$K\text{ is positive}\quad\Longleftrightarrow\quad s(K)=2g_3(K).$$

Here $g_3$ is ordinary Seifert genus and $s$ has the convention in which a positive trefoil has value two. The criterion is a direct consequence of Abe’s primary theorem and proof, recovering Baader’s positivity characterization. It is not asserted for an arbitrary strongly quasipositive knot or an arbitrary knot outside the homogeneous class.

## Check the equivalence, not only the easy direction

For a homogeneous diagram $D$, let $O(D)$ be the number of Seifert circles, let $O_+(D)$ be the number of components after smoothing all negative crossings, and write $c_\pm$ for positive and negative crossing counts. Abe’s Theorem 1.2 and the genus formula for homogeneous canonical surfaces give

$$s(K)=c_+-c_- -O(D)+2O_+(D)-1,$$
$$2g_3(K)=c_++c_- -O(D)+1.$$

Their equality is exactly $O_+(D)-1=c_-$. The source’s proof shows that a nonnugatory negative crossing makes this inequality strict. Therefore equality forces every negative crossing to be nugatory. Removing those nugatory crossings by the corresponding local untwists leaves a positive diagram of the same knot. This proves the nontrivial converse. In the forward direction, a positive diagram is homogeneous and has $O_+=1$ and $c_-=0$, so the formulas give equality directly.

The removal argument is an ingredient of Abe’s checked proof, rather than a claim that any negative crossing in an arbitrary diagram can be removed. Homogeneity is used in both displayed formulas and is essential to the converse.

## An invariant obstruction and what can be computed

On the homogeneous class, $s(K)<2g_3(K)$ rules out positivity. Equality certifies positivity even when the chosen homogeneous diagram has negative nugatory crossings. Both quantities are invariants of the oriented knot; the criterion does not depend on choosing which homogeneous diagram to evaluate. A homogeneous diagram also provides a minimal-genus Seifert surface, making $g_3$ accessible in that regime. Computing $s$ from the finite Khovanov–Lee complex gives a terminating procedure, without a polynomial complexity claim.

One can also formulate the equivalent condition that a homogeneous knot is strongly quasipositive, as in Abe’s Theorem 1.3 and Baader’s original theorem. Strong quasipositivity refers to bounding the corresponding positive-band Seifert surface; it is distinct from the existence of a braid word containing only positive standard generators. Treating every positive knot as a positive braid would incorrectly shrink the scope.

## Relation to the literal two-part question

The invariant criterion answers the characterization question on a substantial specified class. Homogeneity itself is still a class hypothesis defined by diagrams, so this is not advertised as the requested unrestricted exterior-topological characterization of all positive knots. The source’s full equivalence positive iff homogeneous and strongly quasipositive is reported with its actual hypotheses.

No complete calculus between arbitrary positive diagrams is constructed. Removing a nugatory crossing in this proof concerns the chosen homogeneous diagram; it does not prove that two arbitrary positive diagrams are connected by a designated list of positivity-preserving moves. The second part of the prompt remains separate.

## Checked references

- Tetsuya Abe, The Rasmussen invariant of a homogeneous knot, arXiv:1003.5392v1(28 March2010), Theorems1.2/1.3 and §4 proof; credits Baader’s characterization: https://arxiv.org/pdf/1003.5392


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no earlier contributions listed; primary theorem and hypotheses checked by browsing; displayed deduction checked algebraically. No program or formal verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Tetsuya Abe, The Rasmussen invariant of a homogeneous knot, arXiv:1003.5392v1(28 March2010), Theorems1.2/1.3 and §4 proof; credits Baader’s characterization: https://arxiv.org/pdf/1003.5392
Exact source versions, statements and uses are described in report.md and source_notes.md.
