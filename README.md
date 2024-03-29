# Contemporary Freelancer Design System

This is an open source React/TypeScript design system which I intend to use to build websites as a freelancer but also allow others to build their own sites. The Storybook library has been added for easier inspection and testing of components and the link to it can be found [here]().

**However, this repo is mainly for the documenting of my findings on how to build production ready frontend design systems.**

# Component List
- Button
- Input
- CheckBox
- RadioButton
- Typography
- NavBar
- BreadCrumbs
- Tabs?
- FormField / FormGroup / FormControls
- Dialog
- Alert
- DataTable
- Card
- ToolTip
- DropDown

## Topics of Interest
- Story book
- How to use Story book and how it helps productivity between developers and UI/UX developers

# Designing at Scale
**Resource: [Designing at Scale by Nathan Simpson @ Thinkmill](https://www.youtube.com/watch?v=8UZqaayA4dE)**
- Main problem to solve: How can large enterprises with multiple products and designers achieve consistency at scale? 
The answer is = **Design Systems**

### What is a Design System?
A suite of design elements, guidelines, standards that ensure visual and functional consistency in the creation of products/services.

### Who is it used by?
- Product designers, Developers, Writers, Managers

### Components of Design System
1. Design Language: colours, typography, consistent shapes
2. Component Library: 
- Generic components to build out UIs. 
- Designed in Figma and then coded in React 
- Design patterns: e.g loading pulsing blocks
- Accessibility: Tested usability for a variety of components, ensure screen readers interpret it properly, colour contrast, don't just use color to denote state. Can use utopia to analyse the component library. 

### Design System includes a Community of users
- As a design system engineer, I must know the needs of the users to build valuable enhancements
- This Design System is in itself a product

### Make it published on GitHub and accessible to the public so that people can contribute

## Creating a Design System at Scale
### Color tokens:
- Foreground colors
- Background colors
- Border colors
- System colors: (Vibrant/muted)
    * Success / Error / Info / Warning (label denotes the intent, instead of just the color itself as they are subject to change)

### Documentation
#### * Components
Title / 
Description / 
View in Figma-Storybook-Github /
Import methods
Dos & Don'ts
Tones: Give examples of where different cases where you should have different System colors and possible associated content. E.g Alerts are success when a task is complete, 
Code Copying

#### * Patterns
They are mostly patterns in your code to deal with specific scenarios
- E.g if dealing with a loading state, then use x as the component and make conditional rendering like this... Then can show a example of code they can copy 

#### * Templates
- They are an assortment of page layouts that combine several components for specific purposes

#### Tradeoffs
- Of course it takes time to be able to design and build something correctly first
- So because of this time required, conversation is required with the product team on if it is appropriate. E.g if it is used for a one off product which might not be necessary.
- Creating these component design systems allows for high-fidely quickly. However despite developing it, there is the question if this is meeting the needs of the user vs creating something that just "looks right"

# Design Tokens
**Resource: [ Tokens, variables, and styles - Update: Introduction to design systems ](https://www.youtube.com/watch?v=JyCmacSyDY4)**

Problem they can solve: They can become a standard of design for things like border radius, spacing values to prevent inconsistent product development over different teams with different designers
- They are a source of truth to maintain consistency
- Improve management of scaling design
- Remove guess work and allow efficient development

## What do tokens contain?
- They are method of managing **design properties** and **values** across a design system
- Token stores information for color, sizing, spacing, font, animation, etc 

## Token aliasing

## Primitave tokens
- Describe WHAT properties/values exist in design. E.g all colors, spacing in the app (NEVER APPLIED DIRECTLY TO DESIGNS!) E.g Pink/400

## Semantic tokens
    - Give context to how it should be used and references primitive tokens E.g surface/brand-contrast

## Component specific tokens
    - Can reference Primitive/Semantic tokens and apply for specific components

### Benefits
- Through this it appears that you would have multiple tokens that refer to the same exact color. But the advantage with this is let's say I want to change the color of the button component, instead of changing the semantic token which would affect many, I would just change the component token which is applied to my targeted scope of items to change color.

#### EXAMPLES
- Semantic tokens: surface/primary surface/secondary surface/brand
- Component tokens: components/button/contarast text/invert border/secondary icon/brand

### Dark mode
- Instead of duplicating the set of current tokens and renaming them
- Just create a set that has the same name as the current tokens, but make them reference different primitive values
- E.g brand/surface -> would reference white for bright mode, but would reference black for dark mode. So it still remains the same name as the name is not of the color, but the intention and where it is being used.

### Naming conventions
- An option is to use kebab case with full length words that are descriptive and are always in teh same syntax ordering. E.g background-color-primary
- Avoid using 'brand' in name if designing for multiple brands in one project

# Process of Building the Design System
**Resource: [Storybook's tutorial guide: "Design Systems for Developers"](https://storybook.js.org/tutorials/design-systems-for-developers/)**
- Look at awwwards sites and take inspiration for what is appropriate for my design sytem
- Create style guide: 
	- Typography
	- tokens:
		- colors
		- padding / margins
		- border widths
- Identify list of atomic components
- Integrate Storybook
- Integrate CSS in JS
- Develop components in React/Ts
- Define API for components (look to Storybook, MUI, AGS design systems for inspiration)
- Add documentation for components
- Test components
- Publish to npm

# Questions
# 1. Where and how to store design tokens?
Using @emotion/react, you can use the themeProvider and createTheme to essentially create an object with several tokens either for colors, typography, and spacings that becomes globally available. This can be stored in its own TypeScript file.
So it is just like in material ui emotion for users who are used to developing themes in that design system. 
This object is made available by wrapping the source component, let's say in the main.tsx file, with a ThemeProvider wrapper. This wrapper takes in the attribute of the theme object we just created. Then this theme is available with the useTheme hook.

- What are examples of design tokens in the method of storage?
- How to use design tokens in design system? Are they found in the component itself, or passed through the API?
- How to make design tokens globally available in components/project?
    - How to do via useContext / Redux
- Are there certain fundamental attributes needed in each component of the design system?
- How to implement more advanced components? E.g Things that require more DOM related functions such as anchoring elements to one another => inspect and copy the MUI API

- How to implement component based development starting from atomic components?

## Plan
- Inspect Storybooks' and AGS' and MUI Design Systems for the architecture of their design system. => esp any commonality

# Unrelated Questions
- What are standard practice and patterns for:
    - consuming RESTful APIs?
    - parsing received data?
    - passing data to components
    - handling synchrony when receiving API data and storing in global state?

- All React hooks
- Js promise / async await
- TypeScript types regarding the event object, React component specific objects and other DOM related objects
- TypeScript Generics

# How to install @emotion/react with the Vite bundler
Read this blog post [here](https://dev.to/glocore/configure-emotion-with-your-vite-react-project-7jl)
Vite is a bundler that uses esbuild and not babel. It appears that babel is needed to transpile the CSS-in-Js in @emotion/react so the babel plugin must be added as well as a dependency.

## 1. Install Dependencies
```npm install --save @emotion/react```
```npm install --save-dev @emotion/babel-plugin```

## 2. Update vite.config.ts
```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
});
```

## 3. Add TypeScript support
In tsconfig.json add,
```
{
  "compilerOptions": {
    "jsxImportSource": "@emotion/react"
  }
}
```

# TypeScript decisions
- If I want to add types to an object that might change over time, then it could be good to use this implementation:  
- If I declare an object made globally and need to reference that object's fields many times through typing, then I can use this implementation:

```
const object = {};
const ObjectType = typeof object;
```
