import { Navigation } from "../interfaces/SidebarItem";

export const NavigationMockData: Navigation[] = [
    {
        label: 'Dashboard',
        icon: 'fa-solid fa-gauge menu-icon',
        route: 'index.html',
        isActive: true,
        subNavigations: []
    },
    {
        label: 'Task',
        icon: 'fa-solid fa-tasks menu-icon',
        route: 'index.html',
        isActive: false,
        subNavigations: [
            {
                label: 'Personal',
                route: ''
            },
            {
                label: 'Ad hoc',
                route: ''
            }
        ]
    },
    {
        label: 'Reports',
        icon: 'fa-solid fa-edit menu-icon',
        route: 'index.html',
        isActive: false,
        subNavigations: []
    },
    {
        label: 'Creators Hub',
        icon: 'fa-solid fa-desktop menu-icon',
        route: 'index.html',
        isActive: false,
        subNavigations: []
    },
    {
        label: 'Tickets',
        icon: 'fa-solid fa-ticket menu-icon',
        route: 'index.html',
        isActive: false,
        subNavigations: []
    },
    {
        label: 'Approval',
        icon: 'fa-solid fa-thumbs-up menu-icon',
        route: 'index.html',
        isActive: false,
        subNavigations: []
    },
    {
        label: 'Files',
        icon: 'fa-solid fa-file-text menu-icon',
        route: 'index.html',
        isActive: false,
        subNavigations: []
    },
    {
        label: 'Comments and Notes',
        icon: 'fa-solid fa-comments menu-icon',
        route: 'index.html',
        isActive: false,
        subNavigations: []
    },
    {
        label: 'Market Place',
        icon: 'fa-solid fa-shopping-bag menu-icon',
        route: 'index.html',
        isActive: false,
        subNavigations: []
    },
    {
        label: 'Contacts',
        icon: 'fa-solid fa-phone-square menu-icon',
        route: 'index.html',
        isActive: false,
        subNavigations: []
    },
    {
        label: 'Settings',
        icon: 'fa-solid fa-cogs menu-icon',
        route: 'index.html',
        isActive: false,
        subNavigations: []
    },
    {
        label: 'Content Library',
        icon: 'fa-solid fa-book menu-icon',
        route: 'index.html',
        isActive: false,
        subNavigations: []
    },
    {
        label: 'Backup',
        icon: 'fa-solid fa-database menu-icon',
        route: 'index.html',
        isActive: false,
        subNavigations: []
    },
    {
        label: 'Client Admin Tab',
        icon: 'fa-solid fa-user menu-icon',
        route: 'index.html',
        isActive: false,
        subNavigations: []
    }
    
]