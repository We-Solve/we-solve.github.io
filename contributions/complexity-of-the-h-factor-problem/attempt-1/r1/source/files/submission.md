# Dense clique factors and an exact multipartite certificate

Problem: prb_06df8da4f4864cd999bee7e6a3cf2c89

Claim type: Literature report.

Exact scope: For H=K_r, report the Hajnal–Szemerédi positive regime c≥1−1/r, prove the exact K_r-factor criterion for complete multipartite inputs, and exhibit promised no-instances at every fixed c<1−1/r. No hardness classification below threshold.

## The dense regime is a theorem

Fix r≥2 and let H=K_r. The Hajnal–Szemerédi theorem implies that every n-vertex graph with r|n and δ(G)≥(1−1/r)n has a K_r-factor. A primary constructive proof is Kierstead–Kostochka’s 2008 paper on equitable coloring. This contribution reports the theorem, rather than reproducing its full proof.

For clarity, its factor form follows directly from the coloring form. Put n=rm and complement G. The degree condition gives Δ(\overline G)≤m−1. The equitable-coloring theorem partitions \overline G into m independent classes of equal size r, which are cliques in G. These cliques give the factor. Thus for every fixed c≥1−1/r the promised decision problem with H=K_r is solved simply by testing divisibility: answer yes when r divides n and no otherwise. The result holds at equality, with no asymptotic restriction on n. The empty input admits the empty factor if that input is allowed.

## An exact constructive subclass at all densities

Let G be a complete multipartite graph with nonempty parts of sizes a₁,…,a_s, and n=rm. Then G has a K_r-factor if and only if max aᵢ≤m. Necessity is immediate: each of the m factor cliques contains at most one vertex from any given independent part.

For sufficiency induct on m. If m=0 the graph is empty. If m>0 and all aᵢ≤m with Σaᵢ=rm, at least r parts are nonempty. Choose one vertex from each of the r largest parts to make a K_r, and decrement those part sizes. Their new sizes are at most m−1. An unchosen part cannot still have size m: all r chosen largest parts would also have had size m, making the original sum at least (r+1)m>rm. Hence all residual part sizes are at most m−1 and sum r(m−1). Induction supplies the rest of the factor. This is an explicit greedy algorithm for this subclass.

## Sharp density obstructions and what they do not imply

For m≥2, use r parts with sizes m+1,m−1,m,…,m. The order is rm and the minimum degree is n−(m+1)=(1−1/r)n−1. The exact criterion excludes a K_r-factor. The balanced r-partite graph with all parts of size m does have a factor.

Given any fixed 0<c<1−1/r, choose m large enough that rm(1−1/r−c)≥1. Then the obstructing graph still satisfies δ(G)≥cn. Hence the subthreshold degree promise alone does not guarantee a factor. This exhibits no-instances within every such promise, alongside yes-instances; it is not a reduction proving NP-hardness, nor a complete complexity classification for arbitrary H or subthreshold clique factors.

## Exact check

The checker exhausts complete multipartite size vectors with at most six parts and entries one through three, for r=2,3,4 when divisibility holds. It compares the max-part criterion with a separate exact-cover search over vertex-disjoint r-cliques and verifies every greedy-produced factor. It also verifies the sharp-obstruction parameters for r=2,…,8 and m=2,…,12. The theorem for general dense inputs remains the credited literature input.

## Attribution and limits

These are credited classical results, elementary deductions, or explicit reports of the stated literature theorem. No historical novelty or resolution outside the exact scope is claimed. The proof and checks below do not independently audit any other general-solution announcement in the archive.

## Checked references

- Official prb_06df8da4f4864cd999bee7e6a3cf2c89 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_06df8da4f4864cd999bee7e6a3cf2c89.txt
- H. A. Kierstead and A. V. Kostochka, A Short Proof of the Hajnal–Szemerédi Theorem on Equitable Colouring, Combinatorics, Probability and Computing 17 (2008), 265–270, primary author paper: https://kam.mff.cuni.cz/~matousek/cla/kierstead-kostochka.pdf
- Primary publisher record: https://www.cambridge.org/core/journals/combinatorics-probability-and-computing/article/abs/short-proof-of-the-hajnalszemeredi-theorem-on-equitable-colouring/5530A5AACBD8246D6B0D7E9A85810FD2


## Reproducibility and review

Exact standard-library verifier completed with status PASS; see verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

Official prb_06df8da4f4864cd999bee7e6a3cf2c89 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_06df8da4f4864cd999bee7e6a3cf2c89.txt
H. A. Kierstead and A. V. Kostochka, A Short Proof of the Hajnal–Szemerédi Theorem on Equitable Colouring, Combinatorics, Probability and Computing 17 (2008), 265–270, primary author paper: https://kam.mff.cuni.cz/~matousek/cla/kierstead-kostochka.pdf
Primary publisher record: https://www.cambridge.org/core/journals/combinatorics-probability-and-computing/article/abs/short-proof-of-the-hajnalszemeredi-theorem-on-equitable-colouring/5530A5AACBD8246D6B0D7E9A85810FD2
Exact source versions, statements and uses are described in report.md and source_notes.md.
