# Attributed submission: Attempt: TOP-55

Source: https://github.com/We-Solve/research/issues/438

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-55

### Claim

Partial result

### Exact scope

**Proved (Theorem 1).** Every nonempty finite union-closed family $\mathcal F$ of nonempty sets with height $H(\mathcal F)\le5$ has an element lying in more than $|\mathcal F|/2$ members. Here $H(\mathcal F)$ is the largest number of members in a strict chain $A_1\subsetneq\dots\subsetneq A_s$.

**Consequence for the stated problem (Corollary 2).** Frankl's conjecture, in exactly the stated form, holds for every finite union-closed family $\mathcal A$ with $\bigcup\mathcal A\ne\varnothing$ whose nonempty members contain no strict chain of more than five sets, i.e. $H(\mathcal A\setminus\{\varnothing\})\le5$. Equivalently: for all such families with $\varnothing\in\mathcal A$ and $H(\mathcal A)\le6$, and all with $\varnothing\notin\mathcal A$ and $H(\mathcal A)\le5$.

**Assumptions.** None. The proof is self-contained and elementary; it re-proves the four auxiliary lemmas it takes from Tian's preprint [T]. No computer calculation is used in the proof.

**Relation to earlier work.** Tian [T] (arXiv preprint, August 2026) proved the empty-set-free statement for height at most four and gave structural results for a smallest height-five counterexample, leaving height five open ([T], Remark 1.4 and Section 8). Theorem 1 settles height five. Since it contains the height-four case, it also gives an independent proof of [T, Theorem 1.1]. The new ingredients are: every co-singleton is a member of a minimal counterexample (extending [T, Theorem 4.1] from critical elements to all elements); the pair closures form a linear space whose lines of size $\ge3$ all have Tian's three-trace normal form; a sharp size bound for union-closed families of height three (Lemma 4.1); and a counting argument at a point lying on the fewest lines (Theorem 5.2). A literature search on 2026-10-20 found no other proof of the height-five case.

**Still open.** Frankl's conjecture for families whose nonempty members contain a strict chain of six or more sets, and the conjecture in general. Section 8 explains where the method uses height five.

**Verification.** Checked by an independent Claude Fable 5.1 instance with no access to the authoring conversation (details in the eligibility field). No person has checked the proof.


### Write-up

## 0. Statement and result

The problem statement is kept unchanged. A finite family $\mathcal F$ of finite sets is *union-closed* if $A\cup B\in\mathcal F$ for all $A,B\in\mathcal F$. Frankl's conjecture asserts that if $\bigcup\mathcal F\neq\varnothing$, then some $x\in\bigcup\mathcal F$ lies in at least $|\mathcal F|/2$ members. This contribution proves the conjecture for families of bounded height only. It is not a proof of the conjecture.

The *height* $H(\mathcal F)$ is the largest $s$ such that some members satisfy $A_1\subsetneq A_2\subsetneq\dots\subsetneq A_s$.

**Theorem 1.** Let $\mathcal F$ be a nonempty finite union-closed family of nonempty sets with $H(\mathcal F)\le 5$. Then some element of $U=\bigcup\mathcal F$ lies in more than $|\mathcal F|/2$ members of $\mathcal F$.

**Corollary 2.** Let $\mathcal A$ be a finite union-closed family with $\bigcup\mathcal A\neq\varnothing$ and $H(\mathcal A\setminus\{\varnothing\})\le5$ (for example $\varnothing\in\mathcal A$ and $H(\mathcal A)\le6$). Then some element lies in at least $|\mathcal A|/2$ members of $\mathcal A$.

*Proof of Corollary 2.* $\mathcal F:=\mathcal A\setminus\{\varnothing\}$ is a nonempty union-closed family of nonempty sets with the same union and the same frequencies. If $\varnothing\notin\mathcal A$, Theorem 1 applies directly. Otherwise Theorem 1 gives an element in more than $(|\mathcal A|-1)/2$ members, hence, by integrality, in at least $|\mathcal A|/2$ members. (A chain of nonempty members extends downwards by $\varnothing$, so $H(\mathcal A)\le6$ implies $H(\mathcal A\setminus\{\varnothing\})\le5$.) $\square$

**Notation.** $f(x)=\#\{A\in\mathcal F:x\in A\}$ is the *frequency* of $x$. For a member $A$, ${\downarrow}A=\{B\in\mathcal F:B\subseteq A\}$, which is union-closed with maximum $A$. The *up-rank* $u(A)$ is the largest number of members in a chain $A=B_1\subsetneq\dots\subsetneq B_u$, so $u(U)=1$.

