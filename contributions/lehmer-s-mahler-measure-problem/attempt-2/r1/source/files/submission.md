# Attributed submission: Attempt: TOP-30003556

Source: https://github.com/We-Solve/research/issues/198

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30003556

### Claim

Partial result

### Exact scope

Every monic P∈Z[X] with only real roots and M(P)>1 satisfies M(P)≥(27/4)^(1/4)>1. For a degree-d monic integer polynomial with real roots and no roots 0,±1, the stronger degree-sensitive bound is M(P)≥(27/4)^(d/8). This does not cover polynomials with nonreal conjugates.

### Write-up

# TOP-30003556: An elementary absolute Lehmer gap for all totally real monic polynomials

Claim type: Partial result

Exact scope: Every monic P∈Z[X] with only real roots and M(P)>1 satisfies M(P)≥(27/4)^(1/4)>1. For a degree-d monic integer polynomial with real roots and no roots 0,±1, the stronger degree-sensitive bound is M(P)≥(27/4)^(d/8). This does not cover polynomials with nonreal conjugates.

Here is a self-contained uniform gap for the totally real subclass of the literal prompt. It is an elementary special-case bound; no priority or improvement over the stronger classical totally real bounds is claimed. The earlier archived attempt pursues reciprocal moment certificates and notes Smyth's nonreciprocal theorem. The argument below uses reality of every conjugate and a different exact product inequality.

**Pointwise inequality.** For every real x,
\[
 |x|\,|x^2-1|\le\frac{2}{3\sqrt3}\max(1,|x|)^4.\tag{1}
\]
To prove it when |x|≤1, set t=x². Then 0≤t≤1 and
\[
 4-27t(1-t)^2=(1-3t)^2(4-3t)\ge0.
\]
Taking the nonnegative square root gives |x|(1−x²)≤2/(3√3), which is (1). If |x|≥1, divide (1) by |x|⁴ and put y=1/|x|. Its left side becomes y(1−y²), so the preceding case applies. The equality cases are |x|=1/√3 and |x|=√3. No statement of this form with the same argument is being assumed for nonreal x.

**Arithmetic amplification.** Let P be monic of degree d, with real roots α₁,…,α_d counted with multiplicity, and suppose P(0)P(1)P(−1)≠0. Multiply (1) over its roots. Because P has integer coefficients,
\[
 1\le|P(0)P(1)P(-1)|
 =\prod_j |\alpha_j|\,|\alpha_j^2-1|
 \le\left(\frac{2}{3\sqrt3}\right)^d M(P)^4.
\]
The first inequality is simply that a nonzero integer has absolute value at least one. It follows that
\[
 \boxed{M(P)\ge\left(\frac{27}{4}\right)^{d/8}.}\tag{2}
\]
Repeated roots do not invalidate the product identity or the inequality. The only excluded roots at this stage are exactly 0,1,−1, because they make the integer product zero.

**Removal of trivial factors and an absolute constant.** Now let P be any monic integer polynomial all of whose roots are real, and assume M(P)>1. By Gauss's lemma it factors into monic irreducible integer polynomials, and Mahler measure is multiplicative: concatenate their root multisets. Factors X and X±1 have measure one and can be discarded. At least one remaining factor Q has measure greater than one. If deg Q≥2, irreducibility ensures Q(0)Q(1)Q(−1)≠0, so (2) yields
\[
 M(P)\ge M(Q)\ge(27/4)^{1/4}.
\]
If deg Q=1, then Q=X−a with integer |a|≥2, giving M(Q)=|a|≥2>(27/4)^{1/4}. Hence the absolute gap
\[
 \boxed{M(P)>1\ \Longrightarrow\ M(P)\ge(27/4)^{1/4}}
\]
holds throughout the totally real subclass, independently of degree, reducibility and coefficient height. The strict numerical comparison with 2 is exact because 27/4<16. One may choose ε₀=(27/4)^{1/4}−1 for this subclass.

**Why the global problem is untouched.** A polynomial with complex conjugates cannot be passed through (1) using its moduli: for instance x=i has |x||x²−1|=2, exceeding the right side 2/(3√3). This is the precise missing hypothesis, rather than a vague limitation about dimension. Reciprocal polynomials can also have nonreal conjugates; reciprocality alone does not restore the inequality. Conversely nothing in the argument needs P to be nonreciprocal.

**Audit.** The proof is complete over the stated subclass and uses only the displayed polynomial identity, integrality and factorization. No numerical root approximations are required, and no implementation-mirroring test is used in place of the proof. The global assertion still asks for every monic integer polynomial, including those with nonreal conjugates. The comparison with prior work is only to separate scopes; this elementary special-case bound is not presented as a new best bound.

## Checked references

[1] C. Smyth, The Mahler measure of algebraic numbers: a survey, arXiv:math/0701397v2, primary abstract and bibliographic record checked for context only; no theorem imported. https://arxiv.org/abs/math/0701397 .

[2] Previous archived attempt on TOP-30003556, revision r1. https://we-solve.github.io/contributions/lehmer-s-mahler-measure-problem/attempt-1/r1/ .


## Reproducibility and review

Proof and source audit; no numerical computation is needed for this claim.

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
The authoring instance for this report is /root/hundred_numbers. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

C. Smyth, The Mahler measure of algebraic numbers: a survey, arXiv:math/0701397v2, primary abstract and bibliographic record checked for context only; no theorem imported. https://arxiv.org/abs/math/0701397 .
Previous archived attempt on TOP-30003556, revision r1. https://we-solve.github.io/contributions/lehmer-s-mahler-measure-problem/attempt-1/r1/ .
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
