import { Service, PortfolioProject, PortfolioCategory, TeamMember, JobOpening } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Career', path: '/career' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES_DATA: Service[] = [
  {
    name: 'Virtual Production',
    description: 'Cutting-edge real-time environments and 3D assets for immersive storytelling. We bridge the gap between physical and digital worlds.',
    imageUrl: 'https://picsum.photos/seed/vp/1600/900',
  },
  {
    name: 'Automotive Visualization',
    description: 'Photorealistic renders and cinematic animations for automotive marketing. Showcasing every curve and detail with breathtaking realism.',
    imageUrl: 'https://picsum.photos/seed/automotive/1600/900',
  },
  {
    name: 'Architectural Visualization',
    description: 'High-fidelity 3D environments that bring architectural designs to life. Experience spaces before they are built with our immersive visuals.',
    imageUrl: 'https://picsum.photos/seed/archviz/1600/900',
  },
];

export const PORTFOLIO_DATA: PortfolioProject[] = [
  { 
    id: 1, 
    title: 'Project Nebula', 
    category: PortfolioCategory.VIRTUAL_PRODUCTION, 
    thumbnailUrl: 'https://picsum.photos/seed/nebula/600/800',
    heroImage: 'https://picsum.photos/seed/nebula-hero/1920/1080',
    description: 'Project Nebula was a groundbreaking short film that utilized our virtual production pipeline to create a seamless blend of live-action and CGI. We built a vast alien world in Unreal Engine 5, allowing the director to visualize and capture complex sequences in real-time on set.',
    technologies: ['Unreal Engine 5', 'Motion Capture', 'LED Volume', 'Blender'],
    gallery: [
      'https://picsum.photos/seed/nebula-g1/1200/800',
      'https://picsum.photos/seed/nebula-g2/1200/800',
      'https://picsum.photos/seed/nebula-g3/1200/800',
    ],
  },
  { 
    id: 2, 
    title: 'Corsa GT', 
    category: PortfolioCategory.AUTOMOTIVE, 
    thumbnailUrl: 'https://picsum.photos/seed/corsa/800/600',
    heroImage: 'https://picsum.photos/seed/corsa-hero/1920/1080',
    description: 'For the launch of the Corsa GT, we crafted a series of photorealistic renders and a dynamic animation. The focus was on capturing the vehicle\'s aggressive design and luxurious interior, set against dramatic, natural landscapes to evoke a sense of freedom and power.',
    technologies: ['3ds Max', 'V-Ray', 'After Effects', 'Photoshop'],
    gallery: [
      'https://picsum.photos/seed/corsa-g1/1200/800',
      'https://picsum.photos/seed/corsa-g2/1200/800',
      'https://picsum.photos/seed/corsa-g3/1200/800',
    ],
  },
  { 
    id: 3, 
    title: 'Skyline Tower', 
    category: PortfolioCategory.ARCHVIZ, 
    thumbnailUrl: 'https://picsum.photos/seed/skyline/600/800',
    heroImage: 'https://picsum.photos/seed/skyline-hero/1920/1080',
    description: 'We brought the architectural vision of Skyline Tower to life with a suite of high-fidelity visualizations. This included an interactive 3D tour for potential buyers and a collection of stunning still renders that highlighted the building\'s integration with the urban environment and its luxurious amenities.',
    technologies: ['Cinema 4D', 'Corona Renderer', 'Unity', 'SketchUp'],
    gallery: [
      'https://picsum.photos/seed/skyline-g1/1200/800',
      'https://picsum.photos/seed/skyline-g2/1200/800',
      'https://picsum.photos/seed/skyline-g3/1200/800',
    ],
  },
  { 
    id: 4, 
    title: 'Cyber Runner', 
    category: PortfolioCategory.VIRTUAL_PRODUCTION, 
    thumbnailUrl: 'https://picsum.photos/seed/cyber/800/600',
    heroImage: 'https://picsum.photos/seed/cyber-hero/1920/1080',
    description: 'A cinematic trailer for a next-gen video game, Cyber Runner was produced entirely within our virtual production ecosystem. We captured dynamic character performances and integrated them into a sprawling, neon-drenched cyberpunk city, delivering a high-octane visual experience.',
    technologies: ['Unreal Engine 5', 'Character Creator', 'Faceware', 'DaVinci Resolve'],
    gallery: [
      'https://picsum.photos/seed/cyber-g1/1200/800',
      'https://picsum.photos/seed/cyber-g2/1200/800',
      'https://picsum.photos/seed/cyber-g3/1200/800',
    ],
  },
  { 
    id: 5, 
    title: 'Elysian Villa', 
    category: PortfolioCategory.ARCHVIZ, 
    thumbnailUrl: 'https://picsum.photos/seed/villa/800/600',
    heroImage: 'https://picsum.photos/seed/villa-hero/1920/1080',
    description: 'This project involved creating a set of marketing visuals for a luxury coastal property. Our team focused on photorealism, particularly in lighting and material definition, to convey the serene and opulent atmosphere of the Elysian Villa.',
    technologies: ['Revit', '3ds Max', 'V-Ray', 'Forest Pack'],
    gallery: [
      'https://picsum.photos/seed/villa-g1/1200/800',
      'https://picsum.photos/seed/villa-g2/1200/800',
      'https://picsum.photos/seed/villa-g3/1200/800',
    ],
  },
  { 
    id: 6, 
    title: 'VisionX Concept', 
    category: PortfolioCategory.AUTOMOTIVE, 
    thumbnailUrl: 'https://picsum.photos/seed/visionx/600/800',
    heroImage: 'https://picsum.photos/seed/visionx-hero/1920/1080',
    description: 'A confidential project for a major automotive brand, VisionX involved visualizing a futuristic concept car. Our renders were used for internal design reviews and later adapted for a public teaser campaign, emphasizing the car\'s innovative technology and sleek aerodynamics.',
    technologies: ['Alias', 'VRED', 'Nuke', 'Photoshop'],
    gallery: [
      'https://picsum.photos/seed/visionx-g1/1200/800',
      'https://picsum.photos/seed/visionx-g2/1200/800',
      'https://picsum.photos/seed/visionx-g3/1200/800',
    ],
  },
  { 
    id: 7, 
    title: 'The Void', 
    category: PortfolioCategory.VIRTUAL_PRODUCTION, 
    thumbnailUrl: 'https://picsum.photos/seed/void/600/800',
    heroImage: 'https://picsum.photos/seed/void-hero/1920/1080',
    description: 'An experimental VR experience, "The Void" transports users to an abstract, ever-changing world. We leveraged real-time particle effects and procedural generation to create an immersive and deeply personal journey into the unknown.',
    technologies: ['Unity', 'Houdini', 'Oculus SDK', 'Substance Painter'],
    gallery: [
      'https://picsum.photos/seed/void-g1/1200/800',
      'https://picsum.photos/seed/void-g2/1200/800',
      'https://picsum.photos/seed/void-g3/1200/800',
    ],
  },
  { 
    id: 8, 
    title: 'Aqua Racer', 
    category: PortfolioCategory.AUTOMOTIVE, 
    thumbnailUrl: 'https://picsum.photos/seed/aqua/800/600',
    heroImage: 'https://picsum.photos/seed/aqua-hero/1920/1080',
    description: 'For Aqua Racer, a high-speed watercraft, we created an action-packed promotional video. The challenge was simulating realistic water dynamics and spray, which we achieved using advanced fluid simulation techniques to create a thrilling and visceral viewing experience.',
    technologies: ['Maya', 'Phoenix FD', 'V-Ray', 'After Effects'],
    gallery: [
      'https://picsum.photos/seed/aqua-g1/1200/800',
      'https://picsum.photos/seed/aqua-g2/1200/800',
      'https://picsum.photos/seed/aqua-g3/1200/800',
    ],
  },
];

