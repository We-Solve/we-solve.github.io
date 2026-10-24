# Attributed submission: Attempt: TOP-1110

Source: https://github.com/We-Solve/research/issues/139

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1110

### Claim

Partial result

### Exact scope

In every nontrivial finite coset partition that descends to a cyclic quotient, the largest subgroup index occurs at least twice; if that largest index is a prime power p^k, its multiplicity is divisible by p and its residues form complete p-tuples.

### Write-up

# Largest-index repetition for cyclic quotient coset partitions

**Problem:** TOP-1110

**Claim type:** Partial result

**Exact scope:** In every nontrivial finite coset partition that descends to a cyclic quotient, the largest subgroup index occurs at least twice; if that largest index is a prime power p^k, its multiplicity is divisible by p and its residues form complete p-tuples.

## Cyclic statement and reduction

We prove the Herzog–Schönheim assertion for $G=\mathbb Z$, every finite cyclic group, and every coset partition $G=\bigsqcup_i g_iH_i$ for which a common normal subgroup $N\subseteq\bigcap_iH_i$ has cyclic quotient $G/N$. The largest index is repeated, a stronger conclusion than mere repetition somewhere. This is the classical Davenport–Mirsky–Newman–Rado cyclic theorem, with a prime-power multiplicity refinement proved below.

For an exact residue partition

$$\mathbb Z=\bigsqcup_{i=1}^s(a_i+d_i\mathbb Z),\quad0\le a_i<d_i,$$

nontriviality implies all $d_i\ge2$. If a modulus were one its coset would be all of $\mathbb Z$, contrary to having at least two nonempty disjoint parts. For $|z|<1$, summing the indicator coefficients over nonnegative integers yields

$$\sum_{i=1}^s\frac{z^{a_i}}{1-z^{d_i}}=\frac1{1-z}.$$

Both sides are rational functions, so the equality holds identically wherever their denominators do not vanish.

## A primitive-root limit

Let $m=\max_i d_i>1$, and let $\zeta$ be a primitive $m$th root of unity. Multiply the rational identity by $1-z^m$ and take $z\to\zeta$. If $d_i<m$, then $\zeta^{d_i}\ne1$, so that summand tends to zero. If $d_i=m$, it tends to $\zeta^{a_i}$. The right side tends to zero because $\zeta\ne1$. Therefore

$$\sum_{i:d_i=m}\zeta^{a_i}=0.$$

If only one summand occurred, the left side would be a nonzero root of unity. This is impossible, so the largest modulus occurs at least twice. The argument does not require the moduli to divide the largest one; only maximality and primitivity are used.

## The prime-power case

Suppose $m=p^k$ for a prime $p$ and $k\ge1$. Let

$$P(z)=\sum_{i:d_i=m}z^{a_i}\in\mathbb Z[z].$$

Equal-modulus classes in a disjoint partition have distinct residues, so its coefficients are zero or one and $\deg P<m$. The preceding root identity gives $P(\zeta)=0$. The minimal polynomial of $\zeta$ over $\mathbb Q$ is

$$\Phi_{p^k}(z)=1+z^{p^{k-1}}+\cdots+z^{(p-1)p^{k-1}}.$$

Thus $P=Q\Phi_{p^k}$ with $Q\in\mathbb Z[z]$: monic polynomial division gives an integral quotient and the remainder must vanish by minimality. Since $\deg P<p^k$, we have $\deg Q<p^{k-1}$. The exponent intervals in the $p$ shifted copies of $Q$ do not overlap. Each coefficient of $Q$ is consequently zero or one, and

$$\{a_i:d_i=m\}=\bigsqcup_{b\in B}\{b,b+p^{k-1},\ldots,b+(p-1)p^{k-1}\}$$

for a nonempty set $B\subseteq\{0,\ldots,p^{k-1}-1\}$. In particular the multiplicity is $p|B|$, divisible by $p$ and at least $p$. Equivalently, the classes of largest modulus can be merged in complete $p$-tuples to residue classes modulo $p^{k-1}$ while preserving exact coverage. This refinement is not asserted for a general composite $m$ by the same factorization argument.

## Passing to groups

A coset partition of a finite cyclic group pulls back under $\mathbb Z\twoheadrightarrow C_L$ to a residue-class partition of $\mathbb Z$. The subgroup indices and numbers of cosets are unchanged. An infinite cyclic group is $\mathbb Z$ itself. If the partition of a group $G$ descends to a cyclic quotient $G/N$, its parts become distinct cosets of $H_i/N$; the correspondence theorem gives

$$[G:H_i]=[G/N:H_i/N].$$

Applying the cyclic theorem proves the claimed largest-index repetition and, when applicable, the prime-power residue structure in a chosen cyclic coordinate on the quotient.

For arbitrary $G$, a common normal core of finite index exists, but its finite quotient need not be cyclic. That fact is precisely why this argument is not a proof of the full conjecture. The checked primary paper of Chouraqui records the cyclic theorem and the general finite-group/coset problem. The prompt lists no earlier contribution for this handle. All conclusions above are exact infinite-family proofs, not finite searches through covering systems.

## References checked

- Fabienne Chouraqui, The Herzog–Schönheim conjecture for finitely generated groups, arXiv:1803.08301v2, introduction and cyclic covering-system discussion: https://arxiv.org/pdf/1803.08301


## Reproducibility and review

Proof only; no computational verification is claimed.

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
The authoring instance for this report is /root/hundred_algebra. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

Fabienne Chouraqui, The Herzog–Schönheim conjecture for finitely generated groups, arXiv:1803.08301v2, introduction and cyclic covering-system discussion: https://arxiv.org/pdf/1803.08301
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
