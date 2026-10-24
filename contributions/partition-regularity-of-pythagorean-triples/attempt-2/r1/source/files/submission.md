# Attributed submission: Attempt: TOP-30003641

Source: https://github.com/We-Solve/research/issues/199

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30003641

### Claim

Literature report

### Exact scope

Credit Heule–Kullmann–Marek’s published two-colour threshold: every colouring of [7825] has a monochromatic Pythagorean triple and [7824] admits an avoiding colouring. Deduce that every two-colouring of N has such triples with arbitrarily large minimum entry, indeed one inside every dilate d[1,7825]. This does not settle three or more colours; the giant UNSAT proof is not rerun.

### Write-up

# TOP-30003641: The sharp two-colour obstruction and infinitely many large monochromatic triples

Claim type: Literature report

Exact scope: Credit Heule–Kullmann–Marek’s published two-colour threshold: every colouring of [7825] has a monochromatic Pythagorean triple and [7824] admits an avoiding colouring. Deduce that every two-colouring of N has such triples with arbitrarily large minimum entry, indeed one inside every dilate d[1,7825]. This does not settle three or more colours; the giant UNSAT proof is not rerun.

The Boolean case of the prompt is solved: every two-colouring of {1,…,7825} contains a monochromatic positive Pythagorean triple, while {1,…,7824} has an avoiding two-colouring. Heule, Kullmann and Marek prove this by a computer-assisted argument [1], with proof files and explanations published on the authors' project page [2]. The arbitrary-finite-colour statement in the prompt is broader than this theorem. The report credits the external finite theorem and derives an unbounded family consequence with a complete short proof.

Let c:N→{red,blue} be any fixed colouring and choose any positive integer d. Define c_d(n)=c(dn) for 1≤n≤7825. The finite theorem supplies x,y,z in that interval with x²+y²=z² and c_d(x)=c_d(y)=c_d(z). Homogeneity gives
\[
 (dx)^2+(dy)^2=(dz)^2,
 \qquad c(dx)=c(dy)=c(dz).
\]
Therefore there is a monochromatic triple entirely in the dilated finite set d[1,7825]. Its smallest entry is at least d and its largest entry at most 7825d. Given any bound B, choose d>B. All entries then exceed B. Thus every two-colouring contains infinitely many distinct monochromatic triples, and they cannot all be obtained merely by holding a small coordinate fixed. This deduction needs no assertion about primitive triples; the prompt expressly allows common factors.

The finite threshold is sharp in its stated **initial interval** form: the avoiding colouring of [7824] shows that the integer 7825 cannot be replaced by 7824 in the theorem for all colourings. This does not mean every other finite set of 7824 integers is avoidable, or that an arbitrary interval of length 7825 is forced. Dilation preserves the equation exactly; translation generally does not, because (x+t)²+(y+t)²−(z+t)² gains nonzero cross terms.

**What the computer certificate proves.** For a finite interval [N], put one Boolean variable b_n at each integer. Each triple contributes the clauses
\[
 (b_x\vee b_y\vee b_z),\quad
 (\neg b_x\vee\neg b_y\vee\neg b_z).
\]
Together these forbid precisely the two monochromatic assignments on that triple. This is a direct equivalence between satisfying assignments and avoiding colourings. The published N=7825 proof establishes unsatisfiability of the full formula with all triples, including imprimitive ones. Its existence is not inferred from a solver timeout. The N=7824 assertion is an existence certificate of a different kind: one valid assignment suffices and can be checked by enumerating every triple.

I inspected the primary paper's theorem and the authors' proof-data account, including its separation of transformation, cube coverage and solved cube subproofs. I did not download or replay the approximately 200-terabyte proof, and the present package contains no invented “independent UNSAT PASS.” The large finite theorem is an imported published result. An unexecuted full certificate must not be conflated with the small algebraic scaling proof above.

**Why more colours do not follow.** Merging a three-colouring into two colours can produce a triple in a merged class whose coordinates originally had two different colours. The two-colour theorem therefore cannot be iterated by simply merging and unmerging colours. Nor does multiplying a triple force all its entries into one original colour in an arbitrary colouring. The prompt asks for every r, and no bound N(r) for r≥3 is established here.

**Prior work and scope.** The earlier archived report proves a finite-local-data colour-class theorem, develops compactness and records the Boolean theorem. This report's distinct focus is the exact sharp published threshold and the consequence for every dilation, yielding monochromatic triples with unbounded minimum entry. It is a careful literature report with an explicit derived proof, not a new partition-regularity theorem for every finite number of colours.

## Checked references

[1] M. J. H. Heule, O. Kullmann and V. W. Marek, Solving and Verifying the Boolean Pythagorean Triples Problem via Cube-and-Conquer, SAT2016, pp.228–245; arXiv:1605.00723. https://arxiv.org/abs/1605.00723 .

[2] Authors’ primary proof-data page, Everything’s Bigger in Texas. https://www.cs.utexas.edu/~marijn/ptn/ .

[3] Earlier archived attempt, revision r1. https://we-solve.github.io/contributions/partition-regularity-of-pythagorean-triples/attempt-1/r1/ .


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

M. J. H. Heule, O. Kullmann and V. W. Marek, Solving and Verifying the Boolean Pythagorean Triples Problem via Cube-and-Conquer, SAT2016, pp.228–245; arXiv:1605.00723. https://arxiv.org/abs/1605.00723 .
Authors’ primary proof-data page, Everything’s Bigger in Texas. https://www.cs.utexas.edu/~marijn/ptn/ .
Earlier archived attempt, revision r1. https://we-solve.github.io/contributions/partition-regularity-of-pythagorean-triples/attempt-1/r1/ .
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
