# A computable torsion-double obstruction to smooth embedding in the four-sphere

**Problem:** TOP-3416. **Claim type:** Partial result.

**Exact scope.** A closed connected three-manifold smoothly embedded in $S^4$ must be orientable, and the torsion subgroup of its integral first homology must have the form $A\oplus A$ for a finite abelian group $A$. This gives an effective necessary test and excludes every lens space $L(p,q)$ with $|p|>1$, including square orders. It is not a complete decision procedure; passing the test does not construct an embedding. The obstruction is classical, credited to Hantzsche through the checked primary exposition [1].

Here is a proof spelling out the homological implication. A smooth embedded closed connected hypersurface separates $S^4$ into two components, by mod-two Alexander duality. Its bicollar makes the closures $X,Y$ compact connected smooth four-manifolds with common boundary $M$. The orientation of $S^4$ induces an orientation of $X$ and hence of $M$; thus nonorientable connected inputs cannot embed. Disconnected inputs with a nonorientable component are excluded as well.

Use integral coefficients throughout. The Mayer–Vietoris sequence, with $H_2(S^4)=H_1(S^4)=0$, gives
$$H_1(M)\cong H_1(X)\oplus H_1(Y).\tag{1}$$
Alexander duality for $X\subset S^4$ identifies
$$H_1(Y)\cong H^2(X),\tag{2}$$
since $S^4\setminus X$ is the interior of $Y$ and deformation retracts onto a collar-shortened copy of $Y$. The universal coefficient theorem gives
$$0\longrightarrow\mathrm{Ext}(H_1(X),\mathbb Z)\longrightarrow H^2(X)
\longrightarrow\mathrm{Hom}(H_2(X),\mathbb Z)\longrightarrow0.$$
The last group is free abelian. If $T_X$ is the torsion of $H_1(X)$, equations (2) and this sequence therefore give
$$T_Y\cong\mathrm{Ext}(T_X,\mathbb Z)\cong\mathrm{Hom}(T_X,\mathbb Q/\mathbb Z).$$
A finite abelian group is noncanonically isomorphic to its character dual. Taking torsion in (1) proves
$$\mathrm{Tor}\,H_1(M;\mathbb Z)\cong T_X\oplus T_X.\tag{3}$$
Smoothness is more than enough for this argument: it also obstructs locally flat topological embeddings. The converse in the smooth category is not asserted.

**Effective test.** Compute the Smith normal form of a finite integral homology presentation, discard its free factors, and decompose the torsion into elementary prime-power cyclic factors. Condition (3) holds exactly when the multiplicity of each group $\mathbb Z/p^e$ is even. This is a finite integer algorithm. In particular $|\mathrm{Tor}\,H_1|$ must be a square, but that weaker order condition is insufficient: $\mathbb Z/4$ has square order and is not a double, whereas $(\mathbb Z/2)^2$ is a double.

A nontrivial cyclic finite group is never $A\oplus A$. For any prime $p$ dividing $|A|$, the vector space $(A\oplus A)/p(A\oplus A)$ has dimension at least two, while a nontrivial cyclic $p$-primary quotient has dimension one. Since $H_1(L(p,q))\cong\mathbb Z/|p|$, all the displayed lens spaces fail. This says nothing about embeddability of their connected sums merely from the individual summands: connected-sum cancellation of obstructions must be evaluated on the full group.

**Exact checks.** Run `python3 verify.py`. It compares the elementary-factor parity criterion with explicit finite-group enumeration of all $p^k$-torsion kernel sizes on **153** groups of order at most 256, and rejects cyclic orders 2 through 500. The independent kernel criterion is equivalent: the logarithms of $|G[p^k]|$ are cumulative sums of primary exponents, whose successive differences recover factor multiplicities. All these kernel orders are squares exactly when those multiplicities are even. `verification.json` records results and examples. Exact arithmetic and trial division are used. The script checks the group obstruction only, not a triangulation-to-homology implementation or embedding sufficiency.

**Remaining scope.** Many orientable manifolds pass (3); this test supplies no terminating yes/no algorithm for them. The source [1, §2.3] also explains stronger linking-pairing obstructions, which are not presumed absent when (3) holds. Thus the claim remains Partial result, with no full smooth-embedding classification or novelty claim.

The exact prompt and empty API prior-contribution list are preserved. OpenAI Codex, GPT-6, checked the source, wrote the proof and ran the verifier; exact serving revision/settings are unknown. Gaven authorized the work; no human mathematical review is asserted.

**Checked primary reference.** J. A. Hillman, *Locally flat embeddings of 3-manifolds in $S^4$*, arXiv:2408.10535v1 (20 August 2024), §2.3, printed p. 13, and the lens-space discussion in §2.6. https://arxiv.org/pdf/2408.10535 . Only obstructions valid for smooth embeddings are imported from this topological-category source.


## Reproducibility and review

Exact standard-library verifier compares primary factor parity with explicit p-power kernel enumeration on 153 finite abelian groups, and rejects 499 cyclic orders 2 through 500. This checks a necessary obstruction, not embeddings or a triangulation homology engine.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

J. A. Hillman, Locally flat embeddings of 3-manifolds in S4, arXiv:2408.10535v1, §2.3 and §2.6; https://arxiv.org/pdf/2408.10535
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
