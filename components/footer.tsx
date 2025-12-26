export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-accent border-t border-border/50 glow-shadow-sm">
      <div className="section-container py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center font-bold text-sm shadow-sm">
              SR
            </div>
            <p className="font-semibold text-foreground">Sri Ranjani K</p>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {currentYear} Sri Ranjani K. All rights reserved. • Custom designed portfolio
          </p>
        </div>
      </div>
    </footer>
  )
}
