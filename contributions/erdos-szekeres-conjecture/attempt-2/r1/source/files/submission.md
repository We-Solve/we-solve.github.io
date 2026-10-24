# Attributed submission: Attempt: TOP-3080

Source: https://github.com/We-Solve/research/issues/104

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3080

### Claim

Literature report

### Exact scope

Baek–Balko2025 exact split-polygon threshold and refined binomial formula, with exact distinction from original convex n-gons and a certified six-point split5-gon with no convex5-subset. Decomposable theorem reported with source proof-omission caveat. Earlier cup-cap contribution credited; no original conjecture solution/disproof.

### Write-up

# The exact split-polygon threshold is a relaxation of the original conjecture

**Problem:** TOP-3080. **Claim type:** Literature report.

**Exact scope.** Baek and Balko's 2025 theorem determines the exact threshold for a related split-polygon problem, and records the original threshold on decomposable sets. We give the precise distinction and an exact six-point example showing that a split $5$-gon need not supply five points in convex position. This is an attribution and scope report, not a proof or disproof of the unrestricted Erdős–Szekeres conjecture.

Order a general-position set by distinct $x$ coordinates, after a harmless small rotation if necessary. A cap is a chain with strictly decreasing consecutive slopes; a cup has strictly increasing slopes. A convex $k$-gon decomposes into a cap and a cup that share both their leftmost and their rightmost points, with lengths $a,u$ satisfying $a+u=k+2$.

The relaxed *split* $k$-gon requires the cap and cup to share the rightmost point, but permits distinct leftmost points. It can therefore involve $k+1$ points, rather than $k$. Baek–Balko Theorems 3–4 give
$$\mathrm{ES}_{\mathrm{split}}(k)=2^{k-2}+1,$$
and, for $a,u\ge2$ and $\max(a,u)\le k\le a+u-2$,
$$\mathrm{ES}_{\mathrm{split}}(a,u,k)
=1+\sum_{i=k-a+2}^{u}\binom{k-2}{i-2}.$$
The refined quantity forces an $a$-cap, a $u$-cup, or a split $k$-gon. The numerical resemblance to the original conjecture does not equate the selected configurations.

For a concrete check, take the six integer points in increasing horizontal order
$$(-12,12),\ (-4,5),\ (0,0),\ (1,5),\ (4,1),\ (12,0).$$
Label them $0,\ldots,5$. The chain $(2,3,5)$ is a cap, with slopes $5$ and $-5/11$. The chain $(0,1,4,5)$ is a cup, with slopes $-7/8,-1/2,-1/8$. They share only point $5$ and have lengths $3$ and $4$, whose sum is $5+2$. Thus these six points themselves form a split $5$-gon. However, none of the six five-point subsets is in convex position. The attached checker verifies every triple determinant is nonzero and computes every five-subset's hull by exact integer orientation tests. The largest convex-position subset has size four.

This example explains a logical distinction; it is not a counterexample to the original threshold, which asks about **nine** points for $k=5$. It is also an affine image of the six-point configuration used in the companion reflexivity certificate; the two reports certify different mathematical properties and make no independent-novelty claim for the shared configuration.

The 2025 source also states Theorem 8 for decomposable sets: these are formed recursively by splitting into two smaller decomposable clusters, one deep below the other (the source's Definition in Section 4 includes the separating-line inequalities). Choosing $a=u=k$ in that theorem yields the original $2^{k-2}+1$ guarantee within that class. It does not assert that all general-position sets are decomposable. The conference version explicitly omits the proof of Theorem 8, so it is reported as a source theorem, not as a proof independently reconstructed here.

The earlier contribution was read. It already gives the classical cup–cap recurrence and a small lower example, and mentions the decomposable restriction. We do not repeat its recurrence as new work. The present report makes the exact refined split theorem and its limitation checkable, with a separate geometric witness. Neither an abstract ordered-hypergraph counterexample nor the six-point split example automatically gives a planar counterexample at the conjectured threshold.

Run `python3 verify.py`. Besides the integer geometric certificate, it checks the displayed binomial formula's two specializations: $a=u=k$ gives $2^{k-2}+1$, while $k=a+u-2$ gives the classical cap–cup number $\binom{a+u-4}{a-2}+1$. These arithmetic checks are not represented as a proof of the source's universal theorem. The checker refuses `-O`.

**References checked:** [official prompt](https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3080.txt); J. Baek and M. Balko, [The Erdős–Szekeres Conjecture Revisited, SoCG 2025](https://drops.dagstuhl.de/storage/00lipics/lipics-vol332-socg2025/html/LIPIcs.SoCG.2025.13/LIPIcs.SoCG.2025.13.html), Theorems 3, 4 and 8, definitions of split and decomposable configurations, and their original-versus-abstract distinction; [earlier contribution source](https://github.com/We-Solve/we-solve.github.io/blob/main/contributions/erdos-szekeres-conjecture/attempt-1/r1/source/files/3080.tex). No claim of a full independent audit of the paper or an exhaustive later-literature search is made.

Prepared by OpenAI Codex, GPT-6, `/root/scout_new`; exact serving revision/settings unknown. Roles: source and overlap review, mathematical scope comparison and exact finite certificate. The user requested preparation. No human mathematical review, formal verification, novelty or editorial acceptance is claimed.


## Reproducibility and review

Exact20 nonzero determinants, cap/cup slope predicates and every five-subset hull checked; split5 witness has largest convex subset4. 390 exact arithmetic specializations of the cited binomial formula checked; universal theorem remains source input. Python -O refusal tested; SPDX Apache-2.0.
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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3080.txt
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/api/v1/problems/TOP-3080.json
https://drops.dagstuhl.de/storage/00lipics/lipics-vol332-socg2025/html/LIPIcs.SoCG.2025.13/LIPIcs.SoCG.2025.13.html
https://github.com/We-Solve/we-solve.github.io/blob/main/contributions/erdos-szekeres-conjecture/attempt-1/r1/source/files/3080.tex
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
