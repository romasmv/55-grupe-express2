export const headerMenuData = [
    { href: '/', text: 'Home' },
    {
        href: '/about',
        text: 'About',
        subMenu: [
            { href: '#', text: 'Company' },
            { href: '/team', text: 'Team' },
        ],
    },
    {
        href: '/services',
        text: 'Services',
        subMenu: [
            { href: '#', text: 'Design' },
            { href: '#', text: 'Development' },
            { href: '#', text: 'UX' },
            { href: '#', text: 'Management' },
        ],
    },
    { href: '/register', text: 'Register' },
    { href: '/login', text: 'Login' },
];

export const contactInfoData = {
    title: 'Contact info',
    details: [
        { icon: 'fa fa-globe', text: '+370 6 1234567' },
        { icon: 'fa fa-globe', text: 'info@example.com' },
    ],
};

export const ourLocationData = {
    title: 'Our location',
    details: [
        { icon: 'fa fa-globe', text: 'Miestelis, Gatve 5, Lietuva' },
    ],
};

export const socialsData = {
    title: 'Social links',
    details: [
        { icon: 'fa fa-globe', href: '#' },
        { icon: 'fa fa-globe', href: '#' },
        { icon: 'fa fa-globe', href: '#' },
        { icon: 'fa fa-globe', href: '#' },
    ],
};