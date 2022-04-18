export interface Navigation {
    label: string;
    route: string;
    icon: string;
    isActive: boolean;
    subNavigations: SubNavigation[];
}

export interface SubNavigation {
    label: string;
    route: string;
}