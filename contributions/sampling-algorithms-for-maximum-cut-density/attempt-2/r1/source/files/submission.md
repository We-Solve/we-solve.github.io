# Sampling Algorithms for Maximum-Cut Density

Claim type: **Literature report**.

Exact scope: For ρ(G)=MaxCut(G)/n², a uniform induced q(ε)-vertex sample estimates ρ to additive ε with probability at least 2/3, with q=O(ε⁻¹² log(1/ε)) independent of n, by a credited dense MAX-CSP sampling theorem.

## A precise positive sampling statement

The literal question leaves density normalization and confidence unspecified. Here fix ρ(G)=MaxCut(G)/n² for a finite simple graph with n≥1. The credited result is Alon, Fernandez de la Vega, Kannan and Karpinski [A], Random Sampling and Approximation of MAX-CSP Problems, STOC2002 conference author copy, Theorem 10, specialized to arity two. In the paper's normalization, a uniform subset of q variables preserves the normalized optimum to additive accuracy with probability at least 2/3, for q=O(ε⁻¹² log(1/ε)); absolute constant rescaling covers the cut normalization used here. We report this explicit normalized-sample theorem rather than the sharper arity-two summary, and do not claim an independent proof of its cut-norm sampling argument.

To see the specialization precisely, introduce one Boolean variable per graph vertex and one constraint x_u≠x_v for each undirected graph edge uv. There are no duplicate constraints. The number of satisfied constraints equals the number of crossing edges, so its maximum divided by n² is exactly ρ(G). Restriction to a uniform variable subset S is exactly the induced sampled graph, and its maximum divided by q² is exactly ρ(G[S]). Applying the theorem with r=2 therefore gives |ρ(G[S])−ρ(G)|≤ε with probability at least 2/3, with no multiplicity convention or normalization factor. For ε bounded away from zero choose a fixed adequate sample size; one can restrict the displayed asymptotic formula to 0<ε≤1/4.

If n<q, inspect all vertices and return ρ(G) exactly. Otherwise sample q distinct vertices uniformly without replacement, inspect their binom(q,2) possible edges, and compute the sample optimum by enumerating its 2^q cuts. With ε fixed this has query/work bound depending on ε alone in the adjacency-oracle model. It is not a constant bit-time algorithm when an explicit n²-bit matrix must first be read, nor is the exponential-in-q cut enumeration claimed polynomial in 1/ε. Random vertex indices need O(log n) bits each, which is charged in a word/bit implementation even though sample size is independent of n.

The normalization by n² is essential to the additive statement. For sparse graphs, an additive ε can exceed the entire density, so this supplies no multiplicative relative-error estimator for sparse MaxCut. The sampled optimized density is not claimed unbiased: optimization can introduce upward bias, exactly as the earlier example shows. The theorem instead controls that bias and deviation together through a sufficiently large sample.

## Earlier contributions and limits

The prior attempt proves fixed-cut unbiasedness and exhibits strict upward bias after optimizing a two-vertex sample of K₃. It derives no positive sample/error guarantee. The added content is a precisely normalized, credited arity-two sampling theorem and its input/query-model specialization.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

Source-only literature report: no code is attached. The one-constraint-per-undirected-edge MAX-2-CSP encoding and exact n² normalization, n<q boundary, and query versus explicit-input costs are checked in the deduction; the deep sampling theorem is imported.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

Source-only literature report: no code is attached. The one-constraint-per-undirected-edge MAX-2-CSP encoding and exact n² normalization, n<q boundary, and query versus explicit-input costs are checked in the deduction; the deep sampling theorem is imported.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30000602.txt
Alon, Fernandez de la Vega, Kannan, Karpinski, Random Sampling and Approximation of MAX-CSP Problems, STOC2002 primary conference author copy, Theorem10 on normalized induced-subsystem optimum (PDF p.7), arity2 specialization and probability2/3: https://web.math.princeton.edu/~nalon/PDFS/adkk8.pdf . The general-r sample exponent12 is used conservatively. The ECCC TR01-100 PDF was also retrieved, but its extracted text was corrupt and is not the final theorem-number source.
Exact source versions, statements and uses are described in report.md and source_notes.md.
