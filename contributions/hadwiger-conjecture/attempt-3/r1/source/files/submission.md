# Hadwiger’s implication for every chordal graph

Problem: TOP-14

Claim type: Partial result.

Exact scope: Every finite chordal graph satisfies χ(G)=ω(G), and therefore has a complete minor of order χ(G). A self-contained separator proof supplies the elimination ordering.

## Structural proof

A graph is chordal when it has no induced cycle of length at least four. A vertex is simplicial when its neighbors form a clique. We prove the classical Dirac lemma: every noncomplete chordal graph has two nonadjacent simplicial vertices; a complete graph has every vertex simplicial.

First, an inclusion-minimal separator S of two nonadjacent vertices a,b in a connected chordal graph is a clique. Let A,B be the components of G−S containing a,b. Minimality implies each s∈S has a neighbor in A and in B: otherwise restoring s would still leave a and b separated. If x,y∈S were nonadjacent, take a shortest x–y path with internal vertices in A, and another with internal vertices in B. Each is induced; the two interiors are anticomplete. Their union is an induced cycle of length at least four, a contradiction.

Now induct on the number of vertices. In a disconnected graph choose a simplicial vertex from each of two components, using induction within each component. In the connected noncomplete case choose S as above. For each of A and B, the smaller induced chordal graph G[A∪S] or G[B∪S] is complete, or has two nonadjacent simplicial vertices by induction. In the latter case at most one of that pair is in the clique S. In either case choose a simplicial vertex in A or B. It has no neighbors outside its component and S, so is simplicial in G. The two chosen vertices are nonadjacent. This proves the lemma, including disconnected graphs.

Induced subgraphs of chordal graphs are chordal. Repeatedly deleting a simplicial vertex yields an ordering v₁,…,vₙ in which the later neighbors of each vertex form a clique. Such an ordering is called a perfect elimination ordering.

## Coloring and the literal minor implication

Color the vertices in reverse order by the least available positive integer. When vᵢ is colored its already colored neighbors form a clique of size at most ω(G)−1. They use at most that many colors, so a color among 1,…,ω(G) is available. Thus χ(G)≤ω(G). The reverse inequality holds in every graph, giving equality.

A maximum clique is itself a K_{χ(G)} subgraph, hence also a minor. In particular, if K_{t+1} is not a minor, ω(G)≤t and the constructed coloring uses at most t colors. This proves exactly the official implication on the chordal class for every t≥1. The empty graph has χ=ω=0 and satisfies the assertion as well.

The proof uses a clique **subgraph** as a sufficient certificate of a clique minor. It does not replace the forbidden-minor hypothesis by a forbidden-subgraph hypothesis for arbitrary graphs.

## Verification

The exact verifier enumerates all labeled simple graphs of orders at most six. It recognizes chordality directly by searching vertex subsets for induced cycles, independently finds a simplicial elimination ordering, computes maximum clique size by subset enumeration, and checks the reverse greedy coloring. The finite run checks the implementation; the induction proves the unbounded class.

## Attribution and limits

These are credited classical results, elementary deductions, or explicit reports of the stated literature theorem. No historical novelty or resolution outside the exact scope is claimed. The proof and checks below do not independently audit any other general-solution announcement in the archive.

## Checked references

- Official TOP-14 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-14.txt
- Lafferty and Song, Every graph with no K_8^{-4} minor is 7-colorable, arXiv:2208.07338, formulation reference: https://arxiv.org/abs/2208.07338


## Reproducibility and review

Exact standard-library verifier completed with status PASS; see verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

Official TOP-14 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-14.txt
Lafferty and Song, Every graph with no K_8^{-4} minor is 7-colorable, arXiv:2208.07338, formulation reference: https://arxiv.org/abs/2208.07338
Exact source versions, statements and uses are described in report.md and source_notes.md.
