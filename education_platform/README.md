# EduLearn - Educational Website

A complete responsive educational website built with HTML, CSS, and JavaScript, designed to showcase an online learning platform.

## Project Overview

EduLearn is a modern, responsive educational website that demonstrates best practices in web development. The site features a clean design, interactive elements, and comprehensive content about online learning services.

## Features

### Pages
- **Homepage (index.html)**: Features an image slider, welcome content, and call-to-action sections
- **About (about.html)**: Company mission, values, team information, and statistics table
- **Courses (courses.html)**: Course catalog with detailed table and category information
- **Gallery (gallery.html)**: Image gallery with thumbnails and modal functionality
- **Contact (contact.html)**: Contact form with JavaScript validation and company information

### Technical Features
- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Image Slider**: Auto-advancing carousel with manual navigation controls
- **Form Validation**: Real-time JavaScript validation for contact form
- **Gallery Modal**: Click-to-expand image functionality
- **Smooth Animations**: CSS transitions and hover effects
- **Accessibility**: Proper alt text, keyboard navigation, and semantic HTML

## File Structure

```
itassessement2024/
├── index.html              # Homepage
├── about.html              # About page
├── courses.html            # Courses page
├── gallery.html            # Gallery page
├── contact.html            # Contact page
├── css/
│   └── main.css           # Main stylesheet
├── js/
│   └── script.js          # JavaScript functionality
├── images/
│   ├── slide1.jpg         # Homepage slider images
│   ├── slide2.jpg
│   ├── slide3.jpg
│   └── gallery/
│       ├── large/         # Full-size gallery images
│       └── thumbs/        # Thumbnail images
├── README.md              # This file
└── sitemap.md            # Website sitemap
```

## Technologies Used

- **HTML5**: Semantic markup and modern web standards
- **CSS3**: Flexbox, Grid, animations, and responsive design
- **JavaScript (ES6+)**: Form validation, slider functionality, and interactive features
- **No frameworks**: Pure vanilla JavaScript and CSS for maximum compatibility

## Design Specifications

- **Maximum Width**: 1200px container width
- **Color Scheme**: 
  - Primary: #3498db (Blue)
  - Secondary: #2c3e50 (Dark Blue)
  - Accent: #e74c3c (Red)
  - Background: #ffffff (White)
- **Typography**: Segoe UI font family with responsive sizing
- **Responsive Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized images with appropriate sizing
- Minimal HTTP requests
- Efficient CSS and JavaScript
- Fast loading times (optimized for 56kbps connections)

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- High contrast color scheme
- Screen reader friendly

## Deployment Instructions

### GitHub Pages Deployment

1. **Create GitHub Repository**
   ```bash
   # Create a new repository named 'itassessement2024' on GitHub
   # Clone the repository locally
   git clone https://github.com/yourusername/itassessement2024.git
   cd itassessement2024
   ```

2. **Add Website Files**
   ```bash
   # Copy all website files to the repository
   # Ensure the following structure:
   # - index.html (in root directory)
   # - All other HTML files in root
   # - css/ directory with main.css
   # - js/ directory with script.js
   # - images/ directory with all images
   ```

3. **Commit and Push**
   ```bash
   git add .
   git commit -m "Initial website deployment"
   git push origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

5. **Access Your Site**
   - Your site will be available at: `https://yourusername.github.io/itassessement2024/`
   - It may take a few minutes for the site to become available

### Alternative Deployment Options

#### Netlify
1. Drag and drop the project folder to Netlify
2. Your site will be automatically deployed with a random URL
3. You can customize the domain name in settings

#### Vercel
1. Connect your GitHub repository to Vercel
2. Automatic deployment on every push to main branch
3. Custom domain configuration available

#### Traditional Web Hosting
1. Upload all files via FTP to your web server
2. Ensure index.html is in the root directory
3. Verify all file paths are correct

## Development Setup

### Local Development
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/itassessement2024.git
   cd itassessement2024
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for better development experience:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Access locally**
   - Open `http://localhost:8000` in your browser

### Making Changes
1. Edit HTML, CSS, or JavaScript files
2. Refresh browser to see changes
3. Test on different screen sizes using browser dev tools
4. Commit and push changes to deploy

## Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Image slider functions properly
- [ ] Contact form validation works
- [ ] Gallery modal opens and closes
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] All images have alt text
- [ ] External links open in new tabs
- [ ] Email links work correctly
- [ ] No JavaScript errors in console

## Maintenance

### Regular Updates
- Check for broken links monthly
- Update content as needed
- Monitor site performance
- Test on new browser versions

### Content Updates
- Images: Replace files in `/images/` directory
- Text: Edit HTML files directly
- Styling: Modify `/css/main.css`
- Functionality: Update `/js/script.js`

## Support

For technical support or questions about this website:
- Email: info@edulearn.com
- Documentation: This README file
- Issues: Create GitHub issues for bug reports

## License

This project is created for educational purposes. All images used are for demonstration only.

---

**Project Created**: 2024
**Last Updated**: 2024
**Version**: 1.0.0

