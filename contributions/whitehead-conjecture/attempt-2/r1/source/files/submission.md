# Whitehead’s assertion for finite nonpositively curved two-complexes

Problem: prb_245c1e6dfaed45a089a52e5f17920b5b

Claim type: Partial result

Exact scope: Every connected subcomplex of a finite piecewise Euclidean two-dimensional simplicial complex satisfying Gromov’s nonpositive-curvature link condition is aspherical. The inherited-link and complete universal-cover arguments are supplied; no assertion is made for arbitrary aspherical two-complexes.

## Geometric hypothesis and theorem

Let X be a finite simplicial complex of dimension at most two, with a nondegenerate Euclidean metric on each triangle and matching edge lengths. Assume the link of every vertex has no injective closed circuit of angular length less than 2pi. Then every connected subcomplex Y of X is aspherical.

The external metric inputs are Gromov's two-dimensional link condition and the Cartan–Hadamard globalization theorem: a complete connected locally CAT(0) length space has CAT(0) universal cover in its lifted length metric. The link condition is stated explicitly in [1, Theorem 1]. We check why it applies to each Y rather than assuming that subcomplex inclusion is locally isometric.

## Subcomplexes inherit the relevant link condition

At a vertex v of Y, the metric link Lk(v,Y) is a subgraph of Lk(v,X): it retains the directions of edges and the angular edges supplied by those triangles actually in Y. All retained angular lengths are unchanged.

Any injective circuit in a subgraph is also an injective circuit in the original graph, with the same length. Thus Lk(v,Y) has no circuit shorter than 2pi. Isolated vertices, disconnected links, and links with no circuits automatically pass the condition; no connectedness of each link is assumed.

At interior points of an edge, the neighborhoods are unions of Euclidean half-disks glued along a diameter, with possibly fewer incident triangles after deletion. These are the usual nonpositive-curvature edge models. Inside a triangle the metric is Euclidean. The vertex link condition therefore makes the entire induced piecewise Euclidean length metric on Y locally CAT(0).

It matters that links are graphs here. In higher dimensions a subcomplex of a CAT(1) spherical complex can lose filling simplices while retaining a short loop. In a graph there are no such two-dimensional fillings to delete. This is the exact place the dimension-two hypothesis enters.

## Completeness and contractibility upstairs

Y is a finite subcomplex. With its intrinsic length metric it is compact: it is obtained by identifying finitely many compact Euclidean simplices along closed faces. Consequently it is complete. It is locally contractible and semilocally simply connected, so it has the ordinary universal covering p:Z->Y with the lifted length metric. The cited globalization theorem gives that Z is CAT(0).

Fix z_0 in Z. In a CAT(0) space there is a unique geodesic from z_0 to every z. Sending (z,t) to the point at parameter t on that geodesic contracts Z to z_0 (reverse t if desired). Continuity follows from the CAT(0) distance inequality for points at equal geodesic parameter. Hence Z is contractible, so all higher homotopy groups of Y vanish. This proves the stated asphericity conclusion.

No embedding of the universal cover of Y into that of X was presumed, and no unproved injection on fundamental groups was used. The proof constructs the relevant metric on Y directly. In particular it supplies a geometric sufficient hypothesis for the original implication rather than merely checking ordinary second homology.

## Scope, verification and relationship to prior attempts

The previous attempt develops a pi_1-injective subcase, retracts and subcomplexes of collapsible complexes, and diagnoses the covering-space gap in a naive proof. It does not develop the inherited angular-link argument above. This is a standard geometric subcase, with no claim of novelty.

The present finite Euclidean metric is additional structure; asphericity of a general CW two-complex does not by itself provide such a metric or regular triangular attaching maps. Infinite or arbitrary nonregular CW complexes in the prompt are not silently reduced to finite simplicial ones. No curvature recognition program or metric-existence algorithm for all aspherical presentations is claimed. The proof relies on the stated metric theorems, not on finite numerical testing of sample links.

## Checked references

1. B. Farb, G. C. Hruska and A. Thomas, Problems on automorphism groups of nonpositively curved polyhedral complexes and their lattices, Sections 2.1–2.2, especially Theorem 1 (Gromov Link Condition), and CAT(0) globalization background. Author PDF: https://math.uchicago.edu/~farb/papers/polysurvey.pdf


## Reproducibility and review

Proof/source audit only; no computational verification of the external theorem was performed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

B. Farb, G. C. Hruska and A. Thomas, Problems on automorphism groups of nonpositively curved polyhedral complexes and their lattices, Sections 2.1–2.2, especially Theorem 1 (Gromov Link Condition), and CAT(0) globalization background. Author PDF: https://math.uchicago.edu/~farb/papers/polysurvey.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.
