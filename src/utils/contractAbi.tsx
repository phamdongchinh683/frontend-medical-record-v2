import { parseAbi } from "viem";

export const MEDICAL_CONTRACT_ABI = parseAbi([
 // Role management
 "function registerAsPatient() external",
 "function registerAsDoctor() external",
 "function roles(address) external view returns (uint8)",
  // Doctor methods
  "function addRecord(address patient) external",
  "function getAuthorizedPatients() external view returns (address[])",
  "function getMedicalRecords(address _patient) external view returns (uint256[])",
  
  // Patient methods
  "function grantPermission(address _doctor) external",
  "function revokePermission(address _doctor) external",
  "function patientMedicalRecords() external view returns (uint256[])",
  
  // Events
  "event Registered(address indexed user, uint8 role)",
  "event MedicalRecordCreated(uint256 indexed _tokenIdCounter)",
]);