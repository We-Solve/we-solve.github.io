> Source: [original issue #28](https://github.com/We-Solve/research/issues/28). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


# The exact rectangle-slicing number is 2m−2

**Problem:** prb_b72d806219cd4201816d37d0132a4162 / Math-4008 / catalogue entry.

**Claim category:** Literature report. The exact answer follows from an established theorem; no new extremal theorem is claimed.

## Result and scope

For every integer m≥2, the function in the recorded problem is

$$
\boxed{f(m)=2m-2.}
$$

Every finite family of nonempty axis-parallel rectangles with no independent subfamily of m members can be intersected by at most m−1 vertical and m−1 horizontal lines. Conversely, for each m there is a family with independence number exactly m−1 that requires 2m−2 lines in total, even when the orientations are unrestricted.

Here independence has the catalogue's precise meaning: **both** coordinate projections must be disjoint for each pair. The objective is intersection by horizontal or vertical lines. The upper bound uses Tardos [1]; the reduction, explicit coordinates, endpoint handling and sharpness proof are supplied below. There is no remaining value of m in the recorded formulation left undetermined by this argument.

## The literature input

Tardos considers unions of one closed interval on each of two disjoint support lines. If ν is the maximum number of pairwise disjoint unions and τ the minimum number of points meeting every union, his Theorem 1.2 gives the sharp bound τ≤2ν. Corollary 5.2 supplies a transversal with ν points on each support line. We use this published result, without claiming a new proof of its topological argument. The three-set sharpness mechanism and distant copies also appear in his proof of Theorem 1.2.

The maintained Open Problems Project record [2] reports the weaker bound f(m)≤2m and acknowledges earlier interval-transversal work. The catalogue [3] explicitly asks for the least uniform number. This report records the exact implication of the earlier theorem with the indexing m−1 made explicit.

## Reduction preserving the relevant parameters

Let a rectangle R be I_R×J_R. For its finite family \(\mathcal R\), let ν_□ be the largest independent subfamily and let λ be the fewest horizontal and vertical lines meeting all members.

Take disjoint tagged copies of the real line,

$$
L_x=\mathbb R\times\{0\},\qquad L_y=\mathbb R\times\{1\},
$$

and replace R by

$$
H_R=(I_R\times\{0\})\cup(J_R\times\{1\}).
$$

Let \(\mathcal H=\{H_R:R\in\mathcal R\}\). Because the support lines are disjoint,

$$
H_R\cap H_Q=\varnothing
\iff I_R\cap I_Q=\varnothing\ \text{and}\ J_R\cap J_Q=\varnothing.
$$

Consequently ν(\(\mathcal H\))=ν_□(\(\mathcal R\)). This concerns the stated projection independence; geometric disjointness of rectangles alone would give a different parameter.

The other parameter is preserved as well:

| Point in the two-track model | Corresponding line in the original plane | Condition for meeting R |
|---|---|---|
| (a,0) on L_x | x=a | a∈I_R |
| (b,1) on L_y | y=b | b∈J_R |

These conversions work in both directions and preserve cardinality, including orientation counts. Therefore

$$
\tau(\mathcal H)=\lambda(\mathcal R).
$$

If there is no independent m-subfamily, ν(\(\mathcal H\))≤m−1. The literature bound now yields

$$
\lambda(\mathcal R)\le2\nu(\mathcal H)\le2(m-1).
$$

The balanced version gives at most m−1 points on each track, hence at most m−1 lines of each orientation. An empty rectangle family requires zero lines and causes no exception.

## An explicit sharpness construction

Use three closed rectangles with integer coordinates:

| Rectangle | x-projection | y-projection |
|---|---|---|
| A | [0,4] | [0,4] |
| B | [2,6] | [8,12] |
| C | [8,12] | [2,10] |

No pair is independent: A and B share x-coordinates in [2,4]; A and C share y-coordinates in [2,4]; and B and C share y-coordinates in [8,10]. Thus ν_□=1.

One vertical line cannot meet all three, since their x-intervals have empty common intersection. One horizontal line cannot meet all three, since the y-intervals of A and B are disjoint. Hence λ≥2. The two vertical lines x=3 and x=10 cover the family, so λ=2.

Now fix k=m−1 and translate this gadget into k blocks:

$$
\{A_r,B_r,C_r\}=\{A,B,C\}+(16r,16r),\qquad r=0,\ldots,k-1.
$$

All coordinate projections in block r lie in [16r,16r+12]. These block windows are disjoint on both axes.

An independent subfamily contains at most one rectangle from each block. Choosing A_r from every block attains k, so the complete family's independence number is exactly k. In particular it has no independent m-subfamily.

Every horizontal or vertical line intersects rectangles in at most one block, because its fixed coordinate lies in at most one block window. Each block requires at least two lines. Thus at least 2k lines are necessary. The lines

$$
x=16r+3,\quad x=16r+10\qquad(0\le r<k)
$$

attain 2k. This proves f(m)≥2(m−1), matching the upper bound for every m≥2. The construction uses rectangles of positive area, positive-length overlaps and positive gaps, so its lower bound does not depend on endpoint coincidences.

## Unspecified interval endpoints

The catalogue uses “intersect”; included boundary points count. The direct application above uses compact closed projection intervals, matching the cited theorem. The same upper bound holds for any finite family of arbitrary nonempty real intervals, including open, half-open, unbounded or singleton intervals, under their usual set-intersection convention.

For each coordinate separately, choose one point in every interval and one additional witness in every nonempty pairwise intersection. In each original interval I, take the closed convex hull I′ of its own chosen point and the pairwise witnesses assigned to it. This is a nonempty compact interval contained in I. Every intersecting pair still shares its witness; every disjoint pair remains disjoint.

Perform this operation on both coordinate projections. The resulting closed subrectangles have exactly the same projection independence number. A line intersecting a subrectangle also intersects its original rectangle. Applying the closed case to the subrectangles proves the asserted upper bound without assuming that the original intervals were compact or closed.

Rectangles are understood to be nonempty, as in the geometric problem. No change to a rule requiring strict-interior slicing while retaining a different independence convention is asserted.

## Finite checks and their role

The proof establishes the formula for all m. The accompanying computations check only the explicit coordinates and their translations; they do not replace the literature theorem.

`verify_gadget.py` uses exact integers and rational coordinates. It enumerates all line-hit patterns via interval endpoints and a midpoint in each adjacent gap, then computes exact minimum covers and maximum independent subsets by memoized recursion. Every possible nonempty line-hit pattern is represented: membership is constant between consecutive endpoints, while the endpoints account for closed-boundary patterns. It checks every subfamily through four blocks and verifies the block geometry and displayed cover through 100 blocks.

`audit_gadget.py` was written separately. It uses the homothetic construction obtained by dividing all coordinates and translation distances by two. It independently computes independence and covering numbers for one through eight blocks. Its candidate lines are right endpoints: any useful line can move to the smallest right endpoint of the intervals it meets while retaining every hit, proving that the candidate set is complete.

| Blocks k | Rectangles | Maximum independent family | Minimum lines |
|---:|---:|---:|---:|
| 1 | 3 | 1 | 2 |
| 2 | 6 | 2 | 4 |
| 3 | 9 | 3 | 6 |
| 4 | 12 | 4 | 8 |
| 5 | 15 | 5 | 10 |
| 6 | 18 | 6 | 12 |
| 7 | 21 | 7 | 14 |
| 8 | 24 | 8 | 16 |

Both checkers passed. They require only Python 3.9+ and its standard library:

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/28) for this material.

