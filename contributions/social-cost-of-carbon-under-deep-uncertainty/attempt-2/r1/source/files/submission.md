## Uniform control of structural ambiguity: robust compensation, certified SCC bounds and sharp nonlinear mitigation regret

## 1. Original question and relation to A1

The original formal research question is retained:

> For an extra emissions pulse $\xi$ measured in tonnes of $\mathrm{CO}_2$, define the model-conditional social cost
> $$
> \operatorname{SCC}_t(m,P)=
> -\lambda_t(m,P)^{-1}
> \left.\frac{\partial W_t(m,P;E_t+\xi)}{\partial\xi}\right|_{\xi=0},
> $$
> provided the derivative and marginal numeraire value are finite. Characterize the range of $\operatorname{SCC}_t$ over an empirically admissible structural class $\mathcal M$ and probability classes $\mathcal P(m)$, allowing uncertain damages, discounting, adaptation and tail behavior. Derive sufficient conditions for finite values, defensible set-valued bounds and mitigation decisions with controlled ambiguity regret. Where differentiation under expectation fails, determine directional welfare changes directly rather than reporting an unsupported finite marginal price.

Contribution A1, revision r1, was read in full. It establishes a sufficient dominated-differentiation condition, exact finite-state linear-fractional SCC bounds, a single-law example with finite expected utility but infinite marginal loss, and minimax regret for exactly linear benefits and quadratic costs [A1]. The results below address different gaps: uniformity across infinitely many models, correct compensation at a nonsmooth welfare envelope, approximation of unbounded state spaces, and policy welfare that need not be quadratic or concave.

Max-min differentiation and minimax-regret climate policy have existing literatures [D, M]. These references provide context; none is claimed to establish the specific results below. Every result used here is proved in the write-up. No claim of priority relative to that literature is made.

Write $i=(m,P)\in I$ for an admissible model-law pair, and suppress the fixed emissions year. Let $W_i(x,T)$ be its actual selected welfare after a pulse $x$ and a date-$t$ transfer $T$. The other policies and adaptation response are fixed as part of this map. Set

$$
d_i=-\partial_xW_i(0,0),\qquad
\lambda_i=\partial_TW_i(0,0),\qquad s_i=d_i/\lambda_i.
$$

Here $s_i$ is the original model-conditional SCC whenever those derivatives exist and $0<\lambda_i<\infty$. A derivative of expected welfare must first be justified at the model level. Section 4 gives one sufficient condition; Section 2 calculates finite-pulse welfare directly.

Pulses are in tonnes of CO$_2$ and transfers are in a fixed real-currency unit. Norms involving $(x,T)$ use their numerical coordinates in those fixed units. The toy consumption levels below are also expressed in fixed numerical units. No conversion to tonnes of carbon or another gas is made.

## 2. A compact-family obstruction with no stochastic tails

**Proposition 1 (finite modelwise SCCs do not control the lower-envelope derivative).** For every $q\in(0,1]$, there is a compact model family with jointly continuous welfare, positive consumption, bounded local absolute utility, monotonically harmful additional emissions and $\lambda_i=1$ in every model, such that every model's SCC is zero. Nevertheless, the right marginal loss of the lower welfare envelope is infinite if $q<1$, and strictly positive if $q=1$.

**Construction and proof.** There is one region, two dates, deterministic outcomes, log utility and a fixed discount factor $\beta\in(0,1)$. Index models by $\theta\in[0,1]$. Define

$$
f_\theta(x)=
\begin{cases}
\displaystyle\frac{\theta^q x^3}{\theta^3+|x|^3},&\theta>0,\\[4pt]
0,&\theta=0,
\end{cases}
\quad
c_{0,\theta}(T)=1+T,
\quad
c_{1,\theta}(x)=\exp[-f_\theta(x)/\beta].
$$

For every $T>-1$, consumption is positive and

$$
W_\theta(x,T)=\log(1+T)-f_\theta(x).
$$

Since $|f_\theta(x)|\le\theta^q\le1$, welfare and the discounted absolute utilities are uniformly bounded on $|T|<1/2$. The bound $|f_\theta(x)|\le\theta^q$ also proves joint continuity at every point with $\theta=0$; continuity elsewhere is immediate.

For fixed $\theta>0$,

$$
f'_\theta(0)=0,\qquad
f'_\theta(x)=
\frac{3\theta^{q+3}x^2}{(\theta^3+|x|^3)^2}\ge0\quad(x\ne0).
$$

The $\theta=0$ branch is constant. Thus every model has nondecreasing emissions losses, baseline consumption $(1,1)$, marginal transfer value one and SCC zero. Differentiation under expectation is automatic because the laws are deterministic.

Let $F(x,T)=\inf_{\theta\in[0,1]}W_\theta(x,T)$. For $x>0$, differentiating $\theta^q/(\theta^3+x^3)$ with respect to $\theta$ gives an interior maximum at

$$
\theta_x=x\left(\frac{q}{3-q}\right)^{1/3}.
$$

For $0<x\le1$ and $0<q\le1$, this lies in $[0,1]$. The derivative has the sign of $q x^3-(3-q)\theta^3$, so this is the global maximum, including the endpoints. Consequently

$$
F(x,T)=\log(1+T)-C_qx^q,
\qquad
C_q=\frac{3-q}{3}\left(\frac{q}{3-q}\right)^{q/3}>0
\quad(0<x\le1).
\tag{1}
$$

For $x\le0$, all $f_\theta(x)\le0$ and $f_0(x)=0$, hence $F(x,T)=\log(1+T)$. Equation (1) gives

$$
\lim_{x\downarrow0}\frac{F(0,0)-F(x,0)}x
=
\begin{cases}
+\infty,&0<q<1,\\
2^{2/3}/3,&q=1.
\end{cases}
$$

The transfer restoring baseline worst-case welfare is known exactly:

$$
C(x)=\exp(C_qx^q)-1\quad(0<x\le1).
\tag{2}
$$

Its right rate $C(x)/x$ has the same infinite or positive limit. Each finite-pulse welfare change and compensation is finite. This proves the proposition. $\square$

The original modelwise SCC set here remains exactly $\{0\}$. The infinite quantity is a directional loss of an additional lower-envelope criterion, not an infinite SCC assigned to an individual model. The failure comes from models with $\theta_x\to0$ as the pulse shrinks. In particular,

$$
\sup_\theta |f_\theta(x)|/x=C_qx^{q-1}\not\longrightarrow0.
$$

Compactness, joint continuity and modelwise differentiability do not supply the missing uniform first-order approximation. This differs from A1's stochastic-tail obstruction.

## 3. Correct robust compensation, including unattained worst models

#### 3.1 Criterion and assumptions

Define the lower-envelope welfare and its baseline as

$$
F(x,T)=\inf_{i\in I}W_i(x,T),\qquad
F_0=\inf_{i\in I}W_i(0,0)\in\mathbb R.
$$

