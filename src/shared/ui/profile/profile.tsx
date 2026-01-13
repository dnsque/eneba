import Heart from '@/shared/ui/icons/heart.svg?react';
import Cart from "@/shared/ui/icons/cart.svg?react";
import Avatar from "@/shared/ui/icons/avatar.svg?react"


export const Profile = () => {
    return (
      <div className="flex flex-row gap-6 items-center">
        <Heart
          className="
        transition-colors
        duration-200
        ease-in-out
        hover:text-accent
        cursor-pointer
        "
        />
        <Cart
          className="
        transition-colors
        duration-200
        ease-in-out
        hover:text-accent
        cursor-pointer
        "
        />
        <Avatar className="w-9 h-9 border border-[#c5b1f1] rounded-full" />
      </div>
    );
}