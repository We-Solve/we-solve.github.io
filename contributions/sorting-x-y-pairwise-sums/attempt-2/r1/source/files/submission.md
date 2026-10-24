# Attributed submission: Attempt: TOP-5500041

Source: https://github.com/We-Solve/research/issues/79

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-5500041

### Claim

Partial result

### Exact scope

For Mundhra arXiv:2504.16393v1 Algorithm 2.1 (PDF)/Algorithm 1 (HTML), prove exactly (n^3+n-2)/2 successful scan comparisons on x_i=i,y_j=(n+1)j. Refutes that algorithm bound only, not the original quadratic-time possibility.

### Write-up

# A cubic scan family for Mundhra's proposed sumset sorter

Problem: **TOP-5500041** (CS-98, Sorting $X+Y$).  
Claim type: **Partial result**.  
Scope: An all-$n$ lower bound for one specifically identified proposed algorithm, together with an exact executable check. This does not disprove the existence of an $O(n^2)$ algorithm for the original problem.

For $n\geq1$, Mundhra's arXiv:2504.16393v1 algorithm performs exactly
$$
A(n)=\frac{n^3+n-2}{2}
$$
successful comparisons in its forward-scan loop on the strictly increasing inputs
$$
x_i=i,\qquad y_j=(n+1)j,\qquad 0\leq i,j<n.
$$
Consequently, that algorithm takes $\Omega(n^3)$ comparisons and time, even if every insertion is free. All $n^2$ sums in this example are distinct, so neither duplicate elimination nor tie conventions affect the obstruction. The unrestricted quadratic-time sorting question remains unresolved by this contribution.

The precise target is **Algorithm 2.1, printed page 6 of the version-1 PDF**, also displayed as **Algorithm 1 in the version-1 HTML**, §2.2. The corresponding claimed comparison bound is Theorem 2.11 in the PDF / Theorem 15 in the HTML, §2.4. The preprint claims at most $2n^2$ comparisons and quadratic time. These identifiers refer to the same pseudocode [1].

The relevant instructions initialize $Z$ empty and $ip=0$. At the start of each row they set $cp=ip$. Each of the row's $n$ sums is then processed by advancing $cp$ while $cp<|Z|$ and $Z[cp]\leq sum$, inserting $sum$ at position $cp$, and setting $ip=cp$ only when $i+1<n$ and $sum\leq x_{i+1}+y_0$. In particular, $cp$ is reset at the next row; its monotonicity within one row does not bound the total scans over all rows.

## Proof of the operation count

Write $M=n+1$. After rows $0,\ldots,i-1$ have been inserted, the sorted list consists of $n$ blocks:
$$
(Mj, Mj+1,\ldots,Mj+i-1),\qquad j=0,\ldots,n-1.
$$
Different blocks are separated, since $M>n-1$. In row $i<n-1$, the guard that updates $ip$ is true only for $j=0$: here $i\leq i+1$, whereas $i+Mj>i+1$ for $j\geq1$. Thus, at the start of row $i\geq1$, $ip$ is the position $i-1$ of the previously inserted value $i-1$, in block zero.

For row zero, its first insertion scans nothing. Each subsequent insertion scans the preceding newly inserted value, making exactly $n-1$ successful comparisons.

For row $i\geq1$, the $j=0$ insertion scans exactly the value $i-1$, then stops before the next block. This costs one successful comparison. For each $j=1,\ldots,n-1$, the scan starts at the immediately preceding newly inserted value $i+M(j-1)$. It scans that value and then all $i$ old values $Mj,\ldots,Mj+i-1$ in the next block. It cannot pass into a later block. Thus each of these $n-1$ insertions makes exactly $i+1$ successful comparisons.

The resulting total is
$$
\begin{aligned}
A(n)&=(n-1)+\sum_{i=1}^{n-1}\bigl(1+(n-1)(i+1)\bigr)\\
&=(n-1)+\frac{(n-1)n(n+1)}2
=\frac{n^3+n-2}{2}.
\end{aligned}
$$
The formula includes $n=1$, when no scan comparison succeeds. For example, $n=5$ already gives 64 successful comparisons, exceeding the claimed $2n^2=50$ without counting any unsuccessful comparison or loop/index guard.