The **lower-envelope compensation** $C(x)$ restores $F_0$: $F(x,C(x))=F_0$. This definition uses the common cardinal welfare levels as supplied. Subtracting a different baseline constant from each model would change this criterion.

Assume $I\ne\varnothing$, and that every $W_i$ is $C^1$ on the same open neighbourhood of $(0,0)$. For finite constants $D$, $\underline\lambda$ and $\overline\lambda$, require

$$
|d_i|\le D,\qquad
0<\underline\lambda\le\lambda_i\le\overline\lambda,
\tag{3}
$$

and the following uniform condition:

$$
\sup_{i\in I}\|\nabla W_i(z)-\nabla W_i(0)\|_\infty
\longrightarrow0\quad\text{as }z\to0.
\tag{4}
$$

These are additional sufficient assumptions. The original condition $0<\lambda_i<\infty$ separately for each model does not imply (3).

Put $b_i=W_i(0,0)-F_0\ge0$, and, for $\delta>0$, define

$$
I_\delta=\{i:b_i\le\delta\},\qquad
K_0=\bigcap_{\delta>0}
\overline{\{(d_i,\lambda_i):i\in I_\delta\}}.
\tag{5}
$$

The bar means ordinary closure in $\mathbb R^2$. The sets being intersected are nonempty, nested and compact within the rectangle in (3). Thus $K_0$ is nonempty and compact. It includes limiting gradients of models arbitrarily close to the worst baseline welfare; it does not require a worst model to exist.

#### 3.2 The theorem

**Theorem 2 (directional compensation).** Under (3) and (4), $F$ is finite and locally Lipschitz near $(0,0)$. For all sufficiently small $x$, there is a unique local transfer $C(x)$ restoring $F_0$, with $C(0)=0$ and $|C(x)|\le K|x|$ for a finite $K$. For any fixed direction $(u,v)\in\mathbb R^2$,

$$
\lim_{h\downarrow0}\frac{F(hu,hv)-F_0}{h}
=\min_{(d,\lambda)\in K_0}(-du+\lambda v).
\tag{6}
$$

The right and left rates of the compensation function are

$$
\begin{aligned}
C'_+(0)
&=\max_{(d,\lambda)\in K_0}\frac d\lambda
=\lim_{\delta\downarrow0}\sup_{i\in I_\delta}s_i,\\
C'_-(0)
&=\min_{(d,\lambda)\in K_0}\frac d\lambda
=\lim_{\delta\downarrow0}\inf_{i\in I_\delta}s_i.
\end{aligned}
\tag{7}
$$

The left rate is asserted only when negative pulses are admissible. A two-sided derivative exists exactly when the two values in (7) agree.

**Proof.** Condition (4), after restricting to a smaller neighbourhood, gives $|\partial_xW_i|\le D+1$ and
$\underline\lambda/2\le\partial_TW_i\le\overline\lambda+1$ uniformly in $i$. Differences of any branch between two nearby points are uniformly bounded by a constant times their distance. Taking infima preserves this bound and proves local finiteness and Lipschitz continuity of $F$. Moreover, for $T_2>T_1$,

$$
F(x,T_2)-F(x,T_1)\ge
(\underline\lambda/2)(T_2-T_1).
$$

The values at $T=\pm K|x|$, with $K=2(D+1)/\underline\lambda$, bracket $F_0$. Continuity and strict monotonicity in $T$ give the unique compensation and its bound.

Uniform Taylor expansion yields

$$
W_i(x,T)=W_i(0,0)-d_ix+\lambda_iT+r_i(x,T),
\qquad
\sup_i|r_i(x,T)|=o(|x|+|T|).
\tag{8}
$$

We use the following elementary fact. If $b_i\ge0$, $\inf_i b_i=0$, and $(g_i)$ is bounded, then

$$
\lim_{h\downarrow0}\inf_i\left(\frac{b_i}h+g_i\right)
=\lim_{\delta\downarrow0}\inf_{b_i\le\delta}g_i.
\tag{9}
$$

For the upper limit, restrict to $b_i\le h^2$; the infimum is at most $h+\inf_{b_i\le h^2}g_i$. For the lower limit, fix $\delta>0$. Terms outside $b_i\le\delta$ are at least $\delta/h-\sup_i|g_i|$ and eventually cannot lower the infimum. Then let $\delta\downarrow0$. This proves (9).

Apply (9) to $g_i=-d_i u+\lambda_i v$ in (8). Compactness of the nested sets in (5) identifies the resulting limit with the minimum in (6). The same compactness argument applied to the continuous function $d/\lambda$ gives the two limits in (7).

Let $s_+=\max_{K_0}d/\lambda$. The function

$$
\phi(p)=\min_{(d,\lambda)\in K_0}\lambda\left(p-\frac d\lambda\right)
$$

is strictly increasing, is zero at $p=s_+$, is negative below $s_+$ and positive above it. By (6), $[F(h,hp)-F_0]/h\to\phi(p)$. For any $\varepsilon>0$, the transfers $h(s_+-\varepsilon)$ and $h(s_++\varepsilon)$ therefore bracket $C(h)$ when $h>0$ is sufficiently small. Dividing by $h$ proves the right rate. The direction $(-1,-p)$ gives the left rate at $s_-=\min_{K_0}d/\lambda$. $\square$

If $I$ is a compact metric space and the baseline welfare and gradients are continuous in $i$, then

$$
K_0=\{(d_i,\lambda_i):W_i(0,0)=F_0\}.
$$

Indeed, any sequence with $b_i\to0$ has a subsequence converging to a baseline minimiser, with convergent gradients. The reverse inclusion follows directly from (5).

#### 3.3 A finite-pulse error certificate

Suppose the remainder in (8) satisfies, in the relevant neighbourhood,

$$
\sup_i|r_i(x,T)|\le(|x|+|T|)\varepsilon(|x|+|T|),
$$

where $\varepsilon$ is nondecreasing and tends to zero at zero. With the $K$ above, define

$$
\widehat C(x)=\sup_i\left(s_i x-\frac{b_i}{\lambda_i}\right).
$$

Then

$$
|C(x)-\widehat C(x)|
\le\frac{1+K}{\underline\lambda}|x|\,
\varepsilon((1+K)|x|).
\tag{10}
$$

To verify this, write the equality $F(x,C(x))=F_0$ using (8). Since the $\lambda_i$ are bounded below, it implies

$$
C(x)=\sup_i\left[s_i x-\frac{b_i}{\lambda_i}
-\frac{r_i(x,C(x))}{\lambda_i}\right].
$$

If $C(x)$ exceeded that supremum, all branch welfare differences would be bounded strictly above zero; if smaller, some branch difference would be negative. The remainder bound now proves (10). Thus baseline welfare slack and the damage-numeraire pairing remain visible in a finite-pulse calculation.

