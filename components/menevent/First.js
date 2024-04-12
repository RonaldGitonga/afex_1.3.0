import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import { fetchEvents } from '@/lib/data';


const First = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const events = await fetchEvents(q, page);
    console.log(events)
    
  return (
    <>
      <section
        className="shop-area pt-120 pb-120 p-relative "
        data-animation="fadeInUp animated"
        data-delay=".2s"
      >
        <div className="container">
          <div className="row">
            {events.map((event,index) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
                key={index}
              >
                <div className="event-item mb-30 hover-zoomin rounded-md">
                  <div className="thumb ">
                    <Link href="">
                    <Image src={event.image} width={1180} height={787} style={{backgroundPosition:'center'}} alt='event-img'/>
                    </Link>
                  </div>
                  <div className="event-content">
                    <div className="date" style={{marginTop:'10px',fontWeight:'bolder'}}>{event.date.toString()}</div>
                    <h3>
                      <Link href="">{event.title}</Link>
                    </h3>
                    <p>{event.description}</p>
                    <div className="time" >
                      {event.time} <i className="fal fa-long-arrow-right" />{' '}
                      <strong>{event.location}</strong>

                      <Link href={event.link} style={{ display:'flex',padding:'10px', marginTop:'5px',borderRadius:'5px', alignItems:'center',justifyItems:'center',textDecoration:'none'}}>
                        <h3 style={{textDecoration:'none',color:'#fff',background:'#af3d2c' ,padding:'5px',borderRadius:'5px'}}>RSVP</h3>
                        </Link>
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