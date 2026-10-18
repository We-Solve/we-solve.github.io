> Source: [original issue #27](https://github.com/We-Solve/research/issues/27). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


# Certified orders of the finite-field evaluation transform

**Problem:** TOP-1500022 / Math-3420 / AMR-014-0022.

**Claim:** Computational evidence, with structural lemmas proved for every prime.

## Exact scope

For a prime p, let V_p be the polynomials in F_p[x] of degree at most p−1, including zero, and define

$$
\psi_p(f)=\sum_{a\in\mathbb F_p}f(a)x^{\bar a},\qquad \bar a\in\{0,\ldots,p-1\}.
$$

Write N(p) for its order. This note supplies directly verifiable exact values of N(p) for every prime p≤31; proves a standard finite-linear-algebra reduction with the required characteristic factor; gives explicit vectors forcing 29 to divide N(29); and proves that the corresponding transform in any positive number of variables has exactly the same order N(p). It also records elementary inverse, Gram-matrix and determinant identities.

The published source [1, §4.3, p.154, Problem P] gives identity exponents 8,124,1368,32129475 for p=3,5,7,11, respectively, explicitly discussing minimality from p=5 onward. Our checks reproduce all four exponents, certify their minimality and extend that published numerical list. The catalogue imports a “partially solved” source status [2]; this contribution does not assume that status means the remaining cases are unknown. No novelty or priority claim is made. Its general matrix-order procedure is an application of established finite-field linear algebra; matrix-order algorithms were already developed in [3] and are implemented in [4].

This is not asserted to give a closed formula in p or settle the general research question. The code, certificate data and verification scope are part of the contribution.

## Matrix and interpolation conventions

Write f(x)=Σ_{j=0}^{p−1}c_j x^j with a column coefficient vector. Then the coefficient of x^a in ψ_p(f) is Σ_j a^j c_j, so the matrix is

$$
A_p=(a^j)_{0\le a,j\le p-1},\qquad 0^0=1.
$$

A polynomial of degree less than p vanishing at all p field elements is zero. This proves invertibility. The first row of A_p is (1,0,...,0), so its characteristic polynomial has a factor t−1.

There is also an explicit inverse. The polynomial L_a(x)=1−(x−a)^{p−1} takes value 1 at a and 0 at every other field element. Thus its coefficient vector is column a of A_p^{-1}. Using binomial(p−1,j)≡(−1)^j mod p gives

$$
(A_p^{-1})_{0,a}=\delta_{a,0},\qquad
(A_p^{-1})_{j,a}=-a^{p-1-j}\quad(1\le j\le p-1).
$$

These formulas include p=2 and use 0^0=1 in the final row.

## Order reduction with the possible p-factor

Factor the characteristic polynomial into distinct monic irreducibles:

$$
\chi_p(t)=\prod_i h_i(t)^{e_i}.
$$

Invertibility excludes h_i=t. Let o_i be the multiplicative order of t in the finite field F_p[t]/(h_i), and put S=lcm_i o_i. Each o_i divides p^{deg(h_i)}−1 and can be computed by integer factorization and modular polynomial powers.

**Proposition.** For every prime p,

$$
N(p)=\begin{cases}
S,&A_p^S=I,\\
pS,&A_p^S\ne I.
\end{cases}
$$

**Proof.** Over an algebraic closure, the eigenvalues have precisely the orders represented by the o_i. Thus S divides N(p), and p does not divide S. All eigenvalues of A_p^S are 1. The matrix U=A_p^S−I is therefore nilpotent; since its size is p, Cayley–Hamilton gives U^p=0. In characteristic p,

$$
(A_p^S)^p=(I+U)^p=I+U^p=I.
$$

Hence S divides N(p) and N(p) divides pS, leaving the two stated possibilities. The identity test distinguishes them. ∎

In particular the p-part of N(p) is always 1 or p. Repeated factors in the characteristic polynomial can arise without a nontrivial Jordan block, so they alone do not determine which branch occurs. The proof uses the specific dimension p; larger matrices over F_p can require higher powers of p.

This is a finite exact procedure for an individual prime. It retains polynomial and integer factorization as computational steps and is not claimed as a new general matrix-order algorithm.

## Exact table and minimality certificates

| p | N(p) |
|---:|---:|
| 2 | 2 |
| 3 | 8 |
| 5 | 124 |
| 7 | 1368 |
| 11 | 32129475 |
| 13 | 517735224944 |
| 17 | 97123470850224 |
| 19 | 3235839149340 |
| 23 | 847903078473591849148440 |
| 29 | 1253339304585601201485463784571399120 |
| 31 | 813918208968164160 |

The table is certified independently of the characteristic factorization. For each candidate N the data give its complete prime factorization and a matrix entry witnessing A_p^{N/q}≠I for every distinct prime q dividing N. The verifier checks

$$
A_p^N=I,\qquad A_p^{N/q}\ne I\quad\text{for every prime }q\mid N.
$$

These conditions prove exactness: the actual order d divides N; if d<N, a prime q dividing N/d would give d|N/q, contradicting the recorded nonidentity power.

`check_certificates.py` reconstructs A_p from the definition, proves primality of all recorded integer factors by trial division, multiplies their powers, checks every entry of A_p^N, and verifies every differing-entry witness. Every arithmetic operation deciding a certificate is exact. The result is 11 full identity checks involving 3,358 entries, 66 nonidentity checks, and the Jordan identities below, all passing. Indices in the JSON are zero-based; polynomial coefficient lists are in increasing degree order.

## A nontrivial Jordan block at p=29

The independently verified characteristic factorization is

$$
\chi_{29}(t)=(t-1)^2h_2(t)h_{12}(t)h_{13}(t).
$$

The irreducible factors h_2,h_12,h_13 have increasing-degree coefficient lists

```text
h2  = [23,10,1]
h12 = [2,3,27,16,4,26,12,11,18,20,7,17,1]
h13 = [28,17,26,4,12,16,21,18,28,22,4,14,11,1]
```

Their exact root orders are 105, 117938261068489680 and 366451025462807221. Therefore

$$
S=43218596709848317292602199467979280,\qquad N(29)=29S.
$$

The necessity of the factor 29 has a short certificate that does not depend on this factorization. With coordinates indexed 0 through 28, take

```text
w = [26,9,0,5,16,27,28,12,20,17,10,24,23,25,2,4,6,6,7,5,22,5,1,23,23,11,9,1,0]
v = [0,10,7,22,8,10,8,9,3,19,7,8,20,9,14,28,28,22,27,6,16,21,6,5,18,7,22,8,19]
```

Direct multiplication modulo 29 gives (A_29−I)w=v≠0 and (A_29−I)v=0. Induction gives A_29^k w=w+kv. If A_29^k=I, then kv=0; since v≠0, 29 divides k. Both matrix-vector multiplication and a separate Horner evaluation check these identities.

Among the primes through 31, the order is divisible by the characteristic exactly at p=2 and p=29. This also identifies 29 as the smallest odd prime with that property, because every smaller odd prime is included in the certified table. The example shows why the eigenvalue-order least common multiple needs the identity test for the p-part.

## Adding variables preserves the order

For n≥1 let V_{p,n} be the polynomials in n variables of degree at most p−1 in each variable, and define

$$
\psi_{p,n}(f)=\sum_{a\in\mathbb F_p^n}f(a)x_1^{\bar a_1}\cdots x_n^{\bar a_n}.
$$

Under compatible lexicographic indexing its matrix is A_p^{⊗n}: each entry is the product of the corresponding one-variable evaluations.

**Proposition.** For every prime p and positive integer n,

$$
\operatorname{ord}(\psi_{p,n})=N(p).
$$

**Proof.** If A_p^N=I, then (A_p^{⊗n})^N=(A_p^N)^{⊗n}=I, giving one divisibility. For the other, the first-row calculation implies det(A_p−I)=0, so there is a nonzero u∈F_p^p satisfying A_pu=u. For n≥2 the map

$$
T:z\longmapsto u^{\otimes(n-1)}\otimes z
$$

is injective: choose a field-linear functional ℓ with ℓ(u)=1 and apply ℓ^{⊗(n−1)}⊗Id. It also satisfies A_p^{⊗n}T=TA_p. Thus any identity power of A_p^{⊗n} restricts on the image of T to the same identity power of A_p. This forces N(p) to divide the tensor order. The case n=1 is immediate. ∎

Consequently every numerical table entry also gives the exact order in every positive number of variables. The one-variable p-part bound above likewise applies in every dimension, by this equality.

## Gram and determinant constraints

Let B=(a^j)_{1≤a,j≤p−1}, let R_{a,b}=1 exactly when ab=1 in F_p, and let J_{j,k}=1 exactly when j+k≡0 mod(p−1), with all other entries zero. The label p−1 represents zero in that congruence. Then

$$
BB^{\mathsf T}=-R,\qquad B^{\mathsf T}B=-J.
$$

For the first identity, sum (ab)^j for j=1,...,p−1: it is −1 when ab=1 and zero otherwise. For the second, sum a^{j+k} over F_p^*: the power sum is −1 exactly when p−1 divides j+k, and zero otherwise. These arguments also cover p=2.

For odd p, det(A_p)=det(B). The inversion permutation on F_p^* has two fixed points, 1 and −1, and (p−3)/2 transpositions. Taking determinants in BB^T=−R, with B of even size, gives

$$
\det(A_p)^2=(-1)^{(p-3)/2}.
$$

When p≡1 mod4, this square is −1, so det(A_p) has order 4 and **4 divides N(p)**. Both inverse products, both Gram products and this determinant consequence were checked at every prime in the table; their proofs apply to every prime in the stated ranges.

## Independent verification and reproduction

Three dependency-free checkers accompany the certificate data:

1. `check_certificates.py` checks complete integer factorizations, the full identity powers, all prime-removal minimality witnesses and the p=29 generalized eigenvectors. Its matrix multiplication and recursive powering are organized independently of the generating program.
2. `audit_characteristic.py` independently verifies all 42 recorded irreducible factors and their exact root orders. For each prime it multiplies the proposed factors to a monic degree-p polynomial P, then compares P(t) with det(tI−A_p) at all p field elements using modular elimination. Both polynomials are monic of degree p; their difference has degree≤p−1, so these p equalities prove polynomial equality. It then applies the finite-field irreducibility criterion stated below and verifies the root orders by modular polynomial powers. It also checks the p=29 vectors by Horner evaluation.
3. `audit_structural.py` checks the two inverse products, the two Gram identities, and the determinant consequences for all 11 primes.

For a monic degree-d polynomial h, the irreducibility check is t^{p^d}≡t mod h together with gcd(h,t^{p^{d/r}}−t)=1 for every prime r dividing d. To see sufficiency, the first condition says h is squarefree with every irreducible factor degree dividing d, because t^{p^d}−t is the product of all monic irreducibles whose degrees divide d. Any proper divisor e of d divides d/r for some prime divisor r of d, so the gcd conditions rule out every proper-degree factor. This justifies the checker’s criterion without relying on symbolic factorization software.

Run from any directory with Python 3.9 or later:

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/27) for this material.

