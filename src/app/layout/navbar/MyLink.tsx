import React from 'react'
import { Link } from 'react-router-dom'

// const MyLink = React.forwardRef(({ onClick, href }, ref) => {

// return (
// <a href={href} onClick={onClick} ref={ref}><div className="bg-red-500 hover:bg-green-500">My Link</div> </a>
// )
// })

import { forwardRef } from 'react'
import { Popover } from '@headlessui/react'

const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  )
})

function Example() {
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button>Open Popover</Popover.Button>
          <Popover.Panel>
            {({ close }) => (
              <MyLink href='/profile' onClick={() => close()}>
                Profile
              </MyLink>
            )}
          </Popover.Panel>
        </>
      )}
    </Popover>
  )
}


