import React from 'react';

const About = () => {
    const img1 = `https://www.thehealthsite.com/wp-content/uploads/2012/05/Cancer-Treatment.jpg`
    const img2 = `https://regenexx.com/wp-content/uploads/2019/09/CervicalSpine-c1-c2-1000x563.jpg`
    const img3 = `https://f1.media.brightcove.com/8/3850378299001/3850378299001_6168350000001_6168348486001-vs.jpg?pubId=3850378299001&videoId=6168348486001`
    return (
        <div>
            <div>
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner about">
                        <div class="carousel-item active">
                            <img src={img1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={img2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={img3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container">
                <div className="bg-dark mt-4">
                    <h1 className="text-white p-4 text-center">
                        Medical Terms: Medical Dictionary
                    </h1>
                    <p className="text-white p-4">1.Medical Term (medical dictionary) is the medical terminology for MedicineNet.com. Our doctors define difficult medical language in easy-to-understand explanations of over 19,000 medical terms.</p>
                    <p className="text-white p-4">2.Medical Term online medical dictionary provides quick access to hard-to-spell and often misspelled medical definitions through an extensive alphabetical listing.</p>
                    <div>
                        <div className="p-4">
                            <h5 className="text-white text-center">Medical Dictionary</h5>
                            <p className="text-white ">
                                Medical Term online medical dictionary provides quick access to hard-to-spell and often misspelled medical definitions through an extensive alphabetical listing..Medical Term (medical dictionary) is the medical terminology for MedicineNet.com. Our doctors define difficult medical language in easy-to-understand explanations of over 19,000 medical terms.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;