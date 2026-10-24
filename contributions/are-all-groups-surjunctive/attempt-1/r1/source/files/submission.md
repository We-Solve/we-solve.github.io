# Surjunctivity from dense finite quotient configurations

**Problem:** TOP-1115

**Claim type:** Partial result

**Exact scope:** Every residually finite group, without a countability or finite-generation restriction, is surjunctive for every nonempty finite alphabet and every finite-memory local rule.

## Finite quotient configurations

Fix a group $G$, a nonempty finite alphabet $A$, and the exact local convention in the prompt,

$$\tau(x)(g)=\mu((x(gm))_{m\in M}).$$

For a finite-index normal subgroup $N\triangleleft G$, let $X_N$ be the configurations constant on cosets of $N$, equivalently functions factoring through the finite quotient $G/N$. Then $|X_N|=|A|^{[G:N]}$. The automaton preserves $X_N$: if $gN=hN$, then $gmN=hmN$ for every $m$, using normality. Hence the local input tuples agree and $\tau(x)(g)=\tau(x)(h)$.

If $\tau$ is injective on $A^G$, its restriction $X_N\to X_N$ is injective on a finite set, so is surjective. Consequently every $X_N$ is contained in $\tau(A^G)$.

## Residual finiteness gives density

Assume $G$ is residually finite. A basic open neighborhood in the product topology specifies values of a configuration $x$ on a finite subset $F\subseteq G$. Choose a finite quotient injective on $F$, by intersecting finite-index normal subgroups separating all nonidentity differences $g^{-1}h$ for distinct $g,h\in F$. Assign to each quotient point represented by $F$ its prescribed value; injectivity makes this consistent. Give all remaining quotient points a fixed symbol of $A$. Pull back the resulting quotient configuration to $y\in X_N$. It agrees with $x$ on $F$.

Thus $\bigcup_N X_N$ is dense in $A^G$. Empty $F$ and the one-symbol alphabet cause no exception.

## Compactness closes the image

Each output coordinate of $\tau$ depends on the finitely many coordinates $gM$, so $\tau$ is continuous in the product topology. The space $A^G$ is compact by the product theorem for compact finite discrete spaces; it is Hausdorff. This remains true for an uncountable $G$. Its continuous image $\tau(A^G)$ is therefore compact and closed. A closed set containing the dense union $\bigcup_N X_N$ equals $A^G$. Hence $\tau$ is surjective.

This proves the full local-rule quantifiers of the prompt on the class of residually finite groups. No linearity, reversibility hypothesis, or bounded size of the memory set has been inserted. Finite quotient surjectivity alone would not imply global surjectivity without the density and closed-image arguments.

## A useful equivalent diagnostic

For any alphabet with at least two symbols, density of the union of these finite-quotient configurations actually forces residual finiteness. If $g\ne1$ belongs to every finite-index normal subgroup, every such configuration has $x(g)=x(1)$. The nonempty cylinder prescribing two different symbols at $g$ and $1$ is disjoint from the union. This contradicts density. Thus density for these specific quotient configurations characterizes residual finiteness, although **surjunctivity itself** is not asserted to characterize residual finiteness.

The checked primary paper by Fiorenzi treats periodic configurations and derives surjunctivity for residually finite groups in its density section. The proof above removes no hypothesis needed by that mechanism: it spells out normal quotients and compactness so finite generation is unnecessary for the stated full-shift result. The official prompt lists no earlier contribution. The assertion for groups lacking this finite-quotient separation is not settled here; other theorems cover wider classes by different methods.

## References checked

- F. Fiorenzi, Periodic configurations of subshifts on groups, density of periodic configurations and surjunctivity discussion: https://www.lri.fr/~fiorenzi/Publications/fiorenzi09.pdf


## Reproducibility and review

Proof only; no computational verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

F. Fiorenzi, Periodic configurations of subshifts on groups, density of periodic configurations and surjunctivity discussion: https://www.lri.fr/~fiorenzi/Publications/fiorenzi09.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.
