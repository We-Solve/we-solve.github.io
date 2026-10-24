# The arbitrary-degree binary Fröberg formula, with its exact cutoff

**Problem:** prb_38b20ffcafc941448e8b51deb6b15a3d / Math-3409.  
**Claim type:** Partial result.

**Exact scope.** The proposed Hilbert series is correct for every degree list when $n\le2$, and for generic regular-sequence cases $r\le n$ in any number of variables. For $n=2$, $r\ge2$, sort $d_1\le\cdots\le d_r$ and define
$$c_q=q+1-\sum_{j=1}^r\max(0,q-d_j+1),\qquad
q_0=\min\{q:c_q\le0\}.$$
Then $q_0\le d_1+d_2-1$, and the complete answer is
$$\mathrm{Hilb}_{S/(f_1,\ldots,f_r)}(t)
 =\sum_{q=0}^{q_0-1}c_qt^q
 =\left[\frac{\prod_j(1-t^{d_j})}{(1-t)^2}\right]_+.$$
This treats arbitrary, unequal degrees. It makes no assertion resolving the unrestricted higher-dimensional Fröberg conjecture.

These are established positive cases, already identified in the supplied source after Conjecture 2.2. We supply a proof that reduces the binary statement to the known all-ideal binary SLP theorem, carefully distinguishing positive-part operations from truncation at the first nonpositive coefficient. No novelty is claimed.

## 1. A generator of any prescribed degree has maximal-rank multiplication

We use the established fact that every homogeneous Artinian quotient of $\mathbb C[x,y]$ has SLP (Harima–Migliore–Nagel–Watanabe, Proposition 4.4). In particular, for any such quotient $A$ and positive integer $d$, there is a linear form $\ell$ for which multiplication by $\ell^d$ has maximal rank in all degrees. Therefore multiplication by a generic form $g\in S_d$ does too: rank conditions are open, and $g=\ell^d$ witnesses their nonemptiness. Only finitely many maps are nontrivial because $A$ is Artinian.

The exact sequence for multiplication by $g$ gives
$$\dim(A/(g))_q
 =\max\{0,\dim A_q-\dim A_{q-d}\},\tag{1}$$
where $A_b=0$ for $b<0$. It is enough that $g$ be generic; it need not be a power of a linear form. In the companion prb_f7f6cb3ad4614a2fbdbba2bd993b5085 report the binary SLP theorem is proved using Wronskians and Taylor jets. Here it is a credited known input to a different Hilbert-series argument.

## 2. Induction for arbitrary binary degree lists

For $r\ge2$, the first two generic forms are coprime, so they form a regular sequence. A nonempty coprime locus is witnessed by $x^{d_1},y^{d_2}$. Their quotient has Hilbert series
$$\frac{(1-t^{d_1})(1-t^{d_2})}{(1-t)^2}$$
and is zero in degrees $q\ge d_1+d_2-1$. Every subsequent quotient is also zero in those degrees. Put $B=d_1+d_2-1$.

Suppose the first $j-1$ generators have been added, with $j\ge3$, and add a generic form of degree $d_j$. For $0\le q\le B$,
$$q-d_j\le d_1+d_2-1-d_j\le d_1-1.$$
No earlier generator occurs in a nonnegative degree below $d_1$. Thus the old quotient in degree $q-d_j$ has dimension exactly $\max(0,q-d_j+1)$. Applying (1) and inducting gives
$$\dim(S/(f_1,\ldots,f_j))_q
 =\max\left(0,q+1-\sum_{a=1}^j\max(0,q-d_a+1)\right)\tag{2}$$
for $0\le q\le B$. The elementary identity
$\max(0,\max(0,u)-v)=\max(0,u-v)$ for $v\ge0$ justifies the induction even after a zero has appeared. At degrees above $B$ the quotient is already zero.

The induction describes a nonempty Zariski open set of tuples, rather than merely a special example. On the open set where the previous Hilbert function is fixed, the finitely many maximal-rank conditions for the next multiplication map are open; the SLP witness shows that they are nonempty. These conditions can also be expressed through minors of the relevant graded presentation matrices. Repeating the argument gives the generic tuple in the precise sense of the prompt.

## 3. Why this is the prompt's truncation

Before degree $d_1+d_2$, no product $t^{d_u+d_v}$ in the numerator contributes. Hence the raw product coefficient in degree $q\le B$ is exactly $c_q$.

