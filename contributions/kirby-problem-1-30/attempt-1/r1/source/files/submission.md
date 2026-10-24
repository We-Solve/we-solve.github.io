# Attributed submission: Attempt: TOP-2689

Source: https://github.com/We-Solve/research/issues/278

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-2689

### Claim

Literature report

### Exact scope

The order-two torsion assertion in the literal prompt holds for every nontrivial alternating knot, by Shumakovitch’s Corollary5; no assertion for all nonalternating knots is made.

### Write-up

# Every nontrivial alternating knot has integral Khovanov 2-torsion

**Problem:** TOP-2689

**Claim type:** Literature report

**Exact scope:** The order-two torsion assertion in the literal prompt holds for every nontrivial alternating knot, by Shumakovitch’s Corollary5; no assertion for all nonalternating knots is made.

## The credited positive class

Shumakovitch proves that an alternating link has torsion of order two in its unreduced integral Khovanov homology unless it is assembled from the unknot and Hopf links by connected sums and disjoint unions. This is Corollary 5 of the checked primary paper. For a knot, the exceptions reduce to the unknot. It follows that every nontrivial alternating knot satisfies the exact assertion in the prompt.

This conclusion is about homology over $\mathbb Z$. A nonzero class over $\mathbb F_2$ would not, by itself, imply torsion: it could be the reduction of a free integral generator. The imported theorem specifically asserts torsion, and therefore supplies an integral class rather than merely a dimension calculation in characteristic two.

## Match the exception list to knots

A disjoint union of two nonempty links has at least two components. A Hopf link has two components. A connected sum of links along chosen components changes the component count by $c(L\#J)=c(L)+c(J)-1$. Starting with any Hopf factor and applying connected sums with further Hopf factors or unknots can never decrease the count below two. Disjoint unions cannot decrease it either. Thus an exceptional object that has exactly one component can contain only unknot factors; their connected sum is the unknot.

The exclusion of the unknot in the question is necessary. Its unreduced integral homology is the free rank-two Frobenius algebra in homological degree zero, with quantum shifts, so it has no torsion. For nontrivial alternating knots the exception reduction above is exhaustive, including composite alternating knots. There is no prime-knot restriction in the final stated scope.

## What order-two means in this statement

A finitely generated abelian bigraded group decomposes, grading by grading, as a free part and finite cyclic prime-power factors. If a factor is $\mathbb Z/2^r$ for any $r\ge1$, the element represented by $2^{r-1}$ has order exactly two. Thus even the older distinction between different powers of two does not obstruct the existence assertion required here. One must distinguish existence of an element of order two from the stronger assertion that every 2-primary summand has exponent two.

Shumakovitch’s proof uses thinness and the interaction of the integral and mod-two groups, together with the behavior of alternating Jones polynomials. This is a literature report of that argument’s proved conclusion, not a chain-level proof claimed for every knot. The paper itself distinguishes existence of torsion from the finer reconstruction of integral groups. The result we use needs only Corollary 5 and its precise exception list.

## Boundary of the contribution

The usual grading shifts and the choice of mirror convention do not change whether a torsion class exists. Reduced Khovanov homology is a different invariant and is not substituted for the unreduced theory in the prompt. Thinness over a field alone is not adopted as a replacement hypothesis without the source’s additional integral conditions. The unrestricted assertion for every nontrivial knot is not proved by this report; the affirmative result is the entire alternating class.

## Checked references

- Alexander N. Shumakovitch, Torsion of the Khovanov homology, arXiv:math/0405474v2 (19 June2018), Corollary5 and §3.3; published as Torsion of Khovanov homology, Fund.Math.225(2014),343–364: https://arxiv.org/pdf/math/0405474


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

Alexander N. Shumakovitch, Torsion of the Khovanov homology, arXiv:math/0405474v2 (19 June2018), Corollary5 and §3.3; published as Torsion of Khovanov homology, Fund.Math.225(2014),343–364: https://arxiv.org/pdf/math/0405474
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
