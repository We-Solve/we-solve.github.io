# prb_1e4e877413414b34b1c7c778cb52d6c3: the complete-intersection implication, the three-generator case, and a symmetry obstruction

**Claim type:** Literature report, with expanded proofs and exact polynomial certificates.  
**Scope:** Every complete-intersection numerical semigroup is cyclotomic; every cyclotomic numerical semigroup is symmetric; the catalogue equivalence holds in embedding dimension at most three. The converse in arbitrary embedding dimension is not proved here.

These are known results of Ciolan–García-Sánchez–Moree [CGM]: Lemma 2, Theorem 1, and Lemma 7/Corollary 2, respectively. The low-dimensional converse uses the established structure theorem that symmetric numerical semigroups on at most three generators are complete intersections; we use the explicit result in [CGM], not a claimed new proof of that structure theorem. The contribution supplies the elementary implications in detail, exact certificates for examples, and a warning that symmetry alone is insufficient above embedding dimension three.

## 1. Complete intersection implies cyclotomic, in every embedding dimension

Let $\mathcal S$ have minimal generators $s_1,\ldots,s_e$. Give the variable $y_i$ weight $s_i$. If its defining ideal is a complete intersection, choose its weighted homogeneous regular sequence with degrees $b_1,\ldots,b_{e-1}$. The graded exact sequence for each nonzerodivisor multiplies the Hilbert series by $1-z^{b_j}$. Starting with the weighted polynomial ring gives

$$\sum_{s\in\mathcal S}z^s=
\frac{\prod_{j=1}^{e-1}(1-z^{b_j})}{\prod_{i=1}^e(1-z^{s_i})}.$$

Each weight space of the semigroup ring has dimension one if its weight is in $\mathcal S$, and zero otherwise, which explains the left side. Consequently

$$P_{\mathcal S}(z)=
\frac{(1-z)\prod_{j=1}^{e-1}(1-z^{b_j})}
{\prod_{i=1}^e(1-z^{s_i})}. \tag{1}$$

Every factor $1-z^m$ factors into cyclotomic polynomials, up to a unit. Unique factorization over $\mathbb Q[z]$ and the fact that $P_{\mathcal S}$ is a polynomial show that all net cyclotomic exponents in (1) are nonnegative. There is no factor $\Phi_1(z)=z-1$, since $P_{\mathcal S}(1)=1$. The constant coefficient is one, so there is no remaining nontrivial unit. Thus $P_{\mathcal S}$ is a product of cyclotomic polynomials.

The case $\mathcal S=\mathbb N_0$ has $P=1$, the empty product, and fits the conclusion. The argument uses the integer-weight grading and holds over any field in which the stated complete-intersection presentation exists.

## 2. Cyclotomic implies symmetry

For $\mathcal S\ne\mathbb N_0$, let $F$ be its Frobenius number and let

$$G(z)=\sum_{a\in\mathbb N_0\setminus\mathcal S}z^a.$$

Then

$$P_{\mathcal S}(z)=1-(1-z)G(z),\qquad \deg P_{\mathcal S}=F+1. \tag{2}$$

Every cyclotomic polynomial other than $\Phi_1$ is reciprocal. Since $P_{\mathcal S}(1)=1$ excludes $\Phi_1$, cyclotomicity implies

$$P_{\mathcal S}(z)=z^{F+1}P_{\mathcal S}(1/z).$$

Substituting (2) and cancelling $1-z$ yields

$$G(z)+z^F G(1/z)=1+z+\cdots+z^F. \tag{3}$$

Thus exactly one of $a$ and $F-a$ is a gap, for every integer $0\le a\le F$. This is symmetry. In particular, the number $g$ of gaps satisfies $2g=F+1$, so $F$ is odd. Conversely, (3) shows that symmetry is equivalent to reciprocality of the semigroup polynomial. Reciprocality alone does not imply cyclotomicity.

Combining this with [CGM, Lemma 7], for embedding dimension at most three one has

$$\text{complete intersection}\quad\Longleftrightarrow\quad
\text{cyclotomic}\quad\Longleftrightarrow\quad\text{symmetric}. \tag{4}$$

The implication from symmetry to complete intersection in (4) is the credited literature input. We do not extend it to arbitrary embedding dimension.

## 3. Two exact positive certificates

If $a,b>1$ are coprime, the semigroup $\langle a,b\rangle$ has presentation

$$K[u,v]/(u^b-v^a),\qquad \deg u=a,\quad\deg v=b.$$

Indeed, reducing to the basis $u^i v^j$ with $0\le i<b$ gives distinct exponents $ai+bj$: equality forces the two values of $i$ to agree modulo $b$, hence to agree. This proves the kernel statement and the complete-intersection property. Formula (1) becomes

