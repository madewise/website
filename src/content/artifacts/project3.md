---
title: API Security Capture The Flag Challenge
description: A CTF challenge level for API Security.
github: https://github.com
order: 3
---

Devleoped in collaboration with Jackson Sykes, Iris Glaze, and Maday Perez.
<br><br>
Existing project whose concept and initial version was completed during my graduate program for the 2025 Spring Term at NC State University in *CSC-537: System Attacks and Defenses* with <a href="https://www.kapravelos.com/" target="_blank" rel="noopener noreferrer">Dr. Alexandros Kapravelos</a>.
<br><br>
Groups were tasked to create a challenge level for the HackPack club's CTF competition.
<br><br>
The challenge is inspired by real-world financial services infrastructure, specifically the evolving Federal Reserve Financial Services (FRFS) API ecosystem. The scenario reflects the expanding attack surface introduced by API-driven interbank integrations as financial institutions adopt new FedLine-adjacent services.
<br><br>
The challenge is framed around a finctional institution, Everguard, and simulates an internal employee web portal. Players are given legitimate credentials for a non‑treasury role and must navigate the application’s interface, internal documentation, and institutional announcements to understand how access to sensitive financial resources is intended to be restricted.
<br><br>
The environment emphasizes role‑based access controls, internal authorization workflows, and the risks introduced when API authorization boundaries are improperly enforced. The design encourages players to reason about authorization logic rather than rely on traditional injection‑based vulnerabilities.
<br><br>
To reinforce the realism, the challenge references real regulatory and operational considerations, including Federal Reserve Operating Circular 5 and the growing importance of API‑specific security controls in regulated financial environments. Hints are delivered through in‑application content such as internal news updates and API documentation.
<br><br>
I designed the core concept, narrative, and high-level architecture fo the challenge, utilizing my regulatory compliance background to leverage industry focus. I developed the storyline around internal employee access, role separation, and emerging API integrations to guide the learning objectives. In addition, I implemented player-facing frontend elements to introduce realistic distractions. 