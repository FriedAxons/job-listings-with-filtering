# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Job listings with filtering solution](#frontend-mentor---job-listings-with-filtering-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Filtering](#filtering)
      - [Option 1](#option-1)
      - [Option 2](#option-2)
    - [Screenshot](#screenshot)
    - [Links](#links)
    - [Built with](#built-with)
  - [Author](#author)

## Overview

Challenge provided by Frontend Mentor. The goal is to make a version of the challenge as closely as possible to the design images provided. Project design images and assets are provided to use.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Filtering

#### Option 1

Filter job listings based on the categories using the HTML `data-` attribute. In this option, you'd use the hardcoded content that already exists in the [index.html](./index.html) file.

The categories are:

- Role: Frontend, Backend, Fullstack
- Level: Junior, Midweight, Senior
- Languages: Python, Ruby, JavaScript, HTML, CSS
- Tools: React, Sass, Vue, Django, RoR (Ruby on Rails)

So, if a job listing is for has the following categories `Frontend, Junior, JavaScript, React` your HTML data attributes would look like this `data-role="frontend" data-level="junior" data-languages="javascript" data-tools="react"`.

#### Option 2

Use the [data.json](./data.json) file to pull the data and then dynamically add the content. This would be perfect if you're looking to practice a JS library/framework like React, Vue, or Svelte.

To add a filter, the user needs to click on the tablets on the right side of the listing on desktop or the bottom on mobile. For each filter added, only listings containing all selected filters should be returned.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Frontend Mentor](https://your-solution-url.com)
- Live Site URL: [GitHub Live Page](https://your-live-site-url.com)

### Built with

- [React](https://reactjs.org/) - JS library
- CSS

## Author

- GitHub - [FriedAxons](https://github.com/FriedAxons)
- Frontend Mentor - [@FriedAxons](https://www.frontendmentor.io/profile/FriedAxons)
