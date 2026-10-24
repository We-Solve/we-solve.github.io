# Exact linear arboricity of every complete graph from Walecki paths

Problem: TOP-1419

Claim type: Partial result.

Exact scope: For every n≥2, la(K_n)=ceil(n/2), with explicit edge partitions into that many linear forests. The edgeless K_1 has linear arboricity zero.

## Even order: an explicit path partition

Let n=2m≥2 and use vertices Z/(2m). For i=0,…,m−1 form the path whose ordered vertices are

\[
i,\ i-1,\ i+1,\ i-2,\ i+2,\ldots,\ i-(m-1),\ i+(m-1),\ i-m,
\]

with arithmetic modulo 2m. Equivalently the vertices at positions 2a,2a+1 are i+a and i−a−1 for a=0,…,m−1. These are all 2m residues without repetition: the first kind ranges over m consecutive residues and the second over the complementary m.

The m edges joining positions 2a to 2a+1 have endpoint sum 2i−1. They are exactly all unordered distinct-endpoint pairs of that odd sum: the reflection x↦2i−1−x has no fixed point, and its pairs number m. The other m−1 edges have sum 2i. They are all distinct-endpoint pairs of that even sum; the reflection x↦2i−x has exactly the fixed points i and i+m, leaving m−1 pairs.

As i runs from zero to m−1 the odd sums and even sums each exhaust their parity classes modulo 2m. Every edge has a unique sum and hence appears exactly once in these paths. This is Walecki’s Hamiltonian-path partition, proved directly by the endpoint-sum invariant. It uses m linear forests.

## Odd order and optimality

For n=2m+1≥3, apply the even construction to K_{2m+2} and delete one vertex from every path. Deleting a vertex from a path gives a linear forest with at most two nontrivial components. Each remaining edge still belongs to exactly one of the m+1 layers, so la(K_{2m+1})≤m+1. There is no requirement that the odd-order layers themselves be spanning paths.

Any linear forest on n vertices has at most n−1 edges. Since K_n has n(n−1)/2 edges, an edge partition needs at least ceil(n/2) layers. This matches the constructions for both parities, proving the exact formula. For n=1 there are no edges, and the empty list of layers is optimal.

The official upper bound gives ceil((Δ+1)/2)=ceil(n/2), so every complete graph meets it with equality. This settles a dense infinite family, not the arbitrary-graph conjecture. The construction does not assert that pairing arbitrary proper edge-color classes avoids cycles.

## Verification

For every order 2≤n≤200 the verifier generates these layers, checks maximum degree at most two and absence of cycles in each by graph traversal, and checks that the edge multiset is exactly E(K_n). It additionally verifies the layer count against the edge-count lower bound. The all-order proof is the modular sum argument above.

## Attribution and limits

These are credited classical results, elementary deductions, or explicit reports of the stated literature theorem. No historical novelty or resolution outside the exact scope is claimed. The proof and checks below do not independently audit any other general-solution announcement in the archive.

## Checked references

- Official TOP-1419 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1419.txt
- J.-C. Bermond and collaborators, primary exposition of Walecki’s construction, Theorem 1 and Corollary 1: https://www-sop.inria.fr/members/Jean-Claude.Bermond/PUBLIS/ABS90.pdf


## Reproducibility and review

Exact standard-library verifier completed with status PASS; see verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

Official TOP-1419 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1419.txt
J.-C. Bermond and collaborators, primary exposition of Walecki’s construction, Theorem 1 and Corollary 1: https://www-sop.inria.fr/members/Jean-Claude.Bermond/PUBLIS/ABS90.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.
