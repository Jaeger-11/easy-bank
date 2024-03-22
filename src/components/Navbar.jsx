import { useState } from "react";
import { easeIn, motion } from "framer-motion";

const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false);
    const closeMenu = () => {
        setTimeout(() => {
            setIsMenu(false)
        }, 1000);
    }

    return (
    <motion.div 
    initial={{y:-100}}
    animate={{y:0}}
    transition={{ease: 'easeOut', duration: .5}}
    className='bg-white sticky z-10 top-0 py-5 px-4 md:p-4'
    >
        <nav className="flex justify-between items-center md:mx-auto md:w-4/5">
            {/* logo */}
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="139" height="20"><defs><linearGradient id="a" x1="72.195%" x2="17.503%" y1="0%" y2="100%"><stop offset="0%" stopColor="#33D35E"/><stop offset="100%" stopColor="#2AB6D9"/></linearGradient></defs><g fill="none" fillRule="evenodd"><path fill="#2D314D" fillRule="nonzero" d="M37.754 15.847c2.852 0 5.152-1.622 5.952-4.216h-3.897c-.376.665-1.14 1.066-2.055 1.066-1.237 0-2.065-.674-2.32-1.978h8.44c.051-.352.081-.694.081-1.037 0-3.335-2.537-5.95-6.201-5.95-3.568 0-6.175 2.564-6.175 6.049 0 3.473 2.628 6.066 6.175 6.066zm2.344-7.297h-4.596c.317-1.129 1.11-1.749 2.252-1.749 1.181 0 2 .613 2.344 1.75zm10.946 7.296c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.919l-.4.88c-.94-.775-2.135-1.222-3.474-1.222-3.476 0-5.961 2.505-5.961 6.026 0 3.533 2.485 6.07 5.961 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.069-2.583 2.545-2.583 1.466 0 2.544 1.108 2.544 2.583 0 1.485-1.078 2.593-2.544 2.593zm13.123 3.467c3.02 0 5.025-1.554 5.025-3.93 0-2.883-2.387-3.256-4.183-3.575-1.08-.193-1.95-.344-1.95-.99 0-.527.422-.838 1.05-.838.71 0 1.197.337 1.197 1.063h3.667c-.044-2.303-1.92-3.843-4.816-3.843-2.912 0-4.854 1.47-4.854 3.75 0 2.757 2.337 3.289 4.1 3.574 1.092.181 1.952.368 1.952 1.024 0 .587-.543.88-1.116.88-.742 0-1.32-.383-1.32-1.214h-3.77c.036 2.463 1.919 4.1 5.018 4.1zm8.1 3.858c2.936 0 4.344-1.257 5.877-4.736l4.764-10.863h-4.206l-2.249 6.263-2.412-6.263H70.31l4.698 10.43c-.53 1.414-.983 1.804-2.48 1.804H71.45v3.365h1.341zm18.504-3.858c3.5 0 5.973-2.515 5.973-6.048S94.796 3.75 91.295 3.75a5.332 5.332 0 00-2.825.784V0H84.6v15.474h2.897l.37-.844c.923.771 2.102 1.216 3.428 1.216zm-.523-3.467c-1.467 0-2.545-1.108-2.545-2.58 0-1.486 1.078-2.594 2.545-2.594 1.466 0 2.544 1.108 2.544 2.593 0 1.473-1.087 2.58-2.544 2.58zm13.598 3.467c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.918l-.401.88c-.939-.775-2.135-1.222-3.474-1.222-3.476 0-5.96 2.505-5.96 6.026 0 3.533 2.484 6.07 5.96 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.07-2.583 2.545-2.583 1.467 0 2.545 1.108 2.545 2.583 0 1.485-1.078 2.593-2.545 2.593zm12.653 3.095V9.403c0-1.447.702-2.3 1.923-2.3.986 0 1.483.657 1.483 1.98v6.39h3.915V8.543c0-2.897-1.733-4.773-4.373-4.773-1.47 0-2.733.565-3.58 1.508l-.537-1.172h-2.747v11.369h3.916zm13.748 0v-4.808l2.848 4.808h4.616l-3.902-5.95 3.543-5.419h-4.397l-2.708 4.454V0h-3.916v15.474h3.916z"/><g fill="url(#a)"><path d="M10.802 0L0 19.704h5.986L16.789 0z"/><path opacity=".5" d="M18.171 0L7.368 19.704h5.986L24.157 0z"/><path opacity=".15" d="M25.539 0L14.737 19.704h5.986L31.525 0z"/></g></g></svg>
            </div>
            {/* desktop nav content */}
            <ul className="hidden md:flex gap-4 lg:gap-6 text-grayishBlue text-sm navcontent">
                <li className="cursor-pointer hover:text-darkBlue transition-all hover:font-semibold">Home <span></span></li>
                <li className="cursor-pointer hover:text-darkBlue transition-all hover:font-semibold">About <span></span></li>
                <li className="cursor-pointer hover:text-darkBlue transition-all hover:font-semibold">Contact <span></span></li>
                <li className="cursor-pointer hover:text-darkBlue transition-all hover:font-semibold">Blog <span></span></li>
                <li className="cursor-pointer hover:text-darkBlue transition-all hover:font-semibold">Careers <span></span></li>
            </ul>

            <div className="hidden md:block">
                <button className="text-white rounded-full text-sm px-6">Request Invite</button>
            </div>

            <div className="md:hidden">
                {
                    isMenu ? 
                    <svg onClick={() => setIsMenu(false)} xmlns="http://www.w3.org/2000/svg" width="18" height="19">
                        <g fill="#2D314D" fillRule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/></g>
                    </svg>
                    :
                    <svg onClick={() => setIsMenu(true)} xmlns="http://www.w3.org/2000/svg" width="24" height="11">
                        <g fill="#2D314D" fillRule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g>
                    </svg>
                }
            </div>

            {/* Mobile Nav Content */}
            {
                isMenu &&
                <motion.ul 
                initial={{y:200, x:200}}
                animate={{y:0, x:"-50%"}}
                transition={{ease: "easeInOut", duration: .3}}
                className="absolute shadow-2xl top-[70px] left-[50%] translate-x-[-50%] bg-white w-[90%] py-8 rounded-md text-center text-base text-grayishBlue flex-col gap-4 md:relative md:top-0 flex md:flex-row md:hidden  lg:gap-6"
                >
                    <li onClick={closeMenu} className="cursor-pointer hover:text-darkBlue transition-all hover:font-semibold w-max mx-auto">Home</li>
                    <li onClick={closeMenu} className="cursor-pointer hover:text-darkBlue transition-all hover:font-semibold w-max mx-auto">About</li>
                    <li onClick={closeMenu} className="cursor-pointer hover:text-darkBlue transition-all hover:font-semibold w-max mx-auto">Contact</li>
                    <li onClick={closeMenu} className="cursor-pointer hover:text-darkBlue transition-all hover:font-semibold w-max mx-auto">Blog</li>
                    <li onClick={closeMenu} className="cursor-pointer hover:text-darkBlue transition-all hover:font-semibold w-max mx-auto">Careers</li>
                </motion.ul>
            }
        </nav>
    </motion.div>
  )
}

export default Navbar