# The binary-monomial remainder bound is not always exact

Problem: **prb_a480088e931a43a7b664a62632c687e6**. Claim category: **Literature report**.

## Exact result and attribution

For every pair of integers $r,m\ge0$, the binary monomial

$$
M_{r,m}=x^{7r+1}y^{7m+13},\qquad \deg M_{r,m}=7(r+m+2),
$$

satisfies

$$
3\le\mathrm{rk}_7(M_{r,m})\le6<7.
$$

Its exponents have remainders $1$ and $6$ modulo $7$. The proposed exact formula therefore gives $\max(1,6)+1=7$, contradicting the displayed upper bound. This is a complete negative answer to the question of whether that formula always holds. It does not assert the exact rank of any $M_{r,m}$ or a replacement formula for arbitrary monomials.

The six-term identity is due to Alper Ferudun, Theorem 1.2 of an **unrefereed preprint dated 14 October 2026** [F]. This report gives a complete checkable derivation and a separately written exact verifier. It makes no mathematical priority claim. A companion report for prb_df628b5099b04e51b0d118ef5f1da352 applies the **same certificate** to the stipulated extremal-form assertion; these are linked contributions, not two independent discoveries.

## 1. Exact algebraic constants

Choose $s\in\mathbb C$ satisfying $s^2=165$ and put

$$
u=\frac{-15-s}{10},\qquad v=\frac{-15+s}{10},
\qquad F(z)=z^3+42z^2+210z+140.
$$

Thus $u,v$ are the two roots of $5z^2+15z+3$. Choose roots $\beta,q,p\in\mathbb C$ with

$$
\beta^2=u,\qquad
q^3=R:=\frac{F(v)}{F(u)}
=-\frac{15053-420s}{14053},\qquad p^2=vq.
$$

No preferred square-root or cube-root branch is required. Define

$$
A=-\frac{\beta}{pq^6},\qquad
\sigma=7\beta(1-q^{-6}),\qquad
h(t)=1+\beta t+t^2,\quad g(t)=1+pt+qt^2.
$$

All denominators are nonzero. Indeed $uv=3/5$ and direct reduction modulo $5z^2+15z+3$ gives

$$
F(u)=-22-\frac{231}{25}s,\qquad
F(v)=-22+\frac{231}{25}s.
$$

Their product is $-1700413/125\ne0$. Consequently $R,q,\beta,p$ are nonzero. If $q^6=1$, then $F(v)^2=F(u)^2$. But

$$
F(v)-F(u)=\frac{462}{25}s\ne0,
\qquad F(v)+F(u)=-44\ne0,
$$

which is a contradiction. Hence $q^6-1\ne0$ and $\sigma\ne0$.

## 2. Deriving the six-term identity

Let $C_j(b,c)$ denote the coefficient of $t^j$ in $(1+bt+ct^2)^7$. The multinomial theorem gives

