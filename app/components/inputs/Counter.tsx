import { useCallback } from "react";
import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void
}

const Counter:React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1)
  }, [value, onChange])

  const onReduce = useCallback(() => {
    if (value === 1) {
      return
    }

    onChange(value - 1)
  },[value, onChange])

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-semibold">{title}</div>
        <div className="font-light text-gray-500">{subtitle}</div>
      </div>

      <div className="flex flex-row items-center gap-4">
        <div
          onClick={onReduce}
          className="
            w-10
            h-10
            rounded-full
            border-neutral-400
            border-[1px]
            flex
            justify-center
            items-center
            text-neutral-500
            cursor-pointer
            hover:opacity-80
            transition
          "
        >
          <AiOutlineLine size={20} />
        </div>
        <div className="font-light text-neutral-500 text-xl">{value}</div>
        <div
          onClick={onAdd}
          className="
            w-10
            h-10
            rounded-full
            border-neutral-400
            border-[1px]
            flex
            justify-center
            items-center
            text-neutral-500
            cursor-pointer
            hover:opacity-80
            transition
          "
        >
          <AiOutlinePlus size={20} />
        </div>
      </div>
    </div>
  )
}

export default Counter
