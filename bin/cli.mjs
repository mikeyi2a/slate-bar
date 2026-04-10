#!/usr/bin/env node

import { existsSync, mkdirSync, copyFileSync, readFileSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pkgRoot = resolve(__dirname, '..')
const cwd = process.cwd()

const command = process.argv[2]

if (command === 'init') {
  init()
} else {
  console.log(`
  slate-bar CLI

  Commands:
    init    Scaffold agent skill + commands into the current project

  Usage:
    npx slate-bar init
  `)
}

function init() {
  const files = [
    {
      src: join(pkgRoot, 'cursor-commands', 'slate-bar.md'),
      dest: join(cwd, '.cursor', 'commands', 'slate-bar.md'),
      label: '.cursor/commands/slate-bar.md (Cursor slash command)',
    },
    {
      src: join(pkgRoot, 'skill', 'SKILL.md'),
      dest: join(cwd, '.cursor', 'skills', 'slate-bar', 'SKILL.md'),
      label: '.cursor/skills/slate-bar/SKILL.md (agent skill)',
    },
  ]

  let copied = 0

  for (const { src, dest, label } of files) {
    if (!existsSync(src)) {
      console.log(`  skip  ${label} (source not found in package)`)
      continue
    }
    if (existsSync(dest)) {
      console.log(`  skip  ${label} (already exists)`)
      continue
    }
    mkdirSync(dirname(dest), { recursive: true })
    copyFileSync(src, dest)
    console.log(`  done  ${label}`)
    copied++
  }

  if (copied === 0) {
    console.log('\n  Everything already set up. Nothing to copy.\n')
  } else {
    console.log(`\n  ${copied} file(s) scaffolded.\n`)
    console.log('  Cursor: type /slate-bar in chat to use the slash command.')
    console.log('  Other tools: import the SKILL.md as a skill or workflow.\n')
  }
}
