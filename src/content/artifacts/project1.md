---
title: CI Ephemerality Checker
description: Simple CLI tool for any GitLab or GitHub Actions setup, analyzing CI runners and informs whether build machines are truly disposable and safe from persistent supply-chain attacks or if they are vulnerable.
github: https://github.com/madewise/ci-ephemerality-checker
order: 1
---
<br>
<i><strong>Hello! This is not public yet, however, it is in progress! Stay tuned!</strong></i> 
<br>
<br>
While this is a function of many enterprise security tools, most mid-sized teams and open-source projects don't have access to those tools. The creation of this was inspired by, unfortunately, an attack campaign-- Sha1-Hulud 2.0, which used GitHub as C2 infrastructure. 
<br><br>
GitLab shows runner names and job history, but it doesn't inform of whether your actual buiild machines are reusable and long-lived. Such a scenario could leave you vulnerable to persistence from a single malicious dependency.
<br><br>
I built this simple CLI to have an extremely lightweight way to answer whether a CI build environment is a single bad dependency away from compromise from a supply chain attack.
<br><br>
It uses yellow/green/red visual coding as a verdict and requires no complex setup, so any team can feel confident in a quick verification.