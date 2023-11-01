import { useCallback, useEffect, useRef, useState } from "react";

export function useResizeObserver<T extends HTMLElement>() {
	const ref = useRef<T>(null);
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	const callback = useCallback((entries: ResizeObserverEntry[]) => {
		if (entries.length === 0) return;
		const target = entries[0].target;
		setWidth(target.clientWidth);
		setHeight(target.clientHeight);
	}, []);

	const observer = new ResizeObserver(callback);

	useEffect(() => {
		if (ref.current === null) observer.disconnect();
		else observer.observe(ref.current);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref]);

	return {
		ref, width, height
	}
}
