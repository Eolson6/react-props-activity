# REACT PROPS ACTIVITY

## Setup

- **Do not fork this repository**
- `create-react-app react-props-activity`
- `cd react-props-activity`
- Create a repository on GitHub (do not initialize with a README)
- `git remote add origin ...` where ... is the new repostory you created

## Instructions

You will be created a webpage that allows users to increase or decrease a total by a set amount. For example, if the total is **4** and a user inputs **1** and presses **up** the total would be increased to **5**.

When the user presses **save** the current total should be added to the history. After being added to the history, the total should be set to **0**.

### Components

Inside of `App.js`, the page should be broken down into four components:

1. `Header.js`
2. `EnterNumber.js`
3. `CurrentTotal.js`
4. `History.js`

> NOTE: Before you get started, think about where your data will be stored. What will be in **state**? What will be passed via **props**? 

![Wireframe](wireframe.png)

## Stretch Goals

- Prevent the user from going below 0 or above 10.
- Allow the user to remove a number from the history.
- Add a button the the history component that allows a user to clear the history.
- Improve the styling of the page.