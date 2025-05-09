import React from "react";

const AboutProject = () => {
  const id = "";
  return (
    <div className="w-full">
      <details className="bg-white shadow-lg rounded-lg p-4 mb-4 open:mb-6 open:shadow-xl">
        <summary className="text-xl  cursor-pointer font-thin">
          App.js
        </summary>

        <div className="mt-4 text-gray-700 space-y-4">
          <p>
            ✅ <strong>App.js Overview:</strong> This file sets up the entire
            routing and layout for the application using{" "}
            <code>React Router</code>, <code>Context API</code>,{" "}
            <code>Redux</code>, and <code>Lazy loading</code>.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>AppLayout Component:</strong>
              <ul className="list-disc pl-6">
                <li>
                  Wraps everything in Redux <code>&lt;Provider&gt;</code> and{" "}
                  <code>UserContext</code>.
                </li>
                <li>
                  Renders <code>Header</code>, <code>Footer</code>, and a
                  dynamic middle layout via <code>&lt;Outlet /&gt;</code>.
                </li>
                <li>
                  Handles login user state using <code>useState</code> and{" "}
                  <code>useEffect</code>.
                </li>
              </ul>
            </li>

            <li>
              <strong>Routing Configuration:</strong> Uses{" "}
              <code>createBrowserRouter</code> and <code>RouterProvider</code>{" "}
              from <code>react-router-dom</code> for navigation.
            </li>

            <li>
              <strong>Route Paths:</strong>
              <ul className="list-disc pl-6">
                <li>
                  <code>/</code> → Home page (<code>Body</code> component)
                </li>
                <li>
                  <code>/login</code> → Login page
                </li>
                <li>
                  <code>/about</code> → About page
                </li>
                <li>
                  <code>/cart</code> → Cart page
                </li>
                <li>
                  <code>/restaurants/:resId</code> → Restaurant menu page
                </li>
                <li>
                  <code>/instamart</code> → Lazy loaded Instamart page
                </li>
              </ul>
            </li>

            <li>
              <strong>Lazy Loading:</strong> <code>Instamart</code> is loaded
              only when the user navigates to <code>/instamart</code> using{" "}
              <code>React.lazy</code> and <code>Suspense</code>.
            </li>

            <li>
              <strong>Error Handling:</strong> Custom <code>Error</code>{" "}
              component is shown when an invalid route is accessed.
            </li>
          </ul>
        </div>
      </details>

      <details className="bg-white shadow-lg rounded-lg p-4 mb-4 open:mb-6 open:shadow-xl">
        <summary className="text-xl  cursor-pointer font-thin">
          Home
        </summary>
        <div className="mt-4 text-gray-700 leading-relaxed space-y-4">
          <section>
            <h2 className="text-lg font-bold text-black">
              ✅ Main Concepts Used
            </h2>
            <ul className="list-disc list-inside pl-2">
              <li>
                <strong>React Functional Component</strong> – Uses a function to
                build the UI.
              </li>
              <li>
                <strong>useState</strong> – Stores the text entered in the
                search box.
              </li>
              <li>
                <strong>useEffect</strong> – Runs once to fetch data from Swiggy
                API.
              </li>
              <li>
                <strong>useContext</strong> – Gets user name from the context.
              </li>
              <li>
                <strong>Custom Hook (useOnlineStatus)</strong> – Checks if user
                is online.
              </li>
              <li>
                <strong>Conditional Rendering</strong> – Shows loading, error,
                or data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black">🧠 Redux Toolkit</h2>
            <ul className="list-disc list-inside pl-2">
              <li>
                <strong>useDispatch</strong> – Sends data to Redux store.
              </li>
              <li>
                <strong>useSelector</strong> – Reads data from Redux store.
              </li>
              <li>
                <strong>Redux Actions Used</strong> – setRestaurants, setTitle,
                etc.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black">
              🔍 Search, Sort, and Filter
            </h2>
            <ul className="list-disc list-inside pl-2">
              <li>Search by restaurant name.</li>
              <li>Sort by Rating, Name, or Price.</li>
              <li>Filters like Fast Delivery, Veg, Offers, etc.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black">🧩 Components Used</h2>
            <ul className="list-disc list-inside pl-2">
              <li>
                <code>RestaurantCard</code> – Shows a single restaurant.
              </li>
              <li>
                <code>ShimmerUi</code> – Shows loading shimmer.
              </li>
              <li>
                <code>FetchError / OfflineError</code> – Error messages.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black">🎨 UI & Icons</h2>
            <ul className="list-disc list-inside pl-2">
              <li>
                <strong>Tailwind CSS</strong> – Used for layout and styling.
              </li>
              <li>
                <strong>React Icons</strong> – For UI icons (search, filters,
                etc.).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black">🌐 API & Safety</h2>
            <ul className="list-disc list-inside pl-2">
              <li>
                <strong>Fetch API</strong> – Used to fetch restaurant data.
              </li>
              <li>
                <strong>Optional Chaining</strong> – To safely access deep
                object values.
              </li>
            </ul>
          </section>
        </div>
      </details>

      <details className="bg-white shadow-lg rounded-lg p-4 mb-4 open:mb-6 open:shadow-xl">
        <summary className="text-xl  cursor-pointer font-thin">
          RestaurantCard Component
        </summary>

        <div className="mt-4 text-gray-700 space-y-4">
          <p>
            ✅ <strong>RestaurantCard Overview:</strong> The{" "}
            <code>RestaurantCard</code> component is used to display individual
            restaurant details such as the restaurant's image, name, average
            rating, delivery time, and locality. It uses{" "}
            <code>React Router</code>'s <code>Link</code> component to route to
            a detailed restaurant page upon clicking on a card.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Component Structure:</strong>
              <ul className="list-disc pl-6">
                <li>
                  Displays an image of the restaurant using its{" "}
                  <code>cloudinaryImageId</code>.
                </li>
                <li>
                  Shows the restaurant's name, rating (with a star icon), and
                  delivery time (using <code>MdDeliveryDining</code> icon).
                </li>
                <li>
                  Uses <code>Link</code> from <code>react-router-dom</code> to
                  navigate to a restaurant detail page using the <code>id</code>{" "}
                  of the restaurant.
                </li>
                <li>Shows the restaurant's cuisines and locality.</li>
              </ul>
            </li>

            <li>
              <strong>Props:</strong>
              <ul className="list-disc pl-6">
                <li>
                  <code>restaurant</code> – The restaurant data is passed as
                  props. It contains information like <code>name</code>,{" "}
                  <code>avgRating</code>, <code>slaString</code>, etc.
                </li>
              </ul>
            </li>

            <li>
              <strong>UI and Styling:</strong>
              <ul className="list-disc pl-6">
                <li>
                  Tailwind CSS is used for styling the card layout, with
                  specific utility classes for margins, padding, font sizes, and
                  hover effects.
                </li>
                <li>
                  The <code>hover:scale-[0.95]</code> effect on the card gives a
                  slight zoom effect when hovered.
                </li>
                <li>
                  The card has a fixed width of <code>280px</code> and height of{" "}
                  <code>288px</code> to ensure consistent sizing.
                </li>
              </ul>
            </li>

            <li>
              <strong>Routing:</strong>
              <ul className="list-disc pl-6">
                <li>
                  When a user clicks on the restaurant card, it routes to{" "}
                  <code>restaurants/{id}</code> to show the restaurant's
                  detailed page.
                </li>
              </ul>
            </li>

            <li>
              <strong>Iconography:</strong>
              <ul className="list-disc pl-6">
                <li>
                  <code>MdDeliveryDining</code> is used for the delivery time
                  icon.
                </li>
                <li>
                  The rating is displayed using a custom star icon (
                  <code>RATING_STAR_ICON_URL</code>).
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </details>

      <details className="bg-white shadow-lg rounded-lg p-4 mb-4 open:mb-6 open:shadow-xl">
        <summary className="text-xl  cursor-pointer font-thin">
          RestaurantDetailed Component 
        </summary>
        <div className="mt-4 text-gray-700 space-y-4">
          <p>
            ✅ <strong>RestaurantDetails Overview:</strong> This component is
            responsible for displaying detailed information about a restaurant.
            It shows both high-level and detailed information, with collapsible
            sections for a clean and organized layout.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Component Structure:</strong>
              <ul className="list-disc pl-6">
                <li>
                  The main layout of the component is a container (
                  <code>&lt;div&gt;</code>) styled with Tailwind CSS for
                  spacing, shadows, and padding.
                </li>
                <li>
                  The main title (<code>&lt;h1&gt;</code>) is the restaurant
                  name, which is displayed in bold at the top.
                </li>
              </ul>
            </li>

            <li>
              <strong>
                Collapsible Details (<code>&lt;details&gt;</code>)
              </strong>
              <ul className="list-disc pl-6">
                <li>
                  The <code>&lt;details&gt;</code> tag creates a collapsible
                  section, where the user can click to expand or collapse
                  additional information.
                </li>
                <li>
                  The <code>&lt;summary&gt;</code> tag is used to specify the
                  clickable header of each collapsible section.
                </li>
              </ul>
            </li>

            <li>
              <strong>Sections Explained:</strong>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Restaurant Info Section:</strong>
                  <ul className="list-disc pl-6">
                    <li>
                      Rating & Cost: Displays the restaurant's average rating
                      with a star icon and the total number of ratings. It also
                      shows the cost for two people.
                    </li>
                    <li>
                      Cuisines: The list of cuisines the restaurant serves,
                      displayed as a clickable, underlined text.
                    </li>
                    <li>
                      Location & Delivery Time: The restaurant's location (area
                      and city) and the estimated delivery time.
                    </li>
                    <li>
                      Delivery Fee: The delivery fee, which is dynamically
                      calculated if applicable.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Restaurant Detailed Info Section:</strong>
                  <ul className="list-disc pl-6">
                    <li>
                      Rating Explanation: Further elaborates on the average
                      rating.
                    </li>
                    <li>
                      Cuisines & Cost: Details the list of cuisines and cost for
                      two.
                    </li>
                    <li>
                      Location & Delivery Details: Gives more context on
                      location and delivery time.
                    </li>
                    <li>
                      Fee Explanation: Additional details on the delivery fee.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <strong>Collapsible Functionality:</strong>
              <ul className="list-disc pl-6">
                <li>
                  The <code>&lt;details&gt;</code> tag makes this section
                  interactive, allowing users to expand the information when
                  they want to see more, and collapse it when they don’t.
                </li>
                <li>
                  The <code>&lt;summary&gt;</code> tag acts as the title or
                  header of the collapsible section, which can be clicked to
                  toggle visibility of the content.
                </li>
              </ul>
            </li>

            <li>
              <strong>Styling:</strong>
              <ul className="list-disc pl-6">
                <li>
                  Tailwind CSS: Tailwind utility classes are used to style the
                  components with margins, padding, font sizes, and colors. The{" "}
                  <code>open:mb-6 open:shadow-xl</code> classes are used to add
                  extra spacing and shadow when the section is expanded.
                </li>
                <li>
                  Hover Effects: The card element has hover effects to give a
                  zoom-in look when a user hovers over it.
                </li>
              </ul>
            </li>

            <li>
              <strong>Usage:</strong>
              <ul className="list-disc pl-6">
                <li>
                  This component would typically be used within a list or a grid
                  of restaurant cards. Each card displays basic restaurant
                  information, and upon clicking, the user is redirected to a
                  detailed view. Additionally, this component provides a way to
                  view restaurant details in a clean, organized, and collapsible
                  format.
                </li>
              </ul>
            </li>

            <li>
              <strong>Why Use Collapsibles:</strong>
              <ul className="list-disc pl-6">
                <li>
                  Collapsibles improve UX by preventing information overload,
                  especially when you have detailed content that doesn't need to
                  be visible at all times.
                </li>
                <li>
                  Users can expand the sections they’re interested in and leave
                  others collapsed, making the page less cluttered and more
                  interactive.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </details>

      <details className="bg-white shadow-lg rounded-lg p-4 mb-4 open:mb-6 open:shadow-xl">
        <summary className="text-xl  cursor-pointer font-thin">
          Cart
        </summary>
        <div className="mt-4 text-gray-700 leading-relaxed space-y-4">
          <section>
            <h2 className="text-lg font-bold text-black">
              🛒 Cart Component Overview
            </h2>
            <ul className="list-disc list-inside pl-2">
              <li>
                Displays the list of items added to the cart using{" "}
                <code>CartItemCard</code>.
              </li>
              <li>
                Uses <code>useSelector</code> to access items from Redux cart
                slice.
              </li>
              <li>
                Uses <code>useDispatch</code> to dispatch the{" "}
                <code>clearCart</code> action.
              </li>
              <li>Conditionally shows "Cart is Empty" if no items present.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black">
              📦 Features Implemented
            </h2>
            <ul className="list-disc list-inside pl-2">
              <li>
                <strong>Billing Section:</strong> Shows total, delivery fee,
                GST, and total to pay.
              </li>
              <li>
                <strong>Coupon Section:</strong> Input field to apply coupons
                (not functional yet).
              </li>
              <li>
                <strong>Clear All Button:</strong> Removes all cart items using
                Redux action.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black">🧠 Redux Toolkit</h2>
            <ul className="list-disc list-inside pl-2">
              <li>
                <code>useSelector(store = store.cart.items)</code> – Gets cart
                items.
              </li>
              <li>
                <code>useDispatch()</code> – Used to call the{" "}
                <code>clearCart</code> action.
              </li>
              <li>
                <code>cartSlice</code> – Contains the reducer and action for
                managing cart state.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black">🎨 UI & Styling</h2>
            <ul className="list-disc list-inside pl-2">
              <li>
                <strong>Tailwind CSS</strong> – Used to style buttons, inputs,
                layout, and spacing.
              </li>
              <li>
                <code>flex</code>, <code>rounded</code>, <code>bg</code>,{" "}
                <code>text</code> – Tailwind utility classes used throughout.
              </li>
            </ul>
          </section>
        </div>
      </details>
    </div>
  );
};

export default AboutProject;
