/*
  # Seed Initial Portfolio Data

  1. Sample Projects
    - Landing Page Project
    - Add more sample projects

  2. Sample Skills
    - Web Development
    - Mobile Development
    - Design

  This migration populates the database with initial portfolio data.
*/

-- Insert sample projects
INSERT INTO projects (title, description, image_url, project_url, github_url, technologies, featured) VALUES
(
  'Landing Page Project',
  'Modern landing page with responsive design and engaging animations. Built with clean HTML5, CSS3, and JavaScript for optimal performance.',
  'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
  'https://jep-point.vercel.app',
  'https://github.com/BangJepp56',
  ARRAY['HTML5', 'CSS3', 'JavaScript'],
  true
),
(
  'E-Commerce Platform',
  'Full-stack e-commerce solution with Laravel backend and modern frontend. Features include user authentication, payment integration, and admin dashboard.',
  'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
  null,
  'https://github.com/BangJepp56',
  ARRAY['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
  true
),
(
  'Mobile Task Manager',
  'Cross-platform mobile application built with Flutter. Features task management, notifications, and cloud synchronization.',
  'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg',
  null,
  'https://github.com/BangJepp56',
  ARRAY['Flutter', 'Dart', 'Firebase'],
  false
);

-- Insert sample skills
INSERT INTO skills (category, name, description, technologies, icon) VALUES
(
  'Web Development',
  'Full Stack Development',
  'Proficient in modern web technologies and frameworks for both frontend and backend development',
  ARRAY['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Laravel', 'Filament'],
  'code'
),
(
  'Mobile Development',
  'Cross-Platform Apps',
  'Creating responsive and intuitive mobile applications for iOS and Android platforms',
  ARRAY['Flutter', 'Dart'],
  'smartphone'
),
(
  'Design',
  'UI/UX Design',
  'Creating visually appealing and user-friendly interfaces with focus on user experience',
  ARRAY['UI/UX Design', 'Photoshop', 'Canva', 'Figma'],
  'palette'
);