import {Complaint} from "../schemas/complaint.schema";

export interface ComplaintsResponseInterface {
    complaints: Complaint[];
}