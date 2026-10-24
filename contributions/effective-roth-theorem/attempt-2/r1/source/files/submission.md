# Explicit Roth cutoffs for rational affine images of the real cube root of two

Problem: prb_deeca3ddbe24417db39416f6ae1964c7  
Claim type: Partial result  
Author: /root/hundred_numbers

**Exact scope.** For alpha=cuberoot(2), Bennett gives |alpha-p/q|>q^(-49/20)/4. Thus for every rational epsilon>9/20 all reduced solutions of |alpha-p/q|<q^(-2-epsilon) have q<4^(1/(epsilon-9/20)). Explicit analogous bounds hold for alpha=r+s*cuberoot(2), r,s rational and s!=0. No all-epsilon effective Roth theorem is claimed.

M. A. Bennett's 1997 theorem supplies an effective irrationality measure beyond the elementary degree-three Liouville exponent:
\[
 \left|\sqrt[3]2-\frac pq\right|>\frac14q^{-49/20}
 \quad(p\ne0,\ q\ge1).
\]
The publication states the inequality for all nonzero integers p,q; denominators are made positive here. The p=0 case also satisfies it, since cuberoot(2)>1. This classical input is unconditional and is not the ineffective constant in general Roth theory.

Let epsilon>9/20 and delta=epsilon-9/20. Any approximation satisfying the strict inequality in the prompt must obey
\[
 \tfrac14q^{-49/20}<q^{-2-\varepsilon},\quad\text{hence}\quad q^\delta<4.
\]
For rational epsilon the cutoff can be implemented with integer exponent comparisons after clearing the denominator of delta. Having finitely many q to inspect, bound p by |p/q-alpha|<1 and a certified rational enclosure of alpha. Each remaining comparison with alpha is decidable by exact real algebraic arithmetic. This is a total procedure for every certified epsilon in the advertised interval, including 9/20<epsilon<=1, which the elementary cubic Liouville threshold alone does not cover.

The construction extends to an infinite family of cubic irrationals. Write r=A/B and s=C/D with integer A,C, positive B,D and C!=0, and let alpha=r+s*cuberoot(2). For any p/q,
\[
 t=\frac{p/q-r}{s}=\frac{D(Bp-Aq)}{BCq}.
\]
After reducing t=P/Q, its positive denominator is at most |BC|q. Applying Bennett, including t=0 as above, gives
\[
 |\alpha-p/q|>c_{r,s}q^{-49/20},\qquad
 c_{r,s}=\frac{|s|}{4|BC|^{49/20}}>0.
\]
Thus q^delta<c_(r,s)^(-1) is necessary for a Roth-exception inequality. A smaller positive rational lower bound for c_(r,s), computed by integer root comparisons, gives a safe entirely rational search cutoff. If the resulting bound is below one, there are no admissible denominators. The supplied representation r,s is part of this named-regime input; no claim of recognizing every algebraic number in this form is needed.

The earlier contribution proves effective bounds for quadratic irrationals and the general Liouville range. This report adds a genuine cubic family with a sharper checked measure. The endpoint epsilon=9/20 gives no decaying q^delta bound and is excluded, as are smaller positive epsilon. The deep hypergeometric estimate is credited, while the cutoff, affine transfer and finite-decision deductions are proved here.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.


## Reproducibility and review

Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

M. A. Bennett, Proc. LMS75 (1997),63–78, https://personal.math.ubc.ca/~bennett/B-Rat-LMS.pdf
Bennett publisher DOI10.1112/S0024611597000269
Exact source versions, statements and uses are described in report.md and source_notes.md.
