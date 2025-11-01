# Contributing to Creative Calling

This guide explains how to work with this repository, including pushing and pulling changes, handling repository rules, and common troubleshooting steps.

## Quick Start: Working with Git

### Clone the Repository

```bash
git clone https://github.com/royalgreen65-ui/creativecalling.github.io.git
cd creativecalling.github.io
```

### Basic Workflow

1. **Pull latest changes** (before starting work):
   ```bash
   git pull origin main
   ```

2. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** to files

4. **Check what changed**:
   ```bash
   git status
   git diff
   ```

5. **Stage your changes**:
   ```bash
   git add .
   # or add specific files
   git add index.html assets/css/site.css
   ```

6. **Commit your changes**:
   ```bash
   git commit -m "Brief description of your changes"
   ```

7. **Push to GitHub**:
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request** on GitHub to merge your changes into `main`

## Common Push/Pull Issues and Solutions

### Issue: "Updates were rejected because the remote contains work"

**Cause**: Someone else has pushed changes to the branch you're working on.

**Solution**:
```bash
# Pull and merge remote changes
git pull origin your-branch-name

# Or, if you prefer rebasing
git pull --rebase origin your-branch-name
```

### Issue: "Permission denied" or "Authentication failed"

**Cause**: Git credentials are not configured or are incorrect.

**Solution**:
1. Configure your Git identity:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

2. For HTTPS URLs, use a Personal Access Token (PAT):
   - Go to GitHub Settings → Developer Settings → Personal Access Tokens
   - Generate a new token with `repo` scope
   - Use the token as your password when prompted

3. Or use SSH (recommended):
   ```bash
   # Generate SSH key
   ssh-keygen -t ed25519 -C "your.email@example.com"
   
   # Add to GitHub: Settings → SSH and GPG Keys
   # Then change remote URL
   git remote set-url origin git@github.com:royalgreen65-ui/creativecalling.github.io.git
   ```

### Issue: "Protected branch" errors

**Cause**: The main branch has protection rules that prevent direct pushes.

**Solution**:
- Never push directly to `main`
- Always create a feature branch and use Pull Requests
- Ensure your PR meets all required checks before merging

### Issue: Merge conflicts

**Cause**: Your changes conflict with changes made by others.

**Solution**:
```bash
# Update your branch with latest main
git fetch origin
git merge origin/main

# Git will mark conflicts in files with <<<<<<, =======, >>>>>> markers
# Edit the conflicting files to resolve
# Then stage and commit:
git add conflicted-file.html
git commit -m "Resolve merge conflicts"
git push origin your-branch-name
```

## Repository Protection Rules

This repository uses branch protection rules on the `main` branch to ensure code quality:

1. **Pull Requests Required**: All changes must go through a PR
2. **No Force Push**: Cannot force-push to protected branches
3. **Status Checks**: PRs may require passing checks before merging

### Working with Protected Branches

✅ **Do this**:
```bash
git checkout -b my-feature
# make changes
git add .
git commit -m "Add new feature"
git push origin my-feature
# Create PR on GitHub
```

❌ **Don't do this**:
```bash
git checkout main
# make changes
git add .
git commit -m "Changes"
git push origin main  # This will be rejected!
```

## Git Command Reference

### Getting Information

```bash
# See current status
git status

# See what changed
git diff

# See commit history
git log --oneline -10

# See all branches
git branch -a

# See remote configuration
git remote -v
```

### Undoing Changes

```bash
# Discard unstaged changes to a file
git checkout -- filename.html

# Unstage a file (keep changes)
git reset HEAD filename.html

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes (CAUTION!)
git reset --hard HEAD
```

### Syncing with Remote

```bash
# Fetch latest changes (doesn't merge)
git fetch origin

# Pull and merge
git pull origin main

# Pull and rebase
git pull --rebase origin main

# Push current branch
git push origin your-branch-name

# Force push (use with extreme caution!)
git push --force-with-lease origin your-branch-name
```

## Best Practices

1. **Commit Often**: Make small, focused commits with clear messages
2. **Pull Regularly**: Stay up-to-date with `main` to avoid conflicts
3. **Use Branches**: One feature/fix per branch
4. **Write Good Commit Messages**:
   - First line: brief summary (50 chars or less)
   - Blank line
   - Detailed explanation if needed
   
   Example:
   ```
   Add prayer request confirmation page
   
   Creates a new thank-you page that displays after prayer
   submission. Includes accessible messaging and navigation
   back to the main site.
   ```

5. **Test Before Pushing**: Preview locally using `python -m http.server 8000`
6. **Keep .gitignore Updated**: Don't commit temporary files or build artifacts

## Getting Help

- **Git Documentation**: https://git-scm.com/doc
- **GitHub Help**: https://docs.github.com
- **This Project's Issues**: https://github.com/royalgreen65-ui/creativecalling.github.io/issues

If you encounter issues not covered here, please open an issue on GitHub with:
- What you were trying to do
- The exact error message
- Steps to reproduce the problem
