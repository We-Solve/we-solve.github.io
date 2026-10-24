# TOP-1500013: two infinite three-variable families with opposite WLP behavior

**Claim type:** Partial result, with credited known results and self-contained proofs.  
**Scope:** Over $\mathbb C$, $T_{3,2,k}$ has WLP for every $k\ge1$, whereas $T_{3,3,k}$ fails WLP and therefore SLP for every $k\ge3$. This is not a classification of all triples or of SLP in the positive WLP family.

These conclusions are known: the positive family is Boij–Fröberg–Lundqvist [BFL, Theorem 17], and the negative family is a subcase of their Theorem 16. The contribution is an expanded elementary proof, an explicit equation producing the negative obstruction, and exact reproducible matrix checks. No novelty or resolution of the full catalogue problem is claimed.

## 1. Monomials and a quotient criterion

Write $T_{n,d,k}=\mathbb C[x_1,\ldots,x_n]/(x_1^d,\ldots,x_n^d)^k$. A monomial $x_1^{a_1}\cdots x_n^{a_n}$ survives precisely when

$$\sum_{i=1}^n\left\lfloor\frac{a_i}{d}\right\rfloor<k. \tag{1}$$

Indeed, membership in the ideal is equivalent to divisibility by a product of $k$ of the generators $x_i^d$. Writing $a_i=db_i+r_i$ with $0\le r_i<d$ consequently gives

$$\mathrm{Hilb}_{T_{n,d,k}}(t)=(1+t+\cdots+t^{d-1})^n
\sum_{j=0}^{k-1}\binom{j+n-1}{n-1}t^{dj}. \tag{2}$$

The diagonal change $x_i\mapsto c_ix_i$, with every $c_i\ne0$, preserves the ideal. Thus all linear forms with every coefficient nonzero have the same multiplication ranks as $L=x_1+\cdots+x_n$. If a maximal-rank locus is nonempty it is Zariski-open, and it must meet this dense set of linear forms. Therefore checking $L$ detects both success and failure of WLP for this monomial algebra.

For any finite graded algebra $A$ and linear form $L$, the exact sequence defining the quotient gives

$$\dim(A/(L))_j=\dim A_j-\mathrm{rank}(L:A_{j-1}\to A_j). \tag{3}$$

The map in (3) has maximal rank exactly when the left side equals $\max(0,\dim A_j-\dim A_{j-1})$. We apply this in every degree, rather than assuming that one successful map implies WLP.

## 2. WLP for every power of the three-variable square ideal

Let $A=T_{3,2,k}$. Formula (2), or direct monomial counting, gives its entire Hilbert function:

$$
\dim A_j=
\begin{cases}
\binom{j+2}{2},&0\le j<2k,\\
3k(k+1)/2,&j=2k,\\
k(k+1)/2,&j=2k+1,\\
0,&j>2k+1.
\end{cases} \tag{4}
$$

For example the coefficient in degree $2k$ comes from the three residue vectors of total residue two and from $b_1+b_2+b_3=k-1$ in (1). In degree $2k+1$ only the residue vector $(1,1,1)$ survives. There are no relations below degree $2k$.

The sequence grows through degree $2k-1$. Its next difference is $-k(k-1)/2$, and the difference from degree $2k$ to $2k+1$ is $-k(k+1)$. It is therefore nonincreasing thereafter, including the possible equality when $k=1$.

Eliminating $z$ using $L=x+y+z$ gives

$$A/(L)\simeq\mathbb C[x,y]/(x^2,y^2,(x+y)^2)^k
=\mathbb C[x,y]/(x,y)^{2k}, \tag{5}$$

because $(x+y)^2-x^2-y^2=2xy$ and $2$ is invertible. Thus the quotient has dimension $j+1$ for $0\le j<2k$ and zero thereafter. These are exactly the positive first differences of (4). Equation (3) proves maximal rank in every degree, hence WLP for every $k\ge1$.

