import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  const moveUp = () => {
    scrollToTop()
  }
  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  return (
  <footer className="py-6 sm:p-6 bg-[#d7e7f0]">
    <div className="container">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link onClick={_ => moveUp()} to="/" className="flex items-center">
            <span className="text-3xl font-semibold whitespace-nowrap text-blue-900">Market</span>
          </Link>
        </div>
      </div>
      <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8"></hr>
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">© 2022 <Link to="/" className="hover:underline">Market™</Link>.</span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="https://github.com/mouniraelmezrigui" className="text-gray-500 hover:text-gray-900 hover:">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer