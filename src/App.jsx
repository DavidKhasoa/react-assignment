import './App.css';
import Header from './components/Header';
import ProfilePhoto from './components/ProfilePhoto';
import Bio from './components/Bio';
import { Socials, Skills } from './components/SocialsAndSkills';

export default function User() {
  return (
    <div className="container">
      <Header />
      <ProfilePhoto />
      <Bio />
      <Skills />
      <Socials />
    </div>
  );
}