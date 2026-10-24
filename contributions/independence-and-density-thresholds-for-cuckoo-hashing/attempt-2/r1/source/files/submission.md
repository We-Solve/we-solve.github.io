# Independence and Density Thresholds for Cuckoo Hashing

Claim type: **Literature report**.

Exact scope: For fixed d≥3 with independent fully random distinct d-location choices per key, the offline cuckoo placement threshold is the explicit Fountoulakis–Panagiotou constant c_d; the threshold point and limited independence are not resolved here.

## The exact credited threshold and probability model

Use m table locations and floor(c m) keys. Each key independently chooses a uniformly random d-element subset of the table; within a key its choices are distinct. In Fountoulakis–Panagiotou [F], Theorem 1.1, let ξ_d be the unique positive solution

d = ξ_d(e^{ξ_d}−1)/(e^{ξ_d}−1−ξ_d),

and put c_d=ξ_d/[d(1−e^{-ξ_d})^{d−1}]. For every fixed d≥3, placement exists with probability tending to one as m→∞ if c<c_d, and does not exist with probability tending to one if c>c_d. No statement at c=c_d is included. This is a substantial imported theorem; its random-core and dense-subgraph proof is not independently certified here. The primary paper defines the distinct-choice model on its first page, permits different keys to choose identical subsets, and proves the threshold in exactly that model.

## Why the theorem is about placement

Construct the bipartite graph of keys and available locations. Any placement gives a matching saturating all keys. Conversely a saturating matching tells each key where to reside. Equivalently every key subset U must have at least |U| neighboring locations. Necessity is immediate by injectivity. For sufficiency, if a maximum matching leaves a key unmatched, expose all alternating paths from it. No reached location can be unmatched, or reversing that path augments the matching. All neighbors of reached keys are reached, and each reached location is matched to a different reached key other than the initial one. This gives a key subset with fewer neighbors, a contradiction. This elementary characterization explains the placement question, while the threshold theorem controls those Hall obstructions probabilistically.

An offline placement algorithm may run a polynomial-time bipartite matching routine after sampling the choices; the theorem itself does not guarantee constant or polylogarithmic online insertion time. High-probability existence and quick insertion are different statements. No finite numerical root calculation is offered as proof of a sharp threshold.

The distinct-choice qualification is deliberately explicit. Independent hash functions with replacement can give repeated locations within one key; [F]'s model cannot be silently identified with that model, since the probability of at least one repeated-choice key need not tend to zero at linear load. This report does not prove a transfer theorem for those repeats. It also leaves open the sufficient degree of universal independence asked in the literal two-part prompt, and does not treat fixed d=2 as if it were covered by the d≥3 theorem.

## Earlier contributions and limits

The earlier attempt proves Hall’s criterion, a nonsharp low-load union bound for choices with replacement, and a limited-independence obstruction. The added content is the explicit sharp threshold theorem in its exact distinct-choice model, with the difference from that prior probability model disclosed.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

Source-only literature report: no program is attached. The primary threshold formula, strict sides of the threshold, distinct-choice model and placement interpretation were checked; no imported random-hypergraph proof is independently certified.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

Source-only literature report: no program is attached. The primary threshold formula, strict sides of the threshold, distinct-choice model and placement interpretation were checked; no imported random-hypergraph proof is independently certified.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30001244.txt
Nikolaos Fountoulakis, Konstantinos Panagiotou, Sharp Load Thresholds for Cuckoo Hashing, primary author-hosted journal manuscript, model pp.1–2, Theorem 1.1, Proposition 2.1 and Hall deduction: https://web.mat.bham.ac.uk/N.Fountoulakis/RSA_Rev_Late.pdf . arXiv:0910.5147; Random Structures & Algorithms 41 (2012), DOI https://doi.org/10.1002/rsa.20426 .
Exact source versions, statements and uses are described in report.md and source_notes.md.
