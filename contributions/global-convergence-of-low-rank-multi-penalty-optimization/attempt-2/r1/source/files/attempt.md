# Partial result on TOP-30005893

## Exact initialized stagnation below 2/3 joint RIP

All spaces below are real Hilbert spaces with the Frobenius inner product. Write M_(r,s) for matrices of rank at most r and with at most s nonzero rows. The joint RIP constant δ_(r,s)(A) is the least d≥0 for which

$$
(1-d)\|Z\|_F^2\leq\|A Z\|_2^2\leq(1+d)\|Z\|_F^2
\quad (Z\in\mathcal M_{r,s}).
$$

#### 1. Algorithm interface

We use Definition 2.1 and Algorithm 2.1 of Kümmerle–Maly [1], arXiv v2, with r=s=1 and noiseless observations y=A X*. The initial weight is W_0=Id and both initial smoothings are infinite. The first iterate therefore minimizes the Frobenius norm over the feasible affine space. Subsequent iterates minimize the quadratic form induced by the current combined weight over that same space.

For positive spectral smoothing ε, the low-rank weight is the two-sided product operator Z↦LZR: in left and right singular coordinates its factors have multipliers min{ε/σ_i(X),1}, with multiplier 1 on zero/complementary directions. The row weight multiplies row i by min{δ²/||X_i||²,1}, interpreted as 1 on zero rows. The combined weight is their sum. The two smoothings update by running minima of the previous smoothing and the current second singular value / second largest row norm. We use r=s so the source's printed r/s index discrepancy in its spectral update has no effect. These are the source weights and initialization; no division by ambient dimension, smoothing floor or restart is introduced.

The only property of the weights needed here is immediate from these definitions: if the largest singular value does not exceed ε and every row norm does not exceed δ, both operators are identity on the entire matrix space, including at equality in the clipping rule.

#### 2. Explicit counterexample

**Theorem 1.** Let X*=E_11∈R^(4×2), and set

$$
\bar X=\frac1{25}\begin{pmatrix}8&0\\0&8\\6&0\\0&6\end{pmatrix},
\qquad H=X_* -\bar X.
$$

Let the self-adjoint operator M act on the four orthonormal coordinate matrices (E_11,E_22,E_31,E_42) by

$$
G=\begin{pmatrix}
242/425&49/100&12/25&12/25\\
49/100&69/50&-271/1200&-271/1200\\
12/25&-271/1200&4/3&59/180\\
12/25&-271/1200&59/180&4/3
\end{pmatrix},
$$

and by identity on the other four coordinate matrices, with no coupling between the two subspaces. Then M is positive semidefinite of rank seven. Choose any A:R^(4×2)→R^7 with A* A=M. Such a factor exists. It satisfies δ_(2,2)(A)<2/3, and X* is the unique feasible member of M_(1,1). Nevertheless, Algorithm 2.1 produces

$$
X^{(k)}=\bar X,\qquad \varepsilon_k=2/5,\qquad\delta_k=8/25
\quad(k\geq1),
$$

where δ_k denotes the sparsity smoothing, distinct from the RIP constant. Its squared error is ||X^(k)−X*||_F²=17/25.

**Proof: positivity and kernel.** Direct rational multiplication gives

$$
G h=0,\qquad h=(17,-8,-6,-6)^\mathsf T.
$$

Tail-coordinate interchange leaves G invariant. On the antisymmetric tail line its eigenvalue is 4/3−59/180=181/180>0. On the complementary symmetric three-dimensional subspace, use the orthonormal basis (e_1,e_2,(e_3+e_4)/√2). The leading 2×2 block B is positive definite because

$$
B_{11}=242/425>0,\qquad \det B=92767/170000>0.
$$

