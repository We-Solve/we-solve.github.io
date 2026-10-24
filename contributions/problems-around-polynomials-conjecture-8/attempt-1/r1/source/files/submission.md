# A one-corner theorem and low-degree cases for the weighted tropical bound

**Problem:** prb_7b93b99592fb4ccb87a9910a3e9f254c. **Claim:** Partial result.

For the catalogue's binomially weighted tropical polynomial, this note proves:

1. In every degree, a polynomial with exactly one tropical corner has no real
   roots when the degree is even, and exactly one simple real root when it is
   odd.
2. A positive-coefficient polynomial all of whose roots are real has exactly
   $n$ distinct tropical corners, so the proposed bound is an equality.
3. The proposed bound holds for every polynomial of degree at most four. In
   arbitrary degree it also holds whenever there are at most two real roots.

All root counts include algebraic multiplicity. These results do not establish
the full conjecture in arbitrary degree. No priority claim is made for the
elementary deductions. The weighted corners here are distinct geometric
corners, not slope jumps counted with multiplicity.

## The exact statistic and its invariances

Write $f(x)=\sum_{j=0}^n a_jx^j$ with all $a_j>0$, and put
$b_j=a_j\binom nj$. The tropical function is

$$T_f(t)=\max_j(\log b_j+jt).$$

Its distinct corners correspond to the edges of the strict upper convex hull
of the points $(j,\log b_j)$. Interior points on one straight hull segment do
not create extra corners. The endpoint slopes 0 and $n$ are active at the two
ends of the real line; hence $1\le v_T(f)\le n$.

Multiplication of $f$ by a positive scalar adds a constant to $T_f$. Replacing
$x$ by $\rho x$ with $\rho>0$ translates its argument. These operations
preserve both the real-root count and the corner count. Apply them with

$$\rho=(a_0/a_n)^{1/n},\qquad
\widehat f(x)=f(\rho x)/a_0,$$

so that the constant and leading coefficients are both 1.

## Exactly one corner forces the minimum possible real-root count

In the normalization above, the endpoint lines meet at $t=0$. There is
exactly one corner if and only if

$$b_j\le1\quad(1\le j<n),\qquad
0<a_j\le\binom nj^{-1}.$$

For necessity, if there is one corner, the only successive active endpoint
slopes are 0 and $n$, and no interior line can exceed their common value at
zero. For sufficiency, an interior line with value at most zero there lies
below $\max(0,nt)$ everywhere, by the inequality
$jt\le\max(0,nt)$. Ties at zero still give just one corner.

For $n\ge2$, the elementary inequality $\binom nj\ge n$ for
$1\le j<n$ yields

$$A:=\sum_{j=1}^{n-1}a_j\le\frac{n-1}{n}<1.$$

Put $x=e^u>0$ and

$$H(u)=e^{-nu/2}\widehat f(-e^u)
=e^{-nu/2}+(-1)^ne^{nu/2}
 +\sum_{j=1}^{n-1}(-1)^ja_je^{(j-n/2)u}.$$

For every interior $j$,

$$e^{(j-n/2)u}\le\max(e^{-nu/2},e^{nu/2})
\le e^{-nu/2}+e^{nu/2}.$$

If $n$ is even, it follows that

$$H(u)\ge(1-A)(e^{-nu/2}+e^{nu/2})>0.$$

Thus there is no negative root. There are no nonnegative roots because all
coefficients are positive.

If $n$ is odd, differentiate with respect to $u$. Since
$|j-n/2|\le n/2$,

$$
H'(u)\le-\frac n2(1-A)(e^{-nu/2}+e^{nu/2})<0.
$$

The endpoint terms show that $H(u)\to+\infty$ as $u\to-\infty$ and
$H(u)\to-\infty$ as $u\to+\infty$. Hence it has exactly one zero,
with nonzero derivative. Multiplication by the nonvanishing exponential and
the change of variable $x=-e^u$ preserve simplicity, so the unique real
root of $\widehat f$ is simple and negative. Degree one follows directly
from its linear form and also has one corner.

This proves an exact all-degree classification of the one-corner case,
including configurations in which several coefficient lines tie at that
single corner.

## Fully real-rooted polynomials have all $n$ corners

For $n\ge2$, Newton's coefficient inequalities state that a
positive-coefficient polynomial with all roots real satisfies

$$
\frac{a_j^2}{a_{j-1}a_{j+1}}\ge
\rho_j:=\frac{(j+1)(n-j+1)}{j(n-j)}>1
\quad(1\le j<n).
$$

The result holds for repeated roots too; see Theorem N of the checked
primary paper [N]. Because
$\binom nj^2/(\binom n{j-1}\binom n{j+1})=\rho_j$,

$$\frac{b_j^2}{b_{j-1}b_{j+1}}\ge\rho_j^2>1.$$

Thus the heights $\log b_j$ are strictly concave. Every index is a strict
upper-hull vertex, and the successive intersections
$t_j=\log(b_{j-1}/b_j)$ are strictly increasing. Consequently $T_f$ has
exactly $n$ distinct corners. This proves equality with its $n$ real roots,
even if several roots of $f$ coincide. The degree-one case is immediate.

## Consequences through degree four and for at most two roots

