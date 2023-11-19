# Expo starting template

## Table of Contents

- [Expo starting template](#expo-starting-template)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [What's included in this project](#whats-included-in-this-project)
  - [Folder Structure](#folder-Structure)
  - [Usage](#usage)
    - [For All Platforms](#for-all-platforms)
    - [For iOS](#for-ios)
    - [For Android](#for-android)

## Requirements

- node: 18.x
- yarn: 1.22.x

## Installation

```bash
yarn
```

## What's included in this project

- react-navigation
- splash-screen
- status-bar
- lottie-react-native

## Folder Structure

```
.
├── assets                # Folder for icon, image, font, etc.
    └── .
├── components            # Folder for shared components
    └── .
├── pages                 # Folder for page or screen
    └── .
├── types                 # Folder for types
    └── .
├── utils                 # Tools and utilities
    └── .
├── .eslintrc.js          # Configuration file used for ESLint, tool for identifying and fixing problems and helps enforce coding styles
├── .gitignore            # Used in Git repositories to specify files and directories that should be ignored by Git
├── .prettierrc           # Configuration file used for Prettier, helps maintain a consistent coding style by automatically formatting code according to predefined rules
├── app.json              # Configuration file used to specify various settings and metadata for Expo application
├── babel.config.js       # Configuration file used by Babel, transform (ES6+) code into a compatible version that can run in other environments
├── global.d.ts           # Declare global types and variables that are accessible throughout the entire project
├── package.json          # Configuration file used in Node.js, used to manage project metadata, dependencies, and various settings
├── README.md             # This file, markdown file contains information meant to be read by people
├── tailwind.config.js    # Configuration file used for Tailwind CSS, used to define various configuration options, such as color palettes, spacing, fonts, etc.
├── ts.config.json        # Configuration file used in TypeScript projects, allows developers to specify compiler options and settings for TypeScript projects
└── yarn.lock             # File that stores the exact dependency versions for project with checksums for each package to provide consistency for your dependencies.
```

## Usage

- ### For all platforms

  ```bash
  # You can select platform after starting
  yarn start
  ```

- ### For iOS

  ```bash
  yarn ios
  ```

- ### For Android

  ```bash
  yarn android
  ```
