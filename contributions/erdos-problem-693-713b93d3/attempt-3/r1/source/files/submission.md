# Attributed submission: Attempt: ERDOS-693

Source: https://github.com/We-Solve/research/issues/439

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

ERDOS-693

### Claim

Partial result

### Exact scope

Three unconditional results; the main question (a polylogarithmic upper bound for $G(n,k)$) remains **open**, in both directions.

1. **Theorem 1 (lower bound, every fixed $k\ge 2$).** $\displaystyle\limsup_{n\to\infty}\frac{G(n,k)}{\log n\thinspace \log\log n/\log\log\log n}\ \ge\ \frac12.$ In particular $G(n,k)/\log n$ is unbounded, so every claim of the form $G(n,k)=O_k(\log n)$ is false. This holds along an infinite sequence of $n$, not for all large $n$, and it is compatible with $G(n,k)\le(\log n)^{C}$ for any $C>1$.
2. **Theorem 2 (upper bound, $k=2$ only).** $G(n,2)\le \tfrac{12}{5}\sqrt n+3$ for every $n\ge 10^6$. This improves the trivial bound $n+1$ recorded in earlier contributions. The exponent $1/2$ is presumably known in some form; we do not claim novelty for the exponent.
3. **Proposition 3 (barrier).** If $G(n,2)\le F(n)$ for a non-decreasing $F$ and all $n\ge n_0$, then every interval $[x,x+F(\lfloor\sqrt x\rfloor+1))$, $x\ge x_0$, contains an integer all of whose prime factors are $<2\sqrt x+2$. Hence a positive answer to #693 would give such integers in **every** interval of length $C(\log x)^A$, and even $G(n,2)\ll n^{1/2-\eta}$ would give them in every interval of length $\ll x^{1/4-\eta/2}$. This explains why upper-bound arguments stop at $\sqrt n$. It is a logical implication, not an impossibility proof.

Also included: Remark 4, a short rigorous observation that restricting to prime divisors $p\in(n,2n)$ would require polylogarithmic gaps between consecutive primes.

No literature novelty is claimed for any item. Large-scale computations from our project are **not** part of this claim and are not reported.

### Write-up

## Notation

Fix $k\ge2$. $A_{n,k}$ and $G(n,k)$ are as in the problem statement, with the open interval $D_n=(n,2n)\cap\mathbb Z$. Write $A_n^\infty=\lbrace m\ge1:\exists d\in D_n,\ d\mid m\rbrace $, so $A_{n,k}=A_n^\infty\cap[n,n^k]$. Since $A_{n,k}\cap[n,n^2]=A_{n,2}$, every gap of $A_{n,2}$ between two of its elements is also a gap of $A_{n,k}$; hence $G(n,k)\ge G(n,2)$. Logarithms are natural, and $\log_j$ denotes the $j$-fold iterated logarithm. $\theta,\psi,\pi,\Lambda$ are the usual prime-counting functions.

Inputs from analytic number theory: $\theta(t)\sim t$, $\pi(t)\sim t/\log t$ (PNT), and $\sum_{r\le t}\Lambda(r)/r=\log t+O(1)$ (Mertens).

---

## 1. Lower bound

**Lemma 1.1 (Dirichlet, non-uniform moduli).** For real $\alpha_1,\dots,\alpha_r$ and integers $Q_1,\dots,Q_r\ge1$ there is an integer $1\le h\le\prod Q_i$ with $\Vert h\alpha_i\Vert <1/Q_i$ for all $i$.

*Proof.* Split $[0,1)^r$ into $\prod Q_i$ boxes $\prod[j_i/Q_i,(j_i+1)/Q_i)$. Two of the $\prod Q_i+1$ points $(\lbrace j\alpha_i\rbrace )_i$, $0\le j\le\prod Q_i$, lie in one box; the difference of their indices is $h$. $\square$

**Construction.** Let $a$ be a large integer, and put
$$K=\lfloor\log a\rfloor,\qquad Y=a/K,\qquad \Delta=\lfloor a/\log_2 a\rfloor,\qquad M=\prod_{p\le Y}p^{\lfloor\log a/\log p\rfloor}.$$
For each prime $Y<p\le a$ let $L_p=\mathrm{lcm}(1,\dots,\lfloor a/p\rfloor)$, $Q_p=\lceil pL_p/\Delta\rceil$ and $\alpha_p=M/(pL_p)$. By Lemma 1.1 choose $1\le h\le\prod_p Q_p$ with $\Vert h\alpha_p\Vert <1/Q_p$ for all such $p$, and set $x=Mh$.

