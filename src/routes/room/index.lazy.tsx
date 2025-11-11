import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/room/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/room/"!</div>
}
