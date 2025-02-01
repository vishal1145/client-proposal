import DBConnect from "./config/database.js";
import service from "./model/service.js";

async function getAllServices(){
    await DBConnect();
    const services = await service.find({});
    console.log("services", services);
}

getAllServices();