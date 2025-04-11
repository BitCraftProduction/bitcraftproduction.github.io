import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "BitCraft Production",
  DESCRIPTION: "Welcome to BitCraft Production, a portfolio and blog for designers and developers.",
  AUTHOR: "Ganesh Kumar",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "bitcraftproduction@gmail.com",
    HREF: "mailto:bitcraftproduction@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "bitcraftproduction",
    HREF: "https://github.com/bitcraftproduction"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "bitcraftproduction",
    HREF: "https://www.linkedin.com/in/bitcraftproduction/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "bitcraftproduction",
    HREF: "https://twitter.com/bitcraftproduction",
  },
]

