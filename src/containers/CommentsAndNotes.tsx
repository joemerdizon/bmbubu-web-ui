import React from "react"

export const CommentsAndNotes = () => {
  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-md-12 col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-12">
                  <p className="card-title">
                    <i className="fa-solid fa-bell" />
                    Notifications
                  </p>
                  <div className="my-3">
                    <hr />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 col-12 mb-4">
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-outline-dark">
                      162 Reports
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                      958 Tickets
                    </button>
                    <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                      Sort Notifications By
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item">Newest</a>
                      <a className="dropdown-item">Oldest</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12 mb-4">
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
              </div>
              <div className="row">
                <div className="col-md-12 col-12">
                  <div id="accordion" className="myaccordion w-100 rounded mb-5">
                    <div className="card">
                      <div className="card-header p-0" id="noticationHeading1">
                        <h2 className="mb-0">
                          <button className="d-flex py-4 px-4 align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#notificationCollapse1" aria-expanded="false" aria-controls="notificationCollapse1">
                            <p className="mb-0 text-left" style={{ lineHeight: "0.95rem" }}>
                              <span className="fa-solid fa-file-lines fa-fw fa-2x text-primary float-left" />
                              <span className="ml-3 text-primary">Add drag and drop config import closes</span>
                              <br />
                              <small className="text-muted small ml-3">
                                <b>Seen: </b>May 9, 2022
                              </small>
                            </p>
                            <div>
                              <i className="fa float-right" aria-hidden="true" />
                              <a href="#" className="text-decoration-none text-primary float-right mr-3">
                                <i className="ti-pin2" />
                              </a>
                            </div>
                          </button>
                        </h2>
                      </div>
                      <div id="notificationCollapse1" className="collapse" aria-labelledby="noticationHeading1" data-parent="#accordion">
                        <div className="card-body px-3">
                          <div className="col-12 my-4">
                            <section className="comments">
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Hello, this is an example from me</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">John Williams</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>if you are interested for more about me visited my profile on social page</p>
                                    <p>
                                      To visit me you can click my name{" "}
                                      <a target="_blank" href="#">
                                        John Williams
                                      </a>{" "}
                                      and send me frends request or send me a message in inbox
                                    </p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">John Williams</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face2.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, maxime. Optio repellat porro culpa totam. Enim a quidem, nesciunt qui delectus suscipit unde voluptas! Dicta a qui quo facilis ipsam.</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">Sofia Andres</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <textarea name="user-comments" className="form-control mb-2" rows={4} placeholder="Leave your comment here..." defaultValue={""} />
                                  <button type="button" className="btn btn-primary btn-icon-text btn-sm float-right">
                                    <i className="fa-solid fa-comment-medical" /> Add Comment
                                  </button>
                                </div>
                              </article>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header p-0" id="noticationHeading2">
                        <h2 className="mb-0">
                          <button className="d-flex py-4 px-4 align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#notificationCollapse2" aria-expanded="false" aria-controls="notificationCollapse2">
                            <p className="mb-0 text-left" style={{ lineHeight: "0.95rem" }}>
                              <span className="fa-solid fa-file-lines fa-fw fa-2x text-primary float-left" />
                              <span className="ml-3 text-primary">Document that Helvetica Neue can cause problems on Windows</span>
                              <br />
                              <small className="text-muted small ml-3">
                                <b>Seen: </b>May 9, 2022
                              </small>
                            </p>
                            <div>
                              <i className="fa float-right" aria-hidden="true" />
                              <a href="#" className="text-decoration-none text-primary float-right mr-3">
                                <i className="ti-pin2" />
                              </a>
                            </div>
                          </button>
                        </h2>
                      </div>
                      <div id="notificationCollapse2" className="collapse" aria-labelledby="noticationHeading2" data-parent="#accordion">
                        <div className="card-body px-3">
                          <div className="col-12 my-4">
                            <section className="comments">
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Hello, this is an example from me</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">John Williams</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face3.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>if you are interested for more about me visited my profile on social page</p>
                                    <p>
                                      To visit me you can click my name{" "}
                                      <a target="_blank" href="#">
                                        John Williams
                                      </a>{" "}
                                      and send me frends request or send me a message in inbox
                                    </p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">Bert Flores</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face3.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, maxime. Optio repellat porro culpa totam. Enim a quidem, nesciunt qui delectus suscipit unde voluptas! Dicta a qui quo facilis ipsam.</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">Bert Flores</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <textarea name="user-comments" className="form-control mb-2" rows={4} placeholder="Leave your comment here..." defaultValue={""} />
                                  <button type="button" className="btn btn-primary btn-icon-text btn-sm float-right">
                                    <i className="fa-solid fa-comment-medical" /> Add Comment
                                  </button>
                                </div>
                              </article>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header p-0" id="noticationHeading3">
                        <h2 className="mb-0">
                          <button className="d-flex py-4 px-4 align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#notificationCollapse3" aria-expanded="false" aria-controls="notificationCollapse3">
                            <p className="mb-0 text-left" style={{ lineHeight: "0.95rem" }}>
                              <span className="fa-solid fa-ticket fa-fw fa-2x text-dark float-left" />
                              <span className="ml-3 text-dark">Manually triggering dropdown not working</span>
                              <br />
                              <small className="text-muted small ml-3">
                                <b>Seen: </b>May 9, 2022
                              </small>
                            </p>
                            <div>
                              <i className="fa float-right" aria-hidden="true" />
                              <a href="#" className="text-decoration-none text-primary float-right mr-3">
                                <i className="ti-pin2" />
                              </a>
                            </div>
                          </button>
                        </h2>
                      </div>
                      <div id="notificationCollapse3" className="collapse" aria-labelledby="noticationHeading3" data-parent="#accordion">
                        <div className="card-body px-3">
                          <div className="col-12 my-4">
                            <section className="comments">
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Hello, this is an example from me</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">John Williams</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>if you are interested for more about me visited my profile on social page</p>
                                    <p>
                                      To visit me you can click my name{" "}
                                      <a target="_blank" href="#">
                                        John Williams
                                      </a>{" "}
                                      and send me frends request or send me a message in inbox
                                    </p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">John Williams</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face2.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, maxime. Optio repellat porro culpa totam. Enim a quidem, nesciunt qui delectus suscipit unde voluptas! Dicta a qui quo facilis ipsam.</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">Sofia Andres</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <textarea name="user-comments" className="form-control mb-2" rows={4} placeholder="Leave your comment here..." defaultValue={""} />
                                  <button type="button" className="btn btn-primary btn-icon-text btn-sm float-right">
                                    <i className="fa-solid fa-comment-medical" /> Add Comment
                                  </button>
                                </div>
                              </article>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header p-0" id="noticationHeading4">
                        <h2 className="mb-0">
                          <button className="d-flex py-4 px-4 align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#noticationCollapse4" aria-expanded="false" aria-controls="noticationCollapse4">
                            <p className="mb-0 text-left" style={{ lineHeight: "0.95rem" }}>
                              <span className="fa-solid fa-file-lines fa-fw fa-2x text-primary float-left" />
                              <span className="ml-3 text-primary">Add classes for respective directions to affix</span>
                              <br />
                              <small className="text-muted small ml-3">
                                <b>Seen: </b>May 9, 2022
                              </small>
                            </p>
                            <div>
                              <i className="fa float-right" aria-hidden="true" />
                              <a href="#" className="text-decoration-none text-primary float-right mr-3">
                                <i className="ti-pin2" />
                              </a>
                            </div>
                          </button>
                        </h2>
                      </div>
                      <div id="noticationCollapse4" className="collapse" aria-labelledby="noticationHeading4" data-parent="#accordion">
                        <div className="card-body px-3">
                          <div className="col-12 my-4">
                            <section className="comments">
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Hello, this is an example from me</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">John Williams</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face3.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>if you are interested for more about me visited my profile on social page</p>
                                    <p>
                                      To visit me you can click my name{" "}
                                      <a target="_blank" href="#">
                                        John Williams
                                      </a>{" "}
                                      and send me frends request or send me a message in inbox
                                    </p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">Bert Flores</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face3.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, maxime. Optio repellat porro culpa totam. Enim a quidem, nesciunt qui delectus suscipit unde voluptas! Dicta a qui quo facilis ipsam.</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">Bert Flores</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <textarea name="user-comments" className="form-control mb-2" rows={4} placeholder="Leave your comment here..." defaultValue={""} />
                                  <button type="button" className="btn btn-primary btn-icon-text btn-sm float-right">
                                    <i className="fa-solid fa-comment-medical" /> Add Comment
                                  </button>
                                </div>
                              </article>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header p-0" id="noticationHeading5">
                        <h2 className="mb-0">
                          <button className="d-flex py-4 px-4 align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#notificationCollapse5" aria-expanded="false" aria-controls="notificationCollapse5">
                            <p className="mb-0 text-left" style={{ lineHeight: "0.95rem" }}>
                              <span className="fa-solid fa-ticket fa-fw fa-2x text-dark float-left" />
                              <span className="ml-3 text-dark">Make autoprefixer browsers fixed</span>
                              <br />
                              <small className="text-muted small ml-3">
                                <b>Seen: </b>May 9, 2022
                              </small>
                            </p>
                            <div>
                              <i className="fa float-right" aria-hidden="true" />
                              <a href="#" className="text-decoration-none text-primary float-right mr-3">
                                <i className="ti-pin2" />
                              </a>
                            </div>
                          </button>
                        </h2>
                      </div>
                      <div id="notificationCollapse5" className="collapse" aria-labelledby="noticationHeading5" data-parent="#accordion">
                        <div className="card-body px-3">
                          <div className="col-12 my-4">
                            <section className="comments">
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Hello, this is an example from me</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">John Williams</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>if you are interested for more about me visited my profile on social page</p>
                                    <p>
                                      To visit me you can click my name{" "}
                                      <a target="_blank" href="#">
                                        John Williams
                                      </a>{" "}
                                      and send me frends request or send me a message in inbox
                                    </p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">John Williams</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face2.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, maxime. Optio repellat porro culpa totam. Enim a quidem, nesciunt qui delectus suscipit unde voluptas! Dicta a qui quo facilis ipsam.</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">Sofia Andres</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <textarea name="user-comments" className="form-control mb-2" rows={4} placeholder="Leave your comment here..." defaultValue={""} />
                                  <button type="button" className="btn btn-primary btn-icon-text btn-sm float-right">
                                    <i className="fa-solid fa-comment-medical" /> Add Comment
                                  </button>
                                </div>
                              </article>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header p-0" id="noticationHeading6">
                        <h2 className="mb-0">
                          <button className="d-flex py-4 px-4 align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#notificationCollapse6" aria-expanded="false" aria-controls="notificationCollapse6">
                            <p className="mb-0 text-left" style={{ lineHeight: "0.95rem" }}>
                              <span className="fa-solid fa-file-lines fa-fw fa-2x text-primary float-left" />
                              <span className="ml-3 text-primary">Add drag and drop config import closes</span>
                              <br />
                              <small className="text-muted small ml-3">
                                <b>Seen: </b>May 9, 2022
                              </small>
                            </p>
                            <div>
                              <i className="fa float-right" aria-hidden="true" />
                              <a href="#" className="text-decoration-none text-secondary float-right mr-3">
                                <i className="ti-pin-alt" />
                              </a>
                            </div>
                          </button>
                        </h2>
                      </div>
                      <div id="notificationCollapse6" className="collapse" aria-labelledby="noticationHeading6" data-parent="#accordion">
                        <div className="card-body px-3">
                          <div className="col-12 my-4">
                            <section className="comments">
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Hello, this is an example from me</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">John Williams</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>if you are interested for more about me visited my profile on social page</p>
                                    <p>
                                      To visit me you can click my name{" "}
                                      <a target="_blank" href="#">
                                        John Williams
                                      </a>{" "}
                                      and send me frends request or send me a message in inbox
                                    </p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">John Williams</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face2.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, maxime. Optio repellat porro culpa totam. Enim a quidem, nesciunt qui delectus suscipit unde voluptas! Dicta a qui quo facilis ipsam.</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">Sofia Andres</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <textarea name="user-comments" className="form-control mb-2" rows={4} placeholder="Leave your comment here..." defaultValue={""} />
                                  <button type="button" className="btn btn-primary btn-icon-text btn-sm float-right">
                                    <i className="fa-solid fa-comment-medical" /> Add Comment
                                  </button>
                                </div>
                              </article>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header p-0" id="noticationHeading7">
                        <h2 className="mb-0">
                          <button className="d-flex py-4 px-4 align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#noticationCollapse7" aria-expanded="false" aria-controls="noticationCollapse7">
                            <p className="mb-0 text-left" style={{ lineHeight: "0.95rem" }}>
                              <span className="fa-solid fa-file-lines fa-fw fa-2x text-primary float-left" />
                              <span className="ml-3 text-primary">Document that Helvetica Neue can cause problems on Windows</span>
                              <br />
                              <small className="text-muted small ml-3">
                                <b>Seen: </b>May 9, 2022
                              </small>
                            </p>
                            <div>
                              <i className="fa float-right" aria-hidden="true" />
                              <a href="#" className="text-decoration-none text-secondary float-right mr-3">
                                <i className="ti-pin-alt" />
                              </a>
                            </div>
                          </button>
                        </h2>
                      </div>
                      <div id="noticationCollapse7" className="collapse" aria-labelledby="noticationHeading7" data-parent="#accordion">
                        <div className="card-body px-3">
                          <div className="col-12 my-4">
                            <section className="comments">
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Hello, this is an example from me</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">John Williams</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face3.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>if you are interested for more about me visited my profile on social page</p>
                                    <p>
                                      To visit me you can click my name{" "}
                                      <a target="_blank" href="#">
                                        John Williams
                                      </a>{" "}
                                      and send me frends request or send me a message in inbox
                                    </p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">Bert Flores</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face3.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, maxime. Optio repellat porro culpa totam. Enim a quidem, nesciunt qui delectus suscipit unde voluptas! Dicta a qui quo facilis ipsam.</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">Bert Flores</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <textarea name="user-comments" className="form-control mb-2" rows={4} placeholder="Leave your comment here..." defaultValue={""} />
                                  <button type="button" className="btn btn-primary btn-icon-text btn-sm float-right">
                                    <i className="fa-solid fa-comment-medical" /> Add Comment
                                  </button>
                                </div>
                              </article>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header p-0" id="noticationHeading8">
                        <h2 className="mb-0">
                          <button className="d-flex py-4 px-4 align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#notificationCollapse8" aria-expanded="false" aria-controls="notificationCollapse8">
                            <p className="mb-0 text-left" style={{ lineHeight: "0.95rem" }}>
                              <span className="fa-solid fa-ticket fa-fw fa-2x text-dark float-left" />
                              <span className="ml-3 text-dark">Manually triggering dropdown not working</span>
                              <br />
                              <small className="text-muted small ml-3">
                                <b>Seen: </b>May 9, 2022
                              </small>
                            </p>
                            <div>
                              <i className="fa float-right" aria-hidden="true" />
                              <a href="#" className="text-decoration-none text-secondary float-right mr-3">
                                <i className="ti-pin-alt" />
                              </a>
                            </div>
                          </button>
                        </h2>
                      </div>
                      <div id="notificationCollapse8" className="collapse" aria-labelledby="noticationHeading8" data-parent="#accordion">
                        <div className="card-body px-3">
                          <div className="col-12 my-4">
                            <section className="comments">
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Hello, this is an example from me</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">John Williams</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>if you are interested for more about me visited my profile on social page</p>
                                    <p>
                                      To visit me you can click my name{" "}
                                      <a target="_blank" href="#">
                                        John Williams
                                      </a>{" "}
                                      and send me frends request or send me a message in inbox
                                    </p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">John Williams</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face2.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, maxime. Optio repellat porro culpa totam. Enim a quidem, nesciunt qui delectus suscipit unde voluptas! Dicta a qui quo facilis ipsam.</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">Sofia Andres</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <textarea name="user-comments" className="form-control mb-2" rows={4} placeholder="Leave your comment here..." defaultValue={""} />
                                  <button type="button" className="btn btn-primary btn-icon-text btn-sm float-right">
                                    <i className="fa-solid fa-comment-medical" /> Add Comment
                                  </button>
                                </div>
                              </article>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header p-0" id="noticationHeading9">
                        <h2 className="mb-0">
                          <button className="d-flex py-4 px-4 align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#noticationCollapse9" aria-expanded="false" aria-controls="noticationCollapse9">
                            <p className="mb-0 text-left" style={{ lineHeight: "0.95rem" }}>
                              <span className="fa-solid fa-file-lines fa-fw fa-2x text-primary float-left" />
                              <span className="ml-3 text-primary">Add classes for respective directions to affix</span>
                              <br />
                              <small className="text-muted small ml-3">
                                <b>Seen: </b>May 9, 2022
                              </small>
                            </p>
                            <div>
                              <i className="fa float-right" aria-hidden="true" />
                              <a href="#" className="text-decoration-none text-secondary float-right mr-3">
                                <i className="ti-pin-alt" />
                              </a>
                            </div>
                          </button>
                        </h2>
                      </div>
                      <div id="noticationCollapse9" className="collapse" aria-labelledby="noticationHeading9" data-parent="#accordion">
                        <div className="card-body px-3">
                          <div className="col-12 my-4">
                            <section className="comments">
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Hello, this is an example from me</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">John Williams</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face3.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>if you are interested for more about me visited my profile on social page</p>
                                    <p>
                                      To visit me you can click my name{" "}
                                      <a target="_blank" href="#">
                                        John Williams
                                      </a>{" "}
                                      and send me frends request or send me a message in inbox
                                    </p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">Bert Flores</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face3.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, maxime. Optio repellat porro culpa totam. Enim a quidem, nesciunt qui delectus suscipit unde voluptas! Dicta a qui quo facilis ipsam.</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">Bert Flores</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <textarea name="user-comments" className="form-control mb-2" rows={4} placeholder="Leave your comment here..." defaultValue={""} />
                                  <button type="button" className="btn btn-primary btn-icon-text btn-sm float-right">
                                    <i className="fa-solid fa-comment-medical" /> Add Comment
                                  </button>
                                </div>
                              </article>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header p-0" id="noticationHeading10">
                        <h2 className="mb-0">
                          <button className="d-flex py-4 px-4 align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#notificationCollapse10" aria-expanded="false" aria-controls="notificationCollapse10">
                            <p className="mb-0 text-left" style={{ lineHeight: "0.95rem" }}>
                              <span className="fa-solid fa-ticket fa-fw fa-2x text-dark float-left" />
                              <span className="ml-3 text-dark">Make autoprefixer browsers fixed</span>
                              <br />
                              <small className="text-muted small ml-3">
                                <b>Seen: </b>May 9, 2022
                              </small>
                            </p>
                            <div>
                              <i className="fa float-right" aria-hidden="true" />
                              <a href="#" className="text-decoration-none text-secondary float-right mr-3">
                                <i className="ti-pin-alt" />
                              </a>
                            </div>
                          </button>
                        </h2>
                      </div>
                      <div id="notificationCollapse10" className="collapse" aria-labelledby="noticationHeading10" data-parent="#accordion">
                        <div className="card-body px-3">
                          <div className="col-12 my-4">
                            <section className="comments">
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Hello, this is an example from me</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">John Williams</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>if you are interested for more about me visited my profile on social page</p>
                                    <p>
                                      To visit me you can click my name{" "}
                                      <a target="_blank" href="#">
                                        John Williams
                                      </a>{" "}
                                      and send me frends request or send me a message in inbox
                                    </p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">John Williams</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face2.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <div className="text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, maxime. Optio repellat porro culpa totam. Enim a quidem, nesciunt qui delectus suscipit unde voluptas! Dicta a qui quo facilis ipsam.</p>
                                  </div>
                                  <p className="attribution">
                                    by <a href="#">Sofia Andres</a> at 14:23pm, 9 May 2022
                                  </p>
                                </div>
                              </article>
                              <article className="comment">
                                <a className="comment-img" href="#">
                                  <img src="images/faces/face1.jpg" alt="user" width={50} height={50} />
                                </a>
                                <div className="comment-body">
                                  <textarea name="user-comments" className="form-control mb-2" rows={4} placeholder="Leave your comment here..." defaultValue={""} />
                                  <button type="button" className="btn btn-primary btn-icon-text btn-sm float-right">
                                    <i className="fa-solid fa-comment-medical" /> Add Comment
                                  </button>
                                </div>
                              </article>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}