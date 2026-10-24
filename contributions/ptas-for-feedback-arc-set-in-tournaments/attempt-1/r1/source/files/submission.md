# Attributed submission: Attempt: TOP-3291

Source: https://github.com/We-Solve/research/issues/170

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3291

### Claim

Literature report

### Exact scope

The literal tournament PTAS question has a positive answer by Kenyon-Mathieu/Mathieu–Schudy; verify the deterministic guarantee from the primary author manuscript and provide a separate exact subset-DP certificate for small tournaments.

### Write-up

# A checked PTAS theorem and an exact feedback-arc recurrence

Problem: TOP-3291

Claim type: Literature report.

Exact scope: The literal tournament PTAS question has a positive answer by Kenyon-Mathieu/Mathieu–Schudy; verify the deterministic guarantee from the primary author manuscript and provide a separate exact subset-DP certificate for small tournaments.

## Source theorem and guarantee

Kenyon-Mathieu and Schudy announced a PTAS for tournament feedback arc set in ECCC TR06-144 (2006), followed by STOC 2007. The later author manuscript, How to Rank with Fewer Errors, Theorem 1.2, states a randomized weighted-tournament scheme and explicitly supplies a derandomization whose running time is n^{\widetilde O(1/(εb)^{12})}. Set the weight lower-bound parameter b=1 for an ordinary unweighted tournament. For each fixed ε>0 the deterministic time is polynomial in n, and its ranking has cost at most (1+ε)OPT. This directly answers the official formulation. The full approximation analysis is a credited literature theorem, not independently reimplemented here.

For a ranking π, call an arc backward when its tail appears after its head. Delete all backward arcs. Every retained arc goes forward in the order, so the remaining digraph is acyclic. Conversely, if F is any feedback arc set, topologically order the remaining acyclic digraph. All backward arcs in that order must have belonged to F. Therefore the minimum ranking cost equals the minimum feedback-arc-set size. This proves that the theorem’s ranking output is exactly the required kind of certificate.

The zero-optimum case presents no additive-error escape: a (1+ε)-approximation must return zero when OPT=0. A tournament is acyclic exactly when it has no directed cycle, and a topological order certifies zero backward arcs. Nothing here substitutes an additive εn² approximation for the requested relative guarantee.

## Independent exact dynamic program

For any vertex subset S let f(S) be the minimum backward-arc count in an order of S. Use f(∅)=0 and

\[
f(S)=\min_{v\in S}\bigl(f(S\setminus\{v\})+
|\{u\in S\setminus\{v\}:v\to u\}|\bigr).
\]

Indeed choose v as the last vertex. Its arcs to earlier vertices are backward and contribute exactly the displayed count; all other contributions are internal to S−v. Conversely an optimal order of S has a last vertex and obeys this decomposition. Storing the minimizer reconstructs a ranking, whose backward arcs form a checkable optimum feedback set. The naive implementation costs O(n²2ⁿ) elementary steps and O(n2ⁿ) bits of bounded-size stored values/choices, so it is an exact exponential baseline, not the cited PTAS.

## Executed checks and limits

The supplied verifier compares subset DP against enumeration of all rankings on every labeled tournament through five vertices, then tests reproducibly generated tournaments through order twelve, checking their returned feedback sets are acyclic and the ranking cost matches the DP optimum. It includes a directed triangle, with optimum one, and transitive tournaments, with optimum zero. These tests certify the exact baseline’s bookkeeping; they do not experimentally establish the approximation theorem or imply that exact optimization is polynomial.

## Attribution and limits

These are credited classical results, elementary deductions, or explicit reports of the stated literature theorem. No historical novelty or resolution outside the exact scope is claimed. The proof and checks below do not independently audit any other general-solution announcement in the archive.

## Checked references

- Official TOP-3291 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3291.txt
- C. Kenyon-Mathieu and W. Schudy, How to rank with few errors: A PTAS for Weighted Feedback Arc Set on Tournaments, ECCC TR06-144 (2006): https://eccc.weizmann.ac.il/report/2006/144/
- C. Mathieu and W. Schudy, How to Rank with Fewer Errors, author manuscript, Theorem 1.2 and derandomization statement: https://cs.brown.edu/people/wschudy/papers/fast_journal.pdf


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

Official TOP-3291 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3291.txt
C. Kenyon-Mathieu and W. Schudy, How to rank with few errors: A PTAS for Weighted Feedback Arc Set on Tournaments, ECCC TR06-144 (2006): https://eccc.weizmann.ac.il/report/2006/144/
C. Mathieu and W. Schudy, How to Rank with Fewer Errors, author manuscript, Theorem 1.2 and derandomization statement: https://cs.brown.edu/people/wschudy/papers/fast_journal.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
