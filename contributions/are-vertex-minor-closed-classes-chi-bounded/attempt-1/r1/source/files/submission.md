# Attributed submission: Attempt: TOP-3239

Source: https://github.com/We-Solve/research/issues/110

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3239

### Claim

Literature report

### Exact scope

Davies Theorem 1.1 affirmatively settles every proper vertex-minor-closed class; precise forbidden-vertex-minor equivalence plus universal once-subdivision construction. No explicit polynomial or class-uniform bound claimed.

### Write-up

Problem: TOP-3239

Title: Davies's theorem settles the proper vertex-minor-closed question

Claim type: Literature report

Scope: The full existence assertion in the official question is an established theorem. This report also proves and certifies an explicit universal vertex-minor construction, explaining why properness and the operations in the statement matter.

James Davies proves exactly the following as Theorem 1.1 of [1]: every proper vertex-minor-closed class of finite graphs is $\chi$-bounded. Local complementation and vertex deletion in that paper have the definitions in the official prompt. Thus every class $\mathcal F$ in the question admits a function $f$ such that $\chi(G)\le f(\omega(G))$ for its nonempty members.

There is no claim here that the same function works for all proper classes, that it is polynomial, or that it is given by a numerical formula. The theorem is used as a literature result; its 28-page structural proof is not independently reconstructed by the finite verifier.

The correspondence with a forbidden-graph formulation is worth making explicit. Choose a finite graph $H\notin\mathcal F$, possible because the class is proper. Closure implies that no member of $\mathcal F$ has $H$ as a vertex-minor. Conversely, the class of all graphs with no $H$ vertex-minor is itself proper and vertex-minor closed, because the vertex-minor relation is transitive and $H$ is its own vertex-minor. Thus the official assertion and the existence of a $\chi$-bound for each fixed forbidden vertex-minor are equivalent. Taking a subclass preserves a given bound.

Here is an independent exact construction relevant to this equivalence. Let $S_n$ be obtained from $K_n$ by subdividing every edge exactly once, using a new vertex $z_{uv}$ for each pair $\{u,v\}$. All original vertices are independent, all new vertices are independent, and $z_{uv}$ is adjacent only to $u,v$. Hence $S_n$ is bipartite.

Every labelled graph $H$ on the $n$ original vertices is a vertex-minor of $S_n$. For each pair $u,v$, do the following:

- If $uv\notin E(H)$, delete $z_{uv}$.
- If $uv\in E(H)$, locally complement at $z_{uv}$ and then delete it.

At that moment $z_{uv}$ still has precisely the two neighbors $u,v$. Its local complementation toggles only $uv$, which has not been touched by any other intermediate vertex and was initially absent. It therefore adds the desired edge and changes no other adjacency. Processing every pair produces exactly $H$. This is a direct labelled construction, not a search over possible local-complement sequences.

Consequently the vertex-minor closure of the class of all bipartite graphs is the class of all finite graphs. Although bipartite graphs themselves have $\chi\le2$, they are not vertex-minor closed: local complementation at the center of $P_3$ already gives a triangle. Small chromatic number is not an invariant of local complementation. A class closed only under induced subgraphs is also insufficient for the theorem's hypotheses.

For comparison, if a graph has no edges, local complementation changes nothing, so the edgeless class is a proper closed class with bound $f=1$. If $S_n$ were admitted for every $n$ into a vertex-minor-closed class, the universal construction shows that class could not be proper. These observations identify the precise quantifiers without attempting to bound the structural function in [1].

Verification: The exact standard-library checker constructs $S_n$ for every labelled target graph of order $0$ through $5$, applies the explicit sequence above, and compares the final adjacency matrix with the target. It checks local complementation is an involution and preserves the edges incident with its center. The JSON gives the number of targets and operations. This verifies the construction on those finite cases, not Davies's general structural theorem. Python -O is refused.

References checked:

[1] James Davies, *Vertex-minor-closed classes are $\chi$-bounded*, arXiv:2008.05069v3, September 29, 2021, Theorem 1.1 and definitions in Section 2. https://arxiv.org/pdf/2008.05069


Models used: OpenAI Codex GPT-6, exact serving revision and settings unknown, for source inspection, mathematical work, drafting and code. No independent human mathematical review or formal proof verification is claimed. Established results are credited; no originality claim is made.



## Reproducibility and review

1100 labelled target graphs, orders 0..5; explicit local-complement/delete construction, involution checks and 15975 operations. Python -O explicitly rejected.
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

https://arxiv.org/pdf/2008.05069
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
