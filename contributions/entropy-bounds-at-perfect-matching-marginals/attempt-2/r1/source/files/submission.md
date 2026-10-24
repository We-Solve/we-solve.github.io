# Attributed submission: Attempt: TOP-30007474

Source: https://github.com/We-Solve/research/issues/231

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007474

### Claim

Partial result

### Exact scope

The universal matching entropy upper bound H(x)<=F(x) is reproved by the entropy chain rule; both requested inequalities are proved with an exact maximum-entropy formula when the positive marginal support has degree at most two, including parallel-edge 2-cycles.

### Write-up

# TOP-30007474: Entropy bounds at perfect-matching marginals

Claim type: **Partial result**.

Exact scope: The universal matching entropy upper bound H(x)<=F(x) is reproved by the entropy chain rule; both requested inequalities are proved with an exact maximum-entropy formula when the positive marginal support has degree at most two, including parallel-edge 2-cycles.

Use natural logarithms throughout, as in the literal prompt. Let P be any random perfect matching with edge marginals x on a loopless multigraph on 2m vertices, m>=1. Let X_e indicate whether edge e is selected. For each vertex v, the vector of incident indicators chooses exactly one edge and has entropy
\[
 H(X_{\delta(v)})=-\sum_{e\ni v}x_e\log x_e.
\]
Order all edge variables. For any subset A of edge indices, the chain rule and the fact that extra conditioning cannot increase entropy give
\[
 H(X_A)=\sum_{e\in A}H(X_e\mid X_{A\cap\{f:f<e\}})
 \ge\sum_{e\in A}H(X_e\mid X_{\{f:f<e\}}).
\]
Apply this to every incident set delta(v) and sum. Every edge belongs to exactly two such sets because the multigraph has no loops, so sum_v H(X_delta(v))>=2H(X_E). Its left side is 2F(x). Hence H(P)<=F(x), and maximizing over admissible distributions proves the universal upper bound. This is the standard two-cover/Shearer entropy argument, reproved rather than claimed as new.

Now suppose the positive marginal support graph E_+={e:x_e>0} has maximum degree two, counting parallel incidences. Since x belongs to the perfect-matching polytope, each vertex has incident marginal total one and E_+ admits a perfect matching. Components of E_+ are isolated edges or even cycles, possibly a two-vertex cycle formed by two parallel edges. A path component cannot have more than one edge in positive support: its endpoint edge has marginal one, forcing its neighbor's other marginal to zero, contrary to positivity. Odd cycles have no perfect matching. These facts classify every possible component in the stipulated support.

An isolated edge is forced and contributes no entropy. A cycle of length 2ell has exactly two alternating perfect matchings. Its marginals alternate p and 1-p, with 0<p<1, since the vertex equations determine them. Every distribution with these marginals chooses the first cycle matching with probability p. Its binary entropy is h(p)=-p log p-(1-p)log(1-p). Choices on different components may be correlated, but the chain rule bounds total entropy by the sum of their individual entropies. Independent choices attain that upper bound with exactly the prescribed marginals, so
\[
 H(x)=\sum_{\text{cycle components }j}h(p_j),\qquad
 F(x)=B(x)=\sum_j\ell_j h(p_j).
\]
This is an explicit optimizer supported on the Cartesian product of the component choices, represented compactly by the probabilities p_j, rather than by listing exponentially many matchings.

For m>=2 the requested lower expression is F-(2-2/m)B=(2/m-1)F<=0, while H(x)>=0; and H(x)<=F follows either from ell_j>=1 or the universal argument. For m=1, every component is either a forced edge or a pair of parallel edges in this degree-two scope. In both cases H(x)=F(x), and the lower coefficient 2-2/m is zero, so the inequalities hold with equality. The case m=0 is excluded because the prompt's 2/m is undefined; the empty matching itself has entropy zero under a separately chosen convention.

The component structure and compact distribution are found with linear graph work. Rational marginals allow exact structural tests and an exact symbolic entropy expression; evaluation of logarithms to a chosen precision is a separate numerical task. The checker enumerates perfect matchings and product probabilities on small disjoint even cycles, verifies marginals and the F=B identities symbolically at rational probabilities, and checks universal upper bounds numerically for independently generated distributions on small graphs. Numerical logarithms are diagnostics, not a proof of the inequalities. The general lower bound on arbitrary positive supports is not established here.

Comparison with the earlier attempt: The earlier item summarizes a broad 2026 manuscript. This report gives an independent chain-rule proof of the universal upper half and an explicit optimized distribution for degree-two marginal support; it neither imports nor verifies the claimed general lower bound.

References checked:

- Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007474.txt
- Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/entropy-bounds-at-perfect-matching-marginals/attempt-1/r1/
- F. R. K. Chung, R. L. Graham, P. Frankl and J. B. Shearer, Some intersection theorems for ordered sets and graphs, Journal of Combinatorial Theory A 43 (1986), 23–37; author-hosted primary PDF inspected for the entropy-cover context: https://www.math.ucsd.edu/~ronspubs/86_03_intersection.pdf


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

Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007474.txt
Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/entropy-bounds-at-perfect-matching-marginals/attempt-1/r1/
F. R. K. Chung, R. L. Graham, P. Frankl and J. B. Shearer, Some intersection theorems for ordered sets and graphs, Journal of Combinatorial Theory A 43 (1986), 23–37; author-hosted primary PDF inspected for the entropy-cover context: https://www.math.ucsd.edu/~ronspubs/86_03_intersection.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
