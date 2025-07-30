import { Suspense } from "react";

export default function NotFoundPage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className="min-h-screen flex items-center justify-center">
				<h1 className="text-2xl font-bold">404 - Not Found</h1>
			</div>
		</Suspense>
	);
}
