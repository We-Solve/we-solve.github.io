> Source: [original issue #24](https://github.com/We-Solve/research/issues/24). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


# Symbolic versus ordinary powers for linearly independent projective points

**Problem:** TOP-1500016 / Math-3417 / AMR-014-0016, *Algebraic Stories — Symbolic powers vs. ordinary powers.*

**Claim:** Literature report with a complete solution of the parameter range $1\le s\le n$, for every $m\ge1$, and a self-contained extension from the spanning case to its ambient embeddings. Also settles every number of distinct points on $\mathbb P^1$. This is **not** a solution for arbitrary $s>n$ in higher projective dimension.

The spanning case $s=n$ is explicitly treated by Ralf Fröberg and Boris Shapiro, *Symbolic powers of the ideal of $n$ general points in $\mathbb P^{n-1}$*, arXiv:2609.18539v2 (17 September 2026), especially Theorems 3.1, 4.1 and Section 6. We credit that preprint throughout. The ambient-variable convolution below supplies the $s<n$ cases directly. No historical novelty is asserted for these deductions, the complete-graph results, or the original problem. All proofs and verification software here are independently written; no paper text, figures or files are redistributed.

## 1. Conventions and main formula

Let $n\ge2$, $1\le s\le n$, and let $P_1,\ldots,P_s$ be linearly independent points in $\mathbb P^{n-1}_{\mathbb C}$. A general $s$-tuple in this range is linearly independent. Put

$$I=\bigcap_{i=1}^s\mathfrak p_i,\qquad I^{(m)}=\bigcap_{i=1}^s\mathfrak p_i^m.$$

The requested series, using **ideals** rather than quotient rings, is

$$D_{n,s,m}(t)=\operatorname{Hilb}_{I^{(m)}}(t)-\operatorname{Hilb}_{I^m}(t)
=\operatorname{Hilb}_{S/I^m}(t)-\operatorname{Hilb}_{S/I^{(m)}}(t).
\tag{1}$$

This sign is relevant when comparing formulations. It has nonnegative coefficients. Write $q=n-s$ and

$$C_q(b)=\begin{cases}\binom{q+b-1}{b},&q\ge1,\\1,&q=0, b=0,\\0,&q=0, b>0.\end{cases}$$

For $A,c\ge0$ set

$$N_s(A,c)=[z^A](1+z+\cdots+z^c)^s
=\sum_{j=0}^{s}(-1)^j\binom{s}{j}\binom{A-j(c+1)+s-1}{s-1},
\tag{2}$$

where a binomial coefficient is zero if its upper entry is smaller than its nonnegative lower entry. Define $N_s(A,c)=0$ if $c<0$.

**Theorem 1 (entire Hilbert-series difference).** If $s=1$, then $D_{n,1,m}=0$. If $2\le s\le n$, then

$$\boxed{D_{n,s,m}(t)=\sum_{b=0}^{m-1}C_q(b)t^b
\sum_{A=m-b}^{2(m-b)-1}N_s(A,A-m+b)t^A.}
\tag{3}$$

Thus the answer is a finite polynomial for every parameter in this range. In particular, $s=2$ also gives zero for every $m$. Formula (3) specializes to Fröberg–Shapiro's Theorem 3.1 when $s=n$.

## 2. Reduction to monomials

Choose nonzero representatives of the points and extend their independent vectors to a basis. The associated invertible linear coordinate change preserves degrees, products and intersections. We may therefore put $P_i=[e_i]$, and write

$$S=\mathbb C[x_1,\ldots,x_s,y_1,\ldots,y_q],\qquad
\mathfrak p_i=(x_j:j\ne i)+(y_1,\ldots,y_q).$$

Let $R=\mathbb C[x_1,\ldots,x_s]$, $Y=(y_1,\ldots,y_q)$ and

$$J=(x_ix_j:1\le i<j\le s)\subset R.$$

For $s\ge2$,

$$I=JS+Y.\tag{4}$$

Indeed, a monomial containing a $y$ belongs to every point prime; a monomial containing no $y$ does so precisely when at least two distinct $x$ variables divide it. Since these are monomial ideals, the monomial test proves the ideal identity, without possible coefficient cancellations. If $s=1$, then $I=Y$ and $I^{(m)}=Y^m=I^m$ directly.

All subsequent monomial arguments work over any field. Over a field other than $\mathbb C$, the geometric statement means rational points whose representatives are independent over that field.

## 3. Two exact membership tests and a factorization proof

Write a monomial as $x^a y^\beta$, and set

$$A=\sum_{i=1}^s a_i,\quad M=\max_i a_i,\quad b=\sum_{j=1}^q\beta_j.$$

For $s\ge2$,

$$x^a y^\beta\in I^{(m)}\quad\Longleftrightarrow\quad b+A-M\ge m.
\tag{5}$$

Each prime-power condition is $b+\sum_{j\ne i}a_j\ge m$; intersect them to obtain (5).

The exact ordinary-power test is

$$x^a y^\beta\in I^m\quad\Longleftrightarrow\quad
b+\min\left(\left\lfloor\frac A2\right\rfloor,A-M\right)\ge m.
\tag{6}$$

Here is a proof that also constructs the required factors. The maximum number of pairs of differently coloured tokens, from colour capacities $a_1,\ldots,a_s$, is

$$f(a)=\min(\lfloor A/2\rfloor,A-M).\tag{7}$$

Every pair uses two tokens and at least one token outside a colour of largest capacity. These give the two upper bounds. To prove attainment, put $k=f(a)$. If $k=0$ there is nothing to prove. Otherwise

$$\sum_i\min(a_i,k)\ge2k.$$

If no capacity exceeds $k$, this follows from $A\ge2k$. If one exceeds $k$, either another capacity is at least $k$, or all other capacities sum to $A-M\ge k$. Select integers $d_i\le\min(a_i,k)$ with $\sum d_i=2k$.

Any such vector is the degree sequence of a loopless multigraph with $k$ edges. Inductively join two vertices of largest positive degree, subtract one from each, and continue. After this step every remaining degree is at most $k-1$: an untouched degree $k$ would require three original degrees at least $k$, impossible with total $2k$. The induction starts with $k=1$. The edges give $k$ factors $x_ix_j$ dividing $x^a$.

Each available $y$ token supplies one additional generator of $I$. Thus the maximum number of generators of (4) whose product divides $x^a y^\beta$ is $b+f(a)$, proving (6). This also shows that the ordinary order is exactly $b+f(a)$, rather than merely giving a membership decision at one power.

## 4. Proof of the Hilbert-series formula

For $b\ge m$ the monomial lies in both powers. For $b<m$, put $r=m-b$. By (5)–(6), it belongs to the symbolic power but not the ordinary power exactly when

$$A-M\ge r,\qquad \lfloor A/2\rfloor<r.$$

Equivalently,

$$r\le A\le2r-1,\qquad 0\le a_i\le A-r\quad(1\le i\le s).
\tag{8}$$

The number of $x$ exponent vectors is $N_s(A,A-r)$. There are $C_q(b)$ outside-variable monomials of degree $b$, each contributing degree $A+b$. These monomials form a vector-space basis of the quotient $I^{(m)}/I^m$, so summing proves (3).

For completeness, (2) follows by counting all weak compositions of $A$ into $s$ parts and applying inclusion–exclusion to the events $a_i\ge c+1$. For a chosen $j$-element set of violating coordinates, subtract $c+1$ from each; the remaining total is $A-j(c+1)$. This proves the displayed binomial formula, including the zero convention.

If $s=2$, (8) would require $A\le2(A-r)$, hence $A\ge2r$, contradicting $A\le2r-1$. Therefore the defect is zero. If $m=1$, its only potential core term has $r=A=1$ and cap zero, also giving zero.

## 5. Ambient-variable convolution and a generating function

Define $D_{s,s,0}=0$ and, for this convolution only, $D_{1,1,r}=0$ for every $r\ge0$. The whole extension from $s$ variables to $n$ variables is the identity

$$\boxed{D_{n,s,m}(t)=\sum_{b=0}^{m-1}C_{n-s}(b)t^bD_{s,s,m-b}(t).}
\tag{9}$$

It has a second, direct proof. Fix an outside multidegree $\beta$ of total $b<m$. In this slice, the symbolic ideal is $J^{(m-b)}$, whereas the ordinary ideal is $J^{m-b}$. For the latter assertion, expand $(J+Y)^m$. The terms that can divide a monomial in this slice have outside degree at most $b$; among the resulting nested $J$ powers the largest ideal is $J^{m-b}$. For $b\ge m$ both slices are all of $R$. Summing over $\beta$ gives (9).

Consequently, as a formal power series in $u$ with polynomial coefficients in $t$,

$$\sum_{m\ge1}D_{n,s,m}(t)u^m
=(1-ut)^{-(n-s)}\sum_{r\ge1}D_{s,s,r}(t)u^r.
\tag{10}$$

The extra linear generators therefore contribute a convolution in the **power index**, not multiplication of each fixed-power answer by $(1-t)^{-(n-s)}$. The latter would incorrectly produce infinitely many nonzero graded differences at a fixed $m$.

## 6. Exact support and top coefficient

Assume $s\ge3$ and $m\ge2$.

If $n=s$, the nonzero degrees are exactly

$$m+\left\lceil\frac{m}{s-1}\right\rceil\le d\le2m-1.
\tag{11}$$

Indeed, with $d=m+c$ the bounded composition exists exactly when $m+c\le sc$, or $c\ge\lceil m/(s-1)\rceil$. Every intermediate total between zero and $sc$ can be distributed into $s$ boxes of capacity $c$.

If $n>s$, the nonzero degrees are instead exactly

$$m+1\le d\le2m-1.\tag{12}$$

For the lower bound, a core term with nonzero defect has $r\ge2$ and $A\ge r+1$, so $d=b+A\ge m+1$. For every degree in (12), choose $b=2m-1-d$, $r=m-b$, an outside monomial of degree $b$, and the core exponent vector $(r-1,r-1,1,0,\ldots,0)$. It satisfies (8) and has degree $d$. The upper bound follows directly from $A+b\le2m-b-1$.

Only $b=0$ can contribute to the last degree. Its coefficient is

$$[t^{2m-1}]D_{n,s,m}
=\binom{2m+s-2}{s-1}-s\binom{m+s-2}{s-1}>0.
\tag{13}$$

Two coordinates cannot both violate the cap $m-1$ at total $2m-1$, so only the first two inclusion–exclusion terms remain. Positivity also follows from the explicit vector in the preceding paragraph. Thus the last degree and its dimension are independent of the number of ambient variables once $s$ is fixed.

## 7. Minimal generators versus vector-space dimension

The **symbolic defect** is the minimal number of module generators of $I^{(m)}/I^m$. It is not the sum of its graded dimensions. Both are computable here.

For the core ideal $J$ and $r\ge1$, a monomial $x^a$ is a minimal generator of $J^{(r)}$ if and only if

$$A-M=r\quad\text{and the maximum }M\text{ occurs at least twice}.
\tag{14}$$

If $A-M\ge r+1$, lowering any positive exponent still leaves symbolic order at least $r$. If the maximum is unique, lowering that maximum leaves $A-M$ unchanged. Either possibility contradicts minimality. Conversely, under (14), lowering any positive exponent leaves another maximum intact and lowers symbolic order to $r-1$. This proves both directions. This core criterion agrees with Fröberg–Shapiro, Theorem 4.1.

At an outside degree $b<m$, the minimal symbolic generators are exactly $y^\beta x^a$ with $a$ satisfying (14) for $r=m-b$; at $b=m$ they are the monomials $y^\beta$ alone. This follows by testing removal of one variable: removing a $y$ decreases symbolic order by one, and removing an $x$ is the core test above.

For (14), write $k=M$. Then $1\le k\le r$, $A=r+k$, and the generator survives in the quotient exactly when $k<r$, by (6). The case $k=r$ has just two nonzero entries, both $r$, and is already ordinary. Every surviving minimal symbolic generator remains a minimal module generator: no proper divisor belongs to the symbolic ideal, and adding a monomial from the ordinary ideal cannot cancel it. Conversely every quotient monomial is a multiple of a minimal symbolic generator; if that generator were ordinary its multiple would be ordinary as well.

Let

$$g_s(r)=\sum_{k=\lceil r/(s-1)\rceil}^{r-1}
\#\{a\in\{0,\ldots,k\}^s:\sum_i a_i=r+k,\ \#\{i:a_i=k\}\ge2\}.
\tag{15}$$

An empty sum is zero. The finite counts can be evaluated, without enumeration, as

$$\#\{\cdots\}=N_s(r+k,k)-N_s(r+k,k-1)-sN_{s-1}(r,k-1).
\tag{16}$$

Subtract the cases where no coordinate reaches $k$, and where exactly one does. We obtain

$$\boxed{\operatorname{sdefect}(I,m)=\sum_{b=0}^{m-1}C_q(b)g_s(m-b).}
\tag{17}$$

For $s=1$ the answer is zero separately. For $s=2$ the sums in (15) are empty.

For example, $s=n=4,m=3$ has Hilbert difference $t^4+16t^5$, of total vector-space dimension $17$, but symbolic defect $13$. The minimal quotient generators are $x_1x_2x_3x_4$ and the twelve permutations of the exponent vector $(2,2,1,0)$. The four remaining degree-five basis monomials, with exponent permutations of $(2,1,1,1)$, are multiples of the degree-four generator. This example makes the distinction explicit.

It also supplies a **version-specific correction** to B. Chakraborty and M. Mandal, *Invariants of the symbolic powers of edge ideals*, arXiv:1904.07717v2 (26 August 2019), Theorem 4.4, printed page 16. That theorem's formula, in its own variables, is $\operatorname{sdefect}(I,h)=\binom{n}{h+1}$ for $2\le h\le n-1$. At $n=4,h=3$ it predicts $1$. The thirteen monomials above prove the value is $13$: all have degree below six, so none is ordinary; the degree-five monomials omit one variable, so none is divisible by $x_1x_2x_3x_4$; and distinct monomials of degree five do not divide one another. Section 6 proves there are no further quotient degrees. Thus none of the thirteen generators can be removed, and together they generate the whole quotient. The omitted twelve generators invalidate the proof's restriction to the least symbolic degree. This correction is limited to the checked preprint version; the journal text and possible correction history were not audited, and no priority is claimed. The same source's Theorem 4.3 already records the core initial-degree, containment and resurgence results; those established results are credited separately from this correction.

## 8. Exact containments and witnesses for every failure

Let $u,v\ge1$ and $2\le s\le n$. Put

$$c_s(u)=u+\left\lceil\frac{u}{s-1}\right\rceil
=\left\lceil\frac{su}{s-1}\right\rceil.$$

**Theorem 2.**

$$\boxed{I^{(u)}\subseteq I^v\quad\Longleftrightarrow\quad c_s(u)\ge2v.}
\tag{18}$$

To prove sufficiency, take a symbolic monomial. If $b\ge u$, its ordinary order is at least $u\ge\lfloor c_s(u)/2\rfloor$. Otherwise put $r=u-b>0$. The condition $A-M\ge r$ forces $A\ge c_s(r)$: since $M\ge\lceil A/s\rceil$, equivalently $A-r\ge\lceil r/(s-1)\rceil$. By (6), its ordinary order is at least

$$b+\min(\lfloor c_s(r)/2\rfloor,r)
=b+\lfloor c_s(r)/2\rfloor\ge\lfloor c_s(u)/2\rfloor.$$

For the last inequality, increasing the argument of $c_s$ by one increases its value by at most two; hence $c_s(u-b)\ge c_s(u)-2b$. Also $c_s(r)\le2r$. This proves that every symbolic monomial has ordinary order at least $\lfloor c_s(u)/2\rfloor$.

For sharpness, let $k=\lceil u/(s-1)\rceil$, $A=u+k=c_s(u)$, and distribute $A$ as evenly as possible among $s$ exponents. Their maximum is $k$: the inequalities $A\le sk$ and $A>s(k-1)$ give this exactly. With no outside variables, this monomial has symbolic order $A-k=u$ and ordinary order $\lfloor A/2\rfloor$. It witnesses noncontainment whenever $c_s(u)<2v$. This proves (18), including the equality boundary.

For $s=1$, $I=Y$ and containment holds exactly when $u\ge v$.

For $s=n$ formula (18) is the initial-degree threshold of the cited preprint. For $s<n$ the same numerical threshold remains true, but the ambient ideal has linear generators. It is therefore **not** valid to infer this threshold from ambient initial degrees alone. For instance three independent points in $\mathbb P^3$ have $\alpha(I^{(2)})=\alpha(I^2)=2$, while $xyz\in I^{(2)}\setminus I^2$.

## 9. Initial degrees and resurgence

When $s=n\ge2$, the least degree of a symbolic element is $c_s(m)$, using the balanced witness above. When $s<n$, it is $m$: a power of an outside linear variable attains it, and (5) rules out lower total degree. Consequently the Waldschmidt constant, defined by $\widehat\alpha(I)=\lim_m\alpha(I^{(m)})/m$, is

$$\widehat\alpha(I)=\begin{cases}s/(s-1),&s=n\ge2,\\1,&s<n.\end{cases}
\tag{19}$$

The resurgence is $\rho(I)=\sup\{u/v:I^{(u)}\nsubseteq I^v\}$. For $s\ge2$, (18) gives

$$\boxed{\rho(I)=\frac{2(s-1)}s.}\tag{20}$$

Indeed failure implies $c_s(u)\le2v-1$, so $u/v<2(s-1)/s$. Conversely set $u=(s-1)k$, $v=\lfloor sk/2\rfloor+1$. These pairs fail containment and their ratios approach the displayed value. For $s=1$ the value is $1$.

Define asymptotic resurgence by requiring $I^{(tu)}\nsubseteq I^{tv}$ for all sufficiently large positive integers $t$. Formula (18) shows that this happens whenever $su/(s-1)<2v$, and never when $su/(s-1)\ge2v$. Rational ratios approach the same threshold from below; therefore the asymptotic resurgence also equals (20). These are separate deductions from the exact criterion, not assumptions used to prove it.

## 10. Every finite set of points on the projective line

For $n=2$ and any $s\ge1$, even when $s>n$, distinct projective points have homogeneous prime ideals $(\ell_i)$ for pairwise nonassociate linear forms. Unique factorization gives

$$I=\left(\prod_i\ell_i\right),\qquad
I^{(m)}=\bigcap_i(\ell_i^m)=\left(\prod_i\ell_i^m\right)=I^m.$$

Thus the requested difference is zero for every $s,m$ on $\mathbb P^1$. The claim uses divisibility, not the false assertion that these homogeneous ideals are pairwise comaximal.

## 11. Verification and reproducibility

The accompanying dependency-free Python program checks actual ordinary generator divisibility by recursive generator removal, independently of formula (6), and symbolic membership by the defining prime-power inequalities. It compares the graded counts with inclusion–exclusion, checks minimal symbolic generators and the containment threshold in finite ranges, and includes deliberately incorrect formulas as negative controls. Exact executed ranges and counts are in `verify1500016-results.json`; the finite computations corroborate the proofs and do not replace the arguments for arbitrary parameters.

The source is included in the submission so that the result can be checked without downloading a third-party computer algebra system. There are no floating-point decisions or random numerical root tests.

The final executed run passed 168,232 monomial comparisons; 100 Hilbert polynomials (800 graded coefficients); 540 bounded-composition comparisons; 700 containment comparisons using all 3,830 enumerated minimal symbolic generators; 100 ambient and 20 core symbolic-defect comparisons; 40 exact support and 40 top-coefficient comparisons; and 75 balanced witnesses. The main grid is 2<=n<=6, 1<=s<=n, 1<=m<=5, total degrees 0 through 2m+1. Containment uses 1<=u<=5 and 1<=v<=7; its minimal generators are exhaustively enumerated in the box [0,u]^n. The box is sufficient: a core exponent above u can be decreased while preserving every prime-power inequality, and an outside exponent above u is divisible by y_j^u, so neither can occur in a minimal generator.

These are counts of executed comparisons, not a claim that all visited monomials are distinct across different powers. Both the deliberately altered floor formula and the truncated Hilbert sum were detected as incorrect.

## 12. Attribution, scope, and references

1. ULAM.AI, UnsolvedMath contributors and We-Solve, [TOP-1500016 / Math-3417](https://we-solve.github.io/problems/algebraic-stories-symbolic-powers-vs-ordinary-powers/), AMR-014-0016, CC BY 4.0. Used for the precise all-parameter question, grading convention and absence of listed attempts when checked on 18 October 2026.
2. R. Fröberg, S. Lundqvist, A. Oneto and B. Shapiro, *Algebraic Stories from One and from the Other Pockets*, [arXiv:1801.01692v1](https://arxiv.org/pdf/1801.01692v1), Section 3.2, **Problem K**, printed page 9. Used for the original symbolic-versus-ordinary Hilbert-series problem. The September 2026 preprint calls it Problem L; the reference here specifies the actual label in the checked 2018 v1, without assuming all versions have identical lettering.
3. R. Fröberg and B. Shapiro, *Symbolic powers of the ideal of $n$ general points in $\mathbb P^{n-1}$*, [arXiv:2609.18539v2](https://arxiv.org/pdf/2609.18539v2), 17 September 2026, Theorems 3.1 and 4.1, Sections 2 and 6. Used for the established spanning-case formula, minimal-generator criterion and containment results; these are proved here, with the ambient-variable extension (9). This is an arXiv preprint; no peer-review acceptance is claimed.
4. B. Chakraborty and M. Mandal, *Invariants of the symbolic powers of edge ideals*, [arXiv:1904.07717v2](https://arxiv.org/pdf/1904.07717v2), 26 August 2019, printed pages 1 and 15–16. Checked the definition of symbolic defect, the established core invariants in Theorem 4.3, and the numerical assertion in Theorem 4.4. Section 7 supplies a direct countercalculation to the latter in the inspected version. The linked unversioned PDF displayed the v2 date label when checked.

The general request for arbitrary numbers of general points in higher projective dimension remains outside this report. In particular, no formula for arbitrary $s>n$, no classification of arbitrary dependent configurations, and no verification of the further conjectures in Section 8 of the 2026 preprint is claimed.

Original exposition and verification records: CC BY 4.0. Original code: Apache-2.0. The cited works retain their own licences; mathematical attribution is not a claim to relicense their expression.


## Reproducible exact verifier

Save the following as `verify1500016.py` and run `python3 verify1500016.py`. It writes the results and four-point certificate beside the script.

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/24) for this material.

## Recorded verification output

```json
{
  "status": "PASS",
  "convention": "n total variables, s coordinate points in P^(n-1), q=n-s outside variables",
  "method": {
    "ordinary_membership": "Recursive division by the actual generators y_j and x_i*x_j; no closed order formula used",
    "symbolic_membership": "Intersection test sum(e)-e_i >= m for each point i",
    "bounded_compositions": "Inclusion-exclusion compared to explicit weak-composition enumeration",
    "hilbert_series": "Graded monomial enumeration compared to the proposed finite double sum",
    "containment": "Every minimal symbolic generator in the exhaustive exponent box [0,u]^n tested by actual generator division",
    "symbolic_defect": "Counts of nonordinary minimal symbolic generators compared to equations (15)-(17)",
    "support_and_top_coefficient": "Exactly enumerated Hilbert polynomial compared to equations (11)-(13)",
    "balanced_witnesses": "Evenly distributed core exponents tested for exact symbolic and ordinary orders and all containment thresholds"
  },
  "limits": {
    "ordinary_order_and_hilbert": {
      "n": [
        2,
        6
      ],
      "s": "1..n",
      "m": [
        1,
        5
      ],
      "total_degree": "0..2m+1 inclusive"
    },
    "bounded_compositions": {
      "s": [
        1,
        6
      ],
      "total": [
        0,
        11
      ],
      "bound": "-1..total"
    },
    "containment": {
      "n": [
        2,
        6
      ],
      "s": "1..n",
      "u": [
        1,
        5
      ],
      "v": [
        1,
        7
      ]
    },
    "symbolic_defect": {
      "n": [
        2,
        6
      ],
      "s": "1..n",
      "m": [
        1,
        5
      ]
    },
    "core_generator_formula": {
      "s": [
        3,
        6
      ],
      "r": [
        1,
        5
      ],
      "k": "ceil(r/(s-1))..r-1"
    },
    "support_and_top_coefficient": {
      "n": [
        3,
        6
      ],
      "s": "3..n",
      "m": [
        2,
        5
      ]
    },
    "balanced_witnesses": {
      "n": [
        2,
        6
      ],
      "s": "2..n",
      "u": [
        1,
        5
      ],
      "v": [
        1,
        7
      ]
    },
    "scope": "Finite exact tests support but do not establish the unbounded mathematical claims."
  },
  "counts": {
    "ambient_sdefect_comparisons": 100,
    "balanced_containment_witness_checks": 75,
    "balanced_witness_threshold_checks": 525,
    "bounded_composition_checks": 540,
    "bounded_composition_vectors_examined": 209507,
    "containment_comparisons": 700,
    "core_generator_stratum_comparisons": 33,
    "core_sdefect_comparisons": 20,
    "exact_support_comparisons": 40,
    "four_point_certificate_checks": 1,
    "graded_coefficients_compared": 800,
    "hilbert_polynomials_compared": 100,
    "minimal_generator_box_states_examined": 474616,
    "minimal_generator_criterion_checks": 3830,
    "minimal_symbolic_generators_examined": 3830,
    "ordinary_order_comparisons": 168232,
    "ordinary_order_dp_states": 102804,
    "symbolic_and_ordinary_monomials_examined": 168232,
    "top_coefficient_comparisons": 40
  },
  "hilbert_examples": {
    "n=3,s=3,m=2": {
      "3": 1
    },
    "n=3,s=3,m=3": {
      "5": 3
    },
    "n=3,s=3,m=4": {
      "6": 1,
      "7": 6
    },
    "n=4,s=3,m=2": {
      "3": 1
    },
    "n=4,s=3,m=3": {
      "4": 1,
      "5": 3
    },
    "n=4,s=3,m=4": {
      "5": 1,
      "6": 4,
      "7": 6
    }
  },
  "three_point_containment_examples": [
    {
      "u": 1,
      "least_ordinary_order": 1,
      "witness": [
        0,
        1,
        1
      ],
      "minimal_symbolic_generators": 3
    },
    {
      "u": 2,
      "least_ordinary_order": 1,
      "witness": [
        1,
        1,
        1
      ],
      "minimal_symbolic_generators": 4
    },
    {
      "u": 3,
      "least_ordinary_order": 2,
      "witness": [
        1,
        2,
        2
      ],
      "minimal_symbolic_generators": 6
    },
    {
      "u": 4,
      "least_ordinary_order": 3,
      "witness": [
        1,
        3,
        3
      ],
      "minimal_symbolic_generators": 7
    },
    {
      "u": 5,
      "least_ordinary_order": 4,
      "witness": [
        1,
        4,
        4
      ],
      "minimal_symbolic_generators": 9
    }
  ],
  "four_point_certificate": {
    "problem": "TOP-1500016",
    "convention": "n=4 total variables, s=4 coordinate points in P^3, m=3",
    "ideal_generators": [
      [
        1,
        1,
        0,
        0
      ],
      [
        1,
        0,
        1,
        0
      ],
      [
        1,
        0,
        0,
        1
      ],
      [
        0,
        1,
        1,
        0
      ],
      [
        0,
        1,
        0,
        1
      ],
      [
        0,
        0,
        1,
        1
      ]
    ],
    "symbolic_power": 3,
    "ordinary_power": 3,
    "minimal_quotient_generators": [
      [
        0,
        1,
        2,
        2
      ],
      [
        0,
        2,
        1,
        2
      ],
      [
        0,
        2,
        2,
        1
      ],
      [
        1,
        0,
        2,
        2
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        1,
        2,
        0,
        2
      ],
      [
        1,
        2,
        2,
        0
      ],
      [
        2,
        0,
        1,
        2
      ],
      [
        2,
        0,
        2,
        1
      ],
      [
        2,
        1,
        0,
        2
      ],
      [
        2,
        1,
        2,
        0
      ],
      [
        2,
        2,
        0,
        1
      ],
      [
        2,
        2,
        1,
        0
      ]
    ],
    "symbolic_defect": 13,
    "generator_certificates": [
      {
        "exponent": [
          0,
          1,
          2,
          2
        ],
        "symbolic_order": 3,
        "ordinary_order_by_actual_generator_division": 2,
        "orders_after_removing_each_positive_variable": [
          2,
          2,
          2
        ]
      },
      {
        "exponent": [
          0,
          2,
          1,
          2
        ],
        "symbolic_order": 3,
        "ordinary_order_by_actual_generator_division": 2,
        "orders_after_removing_each_positive_variable": [
          2,
          2,
          2
        ]
      },
      {
        "exponent": [
          0,
          2,
          2,
          1
        ],
        "symbolic_order": 3,
        "ordinary_order_by_actual_generator_division": 2,
        "orders_after_removing_each_positive_variable": [
          2,
          2,
          2
        ]
      },
      {
        "exponent": [
          1,
          0,
          2,
          2
        ],
        "symbolic_order": 3,
        "ordinary_order_by_actual_generator_division": 2,
        "orders_after_removing_each_positive_variable": [
          2,
          2,
          2
        ]
      },
      {
        "exponent": [
          1,
          1,
          1,
          1
        ],
        "symbolic_order": 3,
        "ordinary_order_by_actual_generator_division": 2,
        "orders_after_removing_each_positive_variable": [
          2,
          2,
          2,
          2
        ]
      },
      {
        "exponent": [
          1,
          2,
          0,
          2
        ],
        "symbolic_order": 3,
        "ordinary_order_by_actual_generator_division": 2,
        "orders_after_removing_each_positive_variable": [
          2,
          2,
          2
        ]
      },
      {
        "exponent": [
          1,
          2,
          2,
          0
        ],
        "symbolic_order": 3,
        "ordinary_order_by_actual_generator_division": 2,
        "orders_after_removing_each_positive_variable": [
          2,
          2,
          2
        ]
      },
      {
        "exponent": [
          2,
          0,
          1,
          2
        ],
        "symbolic_order": 3,
        "ordinary_order_by_actual_generator_division": 2,
        "orders_after_removing_each_positive_variable": [
          2,
          2,
          2
        ]
      },
      {
        "exponent": [
          2,
          0,
          2,
          1
        ],
        "symbolic_order": 3,
        "ordinary_order_by_actual_generator_division": 2,
        "orders_after_removing_each_positive_variable": [
          2,
          2,
          2
        ]
      },
      {
        "exponent": [
          2,
          1,
          0,
          2
        ],
        "symbolic_order": 3,
        "ordinary_order_by_actual_generator_division": 2,
        "orders_after_removing_each_positive_variable": [
          2,
          2,
          2
        ]
      },
      {
        "exponent": [
          2,
          1,
          2,
          0
        ],
        "symbolic_order": 3,
        "ordinary_order_by_actual_generator_division": 2,
        "orders_after_removing_each_positive_variable": [
          2,
          2,
          2
        ]
      },
      {
        "exponent": [
          2,
          2,
          0,
          1
        ],
        "symbolic_order": 3,
        "ordinary_order_by_actual_generator_division": 2,
        "orders_after_removing_each_positive_variable": [
          2,
          2,
          2
        ]
      },
      {
        "exponent": [
          2,
          2,
          1,
          0
        ],
        "symbolic_order": 3,
        "ordinary_order_by_actual_generator_division": 2,
        "orders_after_removing_each_positive_variable": [
          2,
          2,
          2
        ]
      }
    ],
    "quotient_monomial_basis": [
      [
        1,
        1,
        1,
        1
      ],
      [
        0,
        1,
        2,
        2
      ],
      [
        0,
        2,
        1,
        2
      ],
      [
        0,
        2,
        2,
        1
      ],
      [
        1,
        0,
        2,
        2
      ],
      [
        1,
        1,
        1,
        2
      ],
      [
        1,
        1,
        2,
        1
      ],
      [
        1,
        2,
        0,
        2
      ],
      [
        1,
        2,
        1,
        1
      ],
      [
        1,
        2,
        2,
        0
      ],
      [
        2,
        0,
        1,
        2
      ],
      [
        2,
        0,
        2,
        1
      ],
      [
        2,
        1,
        0,
        2
      ],
      [
        2,
        1,
        1,
        1
      ],
      [
        2,
        1,
        2,
        0
      ],
      [
        2,
        2,
        0,
        1
      ],
      [
        2,
        2,
        1,
        0
      ]
    ],
    "hilbert_difference": {
      "4": 1,
      "5": 16
    },
    "vector_space_dimension": 17,
    "nongenerator_basis_monomials": [
      [
        1,
        1,
        1,
        2
      ],
      [
        1,
        1,
        2,
        1
      ],
      [
        1,
        2,
        1,
        1
      ],
      [
        2,
        1,
        1,
        1
      ]
    ],
    "source_interpreted_2019_formula": "binom(n,h+1), with n=4 and h=3",
    "proposed_2019_value": 1,
    "comparison": "Actual symbolic defect 13 differs from the stated 2019 proposed value 1; source interpretation is documented separately in solution.md.",
    "verification": "All monomials tested by prime-power inequalities and independent recursive ordinary-generator division; minimality tested by removing each variable."
  },
  "negative_controls": {
    "ceiling_instead_of_floor_is_rejected": {
      "n": 3,
      "s": 3,
      "exponent": [
        1,
        1,
        1
      ],
      "actual_order": 1,
      "mutated_order": 2
    },
    "dropped_upper_summand_is_rejected": {
      "n": 3,
      "s": 3,
      "m": 2,
      "actual": {
        "3": 1
      },
      "mutated": {}
    }
  },
  "elapsed_seconds": 2.639
}
```



## Attribution and references from the original submission

### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6; exact serving revision unknown)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), instance 1 | version: unknown | reasoning: unknown | role: main derivation, original exposition, source cross-check, integration, final exact run and submission
OpenAI Codex (GPT-6), instance 2 | version: unknown | reasoning: unknown | role: independent source scouting, ambient-variable derivation and version-specific correction audit
OpenAI Codex (GPT-6), instance 3 | version: unknown | reasoning: unknown | role: independent all-section mathematical proof audit, edge cases, containments, minimal generators and source cross-check
OpenAI Codex (GPT-6), instance 4 | version: unknown | reasoning: unknown | role: independent exact verifier using actual generator division, certificate generation and supplementary proof checks

### People and roles

Gaven (@gavenren): prompted the work and authorized public submission. No human mathematical review was supplied in this session. Cited authors are credited as prior literature, not as session collaborators.

### References

ULAM.AI, UnsolvedMath contributors and We-Solve, [TOP-1500016 / Math-3417](https://we-solve.github.io/problems/algebraic-stories-symbolic-powers-vs-ordinary-powers/), AMR-014-0016, CC BY 4.0. Checked the precise statement and listed prior contributions (none on the problem page); GitHub handle search also returned no matching issue before submission.

R. Fröberg, S. Lundqvist, A. Oneto and B. Shapiro, [Algebraic Stories from One and from the Other Pockets, arXiv:1801.01692v1](https://arxiv.org/pdf/1801.01692v1), Section 3.2, Problem K, printed page 9. Checked the original all-parameter question; distinguish its version-specific lettering from Problem L in the later preprint.

R. Fröberg and B. Shapiro, [Symbolic powers of the ideal of n general points in P^(n-1), arXiv:2609.18539v2](https://arxiv.org/pdf/2609.18539v2), 17 September 2026, Sections 2–6, especially Theorems 3.1 and 4.1. Checked the established spanning-case Hilbert formula, generator characterization and invariants. Preprint status; acceptance not claimed. Its results are credited and reproved in original exposition, with the elementary ambient-variable extension.

B. Chakraborty and M. Mandal, [Invariants of the symbolic powers of edge ideals, arXiv:1904.07717v2](https://arxiv.org/pdf/1904.07717v2), 26 August 2019, printed pages 1 and 15–16. Checked the symbolic-defect definition and Theorems 4.3–4.4 against the PDF showing this version label. Credit the established core invariants in 4.3; give an exact countercalculation for 4.4 in this inspected version only. No uninspected journal text or correction history is represented.

