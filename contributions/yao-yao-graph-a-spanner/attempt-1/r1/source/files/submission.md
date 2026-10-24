# Attributed submission: Attempt: TOP-5500070

Source: https://github.com/We-Solve/research/issues/38

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-5500070

### Claim

Literature report

### Exact scope

Credited primary-source parity separation: every odd cone count>=3 is negative, every even count>=84 is positive, and multiples of6>=36 are positive; primary abstract for negative k=4; exact self-contained disconnected witnesses for k=1,2. No full classification of remaining even counts or claim that every coverage gap is currently open.

### Write-up

# Yao–Yao spanners: published parity separation and exact low-cone witnesses

**Problem:** TOP-5500070 / AMR-054-0070. **Claim category:** Literature report.

The original problem record predates decisive results for large cone counts. The checked primary literature proves that **every odd cone count at least three fails**, while **every even cone count at least 84 succeeds**. An earlier positive theorem also covers multiples of six starting at 36. This is a credited update, not a new spanner theorem or a complete classification of every remaining even value.

## Definition and the relevant quantifiers

Fix $k$ equally spaced cone directions, translated identically at every vertex of a finite set $S\subset\mathbb R^2$. First choose a shortest outgoing edge per nonempty cone. Then, at each destination, choose a shortest incoming edge per cone of origins. Finally forget orientations. This is the catalogue's $YY_k$, with Euclidean edge lengths and consistently resolved ties and boundary rays.

For a **fixed** cone count, the positive assertion is

$$\exists t_k<\infty\ \forall S\ \forall u,v\in S:
d_{YY_k(S)}(u,v)\le t_k\lVert u-v\rVert.$$

The negative assertion reverses the first two quantifiers: for every proposed finite bound there is a finite input violating it. Different counterexample inputs may be required for different bounds. A single connected finite graph with large dilation does not establish unbounded dilation for a fixed $k$.

## Theorems checked in their primary sources

To avoid confusing the cone count with auxiliary indices, the table uses $r$ for the papers' integer parameter and $k$ for the actual number of cones.

| Source | Original parameter statement | Consequence for cone count $k$ |
|---|---|---|
| Jin–Li–Zhan [1], Theorem 5 | For each $r\ge1$, a sequence of $YY_{2r+1}$ instances has unbounded stretch | Every odd $k\ge3$ is not a uniform constant spanner |
| Li–Zhan [2], Theorem 2 | $YY_{2r}$ is a $t_r$-spanner for every $r\ge42$ | Every even $k\ge84$ is a uniform constant spanner |
| Bauer–Damian [3], main result | $YY_{6r}$ is a spanner for every $r\ge6$ | Every multiple of six $k\ge36$ is a uniform constant spanner |
| Kanj–Xia [4], published abstract | $YY_4$ on complete Euclidean graphs is not a spanner | The four-cone case is negative |

For [2], the published asymptotic stretch factor is $6.03+O(r^{-1})$. That expression is asymptotic as the index grows; it is not a claim that every finite case has stretch at most 6.03. In particular, the threshold in cone-count notation is **84**, not 42. The paper's definition uses half-open cones and arbitrary consistent distance tie-breaking, matching the catalogue convention.

The odd theorem disproves the stronger historical guess that there is a threshold beyond which **all** cone counts work: every threshold has larger odd counterexamples. It does not contradict an eventual-even theorem. Nor does increasing the cone count give a monotonicity argument: both edge-selection steps depend on the cone decomposition.

The earlier multiple-of-six result additionally certifies these positive counts below 84:

$$36,42,48,54,60,66,72,78.$$

## A self-contained exact witness for $k=1$ and $k=2$

The following four integer-coordinate points provide a useful independently checkable boundary case:

$$a_0=(0,0),\quad a_1=(0,2),\quad b_0=(4,1),\quad b_1=(4,3).$$

For two cones take the horizontal dividing rays, so the cones are the upper and lower half-planes with a consistent half-open convention. All four heights are distinct, so no pair lies on a boundary ray. Within each column, the distance is 2. Every cross-column distance is at least $\sqrt{17}>2$.

The first Yao step therefore contains the four within-column directed edges and only two cross-column directed edges:

$$a_1\to b_1,\qquad b_0\to a_0.$$

Indeed, $a_1$ has no point from its own column above it and chooses $b_1$; $b_0$ has no point from its own column below it and chooses $a_0$. Every other relevant cone chooses a same-column point at distance 2.

At $b_1$, the incoming origins $b_0$ and $a_1$ are both in the lower cone, and the former is closer. Thus $a_1\to b_1$ is discarded. At $a_0$, the incoming origins $a_1$ and $b_0$ are both in the upper cone, and the former is closer. Thus $b_0\to a_0$ is discarded. The within-column edges survive. The final undirected graph has precisely

$$\{a_0a_1,\ b_0b_1\}.$$

It is disconnected, so it is not a spanner for any finite stretch factor. There are no distance ties in any selection. A simultaneous rotation of this example accommodates any initially chosen orientation of the two-cone system.

If the definition is extended to a single full-plane cone, each point's unique nearest neighbour is its same-column partner, and the same disconnected graph results. This supplies $k=1$ directly without extending the range of the odd theorem beyond its statement. No novelty is claimed for these elementary examples.

## Precisely what this report leaves unclassified

The three main infinite-family theorem statements do not decide the following thirty even counts between eight and 82:

$$
8,10,12,14,16,18,20,22,24,26,28,30,32,34,38,
$$

$$
40,44,46,50,52,56,58,62,64,68,70,74,76,80,82.
$$

