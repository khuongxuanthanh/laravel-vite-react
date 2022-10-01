import React from 'react'

const Products = () => {
  return (
    <ul className="flex border-b border-gray-200 text-center">
        <li className="flex-1">
          <a className="relative block border-t border-l border-r border-gray-200 bg-white p-4 text-sm font-medium" href="/">
            <span className="absolute inset-x-0 -bottom-px h-px w-full bg-white" />
            Settings
          </a>
        </li>
        <li className="flex-1">
          <a className="block p-4 text-sm font-medium text-gray-500" href="/">
            Messages
          </a>
        </li>
        <li className="flex-1">
          <a className="block p-4 text-sm font-medium text-gray-500" href="/"> Archive </a>
        </li>
        <li className="flex-1">
          <a className="block p-4 text-sm font-medium text-gray-500" href="/">
            Notifications
          </a>
        </li>
      </ul>
  )
}

export default Products