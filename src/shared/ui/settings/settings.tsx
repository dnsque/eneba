import LithuanianFlag from "@/shared/ui/icons/lithuania.svg?react";

export const Settings = () => {
  return (
    <div className="flex w-full gap-2">
      <LithuanianFlag width={16} />
      <button
        className="
      flex 
      items-center 
      gap-2 
      transition-colors duration-200 ease-in-out
      hover:text-accent 
      cursor-pointer"
      >
        <span>English EU</span>
        <span className="h-4 w-px bg-white"></span>
        <span>EUR</span>
      </button>
    </div>
  );
};
