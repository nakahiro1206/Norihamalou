import { useEffect, useState } from "react";
import { fetchWait } from "@/lib/service/supabase";

export const useWaitTime = () => {
	const [wait, setWait] = useState<number | null>(null);
	const [error, setError] = useState<string | null>(null);
	useEffect(() => {
		const init = async () => {
			const result = await fetchWait();
			switch (result.type) {
				case "wait":
					setWait(result.wait_minutes);
					break;
				case "error":
					setError(result.message);
					break;
			}
		};

		init();
	}, []);

	return { wait, error };
};
