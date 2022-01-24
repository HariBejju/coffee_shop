Route Router Link:
Router:
    Router is usually a top-level component in the component tree and use only one time in the entire application.
    Router component is what makes the connection between browser location and the react application. It doesn't render anything visible on your page. It just exposes API to interact with location changes of the browse

Route:
    Route is much simple to explain. It just renders some UI when a location matches the route’s path.

    import {BrowserRouter as Router, Routes, Link} from "react-router-dom"
    Route syntax:
    <Route path = "/" component ={Component}>

    Link tag is used whenever we need to redirect to another specific page.

    Example: In navbar we know that we have Home shop pages login cart. so when we click that it redirect to that specific page so we use link tag enclosed within Router tag.  
    
    So after linking the tag we need to render UI there and now we use Route. Route renders UI
    <Router>
    <Route Link to ="/">Home<Route>
    </Router>

How to add images in the website:
    import logo from "location"
    <img src = {logo}/>

map function:

    1. first before making backend, create an API data.js
    2. export default data
    3. data.products.map((product)=>(
        (
            <div key = {product._id}>
        {product.name}
        better you first check if by {console.log(product)}
        </div>
        )
        
    ))
    **** ALWAYS USE map(( )=>( )) and not map(( )=>{ })
     

img rendering in react:
    when image is taken from local storage using link, it wont render properly.  Inorder to do that we use require option
    <img src= {require('../img/name.png')}>

finding a part of json by clicking on it
const product = product.find((x)=>x._id === props.match.params.id)
the above is for react 5 
for react 6, we use a useParam hook to find id
const product= product.find((x)===x._id === id)