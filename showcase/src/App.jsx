import { motion } from 'framer-motion';
import { Rocket, Trophy, Layout, ChevronRight } from 'lucide-react';
import './index.css';

const projects = [
  {
    id: 1,
    title: "Ana Sahne Tasarımı",
    category: "MİMARİ",
    description: "55 metrelik devasa ölçekli, fütüristik LED ekranlar ve drone pistleri ile entegre ana sahne konsepti.",
    image: "/main_stage.png",
    icon: <Rocket size={24} />
  },
  {
    id: 2,
    title: "Ödül Heykelciği",
    category: "MOBİLYA/HEYKEL",
    description: "Yarı saydam polimerler ve fırçalanmış titanyumun birleştiği, başarıyı simgeleyen modern ödül tasarımı.",
    image: "/award_trophy.png",
    icon: <Trophy size={24} />
  },
  {
    id: 3,
    title: "Grafik Konsept",
    category: "GÖRSEL KİMLİK",
    description: "Dijital dönüşüm temasını merkezine alan, dinamik ve modern kurumsal kimlik çalışmaları.",
    image: "/brand_identity.png",
    icon: <Layout size={24} />
  }
];

function App() {
  return (
    <div className="gallery-container">
      <header className="header">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TEKNOFEST 2026
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Mimari ve Görsel Tasarım Vitrini
        </motion.p>
      </header>

      <div className="grid">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="badge">{project.category}</div>
            <img src={project.image} alt={project.title} className="card-image" />
            <div className="card-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#0055FF' }}>
                {project.icon}
                <span style={{ fontWeight: 700, letterSpacing: '1px', fontSize: '0.8rem' }}>CONCEPT V1</span>
              </div>
              <h2 className="card-title">{project.title}</h2>
              <p className="card-description">{project.description}</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', color: '#00FFFF', fontSize: '0.9rem', fontWeight: 600 }}>
                Detayları Gör <ChevronRight size={18} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <footer style={{ marginTop: '5rem', textAlign: 'center', color: '#444', fontSize: '0.8rem' }}>
        © 2026 TEKNOFEST Tasarım Hazırlık Deposu — Tüm Hakları Saklıdır.
      </footer>
    </div>
  );
}

export default App;
