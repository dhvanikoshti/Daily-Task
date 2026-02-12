import React from 'react'

function ImageData() {

    const imageData = [{ id: 1, category:'TV', url: 'src/Task3/Products-image/tv1.png', title: 'TOSHIBA',des:'Toshiba 139 cm (55 inches) C350NP Series 4K Ultra HD Smart LED Google TV 55C350NP (Black)', price:450000 }, 
        { id: 2, category:'TV', url: 'src/Task3/Products-image/tv2.png', title: 'VW Vision',des:'VW Vision 139 cm (55 inches) C350NP Series 4K Ultra HD Smart LED Google TV 55C350NP (Black)', price: 350000 },
        { id: 3, category:'TV', url: 'src/Task3/Products-image/tv3.png', title: 'Samsung',des:'Samsung 139 cm (55 inches) C350NP Series 4K Ultra HD Smart LED Google TV 55C350NP (Black)', price: 480000 },
        { id: 4, category:'TV', url: 'src/Task3/Products-image/tv4.png', title: 'TCL',des:'TCL 139 cm (55 inches) C350NP Series 4K Ultra HD Smart LED Google TV 55C350NP (Black)', price: 320000 },
        { id: 5, category:'mobile', url: 'src/Task3/Products-image/mobile2.png', title: 'Galaxy S25',des:'Samsung Galaxy S25 139 cm (55 inches) C350NP Series 4K Ultra HD Smart LED Google TV 55C350NP (Black)', price: 100000 },
        {id: 6, category:'mobile', url: 'src/Task3/Products-image/mobile1.png', title: 'Galaxy S25 Ultra',des:'Samsung Galaxy S25 Ultra 139 cm (55 inches) C350NP Series 4K Ultra HD Smart LED Google TV 55C350NP (Black)', price: 75000 },
        {id: 7, category:'mobile', url: 'src/Task3/Products-image/mobile3.png', title: ' Vivo',des:'Vivo 139 cm (55 inches) C350NP Series 4K Ultra HD Smart LED Google TV 55C350NP (Black)', price: 40000 },
        {id: 8, category:'mobile', url: 'src/Task3/Products-image/mobile4.png', title: 'OnePlus',des:'OnePlus Nord CE5 | MediaTek Dimensity | Massive 7100mAh Battery | Powered by OnePlus AI | 256GB 8GB | Marble Mist', price: 45000 },
        {id: 9, category:'AC', url: 'src/Task3/Products-image/ac1.png', title: 'Voltus', price: 50000 },
        {id: 10, category:'AC', url: 'src/Task3/Products-image/ac2.png', title: 'LLOYD', price: 40000 },
        {id: 11, category:'AC', url: 'src/Task3/Products-image/ac3.png', title: 'Haier', price: 45000 },
        {id: 12, category:'AC', url: 'src/Task3/Products-image/ac4.png', title: 'HITACHI', price: 35000 }];

        const tv=imageData.filter((item)=>item.category==='TV')
        const mobile=imageData.filter((item)=>item.category==='mobile')
        const ac=imageData.filter((item)=>item.category==='AC')

  return (
    <>
    <div className=''>
    <div className='text-5xl text-center text-gray-700 font-serif  font-bold p-6'>Electronic Home Appliance</div>
    <div className='m-4'>
        <hr className=' border-3 border-gray-600 shadow-xl'/>
        </div>
    <div className='text-4xl text-center text-gray-700 font-serif font-bold p-5'>Television</div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-10'>    
        {tv.map((item)=> <div className='border-2 border-gray-300 text-center p-3'>
            <div className=''><img src={item.url} alt={item.title} className='h-fit w-fit' /></div>
            <div className='font-semibold font-serif text-xl m-2'>{item.title}</div>
            <div className='m-2 text-emerald-800'>&#8377;{item.price}</div>
            </div>)}
    </div>
    <div className='text-4xl text-center text-gray-700 font-serif font-bold p-5'>Mobile</div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-10'>    
        {mobile.map((item)=> <div className='border-2 border-gray-300 text-center p-3'>
            <div className=''><img src={item.url} alt={item.title} className='h-fit w-fit' /></div>
            <div className='font-semibold font-serif text-xl m-2'>{item.title}</div>
            <div className='m-2 text-emerald-800'>&#8377;{item.price}</div>
            </div>)}
    </div>
     <div className='text-4xl text-center text-gray-700 font-serif font-bold p-5'>Air Conditioner</div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-10'>    
        {ac.map((item)=> <div className='border-2 border-gray-300 text-center p-3'>
            <div className=''><img src={item.url} alt={item.title} className='h-fit w-fit' /></div>
            <div className='font-semibold font-serif text-xl m-2'>{item.title}</div>
            <div className='m-2 text-emerald-800'>&#8377;{item.price}</div>
            </div>)}
    </div>
    </div>
    </>
    )
     
   
}
export default ImageData