**Fact 0.** If $H(\mathcal F)\le5$ and $u(A)=u$, then $H({\downarrow}A)\le 6-u$. Indeed, a chain in ${\downarrow}A$ may be assumed to end at $A$ (adding $A$ only lengthens it); joining it at $A$ to a chain of $u$ members above $A$ gives a chain of $h+u-1\le5$ members.

## 1. A minimal counterexample

Assume Theorem 1 fails. Among all counterexamples (nonempty union-closed families of nonempty sets of height $\le5$ in which no element lies in more than half of the members), choose $\mathcal F$ with $|\mathcal F|$ minimal and, subject to that, $n=|U|$ minimal. A nonempty union-closed proper subfamily of $\mathcal F$ has height $\le5$ and fewer members, so it is not a counterexample.

**Lemma 1.1** ([T, Lemmas 2.1–2.3]).
(a) $\mathcal F$ is *separating*: no two distinct elements lie in exactly the same members.
(b) $|\mathcal F|=2t$ for an integer $t\ge2$, $f(x)\le t$ for every $x$, and the set $K=\{x: f(x)=t\}$ of *critical* elements has at least three elements.
(c) For $a\in U$ let $C_a$ be the union of the members avoiding $a$. Then $C_a$ is the largest member avoiding $a$, and $C_a\ne C_b$ for $a\neq b$.

*Proof.* (a) If $x\ne y$ lie in the same members, delete $y$ from every member. Distinct members stay distinct, and no member becomes empty (a member containing $y$ contains $x$). The new family is union-closed, its height is not larger (the deletion is injective and monotone), and the frequencies of the remaining elements are unchanged. It is a counterexample on a smaller ground set, contradicting the choice of $\mathcal F$.

(b) $|\mathcal F|\ge2$, since a one-member family $\{A\}$ is not a counterexample. If $|\mathcal F|=2t+1$, then every frequency is at most $t$. Removing an inclusion-minimal member $A_0$ keeps the family union-closed (two members with union $A_0$ would both equal $A_0$), so it gives a smaller counterexample. Hence $|\mathcal F|=2t$ and $f\le t$. If $t=1$, the two members are nested and the elements of the smaller one lie in both, so $t\ge2$.

$\mathcal F\setminus\{A_0\}$ is not a counterexample, so some $x$ has frequency at least $t$ in it. Then $f(x)=t$ and $x\notin A_0$. Let $A_x$ be inclusion-minimal among the members containing $x$. The family $\mathcal F\setminus\{A_0,A_x\}$ is union-closed. A union equal to $A_0$ is excluded as before. In a union equal to $A_x$, one of the two pieces contains $x$ and lies inside $A_x$, so it equals $A_x$. This family has $2t-2\ge2$ members and is not a counterexample, so some $y$ has $f(y)=t$ and $y\notin A_0\cup A_x$. Let $A_y$ be minimal among the members containing $y$. The same argument for $\mathcal F\setminus\{A_x,A_y\}$ gives a third element $z$ with $f(z)=t$ and $z\notin A_x\cup A_y$.

(c) Since $f(a)\le t<2t$, some member avoids $a$, so $C_a\in\mathcal F$, and it is the largest member avoiding $a$. If $a\ne b$, then by (a) some member contains exactly one of them, say $a\in A$ and $b\notin A$. Then $A\subseteq C_b$, so $a\in C_b\setminus C_a$. $\square$

**Lemma 1.2** ([T, Lemma 3.1]). A union-closed family of nonempty sets with maximum member $T$ and height at most $2$ has at most $|T|+1$ members.

*Proof.* Two distinct proper members $X,Y$ are incomparable (otherwise $X\subsetneq Y\subsetneq T$) and satisfy $X\cup Y=T$ (otherwise $X\subsetneq X\cup Y\subsetneq T$). So the sets $T\setminus X$, for $X$ proper, are nonempty and pairwise disjoint subsets of $T$. $\square$

## 2. Every co-singleton is a member

Say that $y$ *dominates* $x$ if every member containing $x$ contains $y$; equivalently $x\notin C_y$. Domination is transitive, and by Lemma 1.1(a) it is antisymmetric, so it is a partial order on $U$. An element is *undominated* if no other element dominates it.

