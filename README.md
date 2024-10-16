# Playwright Design Patterns - 2019019

This is the repository for the LinkedIn Learning course **"Playwright Design Patterns - 2019019."** The full course is available from [LinkedIn Learning][lil-course-url].

![Playwright Design Patterns - 2019019][lil-thumbnail-url] 

_See the readme file in the main branch for updated instructions and information._

## Instructions

This repository has branches for each of the videos in the course. You can use the branch dropdown menu in GitHub to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go directly to the branch you want to access.

## Branches

The branches are structured to correspond to the videos in the course. The naming convention is as follows:

- `CHAPTER#_MOVIE#`

For example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter.

In some cases, branches will have both a beginning and an end state. These are marked with:
- `b` for "beginning" (e.g., `02_03_b`)
- `e` for "end" (e.g., `02_03_e`)

The `b` branch contains the code as it is at the beginning of the movie, while the `e` branch shows the state at the end. The `main` branch holds the final state of the code as it is at the conclusion of the course.

> **Note**: When switching from one exercise files branch to the next after making changes, you may encounter the following error:

```
error: Your local changes to the following files would be overwritten by checkout:        [files]
Please commit your changes or stash them before you switch branches.
Aborting
```

To resolve this issue:
	
1. Add changes to git using:
   ```bash
   git add .
   ```
2. Commit changes using:
   ```bash
   git commit -m "some message"
   ```

## Installing

1. To use these exercise files, ensure you have the following installed:
   - [Node.js](https://nodejs.org/) (latest LTS version recommended)
   - [Playwright](https://playwright.dev/)
   - [Cucumber](https://cucumber.io/) (if following BDD chapters)
   - Other dependencies as listed in the `package.json` file.

2. Clone this repository into your local machine using the terminal (Mac), CMD (Windows), or a GUI tool like SourceTree:
   ```bash
   git clone https://github.com/LinkedInLearning/playwright-design-patterns-2019019/tree/main
   ```

3. Navigate to a specific branch corresponding to the lesson you are working on:
   ```bash
   git checkout BRANCH_NAME
   ```

4. Install the dependencies:
   ```bash
   npm install
   ```

5. Follow any additional course-specific instructions found in the relevant branches.

[lil-course-url]: https://www.linkedin.com/learning/
[lil-thumbnail-url]: http://
