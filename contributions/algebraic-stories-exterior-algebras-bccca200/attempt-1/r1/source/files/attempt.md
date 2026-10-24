> Editorial note: This report distinguishes a counterexample to the earlier every-form catalogue wording from the published generic-form question. The current problem statement restores genericity; the unrestricted generic question is not resolved by this report.

> Source: [original issue #25](https://github.com/We-Solve/research/issues/25). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


# Genericity matters for odd exterior forms: a complete universal classification

**Problem:** prb_bccca200c8a7419c882a8710956cfa92 / Math-3421 / catalogue entry, *Algebraic Stories — Exterior algebras*.

**Claim type:** Literature report and catalogue correction, including a complete disproof of the catalogue's universal statement, an exact classification for nonzero forms, and explicit certificates for stated positive generic cases.

The distinction is a mathematical hypothesis. The catalogue asks about **every** odd-degree form. The published problem asks about a **generic** form: Fröberg–Lundqvist–Oneto–Shapiro, *Algebraic Stories from One and from the Other Pockets*, Arnold Mathematical Journal 4 (2018), 137–160, Section 4.4, **Problem Q**, printed page 155. The initially cited arXiv v1 uses the label Problem P. The published text explicitly includes genericity. We do not claim that the counterexamples below disprove that published generic question.

The positive cases proved here are compatible with established work by Samuel Lundqvist and Lisa Nicklasson, *On generic principal ideals in the Exterior algebra*, arXiv:1803.03563v1, especially Propositions 4.2, 4.4 and 4.5. The report supplies elementary constructions and exact matrix certificates, without claiming historical novelty or priority. All exposition and software are independently written.

## 1. Definitions and the exact result

Work over $\mathbb C$. Let $V$ have dimension $n\ge1$, and let

$$E=\Lambda V=\bigoplus_{i=0}^nE_i,\qquad E_i=\Lambda^iV.$$

For a nonzero homogeneous form $f\in E_d$, with $1\le d\le n$ odd, write

$$\operatorname{Ann}(f)=\{a\in E:a\wedge f=0\},\qquad (f)=Ef.$$

The homogeneous multiplication maps are

$$\mu_i:E_i\longrightarrow E_{i+d},\qquad a\longmapsto a\wedge f.$$

Since $d$ is odd, graded commutativity gives $f^2=-f^2$, so $f^2=0$. Consequently

$$H_i(f):=\operatorname{Ann}(f)_i/(f)_i
=\ker\mu_i/\operatorname{im}\mu_{i-d}
\tag{1}$$

is a well-defined vector space; a map from a negative graded piece has zero image. The catalogue asks whether $H_i(f)=0$ for all nonnegative integers $i<(n-d)/2$ and every $f$.

**Theorem 1 (complete nonzero universal classification).** For fixed $n,d$ in the stated range, the equality

$$\operatorname{Ann}(f)_i=(f)_i\quad\text{for every }0\le i<(n-d)/2$$

holds for **every nonzero** $f\in E_d$ if and only if

$$\boxed{d=1\quad\text{or}\quad n\le d+2.}\tag{2}$$

In every excluded parameter pair, one decomposable form supplies a counterexample in degree one. Thus this is an all-parameter result about the universal formulation, not a finite computation.

## 2. The smallest nonzero counterexample

Take $n=6,d=3$ and

$$f=e_1\wedge e_2\wedge e_3.$$

This form is nonzero. However,

$$e_1\wedge f=0,\qquad e_1\notin(f)_1=0,\qquad
1<\frac{6-3}{2}=\frac32.\tag{3}$$

In fact $\operatorname{Ann}(f)_1=\langle e_1,e_2,e_3\rangle$. Every hypothesis in the catalogue's stated universal question is met, including the **strict** degree cutoff. This does not depend on interpreting the zero form as a degree-$d$ form.

Among nonzero forms of positive odd degree, $n=6$ is the smallest ambient dimension allowing such a counterexample: (2) proves there are none for $n\le5$. This is an exact elementary minimality assertion in the specified nonzero class, not a historical priority claim.

## 3. Proof of the classification

If $d=1$, extend the nonzero vector $f$ to a basis and write $V=\langle f\rangle\oplus W$. The decomposition

$$E_i=\Lambda^iW\oplus f\wedge\Lambda^{i-1}W$$

shows that multiplication by $f$ is injective on the first summand and zero on the second. Its kernel is therefore exactly $f\wedge\Lambda^{i-1}W=(f)_i$ in every degree.

If $n\le d+2$, the cutoff $(n-d)/2$ is at most one. The only possible eligible nonnegative degree is zero. For nonzero $f$, multiplication $\mathbb C\to E_d$ sends $1$ to a nonzero vector, so both $\operatorname{Ann}(f)_0$ and $(f)_0$ are zero. If $n=d$, there is no eligible degree at all.

Finally suppose $d\ge3$ and $n\ge d+3$. Set $f=e_1\cdots e_d$. Then $e_1\in\operatorname{Ann}(f)_1$, whereas $(f)_1=0$ because $1<d$. Also $1<(n-d)/2$. This proves failure for every remaining parameter pair and finishes the proof of (2).

**Zero-form convention.** If the word “form” includes $f=0$, then $\operatorname{Ann}(0)_0=\mathbb C$ and $(0)_0=0$, so the zero form already violates the proposed equality whenever $n>d$. The substantive results above deliberately strengthen the disproof by using nonzero forms. In the range $1\le d\le n$, the universal assertion including the zero form holds only at $n=d$, when its degree range is empty.

## 4. Every degree of the decomposable obstruction

Let $f=e_1\cdots e_d$, and put $W=\langle e_{d+1},\ldots,e_n\rangle$. A basis monomial annihilates $f$ exactly when it contains at least one of $e_1,\ldots,e_d$. Monomials using only $W$ map injectively to distinct monomials after multiplication by $f$. Hence there is no cancellation between the two classes, and

$$\operatorname{Ann}(f)=(e_1,\ldots,e_d).\tag{4}$$

With binomial coefficients outside their usual range interpreted as zero, the exact dimensions in every degree are

$$\dim\operatorname{Ann}(f)_i=\binom ni-\binom{n-d}{i},\qquad
\dim(f)_i=\binom{n-d}{i-d}.\tag{5}$$

Subtracting gives

$$\boxed{\operatorname{Hilb}_{\operatorname{Ann}(f)/(f)}(t)
=(1+t)^n-(1+t^d)(1+t)^{n-d}.}\tag{6}$$

For $n=6,d=3$ this is

$$3t+12t^2+18t^3+12t^4+3t^5.\tag{7}$$

When $d\ge3$, the quotient in (6) has exactly $d$ minimal generators as a graded $E$-module: the nonzero classes of $e_1,\ldots,e_d$. They generate by (4), and no nontrivial linear combination is zero or generated from smaller degrees. When $d=1$, the quotient is zero and needs no generators.

## 5. What a degree-one annihilator actually means

For any nonzero homogeneous $f\in\Lambda^dV$ and $0\ne v\in V$,

$$v\wedge f=0\quad\Longleftrightarrow\quad f=v\wedge g
\text{ for some }g\in\Lambda^{d-1}V.\tag{8}$$

To see this, take $v$ as a basis vector and write $f=v\wedge g+h$, with $g,h$ using the complementary basis. Then $v\wedge f=v\wedge h$, and multiplication by $v$ is injective on complementary monomials. Thus the kernel is precisely $h=0$.

More generally, if $A=\operatorname{Ann}(f)_1$ has dimension $a$, choose its basis $v_1,\ldots,v_a$ and a complement $W$. Applying the same coefficient test to each $v_j$ shows

$$f=(v_1\wedge\cdots\wedge v_a)\wedge g,
\qquad 0\ne g\in\Lambda^{d-a}W,\qquad
\operatorname{Ann}_{\Lambda W}(g)_1=0.\tag{9}$$

If $g$ had a nonzero linear annihilator in $W$, that vector would also annihilate $f$, contradicting the definition of $A$. Consequently $a\le d$; $a=d-1$ is impossible because a nonzero residual linear form annihilates itself; and $a=d$ occurs exactly for decomposable $f$.

This explains the degree-one obstruction intrinsically, without relying on coordinates or numerical calculations.

## 6. Counterexamples using every ambient direction

The obstruction is not limited to a form lying in a small coordinate subspace. For every $r\ge3$, set $n=2r+1$, $d=3$, and

$$f=e_1\wedge\omega,\qquad
\omega=e_2\wedge e_3+e_4\wedge e_5+\cdots+e_{2r}\wedge e_{2r+1}.
\tag{10}$$

Then $e_1$ annihilates $f$ and $1<(n-3)/2=r-1$, so this is again a counterexample. Moreover

$$\operatorname{Ann}(f)_1=\mathbb C e_1.\tag{11}$$

Indeed write $v=c e_1+w$, with $w$ in the span of the remaining basis vectors. The condition is $w\wedge\omega=0$. For each coefficient of $w$, choose one of the displayed pairs not containing that vector. In the coefficient of the resulting three-element support in $w\wedge\omega$, that term is unique: a three-element set cannot contain two of the disjoint pairs. Thus every coefficient of $w$ is zero.

To certify that $f$ uses all $n$ directions, use contractions $\iota_\lambda f$, $\lambda\in V^*$. Contraction by $e_1^*$ gives $\omega$. Contractions by the other $2r$ dual basis vectors give, up to signs, the $2r$ distinct monomials $e_1\wedge e_j$ for $2\le j\le2r+1$. These $n$ two-forms are independent. If $f$ belonged to $\Lambda^3U$ for a proper subspace $U\subset V$, a nonzero covector vanishing on $U$ would contract it to zero. Independence rules that out. Hence the essential support is all of $V$, and in particular these forms are not decomposable.

The first such full-support example is $n=7$, with $f=e_{123}+e_{145}+e_{167}$, where subscripts abbreviate increasing wedge monomials.

## 7. Restoring genericity: a positive result for every odd degree

For fixed $n,d$, matrix entries of $\mu_1$ are linear polynomials in the coefficients of $f$. The condition $\ker\mu_1=0$ is the nonvanishing of at least one $n\times n$ minor. Thus one explicit injective example proves that injectivity holds on a nonempty Zariski-open subset of $E_d$, and hence generically over $\mathbb C$.

**Theorem 2.** For every odd $d\ge3$ and every $n\ge d+3$, a generic $f\in\Lambda^d\mathbb C^n$ has

$$\operatorname{Ann}(f)_1=0.\tag{12}$$

Here is an elementary witness construction. Put $m=d+3\ge6$. Choose a family $\mathcal T$ of three-element subsets of $[m]$ covering all vertices, any two intersecting in at most one vertex. Such a family exists for every $m\ge6$:

| Residue of $m$ modulo 3 | Initial triples | Remaining vertices |
|---|---|---|
| 0 | None | Partition all vertices into disjoint triples |
| 1 | $123,145,167,246$ on the first 7 vertices | Partition vertices $8,\ldots,m$ into disjoint triples |
| 2 | $123,145,267,368$ on the first 8 vertices | Partition vertices $9,\ldots,m$ into disjoint triples |

Define

$$f_{\mathcal T}=\sum_{T\in\mathcal T}e_{[m]\setminus T}\in\Lambda^{m-3}\mathbb C^m.
\tag{13}$$

The column of $\mu_1$ indexed by $e_j$ has one nonzero entry, up to wedge sign, for each triple containing $j$. The output support is $[m]\setminus(T\setminus\{j\})$. Every column is nonzero because the triples cover the vertices. Two different columns cannot have a common output support. Such a collision would give

$$T\setminus\{j\}=T'\setminus\{k\},\qquad j\ne k,$$

forcing distinct triples to share two vertices; for the same triple it would force $j=k$. This contradicts the construction. Hence the nonzero column supports are pairwise disjoint, and the columns are independent. Selecting one nonzero row from each column even gives a diagonal minor with determinant $\pm1$.

For $n>m$, regard this same form inside $\Lambda\mathbb C^n$. The old columns remain independent in the subspace with no new variables; each new column is $e_j\wedge f_{\mathcal T}$, in its own distinct one-new-variable summand. Thus all $n$ columns remain independent. Rank openness proves (12).

This range is already a consequence of Lundqvist–Nicklasson, Proposition 4.2, plus this embedding argument; our triple-cover construction is an alternative elementary certificate. No new generic theorem is claimed.

**Corollary.** The published generic equality holds for every positive odd $d$ whenever $n\le d+4$. For $d=1$ it holds in all degrees. For $d\ge3$, the range $n\le d+2$ was proved above; at $n=d+3$ and $n=d+4$, the only additional eligible degree is one, handled by (12).

## 8. An explicit seven-variable cubic certificate

There is also a compact witness for the degree-two map. Let

$$\varphi=e_{123}+e_{145}+e_{167}+e_{246}-e_{257}-e_{347}-e_{356}
\in\Lambda^3\mathbb C^7.\tag{14}$$

The integer matrix of

$$\mu_2:\Lambda^2\mathbb C^7\longrightarrow\Lambda^5\mathbb C^7,
\qquad a\longmapsto a\wedge\varphi$$

has determinant $-128$ in lexicographically increasing wedge bases. Its invertibility also has the following small, self-contained block certificate. For increasing two-element subsets $A,B\subset[7]$, define

$$H_{A,B}=[e_{1234567}](e_A\wedge e_B\wedge\varphi).$$

This matrix differs from the multiplication matrix only by permuting and changing signs of rows. The following table specifies all its nonzero blocks; every entry between different blocks is zero. In a row labelled $(A,B,C)$ the indicated triple is $(H_{A,B},H_{A,C},H_{B,C})$.

| Two-form basis of block | Three upper off-diagonal entries | Block determinant |
|---|---|---|
| $12,47,56$ | $-1,-1,+1$ | $2$ |
| $13,46,57$ | $-1,+1,-1$ | $2$ |
| $14,27,36$ | $+1,+1,+1$ | $2$ |
| $15,26,37$ | $+1,-1,-1$ | $2$ |
| $16,25,34$ | $-1,-1,+1$ | $2$ |
| $17,24,35$ | $-1,+1,-1$ | $2$ |
| $23,45,67$ | $+1,+1,+1$ | $2$ |

Each block is the symmetric matrix with zero diagonal and upper entries $a,b,c$. Its determinant is $2abc=2$. The seven blocks partition all 21 two-form basis elements, giving $\det H=2^7=128\ne0$. Every entry in the table follows by multiplying the displayed three wedge monomials and comparing with the volume element. This proves invertibility without a numerical-rank argument. The accompanying program independently constructs the full multiplication matrix, checks this block table, and computes its signed determinant by fraction-free integer elimination.

This also makes $\mu_1$ injective. Otherwise a nonzero $v\in\ker\mu_1$ and an independent $w$ would give the nonzero two-form $v\wedge w$ in $\ker\mu_2$, a contradiction. The map $\mu_0$ is injective since $\varphi\ne0$.

Pad $\varphi$ with $q=1$ or $2$ unused variables. For total degree two, the decomposition by the number of new variables is

$$\Lambda^2(V\oplus U)=\Lambda^2V\oplus(V\otimes U)\oplus\Lambda^2U.$$

Multiplication by $\varphi$ respects these summands in the target. On them it is respectively $\mu_2$, $\mu_1\otimes\mathrm{id}_U$, and $\mu_0\otimes\mathrm{id}_{\Lambda^2U}$, up to harmless signs. Each map is injective. Consequently its exact rank in dimension $n=7+q$ is

$$21+7q+\binom q2=\binom{7+q}{2}.\tag{15}$$

It follows by the same rank-open argument that, for cubics in $n=8,9$ variables, the generic maps in degrees zero, one and two are injective. Since $(f)_i=0$ for $i<3$, this proves the published generic equality throughout its strictly permitted range for these dimensions. Together with Section 7, it proves that generic equality for cubics holds for every $n\le9$ with $n\ge3$.

These are established cases of the original generic problem: Lundqvist–Nicklasson prove substantially more, including the cubic cases through $n=17$ (with $n=9$ treated in a separate proposition). Our claim is the explicit small integer certificate and elementary proof given here, without a novelty claim or a re-verification of their larger computations. The displayed padded form is a witness to low-degree ranks; it is not asserted to attain the generic Hilbert series in every other degree.

All claims in this section are over $\mathbb C$. The determinant does not justify the same conclusion in characteristic two.

## 9. The strict boundary and a useful rank identity

At $(n,d)=(9,3)$ the question permits $i<3$; it does **not** assert equality at $i=3$. The larger degree-three kernel discussed in both source papers is therefore not itself a counterexample to the stated generic question. The decomposable counterexamples in Section 3 occur strictly below the boundary.

For any odd $f$, if $r_i=\operatorname{rank}\mu_i$, then

$$\dim H_i(f)=\binom ni-r_i-r_{i-d}.\tag{16}$$

The image lies in the kernel because $f^2=0$, so this is a genuine nonnegative dimension. This identity is a useful verification check: testing only whether $\mu_i$ has a kernel would be incorrect once $i\ge d$, because some kernel is forced by multiples of $f$.

## 10. Exact verification and its limits

The original dependency-free Python checker constructs exterior products from signed basis multiplication. It checks the decomposable formulas against actual multiplication-map ranks, records the explicit nonzero counterexample, checks the full-support example by contraction, verifies the triple-cover complement forms, and computes the cubic determinant over the integers. Padding ranks are independently checked by exact rational elimination. Arithmetic control examples check wedge signs, rank deficiency and determinant signs; a separate boundary check shows that $i=2$ for $n=7,d=3$ is excluded by the strict cutoff $2i<n-d$.

The final executed checks cover 30 decomposable parameter pairs (all n=1,...,10 and positive odd d<=n), all 235 associated graded states, and 470 dimension equalities. They also certify the six full-support examples r=3,...,8, 95 complement-form witnesses m=6,...,100, all 19,661 pairwise triple-intersection tests, 5,319 nonzero support entries and 5,035 diagonal minor entries. The complement support data agree with independently constructed full exterior multiplication matrices for m=6,...,12. The seven-variable cubic determinant, all seven block determinants, and padded ranks 21,28,36 were checked exactly. The cases with odd-degree m-3 are precisely the even m; testing the remaining m is supplementary.

The program and recorded results are included with the submission. The finite runs corroborate the all-parameter proofs in Sections 3–7. The determinant in Section 8 is a finite exact certificate for that stated matrix, rather than a numerical estimate of generic rank. Exact test ranges, counts and arithmetic methods are recorded in the verification results recorded in the original submission; detailed matrices and witness data are in the certificate data recorded in the original submission.

## 11. Recommended catalogue correction and claim limits

The record should distinguish the following two statements:

| Version | Quantifier on $f$ | Result of this report |
|---|---|---|
| Current catalogue | Every odd-degree form | False; nonzero universal parameter range classified by (2) |
| Published Problem Q | Generic odd-degree form | Positive stated ranges proved and credited; unrestricted generic question not resolved here |

Restoring “generic” aligns the record with the checked published formulation. Keeping the universal question instead requires recording its disproof. These are different statements, so a status update for one must not be represented as a resolution of the other.

No assertion is made that the full generic question is currently unresolved in all later literature; this report's proof scope is exactly the ranges stated. No human mathematical review or formal proof-assistant verification is claimed.

## 12. Checked sources and attribution

1. ULAM.AI, UnsolvedMath contributors and We-Solve, [prb_bccca200c8a7419c882a8710956cfa92 / Math-3421](https://we-solve.github.io/problems/algebraic-stories-exterior-algebras-bccca200/), catalogue entry, CC BY 4.0. Checked the universal quantifier, strict degree cutoff, complex base field and absence of listed contributions on 18 October 2026.
2. R. Fröberg, S. Lundqvist, A. Oneto and B. Shapiro, *Algebraic Stories from One and from the Other Pockets*, Arnold Mathematical Journal **4** (2018), 137–160, DOI [10.1007/s40598-018-0088-z](https://doi.org/10.1007/s40598-018-0088-z), [published full text](https://amj.math.stonybrook.edu/pdf-Springer-final/018-0088.pdf), Section 4.4, **Problem Q**, printed page 155. Checked the explicit generic hypothesis and surrounding nine-variable example. The [arXiv v1](https://arxiv.org/pdf/1801.01692v1), Section 4.4, calls the corresponding question Problem P; the published form is used to clarify the hypothesis.
3. S. Lundqvist and L. Nicklasson, *On generic principal ideals in the Exterior algebra*, [arXiv:1803.03563v1](https://arxiv.org/html/1803.03563v1), 9 March 2018. Checked Section 1's generic-rank formulation, Proposition 4.2's degree-one injectivity construction, Propositions 4.4–4.5's established cases, and the distinction between the nine-variable boundary phenomenon and low-degree equality. The report does not rerun the larger Macaulay2 computations in that paper.

Original exposition and verification records: CC BY 4.0. Original code: Apache-2.0. Cited works and their original expression retain their own rights. No source-paper prose, figures or PDFs are redistributed, and no historical novelty is claimed for the elementary obstructions or established generic cases.


## Reproducible exact verifier

Save as `verify.py` and run `python3 verify.py`. It writes both the summary and detailed certificate JSON beside the script.

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/25) for this material.

## Recorded exact verification summary

```json
{
  "status": "all exact checks passed",
  "arithmetic": "integers and rational numbers",
  "finite_test_limits": {
    "monomial_grid": {
      "n_min": 1,
      "n_max": 10,
      "d": "all positive odd integers <= n",
      "i": "all integers 0 <= i <= n"
    },
    "full_support_family": {
      "r_min": 3,
      "r_max": 8,
      "n": "2r+1",
      "d": 3
    },
    "triple_cover_complement_forms": {
      "m_min": 6,
      "m_max": 100,
      "degree": "m-3",
      "note": "all integer m tested; odd-degree applications use even m"
    },
    "triple_cover_independent_full_matrices": {
      "m_min": 6,
      "m_max": 12
    },
    "generic_cubic_witnesses": {
      "n_min": 3,
      "n_max": 9,
      "d": 3,
      "i": "all nonnegative integers with 2i < n-3"
    },
    "seven_variable_padding": {
      "n": [
        7,
        8,
        9
      ],
      "i": [
        0,
        1,
        2
      ]
    }
  },
  "monomial_parameter_pairs": 30,
  "graded_states": 235,
  "dimension_equalities_checked": 470,
  "parameter_pairs_with_equality_in_range": 21,
  "parameter_pairs_with_a_counterexample_in_range": 9,
  "n6_d3_annihilator_and_ideal_in_degree_1": [
    3,
    0
  ],
  "n7_full_support_annihilator_and_ideal_in_degree_1": [
    1,
    0
  ],
  "full_support_contraction_rank": 7,
  "full_support_family_parameters_checked": 6,
  "triple_cover_dimensions_checked": 95,
  "triple_cover_pairwise_intersection_checks": 19661,
  "triple_cover_nonzero_entries_with_unique_rows": 5319,
  "triple_cover_minor_diagonal_entries": 5035,
  "triple_cover_independent_full_matrix_checks": 7,
  "seven_variable_degree_two_determinant": -128,
  "seven_variable_hodge_determinant": 128,
  "hodge_blocks": 7,
  "hodge_block_determinants": [
    2,
    2,
    2,
    2,
    2,
    2,
    2
  ],
  "padded_degree_0_1_2_ranks": [
    {
      "n": 7,
      "ranks_in_degrees_0_1_2": [
        1,
        7,
        21
      ],
      "dimensions_in_degrees_0_1_2": [
        1,
        7,
        21
      ],
      "conjectured_degrees": [
        0,
        1
      ]
    },
    {
      "n": 8,
      "ranks_in_degrees_0_1_2": [
        1,
        8,
        28
      ],
      "dimensions_in_degrees_0_1_2": [
        1,
        8,
        28
      ],
      "conjectured_degrees": [
        0,
        1,
        2
      ]
    },
    {
      "n": 9,
      "ranks_in_degrees_0_1_2": [
        1,
        9,
        36
      ],
      "dimensions_in_degrees_0_1_2": [
        1,
        9,
        36
      ],
      "conjectured_degrees": [
        0,
        1,
        2
      ]
    }
  ],
  "generic_cubic_witness_dimensions": [
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "negative_controls_passed": 8,
  "scope": "Finite exact certificates; universal and generic claims also require the accompanying proofs.",
  "elapsed_seconds": 0.094496
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

OpenAI Codex (GPT-6), instance 1 | version: unknown | reasoning: unknown | role: primary derivation, source cross-check, report integration, independent verifier review and final run, public submission
OpenAI Codex (GPT-6), instance 2 | version: unknown | reasoning: unknown | role: source scouting, published genericity check, universal classification and alternative generic construction
OpenAI Codex (GPT-6), instance 3 | version: unknown | reasoning: unknown | role: independent complete proof audit, exact cubic determinant/padding check, source and scope cross-check
OpenAI Codex (GPT-6), instance 4 | version: unknown | reasoning: unknown | role: exact exterior-algebra verifier, complement-form and matrix certificates, code correction and finite checks

### People and roles

Gaven (@gavenren): prompted the work and authorized its public submission. No human mathematical review was supplied in this session. The cited authors are credited as prior literature, not as session collaborators.

### References

We-Solve [prb_bccca200c8a7419c882a8710956cfa92 / Math-3421](https://we-solve.github.io/problems/algebraic-stories-exterior-algebras-bccca200/), catalogue entry, credited to ULAM.AI and UnsolvedMath contributors, CC BY 4.0. Checked the universal quantifier, strict cutoff, base field and prior-contribution list; GitHub search returned no matching submission before posting.

R. Fröberg, S. Lundqvist, A. Oneto and B. Shapiro, Algebraic Stories from One and from the Other Pockets, Arnold Mathematical Journal 4 (2018), 137–160, DOI [10.1007/s40598-018-0088-z](https://doi.org/10.1007/s40598-018-0088-z), [published PDF](https://amj.math.stonybrook.edu/pdf-Springer-final/018-0088.pdf), Section 4.4, Problem Q, printed page 155. Checked the explicit generic hypothesis and surrounding nine-variable boundary example. The [arXiv v1](https://arxiv.org/pdf/1801.01692v1) labels the corresponding question Problem P.

S. Lundqvist and L. Nicklasson, [On generic principal ideals in the Exterior algebra, arXiv:1803.03563v1](https://arxiv.org/html/1803.03563v1), 9 March 2018, Section 1 and Propositions 4.2,4.4,4.5. Checked generic-rank openness, the established degree-one injectivity range, nine-variable example and broader known finite cases. Our positive cases are credited; their larger Macaulay2 computations were not rerun here.

