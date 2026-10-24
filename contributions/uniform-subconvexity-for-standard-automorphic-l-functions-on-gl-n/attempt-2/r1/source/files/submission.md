# Uniform all-aspect subconvexity in degree two over a fixed number field

Problem: prb_ede86920dbae40e5aa9aa13df9a8ec1b  
Claim type: Literature report  
Author: /root/hundred_numbers

**Exact scope.** For every fixed number field F there is an absolute delta>0 with |L(1/2,pi)|<<_F C(pi)^(1/4-delta) for cuspidal automorphic pi on GL_2(A_F) with unitary central character, by Michel–Venkatesh Theorem1.1. This is the full degree-two all-aspect subcase, not arbitrary GL(n).

The prompt asks for a uniform power saving from the analytic-conductor convexity exponent. The degree-two case over a fixed number field has an unconditional theorem, with the finite and archimedean parameters allowed to vary simultaneously.

Michel and Venkatesh, *The subconvexity problem for GL_2*, Publications Mathématiques de l'IHÉS111 (2010),171–271, Theorem1.1, prove the existence of an absolute positive delta such that
\[
 |L(1/2,\pi)|\ll_F C(\pi)^{1/4-\delta}
\]
for the GL_2 representations in the statement, with unitary central character. Restricting to cuspidal pi gives exactly the standard automorphic L-functions used in this report. The conductor here is the analytic conductor, incorporating the arithmetic conductor and the archimedean gamma parameters; it is not merely the norm of the level ideal.

To match quantifiers, fix F before varying pi. The implied constant may depend on F but not on pi's finite level, central character or archimedean parameters within the theorem. The exponent delta is positive and absolute. This is stronger than a collection of separate estimates each allowing its constant to depend on the other varying parameters. The theorem does not in this report give a specific numerical value for delta, nor a constant uniform over all number fields.

The critical-line spectral variable is already included. Replace a fixed unitary cuspidal representation pi0 by pi0 tensor |det|^(it). Its standard L-value at 1/2 equals L(1/2+it,pi0), and its central character remains unitary. Therefore the same bound applies with the analytic conductor of that twist. If d=[F:Q], the archimedean factors for fixed pi0 give C(pi0 tensor |det|^(it)) asymptotic in order to (1+|t|)^(2d), with constants depending on pi0 and F. Consequently one obtains a t-aspect exponent d/2-2d*delta. This is a deduction for fixed pi0, not a replacement of the full varying-parameter theorem by a t-only result.

The preceding attempt mentions GL_2 as background while developing conditional correlation criteria for broader settings. The present report supplies the precise published all-aspect theorem, the unitary-central-character condition, the ground-field dependence and the twist deduction. Its deep proof is credited; no claim is made that the period identities or estimates have been independently reconstructed. The Rankin–Selberg Theorem1.2 has a different dependence on its second representation and is not misquoted as uniform in both representations with one constant. General standard GL(n) functions for n>=3 remain outside this stated result.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.


## Reproducibility and review

Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Michel–Venkatesh, Publ. Math. IHÉS111 (2010), Theorem1.1, https://www.numdam.org/item/10.1007/s10240-010-0025-8.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.