The scripts locate the JSON inputs relative to their own files and write verification summaries next to themselves. All three passed. The optional `generate_orders.py` requires SymPy and regenerates the candidate factorizations, orders and entry witnesses. The certificates can be checked without that dependency, and correctness of the final results does not rely on trusting its symbolic factorization.

The main instance and a separate audit instance ran the matrix certificate checks. The audit instance wrote and ran the separate characteristic and structural checkers and reviewed all proofs. This is LLM review, with no human mathematical review, formal proof-assistant verification or external editorial acceptance asserted.

## Limits and attribution

The original one-variable definition and question are unchanged. The n-variable theorem is an explicitly stated extension. The finite table proves no numerical value beyond p=31, and the structural propositions leave the characteristic polynomial and the least common multiple S dependent on p. They give no unproved asymptotic pattern or complexity guarantee. The general matrix-order method and elementary interpolation identities are not claimed original.

Searches of the transform, paper title, author names, published example orders and Vandermonde matrix orders did not locate a later specific resolution. The external UnsolvedMath research notes could not be retrieved; their contents and any priority implications remain unverified. Absence from a search is not evidence of novelty. The current We-Solve page and its prompt listed zero earlier contributions at the pre-submission check, and the research repository search returned no issue for this handle.

## Checked references

[1] R. Fröberg, S. Lundqvist, A. Oneto and B. Shapiro, *Algebraic Stories from One and from the Other Pockets*, Arnold Mathematical Journal 4 (2018), 137–160, §4.3, pp.153–154, published Problem P. https://doi.org/10.1007/s40598-018-0088-z ; checked published PDF https://amj.math.stonybrook.edu/pdf-Springer-final/018-0088.pdf . Used for the transform, question and four reported orders. The earlier arXiv version, https://arxiv.org/abs/1801.01692 , numbers this question Problem O.

