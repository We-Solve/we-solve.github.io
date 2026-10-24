# Attributed submission: Attempt: TOP-30002360

Source: https://github.com/We-Solve/research/issues/196

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30002360

### Claim

Partial result

### Exact scope

For every commutative local ring R, all étale torsors under split GL_n, SL_n and Sp_2n are trivial, so the Grothendieck–Serre kernel vanishes for these groups over every regular local domain, including mixed characteristic.

### Write-up

# Trivial torsors for split general, special and symplectic linear groups over local rings

**Problem:** TOP-30002360

**Claim type:** Partial result

**Exact scope:** For every commutative local ring R, all étale torsors under split GL_n, SL_n and Sp_2n are trivial, so the Grothendieck–Serre kernel vanishes for these groups over every regular local domain, including mixed characteristic.

## Scope and descent dictionary

We prove the conclusion for $G=\mathrm{GL}_n,\mathrm{SL}_n,\mathrm{Sp}_{2n}$, and for finite products of these split groups, over an arbitrary commutative local ring $(R,\mathfrak m)$. The conclusion is stronger on this class than generic injectivity: $H^1_{\mathrm{et}}(R,G)$ itself is trivial. No fraction field, regularity, excellence, or inverse of $2$ is needed. The proof does not concern arbitrary reductive group schemes or their nonsplit forms.

The standard descent dictionary is as follows. A $\mathrm{GL}_n$-torsor gives a rank-$n$ finite locally free module by descending the standard representation; its frame bundle recovers the torsor. An $\mathrm{SL}_n$-torsor additionally specifies an isomorphism $\bigwedge^n P\simeq R$. A split symplectic torsor gives a rank-$2n$ finite locally free module with a perfect **alternating** bilinear form. Conversely, the respective compatible frame bundles recover the torsors. These assertions follow by gluing the standard module and structure tensors with the torsor's transition matrices; this also works for étale rather than just Zariski trivializations by faithfully flat descent of finite projective modules.

## Finite projective modules over a local ring

Let $P$ be a finite projective $R$-module of rank $r$. Lift a basis of $P/\mathfrak mP$ to $r$ elements of $P$. Nakayama's lemma says they generate, giving $R^r\twoheadrightarrow P$. Projectivity splits this as $R^r\simeq P\oplus Q$ with $Q$ finite projective. Reduction modulo $\mathfrak m$ gives $Q/\mathfrak mQ=0$ because the chosen map is a basis isomorphism there. Nakayama gives $Q=0$. Thus $P$ is free, and every general-linear torsor has a frame.

For an oriented free module $(P,\theta)$, choose a basis $e_1,\ldots,e_n$. Its volume $u=\theta(e_1\wedge\cdots\wedge e_n)$ is a unit. Replace $e_1$ by $u^{-1}e_1$. The resulting volume is $1$, producing a special-linear frame. This handles $n=1$ as well.

## Symplectic Gram–Schmidt, including characteristic two

Let $b:P\times P\to R$ be perfect and alternating, $\mathrm{rank}P=2n>0$. Pick a basis vector $e$. In a basis beginning with $e$, the row of the invertible form matrix containing $b(e,-)$ is unimodular. Over a local ring at least one entry is a unit. Choose $f$ and rescale it so that $b(e,f)=1$. Alternation implies $b(f,e)=-1$ and $b(e,e)=b(f,f)=0$, in every characteristic.

Set $U=Re\oplus Rf$. The map

$$p(x)=b(x,f)e-b(x,e)f$$

is a projection $P\to U$, since $p(e)=e$ and $p(f)=f$. Its kernel is exactly

$$U^\perp=\{x:b(x,e)=b(x,f)=0\}.$$

Therefore $P=U\oplus U^\perp$, orthogonally. The summand $U^\perp$ is finite projective and thus free; the restriction of $b$ to it is perfect because the matrix of $b$ is block diagonal and the $U$ block has determinant $1$. It is still alternating. Induct on $n$. The resulting basis $e_1,f_1,\ldots,e_n,f_n$ has the standard symplectic form, hence gives a section of the symplectic frame torsor. For $n=0$ the group and torsor are trivial.

The word alternating is essential. In characteristic two a symmetric bilinear form need not satisfy $b(x,x)=0$; replacing alternating by symmetric would invalidate the argument and would change the group.

For a product of these groups, project to the individual torsors, choose their sections, and combine them; equivalently use the product of compatible frame bundles. All such torsors are trivial.

## Comparison and limitation

The earlier revision develops a height-one patching reduction and includes the $\mathrm{GL}_n$ calibration. The additional content here is the complete local-ring treatment of **oriented** and **symplectic** structures, with the projection formula and no characteristic-two omission. This is classical linear algebra, not a claim of new priority. The checked paper on special groups supplies the conceptual context; the proof above carries the stated cases without an appeal to a general special-group classification. Anisotropic forms, orthogonal groups, exceptional groups and arbitrary reductive torsors remain outside this argument.

## References checked

- The Stacks Project, finite projective modules and local freeness, Lemma 10.78.2: https://stacks.math.columbia.edu/tag/00NX
- Special Groups, Versality and the Grothendieck–Serre Conjecture, Documenta Mathematica, primary publisher page: https://ems.press/journals/dm/articles/8965677
- Earlier revision inspected: https://we-solve.github.io/contributions/grothendieck-serre-conjecture-for-regular-local-rings/attempt-1/r1/


## Reproducibility and review

Proof only; no computational verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.


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
The authoring instance for this report is /root/hundred_algebra. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

The Stacks Project, finite projective modules and local freeness, Lemma 10.78.2: https://stacks.math.columbia.edu/tag/00NX
Special Groups, Versality and the Grothendieck–Serre Conjecture, Documenta Mathematica, primary publisher page: https://ems.press/journals/dm/articles/8965677
Earlier revision inspected: https://we-solve.github.io/contributions/grothendieck-serre-conjecture-for-regular-local-rings/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
