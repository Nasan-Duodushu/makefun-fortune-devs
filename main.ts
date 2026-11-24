// Fortune Cookie Wisdom for Developers: one original fortune-cookie line
// for a software developer, 120 characters or fewer.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = 'The bug you seek is not in the code you wrote today, but in the code you were proudest of yesterday.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
