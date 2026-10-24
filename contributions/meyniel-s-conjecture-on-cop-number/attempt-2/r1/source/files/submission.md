# Dismantling gives a one-cop strategy on every finite connected chordal graph

Problem: prb_9b2927c839a54957bb2a779488b74d0f

Claim type: Partial result.

Exact scope: Any finite graph with a closed-neighborhood dismantling order is cop-win; in particular every finite connected chordal graph has cop number one.

## The retraction lemma, including the final capture step

Write N[v] for v and its neighbors. Suppose v≠u and N[v]⊆N[u]. Let H=G−v. The map r sending v to u and fixing all other vertices sends each allowed robber move (an edge or a stay) to an allowed move in H: edges incident with v map to edges or stays at u, by the closed-neighborhood inclusion.

If one cop wins on H, play that strategy in H against the visible shadow r(b) of the actual robber b. The cop’s moves are legal in G. When the cop first catches the shadow, either the actual robber is at the same vertex, giving capture, or the actual robber is v and the cop is u. In the second case, after the robber’s next move it is still in N[v]⊆N[u]. The cop captures on its next move (or capture occurred when the robber moved onto u). Thus a shadow capture cannot produce indefinite evasion at the deleted vertex.

Induction proves that any finite graph reducible to one vertex by successive deletions of such dominated vertices is one-cop-win. The cop starts at the position prescribed by the reduced graph strategy; the robber’s choice of starting position causes no exception.

## Why connected chordal graphs have the required order

Use the classical simplicial-vertex property of finite chordal graphs: every nonempty chordal graph has a vertex whose neighbors form a clique. A quick proof is as follows. Every minimal separator between two nonadjacent vertices is a clique; otherwise shortest paths between two nonadjacent separator vertices through the two separated components make an induced cycle of length at least four. Induction in the graphs consisting of a separator and each of two components gives simplicial vertices outside the separator (a noncomplete induced subgraph has two nonadjacent such vertices, at most one lying in the clique separator). Disconnected graphs are handled componentwise. This proves the property and its usual two-nonadjacent-vertices strengthening.

Let G be connected with more than one vertex and let v be simplicial. Choose a neighbor u. Every neighbor of v is u or adjacent to u, so N[v]⊆N[u]. Deleting v leaves the graph connected: any segment x–v–y of a path can be replaced by x–y because the neighbors of v form a clique. The remaining graph is induced and chordal. Continue until one vertex remains. The retraction lemma then supplies a winning one-cop strategy.

A nonempty graph requires at least one cop in the convention of the prompt. Hence c(G)=1 for every finite connected chordal graph. In particular c(G)≤√|V(G)| with constant one throughout this class. The proof uses finiteness in its induction and does not assert the same statement for infinite chordal graphs.

## Independent finite check

The verifier checks all labeled connected chordal graphs through five vertices. It both finds the closed-neighborhood dismantling order and solves the complete one-cop game by an independent finite reachability game computation, including robber stays and the cop-first move order. This checks the strategy reduction without treating the elimination order alone as a game solver.

## Attribution and limits

These are credited classical results, elementary deductions, or explicit reports of the stated literature theorem. No historical novelty or resolution outside the exact scope is claimed. The proof and checks below do not independently audit any other general-solution announcement in the archive.

## Checked references

- Official prb_9b2927c839a54957bb2a779488b74d0f prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_9b2927c839a54957bb2a779488b74d0f.txt
- R. Nowakowski and P. Winkler, Vertex-to-vertex pursuit in a graph, Discrete Mathematics 43 (1983), 235–239, primary publisher record: https://www.sciencedirect.com/science/article/pii/0012365X83901607


## Reproducibility and review

Exact standard-library verifier completed with status PASS; see verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

Official prb_9b2927c839a54957bb2a779488b74d0f prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_9b2927c839a54957bb2a779488b74d0f.txt
R. Nowakowski and P. Winkler, Vertex-to-vertex pursuit in a graph, Discrete Mathematics 43 (1983), 235–239, primary publisher record: https://www.sciencedirect.com/science/article/pii/0012365X83901607
Exact source versions, statements and uses are described in report.md and source_notes.md.
