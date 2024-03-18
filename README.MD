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


