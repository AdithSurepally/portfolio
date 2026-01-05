# How to Edit Your Portfolio Website

Welcome to your portfolio! This guide will walk you through editing its content. All the information is stored in a single file, making it easy to update without touching any complex code.

**The only file you need to edit is `data/portfolioData.ts`**.

---

## 1. Finding the Data File

Navigate to the file located at: `data/portfolioData.ts`. Open this file in your editor to begin.

---

## 2. Editing Core Content

This section covers the main parts of your portfolio that you'll want to keep current.

### Personal Information & Profile Picture

Find the `personalInfo` section. Here you can change your name, title, email, phone, and the summary paragraphs.

```javascript
personalInfo: {
  name: 'Your Name Here',
  title: 'Your Job Title',
  email: 'your.email@example.com',
  phone: '+1 123-456-7890',
  summary: 'Your professional summary goes here...',
  profilePicUrl: '/images/your-photo.jpg', // <-- Update this path
  aboutMe: "A short paragraph about your passion and goals.",
},
```

### Hero Section Background

You can customize the background of the main hero section at the top of the homepage.

```javascript
personalInfo: {
  // ... other properties
  hero: {
    backgroundImageUrl: '/images/hero-background.jpg', // Path to your background image
    contentBoxColor: 'rgba(255, 255, 255, 0.92)',     // Background color of the text box
  },
},
```

-   `backgroundImageUrl`: Change this path to your desired background image.
-   `contentBoxColor`: This sets the background color and transparency of the content box where your name and title appear. It uses the `rgba()` format.
    -   The first three numbers are for the color (Red, Green, Blue from 0 to 255).
    -   The last number is the opacity (from 0.0 for fully transparent to 1.0 for fully opaque).
    -   **For a near-solid white box:** Use `rgba(255, 255, 255, 0.92)`.
    -   **For a darker, semi-transparent box:** Use `rgba(0, 0, 0, 0.75)`. Text color is always dark in this box.

### Professional Experience

Find the `experience` array. You can edit your job history here. To add a new role, simply copy an existing block (from `{` to `}`), paste it, and modify the details.

```javascript
experience: [
  {
    role: 'New Role Title',
    company: 'New Company',
    period: 'Month Year – Month Year',
    description: [
      'Responsibility or achievement 1.',
      'Responsibility or achievement 2.',
    ],
  },
  // ... other roles
],
```

### Projects

The `projects` array is where you showcase your work. You can add, remove, or edit your projects here. Each project has a unique `id` that should be a simple string with no spaces (e.g., `'my-new-project'`).

```javascript
{
  id: 'unique-project-id', // A unique ID, e.g., 'bgr-layout-v2'
  title: 'Title of Your New Project',
  subtitle: 'A short subtitle (e.g., University Project)',
  category: 'Training', // Can be 'Training', 'Engineering Project', 'Internship', or 'Casual'
  date: 'YYYY-MM-DD', // Used for sorting projects by timeline
  description: 'A detailed description of what the project was about.',
  schematicImg: '/images/your-schematic.png', // Path to your schematic image
  layoutImg: '/images/your-layout.png',     // Path to your layout image
  keyLearnings: [
    'First key learning from the project.',
    'Second key learning.',
  ],
  technologies: ['Tech 1', 'Tech 2', 'Tool Used'],
},
```

### Featuring Your Best Projects

The homepage displays a "Featured Projects" section. To control which projects appear here and in what order, find the `curiosityProjectIds` array.

1.  Find the `id` of the project you want to feature from the `projects` array.
2.  Add that `id` string into the `curiosityProjectIds` array.

```javascript
// Example: To feature the 'crypto-multiplier' and 'rfid-locker' projects
curiosityProjectIds: ['crypto-multiplier', 'rfid-locker'],
```

### Education & Skills

Find the `education` and `skills` arrays. You can edit these in the same way as the Experience section—by modifying the text or copying blocks to add new entries.

---

## 3. Working with Files & Links

This is a critical step! To ensure your images and resume work correctly, you must understand how file paths are handled.

### The `public` Folder: The Source of Truth

**Every local file you want to use on your website MUST be placed inside the `public` folder.**

This includes:
-   Your profile picture
-   The hero background image
-   All project images (schematics, layouts)
-   Your resume PDF

### The Golden Rule for Writing Paths

When you reference a file in `portfolioData.ts`, write the path **as if the `public` folder is the root of the website**. This means:

1.  Your path **must** start with a forward slash (`/`).
2.  You **must not** include `public/` in the path string.

---

**Example 1: Your Resume**

1.  **Place the file:** `public/Adith_Surepally_Resume.pdf`
2.  **Use this path in the data file:** `resumeUrl: '/Adith_Surepally_Resume.pdf',`

**Example 2: A Project Image**

1.  **Place the file:** `public/images/my-cool-layout.png`
2.  **Use this path in the data file:** `layoutImg: '/images/my-cool-layout.png',`

---

> **⚠️ Common Mistakes to Avoid**
>
> -   **Incorrect Path:** `resumeUrl: 'public/Adith_Surepally_Resume.pdf'` (Includes `public/`)
> -   **Incorrect Path:** `layoutImg: 'images/my-cool-layout.png'` (Missing the starting `/`)
> -   **Incorrect File Location:** Placing files anywhere *outside* the `public` folder. They will not be found by the website. If you add a new file, you may need to restart the application to see the change.

### Social Media Links

Find the `socialLinks` section. You can add or change links to your profiles.
**Supported Icons:** `LinkedIn`, `GitHub`, `Mail`, and `WhatsApp`.

```javascript
socialLinks: [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/your-profile' },
  { name: 'GitHub', url: 'https://github.com/your-username' },
  { name: 'Mail', url: 'mailto:your.email@example.com' },
  { name: 'WhatsApp', url: 'https://wa.me/yourphonenumber' },
],
```

---

## 4. Customizing Social Icons

If you want to use your own custom icons for the social media links, you can! The icons are stored as individual component files.

1.  **Navigate to the icons folder:** `components/icons/`
2.  **Find the icon you want to change.** For example, to change the Gmail icon, open `MailIcon.tsx`.
3.  **Replace the SVG code.** Inside the file, you will see an `<svg>...</svg>` block. You can replace this entire block with the code for your own SVG.

```javascript
// Example: Inside components/icons/MailIcon.tsx

import React from 'react';

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  // V-- REPLACE THIS ENTIRE SVG BLOCK --V
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    {/* ... path data for the icon ... */}
  </svg>
  // ^-- WITH YOUR OWN SVG CODE --^
);

export default MailIcon;
```

This gives you full control over the look and feel of your social media links.

That's it! After saving your changes, your website will automatically update with the new information or icons.