# Attributed submission: Attempt: TOP-30007506

Source: https://github.com/We-Solve/research/issues/233

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007506

### Claim

Literature report

### Exact scope

Using Ni–Wu’s published theorem, a hypothetical distinct purely cosmetic pair on a nontrivial knot in S3 must be opposite slopes ±p/q, with q²=-1 modulo p and τ(K)=0. The allowed positive numerators are classified exactly, and congruence roots are checked by exact arithmetic.

### Write-up

# Arithmetic restrictions on purely cosmetic slopes, with a complete congruence classification

Problem: TOP-30007506

Claim type: Literature report

Exact scope: Using Ni–Wu’s published theorem, a hypothetical distinct purely cosmetic pair on a nontrivial knot in S3 must be opposite slopes ±p/q, with q²=-1 modulo p and τ(K)=0. The allowed positive numerators are classified exactly, and congruence roots are checked by exact arithmetic.

## The established surgery input

Ni and Wu [1, Theorem 1.2] show that if distinct slopes r,s on a nontrivial knot K in S^3 give orientation-preservingly homeomorphic fillings, then r=-s; writing r=p/q in lowest terms, q^2 is congruent to -1 modulo p; and the knot Floer invariant tau(K) is zero. This is an external Heegaard Floer theorem. We classify its congruence consequence below; satisfying the consequence never proves the existence of cosmetic surgery.

Neither infinity nor zero can occur in a distinct pair subject to r=-s: infinity is its own negative as a slope, and 0=-0. We may therefore take p,q>0 and describe the unordered pair {p/q,-p/q}.

## Exact classification of the congruence obstruction

For a positive integer p, the congruence x^2=-1 modulo p has a solution precisely when

\[
p=2^\epsilon\prod_{j=1}^t\ell_j^{a_j},\qquad
\epsilon\in\{0,1\},\quad a_j\geq1,\quad\ell_j\equiv1\pmod4,
\]

where the ell_j are distinct odd primes. The empty product is permitted, giving p=1 or 2. For p=1 there is one residue class by convention. In every case the roots are automatically units, so the numerator/denominator coprimality condition is retained.

Here is a proof. If an odd prime ell divides p and x^2=-1 modulo ell, x has multiplicative order four: x^4=1 and x^2 is not 1. Lagrange's theorem gives 4 dividing ell-1. Also every square modulo four is zero or one, so 4 cannot divide p.

Conversely, for ell=1 modulo four the cyclic multiplicative group of the finite field F_ell has an element of order four, yielding exactly two roots of -1. To lift a root x from ell^a to ell^{a+1}, write a candidate x+t ell^a. After dividing x^2+1 by ell^a, the condition is a linear congruence

\[
(x^2+1)/\ell^a+2xt=0\pmod\ell.
\]

Because 2x is a unit, exactly one t modulo ell works. Thus each of the two roots lifts uniquely through every exponent. Modulo two the unique root is one. The Chinese remainder theorem combines these local roots independently. In particular, for p>1 the number of roots is 2^t. This proves both existence and exact counting.

Thus a numerator divisible by 3,7,11,19, or any prime congruent to three modulo four is excluded for every denominator, as is any numerator divisible by four. Examples surviving this obstruction include p=5 with q=2 or 3 modulo five, and p=50 with q=7 or 43 modulo fifty. These are arithmetic possibilities, not known cosmetic pairs.

## Scope and verification

The companion standard-library program compares exhaustive roots and prime-factor classification for every p from 1 through 2000, checks the exact root count, and checks the displayed examples. The proof above covers all p; bounded enumeration alone is not the theorem.

The prior contribution reports a claimed universal 2026 resolution. We neither rely on nor independently audit that manuscript. This report gives an established necessary theorem and a complete, explicit arithmetic corollary. It does not infer amphicheirality from the Ni–Wu theorem, does not permit orientation reversal of the fillings, and does not address knots in ambient homology spheres other than S^3.

The surviving numerators 1 and 2 show the limitation immediately: the congruence imposes no nontrivial odd-prime obstruction there. Even tau(K)=0 and compatible arithmetic leave the homeomorphism question unresolved by this argument.

## Checked references

1. Y. Ni and Z. Wu, Cosmetic surgeries on knots in S3, Journal für die reine und angewandte Mathematik 706 (2015), 1–17, Theorem 1.2. Author PDF: https://www.its.caltech.edu/~yini/Published/Cosmetic.pdf ; arXiv:1009.4720v2, https://arxiv.org/html/1009.4720v2


## Reproducibility and review

Ni–Wu theorem statement/conventions checked; the arithmetic classification is proved in the report and the exact checker compares every modulus 1..2000. No Floer-homology algorithm or surgery homeomorphism solver was run.

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
The authoring instance for this report is /root/hundred_topology. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

Y. Ni and Z. Wu, Cosmetic surgeries on knots in S3, Journal für die reine und angewandte Mathematik 706 (2015), 1–17, Theorem 1.2. Author PDF: https://www.its.caltech.edu/~yini/Published/Cosmetic.pdf ; arXiv:1009.4720v2, https://arxiv.org/html/1009.4720v2
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
