import React from 'react'

// Single Page Applications (SPAs) with client-side routing (like those that use react-router-dom) don't cause full page reloads 
// when navigating between routes. So, if a user scrolls down on one page and then navigates to another page, the new page might 
// start from where the user left off on the previous page (scrolled down) rather than from the top. This can be disorienting and 
// isn't always the desired user experience.

// To solve this, the ScrollToTop component provides a way to mimic the traditional web behavior, ensuring that every "new page" 
// (route change) starts from the top. This creates a more consistent and intuitive user experience.



export default function ScrollToTop() {
  return (
    <div>ScrollToTop</div>
  )
}
