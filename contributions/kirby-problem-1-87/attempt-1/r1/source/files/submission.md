# Explicit isolated polynomial singularities for every positive torus knot

**Problem:** prb_f5790309d3e140ad9a8882423990f5fa

**Claim type:** Partial result

**Exact scope:** Every positive torus knot T(p,q), for coprime integers p,q≥2, is realized by a real polynomial R^4→R^2 with a genuine isolated critical point; its argument map explicitly gives the required fibration.

## Construction with the stronger rank condition

Identify $\mathbb R^4$ with $\mathbb C^2$ and $\mathbb R^2$ with $\mathbb C$. For coprime $p,q\ge2$ define

$$F(z,w)=z^p+w^q,\qquad f=(\operatorname{Re}F,\operatorname{Im}F).$$

These are real polynomials in the four real coordinates. The complex differential is $(pz^{p-1},qw^{q-1})$. It vanishes exactly at $(0,0)$; otherwise it is a surjective complex-linear map onto $\mathbb C$, hence has real rank two. At zero its rank is zero. Thus the origin is isolated as a critical point on the **whole** punctured neighborhood, including points not in $F^{-1}(0)$.

## Identify the small-sphere knot

Write $z=re^{i\alpha}$ and $w=se^{i\beta}$. On $F^{-1}(0)\cap S^3_\epsilon$ one has

$$r^p=s^q,\quad r^2+s^2=\epsilon^2,\quad p\alpha-q\beta=\pi\pmod {2\pi}.$$

There is a unique positive solution $(r,s)$: substitute $s=r^{p/q}$ and use the strict increase of $r^2+r^{2p/q}$ from zero to infinity. Thus the link lies on one standard Clifford torus. The phase equation has one component because $p,q$ are coprime, with parametrization $\alpha=qt+\alpha_0$, $\beta=pt+\beta_0$ for suitable constants. This is the positive $(p,q)$ torus knot, with the two names interchanged if one swaps solid tori. The radii vary smoothly with $\epsilon>0$, so rescaling to the unit sphere preserves the knot type.

The intersection with the sphere is transverse. Indeed the weighted radial vector $(qz,pw)$ is tangent to the complex zero set, since $dF(qz,pw)=pqF=0$ there, while its derivative on $|z|^2+|w|^2$ is $2(q|z|^2+p|w|^2)>0$. This verifies the small-sphere transversality directly.

## The fibration, with its boundary convention

On the complement of the knot in $S^3_\epsilon$, put $\Phi=F/|F|$. The circle action

$$\Psi_t(z,w)=(e^{iqt}z,e^{ipt}w)$$

preserves the sphere and satisfies $F(\Psi_t x)=e^{ipqt}F(x)$. Over any sufficiently short arc in the target circle, choosing a continuous argument $\theta$ and applying $\Psi_{\theta/(pq)}$ gives a smooth local trivialization of $\Phi$. Thus this is a fiber bundle, without needing to infer properness of the noncompact complement.

Near the knot, transversality and the real-rank-two differential give coordinates in which $F$ is an oriented complex normal coordinate. Consequently $\Phi$ has degree one on a positive meridian, and the closures of its fibers meet the binding in the open-book manner. Removing an invariant small tubular neighborhood gives compact oriented pages. Their boundary is the Seifert or preferred longitude: a page is an oriented surface spanning the knot, so its boundary parallel has zero linking number with the knot.

The pages are connected. The total exterior is connected, and a meridian maps to a generator of $\pi_1(S^1)$. For a fibration, monodromy acts transitively on components of the fiber when the total space is connected; the image of the total fundamental group is the stabilizer subgroup of a component. Surjectivity here makes that stabilizer the whole group, so there is only one component. This verifies the fibered-link condition exactly as stated.

The construction covers an infinite family with unbounded genus and supplies the rank and fibration checks explicitly. It does not realize an arbitrary fibered link or replace the isolated-critical-point requirement by its weaker zero-fiber version.

## Checked references

- John Milnor, Singular Points of Complex Hypersurfaces, Annals of Mathematics Studies 61, Princeton University Press (1968), publisher’s preview and bibliographic record: https://api.pageplace.de/preview/DT0400.9781400881819_A27765287/preview-9781400881819_A27765287.pdf


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no earlier contributions listed; primary theorem and hypotheses checked by browsing; displayed deduction checked algebraically. No program or formal verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

John Milnor, Singular Points of Complex Hypersurfaces, Annals of Mathematics Studies 61, Princeton University Press (1968), publisher’s preview and bibliographic record: https://api.pageplace.de/preview/DT0400.9781400881819_A27765287/preview-9781400881819_A27765287.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.
