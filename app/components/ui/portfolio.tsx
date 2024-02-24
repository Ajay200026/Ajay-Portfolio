// pages/portfolio.tsx

import ProjectCard from "../../component-file/ProjectCard";

const Portfolio = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <ProjectCard
        title="Flavor Fiesta"
        image="/img1.png"
        description="Flavor Fiesta - A Culinary Adventure

        Description:
        Flavor Fiesta is a web application designed to enhance the culinary experience for users by providing a seamless platform to explore, order, and savor a diverse range of flavors. The application incorporates advanced technologies such as MySQL, Node.js, APIs, React.js, HTML, CSS, GitHub, and features robust functionalities, including login authentication, test payments, and order messages sent to user email IDs.
        
        "
        githubLink="https://github.com/Ajay200026/Flavor-Fiesta-India-Application?tab=readme-ov-file#flavor-fiesta-india-application"
        demoLink="https://github.com/Ajay200026/Flavor-Fiesta-India-Application?tab=readme-ov-file#flavor-fiesta-india-application"
      />
      <ProjectCard
        title="Market Mingle E-commerce "
        image="/img2.png"
        description="
        Market Mingle is a full-stack e-commerce website, seamlessly connecting buyers and sellers. Utilizing a robust tech stack encompassing React.js, Node.js, MongoDB, and Express, it delivers a user-friendly interface, secure transactions, and dynamic market interactions. Revolutionize your online shopping experience with Market Mingle!."
        githubLink="https://github.com/Ajay200026/Market-Mingle-E-commerce?tab=readme-ov-file#market-mingle-e-commerce"
        demoLink="https://github.com/Ajay200026/Market-Mingle-E-commerce?tab=readme-ov-file#market-mingle-e-commerce"
      />
      <ProjectCard
        title="Dash Board"
        image="/img4.png"
        description="
        A CRUD Operation Dashboard streamlines data management, offering a user-friendly interface for creating, viewing, updating, and deleting records. It incorporates efficient data visualization and manipulation features for seamless interaction."
        githubLink="https://github.com/Ajay200026/Crud-Dash-Board?tab=readme-ov-file#crud-dash-board"
        demoLink="https://github.com/Ajay200026/Crud-Dash-Board?tab=readme-ov-file#crud-dash-board"
      />
      <ProjectCard
        title="Photography Application"
        image="/img5.png"
        description="
        Discover a captivating photography webpage allowing users to effortlessly book shoot slots. Built with HTML, CSS, and JavaScript, the site is hosted on Netlify, ensuring a seamless, responsive experience across all devices."
        githubLink="https://github.com/Ajay200026/Photography-Application?tab=readme-ov-file#photography-application"
        demoLink="https://github.com/Ajay200026/Photography-Application?tab=readme-ov-file#photography-application"
      />
    </div>
  );
};

export default Portfolio;
