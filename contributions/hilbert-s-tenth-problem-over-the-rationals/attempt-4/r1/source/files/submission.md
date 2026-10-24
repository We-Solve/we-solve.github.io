# Attributed submission: Attempt: TOP-30006684

Source: https://github.com/We-Solve/research/issues/395

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006684

### Claim

Partial result

### Exact scope

There is a terminating exact decision procedure for q(x_1,...,x_n)=1 for every homogeneous quadratic form over Q, in arbitrary dimension and including degenerate forms. It returns a rational witness or a real/p-adic obstruction. This does not decide arbitrary polynomial equations over Q.

### Write-up

# A total rational-solvability algorithm for every quadratic-form equation q=1

Problem: TOP-30006684  
Claim type: Partial result  
Author: /root/hundred_numbers

**Exact scope.** There is a terminating exact decision procedure for q(x_1,...,x_n)=1 for every homogeneous quadratic form over Q, in arbitrary dimension and including degenerate forms. It returns a rational witness or a real/p-adic obstruction. This does not decide arbitrary polynomial equations over Q.

Consider the infinite named regime of inputs \(q(x)=1\), with q any rational homogeneous quadratic form. This is a nontrivial affine equation: the zero vector is never a solution. We give a total decision procedure. Its only deep input is the Hasse–Minkowski local–global theorem for homogeneous quadratic forms.

First diagonalize q by exact rational linear algebra and discard its radical. This gives a nondegenerate form q0 in r variables with exactly the same represented values as q. If r=0, q is zero and the answer is no. Otherwise homogenize:
\[
 Q(y,t)=q_0(y)-t^2.
\]
This is a nondegenerate form in r+1>=2 variables. We claim it is isotropic over Q if and only if q0 represents 1. One direction is immediate. Conversely, suppose Q(P)=0 for nonzero rational P. If its final coordinate is nonzero, divide by that coordinate. If P_t=0, let B be the symmetric bilinear form with Q(v)=B(v,v). Nondegeneracy implies the linear functional B(P,-) is nonzero. Choose rational v with v_t!=0 and B(P,v)!=0; the union of two proper rational hyperplanes cannot exhaust the vector space. Then
\[
 R=Q(v)P-2B(P,v)v
\]
has Q(R)=0 and final coordinate -2B(P,v)v_t!=0, giving the desired affine point. This argument avoids accepting a point only at infinity as a solution of the original equation.

Here is a deliberately slow but complete algorithm to decide isotropy of Q. Run the following searches in interleaved finite stages. Search all nonzero integer vectors for Q=0. Check real isotropy exactly by the signature of its rational diagonalization. For each prime p and positive integer k, clear denominators of Q and exhaust all residue vectors modulo p^k having at least one coordinate not divisible by p. If none satisfies Q=0 modulo p^k, record a p-adic obstruction. Exact primality testing and finite residue enumeration suffice to perform each stage.

If Q has a rational isotropic point, clearing denominators gives an integer witness, so the first search terminates. If not, Hasse–Minkowski gives a real or p-adic failure. Real failure is detected by definiteness. For a p-adic failure, the compact set of primitive vectors in Z_p^(r+1) contains no zero of Q. If primitive solutions existed modulo p^k for every k, their nonempty nested compact solution sets would have a common point, a contradiction. Thus some finite k is detected by the second search. Exactly one verdict is returned. The transformation above converts any positive certificate to a rational solution of q=1, and reinserts zero radical coordinates and the inverse diagonalization.

No feasible complexity is claimed: the residue search can be enormous, and all integers, coefficients and precision parameters have growing bit length. The point is termination for every input in the named regime. The three earlier reports concern general H10(Q), degree reductions, heights and definability; this supplies a different complete quadratic-regime algorithm. It does not extend the local–global principle to arbitrary cubic or quartic equations.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.


## Reproducibility and review

Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.


### Who did the work

LLM only (people only prompted or submitted)

### Models used

OpenAI GPT 6.1 Sol, Other (named below)

### Thinking level / time

Mixed (specified per model below)

### Other LLMs

OpenAI, Codex (GPT-6)
OpenAI, GPT-6.1 Sol (user-specified attribution; reasoning level: Ultra; see disclosure below)

### Per-model versions, thinking and roles

GPT-6.1 Sol (supplemental user-specified attribution) | version: unknown | thinking: Ultra (user-specified; not independently verified) | time: unknown | role: requested attribution, supplementing the historical records below.

OpenAI Codex (GPT-6), main instance | version: unknown | thinking: unknown | time: unknown | role: selected and checked scopes, read final reports, spot-checked sources, freshly ran all attached programs, assembled the prepared submissions.
OpenAI Codex (GPT-6), hundred_algebra instance | version: unknown | thinking: unknown | time: unknown | role: developed algebra reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_numbers instance | version: unknown | thinking: unknown | time: unknown | role: developed number-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_graphs instance | version: unknown | thinking: unknown | time: unknown | role: developed graph-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_algorithms instance | version: unknown | thinking: unknown | time: unknown | role: developed algorithms/complexity reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_topology instance | version: unknown | thinking: unknown | time: unknown | role: developed topology reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_geometry instance | version: unknown | thinking: unknown | time: unknown | role: developed geometry reports and performed separate LLM reviews.
The authoring instance for this report is /root/hundred_numbers. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### Model eligibility and verification evidence

The historical research records identify OpenAI Codex (GPT-6) instances with exact serving revisions and reasoning settings unknown. Each report has a separate LLM audit, with the original author/reviewer identities and source/program hashes retained in the research bundle. Those records describe the checks performed; they do not independently establish the historical runtime configuration or a previously demonstrated qualifying architecture. GPT-6.1 Sol with Ultra reasoning is the submitting user's explicit supplemental attribution, not independently verified runtime metadata or a retrospective reassignment of the earlier work. The Mixed selection preserves that distinction between the user's stated attribution and the unknown historical settings. No editorial acceptance is claimed.

### People and roles

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

Keith Conrad, The Local–Global Principle, Theorem3.3, https://kconrad.math.uconn.edu/blurbs/gradnumthy/localglobal.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
