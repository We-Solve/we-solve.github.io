# Partial result on prb_964c25bbe7a84bfd85e0056db18fa4f2

## 0. Statement and conventions

The problem statement is kept unchanged. A finite family $\mathcal F$ of finite sets is *union-closed* if $A\cup B\in\mathcal F$ for all $A,B\in\mathcal F$. It is *nondegenerate* if $U(\mathcal F):=\bigcup\mathcal F\neq\varnothing$. Frankl's conjecture asserts that for every nondegenerate union-closed $\mathcal F$,
$$\exists x\in U(\mathcal F):\qquad d(x):=\#\{A\in\mathcal F: x\in A\}\ \ge\ \tfrac12|\mathcal F|.$$
The claims below cover only the stated special cases. They are not a proof of the conjecture.

Notation:
- $m=|\mathcal F|$ and $D(\mathcal F)=\max_x d(x)$.
- Two elements $x,y\in U(\mathcal F)$ are *twins* if they lie in exactly the same members. $n=n(\mathcal F)$ is the number of twin classes.
- $\mathcal F$ is *separating* if it has no twins, i.e. $n=|U(\mathcal F)|$.
- $y$ *dominates* $x$ if every member containing $x$ also contains $y$.
- $\psi:=\frac{3-\sqrt5}{2}\approx0.381966$. Note that $\frac{2}{1-\psi}=1+\sqrt5$.

**Input (E)** [AHS, Theorem 2 with Claim 4; also CL, Sa]. Every finite union-closed family $\mathcal G$ with at least one nonempty member has an element contained in at least $\psi|\mathcal G|$ members of $\mathcal G$.

## 1. Results

**Theorem 1.** Let $\mathcal F$ be a nondegenerate finite union-closed family with $m$ members and $n$ twin classes. If $m\le(1+\sqrt5)(n-1)$, then some element lies in at least $m/2$ members of $\mathcal F$.

**Theorem 2.** Let $\gamma\in(0,1]$ be such that every finite union-closed family $\mathcal G$ with a nonempty member has an element in at least $\gamma|\mathcal G|$ members. Then every nondegenerate finite union-closed $\mathcal F$ with $m$ members and $n$ twin classes satisfies
$$D(\mathcal F)\ \ge\ \min\Big\{\,m-1,\ \frac{\gamma m+n-1}{1+\gamma}\Big\}.$$
Consequently, if $m\le \frac{2}{1-\gamma}(n-1)$ then $D(\mathcal F)\ge m/2$.

**Corollary 3 (sparse families beat the entropy constant).** For every nondegenerate union-closed $\mathcal F$ with $m\ge2$:
$$\frac{D(\mathcal F)}{m}\ \ge\ \min\Big\{1-\tfrac1m,\ \frac{\psi+(n-1)/m}{1+\psi}\Big\}.$$
The right-hand side is $>\psi$ whenever $m<\frac{n-1}{\psi^2}=\frac{7+3\sqrt5}{2}(n-1)\approx6.854(n-1)$. For example, $m\le4(n-1)$ gives $D\ge\frac{\psi+1/4}{1+\psi}m\approx0.457\,m$.

**Corollary 4 (lattice form).** Let $L$ be a finite lattice with $|L|\ge2$, and let $M(L)$ be its set of meet-irreducible elements (the top excluded). If $|L|\le(1+\sqrt5)(|M(L)|-1)$, then some $\mu\in M(L)$ has $|{\downarrow}\mu|\le|L|/2$. Dually, if $|L|\le(1+\sqrt5)(|J(L)|-1)$, then some join-irreducible $j$ has $|{\uparrow}j|\le|L|/2$.

## 2. Proofs

