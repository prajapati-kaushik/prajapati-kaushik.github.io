# Kaushik Prajapati

Senior PHP/Symfony engineer. Freelance / contract. Remote from India, overlapping European mornings and afternoons. Available for new engagements.

He keeps products that people already use reliable while the business adds the next thing. Eleven years with a Dutch product company (LinkORB), including ZwangerenPortaal.nl, a parent portal used by millions of new parents. Before that, fourteen years at IndiaNIC (2007–2021), developer to senior engineer, on commercial web platforms: billing and bookings included. MCA, IGNOU. B.Com, Gujarat University.

Full record, evidence, and what may be said in public: `context/profile.md`, `context/achievements.md`. Scans live in `context/github-activity.md` and `context/nebula-participation.md`. Those files are not part of the site.

## Audience and voice

Who the site is for decides what is highlighted, and where.

- **Recruiters.** They match a role and forward a profile. They need the title, PHP/Symfony, freelance/contract, remote from India, EU time overlap, availability, years, and one proof line (the Dutch parent portal).
- **Business owners, founders, and hiring managers.** They decide whether the work is worth paying for. They need what the business kept or gained.
- **Technical teams are not the audience for the public pages.** Implementation detail belongs in Notes.

The **work section** (`/work/` and each case study) is where those first two readers look for proof. Highlight confirmed outcomes: the parent portal kept serving people while its backend was replaced (course access, intake, pregnancy-week email, a compatible API); older PHP products (mail, alerting, internal tools) moved onto Symfony and kept shipping; a parenting product's email kept sending after its old provider was replaced. Do not lead the work section with frameworks, ticket numbers, or internal product names.

Do not rewrite the home page or the about page when tuning this. Their copy stays as committed.

The **audience pages** (`/for/`, one Markdown file per reader in `src/content/audiences/`) restate the same confirmed outcomes for a specific seat: recruiters, hiring managers, founders, larger organisations. The hiring-manager page may go one level deeper technically (public tools, method, interview questions) but follows the same privacy rules as every public page.

First person. Outcomes before tools. PHP and Symfony stay visible as the filter, not as the story. Do not publish internal product names, topic titles, or ticket numbers. Do not invent metrics. Only achievements marked confirmed in `context/achievements.md` may become public claims.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
