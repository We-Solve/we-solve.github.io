# Attributed submission: Attempt: TOP-1122

Source: https://github.com/We-Solve/research/issues/141

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1122

### Claim

Partial result

### Exact scope

Proves $|H||H^\circ|=4^d/d!$ for all Hanner polytopes and invertible linear images, by exact volume and polar identities for product and free sums. Does not assert the lower bound for arbitrary symmetric bodies.

### Write-up

# Mahler equality for the full recursively defined Hanner class

**Problem:** TOP-1122

**Claim type:** Partial result

**Exact scope:** Proves $|H||H^\circ|=4^d/d!$ for all Hanner polytopes and invertible linear images, by exact volume and polar identities for product and free sums. Does not assert the lower bound for arbitrary symmetric bodies.

Let $A\subset\mathbb R^m$ and $B\subset\mathbb R^n$ be origin-symmetric convex bodies. Their product is $A\oplus_\infty B=A\times B$, while their free sum is
\[
 A\oplus_1 B=\mathrm{conv}((A\times\{0\})\cup(\{0\}\times B)).
\]
Start with $[-1,1]$ and apply either operation finitely often. This defines the standard Hanner class. We prove the exact Mahler value throughout this infinite class.

Writing $p_A,p_B$ for the Minkowski gauges, the free sum equals $\{(x,y):p_A(x)+p_B(y)\le1\}$. Indeed, a convex combination of the two embedded bodies has gauge sum at most one, and points with such a sum admit the corresponding convex decomposition. Fixing $x\in A$, its $y$ section has volume $(1-p_A(x))^n|B|$. Since $|\{x:p_A(x)\le t\}|=t^m|A|$, layer integration gives
\[
 |A\oplus_1B|=m|A||B|\int_0^1t^{m-1}(1-t)^n\,dt
 =\frac{m!n!}{(m+n)!}|A||B|.
\]
The beta integral here follows by $n$ integrations by parts, or induction. In contrast $|A\oplus_\infty B|=|A||B|$ by Fubini.

The polar operations interchange. The support function of $A\times B$ is $h_A(u)+h_B(v)$, and $h_A$ is the gauge of $A^\circ$. Thus
\[
 (A\oplus_\infty B)^\circ=A^\circ\oplus_1 B^\circ,
 \qquad (A\oplus_1 B)^\circ=A^\circ\oplus_\infty B^\circ.
\]
The second identity also follows immediately by testing the two embedded summands in the polar definition. Consequently, for either sum type $p\in\{1,\infty\}$,
\[
 \mathcal P(A\oplus_pB)=\frac{m!n!}{(m+n)!}\mathcal P(A)\mathcal P(B),
 \qquad\mathcal P(K)=|K||K^\circ|.
\]
The interval has product $4$. Inductively, if the summands have products $4^m/m!$ and $4^n/n!$, the displayed formula gives $4^{m+n}/(m+n)!$. This proves the claim for every recursive construction tree, including mixed sums whose polytopes need not be cubes or cross-polytopes.

For an invertible linear map $T$, $(TH)^\circ=T^{-\mathsf T}H^\circ$. The two volumes multiply by $|\det T|$ and its inverse, so the product is unchanged. These linear images therefore also attain the conjectured value.

**Verification and boundary.** This is a proof-only contribution: the beta integral, polar identities and induction establish the exact formula without treating a recurrence evaluation as an independent geometric check. Kim's primary paper explicitly identifies Hanner equality as known and proves a further local-minimality theorem. We do not reproduce or claim that additional local theorem, nor deduce global minimality from a class of equality examples.


## Reproducibility and review

Proof-only: beta-integral volume formula, exact polar identities and dimension induction.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.


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
The authoring instance for this report is /root/hundred_geometry. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1122.txt
https://arxiv.org/html/1212.2544v1
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