**Reduction to separating families.** Let $x,y$ be twins. Deleting $y$ from every member is injective on $\mathcal F$: two members with the same image have the same membership of $x$, hence of $y$. The deletion also preserves union-closure, $m$, and the frequencies of all remaining elements. Repeating gives a separating family on $n$ elements with the same $m$ and the same $D$. So we may assume $\mathcal F$ is separating with $U(\mathcal F)=\{x_1,\dots,x_n\}$, labelled so that $d(x_1)\le\dots\le d(x_n)$. Then $D=d(x_n)$.

**Step 1 (Falgas-Ravry [FR, Lemmas 1–2]).** For $1\le i<j\le n$, some member contains $x_j$ but not $x_i$.

*Proof.* Otherwise $\{A: x_j\in A\}\subseteq\{A:x_i\in A\}$, so $d(x_j)\le d(x_i)\le d(x_j)$. Then the two occurrence sets are equal, which contradicts separation. Ties in the labelling are harmless.

Define the following sets:
- $A_0:=U(\mathcal F)$. It belongs to $\mathcal F$ as the union of all members.
- For $1\le i\le n-1$, $A_i:=\bigcup\{A\in\mathcal F: x_i\notin A\}$. The union is over a nonempty collection by Step 1 with $j=n$, so $A_i\in\mathcal F$.

These sets have three properties:
- (P1) $x_i\notin A_i$ for $i\ge1$.
- (P2) $\{x_{i+1},\dots,x_n\}\subseteq A_i$ for $0\le i\le n-1$. For $i\ge1$, each witness from Step 1 is one of the sets in the union.
- (P3) $A_0,\dots,A_{n-1}$ are distinct. For $i<j$ we have $x_j\in A_i$ and $x_j\notin A_j$.

So $\mathcal S:=\{A_0,\dots,A_{n-1}\}$ consists of $n$ distinct members, each containing $x_n$.

