import { Children } from "../../types/common";
import { Fragment } from "react/jsx-runtime";
import FooterLayout from "./footer/FooterLayout";
import HeaderLayout from "./header/HeaderLayout";

export default function MainLayout({children}: Children) {
    return <Fragment> <HeaderLayout />
                {children}
    <FooterLayout /> </Fragment>
}