import React, { Component } from 'react'

export default class Registration2 extends Component {
  render() {
    return (

      <>

        <div class="col-md-7 col-lg-8 mt-5">
          <h4 class="mb-3">Billing address</h4>
          <form class="needs-validation" novalidate="">
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="firstName" class="form-label">First name</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" fdprocessedid="v0c6"></input>
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div class="col-sm-6">
                <label for="lastName" class="form-label">Last name</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" fdprocessedid="d6y4ie"></input>
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div class="col-12">
                <label for="username" class="form-label">Username</label>
                <div class="input-group has-validation">
                  <span class="input-group-text">@</span>
                  <input type="text" class="form-control" id="username" placeholder="Username" required="" fdprocessedid="dm80ee"></input>
                  <div class="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>

              <div class="col-12">
                <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                <input type="email" class="form-control" id="email" placeholder="you@example.com" fdprocessedid="w50ri"></input>
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div class="col-12">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" fdprocessedid="bk78h8"></input>
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>


            </div>




            <button class="w-100 btn btn-primary btn-lg" type="submit" fdprocessedid="r0n80q">Continue to checkout</button>
          </form>
        </div>

      </>
    )
  }
}
