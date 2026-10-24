# Attributed submission: Attempt: TOP-2784

Source: https://github.com/We-Solve/research/issues/301

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-2784

### Claim

Literature report

### Exact scope

Every finite system of equations and inequations with constants in Mod(T²)=SL₂(Z) is decidable, by its virtually free structure and the Dahmani–Guirardel theorem; no higher-genus or braid-index uniformity is claimed.

### Write-up

# A terminating equations-and-inequations algorithm for the closed torus mapping class group

**Problem:** TOP-2784

**Claim type:** Literature report

**Exact scope:** Every finite system of equations and inequations with constants in Mod(T²)=SL₂(Z) is decidable, by its virtually free structure and the Dahmani–Guirardel theorem; no higher-genus or braid-index uniformity is claimed.

## A nonabelian mapping class regime

Take the orientation-preserving mapping class group of the closed, unpunctured torus. Its action on first homology identifies it with $SL_2(\mathbb Z)$. For this fixed group, there is an algorithm deciding every finite simultaneous system in the question, including constants and inequations. Negative instances terminate as well as positive ones.

The imported result is Dahmani–Guirardel's Theorem1: an algorithm takes a presentation of a hyperbolic group, possibly with torsion, together with a finite system of equations and inequations with constants and decides existence of a solution. Their stronger optional rational-constraint conclusion is unnecessary here. Their definition of the equations problem explicitly allows word-encoded constants. The torsion clause is important for $SL_2(\mathbb Z)$; a theorem only about torsion-free hyperbolic groups would not suffice.

## Verify the group hypothesis

For specificity use matrices

$$S=\begin{pmatrix}0&-1\\1&0\end{pmatrix},\qquad
R=\begin{pmatrix}0&-1\\1&1\end{pmatrix}.$$

The familiar torus presentation is

$$SL_2(\mathbb Z)=\langle S,R\mid S^4=1,\ S^2=R^3\rangle
=C_4*_{C_2}C_6.$$

Here both $S^2$ and $R^3$ are $-I$. The associated Bass–Serre tree has finite vertex stabilizers $C_4,C_6$ and finite edge stabilizer $C_2$; the action is cocompact. The orbit map from a Cayley graph is a quasi-isometry to that tree, since stabilizers are finite and the finite graph of groups supplies a finite generating set. Trees are hyperbolic and this property is invariant under quasi-isometry. Thus this presentation is a valid hyperbolic-group input. Equivalently the group is virtually free.

For an input written in any other fixed finite generating set of the torus mapping class group, fix once and for all words in $S,R$ representing those generators. Substitution translates every constant and coefficient into this presentation. Replacing an equality of two words by their quotient equal to one likewise preserves the input format. Apply the imported algorithm to the entire translated system, retaining one shared tuple of variables. This supplies a terminating decision procedure for the original system.

## What is, and is not, decided

The conclusion addresses arbitrary numbers of variables and constraints, arbitrary word constants, and systems that have no solutions. It is therefore substantially more than enumerating tuples or solving a word problem. An inequation is not discarded or checked after choosing a possibly incompatible solution of the equations: the source solves all constraints simultaneously.

The surface is fixed. The report supplies no polynomial complexity bound, no claim about the full first-order theory, and no uniform algorithm for arbitrary surface topology or arbitrary braid index. In particular, braid groups with infinite cyclic center and higher-complexity mapping class groups cannot automatically be substituted into this hyperbolic-group argument. The named closed-torus regime is the exact contribution.

## Checked references

- François Dahmani and Vincent Guirardel, Foliations for solving equations in groups: free, virtually free, and hyperbolic groups, arXiv:0901.1830v2 (12 February 2010), §0.1 and Theorem1; published Journal of Topology 3 (2010), 343–404: https://arxiv.org/pdf/0901.1830


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

François Dahmani and Vincent Guirardel, Foliations for solving equations in groups: free, virtually free, and hyperbolic groups, arXiv:0901.1830v2 (12 February 2010), §0.1 and Theorem1; published Journal of Topology 3 (2010), 343–404: https://arxiv.org/pdf/0901.1830
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
