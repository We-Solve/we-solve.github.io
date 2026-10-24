# Attributed submission: Attempt: TOP-30006723

Source: https://github.com/We-Solve/research/issues/399

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006723

### Claim

Partial result

### Exact scope

For every absolutely simple abelian variety over a number field with potential complex multiplication, the identity component of its l-adic algebraic monodromy group equals MT(A) tensor Q_l for every prime l. The deduction uses Lombardo’s finite-index theorem after a finite field extension. Nonsimple products and non-CM varieties are outside this reported scope.

### Write-up

# The Mumford–Tate equality for absolutely simple CM abelian varieties

Problem: TOP-30006723  
Claim type: Partial result  
Author: /root/hundred_numbers

**Exact scope.** For every absolutely simple abelian variety over a number field with potential complex multiplication, the identity component of its l-adic algebraic monodromy group equals MT(A) tensor Q_l for every prime l. The deduction uses Lombardo’s finite-index theorem after a finite field extension. Nonsimple products and non-CM varieties are outside this reported scope.

Let A/K be absolutely simple of dimension g and suppose it has potential complex multiplication. After a finite extension K'/K all its geometric endomorphisms are defined. Their rational algebra is then a CM field E of degree2g. This is exactly the absolutely simple, CM-over-the-ground-field situation in Lombardo's Theorem1.3 (equivalently Theorem5.5).

For each prime l let G be the image of Gal(Kbar/K') on T_l A, and let T=MT(A) be the Mumford–Tate torus. Lombardo proves that G and T(Z_l) are commensurable in their common rational representation: their intersection has finite index in both. The theorem gives explicit bounds, but only finiteness is needed below. It applies to every l, including ramified and bad-reduction primes; extra hypotheses in part(3) improve bounds and are not needed for part(2).

We supply the algebraic-group deduction. A compact open subgroup of a Q_l-torus is Zariski dense in that torus. Indeed, after extending scalars to split the torus, a regular function vanishing on an l-adic open neighborhood is zero by the one-variable polynomial identity principle applied successively to local coordinates. The same holds for a finite-index subgroup of T(Z_l): it is compact and closed here (an intersection of compact groups), hence open, so it contains a neighborhood of the identity. Therefore the Zariski closure of H=G intersect T(Z_l) is T tensor Q_l.

As [G:H] is finite, G is a finite union of H-cosets. Its Zariski closure is a finite union of corresponding torus cosets. Its identity component is precisely T tensor Q_l: it contains that connected torus, and the finite coset union has no larger-dimensional identity component. Thus the Mumford–Tate equality holds over K'.

Returning to K does not change the identity component. The image of the finite-index subgroup Gal(Kbar/K') has finite index in the original Galois image, and the same finite-coset argument identifies their connected algebraic closures. The complex abelian variety and its rational Hodge structure, hence its Mumford–Tate group, are unchanged by a finite extension of the number field. This proves the advertised equality over the original K for every l.

The identity-component qualification is essential. Endomorphisms not defined over K can produce additional components, so equality of the full disconnected monodromy group with a torus was not proved. Absolute simplicity is retained because the cited finite-index theorem is stated in that regime; no unjustified product argument is used to extend it to all CM varieties. The earlier contribution treats non-CM elliptic curves and tensor criteria. This report adds the higher-dimensional absolutely simple CM regime, using a precise published theorem and a complete finite-index-to-connected-group deduction. The deep CM reciprocity estimates themselves are credited rather than re-proved.

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

Lombardo, Bull. SMF145(2017), Theorem1.3(1),(2), https://smf.emath.fr/system/files/2017-08/smf_bull_145_469-501.pdf
Milne, Complex Multiplication, Corollary4.7, https://www.jmilne.org/math/CourseNotes/CM.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
