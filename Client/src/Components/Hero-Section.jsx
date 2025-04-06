import ChefImage from '../assets/Images/Black-Chef.jpg';
export default function HeroSection(){
    return(
        <>
            <div className="w-full max-w-full h-screen md:h-fit md:p-5 p-3 flex items-center relative m-2">
                <div className='md:w-screen p-6 rounded-2xl shadow-2xl md:min-h-screen h-full text-white flex items-center bg-center bg-cover' style={{backgroundImage: `url(${ChefImage})`}}>
                    <div className='flex flex-col gap-3 md:w-1/2 w-full p-2'>
                        <h1 className='md:text-3xl text-xl font-title font-bold text-orange-700 w-full'>Welcome to the Chef's world</h1>
                        <p className='font-text md:text-xl text-lg'>Discover a world of flavors with Chef's World! Explore mouth-watering recipes and find the perfect dish to satisfy your cravings</p>
                    </div>
                </div>
            </div>
        </>
    )
}