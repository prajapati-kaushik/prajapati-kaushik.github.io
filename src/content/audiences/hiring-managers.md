---
title: "How I work on a live PHP product"
audience: "For hiring managers and tech leads"
description: "How I work on a live PHP/Symfony product — APIs, data, and templates. Slices instead of rewrites, written root causes, and the questions worth asking me in an interview."
order: 2
---

## The kind of work I do

Most of my work over the last two years has been cutover engineering, not greenfield CRUD.

A Dutch parent portal used by millions of new parents needed its legacy PHP backend replaced with Symfony 7 while parents, midwives, and a content team kept using it every day. I was the primary backend engineer on that product for years before the replacement, and I carried it through. The public API stayed compatible for the existing frontend. Console jobs moved one batch at a time. The people who publish content left the old admin when they no longer needed it. [Read the case](/work/zwangerenportaal/).

In the same years, older PHP products — mail, alerting, internal tools — moved onto Symfony without a shutdown. Internal tools the team depends on were replaced without stopping delivery.

## How I work

- **Slices, not freezes.** Each change ships behind a compatible interface. The old path stays until the new one is proven, then it goes.
- **Root causes in writing.** When a purchase does not unlock access, or mail goes to the wrong people, I trace the path — frontend, API, payment provider, callback, database — and write down the query and the fix. That write-up is the handover.
- **Align before coding.** For estate-wide work (deprecations, analysis levels, framework upgrades) I send a short proposal before the PR.
- **Static analysis and tests as safety rails.** I raise static analysis one package at a time. Behaviour checks sit around anything that moves money or sends mail.
- **AI tools, reviewed.** I use coding agents for analysis, migration drafts, and documentation. I review the output the way I would review a colleague's PR.

## Stack I am fluent in

PHP 8 and Symfony 7 first. Also Symfony 6, and the Silex and Symfony 4/5 codebases that come before them. Doctrine, MySQL/MariaDB, REST and GraphQL APIs, Twig and server-rendered HTML/CSS, Docker, GitHub Actions, transactional email, payment-provider webhooks. Enough Next.js and React to debug the frontend side of an API contract. I am not a specialist frontend hire; I do ship the templates and markup the product needs.

## Where I am honest about limits

- Almost all of my recent depth is one company and one product family. Ask me for the cutover story, not for breadth across ten stacks.
- I have owned the PHP side of the product — APIs, data, and the templates that render it. I have not owned hiring or people management, and I am not applying for those roles.
- I prefer written goals on a quarterly cadence and 1:1s for blockers, not weekly status inspection. If your team runs on standups, tell me early.

## Questions worth asking me

- How do you replace an API that other applications depend on without breaking them?
- Walk me through a payment that was paid but never unlocked the product. Where did you look, in what order?
- How do you migrate the data of a system people are still writing to, and make the import safe to re-run?
- When do you upgrade a framework in place, and when do you rebuild?

## Working together

Available now. Remote from India, European mornings and afternoons. For incidents and go-lives I can hold a fixed CET window. Contract or B2B; open to a long-term role if the product is right.

[Selected work](/work/) · [Engineering notes](/notes/) · [Contact](/contact/)
