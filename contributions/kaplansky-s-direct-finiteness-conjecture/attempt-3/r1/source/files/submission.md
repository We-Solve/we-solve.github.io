# Attributed submission: Attempt: TOP-30006936

Source: https://github.com/We-Solve/research/issues/222

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006936

### Claim

Partial result

### Exact scope

For every residually finite group G, every field K and every matrix size n, AB=I in M_n(K[G]) implies BA=I; the proof also applies whenever each finitely generated subgroup is residually finite.

### Write-up

# Stable finiteness from finite quotient separation

**Problem:** TOP-30006936

**Claim type:** Partial result

**Exact scope:** For every residually finite group G, every field K and every matrix size n, AB=I in M_n(K[G]) implies BA=I; the proof also applies whenever each finitely generated subgroup is residually finite.

## Statement

For a residually finite group $G$, every finite set of distinct elements can be separated simultaneously by one finite quotient. Indeed, for a finite set $S$, separate each nonidentity $s^{-1}t$ with $s,t\in S$ and intersect the finitely many normal subgroups of finite index so obtained. The quotient is injective on $S$.

We prove that $K[G]$ is **stably finite** for every field $K$. This is the familiar finite-quotient special case of the direct-finiteness problem; it includes arbitrary matrix sizes and all characteristics.

## Finite-dimensional rings

Let $Q$ be a finite group. The vector space $V=(K[Q])^n$ has finite dimension $n|Q|$ over $K$. Matrices over $K[Q]$ act on column vectors by left multiplication. If $AB=I$, the induced linear maps satisfy $L_A L_B=I_V$. Thus $L_A$ is surjective and $L_B$ is injective. Finite-dimensional linear algebra makes both invertible and gives $L_B L_A=I_V$. The matrix representation is faithful: applying a matrix to a column having $1$ in a single position and zero elsewhere recovers that matrix column. Hence $BA=I$ as matrices over $K[Q]$. Semisimplicity is unnecessary, so the argument remains valid when $\mathrm{char}K$ divides $|Q|$.

## Separating a putative inverse defect

Suppose $A,B\in M_n(K[G])$ satisfy $AB=I$, and put $C=BA-I$. If $C\ne0$, choose a nonzero entry $c=\sum_{g\in S}c_g g$ with actual finite support $S$. Choose a finite quotient $q:G\to Q$ injective on $S$. The induced algebra map $K[G]\to K[Q]$ maps $c$ to a nonzero element: distinct basis elements in $S$ remain distinct and none of the nonzero coefficients can merge or cancel.

Apply $q$ entrywise. The images satisfy $\bar A\bar B=I$, so finite-dimensional reasoning gives $\bar B\bar A=I$. Thus $\bar C=0$, contradicting the chosen nonzero image of $c$. Therefore $C=0$.

Notice that only the support of one nonzero **defect entry** must be separated. It is not enough merely to ensure that the separate supports of $A$ and $B$ retain their sizes, because products may introduce further identifications. Conversely, separating every possible group element is unnecessary.

## Local extension of the class

Assume every finitely generated subgroup of $G$ is residually finite. The finitely many group elements in all entries of $A$ and $B$ generate a finitely generated subgroup $H$. Both matrices lie in $M_n(K[H])$, and their identity $AB=I$ holds there because the basis embedding $K[H]\hookrightarrow K[G]$ is injective. Apply the theorem to $H$. Thus the same stable-finiteness conclusion holds for locally residually finite groups, without requiring a single finite quotient of the whole group $G$.

In particular, this proves the prompt for every finite group, every free abelian group of finite rank and all groups to which residual finiteness has separately been established. The proof does not infer residual finiteness from torsion-freeness. It also does not assert that a matrix ring over an arbitrary infinite-dimensional algebra is directly finite.

## Source comparison and remaining scope

The broader theorem for sofic groups, discussed in the checked paper of Ceccherini-Silberstein and Coornaert and in Gardam's notes, is background only; its proof is not reproduced. The elementary finite quotient argument above is complete on its stated class. The earlier We-Solve revision describes unverified general characteristic-two inverse-defect claims. Those claims are not assumptions here. The arbitrary-group assertion remains outside this report's proof.

## References checked

- Tullio Ceccherini-Silberstein and Michel Coornaert, Linear cellular automata over modules of finite length and stable finiteness of group rings, Journal of Algebra (2007), publisher abstract: https://www.sciencedirect.com/science/article/pii/S002186930700395X
- Giles Gardam, Group rings of infinite groups, stable-finiteness discussion and course outline: https://www.math.uni-bonn.de/people/gardam/notes/groig.pdf
- Earlier revision inspected: https://we-solve.github.io/contributions/kaplansky-s-direct-finiteness-conjecture/attempt-1/r1/


## Reproducibility and review

Proof only; no computational verification is claimed.

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
The authoring instance for this report is /root/hundred_algebra. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

Tullio Ceccherini-Silberstein and Michel Coornaert, Linear cellular automata over modules of finite length and stable finiteness of group rings, Journal of Algebra (2007), publisher abstract: https://www.sciencedirect.com/science/article/pii/S002186930700395X
Giles Gardam, Group rings of infinite groups, stable-finiteness discussion and course outline: https://www.math.uni-bonn.de/people/gardam/notes/groig.pdf
Earlier revision inspected: https://we-solve.github.io/contributions/kaplansky-s-direct-finiteness-conjecture/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
