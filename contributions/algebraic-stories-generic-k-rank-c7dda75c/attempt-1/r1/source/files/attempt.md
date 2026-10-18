> Editorial note: The full disproof below concerns the earlier catalogue formula allowing d=1. The current problem statement restores the original k,n,d>=2 domain. The generic rank-six ternary-quartic example does not disprove that corrected conjecture.

> Source: [original issue #30](https://github.com/We-Solve/research/issues/30). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


# TOP-1500002: a classical counterexample to the catalogue's unrestricted formula

**Claim:** Full disproof of the universally quantified catalogue statement as written; a correction of scope, not a new result about higher-degree powers.  
**Parameters:** $(k,d,n)=(4,1,3)$.  
**Checked:** 18 October 2026.

## 1. Statement, counterexample, and historical scope

The [official catalogue](https://we-solve.github.io/problems/algebraic-stories-generic-k-rank-c7dda75c/) asks for its formula for all $n,d\ge1$ and $k\ge2$, over $\mathbb C$. At $k=4,d=1,n=3$ its proposed value is

$$
\min\{s\ge1:3s\ge15\}=5.
$$

In fact, a general ternary quartic has fourth-power rank six:

$$
\mathrm{rk}_4^\circ(4,3)=6\ne5.
$$

Sections 2–3 give a self-contained proof, including the passage from one example to a Zariski-open set. It uses only explicit linear algebra and the standard dominance/constructibility principle for polynomial maps over $\mathbb C$.

This rank is classical: Fröberg–Lundqvist–Oneto–Shapiro, *Algebraic Stories* (2018), Theorem 1.4, already records the Alexander–Hirschowitz exceptions. Their displayed Conjecture 1.6 omits a restriction excluding $d=1$, but Lundqvist–Oneto–Reznick–Shapiro, arXiv:1711.05014v1, Conjecture 1.2, explicitly assumes $k,n,d\ge2$. Our example does **not** disprove that higher-degree conjecture. No novelty is claimed for the rank-six result. The contribution is an explicit certificate and a correction to the unrestricted catalogue quantifier.

## 2. A nonempty open set requires at least six summands

Let $S_e=\mathbb C[x,y,z]_e$ and define the middle catalecticant

$$
C_F:S_2^\vee\longrightarrow S_2,\qquad Q\longmapsto Q(\partial_x,\partial_y,\partial_z)F.
$$

Here $S_2^\vee$ means the space of homogeneous differential operators of order two, with ordinary monomial basis $\partial_x^2,\partial_y^2,\partial_z^2,\partial_x\partial_y,\partial_x\partial_z,\partial_y\partial_z$.

For a linear form $L=ax+by+cz$,

$$
Q(\partial)L^4=12Q(a,b,c)L^2.
$$

Thus if $F=\sum_{i=1}^sL_i^4$, the image of $C_F$ is contained in $\mathrm{span}\{L_1^2,\ldots,L_s^2\}$, and $\mathrm{rank}C_F\le s$. No genericity assumption on that decomposition is needed.

Take

$$
F_0=x^4+y^4+z^4+(x+y)^4+(x+z)^4+(y+z)^4.
$$

Let $p_i$ be the coefficient vectors of these six linear forms, in this order. In the quadratic monomial order $(x^2,y^2,z^2,xy,xz,yz)$, put

$$
v(a,b,c)=(a^2,b^2,c^2,ab,ac,bc)^T,\qquad
V=[v(p_1)\ \cdots\ v(p_6)].
$$

Explicitly,

$$
V=
\begin{pmatrix}
1&0&0&1&1&0\\
0&1&0&1&0&1\\
0&0&1&0&1&1\\
0&0&0&1&0&0\\
0&0&0&0&1&0\\
0&0&0&0&0&1
\end{pmatrix}.
$$

Its determinant is one. The coefficient vector of $L^2$ is $Dv(a,b,c)$, where $D=\mathrm{diag}(1,1,1,2,2,2)$. The catalecticant matrix is therefore

$$
M_{F_0}=12DVV^T,\qquad
\det M_{F_0}=12^6\,2^3=23\,887\,872\ne0.
$$

The determinant of $C_F$ is a polynomial in the coefficients of $F$. Since it is nonzero at $F_0$, its nonvanishing set $U\subset S_4$ is a nonempty Zariski-open subset. Every $F\in U$ has fourth-power rank at least six. In particular, five summands cannot represent a general ternary quartic.

Also, $F_0$ itself has rank exactly six: the displayed decomposition supplies the upper bound and its catalecticant supplies the lower bound. This fact about one form alone is not the argument for the generic upper bound; that follows next.

## 3. Six summands suffice on a nonempty Zariski-open set

Consider the polynomial map

$$
\Phi:(S_1)^6\longrightarrow S_4,\qquad
(L_1,\ldots,L_6)\longmapsto\sum_{i=1}^6L_i^4.
$$

Its differential at the six forms used above has image $\sum_i L_i^3S_1$, since $d\Phi(h_1,\ldots,h_6)=4\sum_iL_i^3h_i$ and $4\ne0$ in $\mathbb C$.

The three axis forms $x,y,z$ supply nine distinct monomials:

$$
W=\mathrm{span}\{x^4,y^4,z^4,x^3y,x^3z,xy^3,y^3z,xz^3,yz^3\}.
$$

Modulo $W$, the three tangent vectors

$$
x(x+y)^3,\quad x(x+z)^3,\quad y(y+z)^3
$$

give $3x^2y^2,\ 3x^2z^2,\ 3y^2z^2$, respectively. These add three independent dimensions. The other three tangent vectors

$$
z(x+y)^3,\quad y(x+z)^3,\quad x(y+z)^3
$$

give, modulo $W$,

$$
3(x^2yz+xy^2z),\quad
3(x^2yz+xyz^2),\quad
3(xy^2z+xyz^2).
$$

In the ordered basis $(x^2yz,xy^2z,xyz^2)$ their coefficient matrix, after dividing columns by three, is

$$
\begin{pmatrix}1&1&0\\1&0&1\\0&1&1\end{pmatrix},
$$

of determinant $-2$. These add the final three dimensions. All fifteen quartic monomials are therefore in the image of $d\Phi$.

For completeness, the algebraic conclusion used here is: a polynomial map to $\mathbb C^N$ with a surjective differential at one point is dominant, and its image contains a nonempty Zariski-open subset. The first assertion follows from the complex inverse function theorem after restricting to $N$ independent source directions: the image contains a Euclidean open set, so no nonzero polynomial vanishes on it. For the second, the image is constructible by Chevalley's theorem; a dense constructible subset of an irreducible variety contains a nonempty Zariski-open subset.

Consequently some nonempty Zariski-open subset $T\subset S_4$ consists of sums of six fourth powers. The intersection $U\cap T$ is nonempty and Zariski-open, since affine space $S_4$ is irreducible. Every form there has rank both at least six and at most six. This proves the claimed generic rank and disproves the catalogue's predicted value five.

## 4. Exact arithmetic certificate and limitations

The accompanying standard-library Python program expands $F_0$, constructs its catalecticant directly by differentiating its integer coefficients, and compares it with $12DVV^T$. It also forms the fifteen selected tangent columns, computes their exact determinant, and verifies the full Jacobian rank. All calculations are over the integers or rational numbers; no floating-point or modular rank inference is used. The JSON output records monomial orders, matrices, selected columns, determinants, and ranks.

The symbolic argument above establishes the result without trusting the implementation. The code supplies a reproducible check of its arithmetic. Run:

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/30) for this material.

This contribution does not calculate generic ranks for all $(k,d,n)$, make claims about every ternary quartic, treat real typical rank, or settle the $d\ge2$ formulation. A universal assertion is disproved by this one allowed parameter triple. The appropriate catalogue correction is to preserve the higher-degree restriction, or to handle the classical $d=1$ cases separately with their known exceptions.

## References checked

- We-Solve, [TOP-1500002 research prompt](https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1500002.txt), checked 18 October 2026. Used for the exact $\mathbb C$-generic definition and the explicit $n,d\ge1$ quantifiers.
- Ralf Fröberg, Samuel Lundqvist, Alessandro Oneto and Boris Shapiro, *Algebraic Stories from One and from the Other Pockets*, Arnold Mathematical Journal 4 (2018), 137–160, DOI [10.1007/s40598-018-0088-z](https://doi.org/10.1007/s40598-018-0088-z). [Published PDF](https://amj.math.stonybrook.edu/pdf-Springer-final/018-0088.pdf), Section 1.1, Theorem 1.4 and Conjecture 1.6, pp.139–140. Used for the classical exception and the displayed formula's context.
- Samuel Lundqvist, Alessandro Oneto, Bruce Reznick and Boris Shapiro, *On generic and maximal k-ranks of binary forms*, [arXiv:1711.05014v1](https://arxiv.org/pdf/1711.05014), 14 November 2017, Conjecture 1.2, p.2. Used for the explicit original restriction $k,n,d\ge2$. No independent reading of the original 1995 Alexander–Hirschowitz proof is claimed or needed for the self-contained proof here.


## Reproducibility file: verify_quartic.py

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/30) for this material.


## Reproducibility file: certificates.json

```json
{
  "field": "rational numbers (also valid over any characteristic-zero field)",
  "coordinate_variables": [
    "x",
    "y",
    "z"
  ],
  "linear_forms": [
    {
      "name": "x",
      "coefficient_vector": [
        1,
        0,
        0
      ]
    },
    {
      "name": "y",
      "coefficient_vector": [
        0,
        1,
        0
      ]
    },
    {
      "name": "z",
      "coefficient_vector": [
        0,
        0,
        1
      ]
    },
    {
      "name": "x+y",
      "coefficient_vector": [
        1,
        1,
        0
      ]
    },
    {
      "name": "x+z",
      "coefficient_vector": [
        1,
        0,
        1
      ]
    },
    {
      "name": "y+z",
      "coefficient_vector": [
        0,
        1,
        1
      ]
    }
  ],
  "quartic": "x^4+y^4+z^4+(x+y)^4+(x+z)^4+(y+z)^4",
  "quartic_monomial_basis": [
    [
      4,
      0,
      0
    ],
    [
      3,
      1,
      0
    ],
    [
      3,
      0,
      1
    ],
    [
      1,
      3,
      0
    ],
    [
      0,
      4,
      0
    ],
    [
      0,
      3,
      1
    ],
    [
      1,
      0,
      3
    ],
    [
      0,
      1,
      3
    ],
    [
      0,
      0,
      4
    ],
    [
      2,
      2,
      0
    ],
    [
      2,
      0,
      2
    ],
    [
      0,
      2,
      2
    ],
    [
      2,
      1,
      1
    ],
    [
      1,
      2,
      1
    ],
    [
      1,
      1,
      2
    ]
  ],
  "quartic_coefficients_in_basis": [
    3,
    4,
    4,
    4,
    3,
    4,
    4,
    4,
    3,
    6,
    6,
    6,
    0,
    0,
    0
  ],
  "quadratic_monomial_basis_and_differential_operators": [
    [
      2,
      0,
      0
    ],
    [
      0,
      2,
      0
    ],
    [
      0,
      0,
      2
    ],
    [
      1,
      1,
      0
    ],
    [
      1,
      0,
      1
    ],
    [
      0,
      1,
      1
    ]
  ],
  "catalecticant_matrix": [
    [
      36,
      12,
      12,
      12,
      12,
      0
    ],
    [
      12,
      36,
      12,
      12,
      0,
      12
    ],
    [
      12,
      12,
      36,
      0,
      12,
      12
    ],
    [
      24,
      24,
      0,
      24,
      0,
      0
    ],
    [
      24,
      0,
      24,
      0,
      24,
      0
    ],
    [
      0,
      24,
      24,
      0,
      0,
      24
    ]
  ],
  "catalecticant_determinant": 23887872,
  "quadratic_evaluation_matrix": [
    [
      1,
      0,
      0,
      1,
      1,
      0
    ],
    [
      0,
      1,
      0,
      1,
      0,
      1
    ],
    [
      0,
      0,
      1,
      0,
      1,
      1
    ],
    [
      0,
      0,
      0,
      1,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1
    ]
  ],
  "quadratic_evaluation_determinant": 1,
  "catalecticant_factorization": "12 * diag(1,1,1,2,2,2) * E * transpose(E)",
  "selected_jacobian_coordinates_zero_based": [
    [
      0,
      0
    ],
    [
      0,
      1
    ],
    [
      0,
      2
    ],
    [
      1,
      0
    ],
    [
      1,
      1
    ],
    [
      1,
      2
    ],
    [
      2,
      0
    ],
    [
      2,
      1
    ],
    [
      2,
      2
    ],
    [
      3,
      0
    ],
    [
      4,
      0
    ],
    [
      5,
      1
    ],
    [
      3,
      2
    ],
    [
      4,
      1
    ],
    [
      5,
      0
    ]
  ],
  "tangent_column_names": [
    "(x)^3*x",
    "(x)^3*y",
    "(x)^3*z",
    "(y)^3*x",
    "(y)^3*y",
    "(y)^3*z",
    "(z)^3*x",
    "(z)^3*y",
    "(z)^3*z",
    "(x+y)^3*x",
    "(x+z)^3*x",
    "(y+z)^3*y",
    "(x+y)^3*z",
    "(x+z)^3*y",
    "(y+z)^3*x"
  ],
  "tangent_matrix_without_factor_4": [
    [
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0
    ],
    [
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      0,
      0,
      0,
      1,
      0
    ],
    [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      0,
      1,
      0,
      0
    ],
    [
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ],
    [
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      3,
      1,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      1,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      3,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      0,
      3
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      3
    ]
  ],
  "tangent_matrix_determinant": -1458,
  "lower_right_6_by_6_tangent_block": [
    [
      3,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      3,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      3,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      3,
      3,
      0
    ],
    [
      0,
      0,
      0,
      3,
      0,
      3
    ],
    [
      0,
      0,
      0,
      0,
      3,
      3
    ]
  ],
  "actual_jacobian_minor_matrix": [
    [
      4,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      4,
      4,
      0,
      0,
      0,
      0
    ],
    [
      0,
      4,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      0,
      0,
      0,
      4,
      0
    ],
    [
      0,
      0,
      4,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      0,
      4,
      0,
      0
    ],
    [
      0,
      0,
      0,
      4,
      0,
      0,
      0,
      0,
      0,
      4,
      0,
      0,
      0,
      0,
      4
    ],
    [
      0,
      0,
      0,
      0,
      4,
      0,
      0,
      0,
      0,
      0,
      0,
      4,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      4,
      0,
      0,
      0,
      0,
      0,
      12,
      4,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      4,
      0,
      0,
      0,
      4,
      0,
      0,
      0,
      4
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      4,
      0,
      0,
      0,
      4,
      0,
      4,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      4,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      0,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      0,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      0,
      0,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      12,
      0
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      0,
      12
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      12
    ]
  ],
  "actual_jacobian_minor_determinant": -1565515579392,
  "determinant_methods": [
    "fraction-free Bareiss elimination",
    "independent rational Gaussian elimination"
  ],
  "all_assertions_passed": true
}
```


## Verification and review

The main instance freshly ran the packaged program; all assertions passed. The exact determinants are 1 (quadratic evaluation), 23,887,872 (catalecticant), -1458 (unscaled tangent minor), and -1,565,515,579,392 (actual Jacobian minor). A separate LLM audit checked the proof, source quantifiers and final report and independently verified the 6-by-6 catalecticant determinant and 3-by-3 mixed tangent determinant. This is not human peer review.




## Attribution and references from the original submission

### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)

### LLM versions, settings and roles

OpenAI Codex (GPT-6) | version: unknown | reasoning: unknown | role: five instances participated in this turn: main instance checked the official statement and primary sources, developed and wrote the proof, reran the certificate, audited and submitted; next_scout identified the classical exception and checked source quantifiers; lattice_verify wrote and ran the exact polynomial/matrix certificate and proof notes; twoquad_audit independently checked the mathematics, source scope, determinants and final report; scout_new assessed other candidate problems, with no mathematical result from those alternatives used here. No other LLM was used for this contribution. Exact serving revision and reasoning configuration are unknown.

### People and roles

Gaven: prompted and authorized this work and public submission. No human mathematical contribution or human verification is claimed.

### References

We-Solve TOP-1500002 official prompt, https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1500002.txt. Checked exact C-generic definitions and explicit n,d>=1 quantifiers.
R. Fröberg, S. Lundqvist, A. Oneto and B. Shapiro, Algebraic Stories from One and from the Other Pockets, Arnold Mathematical Journal 4 (2018),137–160, DOI 10.1007/s40598-018-0088-z, https://amj.math.stonybrook.edu/pdf-Springer-final/018-0088.pdf. Checked Section 1.1, Theorem 1.4 (classical exceptions) and Conjecture 1.6 (displayed formula and its context).
S. Lundqvist, A. Oneto, B. Reznick and B. Shapiro, On generic and maximal k-ranks of binary forms, arXiv:1711.05014v1, https://arxiv.org/pdf/1711.05014, Conjecture 1.2, p.2. Checked the explicit k,n,d>=2 domain of the original higher-degree formulation.
The original 1995 Alexander–Hirschowitz proof was not independently read and is not needed for the self-contained certificate.

