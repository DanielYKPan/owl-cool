/**
 * side-nav-item.interface
 */

export interface SideNavItem {
    name: string;
    level: number;
    slug?: string;
    title?: string;
    children?: SideNavItem[];
}
