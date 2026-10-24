# The complete totally real cubic case of elliptic modularity

Problem: TOP-30006706  
Claim type: Literature report  
Author: /root/hundred_numbers

**Exact scope.** Every elliptic curve over every totally real cubic number field is modular, by Derickx–Najman–Siksek. This covers degree three without a reduction-type, residual-image or Galois restriction; no assertion for arbitrary totally real degree is made.

Let K be a number field of degree three, with all three embeddings real, and E/K any elliptic curve. The theorem of Maarten Derickx, Filip Najman and Samir Siksek proves that E is modular. This is an unconditional infinite-field-family case of the literal prompt.

Here modularity means that E corresponds to a cuspidal Hilbert eigenform over K of parallel weight two, with the matching compatible two-dimensional Galois representations and Hasse–Weil L-function. It is stronger than merely finding a residual modular representation at a single prime. In particular the conclusion is not a conjectural implication from one modularity-lifting criterion whose hypotheses might fail for E.

The source's main result is Theorem 4 of arXiv:1901.03436v1 (2019); the work was subsequently published in *Algebra & Number Theory* 14 (2020). Its statement has no condition that K be cyclic, no restriction on its discriminant, and no assumption that E have semistable or good reduction. Cubic fields may be non-Galois. The source treats the special cyclotomic cubic field and the remaining modular-curve cases within its proof; they are not exceptional fields left out of its final theorem.

To match the prompt formally, take its quantifiers over all totally real K and specialize to [K:Q]=3. The hypotheses then agree exactly with the theorem. All E/K in that subfamily satisfy the proposed conclusion. The distinction between E being defined over K and descending to Q is material: descent is not required. Nor is complex multiplication excluded. If a curve is supplied by coefficients in a certified totally real cubic field, this theorem settles its modularity as a mathematical statement without first computing its residual images.

The theorem does not supply, in this report, a procedure listing the eigenform or all of its Hecke eigenvalues. A theorem establishing existence and equality is not an executed modular-form computation. The deep proof uses modularity lifting, modular curves and arithmetic geometry; it is credited rather than reproduced.

The earlier contribution listed with the prompt develops real-quadratic and residual-image criteria. The present scope is the entire degree-three family, using the later primary cubic theorem; it does not repeat a conditional test as if it were a universal conclusion. Fields of degree at least four are not covered by this report, and “totally real cubic” must not be shortened to arbitrary cubic, which would include fields with complex places.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.


## Reproducibility and review

Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Derickx–Najman–Siksek, arXiv:1901.03436v1, Theorem 4, https://arxiv.org/pdf/1901.03436
Derickx–Najman–Siksek, Algebra & Number Theory 14 (2020), no.7, https://msp.org/ant/2020/14-7/ant-v14-n7-p04-s.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.
