# Playwright Design Patterns

This is the repository for the LinkedIn Learning course **"Playwright Design Patterns"** The full course is available from [LinkedIn Learning][lil-course-url].

![Playwright Design Patterns][lil-thumbnail-url] 

## Course Description

In this course, learn how to leverage design patterns to enhance your test automation framework using Playwright. By understanding and implementing patterns such as the Page Object Model, fixtures, and data-driven testing, you'll be able to write cleaner, more maintainable, and scalable test scripts. This course is designed for test automation engineers and developers who want to improve their testing skills and ensure their tests are robust and easy to maintain. Through practical examples and hands-on exercises, gain the knowledge and skills needed to apply these design patterns effectively in your projects.

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
   - Other dependencies as listed in the `package.json` file can be installed using `npm install`

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

## Instructor

Qambar Raza

Playwright Test Automation Specialist, Content Creator        

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/qambar-raza?u=104).

[lil-course-url]: https://www.linkedin.com/learning/playwright-design-patterns
[lil-thumbnail-url]: https://media.licdn.com/dms/image/v2/D4E0DAQE68ssz1R0Ufw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1731097260562?e=2147483647&v=beta&t=RUlzWaTzqCfWpEjv_Lu3mKjo4TCxEZW_kf4lysTgpxI
