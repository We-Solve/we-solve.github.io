> Source: [original issue #29](https://github.com/We-Solve/research/issues/29). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


# TOP-1500024: the commutative family and the even exterior family

**Claim type:** Literature report, with independent exposition and reproducible checks.  
**Checked:** 18 October 2026.  
**Problem:** [Algebraic Stories — Exterior algebras](https://we-solve.github.io/problems/algebraic-stories-exterior-algebras-2287020b/) (Math-3422; AMR-014-0024).

## 1. Exact scope and attribution

Work over $\mathbb C$, with the standard grading and the generic choices in the catalogue. Write

$$

 A_n=\mathbb C[x_1,\ldots,x_n]/(x_1^2,\ldots,x_n^2,\ell_1^2,\ell_2^2),
 \qquad B_n=\bigwedge\mathbb C^n/(f,g).

$$

Here the $\ell_i$ are generic linear forms and $f,g$ are generic exterior quadrics. Let $P_n(t)=\sum_{s\ge0}a(n,s)t^s$ use exactly the catalogue's confined paths.

Boij–Lundqvist [BL26, Theorem 5.5] proves $\operatorname{Hilb}_{A_n}=P_n$ for every $n\ge1$. Their Corollary 5.6 proves $\operatorname{Hilb}_{B_n}=P_n$ for every even $n$. This is an August 2026 preprint, not a claimed journal publication. The theorem numbers here refer to arXiv v1.

Thus the full commutative half and all even-dimensional instances of the catalogue follow from this source. The unrestricted odd exterior assertion is outside the scope of those theorems and is not proved here. Earlier, Crispin Quiñonez–Lundqvist–Nenashev [CLN19, Theorem 1 in the checked arXiv version] established the equivalence between the all-even exterior assertion and the all-dimensional commutative assertion. Their Proposition 4 records the odd cases $n\le19$, using Macaulay2 calculations; we credit that computation and do not claim to have rerun it.

For the match of commutative presentations, take $n+2$ general linear forms in $n$ variables. The first $n$ are independent on a nonempty Zariski-open locus. An invertible linear change makes these the coordinates $x_i$; the other two remain general. Their squared ideal is therefore exactly the presentation $A_n$. This identifies the catalogue with the ring in [BL26]. The boundary case $n=1$ is also immediate: both quotients have series $1+t$.

The contribution here is the source/scope identification, a version-specific cutoff clarification, a self-contained path calculation, and reproducible arithmetic checks. No new resolution of the general algebraic conjecture is claimed.

## 2. The path coefficients and their support

Put $h=n+2$, $w=n+2-2s$. If $w<0$, set $a(n,s)=0$. For $w\ge0$, put $D=w+2$. Adopt $\binom Nj=0$ unless $j$ is an integer in $[0,N]$. Then

$$

 a(n,s)=\sum_{k\in\mathbb Z}
 \left[\binom{n+2}{s+kD}-\binom{n+2}{s-1+kD}\right].                 \tag{1}

$$

All sums here have finite support.

Here is a recurrence proof, independent of the algebraic theorem. Let $U_N(b)$ count unrestricted walks from $0$ to $b$ using $N$ steps of size $1$ or $-1$. It equals $\binom N{(N+b)/2}$, is symmetric in $b$, and satisfies the nearest-neighbor recurrence. Define

$$

 K_N(b)=\sum_{k\in\mathbb Z}\bigl(U_N(b+2kD)-U_N(b+2+2kD)\bigr).

$$

Symmetry gives $K_N(-1)=K_N(D-1)=0$, using $k\mapsto-k-1$ at the second boundary. For $0\le b\le D-2$, $K_0(b)=\delta_{b,0}$. The same recurrence as for unrestricted walks holds. These boundary and initial values uniquely determine the counts of walks confined to $0,\ldots,w$, by induction on $N$. Evaluate $K_h(w)$, substitute $w=h-2s$, and use binomial symmetry and $k\mapsto-k$ to obtain (1).

To fold (1), set $C_j=\binom{n+2}j-\binom{n+2}{j-1}$. For $k\ge1$, the identity $n+2-s=s+D-2$ and binomial symmetry give

$$

 C_{s+kD}=-C_{s-1-(k-1)D}.

$$

Consequently (1) equals $\sum_{r\ge0}(C_{s-rD}-C_{s-1-rD})$. The bracket at index $j$ is the coefficient of $t^j$ in

$$

 (1-t)^2(1+t)^{n+2}=(1-t^2)^2(1+t)^n.

$$

It follows that

$$

 a(n,s)=\sum_{r\ge0}
 \left[\binom n{s-rD}-2\binom n{s-2-rD}+\binom n{s-4-rD}\right].     \tag{2}

$$

In particular (2) reproduces the coefficient formula in [BL26, Theorem 5.5] for $0\le s\le\lceil n/2\rceil$, where $D\ge3$.

For $s>\lceil n/2\rceil$, the width is nonpositive; a zero-width strip admits no positive-length walk. Thus the coefficients vanish. When $n=2m,\ s=m$, the width is two. After the initial forced step, each of the $m$ visits at odd heights $1,3,\ldots,2m-1$ permits two choices for the next even-height vertex, and the final step is forced. Hence $a(2m,m)=2^m$. For $n=2m+1,\ s=m+1$, the width is one and the entire walk is forced to alternate, so $a(2m+1,m+1)=1$. These are known counts, also discussed in [BL26]; no novelty is claimed.

## 3. A cutoff clarification, and a direct sanity check

The displayed Conjectures 5.1 and 5.2 in [BL26 v1, printed p.14] stop at $\lfloor n/2\rfloor$. For odd $n$, that drops the nonzero final path coefficient just proved. Theorem 5.5 instead correctly stops at $\lceil n/2\rceil$. The catalogue uses the full sum and has no such error. This is a clarification of those two displays, not a disproof of the intended conjecture or the theorem.

One can check the issue directly at $n=3$ over $\mathbb C$. In the squarefree commutative algebra, use the degree-two basis $xy,xz,yz$, and take $L_1=x+y+z$, $L_2=x+2y+3z$. Their squares have coefficient vectors $(2,2,2)$ and $(4,6,12)$, of rank two. Two generators cannot have a larger degree-two rank, so this is the generic rank. Also $xL_1^2=2xyz\ne0$, killing degree three on a nonempty open set. Thus the generic series is $1+3t+t^2$.

In the exterior algebra on three generators, an independent pair of quadrics leaves degree-two dimension one. Every nonzero quadric wedges with some generator to give a nonzero multiple of the top monomial, killing degree three. Its generic quotient has the same series. This elementary check alone rules out a floor cutoff at $n=3$.

## 4. Reproducible verification and its limits

The accompanying Python program implements confined-walk dynamic programming, (1), and (2) separately. It checks 7,740 pairs with $1\le n\le120$ and $0\le s\le n+3$, using (2) in the theorem's stated range and checking vanishing above it.

The C++ program computes exact multiplication-matrix ranks over each of the primes $32003,65521$, for both algebras and every $2\le n\le12$: 44 complete Hilbert vectors. The commutative examples use $L_1=\sum_i x_i$, $L_2=\sum_i i x_i$. The exterior examples use the deterministic integer coefficients specified by the code's SplitMix64 rule. They use the same integer forms at both primes. All 44 vectors agree with the path counts. For instance the nonzero coefficients for $n=11$ are $1,11,53,143,221,144,1$; for $n=12$, they are $1,12,64,196,364,364,64$.

Rows in degree $s$ are the $s$-element subsets; columns are two copies of the $(s-2)$-element subsets. Each column is the product with one quadric, including exterior permutation signs and killing repeated variables. Its image is exactly the degree-$s$ part of the ideal. The quotient dimension is $\binom ns-\operatorname{rank}$.

A rank modulo a prime witnesses a nonzero integer minor and gives a characteristic-zero rank lower bound for that integer specialization. It gives no converse bound. Generic quotient dimensions are minimal among specializations; these examples alone therefore do not prove generic equality, especially in the unrestricted odd exterior family. The algebraic conclusions in Section 1 rely on the cited theorems, not these finite-field checks.

Reproduce from this directory:

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/29) for this material.

The main instance freshly reran the full rank computation and path program. A separate LLM audit checked the proof and source scope, reran the path checks, and independently recompiled the rank program through $n=6$, obtaining the same 20 corresponding vectors. The attached audit is an LLM review, not human peer review. There is no claimed new proof for arbitrary odd exterior dimension, no verification of every algebraic proof in [BL26], and no assertion for all specializations or all positive characteristics.

## References

- [BL26] Mats Boij and Samuel Lundqvist, *On the Hilbert series of ideals generated by powers of general linear forms*, arXiv:2608.22823v1, 24 August 2026, Section 5, especially Theorem 5.5 and Corollary 5.6. [PDF](https://arxiv.org/pdf/2608.22823) · [metadata](https://arxiv.org/abs/2608.22823). The metadata title omits “powers of”; the PDF title above includes it. Preprint.
- [CLN19] Veronica Crispin Quiñonez, Samuel Lundqvist and Gleb Nenashev, *On ideals generated by two generic quadratic forms in the exterior algebra*, J. Pure Appl. Algebra 223 (2019), no.12, 5067–5082, DOI [10.1016/j.jpaa.2019.03.010](https://doi.org/10.1016/j.jpaa.2019.03.010). Checked full text: [arXiv:1803.08918v1](https://arxiv.org/pdf/1803.08918), Theorem 1 and Proposition 4; numbering in this report refers to that version.
- We-Solve, [TOP-1500024 statement](https://github.com/We-Solve/we-solve.github.io/blob/main/problems/algebraic-stories-exterior-algebras-2287020b/source/statement.tex) and [research prompt](https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-1500024.txt), checked 18 October 2026. Used for the exact generic characteristic-zero problem, path convention and submission scope.


## Reproducibility file: verify1500024.cpp

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/29) for this material.


## Reproducibility file: path_check.py

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/29) for this material.


## Reproducibility file: rank_results.json

```json
{
  "method": "exact finite-field column Gaussian elimination",
  "exterior_coefficient_rule": "SplitMix64 seed 0x1500024000000000+100*n+which; pairs lexicographic; c=(next()%2001)-1000",
  "commutative_linear_forms": "L1=sum_i x_i; L2=sum_i i*x_i with i=1,...,n",
  "results": [
    {"p":32003,"n":2,"algebra":"commutative squarefree","quotient_dimensions":[1,2,0],"ideal_ranks":[0,0,1],"matches_path_numbers":true},
    {"p":32003,"n":2,"algebra":"exterior","quotient_dimensions":[1,2,0],"ideal_ranks":[0,0,1],"matches_path_numbers":true},
    {"p":32003,"n":3,"algebra":"commutative squarefree","quotient_dimensions":[1,3,1,0],"ideal_ranks":[0,0,2,1],"matches_path_numbers":true},
    {"p":32003,"n":3,"algebra":"exterior","quotient_dimensions":[1,3,1,0],"ideal_ranks":[0,0,2,1],"matches_path_numbers":true},
    {"p":32003,"n":4,"algebra":"commutative squarefree","quotient_dimensions":[1,4,4,0,0],"ideal_ranks":[0,0,2,4,1],"matches_path_numbers":true},
    {"p":32003,"n":4,"algebra":"exterior","quotient_dimensions":[1,4,4,0,0],"ideal_ranks":[0,0,2,4,1],"matches_path_numbers":true},
    {"p":32003,"n":5,"algebra":"commutative squarefree","quotient_dimensions":[1,5,8,1,0,0],"ideal_ranks":[0,0,2,9,5,1],"matches_path_numbers":true},
    {"p":32003,"n":5,"algebra":"exterior","quotient_dimensions":[1,5,8,1,0,0],"ideal_ranks":[0,0,2,9,5,1],"matches_path_numbers":true},
    {"p":32003,"n":6,"algebra":"commutative squarefree","quotient_dimensions":[1,6,13,8,0,0,0],"ideal_ranks":[0,0,2,12,15,6,1],"matches_path_numbers":true},
    {"p":32003,"n":6,"algebra":"exterior","quotient_dimensions":[1,6,13,8,0,0,0],"ideal_ranks":[0,0,2,12,15,6,1],"matches_path_numbers":true},
    {"p":32003,"n":7,"algebra":"commutative squarefree","quotient_dimensions":[1,7,19,21,1,0,0,0],"ideal_ranks":[0,0,2,14,34,21,7,1],"matches_path_numbers":true},
    {"p":32003,"n":7,"algebra":"exterior","quotient_dimensions":[1,7,19,21,1,0,0,0],"ideal_ranks":[0,0,2,14,34,21,7,1],"matches_path_numbers":true},
    {"p":32003,"n":8,"algebra":"commutative squarefree","quotient_dimensions":[1,8,26,40,16,0,0,0,0],"ideal_ranks":[0,0,2,16,54,56,28,8,1],"matches_path_numbers":true},
    {"p":32003,"n":8,"algebra":"exterior","quotient_dimensions":[1,8,26,40,16,0,0,0,0],"ideal_ranks":[0,0,2,16,54,56,28,8,1],"matches_path_numbers":true},
    {"p":32003,"n":9,"algebra":"commutative squarefree","quotient_dimensions":[1,9,34,66,55,1,0,0,0,0],"ideal_ranks":[0,0,2,18,71,125,84,36,9,1],"matches_path_numbers":true},
    {"p":32003,"n":9,"algebra":"exterior","quotient_dimensions":[1,9,34,66,55,1,0,0,0,0],"ideal_ranks":[0,0,2,18,71,125,84,36,9,1],"matches_path_numbers":true},
    {"p":32003,"n":10,"algebra":"commutative squarefree","quotient_dimensions":[1,10,43,100,121,32,0,0,0,0,0],"ideal_ranks":[0,0,2,20,89,220,210,120,45,10,1],"matches_path_numbers":true},
    {"p":32003,"n":10,"algebra":"exterior","quotient_dimensions":[1,10,43,100,121,32,0,0,0,0,0],"ideal_ranks":[0,0,2,20,89,220,210,120,45,10,1],"matches_path_numbers":true},
    {"p":32003,"n":11,"algebra":"commutative squarefree","quotient_dimensions":[1,11,53,143,221,144,1,0,0,0,0,0],"ideal_ranks":[0,0,2,22,109,318,461,330,165,55,11,1],"matches_path_numbers":true},
    {"p":32003,"n":11,"algebra":"exterior","quotient_dimensions":[1,11,53,143,221,144,1,0,0,0,0,0],"ideal_ranks":[0,0,2,22,109,318,461,330,165,55,11,1],"matches_path_numbers":true},
    {"p":32003,"n":12,"algebra":"commutative squarefree","quotient_dimensions":[1,12,64,196,364,364,64,0,0,0,0,0,0],"ideal_ranks":[0,0,2,24,131,428,860,792,495,220,66,12,1],"matches_path_numbers":true},
    {"p":32003,"n":12,"algebra":"exterior","quotient_dimensions":[1,12,64,196,364,364,64,0,0,0,0,0,0],"ideal_ranks":[0,0,2,24,131,428,860,792,495,220,66,12,1],"matches_path_numbers":true},
    {"p":65521,"n":2,"algebra":"commutative squarefree","quotient_dimensions":[1,2,0],"ideal_ranks":[0,0,1],"matches_path_numbers":true},
    {"p":65521,"n":2,"algebra":"exterior","quotient_dimensions":[1,2,0],"ideal_ranks":[0,0,1],"matches_path_numbers":true},
    {"p":65521,"n":3,"algebra":"commutative squarefree","quotient_dimensions":[1,3,1,0],"ideal_ranks":[0,0,2,1],"matches_path_numbers":true},
    {"p":65521,"n":3,"algebra":"exterior","quotient_dimensions":[1,3,1,0],"ideal_ranks":[0,0,2,1],"matches_path_numbers":true},
    {"p":65521,"n":4,"algebra":"commutative squarefree","quotient_dimensions":[1,4,4,0,0],"ideal_ranks":[0,0,2,4,1],"matches_path_numbers":true},
    {"p":65521,"n":4,"algebra":"exterior","quotient_dimensions":[1,4,4,0,0],"ideal_ranks":[0,0,2,4,1],"matches_path_numbers":true},
    {"p":65521,"n":5,"algebra":"commutative squarefree","quotient_dimensions":[1,5,8,1,0,0],"ideal_ranks":[0,0,2,9,5,1],"matches_path_numbers":true},
    {"p":65521,"n":5,"algebra":"exterior","quotient_dimensions":[1,5,8,1,0,0],"ideal_ranks":[0,0,2,9,5,1],"matches_path_numbers":true},
    {"p":65521,"n":6,"algebra":"commutative squarefree","quotient_dimensions":[1,6,13,8,0,0,0],"ideal_ranks":[0,0,2,12,15,6,1],"matches_path_numbers":true},
    {"p":65521,"n":6,"algebra":"exterior","quotient_dimensions":[1,6,13,8,0,0,0],"ideal_ranks":[0,0,2,12,15,6,1],"matches_path_numbers":true},
    {"p":65521,"n":7,"algebra":"commutative squarefree","quotient_dimensions":[1,7,19,21,1,0,0,0],"ideal_ranks":[0,0,2,14,34,21,7,1],"matches_path_numbers":true},
    {"p":65521,"n":7,"algebra":"exterior","quotient_dimensions":[1,7,19,21,1,0,0,0],"ideal_ranks":[0,0,2,14,34,21,7,1],"matches_path_numbers":true},
    {"p":65521,"n":8,"algebra":"commutative squarefree","quotient_dimensions":[1,8,26,40,16,0,0,0,0],"ideal_ranks":[0,0,2,16,54,56,28,8,1],"matches_path_numbers":true},
    {"p":65521,"n":8,"algebra":"exterior","quotient_dimensions":[1,8,26,40,16,0,0,0,0],"ideal_ranks":[0,0,2,16,54,56,28,8,1],"matches_path_numbers":true},
    {"p":65521,"n":9,"algebra":"commutative squarefree","quotient_dimensions":[1,9,34,66,55,1,0,0,0,0],"ideal_ranks":[0,0,2,18,71,125,84,36,9,1],"matches_path_numbers":true},
    {"p":65521,"n":9,"algebra":"exterior","quotient_dimensions":[1,9,34,66,55,1,0,0,0,0],"ideal_ranks":[0,0,2,18,71,125,84,36,9,1],"matches_path_numbers":true},
    {"p":65521,"n":10,"algebra":"commutative squarefree","quotient_dimensions":[1,10,43,100,121,32,0,0,0,0,0],"ideal_ranks":[0,0,2,20,89,220,210,120,45,10,1],"matches_path_numbers":true},
    {"p":65521,"n":10,"algebra":"exterior","quotient_dimensions":[1,10,43,100,121,32,0,0,0,0,0],"ideal_ranks":[0,0,2,20,89,220,210,120,45,10,1],"matches_path_numbers":true},
    {"p":65521,"n":11,"algebra":"commutative squarefree","quotient_dimensions":[1,11,53,143,221,144,1,0,0,0,0,0],"ideal_ranks":[0,0,2,22,109,318,461,330,165,55,11,1],"matches_path_numbers":true},
    {"p":65521,"n":11,"algebra":"exterior","quotient_dimensions":[1,11,53,143,221,144,1,0,0,0,0,0],"ideal_ranks":[0,0,2,22,109,318,461,330,165,55,11,1],"matches_path_numbers":true},
    {"p":65521,"n":12,"algebra":"commutative squarefree","quotient_dimensions":[1,12,64,196,364,364,64,0,0,0,0,0,0],"ideal_ranks":[0,0,2,24,131,428,860,792,495,220,66,12,1],"matches_path_numbers":true},
    {"p":65521,"n":12,"algebra":"exterior","quotient_dimensions":[1,12,64,196,364,364,64,0,0,0,0,0,0],"ideal_ranks":[0,0,2,24,131,428,860,792,495,220,66,12,1],"matches_path_numbers":true}
  ]
}
```


## Reproducibility file: path_results.json

```json
{
  "path_cases_checked": 7740,
  "path_n_range": [
    1,
    120
  ],
  "path_s_range": "0 <= s <= n+3",
  "methods": [
    "direct dynamic programming",
    "two-wall image binomial sum",
    "Boij-Lundqvist formula in stated range"
  ],
  "finite_field_rank_cases_checked": 44,
  "finite_field_primes": [
    32003,
    65521
  ],
  "finite_field_n_range": [
    2,
    12
  ],
  "hilbert_vectors": {
    "1": [
      1,
      1
    ],
    "2": [
      1,
      2,
      0
    ],
    "3": [
      1,
      3,
      1,
      0
    ],
    "4": [
      1,
      4,
      4,
      0,
      0
    ],
    "5": [
      1,
      5,
      8,
      1,
      0,
      0
    ],
    "6": [
      1,
      6,
      13,
      8,
      0,
      0,
      0
    ],
    "7": [
      1,
      7,
      19,
      21,
      1,
      0,
      0,
      0
    ],
    "8": [
      1,
      8,
      26,
      40,
      16,
      0,
      0,
      0,
      0
    ],
    "9": [
      1,
      9,
      34,
      66,
      55,
      1,
      0,
      0,
      0,
      0
    ],
    "10": [
      1,
      10,
      43,
      100,
      121,
      32,
      0,
      0,
      0,
      0,
      0
    ],
    "11": [
      1,
      11,
      53,
      143,
      221,
      144,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    "12": [
      1,
      12,
      64,
      196,
      364,
      364,
      64,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "13": [
      1,
      13,
      76,
      260,
      560,
      728,
      377,
      1,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "14": [
      1,
      14,
      89,
      336,
      820,
      1288,
      1093,
      128,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "15": [
      1,
      15,
      103,
      425,
      1156,
      2108,
      2380,
      987,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "16": [
      1,
      16,
      118,
      528,
      1581,
      3264,
      4488,
      3280,
      256,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "17": [
      1,
      17,
      134,
      646,
      2109,
      4845,
      7752,
      7753,
      2584,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "18": [
      1,
      18,
      151,
      780,
      2755,
      6954,
      12597,
      15504,
      9841,
      512,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "19": [
      1,
      19,
      169,
      931,
      3535,
      9709,
      19551,
      28101,
      25213,
      6765,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "20": [
      1,
      20,
      188,
      1100,
      4466,
      13244,
      29260,
      47652,
      53296,
      29524,
      1024,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]
  }
}
```




## Attribution and references from the original submission

### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)

### LLM versions, settings and roles

OpenAI Codex (GPT-6) | version: unknown | reasoning: unknown | role: four instances in this contribution: main instance selected the target, checked primary sources, developed exposition and n=3 sanity proof, reran all computations, assembled and submitted; next_scout checked sources, exact scope and parity; lattice_verify wrote and ran path and rank programs; twoquad_audit independently checked source scope and proofs, reran path checks and rank cases through n=6, and checked the final report. No other LLM was used for this contribution. Exact serving revision and reasoning configuration are unknown.

### People and roles

Gaven: prompted and authorized the work and public submission. No human mathematical contribution or human verification is claimed.

### References

Mats Boij and Samuel Lundqvist, arXiv:2608.22823v1 (24 Aug 2026), https://arxiv.org/pdf/2608.22823. Checked Section 5, Theorem 5.5 and Corollary 5.6; used for the full commutative family and even exterior family, and version-specific cutoff clarification. Preprint. Metadata title omits "powers of" present in PDF heading.
Veronica Crispin Quiñonez, Samuel Lundqvist and Gleb Nenashev, On ideals generated by two generic quadratic forms in the exterior algebra, J. Pure Appl. Algebra 223 (2019), 5067–5082, DOI 10.1016/j.jpaa.2019.03.010. Full text checked: https://arxiv.org/pdf/1803.08918 (v1); Theorem 1 for the even-exterior/commutative equivalence, Proposition 4 and Table 1 for credited prior odd n<=19 computation.
We-Solve TOP-1500024 statement and prompt: https://we-solve.github.io/problems/algebraic-stories-exterior-algebras-2287020b/ and https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1500024.txt. Checked for the exact characteristic-zero generic statement and path convention.

