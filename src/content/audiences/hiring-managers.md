---
title: "What you get when I join your backend"
audience: "For hiring managers and tech leads"
description: "How I work on a live PHP/Symfony product: slices instead of rewrites, written root causes, and the questions worth asking me in an interview."
order: 2
---

## The kind of work I do

Most of my last two years is cutover engineering, not greenfield CRUD. A patient portal used by millions of people needed its legacy PHP backend replaced with Symfony 7 while parents, midwives, and a content team kept using it every day. I was the primary backend engineer on that product for years before the replacement, and I carried it through: a compatible API for the existing frontend, console jobs moved one batch at a time, and an admin rollout to the people who publish content, with a shared defect sheet until they stopped needing the old system.

In parallel, older PHP products — mail, alerting, internal tools — moved onto Symfony without pulling them out of service, and the internal tools my team depends on were replaced without stopping delivery.

## How I work

- **Slices, not freezes.** Each change ships behind a compatible interface. The old path stays available until the new one is proven, then it is removed.
- **Root causes in writing.** When a purchase does not unlock access or an email goes to the wrong segment, I trace the flow end to end — frontend, API, payment provider, callback, database — and write it down with the query and the fix before anyone asks for a plan. The write-up is the handover.
- **Align before coding.** For estate-wide changes (deprecations, static-analysis levels, framework upgrades) I open a short written proposal first, so reviewers see the approach before the PR.
- **Static analysis and tests as safety rails.** I raise analysis levels one package at a time and keep behaviour checks around anything that moves money or sends mail.
- **AI tools, reviewed.** I use coding agents for analysis, migration drafts, and documentation, and I review the output the way I would review a colleague's PR.

## Stack I am fluent in

PHP 8, Symfony 6/7 (plus the Silex and Symfony 4/5 codebases that come before them), Doctrine, MySQL/MariaDB, REST and GraphQL APIs, Docker, GitHub Actions, transactional email providers, and payment-provider webhooks. Enough Next.js and React to debug the frontend side of an API contract.

## Where I am honest about limits

- Almost all of my recent depth is one company and one product family. Ask me for the cutover story, not for breadth across ten stacks.
- I have owned the backend; I have not owned hiring or people management, and I am not applying to.
- I prefer written goals on a quarterly cadence and 1:1s for blockers or career, not weekly status inspection. If your team runs on standups, tell me early.

## Questions worth asking me

- How do you replace an API that other applications depend on without breaking them?
- Walk me through a payment that was paid but never unlocked the product. Where did you look, in what order?
- How do you migrate the data of a system people are still writing to, and make the import safe to re-run?
- When do you upgrade a framework in place, and when do you rebuild?

## Working together

Remote from India with European overlap. Contract or B2B. [Selected work](/work/) · [Engineering notes](/notes/) · [Contact](/contact/)
