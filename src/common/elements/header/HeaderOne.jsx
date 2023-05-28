import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import MobileMenu from './MobileMenu';
import Nav from './Nav';


const HeaderOne = ({pClass, darkLogo, lightLogo, postData}) => {
    if (typeof window !== "undefined") {
        var colorMode = window.localStorage.getItem('color-mode');
    }

    const [showMMenu, SetShowMMenu] = useState(false);
    
    const MobileShowHandler = () => SetShowMMenu(true);  
    const MobileHideHandler = () => SetShowMMenu(false);  

    const [togglaClass, setTogglaClass] = useState(false);

   const toggleHandler = () => {
        setTogglaClass(active => !active);
   }
    
    return (
        <>
            <header className={`header axil-header ${pClass || ""}`}>
                <div className="header-wrap">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-12">
                            <div className="logo">
                                <Link href="/">
                                    <a>
                                        <Image
                                        className="dark-logo"
                                        width={141}
                                        height={37}
                                        src={(colorMode === "Dark" ? lightLogo || "/images/logo/logo-white2.webp" : darkLogo || "/images/logo/logo-white2.webp") || "/images/logo/logo-white2.webp" }
                                        alt="Blogar logo"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 d-none d-xl-block">
                            <div className="mainmenu-wrapper">
                                <nav className="mainmenu-nav">
                                    <Nav posts={postData}/>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-8 col-md-8 col-sm-9 col-12">
                            <div className="header-search text-end d-flex align-items-center">
                                <form className="header-search-form d-sm-block d-none">
                                    <div className="axil-search form-group">
                                        <button type="submit" className="search-button">
                                            <i className="fal fa-search" />
                                        </button>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search"
                                        />
                                    </div>
                                </form>
                                <div className="mobile-search-wrapper d-sm-none d-block">
                                    <button className="search-button-toggle" onClick={toggleHandler}>
                                        <i className="fal fa-search" />
                                    </button>
                                    <form className={`header-search-form ${togglaClass ? "open": ""}`}>
                                        <div className="axil-search form-group">
                                            <button type="submit" className="search-button">
                                                <i className="fal fa-search" />
                                            </button>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search"
                                            />
                                        </div>
                                    </form>
                                </div>
                                <ul className="metabar-block">
                                    <li className="icon">
                                        <Link href="#">
                                            <a>
                                                <i className="fas fa-bookmark" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="icon">
                                        <Link href="#">
                                            <a>
                                                <i className="fas fa-bell" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <Image
                                                width={40}
                                                height={40}
                                                src="data:image/jpeg;base64,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"
                                                alt="Author Images"
                                                />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                {/* Start Hamburger Menu  */}
                                <div className="hamburger-menu d-block d-xl-none">
                                    <div className="hamburger-inner">
                                        <div className="icon" onClick={MobileShowHandler}>
                                            <i className="fal fa-bars" />
                                        </div>
                                    </div>
                                </div>
                                {/* End Hamburger Menu  */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <MobileMenu menuShow={showMMenu} menuHide={MobileHideHandler}/>
        </>
    )
}

export default HeaderOne;


