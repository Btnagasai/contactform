const Contactform = () => {
    return(
        <div className="min-h-screen flex items-center justify-center bg-green-100  m-auto ">
      <form className="bg-white sm:pl-11 sm:pr-11 sm:pt-8  sm:pb-10  pl-5 pr-5 pt-4 pb-5 m-10 rounded-xl shadow-lg  flex flex-col gap-4 font-karla  "
      >
        <h2 className="text-[20px] sm:text-[30px]  font-semibold  ">Contact Us</h2>
              
              {/* first & last name */}
       
                <div className="flex flex-col sm:flex-row 2xl:flex-row gap-5 mt-2">
                    <div >
                    <label htmlfor="firstName" className="block mb-1 text-black text-[15px]  ">First Name   *</label>
                    <input type="text" id="firstName" name="firstName" required className="border border-gray-300 rounded-lg  p-[13px] "/>
                    </div>
                    <div>
                    <label htmlfor="" className="block text-black  mb-1 text-[15px]">Last Name   *</label>
                    <input type="text" id="lastName" name="lastName" required className="border border-gray-300 rounded-lg  p-[13px] "/>
                    </div>   
                </div>
                         {/* Email id */}
                <div className="flex flex-col mt-3 ">
                        <label htmlfor="Email Address" className="block mb-1 text-black text-sm">Email Address  *</label>
                        <input type="email" id="email" name="email" required className="border border-gray-300 rounded-lg p-[12px]" />
                </div>
                         {/* Query Type */}
                <div className=" mt-3">Query Type *</div>
                <div className=" flex  gap-4 ">
                    
                    {/* General Enquiry */}
                        
                        <div class="flex   border border-gray-300 rounded-lg w-full p-3 items-center">
                       
                            <input type="radio" name="queryType" value="General Enquiry" className=" radio-input  w-[15px] h-[15px] mr-3 ml-[11px] font-[8px] rounded-lg"/>
                            <label className="flex item-center">General Enquiry </label>
                   
                    </div>
                            {/* Support Request */}
                        <div class="flex  border border-gray-300 rounded-lg w-full p-3 items-center">
                        
                            <input type="radio" name="queryType" value="Support Request" className=" radio-input  w-[15px] h-[15px] mr-3 ml-[11px] font-[8px] rounded-lg"/>
                            <label className="flex item-center">Support Request</label>
                   
                    </div>
                </div>
                        {/* Message */}
                <div className="flex flex-col mt-2">
                    <label htmlFor="Message" className="block mb-1 text-black text-sm ">Message  *</label>
                    <textarea type="textarea" id="Message" name="Message"  rows="4" required className="border border-gray-300 rounded-lg p-2 "/>
                </div>
                        {/* checkbox */}
                <div className="flex items-center mt-6 ">
                   
                    <input type="checkbox" className="input-checkbox w-[16px] h-[16px] mr-5 font-medium"/>
                    <label htmlFor="checkBox">I consent to being contacted by the team *</label>
                </div>
                        {/* submit button */}
                <button type="submit" className="mt-6 w-full p-5 bg-[#0c7d69] text-white text-[15px] rounded-lg">Submit</button>
                   
            </form>
        </div>
    );
}
export default Contactform