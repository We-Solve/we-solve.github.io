# Attributed submission: Attempt: TOP-9300004

Source: https://github.com/We-Solve/research/issues/349

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-9300004

### Claim

Partial result

### Exact scope

Any point at rational distance from all four vertices of the unit square has rational coordinates X/D,Y/D in primitive common-denominator form, with 12 dividing D; it lies on neither diagonal. Complete conditional residue filters modulo 5 and 11 are also given.

### Write-up

# Primitive denominator and modular obstructions for four rational square distances

Problem: TOP-9300004

Claim type: Partial result

Exact scope: Any point at rational distance from all four vertices of the unit square has rational coordinates X/D,Y/D in primitive common-denominator form, with 12 dividing D; it lies on neither diagonal. Complete conditional residue filters modulo 5 and 11 are also given.

Let r_00,r_10,r_01,r_11 be the four rational distances. Subtracting their squares gives
\[
 2x=1+r_{00}^2-r_{10}^2,\qquad
 2y=1+r_{00}^2-r_{01}^2.
\]
Hence x,y are rational. Write x=X/D,y=Y/D with integers D>0 and gcd(X,Y,D)=1. Each scaled distance D r_ab is rational and its square is the integer (X-aD)^2+(Y-bD)^2, so it is an integer: a rational number with integral square has denominator one in lowest terms.

If D were odd, one of X,X-D would be odd and one of Y,Y-D would be odd. The corresponding corner's squared distance would be 2 modulo 4, impossible for an integer square. Thus D is even. X,Y cannot both be odd, by the same obstruction at corner (0,0), and cannot both be even by primitivity. Interchange coordinates if necessary so X is odd and Y is even. An odd square is 1 modulo 8; if Y were 2 modulo 4, X^2+Y^2 would be 5 modulo 8, impossible. Thus 4 divides Y. Applying the same argument to X^2+(Y-D)^2 forces 4|(Y-D), hence 4|D. All four integer scaled distances are odd.

If 3 did not divide D, at least one of X,X-D would be nonzero modulo 3, and likewise one of Y,Y-D would be nonzero. Choosing those two coordinates gives squared distance 2 modulo 3, also impossible. Therefore 12|D.

Neither square diagonal is possible. On x=y, rationality of x and of sqrt(2)|x| forces x=0, but its distance to (1,1) is then irrational. On x+y=1, the distance to (1,0) is sqrt(2)|1-x|, forcing x=1; its distance to (0,1) is then irrational. This uses no assumption that the putative point lies inside the square.

There are further exact conditional filters. If p does not divide D, normalize u=X D^(-1), v=Y D^(-1) in F_p. All four values u^2+v^2, (u-1)^2+v^2, u^2+(v-1)^2, (u-1)^2+(v-1)^2 must be quadratic residues including zero. Exhausting F_p^2 gives precisely
\[
 p=5:\quad (u,v)\in\{(0,3),(1,3),(3,0),(3,1)\},
\]
\[
 p=11:\quad (u,v)\in\{(0,6),(1,6),(6,0),(6,1)\}.
\]
The attached standard-library checker computes squares and tests all pairs independently, certifying these two finite tables. The logical reduction to residue conditions is the proof above. No condition is inferred at a prime dividing D, since inversion is then unavailable. Nor does the presence of modular candidates produce an actual rational-distance point: every displayed condition is necessary only. The existence problem remains unresolved here. This arithmetic obstruction uses all four square corners and is distinct from constructions of rational-distance sets on a circle.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Executed check_exact.py with assertions enabled: mod 5 [(0, 3), (1, 3), (3, 0), (3, 1)]; mod 11 [(0, 6), (1, 6), (6, 0), (6, 1)]; PASS complete mod5,11 tables and 11648 primitive-at2,3 residue triples mod24; possible denominator classes [0, 12]. python -O was separately executed and refused. These are finite exact checks only.


## Reproducibility and review

Executed check_exact.py with assertions enabled: mod 5 [(0, 3), (1, 3), (3, 0), (3, 1)]; mod 11 [(0, 6), (1, 6), (6, 0), (6, 1)]; PASS complete mod5,11 tables and 11648 primitive-at2,3 residue triples mod24; possible denominator classes [0, 12]. python -O was separately executed and refused. These are finite exact checks only.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: check_exact.py


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
The authoring instance for this report is /root/hundred_geometry. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-9300004.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
