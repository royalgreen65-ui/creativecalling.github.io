# Git Quick Reference

Quick commands for working with this repository.

## Daily Workflow

```bash
# Start work: pull latest changes
git pull origin main

# Create your branch
git checkout -b feature/my-change

# After making changes: check status
git status

# Stage and commit
git add .
git commit -m "Your commit message"

# Push your branch
git push origin feature/my-change
```

Then create a Pull Request on GitHub.

## Common Commands

| Task | Command |
|------|---------|
| Check status | `git status` |
| See changes | `git diff` |
| Stage all changes | `git add .` |
| Stage specific file | `git add filename.html` |
| Commit | `git commit -m "message"` |
| Push | `git push origin branch-name` |
| Pull | `git pull origin main` |
| Create branch | `git checkout -b branch-name` |
| Switch branch | `git checkout branch-name` |
| List branches | `git branch -a` |
| Delete local branch | `git branch -d branch-name` |

## Fixing Common Mistakes

### Undo uncommitted changes
```bash
git checkout -- filename.html
```

### Unstage a file
```bash
git reset HEAD filename.html
```

### Change last commit message
```bash
git commit --amend -m "New message"
```

### Forgot to add a file to last commit
```bash
git add forgotten-file.html
git commit --amend --no-edit
```

## Sync with Remote

```bash
# Get latest from main
git fetch origin
git merge origin/main

# Or use pull (does both)
git pull origin main

# Update your branch with main
git checkout your-branch
git merge main
```

## Before Pushing

✅ **Checklist**:
- [ ] Tested changes locally (`python -m http.server 8000`)
- [ ] All files staged (`git status` is clean)
- [ ] Good commit message
- [ ] Working on a feature branch (not `main`)
- [ ] Pulled latest changes from `main`

## Need Help?

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed explanations and troubleshooting.
