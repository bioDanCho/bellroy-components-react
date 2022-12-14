import React, { createContext, useContext, useState, useEffect } from 'react';
import cart1 from '../assets/images/CartImages/cart1.jpeg';
import cart2 from '../assets/images/CartImages/cart2.jpeg';
import cart3 from '../assets/images/CartImages/cart3.jpeg';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
    const [isMobileView, setIsMobileView] = useState(
        window.matchMedia('(max-width: 768px)').matches
    );

    useEffect(() => {
        window
            .matchMedia('(max-width: 768px)')
            .addEventListener('change', (e) => setIsMobileView(e.matches));
    }, []);

    const [isTabletView, setIsTabletView] = useState(
        window.matchMedia('(max-width: 1024px)').matches
    );

    useEffect(() => {
        window
            .matchMedia('(max-width: 768px)')
            .addEventListener('change', (e) => setIsTabletView(e.matches));
    }, []);

    const [filters, setFilters] = useState({
        Color: [],
        Category: [],
        Feature: [],
        Storage: [],
        'Bag size': [],
        Use: [],
        Material: [],
    });

    const resetFilters = () => {
        setFilters({
            Color: [],
            Category: [],
            Feature: [],
            Storage: [],
            'Bag size': [],
            Use: [],
            Material: [],
        });
    };

    // useEffect(() => {
    //     console.log(filters);
    // }, [filters]);

    const [cartData, setCartData] = useState([
        {
            id: 'cart1',
            imgUrl: cart1,
            title: 'Tokyo Work Bag',
            color: 'State',
            finish: 'Ribba Weave',
            size: '16 inch',
            price: 229,
            quantity: 1,
        },
        {
            id: 'cart2',
            imgUrl: cart2,
            title: 'Apex Note Sleeve',
            color: 'Indigo',
            finish: 'Leather',
            price: 199,
            quantity: 1,
        },
        {
            id: 'cart3',
            imgUrl: cart3,
            title: 'Classic Backpack Plus - Second Edition',
            color: 'Ranger Green',
            finish: 'Baida Nylon',
            price: 209,
            quantity: 1,
        },
    ]);

    const [newsletterEmail, setNewsletterEmail] = useState('');

    return (
        <AppContext.Provider
            value={{
                isMobileView,
                isTabletView,
                filters,
                setFilters,
                resetFilters,
                cartData,
                setCartData,
                newsletterEmail,
                setNewsletterEmail,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
