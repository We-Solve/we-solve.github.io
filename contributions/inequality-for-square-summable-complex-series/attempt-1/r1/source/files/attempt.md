> Source: [original issue #12](https://github.com/We-Solve/research/issues/12). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.

# The dyadic block inequality: sharp constant, equality, projection and approximation

**We-Solve prb_27aba43ca4ff44508d6d1d371a7b9a14 / Math-3293, catalogue entry.**

**Claim and attribution.** The proposed inequality is valid, and its coefficient $6/\pi^2$ is optimal. The original Open Problem Garden page already contains an anonymous solution dated 3 November 2013: apply Cauchy–Schwarz separately on the disjoint dyadic blocks and then sum. The original poster acknowledged that solution on 29 October 2014 [1]. This submission is a **Literature report**, giving a detailed proof and developing its standard Hilbert-space consequences. No historical novelty is claimed for the inequality or the consequences below. In particular, this is a resolution of an outdated catalogue entry, not a newly solved open problem.

## 1. Statement and the partition behind it

Let $\alpha=(\alpha_n)_{n\geq1}\in\ell^2(\mathbb C)$, and define

$$
(T\alpha)_k=\sum_{\ell=0}^{\infty}\frac{\alpha_{2^k(2\ell+1)}}{\ell+1},\qquad k\geq0.
$$

The catalogue asks whether

$$
\boxed{\|\alpha\|_2^2\geq\frac6{\pi^2}\sum_{k=0}^{\infty}|(T\alpha)_k|^2.}\tag{1}
$$

Put $Z=\sum_{j=1}^{\infty}j^{-2}=\pi^2/6$. We use the classical Basel identity for this numerical evaluation; the operator argument itself needs only the convergent positive number $Z$.

Every positive integer has a unique representation $2^k(2\ell+1)$, with $k,\ell\geq0$: remove its largest power of two, leaving an odd positive integer. Thus

$$
\phi(k,\ell)=2^k(2\ell+1)
$$

is a bijection from $\mathbb N_0^2$ to $\mathbb N$. Its rows $D_k=\{\phi(k,\ell):\ell\geq0\}$ are pairwise disjoint and cover every index exactly once. Consequently

$$
\|\alpha\|_2^2=\sum_{k\geq0}\sum_{\ell\geq0}|\alpha_{\phi(k,\ell)}|^2.\tag{2}
$$

This reindexing is justified for nonnegative series, without a conditional rearrangement argument. The use of complex scalars does not change the partition or the estimates.

## 2. Convergence and the complete inequality proof

For each fixed $k$, Cauchy–Schwarz first proves absolute convergence:

$$
\sum_{\ell\geq0}\frac{|\alpha_{\phi(k,\ell)}|}{\ell+1}
\leq\sqrt Z\left(\sum_{\ell\geq0}|\alpha_{\phi(k,\ell)}|^2\right)^{1/2}<\infty.
$$

It also gives

$$
|(T\alpha)_k|^2\leq Z\sum_{\ell\geq0}|\alpha_{\phi(k,\ell)}|^2.\tag{3}
$$

Sum (3) for $0\leq k<K$, use (2), and let $K\to\infty$. The left partial sums increase and remain bounded by $Z\|\alpha\|_2^2$. Hence $T\alpha\in\ell^2(\mathbb N_0)$, and

$$
\|T\alpha\|_2^2\leq Z\|\alpha\|_2^2.
$$

This proves (1), including convergence of its entire right side. There is no exchange of a conditionally convergent double series and no need to assume the conclusion before summing the block estimates. This is the argument already present in the 2013 source comment, with the convergence steps made explicit.

## 3. Optimality and every equality case

Take

$$
\alpha_{2\ell+1}=\frac1{\ell+1},\qquad \alpha_{2n}=0.
$$

Then $\|\alpha\|_2^2=Z$, $(T\alpha)_0=Z$, and all other output coordinates vanish. Any coefficient $C$ in $\|\alpha\|_2^2\geq C\|T\alpha\|_2^2$ must therefore satisfy $Z\geq CZ^2$. Thus $C\leq1/Z$, proving sharpness and $\|T\|=\sqrt Z$.

The complete equality family is

$$
\boxed{\alpha_{\phi(k,\ell)}=\frac{b_k}{\ell+1},\qquad b\in\ell^2(\mathbb N_0).}\tag{4}
$$

Indeed, equality in the complex Cauchy–Schwarz inequality on a block means its coefficient sequence is a single complex multiple of the real weight sequence $(1,1/2,1/3,\ldots)$. The total deficit is the sum of the nonnegative block deficits. Its vanishing forces equality on every block, including a zero multiple when the block vanishes. Conversely (4) gives

$$
\|\alpha\|_2^2=Z\sum_k|b_k|^2,\qquad (T\alpha)_k=Zb_k,
$$

so it is both square summable and an equality vector. These identities also show why square summability of $b$ is necessary. A nonzero finitely supported sequence cannot attain equality in (1), since a nonzero block in (4) has infinitely many nonzero entries.

## 4. Orthogonal projection and the exact deficit

Use the complex inner product linear in its first argument. For $y\in\ell^2(\mathbb N_0)$, the adjoint is

$$
(T^*y)_{\phi(k,\ell)}=\frac{y_k}{\ell+1}.
$$

The formula defines a square-summable sequence with squared norm $Z\|y\|_2^2$. Taking inner products verifies the adjoint relation; the double sum is absolutely convergent by Cauchy–Schwarz on $\mathbb N_0^2$. Direct substitution gives

$$
TT^*=ZI.
$$

It follows that

$$
P=Z^{-1}T^*T,\qquad
(P\alpha)_{\phi(k,\ell)}=\frac{(T\alpha)_k}{Z(\ell+1)}\tag{5}
$$

is selfadjoint and idempotent. Thus $P$ is the orthogonal projection onto the closed subspace $\mathcal E$ consisting of (4). In particular,

$$
\ell^2(\mathbb C)=\mathcal E\oplus\ker T.
$$

The Pythagorean identity now strengthens the inequality to an exact statement:

$$
\boxed{\|\alpha\|_2^2-Z^{-1}\|T\alpha\|_2^2
=\|\alpha-P\alpha\|_2^2
=\operatorname{dist}(\alpha,\mathcal E)^2.}\tag{6}
$$

Equivalently, the deficit equals the convergent sum

$$
\sum_{k,\ell\geq0}\left|\alpha_{\phi(k,\ell)}-
\frac{(T\alpha)_k}{Z(\ell+1)}\right|^2.
$$

For a unit vector, deficit at most $\varepsilon$ is exactly the condition that its distance to the equality subspace is at most $\sqrt\varepsilon$. This is a precise stability statement with an exact constant. The kernel is nontrivial: in one block, the first two entries $1,-2$ have weighted sum zero. Thus small output need not mean small input; it can mean a substantial component perpendicular to the equality subspace.

## 5. Minimum-norm interpolation

For any prescribed $y\in\ell^2(\mathbb N_0)$, the equation $T\alpha=y$ has the explicit solution

$$
\boxed{(\alpha_{\min})_{\phi(k,\ell)}=
\frac{y_k}{Z(\ell+1)}.}\tag{7}
$$

Its squared norm is $\|y\|_2^2/Z$. Every other solution is uniquely $\alpha_{\min}+h$, with $h\in\ker T$, and orthogonality gives

$$
\|\alpha_{\min}+h\|_2^2=Z^{-1}\|y\|_2^2+\|h\|_2^2.
$$

Therefore (7) is the unique minimum-norm solution. An output sequence outside $\ell^2$ cannot arise from an $\ell^2$ input, by Section 2. This characterizes both solvability and the full solution set. In normalized form $U=T/\sqrt Z$ satisfies $UU^*=I$: the adjoint embeds the output space isometrically into the input space, while $U$ discards the orthogonal kernel component.

## 6. The sharp finite-prefix inequality

Suppose $\alpha_n=0$ for $n>N$, where $N\geq1$. Block $k$ contains

$$
m_k=\left\lfloor\frac{\lfloor N/2^k\rfloor+1}{2}\right\rfloor
$$

available entries. Write $H_m=\sum_{j=1}^m j^{-2}$, with $H_0=0$. The squared norm of this finite row is $H_{m_k}$. Since different rows have disjoint supports,

$$
\|T\alpha\|_2^2\leq\max_k H_{m_k}\,\|\alpha\|_2^2.
$$

The longest row is the odd-index row, of length $m_0=\lceil N/2\rceil$. Its truncated weight vector attains the bound. Hence the optimal coefficient is

$$
\boxed{C_N=\frac1{H_{\lceil N/2\rceil}}.}\tag{8}
$$

Equality requires every shorter row to vanish and every longest row to be proportional to its own weights. For $N\geq3$, row zero is uniquely longest: $m_k\leq\lceil\lfloor N/2\rfloor/2\rceil<m_0$ for $k\geq1$. Thus equality occurs precisely on multiples of the truncated odd-row vector. At $N=1$ every allowed vector is an equality vector. At **$N=2$**, both rows have length one, $C_2=1$, and **every vector supported on $\{1,2\}$** is an equality vector. This tie must not be omitted.

For a truncated odd-row vector with $L$ terms, the squared input and output norms are $H_L$ and $H_L^2$. Since $H_L\uparrow Z$, these finite vectors approach the infinite sharp constant. Their relative deficit in (1) is exactly

$$
1-\frac{H_L}{Z}.
$$

The elementary integral bounds

$$
\frac1{L+1}\leq Z-H_L\leq\frac1L\tag{9}
$$

quantify this approach. A finite matrix computation must use its actual row norm $H_L$; replacing it by $Z$ would destroy exact finite projection and interpolation identities.

## 7. Uniform block truncation and the prefix pitfall

Define $T^{[L]}$ by retaining the first $L$ entries of **every** dyadic block:

$$
(T^{[L]}\alpha)_k=\sum_{\ell=0}^{L-1}
\frac{\alpha_{\phi(k,\ell)}}{\ell+1}.
$$

Cauchy–Schwarz on the omitted tails gives

$$
\|(T-T^{[L]})\alpha\|_2^2
\leq(Z-H_L)\sum_{k\geq0}\sum_{\ell\geq L}|\alpha_{\phi(k,\ell)}|^2
\leq(Z-H_L)\|\alpha\|_2^2.
$$

Equality in the operator bound is attained by placing the omitted weight tail in one block. Therefore

$$
\boxed{\|T-T^{[L]}\|=\sqrt{Z-H_L}.}\tag{10}
$$

Together with (9), this is a uniform error estimate tending to zero. It truncates each row uniformly, while retaining infinitely many rows.

By contrast, let $S_N$ retain only the original indices $1,\ldots,N$. For every fixed input,

$$
\|T\alpha-TS_N\alpha\|_2\leq\sqrt Z\left(\sum_{n>N}|\alpha_n|^2\right)^{1/2}\longrightarrow0.
$$

Nevertheless,

$$
\boxed{\|T-TS_N\|=\sqrt Z\quad\text{for every finite }N.}\tag{11}
$$

Indeed, choose $k$ with $2^k>N$. Its entire block lies beyond the cutoff. A unit weight vector in that block has output norm $\sqrt Z$, so the error retains the full norm of $T$. The reverse inequality follows from boundedness of $T$. Thus ordinary prefix truncations converge strongly, but never in operator norm. Finite output-row cutoffs have the same obstruction. Accurate approximation for a specified input can still follow from its known tail bound; no uniform decreasing prefix-error estimate exists over all unit inputs.

For an absolute operator-error tolerance $\tau>0$, taking $L\geq\lceil\tau^{-2}\rceil$ suffices in (10), since $Z-H_L\leq1/L$. A genuinely finite computation also retains only finitely many output blocks. Let $F_K$ retain output coordinates $0,\ldots,K-1$. Disjoint output coordinates give the input-dependent estimate

$$
\begin{aligned}
\|(T-F_KT^{[L]})\alpha\|_2^2
&\leq (Z-H_L)\sum_{k<K}\sum_{\ell\geq L}|\alpha_{\phi(k,\ell)}|^2\\
&\quad+Z\sum_{k\geq K}\sum_{\ell\geq0}|\alpha_{\phi(k,\ell)}|^2.
\end{aligned}
$$

The first term measures omitted tails inside retained blocks; the second measures omitted blocks. Both vanish for each fixed input as the corresponding cutoffs increase. This estimate explains what additional information makes a finite numerical approximation rigorous: an upper bound on the input energy in each omitted region. Knowing only the total input norm cannot force the second region to carry little energy, since a unit input can always be placed entirely in an omitted block. Accordingly every finite rectangular block truncation still has full worst-case error $\sqrt Z$, despite its valid convergence on each fixed input.

## 8. A finite complex example and the general principle

For a concrete check on complex conjugation, use one row of length two with weights $1,1/2$ and input $a=(1,i)$. Its weighted sum is $s=1+i/2$, its squared input norm is two, and its squared output norm is $5/4$. Here the row norm is $H_2=5/4$. The minimum-norm input with the same output is

$$
a_{\min}=\frac{s}{H_2}(1,1/2)
=\left(\frac45+\frac25i,\frac25+\frac15i\right).
$$

The residual is

$$
h=a-a_{\min}=\left(\frac15-\frac25i,-\frac25+\frac45i\right).
$$

Its weighted sum is zero. Both $\|a_{\min}\|^2$ and $\|h\|^2$ equal one, and their inner product is zero. Thus the finite projection identity gives $2=1+1$ exactly. This example also distinguishes the row norm $H_2$ from the infinite norm $Z$: the finite and infinite minimum-norm interpolants solve different support-constrained problems.

The argument extends to any countable disjoint partition $(I_j)$ of an index set and weights $w^{(j)}\in\ell^2(I_j)$. Define

$$
(T_w a)_j=\sum_{i\in I_j}a_i\overline{w_i^{(j)}},\qquad
q_j=\sum_{i\in I_j}|w_i^{(j)}|^2.
$$

Assume $0<Q:=\sup_jq_j<\infty$. Applying Cauchy–Schwarz on each block proves that $T_w$ is bounded with norm at most $\sqrt Q$. For a nonzero row, its normalized weight vector, placed in that block, produces output norm $\sqrt{q_j}$. Taking rows whose norms approach the supremum proves

$$
\|T_w\|=\sqrt Q.
$$

This gives the sharp coefficient $1/Q$, regardless of whether the supremum is attained. The adjoint places $y_jw^{(j)}$ in block $I_j$, and $T_wT_w^*$ is the diagonal operator with diagonal entries $q_j$.

For a nonzero equality vector in the inequality with coefficient $1/Q$, every active block must satisfy two conditions: its row norm must equal $Q$, and its input must be proportional to that row's weight vector. This follows because the unnormalized deficit $Q\|a\|^2-\|T_wa\|^2$ splits into the nonnegative blockwise Cauchy–Schwarz deficits and the nonnegative terms $(Q-q_j)\|a|_{I_j}\|^2$. Conversely those two conditions give equality. If no row attains $Q$, the bound is sharp but has no nonzero equality vector.

In the catalogue problem, all row norms equal $Z$, so every block can contribute freely to the equality subspace. In a finite prefix, the row norms become the different values $H_{m_k}$, leaving only the longest rows available for equality. The $N=2$ tie is therefore a direct consequence of the same principle, rather than a separate analytic phenomenon. Disjointness is essential to this simple norm calculation: overlapping blocks would count input energy more than once and would require a separate bound on their interactions.

## 9. Exact verification and scope

The accompanying `verify.py` was executed using exact Gaussian-rational arithmetic. Every assertion passed. The complete record is in `verification_results.json`:

* 300 deterministic random block configurations (seed 3037), including 724 complex Lagrange identities with 5,761 wedge terms;
* 300 checks each of projection idempotence, selfadjointness, exact deficit, the adjoint identity, minimum-norm interpolation, and the full solution's Pythagorean identity;
* 18 explicit matrix configurations, checking 84 entries of $T_LT_L^*=H_LI$ and 1,274 entries for symmetry and idempotence of the projection;
* all 128 finite prefixes $1\leq N\leq128$, including 8,256 dyadic coordinate checks, the sharp constants, their attaining vectors, and the $N=2$ tie;
* 192 rational finite integral-test tail bounds. Omitted-block coordinate witnesses were also checked for each prefix; the full infinite operator-norm assertion is proved in Section 7.

The exact finite analogue uses Gaussian-rational inputs and rational weights $w_i=1/(i+1)$. Its central independent check is the algebraic identity

$$
H_L\sum_{i=0}^{L-1}|a_i|^2-
\left|\sum_{i=0}^{L-1}w_i a_i\right|^2
=\sum_{0\leq i<j<L}|w_j a_i-w_i a_j|^2.
$$

It follows by expanding both sides, so exact arithmetic can detect sign, conjugation and indexing errors without approximating $\pi$. The finite block matrices also satisfy $T_LT_L^*=H_LI$, making projection idempotence, the finite deficit identity and the interpolation right inverse directly checkable. Prefix tests must use the sharp constant in (8), including its exceptional equality tie at $N=2$.

These finite checks supplement the proofs; they do not establish absolute convergence, the infinite sharp constant, the Basel identity, or operator-norm limits. Those claims rest on the arguments above. Separate inherited same-model agents reviewed the mathematics and prepared the verification software. No independent human proof checking or formal proof-assistant certification is asserted.

## References and inspected scope

1. **Open Problem Garden**, [Inequality for square summable complex series](https://www.openproblemgarden.org/op/inequality_for_square_summable_complex_series). Author field: Zoltan Retkes; posted by `tigris35711` on 25 December 2012. The full statement, anonymous solution of 3 November 2013 and poster's acknowledgement of 29 October 2014 were inspected. The published solution supplies the historical resolution and the dyadic-block Cauchy–Schwarz argument. No prize award or entitlement is asserted.
2. **We-Solve / UnsolvedMath prb_27aba43ca4ff44508d6d1d371a7b9a14**, displayed as Math-3293, catalogue entry. [Catalogue statement](https://github.com/We-Solve/research/blob/main/problems/27/prb_27aba43ca4ff44508d6d1d371a7b9a14/statement.tex). Exact conventions, convergence statement and requested inequality inspected. Catalogue credit: ULAM.AI, UnsolvedMath contributors and We-Solve, CC BY 4.0.

## Provenance and licences

Gaven (`@gavenren`) requested another deeply investigated problem and authorized public submission. Research, exposition, source inspection, mathematical review and original verification software were produced by OpenAI Codex (GPT-6; exact serving revision and reasoning setting unknown), including inherited same-model agents. The original anonymous contributor remains credited for the established solution. No human mathematical derivation in this session or historical novelty is claimed.

Original exposition and non-software result files: CC BY 4.0. Original software: Apache-2.0. Linked source material retains its original attribution and rights.


<details>
<summary>Complete executable verification software (Python standard library; Apache-2.0)</summary>

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/12) for this material.

</details>



## Attribution and references from the original submission

### Who did the work
LLM only (people only prompted or submitted)

### LLMs used
Other (named below)

### Other LLMs
OpenAI, Codex (GPT-6; exact serving revision unknown)

### LLM versions, settings and roles
OpenAI Codex (GPT-6) | version: unknown | reasoning: unknown | role: source inspection, mathematical derivation and exposition, exact verification software, independent same-model review, and submission preparation. Separate inherited same-model agents checked the mathematics and prepared the software. No formal proof-assistant certification or independent human mathematical verification is claimed.

### People and roles
Gaven (@gavenren) prompted the work and authorized public submission. No human mathematical derivation or proof checking in this session is asserted. The prior anonymous solution and original problem author are credited in the write-up.

### References
Full references and the precise inspection scope appear in the write-up. In particular, the original Open Problem Garden question, its anonymous 2013 solution and the original poster's 2014 acknowledgement were inspected. The exact We-Solve catalogue statement was checked. No additional papers are used as uninspected proof dependencies.

