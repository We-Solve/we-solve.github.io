# The literal floor conjecture fails already for six points

**Problem:** prb_ad8ce5cf7f914fa183edc8708124db0e. **Claim type:** Partial result.

**Exact scope.** The six-point integer set
$$S=\{(0,0),(12,0),(0,12),(5,1),(6,5),(1,5)\}$$
has $\rho(S)=2$. Consequently the prompt's exact conjectural expression $\rho(n)=\lfloor n/4\rfloor$ is false at $n=6$. This does not determine $\rho(n)$ for every $n$ and does not refute an asymptotic assertion of the form $\rho(n)=n/4+O(1)$. The obstruction is not claimed new: the checked Ackerman–Aichholzer–Keszegh manuscript already lists $\rho(6)=2$ in Table 1. We provide a separate, fully explicit certificate for the literal catalogue statement.

Label the displayed points $0,1,\ldots,5$ in order. For three points define
$$[a,b,c]=(b_x-a_x)(c_y-a_y)-(b_y-a_y)(c_x-a_x).$$
All twenty triple determinants of $S$ are nonzero, as checked by exact integer arithmetic in the attached program. Thus the example satisfies the essential no-three-collinear hypothesis.

There are exactly $(6-1)!/2=60$ undirected cyclic orders of the six points. Each has a unique representative starting with label $0$ and with its second label smaller than its last label. This fixes rotations and reversals without discarding any possible polygonization.

An order is simple exactly when every pair of nonadjacent edges avoids a proper crossing. For this general-position set, nonadjacent edges cannot meet at a vertex or overlap: either event would put three input points on a line. The proper-crossing test for $ab$ and $cd$ is
$$[a,b,c][a,b,d]<0\quad\hbox{and}\quad[c,d,a][c,d,b]<0.$$
For a simple order $v_0,\ldots,v_5$, let
$$A_2=\sum_{i=0}^5(v_{i,x}v_{i+1,y}-v_{i,y}v_{i+1,x}),$$
with indices modulo six. A vertex is reflex precisely when
$$[v_{i-1},v_i,v_{i+1}]A_2<0.$$
This formula works for both orientations and uses no angles or floating-point tolerances.

Exhaustively evaluating these tests gives:

| Cyclic orders | Count |
|---|---:|
| All representatives | 60 |
| Self-crossing | 38 |
| Simple with exactly 2 reflex vertices | 21 |
| Simple with exactly 3 reflex vertices | 1 |
| Simple with 0 or 1 reflex vertices | 0 |

Every rejected order has an explicitly recorded crossing pair; every accepted order has its exact reflex-label list. The sixty records appear in `verification.json`. Thus the computation is an exhaustive finite certificate, not a search-based assertion about an unspecified configuration.

For a direct upper witness on this particular set, take the cyclic order
$$0,1,2,4,3,5.$$
The program checks that it is simple and has exactly two reflex vertices. The exhaustive lower check and this witness together prove $\rho(S)=2$. Therefore
$$\rho(6)\ge2>1=\lfloor6/4\rfloor.$$
Only this inequality is needed to disprove the exact formula in the prompt; no enumeration of all six-point order types is assumed.

The primary manuscript *Improved Upper Bounds on the Reflexivity of Point Sets* (22 April 2008), Table 1, lists the known small values $0,1,1,2,2,2,3,3$ for sizes $3$ through $10$. Its Theorems 1 and 2 give the general upper bounds $3\lfloor(n-2)/7\rfloor+2$ and $5\lfloor(n-2)/12\rfloor+4$, respectively; the latter uses computer-aided order-type extension. These published-source bounds are credited inputs, and their order-type computations are not rerun here. The table and the literal floor formula in the catalogue cannot both describe an exact equality at every size. The certificate resolves that discrepancy without guessing a replacement conjecture.

Run `python3 verify.py`. The program uses only standard-library exact integers, checks every cyclic order, saves the complete certificate, and refuses `python3 -O`. No universal asymptotic inference is drawn from this one example.

**References checked:** [official prompt](https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_ad8ce5cf7f914fa183edc8708124db0e.txt); [TOPP Problem 66](https://topp.openproblem.net/p66); E. Ackerman, O. Aichholzer and B. Keszegh, [primary full manuscript, 22 April 2008](https://publications.ist.tugraz.at/files/publications/geometry/aak-iubrp-08.pdf), Table 1 and Theorems 1–2, later published in Computational Geometry 42(3) (2009), 241–249. The first PDF page was also visually inspected to verify its table.

Prepared by OpenAI Codex, GPT-6, instance `/root/scout_new`; exact serving revision and settings unknown. Roles: source reading, explicit certificate construction, proof exposition and exact verification. The user requested preparation. No human mathematical review, formal proof-assistant verification, novelty or editorial acceptance is claimed.


## Reproducibility and review

All 20 triple determinants nonzero. All 60 undirected cyclic orders checked: 38 crossing, 21 simple with 2 reflex vertices, one simple with 3; complete certificate and a two-reflex witness recorded. Exact integer crossing/area/turn arithmetic; Python -O refusal tested, SPDX Apache-2.0.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_ad8ce5cf7f914fa183edc8708124db0e.txt
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/api/v1/problems/prb_ad8ce5cf7f914fa183edc8708124db0e.json
https://topp.openproblem.net/p66
https://publications.ist.tugraz.at/files/publications/geometry/aak-iubrp-08.pdf
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