**Lemma 1.2.** For every integer $1\le q\le a$ there is an integer $u$ with $|x-uq|\le\Delta$.

*Proof.* If all prime factors of $q$ are $\le Y$, then every prime power dividing $q$ is $\le a$, so $q\mid M\mid x$. Otherwise, since $Y^2>a$ for large $a$, $q=pm$ with exactly one prime $p>Y$, and $m\le\lfloor a/p\rfloor$, so $m\mid L_p$ and $q\mid pL_p$. Choose $v$ with $|h\alpha_p-v|<1/Q_p$; multiplying by $pL_p$ gives $|x-v\thinspace pL_p|<pL_p/Q_p\le\Delta$, and $v\thinspace pL_p$ is a multiple of $q$. $\square$

**Lemma 1.3 (size).** $(1+o(1))\thinspace a/\log a\le\log x\le(1+o(1))\thinspace a\log_2 a/\log a$.

*Proof.* Lower bound: $\log x\ge\log M\ge\theta(Y)\sim Y\sim a/\log a$. Upper bound: $\log M\le\theta(Y)+\pi(\sqrt a)\log a=(1+o(1))a/\log a$. Since $L_p\ge1$, $Q_p\le pL_p/\Delta+1\le L_p(1+p/\Delta)$, so $\log Q_p\le\psi(a/p)+\log(1+a/\Delta)$. The second terms sum to at most $\pi(a)\log(1+a/\Delta)=O(a\log_3 a/\log a)$. For the first, swap the order of summation; note $r\le a/p<a/Y=K$:
$$\sum_{Y<p\le a}\psi(a/p)=\sum_{r<K}\Lambda(r)\thinspace \mathrm{card}\lbrace p:Y<p\le a/r\rbrace \le\sum_{r\le K}\Lambda(r)\pi(a/r).$$
For $r\le K$ we have $a/r\ge Y\to\infty$ and $\log(a/r)\ge\log Y=(1+o(1))\log a$. Hence $\pi(a/r)\le(1+o(1))\frac{a}{r\log a}$ uniformly, and the sum is $\le(1+o(1))\frac{a}{\log a}(\log K+O(1))=(1+o(1))\frac{a\log_2 a}{\log a}$. Finally $\log x\le\log M+\sum_p\log Q_p$. $\square$

**Theorem 1.** For every fixed $k\ge2$, $\limsup_{n\to\infty}G(n,k)\big/\big(\log n\thinspace \log_2 n/\log_3 n\big)\ge 1/2$.

*Proof.* Let $n=\lfloor x/a\rfloor$ and write $x=an+r$ with $0\le r<a$. By Lemma 1.3, $x\ge\exp((1+o(1))a/\log a)$, so $n/a\to\infty$. Take any integer $s$ with $\Delta+1\le s\le\lfloor a/2\rfloor-\Delta$, and put $z=x+s$. Suppose $d\mid z$ with $n<d<2n$, and let $q=z/d\in\mathbb Z$. Then
$$q>\frac{z}{2n}\ge\frac{an}{2n}=\frac a2,\qquad q<\frac zn=a+\frac{r+s}{n}<a+1\quad(n>\tfrac32a),$$
so $a/2<q\le a$. By Lemma 1.2, $x=uq+e$ with $|e|\le\Delta$, so $z=uq+(e+s)$ with $1\le e+s\le\lfloor a/2\rfloor<q$. Then $q\nmid z$, a contradiction. Hence the $H=\lfloor a/2\rfloor-2\Delta=(\tfrac12-o(1))a$ consecutive integers $x+\Delta+1,\dots,x+\lfloor a/2\rfloor-\Delta$ avoid $A_n^\infty$.

These integers lie strictly between two elements of $A_{n,2}$. On the left, $n+1\in A_{n,2}$ and $n+1<x$. On the right, the first multiple of $n+1$ after $x+a/2$ is $\le x+a/2+n+1\le(a+2)n+a<n^2$ for large $a$. Thus $G(n,2)\ge H+1$, and therefore $G(n,k)\ge H+1$ for every $k\ge2$.

