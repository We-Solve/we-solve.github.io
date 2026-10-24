# Attributed submission: Attempt: TOP-5500027

Source: https://github.com/We-Solve/research/issues/185

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-5500027

### Claim

Literature report

### Exact scope

Credits Eppstein’s linear-size topological hexahedral extension theorem with its model restrictions, and proves an exact planar-faced extension for every quadrangulated polygon extrusion with matching layers. Does not solve arbitrary even boundary meshes with planar faces.

### Write-up

# Topological extension versus planar-faced extrusion meshes

**Problem:** TOP-5500027

**Claim type:** Literature report

**Exact scope:** Credits Eppstein’s linear-size topological hexahedral extension theorem with its model restrictions, and proves an exact planar-faced extension for every quadrangulated polygon extrusion with matching layers. Does not solve arbitrary even boundary meshes with planar faces.

The prompt fixes a polyhedral three-ball and an even quadrilateral boundary mesh, with all output faces required planar and the boundary forbidden to change. This last geometric requirement is essential. Eppstein's Linear Complexity Hexahedral Mesh Generation, Theorem 2 (SoCG 1996), constructs O(b) topological cube cells for a ball with b even quadrilateral boundary faces, respecting that boundary. Its cells may have curved boundaries. The author distinguishes this from the geometric case, and the theorem therefore cannot be substituted for the prompt's conclusion. This is a credited literature result, not a new theorem claimed here.

There is, however, a full infinite subclass where a planar construction follows directly. Let Q be any simple planar polygon with a conforming subdivision into strictly convex quadrilaterals $F_1,\ldots,F_q$. The quadrilaterals meet along entire common edges or vertices and cover Q. Choose heights $0=z_0<z_1<\cdots<z_r=H$. Form the solid $P=Q\times[0,H]$. Prescribe on its top and bottom the identical quadrangulation of Q, and on every side wall $e\times[0,H]$, for each boundary edge e of the quadrangulation, prescribe rectangles $e\times[z_{j-1},z_j]$.

Then the cells
\[
 C_{i,j}=F_i\times[z_{j-1},z_j],\qquad
 1\le i\le q,\ 1\le j\le r,
\]
give a geometric hexahedral mesh exactly respecting that prescribed boundary. Each cell is the product of a convex quadrilateral with an interval, hence is an embedded convex polyhedron with eight vertices, twelve edges and six planar quadrilateral faces, combinatorially a cube. The two horizontal faces are copies of $F_i$ and four side faces are rectangles. Coverage and interior-disjointness follow by taking products of the planar subdivision and the interval partition. Intersections are products of common faces, so the mesh is face-to-face. No additional vertices appear on the prescribed boundary.

If e boundary edges occur in the base mesh, the prescribed boundary has $b=2q+er$ faces. Planar quadrangulation incidence gives $4q=2e_{\mathrm{int}}+e$, so e is even and b is even. The construction has qr cells; this explicit number is not silently replaced by O(b), since r and q can both grow. Its computational output cost is linear in the number of cells plus their faces with shared incidences, and rational input data produce rational coordinates exactly.

The checker uses a nonconvex L-shaped base tiled by three squares, with several nonuniform rational height layers. It records every cell, canonicalizes every face by its four vertices, verifies that faces have multiplicity one on the prescribed boundary and two in the interior, checks boundary equality, cell volume and total volume. Thus the actual certificate checks more than parity: it certifies a full finite geometric mesh in this subclass. The product proof establishes the whole extrusion class.

**What remains.** An arbitrary prescribed quadrilateral boundary on a three-ball need not have two identical planar end meshes or compatible side layers. Establishing such a structure by changing the boundary would violate the problem. Topological cube cells also need not admit a straight realization preserving all incidences and face planarity. The construction supplies a positive geometric class and records the stronger topological existence theorem with its actual limitations.


## Reproducibility and review

Exact rational face incidence, boundary identity, planarity and volumes for an L-prism layered mesh; general product construction proved.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


[Executable fenced material omitted from this text-only security-screened package; original retained privately.]


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)
OpenAI, GPT-6.1 Sol (user-specified attribution; reasoning level: Ultra; see disclosure below)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected and checked scopes, read final reports, checked sources, freshly ran all attached programs, assembled the prepared submissions.
OpenAI Codex (GPT-6), hundred_algebra instance | version: unknown | reasoning: unknown | role: developed algebra reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_numbers instance | version: unknown | reasoning: unknown | role: developed number-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_graphs instance | version: unknown | reasoning: unknown | role: developed graph-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_algorithms instance | version: unknown | reasoning: unknown | role: developed algorithms/complexity reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_topology instance | version: unknown | reasoning: unknown | role: developed topology reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_geometry instance | version: unknown | reasoning: unknown | role: developed geometry reports and performed separate LLM reviews.
The authoring instance for this report is /root/hundred_geometry. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-5500027.txt
https://topp.openproblem.net/p27
https://ics.uci.edu/~eppstein/pubs/Epp-SCG-96.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