[2] We-Solve, TOP-1500022 / Math-3420, https://we-solve.github.io/problems/algebraic-stories-polynomial-generation-21ee4ae9/ . Checked statement, current contribution count, prompt and source-status metadata in the official website repository: https://github.com/We-Solve/we-solve.github.io/tree/main/problems/algebraic-stories-polynomial-generation-21ee4ae9 . Used to identify the task and distinguish the imported source status from a mathematical claim.

[3] F. Celler and C. R. Leedham-Green, *Calculating the Order of an Invertible Matrix*, in *Groups and Computation II*, DIMACS Series 28 (1997), pp.55–60. Primary volume contents checked at https://archive.dimacs.rutgers.edu/archive/Volumes/Vol28.html . Used for bibliographic attribution and historical context; the chapter’s full text was not retrieved or used as a proof source.

[4] Magma Handbook, *Orders of Invertible Matrices*, https://docs.magma-maths.org/MatricesLinearAlgebra/Matrices/order.html . Checked documentation of the established finite-field order routine and its attribution to Celler–Leedham-Green. No Magma computation was used in this contribution.

Original report and certificate data: CC BY 4.0. Original software: Apache-2.0. Third-party papers are credited and are not redistributed in the bundle.


## Complete executable source

### check_certificates.py

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/27) for this material.

### audit_characteristic.py

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/27) for this material.

### audit_structural.py

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/27) for this material.

### generate_orders.py

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/27) for this material.

## Complete certificate data

### orders_certificates.json

