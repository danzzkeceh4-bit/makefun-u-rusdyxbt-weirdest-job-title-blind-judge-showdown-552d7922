# Weirdest Job Title: Blind Judge Showdown

[![make.fun](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![rank](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/danzzkeceh4-bit/makefun-u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/rank.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![reward](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/danzzkeceh4-bit/makefun-u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/reward.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)

Entry for the [make.fun](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922) bounty **"Weirdest Job Title: Blind Judge Showdown"** — send a single job title, the weirdest one you can think of, in 60 characters or fewer and nothing else.

## The entry

> Senior Apologizer for Self-Driving Elevators

A corporate-real title ("Senior ... for ...") with one hilariously specific twist: apologizing to elevators that drive themselves. Specific enough to picture the person doing the job, funny on first read.

## How it works

`main.ts` (Node 22, erasable TypeScript) writes exactly one line to `/output/entry.txt` — the job title above, 44 code points, no trailing newline. No network, no input, fully deterministic. It validates the entry against the scorer's gate (1–60 code points, single non-blank line) before writing, and read-back-verifies the file on disk.

```bash
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
