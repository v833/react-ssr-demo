import React from 'react'

export function Document({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>My App</title>
      </head>
      <body>
        <div id='root' dangerouslySetInnerHTML={{ __html: children }}></div>
        <script src='./main.js'></script>
      </body>
    </html>
  )
}
