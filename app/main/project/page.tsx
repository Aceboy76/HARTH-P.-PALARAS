import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Project() {
  return (
    <div id="project" className="w-full py-[100px] flex justify-center">
      <div className="space-y-12 w-full max-w-7xl px-0">
        <div>
          <p className="text-5xl font-rubik text-center lg:text-left">Projects</p>
        </div>

        <Card className="bg-[var(--accent)]">
          <CardHeader>
            <CardTitle className="text-2xl">Travel Order Management System</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col-reverse lg:flex-row gap-6">
            <div className="w-full lg:w-1/2 text-lg text-justify space-y-4">
              <p>
                Developed a Travel Order Management System for Sultan Kudarat Water District, designed to automate and streamline the organization’s official travel processes. The system significantly reduced paperwork and manual tracking by introducing a digital platform for creating, managing, and approving travel orders. To ensure efficiency and maintain data integrity, normalized database schemas were designed, reducing data redundancy and improving the consistency of stored information. Built with scalability and usability in mind, the system centralized travel-related records, enhanced transparency in approvals, and provided accurate tracking of employee travel history. This project contributed to faster processing times, better data organization, and improved administrative efficiency within the organization.
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="/skwd.png"
                alt="Travel Order Management System"
                className="max-w-full h-auto rounded-md shadow-md"
                loading="lazy"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[var(--accent)]">
          <CardHeader>
            <CardTitle className="text-2xl lg:text-right">Sales and Inventory System For JK Store</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="/jk.png"
                alt="Sales and Inventory System For JK Store"
                className="max-w-full h-auto rounded-md shadow-md"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-1/2 text-lg text-justify space-y-4">
              <p>
                Developed a comprehensive Sales and Inventory System for JK Store as part of a capstone project, aimed at modernizing and automating the store’s retail operations. The system streamlined multiple core processes including inventory tracking, sales transactions, and stock management, which helped minimize manual errors and reduce data redundancy. Through in-depth analysis of the store's existing workflow, the project identified and resolved several operational bottlenecks. Designed and implemented using the Laravel framework, the system features a user-friendly interface, efficient database structure, and robust functionality tailored to the specific needs of a retail environment. This project significantly improved the overall efficiency and accuracy of the store’s daily operations.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