**Step 2 (Y. Hu's domination lemma [Hu, Lemma 1]).** For $1\le i\le n-1$ let $s(i):=\#\{0\le j\le n-1: x_i\in A_j\}$. Then $s(i)\le n-1$. Moreover, every $x_i$ with $1\le i\le n-1$ is dominated by some $x_k$ with $1\le k\le n-1$ and $s(k)=n-1$.

*Proof.* By (P2), $x_i\in A_j$ for every $j<i$, including $j=0$. By (P1), $x_i\notin A_i$. So $s(i)\le n-1$, with equality unless $x_i\notin A_j$ for some $j$ with $i<j\le n-1$.

Suppose $x_i\notin A_j$ for such a $j$. Then no member contains $x_i$ without $x_j$, since such a member would lie inside $A_j$. So $x_j$ dominates $x_i$. If $s(j)<n-1$, repeat the argument with $j$. The index strictly increases and stays $\le n-1$, so the process stops. Note that $s(n-1)=n-1$ by the first sentence of this proof. Since domination is transitive, the final $x_k$ dominates $x_i$.

**Step 3 (proof of Theorem 2).** Let $\mathcal B:=\{A\in\mathcal F: x_n\notin A\}$. It is union-closed, $|\mathcal B|=m-D$, and $\mathcal B\cap\mathcal S=\varnothing$ because every set in $\mathcal S$ contains $x_n$.

*Case (i): $\mathcal B$ has no nonempty member.* Then $|\mathcal B|\le1$, so $D\ge m-1$.

*Case (ii): $\mathcal B$ has a nonempty member.* Let $\beta:=\max_x\#\{A\in\mathcal B:x\in A\}\ge1$. It is attained at some $x_i$ with $i\le n-1$, because $x_n$ lies in no member of $\mathcal B$. Take $x_k$ as in Step 2 (if $s(i)=n-1$, take $k=i$).

Since $x_k$ dominates $x_i$, we get $\#\{A\in\mathcal B: x_k\in A\}\ge\beta$. Because $\mathcal B$ and $\mathcal S$ are disjoint subfamilies of $\mathcal F$,
$$D\ \ge\ d(x_k)\ \ge\ \#\{A\in\mathcal B:x_k\in A\}+s(k)\ \ge\ \beta+n-1.$$
The hypothesis on $\gamma$, applied to $\mathcal B$, gives $\beta\ge\gamma|\mathcal B|=\gamma(m-D)$. Hence $(1+\gamma)D\ge\gamma m+n-1$.

*Consequence.* Suppose $m\le\frac{2}{1-\gamma}(n-1)$. Then $n\ge2$, and $m\ge n\ge2$ by (P3), so in Case (i) $D\ge m-1\ge m/2$. In Case (ii), $n-1\ge\frac{(1-\gamma)m}{2}$, hence
$$D\ \ge\ \frac{\gamma m+\frac{(1-\gamma)m}{2}}{1+\gamma}=\frac m2.$$
This proves Theorem 2. $\square$

**Proof of Theorem 1.** Apply Theorem 2 with $\gamma=\psi$, which is valid by (E); note that $\frac{2}{1-\psi}=1+\sqrt5$. $\square$

**Proof of Corollary 3.** Divide Theorem 2 (with $\gamma=\psi$) by $m$. Then $1-\frac1m\ge\frac12>\psi$ for $m\ge2$, and $\frac{\psi+t}{1+\psi}>\psi\iff t>\psi^2$. $\square$

**Proof of Corollary 4.** For $a\in L$ put $A(a):=\{\mu\in M(L): a\not\le\mu\}$, and let $\mathcal F_L:=\{A(a):a\in L\}$.
- $A(a\vee b)=A(a)\cup A(b)$, so $\mathcal F_L$ is union-closed.
- $a=\bigwedge\{\mu\in M(L):a\le\mu\}$, so $a\mapsto A(a)$ is injective and $|\mathcal F_L|=|L|$.
- $U(\mathcal F_L)=A(\hat1)=M(L)\neq\varnothing$, since $|L|\ge2$.
- $\mathcal F_L$ is separating. If $\mu\neq\nu$, we may assume $\nu\not\le\mu$; then $A(\nu)$ contains $\mu$ but not $\nu$.
- The frequency of $\mu$ is $|L|-|{\downarrow}\mu|$.

Theorem 1 with $n=|M(L)|$ gives the claim. The dual statement follows by applying this to the dual lattice. $\square$

## 3. Comparison and remarks

1. **Previous bounds.** Falgas-Ravry's sets give $D\ge n$, hence the conjecture for separating families with $m\le2n$ (recorded in [BS, Theorem 23] and [Ma, Lemma 1.3]). Maßberg [Ma, Theorem 2.1] proved $m\le2\big(n+\frac{n}{\log_2n-\log_2\log_2n}\big)$; inequality (13) of his proof is slightly stronger. Both are $2n+O(n/\log n)$.
   - The new bound $(1+\sqrt5)(n-1)$ exceeds the bound from Maßberg's (13) for every $n\ge34$. Indeed, evaluating his minimum at $k=5$ bounds it by $\frac83n+16$, and $(1+\sqrt5)(n-1)>\frac83n+16$ for $n\ge34$.
   - By direct evaluation (my own computation), it also exceeds (13) for $23\le n\le33$, and exceeds his closed form for all $n\ge16$.
   - The conjecture is also known for $n\le12$ and for $m\le50$, as stated in [Ma] and [BS] (I did not re-check those sources). Theorem 1 therefore covers families not covered by $m\le50$ or by Maßberg's (13) for every $n\ge27$.
2. **Hu's reduction.** Hu's Theorem 2 [Hu; BS, Theorem 24] says that a factor $c>2$ implies a universal constant $\frac{c-2}{2(c-1)}$. For $c=1+\sqrt5$ this is $\approx0.276<\psi$, so there is no circularity and no new universal constant. Theorem 2 goes the other way, $\gamma\mapsto\frac{2}{1-\gamma}$.
3. **Limit of the method.** Step 3 is Hu's minimal-counterexample argument [Hu, Theorem 1] with the induction hypothesis replaced by (E). With $\gamma=\frac12$ (Frankl's conjecture for $\mathcal B$), Theorem 2 gives $4(n-1)$, consistent with the bound $\approx4n$ for *minimal* counterexamples [Hu, Theorem 1; Roberts–Simpson as cited there]. Any rigorous improvement of the universal constant improves Theorem 1 automatically. Jiang [Ji] claims $0.38288525$ via a computer-assisted proof (not checked here); it would give a factor $\approx3.241$.
4. **Novelty.** On 2026-10-19 I searched arXiv and the web, and read the surveys [BS] and [Ca], the entropy papers [Gi, AHS, CL, Sa], and [Ma, Hu, FR]. I found no statement of Theorem 1 or Theorem 2. The ingredients are all known, so the observation may be folklore.

