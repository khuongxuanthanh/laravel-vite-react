import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsDribbble } from 'react-icons/bs'

const Catagories = [
    {
        id: 1,
        name: 'Laptops & Computers',
        link: '/',
    },
    {
        id: 2,
        name: 'Cameras & Photography',
        link: '/',
    },
    {
        id: 3,
        name: 'Smart Phones & Tablets',
        link: '/',
    },
    {
        id: 4,
        name: 'Video Games & Consoles',
        link: '/',
    },
    {
        id: 5,
        name: 'Waterproof Headphones',
        link: '/',
    },
]

const CustomerList = [
    {
        id: 1,
        name: 'My Account',
        link: '/',
    },
    {
        id: 2,
        name: 'Discount',
        link: '/',
    },
    {
        id: 3,
        name: 'Returns',
        link: '/',
    },
    {
        id: 4,
        name: 'Orders History',
        link: '/',
    },
    {
        id: 5,
        name: 'Order Tracking',
        link: '/',
    },
]

const ListIcon = [
    {
        id: 1,
        name: 'Facebook',
        icon: '<BsFacebook/>',
        link: '/',
    },
    {
        id: 2,
        name: 'Instagram',
        icon: '<BsInstagram/>',
        link: '/',
    },
    {
        id: 3,
        name: 'Twitter',
        icon: '<BsTwitter/>',
        link: '/',
    },
    {
        id: 4,
        name: 'GitHub',
        icon: '<BsGithub/>',
        link: '/',
    },
    {
        id: 5,
        name: 'Dribbble',
        icon: '<BsDribbble/>',
        link: '/',
    },
]

const Footer = () => {
  return (
    <footer className="bg-gray-100">
        <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
            <div>
              <div className="flex justify-center text-teal-600 sm:justify-start text-4xl font-bold ">
                <h1>Hekto</h1>
              </div>
              <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-500 sm:max-w-xs sm:mx-0 sm:text-left">
              Contact Info
              </p>
              <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-500 sm:max-w-xs sm:mx-0 sm:text-left">
              17 Princess Road, London, Greater London NW1 8JR, UK
              </p>

              <ul className="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
                {ListIcon.map((e) => {
                    return (
                        <li key={e.id}>
                            <a href={e.link} rel="noreferrer" target="_blank" className="text-teal-700 transition hover:text-teal-700/75">
                                <span className="sr-only">{e.name}</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    {e.icon} <BsFacebook/>
                                </svg>
                            </a>
                        </li>
                    );
                })}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-3">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">Catagories</p>
                <nav className="mt-8">
                  <ul className="space-y-4 text-sm">
                    {Catagories.map((e) => {
                        return (
                            <li key={e.id}>
                                <a className="text-gray-700 transition hover:text-gray-700/75" href={e.link}>
                                {e.name}
                                </a>
                            </li>
                        )
                    })}
                  </ul>
                </nav>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">Customer Care</p>
                <nav className="mt-8">
                  <ul className="space-y-4 text-sm">
                  {CustomerList.map((e) => {
                        return (
                            <li key={e.id}>
                                <a className="text-gray-700 transition hover:text-gray-700/75" href={e.link}>
                                {e.name}
                                </a>
                            </li>
                        )
                    })}
                  </ul>
                </nav>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">Pages</p>
                <nav className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                        Support
                      </a>
                    </li>
                    <li>
                      <a className="flex group justify-center gap-1.5 sm:justify-start" href="/">
                        <span className="text-gray-700 transition group-hover:text-gray-700/75">
                          Live Chat
                        </span>
                        <span className="relative flex w-2 h-2 -mr-2">
                          <span className="absolute inline-flex w-full h-full bg-teal-400 rounded-full opacity-75 animate-ping" />
                          <span className="relative inline-flex w-2 h-2 bg-teal-500 rounded-full" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="text-center sm:text-left hidden">
                <p className="text-lg font-medium text-gray-900">Contact Us</p>
                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a className="flex items-center justify-center gap-1.5 sm:justify-start" href="/">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-900 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700">john@doe.com</span>
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center justify-center gap-1.5 sm:justify-start" href="/">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-900 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-700">0123456789</span>
                    </a>
                  </li>
                  <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-900 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <address className="-mt-0.5 not-italic text-gray-700">
                      213 Lane, London, United Kingdom
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-6 mt-12 border-t border-gray-100">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-500">
                <span className="block sm:inline">All rights reserved.</span>
                <a className="inline-block text-teal-600 underline transition hover:text-teal-600/75" href="/">
                  Terms &amp; Conditions
                </a>
                <span>·</span>
                <a className="inline-block text-teal-600 underline transition hover:text-teal-600/75" href="/">
                  Privacy Policy
                </a>
              </p>
              <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                © 2022 Company Name
              </p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer