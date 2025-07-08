export interface IDoctorPermission {
 id: string;
 doctorName: string;
 specialization: string;
 hospital: string;
 status: 'Granted' | 'Revoked';
}