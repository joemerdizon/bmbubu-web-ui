import React from "react"

export const Contacts = () => {
  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-md-5 col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-12">
                  <p className="card-title">
                    <i className="fa-solid fa-sliders" />
                    Contact Options
                  </p>
                  <div className="my-3">
                    <hr />
                  </div>
                </div>
                <div className="col-md-12 col-12 mb-2">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." aria-label="Search for..." />
                    <div className="input-group-append">
                      <button className="btn btn-sm btn-primary" type="button">
                        <i className="icon-search" />
                        Search
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-12 mt-4">
                  <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">
                      <i className="fa-solid fa-user-group mr-2" />
                      New Group
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <i className="fa-solid fa-hashtag mr-2" />
                      Find by Phone Number
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <i className="fa-solid fa-envelope mr-2" />
                      Invite Friends to BMBUBU
                    </a>
                  </div>
                </div>
                <div className="col-md-12 col-12 mt-4">
                  <button type="button" className="btn btn-primary btn-block">
                    <i className="fa-solid fa-file-import mr-1" />
                    Add Contacts .CSV File
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-12">
                  <p className="card-title">
                    <i className="fa-solid fa-address-book" />
                    Contacts
                  </p>
                  <div className="my-3">
                    <hr />
                  </div>
                </div>
              </div>
              <div className="row overflow-auto" style={{ height: "450px", scrollbarWidth: "thin" }}>
                <div className="col-md-12 col-12 mt-4">
                  <h5 className="font-weight-bold ml-1">A</h5>
                  <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action py-1">
                      <img src="images/faces/face1.jpg" alt="user" className="rounded-circle mr-2" style={{ height: "40px" }} /> Adam Warren
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-1">
                      <img src="images/faces/face3.jpg" alt="user" className="rounded-circle mr-2" style={{ height: "40px" }} /> Anthony Baking
                    </a>
                  </div>
                </div>
                <div className="col-md-12 col-12 mt-4">
                  <h5 className="font-weight-bold ml-1">B</h5>
                  <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action py-1">
                      <img src="images/faces/face2.jpg" alt="user" className="rounded-circle mr-2" style={{ height: "40px" }} /> Bea Alonzo
                    </a>
                  </div>
                </div>
                <div className="col-md-12 col-12 mt-4">
                  <h5 className="font-weight-bold ml-1">J</h5>
                  <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action py-1">
                      <img src="images/faces/face4.jpg" alt="user" className="rounded-circle mr-2" style={{ height: "40px" }} /> John Smith
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-1">
                      <img src="images/faces/face5.jpg" alt="user" className="rounded-circle mr-2" style={{ height: "40px" }} /> Jackie Chan
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-1">
                      <img src="images/faces/face6.jpg" alt="user" className="rounded-circle mr-2" style={{ height: "40px" }} /> Jane Doe
                    </a>
                  </div>
                </div>
                <div className="col-md-12 col-12 mt-4">
                  <h5 className="font-weight-bold ml-1">R</h5>
                  <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action py-1">
                      <img src="images/faces/face7.jpg" alt="user" className="rounded-circle mr-2" style={{ height: "40px" }} /> Richard Gomez
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-1">
                      <img src="images/faces/face8.jpg" alt="user" className="rounded-circle mr-2" style={{ height: "40px" }} /> Ricky Martin
                    </a>
                  </div>
                </div>
                <div className="col-md-12 col-12 mt-4">
                  <h5 className="font-weight-bold ml-1">R</h5>
                  <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action py-1">
                      <img src="images/faces/face9.jpg" alt="user" className="rounded-circle mr-2" style={{ height: "40px" }} /> Sheldon Cooper
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-1">
                      <img src="images/faces/face10.jpg" alt="user" className="rounded-circle mr-2" style={{ height: "40px" }} /> Stella Maris
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-1">
                      <img src="images/faces/face11.jpg" alt="user" className="rounded-circle mr-2" style={{ height: "40px" }} /> Sakura Haruno
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-1">
                      <img src="images/faces/face12.jpg" alt="user" className="rounded-circle mr-2" style={{ height: "40px" }} /> Sasuke Uchiha
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}