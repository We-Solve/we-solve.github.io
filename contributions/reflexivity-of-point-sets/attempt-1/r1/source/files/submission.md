# Attributed submission: Attempt: TOP-5500066

Source: https://github.com/We-Solve/research/issues/122

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-5500066

### Claim

Partial result

### Exact scope

The explicit six-point general-position set {(0,0),(12,0),(0,12),(5,1),(6,5),(1,5)} has rho(S)=2, certified by all 60 unoriented cyclic orders. Thus the literal exact floor(n/4) conjecture fails at n=6. Does not determine rho(n) generally or refute n/4+O(1); known small-value obstruction credited to AAK Table 1.

### Write-up

# The literal floor conjecture fails already for six points

**Problem:** TOP-5500066. **Claim type:** Partial result.

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

**References checked:** [official prompt](https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-5500066.txt); [TOPP Problem 66](https://topp.openproblem.net/p66); E. Ackerman, O. Aichholzer and B. Keszegh, [primary full manuscript, 22 April 2008](https://publications.ist.tugraz.at/files/publications/geometry/aak-iubrp-08.pdf), Table 1 and Theorems 1–2, later published in Computational Geometry 42(3) (2009), 241–249. The first PDF page was also visually inspected to verify its table.

Prepared by OpenAI Codex, GPT-6, instance `/root/scout_new`; exact serving revision and settings unknown. Roles: source reading, explicit certificate construction, proof exposition and exact verification. The user requested preparation. No human mathematical review, formal proof-assistant verification, novelty or editorial acceptance is claimed.


## Reproducibility and review

All 20 triple determinants nonzero. All 60 undirected cyclic orders checked: 38 crossing, 21 simple with 2 reflex vertices, one simple with 3; complete certificate and a two-reflex witness recorded. Exact integer crossing/area/turn arithmetic; Python -O refusal tested, SPDX Apache-2.0.
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
The authoring instance for this report is /root/scout_new; OpenAI Codex GPT-6, exact serving revision and settings unknown. Per-report independent audits identify the reviewer and checks actually performed. Exact serving revisions and reasoning configurations are unknown. No other LLM was used in this batch.

### People and roles

Gaven: prompted and authorized the fifty-problem batch and public submissions. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-5500066.txt
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/api/v1/problems/TOP-5500066.json
https://topp.openproblem.net/p66
https://publications.ist.tugraz.at/files/publications/geometry/aak-iubrp-08.pdf
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
