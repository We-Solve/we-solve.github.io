# Attributed submission: Attempt: TOP-30006781

Source: https://github.com/We-Solve/research/issues/405

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006781

### Claim

Partial result

### Exact scope

For every fixed depth D≥2, unbounded-fan-in AND/OR/NOT circuits outputting exact n-bit integer products need exp(Ω_D((n/log(n+2))^{1/(D−1)})) gates; no unrestricted-depth lower bound is claimed.

### Write-up

# Omega(n log n) Boolean Circuit Lower Bound for Integer Multiplication

Claim type: **Partial result**.

Exact scope: For every fixed depth D≥2, unbounded-fan-in AND/OR/NOT circuits outputting exact n-bit integer products need exp(Ω_D((n/log(n+2))^{1/(D−1)})) gates; no unrestricted-depth lower bound is claimed.

## A carry-free projection of parity

For m Boolean inputs x₀,…,x_{m−1}, put B=ceil(log₂(m+1)) and define two operands
A(x)=Σ_{i=0}^{m−1} x_i 2^{iB},   C=Σ_{j=0}^{m−1} 2^{jB}.
Both fit in n=mB bits, with zeros in all other positions. View the product in base 2^B. Every raw convolution coefficient is at most m<2^B. Hence no coefficient causes a carry into the next block. The coefficient of the central block m−1 is exactly Σ_i x_i, because for each i the partner j=m−1−i occurs once. Its low bit, at binary position (m−1)B, is parity(x). This is an exact projection: fix one operand to C and all unused bits of the other to zero, and read one product output bit. No gates to sum the x_i are added in the reduction.

For a general sufficiently large n choose m=floor(n/(2ceil(log₂(n+2)))); then B≤ceil(log₂(n+2)), so mB≤n, and m=Ω(n/log(n+2)). Leading zero padding makes the same projection a restriction of n-bit multiplication. All carries remain within each block by the coefficient bound; lower blocks cannot alter its low bit.

## Credited parity lower bound and the model

Håstad's primary thesis [H, Theorem 5.1] proves that a depth-D unbounded-fan-in AND/OR circuit with input literals computing parity on m bits has size exp(Ω_D(m^{1/(D−1)})), for fixed D≥2. Negations can be pushed to inputs by carrying each gate and its complement, at most doubling size and preserving AND/OR depth. Restricting a circuit and selecting an output cannot increase size or depth. Applying the theorem to the projected output proves the displayed multiplication bound.

The switching-lemma proof of the parity theorem is imported; the multiplication projection and its all-n padding are proved above. Gate count is the complexity measure, so arbitrary circuit wiring is allowed within this fixed-depth model. Constants and the padding are hardwired. This is not a claim that arithmetic in the proof can be performed in unit bit time.

The literal problem permits arbitrary two-input Boolean gates and unrestricted depth. Every two-input Boolean gate has a constant-size AND/OR/NOT implementation, but this conversion multiplies an already unbounded depth rather than making it constant. Thus our theorem gives no Ω(n log n) lower bound in the literal unrestricted model. It does give a strong unconditional obstruction to constant-depth implementations even when their AND/OR fan-in is allowed to be unbounded.

## Earlier contributions and limits

The earlier attempt gives a conditional network-coding implication and a carry-free convolution encoding with logarithmic loss. Here a specific one-bit parity projection transfers a classical unconditional AC0 lower bound; the fixed-depth restriction is explicit.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30006781/verify.py). Source SHA-256: `168423b71de96f429818e65d13ef579f7d6d7ac1e1b7575819685e73f778d61d`. The source is byte-identical to the reviewed and executed program.



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
The authoring instance for this report is /root/hundred_algorithms. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006781.txt
Johan Håstad, Computational Limitations for Small Depth Circuits, primary 1986 thesis manuscript, §2.2 circuit conventions and Theorem 5.1 (pp.35–37 in manuscript pagination): https://johanhastad.se/thesis.pdf .
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30006781/verify.py (Used: exact previously reviewed program; SHA-256 168423b71de96f429818e65d13ef579f7d6d7ac1e1b7575819685e73f778d61d).

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
