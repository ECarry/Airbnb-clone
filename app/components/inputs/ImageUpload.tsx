import { RiImageAddFill } from 'react-icons/ri'

interface ImageUploadProps {
  url: string
}

const ImageUpload: React.FC<ImageUploadProps> = ({ url }) => {
  return (
    <div
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
      <RiImageAddFill size={50} />
      <div className='text-xl font-semibold'>Click to upload</div>
    </div>
  )
}

export default ImageUpload
