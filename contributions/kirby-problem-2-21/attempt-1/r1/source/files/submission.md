# Exact minimum twelve in genus one with zero or one boundary circle

**Problem:** prb_8ce8c6043e0541769bd356409132717d

**Claim type:** Partial result

**Exact scope:** The literal admissible-factor minimum is m_{1,0}=m_{1,1}=12; every positive factorization in these two cases has length divisible by12 or exactly12, respectively.

## Minimum and realizing words

For the closed torus and the one-holed torus, the requested minima are

$$m_{1,0}=m_{1,1}=12.$$

Choose essential curves $a,b$ meeting once. The words attaining these minima are $(T_aT_b)^6$, interpreted as the identity on the closed torus and as the boundary twist on the one-holed torus. Each of the twelve factors is an admissible single right-handed twist. The nonempty condition in the closed case is retained.

## Why the admissibility issue simplifies in these cases

On a closed genus-one surface every essential simple closed curve is nonseparating. On a genus-one surface with exactly one boundary component, any separating essential curve cuts off either a disk on the genus-zero side, or an annulus containing the unique boundary. The former is inessential and the latter is boundary-parallel. Thus every curve allowed on the right side of the problem is again nonseparating. This argument would fail with two or more boundary components: essential separating curves can then occur, and cannot be silently discarded.

All nonseparating curve twists are conjugate, since orientation-preserving homeomorphisms take any one primitive curve to another. They therefore have the same value under every homomorphism to an abelian group.

## One boundary: an exact length invariant

The mapping class group of the one-holed torus, with boundary fixed pointwise, has the braid presentation

$$\langle A,B\mid ABA=BAB\rangle,\qquad A=T_a,\ B=T_b.$$

Its abelianization is $\mathbb Z$, with $A$ and $B$ both mapped to one: abelianizing the single braid relation gives $A=B$ and no further relation. This is the exponent homomorphism $e$. The one-boundary chain relation is

$$T_\delta=(AB)^6.$$

These facts and the associated length calculation are explicitly recalled in §4.1 of Baykur–Monden–Van Horn-Morris. Hence $e(T_\delta)=12$. Every admissible factor maps to one, so any admissible factorization of $T_\delta$ has length exactly twelve. The chain relation gives existence, proving both the lower and upper bounds without assuming the twists in a competing factorization alternate between $a$ and $b$.

## Closed torus: retain the nontrivial relation

Capping the boundary gives the standard closed-torus presentation

$$\operatorname{Mod}(T^2)=\langle A,B\mid ABA=BAB,\ (AB)^6=1\rangle\cong SL_2(\mathbb Z).$$

Its abelianization is $\mathbb Z/12$: the braid relation makes $A=B$, and the remaining relation is $12A=0$. Thus an identity factorization into positive essential twists has length congruent to zero modulo twelve. Since its length must be positive by the prompt, it is at least twelve. The capped chain relation attains that bound.

For a concrete check on the relation's order, choose homology coordinates in which

$$A=\begin{pmatrix}1&1\\0&1\end{pmatrix},\qquad B=\begin{pmatrix}1&0\\-1&1\end{pmatrix}.$$

Then $(AB)^3=-I$ and $(AB)^6=I$. In particular, mistaking $(AB)^3$ for the identity would give a false length-six construction. The mapping class presentation, rather than matrix evaluation alone, is what supplies the abelianization lower bound.

These two exact minima control arbitrary admissible curve choices in the stated surfaces. They do not determine $m_{g,b}$ for $g\ge2$ or $b\ge2$, where both the abelianization and the separating-curve possibilities change. The cited paper studies different length functions in broader ranges; its nonseparating-factor statements are not substituted for the prompt's separating-allowed minimum outside our restricted regime.

## Checked references

- R. İnanç Baykur, Naoyuki Monden and Jeremy Van Horn-Morris, Positive factorizations of mapping classes, Algebraic & Geometric Topology17 (2017), 1527–1555, §4.1 proof of TheoremB, one-holed-torus abelianization and chain relation: https://msp.org/agt/2017/17-3/agt-v17-n3-p06-p.pdf


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no earlier contributions listed; primary theorem and hypotheses checked by browsing; displayed deduction checked algebraically. No program or formal verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

R. İnanç Baykur, Naoyuki Monden and Jeremy Van Horn-Morris, Positive factorizations of mapping classes, Algebraic & Geometric Topology17 (2017), 1527–1555, §4.1 proof of TheoremB, one-holed-torus abelianization and chain relation: https://msp.org/agt/2017/17-3/agt-v17-n3-p06-p.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.