```json
[
  {
    "p": 2,
    "order": 2,
    "orderfactors": {
      "2": 1
    },
    "terms": [
      {
        "h": [
          1,
          1
        ],
        "e": 2,
        "degree": 1,
        "rootorder": 1
      }
    ],
    "properpowers": {
      "2": {
        "row": 1,
        "column": 0,
        "entry": 1,
        "expected": 0
      }
    }
  },
  {
    "p": 3,
    "order": 8,
    "orderfactors": {
      "2": 3
    },
    "terms": [
      {
        "h": [
          2,
          1
        ],
        "e": 1,
        "degree": 1,
        "rootorder": 1
      },
      {
        "h": [
          2,
          1,
          1
        ],
        "e": 1,
        "degree": 2,
        "rootorder": 8
      }
    ],
    "properpowers": {
      "2": {
        "row": 1,
        "column": 0,
        "entry": 2,
        "expected": 0
      }
    }
  },
  {
    "p": 5,
    "order": 124,
    "orderfactors": {
      "2": 2,
      "31": 1
    },
    "terms": [
      {
        "h": [
          1,
          1
        ],
        "e": 1,
        "degree": 1,
        "rootorder": 2
      },
      {
        "h": [
          4,
          1
        ],
        "e": 1,
        "degree": 1,
        "rootorder": 1
      },
      {
        "h": [
          3,
          4,
          1,
          1
        ],
        "e": 1,
        "degree": 3,
        "rootorder": 124
      }
    ],
    "properpowers": {
      "2": {
        "row": 1,
        "column": 0,
        "entry": 4,
        "expected": 0
      },
      "31": {
        "row": 1,
        "column": 0,
        "entry": 4,
        "expected": 0
      }
    }
  },
  {
    "p": 7,
    "order": 1368,
    "orderfactors": {
      "2": 3,
      "3": 2,
      "19": 1
    },
    "terms": [
      {
        "h": [
          5,
          1
        ],
        "e": 1,
        "degree": 1,
        "rootorder": 3
      },
      {
        "h": [
          6,
          1
        ],
        "e": 1,
        "degree": 1,
        "rootorder": 1
      },
      {
        "h": [
          1,
          3,
          1
        ],
        "e": 1,
        "degree": 2,
        "rootorder": 8
      },
      {
        "h": [
          4,
          2,
          1,
          1
        ],
        "e": 1,
        "degree": 3,
        "rootorder": 342
      }
    ],
    "properpowers": {
      "2": {
        "row": 1,
        "column": 0,
        "entry": 2,
        "expected": 0
      },
      "3": {
        "row": 1,
        "column": 0,
        "entry": 4,
        "expected": 0
      },
      "19": {
        "row": 1,
        "column": 0,
        "entry": 5,
        "expected": 0
      }
    }
  },
  {
    "p": 11,
    "order": 32129475,
    "orderfactors": {
      "3": 1,
      "5": 2,
      "7": 1,
      "19": 1,
      "3221": 1
    },
    "terms": [
      {
        "h": [
          10,
          1
        ],
        "e": 1,
        "degree": 1,
        "rootorder": 1
      },
      {
        "h": [
          1,
          1,
          1
        ],
        "e": 1,
        "degree": 2,
        "rootorder": 3
      },
      {
        "h": [
          7,
          1,
          0,
          1
        ],
        "e": 1,
        "degree": 3,
        "rootorder": 665
      },
      {
        "h": [
          8,
          4,
          0,
          0,
          7,
          1
        ],
        "e": 1,
        "degree": 5,
        "rootorder": 80525
      }
    ],
    "properpowers": {
      "3": {
        "row": 1,
        "column": 0,
        "entry": 5,
        "expected": 0
      },
      "5": {
        "row": 1,
        "column": 0,
        "entry": 10,
        "expected": 0
      },
      "7": {
        "row": 1,
        "column": 0,
        "entry": 3,
        "expected": 0
      },
      "19": {
        "row": 1,
        "column": 0,
        "entry": 7,
        "expected": 0
      },
      "3221": {
        "row": 1,
        "column": 1,
        "entry": 5,
        "expected": 1
      }
    }
  },
  {
    "p": 13,
    "order": 517735224944,
    "orderfactors": {
      "2": 4,
      "7": 1,
      "17": 1,
      "61": 1,
      "157": 1,
      "28393": 1
    },
    "terms": [
      {
        "h": [
          12,
          1
        ],
        "e": 1,
        "degree": 1,
        "rootorder": 1
      },
      {
        "h": [
          8,
          6,
          11,
          8,
          8,
          8,
          4,
          0,
          7,
          9,
          4,
          2,
          1
        ],
        "e": 1,
        "degree": 12,
        "rootorder": 517735224944
      }
    ],
    "properpowers": {
      "2": {
        "row": 1,
        "column": 0,
        "entry": 4,
        "expected": 0
      },
      "7": {
        "row": 1,
        "column": 0,
        "entry": 9,
        "expected": 0
      },
      "17": {
        "row": 1,
        "column": 0,
        "entry": 1,
        "expected": 0
      },
      "61": {
        "row": 1,
        "column": 0,
        "entry": 1,
        "expected": 0
      },
      "157": {
        "row": 1,
        "column": 0,
        "entry": 1,
        "expected": 0
      },
      "28393": {
        "row": 1,
        "column": 0,
        "entry": 3,
        "expected": 0
      }
    }
  },
  {
    "p": 17,
    "order": 97123470850224,
    "orderfactors": {
      "2": 4,
      "3": 2,
      "7": 1,
      "13": 1,
      "19": 1,
      "307": 1,
      "1270657": 1
    },
    "terms": [
      {
        "h": [
          1,
          1
        ],
        "e": 1,
        "degree": 1,
        "rootorder": 2
      },
      {
        "h": [
          16,
          1
        ],
        "e": 1,
        "degree": 1,
        "rootorder": 1
      },
      {
        "h": [
          9,
          1,
          2,
          1,
          3,
          4,
          1
        ],
        "e": 1,
        "degree": 6,
        "rootorder": 4022928
      },
      {
        "h": [
          9,
          11,
          11,
          4,
          9,
          3,
          13,
          6,
          12,
          1
        ],
        "e": 1,
        "degree": 9,
        "rootorder": 59293938248
      }
    ],
    "properpowers": {
      "2": {
        "row": 1,
        "column": 0,
        "entry": 12,
        "expected": 0
      },
      "3": {
        "row": 1,
        "column": 0,
        "entry": 9,
        "expected": 0
      },
      "7": {
        "row": 1,
        "column": 0,
        "entry": 9,
        "expected": 0
      },
      "13": {
        "row": 1,
        "column": 0,
        "entry": 14,
        "expected": 0
      },
      "19": {
        "row": 1,
        "column": 0,
        "entry": 1,
        "expected": 0
      },
      "307": {
        "row": 1,
        "column": 0,
        "entry": 7,
        "expected": 0
      },
      "1270657": {
        "row": 1,
        "column": 0,
        "entry": 1,
        "expected": 0
      }
    }
  },
  {
    "p": 19,
    "order": 3235839149340,
    "orderfactors": {
      "2": 2,
      "3": 3,
      "5": 1,
      "7": 3,
      "127": 1,
      "151": 1,
      "911": 1
    },
    "terms": [
      {
        "h": [
          14,
          1
        ],
        "e": 1,
        "degree": 1,
        "rootorder": 9
      },
      {
        "h": [
          18,
          1
        ],
        "e": 1,
        "degree": 1,
        "rootorder": 1
      },
      {
        "h": [
          4,
          16,
          2,
          1
        ],
        "e": 1,
        "degree": 3,
        "rootorder": 6858
      },
      {
        "h": [
          1,
          18,
          17,
          1
        ],
        "e": 1,
        "degree": 3,
        "rootorder": 254
      },
      {
        "h": [
          10,
          5,
          9,
          10,
          5,
          1
        ],
        "e": 1,
        "degree": 5,
        "rootorder": 1238049
      },
      {
        "h": [
          17,
          17,
          9,
          2,
          18,
          0,
          1
        ],
        "e": 1,
        "degree": 6,
        "rootorder": 23522940
      }
    ],
    "properpowers": {
      "2": {
        "row": 1,
        "column": 0,
        "entry": 14,
        "expected": 0
      },
      "3": {
        "row": 1,
        "column": 0,
        "entry": 11,
        "expected": 0
      },
      "5": {
        "row": 1,
        "column": 0,
        "entry": 6,
        "expected": 0
      },
      "7": {
        "row": 1,
        "column": 0,
        "entry": 8,
        "expected": 0
      },
      "127": {
        "row": 1,
        "column": 0,
        "entry": 16,
        "expected": 0
      },
      "151": {
        "row": 1,
        "column": 0,
        "entry": 15,
        "expected": 0
      },
      "911": {
        "row": 1,
        "column": 0,
        "entry": 8,
        "expected": 0
      }
    }
  },
  {
    "p": 23,
    "order": 847903078473591849148440,
    "orderfactors": {
      "2": 3,
      "3": 2,
      "5": 1,
      "7": 1,
      "11": 1,
      "13": 2,
      "29": 1,
      "37": 1,
      "53": 1,
      "79": 1,
      "7549": 1,
      "5336717": 1
    },
    "terms": [
      {
        "h": [
          22,
          1
        ],
        "e": 1,
        "degree": 1,
        "rootorder": 1
      },
      {
        "h": [
          8,
          3,
          22,
          1
        ],
        "e": 1,
        "degree": 3,
        "rootorder": 12166
      },
      {
        "h": [
          9,
          14,
          2,
          1,
          7,
          19,
          18,
          1
        ],
        "e": 1,
        "degree": 7,
        "rootorder": 3404825446
      },
      {
        "h": [
          8,
          10,
          12,
          2,
          12,
          19,
          17,
          20,
          4,
          6,
          9,
          19,
          1
        ],
        "e": 1,
        "degree": 12,
        "rootorder": 5478656108005080
      }
    ],
    "properpowers": {
      "2": {
        "row": 1,
        "column": 0,
        "entry": 12,
        "expected": 0
      },
      "3": {
        "row": 1,
        "column": 0,
        "entry": 17,
        "expected": 0
      },
      "5": {
        "row": 1,
        "column": 0,
        "entry": 21,
        "expected": 0
      },
      "7": {
        "row": 1,
        "column": 0,
        "entry": 16,
        "expected": 0
      },
      "11": {
        "row": 1,
        "column": 1,
        "entry": 22,
        "expected": 1
      },
      "13": {
        "row": 1,
        "column": 0,
        "entry": 13,
        "expected": 0
      },
      "29": {
        "row": 1,
        "column": 0,
        "entry": 4,
        "expected": 0
      },
      "37": {
        "row": 1,
        "column": 0,
        "entry": 2,
        "expected": 0
      },
      "53": {
        "row": 1,
        "column": 0,
        "entry": 11,
        "expected": 0
      },
      "79": {
        "row": 1,
        "column": 0,
        "entry": 3,
        "expected": 0
      },
      "7549": {
        "row": 1,
        "column": 1,
        "entry": 3,
        "expected": 1
      },
      "5336717": {
        "row": 1,
        "column": 0,
        "entry": 5,
        "expected": 0
      }
    }
  },
  {
    "p": 29,
    "order": 1253339304585601201485463784571399120,
    "orderfactors": {
      "2": 4,
      "3": 1,
      "5": 1,
      "7": 1,
      "13": 1,
      "29": 1,
      "37": 1,
      "61": 1,
      "67": 1,
      "271": 1,
      "313": 1,
      "421": 1,
      "521": 1,
      "148123": 1,
      "4748492087": 1
    },
    "terms": [
      {
        "h": [
          28,
          1
        ],
        "e": 2,
        "degree": 1,
        "rootorder": 1
      },
      {
        "h": [
          23,
          10,
          1
        ],
        "e": 1,
        "degree": 2,
        "rootorder": 105
      },
      {
        "h": [
          2,
          3,
          27,
          16,
          4,
          26,
          12,
          11,
          18,
          20,
          7,
          17,
          1
        ],
        "e": 1,
        "degree": 12,
        "rootorder": 117938261068489680
      },
      {
        "h": [
          28,
          17,
          26,
          4,
          12,
          16,
          21,
          18,
          28,
          22,
          4,
          14,
          11,
          1
        ],
        "e": 1,
        "degree": 13,
        "rootorder": 366451025462807221
      }
    ],
    "properpowers": {
      "2": {
        "row": 1,
        "column": 1,
        "entry": 28,
        "expected": 1
      },
      "3": {
        "row": 1,
        "column": 0,
        "entry": 5,
        "expected": 0
      },
      "5": {
        "row": 1,
        "column": 0,
        "entry": 8,
        "expected": 0
      },
      "7": {
        "row": 1,
        "column": 0,
        "entry": 20,
        "expected": 0
      },
      "13": {
        "row": 1,
        "column": 0,
        "entry": 16,
        "expected": 0
      },
      "29": {
        "row": 1,
        "column": 0,
        "entry": 14,
        "expected": 0
      },
      "37": {
        "row": 1,
        "column": 0,
        "entry": 27,
        "expected": 0
      },
      "61": {
        "row": 1,
        "column": 0,
        "entry": 27,
        "expected": 0
      },
      "67": {
        "row": 1,
        "column": 0,
        "entry": 16,
        "expected": 0
      },
      "271": {
        "row": 1,
        "column": 0,
        "entry": 22,
        "expected": 0
      },
      "313": {
        "row": 1,
        "column": 0,
        "entry": 8,
        "expected": 0
      },
      "421": {
        "row": 1,
        "column": 0,
        "entry": 8,
        "expected": 0
      },
      "521": {
        "row": 1,
        "column": 0,
        "entry": 22,
        "expected": 0
      },
      "148123": {
        "row": 1,
        "column": 0,
        "entry": 6,
        "expected": 0
      },
      "4748492087": {
        "row": 1,
        "column": 0,
        "entry": 23,
        "expected": 0
      }
    }
  },
  {
    "p": 31,
    "order": 813918208968164160,
    "orderfactors": {
      "2": 6,
      "3": 2,
      "5": 1,
      "7": 2,
      "19": 1,
      "331": 1,
      "917087137": 1
    },
    "terms": [
      {
        "h": [
          30,
          1
        ],
        "e": 1,
        "degree": 1,
        "rootorder": 1
      },
      {
        "h": [
          9,
          30,
          1
        ],
        "e": 1,
        "degree": 2,
        "rootorder": 480
      },
      {
        "h": [
          4,
          0,
          3,
          1
        ],
        "e": 1,
        "degree": 3,
        "rootorder": 3310
      },
      {
        "h": [
          24,
          11,
          11,
          1
        ],
        "e": 1,
        "degree": 3,
        "rootorder": 14895
      },
      {
        "h": [
          22,
          23,
          14,
          1
        ],
        "e": 1,
        "degree": 3,
        "rootorder": 14895
      },
      {
        "h": [
          12,
          11,
          0,
          18,
          9,
          9,
          1
        ],
        "e": 1,
        "degree": 6,
        "rootorder": 887503680
      },
      {
        "h": [
          28,
          10,
          27,
          22,
          1,
          13,
          1
        ],
        "e": 1,
        "degree": 6,
        "rootorder": 238320
      },
      {
        "h": [
          26,
          2,
          25,
          6,
          8,
          23,
          26,
          1
        ],
        "e": 1,
        "degree": 7,
        "rootorder": 2751261411
      }
    ],
    "properpowers": {
      "2": {
        "row": 1,
        "column": 0,
        "entry": 2,
        "expected": 0
      },
      "3": {
        "row": 1,
        "column": 0,
        "entry": 25,
        "expected": 0
      },
      "5": {
        "row": 1,
        "column": 0,
        "entry": 26,
        "expected": 0
      },
      "7": {
        "row": 1,
        "column": 0,
        "entry": 2,
        "expected": 0
      },
      "19": {
        "row": 1,
        "column": 0,
        "entry": 13,
        "expected": 0
      },
      "331": {
        "row": 1,
        "column": 0,
        "entry": 27,
        "expected": 0
      },
      "917087137": {
        "row": 1,
        "column": 0,
        "entry": 15,
        "expected": 0
      }
    }
  }
]
```

