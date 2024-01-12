import {useState,useRef} from 'react'

//email
import emailjs from '@emailjs/browser'
function Form() {
    const formRef=useRef();
    const [form,setForm]=useState(
      {
        name:'',
        email:'',
        subject:'',
        message:'',
        phone:'',
      }

    );
    
  const [loading,setLoading]=useState(false);

  const handleChange=(e)=>{
    const {name,value}=e.target;

    setForm({...form,[name]:value})
  }

    return (
        <>
            <section id="contact" className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix" style={{ background: "#e7f0f8" }} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 order-2">
                            <div className="contact-bg">
                                <div className="section-title center-align text-center mb-50">
                                    <h2>Get In Touch With Us</h2>
                                </div>
                                <form onSubmit={handleSubmit} ref={{formRef}} className="contact-form mt-30 text-center" >
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="contact-field p-relative c-name mb-30">
                                            <input name='name' value={form.name} onChange={handleChange} type='text' placeholder='name' className='input'/>
                                                <i className="icon fal fa-user" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="contact-field p-relative c-subject mb-30">
                                            <input name='email' value={form.email} onChange={handleChange} type='text' placeholder='email' className='input'/> 

                                                <i className="icon fal fa-envelope" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="contact-field p-relative c-subject mb-30">
                                                <input type="text" id="phone" name="phone" onChange={handleChange} value={form.phone} placeholder="Phone No." required="" className='input' />
                                                <i className="icon fal fa-phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                        <div className="contact-field p-relative c-message mb-8">
                                            <input
                                                name='subject'
                                                value={form.subject}
                                                onChange={handleChange}
                                                type='text'
                                                placeholder='Subject'
                                                className='input mb-2'
                                            />
                                            <textarea
                                                name='message'
                                                value={form.message}
                                                onChange={handleChange}
                                                className='textarea mb-2'
                                                placeholder='Message'
                                            ></textarea>
                                            <i className="icon fal fa-edit" />
                                            </div>

                                            <div className="slider-btn  text-center">
                                                <button type='submit' className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s" >
                                                    Let's Connect <i className="fal fa-long-arrow-right" />
                                                    <span className='group-hover:-translate-y-[120%] group-hover:opacity-0  transition-all duration-500'>
                                                                   
                                                    {loading ? 'Sending..': ""}
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form