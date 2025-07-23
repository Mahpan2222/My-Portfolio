# Mahdi Panahi Portfolio - README

## Overview
This is a professional static portfolio webpage for Mahdi Panahi, a second-year Computer Engineering student specializing in Data Engineering at Halmstad University. The portfolio features advanced CSS animations, 3D graphics using Three.js, and modern web design principles.

## Features
- **3D Particle Background**: Animated particle system using Three.js in the hero section
- **Advanced CSS Animations**: Smooth transitions, hover effects, and GSAP animations
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **Modern UI/UX**: Professional dark theme with gradient accents
- **Interactive Elements**: Hover effects on project cards, skill bars, and navigation
- **Smooth Scrolling**: Seamless navigation between sections

## Technologies Used
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Advanced styling with Flexbox/Grid, animations, and responsive design
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Three.js**: 3D graphics and particle system
- **GSAP**: High-performance animations
- **Google Fonts**: Montserrat and Open Sans typography

## File Structure
```
mahdi-portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality and 3D effects
└── README.md           # This file
```

## Sections
1. **Hero Section**: Introduction with animated 3D particle background
2. **About Section**: Personal introduction and key statistics
3. **Projects Section**: Featured data engineering projects with hover effects
4. **Skills Section**: Technical skills with animated progress bars
5. **Education Section**: Academic background (course details to be added)
6. **Contact Section**: Professional contact links

## Customization Instructions

### Adding Course Details
The education section has a placeholder for course details. To add your specific courses:

1. Open `index.html`
2. Find the section with class `courses-placeholder`
3. Replace the placeholder text with your actual courses

Example:
```html
<div class="courses-placeholder">
    <h5>Relevant Courses:</h5>
    <ul>
        <li>Algorithms and Data Structures</li>
        <li>Database Systems</li>
        <li>Machine Learning Fundamentals</li>
        <li>Software Engineering</li>
        <!-- Add more courses as needed -->
    </ul>
</div>
```

### Updating Contact Information
To update contact links:

1. Open `index.html`
2. Find the contact section
3. Update the `href` attributes with your actual contact information:
   - Email: Replace `mailto:your.email@example.com`
   - LinkedIn: Replace `https://linkedin.com/in/yourprofile`
   - GitHub: Replace `https://github.com/yourusername`

### Adding a Professional Photo
To add your professional photo:

1. Add your photo file to the portfolio directory
2. Open `index.html`
3. Find the `image-placeholder` div in the about section
4. Replace it with:
```html
<div class="about-image">
    <img src="your-photo.jpg" alt="Mahdi Panahi" class="profile-image">
</div>
```

5. Add corresponding CSS in `styles.css`:
```css
.profile-image {
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
```

### Updating Project Links
To add actual project links:

1. Open `index.html`
2. Find the project cards
3. Update the `href` attributes in the project links to point to your actual projects

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance Notes
- The 3D particle system is optimized for performance
- Animations use hardware acceleration where possible
- Responsive images and optimized loading

## Deployment
This is a static website that can be deployed to any web hosting service:
- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting

Simply upload all files to your web server or hosting platform.

## License
This portfolio template is created for Mahdi Panahi. Feel free to use and modify as needed.

## Support
For any questions or modifications, refer to the documentation of the libraries used:
- [Three.js Documentation](https://threejs.org/docs/)
- [GSAP Documentation](https://greensock.com/docs/)
- [MDN Web Docs](https://developer.mozilla.org/) for HTML/CSS/JavaScript reference