### jordan29_witness.json

```json
{
  "p": 29,
  "convention": "Coefficient vectors indexed 0 through 28; V[i][j]=i^j modulo 29, with 0^0=1.",
  "w": [26,9,0,5,16,27,28,12,20,17,10,24,23,25,2,4,6,6,7,5,22,5,1,23,23,11,9,1,0],
  "v": [0,10,7,22,8,10,8,9,3,19,7,8,20,9,14,28,28,22,27,6,16,21,6,5,18,7,22,8,19],
  "identities": ["(V-I)w=v", "(V-I)v=0", "v!=0"]
}
```

### verification_results.json

```json
{
  "verified_primes": 11,
  "identity_power_checks": 11,
  "minimality_power_checks": 66,
  "identity_entry_comparisons": 3358,
  "jordan29_generalized_eigenvector": true,
  "all_passed": true
}
```

### audit_characteristic_results.json

```json
{
  "characteristic_factor_audit": [
    {
      "p": 2,
      "characteristic_polynomial_verified": true,
      "irreducible_factors_verified": 1,
      "root_orders_verified": [
        1
      ],
      "semisimple_order": 1,
      "order_multiplier": 2
    },
    {
      "p": 3,
      "characteristic_polynomial_verified": true,
      "irreducible_factors_verified": 2,
      "root_orders_verified": [
        1,
        8
      ],
      "semisimple_order": 8,
      "order_multiplier": 1
    },
    {
      "p": 5,
      "characteristic_polynomial_verified": true,
      "irreducible_factors_verified": 3,
      "root_orders_verified": [
        2,
        1,
        124
      ],
      "semisimple_order": 124,
      "order_multiplier": 1
    },
    {
      "p": 7,
      "characteristic_polynomial_verified": true,
      "irreducible_factors_verified": 4,
      "root_orders_verified": [
        3,
        1,
        8,
        342
      ],
      "semisimple_order": 1368,
      "order_multiplier": 1
    },
    {
      "p": 11,
      "characteristic_polynomial_verified": true,
      "irreducible_factors_verified": 4,
      "root_orders_verified": [
        1,
        3,
        665,
        80525
      ],
      "semisimple_order": 32129475,
      "order_multiplier": 1
    },
    {
      "p": 13,
      "characteristic_polynomial_verified": true,
      "irreducible_factors_verified": 2,
      "root_orders_verified": [
        1,
        517735224944
      ],
      "semisimple_order": 517735224944,
      "order_multiplier": 1
    },
    {
      "p": 17,
      "characteristic_polynomial_verified": true,
      "irreducible_factors_verified": 4,
      "root_orders_verified": [
        2,
        1,
        4022928,
        59293938248
      ],
      "semisimple_order": 97123470850224,
      "order_multiplier": 1
    },
    {
      "p": 19,
      "characteristic_polynomial_verified": true,
      "irreducible_factors_verified": 6,
      "root_orders_verified": [
        9,
        1,
        6858,
        254,
        1238049,
        23522940
      ],
      "semisimple_order": 3235839149340,
      "order_multiplier": 1
    },
    {
      "p": 23,
      "characteristic_polynomial_verified": true,
      "irreducible_factors_verified": 4,
      "root_orders_verified": [
        1,
        12166,
        3404825446,
        5478656108005080
      ],
      "semisimple_order": 847903078473591849148440,
      "order_multiplier": 1
    },
    {
      "p": 29,
      "characteristic_polynomial_verified": true,
      "irreducible_factors_verified": 4,
      "root_orders_verified": [
        1,
        105,
        117938261068489680,
        366451025462807221
      ],
      "semisimple_order": 43218596709848317292602199467979280,
      "order_multiplier": 29
    },
    {
      "p": 31,
      "characteristic_polynomial_verified": true,
      "irreducible_factors_verified": 8,
      "root_orders_verified": [
        1,
        480,
        3310,
        14895,
        14895,
        887503680,
        238320,
        2751261411
      ],
      "semisimple_order": 813918208968164160,
      "order_multiplier": 1
    }
  ],
  "jordan29_checked_by_horner": true,
  "all_passed": true
}
```