The inherited kernel vector has nonzero last coordinate. Writing the symmetric restriction as [[B,b],[b*,c]], its kernel equations imply c−b*B^(-1)b=0. Thus this restriction is positive semidefinite of rank two. Therefore G is positive semidefinite of rank three with kernel span{h}. Adding the four inactive identity coordinates gives rank(M)=7 and ker(A)=span{H}.

**Proof: strict RIP certificate.** For each pair i<j, put

$$
D^-_{ij}=(G_{ii}-1/3)(G_{jj}-1/3)-G_{ij}^2,
\quad
D^+_{ij}=(5/3-G_{ii})(5/3-G_{jj})-G_{ij}^2.
$$

All diagonal entries of G are strictly between 1/3 and 5/3. The exact determinants are:

| Pair | D^- | D^+ |
|---|---:|---:|
| 1,2 | 10703/1530000 | 113903/1530000 |
| 1,3 | 181/31875 | 12943/95625 |
| 1,4 | 181/31875 | 12943/95625 |
| 2,3 | 1433759/1440000 | 64159/1440000 |
| 2,4 | 1433759/1440000 | 64159/1440000 |
| 3,4 | 28919/32400 | 119/32400 |

Each is strictly positive, so every 2×2 principal block of G has spectrum strictly inside (1/3,5/3). Each physical row of the matrix contains exactly one active and one inactive coordinate. Hence the Gram restriction to any two-row support is, after coordinate permutation, its corresponding 2×2 block of G direct-summed with I_2. Any matrix supported on two rows automatically has rank at most two. On each such support all squared norm ratios lie strictly inside (1/3,5/3). The finitely many restricted unit spheres are compact, yielding a uniform strict margin and therefore δ_(2,2)(A)<2/3. One-row supports inherit this bound.

If two one-row feasible matrices differed, their difference would have at most two nonzero rows and would be annihilated by A, contradicting the positive lower RIP bound. Thus X* is unique in M_(1,1).

**Proof: exact initialized trajectory.** The feasible set is X*+span{H}. We have

$$
\|\bar X\|_F^2=8/25=\langle\bar X,X_*\rangle,
\qquad \langle\bar X,H\rangle=0.
$$

Consequently Xbar is the unique minimum-norm feasible point and hence the first iterate from W_0=Id. Its two columns are orthogonal, each of norm 2/5, so its two singular values are both 2/5. Its row norms are 8/25,8/25,6/25,6/25. The first finite smoothing update therefore gives ε_1=2/5 and δ_1=8/25. Both source weight operators are identity, and their sum is 2Id. The next weighted minimizer is again Xbar. Inductively, the iterate and both running minima remain unchanged. Finally ||H||_F²=17/25. This proves the theorem. ∎

The approximate exact joint RIP value, from the six pair spectra, is 0.6620555566. This decimal is diagnostic; the theorem uses only the rational strict 2/3 certificate above.

#### 3. A geometric obstruction for scalar partial-isometry sensing

**Proposition 2.** Let K be any linear subspace of R^(n_1×n_2), P the orthogonal projection onto K^⊥, B an isometry from K^⊥ into the measurement space, and A=√α BP for α>0. Let X* have exactly one nonzero row and ||X*||_F=1. Put X=P X*≠0, the prescribed minimum-norm first iterate. If the largest row norm of X is attained in at least two rows, then

$$\delta_{2,2}(A)\geq1/\sqrt2.$$

The rank/support orders are capped at ambient dimensions as usual. The tied-maximum assumption is precisely the first-step identity-row-weight condition for s=1 and positive smoothing. No assumption on dim(K) is made.

**Proof.** Relabel the target row as row 1. Let S=||X||_F²=<X,X*> >0. Since X* is a unit vector in the row-1 subspace, Cauchy–Schwarz gives ||X_1||≥S. A tie for the largest row norm supplies j≠1 with b=||X_j||≥||X_1||≥S. Let Z be supported on row j and equal there to X_j/b. Then (X*,Z) is an orthonormal pair, and its entire span has at most two rows and rank at most two. Compress αP−Id to this plane. Joint RIP bounds the norm of this symmetric compression by δ_(2,2)(A). Its first column is (αS−1,αb), because P is self-adjoint and P X*=X. Hence

