Problem: prb_3b1bdc05e1234f8ba7cb2e96b6e659fa

Title: Oberwolfach for all sufficiently large orders and an explicit all-odd Hamilton family

Claim type: Literature report

Scope: The official classification is resolved by existing theory for all sufficiently large odd orders, uniformly over the prescribed 2-factor. A self-contained decomposition solves the single-cycle case for every odd order. No complete finite-exception classification is claimed.

Glock, Joos, Kim, Kühn and Osthus [1] prove a more general factor-decomposition theorem. Their Theorem 1.2 implies that there is $n_0$ such that every odd $n\ge n_0$ and every 2-regular $n$-vertex graph $H$ have an $H$-decomposition of $K_n$. To apply their statement, use one factor type, multiplicity $(n-1)/2$, and for example the fixed constant $\alpha=1/4$; its multiplicity condition holds for every $n\ge3$.

The order threshold is uniform over $H$. The title of the source does not justify changing “sufficiently large” to “every”; the official prompt explicitly requests the finite classification as well. Even orders are impossible because the degree at a vertex in a union of $r$ spanning 2-factors is $2r$, whereas $K_n$ has degree $n-1$.

Here is a direct construction when $H=C_n$, valid for every odd $n=2m+1\ge3$. Use the vertices $\{\infty\}\cup\mathbb Z/(2m)\mathbb Z$. For $k=0,\ldots,m-1$, take the cycle with vertex sequence
$$
\infty,\ k,\ k-1,\ k+1,\ k-2,\ k+2,\ldots,
k-(m-1),\ k+(m-1),\ k-m,\ \infty,
$$
where all finite arithmetic is modulo $2m$. Its finite offsets are precisely $0,\pm1,\ldots,\pm(m-1),-m$, so it visits every finite vertex once.

We prove the $m$ cycles partition every edge. The infinity edges in cycle $k$ join $\infty$ to $k$ and $k-m$, giving all $2m$ such edges exactly once. Its finite edges fall into two collections:
$$
\{k-r,k+r\}\quad(1\le r\le m-1),
$$
with endpoint sum $2k$, and
$$
\{k+r-1,k-r\}\quad(1\le r\le m),
$$
with endpoint sum $2k-1$, modulo $2m$.

For an even residue $2k$, there are $m-1$ unordered pairs of distinct residues with this sum: the two solutions of $2x=2k$ are excluded, leaving $2m-2$ ordered choices. The first collection has that many distinct pairs and supplies all of them. Distinctness follows because swapping two pairs' endpoints would require $r+s=2m$, impossible for $1\le r,s\le m-1$.

For an odd residue $2k-1$, the equation $2x=2k-1$ has no solution, so there are exactly $m$ unordered pairs. The second collection supplies $m$ distinct ones: a swapped equality would require $r+s=2m+1$, impossible for $1\le r,s\le m$. As $k$ ranges over $0,\ldots,m-1$, the sums $2k$ and $2k-1$ cover every residue. Therefore every finite edge belongs to exactly one cycle. This proves the all-odd Hamilton case, including $n=3$. It is the classical Walecki construction; no novelty is claimed.

Verification: The checker writes every cycle explicitly for all odd orders $3$ through $101$, tests that every cycle is spanning and simple, and compares the multiset of used edges with $E(K_n)$, requiring multiplicity one. It separately checks the endpoint-sum pairing argument for each modulus. Exact integer certificates and counts are in verification.json. These families do not settle other cycle partitions at small orders, and the finite runs do not verify the general absorption theorem of [1]. Python -O is refused.

References checked:

[1] Stefan Glock, Felix Joos, Jaehoon Kim, Daniela Kühn and Deryk Osthus, *Resolution of the Oberwolfach problem*, arXiv:1806.04644, Theorem 1.2 and introduction. https://arxiv.org/pdf/1806.04644


Models used: OpenAI Codex GPT-6, exact serving revision and settings unknown, for source inspection, mathematical work, drafting and code. No independent human mathematical review or formal proof verification is claimed. Established results are credited; no originality claim is made.



## Reproducibility and review

50 exact Hamilton decompositions, odd orders 3..101; all edges once and endpoint-sum classes checked. Python -O explicitly rejected.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://arxiv.org/pdf/1806.04644
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
