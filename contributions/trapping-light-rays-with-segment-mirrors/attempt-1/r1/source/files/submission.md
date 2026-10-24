# Attributed submission: Attempt: TOP-5500031

Source: https://github.com/We-Solve/research/issues/342

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-5500031

### Claim

Partial result

### Exact scope

For pairwise closure-disjoint rational mirror segments and a rational source off them, decide whether some ray escapes after at most K actual reflections in n^{O(K+1)}poly(L,K) bit time. This gives a semidecision for existence of a finitely escaping direction, not a universal trap theorem.

### Write-up

# Exact bounded-reflection escape decision for rational segment mirrors

Problem: TOP-5500031

Claim type: Partial result

Exact scope: For pairwise closure-disjoint rational mirror segments and a rational source off them, decide whether some ray escapes after at most K actual reflections in n^{O(K+1)}poly(L,K) bit time. This gives a semidecision for existence of a finitely escaping direction, not a universal trap theorem.

Fix K>=0 and let L be the full binary encoding of the rational endpoints/source and K. Degenerate zero-length segments can be removed. If the source is outside the convex hull H, it already escapes. Otherwise a ray escapes after finitely many reflections exactly when after its last reflection its forward halfline has no further transverse interior mirror hit. Indeed all mirrors lie in the compact convex H, and any straight ray with no more hits eventually leaves it; between two hits its segment remains in H by convexity. Missing endpoints never count as reflections.

Reflection in the supporting line of a rational segment is a rational affine isometry: its matrix is I-2nn^T/(n dot n), with rational normal n and rational translation term. Enumerate every composition T of at most K+1 such reflections. For every mirror segment form its image under T, and collect directions from the original source to its two endpoints (ignore zero vectors), together with the two directions parallel to its supporting line. Add the four signed coordinate-axis directions. There are at most n^{O(K+1)} rational direction vectors. Sort and merge coincident directions by halfplane and exact cross-product comparisons. The added axes ensure each consecutive open sector has angle at most pi/2; the sum of its two boundary vectors gives a rational direction strictly inside it.

Test every critical direction and one sample per open sector by exact ray tracing through at most K+1 actual reflections. From a current location/direction compute intersections with all segments using rational2-by2 linear systems, retaining only positive ray parameters, strict interior segment parameters and transverse hits. Ignore missing endpoints and tangential contacts. Choose the smallest positive parameter; disjoint segment closures prevent simultaneous hits of two different mirrors. If no hit remains after at most K reflections, return YES; if a(K+1)st reflection occurs, that direction is not a witness. Return NO if no tested direction is a witness.

Here is why finite angular sampling is complete. Unfold a trajectory with a prescribed reflection prefix: transform the remaining mirrors by the corresponding reflected isometries so the trajectory is a straight ray from the original source. While its initial direction moves in an open sector containing none of the listed directions, intersection with an unfolded segment cannot enter or leave through an endpoint, nor become tangent/parallel. Its positive hit parameter also cannot pass through zero unless the source is on that unfolded supporting line; in that case the intersection is identically at zero off the parallel direction and is consistently ignored. Two next-hit parameters cannot exchange order: equality would mean a common point of two transformed segments under the same prefix, contradicting closure disjointness. Thus the first hit, and inductively every hit through the(K+1)st, is constant on that sector. Every unfolded endpoint/parallel direction needed in this induction occurs in the enumerated compositions. Hence a generic witness exists exactly when its sector sample is one. Rays on sector boundaries can pass through missing endpoints and have a different itinerary; testing all those critical directions separately preserves these isolated possible escapes.

Enumeration, sorting and simulation use n^{O(K+1)} rational operations of bit cost polynomial in L,K. A length-K composition of rational affine reflections has bit length polynomial in K and input length by repeated fixed-size rational matrix multiplication; the same holds for the simulated intersections and directions. The exponent depends on K, so this is polynomial for each fixed reflection budget, not an FPT assertion in K or a uniform polynomial trap algorithm. All memory/address operations can be charged conservatively into poly(L,K) per arithmetic step.

Increasing K and rerunning eventually finds any finitely escaping ray. An escaping ray necessarily has a finite last hit before leaving H; infinitely many hits cannot occur in finite travel time because the finitely many disjoint compact mirror closures have a positive minimum mutual separation. If every ray is trapped this search need not halt. No theorem is supplied that some bounded K always suffices, and the original all-directions question remains open here.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

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
The authoring instance for this report is /root/hundred_geometry. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-5500031.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
