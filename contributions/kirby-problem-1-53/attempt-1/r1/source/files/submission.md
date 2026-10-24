# Attributed submission: Attempt: TOP-2712

Source: https://github.com/We-Solve/research/issues/282

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-2712

### Claim

Literature report

### Exact scope

For every ribbon concordance K_0≼K_1 in the prompt’s direction, all bigraded F_2 knot Floer ranks and the Seifert genus of K_0 are bounded by those of K_1, by Zemke’s Theorems1.1–1.3.

### Write-up

# Bigraded knot Floer ranks and Seifert genus descend under ribbon concordance

**Problem:** TOP-2712

**Claim type:** Literature report

**Exact scope:** For every ribbon concordance K_0≼K_1 in the prompt’s direction, all bigraded F_2 knot Floer ranks and the Seifert genus of K_0 are bounded by those of K_1, by Zemke’s Theorems1.1–1.3.

## Monotone invariants in the stated direction

Let $K_0\preceq K_1$ have exactly the meaning in the question: the annulus runs from height zero to height one with births and saddles, and no deaths. Zemke’s theorem constructs a grading-preserving injection

$$F_C:\widehat{HFK}(K_0;\mathbb F_2)\longrightarrow\widehat{HFK}(K_1;\mathbb F_2).$$

It follows that each integer

$$r_{i,j}(K)=\dim_{\mathbb F_2}\widehat{HFK}_i(K,j)$$

is monotone, with Maslov grading $i$ and Alexander grading $j$. Theorem 1.3 gives $g_3(K_0)\le g_3(K_1)$ for the ordinary Seifert genus. These are invariants of all knots in the ribbon-concordance relation, not just a finite knot table or a diagram-dependent class.

## Why this is a split obstruction

Turning the concordance upside down gives a concordance $C'$ from $K_1$ to $K_0$. It need not be ribbon. The deep statement is that its induced map is a left inverse:

$$F_{C'}F_C=\mathrm{id}.$$

Thus a nonzero class on the lower knot cannot be killed by a ribbon concordance. Grading preservation makes the same argument in every bidegree separately. An arbitrary smooth concordance does not automatically have this left-inverse property; the absence of index-two critical points is essential to the imported proof.

At the full-complex level, Zemke’s Theorem 1.7 supplies a filtered left inverse up to chain homotopy over $\mathbb F_2[U,U^{-1}]$. This is stronger than comparing total ranks, but the rank and genus statements here require only the hat version. Decorations introduce the usual conjugation by grading-preserving identifications; the existence of an injection and its rank consequences do not depend on choosing a preferred basis.

## Derive genus and hereditary rank conditions

Knot Floer homology detects Seifert genus by the largest Alexander grading in which the hat group is nonzero. Let that grading for $K_0$ be $g_3(K_0)$. A nonzero class there injects into the same Alexander grading for $K_1$. The maximal nonzero grading for $K_1$ is therefore at least $g_3(K_0)$. This proves the genus inequality from the stated detection theorem.

More generally, fix any finitely supported upper-rank profile $R_{i,j}$. The property $r_{i,j}(K)\le R_{i,j}$ for all bidegrees is hereditary under ribbon concordance. The total rank is monotone as well, since all groups are finite-dimensional and the graded inequalities can be summed. These give effective obstructions whenever the two knot Floer groups have been computed exactly: a single reversed rank inequality rules out $K_0\preceq K_1$.

## Limits of what follows

An injection alone does not identify the two knots. Equal rank profiles can occur for distinct knots, so no minimality claim is inferred just from equality of these invariants. Nor do these ranks give crossing number, bridge number or braid index formulas. The three particular test questions in the prompt therefore remain separate from the monotone invariants established here.

The source explicitly discusses its direction convention and notes that Gordon used the opposite verbal convention. The present report matches the prompt, where the unknot is below a ribbon knot. It retains smooth concordance and the coefficient field $\mathbb F_2$ of the theorem, rather than asserting an unverified integral version. No assertion of alternating heredity or universal positive-knot minimality is added.

## Checked references

- Ian Zemke, Knot Floer homology obstructs ribbon concordance, arXiv:1902.04050v1(11 February2019), Theorems1.1–1.3/1.7; published Ann.Math.190(3)(2019),931–947: https://arxiv.org/pdf/1902.04050


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

Ian Zemke, Knot Floer homology obstructs ribbon concordance, arXiv:1902.04050v1(11 February2019), Theorems1.1–1.3/1.7; published Ann.Math.190(3)(2019),931–947: https://arxiv.org/pdf/1902.04050
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
