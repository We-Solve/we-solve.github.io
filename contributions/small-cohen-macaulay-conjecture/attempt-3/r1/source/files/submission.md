# Small Cohen–Macaulay modules in every complete local dimension at most two

**Problem:** TOP-30006944

**Claim type:** Partial result

**Exact scope:** Every nonzero complete Noetherian local ring R of dimension d≤2 admits a nonzero finite maximal Cohen–Macaulay module, obtained from the normalization of a full-dimensional minimal-prime quotient; no reducedness or equal-characteristic assumption is required.

## The low-dimensional theorem

Let $(R,\mathfrak m)$ be a nonzero complete Noetherian local ring of dimension $d\le2$. There exists a finite nonzero $R$-module $M$ of depth $d$. This is the classical low-dimensional positive case, presented with the reduction needed for the literal prompt, which does not require $R$ to be a domain, reduced, or equicharacteristic.

We use three standard commutative-algebra facts in their exact applicable forms: a complete Noetherian local ring is excellent, excellence passes to quotients, and the normalization of an excellent domain in its fraction field is finite. A Noetherian normal ring satisfies Serre's condition $S_2$. These are checked in the Stacks Project; no big Cohen–Macaulay theorem is used.

## Construction

Choose a minimal prime $\mathfrak p$ such that $\dim(R/\mathfrak p)=d$. Such a prime exists: the spectrum is a finite union of the closed subsets associated to its finitely many minimal primes, so its dimension is their maximum. Put $A=R/\mathfrak p$. This is a complete Noetherian local domain of dimension $d$. Let $B$ be its integral closure in $\mathrm{Frac}A$. Finiteness of normalization gives a finite $A$-module $B$, and hence a finite $R$-module. It is nonzero because $A\hookrightarrow B$ preserves $1$.

The ring $B$ is local. One way to see the only potentially missing step is to use completeness: any finite algebra over a complete Noetherian local ring is a finite product of complete local rings. Since $B$ is a domain, such a product has a single nonzero factor. Write its maximal ideal as $\mathfrak n$. Integral-extension dimension theory gives $\dim B=\dim A=d$, and $\sqrt{\mathfrak mB}=\mathfrak n$.

## Why the depth is d

A normal Noetherian local domain of dimension at most two is Cohen–Macaulay. Explicitly, $S_2$ gives

$$\mathrm{depth} B\ge\min(2,\dim B)=d,$$

and depth never exceeds dimension. Thus every system of parameters of the local ring $B$ is a $B$-regular sequence.

Choose a system of parameters $x_1,\ldots,x_d$ of $R$. Their ideal is $\mathfrak m$-primary. Its image in $A$ remains primary to the maximal ideal and has $d$ generators; since $\dim A=d$, it is a system of parameters of $A$. Its extension to the finite local integral extension $B$ is $\mathfrak n$-primary. It is therefore a system of parameters of $B$, and hence a regular sequence on $B$.

Regard $M=B$ merely as an $R$-module. The injectivity of multiplication by each $x_i$ on the successive quotients is the identical assertion over either ring. The last quotient $B/(x_1,\ldots,x_d)B$ is nonzero by Nakayama, because its defining ideal is contained in $\mathfrak n$. Consequently $\mathrm{depth}_R M\ge d$, hence equals $d$. This supplies exactly a nonzero finitely generated maximal Cohen–Macaulay module as requested.

For $d=0$, the empty parameter sequence is regular by convention; the module $R/\mathfrak m$ already suffices. The normalization construction also yields a finite field extension of the domain quotient, which in dimension zero is that field itself. For $d=1$, normalization is a normal one-dimensional local domain, hence a discrete valuation ring when it is not a field. For $d=2$, the substantive input is precisely $S_2$; normality in higher dimension gives only depth at least two, not full depth.

## What the construction does and does not assert

The module can be annihilated by $\mathfrak p$, so it need not be faithful over $R$. Faithfulness is not requested in the prompt. The construction is a finite algebra over a quotient of $R$ and thus a finite $R$-algebra, but injectivity $R\hookrightarrow B$ is not claimed. Completion matters here because it supplies excellence and the local decomposition of the normalization.

The earlier revision reports a claimed three-dimensional normal complete local counterexample from an unformalized 2026 OpenAI manuscript. That claim was not independently verified here. The present proof is independent of it, treats every complete local ring in dimensions zero through two, and identifies the exact point where the argument stops at dimension three. It does not assert that normalization is Cohen–Macaulay in arbitrary dimension.

## References checked

- The Stacks Project, excellent rings, Proposition 15.53.3, Lemmas 15.53.2 and 15.53.5: https://stacks.math.columbia.edu/tag/07QS
- The Stacks Project, Serre criterion for normality, Lemma 10.157.4: https://stacks.math.columbia.edu/tag/031S
- The Stacks Project, Cohen structure theorem and finite algebras over complete local rings: https://stacks.math.columbia.edu/tag/0323
- Earlier revision inspected: https://we-solve.github.io/contributions/small-cohen-macaulay-conjecture/attempt-1/r1/


## Reproducibility and review

Proof only; no computational verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

The Stacks Project, excellent rings, Proposition 15.53.3, Lemmas 15.53.2 and 15.53.5: https://stacks.math.columbia.edu/tag/07QS
The Stacks Project, Serre criterion for normality, Lemma 10.157.4: https://stacks.math.columbia.edu/tag/031S
The Stacks Project, Cohen structure theorem and finite algebras over complete local rings: https://stacks.math.columbia.edu/tag/0323
Earlier revision inspected: https://we-solve.github.io/contributions/small-cohen-macaulay-conjecture/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.
