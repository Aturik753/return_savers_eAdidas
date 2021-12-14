import React from 'react'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




function Items() {

    const addToCart = () => {
        toast.success("Added to your cart !");
        
    }
    return (
      
        <div>
          <br/>
            <div class="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
<div class="col">
  <div class="card h-100">
    <img src="assets/images/items/1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Golf Shirt</h5>
      <h6>$60.00</h6>
      <p class="card-text">Cotton golf shirt - Blue</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-danger" onClick={addToCart}>Add to Cart</button>
      <ToastContainer autoClose={3000}/>
    </div>
  </div>
</div>

<div class="col">
  <div class="card h-100">
    <img src="assets/images/items/2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Canvas Jacket</h5>
      <h6>$125.00</h6>
      <p class="card-text">Brown canvas outer, polyester lining</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-danger">Add to Cart</button>
    </div>
  </div>
</div>

<div class="col">
  <div class="card h-100">
    <img src="assets/images/items/3.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Jean shorts</h5>
      <h6>$85.00</h6>
      <p class="card-text">Mid rise jean shorts</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-danger">Add to Cart</button>
    </div>
  </div>
</div>

<div class="col">
  <div class="card h-100">
    <img src="assets/images/items/4.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Carrier bag</h5>
      <h6>$80.00</h6>
      <p class="card-text">Polyester medium sized bag</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-danger">Add to Cart</button>
    </div>
  </div>
</div>

<div class="col">
  <div class="card h-100">
    <img src="assets/images/items/7.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Smart Watch</h5>
      <h6>$250.00</h6>
      <p class="card-text">Track your health</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-danger">Add to Cart</button>
    </div>
  </div>
</div>
</div>





<section class="container">
  <header class="section-heading heading-line">
      <h4 class="title-section text-uppercase">Popular items</h4>
  </header>
  <div class="col">
  <div class="card h-100">
  <img src="assets/images/items/2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Canvas Jacket</h5>
      <h6>$125.00</h6>
      <p class="card-text">Brown canvas outer, polyester lining</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-danger">Add to Cart</button>
    </div>
  </div>
</div>



</section>

  </div>
        </div>
    )
}

export default Items
