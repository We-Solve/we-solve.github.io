# prb_ddaa33d1096e4ede92998d652a294948: a concrete counterexample outside the catalogue's exception list

**Claim type:** Literature report. **Scope:** The proposed universal equality is false, by a credited counterexample with five variables, nine generators and exponent 66. The original contribution here is the explicit parameter translation and exact coefficient bookkeeping, not a new counterexample theorem.

Write $S=\mathbb C[x_1,\ldots,x_5]$ and let $L_1,\ldots,L_9$ be general linear forms. Put

$$A=S/(L_1^{66},\ldots,L_9^{66}).$$

The conclusion is

$$\dim A_{153}>760705,
\qquad [t^{153}]\left[\frac{(1-t^{66})^9}{(1-t)^5}\right]_+=760705. \tag{1}$$

This parameter triple is allowed by the catalogue: $(n,r)=(5,9)$ is none of $(3,7),(3,8),(4,9),(5,14)$, and $9$ is neither $5+2$ nor $5+3$. The result concerns general linear forms, not a specially chosen exceptional configuration.

## 1. The precise literature input

Chandler [C, Section 10, especially pp.35–36 and Proposition 10.1] proves strict failure of the predicted fat-point Hilbert function for the relevant family. Her projective dimension is denoted $n$, her fat-point multiplicity $k$, and her polynomial degree $m$; these differ from the catalogue's variable count and power exponent. The case used here is

$$n=4,\quad k=88,\quad m=153,\quad \text{number of points}=n+5=9.$$

The criterion in that section consists of inequalities (8)–(10). Its strict conclusion is that the Hilbert function of nine general 88-fat points in $\mathbb P^4$ is smaller than the predicted fat-point value in degree 153. We use that established geometric result; we do not claim a new proof of Chandler's obstruction theorem or an independently computed Hilbert matrix of this size.

Here is the complete arithmetic needed for its application. Her sufficient inequality (11) for (8) holds because

$$9\binom{91}{4}=24054030\le\binom{157}{4}=24359335.$$

Inequality (9) holds because

$$7\cdot88=616\ge4\cdot153+2=614.$$

Inequality (10) holds because

$$8(2\cdot88-1-153)=176\le(88-1)3+1=262.$$

Also $153=\lfloor(7\cdot88-2)/4\rfloor$, exactly the degree selected in Section 10. Thus this is an explicit instance of the proved strict inequality, rather than an unspecified large-degree assertion.

## 2. Translation to the power ideal

Let $Z=88P_1+\cdots+88P_9$ for the dual points $P_i\in\mathbb P^4$ associated with the coefficients of $L_i$. Denote the Hilbert function of its coordinate ring by

$$H_Z(q)=\dim S_q-\dim(I_Z)_q.$$

The apolarity correspondence gives

$$\dim\bigl(S/(L_1^{q-88+1},\ldots,L_9^{q-88+1})\bigr)_q
=\dim(I_Z)_q=\binom{q+4}{4}-H_Z(q). \tag{2}$$

This is Chandler's Theorem 4.6. At $q=153$, the exponent is $153-88+1=66$, and the number of variables is the projective dimension plus one, namely five. Definition 8 in the same source gives the identical complementary relation between the predicted fat-point value $G_Z(q)$ and the predicted power-ideal coefficient $F(q)$:

$$G_Z(153)=\binom{157}{4}-F(153).$$

Consequently Chandler's strict inequality $H_Z(153)<G_Z(153)$ reverses after taking complements and gives $\dim A_{153}>F(153)$. This reversal matters: a smaller coordinate-ring Hilbert function of the fat points means a larger space of vanishing forms, hence a larger power-ideal quotient.

## 3. Exact coefficient and truncation

For every $q\ge0$, the untruncated coefficient is

$$c(q)=\sum_{j=0}^9(-1)^j\binom9j\binom{q-66j+4}{4},$$

