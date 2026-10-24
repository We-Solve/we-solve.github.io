# Attributed submission: Attempt: TOP-30001499

Source: https://github.com/We-Solve/research/issues/195

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30001499

### Claim

Literature report

### Exact scope

Yu’s 1998 Theorem 1.1 proves the stated higher-signature homotopy invariance when the fundamental group is finitely generated, has a finite CW model for its classifying space, and has finite asymptotic dimension. A direct colored-box construction verifies the hypotheses for every free abelian group.

### Write-up

# Finite asymptotic dimension with the finite classifying-space hypothesis retained

Problem: TOP-30001499

Claim type: Literature report

Exact scope: Yu’s 1998 Theorem 1.1 proves the stated higher-signature homotopy invariance when the fundamental group is finitely generated, has a finite CW model for its classifying space, and has finite asymptotic dimension. A direct colored-box construction verifies the hypotheses for every free abelian group.

## A precise published subcase

Yu's Theorem 1.1 in [1] establishes the Novikov conjecture for a finitely generated group Gamma if B Gamma has the homotopy type of a finite CW complex and Gamma, with a word metric, has finite asymptotic dimension. The finite-classifying-space assumption is part of the theorem being reported. The paper's coarse assembly and descent arguments are not re-proved here.

Accordingly, for every closed connected oriented smooth M with such fundamental group, every classifying map r:M -> B Gamma, every rational cohomology class u on B Gamma, and every orientation-preserving homotopy equivalence f:N -> M,

\[
\langle L(N)\smile(rf)^*u,[N]\rangle
=\langle L(M)\smile r^*u,[M]\rangle.
\]

Only top-dimensional components are paired. This is the exact higher-signature assertion in the prompt, with an explicit group hypothesis. It does not assert that the individual Pontryagin classes are homotopy invariant.

## An elementary geometric certificate for Z^d

Here is a direct check that the hypotheses include every Z^d. Use its l1 word metric. Fix R>0 and an integer L>2R. Partition Z^d into boxes

\[
Q_a=\prod_{j=1}^d\{La_j,La_j+1,\ldots,L(a_j+1)-1\},\quad a\in\mathbb Z^d.
\]

Color Q_a by the coordinate parities of a, giving 2^d colors. Every box has diameter at most d(L-1). Distinct boxes of the same color have indices differing by at least two in some coordinate; their distance is therefore at least L+1>2R. A radius-R ball cannot meet two such boxes: points in those two intersections would be at distance at most 2R by the triangle inequality. Hence every radius-R ball meets at most 2^d boxes.

This proves the finite bound asdim(Z^d) <= 2^d-1 using the uniformly bounded cover/multiplicity definition. It is intentionally not a claim that this coarse bound is sharp. For d=0 the space is a point and the same finiteness conclusion is immediate. The d-torus is a finite CW model for B Z^d, since its universal cover is R^d. All hypotheses of Yu's stated theorem are now checked for this family, in every rank.

For example, degree-zero u gives ordinary signature in dimensions divisible by four; positive-degree u gives the additional higher signatures. In dimensions where no total-degree pairing exists, the displayed component is simply zero. These boundary cases do not change the theorem's quantifiers.

## Added scope and remaining gap

The earlier attempt studies quantitative embeddings into a universal Banach space, with a reweighting obstruction. This report supplies a separate published sufficient theorem and an explicit bounded-multiplicity cover verifying it for the full abelian family. It does not rely on the recent Banach-space preprint discussed there.

No step proves finite asymptotic dimension or a finite B Gamma for an arbitrary finitely presented group. The colored boxes use a global lattice coordinate system; a general Cayley graph need not admit it. Thus neither the geometric construction nor the cited theorem removes the restrictions needed for the universal problem. No computer verification of the index-theoretic theorem is claimed.

## Checked references

1. G. Yu, The Novikov conjecture for groups with finite asymptotic dimension, Annals of Mathematics 147 (1998), 325–355, Theorem 1.1. https://annals.math.princeton.edu/articles/12915 ; original first-page theorem text retrieved at https://citeseerx.ist.psu.edu/document?doi=245f56681c21104fc3083b4b6a2027a26f136a63&repid=rep1&type=pdf


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

G. Yu, The Novikov conjecture for groups with finite asymptotic dimension, Annals of Mathematics 147 (1998), 325–355, Theorem 1.1. https://annals.math.princeton.edu/articles/12915 ; original first-page theorem text retrieved at https://citeseerx.ist.psu.edu/document?doi=245f56681c21104fc3083b4b6a2027a26f136a63&repid=rep1&type=pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