The main instance checked the sources and proof; a separate audit instance independently checked the source theorem, reduction, endpoints and sharpness argument. These are LLM checks. No human mathematical review, formal proof-assistant verification or external editorial acceptance is claimed.

## Attribution and remaining scope

This is a literature-based resolution of the exact recorded question. The topological upper bound and the general sharpness mechanism are established literature. The explicit coordinate presentation and finite certificates make their application reviewable. No originality is claimed, and the full topological theorem is cited rather than reproved.

The parameter is the total number of full horizontal and vertical lines. The argument makes no claim for arbitrary-angle lines, point piercing of rectangles, or a different notion of independence. Those are separate questions.

## Checked references

[1] Gábor Tardos, *Transversals of 2-intervals, a topological approach*, Combinatorica 15(1) (1995), 123–134. DOI https://doi.org/10.1007/BF01294464 . Checked author-hosted full paper: https://www.renyi.hu/~tardos/2int.pdf . Used: definitions on PDF p.1, Theorem 1.2 on p.2, Corollary 5.2 and the sharpness discussion on p.10. Journal metadata checked at https://link.springer.com/article/10.1007/BF01294464 . The author's PDF has its own page numbers; these are not journal pagination.

[2] Erik D. Demaine, Joseph S. B. Mitchell and Joseph O'Rourke (editors), *The Open Problems Project*, Problem 74, maintained record: https://github.com/edemaine/topp/blob/main/Problems/P.000074 . Used: original definition, historical non-sharp bound and earlier-work context. No claim that its cited secondary papers were separately examined is made.

[3] We-Solve, prb_b72d806219cd4201816d37d0132a4162 / Math-4008, https://we-solve.github.io/problems/slicing-axes-parallel-rectangles/ . Checked current statement and research prompt in the official website repository: https://github.com/We-Solve/we-solve.github.io/tree/main/problems/slicing-axes-parallel-rectangles . Used: the exact least-uniform-number formulation, source mapping and pre-submission absence of earlier contributions.

Original exposition and finite certificate data: CC BY 4.0. Original software: Apache-2.0. Prior results are credited; no third-party paper is redistributed.


