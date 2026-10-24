# Attributed submission: Attempt: TOP-1217

Source: https://github.com/We-Solve/research/issues/145

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1217

### Claim

Literature report

### Exact scope

Reports Sawin’s arXiv:2605.20579v1 Theorem 1 with its unbounded-sequence quantifier and ordered-pair convention, transfers it to unordered pairs, and proves an exact finite lattice representation formula. Does not determine $u(n)$.

### Write-up

# A quantified modern unit-distance lower bound and an exact lattice counting lemma

**Problem:** TOP-1217

**Claim type:** Literature report

**Exact scope:** Reports Sawin’s arXiv:2605.20579v1 Theorem 1 with its unbounded-sequence quantifier and ordered-pair convention, transfers it to unordered pairs, and proves an exact finite lattice representation formula. Does not determine $u(n)$.

The prompt defines $u(n)$ using unordered pairs. Sawin's Theorem 1 in arXiv:2605.20579v1 (20 May 2026) states that for arbitrarily large integers $n$, there is an $n$-point planar set with at least $n^{1.014114}/C$ ordered unit-distance pairs, for an absolute constant $C$. This is a preprint theorem credited to its author. It yields
\[
 u(n)\ge \frac{n^{1.014114}}{2C}
\]
along an unbounded sequence of $n$, since each unordered pair has exactly two orientations. It does not assert this precise bound for every sufficiently large $n$. The report does not independently reconstruct the number-field tower argument.

One useful logical consequence requires no further number theory. A universal estimate $u(n)=n^{1+o(1)}$ would imply, for each $\epsilon>0$, $u(n)\le n^{1+\epsilon}$ for all sufficiently large $n$. Choose $0<\epsilon<0.014114$. On the theorem's sequence, $n^{1.014114}/(2C)>n^{1+\epsilon}$ eventually, a contradiction. This refutes that old proposed growth form, while leaving the exact extremal problem open.

For a self-contained finite construction and implementation check, let $q,m$ be positive integers, and rescale the $m\times m$ integer grid by $1/\sqrt q$. Its unit distances correspond exactly to integer displacement vectors $(a,b)$ with $a^2+b^2=q$. Their unordered number is
\[
 U(m,q)=\frac12\sum_{\substack{a,b\in\mathbb Z\\a^2+b^2=q}}
 \max(0,m-|a|)\max(0,m-|b|).
\]
For a fixed displacement, the product counts valid ordered starting positions independently in the two coordinate directions. Distinct displacements specify distinct ordered pairs; negation reverses each pair. This proves the formula, including horizontal and vertical vectors and boundary exclusions.

As a concrete reproducible example, $q=65$ has the sixteen signed and coordinate-swapped representations obtained from $(1,8)$ and $(4,7)$. For $m\ge9$ the formula specializes to
\[
 U(m,65)=4\big((m-1)(m-8)+(m-4)(m-7)\big).
\]
The integer checker verifies this formula against direct pairwise squared-distance enumeration for $m=9,10,16$ and checks several other radicands. It certifies finite lower bounds for $u(m^2)$, not the preprint's superlinear exponent. The separation between these two kinds of evidence prevents a small lattice computation from being presented as a verification of the asymptotic theorem.

**Remaining task.** Determine the extremal function, or close the gap between known lower and upper bounds. The source's discussion of the classical $O(n^{4/3})$ upper bound is contextual; no claim that this report checks every current upper-bound paper is made.


## Reproducibility and review

Exact grid displacement counts compared with all point pairs for specified m and q; asymptotic theorem is credited source-based, not computationally reverified.

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
The authoring instance for this report is /root/hundred_geometry. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1217.txt
https://arxiv.org/html/2605.20579v1
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
