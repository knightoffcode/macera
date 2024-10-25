import React from 'react';

import { BiMapPin, BiSearch } from 'react-icons/bi';
import { CiMenuBurger } from 'react-icons/ci';
import { GrUpdate } from 'react-icons/gr';

import Logo from "../../assets/Logo/Logo.png";

/**
 *
 * @returns
 */

function Header() {

    const menuPages = [
        {
            id: '01',
            page: 'Home',
            url: '/',
            subPages: [
                {
                    id: null,
                    name: null,
                    url: null
                }
            ]
        },
        {
            id: '02',
            page: 'Tour',
            url: '/',
            subPages: [
                {
                    id: '021',
                    name: 'Page 01',
                    url: '/021'
                }
            ]
        },
        {
            id: '03',
            page: 'History',
            url: '/',
            subPages: [
                {
                    id: '031',
                    name: 'Page 03',
                    url: '/031'
                }
            ]
        },
        {
            id: '03',
            page: 'Culinary',
            url: '/',
            subPages: [
                {
                    id: '031',
                    name: 'Page 03',
                    url: '/031'
                }
            ]
        },
        {
            id: '03',
            page: 'Blog',
            url: '/',
            subPages: [
                {
                    id: '031',
                    name: 'Page 03',
                    url: '/031'
                }
            ]
        }
    ]
    return (
        <header className='header'>
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <span className='header__logo__icon'>{/* Vega Retailers */}</span>
                    <img src={Logo} alt="" className="header__logo__image" />
                    <h1 className='header__logo__title'>Vega retailers</h1>
                </div>
                <nav className='header__menu'>
                    <button className='header__menu__cep'>
                        <BiMapPin className='header__link__icon' />
                        Informe seu CEP
                    </button>
                    <ul className='header__menu__list'>
                        {menuPages.map((page, index) => (
                            <div key={index} className='header__menu__item'>
                                <li className='header__item'>
                                    <a href={page.url} className='header__link'>
                                        {page.page}
                                    </a>
                                </li>
                            </div>
                        ))}
                    </ul>
                    <a className='header__menu__recent'>
                        <GrUpdate />
                        Recém vistos
                    </a>
                </nav>
                <nav className='header__nav'>
                    <ul className='header__list'>
                        <li className='header__item header__item--user'>
                            <div className='header__search'>
                                <input
                                    type='text'
                                    className='header__input'
                                    placeholder='Digite sua busca'
                                />
                            </div>
                            <a href='/contact' className='header__link header__link--user'>
                                <BiSearch className='header__link__icon header__link__icon--user' />
                            </a>
                        </li>
                    </ul>
                    <button className='header__menumobile'>
                        <CiMenuBurger />
                    </button>
                </nav>

            </div>
        </header>
    );
};

export default Header;
