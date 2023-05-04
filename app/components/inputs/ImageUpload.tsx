'use client'

import { RiImageAddFill } from 'react-icons/ri'
import Image from "next/image";
import { CldUploadWidget } from 'next-cloudinary';
import { useCallback } from 'react';

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  value: string,
  onChange: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange }) => {
  const handleUpload = useCallback((res: any) => {
    onChange(res.info.secure_url)
  }, [onChange])

  return (
    <CldUploadWidget 
      onUpload={handleUpload}
      uploadPreset='j7tepm4j'
      options={{
        maxFiles: 1
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
              relative
              flex
              flex-col
              gap-4
              justify-center
              items-center
              border-2
              border-dashed
              border-neutral-300
              hover:opacity-70
              transition
              p-20
              text-neutral-500
              cursor-pointer
            "
          >
            <RiImageAddFill size={40} />
            <div className='text-lg font-semibold'>Click to upload</div>
            { value && (
              <div className='absolute inset-0 w-full h-full'>
                <Image 
                  alt='upload'
                  fill
                  style={{ objectFit : 'cover'}}
                  src={value}
                />
              </div>
            )}
            </div>
        )
      }}
    </CldUploadWidget>
  )
}

export default ImageUpload
