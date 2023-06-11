import { Suspense } from 'react'
 
export default function Loading() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <p>Cargando...</p>
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <p>Cargando...2</p>
      </Suspense>
    </section>
  )
}