Rewriting in terms of $n$: $\log n=\log x-\log a+O(1)$. By Lemma 1.3 this gives $\log_2 n=(1+o(1))\log a$ and $\log_3 n=(1+o(1))\log_2 a$, so
$$\frac{\log n\thinspace \log_2 n}{\log_3 n}\le(1+o(1))\thinspace \frac{a\log_2 a}{\log a}\cdot\frac{\log a}{\log_2 a}=(1+o(1))\thinspace a.$$
Since $n=n(a)\to\infty$ as $a\to\infty$, the theorem follows. $\square$

*Remark.* The key point is approximate, not exact, divisibility. The cost of controlling a large prime $p$ is $\log Q_p\approx\psi(a/p)$, not $\log p$, thanks to the individual moduli $pL_p$ and the small error $\Delta$.

---

## 2. Upper bound $O(\sqrt n)$ for $k=2$

**Lemma 2.1.** If $4n<X$ and $X+2n<4n^2$, then $(X,\thinspace X+X/(2n)+2]$ contains an element of $A_n^\infty$.

*Proof.* Let $q=\lfloor X/(2n)\rfloor+2$, so $X/(2n)+1<q\le X/(2n)+2$. Let $y$ be the least multiple of $q$ exceeding $X$, and put $d=y/q$; then $X<y\le X+q$. On one side, $d>X/q\ge 2nX/(X+4n)>n$, because $X>4n$. On the other, $d\le X/q+1<2nX/(X+2n)+1=2n+1-4n^2/(X+2n)<2n$, because $X+2n<4n^2$. $\square$

**Theorem 2.** For $n\ge10^6$, $G(n,2)\le\frac{12}{5}\sqrt n+3$.

*Proof.* It suffices to prove the following. **(\*)** For every integer $m\in[n,n^2]$ there is $y\in A_n^\infty$ with $m\le y\le m+\frac{12}5\sqrt n+2$.

Indeed, (\*) gives the theorem. For consecutive $a_i<a_{i+1}$ in $A_{n,2}$, apply (\*) to $m=a_i+1$ and get $y$. If $y\le n^2$ then $y\in A_{n,2}$, so $a_{i+1}\le y$. If $y>n^2$, then $a_{i+1}\le n^2<y$ anyway. So $a_{i+1}-a_i\le\frac{12}5\sqrt n+3$.

*Small $m$, $n\le m\le\frac{24}{5}n^{3/2}$.* Each $m\in[n+1,2n-1]$ is itself in $A_n^\infty$, and every even number in $[2n+2,4n-2]$ is $2d$ with $d\in D_n$; this handles $m\le 4n-2$ with $y-m\le2$. For $4n-2<m\le4n+1$, Lemma 2.1 with $X=4n+1$ gives $y\le 4n+6$. For $m\ge4n+2$, Lemma 2.1 with $X=m-1$ gives $y-m\le (m-1)/(2n)+1\le\frac{12}5\sqrt n+1$.

*Large $m$, $\frac{24}5n^{3/2}<m\le n^2$.* Let $v=\lceil\sqrt n\rceil$, $B=(n+4v)^2$, $b=\lceil B/m\rceil$, $S=\lceil\sqrt{4bm+b^2}\thinspace \rceil$ and $E=S^2-4bm$.
- Then $E\ge b^2$. Since $\sqrt{4bm+b^2}\le S<\sqrt{4bm+b^2}+1$, we get $S^2<4bm+b^2+2\sqrt{4bm+b^2}+1\le 4bm+b^2+2S+1$, hence $E\le b^2+2S$.
- Let $R$ be the largest non-negative integer $\le\sqrt E$ lying in the union of the residue classes $S$ and $-S \pmod{2b}$. It exists, because one of the least non-negative representatives of these two classes is $\le b\le\sqrt E$. Consecutive elements of the union differ by at most $2b$, so $0\le\sqrt E-R<2b$.
- Choose $r\in\lbrace R,-R\rbrace $ with $r\equiv -S\pmod{2b}$, and put $d=(S-r)/2$ and $q=(S+r)/(2b)$. Both are integers, since $S+r\equiv0\pmod{2b}$ forces $S\equiv r\pmod 2$. Both are positive, since $R\le\sqrt E<S$. Then
$$y:=dq=\frac{S^2-R^2}{4b},\qquad 0\le y-m=\frac{E-R^2}{4b}=\frac{(\sqrt E-R)(\sqrt E+R)}{4b}<\sqrt E.$$

