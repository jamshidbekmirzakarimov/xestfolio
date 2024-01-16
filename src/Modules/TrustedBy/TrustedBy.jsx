import React from 'react'
import Image from "next/image";
import Paperz from "../../assets/Svg/paperz.svg"
import Dorfus from "../../assets/Svg/dorfus.svg"
import Martino from "../../assets/Svg/martino.svg"
import Square from "../../assets/Svg/square.svg"
import Gobona from "../../assets/Svg/gobona.svg"
const TrustedBy = () => {
  return (
    <>
    <section className='mb-[138px]'>
        <div className="container">
            <h2 className='text-center mb-[24px] inter text-[18px] leading-[24px] tracking-[1px] text-[#12141dcc]'>Trusted By</h2>
            <ul className='flex items-center justify-between'>
                <li>
                     <Image src={Paperz} alt="" />
                </li>
                <li>
                     <Image src={Dorfus} alt="" />
                </li>
                <li>
                     <Image src={Martino} alt="" />
                </li>
                <li>
                     <Image src={Square} alt="" />
                </li>
                <li>
                     <Image src={Gobona} alt="" />
                </li>
            </ul>
        </div>
    </section>
    </>
  )
}

export default TrustedBy