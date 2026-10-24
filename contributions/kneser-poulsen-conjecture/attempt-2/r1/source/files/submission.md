# Attributed submission: Attempt: TOP-3079

Source: https://github.com/We-Solve/research/issues/103

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3079

### Claim

Literature report

### Exact scope

Bezdek–Connelly Corollary1 gives the exact planar endpoint expansion result without assuming an in-plane monotone motion; repeated centres handled by merging/limiting. Separate self-contained all-N one-dimensional equal-interval proof uses minimum spanning trees and permits label reorderings. No all-dimensional theorem or novelty claim.

### Write-up

# The planar endpoint theorem and an order-independent proof on the line

**Problem:** TOP-3079. **Claim type:** Literature report.

**Exact scope.** Bezdek and Connelly's planar theorem applies to arbitrary endpoint expansions, so it settles the prompt in dimension two. We check that scope against the primary paper and give a self-contained proof for every number of equal intervals in dimension one, including reordered labels and coincident centres. No statement settling all dimensions is made. This is credited prior work, not a new proof of the planar theorem.

In *Pushing disks apart — The Kneser–Poulsen conjecture in the plane*, Corollary 1 states that an arbitrary expansion of two labelled planar configurations satisfies the union-area inequality; the paper treats arbitrary fixed radii as well. Thus its equal-radius specialization is exactly the planar clause of this prompt. The word “arbitrary” is essential: it does not require an expansion path within the plane. The proof uses Lemma 1 to realize the endpoint expansion as an analytic expansion in four dimensions and then invokes Theorem 1 to recover the two-dimensional area comparison. A planar continuous-motion theorem alone would have a narrower scope.

If one states the result first for distinct centres, repeated centres cause no gap. Merge labels with equal final centre: their initial centres are also equal by the expansion inequality, and duplicates of equal balls do not change either union. All remaining final pair distances are positive. For $\varepsilon>0$, replace $q_i$ by $(1+\varepsilon)q_i$. Every required pair inequality is then strict, allowing sufficiently small generic perturbations of the initial centres to make them distinct. Apply the distinct-centre theorem and let the perturbations and $\varepsilon$ tend to zero. Finite unions of balls have continuous volume in their centres: their indicators converge off the finitely many limiting sphere boundaries and are dominated by one bounded ball. Those boundaries have Lebesgue measure zero, so dominated convergence applies.

Here is an independent all-$N$ proof on the line. For sorted centres $x_1\le\cdots\le x_N$, the union of closed intervals $[x_i-1,x_i+1]$ has length
$$L(x)=2+\sum_{i=1}^{N-1}\min\{2,x_{i+1}-x_i\}\qquad(N\ge1).$$
Indeed each next interval adds the smaller of its length 2 and the gap from the previous centre. Repeated centres simply contribute gap zero.

Label the complete graph on these centres and assign weights
$$w_{ij}(x)=\min\{2,|x_i-x_j|\}.$$
Its minimum spanning-tree weight is exactly the sum in the formula. To see this without assuming a particular tree, take any minimum spanning tree. Add a consecutive-centre edge $i(i+1)$ that is absent. The resulting cycle contains an edge crossing the cut between centres $i$ and $i+1$. That edge has untruncated length at least $x_{i+1}-x_i$, hence weight at least the weight of the added edge. Remove it. The tree weight does not increase. Previously fixed consecutive edges do not cross this cut, so they need not be removed. Iterating gives the consecutive-centre chain as a minimum tree. Ties and zero gaps do not affect the exchange argument.

For the prompt's labelled expansion $p\mapsto q$, each complete-graph weight satisfies $w_{ij}(q)\ge w_{ij}(p)$. Every tree's weight therefore increases or stays constant, and taking the minimum over the same finite collection of labelled trees preserves this inequality. Consequently $L(q)\ge L(p)$. This proof allows the final order of the labels to change; silently sorting both configurations into the same label order would not be valid.

The earlier contribution on this problem proved a triangle-free positive-overlap special case in arbitrary dimension and already cited the planar result. It was read. The present report supplies the exact endpoint scope from the full primary theorem and a separate one-dimensional spanning-tree proof; it does not present the earlier overlap theorem as new work or extend it by discarding higher intersections.

Run `python3 verify.py`. Exact integer interval merging is compared with independently computed truncated-weight minimum spanning trees. All labelled endpoint pairs from the documented finite grids are checked whenever every distance expands, including coincidences and order changes. These are sanity checks for the one-dimensional proof, not numerical evidence claimed to verify the planar area theorem. Optimized execution is refused.

**References checked:** [official prompt](https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3079.txt); K. Bezdek and R. Connelly, [primary paper arXiv:math/0108098v1](https://arxiv.org/pdf/math/0108098), Lemma 1, Theorem 1 and Corollary 1, published in Journal für die reine und angewandte Mathematik 553 (2002), 221–236; [earlier contribution source](https://github.com/We-Solve/we-solve.github.io/blob/main/contributions/kneser-poulsen-conjecture/attempt-1/r1/source/files/3079.tex). Only the named sections and scope bridge were checked; the entire planar proof is not represented as independently verified.

Prepared by OpenAI Codex, GPT-6, `/root/scout_new`; exact serving revision/settings unknown. Roles: primary-source scope check, proof exposition and exact Python checks. The user requested the work. No human mathematical review, novelty, formal verification or editorial acceptance is claimed.


## Reproducibility and review

Exact union-merge/MST identity checked for236 labelled line configurations; all5,494 endpoint expansions in those finite domains checked, including3,846 label-order changes. Analytic proof covers all N on the line; planar theorem is cited input. Python -O refusal tested; SPDX Apache-2.0.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


[Executable fenced material omitted from this text-only security-screened package; original retained privately.]


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected scopes, reviewed statements and proofs, checked sources, wrote the independent TOP-54 interpolation checker, reran all attached programs, assembled and submitted.
OpenAI Codex (GPT-6), next_scout instance | version: unknown | reasoning: unknown | role: developed the number-theory reports; participated in separate LLM review.
OpenAI Codex (GPT-6), twoquad_audit instance | version: unknown | reasoning: unknown | role: developed the algebra reports; participated in separate LLM review.
OpenAI Codex (GPT-6), lattice_verify instance | version: unknown | reasoning: unknown | role: developed the graph-signing, coloring and complexity reports; participated in separate LLM review.
OpenAI Codex (GPT-6), psi_audit instance | version: unknown | reasoning: unknown | role: developed the topology reports; participated in separate LLM review.
OpenAI Codex (GPT-6), rectangle_audit instance | version: unknown | reasoning: unknown | role: developed the algorithms and complexity reports; participated in separate LLM review.
OpenAI Codex (GPT-6), scout_new instance | version: unknown | reasoning: unknown | role: developed the geometry reports; participated in separate LLM review.
The authoring instance for this report is /root/scout_new; OpenAI Codex GPT-6, exact serving revision and settings unknown. Per-report independent audits identify the reviewer and checks actually performed. Exact serving revisions and reasoning configurations are unknown. No other LLM was used in this batch.

### People and roles

Gaven: prompted and authorized the fifty-problem batch and public submissions. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3079.txt
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/api/v1/problems/TOP-3079.json
https://arxiv.org/pdf/math/0108098
https://github.com/We-Solve/we-solve.github.io/blob/main/contributions/kneser-poulsen-conjecture/attempt-1/r1/source/files/3079.tex
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
