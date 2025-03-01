import React from "react";
import Link from "next/link";
const LinkComponent = ({
  title1,
  title2,
  href1,
  href2
}:{
  title1?: string,
  title2?: string,
  href1?: string,
  href2?: string
}) => {
  return (
    <span className="flex flex-row items-center justify-center gap-4">
      <Link href={`/${href1}`} className="text-lg text-finmate_secondary md:text-2xl lg:text-base">
        &larr; { title1 }
      </Link>
      <Link href={`/${href2}`} className="text-lg text-finmate_secondary md:text-2xl lg:text-base">
        { title2 } &rarr;{" "}
      </Link>
    </span>
  );
};

export default LinkComponent;
