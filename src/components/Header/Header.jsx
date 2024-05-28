import { useState, useEffect } from 'react'
import s from '../Header/Header.module.scss'
import Sort from '../Sort/Sort'


const Header = ({ search, setSearch }) => {


    return (
        <header className={s.header}>
            <div className="container">

                <div className={s.header__main}>
                    <div className={s.header__main_right}>
                        <h1 className={s.header__main_name}>Меню</h1>
                        <Sort />

                    </div>
                    <div className={s.header__main_left}>
                        <h3 className={s.header__main_left_name}>Поиск:</h3>

                        <input
                            className={s.header__main_left_input}
                            type="text"
                            value={search}
                            placeholder='Введите блюдо или состав'
                            onChange={(event) => setSearch(event.target.value)}
                        />
                    </div>

                </div>

            </div>
        </header>
    )
}

export default Header