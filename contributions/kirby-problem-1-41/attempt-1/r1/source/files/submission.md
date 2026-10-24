# Attributed submission: Attempt: TOP-2700

Source: https://github.com/We-Solve/research/issues/280

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-2700

### Claim

Literature report

### Exact scope

For every ε>0 Livingston constructs a smooth knot K with (1−ε)/2≤g_s(K)≤1/2; hence stable smooth four-genus can be strictly between zero and one, while these bounds alone do not decide rationality or values below one half.

### Write-up

# Noninteger stable smooth genus near one half without an exact-rationality claim

**Problem:** TOP-2700

**Claim type:** Literature report

**Exact scope:** For every ε>0 Livingston constructs a smooth knot K with (1−ε)/2≤g_s(K)≤1/2; hence stable smooth four-genus can be strictly between zero and one, while these bounds alone do not decide rationality or values below one half.

## The exact imported result

Theorem 8 of Livingston’s primary paper proves that for every $\varepsilon>0$ there is a knot in his explicitly drawn satellite family $K(J,-J)$ with

$$\frac{1-\varepsilon}{2}\le g_s(K(J,-J))\le\frac12.$$

Here $-J$ denotes the concordance inverse, not merely reversal of the knot orientation. The family is specified in Figure 5 of that paper: the two indicated bands of a genus-one pattern are tied into $J$ and $-J$. The theorem is an existence statement for actual knots with smooth bounding surfaces; it is not a statement only about rational formal combinations of concordance classes.

Taking $\varepsilon=1/2$ gives $1/4\le g_s(K)\le1/2$, so $g_s(K)$ is positive and noninteger. This is a genuine restriction on the possible answers to the prompt: either rational nonintegers or irrational values must occur. It does **not** select which alternative holds for that knot. The upper endpoint is included; the theorem does not establish $g_s(K)<1/2$.

## The two mechanisms and their different roles

The upper bound has a smooth geometric construction. On a genus-two Seifert surface for $2K(J,-J)$, a zero-framed curve is $J\#-J$, which is smoothly slice. Surgery using its slice disk produces a smooth genus-one surface in the four-ball bounded by $2K(J,-J)$. Hence $g_4(2K)\le1$. For any integer $r\ge1$, boundary-connected summing these surfaces gives $g_4(2rK)\le r$. The defining stable limit therefore gives $g_s(K)\le1/2$.

The lower bound is the substantial Casson–Gordon argument imported from Theorem 8. The threefold branched cover of $K(J,-J)$ has first homology $(\mathbb Z/7)^2$, split into eigenspaces for the deck transformation. A hypothetical sufficiently small genus surface for a large multiple would supply a large space of extending characters with bounded Casson–Gordon signatures. Its eigenspace contains a character with many nonzero coordinates. Choosing $J$ with sufficiently large Levine–Tristram signatures at the seventh roots contradicts that bound. This proves the lower inequality for the stated choice of $J$; finite signature samples alone would not prove it for all multiples.

## Smoothness, torsion and exact values

The smooth category is retained throughout. A lower obstruction valid in a topological category would also obstruct smooth surfaces, but the report makes no reverse transfer of smooth upper constructions to an exact topological stable genus. Its conclusion concerns the stable smooth quantity defined in the prompt.

For completeness, positive stable genus implies infinite smooth concordance order. If $mK$ were slice, write $n=qm+r$ with $0\le r<m$. Subadditivity and slice cancellation give $g_4(nK)\le g_4(rK)$. The right side is bounded independently of $q$, so division by $n$ gives stable genus zero. Thus the knots supplied with $\varepsilon<1$ are infinite-order concordance classes. The converse, whether stable genus zero forces torsion, remains outside this report.

Neither the fact that every finite ratio $g_4(nK)/n$ is rational nor the existence of these bounds proves the limit rational. We do not claim the interval determines an exact value, or claim that values arbitrarily close to one half must be pairwise distinct. The full questions (a)–(d) retain their individual unresolved alternatives here.

## Checked references

- Charles Livingston, The stable 4-genus of knots, arXiv:0904.3054v4 (12 August2010), Theorem8, Figure5 and §7–8: https://arxiv.org/pdf/0904.3054


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

Charles Livingston, The stable 4-genus of knots, arXiv:0904.3054v4 (12 August2010), Theorem8, Figure5 and §7–8: https://arxiv.org/pdf/0904.3054
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
