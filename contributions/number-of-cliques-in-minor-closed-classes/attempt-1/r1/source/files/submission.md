# Attributed submission: Attempt: TOP-3107

Source: https://github.com/We-Solve/research/issues/166

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3107

### Claim

Literature report

### Exact scope

Credit Fox–Wei’s 3^(2t/3+o(t))n upper bound; prove c_* is finite and that the asymptotic exponential rate is 3^(2/3), using an explicit cocktail-party graph minor calculation. Do not determine the exact all-t constant c_*.

### Write-up

# The optimal asymptotic clique exponent, with an exact extremal family

Problem: TOP-3107

Claim type: Literature report.

Exact scope: Credit Fox–Wei’s 3^(2t/3+o(t))n upper bound; prove c_* is finite and that the asymptotic exponential rate is 3^(2/3), using an explicit cocktail-party graph minor calculation. Do not determine the exact all-t constant c_*.

## The literature bound and the two different constants

Fox and Wei, On the number of cliques in graphs with a forbidden minor, Theorem 1.1, prove that every n-vertex graph with no K_t minor has at most 3^{2t/3+o(t)}n cliques. The error is a function of t uniform in n. The paper’s 2016 arXiv manuscript was published in Journal of Combinatorial Theory, Series B (2017). This is a credited upper-bound theorem, not a new proof of it.

Write M_t=sup_G κ(G)/|V(G)| over nonempty K_t-minor-free graphs, with the empty clique counted as in the prompt. The cited bound implies limsup M_t^{1/t}≤3^{2/3}. If a clique-count convention were to omit the empty clique, adding one changes κ by only one≤n, so the same exponential rate and finiteness conclusion hold.

The number c_* in the prompt is sup_{t≥2} M_t^{1/t}, whereas the asymptotic rate concerns t→∞. A limiting exponential rate does not by itself identify the supremum at small finite t.

## A fully explicit lower family

Let CP_r be the complete r-partite graph with two vertices in every part, r≥1: equivalently K_{2r} with a perfect matching removed. A clique chooses zero or one vertex from each part, giving exactly κ(CP_r)=3^r, including the empty clique.

Its Hadwiger number is floor(3r/2). For the upper bound, consider any minor model with s singleton branch sets and b nonsingleton branch sets. Singleton branch sets must form a clique, hence s≤r. Disjointness uses at least s+2b≤2r vertices. Therefore the total number s+b≤r+s/2≤3r/2.

For the lower bound, choose one vertex from each of the r parts as singleton branch sets. Pair the remaining vertices from distinct parts into floor(r/2) pairs; for example pair consecutive parts, leaving one vertex unused if r is odd. Each pair is connected. Two singleton branch sets touch because they come from different parts. A paired branch set touches every singleton: at most one member of the pair is in that singleton’s part, and the other supplies an edge. Two paired sets also touch because their vertices occupy disjoint pairs of parts. Thus the stated number of branch sets is a clique-minor model.

For each large t choose r=floor(2(t−1)/3). Then floor(3r/2)≤t−1, so CP_r has no K_t minor and

\[
M_t\ge\frac{3^r}{2r},\qquad
\liminf_{t\to\infty}M_t^{1/t}\ge3^{2/3}.
\]

Together with Fox–Wei, this proves the asymptotic rate exists and equals 3^{2/3}.

## Finiteness of the literal universal constant

Fix any ε>0. For all t≥T the theorem gives M_t≤3^{(2/3+ε)t}. For 2≤t<T, any K_t-minor-free graph is also K_T-minor-free, so M_t≤M_T<∞. Thus c=max(3^{2/3+ε},√max(1,M_T)) bounds M_t^{1/t} for all t≥2. Consequently c_*<∞. This argument does not give the exact best finite universal c_*.

## Exact check

For 1≤r≤8 the checker enumerates all vertex subsets to count cliques, constructs the displayed branch sets, verifies their connectivity and pairwise touching, and checks their number. The all-r upper bound is the branch-set counting proof, not a brute-force assertion of minor exclusion.

## Attribution and limits

These are credited classical results, elementary deductions, or explicit reports of the stated literature theorem. No historical novelty or resolution outside the exact scope is claimed. The proof and checks below do not independently audit any other general-solution announcement in the archive.

## Checked references

- Official TOP-3107 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3107.txt
- J. Fox and F. Wei, On the number of cliques in graphs with a forbidden minor, arXiv:1603.07056, Theorem 1.1 and lower-bound discussion; JCTB (2017): https://arxiv.org/abs/1603.07056
- Primary published paper: https://www.sciencedirect.com/science/article/pii/S0095895617300394


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

Official TOP-3107 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3107.txt
J. Fox and F. Wei, On the number of cliques in graphs with a forbidden minor, arXiv:1603.07056, Theorem 1.1 and lower-bound discussion; JCTB (2017): https://arxiv.org/abs/1603.07056
Primary published paper: https://www.sciencedirect.com/science/article/pii/S0095895617300394
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
