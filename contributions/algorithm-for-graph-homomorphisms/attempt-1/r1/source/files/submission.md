Problem: prb_f51bd13298e34aa3b188362ff967236f

Title: The requested uniform single-exponential algorithm would contradict ETH

Claim type: conditional result

Scope: Assuming the Exponential Time Hypothesis, there is no constant $C>1$ for which graph homomorphism on all finite simple input pairs can be decided in $O(C^{|V(G)|+|V(H)|})$ time. The obstruction already occurs when $|V(H)|\le |V(G)|$. This is a consequence of an existing lower-bound theorem, with a separate elementary algorithm for graphs with a small vertex cover.

Assumptions and limitations: ETH is a hypothesis, so this does not give an unconditional negative answer. The cited reduction is used as a published research result and is not independently reconstructed by the accompanying finite computation. Polynomial factors in the encoding size do not affect the deduction.

Write-up:

Let $n=|V(G)|$ and $h=|V(H)|$. Cygan, Fomin, Golovnev, Kulikov, Mihajlin, Pachocki and Socała prove the following in Theorem 1 of *Tight Lower Bounds on Graph Embedding Problems* [1]: under ETH, for each fixed $d>0$ there is $a(d)>0$ such that, for reasonable nondecreasing functions $3\le h(n)\le n^d$, graph homomorphism cannot be decided in time $O(2^{a(d)n\log h(n)})$. Their Theorem 4 restates the result as a lower bound $h(n)^{a(d)n}$.

Apply this with $d=1$ and $h(n)=n$ for $n\ge3$. If the algorithm requested in prb_f51bd13298e34aa3b188362ff967236f existed, its running time on all instances with target order at most $n$ would be
$$
O(C^{n+h})\subseteq O(C^{2n})=2^{O(n)}.
$$
For every fixed $a>0$, the ratio $2n\log_2 C/(n\log_2 n)$ tends to zero. Thus this algorithm would in particular run within the forbidden $O(2^{a(1)n\log n})$ bound, contradicting [1]. Any fixed polynomial overhead is absorbed as well, since its logarithm is $O(\log n)$. This directly addresses a constant uniform in both input graphs; it is not a statement only about algorithms whose base is allowed to depend on $H$.

ETH here means that 3-SAT on $N$ variables has no $2^{o(N)}$-time algorithm. The implication proved is therefore
$$
\text{the requested uniform algorithm exists}\quad\Longrightarrow\quad\text{ETH fails}.
$$
No assertion that ETH has been proved is made.

An elementary algorithm identifies a tractable structural regime. Suppose a vertex cover $S\subseteq V(G)$ of size $\tau$ is supplied. Enumerate all $h^\tau$ maps $f:S\to V(H)$ and discard those that fail to preserve an edge inside $S$. The complement of $S$ is independent. For every $v\notin S$, form
$$
L_v=\bigcap_{u\in N_G(v)}N_H(f(u)),
$$
where an empty intersection means $V(H)$. A surviving map extends to all of $G$ if and only if every $L_v$ is nonempty. Necessity follows from preservation of each incident edge. For sufficiency, choose an arbitrary element of each $L_v$; there are no edges between vertices outside $S$, so these choices do not interfere.

With adjacency tables this takes $h^\tau$ times a polynomial in $n+h$. If a cover is not supplied, enumerating vertex subsets adds $2^n$ preprocessing, and a minimum cover can be found this way. In particular $\tau\log_2 h=O(n+h)$ gives the requested form of bound on that restricted class, with the constant depending on the fixed constant in this inequality. This structural upper bound coexists with the conditional obstruction for unrestricted input pairs.

Boundary cases are explicit. The empty source has a unique empty homomorphism, even to the empty target. A nonempty source cannot map to an empty target. An edgeless nonempty source maps to every nonempty target. For loopless targets, adjacent source vertices cannot receive the same image, as enforced by the adjacency test.

Verification:

The standard-library verifier compares exhaustive enumeration of all vertex maps with the vertex-cover algorithm for every labelled simple source graph on at most four vertices and every labelled simple target on at most three vertices, including empty graphs. The JSON records the number of instances, successful instances, and instances by source/target order. The test is a check of the elementary algorithm and edge cases, not a computational proof of ETH or of [1]. It explicitly refuses optimized Python, so its checks cannot disappear under Python -O.

Remaining gaps: The unconditional algorithm question is not settled here. The cited ETH lower bound is the external ingredient; the report supplies its precise specialization and an independently verified structural upper bound.

Models used: GPT-6, exact subversion not supplied, for source checking, mathematical deduction, drafting and code.

Human contributors and roles: No human mathematical review is claimed. The lower-bound theorem belongs to the authors of [1].

References:

[1] Marek Cygan, Fedor V. Fomin, Alexander Golovnev, Alexander S. Kulikov, Ivan Mihajlin, Jakub Pachocki and Arkadiusz Socała, *Tight Lower Bounds on Graph Embedding Problems*, arXiv:1602.05016, Theorems 1 and 4. https://arxiv.org/pdf/1602.05016



## Reproducibility and review

PASS: 912 exhaustive labelled graph pairs, sources of order 0..4 and targets 0..3; brute-force map enumeration agrees with the vertex-cover algorithm, including empty graphs. ETH lower-bound reduction is credited, not computationally verified. Python -O rejected.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://arxiv.org/pdf/1602.05016
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
