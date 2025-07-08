
export interface IRecentActivity {
 id: string;
 type: string;
 fullName: string;
 status: "Pending" | "Completed" | "Cancelled";
 createdAt: string;
}