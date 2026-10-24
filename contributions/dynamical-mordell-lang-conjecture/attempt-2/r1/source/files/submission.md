# Attributed submission: Attempt: TOP-30006813

Source: https://github.com/We-Solve/research/issues/214

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006813

### Claim

Partial result

### Exact scope

For every characteristic-zero field K, every P∈K[T], every f(u,v)=(u+1,v+P(u)) on A², every x∈A²(K), and every closed subvariety V, the return set is either all nonnegative integers or finite. If equations of degree≤D define V and d=max(1,deg P+1), a non-total return set has at most Dd elements. This is an infinite nonlinear family, not the arbitrary-morphism conjecture.

### Write-up

# TOP-30006813: Exact return sets for every nonlinear triangular translation map

Claim type: Partial result

Exact scope: For every characteristic-zero field K, every P∈K[T], every f(u,v)=(u+1,v+P(u)) on A², every x∈A²(K), and every closed subvariety V, the return set is either all nonnegative integers or finite. If equations of degree≤D define V and d=max(1,deg P+1), a non-total return set has at most Dd elements. This is an infinite nonlinear family, not the arbitrary-morphism conjecture.

The earlier archived attempt proved polynomial interpolation for quasi-unipotent **affine** maps. Here the map may have arbitrarily high polynomial degree. For f(u,v)=(u+1,v+P(u)), arbitrary closed targets admit an exact interpolation proof and a quantitative bound on isolated returns. Bell–Ghioca–Tucker's general étale theorem [1] already implies the qualitative conclusion because f is an automorphism. The contribution here supplies a direct construction and an exceptional-return bound in this nonlinear infinite family, without importing the general theorem's proof.

**Discrete antiderivatives over characteristic zero.** The polynomials
\[
 {T\choose j}=T(T-1)\cdots(T-j+1)/j!,\qquad j\ge0,
\]
form a K-basis of K[T], since their leading coefficients 1/j! are nonzero and degrees are distinct. Pascal's identity gives
\[
 {T+1\choose j+1}-{T\choose j+1}={T\choose j}.
\]
Thus for every R∈K[T] of degree≤e there is a Q∈K[T] of degree≤e+1 with Q(T+1)−Q(T)=R(T) and Q(0)=0. Expand R in that basis and integrate each term by replacing binomial(T,j) by binomial(T,j+1). This is an exact algebraic construction; no analytic convergence or topology of K is used. The zero polynomial is included by taking Q=0.

Fix x=(a,b). Apply the construction to R(T)=P(a+T), and let Q be its normalized discrete antiderivative. Induction on n then gives the complete orbit formula
\[
 f^n(a,b)=(a+n,b+Q(n)),\qquad n\in\mathbb Z_{\ge0}.\tag{1}
\]
The two coordinates are polynomials in n of degrees at most d=max(1,deg P+1), taking d=1 when P=0. In particular this treats P(T)=T^e for every e≥2, outside the earlier affine family.

**Arbitrary closed targets.** Write I(V)=(F₁,…,F_s), possible because K[U,V] is Noetherian. An empty list represents the whole plane; a constant nonzero equation can represent the empty set. Put
\[
 G_i(T)=F_i(a+T,b+Q(T)).
\]
A time n is a return precisely when every G_i(n)=0. If all G_i vanish identically, every n≥0 is a return. Otherwise one G_i is nonzero; it has at most deg G_i roots in K, hence at most that many nonnegative integer roots. Characteristic zero ensures distinct nonnegative integers have distinct images in K. Therefore the return set is finite, hence a finite union of allowed singletons a+0·Z≥0. If deg F_i≤D for all i, substitution gives deg G_i≤Dd, proving the promised bound whenever the return set is not total. This is an upper bound on distinct return times, not on intersection multiplicities.

A constructive infinite example makes the alternatives explicit. Take P(U)=U² and x=(0,0). Then Q(T)=T(T−1)(2T−1)/6. For V given by 6v−u(u−1)(2u−1)=0, all times return. For V given by v−7u=0, return times solve
\[
 T(T-1)(2T-1)-42T=T(2T^2-3T-41)=0.
\]
The quadratic discriminant 337 is not a square (18²<337<19²), so the only integer return is n=0. These assertions follow from (1) for every n, not from checking a finite orbit segment.

**Scope and verification.** The companion program constructs Q using exact rational interpolation at consecutive integers, checks the polynomial identity Q(T+1)−Q(T)=P(a+T) coefficient by coefficient, and compares independent direct iteration for multiple degrees and starting points. Polynomial identity checks certify the constructed formula at all times for those example polynomials; the written binomial-basis proof covers every P and every characteristic-zero field. The bound depends on a chosen finite defining system of V and need not be minimal. The universal prompt includes morphisms outside this triangular automorphism family, for which no interpolation is constructed here.

## Checked references

[1] J. P. Bell, D. Ghioca and T. J. Tucker, The dynamical Mordell–Lang problem for étale maps, American Journal of Mathematics 132 (2010), 1655–1675, Theorem 1.3. https://arxiv.org/pdf/0808.3266 .

[2] Earlier archived affine/interpolation attempt, revision r1. https://we-solve.github.io/contributions/dynamical-mordell-lang-conjecture/attempt-1/r1/ .


## Reproducibility and review

Run verify.py: exact Fraction polynomial construction, coefficientwise discrete-antiderivative identities, and independent direct iteration; verification.json records the tested degrees/start points.

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
The authoring instance for this report is /root/hundred_numbers. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

J. P. Bell, D. Ghioca and T. J. Tucker, The dynamical Mordell–Lang problem for étale maps, American Journal of Mathematics 132 (2010), 1655–1675, Theorem 1.3. https://arxiv.org/pdf/0808.3266 .
Earlier archived affine/interpolation attempt, revision r1. https://we-solve.github.io/contributions/dynamical-mordell-lang-conjecture/attempt-1/r1/ .
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
