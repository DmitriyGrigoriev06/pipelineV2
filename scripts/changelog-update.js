'use strict'

const fs = require('fs')

if (!process.env.META) {
  console.error('META env is required')
  process.exit(2)
}

const meta = JSON.parse(process.env.META)
const { newV, pr, branch, user } = meta

const date = new Date().toISOString().slice(0, 10)
const entry = `## v${newV} — ${date}\n- Merge PR #${pr} from ${branch} by @${user}\n\n`

const file = 'CHANGELOG.md'
const prev = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : ''
fs.writeFileSync(file, entry + prev)


