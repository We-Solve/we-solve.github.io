# Carnahan’s generalized moonshine theorem matches all five Norton conditions

Claim type: Literature report

Exact scope: A credited literature report of generalized moonshine for every commuting Monster pair, with rational grading, projective centralizer action, congruence Hauptmodul property, and the exact identity-pair normalization.

Carnahan’s Theorem 4.2.2 in the inspected version [1] supplies the irreducible g-twisted moonshine module V^natural(g), its canonical projective C_M(g)-action and trace functions for all commuting pairs. It proves holomorphy, conjugation covariance, the constant-or-Hauptmodul dichotomy and modular covariance up to nonzero scalar. This is an imported theorem, not a new proof of the vertex-algebra and Lie-algebra machinery. The cited source is arXiv:1208.6254v3 (20 August 2016); its abstract page calls the manuscript submitted, and no journal publication is asserted here.

Here is the exact matching of conventions that is needed by this prompt. Grade the twisted module by its rational L_0 eigenvalue r. Its trace against a chosen lift of h is then sum_r Tr(h-tilde|V(g)_r) q^{r−1}, exactly the exponent convention in condition 1. The theorem supplies finite-dimensional graded pieces and convergence on the upper half-plane. Projectivity explains why conjugation and modular transformations give proportional functions: an arbitrary normalization of each lift need not give equality of those functions.

The congruence qualification is also retained. Theorem 4.2.1 gives a Hauptmodul with invariance group containing a principal congruence subgroup for Fricke twists. The proof of 4.2.2 moves every nonconstant case to such a twist by an SL_2(Z) transformation; otherwise the function is regular at all cusps and constant. Conjugating a group containing Γ(K) by an integral unimodular matrix again contains Γ(K), since Γ(K) is normal in SL_2(Z). Multiplication of a Hauptmodul by a nonzero scalar does not change the function field it generates. Thus this source conclusion has the genus-zero congruence meaning specified in condition 3, not merely an unspecified modular function.

Finally the theorem’s fifth condition is actually stronger than the prompt’s exclusion: proportionality to J occurs only for (g,h)=(1,1). At that pair choose the identity lift on the untwisted module. Its vacuum coefficient is one, so its graded character is the normalized moonshine character J, with no extra scalar. All other pairs fail even proportionality to J and hence cannot equal J. This proves the exact equality convention in condition 5 without strengthening covariance to exact equality elsewhere.

The report concerns all commuting pairs, not just (1,h). No claimed new formal verification or computer construction of all twisted modules accompanies it. The long proof’s external inputs are credited as part of Carnahan’s theorem rather than independently certified in this contribution.

Relation to earlier contributions. The fresh prompt lists no earlier contribution and itself identifies the historical theorem as proved. The added work here is the precise five-condition and normalization match, including congruence groups and the difference between equality at the identity pair and proportional covariance.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- [1] Scott Carnahan, Generalized Moonshine IV: Monstrous Lie algebras, arXiv:1208.6254v3, 20 August 2016. Theorem 4.2.1, Theorem 4.2.2 and its proof, pp.31–32; introduction records the normalized untwisted character. Primary PDF and abstract/version page checked; submitted manuscript, no publication claimed. https://arxiv.org/pdf/1208.6254
- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1194.txt


## Reproducibility and review

Source-only: literal prompt, prior full texts and stated references checked; written deduction audited by author, without formal or human verification.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

[1] Scott Carnahan, Generalized Moonshine IV: Monstrous Lie algebras, arXiv:1208.6254v3, 20 August 2016. Theorem 4.2.1, Theorem 4.2.2 and its proof, pp.31–32; introduction records the normalized untwisted character. Primary PDF and abstract/version page checked; submitted manuscript, no publication claimed. https://arxiv.org/pdf/1208.6254
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1194.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
