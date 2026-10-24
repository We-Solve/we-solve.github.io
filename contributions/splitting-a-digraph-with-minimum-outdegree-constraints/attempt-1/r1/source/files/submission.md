# The exact split threshold for symmetric digraphs

Problem: TOP-3265

Claim type: Literature report.

Exact scope: For digraphs obtained by replacing each edge of a simple graph by both arcs, the least minimum-outdegree threshold is2d+1; this is a precise application of Stiebitz’s published degree-partition theorem, and the same sufficient condition holds for any spanning bidirected core.

## Credited input

Stiebitz’s Theorem1 says that a finite simple undirected graph with degree at least a(v)+b(v)+1 at every vertex has a nonempty vertex partition(A,B) with internal degrees at least a(v) on A and b(v) on B. Its constant-valued Corollary3 is the minimum-degree s+t+1 result. The theorem and nonempty-part convention were checked in the actual four-page original paper. Its proof is credited rather than independently reconstructed here.

## Directed translation

Let D be symmetric: uv is an arc exactly when vu is, and write G for the underlying simple graph. Then d_D⁺(v)=d_G(v). Apply the theorem with a=b=d. If δ⁺(D)≥2d+1, it gives nonempty parts X,Y in which each vertex has at least d neighbors. Both arcs of each internal underlying edge remain, so these internal undirected degrees equal d⁺_(D[X]) and d⁺_(D[Y]). This is exactly the required directed partition.

More generally a digraph can contain extra asymmetric arcs. If its spanning subdigraph consisting of bidirected pairs has underlying minimum degree at least2d+1, apply the same theorem to that core. Additional internal arcs cannot reduce either outdegree. Minimum total outdegree alone, however, does not guarantee such a core, so this does not prove existence of f(d) for all digraphs.

## Sharp threshold and a general lower bound

Take the symmetric complete graph on2d+1 vertices. It has minimum outdegree2d. Any induced part of minimum outdegree at least d needs at least d+1 vertices, since loops are forbidden. Two such parts would need at least2d+2 vertices and cannot partition this example. Therefore the restricted threshold is at least2d+1, and the theorem makes it exactly2d+1. The same example also proves f(d)≥2d+1 if a threshold for arbitrary digraphs exists.

The assertion holds for every positive integer d, with nonempty parts and no balance requirement. It does not turn an undirected decomposition theorem into a statement about all one-way digraphs.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3265.txt
- https://cedric.cnam.fr/~bentzc/INITREC/Files/CP14.pdf
- https://doi.org/10.1002/(SICI)1097-0118(199611)23:3%3C321::AID-JGT12%3E3.0.CO;2-H


## Reproducibility and review

Proof/source review only; no code attached at authoring time. Exact hypotheses and boundary cases are addressed in report.md; external theorem proofs are credited rather than claimed independently verified.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3265.txt
https://cedric.cnam.fr/~bentzc/INITREC/Files/CP14.pdf
https://doi.org/10.1002/(SICI)1097-0118(199611)23:3%3C321::AID-JGT12%3E3.0.CO;2-H
Exact source versions, statements and uses are described in report.md and source_notes.md.
