> Source: [original issue #2](https://github.com/We-Solve/research/issues/2). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


# A globally certified borrowing-constrained bond economy, sharp limits to moment compression, and the cost of distribution-state validation

Submission packaging note: The mathematical manuscript below is unchanged from the prepared research contribution. The companion verification script and its saved output are provided in the supplemental reproducibility comment in this issue. The original problem statement is available as [the public TeX source](https://we-solve.github.io/problems/scalable-heterogeneous-agent-macroeconomics/source/statement.tex); that already-public source is not duplicated in this submission. The original contribution package retains its separate original_statement.tex copy.

## 1. Original question and the separate specialisation

Problem-statement attribution: “Scalable heterogeneous-agent macroeconomics” (ECON-C63-35), rights holder mehmetmars7, licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/), as recorded in the [official problem metadata](https://github.com/We-Solve/we-solve.github.io/blob/main/problems/scalable-heterogeneous-agent-macroeconomics/problem.yaml). [Original statement source](https://we-solve.github.io/problems/scalable-heterogeneous-agent-macroeconomics/source/statement.tex). The formal research question below is quoted with unchanged wording; only its presentation has been converted from TeX to Markdown. The separately identified two-date specialisation is this contribution’s own construction.

The original formal research question is retained:

> For a restricted primitive class $\mathcal H$, can one compute $\hat f$ with a certified bound
> \[
> \sup_{h\in\mathcal H}\|\mathcal R_h(\hat f_h)\|_{\mathcal D}\le\varepsilon
> \]
> at a feasible computational cost, including states away from a steady state and transitions across binding constraints? Identify stability conditions under which the residual controls distance to an equilibrium:
> \[
> \operatorname{dist}(\hat f_h,\mathcal E_h)\le C_h\|\mathcal R_h(\hat f_h)\|_{\mathcal D}.
> \]
> For estimation, propagate numerical error into moments, likelihoods, and counterfactual uncertainty, so solver bias is distinguishable from sampling error. Benchmark methods on identical primitives, initial distributions, shocks, hardware budgets, and accuracy criteria; local linear accuracy and global state-domain accuracy must be reported separately.

The complete public TeX statement is preserved separately as original_statement.tex. The statement specifies a research family rather than a fixed primitive class, horizon, residual, norm, or cost model. The two-date economy below is a separate specialisation; it does not replace the original question or resolve its intended rich-model programme.

Both earlier contributions [A1, A2] were read in full. They give contraction and small-gain certificates, finite-net bounds, and obstructions when stability or a continuity modulus is absent. Their economic application leaves the relevant whole-economy stability and global evaluation conditions unverified. Here the positive result derives stability directly from a fully specified, deliberately limited economy. The negative results quantify information lost through moment compression and through pointwise global validation.

The sequence-space Jacobian method already supplies efficient heterogeneous-agent solution and estimation tools [R3]. This contribution does not claim otherwise. Polynomial-approximation duality and distribution-space packing are also established techniques [R1, R2]. The claims below concern the displayed constructions, proofs, constants, and scope, without a priority claim for the general mathematical techniques.

## 2. An explicit economic class and state domain

There are dates 0 and 1 and a unit-mass continuum of price-taking households. This explicitly replaces the source's default finite-agent convention. A household has initial liquid assets $a\in[0,2]$ and date-0 resources $y=1+a\in[1,3]$. Write $\mu\in\mathcal P([1,3])$ for the resource distribution, equivalently the translated initial asset distribution. Every such probability law is in the declared initial aggregate-state domain:

\[
\mathcal D_0=\mathcal P([1,3]).
\]

All measures are Borel probability measures. Policies are measurable. The asset interval, including the successor assets, is $A=[0,5]$. Heterogeneity is in wealth; no additional idiosyncratic state or random aggregate shock is needed for this specialisation.

Let

\[
\boxed{\quad
\mathcal H_0=
\left\{(\beta,w,B):
\frac14\le\beta\le\frac34,\quad
\frac12\le w\le2,\quad
\frac16\le B\le\frac12
\right\}.
\quad} \tag{1}
\]

Here $\beta$ is the discount factor, $w$ is after-tax terminal income, and $B$ is the per-capita supply of government bonds. A bond costs $q>0$ date-0 goods and pays one date-1 good. The household solves

\[
\max_{0\le b\le5,\;y-qb>0}
\{\log(y-qb)+\beta\log(w+b)\}. \tag{2}
\]

Consumption is $c_0=y-qb$ and $c_1=w+b$. Gross terminal endowment is $w+B$; the government taxes each household $B$ at date 1 to repay the bonds. At date 0 the government purchases $G_0=qB$ goods. These purchases have no utility term in (2). The policy rule fixes debt quantity, not government purchases independently of the price.

Bond-market clearing is

\[
\int b(y)\,d\mu(y)=B. \tag{3}
\]

It implies both goods-market identities:

\[
\int c_0\,d\mu+G_0=\int y\,d\mu,\qquad
\int c_1\,d\mu=w+B. \tag{4}
\]

Thus debt does not add unbacked terminal resources. The successor law of claims is $\nu=b_\#\mu$, the probability law obtained by applying $b$ to the initial household. At date 1 the claims are paid and consumed. There is no unmodelled continuation value.

For $h=(\beta,w,B)$, define

\[
\lambda=\frac{(1+\beta)B}{w},\qquad
q_-=\frac{\beta}{w+(1+\beta)B},\qquad
q_+=\frac{3\beta}{w+(1+\beta)B}. \tag{5}
\]

Candidate prices are restricted to $[q_-,q_+]$. We prove that every equilibrium price is in this interval.

### Proposition 1. Exact household optimisation

For every $h\in\mathcal H_0$, $y\in[1,3]$, and $q\in[q_-,q_+]$, the unique optimum is

\[
d_h(y,q)=\frac{\beta y/q-w}{1+\beta},\qquad
b_h(y,q)=[d_h(y,q)]_+,\qquad [x]_+=\max\{x,0\}. \tag{6}
\]

The borrowing lower bound can bind. The upper bound is strictly inactive.

**Proof.** The second derivative of the objective with respect to $b$ is

\[
-\frac{q^2}{(y-qb)^2}-\frac{\beta}{(w+b)^2}<0.
\]

The objective tends to minus infinity at an open boundary where $y-qb$ approaches zero. Its unconstrained first-order root is $d_h$. If this root is nonpositive, the optimum is zero; otherwise it is the root, unless the upper cap is encountered. At a positive root, $c_0=(y+qw)/(1+\beta)>0$. On the entire price interval,

\[
\max_{y,q}b_h(y,q)
=\frac{2w}{1+\beta}+3B
\le\frac{47}{10}<5. \tag{7}
\]

The cap therefore never intervenes. This proves feasibility, attainment and uniqueness. The constructed policy also has the uniform consumption margins $c_0\ge4/7$ and $c_1\ge1/2$. $\square$

## 3. Endogenous price stability across the borrowing kink

Define a price in threshold units,

\[
k=\frac{qw}{\beta},
\]

and the stop-loss functional and clearing function

\[
H_\mu(k)=\int(y-k)_+\,d\mu(y),\qquad
F_{h,\mu}(k)=\lambda k-H_\mu(k). \tag{8}
\]

The term “stop-loss” here simply names the displayed expected positive part.

### Theorem 2. Global existence, uniqueness, and price certificate

Every $(h,\mu)\in\mathcal H_0\times\mathcal D_0$ has a unique equilibrium price $q_{h,\mu}$. Its threshold $k_{h,\mu}=q_{h,\mu}w/\beta$ is the unique zero of $F_{h,\mu}$ and lies in

\[
\left[\frac1{1+\lambda},\frac3{1+\lambda}\right].
\]

For any candidate $q\in[q_-,q_+]$, put $D_{h,\mu}(q)=\int b_h(y,q)\,d\mu(y)$. Then

\[
\boxed{
|q-q_{h,\mu}|
\le \frac qB\,|D_{h,\mu}(q)-B|.
} \tag{9}
\]

For any two initial laws,

\[
\boxed{
|q_{h,\mu}-q_{h,\tilde\mu}|
\le\frac{\beta}{(1+\beta)B}W_1(\mu,\tilde\mu).
} \tag{10}
\]

The Wasserstein distance is

\[
W_1(\mu,\tilde\mu)
=\inf_{\pi\in\Pi(\mu,\tilde\mu)}
\int |x-y|\,d\pi(x,y),
\]

where $\Pi$ denotes all couplings with the stated marginals.

**Proof.** For $v\ge u$, the difference $(y-u)_+-(y-v)_+$ lies in $[0,v-u]$. Consequently

\[
\lambda(v-u)\le F_{h,\mu}(v)-F_{h,\mu}(u)
\le(\lambda+1)(v-u). \tag{11}
\]

This holds at atoms and switching thresholds without any derivative assumption. At the lower bracket endpoint, $H_\mu(k)\ge1-k=\lambda k$; at the upper endpoint, $H_\mu(k)\le3-k=\lambda k$. Continuity and (11) give exactly one zero.

Formula (6) yields

\[
D_{h,\mu}(q)=\frac{\beta}{(1+\beta)q}H_\mu(k),\qquad
F_{h,\mu}(k)=\frac{(1+\beta)q}{\beta}
\{B-D_{h,\mu}(q)\}. \tag{12}
\]

The lower increment bound in (11), applied between $k$ and the zero, proves (9).

For completeness, no equilibrium lies outside the price bracket. At $q_-$ the poorest type's unconstrained demand equals $B$, and the cap exceeds $B$. If $q<q_-$, every type's capped optimal demand therefore exceeds $B$. At $q_+$ the richest type's demand equals $B$; if $q>q_+$, every type's demand is below $B$. Neither case can clear.

For every coupling, the hinge's 1-Lipschitz dependence on $y$ gives

\[
|H_\mu(k)-H_{\tilde\mu}(k)|
\le\int|x-y|\,d\pi.
\]

Take the infimum and apply the lower increment bound to the two clearing roots. Multiplication by $\beta/w$ gives (10). $\square$

## 4. A complete residual and a uniform distance bound

A candidate is $f=(q,b,\nu)$, where $q\in[q_-,q_+]$, $b:[1,3]\to[0,5]$ is measurable and satisfies $y-qb(y)>0$ for every $y$, and $\nu\in\mathcal P([0,5])$. Consumption and government purchases are defined from their budgets. Feasibility of individual asset bounds and positive consumption is imposed by this candidate domain, not omitted from the problem.

Define

\[
\sigma(y)=b(y)-d_h(y,q),\qquad
r_{\rm dual}(y)=[-\sigma(y)]_+,\qquad
r_{\rm comp}(y)=\min\{b(y),[\sigma(y)]_+\}. \tag{13}
\]

The scalar $\sigma$ is the negative first derivative in (2) multiplied by the positive factor $(y-qb)(w+b)/[(1+\beta)q]$. Thus the relevant lower-bound optimality conditions are $b\ge0$, $\sigma\ge0$, $b\sigma=0$. The true upper bound is inactive throughout the certified price domain.

A three-case calculation, according as $\sigma<0$, $\sigma\ge0$ with $d_h\ge0$, or $d_h<0$, gives

\[
\max\{r_{\rm dual}(y),r_{\rm comp}(y)\}
=|b(y)-b_h(y,q)|. \tag{14}
\]

In particular, $b=0$ and $\sigma>0$ is a satisfied slack condition and contributes zero.

Set

\[
\eta=\sup_{y\in[1,3]}\max\{r_{\rm dual},r_{\rm comp}\},\qquad
\rho=\left|\int b\,d\mu-B\right|,\qquad
\delta_\nu=W_1(\nu,b_\#\mu).
\]

The residual includes the signed bond equation, both nonnegative household violation functions, and the distribution-evolution discrepancy. It also includes both resource equations, with the following explicit normalisation:

\[
r_0=\frac{\int c_0\,d\mu+qB-\int y\,d\mu}{q}
=B-\int b\,d\mu,\qquad
r_1=\int c_1\,d\mu-(w+B)=\int b\,d\mu-B. \tag{15}
\]

Household and government budget identities contribute zero because they are imposed algebraically. The norm, in these declared units, is therefore

\[
\|\mathcal R_{h,\mu}(f)\|=\max\{\eta,\rho,\delta_\nu\}. \tag{16}
\]

Keeping the date-0 goods equation unnormalised instead would introduce $q\rho$ and change the displayed construction constants. The scaling is part of the specification. A zero residual is equivalent to the complete equilibrium conditions in this economy.

Let $f^*_{h,\mu}=(q^*,b^*,\nu^*)$, where $b^*(y)=b_h(y,q^*)$ and $\nu^*=b^*_\#\mu$. Define

\[
d(f,f^*_{h,\mu})
=\max\{|q-q^*|,\|b-b^*\|_\infty,W_1(\nu,\nu^*)\}. \tag{17}
\]

Policies are compared over all wealth types in $[1,3]$, including types of zero population mass. For functions on the aggregate domain, take the supremum of (16) and (17) over $\mu\in\mathcal D_0$.

### Theorem 3. Uniform coupled residual-to-equilibrium certificate

For every $h\in\mathcal H_0$, every $\mu\in\mathcal D_0$, and every admissible candidate,

\[
\boxed{
d(f,f^*_{h,\mu})
\le\frac{964}{5}\,\|\mathcal R_{h,\mu}(f)\|.
} \tag{18}
\]

The same constant applies after taking a supremum over the entire aggregate-state domain.

**Proof.** Put

\[
C_q=\frac{q_+}{B},\qquad
L_q=\frac{3\beta}{(1+\beta)q_-^2},\qquad
L_y=\frac{\beta}{(1+\beta)q_-}. \tag{19}
\]

Positive-part projection is 1-Lipschitz. It follows from (6) that $b_h$ is $L_q$-Lipschitz in $q$ and $L_y$-Lipschitz in $y$ on the declared domain. By (14),

\[
|D_{h,\mu}(q)-B|\le\rho+\eta.
\]

The price theorem, a policy triangle inequality, and the coupling that applies two policies to the same initial household yield, respectively,

\[
|q-q^*|\le C_q(\rho+\eta),
\]

\[
\|b-b^*\|_\infty
\le\eta+L_qC_q(\rho+\eta),
\]

\[
W_1(\nu,\nu^*)
\le\delta_\nu+\eta+L_qC_q(\rho+\eta). \tag{20}
\]

Thus a valid constant is $\max\{2C_q,2+2L_qC_q\}$. Directly from (1) and (5),

\[
C_q\le\frac{324}{19},\qquad
L_qC_q
=9\left(1+\frac{w}{(1+\beta)B}\right)
\le\frac{477}{5}.
\]

Hence $\max\{2C_q,2+2L_qC_q\}\le964/5$. All inequalities hold at binding switches. $\square$

If derived consumption and purchases are included in the distance, one additionally has

\[
\|c_0-c_0^*\|_\infty
\le5|q-q^*|+q_+\|b-b^*\|_\infty,\quad
\|c_1-c_1^*\|_\infty\le\|b-b^*\|_\infty,\quad
|G_0-G_0^*|=B|q-q^*|.
\]

These constants are intentionally explicit, not claimed optimal.

## 5. Uniform computation without an aggregate-state covering net

Partition $[1,3]$ into $n\ge1$ equal bins, assign boundary points consistently, and let $x_i$ be the bin midpoints. Given the exact bin probabilities $p_i$, define

\[
\mu_n=\sum_{i=1}^n p_i\delta_{x_i}.
\]

Moving each initial observation to its bin midpoint gives, for every probability law,

\[
W_1(\mu,\mu_n)\le\frac1n. \tag{21}
\]

Find the exact clearing price $q_n=q_{h,\mu_n}$ and return the functions

\[
\hat q_h(\mu)=q_n,\qquad
\hat b_h(y;\mu)=b_h(y,q_n),\qquad
\hat\nu_h(\mu)=b_h(\cdot,q_n)_\#\mu_n. \tag{22}
\]

The household policy is evaluated for every actual $y$, not held constant within wealth bins.

### Theorem 4. Explicit uniform residual and operation count

The construction satisfies

\[
\boxed{
\sup_{h\in\mathcal H_0}\sup_{\mu\in\mathcal D_0}
\|\mathcal R_{h,\mu}(\hat f_h(\mu))\|
\le\frac{21}{10n}.
} \tag{23}
\]

It also has the sharper direct price bound

\[
\boxed{
\sup_{h,\mu}|\hat q_h(\mu)-q_{h,\mu}|
\le\frac{18}{7n}.
} \tag{24}
\]

Given the ordered exact bin probabilities, constructing one output takes $O(n)$ arithmetic operations and comparisons, plus $O(n)$ storage for the output distribution. Therefore

\[
n=\max\left\{1,\left\lceil\frac{21}{10\varepsilon}\right\rceil\right\}
\]

suffices for a uniform residual target $\varepsilon>0$ in this class.

**Proof.** Household optimality and budgets hold exactly at $q_n$. Market clearing holds exactly for $\mu_n$. Equations (19) and (21) imply

\[
\left|\int b_h(y,q_n)\,d\mu-B\right|
\le L_yW_1(\mu,\mu_n),
\]

\[
W_1(\hat\nu_h,b_h(\cdot,q_n)_\#\mu)
\le L_yW_1(\mu_n,\mu).
\]

Since $L_y=w/(1+\beta)+B\le21/10$, (23) follows. Equation (10) and $\beta/[(1+\beta)B]\le18/7$ give (24).

For the arithmetic count, let the midpoint nodes already be ordered and form tail masses and tail first moments

\[
P_j=\sum_{i=j}^n p_i,\qquad S_j=\sum_{i=j}^n p_ix_i.
\]

Set $x_0=0$. Scan for an index satisfying

\[
k_j=\frac{S_j}{\lambda+P_j},\qquad
x_{j-1}\le k_j\le x_j. \tag{25}
\]

Such an index exists because the positive unique root lies below the largest positive-mass node. For this index, $H_{\mu_n}(k_j)=S_j-k_jP_j=\lambda k_j$, so $q_n=\beta k_j/w$. Threshold ties add zero to the hinge, and zero-mass bins do not invalidate the formula. Every denominator is positive because $\lambda>0$. Tail sums and the scan are linear in $n$. $\square$

**Input and arithmetic qualifications.** For arbitrary $\mu$, exact bin probabilities are an input oracle, not a free representation of every measure. Their acquisition cost must be added. For a sorted $N$-atom input, one can form the histogram in $O(N+n)$ operations; for unsorted atoms with only arithmetic and comparisons, $O(N\log n+n)$ is a safe bound using binary search for the bins. A constant-cost floor/bin-index operation permits a different indexing count. Rational data permit exact rational arithmetic, but bit costs depend on input and intermediate bit lengths. No constant-bit or wall-clock claim is made.

The supplied implementation uses exact rational data. A floating-point implementation needs rounding enclosures or an added certified residual. If approximate bin masses define a valid probability law $\tilde\mu_n$ and $W_1(\tilde\mu_n,\mu_n)\le\zeta$ is certified, replace $1/n$ by $1/n+\zeta$ in the transport-based bounds. Raw signed or unnormalised bin weights do not qualify.

The global guarantee comes from the analytic within-bin transport bound, rather than evaluations along a finite set of aggregate paths. For example, $\varepsilon=10^{-3}$ gives $n=2100$; this is a bin count under the stated input model, not a measured runtime.

## 6. Exact aggregation failure and a genuine constraint switch

Fix the member of (1) with

\[
\beta=\frac12,\qquad w=1,\qquad B=\frac13,\qquad \bar b=5.
\tag{26}
\]

Then $\lambda=1/2$, $q\in[1/3,1]$, and

\[
b(y,q)=\frac{(y-2q)_+}{3q}.
\]

The following are exact rational equilibria:

| Initial resource law | Mean resources | Equilibrium price | Saving at populated types |
| --- | ---: | ---: | --- |
| $\delta_2$ | $2$ | $2/3$ | $b(2)=1/3$ |
| $(\delta_1+\delta_3)/2$ | $2$ | $3/4$ | $b(1)=0,\ b(3)=2/3$ |

Both correspond to initial mean assets $1$. The price difference is $1/12$.

### Proposition 5. Sharp uncertainty when only mean wealth is retained

Among all $\mu\in\mathcal P([1,3])$ with $\int y\,d\mu=2$, the set of possible equilibrium prices is exactly

\[
[2/3,3/4].
\]

Consequently the minimax absolute error of a price predictor that sees only that mean is exactly $1/24$, attained by predicting $17/24$.

**Proof.** Convexity of the hinge and its endpoint chord give

\[
(2-k)_+\le H_\mu(k)
\le\tfrac12(1-k)_++\tfrac12(3-k)_+.
\]

A larger hinge functional gives a weakly larger clearing root by (11). The displayed distributions attain the two price bounds. Mixtures of these two distributions remain at mean 2, and their prices vary continuously by (10), so every intermediate price is attained. Any common prediction must be wrong by at least half the endpoint gap; their midpoint attains that radius. $\square$

For a separate path that actually crosses the borrowing boundary, take

\[
\mu_t=(1-t)\delta_1+t\delta_3,\qquad 0\le t\le1.
\]

Direct market clearing gives

\[
q(t)=
\begin{cases}
(1+2t)/3,&0\le t\le1/4,\\
3t/(1+2t),&1/4\le t\le1.
\end{cases} \tag{27}
\]

The poorest type saves positively for $t<1/4$ and is at the borrowing limit for $t\ge1/4$. Both formulas give $q(1/4)=1/2$, but their one-sided derivatives are $2/3$ and $4/3$. Theorems 2 to 4 include this kink and the endpoint laws. No local linearisation is used.

## 7. More moments help at a quantified rate, but finite moment compression has an error floor

For a continuous function $g$ on a compact interval $I=[L,U]$ with finite $L<U$, and an integer $m\ge0$, let

\[
M_m(\mu)=\left(\int x^j\,d\mu\right)_{j=1}^m,\qquad
E_m(g;I)=\inf_{\deg p\le m}\|g-p\|_{\infty,I}.
\]

Total mass is known to be one. The standard moment-duality identity [R1, Lemma 25] is

\[
\sup_{M_m(\mu)=M_m(\nu)}
\left|\int g\,d\mu-\int g\,d\nu\right|=2E_m(g;I). \tag{28}
\]

It implies, even for arbitrary nonlinear predictors,

\[
\inf_\Psi\sup_{\mu\in\mathcal P(I)}
\left|\Psi(M_m(\mu))-\int g\,d\mu\right|=E_m(g;I). \tag{29}
\]

Appendix A gives a self-contained proof, including attainment by an indistinguishable pair with at most $m+2$ distinct combined support points. This is a worst case over moment vectors, not a claim that every moment vector has the same uncertainty.

### Theorem 6. A sharp-order price information bound in one fixed economy

Keep the primitives (26) fixed, and define the exact-moment price information radius on the mean-2 domain by

\[
\mathfrak r_m=
\inf_\Psi\sup_{\substack{\mu\in\mathcal P([1,3])\\\int y\,d\mu=2}}
|\Psi(M_m(\mu))-q_\mu|,\qquad m\ge1.
\]

Then

\[
\boxed{
\frac1{192\pi(2m-1)}
\le\mathfrak r_m
\le
\min\left\{\frac1{24},
\frac1\pi\left(\frac1m+\frac1{m+1}\right)\right\}.
} \tag{30}
\]

Thus $\mathfrak r_m=\Theta(1/m)$: positive constants independent of $m$ bound it above and below by constant multiples of $1/m$. In particular, uniform price error $\varepsilon$ needs and is information-theoretically achievable with order $1/\varepsilon$ exact polynomial moments. This is an information result, not an operation count for constructing accurate raw moments.

**Proof of the lower bound.** Appendix B constructs, for each $m\ge1$, two laws $\rho_m,\tau_m$ on $[0,1]$ with equal moments through degree $m$, common mean $1/2$, and hinge gap

\[
\Delta_m=\int(a-\tfrac12)_+\,d(\rho_m-\tau_m)
\ge\frac1{4\pi(2m-1)}. \tag{31}
\]

Translate and rescale each law by $y=6/5+(2/5)a$. The resulting local laws have common mean and kink $k_0=7/5$, support in $[6/5,8/5]$, and hinge gap $(2/5)\Delta_m$. Let $W$ be their average hinge expectation at $k_0$. Since each local law has its mean at the centre of that interval, $0\le W\le1/10$.

Choose

\[
\omega=\frac{1/10}{8/25-W}\in[5/16,5/11],\qquad
t=\frac{1-(2/5)\omega}{2(1-\omega)}\in[7/11,3/4],
\]

and mix each local law, with weight $\omega$, with the same law $(1-t)\delta_1+t\delta_3$. The resulting full laws $\mu_m,\nu_m$ share all moments through degree $m$ and both have mean 2, because

\[
\omega(7/5)+(1-\omega)(1+2t)=2.
\]

Their average hinge value at $k_0$ is

\[
\omega W+(1-\omega)(8/5)t
=\frac45-\omega(8/25-W)
=\frac7{10}
=\frac12k_0. \tag{32}
\]

Their hinge gap is at least $\Delta_m/8$. Therefore their clearing functions $k/2-H(k)$ have opposite values at $k_0$, each of absolute value at least $\Delta_m/16$. The upper increment bound $F(v)-F(u)\le(3/2)(v-u)$ forces their roots to be separated by at least $\Delta_m/12$. Since $q=k/2$, their price gap is at least $\Delta_m/24$. A common moment-based prediction has error at least $\Delta_m/48$, proving the lower bound in (30).

**Proof of the upper bound.** Appendix C constructs polynomials $p_{m,k}(y)$ of degree at most $m$, continuous in $k$, with

\[
\sup_{k\in[0,3]}\sup_{y\in[1,3]}
|(y-k)_+-p_{m,k}(y)|
\le\eta_m,\qquad
\eta_m=\frac1\pi\left(\frac1m+\frac1{m+1}\right).
\tag{33}
\]

The approximation is exact for $k\le1$ and at $k=3$. Hence $\hat H_m(k)=\int p_{m,k}\,d\mu$ is known from $M_m$, and the continuous function $\hat F_m(k)=k/2-\hat H_m(k)$ has opposite signs at 0 and 3. Select a zero $\hat k$, for example by sign-preserving bisection. No monotonicity or uniqueness of the approximating function is assumed. At every such zero,

\[
|F_\mu(\hat k)|\le\eta_m,\qquad
|\hat k-k_\mu|\le2\eta_m,\qquad
|\hat k/2-q_\mu|\le\eta_m.
\]

Projection of $\hat k$ onto $[2/3,2]$ cannot increase its distance to the exact root and retains the economic price domain. Alternatively, ignoring extra moments and predicting $17/24$ gives the $1/24$ upper bound. $\square$

For a certified approximate zero with $|\hat F_m(\hat k)|\le r$, the price bound is $\eta_m+r$. Accurate evaluation of the moments, trigonometric coefficients, and this scalar residual must be established separately in an implementation.

These lower bounds concern a fixed list of polynomial moments. They do not apply to every possible compressed representation. Including a particular hinge expectation as a feature determines that expectation exactly. The histogram method uses bin probabilities and explicit economic structure.

## 8. A small equilibrium residual does not certify every distributional statistic

Let the economy again be (26) and fix

\[
\mu=\tfrac34\delta_1+\tfrac14\delta_3.
\]

Its equilibrium price is $q^*=1/2$, and its saving law is

\[
\nu^*=\tfrac34\delta_0+\tfrac14\delta_{4/3}.
\]

For $0<e\le1/2$, take

\[
q_e=\frac1{2(1+e)},\qquad
b_e(y)=b(y,q_e),\qquad
\nu_e=(b_e)_\#\mu.
\]

These candidates are in the admissible price and asset domains. Direct calculation gives

\[
b_e(1)=\frac{2e}{3},\qquad
b_e(3)=\frac43+2e,\qquad
\int b_e\,d\mu-B=e.
\]

Household optimality and distribution evolution are exact, so the full normalised residual in (16) is exactly $e$. Nevertheless

\[
\boxed{
\|\mathcal R(f_e)\|=e\longrightarrow0,\qquad
|\nu_e(\{0\})-\nu^*(\{0\})|=\frac34.
} \tag{34}
\]

Indeed $W_1(\nu_e,\nu^*)=e$ and the price error is $e/[2(1+e)]$. There is no conflict with the distance certificate: the exact-zero indicator is discontinuous in that metric.

For an exact clipped policy recomputed at an approximate price, a threshold margin can control its constrained share. If $k^*$ is the true threshold and $|\hat k-k^*|\le d$, the share difference is at most $\mu([k^*-d,k^*+d])$. A bound on this mass therefore supplies an additional certificate. Such a margin does not protect the exact-zero indicator for arbitrary approximate policies: tiny positive perturbations can remove mass from zero even at strictly constrained types.

## 9. Propagating certified error into estimation and counterfactuals

These are conditional calculations for declared observables, rather than an empirical estimation exercise.

For a $K$-Lipschitz terminal statistic $\varphi$, any coupling gives

\[
\left|\int\varphi\,d\hat\nu-\int\varphi\,d\nu^*\right|
\le K W_1(\hat\nu,\nu^*). \tag{35}
\]

Thus (20) or the sharper construction bounds propagate into its moment. Equation (34) identifies a statistic for which this argument is unavailable.

For a concrete likelihood calculation, suppose independent observations satisfy

\[
X_t=q_\theta(\mu_t)+\epsilon_t,\qquad
\epsilon_t\sim N(0,s^2),
\]

with known $s>0$, known input distributions, and parameter $\theta$ restricted to the declared model class. Let $\ell$ and $\hat\ell$ denote the Gaussian log likelihoods using exact and approximate prices. Let $|\hat q_{\theta,t}-q_\theta(\mu_t)|\le e_{\theta,t}$ be certified for every parameter considered. Expanding the difference of squared Gaussian residuals yields

\[
\boxed{
|\hat\ell(\theta)-\ell(\theta)|
\le\sum_t
\frac{2|X_t-\hat q_{\theta,t}|e_{\theta,t}
+e_{\theta,t}^2}{2s^2}.
} \tag{36}
\]

The normalising constants cancel because the observation variances are the same. This is an eventwise log-likelihood error bound. It does not require a global positive lower bound on a Gaussian density.

For repeated independent observations of the same state, write $\bar X$ for the mean of $T\ge1$ observations, fix $0<\alpha<1$, and let $z_{1-\alpha/2}$ be the standard-normal quantile. The confidence set

\[
C_T=
\left\{\theta:
|\hat q_\theta-\bar X|
\le z_{1-\alpha/2}\frac{s}{\sqrt T}+e_\theta
\right\} \tag{37}
\]

contains the true parameter with probability at least $1-\alpha$, uniformly over this correctly specified normal observation model whenever the numerical enclosure holds uniformly. The proof is the triangle inequality on the event $|\bar X-q_{\theta_0}|\le z_{1-\alpha/2}s/\sqrt T$, whose probability is exactly $1-\alpha$. This remains a set statement when price observations do not identify $\theta$. More precisely, for the fixed observed state $\mu$ define $\Theta(q_0)=\{\theta:q_\theta(\mu)=q_0\}$. With a uniform enclosure for every member, the same event gives $\Pr\{\Theta(q_0)\subseteq C_T\}\ge1-\alpha$. No general identification result is inferred.

For two specified policy regimes with certified price errors $e_0,e_1$, the error in the computed counterfactual price difference is at most $e_0+e_1$. The same sum rule applies to separately certified Lipschitz-statistic effects. The fiscal intervention must state whether $w$ or gross terminal endowment is held fixed when $B$ changes. The equilibrium is unique within each specified economy, so no selector is required here.

If binning is used in the uniform primitive box, $e_\theta=18/(7n)$ is an available price enclosure. Equations (36) and (37) display numerical error separately from the sampling scale. Exact-moment compression uncertainty and errors in measured initial distributions are additional inputs; they are not removed by making the scalar market solver more accurate.

## 10. A separate exponential barrier for pointwise distribution-state validation

This theorem concerns a specified oracle problem. It is not a lower bound for the structured algorithm in Section 5.

Let

\[
\mathcal D_{\rm mean}
=\{\mu\in\mathcal P([0,1]):\int x\,d\mu=1/2\}.
\]

An unknown input is any nonnegative scalar function $r$ satisfying

\[
|r(\mu)-r(\nu)|\le L W_1(\mu,\nu),
\]

where $L>0$ is known. A validator accesses $r$ only through exact values at adaptively chosen distributions. Computation between queries is free. It must never issue a false certificate $\sup r\le\varepsilon$, and it must issue that certificate on the zero function.

Let $H_{\rm bin}(p)=-p\log p-(1-p)\log(1-p)$, with natural logarithms, and let

\[
\kappa=\log2-H_{\rm bin}(1/4)>0.
\]

### Theorem 7. Query lower bound, including a fixed-mean state domain

For $0<\varepsilon\le L/32$, the number of queries on the zero input satisfies

\[
\boxed{
N_0\ge
\exp\left(\kappa\left\lfloor\frac{L}{32\varepsilon}\right\rfloor\right).
} \tag{38}
\]

For a measurable randomised validator which certifies zero with probability at least $1-\beta_0$ and gives a false certificate with probability at most $\alpha_0$ for each individual bad input, where $\alpha_0,\beta_0\in[0,1)$ and $\alpha_0+\beta_0<1$,

\[
\mathbb E N_0\ge
(1-\alpha_0-\beta_0)
\exp\left(\kappa\left\lfloor\frac{L}{32\varepsilon}\right\rfloor\right).
\tag{39}
\]

The probability guarantees are per input; no simultaneous success event over all functions is assumed.

**Proof.** For any positive integer $m$, a greedy binary code contains at least $\exp(\kappa m)$ words in $\{0,1\}^m$ with pairwise Hamming distance greater than $m/4$. Indeed a selected word eliminates at most

\[
V_m=\sum_{j=0}^{\lfloor m/4\rfloor}\binom mj
\le\exp(mH_{\rm bin}(1/4))
\]

words. The inequality follows by multiplying the summands by $(1/4)^j(3/4)^{m-j}\ge\exp[-mH_{\rm bin}(1/4)]$ and using that the corresponding partial binomial probability is at most one. The selected words cover all $2^m$ words by their eliminated sets.

Divide $[0,1]$ into $m$ equal cells with endpoints $\ell_i=(i-1)/m$, $u_i=i/m$, and midpoints $z_i=(\ell_i+u_i)/2$. For a binary word $b$ define

\[
\mu_b=\frac1m\sum_{i=1}^m
\left[(1-b_i)\delta_{z_i}
+\frac{b_i}{2}(\delta_{\ell_i}+\delta_{u_i})\right].
\]

All these laws have mean $1/2$, and

\[
W_1(\mu_b,\mu_c)=\frac{d_H(b,c)}{2m^2}. \tag{40}
\]

For the upper bound, transport the midpoint mass to the endpoints within each differing cell. For the lower bound, compare binary words $b,c$, let $\tau_i(x)=\min\{x-\ell_i,u_i-x\}$ on cell $i$, and define the continuous piecewise linear test function $(c_i-b_i)\tau_i(x)$ there. It is 1-Lipschitz, and its integral against $\mu_b-\mu_c$ equals the right side of (40). Under every coupling this integral is at most the transport cost. Thus the lower bound holds, including duplicated atoms at cell boundaries.

Set $m=\lfloor L/(32\varepsilon)\rfloor\ge1$. The code yields $M\ge\exp(\kappa m)$ measures with pairwise distance greater than $1/(8m)\ge4\varepsilon/L$. The functions

\[
r_j(\mu)=[2\varepsilon-LW_1(\mu,\mu_j)]_+,
\qquad j=1,\ldots,M,
\]

are nonnegative and $L$-Lipschitz. Each has supremum $2\varepsilon$, and their positive supports are disjoint. Fewer than $M$ queries on zero miss one support. That fixed alternative gives identical zero answers, hence the same adaptive transcript, stopping time and false certificate. This proves (38).

For (39), couple all runs by their internal random seed. Let $A_0$ denote certification on zero and $J_j$ the event that the zero-input queries hit the positive support of $r_j$. On $A_0\cap J_j^c$ the alternative run gives the same false certificate, so

\[
\alpha_0\ge\Pr(A_0\cap J_j^c)
\ge1-\beta_0-\Pr(J_j).
\]

Disjoint supports give $\sum_j\Pr(J_j)\le\mathbb E N_0$. Sum the preceding inequalities. The alternatives are fixed before drawing the random seed. $\square$

The same bump formulas extend to the full space $\mathcal P([0,1])$, and their positive supports remain disjoint there by the same triangle inequality. Thus the lower bounds also hold when queries can leave the fixed-mean domain. On the full space, an upper bound of matching exponential order is available: the grid

\[
G_n=
\left\{\sum_{j=0}^n(k_j/n)\delta_{j/n}:
k_j\in\mathbb Z_{\ge0},\ \sum_jk_j=n\right\}
\]

has $\binom{2n}{n}\le4^n$ elements and is a $1/n$-net in $W_1$. To see this, first round locations to their nearest spatial grid points, costing at most $1/(2n)$. Next round the cumulative probabilities monotonically to the nearest multiple of $1/n$. The latter transport cost is at most another $1/(2n)$, using the following identity for laws supported on that spatial grid, where $C_\mu(x)=\mu([0,x])$ is the cumulative distribution function:

\[
W_1(\mu,\nu)=\frac1n\sum_{j=0}^{n-1}|C_\mu(j/n)-C_\nu(j/n)|.
\]

The identity follows by coupling inverse cumulative distributions with the same uniform random variable; at each cut the crossed mass is exactly the cumulative-probability difference. Hence

\[
\sup r\le\max_{\gamma\in G_n}r(\gamma)+L/n.
\]

Choosing $n=\lceil L/\varepsilon\rceil$ certifies zero with at most $4^{\lceil L/\varepsilon\rceil}$ queries. Together with (38), this yields exponential order $\exp(\Theta(L/\varepsilon))$ for the full-space oracle problem, with nonoptimal constants. The grid need not lie in the fixed-mean domain, so it is not asserted as a fixed-mean upper construction.

**Scope of the barrier.** No proof is supplied that these arbitrary bump functions are residuals of heterogeneous-agent economies. Analytic equations, interval enclosures, smaller reachable domains, and access to economic structure can escape this oracle model. Section 5 uses precisely such structural information. For $L=0$ the residual is constant and one query suffices; $\varepsilon=0$ is outside the displayed bounds. The lower bound is for certification, not a strict additive-$\varepsilon$ estimation lower bound for a supremum.

## 11. Verification, audit, and remaining gaps

The proofs were developed and cross-checked by the primary model and three parallel reasoning agents. These are model-generated checks, not independent human review.

The companion econ35_verify.py was executed with Python 3.12.14. It uses exact rational arithmetic for every assertion and passed:

- 70 finite atomic equilibrium and accounting examples;
- 840 histogram residual checks;
- 1,050 coupled price-policy-distribution checks on a finite type grid;
- 2,006 household derivative-normalisation and complementarity cases;
- 65 points on the exact borrowing-switch family;
- moment-matched constructions for $m=1,\ldots,20$, including 230 moment equalities before the economic embedding and 230 after it;
- 100 Fejér hinge-gap checks and 10,200 exact low-frequency coefficient equalities;
- 5,460 fixed-mean transport-pair identities; and
- the explicit constrained-share counterexample at five positive residuals.

The uniform parameter-box identities were also checked at 27 rational parameter combinations. Their validity over the continuum comes from the displayed monotonicity and algebra, not these finite examples. The script and its exact output are included. These checks are not a formal proof of the quantified theorems. No Lean proof was completed; Lean and Lake were not available on the execution path checked.

The audit explicitly covers zero saving, the threshold equality, atoms, zero-probability types, zero-mass bins, ties in the root scan, price-domain endpoints, positive consumption, probability normalisation, raw-moment versus arbitrary-feature information, odd and even moment degree, oracle-query adaptivity, and randomised per-input correctness.

The remaining gaps are:

1. **Recursive equilibrium.** The model has two dates. Endogenous continuation values, recurrent distribution evolution, aggregate uncertainty, production and richer assets are absent. The scalar monotonicity proof has not been extended to those coupled systems.
2. **Other binding constraints.** The lower borrowing constraint switches; the upper asset cap is deliberately inactive. This is not a certificate for every combination of active constraints.
3. **Input access and arithmetic.** Exact bin-mass access is explicit. Costs of obtaining certified masses, quadrature for general representations, coefficient enclosures, bit complexity and floating-point engineering remain outside the demonstrated operation count.
4. **Truncation and tails.** Bounded assets are a primitive here. No error bound is supplied for truncating an originally unbounded-asset economy.
5. **Information versus computation.** The moment lower bound concerns fixed exact polynomial moments; the upper bound does not establish that noisy raw-moment transformations are numerically well conditioned. Adaptive and problem-specific representations remain possible.
6. **Discontinuous outcomes.** The constrained-share counterexample prevents inferring all distributional conclusions from the displayed $W_1$ and policy metrics. Relevant margins, regularised statistics or alternative metrics need their own proof.
7. **Economic oracle lower bounds.** The adverse Lipschitz residuals have not been embedded in the economic primitive class. The exponential bound is not a claim that every economic solver is exponentially costly.
8. **Estimation.** The normal observation experiment is a declared illustration. A macroeconomic likelihood with filtering, dependent observations, unknown measurement laws or weak identification needs separate analysis.
9. **Benchmarking.** No matched comparison of established solvers or hardware budgets was run. The report provides global analytic accuracy for the declared domain; it reports no local-linear accuracy result or empirical performance superiority.
10. **Verification status.** The work has a mathematical proof and finite exact checks, but no proof-assistant certificate or independent human referee report. No full solution or full disproof of ECON-C63-35 is claimed.

## Appendix A. Proof of the standard exact-moment information radius

For any degree-$m$ polynomial $p$ and any equal-moment pair, polynomial expectations cancel, so

\[
\left|\int g\,d(\mu-\nu)\right|
\le2\|g-p\|_\infty.
\]

A best polynomial $p_*$ exists: bounded approximation errors imply bounded values at $m+1$ distinct interval points; the invertible Vandermonde matrix then bounds coefficients, and a convergent subsequence attains the minimum. Put $e=g-p_*$ and $E=\|e\|_\infty$. The case $E=0$ is immediate.

For $E>0$, set $v(x)=(1,x,\ldots,x^m)$ and consider the compact contact set

\[
K=\{\operatorname{sign}(e(x))v(x): |e(x)|=E\}.
\]

The origin belongs to its convex hull. Otherwise a nonzero closest point $z$ in that hull satisfies $z\cdot k\ge\|z\|^2$ for every $k\in K$, by differentiating squared distance along the segment from $z$ to $k$. The polynomial $r(x)=z\cdot v(x)$ therefore has the same sign as the error with a uniform positive margin at all contacts. This persists in a neighbourhood where $|e|$ stays bounded away from zero. On the complementary compact set $|e|\le E-\eta$ for some $\eta>0$. Taking sufficiently small positive $t$ both preserves the sign near contacts and keeps the perturbation below $\eta/2$ elsewhere, so $\|e-tr\|_\infty<E$, contradicting optimality.

The finite-dimensional compact-convex assertion used here follows from the elementary coefficient-elimination proof of Carathéodory's theorem: affine dependence eliminates terms until at most $m+2$ points remain. The convex hull of compact $K$ is consequently the compact image of those points and their simplex weights.

We obtain points $x_i$, signs $s_i$, and weights $w_i\ge0$, with at most $m+2$ points, such that

\[
\sum_iw_i=1,\qquad \sum_iw_is_iv(x_i)=0.
\]

The constant coordinate forces the positive and negative weights each to sum to $1/2$. The laws

\[
\mu=2\sum_{s_i=1}w_i\delta_{x_i},\qquad
\nu=2\sum_{s_i=-1}w_i\delta_{x_i}
\]

have matching moments and satisfy $\int g\,d(\mu-\nu)=2E$. This proves (28) and attainment. A common prediction has error at least half that gap, while integrating $p_*$ gives a linear-in-moments predictor of error at most $E$. This proves (29), including $m=0$.

## Appendix B. Explicit borrowing-kink witnesses and their rate

There are useful exact atomic witnesses. Let $m\ge1$ and let $n=2\lceil(m+1)/2\rceil$, the smallest even integer greater than $m$. Define

\[
\rho_n=2^{1-n}\sum_{j\ {\rm even}}\binom nj\delta_{j/n},\qquad
\tau_n=2^{1-n}\sum_{j\ {\rm odd}}\binom nj\delta_{j/n}.
\]

The sums of even and odd binomial coefficients are both $2^{n-1}$. The $n$th finite difference of every polynomial of degree below $n$ is zero, so all moments through degree $m$ match. Direct alternating-tail summation gives

\[
\left|\int(a-\tfrac12)_+\,d(\rho_n-\tau_n)\right|
=\frac{\binom{n-2}{n/2-1}}{n2^{n-1}}. \tag{41}
\]

For verification, Pascal's identity gives

\[
\sum_{j=r+1}^n(-1)^j\binom nj(j-r)
=(-1)^{r+1}\binom{n-2}{r-1};
\]

take $r=n/2$ and divide by $n2^{n-1}$. For $m=1$ the hinge gap is $1/4$, and the optimal prediction radius is $1/8$, attained by the approximating polynomial $a/2-1/8$. For $m=2,3$ the gap is $1/16$ and the radius is $1/32$, attained by $a^2-a/2+1/32$. Formula (41) is not claimed to give the optimal rate at higher degrees.

For the order-$1/m$ lower bound, use the circle with reference probability measure $d\theta/(2\pi)$ on $[-\pi,\pi]$. The Fejér kernel

\[
K_N(\theta)=\frac1N\left|\sum_{j=0}^{N-1}e^{ij\theta}\right|^2
=\sum_{|j|<N}(1-|j|/N)e^{ij\theta}
\]

is nonnegative and integrates to one, including $K_1=1$ and $K_N(0)=N$. Let $\gamma_N$ be the pushforward of this angular probability law under $a=(1+\sin\theta)/2$, and take

\[
\rho_m=\gamma_{2m},\qquad
\tau_m=\tfrac12\gamma_m+\tfrac12\delta_{1/2}.
\]

The corresponding angular laws are $K_{2m}(\theta)d\theta/(2\pi)$ and $\tfrac12K_m(\theta)d\theta/(2\pi)+\tfrac12\delta_0$; the latter atom maps to $a=1/2$. Their asset means are $1/2$. For frequencies $|j|\le m$, the angular Fourier coefficients coincide because

\[
1-\frac{|j|}{2m}
=\tfrac12(1-|j|/m)+\tfrac12.
\]

Powers of $(1+\sin\theta)/2$ through degree $m$ use only these frequencies, so the required moments agree.

Direct cosine integration gives the absolutely convergent identity

\[
|\sin\theta|=\frac2\pi-\frac4\pi
\sum_{j=1}^{\infty}\frac{\cos(2j\theta)}{4j^2-1}. \tag{42}
\]

The coefficient is obtained by integrating $\sin\theta\cos(2j\theta)$ on $[0,\pi]$ using the product-to-sum identity; odd coefficients vanish. Absolute summability gives uniform convergence. Equality follows, for example, by convolving the continuous difference with the kernels $K_N$: every convolution is zero from its Fourier coefficients, while these positive mass-one kernels converge uniformly on continuous functions. Concentration of their mass follows from $K_N(\theta)\le[N\sin^2(\delta/2)]^{-1}$ for $\delta\le|\theta|\le\pi$.

The difference between the two angular cosine moments is zero at frequencies $0\le j\le m$, nonpositive at every higher frequency, and exactly $-1/2$ for $j\ge2m$. Hence (42) gives an absolute-sine expectation gap at least

\[
\frac2\pi\sum_{j=m}^{\infty}\frac1{4j^2-1}
=\frac1{\pi(2m-1)}.
\]

Since $(a-1/2)_+=(\sin\theta+|\sin\theta|)/4$, this proves (31).

For completeness, the corresponding upper bound follows by shifting (42) and writing $T_j(\cos\theta)=\cos(j\theta)$:

\[
|x|=\frac2\pi+\frac4\pi
\sum_{j=1}^{\infty}\frac{(-1)^{j+1}T_{2j}(x)}{4j^2-1}.
\]

The Chebyshev polynomials satisfy $|T_j(x)|\le1$ on $[-1,1]$. Truncating at $\lfloor m/2\rfloor$, adding the exact linear term, and using $(a-1/2)_+=(x+|x|)/4$, where $x=2a-1$, proves

\[
\frac1{8\pi(2m-1)}
\le E_m((a-\tfrac12)_+;[0,1])
\le\frac1{2\pi(2\lfloor m/2\rfloor+1)}. \tag{43}
\]

This includes every odd and even $m\ge1$. For $m=0$ the radius is $1/4$ from the payoff's range. An interior hinge on a different interval is handled by an affine rescaling. At or beyond an interval endpoint the hinge is affine or zero and is already determined by the first moment, so a positive interior-kink lower bound must not be applied there.

## Appendix C. Uniform moving-threshold approximation

Put $x=y-2\in[-1,1]$, and for $k\in[1,3]$ let $k-2=\cos\phi$, $0\le\phi\le\pi$. The Chebyshev expansion of $(x-\cos\phi)_+$ has constant and linear coefficients

\[
c_0=(\sin\phi-\phi\cos\phi)/\pi,\qquad
c_1=(\phi-\sin\phi\cos\phi)/\pi,
\]

and, for $j\ge2$,

\[
c_j=\frac1{\pi j}
\left\{\frac{\sin((j-1)\phi)}{j-1}
-\frac{\sin((j+1)\phi)}{j+1}\right\}. \tag{44}
\]

To verify (44), integrate $(2/\pi)\int_0^\phi(\cos\theta-\cos\phi)\cos(j\theta)\,d\theta$ by parts, and apply the product-to-sum identity to $\sin\theta\sin(j\theta)$. Both boundary terms vanish. The same direct integration gives $c_0,c_1$.

Since $|c_j|\le2/[\pi(j^2-1)]$ and $|T_j|\le1$, truncation after degree $m\ge1$ has error at most

\[
\frac2\pi\sum_{j=m+1}^{\infty}\frac1{j^2-1}
=\frac1\pi\left(\frac1m+\frac1{m+1}\right).
\]

The coefficients are continuous in $\phi$. At $k=1$ they give exactly $y-1$; at $k=3$ they are all zero. Extend the approximation as $y-k$ for $k\le1$ and zero for $k\ge3$. This proves the joint bound and continuity used in (33). Expectations of all these polynomials are determined by the first $m$ moments, regardless of the choice of polynomial basis.



## Attribution and references from the original submission

### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

OpenAI, gpt-6 astra pro, exact model version unknown. Roles: primary derivation, synthesis and write-up; three parallel reasoning agents for separate derivations and cross-audits. These agents inherited the primary model designation; an exact backend snapshot identifier was not available. Python 3.12.14 with standard-library rational arithmetic was used for the disclosed executable checks. No proof-assistant check was completed.

OpenAI, model name unknown, exact model version unknown. Role: submission preparation, form-field mapping, attribution and publication-requirement checks, and formatting. This assistant did not independently verify the complete mathematical proofs or rerun the companion checks during submission preparation.

### People and roles

Kenny (@kendonB), requester, supplied the problem and the research and reporting requirements. No human mathematical proof verification or additional human coauthor is claimed.

### References

- [P] we-solve, “Scalable heterogeneous-agent macroeconomics”, ECON-C63-35. [Problem page](https://we-solve.github.io/problems/scalable-heterogeneous-agent-macroeconomics/). The statement and public TeX source were read; the source is preserved separately.
- [A1] we-solve research archive, Econ-35-A1, revision r1, “GPT 6 Astra Ultra attempt on Econ-35” (9 October 2026). [Permanent revision](https://we-solve.github.io/contributions/scalable-heterogeneous-agent-macroeconomics/attempt-1/r1/). Complete displayed manuscript read. An unverified research record, not an established external theorem.
- [A2] we-solve research archive, Econ-35-A2, revision r1, “GPT 6 Astra Pro attempt on Econ-35” (9 October 2026). [Permanent revision](https://we-solve.github.io/contributions/scalable-heterogeneous-agent-macroeconomics/attempt-2/r1/). Complete displayed manuscript read. An unverified research record, not an established external theorem.
- [R1] Yanjun Han, Jiantao Jiao and Tsachy Weissman (2018), “Local moment matching: A unified methodology for symmetric functional estimation and distribution estimation under Wasserstein distance”. Proceedings of Machine Learning Research 75, 3189-3221. [Publisher record](https://proceedings.mlr.press/v75/han18b.html); [paper](https://proceedings.mlr.press/v75/han18b/han18b.pdf). Checked: bibliographic record and Lemma 25, the moment-matching/polynomial-approximation duality. No DOI is asserted.
- [R2] March Boedihardjo, Thomas Strohmer and Roman Vershynin (2024), “Private measures, random walks, and synthetic data”. Probability Theory and Related Fields 189, 569-611. DOI: [10.1007/s00440-024-01279-z](https://doi.org/10.1007/s00440-024-01279-z). Checked: publisher metadata and Section 8.2, Proposition 8.2, in the [author-hosted manuscript](https://www.math.ucdavis.edu/~strohmer/papers/2022/privatemeasure.pdf). This is a precedent for distribution-space packing, not a source for a macroeconomic impossibility claim.
- [R3] Adrien Auclert, Bence Bardóczy, Matthew Rognlie and Ludwig Straub (2021), “Using the Sequence-Space Jacobian to Solve and Estimate Heterogeneous-Agent Models”. Econometrica 89(5), 2375-2408. DOI: [10.3982/ECTA17434](https://doi.org/10.3982/ECTA17434). Checked: publisher metadata and abstract, and the first page of the [March 2021 author manuscript](https://web.stanford.edu/~aauclert/sequence_space_jacobian.pdf). No full-proof audit of that paper is claimed.

Source checks and this contribution's computations were performed on 18 October 2026, Pacific/Auckland.

