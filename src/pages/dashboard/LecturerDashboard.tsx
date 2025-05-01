
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LecturerDashboard: React.FC = () => {
  const user = {
    name: "Dr. Michael Lecturer",
    role: "lecturer",
    avatar: ""
  };

  // Define sidebar links for lecturer
  const links = [
    { label: "Dashboard", href: "/lecturer/dashboard" },
    { label: "Course Materials", href: "/lecturer/materials" },
    { label: "Performance Analytics", href: "/lecturer/analytics" },
    { label: "Attendance Review", href: "/lecturer/attendance" },
    { label: "Communication", href: "/lecturer/communication" }
  ];

  return (
    <DashboardLayout user={user} links={links}>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Welcome, {user.name}</h2>
        <p className="text-muted-foreground">
          Manage your courses, student performance, and academic resources.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Upcoming Lectures</CardTitle>
              <CardDescription>Your scheduled classes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Advanced Database Systems</p>
                    <p className="text-sm text-muted-foreground">Lecture Hall A</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Today</p>
                    <p className="text-sm text-muted-foreground">10:00-12:00</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Software Architecture</p>
                    <p className="text-sm text-muted-foreground">Lecture Hall C</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Tomorrow</p>
                    <p className="text-sm text-muted-foreground">14:00-16:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Class Attendance</CardTitle>
              <CardDescription>Recent lecture attendance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p>Advanced Database Systems (Mon)</p>
                  <p className="text-sm font-medium">45/50 students</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Software Architecture (Wed)</p>
                  <p className="text-sm font-medium">38/42 students</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Research Methods (Thu)</p>
                  <p className="text-sm font-medium">25/30 students</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Student Inquiries</CardTitle>
              <CardDescription>Recent questions from students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Alex T.</p>
                    <p className="text-sm text-muted-foreground truncate max-w-[180px]">
                      Question about final project requirements...
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">30m ago</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Jamie L.</p>
                    <p className="text-sm text-muted-foreground truncate max-w-[180px]">
                      Requesting extension for assignment...
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">2h ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Class Performance</CardTitle>
              <CardDescription>Average performance across modules</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Advanced Database Systems</p>
                    <p className="text-sm text-muted-foreground">74% average</p>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-tut-purple" style={{ width: "74%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Software Architecture</p>
                    <p className="text-sm text-muted-foreground">68% average</p>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-tut-purple" style={{ width: "68%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Research Methods</p>
                    <p className="text-sm text-muted-foreground">81% average</p>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-tut-purple" style={{ width: "81%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Course Material Updates</CardTitle>
              <CardDescription>Latest uploads and modifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-tut-blue pl-4 py-2">
                  <p className="font-medium">Lecture Slides: Database Normalization</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Advanced Database Systems
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Updated 2 days ago</p>
                </div>
                <div className="border-l-4 border-tut-blue pl-4 py-2">
                  <p className="font-medium">Assignment 3: Architecture Patterns</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Software Architecture
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Published 4 days ago</p>
                </div>
                <div className="border-l-4 border-tut-blue pl-4 py-2">
                  <p className="font-medium">Sample Exam Questions</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Research Methods
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Published 1 week ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LecturerDashboard;
