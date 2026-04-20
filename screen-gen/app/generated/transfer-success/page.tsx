import { Button } from "@/components/ui/button"
import { X, Check, Heart, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

export default function TransferSuccessScreen() {
  return (
    <div className="min-h-screen bg-muted/20 flex justify-center">
      {/* 
        Mobile constraint container.  
        We use max-w-md to simulate a phone screen, 
        with relative positioning for the fixed bottom button.
      */}
      <main className="w-full max-w-md bg-background relative min-h-screen flex flex-col shadow-sm">
        
        {/* Header - Close Button */}
        <header className="p-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-transparent" aria-label="Close">
            <X className="h-6 w-6" />
          </Button>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-32">
          
          {/* Custom Illustration Mockup */}
          <div className="mb-8 mt-2 relative w-32 h-32">
            {/* Background pill shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/30 to-emerald-400/20 rounded-full -rotate-45 scale-y-50 scale-x-125 translate-x-4 translate-y-4 blur-[2px]"></div>
            
            {/* Green Check Badge */}
            <div className="absolute top-0 right-0 bg-emerald-500 rounded-full p-2 text-white shadow-lg z-10 flex items-center justify-center h-12 w-12">
              <Check className="h-6 w-6 stroke-[4]" />
            </div>
            
            {/* Purple bubble 1 */}
             <div className="absolute top-8 left-12 h-10 w-10 bg-gradient-to-b from-[#a45cf6] to-[#820ad1] rounded-full shadow-inner border border-purple-300/30 z-0 scale-y-90"></div>
            
            {/* Purple bubble 2 */}
            <div className="absolute bottom-4 left-0 h-14 w-14 bg-gradient-to-b from-[#b37ef7] to-[#820ad1] rounded-full shadow-inner border border-purple-300/30 z-0 scale-y-90"></div>
          </div>

          {/* Titles & Amount */}
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground/90">
              Sua transferência foi concluída
            </h1>

            <div>
              <p className="text-4xl font-semibold tracking-tight">R$ 300,00</p>
              <p className="text-[15px] font-medium text-muted-foreground mt-1 tracking-wide">
                Para IVANIZE DE VASCONCELOS
              </p>
            </div>
          </div>

          {/* Details List */}
          <div className="mt-10 flex flex-col">
            <div className="flex justify-between py-4 border-b border-border/50">
              <span className="text-[15px] font-medium">Instituição</span>
              <span className="text-[15px] text-muted-foreground">NU PAGAMENTOS - IP</span>
            </div>
            <div className="flex justify-between py-4 border-b border-border/50">
              <span className="text-[15px] font-medium">Quando</span>
              <span className="text-[15px] text-muted-foreground">Agora</span>
            </div>
          </div>

          {/* Promo Card */}
          <div className="mt-8 bg-[#f5f3ff] rounded-2xl p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#ede9fe] transition-colors">
            <div className="space-y-1.5 flex-1">
              <h3 className="font-semibold text-sm">Proteção completa</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Seguro Vida: proteção completa até para acidentes
              </p>
            </div>
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-[#820ad1]">
              <Heart className="h-5 w-5 fill-current" />
            </div>
          </div>

        </div>

        {/* Fixed Bottom Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-background">
          <Button 
            className="w-full bg-[#820ad1] hover:bg-[#7209b7] text-white rounded-full h-14 text-[15px] font-semibold"
          >
            <FileText className="mr-2 h-5 w-5" />
            Abrir comprovante
          </Button>
        </div>

      </main>
    </div>
  )
}
