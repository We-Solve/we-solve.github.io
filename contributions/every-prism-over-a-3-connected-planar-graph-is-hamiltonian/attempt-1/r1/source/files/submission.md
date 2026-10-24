# Attributed submission: Attempt: TOP-3176

Source: https://github.com/We-Solve/research/issues/106

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3176

### Claim

Literature report

### Exact scope

Reports Spacapan's 3-connected planar G_n counterexamples for n>25; adds full constructive good-even-cactus prism criterion and a necessary cut condition. Does not claim to enumerate counterexample Hamilton cycles.

### Write-up

Problem: TOP-3176

Title: Špacapan's counterexample and constructive positive certificates via even cactuses

Claim type: Literature report

Scope: The universal prism-Hamiltonicity conjecture in the official prompt is false by Špacapan's established counterexample. This report credits the source construction and adds a complete constructive certificate for the positive class of graphs with a spanning good even cactus. The finite computation verifies the latter class, not the full non-Hamiltonicity proof.

Špacapan [1], Lemma 2.5 and Theorem 2.6, constructs plane graphs $G_n$ that are 3-connected for every $n$ and not prism-Hamiltonian when $n>25$. In particular $G_{26}$ is a counterexample to the exact universal assertion in TOP-3176. Planarity and 3-connectivity belong to the base graph, and the non-Hamiltonian graph is its Cartesian product with $K_2$, not the base graph alone.

The source glues its fixed plane gadgets in a chain and adds two vertices adjacent along the two sides. Its obstruction is a path-cover argument in the prisms of consecutive gadgets. A Hamilton cycle has at most eight edges incident with the four lifted added vertices; sufficiently many consecutive gadgets force a pair with no such cycle attachment, and the gadget lemmas rule out the necessary spanning path covers. This paragraph is a source summary rather than a new proof. The exact primary construction and its lemmas are the external mathematical ingredient, and no enumeration of all Hamilton cycles in $G_{26}\square K_2$ is claimed.

A self-contained positive criterion explains why simpler spanning-tree arguments do not automatically contradict this result. A good even cactus is a connected graph in which each block is an edge or an even cycle and each vertex belongs to at most two blocks. Every such graph $T$ with at least two vertices has a Hamilton cycle in $T\square K_2$. Moreover that cycle can contain every vertical edge above a vertex belonging to exactly one block.

For an even cycle $v_0,\ldots,v_{r-1}$, traverse
$$
(v_i,i\bmod2),\ (v_i,1-i\bmod2)\qquad(i=0,\ldots,r-1)
$$
in the indicated order and close the walk. Consecutive pairs use a vertical edge; the edges between pairs follow the base cycle in a common layer. Since $r$ is even, the last pair closes to the first in the correct layer. This is a Hamilton cycle using every vertical edge. An edge block has the four-cycle prism with the same property.

To join two blocks or subcactuses meeting only at a cutvertex $x$, take their two certified Hamilton cycles, each containing $e_x=((x,0),(x,1))$, and remove that common edge from their union. Each becomes a path between the two copies of $x$, their internal vertices are disjoint, and together they form a single spanning cycle. The vertical edges at every other good vertex are preserved. Induction on the block tree proves the assertion. The “at most two blocks per vertex” condition ensures the shared vertex is good in each side when it is used for this splice. The singleton is treated separately: its prism is $K_2$, not a Hamiltonian simple graph under the usual cycle-length convention.

If a graph $G$ on at least two vertices contains such a cactus as a spanning subgraph, the constructed cycle is still present in $G\square K_2$. This criterion is also Proposition 3.2 and Corollary 3.3 of [1]; the construction above reproduces its elementary content with credit. Merely having a spanning cactus with odd cycles, or a closed spanning walk visiting each vertex twice, does not supply this even-block certificate.

There is also a useful necessary condition. If $G\square K_2$ is Hamiltonian, then for every nonempty vertex set $S$,
$$
\mathrm{comp}(G-S)\le2|S|.
$$
Delete the $2|S|$ lifted vertices from a Hamilton cycle; at most $2|S|$ path components remain. Every component of the remaining prism lies inside one component of $G-S$, and every base component has lifted vertices, giving the inequality. This is a necessary condition only. Its failure for a star with three leaves, for example, does not give a 3-connected planar counterexample.

Verification: The exact checker builds good even cactus chains with bridge, 4-cycle, 6-cycle and 8-cycle blocks; splices their lifted cycles; and verifies each vertex once, every cycle edge, and all surviving good-vertex rungs. It separately checks the cut condition on all subsets of those finite examples and demonstrates a failure on $K_{1,3}$. These computations audit the positive construction and necessary condition. They do not claim a small replacement for the source's negative proof. Python -O is refused.

Reference checked:

[1] Simon Špacapan, *A counterexample to prism-hamiltonicity of 3-connected planar graphs*, arXiv:1906.06683v1, June 16, 2019, Lemma 2.5, Theorem 2.6, Proposition 3.2 and Corollary 3.3. https://arxiv.org/pdf/1906.06683


Models used: OpenAI Codex GPT-6, exact serving revision and settings unknown, for source inspection, mathematical work, drafting and code. No independent human mathematical review or formal proof verification is claimed. Established results are credited; no originality claim is made.



## Reproducibility and review

8 exact cactus prism Hamilton cycles, 2413 cut-subset checks, and K1,3 negative cut witness. Python -O explicitly rejected.
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

https://arxiv.org/pdf/1906.06683
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
