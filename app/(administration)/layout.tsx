import AuthProvider from '@/components/auth/provider/AuthProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