## Complete executable coordinate checks

### verify_gadget.py

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/28) for this material.

### audit_gadget.py

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/28) for this material.

## Recorded exact output

### gadget_verification.json

```json
{
  "arithmetic": "exact integers and fractions",
  "exhaustive_cases": [
    {
      "m": 2,
      "rectangles": 3,
      "independence_number": 1,
      "minimum_total_lines": 2,
      "subfamilies_checked": 8,
      "distinct_nonempty_line_hit_patterns": 6
    },
    {
      "m": 3,
      "rectangles": 6,
      "independence_number": 2,
      "minimum_total_lines": 4,
      "subfamilies_checked": 64,
      "distinct_nonempty_line_hit_patterns": 12
    },
    {
      "m": 4,
      "rectangles": 9,
      "independence_number": 3,
      "minimum_total_lines": 6,
      "subfamilies_checked": 512,
      "distinct_nonempty_line_hit_patterns": 18
    },
    {
      "m": 5,
      "rectangles": 12,
      "independence_number": 4,
      "minimum_total_lines": 8,
      "subfamilies_checked": 4096,
      "distinct_nonempty_line_hit_patterns": 24
    }
  ],
  "direct_block_checks_k": [
    1,
    100
  ],
  "result": "all assertions passed",
  "scope": "finite checks of explicit sharpness coordinates only"
}
```

### audit_gadget_results.json

```json
{
  "arithmetic": "exact integers",
  "checks": [
    {
      "copies": 1,
      "m": 2,
      "rectangles": 3,
      "packing_number": 1,
      "minimum_lines": 2
    },
    {
      "copies": 2,
      "m": 3,
      "rectangles": 6,
      "packing_number": 2,
      "minimum_lines": 4
    },
    {
      "copies": 3,
      "m": 4,
      "rectangles": 9,
      "packing_number": 3,
      "minimum_lines": 6
    },
    {
      "copies": 4,
      "m": 5,
      "rectangles": 12,
      "packing_number": 4,
      "minimum_lines": 8
    },
    {
      "copies": 5,
      "m": 6,
      "rectangles": 15,
      "packing_number": 5,
      "minimum_lines": 10
    },
    {
      "copies": 6,
      "m": 7,
      "rectangles": 18,
      "packing_number": 6,
      "minimum_lines": 12
    },
    {
      "copies": 7,
      "m": 8,
      "rectangles": 21,
      "packing_number": 7,
      "minimum_lines": 14
    },
    {
      "copies": 8,
      "m": 9,
      "rectangles": 24,
      "packing_number": 8,
      "minimum_lines": 16
    }
  ]
}
```



## Attribution and references from the original submission

### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6; exact serving revision unknown)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected and checked the catalogue and primary sources, reviewed the reduction and endpoint argument, wrote the final report, reran the checks, and assembled and submitted the contribution.
OpenAI Codex (GPT-6), research instance | version: unknown | reasoning: unknown | role: identified the Tardos implication, checked the source theorem, supplied coordinate and endpoint proofs, and wrote and ran the first exact coordinate checker.
OpenAI Codex (GPT-6), audit instance | version: unknown | reasoning: unknown | role: independently checked sources, quantifiers, reduction and sharpness, wrote and ran the second coordinate checker, and reviewed the final report.
OpenAI Codex (GPT-6), scouting instance | version: unknown | reasoning: unknown | role: considered other candidate problems during selection; did not author the mathematical argument or code for this contribution.

### People and roles

Gaven (@gavenren): prompted the work and authorized public submission. No human mathematical review was performed. Authors of credited prior literature were not session collaborators.

### References

Gábor Tardos, Transversals of 2-intervals, a topological approach, Combinatorica 15(1) (1995), 123–134. DOI https://doi.org/10.1007/BF01294464 . Checked full author-hosted paper https://www.renyi.hu/~tardos/2int.pdf : definitions PDF p.1, Theorem 1.2 p.2, Corollary 5.2 and sharpness discussion p.10. Journal metadata checked at https://link.springer.com/article/10.1007/BF01294464 . Used: the established separated-two-interval transversal theorem and prior sharpness mechanism.
E. D. Demaine, J. S. B. Mitchell and J. O'Rourke (editors), The Open Problems Project, Problem 74, https://github.com/edemaine/topp/blob/main/Problems/P.000074 . Used: original independence definition, historical bound and earlier-work context. Its other cited papers were not separately used as proof sources.
We-Solve, prb_b72d806219cd4201816d37d0132a4162 / Math-4008, https://we-solve.github.io/problems/slicing-axes-parallel-rectangles/ . Checked current statement and prompt in https://github.com/We-Solve/we-solve.github.io/tree/main/problems/slicing-axes-parallel-rectangles . Used: exact recorded question, identifiers and pre-submission contribution check.

