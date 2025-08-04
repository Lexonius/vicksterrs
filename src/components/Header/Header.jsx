import { LanguageSwitch, RootRouter } from "./components";
import { VicksterrsLogo } from "../../assets";

export const Header = () => {
  return (
    <div className='header'>
      <div>
        <VicksterrsLogo />
      </div>
      <RootRouter />
      <LanguageSwitch />
    </div>
  )
};