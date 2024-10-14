import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div>
            <header>
                <div className="logoSection">
                    <p>Trabook</p><img src="Images/Trabook-Logo.png" />
                </div>
                <div className="NavBar">
                    <p> <a href="#" className="RedirectionLink" > Home </a> </p>
                    <p> <a href="#" className="RedirectionLink" > About </a> </p>
                    <p> <a href="#" className="RedirectionLink" > Destination </a> </p>
                    <p> <a href="#" className="RedirectionLink"> Tour </a> </p>
                    <p> <a href="#" className="RedirectionLink" > Blog </a> </p>
                </div>
                <div className="rightHead">
                    <div className="Login">Login</div>
                    <div className="btn SignUp">SignUp</div>
                </div>
            </header>
            {/* <!--Hero Section--> */}
            <div className="HeroSection">
                <div className="HeroLeft">
                    <h1> Get started your exciting <span> journey </span> with us.</h1>
                    <p> A Team of experienced tourism professionals will provide you with the best advice and tips for your
                        desire place. </p>
                    <a href="#" className="btn-1">Discover Now</a>
                </div>
                <div className="HeroRight">
                    <img src="Images/Background-Plane-Flying.png" id="BgPlane" />
                    <img src="Images/Ellipse 4-Semi svg.svg" id="ellipsesemi" />
                    <img src="Images/tourist-with-thumb-up__1_-removebg 1.png" alt="Tourist" id="Tourist" />
                    <div className="Hero_Wrap" id="Wrap1"><img src="Images/trophy-removebg-preview 1.png" alt="Trophy" />
                        <p>Best Tour Awards</p>
                    </div>
                    <div className="Hero_Wrap" id="Wrap3">
                        <img src="Images/google-maps 1.png" alt="Google Map" />
                        <div>
                            <h3> Explore </h3>
                            <p> Every corner of the world with us</p>
                        </div>
                    </div>
                    <div className="Hero_Wrap" id="Wrap2"><img src="Images/star 1.png" alt="Star" />
                        <div>
                            <h3>27K</h3>
                            <p>Customer Reviewed</p>
                        </div>
                    </div>

                </div>

            </div>
            {/* <!--Search Bar--> */}
            <div className="SearchBar">
                <div id="SearchBarContent">
                    <div id="innerBar">
                        <p> Location </p><img src="Images/varrow svg.svg" />
                    </div>
                    <p id="innerpara"> Where are you going </p>
                </div>
                <div id="SearchBarContent">
                    <div id="innerBar">
                        <p> Date </p><img src="Images/varrow svg.svg" />
                    </div>

                    <p id="innerpara"> When you will go </p>
                </div>
                <div id="SearchBarContent">
                    <div id="innerBar">
                        <p> Guest </p><img src="Images/varrow svg.svg" />
                    </div>
                    <p id="innerpara"> Number of guest</p>
                </div>
                <div className="btn"> Explore Now </div>
            </div>
            {/* <!--Things You Need To DO Section--> */}
            <div className="ThingsYouNeedToDo">
                <div className="ContentSecThings">
                    <h3 className="h3_Head" id="ThingstodoH3">Things you need<span> to do </span></h3>
                    <p className="subtitle_P" id="ThingstodoP"> We ensure that you’ll embark on a perfectly planned, safe vacation
                        at a price you can afford. </p>
                    <img src="Images/flightRight svg.svg" alt="flightright" />
                </div>
                <div className="GridImages_Things">
                    <div className='backImage1'><img src="Images/Signup.svg" alt="SignupIcon" />
                        <h4>Sign Up</h4>
                        <p> Completes all the work associated with planning and processing</p>
                    </div>
                    <div className='backImage2'><img src="Images/WorthOfMoney.svg"
                        alt="WorthOfMoney" />
                        <h4>Worth Of Money </h4>
                        <p> After successful access then book from exclusive deals & pricing</p>
                    </div>
                    <div className='backImage1'><img src="Images/Location.svg"
                        alt="LocationIcon" />
                        <h4> Exciting Travel</h4>
                        <p> Start and explore a wide range of exciting travel experience.</p>
                    </div>
                </div>
            </div>
            {/* <!--Deal--> */}
            <div className="Deals">
                <h3 className="h3_Head"> Exclusive <span> deals & discounts </span> </h3>
                <p className="subtitle_P" id="DealsSubtitle_P"> Discover our fantastic early booking discounts & start planning your
                    journey.</p>
                <div className="gridSectionPlaces">
                    <div> <img src="Images/madrid.png" alt="ImageSectionImage" />
                        <div className="gridSectionContentTour">
                            <div className="line1">
                                <h3>Madrid</h3>
                                <div id="rating"> <img src="Images/star 1.png" alt="Star" />
                                    <p>4.8</p>
                                </div>
                            </div>
                            <div className="line2">
                                <div><img src="Images/LocationBW Vector.svg" alt="LocoVector" />
                                    <p>Spain</p>
                                </div>
                                <div id="priceValues">
                                    <p className="cancelledvalue">$950</p>
                                    <p className="ActualValue">$850</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div> <img src="Images/Firenze.png" alt="ImageSectionImage" />
                        <div className="gridSectionContentTour">
                            <div className="line1">
                                <h3>Firenze</h3>
                                <div id="rating"> <img src="Images/star 1.png" alt="Star" />
                                    <p>4.5</p>
                                </div>
                            </div>
                            <div className="line2">
                                <div> <img src="Images/LocationBW Vector.svg" alt="LocoVector" />
                                    <p>italy</p>
                                </div>
                                <div id="priceValues">
                                    <p className="cancelledvalue">$850</p>
                                    <p className="ActualValue">$750</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div> <img src="Images/Paris.png" alt="ImageSectionImage" />
                        <div className="gridSectionContentTour">
                            <div className="line1">
                                <h3>Paris</h3>
                                <div id="rating"> <img src="Images/star 1.png" alt="Star" />
                                    <p>4.4</p>
                                </div>
                            </div>
                            <div className="line2">
                                <div> <img src="Images/LocationBW Vector.svg" alt="LocoVector" />
                                    <p>France</p>
                                </div>
                                <div id="priceValues">
                                    <p className="cancelledvalue">$699</p>
                                    <p className="ActualValue">$599</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div> <img src="Images/London.png" alt="ImageSectionImage" />
                        <div className="gridSectionContentTour">
                            <div className="line1">
                                <h3>London</h3>
                                <div id="rating"> <img src="Images/star 1.png" alt="Star" />
                                    <p>4.8</p>
                                </div>
                            </div>
                            <div className="line2">
                                <div> <img src="Images/LocationBW Vector.svg" alt="LocoVector" />
                                    <p>UK</p>
                                </div>
                                <div id="priceValues">
                                    <p className="cancelledvalue">$850</p>
                                    <p className="ActualValue">$850</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="arrowSection" id="FirstArrow">
                    <img src="Images/Arrow 3-left facing.svg" alt="Left Facing Arrow" id="leftArrow" />
                    <img src="Images/Arrow 3-left facing.svg" alt="Right Facing Arrow" id="RightArrow" />
                </div>
            </div>
            {/* <!--Plan--> */}
            {/* <div className="plan">
                <div className="ActualContent_Things">
                    <h3 className="h3_Head">Best <span>Vacation Plan </span> </h3>
                    <p className="subtitle_P" id="subtitle_PPlan"> Plan your perfect vacation with our travel agency. Choose among
                        hundreds of all-inclusive offers!</p>
                </div>
                <div className="ImageRight"> <img src="Images/coconut trees.svg" alt="Coconut" /></div>
                <div className="arrowSection" id="SecondArrow">
                    <img src="Images/Arrow 3-left facing.svg" alt="Left Facing Arrow" id="leftArrow" />
                    <img src="Images/Arrow 3-left facing.svg" alt="Right Facing Arrow" id="RightArrow" />
                </div>
                <div className="gridSectionPlans">
                    <div> <img src="Images/Rome.png" alt="ImageSectionImage" id="vacationplaces" />
                        <div className="gridSectionContentTour">
                            <div className="line1">
                                <h3>Rome,Italy</h3>
                                <p>$5,42k</p>
                            </div>
                            <div className="line2">
                                <div><img src="Images/NavigationVector.svg" alt="NavVector" />
                                    <p>10 Days Trip</p>
                                </div>
                                <div id="rating"><img src="Images/star 1.png" />
                                    <p>4.8</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div> <img src="Images/LondonUk.png" alt="ImageSectionImage" id="vacationplaces" />
                        <div className="gridSectionContentTour">
                            <div className="line1">
                                <h3>London,UK</h3>
                                <p>$2,42k</p>
                            </div>
                            <div className="line2">
                                <div><img src="Images/NavigationVector.svg" alt="NavVector" />
                                    <p>07 Days Trip</p>
                                </div>
                                <div id="rating"><img src="Images/star 1.png" />
                                    <p>4.7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div> <img src="Images/Osaka.png" alt="ImageSectionImage" id="vacationplaces" />
                        <div className="gridSectionContentTour">
                            <div className="line1">
                                <h3>Osaka, Japan</h3>
                                <p>$5,42k</p>
                            </div>
                            <div className="line2">
                                <div><img src="Images/NavigationVector.svg" alt="NavVector" />
                                    <p>10 Days Trip</p>
                                </div>
                                <div id="rating"><img src="Images/star 1.png" />
                                    <p>4.8</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Feedback--> */}
            <div className="feedback">
                <img src="Images/flight return svg.svg" alt="FlightBG" id="flightBG" />
                <div className="feedbackContent">
                    <div className="feedbackContentLeft">
                        <h3 className="h3_Head" id="h3_Head_What"> What People Say <span>about us</span></h3>
                        <p>Our Clients send us bunch of smiles with our services and we love them.</p>
                        <div className="arrowSection" id="ThirdArrow">
                            <img src="Images/Arrow 3-left facing.svg" alt="Left Facing Arrow" id="leftArrow" />
                            <img src="Images/Arrow 3-left facing.svg" alt="Right Facing Arrow" id="RightArrow" />
                        </div>
                    </div>
                    <div className="feedbackContentRight">
                        <div className="Feedback1">
                            <img src="Images/Mike Tylor.png" alt="MikeTylorPhoto" className="personPhoto" />
                            <div className="Feedback1_1">
                                <div className="Feedback_data">
                                    <p id="FeedbackData"> “On the Windows talking painted pasture yet its express parties use.
                                        Sure last upon he same
                                        as knew next. Of believed or diverted no.”</p>
                                    <div id="ClientAddress">
                                        <h5>Mike Tylor</h5>
                                        <p id="MikeHome">Lahore, Pakistan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Feedback2">
                            <div className="Feedback1_1">
                                <h5>Chris Thomas</h5>
                                <p id="MikeHome">CEO of Red Button</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Blog--> */}
            <div className="blog">
                <h3 className="h3_Head">Get Update with <span> latest blog </span> </h3>
                <div className="blogImageGrid">
                    <div> <img src="Images/AmazingYearofTravellingImg.png" alt="Grid Image" id="blogImageGridImg" />
                        <h5 id="blogGridDetailsH5"> The Amazing Difference a Year of Travelling .</h5>
                        <p id="blogGridDetailsP">July 27,2021</p>
                    </div>
                    <div> <img src="Images/TravelFarEnoughImage.png" alt="Grid Image" id="blogImageGridImg" />
                        <h5 id="blogGridDetailsH5"> Travel far enough, you meet yourself.</h5>
                        <p id="blogGridDetailsP">July 27,2021</p>
                    </div>
                    <div> <img src="Images/HowToSaveMoneyAfrica.png" alt="Grid Image" id="blogImageGridImg" />
                        <h5 id="blogGridDetailsH5"> How to Save Money While Visiting Africa .</h5>
                        <p id="blogGridDetailsP">July 27,2021</p>
                    </div>
                    <div> <img src="Images/ReflectionsonHang.png" alt="Grid Image" id="blogImageGridImg" />
                        <h5 id="blogGridDetailsH5"> Reflections on 5 Months of Travel: Time to Hang</h5>
                        <p id="blogGridDetailsP">July 27,2021</p>
                    </div>
                </div>
                <div className="SmallEllipse">
                    <img src="Images/Ellipse 32.svg" alt="smallEllipse" id="SmallEllipse" />
                    <img src="Images/Ellipse 32.svg" alt="smallEllipse" id="SmallEllipse" />
                    <img src="Images/Ellipse 32.svg" alt="smallEllipse" id="SmallEllipse" />
                </div>
            </div>

            {/* <!--Subscription--> */}
            <div className="subscriptiondiv">
                <img src="Images/rightCoconut.svg" alt="coconut" id="SubscriptionCoconut" />
                <h3 className="h3_Head" id="SubscriptionH3">Subscribe and get exclusive deals & offer </h3>
                <form className="Email" action="">
                    <div><img src="Images/mail.svg" alt="EmailLogo" />
                        <input type="email" placeholder="Enter Your Email" />
                    </div>
                    <input type="submit" Value="Subscribe" className="btn Formbtn" />
                </form>
                <img src="Images/whirl png.png" alt="Whirl" id="whirl" />
            </div>
            {/* <!--Footer--> */}
            <div className="Footer">
                <div className="Part1">
                    <div className="Section1">
                        <div id="Section1Logo">
                            <div>Trabook <img src="Images/Trabook-Logo.png" alt="Logo" /></div>
                        </div>
                        <div>Book your trip in minute, get full Control for much longer.</div>
                        <div id="SMLogos">
                            <div className="SocialMediaLogo"> <img src="Images/Facebook svg.svg" alt="fb" /></div>
                            <div className="SocialMediaLogo"> <img src="Images/ig.png" alt="fb" /></div>
                            <div className="SocialMediaLogo"> <img src="Images/twitter vector.svg" alt="fb" /></div>
                        </div>
                    </div>
                    <div className="Section2">
                        <div>
                            <div className="Heading">Company</div>
                            <div className="List">
                                <p><a href="#">About</a></p>
                                <p><a href="#">Careers</a></p>
                                <p><a href="#">Logistics</a></p>
                                <p><a href="#">Privacy & Policy </a></p>
                            </div>
                        </div>
                        <div>
                            <div className="Heading">Contact </div>
                            <div className="List">
                                <p><a href="#">Help/FAQ</a></p>
                                <p><a href="#">Press</a></p>
                                <p><a href="#">Affiliates</a></p>
                            </div>
                        </div>
                        <div>
                            <div className="Heading">More</div>
                            <div className="List">
                                <p><a href="#">Press Centre</a></p>
                                <p><a href="#">Our Blog</a></p>
                                <p><a href="#">Low fare tips</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Part2">
                    <img src="Images/straight line.svg" alt="Border" />
                    <div>
                        <p> Copyright, Trabook 2022. All rights reserved. </p>
                        <p> Terms & Conditions </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;