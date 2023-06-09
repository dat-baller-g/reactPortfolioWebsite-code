import React, { useState } from "react";
import Slide from 'react-reveal/Slide';
import { send } from 'emailjs-com';


export default function Contact(){

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Mobolaji',
    message: '',
    reply_to: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    send(
      'service_4gowoaj',
      'template_vw94twn',
      toSend,
      '8CJhh1c2nV08VByBl'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setToSend({
          from_name: '',
          to_name: 'Mobolaji',
          message: '',
          reply_to: '',
        })
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return(
            <div className="container bg-inherit dark:bg-black pl-16 pr-16 contact-cont">
             
                <section id="contact" className="relative">
          <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap shadow-sm dark:bg-black">
          <Slide down>
          <div className="ml-16 w-1/2 flex flex-col justify-center mr-36 contact-title-container">
          {/* <div className="h-2 bg-white w-10 inline-block"></div> */}
          
          <div className="flex justify-end footer-header-container"> <hr className="h-1 bg-black dark:bg-white w-10 align-middle contact-divider"/>  <h4 className=" text-black dark:text-white uppercase text-3xl ml-28 font-medium contact-header">Get in touch</h4></div>
         
          <p  className=" text-black dark:text-white">Let us bring that beautiful idea of yours into reality</p>
          </div>
          </Slide>

          <Slide right>
          <div className="w-full">
          <h2 className=" text-black dark:text-white sm:text-4xl text-3xl font-medium title-font">Send Message </h2>
                
            <form
              className=" flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
              onSubmit={handleSubmit}              
              >


                <input
                    type='text'
                    name='from_name'
                    placeholder='Name'
                    value={toSend.from_name}
                    onChange={handleChange}
                    className="w-full dark:bg-gray-800 rounded border bg-transparent border-transparent dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                 
                  />
                  <input
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                    className="w-full dark:bg-gray-800 rounded border bg-transparent border-transparent dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                 
                  />
                  {/* <input
                    type='text'
                    name='to_name'
                    placeholder='to name'
                    value={toSend.to_name}
                    onChange={handleChange}
                  /> */}
                  <input
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                    className="w-full dark:bg-gray-800 rounded border bg-transparent border-transparent dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                 
                  />
                  
                  <button type='submit' className="text-white bg-black dark:bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>

                  


              {/* <h2 className="dark:text-white text-gray-800 sm:text-4xl text-3xl font-medium title-font">
                Send Message
              </h2>
              <p className="leading-relaxed mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                suscipit officia aspernatur veritatis. Asperiores, aliquid?
              </p> */}
              {/* <div className="relative mb-4">
              
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Name"
                  onChange={(e)=> setName(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
               
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Email"
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
               
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  placeholder="Message"
                  onChange={(e)=> setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button> */}
            </form>
            </div>
            </Slide>
          </div>
        </section>
              </div>
        )

}



























// export default function Contact(){
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");

//     function encode(data) {
//         return Object.keys(data)
//           .map(
//             (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
//           )
//           .join("&");
//       }

//       function handleSubmit(e) {
//         e.preventDefault();
//         fetch("/", {
//           method: "POST",
//           headers: { "Content-Type": "application/x-www-form-urlencoded" },
//           body: encode({ "form-name": "contact", name, email, message }),
//         })
      
//           .then(() => alert("Message sent!"))
//           .catch((error) => alert(error));
//           setName("")
//       }





//     return(
//         <div className="container bg-white dark:bg-black pl-16 pr-16">
         
//             <section id="contact" className="relative">
//       <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap bg-white dark:bg-black">
//       <div className="ml-16 w-1/2 flex flex-col justify-center mr-36 contact-title-container">
//       {/* <div className="h-2 bg-white w-10 inline-block"></div> */}
//       <div className="flex justify-end footer-header-container"> <hr className="h-1 bg-white w-10 align-middle contact-divider"/>  <h4 className="text-white uppercase text-3xl ml-28 font-medium contact-header">Get in touch</h4></div>
     
//       <p  className="text-white">Let us bring that beautiful idea of yours into reality</p>
//       </div>
//         {/* <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
//           <iframe
//             width="100%"
//             height="100%"
//             title="map"
//             className="absolute inset-0"
//             frameBorder={0}
//             marginHeight={0}
//             marginWidth={0}
//             style={{ filter: "opacity(0.7)" }}
//             src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
//           />
//           <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
//             <div className="lg:w-1/2 px-6">
//               <h2 className="title-font font-semibold text-white tracking-widest text-xs">
//                 ADDRESS
//               </h2>
//               <p className="mt-1">
//                 97 Warren St. <br />
//                 New York, NY 10007
//               </p>
//             </div>
//             <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
//               <h2 className="title-font font-semibold text-white tracking-widest text-xs">
//                 EMAIL
//               </h2>
//               <a className="text-indigo-400 leading-relaxed" href="#">
//                 reedbarger@email.com
//               </a>
//               <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
//                 PHONE
//               </h2>
//               <p className="leading-relaxed">123-456-7890</p>
//             </div>
//           </div>
//         </div> */}
//         <form
//           netlify
//           name="contact"
//           className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
//           onSubmit={handleSubmit}
          
//           >
//           <h2 className="dark:text-white text-gray-800 sm:text-4xl text-3xl font-medium title-font">
//             Send Message
//           </h2>
//           <p className="leading-relaxed mb-5">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
//             suscipit officia aspernatur veritatis. Asperiores, aliquid?
//           </p>
//           <div className="relative mb-4">
//             {/* <label htmlFor="name" className="leading-7 text-sm text-gray-400">
//               Name
//             </label> */}
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               placeholder="Name"
//               onChange={(e)=> setName(e.target.value)}
//             />
//           </div>
//           <div className="relative mb-4">
//             {/* <label htmlFor="email" className="leading-7 text-sm text-gray-400">
//               Email
//             </label> */}
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               placeholder="Email"
//               onChange={(e)=> setEmail(e.target.value)}
//             />
//           </div>
//           <div className="relative mb-4">
//             {/* <label
//               htmlFor="message"
//               className="leading-7 text-sm text-gray-400">
//               Message
//             </label> */}
//             <textarea
//               id="message"
//               name="message"
//               className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//               placeholder="Message"
//               onChange={(e)=> setMessage(e.target.value)}
//             />
//           </div>
//           <button
//             type="submit"
//             className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//           </div>
//     )
// };