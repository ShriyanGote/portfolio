import ProjectCards from "@/app/components/projectcard";

const projectsPage = () => {
  const Projects = [
    {
      "title": "ML MVP Predictor - NBA MVP Prediction Tool",
      "image": "/images/mvpdatagraph.png",
      "description": "Built using Python libraries such as Pandas, NumPy, BeautifulSoup, and TensorFlow, this tool predicts NBA MVP odds with 92% accuracy based on 30 years of NBA history. A Flask-powered frontend allows users to input desired statistics for predictions.",
      "tags": ["Python", "Flask", "NumPy", "TensorFlow", "Pandas"],
      "link": "https://github.com/ShriyanGote/mvpPointsNBA"
    },
    {
      "title": "Memory Game - Interactive React Game",
      "image": "/images/task.png",
      "description": "A memory game built using React, leveraging time functions, transitions, and state management. The game enhances user engagement through smooth animations and responsive design.",
      "tags": ["React", "JavaScript", "HTML", "CSS"],
      "link": "https://github.com/ShriyanGote/MemoryGame"
    },
    {
      "title": "Stacks - Competitive Sports Analytics App",
      "image": "/images/stack.png",
      "description": "Created using SwiftUI for the front-end and AWS + Python for the back-end, Stacks offers users data-driven insights for sports categories, integrating live sports data and personalized analytics for enhanced decision-making.",
      "tags": ["SwiftUI", "AWS Lambda", "Python", "Pandas"],
      "link": "https://github.com/ShriyanGote/Stacks"
    },
    {
      "title": "Huffman Coder - Algorithm for Data Compression",
      "image": "/images/huffman.png",
      "description": "Successfully implemented Huffman Coding, a widely-used technique for data compression, in a project. By assigning shorter representations to frequently occurring symbols and longer representations to less common symbols, the project achieved efficient compression.",
      "tags": ["C", "Linux", "Bash"],
      "link": "https://github.com/ShriyanGote/Huffman"
    },
    {
      "title": "Colorblind Simulator - Image Processing Tool",
      "image": "/images/cb.png",
      "description": "Developed an image-processing program in C to simulate deuteranopia, assisting UI designers in creating accessible interfaces for users with red-green color blindness.",
      "tags": ["C", "Linux", "Bash"],
      "link": "https://github.com/ShriyanGote/Colorblind-Simu"
    },
    {
      "title": "Multithreaded Dining Hall - Synchronization Program",
      "image": "/images/multithread-dining.png",
      "description": "A C program implementing synchronization using semaphores and mutexes to manage entry and exit protocols for a university dining hall. It prioritizes cleaning operations to improve efficiency.",
      "tags": ["C", "Linux", "Semaphore", "Mutex"],
      "link": "https://github.com/UCSC-CSE-130/cse-130-project3-ShriyanGote"
    },
    {
      "title": "International Virtual Cottage - Virtual Environment",
      "image": "/images/worldview.png",
      "description": "A virtual environment simulating local culture with music, food, and monuments using SDL2 and Pygame, providing an interactive experience inspired by the game Virtual Cottage.",
      "tags": ["Python", "SDL2", "Pygame"],
      "link": "https://github.com/ShriyanGote/WorldView-Wanderer"
    },
    {
      "title": "Todo-Task List - Full-stack Task Management App",
      "image": "/images/memory.png",
      "description": "A full-stack application built with MongoDB, Express.js, React.js, Node.js, and Redux, providing task management capabilities with state handling and seamless communication between front-end and back-end components.",
      "tags": ["MongoDB", "Express.js", "React.js", "Node.js", "Redux"],
      "link": "https://github.com/ShriyanGote/todolist-mernstack"
    },
    {
      "title": "VGA Screensaver - Hardware Design Project",
      "image": "/images/vga.png",
      "description": "Implemented a VGA screensaver on an FPGA using SystemVerilog and VHDL, showcasing expertise in digital logic design and hardware description languages.",
      "tags": ["SystemVerilog", "FPGA", "VHDL", "VGA"],
      "link": "https://github.com/ShriyanGote/VGA-Screensaver"
    }
  ]
  
  return (
    // PROJECT PAGE
    <div className="my-40">
      <div className="flex flex-row flex-wrap gap-8 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;