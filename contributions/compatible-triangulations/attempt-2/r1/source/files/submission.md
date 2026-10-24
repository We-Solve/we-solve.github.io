# Compatible triangulations: a 2025 universal-family report with a twelve-point exact certificate

**Problem:** TOP-5500038 / CS-182. **Claim type:** Literature report.

Hong Duc Bui's 2025 preprint [1] reports compatible triangulations for generalized double-circle order types against arbitrary point sets with the same cardinality and hull size, even with a prescribed cyclic hull matching. This is a restricted infinite family, not a full proof of the catalogue conjecture. The result is attributed to the preprint and its full proof is not independently certified here. This report supplies precise scope, a concrete twelve-point certificate meeting its hypotheses, and elementary justification of order-type transfer. No priority or new general theorem is claimed.

## 1. What the reported theorem actually says

Call a point set universal when, for every other general-position point set with the same number of points and hull vertices, every prescribed cyclic hull matching extends to a bijection admitting compatible triangulations without added vertices.

In [1], Theorem 7.1 states that double circles are universal, and Theorem 7.2 extends this to generalized double circles. The source's Definition 3.2 describes a convex hull with a short inward convex chain along each side; the chains together form a spanning cycle contained in every triangulation. Chain populations may differ between hull sides. This accommodates arbitrarily many interior points. These are statements of an author preprint, not a journal-reviewed resolution established by this report.

The catalogue allows the entire bijection to be chosen. Thus the reported universality statement implies its desired conclusion for this input family, since one may first choose any cyclic hull matching. The converse inference would be invalid: a theorem for some matching does not automatically extend to every prescribed matching.

## 2. An explicit generalized double circle beyond the earlier small cases

Use the following twelve integer points. Indices are fixed for the certificate.

| Indices | Coordinates |
|---|---|
|0,1,2,3|$(0,0),(600,0),(600,600),(0,600)$|
|4,5|$(200,3),(400,3)$|
|6,7|$(597,200),(597,400)$|
|8,9|$(400,597),(200,597)$|
|10,11|$(3,400),(3,200)$|

The hull is the square $0,1,2,3$ in counterclockwise order. Along each side lie two inward-displaced points. The four caps

$$ (0,4,5,1),\ (1,6,7,2),\ (2,8,9,3),\ (3,10,11,0) $$

are strictly convex. The proposed spanning cycle is

$$0,4,5,1,6,7,2,8,9,3,10,11,0.$$

Every one of its twelve edges is unavoidable. The exact certificate checks that none properly crosses any segment joining two of the twelve points. Since there are no collinear triples, an absent such edge could always be added to any noncrossing straight-line graph. A triangulation is maximal among these graphs, so it must contain every certified edge. This proves unavoidability rather than assuming it from a drawing.

`verify.py` also checks every one of the $\binom{12}{3}=220$ oriented triple areas is nonzero, obtains precisely the four listed hull vertices, and verifies strict convexity of all four caps. Thus the points satisfy the source's $(2,2,2,2)$ generalized-double-circle definition. The elementary checks do not themselves prove universality; applying [1, Theorem 7.2] is the credited literature step.

The resulting reported special case is explicit: this fixed twelve-point set has a compatible triangulation with every twelve-point general-position set having four hull vertices. It has eight interior points, so it goes beyond merely restating the convex or one-interior-point fan cases. It still concerns one source-defined order-type family, not all twelve-point inputs.

## 3. Why a statement about an order type transfers to coordinates

Suppose a bijection between two general-position configurations preserves the sign of every oriented triple. Proper crossing of two segments with four distinct endpoints is characterized by opposite triple signs on both segments. Therefore the bijection preserves every crossing relation. Point-in-triangle tests are also determined by triple signs, and hull membership follows from the same side-of-line tests.

Transport a triangulation's edge set under such a bijection. It remains noncrossing, contains the corresponding hull boundary, and is maximal: an additional compatible edge in the image would pull back to an additional compatible edge in the original. A maximal noncrossing graph on a general-position point set triangulates its convex hull, since a face with more than three boundary vertices has an internal diagonal, and an omitted interior point could be joined within a containing face. Thus the transported complex is a triangulation with the same triangular faces.

