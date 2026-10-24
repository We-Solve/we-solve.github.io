Problem: TOP-3192

Title: Exact optimal total colorings of all complete and complete bipartite graphs

Claim type: Partial result

Scope: A self-contained construction and lower-bound proof of
$$
\chi''(K_n)=
\begin{cases}n,&n\text{ odd},\\n+1,&n\text{ even},\end{cases}
\quad(n\ge1),
$$
and, for $m,n\ge1$,
$$
\chi''(K_{m,n})=
\begin{cases}\max(m,n)+1,&m\ne n,\\n+2,&m=n.\end{cases}
$$
These classical families realize both outcomes allowed by the conjecture. No general-graph conclusion is claimed.

For every nonempty graph, a vertex of degree $\Delta$ together with its incident edges requires $\Delta+1$ colors. This is the common lower bound. The following constructions also enforce adjacency between vertices, a condition that cannot be omitted from a total coloring.

For odd $n$, label the vertices by $\mathbb Z/n\mathbb Z$. Give vertex $i$ color $2i$ and edge $\{i,j\}$ color $i+j$. At vertex $i$, its incident edges have distinct colors, none equal to $2i$. Adjacent vertices have different colors because multiplication by 2 is invertible modulo odd $n$. This is a proper total coloring with $n=\Delta+1$ colors, including the singleton case.

For even $n$, restrict the odd construction on $K_{n+1}$ to $n$ vertices. It uses at most $n+1=\Delta+2$ colors. A total coloring with only $n$ colors is impossible. Its $n$ mutually adjacent vertices would use each color once. The edges of a given color form a matching avoiding its colored vertex, so use at most $(n-2)/2$ edges. Summing over $n$ colors could cover at most $n(n-2)/2$ edges, fewer than $n(n-1)/2$. Therefore $n+1$ is optimal.

For $K_{m,n}$, assume $m\le n$. If $m<n$, let the parts be $a_0,\ldots,a_{m-1}$ and $b_0,\ldots,b_{n-1}$. Use colors $\mathbb Z/n\mathbb Z$ and one extra color $\star$. Color edge $a_ib_j$ by $i+j\pmod n$, every $a_i$ by $\star$, and vertex $b_j$ by $m+j\pmod n$. At either endpoint the incident edge colors are distinct. At $b_j$, the missing row index $m$ ensures its vertex color is absent from its incident edges; at $a_i$, the extra vertex color is absent from all edges. Vertices in different parts receive disjoint palettes and vertices within a part are nonadjacent. Thus $\Delta+1=n+1$ colors suffice and are optimal.

If $m=n$, use the same edge colors $i+j\pmod n$, one extra color on every $a_i$ and another on every $b_j$. This gives $n+2$. To show $n+1$ is impossible, suppose such a coloring exists and let a vertex $a_i$ have color $\alpha$. No vertex of the other part can have color $\alpha$. Each $b_j$ has $n$ incident edges and its own forbidden vertex color, so with only $n+1$ available colors it must have an incident edge of color $\alpha$. Those $n$ edges form a matching saturating both parts. One is therefore incident with $a_i$, contrary to its vertex color. This proves the lower bound. It includes $K_{1,1}=K_2$, which needs three colors.

The formulas are classical; the primary 1967 paper [1] is credited. Its Theorems 1(iii) and 2(iii) were checked against the original three-page article. The proof here is complete, and no novelty is claimed.

Verification: The standard-library checker constructs every complete-graph coloring for $1\le n\le101$ and every complete-bipartite coloring for $1\le m,n\le20$. It checks vertex adjacency, adjacent edges, incident vertex-edge conflicts, palette size and the claimed value. For small instances it independently builds the total graph and runs an exact chromatic search to confirm optimality. This provides finite checks of the explicit formulas, while the lower bounds and constructions above prove them at every order. Python -O is refused.

Remaining scope: The total coloring conjecture for arbitrary finite simple graphs is not proved here.

Reference checked:

[1] Mehdi Behzad, Gary Chartrand and John K. Cooper, Jr., *The Colour Numbers of Complete Graphs*, Journal of the London Mathematical Society s1-42 (1967), 226–228. [Original article, Radboud-hosted mirror](https://www.math.ru.nl/OpenGraphProblems/Gerjan/Behzad%20Chartrand%20Cooper.pdf); [publisher record](https://academic.oup.com/jlms/article-abstract/s1-42/1/226/843679).


Models used: OpenAI Codex GPT-6, exact serving revision and settings unknown, for source inspection, mathematical work, drafting and code. No independent human mathematical review or formal proof verification is claimed. Established results are credited; no originality claim is made.



## Reproducibility and review

501 exact family colorings and 13 independent optimal total-graph chromatic searches. Python -O explicitly rejected.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://academic.oup.com/jlms/article-abstract/s1-42/1/226/843679
https://www.math.ru.nl/OpenGraphProblems/Gerjan/Behzad%20Chartrand%20Cooper.pdf
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