For illustration, $T_{3,2,3}$ has Hilbert vector $(1,3,6,10,15,21,18,6)$, and its quotient by $L$ has vector $(1,2,3,4,5,6)$.

## 3. Failure for every $T_{3,3,k}$ with $k\ge3$

Put $A=T_{3,3,k}$. There are no ideal elements below degree $3k$, and its degree-$3k$ part has the $\binom{k+2}{2}$ distinct monomial generators as a basis. Therefore

$$\dim A_{3k}-\dim A_{3k-1}=3k+1-\binom{k+2}{2}=\frac{k(3-k)}2\le0. \tag{6}$$

Maximal rank in this degree would require the map $L:A_{3k-1}\to A_{3k}$ to be surjective, or equivalently $(A/(L))_{3k}=0$.

But

$$A/(L)\simeq\mathbb C[x,y]/(x^3,y^3,(x+y)^3)^k. \tag{7}$$

Introduce parameter variables $u,v,w$ and the nonzero cubic

$$R(u,v,w)=(w-u-v)^3-27uvw.$$

It vanishes after substituting $u=x^3$, $v=y^3$, $w=(x+y)^3$, because $w-u-v=3xy(x+y)$. Multiplication by $R$ is injective in the parameter polynomial ring. Consequently its multiples of parameter degree $k$ supply $\binom{k-1}{2}$ independent relations among the $\binom{k+2}{2}$ products of $k$ of these three binary cubics. Their span in binary degree $3k$ has dimension at most

$$\binom{k+2}{2}-\binom{k-1}{2}=3k.$$

The full binary degree-$3k$ space has dimension $3k+1$. Hence the quotient in (7) has dimension at least one in degree $3k$. This contradicts the surjectivity required by (6). Thus WLP fails for every $k\ge3$. SLP also fails because SLP includes the maps with exponent one.

At the first case $k=3$, both $A_8$ and $A_9$ have dimension $45$, and multiplication by $L$ is singular. The proof establishes failure for a general linear form, using the diagonal-change argument in Section 1; it is not merely a failure for a specially chosen form.

## 4. Verification and limits

The attached standard-library script enumerates the monomial bases using (1), builds multiplication matrices for $L$, and computes their ranks over $\mathbb Q$ using exact fractions. It checks every WLP map for $T_{3,2,k}$ with $1\le k\le6$, and the obstructed map from degree $3k-1$ to degree $3k$ for $T_{3,3,k}$ with $3\le k\le6$. It also expands the cubic relation as a polynomial identity and verifies all coefficients are zero. Run `python3 verify_lefschetz.py`; the recorded output is `verification.json`.

The infinite conclusions follow from the proofs, not extrapolation from those checks. In particular WLP in the square-ideal family does not by itself prove SLP. This contribution does not classify remaining $(n,d,k)$ and does not claim any positive-characteristic extension.

## Checked references

1. [Official TOP-1500013 prompt](https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1500013.txt), checked 18 October 2026, for the exact ideal-power convention and WLP/SLP question.
2. Mats Boij, Ralf Fröberg and Samuel Lundqvist, *Powers of generic ideals and the weak Lefschetz property for powers of some monomial complete intersections*, [arXiv:1612.00411v1](https://arxiv.org/pdf/1612.00411), 1 December 2016, Section 3, Theorems 16–17. Numbering refers to that checked version. The work was subsequently published in Journal of Algebra, DOI [10.1016/j.jalgebra.2017.11.001](https://doi.org/10.1016/j.jalgebra.2017.11.001); the theorem checks here use the arXiv text.


## Reproducibility and review

Fresh exact rational multiplication ranks: all WLP maps for square ideal powers k=1,...,6; obstructed cubic-ideal maps k=3,...,6; 58 maps total, all expected assertions passed. Integer verification of the cubic implicit equation. No floating point or modular rank inference.
The main instance freshly ran the attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify_lefschetz.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1500013.txt
https://arxiv.org/pdf/1612.00411
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
