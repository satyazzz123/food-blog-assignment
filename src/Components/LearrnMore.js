import React from "react";
import tomato from "../Assets/grilled-tomatoes-1-846x846 1.png";
import snacks1 from "../Assets/meal-prep-ideas-846x846 1.png";
import snacks2 from "../Assets/meal-prep-ideas-846x846 2.png";
// border-2 border-solid border-black
export default function LearrnMore() {
  const articles = [
    {
      title: "Grilled Tomatoes At Home",
      image: tomato,
      message:`  PLorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard...`
    },
    {
      title: "Snacks for Travel",
      image: snacks1,
      message:`  PLorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard...`
    },
    {
      title: "Post-workout Recipes",
      image: snacks2,
      message:`  PLorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard...`
    },
  ];
  return (
    <div className="lg:h-[700px] ">
      <div className="lg:h-[679px] lg:mt-[182px] lg:relative left-[108px]  ">
        <h1 className="font-[600] lg:text-[45px] text-[#0E2368] ">
          Latest Articles
        </h1>
        {/* //card  */}
       <div className="flex ">
       {articles.map((article) => (
          <div className="lg:w-[381px] lg:h-[554px] lg:mt-[22px] lg:rounded-[21px]  border-[1.37px] border-solid border-[ #93A2D361] mr-[70px]  ">
            <img
              className="lg:w-[326px] lg:h-[257px] lg:rounded-[21px] lg:relative left-[27px] top-[27px]"
              src={article.image}
              alt=""
            />
            <div className=" lg:w-[295.2px] lg:h-[194.52px]  lg:relative left-[57px] top-[50px]">
              <h1 className="text-[#0E2368] font-[700] lg:text-[21px]">
               {article.title}
              </h1>
              <div className="lg:text-[15px] font-[400] lg:leading-[27px] text-[#444957]">
              {article.message}
              </div>
              <button className="lg:w-[131px] lg:h-[42px] lg:rounded-[21px] border-2 border-solid border-[#424961] gap-[10px] text-[#424961] lg:mt-[40px]  ">
                Read More
              </button>
            </div>
          </div>
        ))}
         
       </div>
      </div>
    </div>
  );
}
// border-width: [object Object]px, [object Object]px, [object Object]px, [object Object]px;

// border-style: solid;

// border-color: rgba(147, 162, 211, 0.38); 27.41px
