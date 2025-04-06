import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
export default function NavBar(){
    const [search, setSearch] = useState(false);
    const [searchName, setSearchName] = useState('');
    const navigate = useNavigate();
    const handleSearch = () => {
        if(search == false){
            setSearch(true);
        }
        else {
            setSearch(false);
        }
    }
    const handleSearching = async (e) =>{
        e.preventDefault();
        try {
            const data = await axios.get(`http://localhost:5000/api/search/${searchName}`);
            if(data.data.success){
                localStorage.setItem('searchedMeals', JSON.stringify(data.data.mealSearched));
                navigate('/search')
            }

        } catch (error) {
            console.log(error);
        }
    }
   return(
    <>
        <div className="w-full md:max-w-full max-w-screen h-fit md:p-6 p-2 flex items-center justify-between bg-orange-700 text-white">
            <Link to='/'><h1 className="md:text-5xl text-2xl font-bold font-title">Chef's World</h1></Link>

            <form className="relative md:w-1/4 hidden md:flex">
                <input type="text" placeholder="What do you want to Eat ?" className="w-full outline-none border rounded-2xl p-4 bg-white text-black" value={searchName} onChange={(e)=> {setSearchName(e.target.value)}}/>
                <button className=" absolute w-max p-3 rounded-full right-0 bg-orange-700 text-white m-3 font-bold " onClick={handleSearching}><CiSearch/></button>
            </form>

            <div className="md:flex md:gap-3 hidden">
                <button className="text-white md:text-2xl text-xl underline">Login</button>
                <button className="w-max h-max md:px-6 md:py-2 px-3 py-1 border rounded-2xl bg-white text-xl text-orange-700">Create Account</button>
            </div>
            <div className="flex gap-2 md:hidden">
                <button className="w-max p-3 rounded-full right-0 bg-slate-100 text-orange-700 text-xl m-2 font-bold" onClick={handleSearch}><CiSearch/></button>
                <button className="w-max p-3 rounded-full right-0 bg-slate-100 text-xl text-orange-700 m-2 font-bold"><CgProfile/></button>
            </div>
        </div>
        {
            search &&
            <div className="relative md:w-1/4 w-full flex md:hidden p-2 ">
                <input type="text" placeholder="What do you want to Eat ?" className="w-full outline-none border rounded-2xl p-4 bg-white text-black"/>
                <button className=" absolute w-max p-3 rounded-full right-0 bg-orange-700 text-white m-3 font-bold"><CiSearch/></button>
            </div>
        }
    </>
   ) 
}