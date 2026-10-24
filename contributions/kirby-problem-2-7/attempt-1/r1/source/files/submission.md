# Attributed submission: Attempt: TOP-2755

Source: https://github.com/We-Solve/research/issues/291

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-2755

### Claim

Literature report

### Exact scope

For n>m≥1 and n≠4, every homomorphism B_n→B_m is uniquely φ_b(β)=b^{e(β)} for some b∈B_m, by Lin’s Theorem3.1; the noncyclic B_4→B_3 exception is explicitly retained.

### Write-up

# All braid homomorphisms into fewer strands, outside the four-to-three exception

**Problem:** TOP-2755

**Claim type:** Literature report

**Exact scope:** For n>m≥1 and n≠4, every homomorphism B_n→B_m is uniquely φ_b(β)=b^{e(β)} for some b∈B_m, by Lin’s Theorem3.1; the noncyclic B_4→B_3 exception is explicitly retained.

## A structural classification in one full parameter regime

Let $n>m\ge1$ and assume $n\ne4$. Let $e:B_n\to\mathbb Z$ be exponent sum, with $e(\sigma_i)=1$. Lin proves that every homomorphism $B_n\to B_m$ has cyclic image. Consequently all such maps are

$$\phi_b(\beta)=b^{e(\beta)},\qquad b\in B_m.$$

This describes the maps themselves, rather than just tuples satisfying the braid relations. Up to simultaneous conjugation of their images, the parameter $b$ is taken up to conjugacy in $B_m$. For $m=1$ the only parameter is the identity and the map is trivial.

## Why the cyclic theorem gives exactly this parameterization

Abelianizing the standard braid presentation turns each adjacent braid relation into $\sigma_i=\sigma_{i+1}$. All generator classes are equal, and the exponent-sum map shows that this common class has infinite order. Thus $B_n^{\mathrm{ab}}\cong\mathbb Z$ for $n\ge2$.

A cyclic image is abelian, so any map into it factors through that abelianization. The image of the integer one is a single braid $b$, and every generator has image $b$. Hence the map has the displayed form. Conversely, for every $b\in B_m$, that formula is a homomorphism, since exponent sums add. It satisfies every commuting and braid relation and is defined on all elements. Different parameters give different maps because the image of $\sigma_1$ recovers $b$.

The substantive imported result is that no noncyclic image exists in this strand regime. It is Theorem3.1(b) of Lin’s primary manuscript, which calls the image “integral,” meaning torsion-free cyclic or trivial. The report does not replace this theorem by the much weaker observation that a map to an abelian target factors through exponent sum.

## The exceptional strand count is real

There is a surjection $\pi:B_4\to B_3$ given by

$$\pi(\sigma_1)=\pi(\sigma_3)=\tau_1,\qquad
\pi(\sigma_2)=\tau_2,$$

where $\tau_1,\tau_2$ are the standard generators of $B_3$. The only nonadjacent source commuting relation is respected because its two images are equal. Both source braid relations become the target braid relation. The two target generators occur, so the map is surjective and noncyclic. Therefore an assertion covering all $n>m$ without exception would be false.

For $n=4,m\le2$, the target is trivial or infinite cyclic, so the exponent-sum classification follows directly from abelianization. The genuinely exceptional smaller-target pair is $(4,3)$. Lin discusses further structure there, but it is not needed to state the complete classification on the advertised $n\ne4$ regime.

## Boundary of the result

Maps into the same or more strands can be injective and need not be cyclic; the ordinary inclusion $B_n\hookrightarrow B_{n+1}$ already demonstrates why this regime cannot be extrapolated. No claim classifies those maps here. The source is the checked arXiv:math/0404528v1 manuscript, whose actual Theorem3.1 and Remark3.2 were inspected. No publication claim or unverified extension to welded or surface braid groups is added.

## Checked references

- Vladimir Lin, Braids and Permutations, arXiv:math/0404528v1(29 April2004), Theorem3.1 and Remark3.2, with “integral” defined in §1.1: https://arxiv.org/pdf/math/0404528


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

Vladimir Lin, Braids and Permutations, arXiv:math/0404528v1(29 April2004), Theorem3.1 and Remark3.2, with “integral” defined in §1.1: https://arxiv.org/pdf/math/0404528
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
