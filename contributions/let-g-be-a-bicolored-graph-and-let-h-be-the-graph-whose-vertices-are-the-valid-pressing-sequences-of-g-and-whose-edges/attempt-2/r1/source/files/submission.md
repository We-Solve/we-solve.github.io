# Attributed submission: Attempt: TOP-3100089

Source: https://github.com/We-Solve/research/issues/132

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle
TOP-3100089

### Claim
Computational evidence

### Exact scope
Independent verification of contribution Math-3818-A1, which claims a full disproof of the
four-total-edit pressing-connectivity assertion recorded as UnsolvedMath ID 3100089.

We re-implemented the pressing rule exactly as recorded in the problem statement, from
scratch, and exhaustively enumerated the complete legal pressing tree of the graph in
Math-3818-A1 (the 5-cycle 1-2-3-4-5-1 with pendant vertex 6 at 2; initially black
vertices {4,5}). The enumeration is finite and complete — no sampling.

Confirmed, in full agreement with Math-3818-A1:
- The complete successful-word family is exactly {432651, 512643}.
- The legal tree has 19 prefixes; the maximal stalled words are exactly
  4321, 4351, 5123, 5143.
- All ten state rows of the published proof table (remaining edges and black set after
  each prefix on the branch beginning with 4) are correct.
- LCS(432651, 512643) = 2 and the insertion-deletion distance is exactly 8
  (verified both by dynamic programming and by |sigma|+|tau|-2*LCS = 8).
- Hence H_4(G) has two vertices at distance 8 > 4 and is disconnected: the recorded
  four-total-edit universal assertion is false.
- The colour-preserving automorphism rho = (1 3)(4 5) maps the graph and the black set
  to themselves and sigma to tau. (Both branches were also enumerated directly, so the
  verification does not depend on the symmetry argument.)

Not claimed / not checked:
- No resolution of the distinct eight-total-edit / LCS-deficit-four formulation
  (Bixby-Flint-Miklos Conjecture 6 as discussed in Math-3818-A1).
- The original attempt's F_2 principal-determinant cross-check was NOT reproduced; a
  direct simulation method was used instead (two independent implementations, below).
- The attribution of the four-edit wording to Cooper-Davis Conjecture 1 was checked
  only at the level of the arXiv record and abstract of arXiv:1502.07450, not against
  the conjecture's text in the paper.

### Write-up
## Result

**Independent computational verification of Math-3818-A1.** The claimed six-vertex
counterexample to the recorded four-total-edit Pressing Game connectivity assertion
(UnsolvedMath 3100089) is **correct on every checkable point**.

## Method

The pressing rule was implemented literally from the recorded problem statement: a
press at a currently black vertex $v$ complements the induced subgraph on the closed
neighbourhood $N[v]$ and reverses every colour in $N[v]$; all other edges and colours
are unchanged. A successful word is a sequence of permitted presses ending at an
edgeless, all-white graph.

To guard against a single-implementation error, the simulation was written twice with
different state representations — (A) edge-set/colour-set, (B) adjacency-bitmask/
colour-bitmask — and the two were asserted to agree at every reached state. The full
legal tree was then enumerated by depth-first search. The verifier is a single
self-contained Python 3 file (standard library only); SHA-256 of the verifier source:
`d6feca21a180477d9ce5c088ce0df26f9a45282208e7faef594ae79afea9ab18`. It is reproduced in
full at the end of this write-up so any reader can rerun it.

## The complete tree

Word prefix -> remaining edges | black vertices after the prefix:

- (root): 12,15,23,26,34,45 | 4,5
- 4: 12,15,23,26,35 | 3
- 5: 12,14,23,26,34 | 1
- 43: 12,15,25,26 | 2,5
- 51: 23,24,26,34 | 2,4
- 432: 16,56 | 1,6
- 435: 26 | 1
- 512: 36,46 | 3,6
- 514: 26 | 3
- 4321: 56 | none (stalled)
- 4326: 15 | 5
- 4351: 26 | none (stalled)
- 5123: 46 | none (stalled)
- 5126: 34 | 4
- 5143: 26 | none (stalled)
- 43265: none | 1
- 51264: none | 3
- 432651: none | none (SUCCESS)
- 512643: none | none (SUCCESS)

19 prefixes in total. Exactly two successful words, $\sigma=432651$ and
$\tau=512643$; exactly four maximal stalled words. The ten rows on the branch beginning
with 4 agree line-for-line with the proof table in Math-3818-A1. The enumeration also
confirms that no word repeats a vertex and that a pressed vertex remains isolated and
white in every descendant state.

## Distance

Dynamic-programming insertion-deletion distance $d(\sigma,\tau)=8$, and
$\operatorname{LCS}(\sigma,\tau)=2$, consistent with
$d = |\sigma|+|\tau|-2\operatorname{LCS} = 6+6-4 = 8$. With only two successful words,
$H_4(G)$ consists of two isolated vertices and is disconnected.

## Relation to the original attempt

Math-3818-A1 reported an exhaustive verifier (19 prefixes, the same two successful
words, the same four stalled words) and an $\mathbb{F}_2$ principal-determinant
cross-check over all 64 vertex subsets and all 1,957 distinct-symbol words. Our counts
agree with theirs wherever the methods overlap (the 1,957 figure is also arithmetically
correct: $\sum_{k=0}^{6} P(6,k) = 1957$, including $6! = 720$ full permutations). We did
not reproduce the determinant computation; our check is a direct simulation of the
recorded rule. This contribution is the first *independent* verification of the
counterexample: different authors, different model family, different implementation,
no shared code.

## What remains open

The eight-total-edit / LCS-deficit formulation is untouched by this verification, as
is the connectivity question under any threshold other than four total edits for
general graphs. Historical novelty of the counterexample is not addressed here.

## Verifier source (Python 3, standard library only)


[Executable fenced material omitted from this text-only security-screened package; original retained privately.]

### Who did the work
People with LLM assistance

### LLMs used
Other (named below)

### Other LLMs
Meta, Muse Spark

### LLM versions, settings and roles
Muse Spark | version: unknown | reasoning: unknown | role: designed and wrote the independent verifier (both implementations), ran the exhaustive enumeration, audited the published proof table and counts, and drafted this write-up. The mathematical check itself is performed by the deterministic program reproduced above.

### People and roles
Carlos Mucha (@cmucha46): selected the target, set the verification methodology (independent re-implementation from the recorded statement; no reliance on the original attempt's code), reviewed the results, and authorized this submission.

### References
- we-solve problem page and research prompt for TOP-3100089 (UnsolvedMath ID 3100089, AMR-030-0089). Used: the recorded pressing rule and the exact four-total-edit statement verified here.
- Contribution Math-3818-A1 (revision r2), "A six-vertex counterexample to four-total-edit pressing connectivity", Wentao Li with OpenAI GPT 6.1 Sol / Codex. Used: the counterexample graph, the two claimed successful words, the proof table, and the reported counts — all independently re-derived in this verification.
- J. Cooper and J. Davis, "Successful Pressing Sequences for a Bicolored Graph and Binary Matrices", arXiv:1502.07450 (v5, 2015). Checked at the level of the arXiv record and abstract only: the paper exists as cited and concerns successful pressing sequences of bicoloured graphs. The text of its Conjecture 1 was not checked in this verification.

### Declarations (submitter must confirm each before posting)
- [X] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [X] I understand that this issue and its contents are public immediately.
- [X] Every LLM and person involved is listed, with versions or "unknown".

