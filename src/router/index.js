import { createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/login-layout',
        redirect: '/login',
        name: 'login layout',
        component: () => import( /* webpackChunkName: "login layout" */ '../views/auth/LoginLayout.vue'),
        children : [
            {
                path: '/login',
                name: 'login',
                component: () => import( /* webpackChunkName: "login" */ '../views/auth/Login.vue')
            },
            {
                path: '/otp',
                name: 'otp',
                component: () => import( /* webpackChunkName: "otp" */ '../views/auth/OTP.vue')
            },
            {
                path: '/register',
                name: 'register',
                component: () => import( /* webpackChunkName: "register" */ '../views/auth/Register.vue')
            },
        ]
    },

    {
        path: '/',
        redirect: '/dashboard',
        name: 'dashboard layout',
        component: () => import( /* webpackChunkName: "dashboard layout" */ '../views/DashboardLayout.vue'),
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import( /* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
            },
            {
                path: '/profile',
                name: 'profile',
                component: () => import( /* webpackChunkName: "profile" */ '../views/Profile.vue')
            },
            {
                path: '/medicine-list',
                name: 'medicine list',
                component: () => import( /* webpackChunkName: "medicine layout" */ '../views/Medicine/MedicineLayout.vue'),
            },
            {
                path: '/medicine',
                name: 'medicine',
                component: () => import( /* webpackChunkName: "medicine" */ '../views/Medicine/MedicinePage.vue')
            },
            {
                path: '/add-medicine',
                name: 'add medicine',
                component: () => import( /* webpackChunkName: "add medicine" */ '../views/Medicine/AddMedicine.vue')
            },
            //for patients
            {
                path: '/patient',
                redirect: '/patient/profile',
                name: 'patient profile',
                component: () => import( /* webpackChunkName: "patient layout" */ '../views/Patient/ProfileLayout.vue'),
                children: [
                    {
                        path: '/patient/profile',
                        name: 'patient profile',
                        component: () => import( /* webpackChunkName: "patient profile" */ '../views/Patient/Profile.vue')
                    },
                    {
                        path: '/patient/edit',
                        name: 'patient edit',
                        component: () => import( /* webpackChunkName: "patient edit" */ '../views/Patient/Edit.vue')
                    },
                    {
                        path: '/patient/bills',
                        name: 'patient bills',
                        component: () => import( /* webpackChunkName: "patient bills" */ '../views/Patient/Bills.vue')
                    },
                    {
                        path: '/patient/visits',
                        name: 'patient visits',
                        component: () => import( /* webpackChunkName: "patient visits" */ '../views/Patient/Visits.vue')
                    },
                    {
                        path: '/patient/appointment',
                        name: 'patient appointment',
                        component: () => import( /* webpackChunkName: "patient appointment" */ '../views/Patient/Appointments.vue')
                    },
                    {
                        path: '/patient/lab-report',
                        name: 'patient lab report',
                        component: () => import( /* webpackChunkName: "patient lab report" */ '../views/Patient/LabReport.vue')
                    },
                ]
            },
            {
                path: '/patients',
                name: 'patients',
                component: () => import( /* webpackChunkName: "patients" */ '../views/Patient/Patients.vue')
            },
            //prescription
            {
                path: '/new-prescription',
                name: 'new prescription',
                component: () => import( /* webpackChunkName: "new prescription" */ '../views/Prescription/NewPrescription.vue')
            },
            {
                path: '/prescription',
                name: 'prescription',
                component: () => import( /* webpackChunkName: "prescription" */ '../views/Prescription/Prescription.vue')
            },
            {
                path: '/add-text',
                name: 'add text',
                component: () => import( /* webpackChunkName: "add text" */ '../views/AddText.vue')
            },
            //for patient
            // {
            //     path: '/patients',
            //     name: 'patients',
            //     component: () => import( /* webpackChunkName: "patients" */ '../views/Patient/Patients.vue')
            // },
            //for doctor
            {
                path: '/doctor-appointment',
                name: 'doctor appointment',
                component: () => import( /* webpackChunkName: "doctor appointment" */ '../views/Doctor/Appointments.vue')
            },
            {
                path: '/doctors',
                name: 'doctors',
                component: () => import( /* webpackChunkName: "doctors" */ '../views/Doctor/Doctors.vue')
            },
            //for pathologist
            {
                path: '/pathologist',
                name: 'pathologist',
                component: () => import( /* webpackChunkName: "pathologist" */ '../views/Lab/Pathologist.vue')
            },
            {
                path: '/laboratory',
                name: 'laboratory',
                component: () => import( /* webpackChunkName: "laboratory" */ '../views/Lab/Laboratory.vue')
            },
            {
                path: '/lab-appointment',
                name: 'lab appointment',
                component: () => import( /* webpackChunkName: "lab appointment" */ '../views/Lab/Appointments.vue')
            },
            {
                path: '/labtest',
                name: 'labtest',
                component: () => import( /* webpackChunkName: "labtest" */ '../views/Lab/Labtest.vue')
            },
            //visits
            {
                path: '/visits',
                name: 'visits',
                component: () => import( /* webpackChunkName: "visits" */ '../views/Visits/Visits.vue')
            },
            {
                path: '/visit-summary',
                name: 'visit summary',
                component: () => import( /* webpackChunkName: "visit summary" */ '../views/Visits/VisitSummary.vue')
            },
            //other
            {
                path: '/specialization',
                name: 'specialization',
                component: () => import( /* webpackChunkName: "specialization" */ '../views/Specialization.vue')
            },
            {
                path: '/hospitals',
                name: 'hospitals',
                component: () => import( /* webpackChunkName: "hospitals" */ '../views/Hospitals.vue')
            },
            {
                path: '/payment-history',
                name: 'payment history',
                component: () => import( /* webpackChunkName: "payment history" */ '../views/PaymentHistory.vue')
            },
            {
                path: '/notes',
                name: 'notes',
                component: () => import( /* webpackChunkName: "notes" */ '../views/Notes.vue')
            },
            {
                path: '/complaints',
                name: 'complaints',
                component: () => import( /* webpackChunkName: "complaints" */ '../views/Complaints.vue')
            },
            {
                path: '/diagnosis',
                name: 'diagnosis',
                component: () => import( /* webpackChunkName: "diagnosis" */ '../views/Diagnosis.vue')
            },
            //Rx Group
            {
                path: '/rx/medicine',
                name: 'rx medicine',
                component: () => import( /* webpackChunkName: "rx medicine" */ '../views/RxGroup/RxLayout.vue')
            },
            {
                path: '/rx/add-medicine',
                name: 'rx add medicine',
                component: () => import( /* webpackChunkName: "rx add medicine" */ '../views/RxGroup/AddMedicine.vue')
            },
            {
                path: '/rx/list',
                name: 'rx list',
                component: () => import( /* webpackChunkName: "rx list" */ '../views/RxGroup/RxList.vue')
            },
            {
                path: '/appointment-service',
                name: 'appointment service',
                component: () => import( /* webpackChunkName: "appointment service" */ '../views/AppointmentService.vue')
            },
            //Clinic
            {
                path: '/clinic-preview',
                name: 'clinic preview',
                component: () => import( /* webpackChunkName: "clinic preview" */ '../views/Clinic/ClinicPreview.vue')
            },
            //Staff
            {
                path: '/staff-layout',
                redirect: '/staff/details',
                name: 'staff layout',
                component: () => import( /* webpackChunkName: "staff layout" */ '../views/Staff/StaffLayout.vue'),
                children: [
                    {
                        path: '/staff/details',
                        name: 'staff details',
                        component: () => import( /* webpackChunkName: "staff details" */ '../views/Staff/Details.vue')
                    },
                    {
                        path: '/staff/permission',
                        name: 'staff permission',
                        component: () => import( /* webpackChunkName: "staff permission" */ '../views/Staff/Permission.vue')
                    },
                    {
                        path: '/staff/slot',
                        name: 'staff slot',
                        component: () => import( /* webpackChunkName: "staff slot" */ '../views/Staff/Slot.vue')
                    },
                ]
            },
            // staff mob view
            {
                path: '/staff',
                name: 'staff',
                component: () => import( /* webpackChunkName: "staff" */ '../views/Staff/StaffList.vue')
            },
            {
                path: '/not-found',
                name: 'not found',
                component: () => import( /* webpackChunkName: "not found" */ '../views/NotFound.vue')
            },
            //mobile-view
            {
                path: '/medicine-search',
                name: 'medicine search',
                component: () => import( /* webpackChunkName: "medicine search" */ '../views/Medicine/MedicineSearch.vue')
            },
            {
                path: '/rating',
                name: 'rating',
                component: () => import( /* webpackChunkName: "rating" */ '../views/Rating.vue')
            },
            //Policy Pages
            {
                path: '/our-values',
                name: 'our values',
                component: () => import( /* webpackChunkName: "our values" */ '../views/PolicyPages/OurValues.vue')
            },
            {
                path: '/about',
                name: 'about',
                component: () => import( /* webpackChunkName: "about" */ '../views/PolicyPages/AboutUs.vue')
            },
            {
                path: '/faq',
                name: 'faq',
                component: () => import( /* webpackChunkName: "faq" */ '../views/PolicyPages/FAQ.vue')
            },
            {
                path: '/contact',
                name: 'contact',
                component: () => import( /* webpackChunkName: "contact" */ '../views/PolicyPages/Contact.vue')
            },
            {
                path: '/privacy-policy',
                name: 'privacy policy',
                component: () => import( /* webpackChunkName: "privacy policy" */ '../views/PolicyPages/PrivacyPolicy.vue')
            },
            {
                path: '/terms',
                name: 'terms',
                component: () => import( /* webpackChunkName: "terms" */ '../views/PolicyPages/Terms.vue')
            },
            //appointments
            {
                path: '/appointment/calender',
                name: 'appointment calender',
                component: () => import( /* webpackChunkName: "appointment calender" */ '../views/AppointmentCalender.vue')
            },
            {
                path: '/appointment/doctor',
                name: 'appointment doctor',
                component: () => import( /* webpackChunkName: "appointment doctor" */ '../views/Appointment/Doctor.vue')
            },
            //for mob view
            {
                path: '/appointment/patient',
                name: 'appointment patient',
                component: () => import( /* webpackChunkName: "appointment patient" */ '../views/Appointment/Patient.vue')
            },
            {
                path: '/appointment/overview',
                name: 'appointment overview',
                component: () => import( /* webpackChunkName: "appointment overview" */ '../views/Appointment/Overview.vue')
            },
        ]
    },
]



const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      return savedPosition || { top: 0 };
    },
  });

// function scrollBehavior() {
//     window.scrollTo(0, 0);
// }

// router.beforeEach((to, from, next) => {
//     scrollBehavior();
//     next();
// });
export default router
