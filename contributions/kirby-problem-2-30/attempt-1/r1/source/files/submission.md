# Attributed submission: Attempt: TOP-2778

Source: https://github.com/We-Solve/research/issues/298

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-2778

### Claim

Literature report

### Exact scope

Every finite graph with an induced cycle of length≥5 has a closed hyperbolic surface subgroup in its RAAG; every chordal graph has none. Both tests terminate on adjacency data, with an explicit undecided remainder.

### Write-up

# Induced long cycles give surface subgroups, while chordal graphs exclude them

**Problem:** TOP-2778

**Claim type:** Literature report

**Exact scope:** Every finite graph with an induced cycle of length≥5 has a closed hyperbolic surface subgroup in its RAAG; every chordal graph has none. Both tests terminate on adjacency data, with an explicit undecided remainder.

## Two opposite graph regimes

Call a finite graph chordal when it has no induced cycle of length at least four. Crisp–Sageev–Sapir prove the following two useful statements:

1. $A(C_n)$ contains a closed hyperbolic surface subgroup for every cycle graph $C_n$ with $n\ge5$; their §7.3.1 gives faithful dissection diagrams.
2. If $\Gamma$ is chordal, then $A(\Gamma)$ has no one-ended hyperbolic subgroup (Proposition3.2), hence no closed hyperbolic surface subgroup.

The second conclusion includes the one-vertex, complete-graph and tree cases. The two regimes do not exhaust finite graphs. The occurrence of an induced square, for example, does not meet either test in general. No necessity of an induced long cycle is claimed.

## Pass from a cycle to an arbitrary supergraph

Let $W\subseteq V(\Gamma)$ and let $\Lambda=\Gamma[W]$ be the **induced** subgraph. Sending each generator in $W$ to the corresponding generator defines a homomorphism $i:A(\Lambda)\to A(\Gamma)$, because all commuting relations of $\Lambda$ hold in $\Gamma$. Send the generators outside $W$ to the identity and retain those in $W$. This defines a homomorphism $r:A(\Gamma)\to A(\Lambda)$: each commuting relation either becomes trivial or is a relation already present in the induced graph. The composite $r i$ is the identity. Consequently $i$ is injective.

If $\Lambda=C_n$ for $n\ge5$, compose this injection with the source's faithful surface-group embedding into $A(C_n)$. The resulting map into $A(\Gamma)$ remains injective. An arbitrary, noninduced cycle is insufficient for this argument, since extra edges add commuting relations and can destroy the cycle-group injection.

The cycle theorem itself is a geometric injectivity theorem, not just a realization of one surface relator. The source doubles explicit planar dissection diagrams and verifies its faithful-diagram criterion, Corollary7.7, separately for even and odd $n$. We credit that construction and its kernel control to the authors; no mere list of generator words is substituted for it. The closed surfaces produced have negative Euler characteristic and may be taken orientable as in the doubled construction.

## The negative theorem and a finite partial decision procedure

For chordal graphs the source decomposes the RAAG as a tree of free abelian clique groups glued along clique subgroups that are direct-factor retracts. Proposition3.2 uses the induced tree action to exclude one-ended hyperbolic subgroups. A closed orientable surface group of genus at least two is one-ended and hyperbolic, so its presence would contradict that proposition. Both adjective hypotheses matter; free subgroups themselves are not excluded.

There is therefore a simple terminating procedure producing certified positive and negative answers on these two named classes. Enumerate all subsets of vertices and check whether the induced adjacency graph is a cycle of length at least five. If one is found, answer yes and record its vertices in cyclic order. If no such cycle occurs, test for an induced cycle of length at least four; absence means the graph is chordal, so answer no. On the remaining graphs explicitly return “not decided by these criteria.” All steps are finite because the input graph is finite; no efficiency bound is asserted.

This three-outcome procedure is not the requested yes/no algorithm on all graphs. In particular, a failure to find a long cycle is not evidence of nonexistence. The result supplies rigorous infinite positive and negative regimes and states exactly where a complete characterization is still missing.

## Checked references

- John Crisp, Michah Sageev and Mark Sapir, Surface subgroups of right-angled Artin groups, arXiv:0707.1144v2 (16 November 2007), Proposition3.2, Corollary7.7 and §7.3.1: https://arxiv.org/pdf/0707.1144


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

John Crisp, Michah Sageev and Mark Sapir, Surface subgroups of right-angled Artin groups, arXiv:0707.1144v2 (16 November 2007), Proposition3.2, Corollary7.7 and §7.3.1: https://arxiv.org/pdf/0707.1144
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
