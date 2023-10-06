export default function placeLayout({ children }) {
    return (
      <html>
        <body>
            <header>
                <div id="h-left">
                    <h1>My-Jeju</h1>
                </div>
                <div id="h-right">
                    
                </div>
            </header>
            {children}
        
        </body>
      </html>
    )
  }
  