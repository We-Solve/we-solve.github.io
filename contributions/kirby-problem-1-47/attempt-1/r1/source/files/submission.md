# Attributed submission: Attempt: TOP-2706

Source: https://github.com/We-Solve/research/issues/281

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-2706

### Claim

Literature report

### Exact scope

For every integer k≥2, the minimum in the prompt is γ_4(T_{2k,2k−1})=k−1 by Batson’s theorem and matching construction; no full normal-Euler geography is claimed.

### Write-up

# An exact unbounded torus-knot family for nonorientable four-ball genus

**Problem:** TOP-2706

**Claim type:** Literature report

**Exact scope:** For every integer k≥2, the minimum in the prompt is γ_4(T_{2k,2k−1})=k−1 by Batson’s theorem and matching construction; no full normal-Euler geography is claimed.

## Exact minimum in a named infinite family

For $k\ge2$, the positive torus knot $T_{2k,2k-1}$ is nontrivial because its parameters are coprime and both exceed one. Batson proves

$$\gamma_4(T_{2k,2k-1})=k-1.$$

Theorem 2 supplies the lower bound, and Proposition 5 supplies equality by an explicit sequence of nonorientable band moves. These results apply to smoothly embedded surfaces in the standard four-ball, exactly as in the literal question. The family shows that the nonorientable first-Betti-number minimum is unbounded, despite all two-strand torus knots bounding Möbius bands.

The restriction $k\ge2$ matters. At $k=1$ the parameter pair is $(2,1)$ and the knot is the unknot. Some conventions allow an orientable disk as the value-zero case of a nonorientable genus invariant. The prompt explicitly minimizes over nonorientable surfaces, for which $b_1\ge1$. Excluding $k=1$ avoids importing an incompatible zero convention.

## The lower and upper sides are both needed

Batson’s obstruction is expressed in Theorem 1 using the ordinary knot signature and a Heegaard–Floer correction term of a specified integral surgery. Its sign depends on the source’s signature and surgery orientation conventions. For this report, the evaluated Theorem 2 is the invariant statement used; no unverified sign translation of a surgery formula is required.

The lower bound says **every** smooth nonorientable bounding surface for $T_{2k,2k-1}$ has $b_1\ge k-1$. Finding one surface with many bands could only give an upper bound. The matching construction reduces the torus knot by nonorientable pinch moves until it reaches an unknot, then caps by a disk. Each move is a band cobordism, and following the construction gives the connected nonorientable surface with $k-1$ crosscaps. Its first rational Betti number is $k-1$, so the construction gives the upper bound required for equality.

The deep lower bound and the geometric construction are credited to the source. This is a literature report of the proved exact family, not a new Floer-theoretic derivation or a claim that a generic pinch-move algorithm always minimizes nonorientable genus for every torus knot.

## Relating this to the geography question

Every compact connected nonorientable surface with one boundary component is a punctured connected sum of projective planes. Its first rational Betti number is the number of crosscaps. Thus the invariant computed here is the prompt’s $b_1$ minimum, rather than half that number or an orientable genus. In particular, for these knots every pair in the geography set has second coordinate at least $k-1$, and at least one pair has second coordinate exactly $k-1$.

This statement does not identify that pair’s normal Euler number, nor classify all geography pairs at higher $b_1$. The surgery correction-term inequalities in Batson’s paper constrain Euler numbers, but a full geography assertion would require both a correctly normalized relative Euler calculation and constructions realizing every remaining pair. Those steps are not claimed here. Taking a mirror changes the natural Euler-number signs, while the minimal nonorientable Betti number stays the same; no orientation-sensitive geography conclusion is inferred from the equality alone.

No locally flat topological equality is imported from the smooth theorem. The distinction is material: the source explicitly separates the topological question from its smooth lower bound. Arbitrarily large smooth values do not establish arbitrarily large topological values by inclusion of categories.

## Checked references

- Joshua Batson, Nonorientable four-ball genus can be arbitrarily large, arXiv:1204.1985, Theorems1/2 and Proposition5; published as Nonorientable slice genus can be arbitrarily large, Math.Res.Lett.21(3)(2014),423–436: https://arxiv.org/pdf/1204.1985


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

Joshua Batson, Nonorientable four-ball genus can be arbitrarily large, arXiv:1204.1985, Theorems1/2 and Proposition5; published as Nonorientable slice genus can be arbitrarily large, Math.Res.Lett.21(3)(2014),423–436: https://arxiv.org/pdf/1204.1985
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
