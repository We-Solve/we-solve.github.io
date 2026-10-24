# A quantified modern unit-distance lower bound and an exact lattice counting lemma

**Problem:** TOP-1217

**Claim type:** Literature report

**Exact scope:** Reports Sawin’s arXiv:2605.20579v1 Theorem 1 with its unbounded-sequence quantifier and ordered-pair convention, transfers it to unordered pairs, and proves an exact finite lattice representation formula. Does not determine $u(n)$.

The prompt defines $u(n)$ using unordered pairs. Sawin's Theorem 1 in arXiv:2605.20579v1 (20 May 2026) states that for arbitrarily large integers $n$, there is an $n$-point planar set with at least $n^{1.014114}/C$ ordered unit-distance pairs, for an absolute constant $C$. This is a preprint theorem credited to its author. It yields
\[
 u(n)\ge \frac{n^{1.014114}}{2C}
\]
along an unbounded sequence of $n$, since each unordered pair has exactly two orientations. It does not assert this precise bound for every sufficiently large $n$. The report does not independently reconstruct the number-field tower argument.

One useful logical consequence requires no further number theory. A universal estimate $u(n)=n^{1+o(1)}$ would imply, for each $\epsilon>0$, $u(n)\le n^{1+\epsilon}$ for all sufficiently large $n$. Choose $0<\epsilon<0.014114$. On the theorem's sequence, $n^{1.014114}/(2C)>n^{1+\epsilon}$ eventually, a contradiction. This refutes that old proposed growth form, while leaving the exact extremal problem open.

For a self-contained finite construction and implementation check, let $q,m$ be positive integers, and rescale the $m\times m$ integer grid by $1/\sqrt q$. Its unit distances correspond exactly to integer displacement vectors $(a,b)$ with $a^2+b^2=q$. Their unordered number is
\[
 U(m,q)=\frac12\sum_{\substack{a,b\in\mathbb Z\\a^2+b^2=q}}
 \max(0,m-|a|)\max(0,m-|b|).
\]
For a fixed displacement, the product counts valid ordered starting positions independently in the two coordinate directions. Distinct displacements specify distinct ordered pairs; negation reverses each pair. This proves the formula, including horizontal and vertical vectors and boundary exclusions.

As a concrete reproducible example, $q=65$ has the sixteen signed and coordinate-swapped representations obtained from $(1,8)$ and $(4,7)$. For $m\ge9$ the formula specializes to
\[
 U(m,65)=4\big((m-1)(m-8)+(m-4)(m-7)\big).
\]
The integer checker verifies this formula against direct pairwise squared-distance enumeration for $m=9,10,16$ and checks several other radicands. It certifies finite lower bounds for $u(m^2)$, not the preprint's superlinear exponent. The separation between these two kinds of evidence prevents a small lattice computation from being presented as a verification of the asymptotic theorem.

**Remaining task.** Determine the extremal function, or close the gap between known lower and upper bounds. The source's discussion of the classical $O(n^{4/3})$ upper bound is contextual; no claim that this report checks every current upper-bound paper is made.


## Reproducibility and review

Exact grid displacement counts compared with all point pairs for specified m and q; asymptotic theorem is credited source-based, not computationally reverified.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1217.txt
https://arxiv.org/html/2605.20579v1
Exact source versions, statements and uses are described in report.md and source_notes.md.
