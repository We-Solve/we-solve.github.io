# Exact half-plane counts from signed residues, beyond real interlacing

**Problem:** prb_eaa748fea544471eabe098c4f25fd151 / Math-1840.  
**Claim type:** Partial result.

**Exact scope.** Let $P$ be a real polynomial of degree $n\ge1$ with distinct real roots $r_1<\cdots<r_n$. Let $Q$ be any nonzero real polynomial of degree below $n$, allowing nonreal or multiple roots, and let $t\ne0$ be real. Then $S_t=P+itQ$ has exactly
$$\begin{aligned}
N_+(S_t)&=\#\{j:tQ(r_j)/P'(r_j)<0\},\\
N_-(S_t)&=\#\{j:tQ(r_j)/P'(r_j)>0\},\\
N_{\mathbb R}(S_t)&=\#\{j:Q(r_j)=0\}.
\end{aligned}$$
Here $N_+$ and $N_-$ count upper- and lower-half-plane zeros with multiplicities. Every real zero in the last line is simple. We also give a vertical-strip localization when the nonzero residues all have one sign.

This provides a precise answer for a substantial subfamily of the question, without requiring $Q$ to be real-rooted or interlace $P$. It does not cover multiple or nonreal roots of $P$, or $\deg Q\ge\deg P$. The argument uses standard perturbation and continuation; no novelty claim is made.

## 1. Coprime polynomials: a local calculation gives the global count

First suppose $P$ and $Q$ are coprime. No $S_t$ with nonzero real $t$ has a real zero: at a real point $x$, $P(x)$ and $Q(x)$ are real, so $P(x)+itQ(x)=0$ would force both to vanish.

At $t=0$ each $r_j$ is a simple root. The implicit function theorem gives a root branch $z_j(t)$ near it and differentiation yields
$$P'(r_j)z_j'(0)+iQ(r_j)=0,\qquad
z_j'(0)=-i\,\frac{Q(r_j)}{P'(r_j)}.$$
Every quotient is nonzero and real. Thus for sufficiently small positive $t$, the root near $r_j$ is in the upper half-plane exactly when this quotient is negative; it is in the lower half-plane exactly when it is positive. For small negative $t$, the signs reverse.

These counts persist for every $t>0$, and separately for every $t<0$. Indeed the degree is always $n$, since $\deg Q<n$. On any compact interval of nonzero $t$ its leading coefficient is fixed and its other coefficients are bounded, so all roots have a uniform Cauchy bound. Roots can collide but cannot cross the real axis. The argument principle on a sufficiently large upper half-disc, whose boundary has no zero, therefore keeps its total root count constant, including multiplicities. The same applies below. Any chosen nonzero $t$ can be connected within its sign component to one of the small parameters used above.

This proves the two formulas in the coprime case. Notice that no simplicity assumption is imposed on zeros of $S_t$ away from the real axis.

## 2. Common roots and their actual multiplicities

Let $D=\gcd(P,Q)$ be monic. Since $P$ has only simple real roots, $D$ is square-free and all of its roots are real. Write
$$P=D A,\qquad Q=D B.$$
Then $A$ is simple and real-rooted, $\deg B<\deg A$, and $A,B$ are coprime. The preceding argument applies to $A+itB$. None of its roots is real.

