# Attributed submission: Attempt: TOP-30007484

Source: https://github.com/We-Solve/research/issues/232

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30007484

### Claim

Partial result

### Exact scope

An exact polynomial-time shortest common superstring algorithm for equal-length distinct k-mers whose directed (k-1)-overlap graph admits an Euler trail, producing optimal length |S|+k-1; k=1, duplicate strings and empty input are handled.

### Write-up

# TOP-30007484: Factor-two shortest common superstring

Claim type: **Partial result**.

Exact scope: An exact polynomial-time shortest common superstring algorithm for equal-length distinct k-mers whose directed (k-1)-overlap graph admits an Euler trail, producing optimal length |S|+k-1; k=1, duplicate strings and empty input are handled.

Normalize by removing duplicate strings, which does not change an ordinary common-superstring requirement. Suppose the remaining N>0 strings all have the same length k>=2. Form a directed multigraph whose vertices are occurring (k-1)-letter prefixes and suffixes, and whose edges are the strings: s goes from its prefix to its suffix. Distinct strings give distinct edges, though different strings may share endpoints. Assume the graph has a directed Euler trail using every edge exactly once. This condition is recognizable in polynomial time: all nonisolated vertices must be weakly connected, and either all indegrees equal outdegrees or there is exactly one vertex with outdegree-indegree=1 and exactly one with difference -1, all others balanced.

For completeness the degree/connectivity condition suffices. In the unbalanced case add an edge from the deficit vertex to the excess vertex, balancing all degrees. A finite weakly connected balanced directed graph on its nonisolated vertices is strongly connected: contracting strongly connected components gives a finite acyclic digraph; a source component with an outgoing edge would have more outgoing than incoming arcs, contradicting balance. Thus no intercomponent arcs remain. Start at a vertex with an unused outgoing edge, follow unused edges until returning to the start (balance prevents getting stuck elsewhere), and splice further closed walks at vertices with unused outgoing edges. Connectivity ensures all edges are eventually included. Removing the added edge yields the desired open trail. This is the usual Euler/Hierholzer construction, credited as standard.

If the trail edges in order are s_1,...,s_N, output s_1 followed by the last letter of s_2,...,s_N. Consecutive edges agree on k-1 letters, so each s_j occurs as the length-k window beginning at position j. The output length is N+k-1.

Any ordinary string T of length L>=k has exactly L-k+1 length-k window positions. A position contains only one k-mer, so to contain all N distinct required k-mers it must satisfy L-k+1>=N. Thus every superstring has length at least N+k-1, and the construction is optimal. The argument counts distinct strings rather than multiplicities and does not assume that occurrences in an optimum are nonoverlapping.

For k=1, output each distinct symbol once, giving the obvious optimum N; for empty input output the empty string. If all input strings are empty, the empty string suffices. Mixed positive lengths are outside this subclass. Recognizing vertices by a trie or sorted explicit strings takes polynomial in total encoded length L, and Euler traversal plus output takes O(Nk) elementary symbol work after graph construction, or a conservative polynomial bound including comparison/copy costs. No exponentially large alphabet or free string oracle is used. The output size itself is O(L).

The checker enumerates small fixed-length collections over a binary alphabet, independently brute-forces candidate superstrings in increasing length, and compares accepted Euler-trail instances with the exact construction and lower bound. It also checks disconnected balanced graphs are rejected, open trails, loops, duplicates and k=1. Graphs lacking an Euler trail can require repeated connecting windows; this report gives no general factor-two algorithm for them.

Comparison with the earlier attempt: The earlier item summarizes a claimed general factor-two algorithm. This report supplies a completely independent exact Eulerian subclass, checks the lower bound in the ordinary substring model, and does not assume the broad manuscript.

References checked:

- Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007484.txt
- Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/factor-two-shortest-common-superstring/attempt-1/r1/


## Reproducibility and review

Written proof completed; standard-library independent finite checker and execution record supplied separately. These checks are finite and no formal verification or human mathematical review is asserted.

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
The authoring instance for this report is /root/hundred_algorithms. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30007484.txt
Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/factor-two-shortest-common-superstring/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
