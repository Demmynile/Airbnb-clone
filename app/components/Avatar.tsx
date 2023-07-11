"use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar = ({ src }: AvatarProps) => {
  console.log(src);
  return (
    <div>
      <Image
        className="rounded-full"
        height="30"
        width="30"
        alt="avatar"
        src={src || "/images/placeholder.jpg"}
      />
    </div>
  );
};

export default Avatar;
