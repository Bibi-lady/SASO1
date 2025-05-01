
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TutorDashboard: React.FC = () => {
  const user = {
    name: "Sarah Tutor",
    role: "tutor",
    avatar: ""
  };

  // Define sidebar links for tutor
  const links = [
    { label: "Dashboard", href: "/tutor/dashboard" },
    { label: "Schedule Tutorials", href: "/tutor/schedule" },
    { label: "Student Progress", href: "/tutor/student-progress" },
    { label: "Notify Students", href: "/tutor/notifications" },
    { label: "Manage FAQs", href: "/tutor/faqs" }
  ];

  return (
    <DashboardLayout user={user} links={links}>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Welcome, {user.name}</h2>
        <p className="text-muted-foreground">
          Manage your tutorial sessions and student interactions.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Your scheduled tutorial sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Database Systems</p>
                    <p className="text-sm text-muted-foreground">Room T105</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Today</p>
                    <p className="text-sm text-muted-foreground">15:00-17:00</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Programming Fundamentals</p>
                    <p className="text-sm text-muted-foreground">Computer Lab 3</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Tomorrow</p>
                    <p className="text-sm text-muted-foreground">13:00-15:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Student Attendance</CardTitle>
              <CardDescription>Recent tutorial attendance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p>Database Systems (Mon)</p>
                  <p className="text-sm font-medium">16/20 students</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Programming Fundamentals (Wed)</p>
                  <p className="text-sm font-medium">12/15 students</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Web Development (Thu)</p>
                  <p className="text-sm font-medium">18/22 students</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Student Queries</CardTitle>
              <CardDescription>Recent questions from students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">John D.</p>
                    <p className="text-sm text-muted-foreground truncate max-w-[180px]">
                      Question about SQL joins...
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">1h ago</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Maria S.</p>
                    <p className="text-sm text-muted-foreground truncate max-w-[180px]">
                      Need help with assignment 2...
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">3h ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Schedule a New Tutorial</CardTitle>
              <CardDescription>Create a new tutorial session</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline">Database Systems</Button>
                  <Button variant="outline">Programming Fundamentals</Button>
                  <Button variant="outline">Web Development</Button>
                  <Button variant="outline">Software Engineering</Button>
                </div>
                <Button className="w-full">Create New Session</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Student Progress Overview</CardTitle>
              <CardDescription>Performance in your tutorial groups</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Database Systems Group</p>
                    <p className="text-sm text-muted-foreground">76% average</p>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-tut-purple" style={{ width: "76%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Programming Fundamentals Group</p>
                    <p className="text-sm text-muted-foreground">82% average</p>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-tut-purple" style={{ width: "82%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Web Development Group</p>
                    <p className="text-sm text-muted-foreground">69% average</p>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-tut-purple" style={{ width: "69%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TutorDashboard;
