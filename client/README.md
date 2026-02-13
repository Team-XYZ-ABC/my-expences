# Project Setup and Development Workflow

This document describes the standard workflow that must be followed while working on this project.

## 1. Clone the Repository
git clone https://github.com/Team-XYZ-ABC/my-expences.git
cd my-expences


## 2. Update the Main Branch
Always ensure the `main` branch is up to date before starting any work.

git checkout main
git pull origin main

Do not make changes directly on the `main` branch.


## 3. Identify the Task Type
Before creating a branch, clearly decide the type of work:

* Feature: New functionality or enhancement
* Fix / Hotfix: Bug fix or urgent issue


## 4. Branch Naming Convention
All branches must follow this format:
your-first-name/[feature|fix]/task-name

Examples:
git checkout -b alkama/feature/forgetPassword
git checkout -b alkama/fix/login-crash


## 5. Development Rules
* Work only on your feature or fix branch
* Keep commits small and meaningful
* Follow Conventional Commits

Example commit messages:
feat(auth): add forget password flow
fix(login): handle empty input error
chore: clean up unused code


## 6. Push Your Branch
git push origin alkama/feature/forgetPassword


## 7. Create a Pull Request
* Base branch must be `main`
* Add a clear title and description
* Request review before merging
* Do not merge directly


## 8. Important Rules
* Never push directly to `main`
* Always update `main` before starting work
* Follow branch naming and commit conventions strictly

