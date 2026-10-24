# Planted Clique Conjecture

Claim type: **Literature report**.

Exact scope: The credited Alon–Krivelevich–Sudakov algorithm exactly recovers the planted clique with high probability for k≥c√n, for every fixed c>0; its basic spectral stage is stated for k≥10√n.

## The established positive side of the threshold

Use exactly the planting distribution in the prompt, but change the size regime: sample G(n,1/2), choose a uniform k-set and fill all its internal edges. Alon–Krivelevich–Sudakov [A] give polynomial-time exact recovery with probability tending to one when k≥c√n for any fixed c>0. Their §2.1 basic Algorithm A applies at k≥10√n; §2.3 enumerates a fixed-size seed to cover each smaller positive constant c. The running-time exponent may depend on c, which is fixed independently of n. The theorem is not for k=n^{1/2−α} with fixed α>0.

The basic procedure takes the k largest absolute coordinates of the second adjacency eigenvector, forming W, and outputs vertices with at least 3k/4 neighbors in W. The primary analysis proves that W overlaps the planted clique in at least 5k/6 vertices with high probability and that this cleanup returns exactly the planted set. It is a recovery statement, rather than merely a test that planting occurred. The spectral concentration and perturbation proof are imported literature, not numerically certified in this contribution.

## Precision and quantifiers

The original algorithm is stated using a symmetric eigenvector calculation and its polynomial-time computation. This report does not claim to implement that numerical subroutine or supply a fresh worst-case rational bit-precision proof. Its positive algorithmic result is credited in the paper's standard polynomial-time spectral model. In particular no finite floating-point simulation is promoted to a proof of an asymptotic high-probability success event. The input adjacency matrix itself has Θ(n²) bits, so polynomial cost is compatible with inspecting it; no sublinear-input runtime is asserted.

For the seed extension, a seed size depending only on c allows n^{O_c(1)} enumeration. Allowing c to shrink with n would make that exponent length dependent and could destroy a polynomial bound. This is why substituting c=n^{-α} into the fixed-c theorem does not contradict the prompt. Similarly the clique size is part of the specified model, the planted subset is random, and no advice identifies its members.

One can independently verify a reported k-set is a clique by checking all its pairs, but that alone does not certify it is the planted set. At this size the primary theorem supplies the high-probability exact identification; generic clique validation is not substituted for it. This literature report locates the algorithmic boundary adjacent to the conjectured hard regime, without asserting the conjecture or any hardness lower bound.

## Earlier contributions and limits

The earlier attempt treats information-theoretic uniqueness below √n, a fresh-edge cleanup from an independent seed, and limitations of fixed degree statistics. It does not state or analyze the classical above-√n spectral recovery theorem. This report adds that credited algorithmic regime with careful fixed-c and numerical-model limits.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

Source-only literature report: no program is attached and no spectral routine was run. The planting model, exact-recovery target, fixed-c regime, basic constant ten and c-dependent enumeration exponent were checked in the primary paper; the deep probability analysis is not independently proof-certified.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

Source-only literature report: no program is attached and no spectral routine was run. The planting model, exact-recovery target, fixed-c regime, basic constant ten and c-dependent enumeration exponent were checked in the primary paper; the deep probability analysis is not independently proof-certified.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_78e1c9daf9f24adb8420995bf01a7278.txt
Noga Alon, Michael Krivelevich, Benny Sudakov, Finding a Large Hidden Clique in a Random Graph, Random Structures & Algorithms13 (1998), pp.457–466, primary author PDF §2.1 AlgorithmA, Proposition2.3 and §2.3 AlgorithmB: https://people.math.ethz.ch/~sudakovb/hidden-clique.pdf .
Exact source versions, statements and uses are described in report.md and source_notes.md.