*Constants, for $n\ge10^6$:*
- $B/n^2\le(1+4/\sqrt n+4/n)^2<1.0081$;
- $b<B/m+1<0.2101\sqrt n+1<0.212\sqrt n$;
- $bm<B+m<2.0081n^2$;
- $S<\sqrt{8.0324n^2+0.045n}+1<2.835n$;
- $E\le b^2+2S<5.715n<(2.4)^2n$.

So $y-m<2.4\sqrt n$. The divisor $d$ is admissible. From below, $bm\ge B$ gives $d\ge(S-\sqrt E)/2\ge\sqrt{bm}-1.2\sqrt n\ge n+4\sqrt n-1.2\sqrt n>n$. From above, $d\le(S+\sqrt E)/2<1.4175n+1.2\sqrt n<2n$. Hence $y\in A_n^\infty$. $\square$

*Remark.* Only $k=2$ is covered. For $k\ge3$ we do not reproduce bounds here.

---

## 3. Why upper bounds stop at $\sqrt n$: a smooth-number barrier

**Proposition 3.** Let $n\ge4$, $G=G(n,2)$. Every interval $[x,x+G-1]$ with $n+1\le x\le n^2-1$ contains an integer whose prime factors are all $<2n$.

*Proof.* Both $n+1$ and $n^2-1=(n-1)(n+1)$ lie in $A_{n,2}$, so $x$ lies between the first and the last element. If $x\in A_{n,2}$, take $m=x$. Otherwise $a_i<x<a_{i+1}$ for consecutive elements, and $a_{i+1}\le a_i+G\le x-1+G$; take $m=a_{i+1}$. Now $m=de$ with $d\in D_n$ and $e=m/d<n^2/n=n$, so every prime factor of $m$ is $<2n$. $\square$

**Corollary 3.1.** Suppose $F$ is non-decreasing and $G(n,2)\le F(n)$ for $n\ge n_0$. Then for all large $x$, the interval $[x,x+F(\lfloor\sqrt x\rfloor+1))$ contains a $(2\sqrt x+2)$-smooth integer. (Take $n=\lfloor\sqrt x\rfloor+1$; then $(n-1)^2\le x\le n^2-1$ and $x\ge n+1$.) In particular:
- (a) A positive answer, $G(n,2)\le C(\log n)^A$, implies that every interval of length $C'(\log x)^A$ contains a $(2\sqrt x+2)$-smooth integer.
- (b) $G(n,2)\ll n^{1/2-\eta}$ for some $\eta>0$ implies the same for intervals of length $\ll x^{1/4-\eta/2}$.

Since $G(n,k)\ge G(n,2)$, both implications also follow from the corresponding bounds for any fixed $k$.

*Context (literature as reported, see References).* Granville's survey (2008, §4) states that the "$\sqrt x$ barrier for the length of the interval has only been broken in certain special circumstances". As its example it cites Friedlander and Lagarias (1987): an $x^{1/2}$-smooth integer exists in every interval of length $x^{1/4+\varepsilon}$ near $x$. Theorem 2 corresponds exactly to length $x^{1/4}$ in Corollary 3.1. We have **not** consulted Friedlander–Lagarias directly, and have not checked whether later work improves the exponent $1/4$ for $(2\sqrt x+2)$-smooth integers. So (b) is offered as evidence of difficulty, not as a proven barrier. The converse implication fails: smooth numbers in short intervals do not by themselves answer #693.

---

## 4. Remark: prime divisors alone are not enough

