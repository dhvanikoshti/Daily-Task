function Task2_component(props){
    return(
        <>
        <div className="flex flex-col items-center ">
            <div className="m-5">
                {<img src={props.img} alt="Image" className=" object-cover border-2 border-gray-400 shadow-md"/>}
            </div>
            <div className="text-2xl m-4 font-serif ">
                {props.heading}
            </div>
            <div>
                <button className='hover:bg-gray-300 hover:border-gray-500 text-xl bg-gray-400 p-2 px-5 rounded-xl border-2 border-gray-500'>Explore</button>
            </div>
        </div>
        </>
    )
}

export default Task2_component