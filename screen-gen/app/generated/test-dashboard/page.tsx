import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Activity,
  ArrowUpRight,
  CreditCard,
  DollarSign,
  MoreHorizontal,
  Plus,
  Search,
  Users,
} from "lucide-react"

export default function DashboardTestScreen() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto p-4 md:p-8 flex flex-col gap-8">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
            <p className="text-muted-foreground text-sm mt-1">
              Here is your financial summary for this month.
            </p>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search overview..."
                className="pl-9 w-full rounded-full bg-muted/50 border-none shadow-none"
              />
            </div>
            <Button className="rounded-full shadow-sm shrink-0 gap-1.5" size="sm">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Add Widget</span>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="shadow-xs border-muted border-t-2 border-t-primary">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">€45,231.89</div>
              <p className="text-xs text-emerald-500 font-medium flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-xs">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Subscriptions
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground mt-1">
                +180 new this week
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xs">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Sales Pipeline
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-emerald-500 font-medium flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +19% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xs">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Now
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground mt-1">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions Table */}
        <Card className="shadow-xs border-muted">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              You have 12 pending transactions this week.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                
                <TableRow>
                  <TableCell className="font-medium text-muted-foreground">INV-2026-00421</TableCell>
                  <TableCell>
                    <div className="font-medium">Sarah Mitchell</div>
                    <div className="text-xs text-muted-foreground">sarah.mitchell@example.com</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="default" className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border-emerald-500/20">Paid</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">Apr 18, 2026</TableCell>
                  <TableCell className="text-right font-medium">€250.00</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0" aria-label="Open menu">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Copy payment ID</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View invoice details</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium text-muted-foreground">INV-2026-00422</TableCell>
                  <TableCell>
                    <div className="font-medium">James O'Brien</div>
                    <div className="text-xs text-muted-foreground">james.obrien@startup.io</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">Processing</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">Apr 19, 2026</TableCell>
                  <TableCell className="text-right font-medium">€1,240.00</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0" aria-label="Open menu">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Copy payment ID</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View invoice details</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium text-muted-foreground">INV-2026-00423</TableCell>
                  <TableCell>
                    <div className="font-medium">Elena Rodriguez</div>
                    <div className="text-xs text-muted-foreground">ero@designstudio.net</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">Draft</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">Apr 19, 2026</TableCell>
                  <TableCell className="text-right font-medium">€850.50</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0" aria-label="Open menu">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit draft</DropdownMenuItem>
                        <DropdownMenuItem>Send invoice</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive focus:text-destructive">Delete invoice</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium text-muted-foreground">INV-2026-00424</TableCell>
                  <TableCell>
                    <div className="font-medium">Marcus Chen</div>
                    <div className="text-xs text-muted-foreground">m.chen@logistics.co</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="destructive">Overdue</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">Apr 15, 2026</TableCell>
                  <TableCell className="text-right font-medium">€3,400.00</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0" aria-label="Open menu">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Send reminder</DropdownMenuItem>
                        <DropdownMenuItem>Apply late fee</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
      </main>
    </div>
  )
}
