# Bondage at most two for every nontrivial forest

Problem: prb_253bfb3b31fa47dbba597bb0b06940c9

Claim type: Partial result.

Exact scope: Every finite forest with an edge has bondage number at most two and satisfies the requested 3Δ/2 bound; the upper bound two is sharp for every path P_(3r+1), r≥1.

## A leaf argument

Domination number is additive over connected components, so it is enough to increase it in one tree component. A two-vertex tree has bondage one. Let T have at least three vertices, and choose a longest path beginning u,v,w,... . Every neighbor of v other than w is a leaf: a longer branch there would create a path longer than the chosen one. Let L be this nonempty leaf set.

If |L|≥2, choose u∈L and delete uv. In every dominating set D′ of the new graph, the isolated u is occupied. Remove u from D′. If v is present, what remains already dominates T. If v is absent, every remaining leaf of L must lie in D′; replace one of those leaves by v. This does not lose domination, since that leaf had no neighbor except v, and v dominates all leaves of L as well as u. We have produced a dominating set of T of size |D′|−1. Thus deleting this one edge increases γ.

If |L|=1, then deg(v)=2. Delete both uv and vw. Vertices u,v are isolated, so every dominating set D′ contains both. Replace these two vertices by v. Every other vertex formerly dominated by them is among u,v,w and is still dominated; all other domination remains. Again γ(T)≤γ(T−{uv,vw})−1, proving b(T)≤2.

For a forest with Δ=1, any nontrivial component is an edge and b=1≤floor(3Δ/2). For Δ≥2, the established b≤2 gives the stated bound immediately. Isolated components add the same constant to domination number before and after deletion and cause no issue.

## Sharpness on an infinite family

For a path P_n, γ(P_n)=ceil(n/3). The lower bound follows because one guard dominates at most three vertices; placing guards every third vertex, with the final endpoint adjusted, attains it. Let n=3r+1≥4. Deleting any one edge splits the path into P_i and P_(n−i). If i has residue0,1,2 modulo3, direct substitution shows ceil(i/3)+ceil((n−i)/3)=r+1 in all three cases. Thus no one-edge deletion increases γ. The proved upper bound gives b(P_(3r+1))=2.

No claim is made for graphs with cycles or for all Δ-regular graphs.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Executed verify.py on all labeled forests of orders1..6 (3,265 with an edge), computing domination by exhaustive vertex subsets and bondage by all one/two-edge deletions; also checked exact bondage2 for P4,P7,P10. Standard-library exact arithmetic only; verification_stdout.txt and verification.json preserve the run. Python -O is rejected; optimization_guard.txt records that rejection. The bounded checks supplement the proof and do not extend its scope.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_253bfb3b31fa47dbba597bb0b06940c9.txt


## Reproducibility and review

Executed verify.py on all labeled forests of orders1..6 (3,265 with an edge), computing domination by exhaustive vertex subsets and bondage by all one/two-edge deletions; also checked exact bondage2 for P4,P7,P10. All assertions enabled; a separate python -O run was rejected as required. Source and infinite-proof limitations are stated in report.md.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_253bfb3b31fa47dbba597bb0b06940c9.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