export const TEAM_DATA: TeamMember[] = [
  { name: 'Alex Drake', role: 'Founder & Creative Director', bio: 'With over 15 years in VFX, Alex leads SOL CGI with a passion for pushing creative boundaries.', imageUrl: 'https://picsum.photos/seed/alex/400/400' },
  { name: 'Jasmine Kaur', role: 'Head of Production', bio: 'Jasmine orchestrates complex projects with precision, ensuring seamless delivery from concept to final render.', imageUrl: 'https://picsum.photos/seed/jasmine/400/400' },
  { name: 'Leo Chen', role: 'Lead 3D Artist', bio: 'A master of light and texture, Leo brings worlds to life with his incredible attention to detail.', imageUrl: 'https://picsum.photos/seed/leo/400/400' },
  { name: 'Sofia Rossi', role: 'Virtual Production Supervisor', bio: 'Sofia pioneers our real-time workflows, merging technology and artistry on the virtual stage.', imageUrl: 'https://picsum.photos/seed/sofia/400/400' },
];

export const CAREERS_DATA: JobOpening[] = [
  {
    id: 1,
    title: 'Senior 3D Artist',
    location: 'Metacity / Remote',
    type: 'Full-time',
    description: 'We are looking for a highly skilled Senior 3D Artist to create high-quality assets for our virtual production and visualization projects. You will work on characters, environments, and props, ensuring they meet our artistic and technical standards.',
    responsibilities: [
      'Model, texture, and light high-quality 3D assets.',
      'Collaborate with the art director and technical artists to establish and maintain visual standards.',
      'Mentor junior artists and provide constructive feedback.',
      'Optimize assets for real-time rendering in Unreal Engine.',
      'Contribute to look development and pipeline improvements.'
    ],
    qualifications: [
      '5+ years of experience as a 3D artist in film, games, or VFX.',
      'Expert proficiency in Maya, ZBrush, Substance Painter, and Photoshop (or equivalent).',
      'Strong understanding of PBR workflows and material creation.',
      'Experience with Unreal Engine 5 is highly desirable.',
      'Excellent artistic eye for detail, composition, and color.'
    ]
  },
  {
    id: 2,
    title: 'Unreal Engine Developer',
    location: 'Metacity',
    type: 'Full-time',
    description: 'Join our team to develop and optimize real-time workflows in Unreal Engine. You will be responsible for creating interactive experiences, building tools for artists, and pushing the boundaries of what\'s possible in virtual production.',
     responsibilities: [
      'Develop and maintain core systems for our virtual production pipeline in UE5.',
      'Create custom tools, Blueprints, and editor utilities to improve artist workflows.',
      'Collaborate with artists to implement real-time visual effects and interactive features.',
      'Optimize scene performance for real-time rendering on LED volumes.',
      'Integrate third-party hardware and software into our Unreal Engine pipeline.'
    ],
    qualifications: [
      '3+ years of professional experience with Unreal Engine.',
      'Strong C++ and Blueprint scripting skills.',
      'Experience with real-time rendering, profiling, and optimization techniques.',
      'Familiarity with virtual production concepts (nDisplay, Live Link, etc.) is a plus.',
      'Strong problem-solving skills and ability to work in a collaborative, fast-paced environment.'
    ]
  },
  {
    id: 3,
    title: 'Junior Motion Graphics Artist',
    location: 'Metacity',
    type: 'Contract',
    description: 'A creative individual with a passion for animation and visual effects. You will assist in creating compelling motion graphics for trailers, marketing materials, and in-project UI elements, working closely with our creative director.',
    responsibilities: [
      'Design and animate 2D/3D graphics for various projects.',
      'Assist with compositing and visual effects tasks.',
      'Collaborate with the creative team to develop concepts and storyboards.',
      'Prepare and manage assets for animation.',
      'Ensure brand consistency across all visual materials.'
    ],
    qualifications: [
      '1+ years of experience or a strong portfolio in motion graphics.',
      'Proficiency in Adobe After Effects, Illustrator, and Photoshop.',
      'Experience with 3D software (Cinema 4D, Blender) is a major plus.',
      'A keen eye for design, typography, and composition.',
      'Ability to take direction and work effectively in a team environment.'
    ]
  }
];