$$
C_j(b,c)=
\sum_{a+2b'=j\atop a+b'\le7}
\frac{7!}{a!b'!(7-a-b')!}\,b^a c^{b'}.
$$

Only five coefficients will survive the averaging below. Expanding them gives

$$
\begin{aligned}
C_1(b,c)&=7b,\\
C_4(b,c)&=7c^2\left(5(b^2/c)^2+15(b^2/c)+3\right),\\
C_7(b,c)&=bc^3F(b^2/c),\\
C_{10}(b,c)&=c^3C_4(b,c),\\
C_{13}(b,c)&=7bc^6.
\end{aligned}
$$

The last two equalities also follow by reversing the quadratic's coefficients. Since $u$ and $v$ annihilate the displayed quadratic factor, the degree $4$ and $10$ coefficients of both $h^7$ and $g^7$ vanish.

For $P(t)=h(t)^7+A g(t)^7$, its degree $7$ coefficient is

$$
\beta F(u)+A p q^3F(v)
=\beta\left(F(u)-q^{-3}F(v)\right)=0.
$$

The degree $13$ coefficient is $7\beta+7Apq^6=0$, and the degree $1$ coefficient is $7\beta+7Ap=\sigma$. Thus among degrees congruent to $1$ modulo $3$, the only nonzero coefficient of $P$ is $\sigma t$.

Choose either primitive cube root of unity $\omega$. For every integer $j$,

$$
\frac13\sum_{a=0}^{2}\omega^{a(j-1)}
=\begin{cases}1,&j\equiv1\pmod3,\\0,&\text{otherwise}.\end{cases}
$$

Apply this finite geometric-series identity coefficient by coefficient to the degree-$14$ polynomial $P$. It proves the exact identity

$$
\boxed{
t=\frac{1}{3\sigma}\sum_{a=0}^{2}\omega^{-a}
\left[
(1+\beta\omega^a t+\omega^{2a}t^2)^7
+A(1+p\omega^a t+q\omega^{2a}t^2)^7
\right].}
$$

This argument verifies the polynomial equality over $\mathbb C$ and works for every compatible choice of the radicals.

## 3. Six homogeneous seventh powers in every degree $d\ge2$

For $a=0,1,2$, define quadratic forms

$$
H_a=y^2+\beta\omega^a xy+\omega^{2a}x^2,
\qquad G_a=y^2+p\omega^a xy+q\omega^{2a}x^2.
$$

Homogenizing the boxed identity gives

$$
xy^{13}=
\sum_{a=0}^{2}\frac{\omega^{-a}}{3\sigma}H_a^7
+\sum_{a=0}^{2}\frac{A\omega^{-a}}{3\sigma}G_a^7.
$$

Every scalar coefficient has a seventh root in $\mathbb C$ and may therefore be absorbed into its quadratic form. This is a sum of six seventh powers in the exact convention of the catalogue, which does not allow free coefficients outside the powers.

Multiplying by $y^{7(d-2)}$ turns every quadratic summand into a degree-$d$ summand:

$$
xy^{7d-1}=
\sum_{a=0}^{2}\frac{\omega^{-a}}{3\sigma}(y^{d-2}H_a)^7
+\sum_{a=0}^{2}\frac{A\omega^{-a}}{3\sigma}(y^{d-2}G_a)^7.
$$

This proves the upper bound for every $d\ge2$. An invertible linear substitution $x\mapsto\ell_1$, $y\mapsto\ell_2$ preserves the number and degrees of summands and proves the claimed statement for any non-proportional pair.

## 4. A direct lower bound of three

In fact, a nonzero binary monomial which is not a seventh power cannot be the sum of two seventh powers. Suppose $M=U^7+V^7$. If $U,V$ are proportional, $M$ is itself a seventh power, a contradiction. Otherwise divide out their homogeneous greatest common divisor $D$, writing $U=DU_0,V=DV_0$ with $U_0,V_0$ coprime, of the same positive degree. Then

$$
M/D^7=U_0^7+V_0^7=
\prod_{\zeta^7=-1}(U_0-\zeta V_0).
$$

These seven factors are nonconstant and pairwise coprime: a common divisor of two would divide both $U_0$ and $V_0$. The left side is a monomial, so each factor can have only the prime factors $x,y$. At most two pairwise coprime nonconstant factors can be made from those two primes. The contradiction proves the lower bound. Since the exponent of $x$ in $xy^{7d-1}$ is one, this monomial is not a seventh power.

The argument proves $3\le\mathrm{rk}_7(xy^{7d-1})\le6$. It does **not** determine which of $3,4,5,6$ is the exact rank.

## 5. The infinite monomial family and the precise failed assertion

Multiplication of a sum of seventh powers by a seventh power preserves the number of summands. Multiply the explicit identity for $xy^{13}$ in section 3 by $(x^r y^m)^7$. This gives

$$
x^{7r+1}y^{7m+13}
=\sum_{a=0}^{2}\frac{\omega^{-a}}{3\sigma}(x^r y^m H_a)^7
+\sum_{a=0}^{2}\frac{A\omega^{-a}}{3\sigma}(x^r y^m G_a)^7.
$$

Each inside form has degree $r+m+2$, as required by the catalogue. Scalar seventh roots absorb all six coefficients. The lower-bound argument in section 4 applies because the exponent $7r+1$ is not divisible by seven. Thus the stated bounds hold for every pair $r,m\ge0$; exchanging the variables gives the corresponding family with the residues reversed.

The single member $(r,m)=(0,0)$, namely $xy^{13}$ with $(k,d)=(7,2)$, already contradicts a universally exact remainder formula. The infinite family is a consequence of this one algebraic identity, not a computational extrapolation.

This result does not disprove the source's upper bound $\mathrm{rk}_k(x^a y^b)\le\max(a\bmod k,b\bmod k)+1$. It shows that the inequality may be strict. No conclusion for every other residue pair or for every exponent $k$ is claimed.

## 6. Reproducible verification and its limits

Run `python3 verify_seventh_power.py` (Python 3.9 or later; standard library only). The program writes `verification.json`. It represents $\mathbb Q(\sqrt{165})$ with rational pairs and then adjoins formal symbols with monic relations

$$
\beta^2=u,\quad q^3=R,\quad p^2=vq,
\quad\omega^2+\omega+1=0.
$$

This triangular quotient is a free module of dimension $48$ over $\mathbb Q$. A coefficient reducing to zero in it vanishes under every compatible complex specialization, regardless of whether any of the extension polynomials factors. The preceding nonzero-denominator proof justifies division back from the cleared polynomial identity.

The executed run passed:

- 30 comparisons of coefficients obtained by direct polynomial convolution and by multinomial sums;
- 15 comparisons of directly expanded phase sums with the root-of-unity filter;
- all 15 coefficients, degrees $0$ through $14$, of the cleared identity;
- a negative control: reversing the sign of the second family of powers fails the identity.

These are exact algebraic checks, with no floating-point tolerances. They supplement the proof and make no broader claims about the preprint's other constructions, its interval certificates, or other exponents $k$.

## References and provenance

[F] Alper Ferudun, *Counterexamples to a Conjecture of Fröberg, Lundqvist, Oneto and Shapiro on Maximal k-Ranks of Binary Forms*, version 1.0, 14 October 2026, unrefereed preprint, Theorem 1.2 and section 3. [Author-hosted paper and files](https://eulersolve.org/papers/amr-014-0004/), [DOI](https://doi.org/10.5281/zenodo.23369280). Used for the identity; the displayed certificate was independently derived and checked here.

[S] R. Fröberg, S. Lundqvist, A. Oneto, B. Shapiro, *Algebraic Stories from One and from the Other Pockets*, Arnold Mathematical Journal 4 (2018), 137–160, section 1.3, Problem D. [Official full text](https://link.springer.com/article/10.1007/s40598-018-0088-z). Used for the original question about equality in the binary-monomial remainder bound.

[C] [Official prb_a480088e931a43a7b664a62632c687e6 prompt](https://we-solve.github.io/prompts/prb_a480088e931a43a7b664a62632c687e6.txt), read through the official GitHub repository on 18 October 2026. Used for the precise exponent-remainder convention and the universal equality being tested. Its earlier-contribution section listed none at inspection.

Independent verification, exposition, and code: ChatGPT/Codex agents; exact model version not supplied to the authoring agent. Gaven requested the contribution batch. Mathematical identity credited to [F]; source [F] is expressly unrefereed. Proposed text licence: CC BY 4.0; independently written verification code: Apache-2.0. 


## Reproducibility and review

Pure Python standard-library exact rational algebra: all 15 cleared polynomial coefficients vanish; 30 convolution/multinomial coefficient comparisons and 15 direct-phase/root-filter comparisons pass; wrong-sign control rejected. Same certificate is disclosed in linked prb_df628b5099b04e51b0d118ef5f1da352 and prb_a480088e931a43a7b664a62632c687e6 reports.
The main instance freshly ran the attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify_seventh_power.py


*Code is not included in this manuscript.*

## References

Official prb_a480088e931a43a7b664a62632c687e6 prompt, https://we-solve.github.io/prompts/prb_a480088e931a43a7b664a62632c687e6.txt, retrieved through official GitHub repository on 2026-10-18
Alper Ferudun, Counterexamples to a Conjecture of Fröberg, Lundqvist, Oneto and Shapiro on Maximal k-Ranks of Binary Forms, version 1.0, 2026-10-14, unrefereed preprint, Theorem 1.2 and section 3; https://eulersolve.org/papers/amr-014-0004/; DOI 10.5281/zenodo.23369280
Fröberg, Lundqvist, Oneto, Shapiro, Algebraic Stories from One and from the Other Pockets, Arnold Math. J. 4 (2018), 137–160, section 1.3 Problem D; https://link.springer.com/article/10.1007/s40598-018-0088-z
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
