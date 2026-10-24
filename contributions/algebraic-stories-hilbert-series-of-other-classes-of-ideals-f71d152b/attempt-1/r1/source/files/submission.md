# TOP-1500010: the five-generator partition $(13,1)$ gives a negative answer

**Claim type:** Full disproof of the stated universal assertion, credited to existing literature.  
**Parameters:** $n=3$, $r=5$, $d=14$, $\mu=(13,1)$. **Field:** $\mathbb C$.

Let

$$I=(L_1^{13}M_1,\ldots,L_5^{13}M_5)\subset S=\mathbb C[x,y,z],$$

where each $L_i,M_i$ is a nonzero linear form and $M_i$ is not proportional to $L_i$. In particular this includes general tuples of the required non-pure partition. Then

$$\dim(S/I)_{24}\ge1,
\qquad [t^{24}]\left[\frac{(1-t^{14})^5}{(1-t)^3}\right]_+=0. \tag{1}$$

This disproves the catalogue statement. Boris Shapiro's September 2026 preprint [Sh, Theorem 1.3] gives this counterexample and a stronger exact-series assertion. We give the short geometric proof of (1) in full; we do not claim novelty, the first possible failure, or an independent verification of the preprint's larger minimality certificate.

## 1. A differential pairing and the elementary divisibility comparison

Use the dual polynomial ring $T=\mathbb C[X,Y,Z]$, with $S$ acting by constant-coefficient differentiation. The degree-$q$ pairing

$$S_q\times T_q\longrightarrow\mathbb C,\qquad (D,F)\longmapsto D(\partial)F$$

is perfect: in monomial bases its diagonal entries are nonzero factorials. Thus a nonzero degree-$q$ polynomial annihilated by $I_q$ proves that $(S/I)_q$ is nonzero.

Set $J=(L_1^{13},\ldots,L_5^{13})$. Since $I\subseteq J$, it suffices to find a nonzero element orthogonal to $J_{24}$. Write $P_i\in\mathbb P^2$ for the point whose coordinates are the coefficients of $L_i$.

The following special case of the inverse-system correspondence can be proved directly. If a homogeneous degree-24 dual form $F$ vanishes to order at least 12 at $P_i$, then

$$L_i(\partial)^{13}F=0. \tag{2}$$

To see this, make dual coordinates in which $P_i=[1:0:0]$ and its directional operator is $\partial_X$, up to a nonzero scalar. Vanishing to order 12 means every monomial of $F$ has combined $Y,Z$ exponent at least 12. Its $X$ exponent is therefore at most 12, so its thirteenth $X$ derivative vanishes. This property is preserved by invertible coordinate changes. Every element of $J_{24}$ is a sum of $L_i^{13}A_i$ with $A_i\in S_{11}$; commuting the differential operators in (2) shows that it annihilates $F$.

## 2. A conic supplies the nonzero annihilator

The space of ternary quadrics has dimension six. Requiring a quadric to vanish at each of five projective points imposes at most five homogeneous linear conditions. Therefore a nonzero quadric $Q\in T_2$ through $P_1,\ldots,P_5$ always exists. Independence of those conditions and smoothness of the conic are unnecessary.

The polynomial

$$F=Q^{12}\in T_{24}$$

is nonzero because $T$ is a domain, and it vanishes to order at least 12 at each $P_i$. Section 1 consequently makes it a nonzero annihilator of $J_{24}$ and $I_{24}$. This proves the left side of (1).

This is stronger than producing one exceptional tuple: the lower bound holds for every tuple of the indicated form, regardless of the $M_i$. Hence it holds on the generic locus required by the catalogue, including its within-product distinctness requirement.

## 3. The proposed coefficient is zero

At degree 24 there are no contributions from terms $t^{28}$ or higher in the numerator. The untruncated coefficient is

$$\binom{26}{2}-5\binom{12}{2}=325-330=-5.$$

A nonpositive coefficient forces its positive truncation to be zero there, whether or not an earlier coefficient has already stopped the series. This proves the other half of (1). The attached verifier additionally checks that 24 is the first nonpositive degree of this particular predicted series.

The argument does not assume Fröberg's conjecture in any unproved number of variables. It directly contradicts the explicit product formula asked by the catalogue. The non-pure partition is genuinely allowed: $(13,1)\ne(14)$.

## 4. An explicit exact certificate

For reproducibility choose the five coefficient points

$$ (1,0,0),\ (0,1,0),\ (0,0,1),\ (1,1,1),\ (1,2,3).$$

They lie on

$$Q=3XY-4XZ+YZ.$$

The standard-library program expands $Q^{12}$ using integer coefficients, checks that $Q$ vanishes at all five points, and independently applies each directional differential operator $(a\partial_X+b\partial_Y+c\partial_Z)^{13}$ by repeated sparse differentiation. All five resulting polynomials are exactly zero. It also constructs the integer apolar pairings against every $L_i^{13}S_{11}$ basis product and verifies they vanish. No numerical rank or approximate root computation is used.

Run `python3 verify_conic.py`; `verification.json` records the points, conic, nonzero term count, zero derivatives and predicted coefficients. This explicit specialization validates the algebra. The generic assertion comes from the all-five-points existence argument in Section 2, not from extrapolating its numerical output.

The general assertion is therefore false. This report does not classify all partitions or generator counts, prove that degree 14 is minimal, or independently establish the exact whole Hilbert series reported in [Sh].

## Checked references

- Boris Shapiro, *Generic $\mu$-power ideals, fat points, and symbolic powers*, [arXiv:2609.27965v2](https://arxiv.org/html/2609.27965v2), 26 September 2026, Theorem 1.3 and Proposition 2.3. Preprint. The conic obstruction used here is explicitly credited there; the supplied proof is self-contained. Metadata checked at [arXiv:2609.27965](https://arxiv.org/abs/2609.27965).
- Ralf Fröberg, Samuel Lundqvist, Alessandro Oneto and Boris Shapiro, *Algebraic Stories from One and from the Other Pockets*, Arnold Mathematical Journal 4 (2018), 137–160, [published PDF](https://amj.math.stonybrook.edu/pdf-Springer-final/018-0088.pdf), Section 2.2, Problem F, for the original question.
- [Official TOP-1500010 prompt](https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1500010.txt), checked 18 October 2026, for the precise non-pure-partition and genericity requirements.


Preparation and review: OpenAI Codex (GPT-6; exact serving revision and reasoning configuration unknown) supplied the authoring, exact-code verification, independent LLM audit and coordination/source checks through separate instances. Gaven prompted the work and authorized submission. No human mathematical review or editorial acceptance is claimed.


## Reproducibility and review

Fresh exact integer expansion of Q^12 with 91 nonzero terms, five 13th directional derivatives zero, and 390 factorial-weighted apolar pairings zero; predicted first nonpositive degree 24 with raw coefficient -5.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify_conic.py


*Code is not included in this manuscript.*

## References

https://arxiv.org/html/2609.27965v2
https://arxiv.org/abs/2609.27965
https://amj.math.stonybrook.edu/pdf-Springer-final/018-0088.pdf
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1500010.txt
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