$$P_{\langle a,b\rangle}(z)=\frac{(1-z)(1-z^{ab})}{(1-z^a)(1-z^b)}
=\prod_{\substack{m\mid ab\\m\nmid a,\ m\nmid b}}\Phi_m(z). \tag{5}$$

For a three-generator example take $\langle4,6,9\rangle$. Its defining relations are $u^3-v^2$ and $w^2-v^3$, of weights $12$ and $18$. Reduction gives normal forms $u^i v^j w^h$ with $0\le i<3$ and $0\le h<2$. The six residues $4i+9h$ modulo $6$ are all different, so their images in $K[t]$ are linearly independent. This proves that the two relations generate the kernel. The first relation defines a domain and the second is a nonzero element in its polynomial extension, so they form a regular sequence. Directly,

$$P_{\langle4,6,9\rangle}(z)=
1-z+z^4-z^5+z^6-z^7+z^8-z^{11}+z^{12}
=\Phi_6(z)\Phi_{12}(z)\Phi_{18}(z). \tag{6}$$

This is also [CGM, Example 4]. The attached code checks both the gap computation and the factorization exactly.

## 4. A symmetric example that is not cyclotomic

The semigroup $\mathcal S=\langle5,6,7,8\rangle$ has gaps $\{1,2,3,4,9\}$, Frobenius number $9$, and symmetric gap pairs. Nevertheless

$$P(z)=1-z+z^5-z^9+z^{10} \tag{7}$$

is not cyclotomic. Here is a short exact certificate, without numerical root approximations.

One has $P(-1)=3$. The standard cyclotomic evaluation identity says that for $m>2$, $\Phi_m(-1)$ is $p$ when $m=2p^a$ for a prime $p$ and $a\ge1$, and is one otherwise. Also $\Phi_2(-1)=0$, which cannot occur in (7). If (7) were a cyclotomic product, a factor with value three would therefore be $\Phi_{2\cdot3^a}$. Its degree is $2\cdot3^{a-1}$. Since $\deg P=10$, the only possibilities are $\Phi_6$ and $\Phi_{18}$. But exact division gives

$$P\bmod\Phi_6=3-3z,\qquad P\bmod\Phi_{18}=2-2z+z^5,$$

both nonzero. This is a contradiction. Thus this symmetric four-generator semigroup is not cyclotomic, and by Section 1 is not a complete intersection. This known example is discussed in [CGM, Section 3]. It does not disprove the catalogue equivalence, because both sides of that equivalence fail for it.

## 5. Exact verification and remaining scope

Run `python3 verify_semigroups.py`. The standard-library program computes Apéry sets by integer shortest paths on residues, independently checks membership by dynamic programming, constructs the gap polynomial, and verifies the exact Apéry polynomial identity. It checks (5) and its explicit cyclotomic product for every coprime pair $2\le a<b\le25$. It also verifies (6), both remainders in Section 4, the gap sets and symmetry assertions. All arithmetic is integral; no approximate roots or floating-point decisions are used. The recorded output is `verification.json`.

The report proves the general complete-intersection implication and a necessary condition. The converse beyond embedding dimension three is not established by this work. It makes no claim to reproduce a global search or to prove that reciprocality is sufficient.

## Checked references

1. [Official prb_1e4e877413414b34b1c7c778cb52d6c3 prompt](https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_1e4e877413414b34b1c7c778cb52d6c3.txt), checked 18 October 2026, for the exact definition and complete-intersection equivalence question.
2. Emil-Alexandru Ciolan, Pedro A. García-Sánchez and Pieter Moree, *Cyclotomic numerical semigroups*, [arXiv:1409.5614v3](https://arxiv.org/pdf/1409.5614), 10 February 2016; SIAM Journal on Discrete Mathematics 30 (2016), 650–668, DOI [10.1137/140989479](https://doi.org/10.1137/140989479). Checked Theorem 1, Lemmas 2 and 7, Corollary 2, Section 3 and equation (10). Numbering refers to the inspected arXiv v3. The deeper three-generator structure theorem is used through their explicit Lemma 7, rather than claiming a separate audit of its original proof.


## Reproducibility and review

Exact Apéry shortest paths independently checked against membership dynamic programming; gap-polynomial and cyclotomic product identities for every coprime pair 2<=a<b<=25; exact three-generator product and four-generator noncyclotomic remainders. See verification.json for fresh output.
The main instance freshly ran the attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify_semigroups.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_1e4e877413414b34b1c7c778cb52d6c3.txt
https://arxiv.org/pdf/1409.5614
https://arxiv.org/abs/1409.5614
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
