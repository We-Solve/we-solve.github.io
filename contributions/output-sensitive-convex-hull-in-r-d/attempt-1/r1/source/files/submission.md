# Optimal output-sensitive hull enumeration on the four-dimensional moment curve

Problem: TOP-5500015

Claim type: Partial result

Exact scope: For n>=5 rational moment-curve points (t,t^2,t^3,t^4) in R^4 with distinct supplied t, enumerate all facets in O(n log n+f) arithmetic operations, f=n(n-3)/2; bit cost is polynomial in the full rational input and output lengths.

Assume each input point is explicitly supplied with its distinct rational parameter t; an invertible rational affine transformation may also be supplied, with its encoding included in the input. Sort parameters t_0<...<t_(n-1). Every five moment-curve points are affinely independent, by the Vandermonde determinant, so the hull is four-dimensional and every facet has exactly four vertices. We will prove its facet rule directly.

An affine functional on the moment curve becomes a polynomial of degree at most four. If it vanishes at four distinct parameters a<b<c<d, it is a nonzero multiple of (t-a)(t-b)(t-c)(t-d). A supporting hyperplane requires all other supplied parameters to have the same sign. The monic quartic is negative exactly in (a,b) and (c,d). If all other values are positive, both intervals contain no other input parameter, so {a,b} and {c,d} are adjacent pairs in sorted order. If all other values are negative, the positive outer intervals must be empty of input parameters, forcing a=t_0 and d=t_(n-1), and the middle positive interval (b,c) must also be empty. These are precisely the pairs comprising the wrap edge {n-1,0} and one disjoint adjacent edge. Conversely each of these two forms indeed has the required sign at every other parameter, proving it is a facet. Distinctness of the parameters excludes zeros at other inputs.

Equivalently facets are unions of two disjoint edges of the cyclic n-gon of parameter indices. Enumerate all unordered pairs of its n edges and retain those with disjoint endpoints. The number is
\[
 f=\binom n2-n={n(n-3)\over2},
\]
since exactly n pairs of cycle edges share a vertex for n>=5. Every retained pair yields a different four-subset: the consecutive-pair and wrap forms above have a unique pairing when n>=5. Thus no duplicate removal changes the bound.

For each facet expand its monic quartic; its five coefficients give a rational supporting hyperplane in coordinates (1,x_1,x_2,x_3,x_4). Four fixed-degree products cost O(1) rational arithmetic operations, and the sign rule supplies the correct side. Enumeration takes O(n^2)=O(f), following O(n log n) sorting. As f=Theta(n^2), this is within the literal O(n log(f+1)+f) output-sensitive target on the stated subclass. Apply the inverse transpose of the supplied affine map to hyperplanes if present; dimension four makes this a constant-size rational matrix operation.

This separates arithmetic operations from bit cost. Sorting rational parameters, computing fixed-degree coefficient products and a fixed-size rational inverse all use polynomial bit operations in their encoded lengths; output coefficients also have polynomial bit length by elementary numerator/denominator product bounds. Consequently total bit time is polynomial in full input plus output length, with no unencoded affine recognition step. We do not claim the same bound for arbitrary four-dimensional points or for dimension growing with the input. The construction is an infinite family of full-dimensional inputs with quadratic output, not a fixed small hull.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Executed check_exact.py with assertions enabled: PASS 32 moment-curve hulls n5..12, 5144 four-subsets tested by exact5x5 determinant supports. python -O was separately executed and refused. These are finite exact checks only.


## Reproducibility and review

Executed check_exact.py with assertions enabled: PASS 32 moment-curve hulls n5..12, 5144 four-subsets tested by exact5x5 determinant supports. python -O was separately executed and refused. These are finite exact checks only.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: check_exact.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-5500015.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
