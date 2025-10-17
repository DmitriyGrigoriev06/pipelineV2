'use strict'

const fs = require('fs')
const semver = require('semver')

const updateType = process.env.UPDATE_TYPE // feature | hotfix
if (!updateType || !['feature', 'hotfix'].includes(updateType)) {
  console.error('UPDATE_TYPE env must be "feature" or "hotfix"')
  process.exit(2)
}

const versionFile = 'version'
const oldV = fs.readFileSync(versionFile, 'utf8').trim()
const newV = updateType === 'feature' ? semver.inc(oldV, 'minor') : semver.inc(oldV, 'patch')
if (!newV) {
  console.error(`Failed to increment version from ${oldV}`)
  process.exit(3)
}
fs.writeFileSync(versionFile, newV + '\n')
process.stdout.write(JSON.stringify({ oldV, newV }))


