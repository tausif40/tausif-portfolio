import React, { Suspense } from 'react'
import AllProjects from '@/components/AllProjects/AllProjects';

function page() {
	return (
		<Suspense fallback={<div>Loading Projects...</div>}>
			<AllProjects />
		</Suspense>
	)
}

export default page