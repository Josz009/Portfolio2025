import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
import DeveloperHeroSection from './components/DeveloperHeroSection';
import DevelopmentProjects from './components/DevelopmentProjects';
import TechnicalSkills from './components/TechnicalSkills';
import CareerTimeline from './components/CareerTimeline';
import ContactSection from './components/ContactSection';
import Navigation from './components/Navigation';
import { GitHubRepo } from './types';
import { fetchGitHubRepos } from './utils/github';

function App() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const data = await fetchGitHubRepos('Josz009');
        setRepos(data);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedProjects repos={repos} loading={loading} />
        <DeveloperHeroSection />
        <DevelopmentProjects />
        <TechnicalSkills />
        <CareerTimeline />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;