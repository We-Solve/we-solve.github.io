# prb_6a9d957dbcd0445091323a96436a9d72: Output-Polynomial Enumeration of Bicriteria Spanning Trees

Claim type: **Partial result**.

Exact scope: All Pareto-optimal spanning trees can be enumerated with polynomial delay and polynomial space when c2(e)=A-lambda c1(e), lambda>0, for all edges; the claim uses the tree-output interpretation and explicitly distinguishes deduplicated cost-pair output.

Fix binary rational edge costs satisfying c_2(e)=A-lambda c_1(e) with one common rational A and lambda>0, on a connected n-vertex graph. Nonnegative costs can be required by choosing A large enough. Every spanning tree has exactly n-1 edges, so
\[
 c_2(T)=(n-1)A-\lambda c_1(T).
\]
If another tree has a strictly smaller first coordinate it has a strictly larger second coordinate. Equal first coordinates force equal second coordinates. Consequently no tree dominates another in the usual weak-both/strict-one definition: every spanning tree is Pareto optimal, including different trees with identical cost pairs.

Enumerate these trees using a fixed ordered edge list and a depth-first include/exclude search with an exact extension test at every node. A node fixes an included edge set I and excluded set X. It has a spanning-tree extension precisely when I is a forest and the graph containing all nonexcluded edges is connected after contracting I. Necessity is immediate. For sufficiency, choose a spanning tree in that connected contracted graph and lift it together with I; the result is a spanning tree respecting both decisions. The extension test is a polynomial-time graph traversal and cycle test, not an optimization oracle.

At a node with a feasible extension branch on the next undecided edge, testing both children and visiting only children admitting an extension. At a leaf all edges are decided; the unique included set is a spanning tree and is emitted. Each spanning tree follows its unique binary decision path, so output is complete and duplicate-free. The tree has depth m. Between two emitted leaves, depth-first search backtracks at most m levels and descends at most m levels; at each level it tests at most two candidate children. Thus the delay, including before the first and after the last output, is O(m) times a polynomial-size extension test. State and recursion use polynomial space, and outputting each n-1-edge tree takes polynomial encoded length.

An uncomplicated graph traversal implementation yields delay O(m(n+m) poly(L)) bit operations after input reading, where L accounts for labels and costs; recomputing extension tests is allowed. Maintaining rollback data structures can improve constants but is unnecessary. The cost relation can be checked with exact rational arithmetic in polynomial bit time if A and lambda are supplied. A disconnected input has no spanning trees and is rejected after one connectivity check.

This establishes input-plus-output polynomial total time for the tree-output interpretation of the prompt, on the stated cost class. It does not claim polynomial total time in the number of distinct Pareto cost pairs: if every edge has the same first cost, all exponentially many trees share one pair, and printing all of them is unsuitable for pair-only output. Nor does it extend to arbitrary cost systems where most spanning trees are dominated; extension feasibility alone would then allow exponentially much wasted search.

The checker independently enumerates all (n-1)-edge subsets on small graphs, verifies the search output, and tests pairwise nondominance under exact antagonistic costs, including repeated cost pairs. The algebraic cost restriction is the reason exhaustive tree enumeration is legitimate here, rather than a general solution hidden behind output terminology.

Comparison with the earlier attempt: The earlier attempt gives exponential-frontier and scalarization counterexamples. This report gives an actual pruned enumeration algorithm with a delay bound on a different, explicit antagonistic-cost class, and does not call general exhaustive tree search output-polynomial.

References checked:

- Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_6a9d957dbcd0445091323a96436a9d72.txt
- Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/output-polynomial-enumeration-of-bicriteria-spanning-trees/attempt-1/r1/


## Reproducibility and review

Written proof completed; standard-library independent finite checker and execution record supplied separately. These checks are finite and no formal verification or human mathematical review is asserted.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_6a9d957dbcd0445091323a96436a9d72.txt
Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/output-polynomial-enumeration-of-bicriteria-spanning-trees/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.
