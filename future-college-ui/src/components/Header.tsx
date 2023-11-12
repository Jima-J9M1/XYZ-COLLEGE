import headerPhoto from '../assets/79 1.png';

 const HeaderContainer = () =>(
      <div className="flex flex-col sm:flex  sm:flex-row md:gap-[64px]">
         <div className="order-2 sm:order-1 flex flex-col justify-center ">
            <div className="text-4xl mb-[20px]">
            <span className="text-[#111827] text:40px sm:text-[60px] font-[800]">Harmony in Learning </span><br />
            <span className="text-[#009A6A] text:40px sm:text-[60px] font-[800]">Uniting Couriosity and knowledge</span>
            </div>
            <div className="text-[#6B7280] text:16px sm:text-[20px] mb-[40px]">
            Anim aute id magna aliqua ad ad non deserunt sunt. 
            Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </div>
            
            <div className="flex gap-[24px]">
            <button className="w-[150px] h-[50px] rounded-[6px] pr-[25px] pl-[25px] pb-[13px] pt-[13px] bg-[#009A6A] text-white">Explore</button>
            <button className="w-[150px] h-[50px] rounded-[6px] pr-[25px] pl-[25px] pb-[13px] pt-[13px]">Watch video</button>
            </div>
         </div>
         
         <div className='order-1 sm:order-2 w-full sm:w-3/4 mt-4' >
           <img src={headerPhoto} alt="header photo"  className="w-full h-[300px] object-cover object-center sm:object-fill md:[400px] sm:h-[577px] sm:w-[900]"/>
         </div>
      </div>
)


export default HeaderContainer;