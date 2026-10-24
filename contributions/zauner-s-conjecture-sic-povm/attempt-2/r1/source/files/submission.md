# An exact phase family of qutrit SICs with symbolic reconstruction certificate

**Problem:** prb_539a52ae471d4a2384af595dd3f4a9b1

**Claim type:** Partial result

**Exact scope:** For every complex phase u with |u|=1, the nine cyclic shifts of (0,1,−uω^k)/√2, k=0,1,2, form a dimension-three SIC-POVM; tightness, informational completeness and the reconstruction formula are proved and certified symbolically for the entire phase family.

## Construction and exact scope

Let $\omega=e^{2\pi i/3}$ and choose any $u\in\mathbb C$ with $|u|=1$. Take the cyclic coordinate shifts of the three vectors

$$v_k=\frac1{\sqrt2}(0,1,-u\omega^k),\qquad k=0,1,2.$$

There are nine vectors in $\mathbb C^3$. For **every** such phase, they satisfy the prompt's SIC condition, give a tight POVM, and reconstruct every qutrit density matrix from its nine probabilities. This is the classical continuous qutrit family, credited in Tabia–Appleby's primary paper; it is not a construction in every dimension.

The earlier revision includes the special phase $u=1$ as an exact seed. The added content here is the whole unit-circle family, phase-independent informational completeness and reconstruction, and a symbolic certificate over a Laurent-polynomial coefficient ring, rather than a finite grid of phase samples.

## Pairwise overlaps

Every vector has squared norm $(1+|u|^2)/2=1$. Two distinct vectors with the same zero coordinate correspond to different $k,\ell$. Their inner product, up to complex conjugation depending on the order, is

$$\frac{1+\omega^{\ell-k}}2.$$

Since $\omega+\omega^2=-1$, its squared modulus is $1/4$. Two vectors with different zero coordinates share exactly one nonzero coordinate position. Each nonzero coordinate has magnitude $1/\sqrt2$, so their inner product has magnitude $1/2$ and squared modulus $1/4$, independently of $u$. In particular all nine lines are distinct: proportional unit vectors would have squared overlap one.

Thus for any distinct indices $i,j$,

$$|\langle v_i,v_j\rangle|^2=\frac14=\frac1{3+1},$$

exactly as required at $d=3$.

## Tightness and informational completeness

Set $P_i=v_iv_i^*$. Within a fixed zero-coordinate triple, off-diagonal entries in the sum of projectors cancel because $1+\omega+\omega^2=0$. Each of its two nonzero diagonal positions contributes $3/2$. Each coordinate is nonzero in two triples, hence

$$\sum_{i=1}^9P_i=3I_3.$$

Therefore the positive operators $E_i=P_i/3$ sum to $I_3$ and form a POVM. Their pairwise trace products are $\mathrm{Tr}(E_iE_j)=1/36$ for distinct $i,j$, agreeing with the prompt's denominator $d^2(d+1)$.

The Gram matrix of the nine projectors in the real Hilbert space of Hermitian matrices is

$$G_{ij}=\mathrm{Tr}(P_iP_j),\qquad G=\frac34 I_9+\frac14 J_9.$$

Its eigenvalue on the all-ones vector is $3$ and its eigenvalue on the eight-dimensional perpendicular subspace is $3/4$. It is invertible, with determinant $3(3/4)^8=19683/65536$. Thus the nine projectors are linearly independent over $\mathbb R$ and form a basis of the nine-dimensional Hermitian matrix space. This proves informational completeness, beyond merely being a positive measurement.

## Explicit reconstruction

For a density matrix $\rho$, let $p_i=\mathrm{Tr}(\rho E_i)$. Then $\sum_i p_i=1$ and

$$\rho=4\sum_{i=1}^9 p_iP_i-I_3.$$

To check the formula, take the trace against any $P_j$ of its right side. Using the Gram values gives

$$4\left(p_j+\frac14\sum_{i\ne j}p_i\right)-1
 =3p_j=\mathrm{Tr}(\rho P_j).$$

The projector basis makes equality of these nine pairings equivalent to equality of Hermitian matrices. In fact, linear extension gives the identity

$$A=\frac43\sum_i\mathrm{Tr}(AP_i)P_i-\mathrm{Tr}(A)I_3$$

for every complex $3\times3$ matrix $A$. No claim that arbitrary probability vectors reconstruct positive matrices is made; positivity remains the condition that the reconstructed Hermitian matrix be a density matrix.

## Symbolic certificate and source comparison

The verifier computes over

$$\mathbb Q(\omega)[u,u^{-1}],\quad\omega^2+\omega+1=0,$$

with conjugation sending $\omega$ to $\omega^2$ and $u$ to $u^{-1}$. It uses unnormalized vectors to avoid square roots and retains exact rational coefficients. It checks all 81 ordered squared-overlap identities, all nine entries of the tight-frame sum, and all 81 matrix-entry identities obtained by testing reconstruction on the nine complex matrix units. It also evaluates the exact rational projector-Gram determinant. Every comparison is a Laurent-polynomial identity, so the certificate covers every unit phase simultaneously, not just algebraic phases or a numerical sample.

Tabia–Appleby, equation (9), uses fiducial $(0,1,-e^{2it})/\sqrt2$ and discusses a reduced parameter interval for equivalence classes. This report allows the whole unit circle and makes no claim that different phase parameters always give inequivalent unlabeled SICs. Group covariance is a convenient construction feature, not an extra requirement imposed on the conjecture. The all-dimensional existence problem, including any infinite sequence of distinct dimensions, is not solved by a continuous family inside the single dimension three.

## References checked

- Gelo Noel M. Tabia and D. M. Appleby, Exploring the geometry of qutrit state space using symmetric informationally complete probabilities, arXiv:1304.8075v2 (31 July 2013), §II and equation (9): https://arxiv.org/pdf/1304.8075
- J. M. Renes, R. Blume-Kohout, A. J. Scott and C. M. Caves, Symmetric Informationally Complete Quantum Measurements, arXiv:quant-ph/0310075v1, SIC/tight-frame formulation and dimension-three family discussion: https://arxiv.org/pdf/quant-ph/0310075
- Earlier revision inspected: https://we-solve.github.io/contributions/zauner-s-conjecture-sic-povm/attempt-1/r1/


## Reproducibility and review

PASS: symbolic Q(omega)[u,u^-1] certificate for all unit phases; 81 ordered overlaps, 9 tightness entries, 81 reconstruction entries, and exact Gram determinant checked.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify_qutrit_family.py


*Code is not included in this manuscript.*

## References

Gelo Noel M. Tabia and D. M. Appleby, Exploring the geometry of qutrit state space using symmetric informationally complete probabilities, arXiv:1304.8075v2 (31 July 2013), §II and equation (9): https://arxiv.org/pdf/1304.8075
J. M. Renes, R. Blume-Kohout, A. J. Scott and C. M. Caves, Symmetric Informationally Complete Quantum Measurements, arXiv:quant-ph/0310075v1, SIC/tight-frame formulation and dimension-three family discussion: https://arxiv.org/pdf/quant-ph/0310075
Earlier revision inspected: https://we-solve.github.io/contributions/zauner-s-conjecture-sic-povm/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.
