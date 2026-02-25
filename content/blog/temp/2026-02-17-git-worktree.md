---
title: "Using Git Worktree for Multi-Branch Development"
date: "2026-02-16"
excerpt: "Git worktree are a blessing ! Start using them now and be happy."
image: "/assets/images/mcp.png"
---

## What is a Git Worktree?

Developing isn't easy, at all. After saying that the main issue that's I've encoutnered in the recent motnhs is working with codex on a project while I hadto apply some chaneges on it.
It could happen every time you are developing something like a feature on the dev branch called "feature/mything" and suddenly you need to work on a bugfix on the same project: you are fucked.
Until a few month ago I would normally cloned the repo twice, checkout on the "feature/mything" on one folder and checked out on the other branch on the other folder: that's stupid, I know.
I recently discovered (and I'm ashemed of myselft considering that worktree are out since 2015) the git worktree functionality that fixed this nightmare once for all.
Basically with a worktree you have your primary folder that contains a branch that chould be your "main" checkout branch and then you can open a few 