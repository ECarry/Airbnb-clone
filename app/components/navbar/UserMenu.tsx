'use client';

import { AiOutlineMenu } from 'react-icons/ai'
import { TbWorld } from 'react-icons/tb'

import { useCallback, useRef, useState } from 'react';
import MenuItem from './MenuItem';

import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';

import Avatar from '../Avatar';
import useRentModal from '@/app/hooks/useRentModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import useClickOutClose from '@/app/hooks/useClickOutClose';

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const rentModal = useRentModal()

  const ref = useRef(null)

  useClickOutClose(ref, () => {
    setIsOpen(false)
  })

  const router = useRouter()

  const toggleOpen = useCallback(() => {
    setIsOpen(pre => !pre)
  }, [isOpen])

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen()
    }
  }, [currentUser, loginModal, rentModal])

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-2'>
        {/* AIRBNB YOUR HOME  */}
        <div
        onClick={() => currentUser? rentModal.onOpen() : onRent }
          className='
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
          '
        >
          Airbnb your home
        </div>

        {/* LANGUAGE  */}
        <div className='hidden md:block'>
          <div
            className='
              flex
              items-center
              justify-center
              rounded-full
              cursor-pointer
              transition
              h-10
              w-10
              hover:bg-neutral-100
            '
          >
            <TbWorld size={18} />
          </div>
        </div>
        
        {/* MENU BUTTON  */}
        <div
          onClick={toggleOpen}
          className='
            p-4
            md:py-1
            md:px-2
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
          '
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {/* MENU */}
      {isOpen && (
        <div
          ref={ref}
          className='
            absolute
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white
            overflow-hidden
            ring-0
            top-12
            text-sm
          '
        >
          <div className='flex flex-col cursor-pointer'>
          {currentUser ? (
            <>
              <MenuItem 
                label="My trips" 
                onClick={() => router.push('/trips')}
              />
              <MenuItem 
                label="My favorites" 
                onClick={() => router.push('/favorites')}
              />
              <MenuItem 
                label="My reservations" 
                onClick={() => router.push('/reservations')}
              />
              <MenuItem 
                label="My properties" 
                onClick={() => router.push('/properties')}
              />
              <MenuItem 
                label="Airbnb your home" 
                onClick={() => rentModal.onOpen()}
              />
              <hr />
              <MenuItem 
                label="Log out"
                light
                onClick={() => signOut()}
              />
            </>
            ) : (
              <>
                <MenuItem 
                  label="Log in" 
                  onClick={loginModal.onOpen}
                />
                <MenuItem 
                  label="Sign up" 
                  light
                  onClick={registerModal.onOpen}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
