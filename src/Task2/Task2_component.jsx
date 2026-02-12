function Task2_component(props){
    return(
        <>
        <div className="flex flex-col items-center ">
            <div className="m-5">
                {<img src={props.img} alt="Image" className=" object-cover border-2 border-gray-400 shadow-md"/>}
            </div>
            <div className="sm:text-xl text-sm lg:text-2xl m-4 font-serif text-center">
                {props.heading}
            </div> 
            <div className="">
                <button className='hover:bg-gray-300 hover:border-gray-500 sm:text-sm md:text-xl bg-gray-400 p-2 px-5 rounded-xl border-2 border-gray-500'>Explore</button>
            </div>
        </div>
        </>
    )
}

export default Task2_component