For $q<d_1$, $c_q=q+1>0$. Between the first and second generator degrees it is positive and constant or nonincreasing. From the second generator onward, it decreases: explicitly
$$c_{q+1}-c_q=1-\#\{j:d_j\le q+1\}.$$
Also
$$c_B\le (B+1)-d_2-d_1=0.$$
Thus the first nonpositive raw coefficient occurs at some $q_0\le B$. Before that point, (2) equals the raw product; from that point to $B$, (2) is zero; above $B$ the quotient remains zero. Later raw coefficients are discarded, even if positive again. This is exactly the prompt's first-nonpositive truncation, not a coefficientwise deletion rule for the full raw series.

For example, degrees $(2,3,4)$ give $\mathrm{Hilb}=1+2t+2t^2+t^3$, while degrees $(3,3,5,5)$ give $1+2t+3t^2+2t^3+t^4$. The degree-five generators in the latter case occur after the quotient has vanished and do not change it.

## 4. Principal, univariate and regular-sequence boundaries

For $n=2$, $r=1$, a nonzero degree-$d$ form is a nonzerodivisor, and the untruncated series $(1-t^d)/(1-t)^2$ has positive coefficients in every degree. This handles the non-Artinian binary case separately.

For $n=1$, every nonzero homogeneous form is a nonzero scalar times a power of $x$. The ideal is $(x^a)$ where $a=\min d_i$, so its series is $1+t+\cdots+t^{a-1}$. The raw product divided by $1-t$ has coefficient one below $a$ and a nonpositive coefficient at $a$, giving precisely the required truncation.

For any $n$ and $r\le n$, generic forms are a regular sequence. The monomial tuple $x_1^{d_1},\ldots,x_r^{d_r}$ witnesses the nonempty regular-sequence locus. Successive nonzerodivisors give the product formula. If $r<n$, its Hilbert function is positive in every degree; if $r=n$, it is the Hilbert polynomial of the monomial box, positive through degree $\sum(d_i-1)$ and zero afterwards. The prompt's truncation therefore leaves exactly the same series.

## 5. Exact certificates, prior scope and limitations

Run `python verify.py`. It checks 251 sorted binary degree profiles with $1\le r\le5$ and $1\le d_i\le5$, using exact rational ranks of graded ideal matrices for the explicit unequal-degree witness $((x+y)^{d_1},(x+2y)^{d_2},\ldots)$. There are 1,368 binary degree checks, including 246 finite-cutoff profiles. It separately checks the univariate truncation for all 251 profiles and 1,203 monomial complete-intersection degree counts with $n\le4$. The stored results include sample Hilbert values and cutoff degrees. The universal argument is the proof above, not an extrapolation from these computations.

The earlier prb_e6dd74c21862415ea76d0cfb113412a9 contribution compared equal-degree powers of generic forms with ordinary generic forms. This report answers the separate arbitrary-degree generic-form question and does not assert a new discovery of the overlapping equal-degree binary case. The binary SLP input is shared with the present companion prb_f7f6cb3ad4614a2fbdbba2bd993b5085; the Hilbert-series induction and cutoff argument are the additional content here.

No claim is made that every binary ideal with the same generator degrees has this Hilbert function: the degrees do not specify its syzygies. No new result is asserted for generic ideals with $n\ge3$ and $r>n$.

## Checked references

1. Official prb_38b20ffcafc941448e8b51deb6b15a3d prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_38b20ffcafc941448e8b51deb6b15a3d.txt .
2. R. Fröberg, S. Lundqvist, A. Oneto and B. Shapiro, *Algebraic Stories from One and from the Other Pockets*, arXiv:1801.01692, Section 2, Conjecture 2.2 and the following paragraph: https://arxiv.org/pdf/1801.01692 . The source already records $n\le2$ and $r\le n$ as known positive cases, crediting Fröberg (1985) for the binary case. That original 1985 proof is not represented as independently read here.
3. T. Harima, J. C. Migliore, U. Nagel and J. Watanabe, *The Weak and Strong Lefschetz Properties for Artinian K-Algebras*, arXiv:math/0208201v1, Proposition 4.4: https://arxiv.org/pdf/math/0208201 . This is the exact binary SLP theorem used in Section 1.

Prepared by OpenAI Codex (GPT-6; exact serving revision and reasoning configuration unknown), authoring instance `/root/twoquad_audit`, for source research, mathematical exposition and exact verification. Gaven prompted the work and authorized preparation. No human mathematical review or editorial acceptance is claimed.


## Reproducibility and review

251 binary degree profiles; 1368 rational rank degree checks; 246 finite cutoffs; 251 univariate profiles; 1203 complete-intersection degree counts. All passed. Standard-library exact rational arithmetic;  Python -O guard present.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_38b20ffcafc941448e8b51deb6b15a3d.txt
https://arxiv.org/pdf/1801.01692
https://arxiv.org/pdf/math/0208201
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
