const colorBoxes = [
  { color: "bg-[#1f491a]", width: "w-[59px]" },
  { color: "bg-[#5e7724]", width: "w-[59px]" },
  { color: "bg-[#b3aa45]", width: "w-[60px]" },
  { color: "bg-[#f9ca72]", width: "w-[60px]" },
  { color: "bg-[#ecedef]", width: "w-[59px]" },
];

export const Box = (): JSX.Element => {
  return (
    <div className="w-[349px] h-[60px]">
      <div className="flex gap-[13px] w-[349px] h-[60px]">
        {colorBoxes.map((box, index) => (
          <div key={index} className={`${box.width} h-[60px] ${box.color}`} />
        ))}
      </div>
    </div>
  );
};
