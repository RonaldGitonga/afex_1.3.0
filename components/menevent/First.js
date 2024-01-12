import React from 'react';
import Link from 'next/link';
// import BackgroundOne from '../../../public/assets/img/afex-pics/events/IMG_9403.jpg';
// import BackgroundTwo from '../../../public/assets/img/afex-pics/events/SATs.jpg';
// import BackgroundThree from '../../../public/assets/img/afex-pics/events/graduation.jpg';
import Image from 'next/image';

const events = [
  {
    id: 1,
    date: '18 March, 2024',
    title: 'QnA: SAT Prep and testing',
    image: '/assets/img/afex-pics/events/SATs.jpg',
    description:
      'SAT 2024 open day',
    time: '3:30 pm - 4:30 pm',
  },
  {
    id: 2,
    date: '22 March, 2024',
    title: 'GRE/GMAT Graduation Day',
    image:'/assets/img/afex-pics/events/graduation.jpg',
    
    description:
      'GRE/GMAT Graduation,December Cohort',
    time: '3:30 pm - 4:30 pm',
  },
  {
    id: 3,
    date: '22 May, 2024',
    title: 'IELTS/TOEFL Farewell Dinner',
    image: '/assets/img/afex-pics/events/IMG_9403.jpg',
    description:
      'January Cohort farewell Dinner',
    time: '3:30 pm - 8:30 pm',
  },
  // {
  //   id: 4,
  //   date: '22 March, 2023',
  //   title: 'Next-Gen Higher Education Students Have Arrived?',
  //   image: 'assets/img/bg/evn-img-4.jpg',
  //   description:
  //     'Seamlessly visualize quality ellectual capital without superior collaboration and idea tically',
  //   time: '3:30 pm - 4:30 pm',
  // },
  // {
  //   id: 5,
  //   date: '24 March, 2023',
  //   title: 'Digital Art & 3D Model – a future for film company',
  //   image: 'assets/img/bg/evn-img-5.jpg',
  //   description:
  //     'Seamlessly visualize quality ellectual capital without superior collaboration and idea tically',
  //   time: '3:30 pm - 4:30 pm',
  // },
  // {
  //   id: 6,
  //   date: '29 March, 2023',
  //   title: 'Conscious Discipline Summer Institute',
  //   image: 'assets/img/bg/evn-img-6.jpg',
  //   description:
  //     'Seamlessly visualize quality ellectual capital without superior collaboration and idea tically',
  //   time: '3:30 pm - 4:30 pm',
  // },
];

function First() {
  return (
    <>
      <section
        className="shop-area pt-120 pb-120 p-relative "
        data-animation="fadeInUp animated"
        data-delay=".2s"
      >
        <div className="container">
          <div className="row">
            {events.map((event) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
                key={event.id}
              >
                <div className="event-item mb-30 hover-zoomin rounded-md">
                  <div className="thumb ">
                    <Link href="">
                    <Image src={event.image} width={1180} height={787} alt='event-img'/>
                    </Link>
                  </div>
                  <div className="event-content">
                    <div className="date">{event.date}</div>
                    <h3>
                      <Link href="">{event.title}</Link>
                    </h3>
                    <p>{event.description}</p>
                    <div className="time">
                      {event.time} <i className="fal fa-long-arrow-right" />{' '}
                      <strong>Nairobi</strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="pagination-wrap mt-20 text-center">
                <nav>
                  <ul className="pagination">
                    <li className="page-item">
                      <Link href="#">
                        <i className="fas fa-angle-double-left" />
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link href="#">1</Link>
                    </li>
                    <li className="page-item">
                      <Link href="#">2</Link>
                    </li>
                    <li className="page-item">
                      <Link href="#">3</Link>
                    </li>
                    <li className="page-item">
                      <Link href="#">...</Link>
                    </li>
                    <li className="page-item">
                      <Link href="#">10</Link>
                    </li>
                    <li className="page-item">
                      <Link href="#">
                        <i className="fas fa-angle-double-right" />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div />
          </div>
        </div>
      </section>
    </>
  );
}

export default First;