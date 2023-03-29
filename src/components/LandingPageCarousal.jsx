import Carousal from "./Carousal";

export const carousalData = [
  {
    img: "https://images.unsplash.com/photo-1578764442423-c21d36076af1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHN3aXR6ZXJsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    text: "Switzerland",
  },
  {
    img: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZyYW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    text: "France",
  },
  {
    img: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fEl0YWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    text: "Italy",
  },
  {
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dW5pdGVkJTIwc3RhdGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    text: "United States",
  },
  {
    img: "https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8U3BhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    text: "Spain",
  },
];

function LandingPageCarousal() {
  return <Carousal data={carousalData} link={true} height={true} />;
}

export default LandingPageCarousal;