This is a **coverage gap in the checked theorem statements**, not a claim that every listed count remains open as of today. No novelty or completeness claim rests on absence of search results. The low case $k=6$ is also outside this report's independently established classification statements: the introductions of [1] and [2] report an earlier negative result, but its original proof was not separately inspected here. The report does not relabel that known historical result as open.

The classification question is therefore not described as completely solved. The cited results already remove the broad all-large-counts conjecture and establish the parity separation relevant to the old catalogue entry.

## Verification and attribution

`python3 verify_low_cones.py` verifies both four-point witnesses using exact squared integer distances. It asserts uniqueness of every chosen shortest edge, records both directed stages and the final components, and generates the integer parameter lists above. It does not reconstruct or independently prove the published infinite counterexample family or either positive spanner theorem. No random numerical experiment is used to infer a universal spanner property.

All deep results are attributed to the named authors. This report was prepared and checked by an LLM; no human mathematical review, proof-assistant verification, or editorial acceptance is claimed.

## Checked references

[1] Yifei Jin, Jian Li and Wei Zhan, *Odd Yao-Yao Graphs are Not Spanners*, SoCG 2018, LIPIcs **99**, 49:1–49:15. DOI https://doi.org/10.4230/LIPIcs.SoCG.2018.49 . Checked full published PDF, especially Theorem 5 on p.49:3: https://drops.dagstuhl.de/storage/00lipics/lipics-vol099-socg2018/LIPIcs.SoCG.2018.49/LIPIcs.SoCG.2018.49.pdf .

[2] Jian Li and Wei Zhan, *Almost All Even Yao-Yao Graphs Are Spanners*, ESA 2016, LIPIcs **57**, 62:1–62:13. DOI https://doi.org/10.4230/LIPIcs.ESA.2016.62 . Checked published Theorem 2 and the cone/tie definitions: https://drops.dagstuhl.de/storage/00lipics/lipics-vol057-esa2016/LIPIcs.ESA.2016.62/LIPIcs.ESA.2016.62.pdf . Also checked author preprint version 2: https://arxiv.org/html/1604.05814v2 .

[3] Matthew Bauer and Mirela Damian, *An Infinite Class of Sparse-Yao Spanners*, SODA 2013, pp.184–196. DOI https://doi.org/10.1137/1.9781611973105.14 . Checked full author preprint: https://arxiv.org/html/1206.3628v1 . The paper's Theorem 7 supplies short paths for the edges of a two-spanner and thereby yields its stated main positive theorem; no statement that Theorem 7 alone directly has the final stretch factor is intended.

[4] Iyad A. Kanj and Ge Xia, *On Certain Geometric Properties of the Yao-Yao Graphs*, COCOA 2012, LNCS **7402**, pp.223–233. DOI https://doi.org/10.1007/978-3-642-31770-5_20 . The publisher's primary abstract explicitly states the negative four-cone result on the complete Euclidean graph. That statement and metadata were checked; the paywalled full proof was not independently reviewed.

[5] We-Solve official statement: https://github.com/We-Solve/we-solve.github.io/blob/main/problems/yao-yao-graph-a-spanner/source/statement.tex ; problem page https://we-solve.github.io/problems/yao-yao-graph-a-spanner/ . Original maintained record: https://github.com/edemaine/topp/blob/main/Problems/P.000070 . Both statements were checked.

Original exposition and certificate data: CC BY 4.0. Original software: Apache-2.0. No third-party paper is redistributed.


## Reproducibility and review

Exact integer verifier confirms disconnected two-component YY1 and YY2 witnesses with no distance or boundary ties; published parameter conversions and30-number coverage gap checked mechanically. Published deep theorems credited rather than independently reproved. Kanj–Xia checked at primary abstract level. Independent cross-review by /root/twoquad_audit passed; fresh verifier output matched the recorded JSON and primary theorem statements were checked.
The main instance freshly ran the attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify_low_cones.py


[Executable fenced material omitted from this text-only security-screened package; original retained privately.]


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)

### LLM versions, settings and roles

OpenAI Codex (GPT-6) | version: unknown | reasoning: unknown | role: seven instances participated in this ten-problem batch. Main instance selected scopes, checked statements and sources, reviewed proofs, reran certificates, assembled and submitted. next_scout developed TOP1500004/6 and reviewed geometry; scout_new developed TOP5500060/78 and reviewed polynomial-root reports; lattice_verify developed TOP2200004/5 and reviewed algebra; twoquad_audit developed TOP1500013/17 and reviewed geometry; rectangle_audit developed TOP5500070/76 and reviewed additional reports; psi_audit scouted reserve targets and independently reviewed the seventh-power identity. The authoring instance for this report is /root/rectangle_audit (OpenAI Codex GPT-6; exact revision/settings unknown). Per-report independent audits identify checks actually performed. No other LLM was used in this batch. Exact serving revision and reasoning configuration are unknown.

### People and roles

Gaven: prompted and authorized the ten-problem batch and public submissions. No human mathematical contribution or human verification is claimed.

### References

https://doi.org/10.4230/LIPIcs.SoCG.2018.49
https://drops.dagstuhl.de/storage/00lipics/lipics-vol099-socg2018/LIPIcs.SoCG.2018.49/LIPIcs.SoCG.2018.49.pdf
https://doi.org/10.4230/LIPIcs.ESA.2016.62
https://drops.dagstuhl.de/storage/00lipics/lipics-vol057-esa2016/LIPIcs.ESA.2016.62/LIPIcs.ESA.2016.62.pdf
https://arxiv.org/html/1206.3628v1
https://doi.org/10.1007/978-3-642-31770-5_20
https://github.com/We-Solve/we-solve.github.io/blob/main/problems/yao-yao-graph-a-spanner/source/statement.tex
https://github.com/edemaine/topp/blob/main/Problems/P.000070
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
