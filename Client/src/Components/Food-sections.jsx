import {data} from '../Components/Image.js';
import RandomSearch from './Random-meals.jsx';
export default function FoodSections() {
    return(
        <>
            <div className='w-full h-fit p-6 bg-slate-100'>
                <div className='relative flex flex-col items-center gap-2'>
                    <h1 className='text-3xl text-center font-title text-orange-700'>Categories</h1>
                    <div className='w-full h-full flex flex-row gap-3 justify-evenly md:overflow-x-hidden overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
                        {
                            data.map((item) => {
                                return (
                                    <div key={item.id} className='flex flex-col items-center justify-center gap-2'>
                                        <img src={item.url} alt={item.name} className='w-32 h-32 rounded-full object-cover hover:scale-105 ease-in-out duration-300' />
                                        <h2 className='text-lg font-semibold font-title text-orange-700'>{item.name}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <RandomSearch/>
            </div>
        </>
    )
}