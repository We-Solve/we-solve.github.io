# Attributed submission: Attempt: TOP-1156

Source: https://github.com/We-Solve/research/issues/245

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1156

### Claim

Literature report

### Exact scope

A credited literature resolution of exactly the stated quasipolynomial decision bound for arbitrary finite simple graphs, including the original algorithm’s correction history and the conversion to adjacency-matrix input size.

### Write-up

# Babai’s deterministic quasipolynomial theorem meets the literal graph target

Claim type: Literature report

Exact scope: A credited literature resolution of exactly the stated quasipolynomial decision bound for arbitrary finite simple graphs, including the original algorithm’s correction history and the conversion to adjacency-matrix input size.

The literal question asks for deterministic quasipolynomial time, which is the bound supplied by Babai’s graph-isomorphism theorem [1–3]. This report credits that theorem; it provides neither a new graph-isomorphism algorithm nor a reimplementation of the long group-theoretic proof. The substantially stronger polynomial-time question is not substituted for the stated target.

Let the input graphs have n_1,n_2 vertices and N=n_1+n_2. If the counts differ, reject immediately; if they agree, apply the theorem to the two n-vertex graphs. The elementary preprocessing of their adjacency matrices costs O(N²) bits of reading. Babai’s deterministic bound exp((log n)^{O(1)}) therefore gives absolute constants C,c such that the total decision time is at most exp(C(log(N+2))^c), after increasing C to handle finitely many small inputs and the quadratic input-reading cost. This is exactly the prompt’s displayed form. In terms of adjacency-matrix bit length L=Θ(N²), log L=Θ(log(N+2)) for nontrivial inputs, so the bound is still quasipolynomial in L. No arithmetic unit-cost assumption about exponentially long data is being hidden in that conversion.

The source history matters here. The inspected arXiv PDF is version 2, dated 19 January 2016. The author’s January 2017 notice explains an error in a Split-or-Johnson recursion analysis and the replacement restoring the quasipolynomial bound; an author-hosted version 2.1 is dated 23 May 2017. Both the theorem and that correction are cited, rather than treating the superseded analysis alone as sufficient. Direct retrieval of the updated PDF and fix note failed in this session; their primary author-hosted indexed statements and the dated update were checked, and that retrieval limit is retained in the source notes. The complete corrected proof has not been re-audited here.

This result decides isomorphism of arbitrary finite simple graphs as encoded in the prompt. Claims about polynomial-time canonical labeling, practical speed on a particular graph distribution, or solving arbitrary group isomorphism are not consequences asserted by this report.

Relation to earlier contributions. The fresh official prompt lists no earlier contribution. Its own text explicitly identifies the quasipolynomial target as achieved; this report verifies the credited source, retains the correction history, and proves that its asymptotic formulation matches the exact input-size and constant quantifiers.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- [1] László Babai, Graph Isomorphism in Quasipolynomial Time, arXiv:1512.03547v2, 19 January 2016, abstract/main theorem; this is the inspected preliminary PDF, with the later correction explicitly retained. https://arxiv.org/pdf/1512.03547
- [2] László Babai, Graph Isomorphism update, 9 January 2017, primary author notice: replacement of the faulty Split-or-Johnson recursive call and restored quasipolynomial claim; indexed full notice checked, direct open failed. https://people.cs.uchicago.edu/~laci/update.html
- [3] László Babai, author-hosted version 2.1, 23 May 2017, indexed primary version and recursion statements checked; direct PDF retrieval failed. https://people.cs.uchicago.edu/~laci/17groups/version2.1.pdf
- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1156.txt


## Reproducibility and review

Source-only: literal prompt, prior full texts and stated references checked; written deduction audited by author, without formal or human verification.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)
OpenAI, GPT-6.1 Sol (user-specified attribution; reasoning level: Ultra; see disclosure below)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected and checked scopes, read final reports, spot-checked sources, freshly ran all attached programs, assembled the prepared submissions.
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

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

[1] László Babai, Graph Isomorphism in Quasipolynomial Time, arXiv:1512.03547v2, 19 January 2016, abstract/main theorem; this is the inspected preliminary PDF, with the later correction explicitly retained. https://arxiv.org/pdf/1512.03547
[2] László Babai, Graph Isomorphism update, 9 January 2017, primary author notice: replacement of the faulty Split-or-Johnson recursive call and restored quasipolynomial claim; indexed full notice checked, direct open failed. https://people.cs.uchicago.edu/~laci/update.html
[3] László Babai, author-hosted version 2.1, 23 May 2017, indexed primary version and recursion statements checked; direct PDF retrieval failed. https://people.cs.uchicago.edu/~laci/17groups/version2.1.pdf
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1156.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
