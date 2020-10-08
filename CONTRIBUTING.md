# Guidlines for contributing to this repo

We accept pull request from anyone, either members or not.

Please read the guidlines below before making any pull requests


## General conducts

No spam pull requests, you will be blocked and reported.

Please think twice before making the pull requests, we don't accept insignificant or non sense PRs.


## Code Rules

Use a Consistent Coding Style

1. **No force-pushes** or modifying the Git history in any way.
2. Do not push directly to `master` branch, only push to `dev`
    * If PRing from your own fork, **ensure that "Allow edits from maintainers" is checked**. This gives permission for maintainers to commit changes directly to your fork, speeding up the review process.
3. **Adhere to the prevailing code style**, which we enforce using [`flake8`](http://flake8.pycqa.org/en/latest/index.html) and [`pre-commit`](https://pre-commit.com/).
    * Run `flake8` and `pre-commit` against your code **before** you push it.
    If you followed instructions in our README #Installation-Instructions for DEV you should have a working linter and pre-commit already setup.
    
    Some minor things you might notice:
    - Codebase uses double quotes `"` for strings.
    - Imports are sorted by length, top to bottom from built-in, installed and project modules.
    

## Report bugs using Github's issues
We use GitHub issues to track public bugs.