### audit_structural_results.json

```json
{
  "results": [
    {
      "p": 2,
      "inverse_both_sides": true,
      "gram_both_sides": true,
      "determinant": 1,
      "determinant_square_checked": false
    },
    {
      "p": 3,
      "inverse_both_sides": true,
      "gram_both_sides": true,
      "determinant": 2,
      "determinant_square_checked": true
    },
    {
      "p": 5,
      "inverse_both_sides": true,
      "gram_both_sides": true,
      "determinant": 3,
      "determinant_square_checked": true
    },
    {
      "p": 7,
      "inverse_both_sides": true,
      "gram_both_sides": true,
      "determinant": 6,
      "determinant_square_checked": true
    },
    {
      "p": 11,
      "inverse_both_sides": true,
      "gram_both_sides": true,
      "determinant": 1,
      "determinant_square_checked": true
    },
    {
      "p": 13,
      "inverse_both_sides": true,
      "gram_both_sides": true,
      "determinant": 8,
      "determinant_square_checked": true
    },
    {
      "p": 17,
      "inverse_both_sides": true,
      "gram_both_sides": true,
      "determinant": 13,
      "determinant_square_checked": true
    },
    {
      "p": 19,
      "inverse_both_sides": true,
      "gram_both_sides": true,
      "determinant": 1,
      "determinant_square_checked": true
    },
    {
      "p": 23,
      "inverse_both_sides": true,
      "gram_both_sides": true,
      "determinant": 1,
      "determinant_square_checked": true
    },
    {
      "p": 29,
      "inverse_both_sides": true,
      "gram_both_sides": true,
      "determinant": 17,
      "determinant_square_checked": true
    },
    {
      "p": 31,
      "inverse_both_sides": true,
      "gram_both_sides": true,
      "determinant": 1,
      "determinant_square_checked": true
    }
  ],
  "all_passed": true
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

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected and checked the catalogue task and primary sources, developed an independent characteristic-polynomial verification argument, reviewed proofs and certificates, wrote the report and assembled and submitted the contribution.
OpenAI Codex (GPT-6), research instance | version: unknown | reasoning: unknown | role: generated the exact orders and generalized eigenvectors, wrote the independent matrix-order checker, developed structural lemmas and source research, and checked structural identities.
OpenAI Codex (GPT-6), audit instance | version: unknown | reasoning: unknown | role: independently reviewed all proofs and the final report, reran matrix certificates, and wrote and ran separate characteristic-factor, root-order and structural checkers.

### People and roles

Gaven (@gavenren): prompted the work and authorized public submission. No human mathematical review was performed. Authors of credited prior literature were not session collaborators.

### References

R. Fröberg, S. Lundqvist, A. Oneto and B. Shapiro, Algebraic Stories from One and from the Other Pockets, Arnold Mathematical Journal 4 (2018), 137–160, §4.3, pp.153–154, published Problem P. DOI https://doi.org/10.1007/s40598-018-0088-z ; checked published PDF https://amj.math.stonybrook.edu/pdf-Springer-final/018-0088.pdf . Used: transform, question and four published exponents. Earlier arXiv version https://arxiv.org/abs/1801.01692 labels the question Problem O.
We-Solve, TOP-1500022 / Math-3420, https://we-solve.github.io/problems/algebraic-stories-polynomial-generation-21ee4ae9/ . Checked statement, prompt, contribution count and metadata in https://github.com/We-Solve/we-solve.github.io/tree/main/problems/algebraic-stories-polynomial-generation-21ee4ae9 . Used: current task and scope.
F. Celler and C. R. Leedham-Green, Calculating the Order of an Invertible Matrix, Groups and Computation II, DIMACS 28 (1997), 55–60. Primary contents checked: https://archive.dimacs.rutgers.edu/archive/Volumes/Vol28.html . Used: bibliographic attribution and historical context; chapter full text not retrieved or used as a proof source.
Magma Handbook, Orders of Invertible Matrices, https://docs.magma-maths.org/MatricesLinearAlgebra/Matrices/order.html . Used: checked documentation of established finite-field order computation and its Celler–Leedham-Green attribution. No Magma computation was used.

