# David Chiang's Freelancer Design System

This is an open source React/TypeScript design system which I intend to use to build websites as a freelancer but also allow others to build their own sites. The Storybook library has been added for easier inspection and testing of components and the link to it can be found here.
[Storybook]()

**However, this repo is mainly for the documenting of my findings on how to build production ready frontend design systems.**

## Topics of Interest
- Story book
- How to use Story book and how it helps productivity between developers and UI/UX developers

*Resource: (Designing at Scale by Nathan Simpson @ Thinkmill)[https://www.youtube.com/watch?v=8UZqaayA4dE]*
# Main problem to solve: How can large enterprises with multiple products and designers achieve consistency at scale? 
The answer is = **Design Systems**

## What is a Design System?
A suite of design elements, guidelines, standards that ensure visual and functional consistency in the creation of products/services.

## Who is it used by?
- Product designers, Developers, Writers, Managers

## Components of Design System
1. Design Language: colours, typography, consistent shapes
2. Component Library: 
- Generic components to build out UIs. 
- Designed in Figma and then coded in React 
- Design patterns: e.g loading pulsing blocks
- Accessibility: Tested usability for a variety of components, ensure screen readers interpret it properly, colour contrast, don't just use color to denote state. Can use utopia to analyse the component library. 

# Design System includes a Community of users
- As a design system engineer, I must know the needs of the users to build valuable enhancements
- This Design System is in itself a product

## Make it published on GitHub and accessible to the public so that people can contribute

# Creating a Design System at Scale
## Color tokens:
- Foreground colors
- Background colors
- Border colors
- System colors: (Vibrant/muted)
    * Success / Error / Info / Warning (label denotes the intent, instead of just the color itself as they are subject to change)

## Documentation
### * Components
Title / 
Description / 
View in Figma-Storybook-Github /
Import methods
Dos & Don'ts
Tones: Give examples of where different cases where you should have different System colors and possible associated content. E.g Alerts are success when a task is complete, 
Code Copying

### * Patterns
They are mostly patterns in your code to deal with specific scenarios
- E.g if dealing with a loading state, then use x as the component and make conditional rendering like this... Then can show a example of code they can copy 

### * Templates
- They are an assortment of page layouts that combine several components for specific purposes

### Tradeoffs
- Of course it takes time to be able to design and build something correctly first
- So because of this time required, conversation is required with the product team on if it is appropriate. E.g if it is used for a one off product which might not be necessary.
- Creating these component design systems allows for high-fidely quickly. However despite developing it, there is the question if this is meeting the needs of the user vs creating something that just "looks right"

# Design Tokens
Resource: ( Tokens, variables, and styles - Update: Introduction to design systems )[https://www.youtube.com/watch?v=JyCmacSyDY4]
[ Tokens, variables, and styles - Update: Introduction to design systems ](https://www.youtube.com/watch?v=JyCmacSyDY4)
