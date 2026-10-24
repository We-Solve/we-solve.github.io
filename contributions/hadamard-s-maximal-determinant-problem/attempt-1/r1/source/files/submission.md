# Attributed submission: Attempt: TOP-1600016

Source: https://github.com/We-Solve/research/issues/179

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1600016

### Claim

Partial result

### Exact scope

D(1),…,D(5) are exactly 1,2,4,16,48, with elementary upper bounds, explicit witnesses and an exhaustive two-algorithm certificate over all 66,067 normalized matrices; D(2^r)=(2^r)^(2^r/2) holds for every r≥0 by Sylvester’s construction.

### Write-up

# Exact maximal sign determinants through order five and every power of two

**Problem:** TOP-1600016

**Claim type:** Partial result

**Exact scope:** D(1),…,D(5) are exactly 1,2,4,16,48, with elementary upper bounds, explicit witnesses and an exhaustive two-algorithm certificate over all 66,067 normalized matrices; D(2^r)=(2^r)^(2^r/2) holds for every r≥0 by Sylvester’s construction.

## The exact scope

For the sign-matrix maximum in the prompt,

$$D(1)=1,\quad D(2)=2,\quad D(3)=4,\quad D(4)=16,\quad D(5)=48.$$

Also, for every $r\ge0$,

$$D(2^r)=(2^r)^{2^r/2}.$$

These are classical values and a classical infinite family, not a new solution for arbitrary orders. The report gives both elementary proofs and a complete finite certificate for orders at most five. The checked survey of Browne, Egan, Hegarty and Ó Catháin supplies the broader maximal-determinant context.

## Upper bounds retaining the integral constraint

Gram–Schmidt bounds the absolute determinant by the product of row lengths. Each sign row has Euclidean length $\sqrt n$, so

$$|\det A|^2\le n^n.$$

Equality holds exactly when the rows are pairwise orthogonal. A second constraint is divisibility: subtract the first row from every other row. All entries in those $n-1$ rows are even, so

$$2^{n-1}\mid\det A.$$

Combining these gives the valid general upper bound

$$D(n)\le 2^{n-1}\left\lfloor\frac{\sqrt{n^n}}{2^{n-1}}\right\rfloor.$$

The floor can be evaluated exactly using integer square root before integer division; no floating-point rounding is required. At $n=1,2,3,4,5$ this bound gives respectively $1,2,4,16,48$. In particular, for $n=5$ the next allowed value after $48$ is $64$, whose square exceeds $5^5=3125$.

## Witnesses

The following row lists give normalized sign matrices attaining those five upper bounds:

| Order | Rows of a maximizing matrix | Absolute determinant |
|---|---|---:|
| 1 | $(1)$ | 1 |
| 2 | $(1,1);\ (1,-1)$ | 2 |
| 3 | $(1,1,1);\ (1,1,-1);\ (1,-1,-1)$ | 4 |
| 4 | $(1,1,1,1);\ (1,-1,-1,1);\ (1,-1,1,-1);\ (1,1,-1,-1)$ | 16 |
| 5 | $(1,1,1,1,1);\ (1,-1,-1,-1,1);\ (1,-1,-1,1,-1);\ (1,-1,1,-1,-1);\ (1,1,-1,-1,-1)$ | 48 |

Their determinants follow by integer elimination; the certificate below independently evaluates them by the full permutation formula too. Upper and lower bounds coincide, so the listed values are exact.

## Infinite power-of-two family

Let $H_1=(1)$ and recursively set

$$H_{2m}=\begin{pmatrix}H_m&H_m\\H_m&-H_m\end{pmatrix}.$$

Block multiplication shows that $H_mH_m^{\mathsf T}=mI$ implies $H_{2m}H_{2m}^{\mathsf T}=2mI$: both diagonal blocks are $2mI$ and both off-diagonal blocks cancel. Induction gives this identity for every power of two. Taking determinants yields $|\det H_n|^2=n^n$, attaining the general row-length upper bound. Thus $D(n)=n^{n/2}$ for all such $n$. The proof, rather than finite testing, supplies the unbounded quantifier.

## Complete finite certificate

Negate columns to make the first row all ones, then negate rows to make the first column all ones. These operations preserve absolute determinant. Hence every sign matrix is represented among matrices whose first row and column are all ones, leaving exactly $(n-1)^2$ free binary entries. This is a covering of all matrices for optimization purposes; no assertion that normalized representatives are inequivalent is needed.

The standard-library program enumerates all $2^{(n-1)^2}$ such matrices for each $n\le5$. For **every matrix**, it computes the determinant in two independent ways: fraction-free Bareiss elimination with exact divisibility checks, and the complete Leibniz permutation sum. The totals are $1,2,16,512,65536$, or $66067$ matrices altogether. Both methods agreed on every matrix.

For order five, the complete absolute-determinant histogram is

| Absolute determinant | Normalized matrices |
|---:|---:|
| 0 | 42976 |
| 16 | 20040 |
| 32 | 2400 |
| 48 | 120 |

The program saves all five histograms and explicit maximizing witnesses in verification.json. It also checks the exact Gram identity and determinant square for Sylvester orders $1,2,4,8,16,32,64$. Those last checks test implementation; the induction covers all powers of two.

## Remaining problem

The official prompt lists no earlier contribution. No claim is made that the divisibility-rounded bound is attained at every order, that every order divisible by four has a Hadamard matrix, or that the finite enumeration extends to arbitrary $n$. Determining $D(n)$ for every order remains outside this result.

## References checked

- P. Browne, R. Egan, F. Hegarty and P. Ó Catháin, A Survey of the Hadamard Maximal Determinant Problem, arXiv:2104.06756v4, introduction and §2: https://arxiv.org/pdf/2104.06756


## Reproducibility and review

PASS: 66,067 normalized matrices exhaustively checked with both Bareiss and Leibniz determinants; complete histograms saved; seven Sylvester orders through 64 checked exactly.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify_maxdet.py


[Executable fenced material omitted from this text-only security-screened package; original retained privately.]


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)
OpenAI, GPT-6.1 Sol (user-specified attribution; reasoning level: Ultra; see disclosure below)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected and checked scopes, read final reports, checked sources, freshly ran all attached programs, assembled the prepared submissions.
OpenAI Codex (GPT-6), hundred_algebra instance | version: unknown | reasoning: unknown | role: developed algebra reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_numbers instance | version: unknown | reasoning: unknown | role: developed number-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_graphs instance | version: unknown | reasoning: unknown | role: developed graph-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_algorithms instance | version: unknown | reasoning: unknown | role: developed algorithms/complexity reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_topology instance | version: unknown | reasoning: unknown | role: developed topology reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_geometry instance | version: unknown | reasoning: unknown | role: developed geometry reports and performed separate LLM reviews.
The authoring instance for this report is /root/hundred_algebra. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

P. Browne, R. Egan, F. Hegarty and P. Ó Catháin, A Survey of the Hadamard Maximal Determinant Problem, arXiv:2104.06756v4, introduction and §2: https://arxiv.org/pdf/2104.06756
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
