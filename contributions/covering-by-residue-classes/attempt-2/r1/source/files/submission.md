# Attributed submission: Attempt: TOP-173

Source: https://github.com/We-Solve/research/issues/240

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-173

### Claim

Partial result

### Exact scope

For independent uniform residues modulo primes Q<=p<2Q, Q=N^0.51, the union U has expectation asymptotic to (log2/0.51)N/logN and relative variance O(logQ/Q). Thus almost all assignments achieve this near-linear size, and a deterministic assignment of at least the mean exists. The prompt’s every-assignment claim remains unproved.

### Write-up

# Almost every residue assignment covers a near-linear number of points

Problem: TOP-173  
Claim type: Partial result  
Author: /root/hundred_numbers

**Exact scope.** For independent uniform residues modulo primes Q<=p<2Q, Q=N^0.51, the union U has expectation asymptotic to (log2/0.51)N/logN and relative variance O(logQ/Q). Thus almost all assignments achieve this near-linear size, and a deterministic assignment of at least the mean exists. The prompt’s every-assignment claim remains unproved.

Assume N is an integer and let Q=N^0.51. Choose the residue a(p) independently and uniformly for each prime Q<=p<2Q. For a fixed m in [N], its failures at the different primes are independent and have probabilities 1-1/p. Hence, exactly,
\[
 \mathbb E|U|=N\left(1-\prod_{Q\le p<2Q}(1-1/p)\right).
\]
This calculation needs no independence between the coverage of **different** integers m.

Put L=sum_(Q<=p<2Q)1/p. Partial summation and the prime number theorem give L~log2/logQ; also sum1/p^2=O(1/(Q logQ)). Taking logarithms of the product yields product(1-1/p)=exp(-L+O(1/(Q logQ))). Since L tends to zero, 1-product~L. Thus
\[
 \mu_N:=\mathbb E|U|\sim\frac{\log2}{0.51}\frac N{\log N}.
\]
The coefficient is log2/0.51, since logQ=0.51logN; replacing it by1/0.51 would lose the prime interval's logarithmic width.

There is strong concentration even though the point indicators are dependent. Changing a single residue choice can alter the union only inside its old and new progressions, each of which has at most N/Q+1 points. Thus the change in |U| is at most c=2(N/Q+1). Reveal the choices one prime at a time and let M_i be the conditional expectation of |U| after i choices. Holding the previous choices fixed, the conditional expectation as a function of the next choice has range at most c, by averaging the same pointwise Lipschitz bound over future choices. Therefore each martingale difference has absolute value at most c. Orthogonality of martingale differences gives
\[
 \operatorname{Var}|U|\le\sum_i\mathbb E(M_i-M_{i-1})^2
 \ll\frac Q{\log Q}(N/Q+1)^2
 \ll\frac{N^2}{Q\log Q}.
\]
Here the prime number theorem bounds the number of prime choices, and Q<N eventually. Chebyshev's inequality consequently gives, for every fixed eta>0,
\[
 \mathbb P\big(\big||U|-\mu_N\big|>\eta\mu_N\big)
      =O_\eta(\log Q/Q)=o(1).
\]

There also exists a deterministic assignment with |U|>=mu_N. At each step choose a residue whose conditional expectation is at least the average of all options; after finitely many steps the realized value is at least the initial expectation. These conditional expectations are finite rational sums, so this is a finite exact construction in principle, without a claimed efficient bit bound or attached implementation.

The prior contribution proves a lower bound uniform over all assignments of a smaller fixed-power scale and explains an intersection-count obstruction. This report adds typical-assignment concentration and conditional-expectation existence at order N/logN. A probability tending to one is not probability one for every assignment, so it does not prove the literal worst-case question. Exceptional carefully aligned assignments remain outside the conclusion.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.


## Reproducibility and review

Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)
OpenAI, GPT-6.1 Sol (user-specified attribution; reasoning level: Ultra; see disclosure below)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected and checked scopes, read final reports, spot-checked sources, freshly ran all attached programs, assembled the prepared submissions.
OpenAI Codex (GPT-6), hundred_algebra instance | version: unknown | reasoning: unknown | role: developed algebra reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_numbers instance | version: unknown | reasoning: unknown | role: developed number-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_graphs instance | version: unknown | reasoning: unknown | role: developed graph-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_algorithms instance | version: unknown | reasoning: unknown | role: developed algorithms/complexity reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_topology instance | version: unknown | reasoning: unknown | role: developed topology reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_geometry instance | version: unknown | reasoning: unknown | role: developed geometry reports and performed separate LLM reviews.
The authoring instance for this report is /root/hundred_numbers. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

T. Tao, 254A Notes2, Corollary39/Exercise40, https://terrytao.wordpress.com/2014/12/09/254a-notes-2-complex-analytic-multiplicative-number-theory/
Fresh official TOP-173 prompt and its full listed prior contribution
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
