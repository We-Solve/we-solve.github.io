# A uniform short-interval fourth moment from the classical power-saving formula

Problem: prb_695992c218814623be32e83be26d7e9c  
Claim type: Partial result  
Author: /root/hundred_numbers

**Exact scope.** For each fixed0<delta<1/8, uniformly for T^(7/8+delta)<=H<=T, integral_T^(T+H)|zeta(1/2+it)|^4 dt is asymptotic to H(log T)^4/(2pi^2). The deduction uses Heath-Brown’s global polynomial formula with O_epsilon(T^(7/8+epsilon)) error. Higher moments and shorter intervals are not settled.

The prompt concerns moment asymptotics, and the earlier report already evaluates the global fourth-moment constant. A different consequence of the quantitative global theorem is a uniform local statement on growing short intervals.

We use the classical Heath-Brown formula
\[
 I(T):=\int_1^T|\zeta(1/2+it)|^4\,dt
      =T P_4(\log T)+O_\varepsilon(T^{7/8+\varepsilon}),
\]
where P_4 is a fixed degree-four polynomial with leading coefficient c=1/(2pi^2). The primary original paper is Proc.LMS38(1979),385–422; its full PDF was not accessible in this session. The precise statement was checked in the introduction, equations(1.1)–(1.2), of Topacogullari's primary research paper arXiv:1909.11517v1, which explicitly credits Heath-Brown. The historical7/8 input suffices; no latest-best claim is made.

Fix0<delta<1/8 and choose epsilon=delta/2. Put F(u)=uP_4(log u). For T<=u<=2T,
\[
 F'(u)=P_4(\log u)+P_4'(\log u)
       =c(\log T)^4+O((\log T)^3),
\]
uniformly, because log u=log T+O(1). Subtract the two global formulas at T+H and T, with0<H<=T, and integrate this derivative. It follows that
\[
 I(T+H)-I(T)=cH(\log T)^4
  +O(H(\log T)^3)+O_\delta(T^{7/8+\delta/2}).
\]
For H>=T^(7/8+delta), division by the main term makes the two relative errors O(1/log T) and O_delta(T^(-delta/2)/(log T)^4), respectively. Both tend to zero independently of the allowed H. This proves the stated **uniform** asymptotic and explains why the lower endpoint needs a positive exponent margin.

The lower-order polynomial is essential for this deduction. A formula retaining only cT log^4T with an O(T log^3T) remainder cannot be subtracted to obtain this short-interval range: that global remainder could swamp H log^4T. Merely knowing the global leading term, without the power-saving polynomial formula, would leave a gap.

The interval is local but still has length at least T raised to a fixed power greater than7/8. No assertion is made at H=T^(7/8), at logarithmic interval lengths, or uniformly while delta tends to zero with T. The original higher-moment conjecture is not resolved by a k=2 consequence. The added result differs from the earlier global constant computation; its proof is the uniform subtraction estimate above, with the deep global theorem fully credited and its retrieval boundary disclosed. No numerical quadrature is used to certify any asymptotic.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.


## Reproducibility and review

Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

B. Topacogullari, arXiv:1909.11517v1, equations(1.1),(1.2), https://arxiv.org/pdf/1909.11517
D.R.Heath-Brown, Proc.LMS38(1979),385–422, DOI10.1112/plms/s3-38.3.385 (metadata; original full PDF inaccessible)
Exact source versions, statements and uses are described in report.md and source_notes.md.
