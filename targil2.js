"use strict";
// person class
class AbstractClass {
    constructor(firstName, lastName, address, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.age = age;
    }
}
//medical staff
class MedicalStaff extends AbstractClass {
    constructor(firstName, lastName, address, age, staffId, position, department) {
        super(firstName, lastName, address, age);
        this.staffId = staffId;
        this.position = position;
        this.department = department;
    }
}
// patient class
class Patient extends AbstractClass {
    constructor(phoneNumber, emergencyContact, firstName, lastName, patientId, address, age) {
        super(firstName, lastName, address, age);
        this.medicalHistory = [];
        this.patientId = patientId;
        this.phoneNumber = phoneNumber;
        this.emergencyContact = emergencyContact;
    }
    allDetails() {
        return this;
    }
    getId() {
        return this.patientId;
    }
    updateAppointment(id, time) {
        const myAppointment = this.medicalHistory.find((a) => a.patient.patientId === id);
        if (myAppointment)
            myAppointment.time = time;
    }
}
//doctor class
class Doctor extends MedicalStaff {
    constructor(firstName, lastName, doctorId, specialization, address, age, staffId, position, department) {
        super(firstName, lastName, address, age, staffId, position, department);
        this.doctorId = doctorId;
        this.specialization = specialization;
        this.availability = ["30/08/2023", "31/08/2023", "1/09/2023"];
    }
    allDetails() {
        return this;
    }
    getId() {
        return this.doctorId;
    }
}
//appointment class
class Appointment {
    constructor(patient, doctor, data, time) {
        this.patient = patient;
        this.doctor = doctor;
        this.time = time;
        this.date = data;
        this.appointmentStatus = "";
    }
    updateAppointment(set) {
        this.appointmentStatus = set;
    }
}
//hospital class
class Hospital {
    constructor(name) {
        this.name = name;
        this.patients = [];
        this.doctors = [];
        this.appointments = [];
        this.medicalRecord = [];
    }
    newPatient(patient) {
        const existPatient = this.patients.find((p) => p.getId() === patient.getId());
        if (!existPatient)
            this.patients.push(patient);
    }
    newDoctor(doctor) {
        const existDoctor = this.doctors.find((d) => d.getId() === doctor.getId());
        if (!existDoctor)
            this.doctors.push(doctor);
    }
    newAppointment(appointment) {
        const existAppointment = this.appointments.find((a) => a.date === appointment.date && a.time === appointment.time);
        if (!existAppointment) {
            this.appointments.push(appointment);
            appointment.patient.medicalHistory.push(appointment);
        }
    }
    allAppointments() {
        return this.appointments;
    }
    allAppointmentByDoctorId(id) {
        const allAppointments = [];
        for (const appointment of this.appointments) {
            if (appointment.doctor.getId() === id)
                allAppointments.push(appointment);
        }
        return allAppointments;
    }
    allAppointmentByPatientId(id) {
        const allAppointments = [];
        for (const appointment of this.appointments) {
            if (appointment.patient.getId() === id)
                allAppointments.push(appointment);
        }
        return allAppointments;
    }
    allAppointmentsByDate(date) {
        const allAppointments = [];
        for (const appointment of this.appointments) {
            if (appointment.date === date)
                allAppointments.push(appointment);
        }
        return allAppointments;
    }
    getDoctorBySpecialization(specialization) {
        const releventDactors = this.doctors.filter(d => {
            d.specialization === specialization;
        });
        return releventDactors;
    }
    createMedicalRecord(treatment) {
        this.medicalRecord.push(treatment);
    }
}
//medical record class
class MedicalRecord {
    constructor(patient, doctor, diagnosis, prescription) {
        this.diagnosis = diagnosis;
        this.prescription = prescription;
        this.patient = patient;
        this.doctor = doctor;
    }
}
//polymorphism
const details = function (person) {
    return person.allDetails();
};
// const p = new Patient('x','x',2)
// const d = new Doctor('x','x',2,'d')
// const h = new Hospital('x')
// const a = new Appointment(p,d,'1','2')
// h.newPatient(p)
// h.newDoctor(d)
// h.newAppointment(a)
// h.allAppointments()
const patient = new Patient(3, 2, "x", "x", 2, "x", 2);
const doctor = new Doctor("x", "x", 2, "d", "d", 2, 2, "d", "d");
