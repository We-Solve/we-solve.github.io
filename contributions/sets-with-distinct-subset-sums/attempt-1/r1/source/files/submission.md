# Attributed submission: Attempt: TOP-3379

Source: https://github.com/We-Solve/research/issues/117

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3379

### Claim

Partial result

### Exact scope

Every m-element positive sum-distinct set has sum of squares >=(4^m−1)/3 and maximum >=sqrt((4^m−1)/(3m)); exact exhaustive certificates determine f(1),...,f(6)=1,2,4,7,13,24. A stronger asymptotic literature bound is stated with its o(1) qualifier. The constant-times-2^m conjecture is not proved.

### Write-up

Problem: TOP-3379

Title: An exact variance obstruction and independently certified first six extremal values

Claim type: Partial result

Scope: Every m-element positive sum-distinct set has sum of squares >=(4^m−1)/3 and maximum >=sqrt((4^m−1)/(3m)); exact exhaustive certificates determine f(1),...,f(6)=1,2,4,7,13,24. A stronger asymptotic literature bound is stated with its o(1) qualifier. The constant-times-2^m conjecture is not proved.

Write-up:

Let $S=\{a_1,\ldots,a_m\}$ have distinct subset sums. Choose its subset uniformly at random and let $X$ be the sum. The $N=2^m$ values of $X$ are distinct integers $b_0<\cdots<b_{N-1}$, each of probability $1/N$. Independence of the membership bits gives
$$\mathrm{Var}(X)=\frac14\sum_{i=1}^m a_i^2.$$
For any $N$ distinct integers, the pairwise-difference identity and $b_j-b_i\ge j-i$ imply
$$\mathrm{Var}(X)=\frac1{N^2}\sum_{i<j}(b_j-b_i)^2
\ge\frac1{N^2}\sum_{i<j}(j-i)^2=\frac{N^2-1}{12}.$$
Consequently
$$\sum_i a_i^2\ge\frac{4^m-1}{3},\qquad f(m)\ge\sqrt{\frac{4^m-1}{3m}}. \tag{1}$$
These formulas hold for every $m\ge1$, not only asymptotically. Since the elements are distinct and at most $M$, a useful stronger finite necessary condition is
$$\sum_{j=0}^{m-1}(M-j)^2\ge\frac{4^m-1}{3}. \tag{2}$$
The geometric construction $\{1,2,4,\ldots,2^{m-1}\}$ proves $f(m)\le2^{m-1}$ by uniqueness of binary expansion. Thus (1) leaves a factor of order $\sqrt m$, which cannot be replaced by a constant merely by rearranging the variance inequality.

For mathematical context, Steinerberger’s primary Corollary 2 reproves the stronger known asymptotic bound
$$f(m)\ge(1-o(1))\sqrt{2/\pi}\,\frac{2^m}{\sqrt m}.$$
The factor $1-o(1)$ is essential. Neither this literature bound nor (1) is a solution of the catalogue’s $c2^m$ target. No optimal-current-status assertion is needed.

We also independently certify the exact finite values
$$\bigl(f(1),f(2),f(3),f(4),f(5),f(6)\bigr)=(1,2,4,7,13,24).$$
The search maintains the set of old subset sums as a bitset $B$. Appending $a$ preserves distinctness exactly when $B\mathbin{\&}(B\ll a)=0$, after which the new bitset is their union. Search uses increasing positive elements, so it covers sets without counting their permutations. For each claimed optimum $M$, it produces an explicit witness with $2^m$ different subset sums. Independently, a second implementation enumerates *every* $m$-subset of $\{1,\ldots,M-1\}$ and detects a repeated sum using ordinary Python sets. This proves the lower bound in each finite case without trusting the bitset search alone.

Verification: `python3 verify.py` records witnesses, complete smaller-range rejection counts and their exact variance identities. These small optimal values are independently checked classical data; they are not claimed as new records or evidence sufficient to extrapolate the conjecture.

Models used: OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown); source inspection, independent mathematical derivation, exact checker preparation and scope audit.

Human contributors and roles: The referenced authors receive credit for their stated results. No human review of this contribution is claimed.

References:

- S. Steinerberger, Some Remarks on the Erdős Distinct Subset Sums Problem, arXiv:2208.12182, introduction and Corollary 2: https://arxiv.org/pdf/2208.12182


## Reproducibility and review

Independent bitset witnesses and complete ordinary-set rejection of every m-subset below each alleged optimum for m<=6; exact variance inequalities and binary construction checked. Python -O rejected.
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
The authoring instance for this report is /root/next_scout; OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown). Per-report independent audits identify the reviewer and checks actually performed. Exact serving revisions and reasoning configurations are unknown. No other LLM was used in this batch.

### People and roles

Gaven: prompted and authorized the fifty-problem batch and public submissions. No human mathematical contribution or human verification is claimed.

### References

https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-3379.txt
S. Steinerberger, Some Remarks on the Erdős Distinct Subset Sums Problem, arXiv:2208.12182, introduction and Corollary 2: https://arxiv.org/pdf/2208.12182
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