$$
\delta_{2,2}(A)^2\geq(\alpha S-1)^2+\alpha^2b^2
\geq(\alpha S-1)^2+(\alpha S)^2\geq1/2.
$$

This proves the proposition. ∎

The bound is attained by a concrete flat-weight example. Set t=2−√2, c=√t/2, and

$$
U=\begin{pmatrix}\sqrt t&0\\0&\sqrt t\\\sqrt{1-t}&0\\0&\sqrt{1-t}\end{pmatrix},
\quad\bar X=cU,\quad X_*=E_{11},\quad H=X_*-\bar X.
$$

For P=P_(H^⊥) and α=1/(2−√2), take A=√α BP. Here U*U=I_2, ||Xbar||²=<Xbar,X*>=t/2 and the largest two row norms equal t/2; both singular values equal c. Thus the same initialized identity-weight induction yields perpetual stagnation, with ε_k=c and sparsity smoothing δ_k=t/2 for every k≥1. The largest two H-row energies sum to (1−t/2)²+t²/4, while ||H||²=1−t/2. Their ratio is q=2(√2−1). Cauchy–Schwarz on any two-row support gives the projection squared-norm interval [1−q,1]; truncating H to its first two rows attains the lower endpoint, and E_12 attains the upper endpoint. Scalar balancing α=2/(2−q) gives δ=q/(2−q)=1/√2. This verifies sharpness within the stated class.

Theorem 1 bypasses Proposition 2 by using a Gram that is not a scalar orthogonal projection. The proposition does not cover nonidentity row weights, later trapping mechanisms or general sensing metrics.

#### 4. Relation to prior work and limitations

The existing archive contribution CS-421-A1 [2] explains that target-order isometry need not give target uniqueness. Theorem 1 addresses a different obstruction: uniqueness is present, doubled-order RIP is strict, and the specified initialized algorithm still fails.

Failure of adaptive IRLS under uniqueness/null-space assumptions is already known for other recurrences. Aravkin–Burke–He [3], especially Section IV, gives such examples for smooth inverse-square-root vector weights, a differently scaled smoothing schedule and selected starting states. We do not claim the first IRLS failure under uniqueness. Those results do not directly imply the exact clipped spectral-product-plus-row-square recurrence and prescribed initialization treated here.

Cai–Zhang [4], Theorem 2.2 and its construction, already use scalar projection sensing and restricted energy balancing in sharp convex-recovery RIP examples. Those construction devices are established. Their convex vector/rank-only recovery thresholds are not thresholds for this joint-structure algorithm. In fact Theorem 1's Xbar has nuclear norm 4/5<1=||X*||_* but row-norm sum 28/25>1. The certified RIP class here is the intersection of rank≤2 and row-support≤2, not rank≤2 on arbitrary supports.

A bounded primary-literature search found no directly matching exact-method certificate, but this is not a proof of originality. The main content is the explicit exact trajectory, rational restricted-spectrum certificate and limited geometric obstruction. The open question is not resolved: no universal optimal threshold, global guarantee for smaller RIP, or stable wrong attractor under perturbation is proved. A separate local-basin investigation and a source-lemma correction are intentionally not claimed in this submission.

#### 5. Verification

All displayed arithmetic can be checked over the rationals, except for elementary radicals in the sharpness example. Exact local checks verified Gh=0, PSD/rank/kernel, all six strict lower/upper determinant certificates, orthogonality and error norms. A separate fresh-context model review checked the algebra, quantifiers, initialization, complete weight operators and running-min induction against the primary source. The current High-model check is documented in the model-evidence field below. No formal proof-assistant or independent human verification is claimed. The proof above is self-contained; it does not depend on access to a private code repository, numerical optimization or a floating-point solver.
