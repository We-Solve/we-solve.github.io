# Dynamic Planar Nearest Neighbors

Claim type: **Partial result**.

Exact scope: For sites confined to one fixed known affine line, arbitrary planar exact queries and arbitrary insertions/deletions take worst-case O(log(n+2)) real operations and O(n) words.

## Reduction to an ordered set

Let the fixed line be p(t)=p₀+t v with v≠0. Store each site by its real parameter t. For a query q set a=((q−p₀)·v)/(v·v). Completing the square gives

‖q−p(t)‖² = ‖q−p₀‖² − ((q−p₀)·v)²/(v·v) + (v·v)(t−a)².

The first two terms do not depend on t and v·v>0. The closest stored parameter is therefore either the predecessor of a or its successor, including a itself. Among t≤a the squared difference decreases as t increases; among t≥a it increases as t increases. These monotonicities prove the two-candidate assertion without a square root. Compare the two exact squared distances and return either minimizer in a tie. Return EMPTY when the ordered set is empty. Sites form a set, so duplicate insertions can be rejected or ignored consistently; deletion concerns an existing key.

## Worst-case updates

Use an AVL binary search tree with each node's height stored. After insertion or deletion, update heights along the search path and rebalance every affected node. A height difference of two is repaired by a single rotation toward the taller child when that child's outer subtree is at least as tall as its inner subtree, and by the corresponding double rotation otherwise. Inspecting the three participating subtree heights verifies that the search order is preserved and the new height differences are at most one. In deletion ties use the single rotation, and continue toward the root; insertion may stop once no height changes. Thus there is O(1) work at each visited level, even when deletion requires several rotations.

If a balanced tree of height h has N_h nodes, then N_h≥1+N_{h−1}+N_{h−2}, with N₀=1 and N₁≥2 under the leaf-height-zero convention. This recurrence implies N_h≥2^{h/2}, up to the immaterial initial constant. The height is O(log(n+2)). Searches, predecessor/successor, insertion, and deletion therefore all have worst-case logarithmic cost, not amortized or expected cost. Each node stores constantly many reals, pointers and counters, so space is linear. The fixed line and projection use constantly many real arithmetic operations per update/query.

For binary rational coordinates this is not a logarithmic bit-time claim. Exact projections and distance comparisons use products and quotients of constantly many input coordinates; their bit lengths are polynomial in the encoded coordinates of the fixed line, query and stored candidates. Multiplying the ordered-tree operation count by a polynomial in that bit length, and charging input reading, gives a polynomial bit bound. Arbitrary planar sites do not admit this ordering reduction.

## Earlier contributions and limits

The earlier attempt discusses lifting, explicit Voronoi adjacency changes, and logarithmic-block-query overhead. It gives no dynamic collinear data structure. This report supplies the exact line subclass with arbitrary planar query points and worst-case updates.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-5500063.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