#### 3.4 Why the distinctions matter

**Separate partial derivatives give the wrong compensation.** Consider

$$
W_1(x,T)=\log(1+T)-x,\qquad
W_2(x,T)=\log(1+2T)-4x.
$$

Both have baseline welfare zero, with $(d_1,\lambda_1)=(1,1)$ and $(d_2,\lambda_2)=(4,2)$. They can be realised with the same log utility and transfer allocation: model 1 has $c_0=1+T$, $c_1=e^{-x/\beta}$; model 2 has $c_0=1/2+T$, $c_1=2^{1/\beta}e^{-4x/\beta}$. For $F=\min(W_1,W_2)$, the separate right partial derivatives are $F_{x,+}=-4$ and $F_{T,+}=1$. Their negative ratio is four. The exact compensation is

$$
C(x)=\max\{e^x-1,(e^{4x}-1)/2\},
$$

whose right rate is two and left rate is one. Compensation uses the joint direction in (6), preserving each model's ratio.

**Near-minimisers cannot generally be discarded.** Let $W_0=\log(1+T)$ and $W_n=1/n+\log(1+T)-2x$ for $n\ge1$. Only model zero attains the worst baseline welfare and its SCC is zero. Nevertheless,
$F=\log(1+T)+\min(0,-2x)$, and $C'_+(0)=2$. The models approaching the baseline infimum are essential. These functions satisfy the uniform conditions and are realised by $c_0=1+T$, $c_{1,n}=\exp[(1/n-2x)/\beta]$, with $c_{1,0}=1$.

**Modelwise positive numeraires need not give a finite robust transfer.** Let
$W_n(x,T)=\log(1+T/n)-x^2$, $n\ge1$. Every SCC is zero and every $\lambda_n=1/n$ is positive. But for every $x\ne0$ and finite $T\ge0$, $\inf_nW_n(x,T)=-x^2<0$. For $T<0$ in the common domain, welfare is also below zero. There is no finite compensation. The original framework is realised by $c_{0,n}=n+T$ and $c_{1,n}=n^{-1/\beta}e^{-x^2/\beta}$. This verifies the role of a uniform denominator lower bound.

**Restoring every model is a different criterion.** If instead a transfer must satisfy $W_i(x,T)\ge W_i(0,0)$ for every $i$, apply the theorem to the centred branches $W_i(x,T)-W_i(0,0)$. All baseline slacks are then zero. The right compensation rate becomes $\sup_i s_i$, and the left rate becomes $\inf_i s_i$. These are the endpoints of the envelope of the full modelwise SCC set, which need not itself be an interval.

## 4. Certified SCC endpoints with continuous, unbounded states

This section supplies a sufficient finiteness condition and a finite-grid error certificate for one declared structural model. It extends A1's finite-state calculation; it does not discretise away structural uncertainty without a bound.

#### 4.1 Declared probability class

Let $X$ be a metric space with its Borel sigma field. Let $v:X\to[1,\infty)$ be continuous with compact sublevel sets $K_R=\{z:v(z)\le R\}$. Let the statewise marginal loss $d$, transfer value $\ell$ and evidence moments $h_1,\ldots,h_k$ be continuous, with

$$
|g(z)|\le a_g v(z),\qquad g\in\{d,\ell,h_1,\ldots,h_k\}.
\tag{11}
$$

The $a_g$ are finite nonnegative constants. Let baseline state welfare $w_0$ be finite and measurable. For declared $p>1$, $M<\infty$, $\lambda_0>0$ and bounds $b_j$, define

$$
\mathcal P=\left\{P:
\begin{array}{l}
E_P|w_0|<\infty,\quad E_Pv^p\le M,\\
E_Ph_j\le b_j\ (1\le j\le k),\quad E_P\ell\ge\lambda_0
\end{array}\right\}.
\tag{12}
$$

Require a known anchor law $P^\circ\in\mathcal P$ with strictly positive slacks

$$
\sigma_0=M-E_{P^\circ}v^p,
\quad \sigma_j=b_j-E_{P^\circ}h_j,
\quad \sigma_\lambda=E_{P^\circ}\ell-\lambda_0.
\tag{13}
$$

Write $\Lambda^\circ=E_{P^\circ}\ell$ and $S^\circ=E_{P^\circ}d/\Lambda^\circ$. Statewise $\ell$ may be signed; admissible expected transfer values are positive.

**Link to the original SCC.** Suppose state welfare $w(x,T,z)$ is measurable in $z$ for every $(x,T)$ in a common neighbourhood, equals $w_0(z)$ at the baseline, is differentiable in $x,T$ throughout that neighbourhood, and has baseline partial derivatives $-d(z),\ell(z)$. If its neighbourhood partial derivatives are bounded in absolute value by $a_dv(z),a_\ell v(z)$, respectively, then $E_Pv\le M^{1/p}$. The mean value theorem and dominated convergence justify each expected derivative. Baseline integrability and these derivative bounds also make nearby welfare finite. Thus

$$
S(P)=\frac{E_Pd}{E_P\ell}
\quad\text{is the original SCC, and}\quad
|S(P)|\le B:=\frac{a_dM^{1/p}}{\lambda_0}.
\tag{14}
$$

This is differentiation for each law, not an assertion about differentiating an infimum. Let $S_{\min}=\inf_{\mathcal P}S(P)$ and $S_{\max}=\sup_{\mathcal P}S(P)$.

#### 4.2 Grid construction and theorem

Choose $z_0\in X$ and $R\ge v(z_0)$. Let a finite grid $G_R\subset K_R$ contain $z_0$, and let a Borel map $q_R:X\to G_R$ send states outside $K_R$ to $z_0$. On $K_R$, certify

$$
|g(z)-g(q_R(z))|\le\eta_g,
\quad
|v(z)^p-v(q_R(z))^p|\le\eta_0.
\tag{15}
$$

Continuity and compactness allow arbitrarily small positive tolerances with a sufficiently fine finite grid. The numerical tolerances for any chosen grid must actually be established.

For each $g$ in (11), set

$$
\varepsilon_g=\eta_g+\frac{a_gM}{R^{p-1}}
+\frac{|g(z_0)|M}{R^p},\qquad
\lambda_R=\lambda_0-\varepsilon_\ell>0.
\tag{16}
$$

On the finite grid, define the probability polytope

$$
\mathcal Q_R=\left\{Q:
\begin{array}{l}
\operatorname{supp}(Q)\subseteq G_R,\quad E_Qv^p\le M+\eta_0,\\
E_Qh_j\le b_j+\varepsilon_{h_j},\quad E_Q\ell\ge\lambda_R
\end{array}\right\}.
$$

Let $L_R$ and $U_R$ be the minimum and maximum of $S(Q)=E_Qd/E_Q\ell$ on $\mathcal Q_R$. Define

