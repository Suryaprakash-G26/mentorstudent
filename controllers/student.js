import { client } from "../db.js";

export function Getstudent() {
    return client.db("Guvi").collection("student").find({}).toArray();
}

export function addstudent(data){
    return client.db("Guvi").collection("student").insertOne(data)
}



export function getStudentsWithoutMentor() {
    return client.db("Guvi").collection("student").find({ currentmentor: null }).toArray();
}

export function getPreviousMentorForStudent(name) {
    return client.db("Guvi").collection("student").findOne({ student: name });
}

export function assignMentorToStudent(studname, mentor) {
    return client.db("Guvi").collection("student").updateOne(
        { student: studname },
        { $set: { currentmentor: mentor } }
    );
}
