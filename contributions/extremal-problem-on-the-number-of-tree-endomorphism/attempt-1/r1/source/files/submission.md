# Attributed submission: Attempt: TOP-3283

Source: https://github.com/We-Solve/research/issues/112

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3283

### Claim

Literature report

### Exact scope

Csikvari-Lin Theorem 1.8 settles both tree endomorphism inequalities for every order; self-contained exact rooted homomorphism DP and endpoint formulas.

### Write-up

Problem: TOP-3283

Title: The tree-endomorphism inequality is Csikvári–Lin Theorem 1.8

Claim type: Literature report

Scope: The complete two-sided inequality in the prompt, for every finite tree and including the one-vertex case, is already proved in the primary literature. An exact rooted-tree dynamic program and an exhaustive labelled-tree audit supplement the source identification.

Csikvári and Lin [1], Theorem 1.8, prove for every tree $T_n$ on $n$ vertices that
$$
|\mathrm{End}(P_n)|\le|\mathrm{End}(T_n)|\le|\mathrm{End}(S_n)|.
$$
This is exactly the official question. The paper defines endomorphisms as all adjacency-preserving maps, not only automorphisms or injective maps. Their proof is in Section 5. The related stronger assertion comparing $\mathrm{hom}(T_m,P_n)$ and $\mathrm{hom}(T_m,T_n)$ for arbitrary unequal tree orders is a separate conjecture in that source; it is not needed or asserted here. In particular, a naive assertion that every tree shift increases endomorphism count is unsafe: the paper explicitly gives a counterexample to that monotonicity.

Here is a self-contained exact evaluation method. Root a source tree $T$ at $r$. For each source vertex $v$ and target vertex $x$ of a graph $G$, let $D_v(x)$ count the homomorphisms of the source subtree below $v$ into $G$ that send $v$ to $x$. Then
$$
D_v(x)=\prod_{u\text{ child of }v}\left(\sum_{y\in N_G(x)}D_u(y)\right),
\qquad
\mathrm{hom}(T,G)=\sum_{x\in V(G)}D_r(x).
$$
A leaf has value one at every target vertex. To prove the recurrence, an edge $vu$ requires the image of $u$ to be a neighbor of $x$. Different child subtrees are disjoint and have no edges between them, so their choices multiply independently. Induction from the leaves proves the formula, with no assumption that the homomorphism is injective. For a source with $m$ vertices and a target with $N$ vertices and $M$ edges, the arithmetic operation count is $O(m(N+M))$; integer bit lengths are charged separately.

Taking $G=T$ computes the parameter in the question. Two useful endpoint formulas give independent checks. For $n\ge2$,
$$
|\mathrm{End}(S_n)|=(n-1)^{n-1}+(n-1).
$$
If the star center maps to itself, each leaf independently chooses any of the $n-1$ leaves. If the center maps to a leaf, there are $n-1$ choices and every source leaf must map to the center. These disjoint cases exhaust the maps. For $n=1$ there is exactly one map, so the formula is treated separately rather than using an ambiguous $0^0$ convention.

A homomorphism from $P_n$ to itself is a walk of length $n-1$ in $P_n$. If $A$ is the path's adjacency matrix and $\mathbf1$ is the all-one vector,
$$
|\mathrm{End}(P_n)|=\mathbf1^{\mathsf T}A^{n-1}\mathbf1.
$$
Repeated integer vector multiplication evaluates this without eigenvalue approximation. The singleton has walk length zero and again gives one.

Verification: Every labelled tree on $n=2,\ldots,7$ is generated from its Prüfer sequence; the singleton is added separately. The checker computes all endomorphism counts by the rooted recurrence, checks both inequalities, and compares the endpoints with the independent formulas. It also compares the recurrence with direct enumeration of all maps for every labelled tree on at most four vertices. Repetitions of isomorphism types are deliberate: the enumeration proves labelled coverage directly. The finite checks supplement rather than replace the all-order theorem in [1]. All counts are exact integers and Python -O is refused.

Assumptions and limitations: The universal inequality is credited to [1], not newly proved by finite enumeration. No equality-case classification beyond the computed tables is inferred.

References checked:

[1] Péter Csikvári and Zhicong Lin, *Graph Homomorphisms between Trees*, arXiv:1307.6721, Theorem 1.8 and Section 5; published in Electronic Journal of Combinatorics 21(4) (2014), Paper P4.9, DOI 10.37236/4096. https://arxiv.org/pdf/1307.6721


Models used: OpenAI Codex GPT-6, exact serving revision and settings unknown, for source inspection, mathematical work, drafting and code. No independent human mathematical review or formal proof verification is claimed. Established results are credited; no originality claim is made.



## Reproducibility and review

18249 labelled trees through order 7, 21 independent direct-map checks, exact path-walk and star endpoint formulas. Python -O explicitly rejected.
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

https://arxiv.org/pdf/1307.6721
https://www.combinatorics.org/ojs/index.php/eljc/article/view/v21i4p9
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
