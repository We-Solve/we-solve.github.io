# Universal-Cover Isomorphism Algorithms for Cube Complexes

Claim type: **Partial result**.

Exact scope: For supplied Cartesian products of finite connected simple regular graphs, cubical universal-cover isomorphism is decided by equality of the multisets of positive factor valences, in polynomial time in the factor encoding.

## Product covers, including higher dimensions

Let X=G₁×⋯×G_r be the standard cubical Cartesian product, where each supplied factor is a finite connected simple d_i-regular graph. A one-vertex factor has d_i=0 and is omitted. The remaining d_i are positive; r can grow and need not be one. Each graph's universal cover is the d_i-regular tree T_{d_i}: for d_i=1 this is K₂, for d_i=2 the doubly infinite path, and for d_i≥3 the infinite regular tree. One can construct it as the tree of reduced walks from a chosen graph vertex. Each walk has d_i available neighboring walks after cancellation, and path lifting proves the local covering property. Trees are simply connected, so this is the universal cover.

The product map ∏T_{d_i}→∏G_i is a cubical covering: the local incident directions and their commuting cubes are exactly the products of those in the factors. The product of trees is contractible, by contracting each factor along its unique paths; in particular it is simply connected. Thus it is the cubical universal cover of X. The complex is nonpositively curved in the cubical sense: each vertex link is the join of discrete direction sets, hence flag. This uses the actual cubes of the product, not just the one-skeleton.

## A complete invariant in this supplied product class

At any vertex of the universal cover, its link's one-skeleton is a complete multipartite graph with part sizes d₁,…,d_r: directions in different factors span a square, and distinct directions in the same tree do not. Its complement is therefore a disjoint union of complete graphs of those sizes, including isolated vertices for d_i=1. A cubical isomorphism preserves this link and hence its complement's connected-component sizes. Equality of the valence multisets is necessary.

It is sufficient as well. Match equal-valence factors, choose arbitrary roots, and recursively biject their unused neighbors. Unique tree paths make these bijections consistent, yielding an isomorphism T_d≅T_d for each matched pair. Their product, followed by the matching permutation of factors, is a cubical isomorphism. If all factors were points, the cover is a point and is treated separately. This also explains why finite d=1 factors cannot be silently replaced by infinite lines.

To decide, verify each supplied graph is connected and regular by a traversal and degree count, discard point factors, sort their positive valences and compare. This is polynomial in the encoded factor-list size, including vertex/edge labels. It does not require expanding a potentially exponentially large product or writing an infinite cover isomorphism; the output is the decision plus its finite invariant. If the entire product is instead explicitly supplied without a factorization, this report does not claim the same bound for discovering factors. Arbitrary finite NPC cube complexes remain outside the subclass.

## Earlier contributions and limits

The earlier attempt gives directed-edge color refinement for one-dimensional complexes and a caution involving a filled square. The supplied higher-dimensional regular-product class and its link-complement classification add genuine cubical information; the result is not a restatement of the one-dimensional test.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

Source/proof-only contribution: no program is attached. The covering construction, complete link invariant, point/edge/line factors and encoded-input cost are checked in the written proof.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

Source/proof-only contribution: no program is attached. The covering construction, complete link invariant, point/edge/line factors and encoded-input cost are checked in the written proof.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006621.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
