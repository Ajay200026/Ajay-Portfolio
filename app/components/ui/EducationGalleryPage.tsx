import EducationGallery from "../../component-file/EducationGallery";

const EducationGalleryPage = () => {
  const images = [
    {
      image: "/1.png",
      title: "Bachelor of Mechanical Engineering in City Engineering College",
      description: "In the year 2023, I graduated with a GPA of 8.70.",
    },
    {
      image: "/2.png",
      title:
        " Pre-University Course (PUC) in PCMCs at Sarvodaya PU College, Tumakuru",
      description:
        "In the year 2019, I successfully completed my Pre-University Course (PUC).",
    },
    {
      image: "/3.png",
      title: " SSLC at GJC Thyamagondlu ",
      description:
        "In the year 2017, I completed my SSLC (Secondary School Leaving Certificate) successfully.",
    },
    // Add more image objects as needed
  ];
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Education Gallery</h1>
      <EducationGallery images={images} />
    </div>
  );
};

export default EducationGalleryPage;
