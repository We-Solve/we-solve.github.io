# Attributed submission: Attempt: TOP-30006820

Source: https://github.com/We-Solve/research/issues/216

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006820

### Claim

Partial result

### Exact scope

Classical deterministic double coverage is k-competitive on the entire real line, with a finite additive constant depending only on the initial server configuration; a complete potential proof and rational checker are supplied.

### Write-up

# TOP-30006820: The k-Server Conjecture for General Metric Spaces

Claim type: **Partial result**.

Exact scope: Classical deterministic double coverage is k-competitive on the entire real line, with a finite additive constant depending only on the initial server configuration; a complete potential proof and rational checker are supplied.

This reconstructs the classical real-line algorithm of Chrobak, Karloff, Payne and Vishwanathan, not a new solution of the arbitrary-metric conjecture. The publisher abstract was inspected and confirms the real-line deterministic result; the proof below is self-contained.

Keep the online positions in sorted order a_1<=...<=a_k. If a requested point q is occupied, do nothing. If q lies outside their range, move the nearest extreme server directly to q. Otherwise q lies strictly between two adjacent distinct positions a_i<a_{i+1}; move these two servers toward q at equal speed until one first reaches q. Both distances moved are charged. Coincident servers cause no difficulty: use the nearest occupied locations on either side and choose fixed labels among ties.

For online multiset A and offline multiset O define M(A,O) as the minimum bijection matching distance and D(A)=sum_{i<j}|a_i-a_j|. On a line, uncrossing pairs shows that M is the sum of distances between sorted positions: for u<=v and x<=y, |u-x|+|v-y|<=|u-y|+|v-x|. Define
\[
 \Phi(A,O)=kM(A,O)+D(A)\ge0.
\]
First let the offline strategy serve q, then let double coverage serve q. Moving an offline server by distance d changes M by at most d, by reusing an optimal old matching and the triangle inequality. Thus its potential increase is at most kd, even for a strategy that moves several servers.

During online service O contains q. For an exterior request to the left, some sorted offline position o_j=q and hence o_1<=q. Moving a_1 left by d toward q decreases its matching term exactly d, while increasing D by (k-1)d. Consequently Delta Phi=-d, precisely minus the online cost. The right-hand case is symmetric.

For an interior move, a_i and a_{i+1} move distances d in opposite directions. If an offline server at q has sorted index j<=i, then o_i>=q, so moving a_i right toward q decreases its matching term by d; the term for a_{i+1} increases by at most d. If j>=i+1, then o_{i+1}<=q, so moving a_{i+1} left decreases its term by d and the other increases by at most d. In either case Delta M<=0. For sorted positions,
\[
D(A)=\sum_{j=1}^k(2j-k-1)a_j.
\]
The two motions change D by ((2i-k-1)-(2(i+1)-k-1))d=-2d. Thus Delta Phi<=-2d, again minus the full online cost. No positions cross during the move. Tie cases follow directly from the same sorted formula, or by continuity.

Adding all offline and online changes gives ALG+Phi_final-Phi_initial<=k OFF for every comparison strategy. Hence ALG<=k OPT+Phi_initial. With the same initial configuration, M_initial=0 and b=D(A_initial), independent of the request sequence. Infimizing over comparison costs preserves the inequality. For k=1 this yields equality with the direct optimal walk.

For explicit binary rational positions, a scan locates the adjacent servers in O(k) comparisons per request and only additions, comparisons and subtraction are needed. The arithmetic is exact and its bit cost is polynomial in the input prefix length. Real positions may instead be treated in the usual exact real-arithmetic geometric model; no algorithm over arbitrary unencoded real inputs is claimed. The checker enumerates short rational configurations, requests and offline states, checks the one-step inequalities exactly, and compares full costs with an independent finite-state offline dynamic program.

The proof covers a nonuniform infinite metric, but its sorted-matching and adjacent-motion identities are special to the line. They do not extend by assertion to arbitrary metrics. The earlier attempt mentions a 2026 preprint claiming the general conjecture; this report neither verifies that preprint nor uses it.

Comparison with the earlier attempt: The earlier attempt proves the uniform metric case by paging phases and only states a general potential criterion. This report proves that criterion for double coverage on all real-line configurations, including interior requests, rather than repeating the uniform case.

References checked:

- Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006820.txt
- Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/the-k-server-conjecture-for-general-metric-spaces/attempt-1/r1/
- M. Chrobak, H. Karloff, T. Payne and S. Vishwanathan, New Results on Server Problems, SIAM Journal on Discrete Mathematics 4(2), 172–181 (1991), publisher abstract and bibliographic data inspected: https://epubs.siam.org/doi/10.1137/0404017


## Reproducibility and review

Written proof completed; standard-library independent finite checker and execution record supplied separately. These checks are finite and no formal verification or human mathematical review is asserted.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


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
The authoring instance for this report is /root/hundred_algorithms. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006820.txt
Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/the-k-server-conjecture-for-general-metric-spaces/attempt-1/r1/
M. Chrobak, H. Karloff, T. Payne and S. Vishwanathan, New Results on Server Problems, SIAM Journal on Discrete Mathematics 4(2), 172–181 (1991), publisher abstract and bibliographic data inspected: https://epubs.siam.org/doi/10.1137/0404017
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
