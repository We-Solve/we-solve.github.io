# Littlewood for cubic-field bases with prescribed divisibility

Problem: prb_1c4c71aa3f55448383415728b4212f88  
Claim type: Literature report  
Author: /root/hundred_numbers

**Exact scope.** If (1,alpha,beta) is a Q-basis of a cubic subfield of R, then Littlewood holds with arbitrarily small products along q divisible by any fixed positive D; the approximating numerator for alpha can also be divisible by D and gcd(q,r,s)=1. This follows from de Mathan’s published Theorem1.5, both cubic signatures.

Fix real numbers alpha,beta such that (1,alpha,beta) is a Q-basis of a cubic field E contained in R. This allows both a totally real cubic field and a field with only one real embedding. A published refinement of the classical cubic-field result gives simultaneous approximations with extra arithmetic constraints.

Bernard de Mathan, *Simultaneous Diophantine approximation with a divisibility condition*, JTNB36(2024), Theorem1.5, proves that for every 0<epsilon<=1 and positive integer D there are integers Q>1,R,S with gcd(Q,R,S)=1, Q=R=0 modulo D, and
\[
 |Q\alpha-R|\le\varepsilon Q^{-1/2},\qquad
 |Q\beta-S|\le C_{\alpha,\beta}Q^{-1/2}.
\]
The second constant is independent of epsilon and D. The theorem gives log Q bounds involving psi(D)=D product_(p|D)(p^6-1): order epsilon^(-1)psi(D) for the one-real-embedding signature, and epsilon^(-1)psi(D)^2 in the totally real signature, with field/basis-dependent constants.

The Littlewood deduction is immediate but its quantifiers should be stated. Multiplying the two error bounds gives
\[
 Q\|Q\alpha\|\,\|Q\beta\|\le C_{\alpha,\beta}\varepsilon.
\]
Given any target eta>0 and fixed D, choose epsilon small enough that the right side is below eta. Then Q is a multiple of D and has the desired small product. The resulting Q values are unbounded as epsilon tends to zero: if a finite set of Q sufficed, the positive quantities sqrt(Q)*||Q alpha|| on that set would have a positive minimum because alpha is irrational, contradicting the first error bound. Hence the liminf is zero even along multiples of D. This is more than a lone small denominator.

The denominator divisibility and primitive triple condition are compatible. If a prime divides D it divides Q and R, so primitivity forces it not to divide S. No contradictory assertion that all three coordinates are divisible by D is made. Nor is it required that R,S be nearest integers; the inequality for the nearest-integer distance follows because that distance is at most any displayed approximation error.

The earlier report handles rational dependence and unbounded continued fractions. The present basis assumption is rational independence in a common cubic field, and the theorem adds fixed divisibility constraints. Its number-field unit and approximation proof is credited. The displayed order bounds do not give numerical effective constants here, and they must not be promoted to an implemented search bound. No conclusion for unrelated cubic fields, arbitrary algebraic pairs or all real pairs is drawn.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.


## Reproducibility and review

Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

B. de Mathan, JTNB36(2024), Theorem1.5, https://www.numdam.org/item/10.5802/jtnb.1303.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.
