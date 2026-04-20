import { Button } from "@/components/ui/button"

export default function ExampleScreen() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Example Generated Screen</h1>
            <p className="text-muted-foreground">This is an example following the DESIGN.md rules.</p>
          </div>
          <Button>Primary Action</Button>
        </div>
        
        {/* Placeholder content */}
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-32 bg-muted rounded-md border flex items-center justify-center text-muted-foreground">
              Stat Card {item}
            </div>
          ))}
        </div>
        
        <div className="mt-8 h-64 bg-muted rounded-md border flex items-center justify-center text-muted-foreground">
          Table / Data View Placeholder
        </div>
      </main>
    </div>
  )
}
