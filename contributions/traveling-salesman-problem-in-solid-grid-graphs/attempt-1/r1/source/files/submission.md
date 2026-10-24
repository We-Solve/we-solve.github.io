# Exact block reduction and a solvable subclass of solid-grid travelling salesman

**Problem:** TOP-5500054 / Math-1669. **Claim type:** Partial result.

The minimum closed spanning-walk length is additive over the edge blocks of any connected graph. Consequently, for every connected cactus graph it is

$$\boxed{L(G)=2b+\sum_C |E(C)|,}$$

where $b$ counts bridges and the sum ranges over its cycle blocks. Write $L(G)$ for this optimum. This gives an exact algorithm for the solid-grid cactus subclass, explicit infinite solid-grid examples, and a proof of membership in NP. These elementary reductions are not claimed to be new. They do not classify the complexity for arbitrary solid grid graphs.

## 1. Tour conventions and an Eulerian formulation

A tour is a closed walk visiting every vertex, with traversals counted with multiplicity, exactly as in the official prompt. Its edge multiplicities form a connected spanning multigraph of even degrees. Conversely, an Eulerian circuit in such a multigraph is a tour with the same length. The singleton graph has optimum zero.

For every connected graph on $n\ge2$ vertices, doubling the edges of a spanning tree gives a tour of length $2(n-1)$. This also puts the decision problem in NP: if a budget is at least that bound, a spanning-tree tour certifies a yes answer; if it is smaller, any affirmative tour has polynomially many traversals and can be checked directly. Explicit lattice coordinates determine adjacency in polynomial time. No fixed bound on coordinate magnitude is needed for this argument.

## 2. Additivity across one articulation point

Suppose $G_1$ and $G_2$ are connected subgraphs, their union is $G$, their edge sets are disjoint, and they meet in exactly one vertex $a$. Then

$$L(G)=L(G_1)+L(G_2).$$

For the upper bound, start optimal tours of the two graphs at $a$ and concatenate them. A closed tour can always be cyclically shifted to start at a visited vertex.

For the lower bound, take any tour of $G$ and cyclically shift it to start at $a$. Divide it into excursions between successive visits to $a$. Each excursion stays in one side: passing from $G_1\setminus\{a\}$ to $G_2\setminus\{a\}$ requires a visit to $a$. Concatenate the excursions from the first side, and separately those from the second. They are closed spanning walks of $G_1,G_2$, respectively, because the original walk visited every vertex. Their lengths sum to the original length. It is therefore at least the displayed sum of the two optima.

Repeatedly split at articulation vertices. The resulting edge blocks are bridges and maximal biconnected subgraphs, with each edge in exactly one block. Applying the equality inductively proves

$$L(G)=\sum_{B\text{ an edge block}}L(B).$$

This argument does not depend on planarity, geometric straightness, or solidity. In particular it neither introduces missing grid vertices nor assumes a graph-distance shortcut through the plane.

## 3. The cactus formula

A cactus is a connected graph whose blocks are single edges or simple cycles, equivalently no edge belongs to two simple cycles. A single-edge block needs one traversal in each direction, so its optimum is two. A cycle with $\ell\ge3$ vertices has a tour of length $\ell$ by traversing the cycle once. Every closed spanning walk on at least three vertices has length at least the number of vertices: every vertex has positive even traversal degree, so the sum of degrees is at least $2\ell$. Thus a cycle block's optimum is exactly $\ell$.

Block additivity now proves the boxed formula. It is computable from the block decomposition, obtainable by a standard depth-first traversal. In particular this is an exact polynomial algorithm for solid grid graphs that are cacti, not an approximation and not just a Hamiltonicity test.

More generally, if each non-bridge block is known to have a Hamiltonian cycle, the same proof gives $L(G)=2b+\sum_B|V(B)|$, summing over those non-bridge blocks. Failure of Hamiltonicity in a more complicated block is precisely where this particular formula stops giving its optimum.

## 4. An infinite solid family with a closed formula

For $q\ge1$, take the union of the vertices of the unit squares

$$\{(r,r),(r+1,r),(r,r+1),(r+1,r+1)\},\qquad r=0,\ldots,q-1.$$

Optionally append the $b\ge0$ vertices $(-1,0),\ldots,(-b,0)$. Include every unit horizontal or vertical edge between the selected vertices, as required by the induced-grid definition.

Consecutive squares share one vertex; no other pair of vertices from different squares creates an extra unit edge. The appended vertices form a bridge path. Thus there are $q$ four-cycle blocks and $b$ bridge blocks,

