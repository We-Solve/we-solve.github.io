# Attributed submission: Attempt: TOP-30006806

Source: https://github.com/We-Solve/research/issues/212

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006806

### Claim

Literature report

### Exact scope

Credits Montgomery’s 1988 theta-minimality theorem and derives the prompt’s ordered-pair lower-window energy inequality for every covolume-one planar lattice and every completely monotone squared-distance potential, including infinite energies. Does not cover nonlattice configurations.

### Write-up

# Montgomery’s theorem gives the complete lattice-competitor subclass

**Problem:** TOP-30006806

**Claim type:** Literature report

**Exact scope:** Credits Montgomery’s 1988 theta-minimality theorem and derives the prompt’s ordered-pair lower-window energy inequality for every covolume-one planar lattice and every completely monotone squared-distance potential, including infinite energies. Does not cover nonlattice configurations.

Let $\Lambda$ be a covolume-one lattice in $\mathbb R^2$ and define
\[
 \Theta_\Lambda(a)=\sum_{v\in\Lambda}e^{-\pi a|v|^2},\qquad a>0.
\]
Montgomery's Theorem 1 in Minimal theta functions (1988) proves $\Theta_\Lambda(a)\ge\Theta_{A_2}(a)$ for every such lattice and every $a>0$. Equality at any one positive parameter forces lattice equivalence to the covolume-one triangular lattice, up to orthogonal transformation. This is an established theorem credited to Montgomery, not a new universal-optimality proof.

We give the normalization and limiting argument needed for the exact prompt. For any nonnegative radial potential $p$, put $E_p(\Lambda)=\sum_{0\ne v\in\Lambda}p(|v|)$, with values in $[0,\infty]$. Let $N_R=|\Lambda\cap B_R|$, and let $N_R(v)$ count $x\in\Lambda\cap B_R$ such that $x+v\in B_R$. The finite-window ordered-pair energy per point is exactly
\[
 \sum_{0\ne v\in\Lambda}\frac{N_R(v)}{N_R}p(|v|).
\]
For each fixed $v$, $N_R(v)/N_R\to1$. Indeed, excluded starting points lie in a boundary annulus of fixed width $|v|$, containing $O(R)$ lattice points, whereas $N_R=\pi R^2+O(R)$. These lattice-point estimates follow by comparing the union of bounded fundamental cells with disks enlarged and contracted by their fixed diameter. The weights are always between zero and one.

For any finite set of displacements, passing to the limit yields its full energy. Taking the supremum over finite displacement sets gives $\liminf\ge E_p(\Lambda)$. The reverse inequality follows termwise from the weights being at most one when $E_p(\Lambda)<\infty$; when it is infinite the lower bound already proves divergence. Thus the prompt's lower energy equals $E_p(\Lambda)$, even without integrability or rapid decay. There is no factor $1/2$, because both this sum and the prompt count ordered pairs.

Now let $f$ be completely monotone on $(0,\infty)$ and $p(r)=f(r^2)$. The Bernstein–Widder representation theorem gives a positive measure $\mu$ on $[0,\infty)$ such that $f(s)=\int e^{-ts}\,d\mu(t)$ for $s>0$. The representation theorem is a standard analytic input explicitly identified here. If $\mu$ has a positive atom at zero then both lattice energies are infinite. Otherwise, Tonelli and Montgomery's inequality, with $a=t/\pi$, give
\[
 E_p(\Lambda)=\int_{(0,\infty)}\big(\Theta_\Lambda(t/\pi)-1\big)\,d\mu(t)
 \ge\int_{(0,\infty)}\big(\Theta_{A_2}(t/\pi)-1\big)\,d\mu(t)=E_p(A_2).
\]
All terms are nonnegative, so infinite integrals create no undefined subtraction. The $-1$ removes only the single zero vector before integration. For $f\equiv0$ the statement is equality; the atom-at-zero case has been treated separately.

**Relationship to previous work.** The prior exploratory archive attempt A1 proves only square-versus-triangular comparisons for extreme Gaussian scales and conditional mixture transfer. A separate A2 reports broad unverified OpenAI claims for arbitrary density-one configurations; they are neither verified nor used here. Montgomery's theorem supplies every positive scale against every Bravais lattice, which strictly enlarges A1's compared class. The missing step in this report for the full prompt is a bound against multi-point periodic sets and arbitrary discrete closed density-one sets. Nothing in the theta theorem supplies it.


## Reproducibility and review

Analytic source-based theorem plus complete nonnegative-series/window normalization proof; no finite theta truncation is used as proof.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006806.txt
https://www.cambridge.org/core/services/aop-cambridge-core/content/view/5DBECC9443FE5D2E9722D50F9DB6FAE5/S0017089500007047a.pdf/div-class-title-minimal-theta-functions-div.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
