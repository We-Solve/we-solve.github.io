# Uniform rational-point bounds throughout the small-rank regime

Problem: TOP-30006763  
Claim type: Literature report  
Author: /root/hundred_numbers

**Exact scope.** For fixed F and g>=3, all smooth proper geometrically connected genus-g curves X/F with rank Jac(X)(F)<=g-3 have a uniform explicit bound depending only on g and [F:Q]. Over Q the bound is 84g^2-98g+28. No unrestricted-rank uniformity is claimed.

The theorem of Katz, Rabinoff and Zureick-Brown gives a precise unconditional subfamily of the prompt's fixed-field uniformity question. Its scope includes arbitrary curves in that rank range, rather than only hyperelliptic curves or curves with a prescribed good-reduction prime.

In arXiv:1504.00694v3, Theorem 1.1 states the existence of an explicit N(g,d), for integers g>=3 and d>=1, bounding #X(F) simultaneously for all number fields F of degree d and all smooth proper geometrically connected genus-g curves whose Jacobian has Mordell–Weil rank at most g-3. Immediately after the theorem the authors give
\[
 N(g,1)=84g^2-98g+28.
\]
The work is published in *Duke Mathematical Journal* 165 (2016); the checked v3 is dated 6 January 2017.

For the prompt, fix the ground field F first and put d=[F:Q]. The same N(g,d) now bounds every curve over that one F satisfying the rank hypothesis. This dependence on degree is even uniform across fields of that degree, but **only within the stipulated rank range**. For example, over Q a genus-three curve of rank zero has at most 490 rational points; the rank-zero qualification is part of the application. A genus-three curve of positive Jacobian rank is not thereby covered. For any g>=3, a certified upper bound rank Jac(X)(F)<=g-3 is sufficient; its exact rank need not have been computed.

The hypothesis concerns the Jacobian's F-rational Mordell–Weil group, not the rank after extending F, the number of geometric torsion points, or a heuristic generic rank. No rational base point is needed in Theorem 1.1; if X(F) is empty the point bound is automatic. The source's separate torsion-packet theorems have different hypotheses and are not substituted for the rational-point theorem.

Why the result matters for uniformity can be seen by comparison with a curve-dependent finiteness statement. Faltings gives finiteness for each X, but taking a supremum over all curves need not preserve finiteness. The quoted theorem controls that supremum on an infinite rank-constrained moduli family with one explicit constant. The original fixed-F problem over all ranks remains beyond this deduction. Genus two is likewise outside this particular theorem's stated range.

The earlier attempt discusses rank-dependent Chabauty bounds and other reductions. The added content is the exact all-curves, arbitrary-reduction small-rank theorem with its numerical Q bound and careful fixed-field quantifiers. Its deep p-adic and Berkovich-geometric proof is credited, not independently reconstructed or formally checked here.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.


## Reproducibility and review

Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Katz–Rabinoff–Zureick-Brown, arXiv:1504.00694v3, Theorem 1.1 and following formula, https://arxiv.org/pdf/1504.00694
Exact source versions, statements and uses are described in report.md and source_notes.md.
