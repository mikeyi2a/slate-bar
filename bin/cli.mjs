#!/usr/bin/env node

import { existsSync, mkdirSync, copyFileSync } from 'node:fs'
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

const TOOLS = [
  {
    name: 'Cursor',
    detect: '.cursor',
    files: [
      {
        src: 'cursor-commands/slate-bar.md',
        dest: '.cursor/commands/slate-bar.md',
        label: 'slash command',
      },
      {
        src: 'skill/SKILL.md',
        dest: '.cursor/skills/slate-bar/SKILL.md',
        label: 'agent skill',
      },
    ],
  },
  {
    name: 'Claude Code',
    detect: '.claude',
    files: [
      {
        src: 'skill/SKILL.md',
        dest: '.claude/skills/slate-bar/SKILL.md',
        label: 'agent skill',
      },
    ],
  },
  {
    name: 'Codex',
    detect: '.codex',
    files: [
      {
        src: 'skill/SKILL.md',
        dest: '.codex/skills/slate-bar/SKILL.md',
        label: 'agent skill',
      },
    ],
  },
  {
    name: 'Gemini / Antigravity',
    detect: '.gemini',
    files: [
      {
        src: 'skill/SKILL.md',
        dest: '.gemini/skills/slate-bar/SKILL.md',
        label: 'agent skill',
      },
    ],
  },
  {
    name: 'Kiro',
    detect: '.kiro',
    files: [
      {
        src: 'skill/SKILL.md',
        dest: '.kiro/skills/slate-bar/SKILL.md',
        label: 'agent skill',
      },
    ],
  },
  {
    name: 'Windsurf',
    detect: '.windsurf',
    files: [
      {
        src: 'skill/SKILL.md',
        dest: '.windsurf/skills/slate-bar/SKILL.md',
        label: 'agent skill',
      },
    ],
  },
]

function init() {
  const detected = TOOLS.filter((t) =>
    existsSync(join(cwd, t.detect)),
  )

  if (detected.length === 0) {
    console.log('\n  No AI tool config folders detected in this project.')
    console.log('  Detected by looking for: .cursor, .claude, .codex, .gemini, .kiro, .windsurf')
    console.log('\n  Scaffolding into a universal location instead:\n')
    scaffold([
      {
        src: join(pkgRoot, 'skill', 'SKILL.md'),
        dest: join(cwd, '.agents', 'skills', 'slate-bar', 'SKILL.md'),
        label: '.agents/skills/slate-bar/SKILL.md (universal agent skill)',
      },
    ])
    console.log('  You can move this file into your AI tool\'s skill folder later.\n')
    return
  }

  console.log(`\n  Detected: ${detected.map((t) => t.name).join(', ')}\n`)

  const allFiles = []

  for (const tool of detected) {
    for (const f of tool.files) {
      allFiles.push({
        src: join(pkgRoot, f.src),
        dest: join(cwd, f.dest),
        label: `${f.dest} (${tool.name} ${f.label})`,
      })
    }
  }

  scaffold(allFiles)

  console.log('')
  if (detected.some((t) => t.name === 'Cursor')) {
    console.log('  Cursor: type /slate-bar in chat to use the slash command.')
  }
  console.log('  All tools: the SKILL.md will be picked up automatically.\n')
}

function scaffold(files) {
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
    console.log('\n  Everything already set up. Nothing to copy.')
  } else {
    console.log(`\n  ${copied} file(s) scaffolded.`)
  }
}
