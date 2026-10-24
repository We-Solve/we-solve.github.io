# Attributed submission: Attempt: TOP-3412

Source: https://github.com/We-Solve/research/issues/177

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3412

### Claim

Literature report

### Exact scope

Every smoothly slice two-bridge knot is ribbon, by Lisca’s published classification. This settles the prompt restricted to the entire two-bridge knot class, with smooth sliceness and ribbonness kept distinct from their algebraic obstructions.

### Write-up

# Lisca’s slice–ribbon theorem for all two-bridge knots

Problem: TOP-3412

Claim type: Literature report

Exact scope: Every smoothly slice two-bridge knot is ribbon, by Lisca’s published classification. This settles the prompt restricted to the entire two-bridge knot class, with smooth sliceness and ribbonness kept distinct from their algebraic obstructions.

## The precise established subcase

Let K(p,q) be a two-bridge knot, with p>q>0 coprime and p odd. Lisca [1, Corollary 1.3] proves equivalence of four conditions: p/q belongs to the explicitly defined set R in his Definition 1.1; K(p,q) is ribbon; K(p,q) is smoothly slice; and its double branched cover L(p,q) smoothly bounds a rational homology ball. In particular,

\[
K\text{ two-bridge and smoothly slice}\ \Longrightarrow\ K\text{ ribbon}.
\]

This is the exact direction requested by TOP-3412, restricted to a named infinite class. The knot convention is Lisca's; mirroring a knot or reversing its orientation preserves both smooth sliceness and ribbonness, so alternative two-bridge parameter conventions do not change the conclusion.

The deep input is the published classification, not just the easy ribbon-implies-slice direction. Lisca combines lattice constraints from definite four-manifolds with explicit ribbon constructions. The paper uses both orientation choices of the lens-space plumbing in its constraints. A lattice embedding on only one side is not asserted to be a sufficient criterion here.

## How the theorem answers an instance

Suppose an instance is supplied with a verified two-bridge presentation and a smooth properly embedded slicing disk in the standard B^4. The presentation identifies a coprime pair p,q with p odd. The theorem applies directly to the knot type: its smooth-slice condition is true, hence its ribbon condition is true. Its conclusion is the existence of a ribbon disk presentation of that same knot.

There is no demand that the given slicing disk itself become ribbon by cancelling the maxima of its particular radial Morse presentation. The logical form is

\[
(\exists\text{ smooth slicing disk for }K)
\Longrightarrow(\exists\text{ ribbon presentation for }K),
\]

and the two witnesses may differ. This distinction prevents an obstruction to one handle cancellation from being misreported as an obstruction to every ribbon disk.

The rational homology ball condition concerns the branched-cover four-manifold; it does not replace smooth sliceness of K by the much weaker statement that some three-manifold associated with K has a favorable homology group. All four conditions are equivalent here because Lisca proves a special classification theorem, not because such an implication is automatic for arbitrary knots.

## Scope audit and relationship to earlier work

The earlier exploratory contribution develops ribbon movies, tree-band presentations, the Fox–Milnor factorization, and disk-complement tests. It does not establish the all-two-bridge equivalence above. The added value here is a checked published theorem with its full special-class quantifiers and an explicit explanation of which existential witness the conclusion supplies.

A positive determinant square or a factorization of the Alexander polynomial is not used as a substitute for membership in Lisca's classification. Nor is the mere existence of some unknotting sequence a ribbon construction. The unknot is ribbon and slice independently and causes no boundary exception when bridge number one is included in the phrase two-bridge.

This report does not classify higher-bridge knots, does not extend the result to locally flat topological slicing disks, and does not validate recent candidate counterexamples. Lisca's full lattice classification and the drawings of ribbon surfaces have not been reimplemented or independently formalized here. This is a literature report, with no claim of a new theorem or a universal resolution.

## Checked references

1. P. Lisca, Lens spaces, rational balls and the ribbon conjecture, Geometry & Topology 11 (2007), 429–472, Definition 1.1, Theorem 1.2 and Corollary 1.3. https://msp.org/gt/2007/11-1/gt-v11-n1-p07-p.pdf ; arXiv:math/0701610v2, https://arxiv.org/pdf/math/0701610


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

P. Lisca, Lens spaces, rational balls and the ribbon conjecture, Geometry & Topology 11 (2007), 429–472, Definition 1.1, Theorem 1.2 and Corollary 1.3. https://msp.org/gt/2007/11-1/gt-v11-n1-p07-p.pdf ; arXiv:math/0701610v2, https://arxiv.org/pdf/math/0701610
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
