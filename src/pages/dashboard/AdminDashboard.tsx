
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AdminDashboard: React.FC = () => {
  const user = {
    name: "Admin User",
    role: "admin",
    avatar: ""
  };

  // Define sidebar links for admin
  const links = [
    { label: "Dashboard", href: "/admin/dashboard" },
    { label: "User Management", href: "/admin/users" },
    { label: "Attendance Monitor", href: "/admin/attendance" },
    { label: "Session Logs", href: "/admin/logs" },
    { label: "FAQ Management", href: "/admin/faqs" },
    { label: "Reports & Analytics", href: "/admin/reports" }
  ];

  return (
    <DashboardLayout user={user} links={links}>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
        <p className="text-muted-foreground">
          Manage users, monitor system activities, and generate reports.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">1,205</CardTitle>
              <CardDescription>Total Users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                <span className="text-green-500">+12</span> since last week
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">854</CardTitle>
              <CardDescription>Active Students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                <span className="text-green-500">82%</span> active rate
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">42</CardTitle>
              <CardDescription>Lecturers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                <span className="text-green-500">100%</span> active rate
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">85</CardTitle>
              <CardDescription>Tutors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                <span className="text-green-500">94%</span> active rate
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>User Activity</CardTitle>
              <CardDescription>Recent logins and activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-b pb-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">John Student</p>
                      <p className="text-sm text-muted-foreground">Logged in, viewed attendance</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">15 min ago</p>
                    </div>
                  </div>
                </div>
                <div className="border-b pb-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Dr. Smith</p>
                      <p className="text-sm text-muted-foreground">Updated course materials</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">45 min ago</p>
                    </div>
                  </div>
                </div>
                <div className="border-b pb-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Sarah Tutor</p>
                      <p className="text-sm text-muted-foreground">Created new tutorial session</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">1 hour ago</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Emma Student</p>
                      <p className="text-sm text-muted-foreground">Submitted assignment</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <CardDescription>Performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Server Load</p>
                    <p className="text-sm text-muted-foreground">24%</p>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: "24%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Database Usage</p>
                    <p className="text-sm text-muted-foreground">56%</p>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-yellow-500" style={{ width: "56%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Storage Capacity</p>
                    <p className="text-sm text-muted-foreground">32%</p>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: "32%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Active Sessions</p>
                    <p className="text-sm text-muted-foreground">178 users</p>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-tut-blue" style={{ width: "42%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent System Alerts</CardTitle>
            <CardDescription>Issues requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start p-2 bg-red-50 rounded-md">
                <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-3">
                  !
                </div>
                <div>
                  <p className="font-medium text-red-800">Database Backup Failed</p>
                  <p className="text-sm text-red-600 mt-1">
                    The scheduled database backup at 02:00 failed to complete. Check logs for details.
                  </p>
                  <p className="text-xs text-red-500 mt-1">3 hours ago</p>
                </div>
              </div>
              <div className="flex items-start p-2 bg-yellow-50 rounded-md">
                <div className="h-8 w-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mr-3">
                  !
                </div>
                <div>
                  <p className="font-medium text-yellow-800">Low Disk Space Warning</p>
                  <p className="text-sm text-yellow-600 mt-1">
                    Storage server is approaching capacity limit (85%). Consider cleanup or expansion.
                  </p>
                  <p className="text-xs text-yellow-500 mt-1">1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
