# Finiteness of Sha after quadratic base change from two rank-at-most-one factors

Problem: prb_5c0a41ad560e4510961c4b9ac1a9d091  
Claim type: Partial result  
Author: /root/hundred_numbers

**Exact scope.** Let E/Q and nonsquare d in Q*. If both E and its quadratic twist E^(d) have analytic rank at most1 over Q, then the entire Sha(E/Q(sqrt d)) is finite, including its2-primary part. This includes total analytic rank2 after base change. It does not prove Sha finite for all elliptic curves over number fields.

Put K=Q(sqrt d) and let sigma generate Gal(K/Q). Assume each of L(E,s) and L(E^(d),s) has order of vanishing0 or1 at s=1. The modular Gross–Zagier–Kolyvagin theorem over Q gives finiteness of Sha(E/Q) and Sha(E^(d)/Q). This deep theorem is the input, not a conjectural BSD converse. We prove carefully that these two finite groups force finiteness after the quadratic base change, without discarding the prime2.

Write S=Sha(E/K), an abelian subgroup of H^1(K,E). Restriction and corestriction on Galois cohomology preserve local triviality: this follows from the usual local restriction/corestriction formula, summed over places above a given place. Hence they induce maps on the Sha groups. For alpha in S,
\[
 \operatorname{res}\operatorname{cor}(\alpha)=\alpha+\sigma\alpha.
\]
The right side therefore lies in the finite subgroup obtained by restricting Sha(E/Q).

Let psi:E^(d)_K->E_K be the twisting isomorphism, chosen so that its conjugate under sigma is -psi. Transport alpha by psi^(-1), corestrict to Q on the twisted curve, restrict back, and apply psi again. The result is
\[
 \alpha-\sigma\alpha.
\]
Indeed, the ordinary trace on the twisted group is 1+sigma there, and transport changes the second action to -sigma on E. Its values lie in the finite subgroup obtained from Sha(E^(d)/Q). Adding the two formulas shows that 2alpha lies in the sum of two fixed finite subgroups. Thus the image 2S is finite.

Finally S[2] is finite by ordinary finite2-descent: the Kummer exact sequence realizes S[2] as a quotient of the finite2-Selmer group. More explicitly, Sel_2 consists of locally permissible classes in H^1(K,E[2]), unramified outside finitely many places, and the standard finiteness theorem for these finite-coefficient unramified cohomology classes proves its finiteness. This is a theorem of descent, not an assumption that all of Sha is already finite. Multiplication by2 now gives
\[
 0\longrightarrow S[2]\longrightarrow S\longrightarrow2S\longrightarrow0,
\]
so S is finite. This last step is necessary: a statement only about odd-primary eigenspaces would leave a2-primary gap.

The proof works whether K is real or imaginary, and requires no Heegner splitting condition for this chosen K. Such conditions occur inside proofs of the rational rank-at-most-one theorem, not in the elementary base-change deduction. Since L(E/K,s)=L(E,s)L(E^(d),s), the rank pattern(1,1) has total analytic rank2 over K and is included; no rank-two Euler-system theorem was assumed.

The earlier reports give general Selmer-growth reductions and rational rank-at-most-one background. The new content is the precise quadratic-extension class and full cohomological proof including2. Curves for which either rational twist has analytic rank at least2 remain outside this deduction. No numerical L-value has been treated as a certified rank input.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.


## Reproducibility and review

Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

C. Skinner, Annals191(2020), introduction pp330,332, https://annals.math.princeton.edu/wp-content/uploads/annals-v191-n2-p01-s.pdf
Fresh official prb_5c0a41ad560e4510961c4b9ac1a9d091 prompt; standard Kummer finite2-descent and displayed restriction/corestriction proof
Exact source versions, statements and uses are described in report.md and source_notes.md.
