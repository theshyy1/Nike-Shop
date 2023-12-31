import { useState} from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2 ">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className='font-xl text-coral-red font-montserrat'>Our Summer Collections</p>
        <h1 className='text-8xl font-palanquin mt-10 max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red mt-3 inline-block'>Nike</span>
          Shoes
        </h1>
        <p className='font-monserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrival, quality format, and innovation for your active life
        </p>
        <Button label="Show now" iconUrl={arrowRight}/>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          { statistics.map((item, index) => {
            return (
              <div className="" key={index}>
                <p className='text-4xl font-palanquin font-bold'>{item.value}</p>
                <p className='leading-7 font-palanquin text-slate-gray'>{item.label}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="big shoe collections" width={640} height={500} className='object-contain relative z-10'/>
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          { shoes.map(shoe => {
            return (
              <div className="" key={shoe}>
                <ShoeCard imageUrl={shoe} changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}  bigShoeImg={bigShoeImg} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero