# Attributed submission: Attempt: TOP-2736

Source: https://github.com/We-Solve/research/issues/284

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-2736

### Claim

Literature report

### Exact scope

For every integer m≥1 the Hass–Nowik unknot diagram D_m has 7m−1 crossings and distance from the trivial diagram between 2m²+3m−2 and 2m²+3m; hence the prompt’s uniform R(N) is Ω(N²).

### Write-up

# Quadratic Reidemeister lower bounds already occur among unknot diagrams

**Problem:** TOP-2736

**Claim type:** Literature report

**Exact scope:** For every integer m≥1 the Hass–Nowik unknot diagram D_m has 7m−1 crossings and distance from the trivial diagram between 2m²+3m−2 and 2m²+3m; hence the prompt’s uniform R(N) is Ω(N²).

## An explicit quantitative family

Hass and Nowik construct a diagram $D_m$ of the unknot with $7m-1$ crossings and prove, in both the plane and the sphere,

$$2m^2+3m-2\le d_R(D_m,U)\le2m^2+3m.$$

The family is the diagram in their Figure 2, with the five twist regions parametrized as in that construction. The lower bound applies to **all** Reidemeister sequences, including those that introduce extra crossings. The upper bound is a particular displayed simplification. Thus these are nearly exact distances, within an additive error of two, for an unbounded diagram family.

For the $R(N)$ in the prompt, $U$ has zero crossings, so the family gives

$$R(7m-1)\ge2m^2+3m-2.$$

Because the definition uses total endpoint crossings at most $N$, $R(N)$ is nondecreasing. Taking $m=\lfloor(N+1)/7\rfloor$ proves a quadratic lower bound for every sufficiently large $N$, rather than only a sparse subsequence. For example, when $N\ge13$, $m\ge(N+1)/14$ and $2m^2+3m-2\ge2m^2$, so

$$R(N)\ge\frac{(N+1)^2}{98}.$$

No linear uniform upper bound is therefore possible, even after restricting the knot type to the unknot.

## The obstruction controls every move sequence

For each crossing $a$ of an oriented diagram, smooth it compatibly with the orientation and take the linking number of the resulting two-component link. Form a formal sum $I(D)$ of symbols $X_k$ for positive crossings and $Y_k$ for negative crossings with smoothing linking number $k$.

The source checks that the change under one Reidemeister move, up to sign, is one of

$$X_0,\quad Y_0,\quad X_k+Y_k,\quad X_k+Y_{k+1},\quad
X_k-X_{k+1},\quad Y_k-Y_{k+1}.$$

Define a homomorphism on this free abelian group by $g(X_k)=1+|k|$ and $g(Y_k)=-1-|k|$. Its change on every listed generator has absolute value at most one. Therefore $|g(I(D))-g(I(E))|$ is a lower bound for $d_R(D,E)$.

For the constructed family, the source computes

$$I(D_m)=mX_m+mX_{-m}+(2m-1)X_{-1}+3mY_0.$$

Applying $g$ gives $2m^2+3m-2$, while $I(U)=0$. This explains why a sequence cannot evade the obstruction by using a different simplification strategy or more intermediate crossings. It is a diagram invariant with bounded move changes, not a knot invariant that would have identical values on all unknot diagrams.

## What remains undetermined

The existence of this family does not provide a matching quadratic upper bound for $R(N)$ over all knots, or even an optimal uniform upper bound for all unknot diagrams. The particular upper bound for $D_m$ must not be generalized from that family to arbitrary diagrams. Likewise, a move-count lower bound is not a lower bound on the maximum crossing number along a path. That is the separate height question in the neighboring prompt.

The checked paper is Discrete & Computational Geometry44(2010),91–95; its online date is2009. This distinguishes it from Nowik’s different 2009 Duke paper on plane curves. We retain the source’s Theorem2.1 and the exact additive constants.

## Checked references

- Joel Hass and Tahl Nowik, Unknot diagrams requiring a quadratic number of Reidemeister moves to untangle, Discrete Comput.Geom.44(2010),91–95, Theorem2.1 and its proof; author-hosted published PDF: https://u.math.biu.ac.il/~tahl/papers/unknot.pdf


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no earlier contributions listed; primary theorem and hypotheses checked by browsing; displayed deduction checked algebraically. No program or formal verification is claimed.

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
The authoring instance for this report is /root/hundred_topology. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

Joel Hass and Tahl Nowik, Unknot diagrams requiring a quadratic number of Reidemeister moves to untangle, Discrete Comput.Geom.44(2010),91–95, Theorem2.1 and its proof; author-hosted published PDF: https://u.math.biu.ac.il/~tahl/papers/unknot.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
