# Attributed submission: Attempt: TOP-2666

Source: https://github.com/We-Solve/research/issues/275

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-2666

### Claim

Literature report

### Exact scope

Part (a) of the literal prompt holds for all two-bridge knots by Chen’s Theorem1.2; the report does not upgrade this to the stronger log-concavity, equality, or positive-link Conway assertions in parts(b)–(c).

### Write-up

# The trapezoidal Alexander assertion for every two-bridge knot

**Problem:** TOP-2666

**Claim type:** Literature report

**Exact scope:** Part (a) of the literal prompt holds for all two-bridge knots by Chen’s Theorem1.2; the report does not upgrade this to the stronger log-concavity, equality, or positive-link Conway assertions in parts(b)–(c).

## A proved alternating class

Two-bridge knots admit alternating diagrams and are parametrized by reduced rational tangles. Chen proves the Hirasawa–Murasugi refinement of Fox’s trapezoidal conjecture for every two-bridge knot. In particular the absolute values of consecutive Alexander coefficients increase strictly until a central constant interval, then decrease in the symmetric way. This proves part (a) for the entire two-bridge class, with no bound on determinant, crossing number or continued-fraction length.

The relevant input is Theorem 1.2 of arXiv:1712.04993v2. Its statement refers to Conjecture 2, which includes the trapezoidal condition and a signature constraint in the source’s own notation. We use its trapezoidal consequence. We do not reinterpret its plateau parameter as the number of equality signs in part (b) of this prompt; those are potentially different conventions.

## Match polynomial normalization and symmetry

For a knot, multiplication of $\Delta_K(t)$ by $\pm t^m$ shifts or simultaneously negates the coefficient sequence but does not change the list of absolute values after removing exterior zero coefficients. The source writes the alternating-sign coefficients using nonnegative magnitudes. The prompt’s $b_i=|a_i|$ is exactly that magnitude sequence.

Alexander reciprocity gives $b_i=b_{n-i}$. The theorem supplies an index $r\le n/2$ such that the sequence is strictly increasing before the central plateau, constant throughout that plateau, and determined on the other side by this symmetry. Hence any equality that occurs before the center continues to the central plateau, as demanded by part (a). This is stronger than a merely weakly unimodal sequence that might pause at a lower value and then increase again.

For instance the two-strand torus knots have all Alexander coefficient magnitudes one, an allowed plateau occupying the whole sequence. The theorem is not restricted to that simple subfamily: two-bridge knots with arbitrary rational-tangle parameters are included. The degenerate unknot polynomial one has a one-term sequence and causes no contradiction.

## Why the stronger clauses are not automatic

A positive increasing symmetric sequence can be trapezoidal without being log-concave. As a purely numerical illustration, $(1,2,5,2,1)$ has the required increase and decrease, but $2^2<1\cdot5$. Thus a proof of part (a), even with symmetry and positivity, cannot be advertised as the full inequality in part (b). Nor can an equality case for one adjacent coefficient pair be inferred from the existence of the central plateau alone.

The Conway coefficients in part (c) belong to another expansion and another link class. Conversion between Alexander and Conway polynomials does not preserve log-concavity in any immediate coefficientwise way. Consequently the reported two-bridge theorem is not used to claim the positive-link assertion. Those boundaries are substantive parts of the exact scope.

## Source and status

The checked v2 corrects an earlier genus-two argument and includes the full two-bridge theorem. Its proof uses an induction on extended two-bridge diagrams, combining Hartley’s coefficient analysis with a signature algorithm. We credit that deep induction and do not replace it by a search of small rational knots. The theorem is used with knot orientations, so additional preferred-orientation conventions for multi-component two-bridge links in the source are unnecessary. The report concerns the knot assertion only.

## Checked references

- Wenzhao Chen, On the Alexander polynomial and the signature invariant of two-bridge knots, arXiv:1712.04993v2 (10 January2018), Conjecture2/Theorem1.2 and Theorem3.5: https://arxiv.org/pdf/1712.04993


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

Wenzhao Chen, On the Alexander polynomial and the signature invariant of two-bridge knots, arXiv:1712.04993v2 (10 January2018), Conjecture2/Theorem1.2 and Theorem3.5: https://arxiv.org/pdf/1712.04993
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
