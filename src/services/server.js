import axios from "axios";
//const { CLIENT_ID, BASE_URL, SCOPES, CLIENT_SECRET } = process.env;
const CLIENT_ID = "9ebab9fa-1b06-4191-a849-5f94590debf7";
const BASE_URL = "https://app.hubspot.com/oauth/authorize";
const REDIRECT_URL = "https://qimia-sales.herokuapp.com/";
const REDIRECT_URI = "https://qimia-sales.herokuapp.com/auth-callback";
const SCOPES = "contacts automation";
const CLIENT_SECRET = "8dcf41be-c88c-4de6-9ce4-dec4b1b45e7a";
class Server {
  authentication() {
    const authUrl =
      BASE_URL +
      `?client_id=${encodeURIComponent(CLIENT_ID)}` +
      `&scope=${encodeURIComponent(SCOPES)}` +
      `&redirect_uri=${encodeURIComponent(REDIRECT_URL)}`;

    // Redirect the user
    return (window.location.href = authUrl);
  }

  authcode(authcode) {
    let formData = {
      code: authcode,
    };

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://qimia-sales.herokuapp.com",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    };

    return axios.post(`https://qimia-sales.herokuapp.com/api/hubspot`, formData);
  }

  getContacts() {
    let token = JSON.parse(sessionStorage.getItem("token"));
    //console.log("axios token is "+ token)
    return axios.get(`https://qimia-sales.herokuapp.com/contacts?token=${token}`);
  }
  getCompanies() {
    let token = JSON.parse(sessionStorage.getItem("token"));
    //console.log("axios token is "+ token)
    return axios.get(`https://qimia-sales.herokuapp.com/api/companies?token=${token}`);
  }
  getCompanyContacts(companyid) {
    let token = JSON.parse(sessionStorage.getItem("token"));
    //console.log("axios token is "+ token)
    return axios.get(
      `https://qimia-sales.herokuapp.com/companycontacts?token=${token}&companyid=${companyid}`
    );
  }

  createCompany(company) {
    let token = JSON.parse(sessionStorage.getItem("token"));
    var formData = new FormData();
    formData = company
    /*for (var key in company.properties) {
      formData.append(key, company.properties[key]);
    }*/
    console.log("axios token is "+ JSON.stringify(formData))
    return axios.post(
      `https://qimia-sales.herokuapp.com/api/company?token=${token}`,formData
    );
  }

  createContact(contact) {
    let token = JSON.parse(sessionStorage.getItem("token"));
    var formData = new FormData();
    formData = contact
    /*for (var key in company.properties) {
      formData.append(key, company.properties[key]);
    }*/
    console.log("axios token is "+ JSON.stringify(formData))
    return axios.post(
      `https://qimia-sales.herokuapp.com/api/contact?token=${token}`,formData
    );
  }
  createNote(Note) {
    let token = JSON.parse(sessionStorage.getItem("token"));
    var formData = new FormData();
    formData = Note
    /*for (var key in company.properties) {
      formData.append(key, company.properties[key]);
    }*/
    console.log("axios token is "+ JSON.stringify(formData))
    return axios.post(
      `https://qimia-sales.herokuapp.com/api/note?token=${token}`,formData
    );
  }
  createTask(Task) {
    let token = JSON.parse(sessionStorage.getItem("token"));
    var formData = new FormData();
    formData = Task
    /*for (var key in company.properties) {
      formData.append(key, company.properties[key]);
    }*/
    console.log("axios token is "+ JSON.stringify(formData))
    return axios.post(
      `https://qimia-sales.herokuapp.com/api/task?token=${token}`,formData
    );
  }
}


export default new Server();