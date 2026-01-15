# Namaste react

# Parcel
- Bundle all file in one file
- Dev Build
- Local Server
- HMR = Hot Module Replacement   //it means it use Auto - reloading
- File Watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification 
- Bundling
- Compress
- Consistent Hashing - read 
- Code Splitting
- Differential Bundling - to support older browser
- Diagnostic - proper error
- Error Handling
- HTTPS feature
- Tree Shaking - remove unused code 
- Different dev and production bundles



# Namaste Food
*App
    Header
        - Logo
        - Nav Items
    Body
        - Search
        - Restaurant Container
            - Restaurant Card
                    - Dish Name
                    - Image
                    - Restaurant Name
                    - Rating
                    - Cuisines
                    - Time to Deliver  
    Footer
        - Copyright
        - Links
        - Address
        - Contact

*/


Two types of Export/Import

*- Default Export/Import

export deafault Component
import Component from "path"

*- Named Export/Import

export const Component;
export const Component2;
or 
export {Component,Component2}

import {Component , Component2} from "path";
or 
import {Component } from "path";



# React Hooks
(Normal JS utility functions)
- useState() - Superpowerful State Variables in react
- useEffect()

# 2 types Routing in web apps
- Client Side Routing
- Server Side Routing


# Redux Toolkit
- Install libraries : @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector


# Types of testing(developer)
- Unit testing
- Integration Testing
- End to End Testing - e2e testing


// Settung up testing in our app
- Install React Testing library
- Install jest
- Installed Babel dependeccies
- Configure babel
- Configure parcel Config file to disable default babel transpilation
- Jest Configuration - npx create-jest
- Install jsdom library
- Install @babel/preset-react - to make JSX in test cases
- Include @babel/preset-react inside my babel.config file
-  npm i -D @testing-library/jset-dom