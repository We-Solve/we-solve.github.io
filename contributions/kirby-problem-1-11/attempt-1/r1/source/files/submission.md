# The cabling slope and reducible fillings of positive torus knots

**Problem:** TOP-2670

**Claim type:** Literature report

**Exact scope:** For every coprime p,q>1, the only nonprime rational Dehn filling of T_{p,q} is slope pq in the prompt’s meridian–longitude convention; that filling is a connected sum of two nontrivial lens spaces.

## A completely classified knot family

Fix coprime integers $p,q>1$ and the positive torus knot $K=T_{p,q}$. The torus-knot case of the Cabling Conjecture is the classical surgery classification of Louise Moser. In the convention of the prompt,

$$S^3_{pq}(T_{p,q})\cong L(p,q)\#L(q,p)$$

up to choices of orientation convention for the lens-space labels. Both summands are nontrivial: their fundamental groups have orders $p$ and $q$, respectively. For every other rational filling slope the result is prime. The claim concerns all rational slopes on every knot in this family; it is not an assertion about arbitrary satellite or hyperbolic knots.

## Translate the surgery convention before applying the theorem

Moser describes the new meridian as $P\lambda-Q\mu$, with coprime $P,Q$ and $P>0$. In the prompt, a reduced rational slope $a/b$ denotes $a\mu+b\lambda$. Thus set $P=b$ and $Q=-a$, choosing the representative with $b>0$. Her parameter controlling the third fiber is

$$|pqP+Q|=|pqb-a|.$$

In particular this parameter is zero exactly when $a/b=pq$. Coprimality then forces $b=1$. One must not read the pair $(P,Q)$ in the old paper as the modern numerator and denominator without this conversion.

The regular fiber on the boundary of the torus-knot exterior represents $pq\mu+\lambda$. Its slope is $pq$. Geometrically it is the parallel to the knot in the standard companion torus, so it is precisely the cabling-annulus slope used in the question. Regard the torus knot as the nontrivial $(p,q)$ cable of the unknot, with longitudinal winding greater than one; the question allows that companion.

## What Moser’s classification supplies

Proposition 3.1 gives a Seifert filling over the two-sphere with exceptional multiplicities $p,q,|pqb-a|$ whenever the last integer is nonzero. At value one the third fiber is ordinary, and Proposition 3.2 identifies a lens space. Proposition 4 gives the displayed connected sum when the last integer is zero. The standard primeness statement for these Seifert fillings is part of the classification: the possible reducible orientable Seifert spaces over a sphere would require the exceptional degeneracies of $S^2\times S^1$ or $\mathbb{RP}^3\#\mathbb{RP}^3$, which do not arise with the two coprime multiplicities $p,q>1$. Equivalently, the remaining torus-knot fillings are irreducible Seifert spaces or lens spaces. The meridional filling, if included as slope infinity, is $S^3$ and is also prime.

At the zero parameter the two lens-space factors can be seen directly by cutting the added solid torus along two meridian disks and using the annulus left by the companion torus. This gives a separating two-sphere. Capping each component by a ball gives the indicated two solid-torus gluings. This is the geometric construction in Proposition 4, and identifies the splitting rather than merely inferring reducibility from an abstract group presentation.

## Scope boundary

The proof retains the rational-slope and nonprime conventions of the prompt. A lens space itself is prime, so the many torus-knot lens-space surgeries do not supply additional nonprime slopes. Merely having a Seifert-fibered filling also does not imply a reducible filling. We do not adopt the broader conjectures in §5 of Moser’s historical paper; several concern different questions. Only the torus-knot classification is reported here.

## Checked references

- Louise Moser, Elementary surgery along a torus knot, Pacific J. Math.38(3) (1971),737–745, Propositions 3.1,3.2 and4; primary published PDF: https://msp.org/pjm/1971/38-3/pjm-v38-n3-p17-s.pdf


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no earlier contributions listed; primary theorem and hypotheses checked by browsing; displayed deduction checked algebraically. No program or formal verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Louise Moser, Elementary surgery along a torus knot, Pacific J. Math.38(3) (1971),737–745, Propositions 3.1,3.2 and4; primary published PDF: https://msp.org/pjm/1971/38-3/pjm-v38-n3-p17-s.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.