Let $P_n=\lbrace m\in[n,n^2]:\ \exists\text{ prime }p\in(n,2n),\ p\mid m\rbrace \subset A_{n,2}$, and let $G_P(n)$ be its maximal gap. For $m\in(n,2n)$ we have $m\in P_n$ if and only if $m$ is prime: a prime divisor $p>n$ of $m<2n$ must equal $m$. Let $p_i<p_{i+1}$ be consecutive primes, and put $n=p_i-1$. For large $i$, $p_{i+1}<2p_i-2=2n$, so both primes lie in $P_n\cap(n,2n)$ and nothing in between does. Hence $p_{i+1}-p_i\le G_P(p_i-1)$, so a bound $G_P(n)=O((\log n)^C)$ would imply $p_{i+1}-p_i=O((\log p_i)^C)$ for all large primes. Composite divisors are therefore essential near the lower edge of $[n,n^2]$.

---

## 5. Self-audit and what remains open

- **Theorem 1.** We checked:
  - the strict inequalities $a/2<q\le a$ (they use $n>3a/2$);
  - that the run is interior to $[n,n^2]$ (left witness $n+1$, right witness a multiple of $n+1$ below $n^2$);
  - the uniformity of $\pi(a/r)$ for $r\le K$;
  - that $\Delta=o(a)$.

  The result holds only along a sequence of $n$. Nothing is proved for positive density of $n$ or for all $n$.
- **Theorem 2.** Our working notes had the strict inequality $E<b^2+2S$; only $E\le b^2+2S$ follows, and the constants keep their margin. Boundary cases checked: $m$ near $4n$, $m$ near $\frac{24}5n^{3/2}$, $y>n^2$.
- **Open:**
  - any uniform bound $G(n,2)=o(\sqrt n)$;
  - any bound $G(n,k)\le(\log n)^{O(1)}$;
  - any lower bound $G(n,k)\ge(\log n)^{1+c}$ with $c>0$, even along a sequence.

### Who did the work

People with LLM assistance

### Models used

OpenAI GPT 6 Astra, Anthropic Claude Opus 5.5, Other (named below)

### Thinking level / time

Unknown (not available)

### Other LLMs

Anthropic, Claude Sonnet
DeepSeek, unknown

### Per-model versions, thinking and roles

Claude Opus 5.5 | version: unknown | thinking: unknown | time: unknown (submitter's estimate for the whole project: about one weekly usage quota, sessions 2026-10-04 to 2026-10-14) | role: "Analyst" agent in a multi-agent project; produced the original proofs of Theorems 1–2, Proposition 3 and Remark 4
Claude Opus 5.5 | version: claude-opus-5-5 | thinking: unknown | time: unknown (one session, 2026-10-22) | role: independently re-checked every step of the proofs included here, corrected one inequality (Section 5), checked the Granville quotation, wrote this submission
Claude Sonnet | version: unknown | thinking: unknown | time: unknown | role: "Bibliographer" agent; literature search (no text from it is reproduced here)
GPT 6 Astra | version: 6.0 | thinking: unknown | time: unknown | role: second opinion on earlier drafts via chat; its suggested bound O(n^{2/3}) was superseded by Theorem 2, and none of its text or results are used here
DeepSeek | version: unknown | thinking: unknown | time: unknown | role: consulted once as a second opinion; its answer contained errors and nothing from it is used

### Model eligibility and verification evidence

Claude Sonnet, DeepSeek and GPT 6 Astra (thinking setting unknown) contributed no content that appears in this write-up. Every proof and claim stated here was checked step by step by Claude Opus 5.5 (a listed example model) in the 2026-10-22 session. Scope of that check: Sections 1–4 in full, including boundary cases. The check is model-based, not an independent human review.

### People and roles

@MikhailLevit1987: posed the task and directed the project; submitted this issue

### References

P. Erdős, Some unconventional problems in number theory, Astérisque 61 (1979), 73–82. (Used: original formulation of the question; checked in an OCR copy of the paper.)
A. Granville, Smooth numbers: computational number theory and beyond, in: Algorithmic Number Theory, MSRI Publ. 44 (2008), §4. (Used: statement of the Friedlander–Lagarias result and of the "sqrt x barrier", quoted in Section 3.)
Erdős Problems, Problem #693, https://www.erdosproblems.com/693. (Used: problem statement; no known bounds listed there at time of writing.)

### Declarations

- [X] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [X] I understand that this issue and its contents are public immediately.
- [X] Every LLM and person involved is listed, with versions or "unknown".

