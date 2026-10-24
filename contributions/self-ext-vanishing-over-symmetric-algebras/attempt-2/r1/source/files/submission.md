# Periodic modules force positive self-extensions over symmetric algebras

**Problem:** TOP-30007006

**Claim type:** Partial result

**Exact scope:** Every nonprojective module that is periodic in the stable category of a finite-dimensional symmetric algebra has a nonzero positive self-Ext; in particular the prompt has a positive answer for all representation-finite symmetric algebras.

## Stable periodicity as a complete positive case

Let $A$ be a finite-dimensional symmetric algebra over any field. Write $\underline{\mathrm{Hom}}_A(X,Y)$ for $A$-linear maps modulo maps factoring through finite projective modules, and let $\Omega$ be the syzygy functor on this stable category. If a nonprojective finite module $M$ satisfies

$$\Omega^p M\simeq M\quad\text{in the stable category for some }p\ge1,$$

then $\mathrm{Ext}_A^p(M,M)\ne0$. Thus the vanishing condition in the prompt implies projectivity for every module with stable periodicity. This includes every module over a representation-finite symmetric algebra. These are standard positive cases; they are not claimed as new to the literature.

## Why symmetry supplies the needed homological properties

Symmetric means $A\simeq D(A)=\mathrm{Hom}_k(A,k)$ as $A$-bimodules. The left module $D(A)$ is injective, because

$$\mathrm{Hom}_A(X,D(A))\simeq D(X)$$

is an exact functor of finite-dimensional modules. Hence the regular module $A$ is injective, and every finite projective is injective. Conversely, finite injectives are summands of finite sums of $D(A)$ and hence projective. The finite-module category is therefore Frobenius.

Given $0\to\Omega X\to P\to X\to0$ with $P$ projective, applying $\mathrm{Hom}_A(-,Y)$ gives

$$\mathrm{Ext}_A^1(X,Y)=\mathrm{Hom}_A(\Omega X,Y)/\mathrm{im}\mathrm{Hom}_A(P,Y).$$

The denominator equals the maps factoring through projectives. One containment is immediate from $P$ being projective. Conversely, if $\Omega X\to Q\to Y$ factors through a projective $Q$, injectivity of $Q$ extends the first map over $P$. Thus

$$\mathrm{Ext}_A^q(X,Y)\simeq\underline{\mathrm{Hom}}_A(\Omega^q X,Y)\qquad(q\ge1)$$

by dimension shifting. No positive Ext into $A$ hypothesis is required here.

## The nonzero stable identity

The identity of a nonprojective module is nonzero in the stable category. If it factored as $M\to Q\to M$ with $Q$ projective, then $M$ would be a direct summand of $Q$ and hence projective. A stable isomorphism $\Omega^pM\simeq M$ is therefore a nonzero stable map to $M$. The displayed Ext–stable-Hom identification makes it a nonzero element of $\mathrm{Ext}_A^p(M,M)$, proving the first assertion.

## Representation-finite algebras

Suppose $A$ has only finitely many isomorphism classes of indecomposable finite modules. On its stable category, $\Omega$ is an autoequivalence: its inverse is obtained by taking the cokernel of an embedding into an injective-projective, and the two compositions are the identity up to projective summands by the elementary Schanuel comparison of two such exact sequences. The finite stable category is Krull–Schmidt; the indecomposable nonzero objects are exactly nonprojective indecomposable modules up to stable isomorphism. An autoequivalence permutes their finitely many isomorphism classes. Each such object is consequently periodic under some positive power of $\Omega$.

If $M$ is nonprojective, it has a nonprojective indecomposable summand $X$. Choose a period $p$ for $X$. The preceding result gives $\mathrm{Ext}_A^p(X,X)\ne0$. Additivity in each variable makes this group a direct summand of $\mathrm{Ext}_A^p(M,M)$, so the latter is nonzero. Equivalently, if there are $t$ nonprojective indecomposable stable isomorphism classes, a period for $X$ is at most $t$; a positive self-extension occurs by degree $t$.

## Limit and prior-claim comparison

The conclusion applies to representation-finite symmetric algebras in every characteristic, and also to individual periodic modules over algebras of infinite representation type. It does not assert periodicity for every module over an arbitrary symmetric algebra. A bounded list of numerically zero Ext groups is insufficient without a proven period.

The earlier revision reports an unverified general symmetric-algebra counterexample attributed to a 2026 manuscript. No such example is checked here. If it is valid, its nonprojective module cannot be stably periodic and its algebra cannot be representation-finite, by the independent proof above. That is a useful exact boundary, not a general validation or refutation of the reported manuscript.

## References checked

- Craig Huneke and Graham J. Leuschke, On a conjecture of Auslander and Reiten, formulation of the self-extension problem and homological context: https://arxiv.org/pdf/math/0305001
- Earlier revision inspected: https://we-solve.github.io/contributions/self-ext-vanishing-over-symmetric-algebras/attempt-1/r1/


## Reproducibility and review

Proof only; no computational verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Craig Huneke and Graham J. Leuschke, On a conjecture of Auslander and Reiten, formulation of the self-extension problem and homological context: https://arxiv.org/pdf/math/0305001
Earlier revision inspected: https://we-solve.github.io/contributions/self-ext-vanishing-over-symmetric-algebras/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.
