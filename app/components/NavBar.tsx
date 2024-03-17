import { HomeIcon } from '@heroicons/react/24/solid'


export default function NavBar() {
  return (
      <nav className="w-[12rem] bg-green-400 h-screen">
       <ul>
        <li className="flex items-center">
          <HomeIcon className=" ml-8 w-6 h-6"/>
          <h1 className="text-white text-base ml-6 py-8">Dashboard</h1>
        </li>
        </ul>
      </nav>
   
  );
}