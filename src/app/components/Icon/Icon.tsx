import React, { ReactNode } from "react";
import Logo from "@/app/assets/Logo";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import './styles.css'

type IconProps = {
  url?: string | StaticImport;
  children?: ReactNode;
  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
};

const Icon: React.FC<IconProps> = ({
  url,
  children,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  if (url) {
    return <Image src={url} alt="Icon" />;
  } else if (children) {
    return (
      <div className="icon-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
    );
  } else {
    return <p>You must provided a url or a children</p>;
  }
};

export default Icon;
