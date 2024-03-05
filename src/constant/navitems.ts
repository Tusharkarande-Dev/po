interface NavItem {
  id:number;
  navName: string;
  path: string;
}

export const navItems: NavItem[] = [
  {
      
    id: 1,  
    navName: "HOME",
      path: "#",
  },
  {
    id: 2,  
    navName: "ABOUT",
      path: "#about",
  },
  {
    id: 3,  
    navName: "PROJECTS",
      path: "#projects",
  },
  {
    id: 4,  
    navName: "CONTACT",
      path: "#contact",
  }
];
