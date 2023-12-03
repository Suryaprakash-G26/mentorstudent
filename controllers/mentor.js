import { client } from "../db.js";

export function Getmentor() {
    return client.db("Guvi").collection("mentor").find({}).toArray();
}

export function addmentor(data){
    return client.db("Guvi").collection("mentor").insertOne(data)
}

export function getStudentsForMentor(id) {
    return client.db("Guvi").collection("mentor").find({ mentor: id }).toArray();
}