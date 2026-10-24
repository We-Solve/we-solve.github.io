# Complex affine polynomials cannot have all cube moments zero

Claim type: Partial result

Exact scope: For every dimension d, the implication in the prompt holds for every complex affine polynomial c+sum a_j x_j, with no common-phase or reality assumption.

Let f(x)=c+sum_{j=1}^d a_j x_j with arbitrary complex coefficients. Consider its exponential generating function
\[
 F(t)=\int_{[0,1]^d}e^{t f(x)}\,dx.
\]
The polynomial f is bounded on the compact cube. The exponential series is uniformly absolutely convergent there on every bounded t-disk, so termwise integration is valid and
\[
 F(t)=1+\sum_{m\ge1}M_m(f)t^m/m!
\]
is an entire function. If all required positive moments vanish, F is identically one.

Independence of the coordinates in the integral gives the exact factorization
\[
 F(t)=e^{ct}\prod_{j:a_j\ne0}\frac{e^{a_jt}-1}{a_jt}.
\]
The factors have removable singularities at zero, with value one. If some a_j≠0, set t=2πi/a_j. The corresponding factor is zero. Every other factor is finite at this nonzero t, since its only displayed denominator zero occurs at zero. The exponential e^{ct} is finite and nonzero. Hence F(t)=0, contradicting F≡1. Thus every a_j=0. Now M_1(f)=c, so c=0.

This proves the all-moments implication without inserting complex conjugation into the moments and without requiring coefficients to share a phase. In particular, the cancellation of a second moment does not invalidate the argument. For example in two variables
\[
 f=(x_1-1/2)+i(x_2-1/2)
\]
has M_1=M_2=M_3=0, while M_4=−1/60: the centered uniform moments are E X²=1/12 and E X⁴=1/80, giving 2/80−6/144=−1/60. Thus the real-valued second-moment shortcut does not establish even this affine complex class.

The proof permits arbitrarily many variables and every affine coefficient choice. It does not extend its product formula to general coupled polynomials; for those F(t) does not separate into these elementary factors. No universal finite moment cutoff, either in dimension or degree, is claimed.

Relation to earlier contributions. The freshly retrieved prompt lists no earlier contribution. The affine theorem treats genuinely complex cancellation in every dimension; the displayed vanishing of the first three moments explains why it is not the real-valued special case mentioned in the prompt.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_95c79d83b0c7460198d63891126640e5.txt


## Reproducibility and review

Source-only: literal prompt, prior full texts and stated references checked; written deduction audited by author, without formal or human verification.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_95c79d83b0c7460198d63891126640e5.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
