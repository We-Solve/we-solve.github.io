# Attributed submission: Attempt: TOP-2698

Source: https://github.com/We-Solve/research/issues/279

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-2698

### Claim

Literature report

### Exact scope

The distinct positively oriented nontrivial torus knots T_{p,q}, with coprime 1<p<q, are linearly independent in smooth and locally flat topological concordance; this reports Litherland’s signature-jump theorem and its category-preserving deduction.

### Write-up

# Linear independence of the positive torus-knot subfamily in both concordance categories

**Problem:** TOP-2698

**Claim type:** Literature report

**Exact scope:** The distinct positively oriented nontrivial torus knots T_{p,q}, with coprime 1<p<q, are linearly independent in smooth and locally flat topological concordance; this reports Litherland’s signature-jump theorem and its category-preserving deduction.

## A large algebraic subfamily

For coprime $1<p<q$, the holomorphic curve $z^p+w^q=0$ has an isolated irreducible singularity, and its link is a positive torus knot, up to exchanging the two parameters. Fix its complex orientation. Litherland’s Theorem 1 states that the ordinary torus knots are linearly independent in knot cobordism. More specifically, his Lemma 1 establishes linear independence of their signature-jump functions, and the theorem follows by concordance invariance.

Consequently, if distinct pairs $(p_i,q_i)$ as above and integers $a_i$ satisfy

$$\sum_i a_i[T_{p_i,q_i}]=0,$$

then every $a_i=0$. This holds both in the smooth group and in the locally flat topological concordance group. The orientation and the convention $p<q$ avoid counting the same torus knot twice or treating a concordance inverse as another positive algebraic generator.

## The signature mechanism

For a Seifert matrix $V$ and $\omega\in S^1\setminus\{1\}$, take the Hermitian form

$$(1-\omega)V+(1-\bar\omega)V^T.$$

Away from zeros of the Alexander polynomial its signature is locally constant. At a discontinuity, half the difference of the two one-sided limits is its jump. Direct sums of Seifert matrices show that jumps add under connected sum; mirroring with the concordance inverse negates them. The two-sided or generic-value interpretation avoids pretending that the raw signature at a singular parameter is automatically a concordance invariant.

The signature-jump obstruction depends only on the Seifert form’s algebraic concordance class. A locally flat slice disk produces a metabolic Seifert pairing, and hence zero signature at every nonsingular unit parameter and zero jump everywhere. The same holds for a smooth slice disk, which is in particular locally flat. Thus either type of concordance relation gives the zero function

$$\sum_i a_i\,\delta_{p_i,q_i}=0.$$

Litherland’s independent-function lemma then forces every coefficient to vanish. The deeper input is precisely the independence lemma for torus-knot jumps; additivity alone would not suffice, since many distinct knots can have the same ordinary signature.

## Why this does not settle the algebraic-knot question

An algebraic knot may be a nontrivial iterated torus knot, with additional cabling stages. Its signature behavior can share contributions from different constituent torus knots. The source explicitly warns that the jump functions of iterated torus knots are not all linearly independent. It proves weaker independence statements for certain algebraic families; those must not be promoted to unrestricted linear independence of all algebraic knots.

This report therefore isolates the ordinary torus-knot subfamily, indexed by all coprime positive pairs, and retains both concordance categories by the algebraic nature of the obstruction. It does not derive independence of arbitrary iterated algebraic knots, nor infer smooth nonconcordance merely from a theorem about smooth geometry when a topological argument is needed.

The primary text was inspected in a transcription of Litherland’s original paper. Its scanned mathematical typesetting is imperfect, but the independent jump-function lemma and Theorem 1 are legible and distinguish ordinary torus knots from iterated ones. No claim about a modern proof-assistant check or a new proof of that lemma is made.

## Checked references

- R. A. Litherland, Signatures of iterated torus knots, in Topology of Low-Dimensional Manifolds, Lecture Notes in Mathematics722(1979),71–84, Lemma1/Theorem1; original-paper transcription inspected: https://paperzz.com/doc/6894078/signatures-of-iterated-torus-knots
- Charles Livingston, The stable 4-genus of knots, arXiv:0904.3054v4, §3.3, two-sided Levine–Tristram signature convention: https://arxiv.org/pdf/0904.3054


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

R. A. Litherland, Signatures of iterated torus knots, in Topology of Low-Dimensional Manifolds, Lecture Notes in Mathematics722(1979),71–84, Lemma1/Theorem1; original-paper transcription inspected: https://paperzz.com/doc/6894078/signatures-of-iterated-torus-knots
Charles Livingston, The stable 4-genus of knots, arXiv:0904.3054v4, §3.3, two-sided Levine–Tristram signature convention: https://arxiv.org/pdf/0904.3054
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
