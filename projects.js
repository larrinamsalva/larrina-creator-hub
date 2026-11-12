/*
 * Larrina's Creative Universe — public link catalog.
 * Add/edit entries here only. External URLs are verified against supplied
 * project addresses and/or public repository READMEs where available.
 * Never add a private repository, unverified group, or personal contact detail.
 * Primary href must open the public app/game/music directly. If a project is
 * not hosted, leave href empty and set status:'local' so no dead launch link
 * appears. Optional sourceHref provides separate code/setup instructions.
 * Each project supports: id, name, category, description, badge, icon,
 * color, status, href, sourceHref, action, featured, and keywords.
 */
window.LARRINA_PROJECTS = [
  {
    id: 'larriverse', name: 'LarriVerse Arcade', category: 'games',
    description: 'Play growing worlds of science, dinosaur discovery, creativity, road safety, gardens and problem-solving. Free learning adventures with device-local progress.',
    badge: 'FREE TO PLAY', icon: '🎮', color: 'violet', status: 'public',
    href: 'https://larrinamsalva.github.io/larriverse-arcade/', sourceHref: 'https://github.com/larrinamsalva/larriverse-arcade', action: 'Play the arcade', featured: true,
    keywords: 'educational kids teens word search sudoku learning worlds play game dinosaurs dino science 3d'
  },
  {
    id: 'dino-discovery', name: 'Dino Discovery World · 3D', category: 'games',
    description: 'Pick any of eight science chapters from the start, including Fossil Dig. Explore 80 missions with smoother 3D dinosaurs, field-guide rewards and a free-choice mission menu.',
    badge: 'NEW · DINO ADVENTURE', icon: '🦕', color: 'teal', status: 'public',
    href: 'https://larrinamsalva.github.io/larriverse-arcade/games/dino-discovery-world/', sourceHref: 'https://github.com/larrinamsalva/larriverse-arcade', action: 'Explore Dino World', featured: true,
    keywords: 'dinosaur dinos paleontology prehistoric triassic jurassic cretaceous 3d fossils explorer science kids learning world'
  },
  {
    id: 'dino-trails', name: '3D Dinosaur Explorer Trails', category: 'games',
    description: 'Walk through Triassic, Jurassic and Cretaceous worlds, visit nine dinosaur and fossil stations, and save discoveries in your local trail journal. No account needed.',
    badge: 'EXPLORE IN 3D', icon: '🦖', color: 'teal', status: 'public',
    href: 'https://larrinamsalva.github.io/larriverse-arcade/games/dino-discovery-world/explore.html', sourceHref: 'https://github.com/larrinamsalva/larriverse-arcade', action: 'Walk the dinosaur trails', featured: true,
    keywords: 'dino explore walking trails triassic jurassic cretaceous fossil paleontology learning 3d'
  },
  {
    id: 'brainsweat', name: 'Brain Sweat Studio', category: 'games',
    description: 'Big ideas become playable lessons, missions and simulations that help curious minds practice real-world skills.',
    badge: 'LEARN BY DOING', icon: '🧠', color: 'teal', status: 'public',
    href: 'https://larrinamsalva.github.io/brainsweatstudios/', sourceHref: 'https://github.com/larrinamsalva/brainsweatstudios', action: 'Enter the studio', featured: true,
    keywords: 'kids teens classes road ready driving coding money games'
  },
  {
    id: 'chiptoons', name: 'ChipToons Studio', category: 'creative',
    description: 'Build original children’s cartoons from a thought, sketch or picture. Create characters, scenes, motion and sound, then export real WebM movies from your browser.',
    badge: 'NEW · CARTOON STUDIO', icon: '🎬', color: 'pink', status: 'public',
    href: 'https://larrinamsalva.github.io/ChipToons/', sourceHref: 'https://github.com/larrinamsalva/ChipToons', action: 'Open ChipToons Studio', featured: true,
    keywords: 'chiptoons animation cartoons children kids creator storyboard character drawing video export little fixers'
  },
  {
    id: 'forgeos-property', name: 'ForgeOS · Property Manager Demo', category: 'apps',
    description: 'Try a fictional-data guest tour of the RV park and property management workspace: sites, customers, meter readings, billing previews and work orders. This is a staging demo, not a real account or live billing system.',
    badge: 'STAGING · GUEST DEMO', icon: '🏘️', color: 'blue', status: 'public',
    href: 'https://forgeos-property-manager-staging.vercel.app/demo', sourceHref: 'https://github.com/larrinamsalva/ForgeOS-Property-Manager', action: 'Explore the ForgeOS demo', featured: true,
    keywords: 'forgeos rv park property manager sites units tenants customers reservations leases meters utility billing maintenance inventory guest demo'
  },
  {
    id: 'lms-business', name: 'LMS · Living Management System', category: 'apps',
    description: 'An open-source business-system builder with cleaning and property management examples, BuildPlan Studio, templates, branding and fictional demos. Currently runs locally; a public browser demo has not been confirmed.',
    badge: 'LOCAL DEMO · SETUP GUIDE', icon: '🧩', color: 'violet', status: 'local',
    href: '', setupHref: 'https://github.com/larrinamsalva/LMS#run-the-fictional-demo-locally',
    sourceHref: 'https://github.com/larrinamsalva/LMS',
    action: 'Open LMS setup guide', featured: true,
    keywords: 'lms living management system buildplan studio business templates property cleaning customizable local demo open source'
  },
  {
    id: 'family', name: 'Family Companion', category: 'apps',
    description: 'An approachable family wellness organizer for routines, reminders, journaling, relaxation and health information.',
    badge: 'WELLNESS', icon: '💜', color: 'pink', status: 'public',
    href: 'https://family-wellness-companion.larrina.chatgpt.site/', action: 'Explore the companion', featured: true,
    keywords: 'family wellness health medication reminders calendar journal'
  },
  {
    id: 'vibraheal', name: 'VibraHeal', category: 'apps',
    description: 'Relax, breathe and recharge with customizable tones, gentle nature sounds, guided breathing and private mindfulness tools.',
    badge: 'RELAX & RESET', icon: '🎧', color: 'teal', status: 'public',
    href: 'https://larrinamsalva.github.io/vibra-heal/', sourceHref: 'https://github.com/larrinamsalva/vibra-heal', action: 'Try VibraHeal', featured: true,
    keywords: 'vibraheal vibra heal relaxation mindfulness guided breathing frequencies tones sound nature rain ocean wind focus meditation wellness'
  },
  {
    id: 'scamalax', name: 'SCAM-A-LAX', category: 'apps',
    description: 'A people-first, local-first project for spotting scam warning signs and organizing reports and evidence.',
    badge: 'STAY SCAM SMART', icon: '🛡️', color: 'gold', status: 'public',
    href: 'https://larrinamsalva.github.io/SCAM-A-LAX/', sourceHref: 'https://github.com/larrinamsalva/SCAM-A-LAX', action: 'Open SCAM-A-LAX', featured: true,
    keywords: 'scams phishing consumer protection safety evidence anti fraud'
  },
  {
    id: 'field', name: 'Field Manager', category: 'apps',
    description: 'Business operations tools focused on jobs, scheduling, crews and the practical details of getting work done.',
    badge: 'BUSINESS TOOLS', icon: '🧰', color: 'blue', status: 'public',
    href: 'https://field-manager-website.vercel.app/', sourceHref: 'https://github.com/larrinamsalva/field-manager-website', action: 'Open Field Manager', featured: false,
    keywords: 'cleaning contractors scheduling dispatch estimates office'
  },
  {
    id: 'chip', name: 'Chip Nasty · Music', category: 'music',
    description: 'Original musical creations, energetic beats, and songs that celebrate the people and stories that matter.',
    badge: 'LISTEN IN', icon: '🎤', color: 'pink', status: 'public',
    href: 'https://suno.com/@larrinasalva', action: 'Listen on Suno', featured: true,
    keywords: 'chip nasty music rap hiphop songs suno'
  },
  {
    id: 'roads', name: 'Roads to Recognition', category: 'music',
    description: 'A heartfelt collection of musical tributes honoring creators, loved ones, and everyday extraordinary people.',
    badge: 'SONGS WITH HEART', icon: '🎶', color: 'gold', status: 'public',
    href: 'https://suno.com/@larrinasalva', action: 'Explore the music', featured: false,
    keywords: 'roads to recognition music celebration tribute people farewell'
  },
  {
    id: 'laughrina', name: 'Laughrina', category: 'creative',
    description: 'A warm and witty comedy companion inspired by stories, everyday absurdities and a little good-natured mischief.',
    badge: 'A LITTLE LAUGHTER', icon: '🌻', color: 'gold', status: 'public',
    href: 'https://larrinamsalva.github.io/Laughrina/', sourceHref: 'https://github.com/larrinamsalva/Laughrina', action: 'Open Laughrina', featured: false,
    keywords: 'comedy humor jokes storytelling rv dogs'
  },
  {
    id: 'github', name: 'Larrina on GitHub', category: 'creative',
    description: 'Take a peek behind the scenes at her public projects, new experiments and growing collection of ideas.',
    badge: 'FOR DEVELOPERS', icon: '✨', color: 'violet', status: 'source',
    href: 'https://github.com/larrinamsalva', action: 'Explore code on GitHub', featured: false,
    keywords: 'source projects github code development software'
  }
];