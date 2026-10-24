# Attributed submission: Attempt: TOP-31

Source: https://github.com/We-Solve/research/issues/135

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-31

### Claim

Partial result

### Exact scope

A linear-size construction gives a graceful labeling of every finite caterpillar, with all edge differences appearing in descending construction order.

### Write-up

# An explicit graceful labeling for every caterpillar

Problem: TOP-31

Claim type: Partial result.

Exact scope: A linear-size construction gives a graceful labeling of every finite caterpillar, with all edge differences appearing in descending construction order.

## Construction

A caterpillar is a tree admitting a path v₁,…,v_k (the spine) such that every vertex outside the path is a leaf adjacent to a spine vertex. Let aᵢ be the number of those leaves at vᵢ and m=k−1+Σaᵢ. The spine may have length zero; thus stars and the one-vertex tree are included. No uniformity assumption is made on the aᵢ.

Maintain two ends L=0 and H=m of the unused label interval. Give v₁ label L and increase L. Process the spine from left to right. When the current spine vertex received its label from the low end, give its leaves successively the largest unused labels, decrementing H each time; then, if another spine vertex remains, give that next vertex the largest unused label and decrement H. When the current spine vertex received its label from the high end, use the smallest unused labels for its leaves and next spine vertex, incrementing L instead. The choice of order among leaves at one vertex is arbitrary.

All vertices are labeled once, and labels are taken only from the unused interval, so the construction is a bijection to {0,…,m}. At each stage attach the newly labeled vertices to their already labeled parent. This orders all m edges.

## Consecutive-difference invariant

Suppose a current low spine vertex has label ℓ. Its leaves receive H,H−1,…, so their incident differences decrease by one. If a next spine vertex exists, its label is the next largest unused value h, giving the next difference h−ℓ. At that moment the next unused low label is ℓ+1: no low label has been taken while processing that low spine vertex. At the next spine vertex the first leaf, or the next spine vertex if there are no leaves, therefore has difference h−(ℓ+1), exactly one less. The argument with low and high interchanged is identical. Zero-leaf spine vertices do not interrupt the invariant: the edge to the next spine vertex supplies the next label and next difference.

The first edge has difference m. There are exactly m edges, and every successive difference is one smaller. Consequently the differences are m,m−1,…,1. This proves gracefulness. For m=0 the single vertex receives zero and the edge assertion is empty.

The labels taken from the low end form one interval, those from the high end the complementary interval, and every edge joins the two types. Thus the construction also has the usual α-labeling separation property, though only gracefulness is needed here.

## Scope and check

This is Rosa’s classical caterpillar family, presented as a fully specified algorithm. It extends the path and double-star cases treated in the archived attempt to arbitrary spine length and arbitrary leaf multiplicities. It is not a leaf-extension induction for arbitrary trees: off-spine vertices with their own children are outside the construction.

The verifier exhausts every leaf-count vector of lengths one through seven with entries zero through three, plus the one-vertex case. For each generated tree it checks injectivity, the exact label interval, and the complete multiset of differences. Those checks are independent of the difference-order argument.

## Attribution and limits

These are credited classical results, elementary deductions, or explicit reports of the stated literature theorem. No historical novelty or resolution outside the exact scope is claimed. The proof and checks below do not independently audit any other general-solution announcement in the archive.

## Checked references

- Official TOP-31 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-31.txt
- C. M. Cavalier, Graceful Labelings, MSc thesis, University of South Carolina (2009), Chapter 3, Theorem 3.6 and caterpillar discussion: https://people.math.sc.edu/czabarka/Theses/Graceful.pdf


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

Official TOP-31 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-31.txt
C. M. Cavalier, Graceful Labelings, MSc thesis, University of South Carolina (2009), Chapter 3, Theorem 3.6 and caterpillar discussion: https://people.math.sc.edu/czabarka/Theses/Graceful.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
