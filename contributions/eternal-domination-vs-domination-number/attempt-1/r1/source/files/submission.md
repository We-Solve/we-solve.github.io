# Bipartite graphs cannot witness the eternal-domination gap

Problem: TOP-1389

Claim type: Partial result.

Exact scope: For every finite bipartite graph, γ∞=α=θ=|V|−ν, where ν is maximum matching size; hence no bipartite graph satisfies γ=γ∞<θ.

## Universal game bounds

In the prompt’s one-guard-move game, α(G)≤γ∞(G)≤θ(G). For the lower bound, fix an independent set I. If fewer than |I| guards are available, repeatedly attack an unoccupied vertex of I. A guard occupying I cannot move to another vertex of I, so each successful defense increases the number of guards in I by one. After at most k attacks all k guards lie in I; another attack in I cannot be answered. This argument applies to any initial dominating placement.

For the upper bound partition V into θ cliques and keep one guard in each clique. An attack in one clique is answered by its guard moving within that clique, while every clique continues to have a guard and hence every vertex remains dominated. Singleton cliques require no moves. Empty graphs have all quantities zero.

## Matching and clique cover

For a bipartite graph G=(A,B;E), every clique has at most two vertices. A clique partition is therefore a matching together with singleton vertices, and θ(G)=n−ν(G).

We give the required vertex-cover equality rather than assuming it. Take a maximum matching M. Starting at the unmatched vertices of A, follow alternating paths, using nonmatching edges A→B and matching edges B→A, and let Z be the reached vertices. No unmatched B-vertex is reached, since that would give an augmenting path and a larger matching. Set C=(A\Z)∪(B∩Z). It covers every edge: an uncovered edge would go from a reached A-vertex to an unreached B-vertex; if unmatched it is traversable, and if matched its A-end can only have been reached together with its matched B-end. Both possibilities contradict unreachedness.

Every matched edge has exactly one endpoint in C. An unmatched A-vertex is reached and not in C, while an unmatched B-vertex is unreached and not in C. Thus |C|=|M|=ν. Conversely any vertex cover meets every edge of M, so no cover is smaller. Since independent sets are precisely complements of vertex covers, α=n−ν.

Sandwiching between the two universal game bounds now gives γ∞=α=θ=n−ν. Isolated vertices are automatically included as singleton cliques, independent vertices and necessary stationary guards.

## Consequence and gap

Bipartite graphs can have γ<γ∞, but equality of the two domination parameters cannot produce the strict θ-gap requested in the prompt. The existence question outside this entire class is not decided.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1389.txt


## Reproducibility and review

Proof/source review only; no code attached at authoring time. Exact hypotheses and boundary cases are addressed in report.md; external theorem proofs are credited rather than claimed independently verified.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1389.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
