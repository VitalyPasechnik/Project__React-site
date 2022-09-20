## Description
Implement Products catalog following [this design](https://www.figma.com/file/uEetgWenSRxk9jgiym6Yzp/Phone-catalog-redesign?node-id=1%3A2).

Use [products](https://mate-academy.github.io/react_phone-catalog/api/products.json)
and [product details](https://mate-academy.github.io/react_phone-catalog/api/products/motorola-xoom.json)
tо fetch data (use actual `productId` as a last part of the URL before `.json`).

Store the Cart in the `localStorage`



App
Add <header> with links to all the pages
The Logo and the Nav are aligned left
The Favorites and the Cart are aligned right
Use NavLink to highlight current page in Header
Add <footer>
Footer content is limited to the same width as the page content
Add the link to the Github repo
(*) Implement Back to top button

Home page
Fetch products from API
Each product has a type: phone, tablet or accessory price is given before discount discount is give in percents %
age is used to sort by Newest
id is required to fetch product details

Create ProductsSlider component and use it in Hot prices block
Create getHotPriceProducts method fetching products with discount from API sorted by absolute discount value (not percentage given in API)
For now do all the filtering and sorting on client side

Create ProductCard component to use it everywhere and add data-cy="cardsContainer" attribute to the container of these elements
Add ability to use < and > buttons to scroll products.
Add Brand new block using ProductsSlider
Create getBrandNewProducts method fetching products without a discount from the API starting from the most expensive
Add Shop by category block with the links to /phones, /tablets and /accessories. Add data-cy="categoryLinksContainer" to links container.
Replace the Home page title with slider and use for picture element of this slider
User can change pictures with buttons infinitely
(*) Swipe pictures every 5 seconds

Phones page
Create PhonesPage available at /phones with a <h1> title Mobile phones
Create getPhones API call fetching the products with the type: phone
Add ProductsList with data-cy="productList" attribute showing all the phones
Implement a Loader to show it while waiting for the data from server
Add ability to sort the products by age (Newest, value="age"), name (Alphabetically, value="name") and price (Cheapest, value="price") using <select> element.
(*) save sort order in the URL ?sort=age and apply it after the page reload
Add Pagination using data-cy="pagination" for it's components container and Items on page using <select> element with 4, 8, 16 and all options. Add attributes data-cy="paginationLeft" and data-cy="paginationRight" to pagination buttons
It should limit the products you show to the user
Read the description for more detailed explanation
Hide all the pagination elements if there are a few items (less than 1 smallest page size)
(*) Save ?page=2&perPage=8 in the URL and apply them after the page reload

Tablets and accessories
Create TabletsPage page with <h1> title Tablets available at /tablets working the same way as PhonesPage
Create getTablets method fetching the products with type: tablet
Create AccessoriesPage with <h1> title Accessories page available at /accessories working the same way as PhonesPage
Create getAccessories method fetching the products with type: accessory
Implement NoResults component displayed if there are no products available containing text <Category name> not found

Product details page
Create ProductDetailsPage available at /product/:productId
ProductCard should be a link to the details page
Fetch phone details from API taking the phoneId from the URL
Use Loader when fetching the details
Show the details on the page
Hide Available colors and Select capacity for now
About section with data-cy="productDescription" should contain just a description (without any subheaders)
Choose Tech specs you want to show
Add ability to choose a picture
Implement You may also like block with products chosen randomly
create getSuggestedProducts method fetching the suggested products
Add Back button with data-cy="backButton" attribute working the same way as a Browser Back button
Add Breadcrumbs at the top with data-cy="breadCrumbs" attribute in elements container
The last part is a plain text all the other ones are links

Cart
Implement CartPage storing an array of CartItems
Each item should have id, quantity and a product
Add to cart button in ProductCart should add a product to the Cart
If the product is already in the Cart the button should say Added to cart
Implement Cart helper storing the items in memory and having all the required methods. Later on it will interact with the API
Add ability to remove items from the Cart with a x button. Add data-cy="cartDeleteButton" attribute to the <button> element.
Add message Your cart is empty when there are no products in the Cart
Add ability to change the quantity in the Cart with buttons containing symbols - and + around the quantity.
Total amount and quantity should be calculated automatically. The element showing the quantity should have data-cy="productQauntity" attribute.
Checkout button should show the message We are sorry, but this feature is not implemented yet after clicking.
(*) Show the total quantity near the Cart icon in the header.
(*) Save the Cart to the localSotrage on each change and read it on page load.

Favorites
Create FavoritesPage it should show the ProductsList with all the favorite products
Add ability to add/remove favorite products by pressing a hart and add data-cy="addToFavorite" attribute to this <button> element.
(*) Show the favorites count near the Favorites icon in the header

Search
Add a Search component with an input into the <header> to filter products
It should be shown only at /phones, /tablets, /accessories and /favorites with an appropriate text
The x sign with data-cy="searchDelete" attribute appears when the query is not empty and clears the search
It should work with pagination and sorting
(*) Add debounce to the search field
(*) Save Search params in the URL using queryParams (?query=moto) and apply them on page load
(*) Implement NoSearchResults component and show it when there are no products matching the query

Other tasks
Add NotFoundPage containing text Page not found for all the other URLs with the link to HomePage
Implement Phone was not found state for the PhoneDetailsPage if there is no phone with a given phoneId on the server