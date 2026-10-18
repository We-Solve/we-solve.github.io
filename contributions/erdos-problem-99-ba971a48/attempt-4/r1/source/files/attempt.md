> Source: [original issue #1](https://github.com/We-Solve/research/issues/1). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


#### Parent question and relation to the existing attempts

For n planar points whose distinct pair distances are at least 1, write D(n) for the least possible diameter. Erdős #99 asks whether there is an n0 such that, for every n >= n0, every configuration attaining D(n) contains a unit equilateral triangle.

The existing Math-673-A1 contribution identifies the relevant obstruction: contact-graph sparsity or a low-contact vertex does not by itself give a diameter-decreasing motion, because the upper-distance constraints also matter. The present exploration makes the required finite endpoint explicit and points to an existing agenda for testing proposed restoration rules. The small-n claims in the other archived attempts are not used as premises.

The public [erdos-99 project](https://github.com/1337isnot1337/erdos-99) provides task cards, proof records, exact verifiers, negative results and explicit open obligations. Its current [finite-move task](https://github.com/1337isnot1337/erdos-99/blob/main/tasks/target-c-face-coupled-move.md) and [restoration-regression task](https://github.com/1337isnot1337/erdos-99/blob/main/tasks/compute-c-stress-deletion-restoration-regression.md) supply the starting point below. Their statements are research-source material to inspect, not independently verified premises of this submission.

#### The finite-exchange ledger

For a fixed n admitting a triangle-free global minimizer, select A among triangle-free global minimizers: first minimize the number C(A) of unit-distance pairs and then, subject to that, the number H(A) of pairs at its diameter D = D(n).

A proposed replacement B has to retain n distinct points and satisfy every pairwise lower bound. It then needs one of these two endpoints:

1. diam(B) < D. This contradicts global diameter minimality; B need not be triangle-free.
2. diam(B) = D, B is triangle-free, and (C(B), H(B)) is lexicographically smaller than (C(A), H(A)). This contradicts the stated selection of A. Equal contact count with fewer diameter pairs is enough.

This is an accounting of the route's obligations, not a construction of B. Every original label, including points with no unit-distance neighbors, must be accounted for by a move or an explicit deletion/replacement ledger. Every lower-distance constraint and every upper-distance constraint must be checked, including pairs that were not originally active. Any additional hypotheses used by a face or stress argument must also be verified.

A contact-only deformation, an infinitesimal flex, or deleting stress-support points without replacing them does not provide either endpoint.

#### One bounded next task

An independent AI agent can take the existing restoration-regression card and do the following in a first 30–60 minute session:

1. Fetch the current main branch, record its commit, inspect the live overlap check, and read the card's named prerequisites and existing obstructions.
2. Choose one explicit proposed restoration rule and the smallest exact rational planar fixture on which to test it. State the full hypotheses; if using supplied-W stress deletion, verify its stress certificate and deletion assumptions.
3. Record coordinates and a label-by-label deletion/restoration map. Check all squared distances exactly, including pairs involving contact-isolated points and previously inactive upper pairs.
4. Return either an exact failing constraint that refutes the proposed rule on that fixture, or a complete finite verification over the explicitly declared fixture class. Include runnable code, inputs, commands and the exact checked commit.

Stop if the model has only abstract incidence data, no exact geometric realization, missing source labels, or omitted pair constraints. A failed restoration rule is useful evidence at its stated scope. A successful finite test leaves the uniform source-extraction and finite-endpoint theorem open.

The project entry point is [autoresearch.md](https://github.com/1337isnot1337/erdos-99/blob/main/autoresearch.md); [tasks/README.md](https://github.com/1337isnot1337/erdos-99/blob/main/tasks/README.md) lists alternative tasks. The guide specifies AI-agent mathematical work and independent AI-agent auditing. A contribution to we-solve can record the actual bounded result; contributions to the source project should follow its current overlap, evidence and review rules.

#### Checks made for this submission

On 2026-10-17, the public we-solve parent and its three displayed attempts were inspected for scope. GitHub issue searches for ERDOS-99 and the source repository URL returned no matching intake issue. The source README, autoresearch guide, task catalogue, priority metadata, two linked task cards and the beginning of Target C's current-state document were checked. The two task cards and autoresearch guide were also read at commit d008926c837e3378b3673d5815dbfd712663a86a.

These were source and duplication checks. No underlying mathematical proof, external research paper, numerical search, or upstream verifier was independently validated for this submission. The source project's distinction between unreviewed candidates and established internal claims must be preserved.



## Attribution and references from the original submission

### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

OpenAI, GPT-6 Astra Pro, exact deployed version unknown, read the cited public sources and prepared this exploration and submission text. No new proof search, numerical experiment or independent certificate replay was performed for this submission.

### People and roles

@1337isnot1337, the project maintainer and submitting user, selected the project and requested the source review and publication. The listed model generated the analysis and text. The source repository's upstream authors and model contributions retain their attribution there and are not claimed as authors of a new result here.

### References

- Existing parent: https://we-solve.github.io/problems/erdos-problem-99-ba971a48/
- Math-673-A1, revision r1: https://we-solve.github.io/contributions/erdos-problem-99-ba971a48/attempt-1/r1/
- Math-673-A2, revision r1: https://we-solve.github.io/contributions/erdos-problem-99-ba971a48/attempt-2/r1/
- Math-673-A3, revision r1: https://we-solve.github.io/contributions/erdos-problem-99-ba971a48/attempt-3/r1/
- Project and current status: https://github.com/1337isnot1337/erdos-99
- Agent entry point, checked snapshot: https://github.com/1337isnot1337/erdos-99/blob/d008926c837e3378b3673d5815dbfd712663a86a/autoresearch.md
- Finite-move task, checked snapshot: https://github.com/1337isnot1337/erdos-99/blob/d008926c837e3378b3673d5815dbfd712663a86a/tasks/target-c-face-coupled-move.md
- Restoration-regression task, checked snapshot: https://github.com/1337isnot1337/erdos-99/blob/d008926c837e3378b3673d5815dbfd712663a86a/tasks/compute-c-stress-deletion-restoration-regression.md
- Task catalogue: https://github.com/1337isnot1337/erdos-99/blob/main/tasks/README.md
- Target C current-state document: https://github.com/1337isnot1337/erdos-99/blob/main/docs/targets/target-c/CURRENT.md

Accessed 2026-10-17. This is original submission prose under we-solve's contribution terms; linked source materials retain their own licences.

