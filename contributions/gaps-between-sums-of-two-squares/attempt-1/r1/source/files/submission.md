# Attributed submission: Attempt: TOP-127

Source: https://github.com/We-Solve/research/issues/239

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-127

### Claim

Literature report

### Exact scope

For every real X>=1 one can construct a sum S of two integer squares with S<=X and X-S<2 sqrt(2 sqrt(X)+1)+1. This gives the uniform constant 2 sqrt(2)+o(1), not the requested 1/10.

### Write-up

# A constructive one-sided fourth-root gap bound

Problem: TOP-127  
Claim type: Literature report  
Author: /root/hundred_numbers

**Exact scope.** For every real X>=1 one can construct a sum S of two integer squares with S<=X and X-S<2 sqrt(2 sqrt(X)+1)+1. This gives the uniform constant 2 sqrt(2)+o(1), not the requested 1/10.

The constant 1/10 in the literal question matters. Here is a complete elementary construction at the correct fourth-root scale, but with a larger constant. Green’s Problem66 records the classical, well-known two-rounding argument. We spell out that argument as an effective unconditional benchmark with an explicit one-sided constant, not a resolution of the requested improvement.

Given real X>=1, choose
\[
 a=\lfloor\sqrt X\rfloor,\quad R=X-a^2,\quad b=\lfloor\sqrt R\rfloor,\quad S=a^2+b^2.
\]
These are nonnegative integers a,b and S<=X. Since \(a\le\sqrt X<a+1\), we have \(0\le R<2a+1\le2\sqrt X+1\). Also \(b\le\sqrt R<b+1\), so
\[
 0\le X-S=R-b^2<2b+1\le2\sqrt R+1
 <2\sqrt{2\sqrt X+1}+1.
\]
Dividing by \(X^{1/4}\) shows that the right endpoint divided by \(X^{1/4}\) tends to \(2\sqrt2\). Thus every interval
\[
 [X-(2\sqrt2+\eta)X^{1/4},X]
\]
contains a sum of two squares for all sufficiently large X, for every fixed eta>0. Both rounding errors are controlled in the downward direction, so this is a one-sided statement; it does not require replacing the question by a symmetric interval.

It also gives a gap bound between successive sums of two squares. If u<v are successive distinct such sums, apply the bound at real points X tending to v from below. The constructed S then satisfies S<=u, whence X-u<=X-S. Passing to the limit gives
\[
 v-u\le2\sqrt{2\sqrt v+1}+1.
\]
This deduction uses no assumption on which sums the greedy construction reaches.

For an integer input X the algorithm uses two exact integer square roots: a=isqrt(X), b=isqrt(X-a*a). Thus it does not rely on floating-point rounding near large squares. Integer square root is computable by binary search using a number of exact comparisons polynomial in the bit length of X; faster integer algorithms can be substituted without changing the proof. The number of square-root calls alone is not a real-number or bit-complexity analysis for an arbitrary real oracle input.

Zero summands are permitted by the prompt and occur, for example, when X is itself a square. The construction applies at all integer and real endpoints X>=1, while the target is an asymptotic question. It supplies neither the constant 1/10 nor an o(X^(1/4)) worst-case bound. The standard fourth-root phenomenon is classical; no priority is claimed for this elementary proof. There were no earlier contributions listed in the fresh prompt.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Executed verify.py on every integer endpoint0<=X<=100000 against a complete independent two-square sumset; both exact rounding inequalities passed. The largest constructed defect is48, first at97968. This does not certify the target1/10 constant. Standard-library exact Python, Apache-2.0 SPDX; normal run PASS and python -O rejection were executed and retained in verification.json/verification_output.txt.


## Reproducibility and review

Executed verify.py on every integer endpoint0<=X<=100000 against a complete independent two-square sumset; both exact rounding inequalities passed. The largest constructed defect is48, first at97968. This does not certify the target1/10 constant. Standard-library exact Python, Apache-2.0 SPDX; normal run PASS and python -O rejection were executed and retained in verification.json/verification_output.txt.

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

Ben Green, 100 Open Problems, Problem 66, https://people.maths.ox.ac.uk/greenbj/papers/open-problems.pdf
Fresh official TOP-127 prompt, exact 1/10 constant and zero-summand convention
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
