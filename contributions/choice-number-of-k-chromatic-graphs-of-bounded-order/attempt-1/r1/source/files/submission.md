# Attributed submission: Attempt: TOP-3241

Source: https://github.com/We-Solve/research/issues/111

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3241

### Claim

Literature report

### Exact scope

Main balanced multipartite assertion for m=1,2,3, refined n<=2k+1 and n<=3k with n-k even, sharp arbitrary-list triple-part obstruction; no arbitrary-m or general m4 claim.

### Write-up

Problem: TOP-3241

Title: The m≤3 cases and sharp arbitrary-list obstructions from the general choice bound

Claim type: Literature report

Scope: The main assertion holds for all $k$ when $m=1,2,3$. The refined statement holds for $n\le2k+1$ and also for $2k+2\le n\le3k$ with $n-k$ even. These ranges follow from established choice-number theorems. The arbitrary-$m$ claim and the general $m=4$ bound are not settled here.

Noel, West, Wu and Zhu [1], Theorem 1.3, prove that every graph of order $N$ and chromatic number $k$ satisfies
$$
\mathrm{ch}(G)\le
\max\left\{k,\left\lceil\frac{N+k-1}{3}\right\rceil\right\}.
\tag{1}
$$
Their paper also states the sharp values
$$
\mathrm{ch}(K_{3*k})=\left\lceil\frac{4k-1}{3}\right\rceil
$$
and, more generally, Theorem 1.2 for complete multipartite graphs with only singleton and triple parts. The Ohba theorem, proved by Noel, Reed and Wu [2], gives $\mathrm{ch}(G)=k$ when $N\le2k+1$.

For $m=1$, a $k$-chromatic graph on at most $k$ vertices is $K_k$, so equality is immediate. For $m=2$, Ohba's theorem gives $\mathrm{ch}(G)=k=\mathrm{ch}(K_{2*k})$. For $m=3$, substitute $N\le3k$ in (1). The ceiling $\lceil(4k-1)/3\rceil$ is at least $k$, so
$$
\mathrm{ch}(G)\le\left\lceil\frac{4k-1}{3}\right\rceil
=\mathrm{ch}(K_{3*k}),
$$
which is the complete requested inequality for that value of $m$. The constants do not depend on an individual list assignment.

For the refined assertion with $k\le n\le2k+1$, choose a balanced complete $k$-partite graph on exactly $n$ vertices. Its largest part has size $\lceil n/k\rceil$ and Ohba gives its choice number $k$. Every comparison graph with at most $n$ vertices and chromatic number $k$ has the same choice number.

If $2k+2\le n\le3k$ and $n-k$ is even, set $t=(n-k)/2$ and take $t$ parts of size 3 and $k-t$ singleton parts. This graph has order $n$ and exactly $k$ nonempty parts. Since $n>2k$, its maximum part size is $3=\lceil n/k\rceil$. Theorem 1.2 of [1] attains the right side of (1) on it. Since that right side is nondecreasing in the order, it dominates the choice number of every $k$-chromatic graph on at most $n$ vertices. This proves the stated refined range. The case $k=1$ consists of nonempty edgeless graphs and has choice number one throughout.

For clarity, here is the exact obstruction underlying the sharp triple-part value. Let $U$ have $2k-1$ colors and partition it into three sets $X_1,X_2,X_3$ whose sizes differ by at most one. On the $r$th vertex of every triple part give list $U\setminus X_r$. These lists have empty intersection within a part, so every part must use at least two colors. Colors used on different parts must be disjoint, because all such vertices are adjacent. Thus an $L$-coloring would need at least $2k$ colors from a universe of size $2k-1$, impossible.

The smallest list size is
$$
2k-1-\left\lceil\frac{2k-1}{3}\right\rceil
=\left\lceil\frac{4k-1}{3}\right\rceil-1.
$$
Trim larger lists to this size. Trimming cannot create a coloring. Therefore the displayed upper bound is sharp for every $k\ge2$; $k=1$ is immediate. This counting argument explicitly uses arbitrary vertex lists rather than a common palette of size $k$.

Verification: The checker constructs and checks the obstruction for $k=2,\ldots,30$. For $k=2,3,4$ it independently enumerates every assignment of universe colors to parts or to “unused,” checking that no partition of colors hits every vertex list. Such a partition exists if and only if an $L$-coloring exists, since different parts must have disjoint palettes. It also checks the integer ceilings and refined extremal-part parameters over finite ranges. Python -O is refused. The finite work does not replace the proof of (1) or Ohba's theorem, which remain credited external ingredients.

For $m=4$, (1) supplies $\lceil(5k-1)/3\rceil$, not the conjectured $\lceil(3k-1)/2\rceil$. No equality of those different bounds is asserted.

References checked:

[1] Jonathan A. Noel, Douglas B. West, Hehui Wu and Xuding Zhu, *Beyond Ohba's Conjecture: A bound on the choice number of k-chromatic graphs with n vertices*, arXiv:1308.6739v3, Theorems 1.1–1.3 and Construction 1.4. https://arxiv.org/html/1308.6739v3

[2] Jonathan A. Noel, Bruce A. Reed and Hehui Wu, *A proof of a conjecture of Ohba*, arXiv:1211.1999; Journal of Graph Theory 79 (2015), 86–102. https://arxiv.org/pdf/1211.1999


Models used: OpenAI Codex GPT-6, exact serving revision and settings unknown, for source inspection, mathematical work, drafting and code. No independent human mathematical review or formal proof verification is claimed. Established results are credited; no originality claim is made.



## Reproducibility and review

29 sharp triple-part list certificates, complete palette-allocation checks for k=2,3,4, and 2500 refined parameter checks. Python -O explicitly rejected.
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

https://arxiv.org/html/1308.6739v3
https://arxiv.org/pdf/1211.1999
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
