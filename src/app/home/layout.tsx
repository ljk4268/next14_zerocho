export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode
}): Promise<Element>{
  return (<div>{children}</div>)
}
