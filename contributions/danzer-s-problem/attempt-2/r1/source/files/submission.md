# Finite unions of Euclidean cut-and-project sets cannot be Danzer

Problem: TOP-1386

Claim type: Literature report

Exact scope: In the plane, every finite union of cut-and-project sets from translated full-rank Euclidean lattices with bounded Euclidean internal windows fails to hit all area-one convex bodies; no separation or rationality of the lattice is assumed.

Theorem1.2 of Solomon--Weiss, Dense forests and Danzer sets, arXiv:1406.3807v2 (July10,2014), says that a finite union of cut-and-project sets is not a Danzer set. Section3 defines these sets using a direct sum R^(2+k)=R^2_phys plus R^k_int, a translated full-rank lattice L in that total space, and a bounded window W in the internal Euclidean space:
\[
 \Lambda(L,W)=\pi_{phys}\bigl(L\cap\pi_{int}^{-1}(W)\bigr).
\]
This exact definition, including bounded W, is the class reported. Finitely many summands may have different ambient dimensions, lattices, windows and physical/internal decompositions.

Its conclusion means that for each such finite union there exists a convex planar body of area1 disjoint from it. Thus it fails the literal hitting requirement regardless of whether its counting function happens to be O(R^2) or whether it is uniformly separated. In particular quasiperiodicity does not repair the elementary empty-strip failure of one lattice: the theorem handles nonperiodic cut-and-project examples and finite unions of incommensurable constructions as well.

Translations and physical-plane rotations stay within the class by translating the ambient grid or applying the rotation to its physical coordinates. A physical dilation by c>0 also comes from an invertible ambient linear transformation of the grid, still a translated full-rank lattice, with the same bounded internal window. Applying the theorem to c Lambda shows that no single rescaling turns such a union into a Danzer set. Equivalently, the obstruction is not limited to one accidental normalization of area1. For example, if a rescaled set met all area-one bodies it would contradict Theorem1.2 applied to that rescaled cut-and-project representation.

The full homogeneous-dynamics/lattice argument is credited to the primary authors and their acknowledged Strömbergsson input; it is not reconstructed by the elementary transfer statements above. The theorem's Euclidean internal space must be preserved. Section7 explicitly discusses more general model sets with arbitrary locally compact abelian internal groups as a possible extension, so that unproved extension is not asserted here. Infinite unions and arbitrary uniformly discrete sets likewise remain outside the obstruction. The general existence questions in the prompt are not settled.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1386.txt
https://arxiv.org/pdf/1406.3807v2 — Solomon and Weiss, Theorem1.2, Section3 definition, and Section7.1 limitation on internal groups; v2 July10,2014.
Exact source versions, statements and uses are described in report.md and source_notes.md.
