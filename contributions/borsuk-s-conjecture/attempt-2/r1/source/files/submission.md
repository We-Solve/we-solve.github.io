# An explicit classical Borsuk counterexample certificate in dimension 2277

**Problem:** prb_bff4d577d6f24521a9bffca37f2feb6a

**Claim type:** Literature report

**Exact scope:** Reconstructs the Kahn–Kalai cut-vector construction with p=17, using their stated Frankl–Wilson intersection theorem, and verifies an exact lower bound of 6330 smaller-diameter parts in dimension 2277. This is a credited classical disproof, not a new low-dimensional record.

The assertion in the prompt is universally quantified over dimension. A single bounded finite set needing more than $d+1$ smaller-diameter pieces disproves that assertion. The construction below is the classical Kahn–Kalai method, with a deliberately conservative explicit parameter whose arithmetic is independently checked. Its only imported combinatorial theorem is the Frankl–Wilson bound stated as Theorem 2 of their 1993 paper:

If $p$ is a prime power and $\mathcal F$ is a family of $2p$-subsets of $[4p]$ with no two distinct members intersecting in exactly $p$ elements, then $|\mathcal F|\le2\binom{4p-1}{p-1}$. We invoke that published bound; no new proof of it is claimed.

Set $m=4p$. Index coordinates by the $\binom m2$ unordered pairs of $[m]$. For each $2p$-subset $A$, let $x_A$ be the zero-one indicator of the edges crossing the cut $A,[m]\setminus A$. Complementary subsets give the same vector. There are no other coincidences: equality of cut edges determines whether every pair is on the same or opposite side and therefore determines the bipartition up to exchange. Thus
\[
 |X|=\tfrac12\binom{4p}{2p},\qquad X=\{x_A:|A|=2p\}.
\]
Every vector has exactly $4p^2$ ones, so $X$ lies in one affine hyperplane and can be isometrically identified with a subset of $\mathbb R^d$, $d=\binom{4p}{2}-1$.

If $r=|A\cap C|$, the common crossing edges number $r^2+(2p-r)^2$. Consequently
\[
 \|x_A-x_C\|^2=2\big(4p^2-r^2-(2p-r)^2\big)=4r(2p-r).
\]
This is at most $4p^2$, with equality precisely at $r=p$, and such pairs exist. Therefore $\mathrm{diam}X=2p>0$.

Take any subset $Y\subset X$ of strictly smaller diameter and choose the representative $A$ containing 1 for each of its cut vectors. This selects exactly one of each complementary pair. No two representatives intersect in $p$ elements, because such a pair would have distance $2p$. The imported intersection bound therefore gives
\[
 |Y|\le M:=2\binom{4p-1}{p-1}.
\]
Any partition or cover of $X$ into smaller-diameter sets has at least $\lceil |X|/M\rceil$ parts; intersections with $X$ suffice even if the cover sets themselves contain other points.

For $p=17$, which is prime, the exact integers are
\[
 d=2277,\quad |X|=14226520737620288370,\quad
 M=2247575790712824,\quad \lceil|X|/M\rceil=6330.
\]
Since $6330>2278=d+1$, the literal universal assertion is false. The included integer program checks primality, the binomial values, the ceiling and the distance polynomial for every $0\le r\le34$. It does not enumerate the enormous point set or replace the intersection theorem.

**Attribution and prior attempt.** The official earlier contribution reports a different, modern nine-dimensional claim. This report does not verify or dispute that claim and makes no best-dimension assertion. It adds a self-contained geometric transfer from a precisely stated classical intersection theorem, with exact finite arithmetic and no reliance on that modern record. Kahn and Kalai already disproved Borsuk's general conjecture in 1993.


## Reproducibility and review

Exact p=17 primality, combinatorial cardinalities, distance-maximization polynomial and ceiling count 6330>2278.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_bff4d577d6f24521a9bffca37f2feb6a.txt
https://arxiv.org/pdf/math/9307229
Exact source versions, statements and uses are described in report.md and source_notes.md.