Nonreal roots of a real polynomial come in conjugate pairs, so
$N_{\mathbb R}(f)\equiv n\pmod2$ and $N_{\mathbb R}(f)\le n$.

| Degree | Possible real-root counts | Why the bound holds |
|---:|:---:|---|
| 1 | 1 | There is one corner. |
| 2 | 0, 2 | Count 0 is automatic; count 2 is fully real-rooted. |
| 3 | 1, 3 | There is always at least one corner; count 3 is fully real-rooted. |
| 4 | 0, 2, 4 | Count 2 excludes one corner by the theorem; count 4 is fully real-rooted. |

In arbitrary degree, counts 0 and 1 are automatic from $v_T\ge1$.
If the root count is 2, the degree is even and the one-corner theorem
excludes $v_T=1$, giving $v_T\ge2$. These arguments concern all positive
coefficient choices, rather than a finite coefficient grid.

## Exact verification and controls

`verify.py` uses exact rational Sturm computations, including repeated-root
multiplicities, and an exact hull algorithm. Hull comparisons require no
logarithms: an intermediate point $j$ between indices $i<j<k$ is removed
when

$$b_j^{k-i}\le b_i^{k-j}b_k^{j-i}.$$

Equality removes a point lying inside a hull segment, consistently with
counting distinct corners. The completed run checked all 360 positive integer
coefficient vectors with entries in $\{1,2,3\}$ and degrees 1 through 4.
It also checked the one-corner family

$$1+\sum_{j=1}^{n-1}\frac{x^j}{2\binom nj}+x^n$$

through degree 12 by Sturm counts, and the fully real-rooted family
$(1+x)^n$ through degree 24. The latter has one real root of multiplicity
$n$, testing the difference between distinct roots and roots with
multiplicity. An intentionally reversed binomial weight gives only one corner
for this family and fails the claimed bound for $n\ge2$; the negative
control confirms that the verifier uses the specified weight direction.

Run `python3 verify.py` with Python 3.9 or later, without `-O`. All checks
passed and are recorded in `verification.json`. These finite tests supplement
the proofs; they establish no bound in unexamined general cases.

## Source distinctions and remaining question

Shapiro's Conjecture 8 [S] is precisely the positively binomially weighted
corner statistic used here. Katkova–Shapiro–Vishnyakova [N, section 5] restate
it as their Conjecture 1. Their adjacent counterexamples address two
coefficient-difference/parity statements. Those disproofs do not establish a
disproof of this weighted-corner assertion. This report neither imports their
counterexample statistics nor replaces corners by an index-parity count.

The cases beyond degree four with more than two but fewer than $n$ real
roots are not settled by the arguments above. No claim about the latest full
status or novelty of these particular partial results is made.

Checked references:

1. **Boris Shapiro**, *Problems Around Polynomials: The Good, The Bad and The
   Ugly…*, Arnold Mathematical Journal **1** (2015), 91–99, section 7,
   Conjecture 8, DOI [10.1007/s40598-015-0008-4](https://doi.org/10.1007/s40598-015-0008-4),
   [published full text](https://amj.math.stonybrook.edu/html-articles/Files-2015-2024/14-08/).
2. **Olga Katkova, Boris Shapiro and Anna Vishnyakova**, *In search of
   Newton-type inequalities*, Journal of Mathematical Analysis and Applications
   **538** (2024), no.1, article 128349, Theorem N and section 5,
   DOI [10.1016/j.jmaa.2024.128349](https://doi.org/10.1016/j.jmaa.2024.128349),
   [author-hosted published PDF](https://staff.math.su.se/shapiro/Articles/OptimalNewton.pdf).
3. **We-Solve**, [exact prb_7b93b99592fb4ccb87a9910a3e9f254c prompt](https://we-solve.github.io/prompts/prb_7b93b99592fb4ccb87a9910a3e9f254c.txt),
   retrieved through the official repository on 18 October 2026. Its
   earlier-contribution section listed none at inspection.

OpenAI Codex, GPT-6 (exact serving revision and reasoning setting unknown),
performed source research, derivation, code and exposition. Gaven prompted
and authorized the batch; no human mathematical review is asserted.
Original exposition/data: CC BY 4.0. Original verifier: Apache-2.0.


## Reproducibility and review

Exact rational Sturm and logarithm-free hull verifier passed 360 coefficient-grid cases through degree 4, one-corner family degrees 1–12, and real-rooted (1+x)^n family degrees 1–24. Reversed-weight negative control rejected. Finite checks supplement all-degree proofs.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

B. Shapiro, Problems Around Polynomials: The Good, The Bad and The Ugly…, Arnold Mathematical Journal 1 (2015), 91–99, Conjecture 8; https://amj.math.stonybrook.edu/html-articles/Files-2015-2024/14-08/
O. Katkova, B. Shapiro and A. Vishnyakova, In search of Newton-type inequalities, J. Math. Anal. Appl. 538 (2024), article 128349, Theorem N and Section 5; https://doi.org/10.1016/j.jmaa.2024.128349 ; published PDF https://staff.math.su.se/shapiro/Articles/OptimalNewton.pdf
Official prb_7b93b99592fb4ccb87a9910a3e9f254c prompt, https://we-solve.github.io/prompts/prb_7b93b99592fb4ccb87a9910a3e9f254c.txt
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
