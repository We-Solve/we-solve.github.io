# An exact certificate for the known saturated non-tight six-point forest

Problem: TOP-3293

Claim type: Literature report.

Exact scope: Reproduce and exhaustively certify Gebauer–Gundert–Moser–Okamoto’s eight-edge3-uniform counterexample: every existing edge has a private rainbow witness, no missing edge can be added, and a surjective3-coloring avoids all rainbow edges.

## Credited finite construction

Theorem2.2 of Gebauer–Gundert–Moser–Okamoto gives a saturated3-forest on six vertices that is not tight. We use its explicit Section3 construction, with the original authors credited. On vertices1,...,6 take

E={123,124,125,134,236,256,346,356},

where abc denotes the unordered triple{a,b,c}. All20 triples are potential edges, so there are12 missing edges. The supplied checker enumerates every one of the3^6=729 vertex color assignments and retains exactly the surjective assignments. It directly computes which of the20 triples are rainbow. No precomputed forest classification is assumed.

## Complete finite certification rule

For an edge set F and e∈F, let W_F(e) be the set of surjective assignments for which e is the only rainbow member of F. By the literal definition, F is a3-forest exactly when W_F(e) is nonempty for every e∈F. Our exhaustive run checks this for the eight listed edges and records one witness for each.

For each missing triple t, repeat the same criterion on F=E∪{t}. The checker verifies that at least one member e of F has W_F(e) empty, and records a failed edge for every one of the12 additions. Therefore no one-edge extension is a3-forest. This implies full inclusion maximality, not only maximality among one-edge changes: if a larger forest existed, all its subgraphs would be forests, since deleting edges preserves each retained private witness. Its first additional edge would contradict the one-edge check.

Finally the surjective assignment(c(1),...,c(6))=(3,2,2,2,2,1) has no rainbow edge in E. Each of the first four edges uses only colors2,3, and each of the last four uses only colors1,2. It therefore proves non-tightness directly.

The exhaustive certificate is finite and complete because every assignment is enumerated, the onto test is explicit, and each rainbow test is exactly the set equality{1,2,3}. Its success proves the three properties for this fixed hypergraph; it makes no unsupported classification claim for all vertex counts or all k. The known example suffices to refute the universal saturated-implies-tight assertion at k=3, but this is credited literature, not a claimed new counterexample.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Executed verify.py on all729 assignments,540 surjective, for the exact eight-edge hypergraph. Verified every private rainbow witness, all12 missing-edge extensions fail, and the recorded surjective non-tight coloring has no rainbow edge. Standard-library exact arithmetic only; verification_stdout.txt and verification.json preserve the run. Python -O is rejected; optimization_guard.txt records that rejection. The bounded checks supplement the proof and do not extend its scope.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3293.txt
- https://arxiv.org/pdf/1109.3390


## Reproducibility and review

Executed verify.py on all729 assignments,540 surjective, for the exact eight-edge hypergraph. Verified every private rainbow witness, all12 missing-edge extensions fail, and the recorded surjective non-tight coloring has no rainbow edge. All assertions enabled; a separate python -O run was rejected as required. Source and infinite-proof limitations are stated in report.md.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3293.txt
https://arxiv.org/pdf/1109.3390
Exact source versions, statements and uses are described in report.md and source_notes.md.
