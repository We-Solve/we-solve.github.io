# Attributed submission: Attempt: TOP-3400

Source: https://github.com/We-Solve/research/issues/332

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3400

### Claim

Partial result

### Exact scope

Stable ternary compaction has fan-in-two Boolean circuits of O(n log²(n+2)) gates, preserving the relative order of 0 and 1; this improves the earlier quadratic construction but does not prove linear size.

### Write-up

# Linear-size circuits for stable $0,1 < 2$ sorting?

Claim type: **Partial result**.

Exact scope: Stable ternary compaction has fan-in-two Boolean circuits of O(n log²(n+2)) gates, preserving the relative order of 0 and 1; this improves the earlier quadratic construction but does not prove linear size.

## A merge circuit

Use the prompt's encoding 0=00, 1=01, 2=10. Pad the input with 2 to a power-of-two length N, where n≤N<2n (n=1 needs no padding). A node of the construction outputs its compacted word and the binary count of symbols other than 2. A leaf is its own compacted word, and its count is the negation of the high input bit, on valid encodings.

Suppose two length-h children output L=u_L 2* and R=u_R 2*, with counts a and b. Extend R to length 2h with 2. Shift this extended word right by a positions, filling the left with 2 and discarding positions beyond 2h. Call the result S. For j<h, output L_j when its high bit is zero, and S_j otherwise; for j≥h output S_j. The output is exactly u_L u_R followed by 2: before a we use L; from a through a+b−1 we use the shifted non-2 prefix of R; all later positions are 2. Output a+b as the new count. This proves correctness by induction. The first n outputs of the padded answer are the required unpadded answer, since all padding symbols are 2.

## Gate accounting

A binary-controlled shift is a fixed barrel-shift network. For each binary digit r of a, one stage chooses between the current word and its shift by 2^r. Every output bit is a two-input multiplexer, implemented as (c AND v) OR ((NOT c) AND u), using a constant number of the allowed gates. There are O(log(h+1)) stages on 4h data bits, hence O(h log(h+1)) gates. Out-of-range wires are constant bits for 2. Constants may be synthesized once as z AND NOT z and its negation if the basis does not supply constants.

The merge selection uses O(h) further gates. Ripple-carry addition computes a+b in O(log(h+1)) gates: XOR and the carry majority each have constant-size implementations in AND, OR, NOT. Counts have enough digits to include 2h; no overflow is discarded. Thus C(2h)≤2C(h)+O(h log(h+1)), and summing the O(N log N) work bound across log N levels gives O(n log²(n+2)) gates. All shifts are hardwired multiplexers; no unit-cost variable address operation is hidden in this circuit count. The circuit can be generated uniformly by an elementary polynomial-time transducer. No requirement is imposed on invalid symbol encoding 11.

## Earlier contributions and limits

The listed attempt gives a 15-gate adjacent compactor and an O(n²) bubble network, plus a linear dependency lower bound. The divide-and-conquer merge and O(n log²n) size above are different added content; the desired O(n) size is still not established.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

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

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected and checked scopes, read final reports, spot-checked sources, freshly ran all attached programs, assembled the prepared submissions.
OpenAI Codex (GPT-6), hundred_algebra instance | version: unknown | reasoning: unknown | role: developed algebra reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_numbers instance | version: unknown | reasoning: unknown | role: developed number-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_graphs instance | version: unknown | reasoning: unknown | role: developed graph-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_algorithms instance | version: unknown | reasoning: unknown | role: developed algorithms/complexity reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_topology instance | version: unknown | reasoning: unknown | role: developed topology reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_geometry instance | version: unknown | reasoning: unknown | role: developed geometry reports and performed separate LLM reviews.
The authoring instance for this report is /root/hundred_algorithms. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3400.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