**Lemma 2.1.** $U\setminus\{s\}\in\mathcal F$ for every $s\in U$; that is, $C_s=U\setminus\{s\}$. Moreover, for all distinct $a,b$, at least $n-1$ members avoid both $a$ and $b$, and the largest such member $T_{ab}$ has $u(T_{ab})=3$.

*Proof.* **Step 1.** Every maximal member $Q$ of $\mathcal F\setminus\{U\}$ equals $U\setminus\{s\}$ for some $s$. For each $s\notin Q$ we have $Q\subseteq C_s\ne U$, so $C_s=Q$ by maximality. Two such $s$ would have equal $C_s$, contradicting Lemma 1.1(c).

**Step 2.** Let $s\neq s'$ be undominated. Then every $C_v$ with $v\ne s$ contains $s$, and likewise for $s'$. So $U$ and the members $C_v$, $v\notin\{s,s'\}$, are $n-1$ distinct members containing both $s$ and $s'$ (Lemma 1.1(c)). The number of members avoiding both is $2t-f(s)-f(s')+\#\{A: s,s'\in A\}\ge n-1$, because $f(s),f(s')\le t$. Let $T$ be the largest of them.

If $u(T)\ge4$, then ${\downarrow}T$ has height at most $2$ (Fact 0), and $|T|\le n-3$ (a chain of four members from $T$ to $U$ needs $|U\setminus T|\ge3$). Lemma 1.2 then gives at most $n-2$ members avoiding $s$ and $s'$, a contradiction. So $u(T)\le3$.

Since $T\subsetneq C_s\subsetneq U$ (because $s'\in C_s\setminus T$), $C_s$ has no member strictly between it and $U$; otherwise $u(T)\ge4$. By Step 1, $C_s=U\setminus\{s\}$.

**Step 3.** Critical elements are undominated. If $y\ne x$ dominated $x\in K$, then $f(y)\ge f(x)=t$, so $f(y)=t$ and $x,y$ would lie in the same members, contradicting Lemma 1.1(a). Since $|K|\ge3$, every undominated $s$ has an undominated partner $s'\neq s$, and Step 2 gives $C_s=U\setminus\{s\}$.

**Step 4.** Every element is undominated. Suppose $r$ were dominated, and let $v$ be maximal (for the domination order) among the elements dominating $r$. An element dominating $v$ also dominates $r$, and it is not $r$ itself, since otherwise $r$ and $v$ would be twins. So $v$ is undominated, and by Step 3, $r\in U\setminus\{v\}=C_v$. But $v$ dominates $r$, so $r\notin C_v$, a contradiction.

Steps 2 to 4 give the first claim. They also show that every pair is avoided by at least $n-1$ members and that $u(T_{ab})\le3$. Finally $u(T_{ab})\ge3$ because $T_{ab}\subsetneq U\setminus\{a\}\subsetneq U$. $\square$

## 3. Lines and blocks

For distinct $a,b\in U$ define the *line* $L(a,b):=U\setminus T_{ab}$, which contains $a$ and $b$. A line with at least three points is a *block*. A line with exactly two points is a *full pair*.

**Lemma 3.1.**
(a) The complement $U\setminus A$ of every member $A$ is a *subspace*: it contains the line through any two of its points.
(b) (Three-trace normal form, [T, Theorem 5.2] for critical pairs.) If $P$ is a block, then every member $A$ satisfies $A\cap P\in\{\varnothing,P\}\cup\{P\setminus\{p\}:p\in P\}$.
(c) If $P$ is a block and $a',b'\in P$ are distinct, then $L(a',b')=P$.
(d) The lines form a linear space on $U$: every two points lie on exactly one line, and two distinct lines share at most one point.

*Proof.* (a) If $a,b\notin A$, then $A\subseteq T_{ab}$, so $U\setminus A\supseteq L(a,b)$.

(b) Let $P=L(a,b)$ and $T=T_{ab}=U\setminus P$, with $|T|\le n-3$. The family ${\downarrow}T$ consists of the members avoiding $a$ and $b$, so it has at least $n-1>|T|+1$ members. By Lemma 1.2 its height is at least $3$, so there are members $A'\subsetneq B'\subsetneq T$. Let $X$ be a member with $\varnothing\ne X\cap P\subsetneq P$, and pick $p\in P\setminus X$. Then $T\cup X$ is a member avoiding $p$, so $T\cup X\subseteq C_p=U\setminus\{p\}$ by Lemma 2.1. Also $T\subsetneq T\cup X$, because $X$ meets $P$. If $T\cup X\neq U\setminus\{p\}$, then $A'\subsetneq B'\subsetneq T\subsetneq T\cup X\subsetneq U\setminus\{p\}\subsetneq U$ is a chain of six members, which is impossible. Hence $T\cup X=U\setminus\{p\}$, and $X\cap P=P\setminus\{p\}$.

(c) $T_{a'b'}\supseteq T_{ab}$, because $T_{ab}$ avoids $P\ni a',b'$. Conversely, $T_{a'b'}$ avoids $a'$ and $b'$. By (b) its trace on $P$ is then $\varnothing$, since each set $P\setminus\{p\}$ contains $a'$ or $b'$. So $T_{a'b'}\subseteq U\setminus P=T_{ab}$.

(d) Every pair $\{a,b\}$ lies on $L(a,b)$. If a line $L$ contains distinct points $a,b$, then $L=L(a,b)$: for a full pair this is clear, and for a block it is (c). $\square$

Let $\mathcal L$ be the set of lines, and for $y\in U$ let $r_y$ be the number of lines through $y$. The lines through $y$ partition $U\setminus\{y\}$, so
$$\sum_{L\ni y}(|L|-1)=n-1,\qquad(3.1)$$
and $y$ lies on a block if and only if $r_y\le n-2$. For every line, $U\setminus L(a,b)=T_{ab}$ is a member.

**Lemma 3.2.** For every $x\in U$: $t\ \ge\ f(x)\ \ge\ n+|\mathcal L|-r_x$.

*Proof.* The members $U$, $U\setminus\{y\}$ for $y\ne x$, and $U\setminus L$ for the $|\mathcal L|-r_x$ lines $L\not\ni x$ are pairwise distinct and contain $x$. $\square$

**Lemma 3.3** (layer identity; [T, Proposition 5.3] for critical pairs). Let $P$ be a block with $k=|P|$, let $g$ be the number of members avoiding $P$, and let $w$ be the number of members containing $P$. With $\delta_p:=t-f(p)\ge0$,
$$(k-2)\,t=(k-1)\,g-w-\sum_{p\in P}\delta_p .$$

*Proof.* By Lemma 3.1(b), each member has trace $\varnothing$, $P$, or $P\setminus\{p\}$ on $P$; let $h_p$ count the members with trace $P\setminus\{p\}$. The members avoiding $p$ are exactly those with trace $\varnothing$ or $P\setminus\{p\}$, so $g+h_p=2t-f(p)=t+\delta_p$. Substituting into $2t=g+\sum_p h_p+w$ gives the identity. $\square$

## 4. Union-closed families of height at most three

**Lemma 4.1.** Let $\mathcal G$ be a union-closed family of nonempty sets with maximum member $T$, $|T|=m$, and $H(\mathcal G)\le3$. Let $Q_1,\dots,Q_c$ be the maximal members of $\mathcal G\setminus\{T\}$, and put $D_i:=T\setminus Q_i$, $D_0:=T\setminus\bigcup_{i\ge1}D_i$, and $d_0:=|D_0|$. Then the $D_i$ ($i\ge1$) are nonempty and pairwise disjoint, and
$$|\mathcal G|\ \le\ 1+c+\binom c2+d_0\ \le\ 1+m+\binom c2 .$$
This is sharp: $\{T\}\cup\{T\setminus\{a\}\}\cup\{T\setminus\{a,b\}\}$ has $1+m+\binom m2$ members.

*Proof.*
1. For $i\ne j$, $Q_i\cup Q_j$ is a member strictly containing $Q_i$, so it equals $T$. Hence the $D_i$ are pairwise disjoint.
2. Call the other members of $\mathcal G\setminus\{T\}$ *low*. A low $X$ lies strictly below some member $Y\ne T$. If $Y$ were not one of the $Q_i$, there would be a chain $X\subsetneq Y\subsetneq Y'\subsetneq T$ of four members. So $X$ lies below some $Q_i$. Two low members are incomparable, since otherwise a coatom above the larger one and $T$ would give a chain of four.
3. For low $X$ and each $j$, $X\cup Q_j\in\{Q_j,T\}$, i.e. $X\cap D_j\in\{\varnothing,D_j\}$. So $E(X):=T\setminus X=\bigcup_{j\in J(X)}D_j\cup E_0(X)$, with $J(X)=\{j:X\cap D_j=\varnothing\}\ne\varnothing$ (by step 2) and $E_0(X)=E(X)\cap D_0$. Moreover $|J(X)|\ge2$ or $E_0(X)\ne\varnothing$, since $X$ is not a coatom.
4. For distinct low $X,X'$: if $X\cup X'$ were low, incomparability would force $X=X\cup X'=X'$. So $X\cup X'$ is $T$ or a coatom, and $E(X)\cap E(X')\in\{\varnothing,D_1,\dots,D_c\}$. Hence $|J(X)\cap J(X')|\le1$ and $E_0(X)\cap E_0(X')=\varnothing$.
5. Low members with $|J|\ge2$ each contain a pair from $\{1,\dots,c\}$ that lies in no other $J$, so there are at most $\binom c2$ of them. Low members with $|J|=1$ have nonempty, pairwise disjoint $E_0$, so there are at most $d_0$ of them.

Finally, $c+d_0\le m$. $\square$

## 5. There is no block

**Lemma 5.1** (covers). Let $P$ be a block, $T_P=U\setminus P$, $m=n-|P|$, and let $c$ be the number of maximal members of ${\downarrow}T_P\setminus\{T_P\}$. Then $c\le r_p-1$ for every $p\in P$, and the number $g$ of members avoiding $P$ satisfies $g\le1+m+\binom c2$.

*Proof.* ${\downarrow}T_P$ is the family of members avoiding $P$. It has height at most $3$ by Lemma 2.1 and Fact 0, since $T_P=T_{ab}$ for any $a,b\in P$. Lemma 4.1 gives the bound on $g$ and nonempty disjoint sets $D_i$ with $Q_i=T_P\setminus D_i$. By Lemma 3.1(a), $U\setminus Q_i=P\cup D_i$ is a subspace.

Fix $p\in P$ and $q_i\in D_i$. Then $L(p,q_i)\subseteq P\cup D_i$. This line is different from $P$, since it contains $q_i\notin P$. For $i\ne j$ the lines $L(p,q_i)$ and $L(p,q_j)$ are different, since otherwise the line would lie in $(P\cup D_i)\cap(P\cup D_j)=P$. So $p$ lies on at least $c+1$ lines. $\square$

**Theorem 5.2.** In a minimal counterexample, every line is a full pair.

*Proof.* Suppose a block exists. Let $x_0$ be a point with $r_0:=r_{x_0}$ minimal. Some point lies on a block, so $r_0\le n-2$ and $x_0$ itself lies on a block. Put $\Gamma:=\binom{r_0-1}2$ and $\nu:=n-1$.

*Step 1 (one block).* Let $P\ni x_0$ be a block, $k=|P|\ge3$, $m=n-k$, $S_P:=\sum_{p\in P}(r_p-1)$, and let $L_0$ be the number of lines disjoint from $P$. Every line other than $P$ meets $P$ in at most one point, so $|\mathcal L|=1+S_P+L_0$. The members $U$, $U\setminus\{q\}$ for $q\notin P$, and $U\setminus L$ for lines $L$ disjoint from $P$ all contain $P$, so $w\ge1+m+L_0$. By Lemma 5.1 with $c\le r_{x_0}-1=r_0-1$, we have $g\le 1+m+\Gamma$. Lemma 3.3 with $\delta_p\ge0$ then gives
$$(k-2)\,t\le(k-1)(1+m+\Gamma)-(1+m+L_0).$$
Lemma 3.2 at $x_0$ gives $t\ge n+|\mathcal L|-r_0$. Eliminate $t$ (using $k-2>0$) and $L_0=|\mathcal L|-1-S_P$, together with $n-m=k$:
$$(k-1)\,|\mathcal L|\ \le\ (k-1)\,\Gamma+(k-2)(r_0+1-k)+1+S_P.\qquad(5.1)$$

*Step 2 ($r_0\ge3$).* Insert $|\mathcal L|\ge1+S_P$ into (5.1). This gives $(k-2)(S_P-r_0+k)\le(k-1)\Gamma$. Since every $r_p\ge r_0$, we have $S_P-r_0+k\ge k(r_0-1)-r_0+k=(k-1)r_0$. Hence $(k-2)\,r_0\le\Gamma=\frac{(r_0-1)(r_0-2)}2$. The left side is positive, so $r_0\ge3$.

*Step 3 (averaging over the blocks through $x_0$).* Let $\mathcal P$ be the set of blocks through $x_0$ and $\tau=|\mathcal P|\ge1$. Put $N_0:=\bigcup_{P\in\mathcal P}(P\setminus\{x_0\})$, a disjoint union, and $\omega:=|N_0|=\sum_{P\in\mathcal P}(|P|-1)$. Let $e_0:=\sum_{P\in\mathcal P}(|P|-2)=\omega-\tau\ge1$ and $R:=\frac1\omega\sum_{y\in N_0}r_y\ge r_0$.

Sum (5.1) over $P\in\mathcal P$. We have $\sum_P S_P=\tau(r_0-1)+\omega(R-1)$, and $(|P|-2)(r_0+1-|P|)\le(|P|-2)(r_0-2)$ because $|P|\ge3$. This gives
$$\omega|\mathcal L|\le\omega\Gamma+e_0(r_0-2)+\tau+\tau(r_0-1)+\omega(R-1)=\omega\Gamma+\omega r_0-2e_0+\omega(R-1),$$
hence
$$|\mathcal L|\ <\ \Gamma+r_0+R-1.\qquad(5.2)$$

*Step 4 (a lower bound for the number of lines).* By (3.1), $\sum_{L\ni y}|L|=n-1+r_y$, so by the Cauchy–Schwarz inequality
$$\sum_{L\ni y}\frac1{|L|}\ \ge\ \frac{r_y^2}{n-1+r_y}=:\lambda(r_y).$$
Each line is counted once by each of its points, so $|\mathcal L|=\sum_y\sum_{L\ni y}1/|L|\ge\sum_y\lambda(r_y)$. The function $\lambda(r)=r-\nu+\nu^2/(\nu+r)$ is increasing and convex for $r\ge0$. The $n-\omega$ points outside $N_0$ have $r_y\ge r_0$, and Jensen's inequality on $N_0$ gives $\sum_{y\in N_0}\lambda(r_y)\ge\omega\lambda(R)$. Therefore
$$|\mathcal L|\ \ge\ (n-\omega)\,\lambda(r_0)+\omega\,\lambda(R).\qquad(5.3)$$

*Step 5 (monotonicity).* The function $\psi(R):=\omega\lambda(R)-R$ is convex. We show $\psi'(r_0)\ge0$, so that $\psi(R)\ge\psi(r_0)$ for $R\ge r_0$.
- If $r_0\ge\nu/2$: then $\lambda'(r_0)=1-\nu^2/(\nu+r_0)^2\ge1-4/9=5/9$, and $\omega\ge2$.
- If $r_0<\nu/2$: the points not in $N_0\cup\{x_0\}$ are the second points of the $r_0-\tau$ full pairs through $x_0$, so $\omega=n-1-(r_0-\tau)\ge n-r_0>\nu/2$. Moreover $\lambda'(r_0)=\frac{r_0(2\nu+r_0)}{(\nu+r_0)^2}\ge\frac{2\nu r_0}{(3\nu/2)^2}=\frac{8r_0}{9\nu}$. So $\omega\lambda'(r_0)>\frac{4r_0}9>1$ by Step 2.

*Step 6 (contradiction).* By (5.3) and Step 5,
$$n\lambda(r_0)-r_0+R=(n-\omega)\lambda(r_0)+\psi(r_0)+R\ \le\ (n-\omega)\lambda(r_0)+\omega\lambda(R)\ \le\ |\mathcal L|.$$
With (5.2) this gives $n\lambda(r_0)<\Gamma+2r_0-1=\frac{r_0(r_0+1)}2$, i.e. $2nr_0<(r_0+1)(n-1+r_0)$, i.e. $(r_0-1)(n-1-r_0)<0$. This is impossible, because $3\le r_0\le n-2$. $\square$

## 6. The full-pair case

**Theorem 6.1.** In a minimal counterexample, not every line is a full pair.

*Proof.* Suppose every line is a full pair. Then $\mathcal F$ contains $U$, the $n$ sets $U\setminus\{y\}$ and the $\binom n2$ sets $U\setminus\{a,b\}=T_{ab}$. These are exactly the members $A$ with $|U\setminus A|\le2$. Let $\mathcal D$ be the remaining ("deep") members, so $|\mathcal D|=2t-1-n-\binom n2$.

For each $x$, exactly $1+(n-1)+\binom{n-1}2=\binom n2+1$ of the shallow members contain $x$. Hence the deep members avoiding $x$ number $|\mathcal D|-\big(f(x)-\binom n2-1\big)=t-n+\delta_x$, where $\delta_x=t-f(x)\ge0$. In particular $t\ge f(x)\ge\binom n2+1$, and
$$\sum_{A\in\mathcal D}|U\setminus A|=\sum_x(t-n+\delta_x)\ \ge\ n(t-n).$$

For distinct $a,b,c$, suppose some member avoids $\{a,b,c\}$, and let $T$ be the largest one. Then $T\subsetneq T_{ab}\subsetneq U\setminus\{a\}\subsetneq U$, because $c\in T_{ab}\setminus T$. So $u(T)\ge4$, the family ${\downarrow}T$ has height at most $2$, and $|T|\le n-3$. By Lemma 1.2, at most $n-2$ members avoid $\{a,b,c\}$, and all of them are deep. Counting pairs (member, $3$-subset of its complement):
$$\sum_{A\in\mathcal D}\binom{|U\setminus A|}3\ \le\ \binom n3(n-2).$$

Write $t=\binom n2+1+y$ with $y\ge0$, and $A_0:=\frac{(n-1)(n-2)}2$. Then $|\mathcal D|=A_0+2y\ge1$ for $n\ge3$, and the average of $|U\setminus A|$ over $\mathcal D$ is at least $a:=\frac{n(A_0+y)}{A_0+2y}\in(\frac n2,n]$; also $|\mathcal D|=\frac{A_0n}{2a-n}$. The function $s\mapsto\binom s3=s(s-1)(s-2)/6$ is convex on $[1,\infty)$ and increasing on $[2,\infty)$. For $n\ge4$ we have $a>n/2\ge2$, so Jensen's inequality and monotonicity give $|\mathcal D|\binom a3\le\binom n3(n-2)$, which simplifies to
$$g(a):=a(a-1)(a-2)-2(n-2)(2a-n)\ \le\ 0 .$$
- **$n\ge8$.** $g(n/2)>0$, $g'(n/2)=\frac34n^2-7n+10>0$ and $g''(a)=6a-6>0$, so $g>0$ on $[n/2,\infty)$, a contradiction.
- **$n=6,7$.** The minimum of $g$ on $[n/2,n]$ is about $5.02$ and $12.96$ respectively, again a contradiction.
- **$n\le5$.** Use $|\mathcal F|\le2^n-1$, i.e. $t\le 2^{n-1}-1$:
  - For $n\le3$ this contradicts $t\ge\binom n2+1$.
  - For $n=4$, $t=7$, so $\mathcal F$ consists of all nonempty subsets of $U$ except one set $S\ne U$. An element $x\notin S$ then has $f(x)=8>t$.
  - For $n=5$, $11\le t\le15$ gives $0\le y\le4$ and $a=\frac{5(6+y)}{6+2y}\ge\frac{25}7$. On $[\frac{25}7,5]$, $g$ is increasing ($g'(a)=3a^2-6a-10>0$) and $g(\frac{25}7)=\frac{540}{343}>0$.

$\square$

## 7. Conclusion

Theorem 5.2 and Theorem 6.1 contradict each other, so no counterexample exists. This proves Theorem 1 and Corollary 2. $\square$

## 8. What remains open

Frankl's conjecture remains open for families whose nonempty members contain a strict chain of six or more sets, and in general. The proof uses height $\le5$ in two places:
- Fact 0 gives ${\downarrow}T_{ab}$ height $\le3$, so Lemma 4.1 applies.
- The six-member chain in Lemma 3.1(b) yields the three-trace normal form and the linear-space structure.

At height six, ${\downarrow}T_{ab}$ may have height four and the trace argument breaks down. Extending the method would need a structural replacement for both steps.

## 9. Checks

The proof uses no computation. As sanity checks only, the authoring model ran small Python scripts:
- an exhaustive check of Lemma 4.1 over all 15,583 union-closed families of height $\le3$ with $m\le5$, and of its sharpness for $m\le6$;
- a check of the linear-space part of Theorem 5.2 on more than 8,000 random and structured linear spaces (projective and affine planes of orders 2, 3, 5, 7, and random block systems with $n\le40$);
- a check of Lemmas 3.2, 3.3, 4.1 and 5.1 on 1,703 union-closed families of height $\le5$ built from random linear spaces.

All checks passed. Scripts (pinned commit): https://github.com/fersuarezz/frankl-height5/tree/d21ead9862fdfa553212c83ab5270fbe3c2fb716/checks (`h3max.py`, `h3refined.py`, `lstest.py`, `famtest.py`).

An independent model check is described in the eligibility field.

**Reference.** [T] C. Tian, arXiv:2608.25147 (2026).


### Who did the work

LLM only (people only prompted or submitted)

### Models used

Anthropic Claude Opus 5.5

### Thinking level / time

Max

### Other LLMs

Fable 5.1

### Per-model versions, thinking and roles

Claude Opus 5.5 | version: claude-opus-5-5 via Claude Code CLI (exact build unknown) | thinking: max (Claude Code `/effort max` in both sessions; never changed during the mathematical work) | time: wall-clock about 8 h on 2026-10-19 (12:40–20:56 UTC, including two usage-limit pauses; structural lemmas) and about 2 h 45 min on 2026-10-20 (07:47–10:34 UTC; Lemma 4.1, Theorem 5.2, write-up); active compute time unknown | role: literature reading, found and wrote all proofs, sanity-check scripts, self-audit, this write-up
Claude Fable 5.1 | version: claude-fable-5-1, run as a Claude Code subagent (exact build unknown) | thinking: unknown (agent default; not set explicitly) | time: about 15 minutes for the completed review on 2026-10-20 | role: independent referee — re-derived every step of the proof from the written notes in a fresh context and ran its own checks


### Model eligibility and verification evidence

Both models are listed examples (Opus 5.5 and Fable).

Independent correctness check by Claude Fable 5.1:
- **Setup.** It ran as a fresh subagent with no access to the authoring conversation. It was instructed to act as a skeptical referee and to find errors.
- **Checked scope.** The complete proof as written in the authors' notes: the same lemmas, steps and arguments as Sections 0–7 of this write-up, with different numbering.
- **Method.** It re-derived every step by hand. It verified every algebraic rearrangement in Theorems 5.2 and 6.1 with exact rational arithmetic, and ran the small cases of Theorem 6.1. It also tested Lemmas 3.1–5.1 on about 9,500 union-closed families and the linear-space part on 6,000 linear spaces, with no violations.
- **Verdict.** Correct. It made eight minor or cosmetic remarks, all incorporated here:
  - nonemptiness of $\mathcal F$;
  - the existence of an undominated dominator (Lemma 2.1, Step 4);
  - why the cover lines are distinct;
  - the cases $r_0\le2$;
  - numerical values for $n=6,7$;
  - the existence of "largest avoiding members";
  - clashes of notation;
  - Corollary 2 when $\varnothing\notin\mathcal A$.
- **Reviewer's scripts and outputs (pinned commit).** https://github.com/fersuarezz/frankl-height5/tree/d21ead9862fdfa553212c83ab5270fbe3c2fb716/review
- **Earlier runs.** One review run failed at once with a connection error. A second was stopped by the user after it had re-checked Lemmas 1.2 and 4.1 exhaustively for $m\le5$.
- **Limit of the check.** This final write-up is a re-exposition of the checked notes by the authoring model and was not itself re-read by the reviewer.

The authoring model also audited the proof twice. No person has checked it.


### People and roles

@fersuarezz: prompted the model and submitted the issue; no mathematical contribution.


### References

C. Tian, Frankl's Conjecture at Height Four and the Structure of Height-Five Counterexamples, arXiv:2608.25147v1 (25 Aug 2026; the PDF is titled "Frankl's union-closed sets conjecture: height four and structural reductions at height five"). (Used: Lemmas 2.1–2.3 and 3.1, re-proved here as Lemmas 1.1–1.2; Theorems 4.1 and 5.2 and Proposition 5.3, extended here from critical elements to all elements in Lemmas 2.1, 3.1(b) and 3.3; the statement that the height-five case is open.)
H. Bruhn, O. Schaudt, The journey of the union-closed sets conjecture, Graphs Combin. 31 (2015), 2043–2074, doi:10.1007/s00373-014-1515-0; arXiv:1309.3297. (Used: formulation of the conjecture, source S1 of the problem; background.)
we-solve contributions Math-415-A1 and Math-415-A2 (A2 is the authors' earlier, unrelated partial result on separating families). (Read to avoid repetition; not used in the proof.)


### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