Each counted event evaluates an actual value comparison in the displayed loop and increments its scan position. The proof therefore applies even with constant-time pointer moves and free insertion. A vector implementation's element shifting can only add work. Replacing the displayed forward scan by a different search procedure would define a different algorithm and require its own analysis. No lower bound for every sumset sorter follows.

## Verification, provenance, and limitations

`verify.py` implements the displayed index-based pseudocode literally, including the $ip$ guard and short-circuit scan exit. It separately counts successful value comparisons, failed value comparisons, index guards, and lookahead comparisons. It keeps every labelled pair, checks the resulting order and permutation, and checks every row against the proved formula for $n=1,\ldots,64$. `verification.json` records the exact results. These finite runs support the transcription; the proof above supplies the unbounded-$n$ conclusion.

The earlier CS-98-A1 exploration [2] was read before preparing this contribution. It discusses a heap merge, failed antidiagonal ordering, difference sorting, and separated rows. It does not analyze the 2025 preprint's reset-and-scan algorithm. No novelty or exhaustive current-status claim is made here. This is an independently checkable correction to that specified algorithm's complexity claim, not a full disproof of TOP-5500041 and not a claim about other unpublished algorithms or later revisions.

Models used: OpenAI Codex **GPT-6**, exact serving revision and settings not exposed, for source inspection, proof, code, and drafting. Human contributor: Gaven requested and coordinated the research contribution; no independent human proof verification is asserted. No theorem prover was used.

References checked:

1. Shlok Mundhra, *An Explicit and Efficient $O(n^2)$-Time Algorithm for Sorting Sumsets*, arXiv:2504.16393v1, 23 April 2025: [PDF](https://arxiv.org/pdf/2504.16393v1), [HTML](https://arxiv.org/html/2504.16393v1), Algorithm 2.1 / Algorithm 1 and §2.4. Preprint status; no peer-review claim is made.
2. [We-Solve CS-98-A1, revision 1](https://we-solve.github.io/contributions/sorting-x-y-pairwise-sums/attempt-1/r1/), earlier exploration.
3. [TOPP Problem 41](https://topp.openproblem.net/p41), for the distinction between comparison counts and total algorithmic work.


## Reproducibility and review

Literal source pseudocode run for n=1..64 with short-circuit guards, all labelled pairs and sortedness checked, every row and total count agree with all-n formula; successful comparisons alone already cubic. Independent model-assisted review passed; see independent_audit.md.
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

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected scopes, reviewed statements and proofs, checked sources, reran all attached programs, assembled and submitted.
OpenAI Codex (GPT-6), next_scout instance | version: unknown | reasoning: unknown | role: developed the covering-system, zero-sum and group-transversal reports; participated in separate LLM review.
OpenAI Codex (GPT-6), twoquad_audit instance | version: unknown | reasoning: unknown | role: developed the generic-ideal and Lefschetz reports; participated in separate LLM review.
OpenAI Codex (GPT-6), lattice_verify instance | version: unknown | reasoning: unknown | role: developed the graph-signing, coloring and complexity reports; participated in separate LLM review.
OpenAI Codex (GPT-6), psi_audit instance | version: unknown | reasoning: unknown | role: developed the derivative-root and Diophantine-tuple reports; participated in separate LLM review.
OpenAI Codex (GPT-6), rectangle_audit instance | version: unknown | reasoning: unknown | role: developed the visibility, minimum-link and sumset-sorting reports; participated in separate LLM review.
OpenAI Codex (GPT-6), scout_new instance | version: unknown | reasoning: unknown | role: developed the polyomino, distance and folding reports; participated in separate LLM review.
The authoring instance for this report is /root/rectangle_audit (OpenAI Codex GPT-6; exact serving revision/settings unknown). Per-report independent audits identify the reviewer and checks actually performed. Exact serving revisions and reasoning configurations are unknown. No other LLM was used in this batch.

### People and roles

Gaven: prompted and authorized the twenty-problem batch and public submissions. No human mathematical contribution or human verification is claimed.

### References

https://arxiv.org/pdf/2504.16393v1
https://arxiv.org/html/2504.16393v1
https://topp.openproblem.net/p41
https://we-solve.github.io/contributions/sorting-x-y-pairwise-sums/attempt-1/r1/
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
