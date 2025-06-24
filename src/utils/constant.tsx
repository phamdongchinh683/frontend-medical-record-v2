const CONTRACT_ADDRESS: `0x${string}` = process.env
  .NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`;

enum Role {
  NONE = 0,
  PATIENT = 1,
  DOCTOR = 2,
}

export { CONTRACT_ADDRESS, Role };
