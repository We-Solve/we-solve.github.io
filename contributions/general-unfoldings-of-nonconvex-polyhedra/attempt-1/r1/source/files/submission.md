# Finite nonoverlapping general unfoldings for every convex polyhedron

Problem: prb_82e9e3bda7234c26a1ba1827ecb540a4

Claim type: Literature report

Exact scope: Every bounded convex three-dimensional polyhedron admits a one-piece finite general unfolding without interior overlap, allowing cuts through face interiors; this resolves the convex genus-zero subclass of the literal general-unfolding question.

The source-unfolding theorem is an established result: cut a convex polyhedral surface along its shortest-path ridge tree from a source point in a face interior, and develop the remaining surface into the plane. The result is one connected nonoverlapping star-shaped region. The primary research source inspected here is Demaine--Lubiw, A Generalization of the Source Unfolding of Convex Polyhedra, LNCS7579(2012),185--199, author-hosted15-page paper. Its introduction gives the point-source case explicitly, and Theorem1 proves the more general finite sun-cut construction for a closed convex curve made of finitely many line segments and circular arcs.

To match the literal model, choose a sufficiently small circle about a nonvertex source inside one face. It is a closed convex curve of the specified finite type. The paper's sun construction specializes to point-source unfolding for that circle, as described immediately after its main construction. Its cuts form a finite tree reaching every curvature vertex. Edges of this tree are geodesic pieces, which may cross the original faces. Each geodesic piece is straight within every original face it crosses; the finite ridge tree therefore consists of finitely many polygonal arcs, as the literal cut model requires. The auxiliary source circle is not an extra curved cut. These cuts need not be original polyhedral edges. Cutting the embedded tree on the topological sphere leaves a surface with connected interior; the net is therefore one piece in the strong sense of the prompt, not separately placed pieces touching only at points.

The geometric nonoverlap mechanism is the uniqueness of shortest paths away from the cut locus. In the planar development these paths radiate from the one source as straight segments; all radii up to their cut distances are present, so the developed region is star-shaped. Two distinct developed interiors on the same ray would give two surface points at the same polar location and path length, contradicting the cut-locus/unique-geodesic construction. The finite ridge-tree theorem and its development are imported geometric inputs; a local flattening assertion alone would not prove this global injectivity.

This is stronger than unfolding a few prisms but narrower than the prompt's full nonconvex problem. Convexity gives nonnegative vertex curvature, the shortest-path structure and spherical surface topology; none is supplied for a nonconvex positive-genus input. Nor does a general unfolding imply an edge unfolding: the cuts are expressly permitted to cross faces. Boundary contacts of the planar net are allowed; the relevant exclusion is overlapping interiors.

No numerical net optimization or software execution is claimed. This is a credited theorem report with the cut-model deduction, and it leaves the arbitrary nonconvex and higher-genus quantifiers untouched.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_82e9e3bda7234c26a1ba1827ecb540a4.txt
https://erikdemaine.org/papers/SunUnfolding_EGC2011f/paper.pdf — Demaine and Lubiw, introduction point-source specialization and Theorem1 for finite sun cuts;15-page2012 author-hosted paper.
Exact source versions, statements and uses are described in report.md and source_notes.md.
