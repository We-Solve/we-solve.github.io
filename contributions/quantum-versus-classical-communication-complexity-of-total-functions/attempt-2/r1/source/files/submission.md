# Quantum versus Classical Communication Complexity of Total Functions

Claim type: **Partial result**.

Exact scope: For total intersection-threshold functions F_{n,t}(x,y)=[|x∩y|≥t] with 1≤t≤n/2, public-coin classical cost is at most C(1+Q*)², where Q* allows free prior entanglement.

## A uniform threshold subclass

Inputs are arbitrary n-bit incidence vectors x,y; there is no promise on either party's set. Let 1≤t≤n/2. Alice can send her entire vector to Bob, who computes the answer; if both parties must know it, Bob sends one additional bit. Therefore R_{1/3}(F_{n,t})≤n+1, with zero error. This protocol is independent of t and uses no hashing assumptions.

Restrict both input vectors to have their first t−1 coordinates equal to one. Leave all remaining r=n−t+1 coordinates unrestricted. On this rectangle of inputs,
F_{n,t}(x,y)= [the remaining two sets intersect].
It is the complement of set disjointness on r elements. Complementing the final output does not change bounded-error communication cost, and restricting inputs cannot increase the cost of a protocol for the full function. Consequently
Q*_{1/3}(F_{n,t}) ≥ Q*_{1/3}(DISJ_r).

The credited deep input is Razborov's Ω(√r) lower bound for bounded-error quantum set disjointness, including unlimited prior entanglement [R, Theorem 2.1 and its disjointness specialization]. Thus for an absolute c>0 and sufficiently large r, Q*≥c√r≥c√(n/2). Combining with the trivial classical protocol yields n+1≤C(1+Q*)² for one absolute C; increase C to absorb the finite small-r cases. This proves the prompt's polynomial relation, with degree two and no leftover log n or input-size multiplier, simultaneously for all thresholds in the stated range.

The only use of the restriction is for a lower bound. The advertised F_{n,t} itself remains total on the full Cartesian input domain. The proof does not substitute a promise communication problem for the requested total-function relation. Local computation is uncharged in both models, as in the literal prompt.

[R] Alexander A. Razborov, Quantum Communication Complexity of Symmetric Predicates, arXiv:quant-ph/0204025v2 (10 April 2002), subsequently Izvestiya Mathematics 67 (2003). The primary abstract and theorem section explicitly retain prior entanglement. That lower-bound proof is imported and credited, not independently reproduced here. No quantum upper bound or tight separation is needed for our deduction. Thresholds above n/2 and arbitrary total Boolean functions are not covered by this argument.

## Earlier contributions and limits

The previous attempt analyzes equality, public randomness, and the inadequacy of deterministic-rank arguments. The intersection-threshold family uses a different substantial entanglement-valid lower bound, with an explicit restriction and a dimension-free polynomial deduction.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

Source/proof-only contribution: no program is attached. The rectangle restriction, complement invariance, trivial exact classical protocol and absorption of finite small cases are proved explicitly; the quantum lower bound is credited literature.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

Source/proof-only contribution: no program is attached. The rectangle restriction, complement invariance, trivial exact classical protocol and absorption of finite small cases are proved explicitly; the quantum lower bound is credited literature.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_200a2804c8274059a0adaa5a0b26b6be.txt
Razborov, arXiv:quant-ph/0204025v2, primary Theorem 2.1 and disjointness specialization: https://www.ias.edu/sites/default/files/math/csdm/01-02/arazborov_quantum_communication_complexity.pdf .
Exact source versions, statements and uses are described in report.md and source_notes.md.
