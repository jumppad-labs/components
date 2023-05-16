type SwipebarProps = {
  className: string;
};

export const Swipebar = ({ className }: SwipebarProps): JSX.Element => {
  return (
    <div className={`${className} p-3 bg-emerald-400 text-white dark:bg-pink-400 rounded-full`}>
      hi
    </div>
  )
}
