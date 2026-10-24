# Attributed submission: Attempt: TOP-3238

Source: https://github.com/We-Solve/research/issues/168

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3238

### Claim

Partial result

### Exact scope

For each t≥3, every P_t-free finite graph satisfies χ(G)≤F_t(ω(G)), where F_t(0)=0 and F_t(w)=(t−2)F_t(w−1)+1. This settles only path trees in the general induced-tree question.

### Write-up

# An explicit χ-binding function for every forbidden induced path

Problem: TOP-3238

Claim type: Partial result.

Exact scope: For each t≥3, every P_t-free finite graph satisfies χ(G)≤F_t(ω(G)), where F_t(0)=0 and F_t(w)=(t−2)F_t(w−1)+1. This settles only path trees in the general induced-tree question.

## A path-growing lemma

Fix t≥3. Suppose a finite graph G has the property χ(G[N(v)])≤B for every vertex, with B a nonnegative integer. We prove that either G contains an induced P_t or χ(G)≤(t−2)B+1.

Work in a connected component of maximum chromatic number. If χ(G)>(t−2)B+1, choose a vertex v₁. Some connected component C₁ of G−v₁ has χ(C₁)≥χ(G)−1>(t−2)B. Connectedness gives a neighbor of v₁ in C₁.

Maintain an induced path v₁,…,vᵢ and a nonempty connected induced subgraph Cᵢ, disjoint from the path, anticomplete to v₁,…,v_{i−1}, with vᵢ having a neighbor in Cᵢ, and

\[
\chi(C_i)>(t-1-i)B.
\]

This holds at i=1. For i≤t−2, remove N(vᵢ)∩V(Cᵢ). That set is B-colorable. Since χ of a graph is at most the sum of the chromatic numbers on two parts, the remaining graph has chromatic number greater than (t−2−i)B, so is nonempty. Choose a component D of the remaining graph with that chromatic number. Cᵢ is connected and meets N(vᵢ), so a boundary edge from D reaches some v_{i+1}∈Cᵢ∩N(vᵢ). Set C_{i+1}=D. The new vertex is anticomplete to earlier path vertices except vᵢ, and D is anticomplete also to vᵢ. Thus the invariant continues.

At i=t−2 the construction gives v_{t−1} with a neighbor v_t in C_{t−1}. Append that neighbor. The anticompleteness invariant excludes every chord, so the t vertices induce a P_t, contradiction. This proves the lemma. When B=0, the same argument uses the strict positive chromatic numbers in the invariant; no division by B occurs.

## Induction on the clique number

The empty graph has χ=ω=0. Let G be nonempty P_t-free with clique number at most w≥1. Each neighborhood is P_t-free and has clique number at most w−1: adjoining its center to a neighborhood clique increases its order by one. Induction gives the local bound B=F_t(w−1). The lemma then gives

\[
\chi(G)\le(t-2)F_t(w-1)+1=F_t(w).
\]

For t=3 this recurrence is F₃(w)=w. For t=4 it gives F₄(w)=2^w−1; for t>3 generally F_t(w)=((t−2)^w−1)/(t−3). These are uniform in the order of G. The P₂-free case is simply an edgeless graph and can be covered separately by bound one on nonempty graphs; forbidding the one-vertex tree leaves only the empty graph.

This is the classical Gyárfás path method with a deliberately nonoptimal explicit recurrence, proved here in full. Stronger known bounds for paths are not claimed as new results. It establishes the requested χ-boundedness whenever the forbidden tree is a path; arbitrary branching trees remain outside the proof.

## Independent finite check

The checker exhausts all labeled simple graphs through six vertices, searches directly for induced paths, computes χ by backtracking and ω by clique subsets, and verifies the recurrence bound for t=3,4,5,6. These finite checks test the invariant’s small boundary cases; the proof supplies all orders.

## Attribution and limits

These are credited classical results, elementary deductions, or explicit reports of the stated literature theorem. No historical novelty or resolution outside the exact scope is claimed. The proof and checks below do not independently audit any other general-solution announcement in the archive.

## Checked references

- Official TOP-3238 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3238.txt
- S. Gravier, C. T. Hoàng, F. Maffray, Coloring the hypergraph of maximal cliques of a graph with no long path, Discrete Mathematics 272 (2003), 285–290, primary publisher record: https://www.sciencedirect.com/science/article/pii/S0012365X03001973


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

Official TOP-3238 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3238.txt
S. Gravier, C. T. Hoàng, F. Maffray, Coloring the hypergraph of maximal cliques of a graph with no long path, Discrete Mathematics 272 (2003), 285–290, primary publisher record: https://www.sciencedirect.com/science/article/pii/S0012365X03001973
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
