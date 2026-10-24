# Sharp entropy bound on affine products of asymmetric exponential laws

Problem: TOP-30007121

Claim type: Partial result

Exact scope: The literal entropy-covariance inequality holds for all invertible affine images of independent one-sided exponentials and two-sided asymmetric Laplace variables; equality within this family holds exactly when every factor is one-sided.

Consider the one-dimensional density
\[
 f(x)=c\begin{cases}e^{-ax},&x\ge0,\\e^{bx},&x<0,\end{cases}
 \quad a,b>0,\qquad c={ab\over a+b}.
\]
It is log-concave: its log-density has constant slope b to the left and -a to the right, with a downward jump of the derivative at zero. Its integral is c(1/a+1/b)=1. Elementary integrations of x and x^2 on the two half-lines give
\[
 \mathbb EX={1\over a}-{1\over b},\qquad
 \operatorname{Var}(X)={1\over a^2}+{1\over b^2}.
\]
Also -log f(X)=-log c+a X_+ +b(-X)_+, and the last two expectations sum to c/a+c/b=1. Thus h(X)=1-log c. Consequently
\[
 h(X)-1-\tfrac12\log\operatorname{Var}(X)
 =\log {a+b\over\sqrt{a^2+b^2}}>0. \tag{1}
\]
The strict sign is the identity (a+b)^2-(a^2+b^2)=2ab>0. No centering assumption is needed, because entropy and variance are translation invariant.

For a one-sided exponential of rate a, density a e^(-ax) on x>=0, direct integration instead gives h=1-log a and Var=a^(-2), so equality holds. Reflections of these variables are allowed. All moments and entropies used here are finite.

Let Z=(Z_1,...,Z_m) have independent factors from these two types. Their product density is log-concave. Fubini and independence give h(Z)=sum h(Z_i) and det Cov(Z)=product Var(Z_i), so summing (1) and the one-sided identities proves
\[
 h(Z)\ge m+\tfrac12\log\det\operatorname{Cov}(Z).
\]
Equality holds if and only if every factor is one-sided, since each finite two-sided factor has strictly positive deficit.

Finally let Y=MZ+q with a real invertible m by m matrix M. Change of variables gives h(Y)=h(Z)+log|det M|, while det Cov(Y)=(det M)^2 det Cov(Z). Thus the same deficit is preserved exactly, and the inequality/equality conclusion holds for this entire affine family, including correlated nonsymmetric densities. Invertibility retains full-dimensional support; singular covariance and lower-dimensional entropy conventions are outside the statement proved.

The general prompt quantifies over every log-concave density. No decomposition of an arbitrary such density into these independent factors is established, and the affine family is not asserted to exhaust equality cases of the unrestricted problem. The proof independently verifies the claimed constant and equality model on a substantial parameterized family, without treating the earlier unverified all-density announcement as proof.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007121.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
