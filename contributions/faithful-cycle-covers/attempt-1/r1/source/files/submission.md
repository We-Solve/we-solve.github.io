# Attributed submission: Attempt: TOP-3164

Source: https://github.com/We-Solve/research/issues/311

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3164

### Claim

Partial result

### Exact scope

For every finite loopless cactus multigraph, admissibility is equivalent to zero demand on bridges and constant demand around each cycle; every admissible nonnegative integer demand has a faithful cycle cover, without requiring even individual demands.

### Write-up

# A complete faithful-demand criterion on cactus multigraphs

Problem: TOP-3164

Claim type: Partial result.

Exact scope: For every finite loopless cactus multigraph, admissibility is equivalent to zero demand on bridges and constant demand around each cycle; every admissible nonnegative integer demand has a faithful cycle cover, without requiring even individual demands.

## The graph class

A cactus multigraph means that every block is either a bridge or a cycle, with two parallel edges allowed as a cycle of length two. Equivalently, each edge belongs to at most one cycle. Components can be handled independently. A faithful cover uses simple cycles exactly in the prompt’s sense, with whole-cycle repetition allowed.

## Necessary demands

A bridge is the sole edge in some cut. Its inequality 2p(e)≤p(e) forces p(e)=0.

Take two distinct edges e,f of one cactus cycle C. Deleting them splits its component into two pieces, with all other attached blocks staying on one of those pieces. There can be no alternate connection between the two resulting cycle arcs: it would create a second cycle through an edge of C, contrary to the cactus property. Thus some cut has exactly edges e,f. The two admissibility inequalities give p(e)≤p(f) and p(f)≤p(e). Therefore demand is constant on every cycle. The same argument applies to a two-edge parallel cycle.

This establishes necessity from the inequalities alone, including when the demands are not even. The statement about the cut follows also by contracting every block outside C to its attachment vertex, since the block-incidence graph of a connected cactus is a tree. This block tree can be obtained by successively removing an end block.

## Sufficiency and the explicit cover

Conversely suppose every bridge has zero demand and each cycle C has a constant integer demand a_C≥0. Take a_C copies of each cycle C. Distinct cycle blocks share no edge, so this multiset uses every edge exactly p(e) times and no bridge. It is a faithful cover.

For completeness it also implies every cut condition. A cycle crosses a cut an even number of times. Thus total cut demand is a sum of even multiples of the integers a_C and is even. If a positive-demand edge e crosses a cut, its cycle has at least one other crossing edge of equal demand. The sum of all other crossing demands is at least p(e), proving 2p(e)≤p(δ(X)). Edges of zero demand impose no additional inequality. This proves equivalence.

The construction is finite because the graph is finite and all demands are finite integers. Individual demands need not be even; it therefore implies the conjecture’s even-demand conclusion on this whole class. Graphs in which cycles overlap in edges are outside the argument: a two-edge cycle cut need not exist there.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3164.txt


## Reproducibility and review

Proof/source review only; no code attached at authoring time. Exact hypotheses and boundary cases are addressed in report.md; external theorem proofs are credited rather than claimed independently verified.

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
The authoring instance for this report is /root/hundred_graphs. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3164.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
