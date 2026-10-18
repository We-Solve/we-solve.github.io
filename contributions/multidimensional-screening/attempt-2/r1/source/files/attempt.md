> Source: [original issue #10](https://github.com/We-Solve/research/issues/10). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


**A type-grid convex program with a global profit certificate**

**1. Class, constants, and relation to the earlier attempt.**

Retain the problem's compact convex type space, positive continuous probability density f, bounded convex allocation set Q contained in the nonnegative orthant, quasilinear utility, and all-type IC/IR requirements. Add 0 in Q, C(0)=0, and C(q)>=0. The zero allocation at zero payment is therefore a feasible outside contract. All norms below are Euclidean.

Choose finite bounds

$$
\sup_{\theta\in\Theta}\|\theta\|\le H,\qquad
\operatorname{diam}\Theta\le D,\qquad
\sup_{q\in Q}\|q\|\le R,\qquad
\operatorname{diam}Q\le A,
\quad P=HR.
$$

These are supplied upper bounds, not necessarily tight constants. Let V be the continuum supremum in the question. IR and nonnegative cost imply that every assigned profit satisfies

$$
\pi(\theta)=t(\theta)-C(q(\theta))
\le \theta\cdot q(\theta)-C(q(\theta))\le P.
$$

Thus 0<=V<=P. No continuum maximizer is assumed.

The earlier contribution [1] uses profit discounts followed by quantity/price rounding and exhaustive finite-menu enumeration. This attempt credits that discount argument and applies it instead to moving types between a continuum and a finite set. Finite-dimensional mechanism approximations also have prior literature [2]. No novelty claim is made for these general techniques.

**2. The finite program.**

Let B_1,...,B_N be a measurable partition of all of Theta. Choose x_i in Theta such that

$$
\sup_{\theta\in B_i}\|\theta-x_i\|\le h,
\qquad p_i=\int_{B_i}f(\theta)\,d\theta.
$$

The probabilities are exact and sum to one; zero-probability cells are allowed. Define

$$
V_h=\max_{q_i,u_i}
\sum_{i=1}^N p_i\bigl[x_i\cdot q_i-u_i-C(q_i)\bigr]
$$

subject to

$$
q_i\in Q,\qquad 0\le u_i\le RD,\qquad
u_i\ge u_j+(x_i-x_j)\cdot q_j
\quad\text{for every }i,j.
\tag{1}
$$

This maximizes a continuous concave objective over a nonempty compact convex feasible set. Hence a maximizer exists. Set t_i=x_i dot q_i-u_i.

The utility upper bound loses no finite-type value. Pairwise IC implies |u_i-u_j|<=R||x_i-x_j||. Subtracting min_j u_j from every utility preserves IC/IR, raises every payment by that minimum, and puts utilities in [0,RD]. We do not impose the nonconvex equality min_i u_i=0 as a program constraint.

**3. A transport lemma.**

Consider a finite or compact menu containing (0,0). Suppose contract a=(q_a,t_a) maximizes the original utility of type x, and its profit pi_a=t_a-C(q_a) is at most P. Fix 0<eta<=1 and change every price to

$$
t_j^{\eta}=t_j-\eta\bigl(t_j-C(q_j)\bigr).
\tag{2}
$$

Let b be any utility-maximizing contract in this transformed menu for type y. Write pi_j=t_j-C(q_j) and v_j(z)=z dot q_j-t_j. Original optimality gives

$$
v_b(y)-v_a(y)
=v_b(x)-v_a(x)+(y-x)\cdot(q_b-q_a)
\le A\|y-x\|.
$$

Transformed optimality gives

$$
v_b(y)+\eta\pi_b\ge v_a(y)+\eta\pi_a.
$$

Consequently eta(pi_a-pi_b)<=A||y-x||. The transformed profit is exactly (1-eta)pi_b, so

$$
t_b^{\eta}-C(q_b)
\ge \pi_a-\eta P-
\frac{(1-\eta)A\|y-x\|}{\eta}.
\tag{3}
$$

This proof permits negative individual profits and arbitrary ties. It does not compare costs at nearby quantities: each contract retains its allocation, so no cost Lipschitz constant enters.

Define

$$
E(h,\eta)=\eta P+\frac{(1-\eta)Ah}{\eta}
\le \eta P+\frac{Ah}{\eta}.
\tag{4}
$$

**4. From the finite program to a continuum mechanism.**

Take any feasible solution of (1), of objective F. Offer its N contracts and (0,0), change prices by (2), and assign every reported type a utility maximizer, using a fixed ordering for ties. At x_i the original contract i is a maximizer, by (1) and u_i>=0. Apply (3) with x=x_i and y in B_i, then integrate. The resulting continuum profit satisfies

$$
\Pi_{\mathrm{out}}\ge F-E(h,\eta).
\tag{5}
$$

This is a direct mechanism satisfying IC for every pair of reports: the contract obtained by any alternative report is an option in the same menu. The zero contract remains unchanged and guarantees IR for every type. A fixed tie rule on finitely many affine utility functions is Borel measurable. Allocations remain in Q and payments are bounded. These conclusions include cell boundaries and menu-indifference types.

**5. From any continuum mechanism to the finite program.**

Let a feasible continuum mechanism have profit J. Its IC inequalities give

$$
|U(\theta)-U(\theta')|\le R\|\theta-\theta'\|.
$$

Raise all payments by min_Theta U. This preserves IC/IR and weakly increases profit. For the normalized mechanism,

$$
0\le U\le RD,\qquad |t|\le (H+D)R.
$$

Take the closure of its contract set together with (0,0) in Q times the bounded payment interval. This is compact. Every original assigned contract still maximizes original utility at its own type: IC extends to the closure by continuity, and the zero contract is weakly worse by IR.

Transform this compact menu by (2). Since C is continuous, each representative x_i has a maximizing transformed contract; only finitely many choices are needed. Choose the same maximizer whenever representatives coincide. These choices define an IC/IR mechanism on the representatives. For each theta in B_i, apply (3) with x=theta, a its original assigned contract, and y=x_i. The selected profit at x_i is at least the original profit at theta minus E(h,eta). Integrating over all cells gives a finite-type objective of at least J-E(h,eta).

Normalize the selected finite utilities as in section 2 to make them satisfy the box in (1); this can only increase that objective. Therefore V_h>=J-E(h,eta). Taking the supremum over all original mechanisms, and combining with (5), proves

$$
\boxed{V_h-E(h,\eta)\le V\le V_h+E(h,\eta).}
\tag{6}
$$

Neither direction assumes that sampling a discontinuous payment function approximates its integral.

**6. A checkable objective-gap certificate and rate.**

Suppose a verified feasible finite solution has objective F, and a certified upper bound is B>=V_h. Put sigma=B-F. Its transformed menu obeys

$$
\boxed{F-E(h,\eta)\le\Pi_{\mathrm{out}}\le V
\le B+E(h,\eta),\qquad
V-\Pi_{\mathrm{out}}\le\sigma+2E(h,\eta).}
\tag{7}
$$

Thus no integration over the transformed menu's choice regions is needed for this certificate. The specified partition probabilities suffice.

For P,A>0 and 0<Ah<P, take eta=sqrt(Ah/P). Equation (4) yields

$$
|V-V_h|\le 2\sqrt{PAh},\qquad
V-\Pi_{\mathrm{out}}\le\sigma+4\sqrt{PAh}.
$$

For an explicit requested tolerance 0<epsilon<P, it suffices to choose

$$
\eta=\frac{\varepsilon}{8P},\qquad
h\le\frac{\varepsilon^2}{64PA},\qquad
\sigma\le\frac{\varepsilon}{2}.
\tag{8}
$$

Indeed, eta P<=epsilon/8 and Ah/eta<=epsilon/8, so (7) gives a gap at most epsilon. If epsilon>=P, the zero menu already suffices. If P=0 or A=0, IR and the assumptions make the zero menu exactly optimal; division by zero is unnecessary.

For dimension dependence, enclose Theta in a cube of side D. Let m=ceil(sqrt(d)); partition the enclosing cube into half-open cubes of side h/m, clipping the last cubes and including the final outer faces once, and intersect with Theta. Each cell has diameter at most h, and a representative can be chosen in its closure within Theta. The number of cells is bounded by

$$
N\le \left(1+\left\lceil\frac{Dm}{h}\right\rceil\right)^d.
$$

Program (1) has N(d+1) scalar variables and N(N-1) nontrivial pairwise IC inequalities, in addition to Q membership and utility bounds. For fixed dimension and fixed primitive bounds, (8) gives N=O(epsilon^(-2d)) and O(epsilon^(-4d)) pairwise IC inequalities. These are formulation-size bounds, not claims about total running time or bit complexity.

**7. Effective primitives and remaining limitations.**

One fully finite subclass has full-dimensional rational polytopes Theta and Q, 0 in Q, a specified positive rational polynomial f of integral one, and

$$
C(q)=\max_{1\le k\le K}(a_k\cdot q+b_k)
$$

with rational coefficients, nonnegative on Q, and C(0)=0. For this algorithm take a positive rational tolerance epsilon, or a smaller positive rational tolerance. Choose rational bounds H,D,R,A, rational h, and rational cube boundaries and representatives; (8) then supplies rational eta. Integrating a rational polynomial over a rational polytope gives exact rational p_i by triangulation and monomial integration. Shared cell boundaries have Lebesgue measure zero; retain boundary-only cells if needed to cover every type.

Introduce cost epigraph variables c_i with c_i>=a_k dot q_i+b_k, and replace C(q_i) in the objective by c_i. This gives a rational linear program with the same optimal value as (1). Rational primal and dual feasible certificates provide F and B, respectively; if a primal epigraph cost exceeds the actual cost, evaluating its actual piecewise-affine cost only raises F. Rational LP optimization can make sigma as small as required, including zero with exact optimal certificates. Equation (7) then certifies the continuum mechanism. No numerical LP was run for this submission.

For a general continuous density and continuous convex cost, the analytic theorem remains valid, but an abstract specification alone does not supply an executable algorithm: exact or rigorously bounded cell masses, primitive representations, and certified finite-program bounds are still required. Approximate cell probabilities and approximate IC feasibility have not been analyzed here.

**Audit and unproved questions.** The proof uses all pairwise finite IC inequalities and global menu implementation; no local-IC substitute is used. It treats negative contract profits, zero-mass cells, ties, boundary types, compact-menu attainment, utility normalization, and degenerate constants explicitly. Three additional same-model Codex subagents independently examined the argument and its assumptions. This was an LLM proof audit, not formal verification or external mathematical review. No numerical convergence experiment or solver benchmark was performed. Optimal continuum exclusion/bunching geometry, sharper rates, practical computational performance, and novelty relative to the full literature remain unestablished. In particular, pooling in the constructed finite menu does not prove that a continuum optimum pools types.



## Attribution and references from the original submission

### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

OpenAI, gpt-6, unknown; Codex primary assistant and three subagents using the inherited model, for proof search, independent proof audits, drafting, and editing. The environment identifies the model family as GPT-6; the exact deployed model identifier and version were not exposed.

### People and roles

Antonio (@meleantonio): selected the problem and prompted the attempt. No human mathematical contribution or proof verification is claimed.

### References

1. we-solve research archive, *GPT 6 Astra Ultra attempt on ECON-D82-92*, contribution ECON-D82-92-A1, revision r1. [Archived contribution](https://we-solve.github.io/contributions/multidimensional-screening/attempt-1/r1/). Its displayed manuscript was read, especially the normalization and profit-discount arguments. The record labels it an unverified LLM-generated exploration; it is credited as prior work, not used as an externally validated theorem.
2. Alexandre Belloni, Giuseppe Lopomo, and Shouqiang Wang, *Multidimensional Mechanism Design: Finite-Dimensional Approximations and Efficient Computation*, working paper dated November 1, 2009. [Author-hosted PDF](https://people.duke.edu/~abn5/BLW_Revised05_Final.pdf). The title page, abstract, and opening of Section 3 were inspected. This supplies context for prior finite-dimensional approximation methods in a different mechanism-design model; no result from it is invoked in the proof above.
3. we-solve, [research prompt ECON-D82-92](https://we-solve.github.io/prompts/ECON-D82-92.txt), downloaded and read on October 17, 2026. Source of the problem and its scope. Other publications listed inside that prompt were not independently verified for this submission and are not cited as supporting results.