where a binomial coefficient is zero when its upper argument is below four. At degree 153 only $j=0,1,2$ contribute:

$$c(153)=\binom{157}{4}-9\binom{91}{4}+36\binom{25}{4}=760705.$$

It is essential to check that an earlier nonpositive coefficient has not already truncated the series. The accompanying integer program checks every coefficient from degree zero through 155. All $c(q)$ with $0\le q\le154$ are positive, and $c(155)<0$. Thus the positive truncation retains degree 153, and its value there is exactly the number in (1). No unproved instance of the ordinary generic-forms Fröberg conjecture is required: the catalogue explicitly proposes this truncated series, which is what is contradicted.

## 4. Relation to the 2026 preprint and limitations

Boij–Lundqvist [BL, Theorem 4.5] also reports failures in arbitrary sufficiently large variable count for every fixed excess number of generators and fixed exponent at least two. For excess at least four these lie beyond the catalogue's two moving exception families. We do not use that asymptotic statement to obtain (1), and we do not infer a numerical threshold from it.

There is a version-specific notation issue worth isolating: [BL v1, Theorem 4.3] labels its degree as the actual power-ideal degree, while its proof tracks the first nonpositive coefficient of the predicted series. Those cannot be identified without qualification; its own exact $n+2$-generator degree formula already distinguishes them. Accordingly this report does not repeat that displayed asymptotic formula as a theorem about the actual degree. Its concrete disproof instead rests on the older primary result and the fully specified arithmetic above.

Run `python3 verify_counterexample.py` to reproduce the integer parameters, exceptional-range checks, coefficient list, first truncation degree and the strict lower bound $\dim A_{153}\ge760706$ obtained from the literature inequality. The program verifies arithmetic and translation; it does not independently prove Chandler's geometric theorem. No full determination of all power-ideal Hilbert series, mathematical priority, human review, or editorial acceptance is claimed.

## Checked references

- [C] Karen A. Chandler, *The geometric interpretation of Fröberg–Iarrobino conjectures on infinitesimal neighbourhoods of points in projective space*, [arXiv:math/0309333v1](https://arxiv.org/pdf/math/0309333), 19 September 2003. Checked Theorem 4.6, Definition 8 and Section 10, especially its inequalities and Proposition 10.1. Published version: Journal of Algebra 286 (2005), 421–455, DOI [10.1016/j.jalgebra.2005.01.010](https://doi.org/10.1016/j.jalgebra.2005.01.010). Numbering here refers to the inspected preprint.
- [BL] Mats Boij and Samuel Lundqvist, *On the Hilbert series of ideals generated by powers of general linear forms*, [arXiv:2608.22823v1](https://arxiv.org/html/2608.22823v1), 24 August 2026, Sections 3–4. Preprint. Its metadata title omits “powers of”; its PDF/HTML title includes those words. Used for the recent context and the identified notation issue, not for the concrete inequality (1).
- [Official prb_ddaa33d1096e4ede92998d652a294948 prompt](https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_ddaa33d1096e4ede92998d652a294948.txt), checked 18 October 2026, for the exact universal assertion and its excluded parameter pairs.


Preparation and review: OpenAI Codex (GPT-6; exact serving revision and reasoning configuration unknown) supplied the authoring, exact-code verification, independent LLM audit and coordination/source checks through separate instances. Gaven prompted the work and authorized submission. No human mathematical review or editorial acceptance is claimed.


## Reproducibility and review

Fresh exact integer check of Chandler inequalities, parameter conversion, all raw coefficients from 0 through 155, first nonpositive degree 155 and predicted degree-153 coefficient 760705. Does not compute the actual large Hilbert matrix; the strict inequality is a credited theorem.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify_counterexample.py


*Code is not included in this manuscript.*

## References

https://arxiv.org/pdf/math/0309333
https://arxiv.org/html/2608.22823v1
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_ddaa33d1096e4ede92998d652a294948.txt
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
