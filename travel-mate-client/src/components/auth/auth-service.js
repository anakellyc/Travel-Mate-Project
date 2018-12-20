import axios from "axios";
import config from "../../config.json";
//import api from "../../api";

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: `${config.baseUrl}/api`,
      withCredentials: true
    });
    this.service = service;
  }

  signup = (firstName, lastName, email, about, password) => {
    //debugger;
    return this.service
      .post("/signup", {
        firstName,
        lastName,
        email,
        about,
        password
        //avatarUrl
      })
      .then(response => response.data);
  };

  loggedin = () => {
    //debugger;
    return this.service.get("/loggedin").then(response => response.data);
  };

  login = (email, password) => {
    //debugger;
    return this.service.post("/login", { email, password }).then(response => {
      //debugger;
      return response.data;
    });
  };

  logout = () => {
    return this.service.post("/logout", {}).then(response => response.data);
  };
}

export default AuthService;
