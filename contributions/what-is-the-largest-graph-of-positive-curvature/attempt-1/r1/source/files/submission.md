# The published208-vertex curvature bound matches the recorded problem

Problem: TOP-3328

Claim type: Literature report.

Exact scope: Report Ghidelli’s exact maximum208 for the prompt’s spherical positive-combinatorial-curvature class, matching repeated face-incidence conventions, minimum degree and prism/antiprism exclusions.

## Credited theorem and matching hypotheses

Ghidelli’s Theorem3.1 in the inspected extended author version states that a planar PCC graph has at most208 vertices. Definition1.1 means a finite simple connected spherical graph with positive combinatorial curvature everywhere, minimum degree at least3, excluding prisms and antiprisms. Section18 exhibits208-vertex examples, so the bound is attained. The result is published in JCTB158(2023),226–263; the extended version arXiv1708.08502v2 supplies the detailed case analysis. The deep discharging proof and the geometric examples are credited, not independently reverified here.

The source defines curvature by

K(v)=1−deg(v)/2+Σ_(face incidences at v)1/|f|.

Its incident-face objects are explicitly multisets, and face length counts the boundary walk. This agrees with the prompt even when an incidence repeats. The surface is the sphere, the unbounded plane face is included, and no orientable higher-genus or different Ricci-curvature convention is substituted. Thus the exact extremal answer to the recorded class is208 by the cited upper theorem and its credited attaining example.

## A self-contained normalization check

For any finite connected cellular spherical embedding, sum this curvature over all vertices. Degree terms contribute−|E|. For each face, its|f| boundary incidences each contribute1/|f|, giving total1 per face, including repetitions. Therefore

Σ_vK(v)=|V|−|E|+|F|=2

by Euler’s formula. In particular an order bound must control average curvature, not merely its positivity: the average is2/|V| and may be arbitrarily small in allowed infinite families if exclusions are removed.

Indeed an r-prism has two r-gonal faces and r quadrilateral faces. At each of its2r vertices, the face multiset is(4,4,r), giving K=1−3/2+1/4+1/4+1/r=1/r>0. For an r-antiprism the multiset is(3,3,3,r) and degree4, again giving K=1−2+1+1/r=1/r. Their orders2r are unbounded. This directly verifies why the two exclusions are essential rather than a cosmetic qualification.

No208-vertex adjacency list has been reconstructed or certified by a local script here. The attainment statement is explicitly the literature input, and no claim of a new extremal construction or independent completion of the long discharging proof is made.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3328.txt
- https://arxiv.org/pdf/1708.08502
- https://www.sciencedirect.com/science/article/pii/S0095895622000855


## Reproducibility and review

Proof/source review only; no code attached at authoring time. Exact hypotheses and boundary cases are addressed in report.md; external theorem proofs are credited rather than claimed independently verified.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3328.txt
https://arxiv.org/pdf/1708.08502
https://www.sciencedirect.com/science/article/pii/S0095895622000855
Exact source versions, statements and uses are described in report.md and source_notes.md.
