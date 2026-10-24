Problem: TOP-3204

Title: The main bound is the Goldberg–Seymour theorem; exact density translation and sharp families

Claim type: literature report

Scope: The main displayed inequality in TOP-3204 is affirmed for every finite loopless multigraph by the published Goldberg–Seymour theorem. The first of the prompt's two additional bounds follows as well. This report does not claim the final additional bound in its full generality. It gives a self-contained density translation and optimal edge-colorings for every uniform complete multigraph.

Assumptions and limitations: The general theorem is credited to Chen, Jing and Zang, not presented as a new proof. Their long proof is not independently checked in full here. Exact computations certify the explicit families and a small distinction between degree and density.

Write-up:

For a finite loopless multigraph put
$$
\Gamma(G)=\max_{\substack{U\subseteq V(G)\\ |U|\ge3\ {\rm odd}}}
\frac{2|E(G[U])|}{|U|-1},
$$
with maximum zero when there is no eligible set. Chen, Jing and Zang's Theorem 1.1 in the published *Proof of the Goldberg–Seymour conjecture on edge–colorings of multigraphs* [1] states
$$
\chi'(G)\le\max\{\Delta(G)+1,\lceil\Gamma(G)\rceil\}.
\tag{1}
$$
The journal version appeared in September 2025. Its December 2025 publisher correction [2] identifies PDF formatting and subject-index page-number errors, rather than a changed mathematical statement.

The prompt uses a different density parameter,
$$
w(G)=\max_{\substack{H\subseteq G\\|V(H)|\ge2}}
\left\lceil\frac{|E(H)|}{\lfloor |V(H)|/2\rfloor}\right\rceil.
$$
Here is the exact translation, including the even-order issue. For a fixed vertex set, retaining all available edges maximizes the ratio, so induced subgraphs suffice. If $|U|=2r$ then
$$
2|E(G[U])|\le 2r\Delta(G),
$$
and the corresponding rounded ratio is at most $\Delta(G)$. If $|U|=2r+1\ge3$, its rounded ratio is the corresponding term in $\lceil\Gamma(G)\rceil$. Since there are finitely many sets, taking a ceiling commutes with their maximum. Consequently
$$
w(G)\ge\lceil\Gamma(G)\rceil,\qquad
w(G)\le\max\{\Delta(G),\lceil\Gamma(G)\rceil\}.
$$
It follows that
$$
\max\{\Delta(G)+1,w(G)\}
=\max\{\Delta(G)+1,\lceil\Gamma(G)\rceil\}.
\tag{2}
$$
Combining (1) and (2) proves exactly the main inequality in the official prompt, for all finite loopless multigraphs. Empty graphs and graphs on at most one vertex have chromatic index zero and satisfy it directly.

This calculation does not assert $w(G)=\max\{\Delta(G),\lceil\Gamma(G)\rceil\}$. For example, the three-edge star has $\Delta=3$ and $w=2$. The maximum with $\Delta+1$ in (2) is the reason the different density conventions agree for the requested bound.

The additional inequality
$$
\chi'(G)\le\max\{\Delta(G),w(G)\}+1
$$
is immediate, because its right side is at least $\max\{\Delta(G)+1,w(G)\}$. The last recorded inequality,
$$
\chi'(G)\le\max\{\Delta(G),w(G)+1\},
\tag{3}
$$
also follows from the main theorem whenever $w(G)\ge\Delta(G)$: its right side then equals $w(G)+1$. When $w(G)<\Delta(G)$, (3) asks for $\chi'(G)\le\Delta(G)$, whereas (1) only supplies $\Delta(G)+1$. No inference across this gap is made here, and this report does not settle (3) in that remaining regime.

Independent exact family. Let $tK_n$ have $t\ge1$ parallel edges between every pair of distinct vertices. For $n\ge2$,
$$
\chi'(tK_n)=w(tK_n)=
\begin{cases}
t(n-1),&n\text{ even},\\
tn,&n\text{ odd}.
\end{cases}
\tag{4}
$$
Indeed, on a set of $s$ vertices the unrounded density is
$$
\frac{t\binom{s}{2}}{\lfloor s/2\rfloor}
=
\begin{cases}
t(s-1),&s\text{ even},\\
ts,&s\text{ odd}.
\end{cases}
$$
Maximizing over $2\le s\le n$ gives the stated $w$.

For odd $n$, label the vertices by $\mathbb Z/n\mathbb Z$ and color the edge $\{u,v\}$ by $u+v$. Edges at a fixed vertex have distinct colors. This is a coloring with $n$ colors. For even $n$, label the vertices by $\mathbb Z/(n-1)\mathbb Z\cup\{\infty\}$. Give a finite edge $\{u,v\}$ color $u+v$ and edge $\{\infty,u\}$ color $2u$, all modulo $n-1$. At a finite vertex $u$, the finite edges use every color except $2u$, which the edge to infinity supplies. At infinity all $2u$ are different since $n-1$ is odd. Thus this is an $(n-1)$-edge-coloring.

For $t$ parallel copies, use separate palettes indexed by the copy number. This yields the upper bound in (4). The matching-size density lower bound proves equality: a color class contains at most $\lfloor |U|/2\rfloor$ edges inside any $U$. For $n=1$ all three parameters are zero. These constructions are elementary round-robin factorizations, with no originality claim.

Verification:

The verifier checks all complete uniform multigraphs with $2\le n\le12$ and $1\le t\le4$, including every induced-subset density, every edge copy and every color conflict. It separately checks the star example and exhaustively determines that the Petersen graph has $\Delta=w=3$ and chromatic index $4$. The Petersen search has no heuristic cutoff; it proves infeasibility with three colors and records an explicit four-coloring. This illustrates why a degree-plus-one term can be needed even for simple graphs. These finite checks do not verify the published general proof. Python -O is explicitly rejected.

Remaining gaps: No new proof of the Goldberg–Seymour theorem and no general proof of the final additional bound (3) are claimed.

Models used: GPT-6, exact subversion not supplied, for source checking, density translation, construction, drafting and code.

Human contributors and roles: No human mathematical review is claimed. The general theorem belongs to Chen, Jing and Zang.

References:

[1] Guantao Chen, Guangming Jing and Wenan Zang, *Proof of the Goldberg–Seymour conjecture on edge–colorings of multigraphs*, Journal of Combinatorial Optimization 50, article 23 (2025), Theorem 1.1. https://doi.org/10.1007/s10878-025-01348-6

[2] Same authors, publisher correction, Journal of Combinatorial Optimization 51, article 1 (2026), published December 19, 2025. https://doi.org/10.1007/s10878-025-01372-6



## Reproducibility and review

PASS: 44 complete uniform multigraph cases with all induced-subset densities and full proper colorings, star Delta/w distinction, and complete Petersen 3-color infeasibility search plus explicit 4-coloring. Python -O rejected.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://doi.org/10.1007/s10878-025-01348-6
https://doi.org/10.1007/s10878-025-01372-6
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
