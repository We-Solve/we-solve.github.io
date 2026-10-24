# Attributed submission: Attempt: TOP-3202

Source: https://github.com/We-Solve/research/issues/108

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3202

### Claim

Partial result

### Exact scope

Full constructive kernel/stable-matching proof of Galvin's bipartite multigraph list-edge theorem, arbitrary finite lists and parallel edges; not the general nonbipartite conjecture.

### Write-up

Problem: TOP-3202

Title: A constructive kernel proof for all bipartite multigraphs and arbitrary edge lists

Claim type: Partial result

Scope: The conjectured equality holds for every finite bipartite loopless multigraph. The proof below handles parallel edges and lists with unrelated palettes, and supplies an exact algorithm. This is Galvin's established theorem, credited in [1]; it does not settle nonbipartite multigraphs.

The earlier contribution Math-1093-A1 cites Galvin's abstract, then proves simple pseudoforest cases by leaf extension. This report adds the full bipartite kernel argument and constructive verification, rather than repeating that restricted deletion proof.

Let the bipartition be $A,B$ and let $\Delta$ be the maximum degree. There is a proper ordinary edge-coloring $c:E\to\{1,\ldots,\Delta\}$. For completeness, pad both parts to equal order and add parallel edges until all degrees are $\Delta$. The total deficits on the two parts agree, so pairing remaining deficits terminates. In a $\Delta$-regular bipartite multigraph, counting incident edges gives $|N(S)|\ge|S|$ for every subset of either part; Hall's theorem gives a perfect matching. Removing one repeatedly proves the asserted edge-coloring. Restrict it back to the original edges.

Orient the line graph as follows. For edges meeting in $A$, direct the adjacency toward the smaller value of $c$; for edges meeting in $B$, direct it toward the larger value. Parallel edges share both ends and consequently have both directed arcs. This causes no problem: the directed graph is allowed digons, and its underlying adjacency is still the line graph. If $c(e)=i$, there are at most $i-1$ outgoing neighbors at its $A$ end and at most $\Delta-i$ at its $B$ end. Therefore its number of outgoing neighbors is at most $\Delta-1$.

A kernel of a directed graph is an independent vertex set $K$ such that every vertex outside $K$ has an outgoing arc to $K$. Every induced subdigraph of this orientation has a kernel. Indeed, consider any subset of original edges, let vertices of $A$ prefer smaller colors and vertices of $B$ prefer larger colors, and take a stable matching with those strict preferences. A stable matching exists by the proposal algorithm: unmatched vertices in $A$ propose successively along their remaining edges, and each vertex of $B$ retains its preferred proposal, rejecting any former inferior one. Each edge is proposed at most once, so termination is finite. Parallel edges are treated as distinct possible contracts; properness of $c$ gives strict preferences at each endpoint.

The matching is independent in the line graph. An unchosen edge either has an endpoint already matched along a preferred edge or would block stability. A preferred matching edge at an endpoint is exactly an outgoing neighbor in the orientation. Thus the stable matching is a kernel. The same argument works for every subset of edges, proving the required induced-subgraph property.

We use the following elementary kernel-list lemma. If every induced subdigraph of $D$ has a kernel and each vertex $v$ has a list of size at least $d_D^+(v)+1$, the underlying graph has a proper list coloring. Pick a color $\alpha$ occurring in a list, take a kernel $K$ of the induced subdigraph on the vertices whose lists contain $\alpha$, and color $K$ with $\alpha$. Delete $K$ and remove $\alpha$ from remaining lists. Every uncolored vertex that loses this color has an outgoing neighbor in $K$, so its outgoing-neighbor count also falls by at least one. The list-size condition is preserved; vertices not losing the color preserve it as well. Induction on the number of vertices finishes. The kernel cannot be empty when the color class is nonempty.

Applying this lemma to lists of size at least $\Delta$ colors all original edges from their individual lists. The degree lower bound and the common-list assignment give
$$
\Delta=\chi'(G)\le\chi'_\ell(G)\le\Delta.
$$
For an edgeless graph both indices are zero; the proof need not choose a color. Connectivity and simplicity are not required.

Verification: The checker implements the stable-matching kernels and iterative list-coloring algorithm. It checks every loopless bipartite multigraph on fixed parts of orders 2 and 3 with each edge multiplicity in $\{0,1,2\}$, using deterministic unrelated lists of size $\Delta$. It additionally checks every assignment of 3-element lists from a 4-color universe on $K_{2,3}$. For each step it checks the kernel, outgoing-neighbor bound, residual list inequality, and final list membership and conflicts. These are exact finite audits of the constructive argument; they are not assertions that bounded-palette enumeration alone proves universal choosability. Python -O is refused.

References checked:

[1] Fred Galvin, *The List Chromatic Index of a Bipartite Multigraph*, Journal of Combinatorial Theory, Series B 63 (1995), 153–158, DOI 10.1006/jctb.1995.1011. Primary statement/abstract: https://www.sciencedirect.com/science/article/pii/S0095895685710118

[2] Earlier Math-1093-A1, https://we-solve.github.io/contributions/edge-list-coloring-conjecture/attempt-1/r1/


Models used: OpenAI Codex GPT-6, exact serving revision and settings unknown, for source inspection, mathematical work, drafting and code. No independent human mathematical review or formal proof verification is claimed. Established results are credited; no originality claim is made.



## Reproducibility and review

729 bipartite multigraphs with multiplicities 0..2 plus all 4096 three-list assignments from four colors on K2,3; 17861 kernel steps audited. Python -O explicitly rejected.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


[Executable fenced material omitted from this text-only security-screened package; original retained privately.]


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected scopes, reviewed statements and proofs, checked sources, wrote the independent TOP-54 interpolation checker, reran all attached programs, assembled and submitted.
OpenAI Codex (GPT-6), next_scout instance | version: unknown | reasoning: unknown | role: developed the number-theory reports; participated in separate LLM review.
OpenAI Codex (GPT-6), twoquad_audit instance | version: unknown | reasoning: unknown | role: developed the algebra reports; participated in separate LLM review.
OpenAI Codex (GPT-6), lattice_verify instance | version: unknown | reasoning: unknown | role: developed the graph-signing, coloring and complexity reports; participated in separate LLM review.
OpenAI Codex (GPT-6), psi_audit instance | version: unknown | reasoning: unknown | role: developed the topology reports; participated in separate LLM review.
OpenAI Codex (GPT-6), rectangle_audit instance | version: unknown | reasoning: unknown | role: developed the algorithms and complexity reports; participated in separate LLM review.
OpenAI Codex (GPT-6), scout_new instance | version: unknown | reasoning: unknown | role: developed the geometry reports; participated in separate LLM review.
The authoring instance for this report is /root/lattice_verify; OpenAI Codex GPT-6, exact serving revision/settings unknown. Per-report independent audits identify the reviewer and checks actually performed. Exact serving revisions and reasoning configurations are unknown. No other LLM was used in this batch.

### People and roles

Gaven: prompted and authorized the fifty-problem batch and public submissions. No human mathematical contribution or human verification is claimed.

### References

https://www.sciencedirect.com/science/article/pii/S0095895685710118
https://we-solve.github.io/contributions/edge-list-coloring-conjecture/attempt-1/r1/
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
