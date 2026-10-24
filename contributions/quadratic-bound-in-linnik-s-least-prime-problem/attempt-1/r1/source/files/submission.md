# A versioned effective bound for the least prime in a progression

Problem: TOP-9400132  
Claim type: Literature report  
Author: /root/hundred_numbers

**Exact scope.** For every d>=2 and gcd(a,d)=1, the least prime p(a,d) is at most C d^5.2 for one effectively computable absolute C, by Xylouris, arXiv:0906.2749v1, Theorem 1.1. This does not establish the strict bound p(a,d)<d^2 requested in the prompt.

The literal assertion is a strict quadratic inequality for **every** reduced residue class and modulus. It is stronger than an asymptotic estimate with an unspecified constant. A checked unconditional comparison is available from the following versioned primary theorem.

Triantafyllos Xylouris, *Über die Linniksche Konstante*, arXiv:0906.2749v1 (2009), defines P(q) as the largest least prime over the reduced residue classes modulo q and proves in Theorem 1.1 that P(q) is bounded by an effectively computable absolute constant times q^5.2. This is the result reported here; it is not a claim about the strongest exponent in later work.

The passage to the prompt's quantifiers is direct. For each d>=2, reduce a modulo d. Coprimality makes its class one of those occurring in the maximum P(d). Therefore
\[
 p(a,d)\le P(d)\le C d^{26/5}.
\]
The same C works for every a and d; it is not allowed to depend on the progression. Finite small moduli can be included by increasing the effective constant if the theorem is initially written with an asymptotic convention. Dirichlet's theorem supplies existence of the least prime, while this stronger theorem bounds how far it lies.

The bound gives an effective finite search certificate for each input. Once an admissible C is supplied from an effective implementation of the proof, test the integers a+kd up to C d^(26/5) for primality. No numerical value of C has been extracted or certified here, and no short running-time assertion follows from effectivity alone. With d in binary, a polynomial-in-d search length may be exponential in its bit length. This observation does not convert the report into an executed algorithm.

Neither the exponent nor its constant implies the desired quadratic bound: C d^(26/5)/d^2 grows with d. Even an estimate O(d^2) would still need its constant controlled, and all small cases checked, to imply the literal strict inequality. No Riemann hypothesis or ineffective exceptional-zero exclusion is assumed in the cited unconditional theorem. The prompt lists no earlier contribution; this is a credited literature benchmark with the precise remaining gap preserved.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.


## Reproducibility and review

Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

T. Xylouris, arXiv:0906.2749v1 (2009), Theorem 1.1, https://arxiv.org/pdf/0906.2749
Exact source versions, statements and uses are described in report.md and source_notes.md.
