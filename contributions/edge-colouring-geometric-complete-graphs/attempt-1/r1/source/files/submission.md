# Exact C-rule coloring for every convex point set

Problem: prb_881835495ca84e5ab10233ffdae8b2ba

Claim type: Partial result

Exact scope: Under rule C (same-color edges may neither cross nor share endpoints), every strictly convex n-point set has chromatic number n for n>=3 (and 1 for n=2).

Label the vertices of any strictly convex n-gon cyclically by 0,...,n-1. Color edge {i,j} by i+j modulo n. Edges of one color have distinct endpoints: fixing one endpoint determines the other. They also cannot cross. One way to see this without assumptions on side lengths is to use a regular n-gon with the same cyclic order: all chords of a fixed endpoint-sum modulo n are parallel, by the elementary midpoint-angle formula for chord direction. Hence they do not cross there; crossing of two chords of any strictly convex polygon depends only on whether their endpoints alternate in cyclic order, so it has the same answer in the given polygon. This gives n permissible C-rule colors.

For odd n, each color class is a matching of at most (n-1)/2 edges. Since K_n has n(n-1)/2 edges, at least n colors are necessary.

Let n>=4 be even. If n-1 colors were enough, the edge count and matching capacity n/2 force every color to be a noncrossing perfect matching. Every such matching contains at least two polygon boundary edges. To prove this, if it has a diagonal, the two open boundary arcs cut off by that diagonal contain positive even numbers of vertices. No matching edge can join the two arcs without crossing the diagonal. In each arc choose a matching edge with minimum interval length; if it were not a boundary edge, noncrossing forces its intervening vertices to match internally, yielding a strictly shorter edge. Thus each arc contains a boundary edge. If the matching has no diagonal at all, all n/2>=2 edges already are boundary edges.

Distinct color classes use distinct edges. They would therefore require at least 2(n-1)>n boundary edges, although the polygon has exactly n. This contradiction rules out n-1 colors, and any still smaller coloring can be padded with empty colors to n-1. Therefore n colors are necessary and sufficient. The case n=3 also follows from the odd count; n=2 has a single edge and one color.

This is the exact value for the named rule and every convex-position input, not merely one regular polygon. It supplies a lower bound n for the prompt's worst-case C(n), but no upper bound C(n)<=n for arbitrary general-position point sets. Rules A, B and D have different forbidden pairs and are not silently identified with rule C.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Executed check_exact.py with assertions enabled: PASS convex n3..60 and2integer affine realizations; exact C-color edge-pair checks 765020 ; lower bound is the written proof. python -O was separately executed and refused. These are finite exact checks only.


## Reproducibility and review

Executed check_exact.py with assertions enabled: PASS convex n3..60 and2integer affine realizations; exact C-color edge-pair checks 765020 ; lower bound is the written proof. python -O was separately executed and refused. These are finite exact checks only.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: check_exact.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_881835495ca84e5ab10233ffdae8b2ba.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
