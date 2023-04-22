import Axios from "axios";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export default function login (email, password)  {
  return async (dispatch) => {
    try {
          const response = await Axios({
              method: "post",
              url: `http://localhost:3001/api/v1/user/login`,
              data: {
                  email: email,
                  password: password
              },
          }) // Ajouter une parenthèse fermante ici
          console.log("Payload: ", true);
          dispatch({type: LOGIN_SUCCESS, payload: {isloading: true, isAuthentificated: true}});
          localStorage.setItem("user", JSON.stringify(response.data.body.token));
          window.location = "/profile";  
      } catch (err) {
          return console.log(err.message);
      }
  };
};
