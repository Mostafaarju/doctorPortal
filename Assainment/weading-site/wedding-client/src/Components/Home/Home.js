import React, { useEffect, useState } from 'react';
import img7 from '../../images/07.jpg';
import happyhour1 from '../../images/section4/happyhour1.jpeg';
import happyhour2 from '../../images/section4/happyhour2.jpeg';
import happyhour3 from '../../images/section4/happyhour3.jpeg';
import happyhour4 from '../../images/section4/happyhour4.jpeg';
import story1 from '../../images/section4/story1.jpeg';
import story2 from '../../images/section4/story2.jpeg';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import Project from '../Project/Project';
import Project2 from '../Project/Project2';
import Projects3 from '../Project/Projects3';
import Review from '../Review/Review';
import Service from '../Service/Service';
import Header from './Header/Header';
import './Home.css';

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [services, setServices] = useState([]);

  // Load Services From Server
  useEffect(() => {
    fetch('https://agile-castle-83860.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  // Load Revicew form Servers
  useEffect(() => {
    fetch('https://agile-castle-83860.herokuapp.com/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <div>
      <Header></Header>
      <div className='text-center bg-light py-5 project'>
        <div className='container'>
          <h2 className='highlights'>Our Ongoing Project</h2>
          <div className='row gx-5'>
            <Project key='1'></Project>
            <Project2 key='2'></Project2>
            <Projects3 key='3'></Projects3>
          </div>
          <div>
            <div className='section-4' id='story'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12 heading'>
                    <h1>story</h1>
                  </div>
                </div>
                {/* <!--slide 1--> */}
                <div className='row story-content'>
                  <div className='col-xl-6 p-0'>
                    <img src={story1} />
                  </div>

                  <div className='col-xl-6'>
                    <h1>How we met?</h1>
                    <h5 className='date'>15 Sep 2014</h5>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classNameical
                      Latin literature from 45 BC, making it over 2000 years
                      old. Richard McClintock, a Latin professor at
                      Hampden-Sydney College in Virginia, looked up one of the
                      more obscure Latin words, consectetur, from a Lorem Ipsum
                      passage, and going through the cites of the word in
                      classNameical literature, discovered the undoubtable
                      source. It is a long established fact.
                    </p>
                  </div>
                </div>
                {/* <!--slide 2--> */}
                <div className='row  story-content2'>
                  <div className='col-xl-6'>
                    <h1>First date</h1>
                    <h5 className='date'>18 Oct 2014</h5>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classNameical
                      Latin literature from 45 BC, making it over 2000 years
                      old. Richard McClintock, a Latin professor at
                      Hampden-Sydney College in Virginia, looked up one of the
                      more obscure Latin words, consectetur, from a Lorem Ipsum
                      passage, and going through the cites of the word in
                      classNameical literature, discovered the undoubtable
                      source. It is a long established fact.
                    </p>
                  </div>

                  <div className='col-xl-6 p-0'>
                    <img src={story2} />
                  </div>
                </div>

                {/* <!--slide 3--> */}
                <div className='row story-content3'>
                  <div className='col-xl-6 image-container'>
                    <div className='row'>
                      <div className='col-xl-6 col-md-6 col-6 image1'>
                        <img src={happyhour1} />
                      </div>

                      <div className='col-xl-6 col-md-6 col-6 image2'>
                        <img src={happyhour2} />
                      </div>

                      <div className='col-xl-6 col-md-6 col-6 image3'>
                        <img src={happyhour3} />
                      </div>

                      <div className='col-xl-6 col-md-6 col-6 image4'>
                        <img src={happyhour4} />
                      </div>
                    </div>
                  </div>

                  <div className='col-xl-6 text-container'>
                    <h1>Happy hours..</h1>
                    <h5 className='date'>14 Jan 2016</h5>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classNameical
                      Latin literature from 45 BC, making it over 2000 years
                      old. Richard McClintock, a Latin professor at
                      Hampden-Sydney College in Virginia, looked up one of the
                      more obscure Latin words, consectetur, from a Lorem Ipsum
                      passage, and going through the cites of the word in
                      classNameical literature, discovered the undoubtable
                      source. It is a long established fact.
                    </p>
                  </div>
                </div>

                {/* <!--slide 4--> */}
                <div className='row story-content4'>
                  <div className='col-xl-6'>
                    <h1>We are engaged</h1>
                    <h5 className='date'>20 Dec 2017</h5>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classNameical
                      Latin literature from 45 BC, making it over 2000 years
                      old. Richard McClintock, a Latin professor at
                      Hampden-Sydney College in Virginia, looked up one of the
                      more obscure Latin words, consectetur, from a Lorem Ipsum
                      passage, and going through the cites of the word in
                      classNameical literature, discovered the undoubtable
                      source. It is a long established fact.
                    </p>
                  </div>
                  <div className='col-xl-6'>
                    <img className='img-fluid' src={img7} alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='text-center py-5 services'>
        <h2 className='highlights'>Our Most Popular Services</h2>
        <div className='container'>
          <div className='row gx-5'>
            {services.map((service, index) => (
              <Service key={index} data={service}></Service>
            ))}
          </div>
          <button className='btn btn-primary mt-5'>Explore More</button>
        </div>
      </section>
      <section className='text-center py-5 bg-light'>
        <div className='container'>
          <Blog></Blog>
        </div>
      </section>
      <section className='text-center py-5'>
        <div className='container'>
          <h2 className='highlights'>What our client says</h2>
          <div className='row gx-5'>
            {reviews.map((review, index) => (
              <Review key={index} data={review}></Review>
            ))}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
