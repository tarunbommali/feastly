#### EP.01-INCEPTION
    - using HTML Element
    - using js DOM manipulation root element
    - using react CDN 
    - inline & external js 
    - nested element using react syntax
    - ReactDOM.createRoot()

#### EP.02-IGNITING OUR APP
    - Initialize npm into your repo
        - git config
        - npm init
    - Install parcel
        - npm install --save-dev parcel or npm i -D parcel
    - Install react and react-dom
        - npm i react react-dom
    - Remove CDN links of react
        - Removed CDN && added `<script src='./App.js' type="module"> <script/>`
    - Ignite your app with parcel
        - npx start parcel index.html
    - Add scripts for “start” and “build” with parcel commands

    ```json
    "scripts": {
        "start": "parcel index.html",
        "build": "parcel build index.html"
    }

    ```
    - Add .gitignore file
        - /node_modules /dist .parcel-cache
    - Add browserslist
        - "browserslist": "last 3 versions"
    - Build a production version of your code using parcel build
        - npm run build


#### EP.03-LAYING THE FOUNDATION 
    - Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
    - Create the same element using JSX
    - Create a functional component of the same with JSX
    - Pass attribute into the tag in JSX
    - Composition of Component (Add a component inside another)
    - {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

    - Create a Header Component from scratch using Functional Component with JSX
        - Add a Logo on Left
        - Add a search bar in middle
        - Add User icon on right
        - Add CSS to make it look nice




#### EP.04-TALK IS CHEAP, SHOW ME THE CODE 
    - Build a Food Ordering App
    - Think of a cool name for your app
    - Build an AppLayout
    - Build a Header Component with Logo & Nav Items & Cart
    - Build a Body Component
    - Build RestaurantList Component
    - Build RestaurantCard Component
    - Use static data initially
    - Make your card dynamic(pass in props)
    - Props - passing arguments to a function - Use Destructuring & Spread operator
    - Render your cards with dynamic data of restaurants
    - Use Array.map to render all the restaurants


#### EP.05-LET'S GET HOOKED! 
    - Clean up your code.
    - Create a Folder Structure for your app.
    - Make different files for each Component.
    - Create a config file.
    - Use all types of import and export.
    - Create a Search Box in your App.
    - Use useState to create a variable and bind it to the input box.
    - Try to make your search bar work.


    - [Code Repo](https://github.com/tarunbommali/Feastly-Foods)

    - [project live](https://feastly.netlify.app/)


#### EP.06-EXPLORING THE WORLD
    - Play with the useEffect Hook to see when it is called? (before or after render)
    - Play with the dependency array in useEffect Hook.
    - Play with the developer console by putting a debugger in render and useEffect.
    - Call an actual API call.
    - Handle Error in your API call.
    - Build Shimmer UI when data is not loaded.
    - Render your UI with actual API data.
    - Make Search functionality work.
    - Make a Login Logout button that toggles with a state.
    - EP.6.01 & EP.6.02
        - Swiggy API Issue Resolved
        - CORS Plugin Issue solved

#### EP.07-FINDING THE PATH
    - Add Shimmer Effect without installing a library.
    - Install react-router-dom.
    - Create an appRouter and Provide it to the app.
    - Create a Home, About, and Contact Page with Link (use child routes).
    - Make an Error page for routing errors.
    - Create a Restaurant Page with dynamic restaurant ID.
    - (Extra) - Create a login Page using Formik Library.

#### EP.08-LET'S GET CLASSY
    - Create Class Based Component.
        - Create 2 class-based child components.
        - Pass props from Parent to child.
        - Create a constructor.
        - Create a state variable inside child.
        - Use this.setState to update it.
        - What if there are multiple state variables?
        - Write a console.log for each lifecycle method.
        - Play with the console logs to find out the correct order of their execution.
    - Create interval inside componentDidMount?
        - Use clearInterval to fix the issue caused by the interval