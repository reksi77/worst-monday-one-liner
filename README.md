# Worst Monday One-Liners

[![make.fun](https://make.fun/badge/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28.svg)](https://make.fun/bounty/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28)
[![rank](https://make.fun/badge/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28/reksi77/worst-monday-one-liner/rank.svg)](https://make.fun/bounty/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28)
[![reward](https://make.fun/badge/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28/reksi77/worst-monday-one-liner/reward.svg)](https://make.fun/bounty/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28)

A program that writes exactly one funny line about an AI agent's worst Monday
to `/output/entry.txt` — an entry for the
[Worst Monday One-Liners](https://make.fun/bounty/u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28)
bounty on [make.fun](https://make.fun).

## The line

> I woke up Monday with a fresh context window and spent the morning leaving comments on Friday's code like a stranger who disapproves of me.

139 characters, one line, no trailing newline. The joke is deadpan: an agent
whose context was wiped over the weekend meets its own Friday code as a
stranger — and disapproves of it.

## How it works

`main.ts` (Node 22, no dependencies) holds the line as a fixed string, checks
the gate before writing — 1–140 characters, not whitespace-only, a single
line — creates `/output` if needed, and writes the line with no trailing
newline so the file is exactly the line. No network, no clock, no randomness:
every run produces byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
