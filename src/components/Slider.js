import React from 'react'

function Slider() {
  return (
    <div>
        <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner carousels">
                    <div class="carousel-item active slider1 carousels">
                        {/* <img src={Img3} class="d-block w-100" alt="..." /> */}
                            <div class="carousel-caption d-none d-md-block">
                            <div class="text p-5 animate__bounceInDown">
                                <h1 className='m-0'> TAKE RESPONSIBILITY</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione reprehenderit repudiandae ipsam optio nesciunt voluptates nemo, autem cupiditate omnis rem adipisci aliquid ducimus hic tempora ut consequuntur quasi, quod aut!</p>
                                <button>Learn More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </button>
                            </div>
                            </div>
                    </div>
                    <div class="carousel-item slider2 carousels">
                        {/* <img src={Img4} class="d-block w-100" alt="..." /> */}
                            <div class="carousel-caption d-none d-md-block">
                            <div class="text p-5 animate__bounceInDown">
                                <h1 className='m-0'> TAKE </h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione reprehenderit repudiandae ipsam optio nesciunt voluptates nemo, autem cupiditate omnis rem adipisci aliquid ducimus hic tempora ut consequuntur quasi, quod aut!</p>
                                <button>Learn More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </button>
                            </div>
                            </div>
                    </div>
                    <div class="carousel-item slider3 carousels">
                        {/* <img src={Img2} class="d-block w-100" alt="..." /> */}
                            <div class="carousel-caption d-none d-md-block">
                            <div class="text p-5 animate__bounceInDown">
                                <h1 className='m-0'>  RESPONSIBILITY</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione reprehenderit repudiandae ipsam optio nesciunt voluptates nemo, autem cupiditate omnis rem adipisci aliquid ducimus hic tempora ut consequuntur quasi, quod aut!</p>
                                <button>Learn More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </button>
                            </div>
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
    </div>
  )
}

export default Slider