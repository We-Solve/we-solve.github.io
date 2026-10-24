# Attributed submission: Attempt: TOP-3199

Source: https://github.com/We-Solve/research/issues/167

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3199

### Claim

Partial result

### Exact scope

For arbitrary uniformity d, prove the conjectured bound for every codegree-at-most-two hypergraph; for arbitrary codegree q, determine the exact conflict chromatic number q for complete d-partite transversal hypergraphs.

### Write-up

# Two complete regimes for the hypergraph Vizing-type coloring question

Problem: TOP-3199

Claim type: Partial result.

Exact scope: For arbitrary uniformity d, prove the conjectured bound for every codegree-at-most-two hypergraph; for arbitrary codegree q, determine the exact conflict chromatic number q for complete d-partite transversal hypergraphs.

## The conflict graph and an exact degree calculation

Let H be a finite simple d-uniform hypergraph as in the prompt, d≥2. Its conflict graph has a vertex for each hyperedge, adjacent precisely when the intersection has d−1 elements. Fix a hyperedge e. Each conflicting hyperedge f contains a unique (d−1)-subset S of e, namely e∩f. It cannot contain two distinct such subsets without containing their union e and hence being e itself. Therefore

\[
\deg_{\mathrm{conflict}}(e)=
\sum_{S\subset e,\ |S|=d-1}(\deg_H(S)-1)\le d(r-1).
\]

A graph of maximum degree D has a proper (D+1)-coloring: process its vertices in any order and choose a color unused on already colored neighbors, of which there are at most D. Applied here this gives d(r−1)+1 colors for all H.

When r=2 this is d+1=r+d−1, exactly the conjectured allowance. For r=1 there are no conflicts and one color suffices, also within r+d−1=d. No restriction on the number of vertices or edges, and no partiteness assumption, is needed in these regimes.

The r=2 bound is sharp: on d+1 vertices take all d-subsets as hyperedges. Every (d−1)-subset lies in exactly two of them, while any two hyperedges conflict. The conflict graph is K_{d+1}, requiring d+1 colors.

## An exact family at unbounded r

Now partition the vertex set into d nonempty parts V₁,…,V_d of sizes q₁,…,q_d and take all transversals (one vertex from each part) as hyperedges. Put q=max qᵢ. A (d−1)-set omitting exactly one part lies in qᵢ hyperedges, while other (d−1)-sets lie in none; hence the maximum codegree is exactly q.

Number vertices of Vᵢ distinctly by 0,…,qᵢ−1, viewed in Z/q. Give a transversal with coordinates (x₁,…,x_d) the color x₁+⋯+x_d modulo q. Two conflicting transversals differ in exactly one coordinate. The nonzero difference of two labels from that part has absolute value less than q, so is nonzero modulo q, and the colors differ. This is a q-coloring.

Fix all coordinates except one in a largest part. The q resulting transversals pairwise conflict and form a clique, so q colors are necessary. Thus the exact conflict chromatic number is q, for all dimensions and all positive part sizes. If q=1 there is one hyperedge and the formula still gives one color. Every subhypergraph of such a grid inherits the same q-coloring, though its actual maximum codegree may be smaller than q, so no unproved bound in that smaller parameter is inferred.

## Verification and remaining range

The exact checker verifies all codegree-at-most-two subhypergraphs on at most five vertices for d=2,3,4, checks their conflict degrees and greedy colors, and checks the sharp d+1-vertex examples through d=12. It separately constructs complete transversal grids for all d=2,3,4 and part sizes from one through four, checking every conflicting pair’s sum color.

For arbitrary hypergraphs with r≥3 the generic degree bound exceeds the target by (d−1)(r−2); the grid result does not remove that gap. No coloring claim for all such hypergraphs is made.

## Attribution and limits

These are credited classical results, elementary deductions, or explicit reports of the stated literature theorem. No historical novelty or resolution outside the exact scope is claimed. The proof and checks below do not independently audit any other general-solution announcement in the archive.

## Checked references

- Official TOP-3199 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3199.txt
- M. Rosenfeld’s conjecture, posted by M. DeVos, A generalization of Vizing’s Theorem?, Open Problem Garden (2007): https://www.openproblemgarden.org/op/a_generalization_of_vizings_theorem


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

Official TOP-3199 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3199.txt
M. Rosenfeld’s conjecture, posted by M. DeVos, A generalization of Vizing’s Theorem?, Open Problem Garden (2007): https://www.openproblemgarden.org/op/a_generalization_of_vizings_theorem
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