$$
B_R=\frac{a_d(M+\eta_0)^{1/p}}{\lambda_R},
\qquad
\Delta_R=\frac{\varepsilon_d+B\varepsilon_\ell}{\lambda_R},
$$

$$
\theta_R=\max\left\{
\frac{\eta_0}{\sigma_0+\eta_0},\quad
\frac{\varepsilon_\ell}{\sigma_\lambda+\varepsilon_\ell},\quad
\max_j\frac{\varepsilon_{h_j}}{\sigma_j+\varepsilon_{h_j}}
\right\},
$$

$$
\Gamma_R=(B_R+|S^\circ|)
\frac{\theta_R\Lambda^\circ}
{(1-\theta_R)\lambda_R+\theta_R\Lambda^\circ}.
\tag{17}
$$

The maximum over $j$ is omitted when $k=0$. The strict slacks imply $0\le\theta_R<1$.

**Theorem 3 (endpoint certificates and feasible corrections).** Under (11) to (16), $\mathcal Q_R$ is nonempty and its endpoints are attained. The true endpoints satisfy

$$
\boxed{L_R-\Delta_R\le S_{\min}\le L_R+\Gamma_R},
\qquad
\boxed{U_R-\Gamma_R\le S_{\max}\le U_R+\Delta_R}.
\tag{18}
$$

Every grid law has the explicitly admissible correction

$$
P_Q=(1-\theta_R)Q+\theta_RP^\circ\in\mathcal P,
\qquad |S(P_Q)-S(Q)|\le\Gamma_R.
\tag{19}
$$

If $R\to\infty$ and all grid errors tend to zero, both certificates vanish. When all grid errors are $O(\eta)$, the endpoint errors are $O(\eta+R^{1-p})$, with constants depending on the displayed envelopes, denominator floor and anchor slacks. This is a resolution-error rate, not a running-time bound.

**Proof.** Hölder's inequality gives (14). For every $P\in\mathcal P$,

$$
P(v>R)\le M/R^p,\qquad
E_P[v\mathbf1_{v>R}]\le M/R^{p-1}.
$$

