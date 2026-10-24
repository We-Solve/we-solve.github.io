# Proper affine actions give reduced assembly for products of free groups

Problem: prb_602ad418e0804f679d6a866541729fb1

Claim type: Literature report

Exact scope: The coefficient-free reduced Baum–Connes assembly map is an isomorphism for every finite direct product of finitely generated free groups. An explicit proper affine Hilbert action verifies the hypothesis of the credited Higson–Kasparov theorem.

## The established theorem and its application

Higson and Kasparov's Theorem 1.2 in [1] states that a countable discrete group admitting a metrically proper affine isometric action on a possibly infinite-dimensional real inner-product space has isomorphic maximal and reduced Baum–Connes assembly maps. We use only its reduced, coefficient-free conclusion. Its analytic proof is an external input, not a consequence of the elementary cocycle computation below.

Let F_r be the free group on r generators, with 1 <= r < infinity, and T its Cayley tree. Orient each geometric edge arbitrarily. The real Hilbert space H has these geometric edges as an orthonormal basis. A directed traversal is represented by plus or minus that basis vector, according to orientation. Left multiplication on T induces an orthogonal representation pi of F_r on H, with the appropriate signs when an orientation reverses.

For g in F_r let b(g) be the signed edge chain of the unique reduced path from the identity vertex to g. It has finite support. Concatenating the path to g and the translated path from g to gh, then cancelling immediate reversals, gives

\[
b(gh)=b(g)+\pi(g)b(h).
\]

Cancellation is legitimate in H because a reversed traversal contributes the negative of the same coordinate. Each surviving edge of a reduced tree path occurs once. Therefore

\[
\|b(g)\|^2=|g|,
\]

where |g| is reduced word length. Consequently g acts by v -> pi(g)v+b(g), an affine isometry. For every fixed v,

\[
\|\pi(g)v+b(g)\|\geq\sqrt{|g|}-\|v\|\longrightarrow\infty
\]

as g leaves finite sets. Finite rank matters here: every word ball is finite. Thus this action is metrically proper.

For G = F_{r_1} x ... x F_{r_s}, take the orthogonal direct sum of the s spaces and let each factor act on its own summand. The combined cocycle has squared norm sum_j |g_j|. Its bounded sublevel sets are finite products of finite word balls, so the same properness proof applies. G is countable discrete, hence second countable and locally compact, and all hypotheses of [1] hold. Factors of rank zero may be omitted; the empty product is the trivial group, whose assembly map is the identity on the K-theory of the scalar field.

This proves the stated subcase by applying a known analytic theorem to a fully specified geometric action. It is not a new assembly theorem or a priority claim.

## Scope and verification

The universal prompt ranges over all second-countable locally compact groups. No assertion here supplies such an action for every group, nor promotes an arbitrary-coefficient result or a maximal completion to the requested reduced conclusion. The earlier A2 attempt mentions a-T-menability in a frontier survey but develops a localization-algebra obstruction and spectral-gap test; the present addition is the explicit product-of-trees cocycle and properness certificate. A3 reports separate claimed universal counterexamples, which this report does not certify or use.

The accompanying exact word checker tests the cocycle and norm identities on bounded free-group words. The argument above proves them for all words; the program does not compute analytic K-theory or verify Higson–Kasparov's proof.

## Checked references

1. N. Higson and G. Kasparov, Operator K-theory for groups which act properly and isometrically on Hilbert space, Electronic Research Announcements AMS 3 (1997), 131–142, Theorem 1.2. Publisher TeX: https://ftp.gwdg.de/pub/misc/EMIS/journals/ERA-AMS/1997-01-022/1997-01-022.tex.html


## Reproducibility and review

Self-contained cocycle/properness proof plus credited external assembly theorem. Exact standard-library word checker supplied; it does not verify analytic K-theory.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

N. Higson and G. Kasparov, Operator K-theory for groups which act properly and isometrically on Hilbert space, Electronic Research Announcements AMS 3 (1997), 131–142, Theorem 1.2. Publisher TeX: https://ftp.gwdg.de/pub/misc/EMIS/journals/ERA-AMS/1997-01-022/1997-01-022.tex.html
Exact source versions, statements and uses are described in report.md and source_notes.md.
