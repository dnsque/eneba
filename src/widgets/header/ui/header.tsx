import { SearchInput, Settings, Profile } from "@/shared/ui";
import Logo from "@/shared/ui/icons/logo.svg?react";

export const Header = () => {
  return (
    <header className="w-full flex py-5 gap-5">
      <Logo width={155} className="shrink-0" />
      <SearchInput />
      <Settings />
      <Profile />
    </header>
  );
};
