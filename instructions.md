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

To change your main profile picture, first place your image in the `public/images` folder, then update the `profilePicUrl` with the full path from the public root (e.g., `/images/your-photo.jpg`).

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

## 3. Updating Links & Files

**Important Note on Paths:** For your site to work reliably, all local files (images, your resume, favicon) **must** be placed inside the `public` folder. When you reference them in the data file, the path should start with a forward slash (`/`) and **not** include `public/`.

For example, a file located at `public/images/my-photo.jpg` should be referenced as `/images/my-photo.jpg`.

-   **File Location:** `public/images/my-photo.jpg` -> **Path in `portfolioData.ts`:** `'/images/my-photo.jpg'`
-   **File Location:** `public/My_Resume.pdf` -> **Path in `portfolioData.ts`:** `'/My_Resume.pdf'`

**Summary of Path Rules:**
-   **Correct:** `'/images/my-photo.jpg'` (starts with `/`, no `public`)
-   **Incorrect:** `'public/images/my-photo.jpg'`
-   **Incorrect:** `'images/my-photo.jpg'` (missing leading slash)

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

### Your Resume File

To update the resume downloadable from the buttons on the site:

1.  Place your new resume PDF file in the `public` folder.
2.  Find the `resumeUrl` in the data file and change the filename to match yours, starting with a `/`.

```javascript
// Example: If your file is named 'My_Resume_2025.pdf' and is in `public/`
resumeUrl: '/My_Resume_2025.pdf',
```

### Project Images

To add images for your projects (schematics, layouts, etc.):

1.  If it doesn't already exist, create a folder named `images` inside the `public` folder.
2.  Place your project image files (e.g., `my_opamp_layout.png`) inside this `public/images` folder.
3.  In your project data, update the `schematicImg` and `layoutImg` paths to point to your new images.

```javascript
// Example: Use root-relative paths
schematicImg: '/images/my_opamp_schematic.png',
layoutImg: '/images/my_opamp_layout.png',
```

That's it! After saving the `data/portfolioData.ts` file, your website will automatically update with the new information.