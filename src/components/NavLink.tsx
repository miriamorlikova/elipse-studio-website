import { GoArrowRight } from "react-icons/go";
import { SelectedPageValueType } from "../App";
import AnchorLink from "react-anchor-link-smooth-scroll";

type NavLinkProps = {
  page: string;
  selectedPage: SelectedPageValueType;
  setSelectedPage: (value: SelectedPageValueType) => void;
  heading: string;
  imgUrl: string;
};

// export default function NavLink({
//   selectedPage,
//   setSelectedPage,
//   children,
//   page,
// }: NavLinkProps) {
//   const lowerCasePage = page
//     .toLowerCase()
//     .replace(/ /g, "") as SelectedPageValueType;

//   return (
//     <AnchorLink
//       href={`#${lowerCasePage}`}
//       onClick={() => setSelectedPage(lowerCasePage)}
//       className="tracking-wide py-9 sm:py-12  uppercase font-orbitron md:text-4xl sm:text-3xl text-2xl border-b"
//     >
//       {children}
//     </AnchorLink>
//   );
// }

export default function NavLink({
  selectedPage,
  setSelectedPage,
  page,
  heading,
  imgUrl,
}: NavLinkProps) {
  const lowerCasePage = page
    .toLowerCase()
    .replace(/ /g, "") as SelectedPageValueType;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className="group tracking-wide py-9 sm:py-12 uppercase font-orbitron md:text-4xl sm:text-3xl text-2xl border-b-2 border-neutral-500 hover:border-primary-text relative transition-colors duration-500 text-neutral-400 hover:text-primary-text"
    >
      <div className="flex justify-between items-center ">
        <div className="group-hover:text-primary-text">{heading}</div>
        {/* ADD IMAGE HERE */}
        <div>
          <GoArrowRight className="h-10 w-10" />
        </div>
      </div>
    </AnchorLink>
  );
}
