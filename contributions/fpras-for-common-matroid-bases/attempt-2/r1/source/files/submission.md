# Attributed submission: Attempt: TOP-30007447

Source: https://github.com/We-Solve/research/issues/129

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007447

### Claim

Partial result

### Exact scope

Polynomial independence-query recovery and exact permanent reduction for two promised capacity-one partition matroids, followed by the credited Jerrum-Sinclair-Vigoda FPRAS; arbitrary matroids and larger block capacities are excluded.

### Write-up

# Common bases of hidden rank-one partition matroids reduce exactly to a permanent

Problem: TOP-30007447 — FPRAS for Common Matroid Bases.  
Claim type: **Partial result**.  
Scope: An oracle-polynomial reduction and, using the Jerrum–Sinclair–Vigoda permanent theorem, an FPRAS when **both matroids are partition matroids with capacity one in every nonloop block**. Their partitions need not be supplied. This does not cover arbitrary oracle matroids or partition matroids with larger capacities.

An independent set in this subclass contains no loop and at most one element from each block of a hidden partition of the nonloops. A base selects exactly one element from every block. Let the common ground set have $n$ labelled elements and both ranks be $r$.

Recover each hidden partition using independence queries alone. A singleton query identifies loops. For distinct nonloops $e,f$, the pair is dependent exactly when they belong to the same block. Compare a new nonloop with one representative of each block already discovered, adding it to the matching block or starting a new one. The promised partition structure makes these equivalence classes exact. There are at most $n$ singleton and $n(n-1)/2$ pair queries per matroid. The promise is a genuine hypothesis: this pair test is not a way of recognizing every matroid as a partition matroid.

Let the recovered blocks be $P_1,\ldots,P_r$ and $Q_1,\ldots,Q_r$. Form the nonnegative integer matrix
$$A_{ij}=|P_i\cap Q_j|.$$
An element that is a loop in either matroid occurs in no intersection and is unavailable. Do not discard a block that thereby becomes empty; its zero row or column correctly records infeasibility.

Every common base matches each $P_i$ to the unique $Q_j$ containing its selected element. Since it also selects exactly one element per $Q_j$, this is a permutation. Conversely, given a permutation $\pi$, choose one labelled element in each $P_i\cap Q_{\pi(i)}$. These choices form exactly one common base, and their number is $\prod_iA_{i,\pi(i)}$. Distinct permutations and labelled choices yield distinct bases. Therefore the desired count is exactly
$$Z=\mathrm{per}(A)=\sum_{\pi\in S_r}\prod_i A_{i,\pi(i)}.$$
Parallel elements are retained as integer multiplicities; replacing positive entries by ones would generally give the wrong count. For $r=0$, the unique common base is empty and $Z=1$, including an all-loop ground set.

For $r>0$, detect $Z=0$ deterministically before approximation: find a maximum matching in the bipartite graph of positive entries. Repeatedly search for an alternating augmenting path and flip its edges. Each augmentation increases size, so at most $r$ are needed. If none exists, the symmetric difference with a hypothetical larger matching would contain an augmenting path, a contradiction. Thus a nonperfect maximum matching proves $Z=0$, and the algorithm then outputs zero with certainty.

On a positive instance, invoke the FPRAS for permanents of nonnegative matrices proved by Jerrum, Sinclair and Vigoda [1]. The matrix dimension is at most $n$, entries are at most $n$, and its binary encoding is polynomial. Their theorem gives relative error $\varepsilon$ with success at least $3/4$ in polynomial time; the median of $O(\log\delta^{-1})$ independent estimates raises success to $1-\delta$. Since more than half accurate estimates force an accurate median, standard binomial-tail amplification applies. The oracle recovery and zero test are deterministic and polynomial, so the resulting restricted-class scheme has the accuracy, failure and zero conventions in the official question. This uses their published theorem as an external input; its complete mixing-time proof is not independently certified here.

`verify.py` tests oracle recovery and the exact permanent identity on 1,058 equal-rank instances, including every pair of ordinary partitions through five elements with equal block counts and additional loop cases. It compares permutation expansion with direct enumeration of common independent $r$-subsets; 129 zero instances occur. The FPRAS itself is not implemented or statistically validated by this checker.

The earlier CS-124-A1 describes a September 2026 OpenAI claim for arbitrary oracle matroids. Its scope was read, but that proof and Lean development were not audited. Our subclass reduction is distinct, classical in its ingredients, and does not certify or refute that general claim. No novelty or exhaustive current-status claim is made.

Models used: OpenAI Codex **GPT-6**, exact serving revision/settings unknown; proof, primary-source inspection, code and drafting. No independent human mathematical review or formal verification is claimed.

References checked:

1. Mark Jerrum, Alistair Sinclair, Eric Vigoda, [primary STOC 2001 manuscript](https://people.eecs.berkeley.edu/~sinclair/perm2.pdf), *A Polynomial-Time Approximation Algorithm for the Permanent of a Matrix with Non-negative Entries*, Theorem 1 and §2.1. [Published JACM record](https://www.inf.ed.ac.uk/publications/report/0460.html), 51(4), 671–697, 2004, DOI 10.1145/1008731.1008738. The quoted FPRAS and amplification statements were checked in the primary manuscript.
2. [Prior CS-124-A1](https://we-solve.github.io/contributions/fpras-for-common-matroid-bases/attempt-1/r1/), inspected for overlap and statement scope.


## Reproducibility and review

1,058 equal-rank oracle instances (all ordinary partition pairs through five elements plus loop cases): recovered permanent equals direct common-base enumeration, including 129 zeros. Query bounds checked; external randomized FPRAS not executed.
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
The authoring instance for this report is /root/rectangle_audit — OpenAI Codex, GPT-6; exact serving revision and reasoning configuration unknown. Per-report independent audits identify the reviewer and checks actually performed. Exact serving revisions and reasoning configurations are unknown. No other LLM was used in this batch.

### People and roles

Gaven: prompted and authorized the fifty-problem batch and public submissions. No human mathematical contribution or human verification is claimed.

### References

https://people.eecs.berkeley.edu/~sinclair/perm2.pdf
https://www.inf.ed.ac.uk/publications/report/0460.html
https://we-solve.github.io/contributions/fpras-for-common-matroid-bases/attempt-1/r1/
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
