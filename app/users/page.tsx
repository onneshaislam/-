import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock user data - replace with actual data fetching logic
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", lastLogin: "2023-06-15 10:30", status: "Online" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", lastLogin: "2023-06-14 15:45", status: "Offline" },
  // Add more mock users
]

export default function UsersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Users</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>User Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-3xl font-bold">{users.length}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Online Users</h3>
              <p className="text-3xl font-bold">{users.filter((user) => user.status === "Online").length}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Offline Users</h3>
              <p className="text-3xl font-bold">{users.filter((user) => user.status === "Offline").length}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>User List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

