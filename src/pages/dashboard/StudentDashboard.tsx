
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const StudentDashboard: React.FC = () => {
  const user = {
    name: "John Student",
    role: "student",
    avatar: ""
  };

  // Define sidebar links for student
  const links = [
    { label: "Dashboard", href: "/student/dashboard" },
    { label: "Class Schedule", href: "/student/schedule" },
    { label: "Attendance", href: "/student/attendance" },
    { label: "Messages", href: "/student/messages" },
    { label: "Academic Reports", href: "/student/reports" },
    { label: "FAQs", href: "/student/faqs" }
  ];

  return (
    <DashboardLayout user={user} links={links}>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Welcome, {user.name}</h2>
        <p className="text-muted-foreground">
          Here's an overview of your academic progress and upcoming activities.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Upcoming Classes</CardTitle>
              <CardDescription>Your next scheduled lessons</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Software Engineering</p>
                    <p className="text-sm text-muted-foreground">Room A302</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Today</p>
                    <p className="text-sm text-muted-foreground">14:00-16:00</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Database Systems</p>
                    <p className="text-sm text-muted-foreground">Room B201</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Tomorrow</p>
                    <p className="text-sm text-muted-foreground">10:00-12:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Attendance</CardTitle>
              <CardDescription>Your attendance summary</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p>Software Engineering</p>
                  <p className="text-sm font-medium text-green-600">85%</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Database Systems</p>
                  <p className="text-sm font-medium text-green-600">90%</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Computer Networks</p>
                  <p className="text-sm font-medium text-yellow-600">75%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Messages</CardTitle>
              <CardDescription>Recent communications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Dr. Smith</p>
                    <p className="text-sm text-muted-foreground truncate max-w-[180px]">
                      Regarding your assignment...
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">2h ago</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Admin Office</p>
                    <p className="text-sm text-muted-foreground truncate max-w-[180px]">
                      Registration reminder for next...
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Yesterday</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Academic Performance</CardTitle>
              <CardDescription>Your current grades across subjects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Software Engineering</p>
                    <p className="text-sm text-muted-foreground">78%</p>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-tut-blue" style={{ width: "78%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Database Systems</p>
                    <p className="text-sm text-muted-foreground">82%</p>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-tut-blue" style={{ width: "82%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Computer Networks</p>
                    <p className="text-sm text-muted-foreground">65%</p>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-tut-blue" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Important Announcements</CardTitle>
              <CardDescription>Latest updates from your faculty</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-tut-purple pl-4 py-2">
                  <p className="font-medium">Exam Schedule Published</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Final exam schedules have been published. Check your timetable.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
                </div>
                <div className="border-l-4 border-tut-blue pl-4 py-2">
                  <p className="font-medium">Library Hours Extended</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    The main library will remain open until 10pm during exam period.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">1 week ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
