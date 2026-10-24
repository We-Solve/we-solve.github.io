# The topological Hilbert–Smith theorem through dimension three

Problem: TOP-1482

Claim type: Literature report

Exact scope: Pardon’s published three-manifold theorem proves the prompt for every faithful continuous action of a locally compact Hausdorff group on a connected topological manifold of dimension at most three. The lower-dimensional deduction is given explicitly.

## The established dimension-three theorem

Pardon [1, Theorem 1.5] proves that the additive p-adic integer group Z_p has no faithful continuous action on a connected topological three-manifold, for every prime p. The paper states the resulting Hilbert–Smith conclusion for locally compact groups in its abstract and introduction. This is a theorem for homeomorphism actions, with no smoothness, Lipschitz, symplectic, or freeness hypothesis. It is a published theorem, not a purported new proof in this report.

The passage from the Z_p obstruction to the locally compact group conclusion uses the established group-theoretic Hilbert–Smith reductions cited in the introduction. Those reductions are external inputs here, rather than consequences of the elementary product argument below.

## Lower dimensions and the exact action conventions

Let M be a connected n-manifold with 1 <= n <= 3 and let G act faithfully and jointly continuously on M. Define an action on

\[
M'=M\times\mathbb R^{3-n},\qquad g\cdot(x,v)=(g\cdot x,v).
\]

Products of local charts show that M' is a connected three-manifold. The action law and joint continuity follow from those on M and the identity map on the second factor. If g acts trivially on M', then it acts trivially on M by evaluating at v=0, so g is the identity. The new action is faithful. Applying the dimension-three result gives that G is a Lie group. This establishes the prompt's conclusion in every dimension at most three.

For dimension zero, a connected manifold is a point. Faithfulness then forces G to be the trivial group, which is a zero-dimensional Lie group. In the usual boundaryless manifold convention this covers all lower-dimensional cases. For a connected manifold with boundary and positive dimension, restriction to its interior is faithful: an element trivial on the interior is trivial on its closure by continuity. The interior is connected in the standard connected-manifold setting. Thus the same conclusion also follows if that boundary convention is admitted.

Pardon's formulation uses a continuous injection into Homeo(M) with the compact-open topology. For locally compact Hausdorff manifolds, a jointly continuous action induces such a continuous homomorphism: on a compact set C and open set U containing g_0 C, finitely many product neighborhoods obtained from joint continuity give a neighborhood of g_0 sending all C into U. Faithfulness makes the homomorphism injective. Hence the prompt and the theorem have compatible action conventions.

## What this report adds and does not certify

The previous exploratory attempt isolates a finite-cyclic almost-action repair gap; the later summaries report an unverified universal-dimensional manuscript. This report instead fixes the precise published topological dimension-three theorem and spells out the product reduction, boundary qualification, and compact-open compatibility.

Nothing here proves the existence of a regularity improvement or a repair theorem in dimension four or above. Nor are finite cyclic groups confused with Z_p: finite cyclic groups are Lie groups, while Z_p is an infinite compact group with arbitrarily small open subgroups. The theorem's exclusion concerns faithful actions of the entire Z_p, not the existence of finite cyclic actions. Pardon's geometric proof has not been independently formalized or computationally verified in this work.

## Checked references

1. J. Pardon, The Hilbert–Smith conjecture for three-manifolds, Journal of the American Mathematical Society 26 (2013), 879–899; arXiv:1112.2324v3, revised 22 January 2013, Theorem 1.5 and Introduction. https://arxiv.org/pdf/1112.2324v3 ; https://doi.org/10.1090/S0894-0347-2013-00766-3


## Reproducibility and review

Proof/source audit only; no computational verification of the external theorem was performed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

J. Pardon, The Hilbert–Smith conjecture for three-manifolds, Journal of the American Mathematical Society 26 (2013), 879–899; arXiv:1112.2324v3, revised 22 January 2013, Theorem 1.5 and Introduction. https://arxiv.org/pdf/1112.2324v3 ; https://doi.org/10.1090/S0894-0347-2013-00766-3
Exact source versions, statements and uses are described in report.md and source_notes.md.
