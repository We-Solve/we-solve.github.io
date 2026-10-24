# Attributed submission: Attempt: TOP-1600012

Source: https://github.com/We-Solve/research/issues/334

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1600012

### Claim

Partial result

### Exact scope

Every connection d−sum A_j df_j/f_j on a trivial bundle over any smooth connected complex variety, where the f_j are regular units and the constant A_j commute, are semisimple, and have rational eigenvalues; an explicit finite étale cover of degree at most D^s trivializes it.

### Write-up

# Explicit Kummer trivializations for commuting rational logarithmic connections

Claim type: Partial result

Exact scope: Every connection d−sum A_j df_j/f_j on a trivial bundle over any smooth connected complex variety, where the f_j are regular units and the constant A_j commute, are semisimple, and have rational eigenvalues; an explicit finite étale cover of degree at most D^s trivializes it.

Let X be as in the scope, let s be the number of units, and let the bundle have rank r. Simultaneous diagonalization of commuting semisimple complex matrices gives a constant invertible S with
\[
 S^{-1}A_jS=\operatorname{diag}(a_{j1},\ldots,a_{jr}),\qquad a_{ji}\in\mathbb Q.
\]
For completeness, each eigenspace of A_1 is preserved by all other A_j. Restrict to these eigenspaces, diagonalize A_2 there, and continue. The restrictions remain semisimple because a diagonalizable operator has square-free minimal polynomial, and every invariant-subspace restriction has a divisor of that polynomial.

Choose a positive integer D clearing all denominators. Define the finite X-scheme
\[
 Y=\operatorname{Spec}_X\mathcal O_X[t_1,\ldots,t_s]/(t_j^D-f_j:1\le j\le s).
\]
Each t_j is a unit. Each successive monic equation gives a locally free cover of rank D, and its derivative D t_j^{D-1} is a unit. Thus Y→X is finite étale and surjective, of degree D^s. Connectedness of Y is unnecessary; alternatively choose a connected component, which still surjects over connected X, with degree at most D^s.

On Y the units
\[
 h_i=\prod_{j=1}^s t_j^{D a_{ji}}
\]
have integer, possibly negative, exponents. Differentiating t_j^D=f_j gives
\[
 dh_i/h_i=\sum_j a_{ji}\,df_j/f_j.
\]
Consequently the columns of S diag(h_1,…,h_r) form an everywhere invertible algebraic horizontal matrix. This proves exactly the finite-étale trivialization required in the literal prompt. The construction works in arbitrary dimension and permits any number of intersecting logarithmic level sets outside X. There are no poles of df_j/f_j on X. Integrability follows directly from d(df_j/f_j)=0 and [A_i,A_j]=0.

This family also satisfies the arithmetic hypothesis, rather than merely an analytic finite-monodromy analogue. Spread out X, the units, S, their inverses and the integer exponents over a finitely generated integral Z-algebra, and invert D and the finitely many denominators. The same monic construction is finite faithfully flat étale in every remaining reduction, and the same horizontal matrix is invertible there. A trivial connection has p-curvature zero: its two operators are D^p and D^[p] on each scalar component and coincide. Étale pullback commutes with p-curvature because derivations lift uniquely; faithful flatness then descends the zero endomorphism to X. Thus all remaining good reductions have zero p-curvature.

What is not proved is that arithmetic vanishing forces a general connection into this class. Noncommuting residues, nontrivial bundles, non-semisimple residues, and general differential forms are not treated. Rational eigenvalues are an explicit assumption, not an inference from testing finitely many primes.

Relation to earlier contributions. The earlier attempt proves a fixed-nilpotent one-differential class on punctured projective lines and explains residue/global-monodromy obstacles. Here semisimple rational logarithmic residues are handled by a different mechanism, with explicit Kummer covers on arbitrary smooth varieties. The earlier unipotent gauge calculation is not repeated as the claimed scope.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1600012.txt


## Reproducibility and review

Source-only: literal prompt, prior full texts and stated references checked; written deduction audited by author, without formal or human verification.

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
The authoring instance for this report is /root/hundred_algebra. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1600012.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
