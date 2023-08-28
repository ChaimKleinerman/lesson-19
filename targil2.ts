// person class
abstract class AbstractClass {
    firstName: string;
    lastName: string;
    address: string;
    age: number;
    constructor(
        firstName: string,
        lastName: string,
        address: string,
        age: number
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.age = age;
    }
}
//medical staff
class MedicalStaff extends AbstractClass {
    staffId: number;
    position: string;
    department: string;
    constructor(
        firstName: string,
        lastName: string,
        address: string,
        age: number,
        staffId: number,
        position: string,
        department: string
    ) {
        super(firstName, lastName, address, age);
        this.staffId = staffId;
        this.position = position;
        this.department = department;
    }
}
// patient class
class Patient extends AbstractClass {
    private patientId: number;
    phoneNumber: number;
    emergencyContact: number;
    medicalHistory: Appointment[];
    constructor(
        phoneNumber: number,
        emergencyContact: number,
        firstName: string,
        lastName: string,
        patientId: number,
        address: string,
        age: number
    ) {
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
    updateAppointment(id: number, time: string) {
        const myAppointment = this.medicalHistory.find(
            (a) => a.patient.patientId === id
        );
        if (myAppointment) myAppointment.time = time;
    }
}
//doctor class
class Doctor extends MedicalStaff {
    private doctorId: number;
    specialization: string;
    availability: string[];
    constructor(
        firstName: string,
        lastName: string,
        doctorId: number,
        specialization: string,
        address: string,
        age: number,
        staffId: number,
        position: string,
        department: string
    ) {
        super(firstName, lastName, address, age, staffId, position, department);
        this.doctorId = doctorId;
        this.specialization = specialization;
        this.availability = ["30/08/2023", "31/08/2023", "1/09/2023"];
    }

    allDetails(): this {
        return this;
    }
    getId(): number {
        return this.doctorId;
    }
}
//appointment class
class Appointment {
    patient: Patient;
    doctor: Doctor;
    date: string;
    time: string;
    appointmentStatus: string;
    constructor(patient: Patient, doctor: Doctor, data: string, time: string) {
        this.patient = patient;
        this.doctor = doctor;
        this.time = time;
        this.date = data;
        this.appointmentStatus = "";
    }
    updateAppointment(set: string): void {
        this.appointmentStatus = set;
    }
}
//hospital class
class Hospital {
    patients: Patient[];
    doctors: Doctor[];
    appointments: Appointment[];
    name: string;
    medicalRecord:MedicalRecord[];
    constructor(name: string) {
        this.name = name;
        this.patients = [];
        this.doctors = [];
        this.appointments = [];
        this.medicalRecord = [];
    }

    newPatient(patient: Patient): void {
        const existPatient = this.patients.find(
            (p) => p.getId() === patient.getId()
        );
        if (!existPatient) this.patients.push(patient);
    }
    newDoctor(doctor: Doctor): void {
        const existDoctor = this.doctors.find(
            (d) => d.getId() === doctor.getId()
        );
        if (!existDoctor) this.doctors.push(doctor);
    }

    newAppointment(appointment: Appointment) {
        const existAppointment = this.appointments.find(
            (a) => a.date === appointment.date && a.time === appointment.time
        );
        if (!existAppointment) {
            this.appointments.push(appointment);
            appointment.patient.medicalHistory.push(appointment);
        }
    }
    allAppointments(): Appointment[] {
        return this.appointments;
    }

    allAppointmentByDoctorId(id: number): Appointment[] {
        const allAppointments: Appointment[] = [];
        for (const appointment of this.appointments) {
            if (appointment.doctor.getId() === id)
                allAppointments.push(appointment);
        }
        return allAppointments;
    }

    allAppointmentByPatientId(id: number): Appointment[] {
        const allAppointments: Appointment[] = [];
        for (const appointment of this.appointments) {
            if (appointment.patient.getId() === id)
                allAppointments.push(appointment);
        }
        return allAppointments;
    }

    allAppointmentsByDate(date: string) {
        const allAppointments: Appointment[] = [];
        for (const appointment of this.appointments) {
            if (appointment.date === date) allAppointments.push(appointment);
        }
        return allAppointments;
    }
    getDoctorBySpecialization(specialization:string):Doctor[]{
        const releventDactors = this.doctors.filter(d =>{
            d.specialization === specialization
        })
        return releventDactors
    }
    createMedicalRecord(treatment:MedicalRecord){
        this.medicalRecord.push(treatment)
    }
}
//medical record class

class MedicalRecord {
    patient: Patient;
    doctor: Doctor;
    diagnosis: string;
    prescription: string;
    constructor(
        patient: Patient,
        doctor: Doctor,
        diagnosis: string,
        prescription: string
    ) {
        this.diagnosis = diagnosis;
        this.prescription = prescription;
        this.patient = patient;
        this.doctor = doctor;
    }
}
//polymorphism
const details = function (person: Patient | Doctor) {
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
