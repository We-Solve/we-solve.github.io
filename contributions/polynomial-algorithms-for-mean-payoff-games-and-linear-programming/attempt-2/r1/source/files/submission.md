# Attributed submission: Attempt: TOP-30003049

Source: https://github.com/We-Solve/research/issues/197

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30003049

### Claim

Partial result

### Exact scope

One-player finite mean-payoff threshold games with arbitrary binary signed rewards and binary rational thresholds are decidable deterministically in polynomial bit time, including equality at the threshold, via a strict positive-cycle test.

### Write-up

# TOP-30003049: Polynomial Algorithms for Mean-Payoff Games and Linear Programming

Claim type: **Partial result**.

Exact scope: One-player finite mean-payoff threshold games with arbitrary binary signed rewards and binary rational thresholds are decidable deterministically in polynomial bit time, including equality at the threshold, via a strict positive-cycle test.

Fix a directed finite graph with at least one outgoing edge at each vertex, a starting vertex s, and one controller who chooses every move and maximizes liminf average reward. Edge rewards w_e are signed binary integers. Let the rational threshold be r=p/q with q>0. Remove vertices not reachable from s, and let N be the remaining vertex count. Every finite walk decomposes into simple directed cycles plus a residual path of fewer than N edges.

There exists an infinite play with liminf average at least r if and only if a reachable simple cycle has mean at least r. One direction follows by taking a path to that cycle and repeating it: the finite prefix disappears in the average. Conversely, if all simple cycles have mean below r, their integer transformed sums q sum w-p length are at most -1 and their lengths are at most N. Thus each cycle's original mean is at most r-1/(qN). Deleting simple cycles from a finite walk leaves fewer than N residual edges; their total reward is bounded independently of the walk length. Taking the limiting upper average therefore gives at most r-1/(qN), excluding even a limsup of r.

To distinguish zero transformed cycles without numerical approximation, define
\[
 z_e=(N+1)(q w_e-p)+1.
\]
For a simple cycle C of length ell<=N, if q sum_C w-p ell>=0 then sum_C z>=ell>0. If that integer is at most -1, then sum_C z<=-(N+1)+ell<0. Therefore the required threshold cycle exists exactly when the reachable z-weighted graph has a strictly positive cycle. This handles equality correctly; merely searching for a strictly positive cycle under q w-p would miss zero-threshold wins.

Initialize h_0(v)=0 for all reachable vertices, and for t=1,...,N compute synchronously
\[
 h_t(v)=\max\{h_{t-1}(v),\max_{u\to v}(h_{t-1}(u)+z_{uv})\}.
\]
h_t is the largest weight of a walk of at most t edges ending at v, with any starting vertex. If there are no positive cycles, remove nonpositive cycles from a maximizing walk without decreasing weight, so some maximizing walk has at most N-1 edges and h_N=h_{N-1}. Conversely, if h_N=h_{N-1}, that common vector satisfies h(v)>=h(u)+z_uv on every edge. Summing around a cycle proves it cannot be positive. Thus any coordinate increase in the Nth round is equivalent to YES. This supplies a direct decision algorithm with no cycle-enumeration oracle.

There are N rounds and O(N+m) work per round. The z weights have bit length O(B+log N), where B counts the threshold and reward encodings, and h_t sums at most N such weights. Ordinary exact signed arithmetic gives polynomial bit cost, with O(N) numeric workspace using two rows. Thresholds do not require a pseudopolynomial loop through reward magnitudes. Predecessor information may be retained if a positive-cycle witness is desired; the stated algorithm only claims the threshold decision.

The checker compares this test at rational thresholds with independent enumeration of all simple reachable cycles on small digraphs, including negative rewards, self-loops, zero means, inaccessible positive cycles and large binary rewards. The proof covers only one controlling player; it does not solve two-player games or strongly polynomial general linear programming, the other question in the original prompt. The connection with classical minimum/maximum cycle-mean algorithms is credited to Karp; no new unrestricted result is asserted.

Comparison with the earlier attempt: The earlier item reports broad 2026 quasipolynomial manuscript claims. Here a self-contained polynomial algorithm and explicit arithmetic separation are proved for the genuine one-player subclass; none of those manuscripts is assumed correct.

References checked:

- Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30003049.txt
- Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/polynomial-algorithms-for-mean-payoff-games-and-linear-programming/attempt-1/r1/
- Richard M. Karp, A Characterization of the Minimum Cycle Mean in a Digraph, technical report UCB/ERL M77/47 (1977), author-institution record inspected: https://www2.eecs.berkeley.edu/Pubs/TechRpts/1977/29121.html ; published in Discrete Mathematics 23 (1978), 309–311. The elementary positive-cycle algorithm in this report is proved directly, not imported as an unverified formula.


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

Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30003049.txt
Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/polynomial-algorithms-for-mean-payoff-games-and-linear-programming/attempt-1/r1/
Richard M. Karp, A Characterization of the Minimum Cycle Mean in a Digraph, technical report UCB/ERL M77/47 (1977), author-institution record inspected: https://www2.eecs.berkeley.edu/Pubs/TechRpts/1977/29121.html ; published in Discrete Mathematics 23 (1978), 309–311. The elementary positive-cycle algorithm in this report is proved directly, not imported as an unverified formula.
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
