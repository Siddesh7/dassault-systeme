import { useParams, Link } from "react-router-dom";
import { categories, titles, categoriesVideo } from "../constants";
export default function Category() {
  const { category } = useParams();
  console.log(categoriesVideo[category]);
  return (
    <div className="container mt-[120px] mb-[36px] px-6 mx-auto">
      <section className="mb-32 text-gray-800">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n      .zoom:hover img {\n        transform: scale(1.1);\n      }\n    ",
          }}
        />
        <h2
          class="font-bold leading-tight text-5xl mt-0 mb-2 bg-gradient-to-r bg-clip-text  text-transparent 
            from-gray-600 via-gray-500 via-gray-400 to-gray-600
            animate-text"
        >
          {titles[category]}
        </h2>
        <div className="grid lg:grid-cols-3 gap-6 mt-[20px]">
          {categoriesVideo[category].map((video) => (
            <Link to={video.href}>
              {" "}
              <div
                className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
                style={{ backgroundPosition: "50%" }}
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                <img
                  src={`http://drive.google.com/uc?export=view&id=${video.thumbnail}`}
                  className="w-full h-[300px] transition duration-300 ease-linear align-middle"
                  alt={""}
                />
                <a href={video.href}>
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="flex justify-start items-end h-full">
                      <h5 className="text-lg font-bold text-white m-6">
                        {video.title}
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    />
                  </div>
                </a>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* Section: Design Block */}
    </div>
  );
}
