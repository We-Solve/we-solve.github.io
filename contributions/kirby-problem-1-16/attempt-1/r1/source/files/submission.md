# Conway mutation preserves double covers, and the alternating fiber is its mutation class

Problem: TOP-2675

Claim type: Literature report

Exact scope: Conway mutation is proved to preserve the underlying double branched cover for every link. Greene’s theorem supplies completeness within the class of connected reduced alternating diagrams: two such links have homeomorphic double covers precisely when they are mutants, with mirrors included for an orientation-unrestricted formulation. This does not classify nonalternating branch sets.

## A sound move for every branch set

Suppose a sphere S in S^3 meets a link L transversely in four points. It divides L into two tangles. Conway mutation cuts along S, rotates one tangle through one of the three standard half-turns that preserve the four marked points in pairs, and reglues. Let L' be the resulting link. Then

\[
\Sigma_2(L')\cong\Sigma_2(L).
\]

Here is the covering-space reason, independent of alternatingness. The double cover of S branched at the four marked points is a torus T: its Euler characteristic is 2 chi(S^2)-4=0, and it is connected and oriented. Model it as R^2/Z^2 modulo the elliptic involution u->-u downstairs. The four branch points are the four points of order two. Each standard mutation double-transposes these points and has a lift given, up to isotopy of the marked sphere, by translation u->u+a for a nonzero half-period a.

The translation lift is isotopic to the identity on the unmarked torus, through u->u+ta. The two tangle covers are glued along T; replacing their gluing by its composition with a map isotopic to the identity leaves the resulting oriented three-manifold homeomorphic. Extend the isotopy through a collar of the gluing boundary to exhibit that homeomorphism. This proves soundness of mutation as a move in part (b), for arbitrary links. The chosen lift need not commute with an isotopy preserving branch points, because the prompt forgets the covering involution.

## Completeness in the alternating subclass

Greene [1, Theorem 1.1] proves that for two connected reduced alternating diagrams, being related by Conway mutation is equivalent to their links having homeomorphic double branched covers, with the source's oriented conventions. Thus, within this subclass, mutation together with isotopy is both sound and complete for the covering-manifold invariant. The theorem also characterizes the class via the appropriately graded Floer invariant; that deeper lattice/Floer argument is credited to the source, not re-proved here.

If the prompt's homeomorphism is allowed to reverse orientation, include mirror reflection among the moves. The double cover of the mirror is the oppositely oriented cover. Hence an orientation-reversing homeomorphism can be converted to an orientation-preserving one by mirroring one branch set, after which the oriented theorem applies. Mirroring preserves alternatingness and gives a sound move for the unoriented underlying-cover problem. This explicitly matches the prompt's orientation-unrestricted version.

For a fixed alternating knot K, this determines all alternating knots K' in its fiber: they are the knots represented by its mutation class, with mirrors admitted as required by the orientation convention. It does not say that every branch set of that three-manifold is alternating. That extra assertion would be a separate problem.

## Why the unrestricted classification is still missing

A list of sound moves does not prove completeness for arbitrary links. Outside the alternating subclass, the implication from cover homeomorphism to Conway mutation is not asserted. Nor does a homeomorphism of covers necessarily conjugate their involutions: forgetting the involution is precisely what makes the fiber problem substantial.

The original prompt has no earlier contributions. This report adds a direct mutation-lift proof and a checked published completeness theorem on a named diagram class. It does not supply the entire unrestricted move calculus requested in part (b), enumerate every nonalternating K' in part (a), or use a knot invariant as a surrogate for an actual homeomorphism. No computer link census or independent Floer-homology implementation was run.

## Checked references

1. J. E. Greene, Lattices, graphs, and Conway mutation, Inventiones Mathematicae 192 (2013), 717–750, Theorem 1.1 and the discussion following it. Inspected author version arXiv:1103.0487v1 (2 March 2011): https://arxiv.org/pdf/1103.0487v1 ; current bibliographic record https://arxiv.org/abs/1103.0487


## Reproducibility and review

Proof/source audit only; no computational verification of the external theorem was performed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

J. E. Greene, Lattices, graphs, and Conway mutation, Inventiones Mathematicae 192 (2013), 717–750, Theorem 1.1 and the discussion following it. Inspected author version arXiv:1103.0487v1 (2 March 2011): https://arxiv.org/pdf/1103.0487v1 ; current bibliographic record https://arxiv.org/abs/1103.0487
Exact source versions, statements and uses are described in report.md and source_notes.md.
