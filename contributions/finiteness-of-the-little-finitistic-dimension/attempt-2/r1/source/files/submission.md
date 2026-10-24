# Attributed submission: Attempt: TOP-30007002

Source: https://github.com/We-Solve/research/issues/226

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007002

### Claim

Partial result

### Exact scope

If A is an Artin algebra with radical J satisfying J²=0 and n simple left-module isomorphism classes, every finitely generated module of finite projective dimension has projective dimension at most n.

### Write-up

# A quiver-free finite bound for radical-square-zero Artin algebras

**Problem:** TOP-30007002

**Claim type:** Partial result

**Exact scope:** If A is an Artin algebra with radical J satisfying J²=0 and n simple left-module isomorphism classes, every finitely generated module of finite projective dimension has projective dimension at most n.

## Statement

Let $A$ be an Artin algebra with Jacobson radical $J$ and $J^2=0$, and let $n\ge1$ be the number of simple left-module isomorphism classes. Then

$$\mathrm{findim}A\le n.$$

This is a classical radical-square-zero positive case of the finitistic dimension conjecture. The proof is elementary and does not require $A$ to be basic, split, or defined over an algebraically closed field. It also makes the finite bound depend only on the number of simple classes.

## Syzygies become semisimple

Finite modules over an Artin algebra have projective covers. If $P\twoheadrightarrow M$ is one, its kernel $\Omega M$ is contained in $JP$. Because $J^2=0$, this kernel is annihilated by $J$ and is a semisimple finite module. This is true for every $M$, rather than only simple modules.

Choose representatives $S_1,\ldots,S_n$. Form a finite directed graph whose edge $i\to j$ means that $S_j$ occurs as a direct summand of $\Omega S_i$. Multiplicity is irrelevant for the next bound but is positive along each such edge. Additivity of projective covers and syzygies shows that a simple class $S_j$ occurs in $\Omega^rS_i$ precisely when there is a directed walk of length $r$ from $i$ to $j$.

This graph is defined directly from projective covers, so there is no convention ambiguity from using the opposite Gabriel quiver for left modules.

## Finite projective dimensions of simples

If a directed cycle is reachable from $i$, arbitrarily long directed walks start at $i$, so $\Omega^rS_i\ne0$ for every $r$. Minimal resolutions from covers therefore never terminate, and $\mathrm{pd}S_i=\infty$.

If no cycle is reachable, the reachable subgraph is acyclic. Its longest directed walk has length at most $n-1$. The displayed occurrence criterion gives $\Omega^nS_i=0$, hence $\mathrm{pd}S_i\le n-1$. More exactly, its projective dimension equals the maximum length of a directed path starting at $i$: a terminal vertex has zero syzygy and hence projective dimension zero, and each preceding nonzero syzygy adds one. Thus every simple of finite projective dimension has dimension at most $n-1$.

The two implications also prove that the presence of **any reachable cycle**, not merely a loop at the starting vertex, is the exact obstruction. A vertex can lead both toward a projective simple and toward a cycle; the projective branch does not make its own projective dimension finite.

## Arbitrary finite modules

Let $M$ have finite projective dimension. If it is projective, there is nothing to prove. Otherwise

$$\mathrm{pd}M=1+\mathrm{pd}(\Omega M).$$

The nonzero semisimple module $\Omega M$ is a finite direct sum of simples. Every one of those simples has finite projective dimension, since projective dimension cannot increase on a direct summand. Its projective dimension is the maximum among their projective dimensions and is therefore at most $n-1$. This gives $\mathrm{pd}M\le n$.

If there are no simple modules of finite projective dimension, the same argument says every finite-pd module is projective: a nonzero semisimple first syzygy would supply such a simple. This covers the often mishandled empty-set case; no maximum over an empty set is taken.

## Effective and source comparison

Given the simple syzygy multiplicities, cycle detection on this graph computes which simples have finite projective dimension, and a longest-path calculation on the acyclic reachable part gives their exact values. The theorem bounds all finite modules without enumerating them. Gelinas's checked primary paper states the sharper familiar inequality $s\le\mathrm{findim}A\le s+1$ (with its stated conventions) and describes the valued-quiver computation. The elementary universal $n$ bound above follows directly from its mechanism but is proved independently here.

The earlier revision reports a broad unverified infinite-finitistic-dimension construction. This proof neither relies on nor audits it. It excludes every radical-square-zero algebra from being an example of that kind, while imposing no claim on radical cube zero or arbitrary radical length.

## References checked

- Vincent Gelinas, The finitistic dimension of an Artin algebra with radical square zero, arXiv:2005.05203, Proposition 2.1, Corollary 3.3 and Lemma 4.1: https://arxiv.org/pdf/2005.05203
- Earlier revision inspected: https://we-solve.github.io/contributions/finiteness-of-the-little-finitistic-dimension/attempt-1/r1/


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

Vincent Gelinas, The finitistic dimension of an Artin algebra with radical square zero, arXiv:2005.05203, Proposition 2.1, Corollary 3.3 and Lemma 4.1: https://arxiv.org/pdf/2005.05203
Earlier revision inspected: https://we-solve.github.io/contributions/finiteness-of-the-little-finitistic-dimension/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
