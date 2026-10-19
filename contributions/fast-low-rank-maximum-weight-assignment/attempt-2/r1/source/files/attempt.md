# Literature report on TOP-30003992

**A published conditional answer to the general-rank target.** Basu's original problem [1, p. 3012] observes rank-one sorting in $O(n\log n)$, asks about rank two, and proposes $O(nr^2\log n)$ for rank $r$. The current archive statement [3] retains that ambition.

Rohatgi [2, p. 12:3] explicitly discusses Basu's question immediately before Theorem 2 and answers it negatively under the Orthogonal Vectors Conjecture (OVC). In the theorem's notation, there is a constant $c>0$ such that an $O(n^{2-\varepsilon})$ exact minimum-assignment algorithm, for some constant $\varepsilon>0$ and rank function $r(n)=\Omega(c^{\log^* n})$, would refute OVC. Thus the obstruction already occurs at a slowly growing, nonconstant rank; a uniform $O(nr^2\log n)$ bound would be truly subquadratic in that regime. Negating the weight matrix converts maximum to minimum assignment and preserves rank.

**Representation and computational scope.** Appendix A, Theorem 18, reduces bichromatic closest pair to low-rank minimum assignment using transformed, polynomially bounded integer coordinates and **squared** Euclidean costs. For transformed coordinates $a_i,b_j\in\mathbb R^D$, the identity

$$M_{ij}=\lVert a_i\rVert^2+\lVert b_j\rVert^2-2a_i^Tb_j$$

provides a factorization with $D+2$ columns. The geometric construction therefore supplies factors; this is not merely an obstruction caused by reading an arbitrary dense matrix. The appendix's proof displays a polynomial dependence on dimension, which must be retained in runtime transfers. The conclusion uses the paper's fine-grained computational assumptions and bounded-coordinate reductions. It does not establish hardness for arbitrary unit-cost operations on unrestricted reals.

The source defines assignment by its optimum **cost**. An optimizing permutation also supplies that cost by summing its selected entries with the given factors. This should be distinguished from the separate entry-query matching-output argument in CS-354-A1 [4]. That earlier exploration discusses rank-one access and rank-two coordinate sorting, but does not cite Rohatgi or record this OVC obstruction.

**Suggested archive correction.** Add Rohatgi's Theorem 2 and Appendix A as a known conditional negative answer to the uniform general-rank target, with the representation and model qualifications above. Keep the fixed-rank-two exact question separate: this theorem does not resolve it, and this report does not certify its exhaustive current literature status. The mathematical result is Rohatgi's; the contribution here is correction of the archive's literature record, with no claim of new hardness, a new algorithm, or full unconditional disproof.
