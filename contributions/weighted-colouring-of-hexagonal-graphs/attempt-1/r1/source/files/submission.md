# Exact weighted coloring on bipartite and elimination-order instances

Problem: TOP-3247

Claim type: Partial result.

Exact scope: For every weighted finite bipartite graph, and every graph supplied with a perfect elimination ordering, prove χ(G,p)=ω(G,p); in particular the9/8 target holds with c=0 for the corresponding induced triangular-lattice classes.

## Bipartite weights without expansion

Let W=ω(G,p), and let A,B be the two independent classes. Assign to each a∈A the initial interval{1,...,p(a)} and to each b∈B the final interval{W−p(b)+1,...,W}. For an edge ab the clique inequality p(a)+p(b)≤W makes these intervals disjoint. Within either part there is no adjacency constraint. Singleton cliques ensure each interval fits in[W], including isolated vertices. This is a valid W-multicoloring. Since each clique needs the sum of its demands in distinct colors, χ(G,p)≥W, proving equality.

## Perfect elimination orderings

Suppose v_1,...,v_n is an order in which the later neighbors of each vertex form a clique. Color in reverse order with palette[W]. At v_i, its already colored neighbors are precisely those later neighbors, and their assigned color sets are pairwise disjoint because they form a clique. Together with v_i they also form a clique. Hence their total demand plus p(v_i) is at most W. At least p(v_i) colors remain unused among them; choose any such set for v_i. Induction gives a proper W-multicoloring, and the clique lower bound again proves equality.

The ordering is a checkable combinatorial input; we do not assume an arbitrary graph has one. For example every interval graph has such an order: remove an interval with least right endpoint. Every remaining interval meeting it contains that endpoint, so its remaining neighbors form a clique. Repeat. Forests also have such an order by leaf removal. The bipartite argument, in contrast, includes graphs with arbitrary even cycles and needs no elimination order.

## Applying the actual lattice convention

A hexagonal graph here is an induced subgraph of the triangular lattice, not a honeycomb subgraph. If this graph is bipartite, the first construction applies; if it admits the supplied elimination order, the second applies. No redefinition of the lattice is needed. In either case χ=ω≤(9/8)ω with the absolute additive constant0 for every positive integer demand assignment, however large its binary encoding.

The proofs are existence constructions and do not assert an algorithm that prints exponentially many color labels in polynomial binary input time. They leave triangular-lattice induced graphs outside these classes unresolved and do not prove the universal9/8 conjecture.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3247.txt


## Reproducibility and review

Proof/source review only; no code attached at authoring time. Exact hypotheses and boundary cases are addressed in report.md; external theorem proofs are credited rather than claimed independently verified.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3247.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
