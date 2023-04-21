'use client'

interface MenuItemProps {
  onClick: () => void;
  label: string;
  light?: boolean;
}

const MenuItem:React.FC<MenuItemProps> = ({ onClick, label, light }) => {
  return (
    <div
      onClick={onClick}
      className={`
      px-4
      py-3
      hover:bg-neutral-100
      transition
      ${light ? 'font-light' : 'font-semibold' }
      `}

    >{label}</div>
  )
}

export default MenuItem