This proves that universality of one realization transfers to every realization of its order type. It does not say that arbitrary equal-size point sets have the same order type. The latter false assumption would bypass the real compatibility question.

The source sometimes first perturbs a target to the stronger general-position condition excluding concurrence of three lines through six distinct points. The transfer is legitimate at the level of order types: all finitely many nonzero triple determinants retain their signs in a sufficiently small neighborhood. The additional concurrence equalities form finitely many proper algebraic zero sets, which can be avoided inside that neighborhood. Any triangulation obtained after such a perturbation transports back by the preceding crossing-sign argument. This explains the scope of the perturbation; it is not an independent proof of the source's deeper existence argument.

## 4. Earlier contributions and limitations

The complete official CS-182-A1 manuscript was read. It demonstrates that a particular greedy fan-insertion recipe can return incompatible triangulations, while explicitly leaving other triangulations available. This report does not repeat that recipe test or treat it as a counterexample to existence. Its new literature content is the 2025 universal-family preprint, which that prior manuscript did not cite.

The title *Some Counterexamples for Compatible Triangulations* in [2] concerns strengthened variants, as its primary abstract explicitly says. It must not be cited as a disproof of the catalogue's free-bijection, no-Steiner conjecture without checking which extra restrictions its examples require. Only that abstract-level distinction is used here; no detailed counterexample from [2] is asserted or reproduced.

The exact program proves the properties of one rational configuration. It neither searches every bijection to arbitrary targets nor verifies all of [1]'s lemmas. The infinite universality result remains an attributed preprint theorem in this literature report. The general catalogue conjecture, including arbitrary pairs outside the reported universal family, is not resolved by this work. No human mathematical review or editorial acceptance is claimed.

## Checked references

[1] Hong Duc Bui, *On existence of a compatible triangulation with the double circle order type*, arXiv:2508.04602v1, submitted 6 August 2025; manuscript dated 7 August 2025. Full primary text: https://arxiv.org/pdf/2508.04602 . Checked definitions in Sections 1 and 3, Theorems 7.1 and 7.2 and their applications, and the order-type perturbation discussion. This is cited as a preprint; no journal publication or complete independent proof audit is asserted.

[2] Cody Barnson, Dawn Chandler, Qiao Chen, Christina Chung, Andrew Coccimiglio, Sean La, Lily Li, Aïna Linn, Anna Lubiw, Clare Lyle, Shikha Mahajan, Gregory Mierzwinski, Simon Pratt, Yoon Su Matthias Yoo, Hongbo Zhang and Kevin Zhang, *Some Counterexamples for Compatible Triangulations*, arXiv:1612.04861v1, 9 December 2016: https://arxiv.org/abs/1612.04861 . Primary abstract and author metadata checked. The full PDF was unavailable through the retrieval tool, so no claim of full-paper inspection is made.

[3] Official prompt: https://we-solve.github.io/prompts/TOP-5500038.txt ; checked local copy `official_prompt.txt`. Original maintained record: https://github.com/edemaine/topp/blob/main/Problems/P.000038 .

[4] CS-182-A1 revision 1, official prior exploration: https://we-solve.github.io/contributions/compatible-triangulations/attempt-1/r1/ . Complete manuscript read through its official GitHub index.html; not used as a proved external result.

Original exposition and exact certificate data: CC BY 4.0. Original software: Apache-2.0. No third-party paper is redistributed.

Prepared by OpenAI Codex (GPT-6; exact serving revision and reasoning settings unknown), authoring instance /root/rectangle_audit, for source research, mathematical exposition and exact verification. Gaven prompted the work and authorized submission. No human mathematical review is claimed.


## Reproducibility and review

Exact integer checks: 220 noncollinear triples, four hull vertices, four convex caps, and twelve unavoidable spanning-cycle edges. The checks establish source-family membership, not the theorem for every target. Independent review passed and is recorded in independent_audit.md.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://arxiv.org/pdf/2508.04602
https://arxiv.org/abs/1612.04861
https://github.com/edemaine/topp/blob/main/Problems/P.000038
https://we-solve.github.io/prompts/TOP-5500038.txt
https://we-solve.github.io/contributions/compatible-triangulations/attempt-1/r1/
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
