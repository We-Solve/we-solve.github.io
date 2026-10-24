# Attributed submission: Attempt: TOP-2664

Source: https://github.com/We-Solve/research/issues/162

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-2664

### Claim

Literature report

### Exact scope

Part (a) of Kirby Problem 1.5 holds for all positive torus knots T(p,q), p,q>=2 coprime, with g=u=(p-1)(q-1)/2, by the established Milnor-conjecture theorem. Part (b) is also verified for the alternating two-strand torus-knot subfamily and its mirrors.

### Write-up

# Genus equals unknotting number for every positive torus knot

Problem: TOP-2664

Claim type: Literature report

Exact scope: Part (a) of Kirby Problem 1.5 holds for all positive torus knots T(p,q), p,q>=2 coprime, with g=u=(p-1)(q-1)/2, by the established Milnor-conjecture theorem. Part (b) is also verified for the alternating two-strand torus-knot subfamily and its mirrors.

## A complete infinite subcase of the two questions

For coprime integers p,q>=2, the positive torus knot T(p,q) is the closure of the positive p-strand braid (sigma_1 ... sigma_{p-1})^q. It is a positive fibered knot. Kronheimer and Mrowka's Corollary 1.3 in [1], with the subsequent torus-knot discussion, establishes

\[
g_4(T(p,q))=u(T(p,q))=\frac{(p-1)(q-1)}2.
\]

The lower bound is the smooth slice-genus theorem; the standard torus-knot upper unknotting bound is recorded there as well. These are credited established results. No argument based solely on positivity is substituted for their nontrivial lower bound.

## Checking that this gives the exact genus in the prompt

Apply Seifert's algorithm to the displayed positive braid diagram. Its oriented smoothing gives p Seifert circles, joined by c=q(p-1) crossing bands. The surface is connected, because each adjacent pair of braid strands is joined, and its boundary is one component because the braid permutation is a p-cycle when gcd(p,q)=1. Its Euler characteristic is p-c. For a connected surface with one boundary component, chi=1-2g, giving genus

\[
g_{\mathrm{surface}}=\frac{c-p+1}2
=\frac{(p-1)(q-1)}2.
\]

Thus the Seifert genus g(K) is at most this number. Conversely, pushing the interior of any Seifert surface slightly into B^4 gives a smooth properly embedded surface of the same genus with boundary K, so g_4(K)<=g(K). The established g_4 value therefore forces equality throughout:

\[
g_4(K)\leq g(K)\leq g_{\mathrm{surface}}=g_4(K).
\]

Combining this with the u value proves part (a) on the full positive torus class.

The fibered hypothesis is also genuinely satisfied: T(p,q) is the link of the isolated plane-curve singularity z^p+w^q=0, and its Milnor fibration supplies a Seifert-surface fibration of the complement. The source discusses the associated Milnor fiber. This is a standard geometric theorem, not an inference that every knot with the computed genus is fibered.

## The alternating fibered subfamily

For p=2 and q=2m+1 with m>=1, the standard closure diagram is alternating as well as positive and fibered. The formula gives g=u=m, so the inequality g>=u in part (b) holds with equality. Mirroring preserves Seifert genus, unknotting number and fiberedness, and takes an alternating diagram to an alternating diagram. Therefore it also verifies part (b) for the mirrors of this subfamily. The unknot case, if allowed by extending a parameter to one, has both invariants zero.

This statement does not require a classification of all alternating torus knots, and no such classification is claimed. Nor does it convert every positive fibered knot into a torus knot.

## Scope and verification

The official prompt lists no earlier contributions. The report supplies a checked theorem for an entire infinite class and explicitly proves the comparison with the three-dimensional Seifert genus asked in the problem. The smooth four-ball genus alone would not be the same invariant without that comparison.

No general unknotting algorithm, gauge-theory implementation, or computational genus certificate has been run. The unrestricted positive fibered and alternating fibered classes in parts (a) and (b) remain outside this report; an arbitrary positive diagram does not supply the claimed optimal crossing-change sequence.

## Checked references

1. P. B. Kronheimer and T. S. Mrowka, Gauge theory for embedded surfaces, I, Topology 32 (1993), 773–826, Corollary 1.3 and the torus-knot discussion immediately following it. Author PDF: https://people.math.harvard.edu/~kronheim/thom1.pdf


## Reproducibility and review

Proof/source audit only; no computational verification of the external theorem was performed.

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
The authoring instance for this report is /root/hundred_topology. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

P. B. Kronheimer and T. S. Mrowka, Gauge theory for embedded surfaces, I, Topology 32 (1993), 773–826, Corollary 1.3 and the torus-knot discussion immediately following it. Author PDF: https://people.math.harvard.edu/~kronheim/thom1.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
