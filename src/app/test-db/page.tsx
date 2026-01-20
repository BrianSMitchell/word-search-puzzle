import { createClient } from '@/utils/supabase/server'

export default async function TestDbPage() {
  const supabase = await createClient()
  const { data, error, count } = await supabase
    .from('analytics_page_views')
    .select('*', { count: 'exact', head: true })

  if (error) {
    return (
      <div className="p-8 font-sans">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Connection Failed</h1>
        <pre className="bg-gray-100 p-4 rounded overflow-auto mb-4">
          {JSON.stringify(error, null, 2)}
        </pre>
        <div className="bg-red-50 p-4 rounded text-red-800">
           <p><strong>Message:</strong> {error.message}</p>
           <p><strong>Code:</strong> {error.code}</p>
           <p><strong>Hint:</strong> {error.hint}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8 font-sans">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Connection Successful</h1>
      <p className="mb-4">
        Connected to Supabase project.
      </p>
      <div className="bg-gray-100 p-4 rounded">
        <p className="font-mono">Table: analytics_page_views</p>
        <p className="font-mono text-xl font-bold mt-2">{count} rows found</p>
      </div>
    </div>
  )
}
