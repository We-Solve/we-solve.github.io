# Attributed submission: Attempt: TOP-14

Source: https://github.com/We-Solve/research/issues/136

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-14

### Claim

Partial result

### Exact scope

Every finite chordal graph satisfies χ(G)=ω(G), and therefore has a complete minor of order χ(G). A self-contained separator proof supplies the elimination ordering.

### Write-up

# Hadwiger’s implication for every chordal graph

Problem: TOP-14

Claim type: Partial result.

Exact scope: Every finite chordal graph satisfies χ(G)=ω(G), and therefore has a complete minor of order χ(G). A self-contained separator proof supplies the elimination ordering.

## Structural proof

A graph is chordal when it has no induced cycle of length at least four. A vertex is simplicial when its neighbors form a clique. We prove the classical Dirac lemma: every noncomplete chordal graph has two nonadjacent simplicial vertices; a complete graph has every vertex simplicial.

First, an inclusion-minimal separator S of two nonadjacent vertices a,b in a connected chordal graph is a clique. Let A,B be the components of G−S containing a,b. Minimality implies each s∈S has a neighbor in A and in B: otherwise restoring s would still leave a and b separated. If x,y∈S were nonadjacent, take a shortest x–y path with internal vertices in A, and another with internal vertices in B. Each is induced; the two interiors are anticomplete. Their union is an induced cycle of length at least four, a contradiction.

Now induct on the number of vertices. In a disconnected graph choose a simplicial vertex from each of two components, using induction within each component. In the connected noncomplete case choose S as above. For each of A and B, the smaller induced chordal graph G[A∪S] or G[B∪S] is complete, or has two nonadjacent simplicial vertices by induction. In the latter case at most one of that pair is in the clique S. In either case choose a simplicial vertex in A or B. It has no neighbors outside its component and S, so is simplicial in G. The two chosen vertices are nonadjacent. This proves the lemma, including disconnected graphs.

Induced subgraphs of chordal graphs are chordal. Repeatedly deleting a simplicial vertex yields an ordering v₁,…,vₙ in which the later neighbors of each vertex form a clique. Such an ordering is called a perfect elimination ordering.

## Coloring and the literal minor implication

Color the vertices in reverse order by the least available positive integer. When vᵢ is colored its already colored neighbors form a clique of size at most ω(G)−1. They use at most that many colors, so a color among 1,…,ω(G) is available. Thus χ(G)≤ω(G). The reverse inequality holds in every graph, giving equality.

A maximum clique is itself a K_{χ(G)} subgraph, hence also a minor. In particular, if K_{t+1} is not a minor, ω(G)≤t and the constructed coloring uses at most t colors. This proves exactly the official implication on the chordal class for every t≥1. The empty graph has χ=ω=0 and satisfies the assertion as well.

The proof uses a clique **subgraph** as a sufficient certificate of a clique minor. It does not replace the forbidden-minor hypothesis by a forbidden-subgraph hypothesis for arbitrary graphs.

## Verification

The exact verifier enumerates all labeled simple graphs of orders at most six. It recognizes chordality directly by searching vertex subsets for induced cycles, independently finds a simplicial elimination ordering, computes maximum clique size by subset enumeration, and checks the reverse greedy coloring. The finite run checks the implementation; the induction proves the unbounded class.

## Attribution and limits

These are credited classical results, elementary deductions, or explicit reports of the stated literature theorem. No historical novelty or resolution outside the exact scope is claimed. The proof and checks below do not independently audit any other general-solution announcement in the archive.

## Checked references

- Official TOP-14 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-14.txt
- Lafferty and Song, Every graph with no K_8^{-4} minor is 7-colorable, arXiv:2208.07338, formulation reference: https://arxiv.org/abs/2208.07338


## Reproducibility and review

Exact standard-library verifier completed with status PASS; see verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


[Executable fenced material omitted from this text-only security-screened package; original retained privately.]


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
The authoring instance for this report is /root/hundred_graphs. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

Official TOP-14 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-14.txt
Lafferty and Song, Every graph with no K_8^{-4} minor is 7-colorable, arXiv:2208.07338, formulation reference: https://arxiv.org/abs/2208.07338
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
