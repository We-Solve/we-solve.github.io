# Attributed submission: Attempt: TOP-1279

Source: https://github.com/We-Solve/research/issues/148

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1279

### Claim

Partial result

### Exact scope

Gives an explicit countable rational-distance subset dense in the unit circle and its rational-scale copies. It is not dense in the plane and does not answer the Erdős–Ulam question.

### Write-up

# A rational-distance set dense on a circle, with exact chord certificates

**Problem:** TOP-1279

**Claim type:** Partial result

**Exact scope:** Gives an explicit countable rational-distance subset dense in the unit circle and its rational-scale copies. It is not dense in the plane and does not answer the Erdős–Ulam question.

Write, for $t\in\mathbb Q$,
\[
 a(t)=\frac{1-t^2}{1+t^2},\qquad b(t)=\frac{2t}{1+t^2},\qquad
 P(t)=(a(t)^2-b(t)^2,2a(t)b(t)).
\]
Then $a(t)^2+b(t)^2=1$, so $P(t)$ lies on the unit circle. The set $A=\{P(t):t\in\mathbb Q\}$ has rational coordinates, but that observation by itself would not imply rational pairwise distances. The crucial exact identity is
\[
 \|P(t)-P(s)\|^2
   =4\big(b(t)a(s)-a(t)b(s)\big)^2.
\]
To prove it, identify $(a,b)$ with the unit complex number $a+ib$. The map $P$ is its square. For unit complex numbers $z,w$, $|z^2-w^2|^2=4\,\mathrm{Im}(z\overline w)^2$; alternatively expansion of both real coordinates yields the same identity using $a^2+b^2=1$. Therefore
\[
 \|P(t)-P(s)\|=2|b(t)a(s)-a(t)b(s)|\in\mathbb Q.
\]
The absolute value selects the required nonnegative square root, including coincident images.

The rational parametrization $t\mapsto(a(t),b(t))$ has dense image in the unit circle: real parameters cover it except $(-1,0)$, and rational parameters approximate each finite real parameter continuously; the missing point is a limit as $|t|\to\infty$. Squaring complex unit numbers is a continuous surjection of the circle onto itself. For each target point choose a square root and approximate it by parametrized rational points. Its squares approximate the target. Hence $A$ is dense in the circle. It is countable, and duplication of some parameters does not affect the argument.

Translations and rotations preserve distances. A homothety with positive rational scale $r$ multiplies all distances by $r$ and therefore preserves rationality. Thus this gives a rational-distance set dense on any circle of positive rational radius, with arbitrary center. Arbitrary irrational scaling is not included in this distance-preservation claim.

**Verification.** The included checker uses only rational arithmetic. For parameters $i/j$ with $|i|\le12$ and $1\le j\le12$, it deduplicates the points, checks their unit norms, and verifies the chord identity for every distinct pair. No floating-point square roots are used.

**Relation to the exact target.** The official statement explicitly requires density in every open ball of the whole plane. The closure of $A$ is one circle, so any ball disjoint from that circle misses $A$. A union of independently constructed circles would not suffice: cross-circle distances would need additional proofs. This construction is a certified infinite structured subclass, useful for separating rational-coordinate, rational-distance and ambient-density requirements. It makes no claim of progress on the general-type surface issue in the prompt.


## Reproducibility and review

Rational norm and all-pairs chord identities for deduplicated parameters i/j, |i|≤12, 1≤j≤12; infinite family proved symbolically.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1279.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