## 4. Self-audit

Steps checked:
- ties in the labelling (Step 1);
- that each $A_i$ is well defined and lies in $\mathcal F$;
- distinctness of $\mathcal S$ and $\mathcal S\subseteq\{A: x_n\in A\}$;
- termination of the domination chain, using $s(n-1)=n-1$;
- that the maximiser of $\beta$ is not $x_n$;
- disjointness of $\mathcal B$ and $\mathcal S$;
- the hypotheses of (E) for $\mathcal B$ (finite, union-closed, with a nonempty member; Case (i) handles the rest);
- the trivial cases $n=1$ (Theorem 1 is vacuous) and $m\le2$;
- that the twin reduction preserves $m$ and $D$.

The conclusion is the non-strict $\ge m/2$, as in the statement. The inequalities used are tight only if $\mathcal B$ is extremal for (E), so going beyond the factor $\frac{2}{1-\gamma}$ needs more information about $\mathcal B$ than these steps use.

## 5. What remains open

- Frankl's conjecture in general.
- Separating families with $m>(1+\sqrt5)(n-1)$.
- Whether the factor can be pushed beyond $\frac{2}{1-\gamma}$, e.g. to $4$, without first improving the universal constant $\gamma$.

## References

- [AHS] R. Alweiss, B. Huang, M. Sellke, Improved lower bound for Frankl's union-closed sets conjecture, Electron. J. Combin. 31(3) (2024), P3.35; arXiv:2211.11731.
- [Ca] S. Cambie, Progress on the union-closed conjecture and offsprings in winter 2022–2023, arXiv:2306.12351.
- [BS] H. Bruhn, O. Schaudt, The journey of the union-closed sets conjecture, Graphs Combin. (2015), doi:10.1007/s00373-014-1515-0; arXiv:1309.3297.
- [CL] Z. Chase, S. Lovett, Approximate union closed conjecture, arXiv:2211.11689.
- [FR] V. Falgas-Ravry, Minimal weight in union-closed families, Electron. J. Combin. 18 (2011), #P95.
- [Gi] J. Gilmer, A constant lower bound for the union-closed sets conjecture, arXiv:2211.09055.
- [Hu] Y. Hu, On the union-closed sets conjecture, arXiv:1706.06167.
- [Ji] Y. Jiang, Entropy bounds and global couplings for union-closed families, arXiv:2609.08291.
- [Ma] J. Maßberg, The union-closed sets conjecture for small families, arXiv:1508.05718.
- [Sa] W. Sawin, An improved lower bound for the union-closed set conjecture, arXiv:2211.11504.


---

**Editorial correction (19 October 2026).** In the comparison with Maßberg’s inequality (13), the coverage claim above has been corrected from “every $n\ge23$” to “every $n\ge27$”. The larger real threshold for $23\le n\le26$ does not admit an additional integer family size: the corresponding integer bounds are respectively 71, 74, 77 and 80 under both estimates. The main theorems and the real-threshold comparison are unchanged. The original submission is retained in the source evidence.