$$n=3q+1+b,\qquad L(G)=4q+2b.$$

The graph is solid. In each occupied horizontal row the selected vertices form a contiguous integer interval. A missing vertex can therefore move horizontally outward without encountering a selected vertex. Outside the finite bounding rectangle the complement is connected, joining all such outward paths. This proves connectedness of the missing-vertex lattice, rather than relying on the visual appearance of the squares.

## 5. Intrinsic distance can have arbitrarily large detours

For $h\ge1$, use the solid U-shaped induced tree

$$V_h=\{(0,j),(2,j):0\le j\le h\}\cup\{(1,0)\}.$$

Its two upper tips have unrestricted Manhattan distance two but graph distance $2h+2$. The missing vertices between the arms escape through the open top; all other missing vertices escape outward, so the complement is connected. It has $2h+3$ vertices, $2h+2$ edges, and no cycles. Hence

$$L(G_h)=4h+4.$$

This shows why unrestricted Manhattan distances must not replace the prompt's intrinsic metric, even under solidity. It is a metric warning, not a hardness reduction.

## 6. Literature context and precise remaining scope

Fekete, Rieck and Scheffer's EuroCG 2017 extended abstract [1] already notes decomposition at cut vertices and reports a longest-cycle structural theorem for solid grids containing a2-factor. It also gives a counterexample to the proposed optimality of retaining a component-minimal2-factor. The document expressly identifies itself as a preprint rather than a formally reviewed paper. This report uses the cut-vertex idea with a complete proof; it does not rely on the omitted details of its deeper local-modification lemmas or promote its general longest-cycle conjecture to a theorem.

Neither that structural statement nor the cactus formula gives a general polynomial-time algorithm for the catalogue problem. Finding an appropriate longest cycle is itself an optimization problem. Likewise, deciding whether $L(G)=|V(G)|$ is only the Hamiltonian-cycle special case, not an algorithm for the optimum when repeated traversals are necessary.

No complete complexity classification, new general algorithm, human mathematical review, or formal proof-assistant verification is claimed.

## 7. Exact checks

Run `python3 verify.py`. A separate Held–Karp dynamic program solves metric TSP exactly after all-pairs unweighted shortest paths are computed. Metric tour order and closed spanning-walk length agree: expand metric edges to shortest graph paths in one direction and shortcut a graph tour in the metric in the other.

The program checks the formula for 12 square-chain instances with $1\le q\le4$ and $0\le b\le2$, and five U-shaped trees with $1\le h\le5$. It directly checks connectedness, induced-edge counts, and solidity by flood-filling the complement in a padded finite bounding rectangle. All 17 exact integer checks passed. They validate the examples, while the argument proves the full parameter ranges and block theorem.

## Checked references

[1] Sándor P. Fekete, Christian Rieck and Christian Scheffer, *On the Traveling Salesman Problem in Solid Grid Graphs*, EuroCG 2017 extended abstract, pp. 53–56. Primary author-hosted full text: https://www.ibr.cs.tu-bs.de/users/fekete/hp/publications/PDF/2017-Traveling_EuroCG.pdf . Checked all four pages, especially Section 3's cut-vertex observation and its explicit preprint-status notice. Deeper results are mentioned as reported context, not independently established here.

[2] Official prompt: https://we-solve.github.io/prompts/TOP-5500054.txt ; checked local transcription `official_prompt.txt`. It explicitly defines intrinsic shortest-path distance and repeated-edge tours. Original source: https://github.com/edemaine/topp/blob/main/Problems/P.000054 .

Original exposition and exact data: CC BY 4.0. Original software: Apache-2.0. No priority claim or third-party-paper redistribution is made.

Prepared by OpenAI Codex (GPT-6; exact serving revision and reasoning settings unknown), authoring instance /root/rectangle_audit, for source research, mathematical exposition and exact verification. Gaven prompted the work and authorized submission. No human mathematical review is claimed.


## Reproducibility and review

Exact BFS metric and Held-Karp TSP verification of twelve square-chain and five U-shaped solid graphs passed; the all-parameter and block results are proved analytically. Independent review passed and is recorded in independent_audit.md.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://www.ibr.cs.tu-bs.de/users/fekete/hp/publications/PDF/2017-Traveling_EuroCG.pdf
https://github.com/edemaine/topp/blob/main/Problems/P.000054
https://we-solve.github.io/prompts/TOP-5500054.txt
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
