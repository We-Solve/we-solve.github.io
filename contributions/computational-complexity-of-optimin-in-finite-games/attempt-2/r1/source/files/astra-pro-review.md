## Verdict

**My assessment is that Issue #883’s main theorem and its stated algorithmic corollaries are correct. It provides a substantive partial solution to the research problem, and the feedback you pasted is substantially accurate.**

I checked the complete manuscript in [Issue #883](https://github.com/We-Solve/research/issues/883), the original problem, the cited earlier contribution, and the relevant primary references. The central construction does preserve **both players’ full-game performance values**, and the subsequent exact optimization and verification arguments follow.

I would make three changes to the supplied review:

1. **Replace “nonuniform” with “uniform, with a parameter-dependent exponent,” or “XP-type.”** The algorithm is uniform; what has not been established is fixed-parameter tractability.
2. **Add the attainment argument.** Because strict deviations can make performance discontinuous, the existence of an exact maximizer needs justification. The manuscript supplies a correct upper-semicontinuity proof.
3. **Clarify the quantifier-elimination step.** The \(2r+4\) bound counts the variables in one supported hypograph. The displayed optimality formula introduces another block of comparison variables. The total remains bounded for fixed \(r\), so the polynomial-time conclusion is unaffected.

These are corrections or additions to the **review’s explanation**, not failures of the manuscript’s main theorem.

## 1. The submission addresses the intended definition

The original problem uses the baseline strategy together with **strictly profitable** unilateral deviations, and defines optimin through global Pareto nondominance of the resulting performance vector. It expressly asks for bounded-action and structural subfamilies alongside the unrestricted search problem. [we-solve](https://we-solve.github.io/problems/computational-complexity-of-optimin-in-finite-games/?utm_source=chatgpt.com)

For a bimatrix game, the manuscript uses
\[
D_1(x,y)
=
\{x\}\cup\{q\in\Delta_n:q^\top Ay>x^\top Ay\},
\]
\[
D_2(x,y)
=
\{y\}\cup\{q\in\Delta_m:x^\top Bq>x^\top By\},
\]
and
\[
\pi_1(x,y)=\inf_{q\in D_2(x,y)}x^\top Aq,
\qquad
\pi_2(x,y)=\inf_{q\in D_1(x,y)}q^\top By.
\]

This matches Ismail’s Definitions 1–3. In particular, the use of an infimum and the separate inclusion of the baseline strategy are both appropriate. [arxiv.org](https://arxiv.org/html/1912.00211v6?utm_source=chatgpt.com)

A critical distinction runs throughout the proof:

> The support restrictions apply to the baseline profiles being searched. Every original action remains available in the deviation calculations.

The manuscript maintains this distinction. Consequently, its output is assessed in the original game.

## 2. The performance-preserving compression theorem is valid

This is the main mathematical contribution, and I agree with the feedback’s favorable assessment.

### Why replacing the row strategy preserves both performances

Fix \(y\), and suppose
\[
\widetilde x^\top A=x^\top A,
\qquad
\widetilde x^\top B=x^\top B.
\]

Write
\[
a=x^\top Ay,\qquad b=x^\top By.
\]
Both baseline payoffs are unchanged.

For player 1, the opponent’s strict-profitability condition is
\[
x^\top Bq>b.
\]
Both its left side, for every \(q\), and its right side are unchanged. The row player’s payoff against each such deviation,
\[
x^\top Aq,
\]
is unchanged as well. Thus \(\pi_1\) is preserved.

For player 2, the strictly profitable row deviations satisfy
\[
q^\top Ay>a.
\]
Here \(Ay\) is unchanged because \(y\) is fixed, and \(a\) is unchanged by assumption. Hence the **strict part** of the row-deviation set is unchanged, as are the payoffs \(q^\top By\) against those deviations.

There is a small but important subtlety: the separately permitted nondeviation point changes from \(x\) to \(\widetilde x\). The entire permitted-deviation set therefore need not be literally identical. However, the column player’s payoff at that nondeviation point remains \(b\). This is sufficient to preserve the infimum, including when no strict deviation exists.

The symmetric argument applies when replacing \(y\) by \(\widetilde y\) satisfying
\[
A\widetilde y=Ay,\qquad B\widetilde y=By.
\]

This verifies the manuscript’s invariance lemma without assuming that performance depends only on the two baseline payoffs. Preserving only those two payoffs would generally be insufficient; preserving the specified payoff vectors is what makes the argument work.

### Why both players can be compressed sequentially

Define the joint payoff vectors
\[
R_i=(A_{i,:},B_{i,:})\in\mathbb R^{2m},
\qquad
C_j=(A_{:,j},B_{:,j})\in\mathbb R^{2n}.
\]

The vector
\[
\sum_i x_iR_i
\]
contains exactly \(x^\top A\) and \(x^\top B\). Affine Carathéodory reduction therefore gives a representation using at most
\[
d_R+1,\qquad
d_R=\operatorname{affdim}\{R_1,\ldots,R_n\},
\]
row actions.

The same reasoning gives a column strategy supported on at most
\[
d_C+1,\qquad
d_C=\operatorname{affdim}\{C_1,\ldots,C_m\},
\]
actions while preserving \(Ay\) and \(By\).

The two reductions do not interfere:

1. Compress \(x\), preserving performance with \(y\) fixed.
2. Compress \(y\), preserving performance with the new row strategy fixed.

The second step does not change the row strategy or enlarge its support.

Finally,
\[
d_R\le \operatorname{rank}[A\ B]
\le \operatorname{rank}(A)+\operatorname{rank}(B),
\]
and
\[
d_C\le
\operatorname{rank}
\begin{bmatrix}
A\\ B
\end{bmatrix}
\le \operatorname{rank}(A)+\operatorname{rank}(B).
\]

Thus, with
\[
r=\operatorname{rank}(A)+\operatorname{rank}(B),
\]
every profile has an equal-performance representative satisfying
\[
\boxed{
|\operatorname{supp}(\widetilde x)|\le r+1,
\qquad
|\operatorname{supp}(\widetilde y)|\le r+1.
}
\]

The conclusion is stronger than preserving an optimal weighted value: **the entire attainable performance image is preserved**. That stronger statement is what later supports threshold feasibility and global membership testing, as well as optimization.

## 3. Strictly profitable mixed deviations are handled correctly

This is the most delicate part of the performance encoding. I found no error in the manuscript’s case split or vertex calculation.

For the column player’s potential deviations, define
\[
\alpha_j=x^\top Ae_j,
\qquad
h_j=x^\top Be_j-b.
\]

### Case A: no strictly profitable deviation exists

If
\[
\max_j h_j\le 0,
\]
then no mixed deviation can be strictly profitable, because the gain of any mixed deviation is a convex combination of the \(h_j\).

Consequently,
\[
D_2(x,y)=\{y\},
\qquad
\pi_1(x,y)=a.
\]

The manuscript’s guard correctly enforces this branch.

Replacing strict profitability by weak profitability here would change the problem. For example, take two identical rows with
\[
A=
\begin{pmatrix}
1&-1\\
1&-1
\end{pmatrix},
\qquad B=0,
\]
and baseline \(y=e_1\). No column deviation is strictly profitable, so
\[
\pi_1=1.
\]
If all weakly profitable deviations were admitted instead, column 2 would be allowed and the performance would fall to \(-1\).

The submitted formula produces the correct strict-deviation answer.

### Case B: at least one strictly profitable deviation exists

If some \(h_j>0\), then
\[
\overline{D_2(x,y)}
=
K:=\{q\in\Delta_m:h^\top q\ge0\}.
\]

The nontrivial inclusion is valid: every boundary point of \(K\) can be approached by mixing it with a positive-gain pure action. Since the payoff against \(q\) is continuous,
\[
\inf_{q\in D_2(x,y)}\alpha^\top q
=
\min_{q\in K}\alpha^\top q.
\]

This equality does **not** replace the game’s strict-deviation convention by a weak-deviation convention. It uses a closure to evaluate the same infimum, and only in the branch where a strictly profitable deviation exists.

The relevant vertices of \(K\) are:

- Pure actions \(e_j\) with \(h_j\ge0\).
- Edge crossings between actions with \(h_j>0>h_\ell\).

At such a crossing,
\[
q_j=\frac{-h_\ell}{h_j-h_\ell},
\qquad
q_\ell=\frac{h_j}{h_j-h_\ell}.
\]

Its payoff to player 1 is
\[
\frac{-h_\ell\alpha_j+h_j\alpha_\ell}{h_j-h_\ell}.
\]

Because the denominator is positive under the guard, the corresponding hypograph inequality is exactly
\[
(h_j-h_\ell)z_1
\le
-h_\ell\alpha_j+h_j\alpha_\ell.
\]

The manuscript includes these crossings and handles zero-gain pure actions correctly.

### A concrete check showing why the edge terms matter

Consider
\[
A=
\begin{pmatrix}
0&-1&1\\
0&-1&1
\end{pmatrix},
\qquad
B=
\begin{pmatrix}
1&-1&0\\
1&-1&0
\end{pmatrix},
\qquad y=e_3.
\]

The row strategy is immaterial because both rows are identical. The baseline row payoff is \(1\), and the only strictly profitable pure column deviation gives row payoff \(0\).

Nevertheless, for \(0<\varepsilon<1/2\),
\[
q_\varepsilon
=
\left(\frac12+\varepsilon,\frac12-\varepsilon,0\right)
\]
is strictly profitable for the column player and gives the row player
\[
-\frac12+\varepsilon.
\]

Therefore,
\[
\pi_1=-\frac12.
\]

The boundary mixture attaining \(-1/2\) is not itself strictly profitable, but determines the infimum. This independently derived example confirms that the manuscript’s mixed-edge calculation addresses a real issue that a pure-deviation calculation would miss.

## 4. Exact maximization requires attainment—and the manuscript proves it

The supplied feedback should discuss this explicitly.

Strict-profitability tests can cause discontinuities. It would therefore be insufficient to say “the strategy space is compact, so the objective attains a maximum” without establishing the appropriate regularity.

The manuscript establishes **upper semicontinuity**, which is enough.

Suppose
\[
(x_t,y_t)\longrightarrow(x,y).
\]

For every \(t\),
\[
\pi_1(x_t,y_t)\le x_t^\top Ay_t,
\]
so
\[
\limsup_t\pi_1(x_t,y_t)\le x^\top Ay.
\]

Now fix any column deviation \(q\) that is strictly profitable at \((x,y)\). Its profitability inequality remains strict for all sufficiently large \(t\). Consequently,
\[
\pi_1(x_t,y_t)\le x_t^\top Aq
\]
eventually, giving
\[
\limsup_t\pi_1(x_t,y_t)\le x^\top Aq.
\]

Taking the infimum over those bounds and the baseline bound yields
\[
\limsup_t\pi_1(x_t,y_t)\le\pi_1(x,y).
\]

The proof for player 2 is identical. The empty-strict-deviation case is also covered, because the baseline bound remains available.

Thus every positive weighted sum
\[
\lambda_1\pi_1+\lambda_2\pi_2
\]
is upper semicontinuous and attains a maximum on a compact support face. This is consistent with Ismail’s upper-semicontinuity and existence results, but the manuscript supplies the argument needed for its own algorithm. [arxiv.org](https://arxiv.org/html/1912.00211v6?utm_source=chatgpt.com)

A further detail is correct: strategies are supported **within** the enumerated sets, allowing some selected probabilities to be zero. These are closed faces. Requiring every selected probability to be strictly positive could destroy compactness and would complicate the attainment argument.

## 5. The polynomial bit-complexity argument is sound

### The number of unknowns really becomes bounded

For prescribed baseline support sets \(I,J\), the variables are:

- \(|I|\) row probabilities;
- \(|J|\) column probabilities;
- Two performance lower bounds \(z_1,z_2\).

Therefore,
\[
D=|I|+|J|+2\le2r+4.
\]

Actions outside the selected baseline supports still occur in the profitability tests and payoff inequalities, but they introduce **constraints rather than additional unknowns**. This is the central algorithmic benefit of the compression theorem.

The degree bound also checks out:

- Baseline payoffs \(a,b\) have degree at most two.
- Gains \(h_j,g_i\) have degree at most two.
- Deviation payoffs \(\alpha_j,\beta_i\) have degree at most one.
- The edge inequalities consequently have degree at most three.

There are \(O(n^2+m^2)\) distinct sign polynomials. The Boolean guards can be factored so that their syntax remains polynomial in size; no enumeration of exponentially many sign patterns is required.

For fixed support sizes, expanding the polynomials and clearing rational denominators produces coefficients of polynomial bit length.

### Support enumeration is polynomial for fixed \(r\)

The number of support pairs is bounded by
\[
\left(\sum_{s=1}^{r+1}\binom ns\right)
\left(\sum_{t=1}^{r+1}\binom mt\right),
\]
omitting impossible sizes.

For fixed \(r\), this is
\[
O(n^{r+1}m^{r+1}),
\]
and hence polynomial in the explicit input length.

This is a fixed-parameter-value statement: the exponent is allowed to depend on \(r\).

### Quantifier elimination provides exact optimization, not just feasibility

Let \(H(w)\) denote the supported hypograph formula, and let \(\ell(w)\) be the rational linear objective in its two performance coordinates.

A maximizing point is characterized by
\[
H(w)\ \land\
\forall v\,
\bigl(H(v)\Longrightarrow \ell(v)\le\ell(w)\bigr).
\]

This formula uses two blocks of dimension \(D\): one for the proposed maximizer and one for competing points. Thus its total variable count can be as large as
\[
2D\le4r+8.
\]

That is the precise qualification needed to the review’s \(2r+4\) discussion. It does not affect fixed-\(r\) polynomiality.

Basu’s Theorem 2.18 supplies quantifier elimination with bounds on both operation counts and intermediate/output coefficient bit lengths. For fixed numbers of variables and fixed degree, those bounds are polynomial in the formula’s remaining input parameters. [math.purdue.edu](https://www.math.purdue.edu/~sbasu/raag_survey2011_final.pdf?utm_source=chatgpt.com)

To obtain a maximizing **profile**, rather than merely a description of the maximizer set, one also needs algebraic sample-point computation. Theorem 3.6 and the paragraph immediately following it supply that ingredient, including bit-size bounds. The manuscript cites it appropriately. [math.purdue.edu](https://www.math.purdue.edu/~sbasu/raag_survey2011_final.pdf?utm_source=chatgpt.com)

The exact-output convention is also adequate: a defining polynomial, isolating information, and rational-function coordinate descriptions provide a finite algebraic representation. The theorem does not require a rational optimizer.

### One bounded action set is a valid corollary

For a \(k\times m\) game,
\[
\operatorname{rank}(A)\le k,\qquad
\operatorname{rank}(B)\le k,
\]
so
\[
r\le2k.
\]

The direct argument in the manuscript is also valid: retain all \(k\) row variables and compress the column strategy to at most \(2k+1\) actions. Each supported problem then has at most
\[
k+(2k+1)+2=3k+3
\]
variables.

Thus fixing one player’s action count suffices even when the other action count grows without bound. The two headline tractability results are related: the bounded-action result is a useful corollary of the individual-rank theorem.

## 6. The optimization and verification conclusions are genuinely global

### Positive weights force the performance coordinates to be exact

The supported feasible set uses
\[
z_i\le\pi_i(x,y).
\]

At a maximizer of
\[
\lambda_1z_1+\lambda_2z_2,
\qquad \lambda_1,\lambda_2>0,
\]
both inequalities must be tight. Otherwise increasing a slack \(z_i\) to the actual performance would remain feasible and strictly improve the objective.

Thus the returned performance coordinates are the actual performances, not merely lower estimates.

### A global weighted maximizer is an optimin

Because compression preserves every attainable performance vector, maximizing over all enumerated support faces achieves the same weighted value as maximizing over all original profiles.

If another profile Pareto dominated a returned maximizer, it would weakly improve both performances and strictly improve one. Strict positivity of both weights would then give a strictly larger weighted value, a contradiction.

The feedback’s argument on this point is correct.

### Threshold feasibility and rational-profile verification also follow

For thresholds \(t_1,t_2\), adding
\[
z_1\ge t_1,\qquad z_2\ge t_2
\]
to the supported hypograph correctly tests whether some profile meets those guarantees.

For a rational candidate profile, its performance vector \(v\) is computable exactly from polynomially many rational pure/edge expressions. The algorithm then tests
\[
z_1\ge v_1,\qquad z_2\ge v_2,\qquad
(z_1>v_1\ \lor\ z_2>v_2)
\]
over the enumerated supported hypographs.

A feasible point gives an actual dominator because \(\pi\ge z\). Conversely, every actual dominator has a compressed representative. Therefore infeasibility of all these tests is equivalent to global optimin membership.

The rational candidate itself can have large support; only the competing witness profiles need compression.

One output distinction is worth preserving: the threshold-feasibility algorithm returns a profile satisfying the thresholds. Its particular feasible witness need not itself be optimin. The manuscript’s stated threshold claim does not require that.

## 7. What should change in the supplied feedback?

### The definite terminology correction: “nonuniform”

The sentence

> “The polynomial-time result is also nonuniform in the rank or action-count bound”

should be revised.

The construction uses a single effective procedure: compute ranks, enumerate supports, construct formulas, and apply general exact real-algebraic algorithms. There is no nonuniform advice or parameter-specific noncomputable choice.

The appropriate description is:

**The construction is uniform and gives an XP-type guarantee: it runs in polynomial time for every fixed parameter value, but its polynomial exponent can depend on the parameter. It does not establish fixed-parameter tractability.**

Schematically, the established type of bound is
\[
f(r)L^{g(r)},
\]
whereas an FPT bound would require
\[
f(r)L^C
\]
with \(C\) independent of \(r\). The analogous distinction applies to the bounded action-count parameter.

### Clarify exactly which rank is bounded

The parameter is
\[
\operatorname{rank}(A)+\operatorname{rank}(B),
\]
not
\[
\operatorname{rank}(A+B).
\]

These can differ greatly. For instance, \(B=-A\) gives \(\operatorname{rank}(A+B)=0\) while the individual rank sum can grow arbitrarily large. That example illustrates the parameter distinction; it is not a hardness example.

The manuscript explicitly makes this distinction. Any abbreviated review should retain it.

### The practical-efficiency qualification is fair

The manuscript establishes an exact algorithmic complexity bound. It does not provide an implemented solver or demonstrate useful practical runtimes.

That is a legitimate limitation of practical applicability, but it does not weaken the correctness of a theoretical polynomial-time theorem.

### Keep the comparison with the prior attempt narrowly stated

The [pinned earlier contribution](https://github.com/We-Solve/research/blob/c4ef184d1d392f70fed32c5e862d7f24d11e8401/problems/a0/prb_a0d16d27a72e43eab17639e11a84a991/contributions/con_b13194af76d34ee59f36b8f4434c24fe/files/C72-4.tex) contains the strict-deviation vertex calculations, a single-component LP identity, and fixed-total-dimension tractability.

Issue #883 extends the relevant exact mixed-search tractability result by removing the need to bound the total number of actions. That comparison is justified.

The earlier contribution also contains proposed results about other complexity questions. It would therefore be misleading to say it “only proves” those two things without restricting the comparison to this tractability direction.

### The frontier-enumeration qualification is correct

Positive scalarization produces an optimin, but varying positive weights need not recover every Pareto-undominated performance vector.

Moreover, the optimin set can be infinite, so “enumerating every optimin” would require a suitable output convention. The original task asks for one optimin and does not require a complete frontier description. [we-solve](https://we-solve.github.io/problems/computational-complexity-of-optimin-in-finite-games/?utm_source=chatgpt.com)

## 8. Correct scope of the result

The following is the defensible interpretation of what [Issue #883](https://github.com/We-Solve/research/issues/883) establishes.

| Task or restriction | Assessment |
|---|---|
| Find one exact mixed optimin for each fixed \(\operatorname{rank}(A)+\operatorname{rank}(B)\) | Established by the argument |
| Find one exact mixed optimin when one player has a fixed number of actions | Established |
| Compute the exact positive-weight optimum and a maximizing profile on those classes | Established |
| Decide performance-threshold feasibility and output an algebraic feasible witness on those classes | Established |
| Verify a supplied rational profile’s global optimin status on those classes | Established |
| Polynomial-time exact search for unrestricted bimatrix games | Not established by this submission |
| General three-player or higher-player search classification | Not established by this submission |
| Tractability from a bound on \(\operatorname{rank}(A+B)\) alone | Not established by this submission |
| Fixed-parameter tractability in rank or one-sided action count | Not established |
| Rational exact-output guarantee | Not established or required |
| Generation of every optimin through positive weighted scalarization | Not established |

The manuscript is careful about these limitations. The pasted review is also largely careful, although “unresolved” should be understood as **unresolved by this submission and the checked sources**, rather than as an exhaustive certification of the entire current literature.

## Final assessment

**I would retain the favorable mathematical verdict and classify the submission as a correct, substantive partial result under its stated input and exact-output conventions. I found no proof defect requiring a change to the main theorem.**

The strongest contribution is the preservation of both full-game performance components under support compression. The remaining algorithm follows from that reduction, the correctly guarded deviation formulas, attainment, and established exact real-algebraic procedures.

The supplied feedback should correct “nonuniform,” add the attainment step, and distinguish the hypograph variable count from the larger optimality formula. Its broader conclusions—that the result gives global exact optimins on the stated restricted families while leaving the unrestricted search classification unanswered—are supported.

This assessment is a mathematical proof review. It does not certify priority over all prior literature, provide proof-assistant verification, or establish editorial acceptance.