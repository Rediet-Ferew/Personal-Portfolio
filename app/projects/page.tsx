import Image from "next/image";

export default function Projects() {
  const project_infos = [
    {
      title: "Genus",
      image: "/images/typing.jpg",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque pariatur labore voluptatem repellendus eligendi illum libero, possimus atque facere beatae culpa saepe dolor impedit, velit autem odit, quos ducimus tempora.",
      company: "Eskalate LLC",
      project: "Admin page for Ride sharing Mobile App",
      project_link: "#",
      date: "12/03/2023 - 31/07/2023"
    },
      {
        title: "Pandora Guard",
        image: "/images/typing.jpg",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque pariatur labore voluptatem repellendus eligendi illum libero, possimus atque facere beatae culpa saepe dolor impedit, velit autem odit, quos ducimus tempora.",
        company: "African To Silicon Valley",
        project: "Managing Community education",
        project_link: "#",
        date: "12/03/2023 - 31/07/2023"
      },
      {
        title: "Voiceshield",
        image: "/images/typing.jpg",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque pariatur labore voluptatem repellendus eligendi illum libero, possimus atque facere beatae culpa saepe dolor impedit, velit autem odit, quos ducimus tempora.",
        company: "Micro Sun",
        project: "Addis Ababa Companies Phonebook",
        project_link: "#",
        date: "12/03/2023 - 31/07/2023"
      },
      {
        title: "Erdata",
        image: "/images/typing.jpg",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque pariatur labore voluptatem repellendus eligendi illum libero, possimus atque facere beatae culpa saepe dolor impedit, velit autem odit, quos ducimus tempora.",
        company: "African To Silicon Valley",
        project: "Managing Community education",
        project_link: "#",
        date: "12/03/2023 - 31/07/2023"
      },

  ];
  return (
    <main className="min-h-screen">
      <div className="flex auto-rows-fr">
        {project_infos.map((project) => {
          return (
            <div key={project.title} className="w-1/4 p-4 rounded-3xl shadow-2xl mb-4">
              <div className="relative w-full h-48">
                <Image src={project.image} layout="fill" objectFit="cover" alt="placeholder image" className="rounded-t-lg" />
              </div>
              <div className="flex justify-between mt-4">
                <p className="text-lg font-bold">{project.title}</p>
                <p className="text-lg">{project.date}</p>
              </div>
              <div>
                <p className="mt-2">{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
