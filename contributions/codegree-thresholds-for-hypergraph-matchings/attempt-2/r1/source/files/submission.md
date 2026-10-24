# Codegree Thresholds for Hypergraph Matchings

Claim type: **Literature report**.

Exact scope: Han’s sufficiently-large-n near-perfect matching theorem implies the full minimum-codegree-versus-matching-number bound ν(H)≥δ_{k−1}(H) whenever δ_{k−1}(H)<n/k, for fixed k≥3 and sufficiently large n; small n are not settled.

## Credited theorem and its deficiency extension

Han's primary paper [H], Theorem 1.1, states that for each fixed k≥3 and sufficiently large n not divisible by k, minimum codegree at least floor(n/k) forces a matching of that size. The sufficiently-large qualification is explicit and is retained. The paper's Corollary 1.3 gives the more general ν(H)≥δ_{k−1}(H) below n/k. This report explains the padding step connecting the near-perfect statement to deficiency parameters; it is credited literature, not a new theorem or an all-n solution.

Write q=floor(n/k), r=n−kq and δ=q−c<n/k. The elementary bound quoted as Theorem 1.2 in [H] handles δ≤q−k+2, so it remains to consider 1≤c≤k−3; c=0 with r>0 is Theorem 1.1 directly. Add a new universal vertex set U of size a: retain old edges and add every k-set meeting U. If r+c<k, choose a=c. Then n+a is not divisible by k and floor((n+a)/k)=q. Old (k−1)-sets gain exactly a extensions, so their codegree is at least δ+a=q; sets meeting U have every available extension, at least q for sufficiently large n. Theorem 1.1 yields q disjoint edges. Deleting those meeting U removes at most a=c edges, leaving at least q−c=δ old edges.

If r+c≥k, choose a=c+1. Now k+1≤r+c+1≤2k−3, so n+a is again not divisible by k, and floor((n+a)/k)=q+1. The old-set codegree is at least δ+a=q+1, and new-vertex sets again meet the same bound. Obtain q+1 disjoint edges and discard at most c+1 of them, leaving δ. All added sizes are bounded in terms of the fixed k, so the sufficiently-large-n hypothesis is preserved. These are exactly the extra deficiency cases requiring the nondivisible padding argument; for k=3 the interval 1≤c≤k−3 is empty.

The matching-number bound is sharp: for d<n/k take all k-sets meeting a fixed d-vertex set A. Its minimum codegree and matching number are both d, since every edge consumes a distinct A vertex and there are enough outside vertices to realize d disjoint edges. This sharpness construction and the k=2 augmentation proof already occur in the prior contribution and are included here only as credited context, not additional discoveries.

For the literal t_k(n) question, this yields the proposed threshold for each fixed k≥3 and all sufficiently large nondivisible n. It makes no claim about every n≥k, a uniform effective cutoff in variable k, or an independent reproof of Han's absorbing/extremal arguments.

## Earlier contributions and limits

The earlier attempt proves the space barrier and k=2 graph case, and mentions Han’s Theorem 1.1. The added literature scope is the full below-n/k matching-number bound and the explicit two-case padding deduction for deficiency c; prior facts are identified as overlap rather than counted again.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

Source/proof-only literature report: no program is attached. Every residue/deficiency range and the number of edges lost on deleting universal vertices are checked in the written deduction. The imported existence theorem is not independently proof-certified.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

Source/proof-only literature report: no program is attached. Every residue/deficiency range and the number of edges lost on deleting universal vertices are checked in the written deduction. The imported existence theorem is not independently proof-certified.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30000607.txt
Jie Han, Near Perfect Matchings in k-uniform Hypergraphs, arXiv:1404.1136v3 (6 August 2014), primary Theorem 1.1, Theorem 1.2 and Corollary 1.3 with proof, pp.1–2: https://arxiv.org/pdf/1404.1136v3 . Journal DOI https://doi.org/10.1017/S0963548314000613 .
Exact source versions, statements and uses are described in report.md and source_notes.md.
