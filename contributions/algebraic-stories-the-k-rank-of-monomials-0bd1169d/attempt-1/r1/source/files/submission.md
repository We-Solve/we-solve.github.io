Problem: prb_0bd1169dd3684756857b419b46de74f2

Title: Exact cube rank of every monomial in at most three variables

Claim type: Partial result

Scope: Over $\mathbb C$, for $k=3$ and a nonzero monomial $M$ of degree $3d$ in at most three variables,
$$\mathrm{rk}_3(M)=\begin{cases}1&\text{if every exponent is divisible by }3,\\4&\text{if }M=xyz\text{ up to a nonzero scalar and renaming variables},\\3&\text{otherwise}.\end{cases}$$
The exceptional case has $d=1$. This is the previously established Carlini–Oneto classification, reproduced here with a self-contained proof. The general problem for $k\geq4$ or more variables is not solved here.

Assumptions and limitations: Exponents of variables in the prompt are positive. Allowing zero exponents simply includes the binary and one-variable cases in the same notation. Scalar coefficients do not change rank over $\mathbb C$. Multiplication by a cube gives an upper bound on rank; no equality under that operation is assumed.

Write-up:

We first prove two elementary lower bounds. Unique factorization shows that $M$ is a single cube of a polynomial if and only if each exponent of $M$ is a multiple of three.

A monomial that is not a cube cannot be a sum of two cubes. Indeed, suppose $M=A^3+B^3$ and put $C=-B$. If $A,C$ are linearly dependent, their difference of cubes is a scalar times a cube, which is impossible. Otherwise
$$M=(A-C)(A-\omega C)(A-\omega^2C),\qquad \omega^3=1,\quad\omega\ne1.$$
Each factor divides a monomial and is therefore a nonzero scalar multiple of a monomial. The three factors are pairwise nonproportional because $A,C$ are linearly independent. Distinct monomials are linearly independent, whereas these three factors belong to the two-dimensional vector space spanned by $A,C$. This contradiction proves that every noncube monomial has cube rank at least three. This argument works for any number of variables.

For the upper bounds we use
$$6U^2V=(U+V)^3-(U-V)^3-2V^3.\tag{1}$$
Whenever $U,V$ have the same degree, this is a decomposition into at most three cubes of forms of that degree, because nonzero constants have cube roots in $\mathbb C$.

Write
$$M=Q^3 x^r y^s z^t,\qquad r,s,t\in\{0,1,2\}.$$
The sum $r+s+t$ is divisible by three. After permuting variables, the possibilities are exactly
$$(r,s,t)=(0,0,0),(0,1,2),(1,1,1),(2,2,2).$$

- For $(0,0,0)$, $M$ is a cube.
- For $(0,1,2)$, apply (1) to $U=z,V=y$, and multiply the resulting identity by $Q^3$. Thus every base form is multiplied by $Q$, and has degree $d$.
- For $(2,2,2)$, apply (1) to $U=xy,V=z^2$, giving a three-cube decomposition of $x^2y^2z^2$. Multiply each base form by $Q$.
- For $(1,1,1)$, either $M=xyz$, or one exponent is at least four. In the latter case, rename variables so that
$$M=R^3x^4yz.$$
Apply (1) to the quadratic forms $U=x^2,V=yz$, then multiply each base form by $R$. Again all base forms have degree $d$.

Thus every noncube monomial other than $xyz$ has rank exactly three. The argument with a zero exponent gives the complete binary classification as well.

It remains to determine the exceptional rank. The identity
$$24xyz=(x+y+z)^3+(x-y-z)^3+(-x+y-z)^3+(-x-y+z)^3$$
gives rank at most four. Suppose $xyz$ were a sum of at most three cubes of linear forms, padding with zero terms to make three. The three linear forms must be independent: otherwise the polynomial depends on at most two linear coordinates, so its first derivatives span a space of dimension at most two; the derivatives $yz,xz,xy$ are independent. Write the three independent forms as $L_1,L_2,L_3$. The chain rule for the Hessian of $L_1^3+L_2^3+L_3^3$ gives
$$\det\mathrm{Hess}(xyz)=216(\det A)^2L_1L_2L_3,$$
where $A$ is their invertible coefficient matrix. Directly, $\det\mathrm{Hess}(xyz)=2xyz$. Unique factorization forces $L_1,L_2,L_3$ to be scalar multiples of $x,y,z$ in some order. Their cubes cannot sum to $xyz$, a contradiction. Hence $\mathrm{rk}_3(xyz)=4$.

Verification and audit: `verify.py` checks both polynomial identities and the Hessian determinant exactly, then constructs and expands a three-cube weighted decomposition for every noncube monomial with positive exponents at most twelve in two or three variables and total degree divisible by three, excluding $xyz$. Rational weights stand for their complex cube roots. `verification.txt` records the run. The proof, rather than this finite enumeration, establishes all exponents. The classification exhausts the possible residual triples; the one-variable and pure-cube cases have been covered. No real-rank claim or result for all $k$ is asserted.

Models used: OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown); proof reconstruction, source checking, and exact verification.

Human contributors and roles: No human mathematical contribution is asserted in this write-up.

References:

- E. Carlini, A. Oneto, *Monomials as sums of kth-powers of forms*, arXiv:1305.4553v1 (2013), Theorem 3.2, Corollary 3.6, Proposition 3.8; published in *Communications in Algebra* 43(2) (2015), 650–658, DOI 10.1080/00927872.2013.842247. https://arxiv.org/abs/1305.4553
- Official prompt: https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/prb_0bd1169dd3684756857b419b46de74f2.txt


## Reproducibility and review

Self-contained residue-class construction, exclusion of rank2, and Hessian lower bound for xyz; exact rational polynomial expansion and finite exponent enumeration.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/prb_0bd1169dd3684756857b419b46de74f2.txt
https://arxiv.org/pdf/1305.4553v1 (Theorem 3.2, Corollary 3.6, Proposition 3.8)
https://research.monash.edu/en/publications/monomials-as-sums-of-kth-powers-of-forms/
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
