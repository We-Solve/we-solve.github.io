# Attributed submission: Attempt: TOP-2750

Source: https://github.com/We-Solve/research/issues/289

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-2750

### Claim

Literature report

### Exact scope

For every sphere with n≥4 punctures, every finite-index subgroup of its full puncture-permuting mapping class group contains Γ(K) for a finite-index characteristic K in the surface group; this extends the checked pure-group theorem using a characteristic mod-three quotient.

### Write-up

# Congruence kernels for every finite-index subgroup of a punctured-sphere mapping class group

**Problem:** TOP-2750

**Claim type:** Literature report

**Exact scope:** For every sphere with n≥4 punctures, every finite-index subgroup of its full puncture-permuting mapping class group contains Γ(K) for a finite-index characteristic K in the surface group; this extends the checked pure-group theorem using a characteristic mod-three quotient.

## The exact source theorem and the full-group deduction

Let $S=S_{0,n}$ with $n\ge4$ punctures and no fixed boundary circles. McReynolds’s Theorem1.1 proves that every finite-index subgroup of $\operatorname{PMod}(S)$ contains the kernel of its outer action on some finite characteristic quotient of $\pi=\pi_1(S)$. The paper gives Thurston’s proof of the genus-zero congruence subgroup property.

The prompt permits puncture permutations. We now verify the finite extension step explicitly, rather than treating a theorem for the pure group as already identical to the full statement.

## A characteristic quotient detects puncture permutations

Set $K_0=[\pi,\pi]\pi^3$, the kernel of abelianization modulo3. It is characteristic, has finite index, and

$$\pi/K_0=H_1(S;\mathbb F_3)\cong\mathbb F_3^{n-1}.$$

Let $v_1,\ldots,v_n$ be the homology classes of positively oriented peripheral loops. They satisfy $\sum_i v_i=0$, with $v_1,\ldots,v_{n-1}$ a basis. For $n\ge4$ these $n$ vectors are pairwise distinct and nonzero. Orientation-preserving mapping classes permute them according to their puncture permutation.

If a mapping class acts trivially in $\operatorname{Out}(\pi/K_0)$, it acts trivially on this abelian quotient, since all its inner automorphisms are the identity. It must fix every $v_i$, hence every puncture. Therefore the full principal congruence kernel $\Gamma(K_0)$ lies in $\operatorname{PMod}(S)$.

## Apply the pure theorem and intersect the quotients

Let $H\le\operatorname{Mod}(S)$ have finite index. Then $H_0=H\cap\operatorname{PMod}(S)$ has finite index in the pure group. The source theorem gives a finite-index characteristic subgroup $K\le\pi$ with

$$\Gamma(K)\cap\operatorname{PMod}(S)\subseteq H_0.$$

Put $L=K\cap K_0$. This is again finite-index characteristic. The natural maps from $\pi/L$ onto $\pi/K$ and onto $\pi/K_0$ show that an outer automorphism acting trivially on $\pi/L$ acts trivially on both quotients: an inner representative descends to an inner representative. Consequently

$$\Gamma(L)\subseteq\Gamma(K)\cap\Gamma(K_0)
\subseteq\Gamma(K)\cap\operatorname{PMod}(S)\subseteq H.$$

This is exactly the kernel containment demanded by the prompt, using the outer action and a characteristic finite quotient. The combined quotient need not be abelian; the mod-three factor is only used to remove puncture permutations.

## What is not being assumed

The congruence quotients of the prompt are arbitrary finite characteristic quotients of the surface group. Replacing them by homology modulo an integer would change the question and would not reproduce the pure theorem. Similarly, residual finiteness of the mapping class group would only separate individual elements, not guarantee that one congruence kernel is contained in each prescribed finite-index subgroup.

The construction applies to every punctured sphere in the stated range, with no bound on the index of $H$. It does not provide a uniform numerical bound on the size of the required quotient, and does not claim the general higher-genus congruence subgroup property. The source’s discussion of gaps in an older general announcement is not used as evidence for a full solution.

## Checked references

- D. B. McReynolds, The congruence subgroup problem for pure braid groups: Thurston’s proof, New York J.Math.18(2012),925–942, Theorem1.1 and principal-kernel definitions: https://nyjm.albany.edu/j/2012/18-47v.pdf


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

D. B. McReynolds, The congruence subgroup problem for pure braid groups: Thurston’s proof, New York J.Math.18(2012),925–942, Theorem1.1 and principal-kernel definitions: https://nyjm.albany.edu/j/2012/18-47v.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
