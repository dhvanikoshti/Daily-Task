import React from 'react'
import Day2_Task2Component from './Day2_Task2Component'

function Day2_Task2() {
  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 m-10' >
        <Day2_Task2Component img="https://m.media-amazon.com/images/I/81vzlqfaQ0L._AC_UY327_FMwebp_QL65_.jpg" heading="Blaupunkt 139 cm (55 inch) QLED Ultra Google TV"  sprice="34,499" price="39,999" p="59,999" />
        <Day2_Task2Component img="https://m.media-amazon.com/images/I/81SyxW8k2nL._AC_UY327_FMwebp_QL65_.jpg" heading="SAMSUNG Crystal 4K 163 cm (65 inch) UHD TV"  sprice="72,499" price="72,990" p="1,16,900" />
        <Day2_Task2Component img="https://m.media-amazon.com/images/I/71jFENY4hgL._AC_UY327_FMwebp_QL65_.jpg" heading="Vu 139 cm (55 inch) QLED Ultra HD (4K) TV"  sprice="38,499" price="40,999" p="65,000" />
        <Day2_Task2Component img="https://m.media-amazon.com/images/I/81iQ+ctbEzL._AC_UY327_FMwebp_QL65_.jpg" heading="LG UQ7500 164 cm (65 inch) Ultra HD (4K) TV"  sprice="75,490" price="7,990" p="1,14,990" />
        <Day2_Task2Component img="https://m.media-amazon.com/images/I/71mA83yc8xL._AC_UY327_FMwebp_QL65_.jpg" heading="Mi Q1 189.34 cm (75 inch) QLED Ultra HD TV"  sprice="1,37,499" price="1,44,999" p="1,99,999" />
        <Day2_Task2Component img="https://m.media-amazon.com/images/I/71mA83yc8xL._AC_UL480_FMwebp_QL65_.jpg" heading="OnePlus U1S 164 cm (65 inch) Ultra HD (4K) TV"  sprice="57,499" price="59,999" p="69,999" />
    </div>
  )
}

export default Day2_Task2