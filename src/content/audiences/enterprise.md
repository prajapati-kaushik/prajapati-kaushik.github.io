---
title: "Modernisation without a shutdown"
audience: "For larger and regulated organisations"
description: "Legacy PHP estates, sensitive data, external reviews, and change that has to be explained. How I fit inside a programme rather than around it."
order: 4
---

## Where I fit

Established organisations rarely need another engineer who can start a project. They need one who can change a system that is already in use — by customers, by other teams, by auditors — and leave a record of why each change was safe. That is the work I have done on healthcare products in the Netherlands, and it is the work I am looking for. I have spent over a decade in production PHP; the Dutch healthcare work is the recent depth.

## Evidence that travels

- **A live patient portal, replaced underneath its users.** A Dutch parent portal used by millions of new parents kept serving people while its backend moved from legacy PHP to Symfony 7. The public API stayed compatible for existing clients; purchases, intake, and scheduled email kept working throughout.
- **Several older products, moved onto a current stack.** Mail, alerting, and internal tools were rebuilt on Symfony in focused ports and kept their behaviour. A repeatable porting note was written so the next team does not start from zero.
- **Security findings closed, not filed.** I have worked through an external penetration-test report on a public API, registered each finding, fixed them, and closed the loop.
- **Audit tooling delivered on a deadline.** When an upcoming external audit needed better filtering and automated checks on the organisation's improvement register, the changes shipped within the week.
- **Sensitive data as a daily constraint.** Healthcare products mean personal and medical data. I do not pull production data to debug; I ask the data owner for the specific technical fields and work from those.

## How I operate inside a programme

| Your need | What I do |
|---|---|
| Change control | Written proposal before estate-wide changes; compatible interfaces; old path removed only after the new one is proven |
| Traceability | Root-cause write-ups with the flow, the query, and the fix, kept with the code |
| Cross-team work | Async by default, in writing, with a fixed CET window for coordination and incidents |
| Knowledge transfer | Runbooks and porting notes in the repository; onboarding colleagues one-to-one on local setup and conventions |
| Quality gates | Static analysis raised one package at a time; behaviour checks around money and mail; PR-based review |

## Stack

PHP 8 and Symfony 7, with the Silex and Symfony 4/5/6 codebases that precede them. Doctrine, MySQL/MariaDB, REST and GraphQL APIs, Docker, GitHub Actions, transactional email and payment-provider integrations. I adapt to the deployment and observability tooling you already run.

## Seats that work

Senior or Staff backend engineer on a product or platform team; engineer on a modernisation or migration programme; backend owner for a regulated product. Not a people-manager seat, and not a body-shop role without an architectural mandate.

## Engagement

Contract or B2B, remote from India with European overlap, long-term by preference. [Contact](/contact/)