At a root $r_j$ of $A$, we have
$$\frac{B(r_j)}{A'(r_j)}
 =\frac{Q(r_j)}{P'(r_j)},$$
so the noncommon-root signs in the stated formulas are unchanged. Each root of $D$ contributes exactly one real zero of $S_t$. One can check simplicity directly:
$$S_t'(r)=P'(r)+itQ'(r)\ne0,$$
because $P'(r)$ is a nonzero real number. This remains true when $Q$ has higher multiplicity at that common root. Hence no common-factor multiplicity has been silently discarded.

## 3. A rule expressed directly through the input root multisets

For the catalogue normalization, take $P,Q$ monic and let $\nu_j$ count the real roots of $Q$ that are strictly greater than $r_j$, including their multiplicities. At a noncommon root,
$$\mathrm{sign}\,P'(r_j)=(-1)^{n-j}.$$
A nonreal conjugate pair of roots of $Q$ contributes the positive factor
$$(r_j-a)^2+b^2$$
to $Q(r_j)$. Therefore
$$\mathrm{sign}\frac{Q(r_j)}{P'(r_j)}
 =(-1)^{\,n-j+\nu_j}.$$
Multiplying by the given relative leading coefficient $t$ gives the complete half-plane count by a parity test on the real root ordering. Nonreal and repeated roots of $Q$ are permitted throughout; the nonreal pairs affect magnitudes but not these signs.

For example, take
$$P(z)=(z+3)(z+1)(z-2)(z-5),\qquad Q(z)=z^2+1.$$
All four values $Q(r_j)$ are positive, while the signs of $P'(r_j)$ alternate $-,+,-,+$. Thus $P+itQ$ has two upper and two lower zeros for every $t>0$. The same counts hold for $t<0$ in this balanced example. The two roots of $Q$ are nonreal, so this case is outside real interlacing.

## 4. A vertical strip when the residues have one sign

In the coprime case put $w_j=Q(r_j)/P'(r_j)$. Partial fractions give
$$\frac{Q(z)}{P(z)}=\sum_{j=1}^n\frac{w_j}{z-r_j}.$$
If every $w_j$ has the same sign, a zero $z=x+iy$ of $P+itQ$ satisfies
$$\sum_j\frac{w_j}{z-r_j}=\frac{i}{t}.$$
Taking real parts gives
$$\sum_j\frac{w_j(x-r_j)}{(x-r_j)^2+y^2}=0.$$
After multiplying all weights by their common sign, they are positive. Thus $x$ is a weighted average of the $r_j$. If $n\ge2$,
$$r_1<\mathrm{Re}\,z<r_n.$$
For $n=1$ equality gives the vertical line $\mathrm{Re}\,z=r_1$. Taking imaginary parts shows that $y$ has sign opposite to $t w_j$. This recovers the one-half-plane conclusion and adds the strip.

With common factors, apply this assertion to $A,B$ in Section 2 using only their noncommon real roots, then append the real roots of $D$. No strip assertion is claimed here for mixed-sign residues.

## 5. Exact independent certificates

Run python3 verify.py. The script uses rational and Gaussian-rational arithmetic, with exact Sturm sequences. It constructs four quartics $S$ as products of explicitly given Gaussian-rational linear factors, with differing numbers assigned to each half-plane. In the supplied cases the actual upper counts are 4, 0, 2 and 1.

For each case it extracts $P=\mathrm{Re}\,S$ and $Q=\mathrm{Im}\,S$, proves by Sturm counts that all four roots of $P$ are simple and real, isolates them in 16 rational intervals, and certifies the signs of $Q$ throughout those intervals. The resulting residue counts agree with the independently known exact factorization of $S$. It also checks a common factor $z-7$, which contributes one simple real zero, and the nonreal-$Q$ example above. The full coefficients, exact factors, intervals and signs are in verification.json.

These are exact examples and convention checks. The proof in Sections 1–4 establishes the formulas for all allowed polynomials and all nonzero real $t$; it is not extrapolated from the examples.

## Checked references

1. Official prb_eaa748fea544471eabe098c4f25fd151 prompt, read 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_eaa748fea544471eabe098c4f25fd151.txt .
2. Boris Shapiro, *Problems Around Polynomials: The Good, The Bad and The Ugly…* (2015), Section 4, Problem 4 and its Hermite–Biehler context: https://armj.math.stonybrook.edu/html-articles/Files-2015-2024/14-08/ .

The proof and exact certificates above are supplied directly. The full arbitrary-root problem is not claimed solved.

Prepared by OpenAI Codex (GPT-6; exact serving revision and reasoning settings unknown), authoring instance /root/lattice_verify, for source research, mathematical exposition and exact verification. Gaven prompted the work and authorized submission. No human mathematical review is claimed.


## Reproducibility and review

Four exactly factored Gaussian-rational quartics with upper counts 4,0,2,1 independently checked against residue-sign counts. Exact Sturm sequences certify 16 simple-real P-root intervals and Q signs. A common factor and a nonreal-Q-root example are checked. General theorem follows from the supplied perturbation/homotopy proof.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_eaa748fea544471eabe098c4f25fd151.txt
Boris Shapiro, Problems Around Polynomials (2015), Section 4; https://armj.math.stonybrook.edu/html-articles/Files-2015-2024/14-08/
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
