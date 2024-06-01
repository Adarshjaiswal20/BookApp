import React from 'react'

function Footer() {
  return (
    <div>
        <hr></hr>
        <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
    <nav className="grid grid-flow-col gap-4">
      <a className="link link-hover" href="/About">About us</a>
      <a className="link link-hover" href="/Contact">Contact</a>
      <a className="link link-hover" href="/Course">Course</a>
      <a className="link link-hover" href="/">Home</a>
    </nav> 
    <nav>
      <div className="grid grid-flow-col gap-4">
        <a href="https://www.linkedin.com/feed/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M21.75 0h-19.5c-1.24 0-2.25 1.01-2.25 2.25v19.5c0 1.24 1.01 2.25 2.25 2.25h19.5c1.24 0 2.25-1.01 2.25-2.25v-19.5c0-1.24-1.01-2.25-2.25-2.25zm-17.25 19.5v-12.75h2.25v12.75h-2.25zm1.125-14.25c-.622 0-1.125-.503-1.125-1.125s.503-1.125 1.125-1.125 1.125.503 1.125 1.125-.503 1.125-1.125 1.125zm15.375 14.25h-2.25v-7.125c0-1.687-1.125-2.625-2.625-2.625-.625 0-1.25.25-1.688.625-.438.375-.75.875-.75 1.375v7.75h-2.25v-12.75h2.25v1.875c.563-.875 1.563-1.625 3-1.625 2.25 0 3.75 1.5 3.75 4.125v8.375z" /></svg></a>
        <a href="https://github.com/Adarshjaiswal20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
        <a href="https://leetcode.com/u/Adarsh_jaiswal21/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg></a>
      </div>
    </nav> 
    <aside>
     <p>Copyright © 2024 - All right reserved by Book<span className=" text-l  cursor-pointer text-pink-500">Store</span></p>
    </aside>
  </footer></div>
  )
}

export default Footer