Let $Q=q_{R\#}P$ be the image law under the grid map. Splitting each expectation into $K_R$ and its complement proves
$|E_Pg-E_Qg|\le\varepsilon_g$. For $v^p$, mapping a tail state to $z_0$ decreases its contribution because $v(z_0)\le R<v(z)$. Hence $E_Qv^p\le E_Pv^p+\eta_0$. This proves $Q\in\mathcal Q_R$ and nonemptiness. It does not require uniformly negligible tails of $v^p$ itself.

Writing $D_P=E_Pd$ and $\Lambda_P=E_P\ell$, the identity

$$
S(P)-S(Q)=
\frac{D_P-D_Q-S(P)(\Lambda_P-\Lambda_Q)}{\Lambda_Q}
$$

gives $|S(P)-S(Q)|\le\Delta_R$.

For any relaxed upper moment constraint with error $\varepsilon$ and anchor slack $\sigma$, mixing gives an expectation at most
$b+(1-\theta_R)\varepsilon-\theta_R\sigma\le b$. This applies to $v^p$, the $h_j$ and $-\ell$. Baseline welfare is integrable under the mixture because $Q$ has finite support at states with finite $w_0$ and the anchor has integrable $|w_0|$. Therefore (19)'s feasibility assertion holds. The exact ratio identity

$$
S(P_Q)-S(Q)=
\frac{\theta_R\Lambda^\circ[S^\circ-S(Q)]}
{(1-\theta_R)\Lambda_Q+\theta_R\Lambda^\circ}
$$

together with $|S(Q)|\le B_R$ and $\Lambda_Q\ge\lambda_R$ proves the error bound in (19). Projection puts every admissible true SCC within $\Delta_R$ of a grid SCC. Correction puts every grid SCC within $\Gamma_R$ of an admissible true SCC. Taking infima and suprema in the appropriate directions proves (18). Compactness of the finite probability polytope and its denominator floor give attainment. The explicit formulas prove convergence and the rate. $\square$

The grid optimisation is a linear programme after setting $y=\tau Q$ and $\tau=(E_Q\ell)^{-1}$. Its constraints are $y\ge0$, $\tau\ge0$, $\sum y=\tau$, $\ell^{\mathsf T}y=1$, the displayed upper moments multiplied by $\tau$, and $1\ge\lambda_R\tau$. Minimise or maximise $d^{\mathsf T}y$. Conversely, $\tau=0$ would force $y=0$, contradicting $\ell^{\mathsf T}y=1$; thus $Q=y/\tau$ recovers a feasible probability law. This also covers signed statewise transfer values.

Because (12) is convex, mixing admissible laws continuously connects any two SCC values while their denominators stay positive. Its SCC image is therefore an interval with closure $[S_{\min},S_{\max}]$. No attainment of these exact infinite-state endpoints is claimed. Finite structural-model ambiguity is handled by a union of such intervals; an arbitrary structural class requires uniform constants and approximation control over that class.

Exact evidence-moment equalities are not covered by the anchor correction: converting an equality to two inequalities cannot give the positive slacks in (13). Additional moment repair would be needed.

#### 4.3 Why a bounded first moment does not suffice

On $z\ge0$, let $P_n=(1-1/n)\delta_0+(1/n)\delta_n$ for $n=1,2,\ldots$, with $d(z)=z$ and $\ell(z)=1$. Every law has $S(P_n)=1$, but for every finite clipping level $R>0$,

$$
E_{P_n}(d\wedge R)=\frac{\min(n,R)}n,
\qquad \inf_n E_{P_n}(d\wedge R)=0.
\tag{20}
$$

Thus clipping produces a lower endpoint that remains wrong at every finite resolution. This fits the original welfare framework with $c_0=1+T$, $c_1=\exp(-xz/\beta)$ and log utility: $W_{P_n}(x,T)=\log(1+T)-x$. All relevant expected utilities and derivatives are finite under each law.

For nonnegative $d$, uniform integrability is equivalent to vanishing uniform expected clipping error, since

$$
E(d-R)_+\le E[d\mathbf1_{d>R}],\qquad
E[d\mathbf1_{d>2R}]\le2E(d-R)_+.
$$

This necessity concerns uniform clipping accuracy. It is not a necessity condition for all finite or bounded SCC ratios, whose numerator and denominator tails may offset each other.

## 5. Sharp mitigation regret for nonlinear policy welfare

#### 5.1 Declared welfare criterion

Let $a\in[0,A]$ be abatement in tonnes, and let $\mathcal W_i(a)$ denote welfare under the actual financed policy and selected adaptation response. Use the explicit criterion

$$
G_i(a)=\frac{\mathcal W_i(a)-\mathcal W_i(0)}{\lambda_i(0)},
\qquad
R_i(a)=\max_{b\in[0,A]}[G_i(b)-G_i(a)].
\tag{21}
$$

This is regret in welfare divided by the model's baseline marginal value of the specified currency transfer. It is not exact finite compensating variation. It also differs from minimax regret in unnormalised cardinal welfare when the $\lambda_i$ differ. Within a model, $R_i(a)=[\max_b\mathcal W_i(b)-\mathcal W_i(a)]/\lambda_i(0)$ exactly.

For example, if $\mathcal W_i(a)=W_i(-a,-\kappa a^2/2)$, joint differentiability and the chain rule give $G'_i(0)=s_i$, because the cost has derivative zero at zero. All finite-action transfer, damage and adaptation effects must still be included in $G_i$.

#### 5.2 The nonlinear class and exact solution

Fix $0\le l\le u<\infty$, $A>0$ and $\kappa>L\ge0$. Let $\mathcal G$ consist of all $C^1$ functions $G:[0,A]\to\mathbb R$ such that, for some $s\in[l,u]$,

$$
G(0)=0,\qquad G'(0)=s,\qquad
|G'(a)-(s-\kappa a)|\le La\quad(0\le a\le A).
\tag{22}
$$

The constants $\kappa,L$ have units of currency per tonne squared. Condition (22) is a uniform bound on marginal policy welfare, not a claim that every $G$ is concave. A second-derivative bound $|G''(a)+\kappa|\le L$ is sufficient, but stronger than needed. In applications, (22) must be verified on the entire decision interval.

For the financed path $\mathcal W_i(a)=W_i(-a,-\kappa a^2/2)$ with $W_i$ twice continuously differentiable around that path, the chain rule gives

$$
G_i''(a)+\kappa=
\frac{W_{i,xx}+2\kappa aW_{i,xT}+\kappa^2a^2W_{i,TT}
-\kappa[W_{i,T}-\lambda_i(0)]}{\lambda_i(0)}.
\tag{22a}
$$

All partial derivatives on the right are evaluated at $(-a,-\kappa a^2/2)$. A uniform absolute bound of $L$ on (22a) implies (22) by integration. This gives a sufficient condition in terms of the original expected-welfare functions and explicitly includes changes in the marginal transfer value. Existence of those expected-welfare derivatives must itself be justified.

Define

$$
k_-=\kappa+L,\quad k_+=\kappa-L,
\qquad F_-(a)=la-\frac{k_-a^2}{2},\quad
F_+(a)=ua-\frac{k_+a^2}{2}.
$$

**Theorem 4 (sharp nonlinear minimax regret).** For every $a\in[0,A]$,

$$
\sup_{G\in\mathcal G}\max_{b\in[0,A]}[G(b)-G(a)]
=\max\{R_-(a),R_+(a)\},
\tag{23}
$$

where $R_\pm(a)=\max_bF_\pm(b)-F_\pm(a)$. Thus the two extremal quadratic curves determine the exact worst-case regret over the full nonlinear class.

For an arbitrary capacity $A$, put

$$
x_- =\min(A,l/k_-),\quad x_+=\min(A,u/k_+),
\qquad v_-=F_-(x_-),\quad v_+=F_+(x_+).
$$

If $x_-=x_+$, their common value is the unique minimax action and its regret is zero. Otherwise the unique minimax action is the root in $(x_-,x_+)$ of

$$
La^2+(u-l)a+v_--v_+=0.
\tag{24}
$$

For every capacity, define the minimax value by $R^*=\max\{R_-(a^*),R_+(a^*)\}$. When $A\ge u/(\kappa-L)$, both unconstrained optima are feasible, and the result has the closed form

$$
\boxed{
a^*=
\frac{\sqrt{k_-}\,(l/k_-)+\sqrt{k_+}\,(u/k_+)}
{\sqrt{k_-}+\sqrt{k_+}}
},
\tag{25}
$$

$$
\boxed{
R^*=\frac12
\left(\frac{\sqrt{k_-k_+}}{\sqrt{k_-}+\sqrt{k_+}}\right)^2
\left(\frac{u}{k_+}-\frac{l}{k_-}\right)^2
}.
\tag{26}
$$

**Proof.** The derivative bounds in (22) imply $F_-'(a)\le G'(a)\le F_+'(a)$. For $b\ge a$, integration gives
$G(b)-G(a)\le F_+(b)-F_+(a)\le R_+(a)$. For $b\le a$, reversing the integral and using the lower derivative bound gives
$G(b)-G(a)\le F_-(b)-F_-(a)\le R_-(a)$. This proves the upper bound in (23). Both $F_-$ and $F_+$ belong to $\mathcal G$, with baseline slopes $l,u$ and remainders $-La,+La$, respectively. The bound is therefore attained by one of them for each action, proving equality.

The extrema of $F_-$ and $F_+$ on the capacity interval are at $x_-,x_+$. Hence

$$
R_-(a)=v_--la+k_-a^2/2,\qquad
R_+(a)=v_+-ua+k_+a^2/2.
$$

Their constrained optimisers satisfy $x_-\le x_+$. Projecting an action outside $[x_-,x_+]$ towards that interval decreases both regrets. If these points coincide, both regrets vanish only there. If distinct, $R_-$ strictly increases and $R_+$ strictly decreases between them. At $x_-$ the first regret is zero and the second positive; at $x_+$ the converse holds. Their unique intersection therefore minimises their maximum. Subtracting the two expressions gives (24).

When the unconstrained optima are feasible, $R_-(a)=k_-(a-l/k_-)^2/2$ and $R_+(a)=k_+(a-u/k_+)^2/2$. On the bracket, equalising their positive square roots gives (25). Substitution gives (26). $\square$

When the capacity is nonbinding, setting $L=0$ recovers A1's action $(l+u)/(2\kappa)$ and regret $(u-l)^2/(8\kappa)$. When $l=u$ but $L>0$, uncertainty away from the baseline can still yield strictly positive regret. One must use (24), rather than insert clipped optimisers into (25), when capacity binds.

For an actual structural subclass satisfying (22), equations (23) to (26) give a valid worst-case bound. They are sharp for that subclass only if it contains or approximates the extremal curves. If all its baseline numeraires obey $\lambda_i\le\overline\lambda$, the raw welfare regret of the recommended action is bounded above by $\overline\lambda R^*$. This does not make the action minimax for the raw-welfare criterion.

**Embedding in the original welfare framework.** For either extremal curve, choose a deterministic two-date, one-region log-utility model, a fixed $\beta\in(0,1)$ and $Q>\kappa A^2/2$. Define

$$
c_0(x,T)=Q+T,\qquad
c_1(x)=\left[\frac{\exp(G(-x)/Q)}{1-\kappa x^2/(2Q)}\right]^{1/\beta}.
\tag{27}
$$

The common domain $T>-Q$, $|x|<\sqrt{2Q/\kappa}$ contains the entire financed path and both pulse directions around zero. On that path,
$W(-a,-\kappa a^2/2)=\log Q+G(a)/Q$. Baseline consumption is $(Q,1)$, $\lambda=1/Q$ and SCC equals $G'(0)$. Thus (21) recovers exactly the specified $G$. This demonstrates compatibility of the extremal functions with the original mathematical primitives, while leaving empirical compatibility unresolved.

**Illustrative calculation, not a climate calibration.** With $l=40$, $u=100$ and $\kappa=2$, the verified formulas give the following results. Monetary values use an arbitrary fixed real-currency unit; abatement is in tonnes.

| Derivative allowance $L$ | Capacity $A$ | Minimax abatement $a^*$ | Worst-case regret $R^*$ |
|---:|---:|---:|---:|
| 0 | 100 | 35.000000 | 225.000000 |
| 0.5 | 100 | 38.115578 | 611.373494 |
| 0.5 | 50 | 35.968745 | 498.438467 |
| 0.5 | 10 | 10.000000 | 0.000000 |

For a singleton SCC $l=u=40$ with $\kappa=2$, $L=0.5$ and $A=100$, the result is $a^*=20.655911$ and $R^*=27.096886$. Thus zero uncertainty about the baseline derivative does not imply zero uncertainty about the best finite policy. Capacity also constrains the comparator that knows the model, which explains the zero regret when every admissible model favours the same capacity limit.

#### 5.3 What a local SCC alone cannot establish, even with beneficial abatement

**Proposition 5 (only a trivial guarantee without global restrictions).** Fix $A>0$, $\kappa>0$ and a known singleton SCC $s\ge0$. Consider all smooth monetary benefit functions $B$ on $[0,A]$ satisfying $B(0)=0$, $B'(0)=s$ and $B'\ge0$. Set $G(a)=B(a)-\kappa a^2/2$. Then every action $a<A$ has infinite worst-case regret over this class, whereas full abatement has worst-case regret exactly $\kappa A^2/2$. It is therefore the unique minimax action for this unrestricted class.

**Proof.** For any fixed $a<A$, take $B'_K(z)=s+K\psi(z)$, where $\psi$ is a nonnegative, nonzero smooth function supported strictly within $(a,A)$. The value of $B'_K(0)$ remains $s$. Comparing action $a$ with $A$ makes regret diverge as $K\to\infty$.

For full abatement, monotonicity gives, for all $b\le A$,

$$
G(b)-G(A)\le\frac{\kappa}{2}(A^2-b^2)\le\frac{\kappa A^2}{2}.
$$

For $s>0$, choose $B_\varepsilon'(z)=s e^{-z/\varepsilon}$. Then $0\le B_\varepsilon(A)\le s\varepsilon$, so comparison with action zero gives regret at least $\kappa A^2/2-s\varepsilon$. Let $\varepsilon\downarrow0$. For $s=0$, $B=0$ attains the bound directly. $\square$

Use (27) to embed these functions in the original framework. For the bump construction take $\psi$ smooth on $\mathbb R$ with the stated compact support; the exponential construction already extends smoothly to negative $a$. The common positive-consumption domain includes both pulse directions, the baseline marginal transfer value is $1/Q$, and every baseline SCC is $s$. Moreover, writing $C(a)=\kappa a^2/2$ gives

$$
\frac{d}{da}\log c_1(-a)=\frac1\beta\left[
\frac{B'(a)}Q+\frac{C'(a)C(a)}{Q[Q-C(a)]}\right]\ge0.
$$

Thus future consumption is nondecreasing in abatement in these examples. All individual finite-pulse welfare values are finite. The infinite supremum reflects the absence of a uniform global benefit restriction, not infinite welfare in an individual model.

Thus a precise local SCC, even one shared by all models, cannot by itself support the informative finite-action guarantee in Theorem 4. The uniform condition (22) supplies substantive additional information.

## 6. Audit, verification and remaining work

#### Mathematical audit

- **Targets:** Modelwise SCC, lower-envelope directional loss, lower-envelope compensation, compensation restoring every model, and baseline-numeraire-normalised regret are separately defined. No derivative of an infimum is identified with a derivative under expectation.
- **Quantifiers:** Proposition 1 holds for every fixed $q\in(0,1]$; Theorem 2 covers arbitrary nonempty index sets under uniform conditions, without attained baseline minima; Theorem 3 is conditional on a declared probability class and certified grids; Theorem 4 is sharp for the full derivative-envelope class, and gives an upper bound for a smaller structural class.
- **Boundary cases:** The cases $q=1$, $\theta=0$, negative admissible pulses, singleton SCC sets, $L=0$, $l=u=0$, binding capacity, no evidence moments, signed marginal kernels, zero grid errors and unattained exact probability endpoints are covered. The case $A=0$ has the single feasible action zero and zero regret. Theorem 4's closed forms require $\kappa>L$; they are not asserted at or beyond $\kappa=L$.
- **Numeraires:** All ratio manipulations retain paired numerator and denominator information. The uniform denominator floor and its role in feasibility are explicit. Finite normalised welfare differences are not described as exact compensating variation.
- **Tails and approximation:** Baseline-welfare integrability is separate from derivative integrability. Mapping the tail to the anchor state only needs a one-sided error for the $v^p$ budget. Uniform clipping accuracy is distinguished from bounded SCC ratios. Probability-moment equalities are explicitly outside the grid-correction theorem.
- **Economic interpretation:** The examples fix transfer allocation and selected policy responses, and explicitly realise positive consumption. No mathematical parameter is represented as an empirical climate estimate.

#### Verification performed

The proofs were derived explicitly and cross-checked by parallel assistant reviewers. The accompanying script checks the counterexample algebra, finite compensation examples, regret equalisation and capacity cases, extremal bounds for sampled nonlinear functions, and the ratio and feasibility-correction identities. The machine-readable output records the actual run and package versions. These are symbolic and numerical checks of stated formulas, not an empirical validation or a formal proof of the general theorems. No Lean verification was performed; neither Lean nor Lake was available on `PATH`.

The recorded run passed 13 symbolic identities, nine regret capacity and degeneracy cases, bounds for 200 sampled nonlinear functions, 100,000 algebraic mixture and constraint-correction cases, and a signed-transfer finite-state LP comparison against direct vertex enumeration. The largest absolute residual in the two ratio-identity checks was $2.85\times10^{-14}$ after rounding upwards. The software versions were Python 3.12.14, NumPy 2.3.5, SciPy 1.17.0 and SymPy 1.14.0.

#### Remaining gaps

1. No empirical structural class $\mathcal M$, probability restrictions $\mathcal P(m)$ or SCC confidence set has been identified. Choosing and validating those restrictions remains the central applied task.
2. Uniform regularity in Theorem 2 and the marginal envelope in Theorem 4 have not been established for an integrated assessment model, reoptimised adaptation programme or equilibrium selector.
3. The moment bounds, numerical grid tolerances, strict anchor slacks and denominator floor in Theorem 3 require substantive evidence. Equality-constrained moment repair and non-strict feasibility need different arguments.
4. The mitigation model has a single abatement decision over a bounded interval. Multiperiod learning, irreversible investment and dynamic consistency are not analysed.
5. Infinite horizons require additional convergence conditions. No infinite-horizon conclusion is inferred from the finite-horizon constructions.
6. This is progress on restricted mathematical questions within the research family. It neither establishes a unique monetary SCC nor certifies the open status or novelty of the full problem.

#### Submission preparation and reproduced checks

The original research manuscript and its mathematical claims are unchanged. During submission preparation on 18 October 2026, the archived manuscript, verification script and original problem statement were matched to their recorded SHA-256 hashes. The supplied verification script was rerun without modification using Python 3.12.14, NumPy 2.3.5, SciPy 1.17.0 and SymPy 1.14.0. It exited successfully; the new JSON result is identical to the original recorded result except for the run timestamp. This is reproduction of the same symbolic and finite numerical checks, not an independent mathematical proof, empirical validation or novelty assessment.

The reproducibility supplement supplies the unchanged verification script, original recorded results and original-statement provenance. The original statement is also available from the official source identified in [P]. The complete Markdown above is the submission; the separately prepared PDF and source package are review materials. The submitter identified the research model as GPT-6-Pro before publication; the exact version beyond that name and the reasoning settings are unknown. Preparation and compliance-review assistants remain separately disclosed with unknown model names. A separate compliance-only review checked the current issue template and official source/rights records and corrected attribution; it did not assess mathematical correctness. Historical source-inspection statements below describe the original research run; they do not imply that the submission-preparation assistant re-read every external source.

## References

- **[P]** we-solve research archive. *Social cost of carbon under deep uncertainty*, ECON-Q51-192. [Problem page](https://we-solve.github.io/problems/social-cost-of-carbon-under-deep-uncertainty/). The full page and downloadable original TeX statement were read. The supplied problem is preserved rather than replaced by the conditional statements above. Rights holder: mehmetmars7; [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), verified in the [official rights record](https://github.com/We-Solve/research/blob/main/problems/23/prb_232552d157d14327a572cb006068e117/problem.yaml). The source statement is copied unchanged; the quoted formal-question passage has only Markdown/LaTeX-formatting changes. No endorsement is implied.
- **[A1]** we-solve research archive (2026). *GPT 6 Astra Ultra attempt on Econ-192*, contribution ECON-Q51-192-A1, revision r1, first posted 9 October 2026. [Permanent revision](https://we-solve.github.io/contributions/social-cost-of-carbon-under-deep-uncertainty/attempt-1/r1/). The entire manuscript and TeX source were inspected. Its generated and unverified status is retained; the present work does not treat it as peer-reviewed authority.
- **[D]** John M. Danskin (1966). *The Theory of Max-Min, with Applications*. SIAM Journal on Applied Mathematics 14(4), 641-664. [DOI: 10.1137/0114053](https://doi.org/10.1137/0114053). Publisher abstract and bibliographic record checked. Cited for historical context concerning differentiation of max-min objectives; no unseen theorem from the article is invoked as a proof.
- **[M]** Stephen J. DeCanio, Charles F. Manski and Alan H. Sanstad (2022). *Minimax-Regret Climate Policy with Deep Uncertainty in Climate Modeling and Intergenerational Discounting*. NBER Working Paper 29716, February 2022. [Primary paper](https://www.nber.org/system/files/working_papers/w29716/w29716.pdf). Title page, abstract and introduction inspected. Cited only for established use of minimax regret with climate-model and discounting uncertainty. This reference is to the checked working-paper version, not a claim to have inspected the subsequent journal version.

## Additional author notes

# Reproducibility supplement for ECON-Q51-192

This supplement accompanies “Uniform control of structural ambiguity: robust compensation, certified SCC bounds and sharp nonlinear mitigation regret”, a partial-result contribution. The code and original machine-readable results below are preserved verbatim from the completed Pro run. They test algebra and finite numerical cases; they do not formally prove the general theorems or validate a climate model.

## Reproduce

Save the script below as `verify_econ192.py`, then run the command below. If the unchanged original manuscript `econ192-submission.md` is beside it, the output also records its SHA-256. That Markdown file is in the full review package, not the source-only ZIP. Without it, the same formula checks run, but the `manuscript_sha256` field is omitted. The issue-form body has different metadata and formatting and must not be substituted when reproducing the original manuscript hash.


*Code is not included in this manuscript.*

The script uses fixed random seed 19220261018. The original record was generated on 18 October 2026 at 09:01:05 UTC. An unchanged-script rerun during submission preparation passed in the same software versions and reproduced every JSON field except the timestamp. The repeated computation is not independent proof verification.

## Original verification script


*Code is not included in this manuscript.*

## Original verification record

```json
{
  "status": "passed",
  "run_time_utc": "2026-10-18T09:01:05.772532+00:00",
  "random_seed": 19220261018,
  "versions": {
    "python": "3.12.14",
    "numpy": "2.3.5",
    "scipy": "1.17.0",
    "sympy": "1.14.0"
  },
  "symbolic": {
    "passed": [
      "positive-pulse loss derivative",
      "model-index derivative and maximiser sign",
      "negative-pulse algebraic derivative",
      "exact envelope for q=1/4",
      "exact envelope for q=1/2",
      "exact envelope for q=1",
      "uncapped regret equalisation",
      "uncapped minimax regret expression",
      "capped equal-regret polynomial",
      "financed-path Hessian certificate algebra",
      "law-dependent mixture ratio",
      "derivative of financed positive-consumption embedding",
      "baseline of positive-consumption embedding"
    ],
    "count": 13
  },
  "compact_counterexample": {
    "cases": [
      {
        "q": 0.25,
        "pulse": 0.0001,
        "maximising_model": 4.4964431302260926e-05,
        "exact_envelope_loss": 0.07506348355726666,
        "compensation": 0.07795258097692091
      },
      {
        "q": 0.25,
        "pulse": 0.01,
        "maximising_model": 0.004496443130226092,
        "exact_envelope_loss": 0.23737157714756085,
        "compensation": 0.2679121574388955
      },
      {
        "q": 0.25,
        "pulse": 1.0,
        "maximising_model": 0.4496443130226092,
        "exact_envelope_loss": 0.7506348355726666,
        "compensation": 1.1183443902134982
      },
      {
        "q": 0.5,
        "pulse": 0.0001,
        "maximising_model": 5.848035476425733e-05,
        "exact_envelope_loss": 0.006372704094431084,
        "compensation": 0.006393052976003795
      },
      {
        "q": 0.5,
        "pulse": 0.01,
        "maximising_model": 0.005848035476425733,
        "exact_envelope_loss": 0.06372704094431085,
        "compensation": 0.06580143889893313
      },
      {
        "q": 0.5,
        "pulse": 1.0,
        "maximising_model": 0.5848035476425733,
        "exact_envelope_loss": 0.6372704094431084,
        "compensation": 0.8913113216031379
      },
      {
        "q": 1.0,
        "pulse": 0.0001,
        "maximising_model": 7.937005259840998e-05,
        "exact_envelope_loss": 5.291336839893999e-05,
        "compensation": 5.2914768335909336e-05
      },
      {
        "q": 1.0,
        "pulse": 0.01,
        "maximising_model": 0.007937005259840998,
        "exact_envelope_loss": 0.005291336839893999,
        "compensation": 0.005305360686725802
      },
      {
        "q": 1.0,
        "pulse": 1.0,
        "maximising_model": 0.7937005259840998,
        "exact_envelope_loss": 0.5291336839893999,
        "compensation": 0.697461133701871
      }
    ],
    "max_relative_optimisation_error": 4.3553843398885693e-16
  },
  "compensation": {
    "finite_pulse_cases": 33,
    "maximum_root_residual": 0.0,
    "right_rate_at_h_1e_8": 2.0000000400000006,
    "left_rate_at_h_1e_8": 0.999999995
  },
  "nonlinear_regret": {
    "capacity_and_degeneracy_cases": [
      {
        "lower_scc": 40,
        "upper_scc": 100,
        "kappa": 2,
        "L": 0.5,
        "cap": 100,
        "x_minus": 16.0,
        "x_plus": 66.66666666666667,
        "minimax_action": 38.11557810392124,
        "minimax_regret": 611.3734935883006
      },
      {
        "lower_scc": 40,
        "upper_scc": 100,
        "kappa": 2,
        "L": 0.5,
        "cap": 50,
        "x_minus": 16.0,
        "x_plus": 50,
        "minimax_action": 35.96874491208065,
        "minimax_regret": 498.4384667046836
      },
      {
        "lower_scc": 40,
        "upper_scc": 100,
        "kappa": 2,
        "L": 0.5,
        "cap": 10,
        "x_minus": 10,
        "x_plus": 10,
        "minimax_action": 10,
        "minimax_regret": 0.0
      },
      {
        "lower_scc": 40,
        "upper_scc": 100,
        "kappa": 2,
        "L": 0.5,
        "cap": 0,
        "x_minus": 0.0,
        "x_plus": 0.0,
        "minimax_action": 0.0,
        "minimax_regret": 0.0
      },
      {
        "lower_scc": 40,
        "upper_scc": 100,
        "kappa": 2,
        "L": 0,
        "cap": 100,
        "x_minus": 20.0,
        "x_plus": 50.0,
        "minimax_action": 35.0,
        "minimax_regret": 225.0
      },
      {
        "lower_scc": 40,
        "upper_scc": 40,
        "kappa": 2,
        "L": 0.5,
        "cap": 100,
        "x_minus": 16.0,
        "x_plus": 26.666666666666668,
        "minimax_action": 20.655911179772893,
        "minimax_regret": 27.096886142417816
      },
      {
        "lower_scc": 0,
        "upper_scc": 0,
        "kappa": 2,
        "L": 0.5,
        "cap": 100,
        "x_minus": 0.0,
        "x_plus": 0.0,
        "minimax_action": 0.0,
        "minimax_regret": 0.0
      },
      {
        "lower_scc": 0,
        "upper_scc": 100,
        "kappa": 2,
        "L": 0.5,
        "cap": 50,
        "x_minus": 0.0,
        "x_plus": 50,
        "minimax_action": 27.47548783981962,
        "minimax_regret": 943.6280400450951
      },
      {
        "lower_scc": 40,
        "upper_scc": 40,
        "kappa": 2,
        "L": 0,
        "cap": 100,
        "x_minus": 20.0,
        "x_plus": 20.0,
        "minimax_action": 20.0,
        "minimax_regret": 0.0
      }
    ],
    "sampled_nonlinear_functions": 200,
    "actions_per_function": 101,
    "comparators_per_function": 4001,
    "maximum_sampled_regret_minus_bound": 8.881784197001252e-16,
    "note": "Grid checks corroborate inequalities; they do not prove maxima over the continuum."
  },
  "tail_and_mixture": {
    "algebraic_cases": 100000,
    "maximum_correction_constraint_excess": -2.0211500748948397e-06,
    "maximum_mixture_identity_residual": 1.4210854715202004e-14,
    "maximum_mixture_error_bound_excess": -0.05717258273354631,
    "maximum_projection_ratio_identity_residual": 2.842170943040401e-14
  },
  "signed_transfer_linear_programme": {
    "enumerated_feasible_vertices": 5,
    "minimum": {
      "endpoint": 1.75,
      "law": [
        0.0,
        0.4999999999999999,
        0.5000000000000001
      ]
    },
    "maximum": {
      "endpoint": 3.75,
      "law": [
        0.6250000000000001,
        0.0,
        0.375
      ]
    },
    "statewise_transfer_values": [
      -1.0,
      1.0,
      3.0
    ]
  },
  "verification_scope": "Symbolic identities and finite numerical checks, not formal proof or empirical validation.",
  "manuscript_sha256": "23e96c560eb222504739d9398631d160feda78b6f0f923d7bda9a98599723c7d",
  "script_sha256": "0671d69ffd73888c32cc5819d096e4e94bff17c00510e52dd4e81c52d892274c"
}
```

## Original problem-statement provenance

```json
{
  "source_url": "https://we-solve.github.io/problems/social-cost-of-carbon-under-deep-uncertainty/source/statement.tex",
  "retrieved_date_utc": "2026-10-18",
  "file_name": "original-statement.tex",
  "size_bytes": 10475,
  "sha256": "e9181a16530d53c48baabde31027d6b270c47184180892828a2a7d0e79178477",
  "preserved_without_changes": true
}
```

The original statement is unchanged. The separately prepared contribution TeX corrects only the submitter-supplied research-model name to GPT-6-Pro; the archived original files remain unchanged. The original manuscript and script SHA-256 values in the verification record have been checked against the supplied files. The original-statement SHA-256 has likewise been checked. The positive numerical checks do not upgrade the “Partial result” claim.

## Third-party statement attribution

The original problem statement, “Social cost of carbon under deep uncertainty” (ECON-Q51-192), is credited to rights holder mehmetmars7, as recorded in the [official rights record](https://github.com/We-Solve/research/blob/main/problems/23/prb_232552d157d14327a572cb006068e117/problem.yaml), and is available under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The [source statement](https://github.com/We-Solve/research/blob/main/problems/23/prb_232552d157d14327a572cb006068e117/statement.tex) is copied unchanged in `original-statement.tex`; the formal-question passage quoted in this contribution has only Markdown/LaTeX-formatting changes. No endorsement is implied. This notice concerns that third-party statement; licensing of the new contribution and software remains subject to the submitter’s declarations.
